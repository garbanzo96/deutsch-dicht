# Arquitectura (v3.1)

App estática: `index.html` carga scripts clásicos con `defer` (funciona también desde `file://`, aunque la apertura recomendada es el servidor local). Sin dependencias ni compilación.

## Capas

| Capa | Archivos | Responsabilidad |
| --- | --- | --- |
| Datos | `data/course.js`, `data/frequency.js`, `data/units/uNN.js`, `data/grammar/NN-*.js`, `data/readings/*.js`, `data/audio-manifest.js`, `data/dictionary.js` (diferido) | Corpus puro en `window.DD`. Cada unidad empuja su léxico (`DD.lexicon.push`) y registra su contenido (`DD.unit`). |
| Núcleo | `js/core.js` (UMD, probado en Node) | FSRS-6, ritmo adaptativo de nuevas, cola de repaso, evaluación de respuestas, estado v3, validación de respaldos y migración v1. |
| Morfología | `js/morph.js` (UMD) | Expansión de entradas a formas con etiquetas, índice forma → entradas, tokenización reversible, análisis por cláusula (separables), compuestos, numerales, ordinales, multiplicativos, sustantivación. |
| Contenido | `js/content.js` (UMD) | Construye el modelo: unidades ordenadas, léxico sin duplicados, orden del mazo, lecturas (resolución con glosas y preferencia por lo ya estudiado, cobertura), gramática y lecturas recomendadas por unidad. |
| Interfaz | `js/ui.js`, `js/audio.js`, `js/exercise.js`, `js/lookup.js`, `js/views-*.js`, `js/app.js` | Componentes (bloques de lección, tablas, marcas de género/caso), audio, ejercicios, consulta universal de palabras, vistas y arranque/enrutado. |

## Flujo

1. `app.js` construye `App.C = DDContent.build(window.DD, DDMorph)` una vez.
2. El estado se lee de `localStorage['deutsch-dicht.v3']`; si no existe, se migra `deutsch-dicht.v1` (no se borra).
3. Enrutado por hash: `#learn`, `#unit/uNN/(lesson|text|practice)`, `#read/id`, `#grammar/id`, `#dict/id`, `#review`, `#progress`.
4. Tras cada render, `lookup.js` (MutationObserver) envuelve las palabras de todo elemento `[lang=de]` o `.de` en `span.wl`; al tocarlas se analiza la frase completa (para resolver separables) y se muestra el panel compartido de palabra. Las lecturas usan su propio análisis con glosas (`span.w`) y el mismo panel.
5. `audio.js` busca el clip por clave normalizada; si no existe, usa la mejor voz alemana del sistema y lee los separadores como pausas.

## Rendimiento

El análisis de cada párrafo se cachea; el índice de apariciones del diccionario se construye una sola vez. Render típico de una vista: 10–60 ms (la primera visita a una unidad grande, ~200 ms).
