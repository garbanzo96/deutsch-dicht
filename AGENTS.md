# Continuar Deutsch Dicht

Lee `README.md` y `docs/CONTINUIDAD.md` antes de editar. El objetivo es alemán exacto y denso con términos explicados en español/inglés, uso local y progreso privado.

- Conserva identificadores del corpus y respaldos. Cambios de estado necesitan compatibilidad/migración y pruebas.
- Mantén independientes corpus, motor e interfaz. Las relaciones explícitas están en `data/connections.js`, `lesson-support.js` y `reading-support.js`; la app incorpora el vocabulario de la lectura principal.
- Verifica género/plural, régimen, conjugaciones, variantes y distractores; documenta fuentes primarias para dudas.
- No atribuyas textos originales a filósofos o investigadores. Registra edición y permiso de citas.
- Ejecuta `node --test tests/*.test.js` y prueba en navegador los recorridos afectados.
- Actualiza documentación y VALIDACION cuando cambia el corpus o comportamiento. No declares validaciones que no realizaste.
- Preserva acceso estático sin dependencias externas y servidor limitado a 127.0.0.1. No publicar ni añadir cuentas/servicios como extensión rutinaria de un proyecto local.

- Mantén completos ambos idiomas, tablas aplicadas y lemas por contexto; verifica homógrafos, pronombres y prefijos separables. No confundir cobertura de formas con exactitud de acepciones.
- Conserva las atribuciones/licencias de WikDict/FrequencyWords y la identidad sintética de los audios. Tras cambiar lecturas, reconstruye audio y comprueba reproducción real.

## Publicación autorizada
Esta copia se preparó para el repositorio público deutsch-dicht y GitHub Pages por petición expresa del usuario. Lee docs/PUBLICACION.md. No subir clips macOS, legacy, secretos o respaldos. Código MIT; contenido/datos CC BY-SA con avisos preservados. Ejecuta check-content y las pruebas actuales de tests/. La documentación v2 es histórica; manda el corpus actual y su validación.
