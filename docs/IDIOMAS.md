# Idiomas y contrato de localización

La interfaz permite estudiar con explicaciones en español o inglés. Los textos, ejemplos, formas y respuestas que se practican en alemán conservan el mismo original. El idioma de la explicación es una preferencia de estudio, no un cambio de nivel ni un nuevo registro de progreso.

## Capa de contenido inglés

`data/english.js` agrega `window.DeutschData.english` sin modificar los cuatro conjuntos originales. Debe cargarse **después** de `vocabulary.js`, `grammar.js`, `lessons.js` y `readings.js`; lee sus IDs y filas para conservar exactamente el alemán. No realiza peticiones de red ni utiliza un servicio de traducción.

Cobertura de la edición inicial:

| Conjunto | Registros | Contenido localizado |
| --- | ---: | --- |
| Vocabulario | 252 | significado, notas, género, anotaciones del plural y traducción del ejemplo |
| Gramática | 32 | título, subtítulo, resumen, columnas, celdas explicativas de todas las filas, notas y traducciones de ejemplos |
| Lecciones | 20 | título, objetivo, conceptos, contrastes, ejemplos y ejercicios |
| Ejercicios de lecciones | 140 | instrucciones, explicaciones, pistas, opciones cuando corresponde y respuestas esperadas en inglés |
| Lecturas | 20 | título, categoría, procedencia, derechos, traducción de todos los párrafos, glosario y preguntas |
| Preguntas de lecturas | 40 | pregunta, opciones y explicación; mismo índice correcto |

Estas traducciones son redacción propia para el proyecto. Los dos fragmentos históricos alemanes conservan las fuentes registradas en `FUENTES-TEXTOS.md`; la capa inglesa no reproduce una traducción publicada. El comentario didáctico mantiene su etiqueta de texto original.

## Esquema

Todos los mapas se indexan por el ID del contenido original:

- `vocabulary[id]`: `en`, `noteEn` si hay nota original, `genderEn` si hay género, `pluralEn` si hay plural, `exampleEn`.
- `grammar[id]`: `title`, `deTitle`, `summary`, `columns`, `rows`, `notes`, `examples` (traducciones inglesas, en el mismo orden).
- `lessons[id]`: `title`, `goal`, `concepts`, `examples`, `exercises`.
- `readings[id]`: `title`, `kind`, `source.label`, `source.licenseNote`, `paragraphs`, `glossary`, `questions`.

En `lessons[id].concepts`, el campo heredado `es` contiene **inglés** dentro de esta capa; el nombre conserva compatibilidad con el renderer y no describe el idioma de su valor. `contrast` también está en inglés. Los términos `de` originales se recuperan del conjunto base.

Las listas de `examples`, `paragraphs` y `glossary` contienen cadenas inglesas y deben asociarse por índice con los objetos originales. No reemplazan su componente alemán. Las filas de gramática copian primero el original y sustituyen solamente las celdas o segmentos que necesitan una explicación inglesa.

## Ejercicios y evaluación

El mapa `lessons[id].exercises` usa **ID de ejercicio**, no su posición visual. Cada registro contiene `prompt` y `explanation`; puede añadir `hint`, `options`, `answer` y `accepted`.

- En traducción **hacia alemán**, conservar `answer` y `accepted` alemanes originales. La nueva instrucción plantea la frase de partida en inglés.
- En traducción **desde alemán**, cambiar el destino de la instrucción a inglés y usar el `answer` y las variantes `accepted` inglesas de la capa. Evaluar contra las respuestas del idioma activo.
- En selección con opciones inglesas, conservar el índice `correct` original. La capa proporciona también `answer` como la opción inglesa correspondiente.
- En cloze, conjugación, caso y orden de palabras, conservar las soluciones alemanas. No traducir los tokens alemanes del ejercicio.
- Cambiar de idioma no debe duplicar los IDs de tarjetas o de lecciones ni reiniciar sus registros.

La evaluación textual es necesariamente limitada a las variantes declaradas; una traducción libre válida puede requerir autovaloración o una revisión de las variantes. Ampliar `accepted` con variantes naturales y equivalentes, sin aceptar una traducción que invierta negación, tiempo, referencia o alcance lógico.

## Añadir y mantener contenido

1. Conservar los IDs cuando se corrija un contenido existente.
2. Añadir el registro original y su traducción inglesa en la misma iteración. Las filas compactas de `vocabRows` están ordenadas como `[id, meaning, note, exampleTranslation]`.
3. Los constructores `G`, `L` y `R` generan la forma del contrato. Las ediciones de filas de `G` usan índices de fila y columna del original; si cambia la topología, revisar esos índices antes de publicar.
4. `L` asocia filas de ejercicio con los IDs de la lección original en el mismo orden. Al reordenar o añadir ejercicios, actualizar sus filas inglesas y comprobar el mapa final.
5. Verificar la igualdad de longitudes de tablas, conceptos, ejemplos, párrafos, glosarios y preguntas, además de cobertura de todos los IDs.
6. Revisar en ambos idiomas un ejercicio de selección y una traducción desde alemán: la respuesta esperada y la explicación deben corresponder al idioma activo.
7. Buscar anotaciones españolas en campos mixtos: género, plural, encabezados, notas y etiquetas de procedencia. No aplicar sustituciones automáticas a ejemplos o formas alemanes.
8. La localización de menús, botones, mensajes de progreso y nombres de categorías pertenece a la interfaz. Nuevos módulos bilingües pueden definir su propio esquema, pero deben conservar el mismo principio de alemán original + traducción seleccionada.

Se comprobó la sintaxis del archivo y la cobertura estructural de los conjuntos anteriores. La capa fue redactada y revisada manualmente; los controles estructurales detectan faltantes e índices, pero no sustituyen la revisión lingüística.
