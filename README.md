# Deutsch Dicht

**[Abrir / Launch Deutsch Dicht](https://garbanzo96.github.io/deutsch-dicht/)** · [Repositorio / Source](https://github.com/garbanzo96/deutsch-dicht)

Aprendizaje de alemán de alta densidad informativa, con interfaz y traducciones en **español e inglés**, modo claro/oscuro y progreso local. HTML/CSS/JavaScript estático, sin dependencias de producción ni cuenta para estudiar.

La edición actual incluye **40 unidades, 722 ejercicios, 58 lecturas, 87 temas gramaticales** y **2.619 entradas del curso**, además del diccionario bilingüe amplio de WikDict. Los niveles A1–C1 son orientaciones pedagógicas, no una certificación. El repaso usa un port JavaScript de FSRS-6.

## Usar

Abre el enlace de arriba. ES/EN cambia el idioma; el botón de tema cambia claro/oscuro. Aprender reúne reglas, tablas aplicadas, vocabulario y ejercicios. Lecturas permite revelar traducciones y consultar palabras. Repaso permite recuperar y valorar tarjetas. Progreso permite exportar/importar respaldos.

**El progreso se guarda únicamente en el navegador y origen donde estudias.** No se envía al repositorio ni se sincroniza entre dispositivos. Exporta desde Progreso e importa para trasladarlo desde la versión local a la pública. La referencia importada conserva sentidos regionales/históricos y no tiene revisión humana de cada entrada.

**Pronunciación pública:** usa una voz alemana de-DE del navegador/dispositivo. Si falta, la app avisa; instala o habilita una voz alemana en tu sistema. Algunas voces requieren Internet. Los clips Anna de la instalación personal se excluyen de esta publicación por la restricción de redistribución de macOS (§2F). Las funciones de audio conservan los mismos botones; su voz depende del dispositivo.

## Ejecutar localmente

```sh
git clone https://github.com/garbanzo96/deutsch-dicht.git
cd deutsch-dicht
python3 scripts/serve.py --port 8765
```

Abre http://127.0.0.1:8765/. En macOS también puedes abrir `Iniciar.command`. El servidor escucha solamente en 127.0.0.1. Ctrl+C lo detiene. Conserva navegador, dirección y puerto para mantener el mismo progreso. Los archivos clásicos también permiten abrir index.html donde el navegador admita file://; HTTP local es la opción recomendada.

## Desarrollar

```sh
node scripts/check-content.js --quiet
node --test tests/*.test.js
```

Node.js 22 o posterior para las verificaciones; Python 3 para servir. No hay instalación npm ni compilación. `data/units/`, `data/grammar/` y `data/readings/` contienen el corpus actual; `js/` separa motor, morfología, contenido y vistas. `scripts/sync-index.py` regenera la lista de scripts del corpus. Los archivos de v2 conservados fuera de esos directorios son antecedentes y algunos sirven de fuente al diccionario; no son la ruta activa.

Lee `AGENTS.md` y [docs/PUBLICACION.md](docs/PUBLICACION.md) antes de continuar. Conserva IDs y migraciones del progreso. Revisa alemán, ES/EN, géneros/plurales, régimen y contexto; las pruebas estructurales no certifican exactitud lingüística. Los documentos de v1/v2 son históricos; los recuentos y validación de esta edición se registran en PUBLICACION.md.

## Publicación y contribuciones

GitHub Pages publica `main` desde la raíz. `.nojekyll` conserva los recursos estáticos tal cual. Cada push dispara verificaciones de contenido y pruebas; antes de compartir una actualización revisa que ambas verificaciones y el despliegue de Pages hayan terminado. Usa pull requests para mejoras; incluye qué cambia y cómo se comprobó.

## Licencias

**Código: MIT. Contenido didáctico y datos adaptados: CC BY-SA 4.0**, con atribuciones y excepciones descritas en [licenses/README.md](licenses/README.md). Diccionario: WikDict/Wiktionary/DBnary. Frecuencia: FrequencyWords, Hermit Dave, OpenSubtitles2018. FSRS: Open Spaced Repetition, MIT. Los textos originales contemporáneos se identifican como didácticos; los históricos conservan autoría. No se incluyen audios privados ni respaldos de progreso.

**English:** [Launch the app](https://garbanzo96.github.io/deutsch-dicht/) and select EN. Your progress remains in your browser. Export/import from Progress to move it. Public audio requires a German browser/system voice. To contribute, run the checks above and preserve stable IDs, bilingual content and source attribution.
