# Publicación abierta — 3 de octubre de 2026

Repositorio: https://github.com/garbanzo96/deutsch-dicht
App: https://garbanzo96.github.io/deutsch-dicht/

Se publica una instantánea del proyecto actual del Escritorio, versión 3 del código y corpus (40 unidades), conservando sus IDs. La instalación local personal se conserva. Esta carpeta es la copia de publicación independiente; no copiar sobre ella el audio privado ni el archivo legacy de respaldo.

La documentación anterior de v2 permanece como historial y no describe por completo el corpus v3. `scripts/check-content.js` verifica el corpus actual: 40 unidades, 2.619 entradas didácticas, 58 lecturas, 87 temas y 722 ejercicios; 0 errores / 0 avisos estructurales. Las lecturas tienen 100 % de apoyo léxico mediante vocabulario o glosas; algunas introducen léxico aún no aprendido. Esto no acredita una revisión docente externa.

El diccionario diferido y los datos de frecuencia conservan CC BY-SA y fuentes. Se añade la licencia MIT del port py-fsrs. Contenido didáctico original y traducciones propias: CC BY-SA 4.0. Los textos históricos se distinguen en los datos; Tractatus corresponde al original alemán de 1921/1922, no a una traducción moderna. Revisar edición y jurisdicción antes de añadir citas o traducciones externas.

Audio público: manifiesto vacío intencional para usar Web Speech con voz de-DE. No se publican los clips Anna/macOS ni el ZIP legacy que los contiene. §2F de macOS Sonoma restringe la distribución de estas voces en contextos públicos, incluidos proyectos sin fines de lucro: https://www.apple.com/legal/sla/docs/macOSSonoma.pdf. El generador se conserva para uso personal conforme a su licencia. Su salida no debe añadirse a GitHub.

GitHub Pages: Settings → Pages → Deploy from a branch → main / (root). La app usa rutas relativas, por lo que funciona bajo /deutsch-dicht/. CI verifica corpus y pruebas; Pages usa su despliegue estándar independiente. No publicar hasta comprobar ambos estados para cada actualización.

No hay backend, analítica ni sincronización del progreso. Las voces del navegador pueden usar servicios del proveedor. El origen público tiene almacenamiento distinto del servidor local: exportar/importar para trasladar progreso.

Validación local de publicación: cuatro pruebas aprobadas (rutas de recursos bajo subruta Pages, exclusión de clips privados, orden real de carga del corpus y programación de tarjeta fallada frente a fácil). Navegador integrado en puerto separado 8767: ES/EN, oscuro, búsqueda flexionada Häuser→Haus, carga diferida de referencia, paradigma de declinación y botón de pronunciación sin avisos ni errores de consola. Se corrigió la mención de dirección local fija en la copia pública.

Los archivos se cargan directamente por la interfaz de GitHub, preservando carpetas. No se utiliza un importador con permiso de escritura. GitHub Pages sirve la raíz de main; verificar en el navegador la app pública y el estado del despliegue antes de anunciar una versión.
