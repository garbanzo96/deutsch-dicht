# Esquema de datos (v3.1)

## Léxico (`DD.lexicon.push({ unit, ext?, words: [...] })`)

Cada entrada es una tupla; el último elemento opcional es un objeto de opciones.

| Tipo | Tupla |
| --- | --- |
| Sustantivo | `['n', 'der Tisch', 'Tische', es, en, opts]` · plural `'—'` = sin plural; `opts.n: 1` declinación n; `opts.gen` genitivo irregular; `opts.adj: 1` adjetivo sustantivado; `opts.plOnly` |
| Verbo | `['v', 'an|rufen', 'ruft an', 'rief an', 'hat angerufen', es, en, opts]` · `|` marca el prefijo separable; `sich` al inicio para reflexivos; `opts.rek` régimen |
| Adjetivo | `['a', 'alt', cmp, sup, es, en, opts]` · `null` = comparación regular; `'—'` = no se compara; `opts.stem`, `opts.decl: 0` invariable |
| Otros | `['adv' | 'prep' | 'conj' | 'pron' | 'part' | 'interj' | 'num' | 'phr' | 'name', lema, es, en, opts]` · `prep: opts.case` (`A`, `D`, `G`, `AD`…); `conj: opts.type` (`sub`, `coord`, `adv`, `two`) |

Opciones comunes: `id` (si no, se deriva del lema), `homonym: 1` (lemas iguales con distinto sentido), `forms: { forma: etiqueta }` (formas adicionales), `note: [es, en]`, `ex: [de, es, en]`, `deck: 0` (no entra al mazo). Un bloque con `ext: true` es vocabulario básico de ampliación: entra al mazo igual, pero se muestra plegado en la lección.

## Unidad (`DD.unit('uNN', {...})`)

`minutes`, `goals[]` (bilingües), `grammar[]` (IDs de temas), `lesson[]` (bloques), `chunks[]` y `examples[]` (`[de, es, en]`), `errors[]` (`[incorrecto, correcto, {es,en}]`), `reading` (ID), `exercises[]`, `summary[]`, `more[]` (opcional; se completa con lecturas de biblioteca `after`).

Bloques: `concept {de, t}`, `table {h, c, r, n}`, `slots {h, c, v, r, n}` (modelo de campos; `v` = columnas verbales), `pairs {h, r:[a, b, glosa?]}`, `formula {f, ex}`, `list {h, cols, r:[de, sig], audio?}`, `letters`, `sounds`, `minimal`, `note {tone: tip|warn|l1, t}`, `examples {r}`, `ref {id, table}` (incrusta una tabla de la gramática). Marcado en celdas alemanas: `[resaltado]`, `{m der}` `{f die}` `{n das}` `{p die}` (género), `{N …}` `{A …}` `{D …}` `{G …}` (caso), `{V …}` (verbo).

Ejercicios (ID automático `uNN-MM`, `ph` 1–3): `choice {q, o, a}`, `rf {q, a}`, `match {pairs}`, `gap {q con ___, a, alt}`, `order {w, a}`, `transform {p, q, a, alt}`, `write {s, a, alt}`, `listen {a}`. Todos llevan `x` (explicación bilingüe).

## Lectura (`DD.readings.push({...})`)

`id`, `kind: 'unit' | 'library'`, `unit` o `after`, `level`, `format: 'dialog' | 'verse'?`, `de/es/en` (títulos), `genre`, `intro`, `focus`, `source {type: 'original' | 'public-domain', author, work, year, note}`, `p: [[de, es, en, hablante?]]`, `gloss: [[palabra, {es,en}]]`, `lemmas?` (forzar lema), `q[]` (preguntas `choice`/`rf`).

## Gramática

`DD.grammarChapters` (11 capítulos) y `DD.grammarTopic(capítulo, [temas])`. Tema: `{ id, level, de, es, en, summary:{es,en}, blocks:[...], examples:[[de, es, en]] }`.

## Estado del alumno (`localStorage['deutsch-dicht.v3']`, `schemaVersion: 3`)

`units {id: {visited, tab}}`, `exercises {id: {correct, assisted, tries, at, helpedAt?, everCorrect?}}`, `cards {clave: {st, s, d, step, reps, lapses, due, last, ivl}}` con claves `w:<id>:r`, `w:<id>:p`, `g:<ejercicio>`; `log [[t, clave, nota, estadoPrevio, ms]]` (≤ 12 000), `readings {id: {read, score}}`, `deck {added, suspended}`, `pace {day, quota, reason, history}`, `daily {día: {new, reviews, exercises, again, ms, production}}`, `settings {language, theme, autoAudio, slowAudio}`. `validateState` filtra IDs desconocidos y valores fuera de rango al importar.

## Audio (`data/audio-manifest.js`)

`window.DD.audio = { voice, maleVoice, rate, clips: { clave: 'audio/<hash>.m4a' }, count }`. Clave = texto visible normalizado (NFC, minúsculas, espacios simples); prefijos `letter:` (nombre de letra) y `m|` (voz masculina).
