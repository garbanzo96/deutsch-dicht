#!/usr/bin/env python3
"""Rebuild the bilingual reference lexicon from pinned, attributed public sources.

Python 3 standard library only. No statistical CEFR assignment or guessed morphology.
The generated JS remains directly usable under file:// without fetch or a build step.
"""
from __future__ import annotations

import argparse
from collections import Counter, defaultdict
from datetime import date
import hashlib
import html
import json
from pathlib import Path
import re
import urllib.request
import xml.etree.ElementTree as ET

PROJECT = Path(__file__).resolve().parents[1]
NS = {"t": "http://www.tei-c.org/ns/1.0"}
SHOW = "{http://www.wikdict.com/ns/1.0}show"
SOURCES = {
    "wikdict-deu-spa.tei": {
        "url": "https://download.wikdict.com/dictionaries/tei/recommended/deu-spa.tei",
        "sha256": "4c6c6a6d7c27a91f9f49dc167478f03bff3fc7a7c186254aaf45b205dcf73196",
    },
    "wikdict-deu-eng.tei": {
        "url": "https://download.wikdict.com/dictionaries/tei/recommended/deu-eng.tei",
        "sha256": "f420b5dfa4f5dc064d13b92a3961b1374c9184734b683330f3be0469e402b536",
    },
    "de_50k.txt": {
        "url": "https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/de/de_50k.txt",
        "sha256": "d9e50546fd7e8b6fe6542a2b33c51d1331092b2a3916ec09f80d97856068705b",
    },
}
CATEGORIES = {
    "n": "sustantivos", "v": "verbos", "adj": "adjetivos",
    "adv": "adverbios", "adverb": "adverbios", "pronominaladverb": "adverbios",
    "conjunction": "conectores", "preposition": "preposiciones",
    "postposition": "preposiciones", "indefinitepronoun": "pronombres",
    "demonstrativepronoun": "pronombres", "particle": "particulas",
    "article": "articulos", "numeral": "numerales", "interjection": "interjecciones",
    "abbreviation": "abreviaturas", "pn": "nombres-propios",
}
GENDERS = {"masc": "m", "fem": "f", "neut": "n"}
ARTICLES = {"m": "der", "f": "die", "n": "das"}
REFERENCE_SOURCE = {
    "label": "WikDict / FreeDict 2025.11.21 · Wiktionary / DBnary",
    "url": "https://www.wikdict.com/page/about",
    "license": "CC BY-SA 4.0",
    "sourceLexiconLicense": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "dictionaryLicense": "https://creativecommons.org/licenses/by-sa/3.0/",
    "frequencyUrl": "https://github.com/hermitdave/FrequencyWords",
    "frequencyLicense": "https://creativecommons.org/licenses/by-sa/4.0/",
}


def clean(text: str | None) -> str:
    return re.sub(r"\s+", " ", html.unescape(text or "")).strip()


def unique(values):
    return list(dict.fromkeys(v for v in values if v))


def read_tei(path: Path):
    """Only merge exact lemma + category; never pivot ES through English."""
    records = {}
    raw_count = 0
    for _, entry in ET.iterparse(path, events=("end",)):
        if entry.tag != "{" + NS["t"] + "}entry":
            continue
        raw_count += 1
        lemma = clean(entry.findtext("t:form/t:orth", namespaces=NS))
        pos = clean(entry.findtext("t:gramGrp/t:pos", default="unknown", namespaces=NS)).lower()
        # Affixes and alphabet names are excluded from word-frequency vocabulary.
        if pos in {"prefix", "suffix", "letter"} or not lemma or len(lemma) > 90:
            entry.clear()
            continue
        if any(ch in lemma for ch in "<>[]{}"):  # malformed markup is not a lemma
            entry.clear()
            continue
        translations = unique(clean("".join(q.itertext())) for q in entry.findall("t:sense/t:cit[@type='trans']/t:quote", NS))
        if not translations:
            entry.clear()
            continue
        category = CATEGORIES.get(pos, "otros")
        key = (lemma, category)
        record = records.setdefault(key, {"lemma": lemma, "category": category, "translations": [], "genders": [], "aliases": [], "principal": [], "pos": []})
        record["translations"] = unique(record["translations"] + translations)
        record["pos"] = unique(record["pos"] + [pos])
        record["genders"] = unique(record["genders"] + [GENDERS[g.text] for g in entry.findall("t:gramGrp/t:gen", NS) if g.text in GENDERS])
        for orth in entry.findall("t:form/t:form[@type='infl']/t:orth", NS):
            form = clean("".join(orth.itertext()))
            if orth.get(SHOW) == "true":
                record["principal"].append(form)
            # Only attested single tokens, or noun forms explicitly preceded by an article.
            # Do not guess regular endings or reverse-engineer unlabelled tense/person tags.
            if category == "sustantivos":
                form = re.sub(r"^(?:der|die|das|den|dem|des) ", "", form)
            if re.fullmatch(r"[^\W\d_]+(?:[-’'][^\W\d_]+)*", form, re.UNICODE):
                record["aliases"].append(form)
        record["principal"] = unique(record["principal"])
        record["aliases"] = unique(record["aliases"])
        entry.clear()
    return records, raw_count


def build(source_dir: Path):
    es, es_raw = read_tei(source_dir / "wikdict-deu-spa.tei")
    en, en_raw = read_tei(source_dir / "wikdict-deu-eng.tei")
    frequencies = {}
    for rank, line in enumerate((source_dir / "de_50k.txt").read_text(encoding="utf-8").splitlines(), 1):
        token, count = line.rsplit(" ", 1)
        frequencies[token] = (rank, int(count))
    result = []
    for key in sorted(es.keys() & en.keys()):
        spanish, english = es[key], en[key]
        lemma, category = key
        rank, count = frequencies.get(lemma.lower(), (None, None))
        item = {
            "id": "dict-" + hashlib.sha256((lemma + "\0" + category).encode()).hexdigest()[:16],
            "de": lemma, "lemma": lemma,
            "es": "; ".join(spanish["translations"]), "en": "; ".join(english["translations"]),
            "category": category, "frequencyRank": rank,
            "referenceOnly": True,
        }
        if count is not None:
            item["frequencyCount"] = count
        # Prefer ES morphology to avoid importing a different English-only homograph.
        genders = spanish["genders"] or english["genders"]
        principal = spanish["principal"] or english["principal"]
        # A same-spelling English-only homograph can have unrelated inflections.
        # Prefer the Spanish record; consult English only when Spanish has none.
        aliases = spanish["aliases"] or english["aliases"]
        if aliases:
            item["aliases"] = [v for v in aliases if v != lemma]
        missing = []
        missing_en = []
        if category == "sustantivos":
            if genders:
                item["gender"] = " / ".join(ARTICLES[g] for g in genders)
            else:
                missing.append("Género no consignado en la fuente.")
                missing_en.append("Gender not supplied by the source.")
            # In WikDict's noun principal forms, the first shown item is the lemma;
            # subsequent items are plural variants. Same-form plurals stay unknown.
            plural = [p for p in principal if p != lemma and re.fullmatch(r"[^\W\d_]+(?:[-’'][^\W\d_]+)*", p, re.UNICODE)]
            if principal and principal[0] == lemma and plural:
                item["plural"] = "; ".join("die " + p for p in plural)
            else:
                missing.append("Plural no identificado; no implica que carezca de plural.")
                missing_en.append("Plural not identified; this does not imply that no plural exists.")
        elif category == "verbos":
            if principal:
                item["forms"] = " / ".join(principal)
                missing.append("Formas destacadas por la fuente (habitualmente 1.ª persona singular); no equivalen a una conjugación completa.")
                missing_en.append("Source's principal forms (usually 1st person singular); not a full conjugation.")
            else:
                missing.append("Formas principales no consignadas.")
                missing_en.append("Principal forms not supplied.")
        elif category == "otros":
            missing.append("Categoría gramatical no especificada en la fuente.")
            missing_en.append("Part of speech not specified by the source.")
        if missing:
            item["note"] = " ".join(missing)
            item["noteEn"] = " ".join(missing_en)
        result.append(item)
    result.sort(key=lambda e: (e["frequencyRank"] is None, e["frequencyRank"] or 0, e["lemma"], e["category"]))
    assert len({r["id"] for r in result}) == len(result)
    assert len({r["lemma"] for r in result}) >= 2000
    assert all(r["es"] and r["en"] for r in result)
    meta = {
        "version": 1, "builtOn": date.today().isoformat(), "edition": "2025.11.21",
        "entryCount": len(result), "distinctLemmas": len({r["lemma"] for r in result}),
        "singleWordLemmas": len({r["lemma"] for r in result if " " not in r["lemma"]}),
        "rankedEntries": sum(r["frequencyRank"] is not None for r in result),
        "sourceRawEntries": {"es": es_raw, "en": en_raw},
        "categoryCounts": dict(Counter(r["category"] for r in result)),
        "frequency": {"label": "OpenSubtitles2018 · FrequencyWords · 50 000 superficies", "url": "https://github.com/hermitdave/FrequencyWords", "license": "CC BY-SA 4.0", "method": "exact lowercase lemma surface; original corpus rank; no lemmatization or inferred CEFR", "surfaceRanks": frequencies},
        "source": REFERENCE_SOURCE,
    }
    return result, meta


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-dir", type=Path, default=PROJECT / "work" / "dictionary")
    parser.add_argument("--output", type=Path, default=PROJECT / "data" / "dictionary.js")
    parser.add_argument("--download", action="store_true", help="Download missing pinned source files (requires internet).")
    args = parser.parse_args()
    args.source_dir.mkdir(parents=True, exist_ok=True)
    for filename, source in SOURCES.items():
        path = args.source_dir / filename
        if not path.exists() and args.download:
            print("Downloading", filename, flush=True)
            urllib.request.urlretrieve(source["url"], path)
        if not path.exists():
            parser.error(f"Missing {path}; provide sources or use --download.")
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        if digest != source["sha256"]:
            parser.error(f"Checksum differs for {filename}: source changed; review edition/license/schema before updating the pinned hash.")
    entries, meta = build(args.source_dir)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    # Compact one entry per line; common provenance attached once to save several MB.
    with args.output.open("w", encoding="utf-8") as output:
        output.write("/* Imported reference lexicon. Attribution, source limitations and rebuild: docs/FUENTES-DICCIONARIO.md. */\nwindow.DeutschData = window.DeutschData || {};\n")
        output.write("window.DeutschData.dictionaryMeta = " + json.dumps(meta, ensure_ascii=False, separators=(",", ":")) + ";\n")
        output.write("window.DeutschData.dictionary = [\n")
        output.write(",\n".join(json.dumps(item, ensure_ascii=False, separators=(",", ":")) for item in entries))
        output.write("\n];\nwindow.DeutschData.dictionary.forEach(entry => { entry.source = window.DeutschData.dictionaryMeta.source; });\n")
    summary = {k: v for k, v in meta.items() if k not in {"frequency", "source"}}
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    print("Output bytes:", args.output.stat().st_size)


if __name__ == "__main__":
    main()
