# Progresión v2 / v2 progression

La ruta conserva las 20 unidades y sus identificadores. Añade 46 tablas aplicadas, ocho lecturas puente originales y un mapa de preparación para las 28 lecturas. Cada tabla presenta formas reales, significado y una regla breve en español/inglés; la gramática de referencia conserva sus paradigmas completos.

The path preserves all 20 units and their IDs. It adds 46 applied tables, eight original bridge readings and a preparation map for all 28 readings. Each table presents real forms, meaning and a brief Spanish/English rule; reference grammar retains its complete paradigms.

## Decisión pedagógica / Pedagogical decision

Un tema cotidiano no garantiza una sintaxis inicial: el antiguo texto A1 de presentación incluía `einen kurzen Text`; la rutina incluía `Ihr Kaffee` y `zur Arbeit`; la habitación incluía `auf dem Tisch`. Se conservan como ampliaciones tras estudiar esos fenómenos. U01–U08 tienen ahora lecturas propias cuya gramática depende de la unidad y las anteriores. Las glosas anticipan léxico, no hacen pasar una estructura nueva por aprendida.

An everyday topic does not guarantee beginner syntax: the original A1 introduction included `einen kurzen Text`; the routine included `Ihr Kaffee` and `zur Arbeit`; the room included `auf dem Tisch`. They remain as extensions after those structures have been introduced. U01–U08 now have their own readings, whose grammar depends on the current and earlier units. Glosses introduce vocabulary without pretending a new structure has already been learned.

La comparación elemental se introduce explícitamente en U09 (`besser`, `einfacher`, `schwieriger`, `mehr`); U16 la consolida con referencia temporal. En U04, `möchten` se aprende como patrón cortés explicado como Konjunktiv II de `mögen`, sin exigir todavía dominio general del modo. Los números de hora tienen glosa y enlace a referencia. Las tablas que anticipan dativo/genitivo o pluscuamperfecto marcan la unidad de práctica posterior.

Basic comparison is explicitly introduced in U09 (`besser`, `einfacher`, `schwieriger`, `mehr`); U16 consolidates it with temporal reference. In U04, `möchten` is learned as a politeness pattern identified as Konjunktiv II of `mögen`, without requiring general command of that mood yet. Time numbers have glosses and reference links. Tables previewing dative/genitive or past perfect identify the later practice unit.

U10/U11 y algunas unidades de integración reutilizan una lectura ya accesible para transformarla: activa→pasiva, relato→posibilidad, nominalización→oración o informe→evaluación. Relectura no significa añadir dificultad oculta. Los niveles A1–C1 son etiquetas editoriales; `minUnit` señala preparación sintáctica dentro de esta ruta y no certifica nivel ni obliga a bloquear la lectura.

U10/U11 and some integration units reuse an accessible reading for transformation: active→passive, narrative→possibility, nominalisation→clause or report→assessment. Rereading does not mean hidden difficulty. A1–C1 levels are editorial labels; `minUnit` indicates syntactic preparation within this path and does not certify proficiency or require locking access.

## Lectura principal / Primary reading

| Unidad / Unit | Núcleo / Focus | Lectura principal / Primary reading |
|---|---|---|
| 01 | Presente/V2 · Present/V2 | `reading-unit-01` |
| 02 | Sujeto/objeto · Subject/object | `reading-unit-02` |
| 03 | Pregunta/negación · Questions/negation | `reading-unit-03` |
| 04 | Modal/prefijo · Modal/prefix | `reading-unit-04` |
| 05 | Dativo/espacio · Dative/space | `reading-unit-05` |
| 06 | Perfekt/Präteritum | `reading-unit-06` |
| 07 | Subordinada · Subordination | `reading-unit-07` |
| 08 | Posesión/genitivo/futuro · Possession/genitive/future | `reading-unit-08` |
| 09 | Adjetivo/relativo/comparación · Adjective/relative/comparison | `reading-a1-1` |
| 10 | Pasiva aplicada a observación · Passive applied to observation | `reading-a2-4` |
| 11 | Hipótesis sobre relato previo · Hypothesis about earlier narrative | `reading-a2-1` |
| 12 | Infinitivo/reflexivo/cortesía · Infinitive/reflexive/politeness | `reading-b1-1` |
| 13 | Conectores de argumento · Argument connectors | `reading-b2-1` |
| 14 | Nominalización/participio · Nominalisation/participle | `reading-c1-1` |
| 15 | Discurso referido · Reported speech | `reading-b2-4` |
| 16 | Tiempo/comparación · Time/comparison | `reading-b1-2` |
| 17 | Definición/alcance · Definition/scope | `reading-c1-3` |
| 18 | Covariación/evidencia · Covariation/evidence | `reading-c1-4` |
| 19 | Hipótesis/cautela · Hypothesis/caution | `reading-c1-3` |
| 20 | Integración · Integration | `reading-c1-4` |

Ampliaciones disponibles / Available extensions:

- U08: `reading-a1-2`, `reading-a1-3`, `reading-a1-4`, `reading-a2-1`.
- U09: `reading-a1-1`, `reading-a2-2`, `reading-a2-3`, `reading-a2-4`, `reading-b1-4`.
- U12: `reading-b1-1`, `reading-b1-2`, `reading-b1-3`.
- U13: `reading-b2-1`.
- U14: `reading-b2-2`, `reading-b2-3`, `reading-c1-1`, `reading-c1-2`.
- U15: `reading-b2-4`.
- U17: `reading-c1-3`.
- U18: `reading-c1-4`.

## Contrato de datos / Data contract

- `data/lesson-support.js`: `lessonSupport[unitId]` contiene `overview`, `steps`, `appliedTables`, `primaryReadingId`, `readingSequence`, `prerequisites`, `readingGrammarIds` y `additionalVocabIds`. Todos los textos explicativos son `{es,en}`. / Contains all listed fields; explanatory text uses `{es,en}`.
- `data/reading-support.js`: añade `bridgeReadings` a `readings`, una vez; contiene `readingSupport`, `readingLemmas`, `readingSurfaceLemmas` y `readingVocabulary`. / Appends `bridgeReadings` once and supplies the listed support objects.
- `minUnit` es la preparación acumulativa mínima dentro de la ruta; `grammarIds` identifica estructuras utilizadas. / `minUnit` is the minimum cumulative preparation within this path; `grammarIds` identifies structures used.
- `teachingGlossary` explica el sentido contextual en ES/EN. Incluye léxico filosófico y científico, palabras funcionales y nombres propios explícitamente marcados. / Explains contextual senses in ES/EN, including philosophical/scientific vocabulary, function words and explicitly marked names.
- `readingSurfaceLemmas[readingId][surface]` tiene prioridad sobre la versión en minúsculas. Puede devolver ID curado/importado o lema. / Exact surface mapping has priority over lowercase mapping and may return a curated/imported ID or lemma.
- Nombres propios y `house` inglés son referencias contextuales. No asignarles nivel, género/plural ni frecuencia artificial. / Names and English `house` are contextual references; do not assign artificial levels, morphology or frequency.
- Los 67 suplementos tienen glosas originales y categoría revisada. Los nombres comunes conservan artículo; no se inventan formas principales ni plurales ausentes. / The 67 supplements have original glosses and reviewed categories. Common nouns retain their article; absent principal forms and plurals are not invented.
- `additionalVocabIds` se deriva únicamente de entradas curadas presentes en las lecturas seleccionadas. La interfaz añade las entradas realmente encontradas por lookup; el diccionario entero no se activa automáticamente para repaso. / Derives only from curated entries present in selected readings. The interface adds actually resolved entries; the whole dictionary is not automatically activated for review.

## Homógrafos y formas / Homographs and forms

Mayúsculas y contexto importan: `frage`/`Frage`, `fragen`/`Fragen`, `vorhersagen`/`Vorhersagen`, `stelle`/`Stelle`, `lernen`/`Lernen`. `weiß` es blanco en observación y forma de `wissen` en otras lecturas. `Sie` formal, `sie` singular/plural, `ihr` posesivo/dativo, `sein` verbo/posesivo, `damit` adverbio/conjunción y `zu` preposición/infinitivo/demasiado requieren resolución explícita. El lookup no debe preferir un alias accidental sobre el lema/ID indicado.

Capitalisation and context matter for all listed pairs. `weiß` means white in the observation and is a form of `wissen` elsewhere. Formal `Sie`, singular/plural `sie`, possessive/dative `ihr`, verbal/possessive `sein`, adverbial/conjunctive `damit` and prepositional/infinitival/excessive `zu` need explicit resolution. Lookup must not prefer an accidental alias over the specified lemma/ID.

## Comprobaciones realizadas / Checks performed

Se comprobaron en los datos 20 unidades, 46 tablas con dimensiones consistentes y dos o más por unidad; 28 lecturas con IDs únicos; enlaces gramaticales válidos; preparación de cada lectura principal ≤ unidad que la usa; cobertura de todas las palabras de los párrafos; y lookup efectivo con vocabulario curado, diccionario y suplementos. Se revisaron por separado los homógrafos anteriores y categorías/sentidos de `erhalten`, `bestimmt`, `Menschen`, `einige`, `alle`, `gerade` y `ab`. La prueba de navegador e integración general se documentan en VALIDACION por el agente que las ejecuta.

Data checks covered 20 units, 46 dimensionally consistent tables with at least two per unit, 28 unique reading IDs, valid grammar links, primary reading preparation ≤ its unit, complete paragraph-word coverage and actual lookup with curated vocabulary, dictionary and supplements. The above homographs and categories/senses of the listed additional words were separately reviewed. Browser and overall integration checks are documented in VALIDACION by the agent executing them.

## Fuentes primarias / Primary references

Ejemplos y glosas de esta capa: redacción original. Para verificar reglas se consultó IDS grammis; no se copiaron sus ejemplos de corpus. / Examples and glosses in this layer are original. IDS grammis was consulted to check rules; its corpus examples were not copied.

- [IDS · Flexion der Adjektive](https://grammis.ids-mannheim.de/kontrastive-grammatik/3627): distribución de flexión fuerte/débil y patrón tras `ein`. / Strong/weak inflection and the pattern after `ein`.
- [IDS · Präposition](https://grammis.ids-mannheim.de/terms/view/206): régimen y diferencia entre uso local/direccional. / Government and local/directional usage.
- [IDS · Ersatzinfinitiv](https://grammis.ids-mannheim.de/systematische-grammatik/1615): infinitivo del modal en perfecto con otro infinitivo. / Modal infinitive in perfect constructions with another infinitive.
- [IDS · Satzklammer und Stellungsfelder](https://grammis.ids-mannheim.de/kontrastive-grammatik/4385): campos y posición del auxiliar con Ersatzinfinitiv. / Sentence fields and auxiliary placement with Ersatzinfinitiv.
- [IDS · Indirektheitskontexte](https://grammis.ids-mannheim.de/systematische-grammatik/543): atribución y discurso referido. / Attribution and reported speech.

Fecha de revisión / Review date: 2 de octubre de 2026 / 2 October 2026.

## Reproducción del apoyo

Los generadores se incluyen en `scripts/build-support.js` y `scripts/build-readings.js`. Ejecutar desde cualquier carpeta con Node.js, en ese orden, para regenerar las dos capas de apoyo. La reproducción fue comprobada en una copia: ambos archivos resultantes son idénticos a los datos entregados. Tras modificar lecturas, reconstruir audio y ejecutar todas las pruebas.

Las entradas importadas activadas por una lectura usan su glosa contextual en el repertorio de esa unidad y en las tarjetas; el diccionario conserva sus acepciones amplias. Por ejemplo, `Spanisch` se estudia como idioma y la entrada de referencia puede incluir además sentidos de ajedrez. Consultar el diccionario no cambia la traducción completa de referencia.
