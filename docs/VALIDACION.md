# Validación v2 — 2 de octubre de 2026

**19 grupos de pruebas automáticas aprobados** (`node --test tests/*.test.js`). Versión entregada: 20 unidades / 140 ejercicios; 32 tablas generales + 46 aplicadas; 28 lecturas; 252 entradas originales + 67 glosas suplementarias + 34.933 importadas, unidas sin duplicados por lema/categoría en **35.036 entradas**; **2.544 audios locales**.

## Integridad y revisión

- IDs, relaciones, tablas rectangulares, respuestas y seis tipos de ejercicios comprobados. Todos los tokens de las 28 lecturas tienen destino léxico y clip local.
- Inglés completo: 252 entradas originales, 32 tablas con notas/filas/ejemplos, 20 unidades y 140 ejercicios, 20 lecturas originales y 40 preguntas; puentes y apoyo nacen bilingües. Se corrigieron siete glosas españolas en etiquetas mixtas. Modelos DE→EN y variantes inglesas validados.
- Regresiones añadidas para selección vacía (null/empty no aprueba opción0), apóstrofos rectos/curvos ingleses equivalentes y ayuda con timestamp fijo.
- Consulta léxica: forma flexionada, prioridad del lema canónico antes que alias, mayúsculas contextuales y repertorio revisado. Se corrigieron entre otros einen/ein, besucht/besuchen, weiß/wissen/blanco, fragen/Frage, erhalten, bestimmt, Menschen, vorhersagen, alle, damit, zu y prefijos auf/an.
- Respaldos anteriores conservan progreso y adquieren defaults ES/claro; EN y ES mantienen calendarios separados. Nuevas por rango dentro del conjunto activo, repasos adaptativos y límite diario compartido.
- Generadores pedagógicos ejecutados en una copia: ambos resultados idénticos a los archivos entregados. Importación con fuentes fijadas y hashes documentados.
- Audios: todos verificados con duración positiva, formato AAC y rutas válidas; 21.688.702 bytes totales. Dos síntesis vacías se regeneraron y comprobaron antes del manifiesto final.

## Pruebas en navegador integrado

En puerto de pruebas8766, separado del progreso habitual8765:

- ES→EN→ES; claro→oscuro→claro; preferencias conservadas tras recarga. Traducciones, menús, tablas, ejemplos y consignas revisados.
- Unidad01: respuesta alemana correcta y DE→EN «We're here.» aceptada. Tablas generales y paradigmas aplicados visibles; repertorio muestra glosa contextual de Spanisch/Englisch, sin exigir acepciones ajenas a la lectura.
- Diccionario: filtro de primeras2.000 devuelve2.000 entradas, paginación50 y página2/40; búsqueda de Häusern encuentra Haus con plural Häuser. Entrada→volver a lectura comprobado.
- Lectura puente: traducción visible/oculta, popup de komme→kommen con significado ES/EN y enlace; consulta fijada al seleccionar evita que desaparezca al usar audio. Enter abre el panel y Escape lo cierra devolviendo foco a la palabra.
- Audio de komme: archivo local cargado, duración0,603719s, reproducción hasta currentTime=duration, ended=true, sin error. No se infiere auditoría fonética de todo el repertorio a partir de esta prueba.
- Repaso EN→DE: mostrar respuesta, valorar Again, nueva tarjeta y contadores conservados tras recarga; separación de calendarios comprobada también por el motor.
- Diseño a1280px y390px, ambos temas. En390px, clientWidth=scrollWidth=390. Se corrigió el fondo móvil del mapa en oscuro; texto y paneles revisados visualmente. Popup cabe dentro del viewport; tablas mantienen scroll propio.
- Consola sin errores/avisos de ejecución en el recorrido final. Captura: `docs/vista-v2.jpg`.

## Límites

La referencia importada no tiene auditoría docente de cada entrada; conserva sentidos generales, regionales e históricos de la fuente. El curso y las glosas tienen revisión distinta. El orden usa frecuencia de superficie en subtítulos, no frecuencia universal agregada por lema. La pronunciación es sintética y necesita revisión contextual de homógrafos/nombres; otras palabras del diccionario dependen de una voz de-DE disponible.

Pruebas de interfaz en navegador integrado; no hay matriz de Safari/Chrome/Firefox ni ensayo en dispositivos físicos/lectores de pantalla. HTTP local probado; file:// no probado por restricciones del navegador integrado. LocalStorage puede alcanzar cuota con repertorios muy grandes: se avisa y permite exportar; IndexedDB sigue en backlog. La ruta no certifica C1 ni el calendario ha sido calibrado individualmente.

---

# Registro inicial v1 — 2 de octubre de 2026

## Corpus y lógica
10 grupos de pruebas automáticas aprobados con Node.js. Comprobaron IDs únicos; referencias unidad–tabla–vocabulario–lectura; filas rectangulares; formas requeridas en sustantivos/verbos; respuestas/opciones válidas; conservación de todos los tokens/frases de orden; cobertura de los seis tipos; 20 unidades, 140 ejercicios, 252 términos y 20 lecturas.

La revisión final corrigió tres condiciones de borde: el plazo de ayuda conserva su timestamp original aunque se reintente; los filtros del lector excluyen el texto fuera del filtro; un fallo no revela la explicación/solución hasta solicitarla.

Motor: variantes de respuesta y distinción umlaut/ß; dominio sin ayuda y recuperación posterior; fallos de 1 minuto y reaparición tras dos respuestas; aumento de intervalos; límites de facilidad; límite local diario; calendario separado por dirección; mezcla 4:1; activación por unidades; importación filtrada y rechazo de esquemas inválidos.

## Uso real en navegador integrado
- Recorrido de una unidad completa: traducción DE/ES, cloze incorrecto y corregido, artículo/caso, conjugación, tokens de orden y comprensión. Dominio 7/7 visible y conservado al recargar.
- Tarjeta fallada: reapareció tras dos valoraciones de otras tarjetas. Intervalos de las cuatro respuestas visibles y límite de nuevos=0 respetado. Cambio de dirección probado.
- Búsqueda de tabla adjetival, paradigma completo y filtro de vocabulario «Bewusstsein». Añadir término al repertorio confirmado.
- Lectura A1: traducción revelada, comprensión corregida y lectura guardada. Lectura Kant: cita y comentario separados, enlace/procedencia visibles.
- Respaldo JSON descargado y verificado; importado mediante selector de archivos y confirmación dentro de la app. El resultado mostró «Respaldo importado» y preservó unidades/lecturas.
- Progreso, actividad y enlaces de retorno revisados. No aparecieron errores de ejecución en la consola durante esos recorridos.
- Diseño revisado a 1280 px y 390 px. En 390 px, document.scrollWidth = innerWidth = 390; las tablas anchas conservan desplazamiento dentro de su contenedor. Se corrigió una expansión de tablas en grids anidados para mantener el desplazamiento dentro de la tabla.

## Revisión lingüística
Revisión inicial y revisión independiente de unidades, respuestas, paradigmas, régimen y traducciones. Se corrigieron dos prompts ambiguos, se añadieron variantes de traducción/orden, se explicaron condiciones gramaticales necesarias antes de evaluar y se amplió el léxico que usan los ejercicios. Correcciones de lectura: erinnern reflexivo, traducción interrogativa de ob y coherencia de narración presente.

Las fuentes históricas de Kant/Hegel se contrastaron con sus páginas; el uso se documenta para Chile. Wittgenstein es una paráfrasis original explícita. Fuentes de reglas: IDS/grammis y ortografía oficial, documentadas en FUENTES-GRAMATICA.md.

## Límites de esta validación
No es una evaluación docente externa ni una certificación MCER. Las pruebas de estructura no demuestran por sí solas naturalidad lingüística. La validación de interfaz se realizó en el navegador integrado; no se ha hecho una matriz completa de Safari/Chrome/Firefox, lectores de pantalla ni dispositivos físicos. La apertura directa file:// no se probó: el navegador integrado solo admite HTTP/HTTPS. La ruta HTTP local sí se verificó; los scripts clásicos permiten la apertura directa en navegadores normales, pero esa compatibilidad queda pendiente de prueba en ellos. El calendario no está calibrado empíricamente para este usuario. No se verificó imposibilidad de quota de localStorage en todos los navegadores; existe aviso/fallback en el código.

## Comprobación de entrega v2

La copia del Escritorio se verificó por SHA-256 contra todos los archivos de la entrega. Al abrir la dirección anterior, el navegador conservó HTML v1 y lo mezcló con código v2; se corrigió con `scripts/serve.py` (revalidación de código) y assets/entrada `?v=2`. Confirmado HTTP 200 con Cache-Control:no-cache para HTML y cache immutable para audio hash. La apertura definitiva desde el Escritorio muestra lecciones, tablas y switches ES/EN/tema, sin errores de consola. La query de versión conserva el origen 127.0.0.1:8765 del progreso. El servidor temporal 8766 se cerró; queda la app en 8765.
