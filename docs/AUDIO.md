# Audio

> **Versión pública (GitHub Pages):** no incluye los clips. `data/audio-manifest.js` está vacío a propósito y la app usa la mejor voz alemana del navegador, con las mismas reglas de pausas y letras. Los clips de las voces de macOS no se redistribuyen (licencia de macOS, §2F). Lo que sigue describe la instalación personal, donde `scripts/build-audio.py` genera los clips localmente.

## Qué hay

9 151 clips AAC mono 32 kbps (≈ 109 MB) generados con la voz **Anna** de macOS (de-DE): lemas (con artículo en sustantivos), formas que aparecen en los textos, ejemplos, Redemittel, errores corregidos, dictados, todas las frases de las 58 lecturas, ejemplos de gramática y nombres de letras. Son voces sintéticas, no grabaciones.

## Reglas de lectura

- **Separadores**: « – », « — », « / », « · », « → », «|» y la barra entre palabras (*der/die*) se convierten en pausas de 380 ms; nunca se pronuncian.
- **Letras**: los nombres se sintetizan con grafía fonética (A → «Aah», N → «Enn», S → «Ess», R → «Ärr», ß → «Esszett»…) para que el sintetizador no los lea como palabras (*en*, *es*, *er*). Claves `letter:<nombre>`.
- **Voz única**: no hay selector. Sin clip, la app usa la mejor voz alemana del sistema (Anna si está; si no, otra voz de-DE local o de red), también con pausas.
- **Diálogos**: si hay instalada una voz masculina de calidad (Markus, Yannick o Viktor «Premium/Enhanced»), `build-audio.py` genera además clips `m|…` para los hablantes masculinos (`DD.speakers` en `data/course.js`) y el lector los usa automáticamente. En este equipo solo hay Anna de calidad, así que todo usa una voz.

## Generar

```sh
node scripts/audio-texts.js --stats      # cuántos textos hay por tipo
python3 scripts/build-audio.py --dry-run # cuántos clips faltan
python3 scripts/build-audio.py           # genera solo lo nuevo (4 procesos, ~2,4 clips/s)
python3 scripts/build-audio.py --prune   # además borra clips que ya no usa el manifiesto
```

El nombre de cada archivo es un hash de voz + velocidad + texto: regenerar es incremental y determinista. El script usa solo `say` y `afconvert` del sistema mediante argumentos (sin shell) y pasa el texto por archivo temporal.
