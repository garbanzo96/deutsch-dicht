# Arquitectura

Aplicación estática, sin dependencias ni servicios externos. Funciona al abrir `index.html` y mediante servidor HTTP local. Los scripts clásicos evitan restricciones de módulos/fetch en `file://`.

## Separación
- `data/*.js`: corpus declarativo en `window.DeutschData`.
- `js/core.js`: lógica pura de normalización, evaluación, calendario, selección y validación de respaldo; exportable a Node para pruebas.
- `js/app.js`: navegación, renderizado semántico y eventos; todas las cadenas del corpus y los respaldos se escapan al renderizar.
- `styles.css`: diseño adaptable, foco, tablas y estados.
- `tests/core.test.js`: pruebas de memoria, evaluación, validación y consistencia del corpus.
- `docs/`: pedagogía, decisiones, fuentes, esquema y continuación.

## Persistencia
`localStorage['deutsch-dicht.v1']`. Progreso independiente por ejercicio, lectura y tarjeta/dirección. El calendario almacena fechas absolutas. Respaldos JSON exportables/importables; datos importados validados y campos desconocidos descartados. Ante fallo de almacenamiento se muestra aviso y se continúa en memoria. La aplicación no transmite datos.

## Flujo
La vista Aprender presenta la unidad activa y un mapa completo. Se puede explorar cualquier unidad. Las unidades proponen términos del corpus y enlazan tablas y lectura. Dominio: ≥80 % de ejercicios correctos sin consultar solución. Al dominar una unidad puede continuarse con la siguiente. El repaso incorpora vocabulario de unidades visitadas y tarjetas añadidas manualmente, respeta el límite diario de nuevos y prioriza fallos/vencimientos. Se pueden estudiar ambas direcciones por separado.

## Diseño
Superficie de estudio clara, navegación lateral, tipografía de sistema y alemán destacado en serif. Controles nativos accesibles, tamaños legibles, uso completo con teclado, traducciones bajo demanda. Sin fuentes, analítica, imágenes ni bibliotecas remotas. No requiere cuenta.

## Versión 2: corpus bilingüe y referencia amplia

Los scripts clásicos se cargan en orden: corpus original → conexiones → diccionario → inglés → apoyo de lecciones → apoyo de lecturas → manifiesto de audio → lexicon/i18n/core/audio → app. `reading-support.js` añade ocho textos al corpus; no modifica los originales. Los módulos de lógica siguen exportables a Node mediante UMD.

`lexicon.merge` conserva los IDs originales, evita duplicados de lema/categoría y añade metadatos de fuente/frecuencia/alias; los suplementos didácticos se añaden antes de unir. `buildIndex` crea un mapa de formas a candidatos. `lookup` prioriza mapping exacto sensible a mayúsculas por lectura, mapping contextual normalizado, lema canónico y repertorio revisado. Un lema explícito se resuelve antes que los alias homógrafos. Nunca se eliminan umlauts.

`i18n.project` crea una vista del corpus según ES/EN. El campo heredado `es` pasa a contener el significado visible del idioma seleccionado; la base no cambia. La interfaz usa `t(es,en)` para texto estático y `loc({es,en})` para apoyo bilingüe. Se conservan alemán, índices de opción correcta e IDs. Las respuestas de traducción DE→EN cambian junto con la consigna.

La referencia muestra 50 filas por página. No se activan 35.000 tarjetas al consultar: repertorio = vocabulario explícito de unidades visitadas + palabras identificadas de su lectura principal + añadidos voluntarios. Nuevas por frecuencia de superficie dentro de ese conjunto; repasos vencidos mantienen selección adaptativa. Nombres propios y abreviaturas no se incorporan automáticamente desde lecturas.

La lectura se tokeniza preservando texto, espacios y puntuación. Un botón por palabra permite hover, foco y toque; el panel flotante ofrece glosa contextual, entrada y audio. Navegar requiere elegir el enlace. Audio local en un elemento HTMLAudioElement; síntesis de-DE solo como alternativa cuando falta el clip. La app mantiene una sola reproducción a la vez.

Persistencia conserva `schemaVersion:1` y la clave original. Settings añade language/theme/voice con valores por defecto al cargar versiones anteriores; cards admite cuatro direcciones. No se escriben audios ni diccionario en localStorage. El respaldo conserva referencias por ID y filtra registros desconocidos o inválidos.

El servidor `scripts/serve.py` fija127.0.0.1 y revalida HTML/CSS/JS mediante Cache-Control:no-cache. Audio con nombre hash se conserva como immutable. Los assets de v2 y su URL de apertura tienen query de versión para evitar mezclar una página v1 previamente cacheada; la query no cambia el origen del progreso. Al actualizar archivos en futuras versiones, renovar el identificador de assets/entrada además de conservar revalidación.
