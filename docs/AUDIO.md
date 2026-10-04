# Pronunciación local

La app utiliza un repositorio de clips **sintéticos** generados con **Anna**, voz alemana de Alemania (`de_DE`) instalada en macOS. No son grabaciones humanas. La síntesis ofrece una referencia audible del alemán estándar; no garantiza la lectura correcta de cada homógrafo, nombre extranjero o palabra cuyo acento depende del sentido y del contexto.

## Repertorio y formato

Los clips cubren:

- 2 000 lemas de una sola palabra, elegidos por el rango de superficies de OpenSubtitles2018 documentado en `FUENTES-DICCIONARIO.md`. Se excluyen las categorías de nombres propios y abreviaturas; se cuentan palabras distintas después de normalizar mayúsculas.
- Palabras de las **252 entradas didácticas originales y las 67 glosas de lectura**, sin leer etiquetas editoriales como «modal» o «plural». Para los sustantivos se usa el lema sin artículo; las alternativas de pronombres se cubren por separado. También se incluyen las expresiones reflexivas `sich erinnern` y `sich interessieren`.
- Palabras de los campos alemanes de las lecturas originales y de los textos puente disponibles al reconstruir.

El repertorio final contiene **2 544 claves de audio local**, que cubren los **1 800 tokens de los párrafos de las 28 lecturas**; no falta audio local para ninguno de esos tokens. Los archivos referenciados suman **21 688 702 bytes** (aproximadamente 21,7 MB). La cifra y el alcance efectivo se consultan en `window.DeutschData.audio.count` y `sourceScope`, dentro de `data/audio-manifest.js`.

Archivos `audio/<hash>.m4a`, **AAC mono**, tasa objetivo **48 kbit/s**, frecuencia de muestreo de la voz **22,05 kHz**. La síntesis usa velocidad **155 palabras/minuto**. Los clips son breves y se cargan bajo demanda, sin descargar todo el repertorio al abrir la app.

## Reproducción y alternativas

El manifiesto enlaza una superficie normalizada **Unicode NFC + minúsculas** con un archivo local. La pronunciación parte de la forma que se selecciona: una palabra flexionada de una lectura conserva su propia pronunciación, aunque el enlace de vocabulario conduzca al lema.

La reproducción se inicia mediante el botón del usuario; no debe activarse al pasar el puntero, al cambiar de sección ni al cargar la página. Los botones deben funcionar también con teclado y en pantallas táctiles. Una segunda solicitud interrumpe la anterior para que no se superpongan voces.

Para palabras sin clip, la interfaz puede recurrir a **Web Speech** seleccionando una voz `de-DE` del navegador/sistema, si está disponible. La disponibilidad, calidad, latencia y uso de red de esa alternativa dependen del dispositivo; los clips incluidos se reproducen localmente. Cuando no existe una voz alemana utilizable, debe mostrarse una indicación clara y conservarse el acceso al vocabulario.

Algunos homógrafos necesitan contexto: por ejemplo, `umfahren` puede tener acentos y sentidos diferentes. Un único clip aislado no resuelve esa distinción. Tampoco estos clips sustituyen modelos de habla enlazada, entonación de frases o ejercicios de producción oral.

## Reconstruir

En macOS, con la voz **Anna de_DE** instalada y Node.js disponible:

```sh
python3 scripts/build-audio.py
```

El script carga el corpus estático, elige las palabras y utiliza `/usr/bin/say`, `/usr/bin/afconvert` y `/usr/bin/afinfo`. Si existe `data/reading-support.js`, lo incorpora automáticamente; después de ampliarlo, ejecuta el mismo comando de nuevo.

El máximo son cuatro trabajadores simultáneos (`--workers 1` a `--workers 4`). Los nombres dependen de voz, idioma, velocidad, texto y formato, mediante SHA-256; las ejecuciones siguientes validan y reutilizan los clips existentes. No se usa interpolación de palabras en una shell: cada llamada pasa argumentos separados al programa.

El generador comprueba duración positiva y audio no vacío, tanto antes como después de convertir a AAC. Un proceso de síntesis puede devolver éxito y crear un archivo vacío si el entorno bloquea o interrumpe el servicio de voz; ese archivo no se admite y se reintenta hasta tres veces. Si falla cualquier clip después de esos intentos, el manifiesto anterior se conserva. Los temporales AIFF se eliminan al finalizar cada conversión.

`--limit 12` sirve para una prueba breve y escribe un manifiesto de muestra; usarlo en una copia de pruebas o reconstruir inmediatamente el repertorio completo. La producción de los clips requiere acceso al servicio de voz del sistema; la app terminada solo necesita reproducir los archivos.

## Registro de procedencia y comprobación

Pruebas realizadas el **2 de octubre de 2026**: `Haus`, Anna de_DE, duración AAC **0,418 s**, mono 22,05 kHz, con audio no vacío; doce clips iniciales válidos; producción del repertorio completo; revisión incremental tras incorporar las glosas y los textos puente. Dos llamadas nativas iniciales (`Begriffe`, `untersucht`) produjeron archivos vacíos y fueron rechazadas; la reconstrucción las reparó, con duraciones **0,697 s** y **0,906 s**. El resultado final incluye **2 544 clips validados con `afinfo`**, manifiesto sin rutas ausentes ni colisiones, y cobertura de audio de todos los tokens de las 28 lecturas. El manifiesto registra las duraciones verificadas.

La procedencia identifica el sistema utilizado y el carácter sintético de los archivos. Cualquier sustitución de voz debe registrarse en el manifiesto y este documento para que la referencia de pronunciación siga siendo verificable.
