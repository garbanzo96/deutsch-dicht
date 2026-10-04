# Decisiones de diseño (v3)

1. **FSRS-6 en lugar de SM-2.** Mejor ajuste a la memoria real con los mismos datos; parámetros por defecto de py-fsrs (MIT), retención objetivo 0,9, pasos 1 min / 10 min, día que cambia a las 04:00. Las tarjetas antiguas se migran (estabilidad = intervalo previo).
2. **Sin selector de cantidad de palabras.** El ritmo de nuevas es automático y se ajusta a la retención y a la carga (ver `PACE` en `js/core.js`).
3. **Una sola cola de repaso** con reconocimiento, producción y gramática, intercalando nuevas según la proporción de repasos pendientes.
4. **Léxico único por unidad.** Cada palabra se introduce una vez, en la unidad donde aparece por primera vez; el validador rechaza duplicados. El vocabulario básico A1–B1 que faltaba se añadió como «ampliación» plegable para no recargar la lección.
5. **Analizador morfológico propio** en vez de depender de un diccionario de formas: genera formas a partir de cada entrada y resuelve separables por cláusula; permite lectura con análisis exacto y consulta de cualquier palabra en toda la app.
6. **Consulta universal por DOM** (`lookup.js`): en lugar de reescribir cada vista, se envuelven automáticamente las palabras de todo elemento marcado como alemán. Excluye enlaces, botones de respuesta y tarjetas sin revelar para no estropear la práctica.
7. **Glosas del autor mandan** cuando el mejor análisis aún no se ha estudiado (evita mostrar un homógrafo equivocado, p. ej. *Grüße* como verbo).
8. **Audio local con una voz buena** en vez de varias voces mediocres; separadores como pausas.
9. **Lecturas graduadas verificadas por máquina**: cobertura calculada con el mismo analizador que usa el lector.
10. **Estática y local**: sin dependencias ni peticiones de red; servidor solo en 127.0.0.1.
