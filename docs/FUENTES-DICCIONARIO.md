# Diccionario bilingüe de referencia y frecuencia

Importación realizada el **2 de octubre de 2026**. El repertorio didáctico original de 252 entradas conserva sus identificadores en `data/vocabulary.js`. `data/dictionary.js` añade una referencia amplia, independiente del calendario de lecciones; consultar una entrada no equivale a introducirla automáticamente en el curso.

## Alcance verificable

| Medida | Resultado |
| --- | ---: |
| Entradas de referencia, por lema + categoría | 34 933 |
| Lemas distintos, conservando mayúsculas | 34 837 |
| Lemas de una sola palabra | 33 292 |
| Entradas con rango de frecuencia disponible | 14 183 |
| Sustantivos con género consignado | 24 526 |
| Sustantivos con plural identificado | 16 398 |
| Verbos con formas principales de la fuente | 4 119 |

Todas las entradas importadas tienen lema alemán y significado en **español e inglés**. Es el conjunto amplio que comparten las dos fuentes tras el filtro descrito abajo. No es «todo el diccionario alemán»: faltan lemas presentes en una sola dirección, voces recientes y acepciones que las fuentes no recogen. No se asignaron niveles A1–C1 estadísticos a palabras importadas.

## Fuentes y atribución

**Léxico:** [WikDict](https://www.wikdict.com/page/about), mantenido por **Karl Bartel**, a partir de las contribuciones de **Wiktionary** extraídas mediante **DBnary**, con estructura TEI de **FreeDict**. La fuente declara **[CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/)** en sus cabeceras. Se usaron estas dos descargas, cuya edición interna es **2025.11.21**:

- [Alemán → español, TEI recomendado](https://download.wikdict.com/dictionaries/tei/recommended/deu-spa.tei): 36 744 registros originales.
- [Alemán → inglés, TEI recomendado](https://download.wikdict.com/dictionaries/tei/recommended/deu-eng.tei): 71 766 registros originales.
- [Wiktionary, autores y fuentes de las entradas](https://www.wiktionary.org/).
- [DBnary, proyecto de extracción](https://kaiko.getalp.org/about-dbnary/).

**Frecuencia:** [FrequencyWords](https://github.com/hermitdave/FrequencyWords), de **Hermit Dave**, a partir del corpus **OpenSubtitles2018**. Su README declara **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)** para el contenido; MIT corresponde al código de ese proyecto. Se empleó [la lista alemana de 50 000 superficies](https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/de/de_50k.txt). El formato conserva palabra, posición y número de ocurrencias.

**Cambios realizados:** selección de lemas con traducciones directas en ambos idiomas; unión por lema y categoría; traducciones repetidas eliminadas; agrupación de variantes morfológicas; categorías normalizadas a español; identificadores nuevos estables; adición de rangos del corpus y notas sobre datos ausentes. Las traducciones no se obtuvieron traduciendo mecánicamente del inglés al español.

La **adaptación de datos importados** en `data/dictionary.js` se distribuye bajo **[CC BY-SA 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/)**, conservando las atribuciones y las licencias originales indicadas. CC BY-SA 3.0 contempla versiones posteriores con los mismos elementos para adaptaciones (sección 4(b)). Este aviso corresponde al archivo de datos importados y no cambia por sí mismo la licencia del código o del material didáctico original. Al redistribuir esos datos, conserva este documento, la atribución integrada y el enlace de licencia.

## Cómo se ordena la frecuencia

`frequencyRank` es la **posición original de la superficie del lema, pasada a minúsculas**, en esa lista de subtítulos. `frequencyCount` conserva el número de ocurrencias correspondiente. Se mantiene `null` cuando no hay coincidencia; no se inventa un rango. Los lemas sin coincidencia aparecen después de los que sí tienen rango, en orden alfabético.

Ejemplo: `Haus` utiliza la superficie `haus`, rango **255**, **70 976** ocurrencias. `sein` utiliza `sein`, rango **56**, **440 142** ocurrencias; las formas `ist`, `bin` y `war` no se suman a ese resultado. No hay lematización estadística ni estimación global del uso de todos los sentidos del verbo.

Los subtítulos representan especialmente conversación y narración audiovisual; no son una medida universal de alemán académico, prensa o conversación espontánea. Su normalización pierde distinciones de mayúsculas y polisemia: `Ich` (el yo) e `ich` (yo) comparten superficie; `MIT` y `mit` también. Por ello el rango **no estima la frecuencia de cada acepción**. Los valores pueden empatar entre entradas con la misma superficie.

`dictionaryMeta.frequency.surfaceRanks` contiene los pares `[rango, ocurrencias]` originales para incorporar esta misma prioridad a las entradas didácticas sin alterar sus IDs. La frecuencia ayuda a elegir repertorio; las relaciones gramaticales y los prerrequisitos siguen determinando el orden de las lecciones.

## Morfología y límites editoriales

- **Género:** se conserva el dato de la fuente; `der`, `die`, `das` o alternativas. Su ausencia se indica; no se deduce por el sufijo. Un lema con varios géneros puede agrupar sentidos diferentes.
- **Plural:** se conservan las formas nominales principales destacadas mediante `wikdict:show="true"`, después del lema. Cuando no se identifica un plural separado, la nota lo dice: esto no significa «sin plural». Plurales idénticos al singular y nombres de masa necesitan revisión individual antes de usarse en ejercicios.
- **Verbos:** las formas principales importadas suelen ser **1.ª persona singular de presente, pasado y perfecto**, por ejemplo `denke / dachte / habe gedacht`. La nota identifica esa convención; no debe confundirse con la 3.ª persona usada en el corpus didáctico original.
- **Categorías:** se preserva el tipo de palabra que la fuente proporciona. La categoría `otros` significa que no lo especifica; no es una clasificación lingüística positiva. Afijos y nombres de letras se excluyeron. Las abreviaturas, nombres propios y locuciones útiles permanecen separados.
- **Alias:** son formas flexionadas efectivamente presentes en la fuente. En sustantivos se retira el artículo de formas como `den Häusern` para permitir buscar `Häusern`. Se da prioridad a la morfología de la dirección española y se recurre a la inglesa si falta. No se generan terminaciones por conjetura. Una forma puede corresponder a varios lemas; la búsqueda debe priorizar coincidencia literal y el léxico didáctico revisado.
- **Acepciones:** la fuente puede mezclar usos generales, regionales, técnicos o históricos bajo un lema. La lista breve de traducciones conserva esas posibilidades; no afirma equivalencia de cada traducción en cualquier contexto. No se realizó una revisión humana de las 34 933 entradas. El repertorio de las lecciones, con ejemplos y régimen, tiene una revisión editorial distinta.
- **Pronunciación:** no se importaron automáticamente todas las transcripciones fonéticas, porque algunas listas de la fuente agrupan pronunciaciones de formas distintas. La voz de la app se gestiona aparte del diccionario.

## Reproducir y ampliar

Desde la carpeta del proyecto, con Python 3 y conexión a internet únicamente para las descargas:

```sh
python3 scripts/import-dictionary.py --download --source-dir work/dictionary
```

Las fuentes originales se guardan en `work/dictionary`, y el resultado estático en `data/dictionary.js`. Después de la importación, la app funciona sin consultar estas fuentes en red. El importador usa solo la biblioteca estándar de Python y comprueba los hashes **SHA-256 fijados**. Si una fuente cambia, se detiene: inspeccionar versión, estructura, licencia y calidad antes de actualizar el hash.

| Archivo fuente | SHA-256 |
| --- | --- |
| `wikdict-deu-spa.tei` | `4c6c6a6d7c27a91f9f49dc167478f03bff3fc7a7c186254aaf45b205dcf73196` |
| `wikdict-deu-eng.tei` | `f420b5dfa4f5dc064d13b92a3961b1374c9184734b683330f3be0469e402b536` |
| `de_50k.txt` | `d9e50546fd7e8b6fe6542a2b33c51d1331092b2a3916ec09f80d97856068705b` |

Los IDs `dict-…` se derivan de **lema exacto + categoría**, con SHA-256 truncado a 16 caracteres; se comprueban colisiones. El importador comprueba un mínimo de 2 000 lemas distintos y significados no vacíos en ambos idiomas. Una actualización que cambie categoría puede cambiar un ID: revisar migración antes de convertir entradas importadas en tarjetas persistentes.

**Validación realizada:** reconstrucción a partir de las fuentes fijadas; sintaxis JavaScript; carga completa en un contexto de navegador simulado; unicidad de IDs; campos DE/ES/EN, categorías, fuentes y rangos; muestras de formas de `Haus`, `Band`, `Mann`, `denken`, `sein`, `Universität` y `Gedächtnis`. Esta validación demuestra integridad de importación, no una auditoría lingüística individual de todo el repertorio.
