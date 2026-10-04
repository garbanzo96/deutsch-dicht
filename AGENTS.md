# Continuar Deutsch Dicht (v3)

Lee `README.md`, `docs/ARQUITECTURA.md`, `docs/ESQUEMA-DATOS.md` y `docs/CONTINUIDAD.md` antes de editar.

- **Datos**: unidades en `data/units/uNN.js` (léxico + `DD.unit`), gramática en `data/grammar/NN-*.js`, biblioteca en `data/readings/`. Tras añadir o quitar archivos de datos: `python3 scripts/sync-index.py`.
- **IDs estables**: no renombres IDs de entradas, ejercicios (`uNN-MM`), lecturas ni temas; el progreso los usa. Un cambio de esquema del estado exige migración en `js/core.js` y pruebas.
- **Léxico sin repeticiones**: cada lema se introduce una sola vez. Antes de añadir una palabra, comprueba que no exista; los homógrafos llevan `homonym: 1`. Coloca el vocabulario básico en la unidad donde aparece por primera vez.
- **Lecturas graduadas**: toda lectura debe quedar con 100 % de palabras apoyadas (léxico conocido o glosa). Las de biblioteca declaran `after: 'uNN'`.
- **Exactitud**: verifica género, plural, formas verbales, régimen y casos. No atribuyas textos originales a autores reales; las citas de dominio público deben ser literales y llevar obra y año.
- **Validación**: `node scripts/check-content.js` (0 errores) y `node --test tests/*.test.js`. Prueba en el navegador en el puerto **8766** (`python3 scripts/serve.py --port 8766`); el 8765 guarda el progreso real del usuario y no se usa para pruebas destructivas.
- **Audio**: tras cambiar textos, `python3 scripts/build-audio.py` (incremental). Mantén la identificación de audio sintético.
- **Sin dependencias externas**, servidor solo en 127.0.0.1, sin publicar ni añadir cuentas o servicios.
- Conserva las atribuciones de WikDict y FrequencyWords. Actualiza `docs/VALIDACION.md` con lo que realmente verificaste.

## Publicación (esta copia)
Esta carpeta es la copia pública para github.com/garbanzo96/deutsch-dicht y GitHub Pages. Lee docs/PUBLICACION.md. No subir clips de macOS (carpeta audio/), legacy/, secretos ni respaldos de progreso: el manifiesto público de audio está vacío a propósito y la app usa la voz alemana del navegador. Código MIT; contenido/datos CC BY-SA con avisos preservados (licenses/, credits.html). Los archivos de datos v2 que siguen en data/ y js/ no se cargan; son historial.

