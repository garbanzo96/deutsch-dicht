# Guía para próximos agentes y modelos

## Inicio
Lee README, PEDAGOGIA, ESQUEMA-DATOS, DECISIONES, FUENTES y VALIDACION. Inspecciona el corpus antes de proponer sustituciones. Conserva IDs y progreso. El usuario quiere máxima densidad sin omitir significados, aplicación local y cambios concretos revisados.

## Flujo de trabajo
1. Define una mejora acotada y criterio observable.
2. Revisa los datos/reglas que toca; usa fuentes primarias lingüísticas y registra las relevantes.
3. Edita en su capa: contenido `data`, lógica `core`, presentación `app/styles`.
4. Actualiza conexiones explícitas. Añadir una unidad no debe dejar tarjetas sin contexto ni IDs huérfanos.
5. Ejecuta `node --test tests/core.test.js`; modifica pruebas solo para un cambio legítimo de contrato.
6. Prueba en navegador el flujo afectado, teclado, persistencia y diseño estrecho. No usar progreso del usuario para probar borrado/importación; crea perfil de pruebas o respalda primero.
7. Documenta resultado y limitaciones. Si cambia estado, agrega migración y pruebas; no borrar localStorage silenciosamente.

## Reglas editoriales
- Cada tecnicismo alemán necesita significado español breve.
- Sustantivos con artículo y plural; verbos con formas/régimen; ejemplos naturales y bilingües.
- Los distractores deben ser inequívocos y las variantes comunes de traducción deben aceptarse.
- Distinguir cita, traducción propia, paráfrasis y texto original. No reproducir traducciones/ediciones modernas sin verificar permiso.
- No presentar las etiquetas A1–C1 como certificación o estimación objetiva del alumno.
- Mantener todo utilizable sin red. No añadir servicios o publicación sin autorización.

## Prompts de continuidad

### Ampliar una unidad
«Continúa Deutsch Dicht leyendo sus documentos y datos. Amplía la unidad [ID] con diez ejercicios que recuperen los mismos conceptos en contextos nuevos, variantes aceptadas y explicaciones mínimas en español. Conserva IDs existentes, añade nuevos, revisa con fuentes primarias, ejecuta las pruebas y verifica en navegador. No añadas dependencias ni cambies el estado sin migración.»

### Revisar exactitud
«Audita [archivo/unidad] de Deutsch Dicht. Verifica género/plural, auxiliares, régimen, orden, declinación y traducciones. Detecta distractores ambiguos y material no introducido. Corrige solo errores demostrados, deja referencias y comprueba corpus y navegador.»

### Crear siguiente módulo
«Añade cuatro unidades [nivel/tema] a Deutsch Dicht con objetivos, reglas, léxico enlazado, ejemplos, lectura bilingüe original y ejercicios de los seis tipos. Conserva la arquitectura local, mapa de IDs y progresión; explica cada término alemán. Actualiza documentación, pruebas y validación real.»

### Memoria adaptativa
«Revisa el calendario de Deutsch Dicht con pruebas reproducibles de fallos, límite diario, direcciones y mezcla. Propón y aplica una mejora conservando respaldos v1 y sin atribuir equivalencia con Anki/FSRS. Documenta intervalos y limitaciones.»

## Estado actualizado v2

La ampliación solicitada añade ES/EN, tema oscuro, referencia bilingüe amplia y frecuencia documentada, 46 paradigmas aplicados, 8 lecturas puente, consulta de palabras por contexto y audio local. Lee también `IDIOMAS.md`, `PROGRESION-V2.md`, `FUENTES-DICCIONARIO.md` y `AUDIO.md`.

Para cualquier cambio, ejecutar **`node --test tests/*.test.js`**, no solo core.test.js. Comprobar en navegador ES/EN, ambos temas, lectura→consulta→entrada→volver, palabra flexionada/homógrafo, reproducción real del audio y almacenamiento tras recarga. Mantener originales de la versión inicial y respaldos válidos.

Prompt de continuidad: «Continúa Deutsch Dicht v2 leyendo AGENTS.md y la documentación. Conserva IDs y progreso. Antes de ampliar contenido, verifica exactitud del alemán, traducciones ES/EN, mapping del lema canónico en contexto, prerrequisitos de lecturas y fuente/licencia. Añade audio y glosas de cada texto nuevo. Ejecuta todas las pruebas y revisa los flujos afectados en navegador. Registra resultados reales en VALIDACION.md».

La importación de WikDict no equivale a una revisión humana completa. Si se usa una entrada de referencia en nuevos ejercicios, revisar sus sentidos, género, plural, régimen y formas con una fuente lingüística primaria. No sumar formas del corpus ni asignar niveles sin metodología reproducible.
