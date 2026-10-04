/* Referencia gramatical didáctica. Datos sin dependencias externas. */
window.DeutschData = window.DeutschData || {};
window.DeutschData.grammar = [
  {
    "id": "cases",
    "title": "Los cuatro casos",
    "deTitle": "Kasus — caso gramatical",
    "level": "A1",
    "summary": "El caso indica la función y el régimen; no equivale automáticamente a una preposición española.",
    "columns": [
      "Caso",
      "Pregunta guía",
      "Función típica",
      "Ejemplo"
    ],
    "rows": [
      [
        "Nominativ — nominativo",
        "wer? / was? — ¿quién? / ¿qué?",
        "Sujeto; atributo con sein/werden/bleiben",
        "Der Mann ist ein Lehrer."
      ],
      [
        "Akkusativ — acusativo",
        "wen? / was? — ¿a quién? / ¿qué?",
        "Objeto de muchos verbos; régimen de preposiciones",
        "Ich sehe den Mann."
      ],
      [
        "Dativ — dativo",
        "wem? — ¿a quién?",
        "Destinatario; objeto de ciertos verbos y preposiciones",
        "Ich helfe dem Mann."
      ],
      [
        "Genitiv — genitivo",
        "wessen? — ¿de quién?",
        "Relación nominal; ciertos verbos y preposiciones",
        "Das Buch des Mannes."
      ]
    ],
    "notes": [
      "Genus = género: Maskulinum (masculino), Femininum (femenino), Neutrum (neutro). Numerus = número: Singular (singular), Plural (plural).",
      "Nominativo y acusativo coinciden en femenino, neutro y plural en los artículos; no por ello son el mismo caso.",
      "El régimen se aprende con la palabra: helfen + Dativ, sehen + Akkusativ; no se deduce de la traducción."
    ],
    "examples": [
      {
        "de": "Der Lehrer gibt dem Kind das Buch.",
        "es": "El profesor le da el libro al niño. Sujeto: der Lehrer; destinatario: dem Kind; objeto: das Buch."
      },
      {
        "de": "Die Idee des Forschers ist neu.",
        "es": "La idea del investigador es nueva."
      }
    ]
  },
  {
    "id": "articles",
    "title": "Artículos: definidos, indefinidos y negativos",
    "deTitle": "Artikel — artículo",
    "level": "A1",
    "summary": "Paradigmas completos. ∅ significa ausencia de forma; ein no tiene plural.",
    "columns": [
      "Tipo / caso",
      "Masculino",
      "Femenino",
      "Neutro",
      "Plural"
    ],
    "rows": [
      [
        "Definido · Nom",
        "der",
        "die",
        "das",
        "die"
      ],
      [
        "Definido · Akk",
        "den",
        "die",
        "das",
        "die"
      ],
      [
        "Definido · Dat",
        "dem",
        "der",
        "dem",
        "den"
      ],
      [
        "Definido · Gen",
        "des",
        "der",
        "des",
        "der"
      ],
      [
        "Indefinido · Nom",
        "ein",
        "eine",
        "ein",
        "∅"
      ],
      [
        "Indefinido · Akk",
        "einen",
        "eine",
        "ein",
        "∅"
      ],
      [
        "Indefinido · Dat",
        "einem",
        "einer",
        "einem",
        "∅"
      ],
      [
        "Indefinido · Gen",
        "eines",
        "einer",
        "eines",
        "∅"
      ],
      [
        "Negativo · Nom",
        "kein",
        "keine",
        "kein",
        "keine"
      ],
      [
        "Negativo · Akk",
        "keinen",
        "keine",
        "kein",
        "keine"
      ],
      [
        "Negativo · Dat",
        "keinem",
        "keiner",
        "keinem",
        "keinen"
      ],
      [
        "Negativo · Gen",
        "keines",
        "keiner",
        "keines",
        "keiner"
      ]
    ],
    "notes": [
      "Nom/Akk/Dat/Gen abrevian nominativo/acusativo/dativo/genitivo.",
      "kein = ningún / no un: niega grupos nominales con ein o sin artículo; nicht suele negar grupos con artículo definido o posesivo.",
      "Dat plural: den Kindern; añade -n al sustantivo salvo plural ya terminado en -n o -s. Gen singular masculino/neutro: des Mannes, des Buches.",
      "Contracciones usuales: an dem → am; in dem → im; bei dem → beim; von dem → vom; zu dem → zum; zu der → zur; an das → ans; in das → ins. El artículo enfatizado puede mantenerse separado.",
      "Profesión sin modificación, tras sein/werden: Ich bin Lehrer. Con modificación o individualización: Er ist ein guter Lehrer."
    ],
    "examples": [
      {
        "de": "Ich habe einen Hund, aber keine Katze.",
        "es": "Tengo un perro, pero no un gato."
      },
      {
        "de": "Die Bücher liegen auf dem Tisch.",
        "es": "Los libros están sobre la mesa."
      }
    ]
  },
  {
    "id": "personal-pronouns",
    "title": "Pronombres personales: todos los casos",
    "deTitle": "Personalpronomen — pronombre personal",
    "level": "A1",
    "summary": "Las formas de objeto se eligen por el caso exigido, no por el género español.",
    "columns": [
      "Persona / significado",
      "Nom",
      "Akk",
      "Dat",
      "Gen (formal, infrecuente)"
    ],
    "rows": [
      [
        "yo",
        "ich",
        "mich",
        "mir",
        "meiner"
      ],
      [
        "tú",
        "du",
        "dich",
        "dir",
        "deiner"
      ],
      [
        "él / referente masculino",
        "er",
        "ihn",
        "ihm",
        "seiner"
      ],
      [
        "ella / referente femenino",
        "sie",
        "sie",
        "ihr",
        "ihrer"
      ],
      [
        "ello / referente neutro",
        "es",
        "es",
        "ihm",
        "seiner"
      ],
      [
        "nosotros/as",
        "wir",
        "uns",
        "uns",
        "unser"
      ],
      [
        "vosotros/as / ustedes informal plural",
        "ihr",
        "euch",
        "euch",
        "euer"
      ],
      [
        "ellos/as",
        "sie",
        "sie",
        "ihnen",
        "ihrer"
      ],
      [
        "usted(es), tratamiento formal",
        "Sie",
        "Sie",
        "Ihnen",
        "Ihrer"
      ]
    ],
    "notes": [
      "Sie/Ihnen/Ihrer de tratamiento formal llevan mayúscula y verbo en tercera persona plural.",
      "El genitivo personal aparece con pocos verbos y en registros elevados: Wir gedenken ihrer = La recordamos / los recordamos con respeto. No sustituye al determinante posesivo.",
      "es puede representar un sustantivo neutro o ser impersonal: Es regnet = Llueve. man = uno / se; verbo en tercera persona singular; objetos: einen (Akk), einem (Dat)."
    ],
    "examples": [
      {
        "de": "Ich sehe sie und helfe ihr.",
        "es": "La veo y la ayudo."
      },
      {
        "de": "Können Sie mir helfen?",
        "es": "¿Puede usted ayudarme? / ¿Pueden ustedes ayudarme?"
      }
    ]
  },
  {
    "id": "possessives",
    "title": "Posesivos: determinante y pronombre",
    "deTitle": "Possessivartikel / Possessivpronomen — determinante / pronombre posesivo",
    "level": "A1",
    "summary": "La raíz identifica al poseedor; la terminación concuerda con lo poseído. Ejemplo completo con mein- (mi/mío).",
    "columns": [
      "Uso / caso",
      "Masculino",
      "Femenino",
      "Neutro",
      "Plural"
    ],
    "rows": [
      [
        "Con sustantivo · Nom",
        "mein",
        "meine",
        "mein",
        "meine"
      ],
      [
        "Con sustantivo · Akk",
        "meinen",
        "meine",
        "mein",
        "meine"
      ],
      [
        "Con sustantivo · Dat",
        "meinem",
        "meiner",
        "meinem",
        "meinen"
      ],
      [
        "Con sustantivo · Gen",
        "meines",
        "meiner",
        "meines",
        "meiner"
      ],
      [
        "Sin sustantivo · Nom",
        "meiner",
        "meine",
        "meines / meins",
        "meine"
      ],
      [
        "Sin sustantivo · Akk",
        "meinen",
        "meine",
        "meines / meins",
        "meine"
      ],
      [
        "Sin sustantivo · Dat",
        "meinem",
        "meiner",
        "meinem",
        "meinen"
      ],
      [
        "Sin sustantivo · Gen",
        "meines",
        "meiner",
        "meines",
        "meiner"
      ]
    ],
    "notes": [
      "Raíces: ich → mein- (mi); du → dein- (tu); er/es → sein- (su de él/ello); sie singular → ihr- (su de ella); wir → unser- (nuestro); ihr → euer- (vuestro); sie plural → ihr- (su de ellos); Sie → Ihr- (su de usted/es).",
      "euer pierde normalmente la segunda e ante terminación: eure, euren, eurem, eurer, eures. unser admite formas reducidas: unsere / unsre.",
      "sein o ihr depende del género del poseedor; mein/meine depende de género y número de lo poseído.",
      "Tras determinantes posesivos el adjetivo sigue la declinación mixta: mein guter Freund; mit meinem guten Freund."
    ],
    "examples": [
      {
        "de": "Ihre Schwester liest sein Buch.",
        "es": "Su hermana (de ella/ellos/usted, según contexto) lee el libro de él."
      },
      {
        "de": "Ist das dein Buch? — Ja, das ist meins.",
        "es": "¿Ese es tu libro? — Sí, es mío."
      }
    ]
  },
  {
    "id": "present",
    "title": "Presente: regular y auxiliares",
    "deTitle": "Präsens — presente",
    "level": "A1",
    "summary": "Raíz verbal + terminación. El presente también expresa futuro con contexto temporal.",
    "columns": [
      "Persona",
      "lernen — aprender",
      "sein — ser/estar",
      "haben — tener",
      "werden — volverse / auxiliar"
    ],
    "rows": [
      [
        "ich",
        "lerne",
        "bin",
        "habe",
        "werde"
      ],
      [
        "du",
        "lernst",
        "bist",
        "hast",
        "wirst"
      ],
      [
        "er/sie/es",
        "lernt",
        "ist",
        "hat",
        "wird"
      ],
      [
        "wir",
        "lernen",
        "sind",
        "haben",
        "werden"
      ],
      [
        "ihr",
        "lernt",
        "seid",
        "habt",
        "werdet"
      ],
      [
        "sie/Sie",
        "lernen",
        "sind",
        "haben",
        "werden"
      ]
    ],
    "notes": [
      "Regular: -e, -st, -t, -en, -t, -en. Raíz en -d/-t y ciertos grupos consonánticos: arbeiten → du arbeitest, er arbeitet, ihr arbeitet.",
      "Tras s/ß/z/x, du usa normalmente -t: heißen → du heißt; tanzen → du tanzt.",
      "Cambios fuertes solo en du y er/sie/es: lesen → liest/liest; geben → gibst/gibt; nehmen → nimmst/nimmt; fahren → fährst/fährt; laufen → läufst/läuft. Las otras personas conservan la raíz de infinitivo.",
      "wissen: ich weiß, du weißt, er weiß, wir wissen, ihr wisst, sie wissen."
    ],
    "examples": [
      {
        "de": "Ich lerne Deutsch. Morgen fahre ich nach Berlin.",
        "es": "Aprendo alemán. Mañana viajo a Berlín."
      },
      {
        "de": "Du liest, und ich höre zu.",
        "es": "Tú lees y yo escucho con atención."
      }
    ]
  },
  {
    "id": "irregular-verbs",
    "title": "Verbos frecuentes: formas principales",
    "deTitle": "Stammformen — formas principales",
    "level": "A2",
    "summary": "Memoriza infinitivo + tercera persona del presente + pretérito + participio y auxiliar. h = haben; s = sein.",
    "columns": [
      "Infinitivo · español",
      "er/sie/es · presente",
      "Präteritum · ich/er",
      "Partizip II · auxiliar"
    ],
    "rows": [
      [
        "sein · ser/estar",
        "ist",
        "war",
        "gewesen · s"
      ],
      [
        "haben · tener",
        "hat",
        "hatte",
        "gehabt · h"
      ],
      [
        "werden · volverse",
        "wird",
        "wurde",
        "geworden · s"
      ],
      [
        "gehen · ir",
        "geht",
        "ging",
        "gegangen · s"
      ],
      [
        "kommen · venir",
        "kommt",
        "kam",
        "gekommen · s"
      ],
      [
        "fahren · viajar/conducir",
        "fährt",
        "fuhr",
        "gefahren · s/h según uso"
      ],
      [
        "bleiben · quedarse",
        "bleibt",
        "blieb",
        "geblieben · s"
      ],
      [
        "sehen · ver",
        "sieht",
        "sah",
        "gesehen · h"
      ],
      [
        "lesen · leer",
        "liest",
        "las",
        "gelesen · h"
      ],
      [
        "sprechen · hablar",
        "spricht",
        "sprach",
        "gesprochen · h"
      ],
      [
        "geben · dar",
        "gibt",
        "gab",
        "gegeben · h"
      ],
      [
        "nehmen · tomar",
        "nimmt",
        "nahm",
        "genommen · h"
      ],
      [
        "essen · comer",
        "isst",
        "aß",
        "gegessen · h"
      ],
      [
        "finden · encontrar",
        "findet",
        "fand",
        "gefunden · h"
      ],
      [
        "denken · pensar",
        "denkt",
        "dachte",
        "gedacht · h"
      ],
      [
        "bringen · traer",
        "bringt",
        "brachte",
        "gebracht · h"
      ],
      [
        "wissen · saber un dato",
        "weiß",
        "wusste",
        "gewusst · h"
      ],
      [
        "kennen · conocer",
        "kennt",
        "kannte",
        "gekannt · h"
      ],
      [
        "schreiben · escribir",
        "schreibt",
        "schrieb",
        "geschrieben · h"
      ],
      [
        "verstehen · entender",
        "versteht",
        "verstand",
        "verstanden · h"
      ],
      [
        "helfen · ayudar",
        "hilft",
        "half",
        "geholfen · h"
      ],
      [
        "schlafen · dormir",
        "schläft",
        "schlief",
        "geschlafen · h"
      ],
      [
        "stehen · estar de pie",
        "steht",
        "stand",
        "gestanden · h; regional s"
      ],
      [
        "liegen · estar tendido/situado",
        "liegt",
        "lag",
        "gelegen · h; regional s"
      ]
    ],
    "notes": [
      "stark = fuerte: suele cambiar vocal y usa -en en el participio; schwach = débil: -te y -(e)t; gemischt = mixto: cambio de raíz + -te / -t.",
      "fahren intransitivo de desplazamiento: ist gefahren. Transitivo: hat das Auto gefahren (ha conducido el coche).",
      "werden como auxiliar pasivo usa worden en el perfecto pasivo: ist gelesen worden. Como verbo «volverse», geworden.",
      "En Austria, Suiza y partes del sur alemán, stehen/liegen/sitzen suelen formar el perfecto con sein. Aquí se usa haben como variante didáctica principal."
    ],
    "examples": [
      {
        "de": "Sie hat den Text gelesen und ist dann gegangen.",
        "es": "Ha leído el texto y después se ha ido."
      },
      {
        "de": "Ich weiß die Antwort, aber ich kenne den Autor nicht.",
        "es": "Sé la respuesta, pero no conozco al autor."
      }
    ]
  },
  {
    "id": "modal-verbs",
    "title": "Modales: paradigma completo",
    "deTitle": "Modalverben — verbos modales",
    "level": "A1",
    "summary": "Modal conjugado + infinitivo sin zu al final. En singular cambia la raíz; ich y er/sie/es suelen coincidir.",
    "columns": [
      "Persona / tiempo",
      "können · poder/saber",
      "müssen · deber/tener que",
      "dürfen · poder por permiso",
      "sollen · deber por encargo",
      "wollen · querer",
      "mögen · gustar"
    ],
    "rows": [
      [
        "ich · presente",
        "kann",
        "muss",
        "darf",
        "soll",
        "will",
        "mag"
      ],
      [
        "du · presente",
        "kannst",
        "musst",
        "darfst",
        "sollst",
        "willst",
        "magst"
      ],
      [
        "er/sie/es · presente",
        "kann",
        "muss",
        "darf",
        "soll",
        "will",
        "mag"
      ],
      [
        "wir · presente",
        "können",
        "müssen",
        "dürfen",
        "sollen",
        "wollen",
        "mögen"
      ],
      [
        "ihr · presente",
        "könnt",
        "müsst",
        "dürft",
        "sollt",
        "wollt",
        "mögt"
      ],
      [
        "sie/Sie · presente",
        "können",
        "müssen",
        "dürfen",
        "sollen",
        "wollen",
        "mögen"
      ],
      [
        "ich/er · pretérito",
        "konnte",
        "musste",
        "durfte",
        "sollte",
        "wollte",
        "mochte"
      ],
      [
        "Participio, uso sin otro infinitivo",
        "gekonnt",
        "gemusst",
        "gedurft",
        "gesollt",
        "gewollt",
        "gemocht"
      ]
    ],
    "notes": [
      "möchte (quisiera) es Konjunktiv II de mögen: ich möchte, du möchtest, er möchte, wir möchten, ihr möchtet, sie möchten. Para una intención pasada: wollte.",
      "nicht müssen = no tener que; nicht dürfen = no poder por prohibición.",
      "Perfecto con otro infinitivo: hat lesen können (ha podido leer), no hat lesen gekonnt en el patrón didáctico estándar.",
      "El pretérito añade a konnte/musste/etc.: ∅, -st, ∅, -n, -t, -n; du konntest, wir konnten.",
      "Usos epistémicos avanzados: Er muss zu Hause sein = Debe de estar en casa (inferencia); Er soll krank sein = Se dice que está enfermo."
    ],
    "examples": [
      {
        "de": "Ich muss nicht arbeiten, aber ich darf hier nicht rauchen.",
        "es": "No tengo que trabajar, pero aquí no puedo fumar."
      },
      {
        "de": "Sie kann den Text erklären.",
        "es": "Puede explicar el texto."
      }
    ]
  },
  {
    "id": "word-order",
    "title": "Orden: verbo segundo y marco verbal",
    "deTitle": "Wortstellung / Satzklammer — orden / marco verbal",
    "level": "A1",
    "summary": "En declarativas principales el verbo conjugado ocupa la segunda posición de constituyentes, no la segunda palabra.",
    "columns": [
      "Estructura",
      "Patrón",
      "Ejemplo",
      "Lectura"
    ],
    "rows": [
      [
        "Hauptsatz — principal",
        "Un constituyente + verbo finito + resto",
        "Heute liest Anna ein Buch.",
        "Hoy Anna lee un libro."
      ],
      [
        "Satzklammer — marco verbal",
        "Verbo finito + centro + parte verbal final",
        "Anna hat heute ein Buch gelesen.",
        "Anna ha leído hoy un libro."
      ],
      [
        "Trennbares Verb — separable",
        "Raíz conjugada + centro + prefijo",
        "Anna steht früh auf.",
        "Anna se levanta temprano."
      ],
      [
        "Modal",
        "Modal finito + centro + infinitivo",
        "Anna will das Buch lesen.",
        "Anna quiere leer el libro."
      ],
      [
        "Pregunta sí/no",
        "Verbo finito + sujeto + resto",
        "Liest Anna das Buch?",
        "¿Anna lee el libro?"
      ],
      [
        "Nebensatz — subordinada",
        "Introductor + sujeto + resto + verbo final",
        "weil Anna das Buch liest",
        "porque Anna lee el libro"
      ],
      [
        "Subordinada inicial",
        "Subordinada completa + verbo principal + sujeto",
        "Weil es regnet, bleibt Anna zu Hause.",
        "Como llueve, Anna se queda en casa."
      ]
    ],
    "notes": [
      "Vorfeld = campo inicial; Mittelfeld = campo central; Nachfeld = campo posterior. El campo inicial admite un constituyente completo, incluso una subordinada.",
      "Con dos objetos nominales neutros suele ir Dat antes de Akk: Ich gebe dem Kind das Buch. Con dos pronombres suele ir Akk antes de Dat: Ich gebe es ihm. Un pronombre átono suele preceder al objeto nominal: Ich gebe ihm das Buch / Ich gebe es dem Kind.",
      "TeKaMoLo = temporal, causal, modal, local: orden orientativo de complementos circunstanciales, no ley rígida; foco y contexto pueden cambiarlo.",
      "Prefijos separables usuales: ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, weg-, zu-, zurück-. Inseparables: be-, emp-, ent-, er-, ge-, miss-, ver-, zer-. Algunos prefijos cambian de comportamiento según acento y significado."
    ],
    "examples": [
      {
        "de": "Den Text lese ich morgen.",
        "es": "El texto lo leo mañana."
      },
      {
        "de": "Ich habe ihm gestern das Buch gegeben.",
        "es": "Ayer le di el libro."
      }
    ]
  },
  {
    "id": "negation",
    "title": "Negación y alcance",
    "deTitle": "Negation — negación",
    "level": "A1",
    "summary": "kein niega grupos nominales indefinidos; nicht niega otros constituyentes o la predicación.",
    "columns": [
      "Forma",
      "Significado / función",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "kein + sustantivo",
        "ningún / no un",
        "Ich habe kein Auto.",
        "No tengo coche."
      ],
      [
        "nicht + adjetivo",
        "no",
        "Das ist nicht schwer.",
        "Eso no es difícil."
      ],
      [
        "nicht + constituyente contrastado",
        "no X (sino Y)",
        "Nicht Anna, sondern Paul kommt.",
        "No viene Anna, sino Paul."
      ],
      [
        "nicht ante parte verbal final",
        "negación de la predicación",
        "Ich kann heute nicht kommen.",
        "Hoy no puedo venir."
      ],
      [
        "nicht, sin parte verbal final",
        "posición tardía, según estructura",
        "Ich kenne ihn nicht.",
        "No lo conozco."
      ],
      [
        "nie / niemals",
        "nunca",
        "Er kommt nie zu spät.",
        "Nunca llega tarde."
      ],
      [
        "niemand / nichts",
        "nadie / nada",
        "Niemand sagt etwas. Ich sehe nichts.",
        "Nadie dice nada. No veo nada."
      ],
      [
        "noch nicht / nicht mehr",
        "todavía no / ya no",
        "Ich bin noch nicht fertig.",
        "Todavía no he terminado."
      ],
      [
        "noch kein / kein ... mehr",
        "todavía ningún / ya ningún",
        "Ich habe keine Zeit mehr.",
        "Ya no tengo tiempo."
      ]
    ],
    "notes": [
      "El alemán estándar no exige la doble negación española: Ich sehe nichts = No veo nada.",
      "No hay una posición única de nicht: identifica primero qué se niega. Suele preceder a predicativos, frases preposicionales ligadas al verbo y partes verbales finales.",
      "doch responde afirmativamente a una pregunta negativa: Kommst du nicht? — Doch! = ¿No vienes? — ¡Sí, sí voy!",
      "sondern = sino, tras negación correctiva; aber = pero."
    ],
    "examples": [
      {
        "de": "Ich lese nicht dieses Buch, sondern jenes.",
        "es": "No leo este libro, sino aquel."
      },
      {
        "de": "Du musst das nicht wissen.",
        "es": "No tienes por qué saber eso."
      }
    ]
  },
  {
    "id": "accusative",
    "title": "Acusativo: objetos y extensión",
    "deTitle": "Akkusativ — acusativo",
    "level": "A1",
    "summary": "El acusativo depende del verbo, la preposición o un uso adverbial de duración/extensión.",
    "columns": [
      "Uso",
      "Patrón / forma",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "Objeto verbal",
        "sehen, haben, lesen, brauchen + Akk",
        "Ich brauche einen Stift.",
        "Necesito un bolígrafo."
      ],
      [
        "Masculino",
        "der → den; ein → einen; er → ihn",
        "Ich sehe den Lehrer / ihn.",
        "Veo al profesor / lo veo."
      ],
      [
        "Otros géneros y plural",
        "die / das / die; eine / ein / ∅",
        "Ich lese das Buch.",
        "Leo el libro."
      ],
      [
        "Duración sin preposición",
        "einen Tag, die ganze Woche",
        "Ich bleibe eine Woche.",
        "Me quedo una semana."
      ],
      [
        "Extensión / distancia",
        "einen Kilometer",
        "Wir gehen einen Kilometer.",
        "Caminamos un kilómetro."
      ],
      [
        "Preposición",
        "durch, für, gegen, ohne, um + Akk",
        "Das ist für meinen Bruder.",
        "Eso es para mi hermano."
      ]
    ],
    "notes": [
      "No hay marca equivalente obligatoria a la a personal española: Ich sehe Anna.",
      "El objeto de un verbo no siempre es acusativo: helfen, danken, gefallen requieren dativo.",
      "Dos acusativos aparecen en algunos patrones: jemanden etwas fragen (preguntar algo a alguien); jemanden einen Freund nennen (llamar amigo a alguien)."
    ],
    "examples": [
      {
        "de": "Ich frage den Lehrer etwas.",
        "es": "Le pregunto algo al profesor."
      },
      {
        "de": "Sie sucht ihren Schlüssel.",
        "es": "Busca su llave."
      }
    ]
  },
  {
    "id": "dative",
    "title": "Dativo: régimen y destinatario",
    "deTitle": "Dativ — dativo",
    "level": "A1",
    "summary": "No significa simplemente «objeto indirecto»: numerosos verbos y preposiciones lo exigen.",
    "columns": [
      "Uso",
      "Régimen / forma",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "Destinatario",
        "geben, zeigen: Dat + Akk",
        "Ich zeige dem Kind das Bild.",
        "Le muestro la imagen al niño."
      ],
      [
        "Verbo con Dat",
        "helfen, danken, antworten",
        "Ich helfe meiner Schwester.",
        "Ayudo a mi hermana."
      ],
      [
        "Experiencia / valoración",
        "gefallen, gehören, fehlen",
        "Das Buch gefällt mir.",
        "Me gusta el libro."
      ],
      [
        "Formas de artículo",
        "dem (m/n), der (f), den (pl)",
        "mit dem Mann / der Frau",
        "con el hombre / la mujer"
      ],
      [
        "Plural nominal",
        "-n salvo plural en -n o -s",
        "mit den Kindern / den Autos",
        "con los niños / los coches"
      ],
      [
        "Preposición",
        "aus, bei, mit, nach, seit, von, zu",
        "Seit einem Jahr lerne ich Deutsch.",
        "Aprendo alemán desde hace un año."
      ]
    ],
    "notes": [
      "Pronombres: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen.",
      "fragen suele usar acusativo para la persona; antworten usa dativo: Ich frage ihn; ich antworte ihm.",
      "Es ist mir kalt / Mir ist kalt = Tengo frío; Ich bin kalt describe que yo estoy frío o soy frío.",
      "Sustantivos masculinos débiles también se marcan: dem Studenten; consulta «Declinación nominal»."
    ],
    "examples": [
      {
        "de": "Das gehört mir.",
        "es": "Eso me pertenece."
      },
      {
        "de": "Ich gebe es ihr.",
        "es": "Se lo doy a ella."
      }
    ]
  },
  {
    "id": "genitive",
    "title": "Genitivo: relación y flexión",
    "deTitle": "Genitiv — genitivo",
    "level": "B1",
    "summary": "Productivo en la lengua escrita; expresa relaciones, además de posesión.",
    "columns": [
      "Uso / clase",
      "Forma",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "Masculino fuerte",
        "des / eines + -(e)s",
        "die Farbe des Tisches",
        "el color de la mesa"
      ],
      [
        "Neutro fuerte",
        "des / eines + -(e)s",
        "das Ende des Buches",
        "el final del libro"
      ],
      [
        "Femenino",
        "der / einer; sustantivo sin marca",
        "die Tür der Wohnung",
        "la puerta del apartamento"
      ],
      [
        "Plural",
        "der; sustantivo sin marca de Gen",
        "die Ideen der Kinder",
        "las ideas de los niños"
      ],
      [
        "Masculino débil",
        "des + -(e)n",
        "die Frage des Studenten",
        "la pregunta del estudiante"
      ],
      [
        "Mixto",
        "des + -(e)ns",
        "die Bedeutung des Namens",
        "el significado del nombre"
      ],
      [
        "Nombre propio",
        "nombre + -s, ante sustantivo",
        "Annas Buch",
        "el libro de Anna"
      ],
      [
        "Nombre en s/ß/x/z",
        "apóstrofo, sin s añadida",
        "Max’ Buch",
        "el libro de Max"
      ],
      [
        "Preposición formal",
        "wegen, trotz, während + Gen",
        "wegen des Regens",
        "a causa de la lluvia"
      ],
      [
        "Verbo formal",
        "gedenken + Gen; sich erinnern + Gen",
        "Wir gedenken der Opfer.",
        "Recordamos a las víctimas."
      ]
    ],
    "notes": [
      "La elección -s/-es depende de la palabra: des Autos; des Kindes. Tras sonidos sibilantes es frecuente/necesaria -es: des Hauses. Aprende el genitivo con el sustantivo cuando sea dudoso.",
      "von + Dat sustituye muchas relaciones en el habla, pero puede ser ambiguo: das Buch von Anna.",
      "Los genitivos personales meiner/deiner/etc. son raros; para «mi libro» usa mein Buch, no meiner Buch.",
      "dessen/deren = de quien / cuyo: determinan al poseedor; las palabras siguientes siguen su propio caso: mit deren kleinen Kindern."
    ],
    "examples": [
      {
        "de": "Die Grenzen der Sprache sind schwer zu bestimmen.",
        "es": "Los límites del lenguaje son difíciles de determinar."
      },
      {
        "de": "Wegen des schlechten Wetters bleiben wir hier.",
        "es": "Nos quedamos aquí por el mal tiempo."
      }
    ]
  },
  {
    "id": "prepositions",
    "title": "Preposiciones y régimen",
    "deTitle": "Präpositionen / Rektion — preposiciones / régimen",
    "level": "A2",
    "summary": "Aprende preposición + significado contextual + caso. Un mismo equivalente español puede corresponder a varios regímenes.",
    "columns": [
      "Régimen",
      "Preposiciones · significado",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "Akk",
        "durch · a través de; für · para; gegen · contra/hacia (hora); ohne · sin; um · alrededor de/a (hora); wider · contra (formal)",
        "ohne einen Plan; um acht Uhr",
        "sin un plan; a las ocho"
      ],
      [
        "Dat",
        "aus · de/desde el interior; außer · excepto; bei · en casa de/junto a/en una entidad; mit · con; nach · hacia/después de; seit · desde; von · de/desde; zu · a/hacia",
        "mit dem Zug; bei meiner Mutter",
        "en tren; en casa de mi madre"
      ],
      [
        "Dat",
        "gegenüber · enfrente de/respecto a (antes o después); ab · desde/a partir de",
        "dem Bahnhof gegenüber; ab dem ersten Tag",
        "enfrente de la estación; desde el primer día"
      ],
      [
        "Gen (escrito formal)",
        "wegen · a causa de; trotz · a pesar de; während · durante; (an)statt · en vez de; innerhalb · dentro de; außerhalb · fuera de",
        "trotz des Regens; während des Tages",
        "a pesar de la lluvia; durante el día"
      ],
      [
        "Gen / Dat",
        "dank · gracias a; laut · según; Gen formal preferente en muchas construcciones, Dat también estándar",
        "dank deinem Rat / deines Rates",
        "gracias a tu consejo"
      ],
      [
        "Akk, normalmente sin artículo",
        "bis · hasta; ante otra preposición manda la interna",
        "bis Freitag; bis zum Bahnhof",
        "hasta el viernes; hasta la estación"
      ],
      [
        "Akk si pospuesta",
        "entlang · a lo largo de; antepuesta suele usar Gen, también Dat",
        "den Fluss entlang; entlang des Flusses",
        "a lo largo del río"
      ],
      [
        "Dat / Akk",
        "an, auf, hinter, in, neben, über, unter, vor, zwischen · consulta tabla siguiente",
        "im Zimmer / ins Zimmer",
        "en la habitación / hacia el interior de la habitación"
      ]
    ],
    "notes": [
      "wegen/trotz/während/(an)statt: aprende Gen para escritura formal; Dat existe en registros coloquiales/regionales y en ciertos entornos sin marca genitiva visible. No se presenta como un cambio de significado.",
      "ab puede llevar Akk en expresiones temporales sin artículo: ab nächsten Montag.",
      "Destino: nach Chile/Berlin, pero in die Schweiz / in die USA (países con artículo), zu Anna / zum Arzt, nach Hause. Situación: in Chile, in der Schweiz, bei Anna, zu Hause.",
      "Pronominalización de cosas: daran, dafür, damit; pregunta: woran, wofür, womit. Con personas: an ihn, für wen?, mit ihr. Añade r ante vocal: da + auf → darauf.",
      "No deduzcas el caso de una preposición ligada al verbo por «lugar/dirección»: warten auf + Akk, teilnehmen an + Dat."
    ],
    "examples": [
      {
        "de": "Ich fahre mit dem Zug nach Berlin.",
        "es": "Viajo a Berlín en tren."
      },
      {
        "de": "Worauf wartest du? — Auf den Bus.",
        "es": "¿Qué esperas? — El autobús."
      }
    ]
  },
  {
    "id": "two-way-prepositions",
    "title": "Las nueve preposiciones de doble caso",
    "deTitle": "Wechselpräpositionen — preposiciones de caso alternante",
    "level": "A2",
    "summary": "En uso espacial: Dat sitúa en una relación; Akk expresa el destino de esa relación. El movimiento por sí solo no determina el caso; Akk también puede expresar una trayectoria que cruza un espacio.",
    "columns": [
      "Preposición · español",
      "Dat · ¿dónde?",
      "Akk · ¿adónde?"
    ],
    "rows": [
      [
        "an · junto a/en contacto con",
        "an der Wand · en la pared",
        "an die Wand · hacia la pared"
      ],
      [
        "auf · sobre",
        "auf dem Tisch · sobre la mesa",
        "auf den Tisch · a la superficie de la mesa"
      ],
      [
        "hinter · detrás de",
        "hinter dem Haus · detrás de la casa",
        "hinter das Haus · hacia detrás de la casa"
      ],
      [
        "in · en/dentro de",
        "in der Stadt · en la ciudad",
        "in die Stadt · a la ciudad"
      ],
      [
        "neben · al lado de",
        "neben dem Bett · al lado de la cama",
        "neben das Bett · hacia el lado de la cama"
      ],
      [
        "über · encima de/sobre",
        "über dem Tisch · encima de la mesa",
        "über den Tisch · pasando por encima de la mesa"
      ],
      [
        "unter · debajo de/entre",
        "unter dem Tisch · debajo de la mesa",
        "unter den Tisch · hacia debajo de la mesa"
      ],
      [
        "vor · delante de/antes de",
        "vor dem Haus · delante de la casa",
        "vor das Haus · hacia delante de la casa"
      ],
      [
        "zwischen · entre",
        "zwischen den Häusern · entre las casas",
        "zwischen die Häuser · hacia el espacio entre las casas"
      ]
    ],
    "notes": [
      "Contraste clave: Ich laufe im Park (corro dentro del parque, Dat) / Ich laufe in den Park (entro corriendo al parque, Akk).",
      "Parejas útiles: liegen/stehen/sitzen + localización Dat; legen/stellen/setzen + destino Akk. hängen admite ambos patrones según uso.",
      "Usos temporales: am Montag, im Oktober, vor einer Stunde (Dat); über das Wochenende (Akk). Cada construcción tiene su régimen.",
      "Uso abstracto o ligado a verbo: pensar en = denken an + Akk; participar en = teilnehmen an + Dat. Memoriza la construcción completa."
    ],
    "examples": [
      {
        "de": "Ich lege das Buch auf den Tisch. Es liegt auf dem Tisch.",
        "es": "Pongo el libro sobre la mesa. Está sobre la mesa."
      },
      {
        "de": "Die Kinder laufen im Garten.",
        "es": "Los niños corren en el jardín."
      }
    ]
  },
  {
    "id": "perfect",
    "title": "Perfecto y participio",
    "deTitle": "Perfekt / Partizip II — perfecto / participio pasado",
    "level": "A2",
    "summary": "Auxiliar haben o sein conjugado + participio al final; habitual para narrar pasado en la conversación.",
    "columns": [
      "Patrón",
      "Formación",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "Débil",
        "ge- + raíz + -(e)t",
        "lernen → gelernt; arbeiten → gearbeitet",
        "aprender → aprendido; trabajar → trabajado"
      ],
      [
        "Fuerte",
        "ge- + raíz (a menudo cambiada) + -en",
        "lesen → gelesen; gehen → gegangen",
        "leer → leído; ir → ido"
      ],
      [
        "Mixto",
        "ge- + raíz cambiada + -t",
        "denken → gedacht; bringen → gebracht",
        "pensar → pensado; traer → traído"
      ],
      [
        "Prefijo separable",
        "prefijo + ge- + raíz + final",
        "aufstehen → aufgestanden",
        "levantarse → levantado"
      ],
      [
        "Prefijo inseparable",
        "sin ge-",
        "verstehen → verstanden; besuchen → besucht",
        "entender → entendido; visitar → visitado"
      ],
      [
        "Verbo en -ieren",
        "sin ge-; -iert",
        "studieren → studiert",
        "estudiar → estudiado"
      ],
      [
        "haben",
        "muchos verbos; transitivos y reflexivos",
        "Ich habe gelesen / mich gewaschen.",
        "He leído / me he lavado."
      ],
      [
        "sein",
        "desplazamiento/cambio de estado intransitivo; sein/bleiben/werden",
        "Sie ist gekommen / eingeschlafen.",
        "Ha venido / se ha dormido."
      ],
      [
        "Modal + infinitivo",
        "haben + infinitivo + modal infinitivo",
        "Ich habe gehen müssen.",
        "He tenido que ir."
      ]
    ],
    "notes": [
      "haben/sein no se elige por el equivalente español. Aprende el auxiliar en vocabulario.",
      "Movimiento con objeto puede usar haben: Ich habe das Auto gefahren; actividad sin cambio de lugar puede variar por verbo/contexto.",
      "Con sein: ist gewesen (ha sido/estado), ist geblieben (se ha quedado), ist geworden (se ha vuelto).",
      "Subordinada normal: weil sie den Text gelesen hat. Con modal y doble infinitivo: weil sie den Text hat lesen müssen (el auxiliar precede al grupo de infinitivos).",
      "Perfecto y pretérito no coinciden exactamente con la oposición «he leído / leí» española; la selección alemana también depende del registro y la región."
    ],
    "examples": [
      {
        "de": "Ich habe das Buch gelesen und bin nach Hause gegangen.",
        "es": "He leído el libro y me he ido a casa."
      },
      {
        "de": "Sie hat nicht kommen können.",
        "es": "No ha podido venir."
      }
    ]
  },
  {
    "id": "past",
    "title": "Pretérito y pluscuamperfecto",
    "deTitle": "Präteritum / Plusquamperfekt — pasado simple / antepasado",
    "level": "A2",
    "summary": "Präteritum predomina en narración escrita; sein/haben/modales son comunes también en conversación.",
    "columns": [
      "Persona",
      "machen · hacer",
      "gehen · ir",
      "sein · ser/estar",
      "haben · tener",
      "werden · volverse"
    ],
    "rows": [
      [
        "ich",
        "machte",
        "ging",
        "war",
        "hatte",
        "wurde"
      ],
      [
        "du",
        "machtest",
        "gingst",
        "warst",
        "hattest",
        "wurdest"
      ],
      [
        "er/sie/es",
        "machte",
        "ging",
        "war",
        "hatte",
        "wurde"
      ],
      [
        "wir",
        "machten",
        "gingen",
        "waren",
        "hatten",
        "wurden"
      ],
      [
        "ihr",
        "machtet",
        "gingt",
        "wart",
        "hattet",
        "wurdet"
      ],
      [
        "sie/Sie",
        "machten",
        "gingen",
        "waren",
        "hatten",
        "wurden"
      ]
    ],
    "notes": [
      "Débil: raíz + -(e)te + ∅/-st/∅/-n/-t/-n. Fuerte: raíz de pasado + ∅/-st/∅/-en/-t/-en; ciertos encuentros consonánticos permiten/exigen e: du fandest.",
      "Plusquamperfekt: hatte/war + Partizip II. Sitúa un hecho antes de otro pasado: Als ich ankam, war sie schon gegangen.",
      "arbeitete, dachte, brachte son formas de pretérito; dachte/ brachte son mixtas, no un patrón productivo para cualquier verbo.",
      "En narración, no alternes tiempos solo para imitar los tiempos españoles; observa el marco temporal y el registro del texto alemán."
    ],
    "examples": [
      {
        "de": "Ich war müde und hatte keine Zeit.",
        "es": "Estaba cansado y no tenía tiempo."
      },
      {
        "de": "Als wir ankamen, hatte der Film schon begonnen.",
        "es": "Cuando llegamos, la película ya había empezado."
      }
    ]
  },
  {
    "id": "adjective-endings",
    "title": "Adjetivos: las tres declinaciones completas",
    "deTitle": "Adjektivdeklination — declinación adjetival",
    "level": "A2",
    "summary": "Antes del sustantivo el adjetivo marca caso, género y número. Las tablas dan terminaciones; bueno = gut-.",
    "columns": [
      "Patrón / caso",
      "Masculino",
      "Femenino",
      "Neutro",
      "Plural"
    ],
    "rows": [
      [
        "Fuerte · Nom",
        "-er",
        "-e",
        "-es",
        "-e"
      ],
      [
        "Fuerte · Akk",
        "-en",
        "-e",
        "-es",
        "-e"
      ],
      [
        "Fuerte · Dat",
        "-em",
        "-er",
        "-em",
        "-en"
      ],
      [
        "Fuerte · Gen",
        "-en",
        "-er",
        "-en",
        "-er"
      ],
      [
        "Débil · Nom",
        "-e",
        "-e",
        "-e",
        "-en"
      ],
      [
        "Débil · Akk",
        "-en",
        "-e",
        "-e",
        "-en"
      ],
      [
        "Débil · Dat",
        "-en",
        "-en",
        "-en",
        "-en"
      ],
      [
        "Débil · Gen",
        "-en",
        "-en",
        "-en",
        "-en"
      ],
      [
        "Mixta · Nom",
        "-er",
        "-e",
        "-es",
        "-en"
      ],
      [
        "Mixta · Akk",
        "-en",
        "-e",
        "-es",
        "-en"
      ],
      [
        "Mixta · Dat",
        "-en",
        "-en",
        "-en",
        "-en"
      ],
      [
        "Mixta · Gen",
        "-en",
        "-en",
        "-en",
        "-en"
      ]
    ],
    "notes": [
      "stark (fuerte): sin determinante que marque plenamente: guter Wein, gutes Brot, mit gutem Wein. Gen masculino/neutro fuerte usa -en: guten Weines, guten Brotes.",
      "schwach (débil): tras der/die/das, dies-, jen-, etc.: der gute Wein, das gute Brot, die guten Bücher.",
      "gemischt (mixta): tras ein-, kein- y posesivos: ein guter Wein, ein gutes Brot, meine guten Bücher. ein no tiene plural; plural mixto aquí significa keine/meine/etc.",
      "Predicativo y adverbial sin terminación: Der Wein ist gut; sie spricht gut. La forma comparativa sí tiene su -er: sie spricht besser.",
      "Varios adjetivos coordinados suelen compartir terminación: mit gutem deutschem Wein. Las variaciones tras ciertos cuantificadores requieren consultar la construcción.",
      "Adjetivos nominalizados conservan declinación y llevan mayúscula: ein Deutscher, der Deutsche, mit einem Deutschen; etwas Neues, nichts Wichtiges."
    ],
    "examples": [
      {
        "de": "Ich lese ein gutes Buch und spreche mit einem guten Freund.",
        "es": "Leo un buen libro y hablo con un buen amigo."
      },
      {
        "de": "Gute Ideen brauchen klare Begriffe.",
        "es": "Las buenas ideas necesitan conceptos claros."
      }
    ]
  },
  {
    "id": "subordinate",
    "title": "Subordinadas y sus conectores",
    "deTitle": "Nebensatz / Subjunktion — subordinada / conjunción subordinante",
    "level": "A2",
    "summary": "En la subordinada introducida, el verbo finito va normalmente al final. Separa principal y subordinada con coma.",
    "columns": [
      "Introductor · español",
      "Uso",
      "Ejemplo alemán",
      "Traducción"
    ],
    "rows": [
      [
        "dass · que",
        "contenido de afirmación",
        "Ich weiß, dass er kommt.",
        "Sé que viene."
      ],
      [
        "ob · si",
        "interrogativa indirecta sí/no",
        "Ich weiß nicht, ob er kommt.",
        "No sé si viene."
      ],
      [
        "weil · porque",
        "causa",
        "Ich bleibe, weil es regnet.",
        "Me quedo porque llueve."
      ],
      [
        "da · puesto que/como",
        "causa presentada como conocida",
        "Da es regnet, bleiben wir.",
        "Como llueve, nos quedamos."
      ],
      [
        "wenn · si/cuando",
        "condición; tiempo repetido o futuro",
        "Wenn ich Zeit habe, lese ich.",
        "Si/cuando tengo tiempo, leo."
      ],
      [
        "als · cuando",
        "hecho temporal único pasado",
        "Als ich klein war, las ich viel.",
        "Cuando era pequeño, leía mucho."
      ],
      [
        "obwohl · aunque",
        "concesión factual",
        "Er kommt, obwohl er müde ist.",
        "Viene aunque está cansado."
      ],
      [
        "bevor / nachdem · antes de que / después de que",
        "orden temporal",
        "Nachdem sie gegessen hatte, ging sie.",
        "Después de haber comido, se fue."
      ],
      [
        "während / seit(dem) · mientras / desde que",
        "simultaneidad / inicio",
        "Während sie liest, höre ich Musik.",
        "Mientras ella lee, escucho música."
      ],
      [
        "bis / sobald · hasta que / en cuanto",
        "límite / inicio inmediato",
        "Warte, bis ich fertig bin.",
        "Espera hasta que termine."
      ],
      [
        "damit / sodass · para que / de modo que",
        "finalidad / consecuencia",
        "Ich erkläre es, damit du es verstehst.",
        "Lo explico para que lo entiendas."
      ]
    ],
    "notes": [
      "Principio de marco: ..., weil sie das Buch lesen will; ..., weil sie das Buch gelesen hat.",
      "Excepción importante con Ersatzinfinitiv (infinitivo sustitutivo) de modal: ..., weil sie das Buch hat lesen müssen.",
      "Una subordinada al inicio ocupa el campo inicial de la principal: Wenn er kommt, gehen wir.",
      "dass (que, conjunción) ≠ das (el/lo, artículo o pronombre).",
      "Una interrogativa indirecta con W conserva verbo final: Ich weiß, wo er wohnt (Sé dónde vive)."
    ],
    "examples": [
      {
        "de": "Obwohl der Text kurz ist, ist er schwierig.",
        "es": "Aunque el texto es corto, es difícil."
      },
      {
        "de": "Ich frage mich, warum sie gegangen ist.",
        "es": "Me pregunto por qué se ha ido."
      }
    ]
  },
  {
    "id": "relative",
    "title": "Relativos: paradigma y caso propio",
    "deTitle": "Relativpronomen / Relativsatz — pronombre / oración relativos",
    "level": "B1",
    "summary": "Género y número vienen del antecedente; el caso depende de la función dentro de la relativa.",
    "columns": [
      "Caso",
      "Masculino",
      "Femenino",
      "Neutro",
      "Plural"
    ],
    "rows": [
      [
        "Nom",
        "der",
        "die",
        "das",
        "die"
      ],
      [
        "Akk",
        "den",
        "die",
        "das",
        "die"
      ],
      [
        "Dat",
        "dem",
        "der",
        "dem",
        "denen"
      ],
      [
        "Gen",
        "dessen",
        "deren",
        "dessen",
        "deren"
      ]
    ],
    "notes": [
      "Coma antes y después de una relativa intercalada; verbo finito al final: Der Mann, den ich sehe, ist hier.",
      "Una preposición precede al relativo: der Mann, mit dem ich spreche (el hombre con quien hablo).",
      "dessen/deren = cuyo/de quien: der Autor, dessen Buch ich lese. El sustantivo poseído no determina dessen/deren; lo determina el antecedente.",
      "Tras alles, etwas, nichts, das y un superlativo neutro nominalizado, es usual was: alles, was ich weiß (todo lo que sé); das Beste, was ich kenne.",
      "wo refiere a lugares; para personas no reemplaza al relativo en el estándar enseñado. Para una frase anterior: Sie ging, was mich überraschte (Se fue, lo cual me sorprendió).",
      "welcher/welche/welches es alternativa más formal en Nom/Akk/Dat, con terminaciones como dieser; para posesión usa dessen/deren."
    ],
    "examples": [
      {
        "de": "Die Frau, der ich helfe, ist Ärztin.",
        "es": "La mujer a quien ayudo es médica."
      },
      {
        "de": "Das sind die Kinder, deren Mutter hier arbeitet.",
        "es": "Estos son los niños cuya madre trabaja aquí."
      }
    ]
  },
  {
    "id": "passive",
    "title": "Pasiva: proceso, estado y tiempos",
    "deTitle": "Vorgangspassiv / Zustandspassiv — pasiva de proceso / de estado",
    "level": "B1",
    "summary": "werden + participio enfoca el proceso; sein + participio suele expresar su estado resultante.",
    "columns": [
      "Forma",
      "Patrón",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "Presente de proceso",
        "wird + Partizip II",
        "Das Buch wird gelesen.",
        "El libro es leído / se está leyendo."
      ],
      [
        "Pretérito de proceso",
        "wurde + Partizip II",
        "Das Buch wurde gelesen.",
        "El libro fue leído / se leyó."
      ],
      [
        "Perfecto de proceso",
        "ist + Partizip II + worden",
        "Das Buch ist gelesen worden.",
        "El libro ha sido leído."
      ],
      [
        "Pluscuamperfecto de proceso",
        "war + Partizip II + worden",
        "Das Buch war gelesen worden.",
        "El libro había sido leído."
      ],
      [
        "Futuro de proceso",
        "wird + Partizip II + werden",
        "Das Buch wird gelesen werden.",
        "El libro será leído."
      ],
      [
        "Modal + pasiva",
        "modal + Partizip II + werden",
        "Das Buch muss gelesen werden.",
        "El libro debe ser leído."
      ],
      [
        "Estado presente",
        "ist + Partizip II",
        "Die Tür ist geschlossen.",
        "La puerta está cerrada."
      ],
      [
        "Estado pasado",
        "war + Partizip II",
        "Die Tür war geschlossen.",
        "La puerta estaba cerrada."
      ],
      [
        "Impersonal",
        "sin nuevo sujeto; verbo singular",
        "Hier wird gearbeitet.",
        "Aquí se trabaja."
      ]
    ],
    "notes": [
      "Objeto Akk de activa → sujeto Nom de pasiva: Man liest den Text → Der Text wird gelesen. El objeto Dat conserva caso: Dem Kind wird geholfen.",
      "Agente usual: von + Dat; medio/causa puede usar durch + Akk. Su distinción depende del contexto, no de una equivalencia fija.",
      "worden es la forma de werden auxiliar pasivo; geworden es participio del verbo «volverse»: Sie ist Ärztin geworden (Se ha hecho médica).",
      "El es inicial de la pasiva impersonal es relleno posicional, desaparece si otro elemento va primero: Es wird hier gearbeitet → Hier wird gearbeitet.",
      "No todo verbo transitivo admite todas las pasivas; sein (ser/estar), haben (tener) en relación posesiva y verbos reflexivos tienen restricciones."
    ],
    "examples": [
      {
        "de": "Der Text wurde von einer Studentin übersetzt.",
        "es": "El texto fue traducido por una estudiante."
      },
      {
        "de": "Dem Patienten wird geholfen.",
        "es": "Se ayuda al paciente."
      }
    ]
  },
  {
    "id": "konjunktiv2",
    "title": "Hipótesis, cortesía e irreales",
    "deTitle": "Konjunktiv II — modo hipotético/irreal",
    "level": "B1",
    "summary": "No indica pasado por sí solo. Formas frecuentes: wäre (sería/estaría), hätte (tendría), könnte (podría); alternativa würde + infinitivo.",
    "columns": [
      "Persona",
      "sein",
      "haben",
      "werden + infinitivo",
      "können",
      "müssen"
    ],
    "rows": [
      [
        "ich",
        "wäre",
        "hätte",
        "würde",
        "könnte",
        "müsste"
      ],
      [
        "du",
        "wär(e)st",
        "hättest",
        "würdest",
        "könntest",
        "müsstest"
      ],
      [
        "er/sie/es",
        "wäre",
        "hätte",
        "würde",
        "könnte",
        "müsste"
      ],
      [
        "wir",
        "wären",
        "hätten",
        "würden",
        "könnten",
        "müssten"
      ],
      [
        "ihr",
        "wär(e)t",
        "hättet",
        "würdet",
        "könntet",
        "müsstet"
      ],
      [
        "sie/Sie",
        "wären",
        "hätten",
        "würden",
        "könnten",
        "müssten"
      ]
    ],
    "notes": [
      "Se forma sobre la raíz de pretérito: fuerte a menudo con Umlaut (cambio vocálico a→ä, o→ö, u→ü) + -e/-est/-e/-en/-et/-en: kam → käme.",
      "Muchos débiles coinciden con el pretérito: machte. würde machen evita ambigüedad y es habitual; sein/haben/modales conservan con frecuencia las formas simples.",
      "Otros modales: dürfte (podría por permiso), sollte (debería), wollte (querría), möchte (quisiera). sollte/wollte no llevan Umlaut.",
      "Irreal pasado: hätte/ wäre + Partizip II: Wenn ich Zeit gehabt hätte, wäre ich gekommen. Con modal y otro infinitivo: hätte kommen können.",
      "En alemán la condición hipotética puede llevar würde: Wenn ich mehr Zeit hätte / Wenn ich mehr arbeiten würde... No traslades mecánicamente la restricción española de «si + condicional»."
    ],
    "examples": [
      {
        "de": "Könnten Sie das bitte erklären?",
        "es": "¿Podría explicarlo, por favor?"
      },
      {
        "de": "Wenn ich mehr Zeit hätte, würde ich mehr lesen.",
        "es": "Si tuviera más tiempo, leería más."
      },
      {
        "de": "Ich wäre gekommen, wenn ich Zeit gehabt hätte.",
        "es": "Habría venido si hubiera tenido tiempo."
      }
    ]
  },
  {
    "id": "konjunktiv1",
    "title": "Discurso referido",
    "deTitle": "Konjunktiv I — modo de discurso referido",
    "level": "B2",
    "summary": "Habitual en periodismo y exposición formal. Marca atribución de una afirmación, sin exigir que sea falsa.",
    "columns": [
      "Persona",
      "sein",
      "haben",
      "werden",
      "lernen · ejemplo regular"
    ],
    "rows": [
      [
        "ich",
        "sei",
        "habe",
        "werde",
        "lerne"
      ],
      [
        "du",
        "seiest / seist",
        "habest",
        "werdest",
        "lernest"
      ],
      [
        "er/sie/es",
        "sei",
        "habe",
        "werde",
        "lerne"
      ],
      [
        "wir",
        "seien",
        "haben",
        "werden",
        "lernen"
      ],
      [
        "ihr",
        "seiet",
        "habet",
        "werdet",
        "lernet"
      ],
      [
        "sie/Sie",
        "seien",
        "haben",
        "werden",
        "lernen"
      ]
    ],
    "notes": [
      "Raíz de presente + -e/-est/-e/-en/-et/-en; sein es excepcional. No expresa una oposición temporal equivalente al subjuntivo español.",
      "La tercera persona singular suele ser distintiva: er sagt → er sage; er hat → er habe. Muchas otras formas coinciden con indicativo.",
      "Cuando coincide con indicativo, se puede usar Konjunktiv II; si también es ambiguo, würde + infinitivo. No es obligatorio interpretar esas sustituciones como duda.",
      "Pasado referido: Er sagt, er habe den Text gelesen / er sei gegangen. Futuro referido: Er sagt, er werde kommen.",
      "No hay retroceso de tiempo obligatorio como el inglés: Er sagte, er sei krank = Dijo que estaba enfermo (simultáneo al decir).",
      "También en fórmulas: Es sei angenommen, dass... = Supóngase que..."
    ],
    "examples": [
      {
        "de": "Die Autorin erklärt, die Theorie sei unvollständig.",
        "es": "La autora afirma que la teoría está incompleta."
      },
      {
        "de": "Er sagte, er habe die Frage verstanden.",
        "es": "Dijo que había entendido la pregunta."
      }
    ]
  },
  {
    "id": "connectors",
    "title": "Conectores: significado y sintaxis",
    "deTitle": "Konnektoren — conectores",
    "level": "A2",
    "summary": "Distingue coordinación, subordinación y adverbios conectores: la misma relación lógica puede tener órdenes distintos.",
    "columns": [
      "Clase",
      "Conector · español",
      "Orden",
      "Ejemplo"
    ],
    "rows": [
      [
        "Coordinación",
        "und · y; oder · o; aber · pero; sondern · sino; denn · pues/porque",
        "No ocupan el campo inicial; cada principal conserva V2",
        "Ich lese, denn ich habe Zeit."
      ],
      [
        "Subordinación",
        "weil/da · porque/puesto que; obwohl · aunque; wenn · si/cuando; dass · que",
        "Verbo finito final",
        "Ich lese, weil ich Zeit habe."
      ],
      [
        "Adverbio conector",
        "deshalb/deswegen/daher · por eso; trotzdem/dennoch · sin embargo",
        "Ocupa un constituyente; si va primero, verbo después",
        "Ich habe Zeit. Deshalb lese ich."
      ],
      [
        "Adición",
        "außerdem · además; zudem · además; auch · también",
        "Adverbio, posición según foco",
        "Außerdem lerne ich Deutsch."
      ],
      [
        "Contraste",
        "jedoch/allerdings · sin embargo; dagegen · en cambio",
        "Adverbio",
        "Der Text ist kurz. Er ist jedoch schwierig."
      ],
      [
        "Secuencia",
        "zuerst · primero; dann · luego; danach · después; schließlich · finalmente",
        "Adverbio",
        "Danach übersetze ich den Text."
      ],
      [
        "Bipartito",
        "entweder ... oder · o ... o; weder ... noch · ni ... ni",
        "Coordina elementos paralelos",
        "Ich lese weder Kant noch Hegel."
      ],
      [
        "Bipartito",
        "sowohl ... als auch · tanto ... como; nicht nur ... sondern auch · no solo ... sino también",
        "Coordina elementos paralelos",
        "Sie spricht sowohl Deutsch als auch Spanisch."
      ],
      [
        "Proporcional",
        "je ... desto/umso · cuanto ... tanto",
        "je: verbo final; desto: comparativo + V2",
        "Je mehr ich lese, desto besser verstehe ich den Text."
      ]
    ],
    "notes": [
      "denn da la causa; deshalb introduce el resultado. Ich bin müde, denn ich habe gearbeitet / Ich habe gearbeitet, deshalb bin ich müde.",
      "aber/sondern no provocan inversión por sí solos: ..., aber ich bleibe. trotzdem sí ocupa el campo inicial: Trotzdem bleibe ich.",
      "Usa la categoría sintáctica además de la traducción para construir la frase.",
      "weil con V2 aparece en ciertas conversaciones; el modelo didáctico para escritura estándar enseña verbo final."
    ],
    "examples": [
      {
        "de": "Der Text ist schwierig, trotzdem lese ich ihn.",
        "es": "El texto es difícil; aun así lo leo."
      },
      {
        "de": "Je genauer wir fragen, desto klarer wird das Problem.",
        "es": "Cuanto más precisamente preguntamos, más claro se vuelve el problema."
      }
    ]
  },
  {
    "id": "comparative",
    "title": "Comparación y superlativo",
    "deTitle": "Komparation — gradación del adjetivo",
    "level": "A2",
    "summary": "Comparativo en -er; superlativo en -(e)st-. Las formas atributivas reciben además terminación de declinación.",
    "columns": [
      "Positivo · español",
      "Comparativo",
      "Superlativo adverbial/predicativo",
      "Ejemplo atributivo"
    ],
    "rows": [
      [
        "klein · pequeño",
        "kleiner",
        "am kleinsten",
        "das kleinste Buch"
      ],
      [
        "schnell · rápido",
        "schneller",
        "am schnellsten",
        "der schnellste Zug"
      ],
      [
        "alt · viejo",
        "älter",
        "am ältesten",
        "die älteste Idee"
      ],
      [
        "groß · grande",
        "größer",
        "am größten",
        "die größte Stadt"
      ],
      [
        "gut · bueno",
        "besser",
        "am besten",
        "das beste Beispiel"
      ],
      [
        "viel · mucho",
        "mehr",
        "am meisten",
        "die meisten Bücher"
      ],
      [
        "gern · con gusto",
        "lieber",
        "am liebsten",
        "— (adverbio)"
      ],
      [
        "hoch · alto",
        "höher",
        "am höchsten",
        "der höchste Berg"
      ],
      [
        "nah · cercano",
        "näher",
        "am nächsten",
        "die nächste Station"
      ],
      [
        "dunkel · oscuro",
        "dunkler",
        "am dunkelsten",
        "ein dunklerer Raum"
      ]
    ],
    "notes": [
      "Desigualdad: größer als = más grande que. Igualdad: so groß wie = tan grande como.",
      "Varios monosílabos toman Umlaut; aprende cada palabra. No todos: schnell → schneller.",
      "Adverbial/predicativo: besser, am besten. Atributivo: ein besserer Text, der beste Text.",
      "Terminación -(e)st según raíz: neu → am neuesten; heiß → am heißesten. groß → am größten.",
      "mehr/weniger (más/menos) son invariables: mehr Zeit, weniger Bücher. No formes mehre."
    ],
    "examples": [
      {
        "de": "Dieser Text ist kürzer als jener, aber genauso schwierig.",
        "es": "Este texto es más corto que aquel, pero igual de difícil."
      },
      {
        "de": "Ich lese lieber zu Hause.",
        "es": "Prefiero leer en casa."
      }
    ]
  },
  {
    "id": "infinitive",
    "title": "Infinitivos y finalidad",
    "deTitle": "Infinitiv / zu-Infinitiv — infinitivo / infinitivo con zu",
    "level": "B1",
    "summary": "El infinitivo conserva el régimen de su verbo. La presencia de zu depende de la construcción.",
    "columns": [
      "Construcción",
      "Patrón",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "Modal",
        "infinitivo sin zu",
        "Ich will lernen.",
        "Quiero aprender."
      ],
      [
        "sehen/hören/lassen",
        "infinitivo sin zu, con objeto según uso",
        "Ich höre sie singen.",
        "La oigo cantar."
      ],
      [
        "Muchos verbos/adjetivos",
        "zu + infinitivo",
        "Ich versuche, den Text zu verstehen.",
        "Intento entender el texto."
      ],
      [
        "Verbo separable",
        "prefijo + zu + raíz",
        "Es ist schwer, früh aufzustehen.",
        "Es difícil levantarse temprano."
      ],
      [
        "Verbo inseparable",
        "zu + infinitivo entero",
        "Es ist wichtig, das zu verstehen.",
        "Es importante entender eso."
      ],
      [
        "Finalidad",
        "um ... zu + infinitivo",
        "Ich lese, um Deutsch zu lernen.",
        "Leo para aprender alemán."
      ],
      [
        "Alternativa / ausencia",
        "anstatt ... zu / ohne ... zu",
        "Sie ging, ohne etwas zu sagen.",
        "Se fue sin decir nada."
      ],
      [
        "Anterioridad",
        "Partizip II + zu haben/sein",
        "Sie behauptet, ihn gesehen zu haben.",
        "Afirma haberlo visto."
      ],
      [
        "Obligación / posibilidad",
        "haben/sein + zu-Infinitiv",
        "Der Text ist zu übersetzen.",
        "El texto debe/puede traducirse, según contexto."
      ]
    ],
    "notes": [
      "um ... zu normalmente comparte sujeto implícito con la principal. Con sujeto diferente usa damit: Ich spreche langsam, damit du mich verstehst.",
      "Ortografía de 2024: las subordinadas infinitivas ampliadas se separan con coma, también sin introductor: Ich versuche, den Text zu verstehen. Un zu-infinitivo no ampliado admite interpretación como grupo sin coma; si forma parte de un predicado verbal compuesto, no se separa: Sie scheint zu schlafen.",
      "lassen = dejar / hacer que; Ich lasse das Auto reparieren = Hago reparar el coche.",
      "brauchen negado con infinitivo: du brauchst nicht (zu) kommen = no necesitas venir; para escritura cuidada se enseña zu.",
      "Perfecto con modal: hat lesen können; con lassen: hat das Auto reparieren lassen."
    ],
    "examples": [
      {
        "de": "Ich habe keine Zeit, alles zu lesen.",
        "es": "No tengo tiempo para leerlo todo."
      },
      {
        "de": "Sie lernt Deutsch, um die Texte im Original zu lesen.",
        "es": "Aprende alemán para leer los textos en su lengua original."
      }
    ]
  },
  {
    "id": "noun-declension",
    "title": "Declinación nominal, plural y género",
    "deTitle": "Deklination der Nomen — declinación de sustantivos",
    "level": "A2",
    "summary": "Aprende cada sustantivo como artículo + singular + plural. La terminación no permite deducir todo el paradigma.",
    "columns": [
      "Caso / clase",
      "Fuerte m · Mann",
      "Fuerte n · Kind",
      "Femenino · Frau",
      "Débil m · Student",
      "Mixto m · Name"
    ],
    "rows": [
      [
        "Nom singular",
        "der Mann",
        "das Kind",
        "die Frau",
        "der Student",
        "der Name"
      ],
      [
        "Akk singular",
        "den Mann",
        "das Kind",
        "die Frau",
        "den Studenten",
        "den Namen"
      ],
      [
        "Dat singular",
        "dem Mann",
        "dem Kind",
        "der Frau",
        "dem Studenten",
        "dem Namen"
      ],
      [
        "Gen singular",
        "des Mannes",
        "des Kindes",
        "der Frau",
        "des Studenten",
        "des Namens"
      ],
      [
        "Nom/Akk plural",
        "die Männer",
        "die Kinder",
        "die Frauen",
        "die Studenten",
        "die Namen"
      ],
      [
        "Dat plural",
        "den Männern",
        "den Kindern",
        "den Frauen",
        "den Studenten",
        "den Namen"
      ],
      [
        "Gen plural",
        "der Männer",
        "der Kinder",
        "der Frauen",
        "der Studenten",
        "der Namen"
      ]
    ],
    "notes": [
      "N-Deklination (declinación en n): muchos masculinos de persona/animal llevan -(e)n salvo Nom singular: der Junge → den/dem/des Jungen; der Mensch → Menschen; der Herr → Herrn (singular), Herren (plural). No todos los masculinos humanos pertenecen a esta clase.",
      "Mixtos: der Name → Namen / Namens; der Gedanke → Gedanken / Gedankens. Neutro especial das Herz → Akk das Herz, Dat dem Herzen (también Herz según uso), Gen des Herzens; plural die Herzen.",
      "Plurales principales: -e (Tag/Tage), -(e)n (Frau/Frauen), -er (Kind/Kinder), -s (Auto/Autos), ∅ (Lehrer/Lehrer), con Umlaut posible (Mann/Männer, Mutter/Mütter). Memoriza, no generes por una regla única.",
      "Género fiable por sufijo: -ung/-heit/-keit/-schaft/-ion/-tät femeninos; -chen/-lein neutros; infinitivos nominalizados neutros: das Lesen. El género de compuestos lo determina el último sustantivo: die Haustür.",
      "Todos los sustantivos y nominalizaciones llevan mayúscula. Género gramatical ≠ sexo: das Mädchen = la niña.",
      "Algunos sustantivos solo se usan normalmente en singular (das Wissen, el saber/conocimiento) o plural (die Eltern, los padres); no inventes formas."
    ],
    "examples": [
      {
        "de": "Ich spreche mit einem Studenten über den Namen des Autors.",
        "es": "Hablo con un estudiante sobre el nombre del autor."
      },
      {
        "de": "Die Bücher der Kinder liegen auf den Tischen.",
        "es": "Los libros de los niños están sobre las mesas."
      }
    ]
  },
  {
    "id": "reflexive",
    "title": "Reflexivos: acusativo y dativo",
    "deTitle": "Reflexivpronomen / reflexive Verben — pronombre / verbos reflexivos",
    "level": "A2",
    "summary": "En tercera persona la forma es sich en Akk y Dat; en primera/segunda persona coincide con el pronombre personal de objeto.",
    "columns": [
      "Persona",
      "Akk",
      "Dat",
      "Ejemplo"
    ],
    "rows": [
      [
        "ich",
        "mich",
        "mir",
        "Ich wasche mich / mir die Hände."
      ],
      [
        "du",
        "dich",
        "dir",
        "Du wäschst dich / dir die Hände."
      ],
      [
        "er/sie/es",
        "sich",
        "sich",
        "Er wäscht sich / sich die Hände."
      ],
      [
        "wir",
        "uns",
        "uns",
        "Wir waschen uns / uns die Hände."
      ],
      [
        "ihr",
        "euch",
        "euch",
        "Ihr wascht euch / euch die Hände."
      ],
      [
        "sie/Sie",
        "sich",
        "sich",
        "Sie waschen sich / sich die Hände."
      ]
    ],
    "notes": [
      "Si otro objeto Akk expresa lo lavado, el reflexivo suele ser Dat: Ich wasche mir die Hände = Me lavo las manos.",
      "Régimen léxico: sich interessieren für + Akk (interesarse por); sich erinnern an + Akk (recordar); sich freuen auf + Akk (esperar con ilusión), über + Akk (alegrarse por algo).",
      "La reflexividad no siempre coincide con español: sich beeilen = darse prisa; aufstehen = levantarse (sin sich).",
      "Verbos reflexivos forman el perfecto con haben: Ich habe mich beeilt.",
      "einander = uno a otro, recíproco; sich puede ser reflexivo o recíproco según contexto: Sie sehen sich."
    ],
    "examples": [
      {
        "de": "Ich interessiere mich für die Philosophie des Geistes.",
        "es": "Me interesa la filosofía de la mente."
      },
      {
        "de": "Ich habe mir ein Buch gekauft.",
        "es": "Me he comprado un libro."
      }
    ]
  },
  {
    "id": "demonstratives",
    "title": "Demostrativos y cuantificadores",
    "deTitle": "Demonstrativpronomen / Quantifikatoren — demostrativos / cuantificadores",
    "level": "A2",
    "summary": "dies- (este) y jen- (aquel) siguen el paradigma fuerte de determinante. der/die/das puede usarse como pronombre enfático.",
    "columns": [
      "Serie / caso",
      "Masculino",
      "Femenino",
      "Neutro",
      "Plural"
    ],
    "rows": [
      [
        "dies- · Nom",
        "dieser",
        "diese",
        "dieses",
        "diese"
      ],
      [
        "dies- · Akk",
        "diesen",
        "diese",
        "dieses",
        "diese"
      ],
      [
        "dies- · Dat",
        "diesem",
        "dieser",
        "diesem",
        "diesen"
      ],
      [
        "dies- · Gen",
        "dieses",
        "dieser",
        "dieses",
        "dieser"
      ],
      [
        "Pronombre der · Nom",
        "der",
        "die",
        "das",
        "die"
      ],
      [
        "Pronombre der · Akk",
        "den",
        "die",
        "das",
        "die"
      ],
      [
        "Pronombre der · Dat",
        "dem",
        "der",
        "dem",
        "denen"
      ],
      [
        "Pronombre der · Gen",
        "dessen",
        "deren / derer",
        "dessen",
        "deren / derer"
      ],
      [
        "jed- · Nom (cada)",
        "jeder",
        "jede",
        "jedes",
        "—; alle (todos)"
      ],
      [
        "jed- · Akk",
        "jeden",
        "jede",
        "jedes",
        "—; alle"
      ],
      [
        "jed- · Dat",
        "jedem",
        "jeder",
        "jedem",
        "—; allen"
      ],
      [
        "jed- · Gen",
        "jedes",
        "jeder",
        "jedes",
        "—; aller"
      ]
    ],
    "notes": [
      "jen- y welch- (qué/cuál) toman las mismas terminaciones que dies-. derjenige (aquel que) y derselbe (el mismo) declinan ambas partes: denjenigen, demselben.",
      "jeder normalmente es singular; alle es plural (todos). Alles = todo como neutro singular: Alles ist klar. Alle sind hier = Todos están aquí.",
      "deren suele retomar un referente anterior; derer puede anticipar una relativa: die Zahl derer, die... (el número de quienes...). Para relativos genitivos usa dessen/deren.",
      "Después de dies-/jen-/jed-/all- flexionados el adjetivo suele ser débil: diese guten Bücher, alle guten Bücher.",
      "Sin contexto, Das ist... permite identificar cualquier género: Das ist meine Schwester. Das son correlatos identificativos, no necesariamente artículo neutro."
    ],
    "examples": [
      {
        "de": "Dieses Buch ist kurz, jenes ist länger.",
        "es": "Este libro es corto; aquel es más largo."
      },
      {
        "de": "Jeder Mensch kann fragen, aber nicht alle Fragen sind gleich.",
        "es": "Cada persona puede preguntar, pero no todas las preguntas son iguales."
      }
    ]
  },
  {
    "id": "questions",
    "title": "Preguntas: formas y casos",
    "deTitle": "Fragesatz / Fragewörter — oración / palabras interrogativas",
    "level": "A1",
    "summary": "Sí/no: verbo primero. Con W: palabra interrogativa + verbo conjugado + sujeto, salvo que la interrogativa sea el sujeto.",
    "columns": [
      "Forma",
      "Significado / caso",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "wer?",
        "¿quién? · Nom",
        "Wer kommt?",
        "¿Quién viene?"
      ],
      [
        "wen?",
        "¿a quién? · Akk",
        "Wen siehst du?",
        "¿A quién ves?"
      ],
      [
        "wem?",
        "¿a quién? · Dat",
        "Wem hilfst du?",
        "¿A quién ayudas?"
      ],
      [
        "wessen?",
        "¿de quién? · Gen",
        "Wessen Buch ist das?",
        "¿De quién es ese libro?"
      ],
      [
        "was?",
        "¿qué? · Nom/Akk",
        "Was liest du?",
        "¿Qué lees?"
      ],
      [
        "wo? / wohin? / woher?",
        "¿dónde? / ¿adónde? / ¿de dónde?",
        "Wo wohnst du? Wohin gehst du?",
        "¿Dónde vives? ¿Adónde vas?"
      ],
      [
        "wann? / wie lange? / seit wann?",
        "¿cuándo? / ¿cuánto tiempo? / ¿desde cuándo?",
        "Seit wann lernst du Deutsch?",
        "¿Desde cuándo aprendes alemán?"
      ],
      [
        "warum? / wieso? / weshalb?",
        "¿por qué?",
        "Warum bleibst du?",
        "¿Por qué te quedas?"
      ],
      [
        "wie? / wie viel(e)?",
        "¿cómo? / ¿cuánto(s)?",
        "Wie viele Bücher hast du?",
        "¿Cuántos libros tienes?"
      ],
      [
        "welch-?",
        "¿qué/cuál? · declina como dies-",
        "Welches Buch liest du?",
        "¿Qué libro lees?"
      ],
      [
        "was für ein-?",
        "¿qué clase de...? · ein declina",
        "Was für ein Buch liest du?",
        "¿Qué clase de libro lees?"
      ],
      [
        "wo(r)- + preposición",
        "¿preposición + qué?, para cosas",
        "Worüber sprichst du?",
        "¿De qué hablas?"
      ]
    ],
    "notes": [
      "Con personas conserva preposición + interrogativo: Mit wem sprichst du? (¿Con quién hablas?).",
      "Ante una pregunta negativa, una respuesta completa evita ambigüedad. doch contradice expresamente la negación: Bist du nicht müde? — Doch, ich bin müde = ¿No estás cansado? — Sí, sí estoy cansado.",
      "Preguntas indirectas: ob para sí/no, W para abiertas; verbo final: Ich weiß nicht, ob er kommt / wann er kommt.",
      "welch- y was für ein- se declinan según la función del grupo: Mit welchem Buch? / Mit was für einem Buch?"
    ],
    "examples": [
      {
        "de": "Hast du Zeit? — Ja, ich habe Zeit.",
        "es": "¿Tienes tiempo? — Sí, tengo tiempo."
      },
      {
        "de": "Wem gehört das Buch?",
        "es": "¿A quién pertenece el libro?"
      }
    ]
  },
  {
    "id": "future",
    "title": "Futuro y conjetura",
    "deTitle": "Futur I / Futur II — futuro / futuro perfecto",
    "level": "B1",
    "summary": "El presente con referencia temporal basta para muchos futuros. werden + infinitivo también expresa predicción o conjetura.",
    "columns": [
      "Forma",
      "Patrón",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "Presente con contexto futuro",
        "Präsens + tiempo",
        "Morgen komme ich.",
        "Mañana vengo / vendré."
      ],
      [
        "Futur I",
        "werden finito + infinitivo",
        "Ich werde den Text lesen.",
        "Leeré el texto."
      ],
      [
        "Conjetura presente",
        "werden + infinitivo",
        "Er wird zu Hause sein.",
        "Estará en casa (supongo)."
      ],
      [
        "Futur II con haben",
        "werden + participio + haben",
        "Bis morgen werde ich das Buch gelesen haben.",
        "Para mañana habré leído el libro."
      ],
      [
        "Futur II con sein",
        "werden + participio + sein",
        "Bis acht wird sie angekommen sein.",
        "Para las ocho habrá llegado."
      ],
      [
        "Conjetura pasada",
        "Futur II, a menudo wohl",
        "Sie wird wohl gegangen sein.",
        "Probablemente se habrá ido."
      ]
    ],
    "notes": [
      "werden presente: werde, wirst, wird, werden, werdet, werden. Infinitivo al final: Ich werde morgen kommen.",
      "werden + adjetivo/sustantivo sin infinitivo = volverse/hacerse: Es wird kalt (Está empezando a hacer frío).",
      "werden + participio = pasiva: Der Text wird gelesen; no confundir con Futur I: Er wird lesen.",
      "Futur II no exige un futuro cronológico: puede inferir un hecho ya ocurrido."
    ],
    "examples": [
      {
        "de": "Wir werden die Frage später besprechen.",
        "es": "Trataremos la pregunta después."
      },
      {
        "de": "Er wird den Brief schon gelesen haben.",
        "es": "Probablemente ya habrá leído la carta."
      }
    ]
  },
  {
    "id": "participles",
    "title": "Participios, imperativo y nominalización",
    "deTitle": "Partizip / Imperativ / Nominalisierung — participio / imperativo / nominalización",
    "level": "B1",
    "summary": "Los participios pueden modificar sustantivos y entonces se declinan como adjetivos. Partizip I: sein → seiend; tun → tuend son excepciones a infinitivo + -d.",
    "columns": [
      "Forma",
      "Construcción",
      "Ejemplo",
      "Traducción"
    ],
    "rows": [
      [
        "Partizip I · participio presente",
        "infinitivo + -d",
        "lesen → lesend; das lesende Kind",
        "leer → leyendo; el niño que lee"
      ],
      [
        "Partizip II · participio pasado",
        "forma léxica de perfecto/pasiva",
        "das gelesene Buch",
        "el libro leído"
      ],
      [
        "Grupo participial I",
        "complementos + participio declinado",
        "der in Berlin lebende Autor",
        "el autor que vive en Berlín"
      ],
      [
        "Grupo participial II",
        "complementos + participio declinado",
        "der gestern übersetzte Text",
        "el texto traducido ayer"
      ],
      [
        "Imperativo du",
        "raíz; a menudo -e opcional",
        "Lies! Komm! Arbeite!",
        "¡Lee! ¡Ven! ¡Trabaja!"
      ],
      [
        "Imperativo ihr",
        "forma de ihr sin pronombre",
        "Lest! Kommt! Arbeitet!",
        "¡Lean! / ¡Leed!; ¡Vengan!; ¡Trabajen!"
      ],
      [
        "Imperativo Sie / wir",
        "verbo + pronombre",
        "Lesen Sie! Gehen wir!",
        "¡Lea(n)! ¡Vamos!"
      ],
      [
        "Imperativo sein",
        "sei / seid / seien Sie",
        "Sei ruhig!",
        "¡Estate tranquilo!"
      ],
      [
        "Infinitivo nominalizado",
        "das + infinitivo con mayúscula",
        "das Lesen; beim Lesen",
        "la lectura / leer; al leer"
      ]
    ],
    "notes": [
      "Partizip I suele ser activo/simultáneo; Partizip II puede ser pasivo/resultante en transitivos o expresar anterioridad en ciertos intransitivos: der angekommene Zug (el tren que ha llegado). No tiene una sola traducción española.",
      "Imperativo fuerte con e→i/ie: geben → gib, lesen → lies; a→ä no se conserva: fahren → fahr, no fähr. Con separables: Steh auf!",
      "El imperativo du de haben es hab(e); werden: werde. No añadas automáticamente -e a formas como lies/gib.",
      "Los sustantivos derivados de adjetivos usan sus terminaciones: etwas Interessantes = algo interesante; der Reisende = el viajero; ein Reisender = un viajero.",
      "Las construcciones participiales densas son frecuentes en textos científicos; para interpretar, reconstruye primero una relativa."
    ],
    "examples": [
      {
        "de": "Die im Experiment gemessenen Werte sind unterschiedlich.",
        "es": "Los valores medidos en el experimento son diferentes."
      },
      {
        "de": "Lies den Text und erkläre die Frage!",
        "es": "¡Lee el texto y explica la pregunta!"
      }
    ]
  },
  {
    "id": "numbers",
    "title": "Números, fecha y hora",
    "deTitle": "Zahlen / Datum / Uhrzeit — números / fecha / hora",
    "level": "A1",
    "summary": "Los números compuestos se escriben unidos hasta el millón; las unidades preceden a las decenas.",
    "columns": [
      "Valor / patrón",
      "Alemán",
      "Uso / español"
    ],
    "rows": [
      [
        "0–6",
        "null, eins, zwei, drei, vier, fünf, sechs",
        "cero–seis"
      ],
      [
        "7–12",
        "sieben, acht, neun, zehn, elf, zwölf",
        "siete–doce"
      ],
      [
        "13–19",
        "dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn",
        "dieciséis y diecisiete reducen la raíz"
      ],
      [
        "20 / 30 / 40",
        "zwanzig / dreißig / vierzig",
        "veinte / treinta / cuarenta"
      ],
      [
        "50 / 60 / 70 / 80 / 90",
        "fünfzig / sechzig / siebzig / achtzig / neunzig",
        "cincuenta–noventa"
      ],
      [
        "21 / 32 / 99",
        "einundzwanzig / zweiunddreißig / neunundneunzig",
        "unidad + und + decena"
      ],
      [
        "100 / 1000 / 1 000 000",
        "(ein)hundert / (ein)tausend / eine Million",
        "cien / mil / un millón"
      ],
      [
        "Ordinal 1 / 2 / 3 / 7 / 8",
        "erst- / zweit- / dritt- / siebt- / acht-",
        "primero / segundo / tercero / séptimo / octavo"
      ],
      [
        "Ordinal 4–19 / desde 20",
        "viert- ... neunzehnt- / zwanzigst- ...",
        "raíz + -t / -st, con excepciones indicadas"
      ],
      [
        "Fecha",
        "am ersten Oktober; der erste Oktober",
        "el primero de octubre (Dat / Nom)"
      ],
      [
        "Hora formal",
        "13:30 → dreizehn Uhr dreißig",
        "trece horas treinta"
      ],
      [
        "Hora cotidiana",
        "halb zwei; Viertel nach eins; Viertel vor zwei",
        "1:30; 1:15; 1:45"
      ],
      [
        "Decimal",
        "1,5 → eins Komma fünf",
        "uno coma cinco"
      ]
    ],
    "notes": [
      "ein delante de sustantivo; eins como número aislado: ein Buch, ein Uhr, eins plus eins.",
      "Los ordinales declinan como adjetivos: am zweiten Tag, der dritte Text. El punto escrito marca ordinal: am 1. Oktober.",
      "halb zwei significa media hora antes de las dos: 1:30. dreiviertel zwei = 1:45 es regional; el patrón general enseñado es Viertel vor zwei.",
      "Millones y superiores son sustantivos separados: zwei Millionen, eine Milliarde (mil millones).",
      "Años: 1998 → neunzehnhundertachtundneunzig; 2026 → zweitausendsechsundzwanzig."
    ],
    "examples": [
      {
        "de": "Der Kurs beginnt am dritten Oktober um acht Uhr.",
        "es": "El curso empieza el tres de octubre a las ocho."
      },
      {
        "de": "Ich habe einundzwanzig Bücher.",
        "es": "Tengo veintiún libros."
      }
    ]
  }
];
