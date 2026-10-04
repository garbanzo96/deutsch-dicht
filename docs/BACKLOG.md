# Backlog priorizado

## P0 — antes de ampliar volumen
- Auditoría docente nativa del corpus y variantes de respuestas libres; añadir pruebas por corrección encontrada.
- Mantener cobertura de glosas y mappings al añadir textos. Completado para las 28 lecturas de v2; verificar sentido además de cobertura.
- Evaluación de ortografía opcional: mayúsculas, comas y terminaciones separadas de la comprensión.
- Mejorar ejercicios de traducción libre sin convertir soluciones vistas en respuestas dominadas.

## P1 — mayor profundidad
- Añadir secuencias de unidades por cada nivel, práctica distribuida de gramática y rutas de recuperación según errores.
- Audio humano o licenciado con procedencia y controles; ejercicios de escucha.
- Entrenamiento de plural y artículo separado del reconocimiento léxico.
- Índice por función de caso y régimen verbal, más colocaciones frecuentes.
- Formularios de entrada para incorporar tarjetas propias con validación, exportación del corpus y versionado.
- Diagnóstico inicial breve y selección automática de unidades sin asumir nivel a partir del perfil.
- Sustituir el calendario por FSRS solo con versión documentada, licencia y pruebas de migración.

## P2 — experiencia y escala
- Historial por tarjeta, calendario visual y suspensión individual.
- Guardado robusto multi-pestaña, migraciones versionadas y IndexedDB si el corpus crece mucho.
- PWA/offline instalable con HTTP; verificar invalidación de caché sin romper acceso directo.
- Ejercicios de producción abierta con rúbrica y revisión humana; un modelo externo deberá ser opcional y explicar envío de datos.
- Mayor corpus cotidiano (salud, burocracia, trabajo, viajes) y filosófico con procedencia legal verificable.

## Criterio de finalización de una iteración
Correcciones revisadas lingüísticamente, referencias válidas, pruebas del motor/corpus aprobadas, uso real en navegador de recorridos afectados, interfaz móvil/teclado comprobada, documentación y registro actualizados. No marcar tareas como hechas por incluirlas en este archivo.

## Revisión v2

Implementado: ES/EN completo; modo oscuro; unas 35.000 entradas bilingües; frecuencia de fuente real; diccionario paginado con búsqueda de flexiones; 46 paradigmas aplicados; 8 puentes/prerrequisitos; consulta contextual con audio; calendarios separados por idioma; compatibilidad del progreso anterior.

Siguiente trabajo útil:

- Auditoría editorial progresiva de las primeras 2.000 entradas importadas, con selección de sentidos y regímenes para ejercicios.
- Frecuencia por lema agregada con corpus representativos adicionales y método documentado, conservando rangos originales como evidencia.
- Más unidades de práctica y textos por estructura; la ruta de 20 unidades es una introducción, no un curso C1 exhaustivo.
- Grabaciones humanas o revisión fonética de pares difíciles/homógrafos y habla conectada; mantener audio sintético claramente identificado.
- IndexedDB para repertorios personales muy extensos que excedan cuota de localStorage; migración/respaldos primero.
- Evaluación semántica opcional de traducciones solo con garantías de privacidad y coste explícitos; actualmente variantes finitas transparentes.
