# Deutsch Dicht

**[Abrir / Launch Deutsch Dicht](https://garbanzo96.github.io/deutsch-dicht/)** · [Repositorio / Source](https://github.com/garbanzo96/deutsch-dicht)

Curso de alemán de A1 a C1 para estudiar rápido y en profundidad: regla explícita y completa, práctica en tres fases, lectura graduada con análisis de cada palabra y repaso espaciado con FSRS-6. HTML/CSS/JavaScript estático, sin dependencias ni cuentas; interfaz y traducciones en **español e inglés**, modo claro/oscuro, progreso local.

| | |
| --- | ---: |
| Unidades (8 módulos, A1 → C1) | 40 |
| Ejercicios (8 tipos, fases Erkennen · Üben · Anwenden) | 722 |
| Entradas léxicas del curso, sin repeticiones (incl. 509 de ampliación A1–B1) | 2 572 |
| Lecturas (40 de unidad + 18 de biblioteca, 10 clásicos de dominio público) | 58 |
| Gramática de referencia | 87 temas · 11 capítulos |
| Diccionario de referencia WikDict (DE → ES/EN, carga diferida) | ~35 000 |

Los niveles A1–C1 son orientaciones pedagógicas, no una certificación.

## Usar

- **Aprender**: cada unidad tiene *Lektion* (regla, tablas, diagramas de campos, Redemittel, errores típicos, ejemplos, vocabulario, resumen), *Text* (lectura graduada) y *Übungen* (18 ejercicios; ver la solución no cuenta para el dominio).
- **Toca cualquier palabra alemana** —lecciones, tablas, ejemplos, gramática, diccionario, ejercicios respondidos, lecturas, incluso citas alemanas dentro de explicaciones en español— para ver lema, tipo, significado, formas y pronunciación.
- **Repaso**: una sola cola con reconocimiento, producción y gramática. El número de palabras nuevas por día es automático: empieza en 12 y sube o baja según tu retención real y la carga de repasos.
- **Lecturas**: audio por frase, modo lento, traducción oculta/debajo/paralela, preguntas y glosario. La biblioteca incluye Goethe, Heine, Kafka, Kant, Nietzsche, Schopenhauer, Wittgenstein, Lichtenberg, Hegel y Marx (citas literales) y textos originales.
- **Diccionario**: búsqueda por formas flexionadas (*Häuser, ging*), paginación numerada, salto a página y orden A–Z.
- **Progreso**: estadísticas y respaldo (exportar/importar).

**El progreso se guarda solo en el navegador y la dirección donde estudias.** No se envía a ninguna parte. Exporta e importa desde Progreso para moverlo entre la versión local y la pública.

**Pronunciación pública:** usa la mejor voz alemana (de-DE) de tu navegador o sistema; guiones y barras se leen como pausas. Si no hay voz alemana, instálala o actívala en el sistema (algunas voces usan Internet). Los clips de voz de macOS de la instalación personal no se publican (licencia de macOS, §2F).

## Ejecutar localmente

```sh
git clone https://github.com/garbanzo96/deutsch-dicht.git
cd deutsch-dicht
python3 scripts/serve.py --port 8765
```

Abre http://127.0.0.1:8765/. En macOS también `bash Iniciar.command` (o `chmod +x Iniciar.command` para abrirlo con doble clic). El servidor escucha solo en 127.0.0.1.

## Desarrollar

```sh
node scripts/check-content.js --quiet   # validador editorial y cobertura de lecturas
node --test tests/*.test.js             # 24 pruebas: FSRS, ritmo, evaluación, analizador, corpus, publicación
python3 scripts/sync-index.py           # regenera las etiquetas <script> del corpus
```

Node.js 22+ para las verificaciones; Python 3 para servir. Sin npm ni compilación. Corpus en `data/units/`, `data/grammar/` y `data/readings/`; motor, morfología, contenido y vistas en `js/`. Arquitectura, esquema de datos, pedagogía y validación en `docs/`. Lee `AGENTS.md` y [docs/PUBLICACION.md](docs/PUBLICACION.md) antes de contribuir; conserva los IDs (el progreso depende de ellos). Los archivos v2 que quedan en `data/` y `js/` no se cargan: son historial.

## Publicación y contribuciones

GitHub Pages publica `main` desde la raíz (`.nojekyll`). Cada push ejecuta las verificaciones de contenido y las pruebas. Usa pull requests para mejoras e indica qué cambia y cómo se comprobó.

## Licencias

**Código: MIT. Contenido didáctico y datos adaptados: CC BY-SA 4.0**, con atribuciones y excepciones en [licenses/README.md](licenses/README.md). Diccionario: WikDict/Wiktionary/DBnary. Frecuencia: FrequencyWords (Hermit Dave, OpenSubtitles2018). FSRS: Open Spaced Repetition (MIT). Los textos originales son didácticos y no se atribuyen a autores reales; los históricos indican autor, obra y año. No se incluyen audios de macOS ni respaldos de progreso.

**English:** [Launch the app](https://garbanzo96.github.io/deutsch-dicht/) and select EN. Tap any German word to see its lemma, word class, meaning, forms and pronunciation. Your progress stays in your browser; export/import it from Progress. Public audio uses your device's German voice. To contribute, run the checks above and preserve stable IDs, bilingual content and source attribution.
