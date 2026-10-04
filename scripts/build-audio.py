#!/usr/bin/env python3
"""Genera los clips de audio locales de Deutsch Dicht con las voces alemanas de macOS.

- Textos: scripts/audio-texts.js (todo lo que la app puede reproducir: lemas, formas, ejemplos,
  frases de las lecturas, gramática, nombres de letras).
- Voz femenina: la mejor instalada (Anna Premium/Enhanced, Petra, Helena… o Anna).
- Voz masculina (diálogos): solo si hay una voz masculina de calidad (Premium/Enhanced) instalada;
  si no, todo se genera con la voz femenina (una sola voz, pero buena).
- Separadores (– / · →) → pausas de 380 ms; nunca se leen.
- Incremental: el nombre del archivo es un hash de voz + velocidad + texto; lo existente se reutiliza.
- Seguridad: solo argv (nunca shell), texto vía archivo temporal, como máximo 4 procesos.

Uso: python3 scripts/build-audio.py [--limit N] [--workers 4] [--prune] [--dry-run]
"""
from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import date
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
import time

PROJECT = Path(__file__).resolve().parents[1]
AUDIO = PROJECT / "audio"
MANIFEST = PROJECT / "data" / "audio-manifest.js"
RATE = 160
PAUSE = " [[slnc 380]] "
FEMALE = ["Anna (Premium)", "Anna (Enhanced)", "Petra (Premium)", "Petra (Enhanced)", "Helena (Premium)", "Helena (Enhanced)", "Anna"]
MALE = ["Markus (Premium)", "Markus (Enhanced)", "Yannick (Premium)", "Yannick (Enhanced)", "Viktor (Premium)", "Viktor (Enhanced)"]


def installed_voices() -> set[str]:
    out = subprocess.run(["/usr/bin/say", "-v", "?"], check=True, capture_output=True, text=True).stdout
    names = set()
    for line in out.splitlines():
        if "de_DE" not in line:
            continue
        names.add(line.split("de_DE")[0].strip())
    return names


def pick(preference: list[str], available: set[str]) -> str | None:
    return next((v for v in preference if v in available), None)


def load_items() -> list[dict]:
    node = shutil.which("node")
    if not node:
        raise SystemExit("Se necesita Node.js para leer el corpus.")
    out = subprocess.run([node, str(PROJECT / "scripts" / "audio-texts.js")], check=True, capture_output=True, text=True).stdout
    return json.loads(out)


def clip_name(voice: str, text: str) -> str:
    return hashlib.sha1(f"{voice}|{RATE}|{text}".encode("utf-8")).hexdigest()[:24] + ".m4a"


def synthesize(voice: str, text: str, target: Path) -> None:
    with tempfile.TemporaryDirectory() as tmp:
        src = Path(tmp) / "text.txt"
        aiff = Path(tmp) / "clip.aiff"
        src.write_text(text, encoding="utf-8")
        subprocess.run(["/usr/bin/say", "-v", voice, "-r", str(RATE), "-f", str(src), "-o", str(aiff)], check=True, capture_output=True)
        part = target.with_suffix(".part.m4a")
        subprocess.run(["/usr/bin/afconvert", "-f", "m4af", "-d", "aac", "-b", "32000", "-c", "1", str(aiff), str(part)], check=True, capture_output=True)
        part.replace(target)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--prune", action="store_true", help="borra clips de audio/ que ya no usa el manifiesto")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    available = installed_voices()
    female = pick(FEMALE, available)
    male = pick(MALE, available)
    if not female:
        raise SystemExit("No hay ninguna voz alemana (Anna) instalada.")
    items = load_items()
    if not male:
        items = [x for x in items if x["voice"] != "m"]
    AUDIO.mkdir(exist_ok=True)

    clips: dict[str, str] = {}
    todo: list[tuple[str, str, Path]] = []
    for item in items:
        voice = male if item["voice"] == "m" else female
        text = PAUSE.join(item["speak"])
        name = clip_name(voice, text)
        clips[item["key"]] = f"audio/{name}"
        target = AUDIO / name
        if not target.exists():
            todo.append((voice, text, target))
    seen = set()
    todo = [t for t in todo if not (t[2] in seen or seen.add(t[2]))]
    if args.limit:
        todo = todo[: args.limit]
    print(f"Voz: {female}" + (f" · masculina: {male}" if male else " · sin voz masculina de calidad (todo con una voz)"))
    print(f"{len(items)} textos · {len(set(clips.values()))} clips · {len(todo)} por generar")
    if args.dry_run:
        return

    start, done, failed = time.time(), 0, []
    with ThreadPoolExecutor(max_workers=max(1, min(4, args.workers))) as pool:
        futures = {pool.submit(synthesize, v, t, p): (v, t, p) for v, t, p in todo}
        for fut in as_completed(futures):
            v, t, p = futures[fut]
            try:
                fut.result()
            except subprocess.CalledProcessError as exc:
                failed.append((t, exc.stderr.decode("utf-8", "replace")[:200] if exc.stderr else str(exc)))
            done += 1
            if done % 200 == 0 or done == len(todo):
                rate = done / max(1e-6, time.time() - start)
                print(f"  {done}/{len(todo)} · {rate:.1f}/s · faltan ~{(len(todo) - done) / max(rate, 1e-6) / 60:.1f} min", flush=True)

    present = {k: v for k, v in clips.items() if (PROJECT / v).exists()}
    data = {
        "version": 4, "voice": female, "maleVoice": male, "locale": "de-DE", "rate": RATE, "synthetic": True,
        "format": "AAC 32 kbps mono (M4A)", "builtOn": date.today().isoformat(),
        "count": len(present), "files": len(set(present.values())), "clips": present,
    }
    header = ("/* Clips de pronunciación sintéticos locales (macOS, de-DE). Generado por scripts/build-audio.py; no editar a mano.\n"
              "   Claves: texto visible normalizado (js/audio.js · norm). Prefijos: «letter:» nombre de letra, «m|» voz masculina. */\n")
    MANIFEST.write_text(header + "window.DD = window.DD || {};\nwindow.DD.audio = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n", encoding="utf-8")
    print(f"Manifiesto: {len(present)} claves · {data['files']} archivos")
    if failed:
        print(f"{len(failed)} fallos, p. ej.: {failed[:3]}")

    if args.prune:
        used = {Path(v).name for v in present.values()}
        removed = 0
        for f in AUDIO.glob("*.m4a"):
            if f.name not in used:
                f.unlink()
                removed += 1
        print(f"Eliminados {removed} clips sin uso")


if __name__ == "__main__":
    main()
