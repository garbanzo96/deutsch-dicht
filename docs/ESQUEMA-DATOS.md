# Esquema de datos y convenciones

Scripts clásicos asignan arrays a `window.DeutschData`; orden de carga: gramática, vocabulario, lecturas, unidades, relaciones, motor, interfaz. No usar `fetch` ni importaciones ESM sin cambiar la compatibilidad `file://`.

## Gramática
`{id,title,deTitle,level,summary,columns:string[],rows:string[][],notes:string[],examples:{de,es}[]}`. Cada fila tiene tantas celdas como columnas. Paradigmas completos del tema, con condiciones y excepciones en notas. `deTitle`: término alemán; `title`: significado español.

## Vocabulario
`{id,de,es,category,level,gender?,plural?,forms?,note?,example:{de,es}}`.
Categorías: verbos, sustantivos, adjetivos, adverbios, conectores, preposiciones, pronombres, partículas. Los determinantes posesivos/demostrativos se agrupan con pronombres y `kein` con negación; la nota explica la función. Sustantivos: artículo + lema, género explicado y plural completo; indicar falta de plural habitual sin negar usos especializados. Verbos: tercera persona del presente, Präteritum y Perfekt con auxiliar, más régimen y separabilidad cuando importan. Niveles orientativos.

## Unidades
`{id,order,title,level,goal,minutes,grammarIds,vocabIds,readingId,concepts:{de,es,contrast?}[],examples:{de,es}[],exercises:Exercise[]}`. `connections.js` aplica el mapa editorial `vocabByUnit` después de cargar unidades. Todos los 252 términos pertenecen al menos a una unidad. Visitar una unidad activa su repertorio; añadir manualmente también.

`Exercise`: `{id,type,prompt,answer?,accepted?,options?,correct?,tokens?,explanation,hint?}`.
- `type`: translation, cloze, case, conjugation, word-order, comprehension.
- Con opciones: `correct` es índice entero desde 0.
- Respuesta escrita: `answer` canónica, `accepted` variantes adicionales.
- Orden: `tokens` desordenados, `answer` conserva exactamente el multiconjunto de palabras, con puntuación normalizable. Tokens duplicados se distinguen por índice.
- No incluir respuestas igualmente válidas como distractores. Para traducción pedir una estructura específica cuando sea necesaria y enumerar alternativas comunes.

## Lecturas
`{id,title,level,kind,source:{type,label,url?,licenseNote},paragraphs:{de,es}[],glossary:{de,es}[],questions:{prompt,options,answer,explanation}[]}`.
`source.type`: original, public-domain o paraphrase. `answer`: índice desde 0. Las traducciones españolas del corpus son propias. Conservar fuentes históricas/edición/criterio territorial; no insertar traducciones modernas protegidas. `url` solo se enlaza si usa HTTPS.

## Estado v1
Clave: `deutsch-dicht.v1`. `{schemaVersion:1,activeUnit,visited:string[],exercises:{[exerciseId]:{correct,assisted,tries,at,helpedAt?}},cards:{[vocabId:direction]:Card},readings:{[readingId]:true},added:string[],daily:{[YYYY-MM-DD]:{new,reviews,exercises}},settings:{newLimit,direction},reviewCount}`.
`Card`: `{interval,ease,reps,lapses,seen,due,last,retryAfter?}`. Intervalo en días; fechas en milisegundos Unix; `retryAfter` es contador global de respuestas. Direcciones: `de-es` y `es-de`. Los días se calculan en hora local del navegador. Importar filtra IDs desconocidos/campos inválidos; incompatible schemaVersion se rechaza. `helpedAt` conserva la fecha de la última solución consultada; reintentar no prolonga el plazo de ayuda. Los respaldos antiguos sin ese campo siguen admitidos, usando `at` en ejercicios asistidos. No se guardan respuestas libres ni datos personales.

## Convenciones
IDs ASCII, estables y únicos; unit-01…unit-20; u01-e1…; noun-haus; cases; reading-a1-1. UTF-8; alemán estándar y traducción natural en español. Explicar todo tecnicismo alemán cuando aparece por primera vez. No reemplazar `ä` por `a`, `ö` por `o`, `ü` por `u` ni `ß` por `ss` como equivalencia del evaluador. UI semántica, cadenas escapadas y ninguna dependencia remota.

## Adiciones v2 (compatibles con schemaVersion 1)

- `settings.language`: `es|en`; `theme`: `light|dark`; `voice`: nombre de voz o vacío. Valores antiguos reciben `es/light/automática`.
- `cards` admite `id:de-es`, `id:es-de`, `id:de-en`, `id:en-de`. `settings.direction` conserva los dos valores antiguos como orientación; la interfaz los combina con language. Ejercicios/dominio se comparten porque evalúan las mismas estructuras alemanas; calendarios de tarjetas son independientes.
- Entrada importada: `id, de, lemma, es, en, category, gender?, plural?, forms?, note, noteEn, aliases[], frequencyRank|null, frequencyCount|null, source`. IDs hash de lema exacto+categoría; ausencia de forma no significa inexistencia lingüística. No se inventa CEFR.
- `dictionaryMeta`: fuentes/versiones/hashes, licencia, recuentos y `frequency.surfaceRanks[normalisedSurface]=[rank,count]`.
- `english`: mapas vocabulary/grammar/lessons/readings por ID original; contiene traducciones y respuestas inglesas. German examples intactos; algunas etiquetas mixtas `de` cambian solo su glosa.
- `lessonSupport[unitId]`: overview/steps bilingües, appliedTables con title/columns/rows/note, primaryReadingId, readingSequence[], prerequisites[], readingGrammarIds[], additionalVocabIds[]. Celdas: alemán literal o `{es,en}`.
- `readingSupport[readingId]`: minUnit, grammarIds[], intro bilingüe, teachingGlossary[] (`de,es,en,lemma` y marca contextual opcional).
- `readingVocabulary[]`: glosas suplementarias de autor; ID estable, lema y ES/EN, categoría, alias, artículo cuando está revisado, procedencia original. Se incorporan como referencia; nombres propios no entran automáticamente en repaso.
- `readingLemmas[readingId][lowercaseSurface]`: ID o lema esperado. `readingSurfaceLemmas` usa superficie exacta para distinguir Sie/sie y Deutsch/deutsch. No usar una entrada de preposición para un prefijo separable contextual.
- `audio`: `{voice,locale,rate,synthetic,clips:{normalisedSurface:path},count,sourceScope}`. Clips fuera del almacenamiento de progreso; ruta local AAC/M4A.

El campo visible `es` en una proyección EN contiene inglés por compatibilidad con los renderizadores; conservar la base bilingüe intacta y no exportar esa proyección como corpus español. El número de entradas tras la unión difiere del archivo importado, porque se conservan entradas didácticas y se evitan duplicados por lema/categoría.
