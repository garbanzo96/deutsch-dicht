/* Ruta introductoria; niveles orientativos, no certificación. */
window.DeutschData = window.DeutschData || {};
window.DeutschData.lessons = [
  {
    "id": "unit-01",
    "order": 1,
    "title": "Identidad, presente y posición del verbo",
    "level": "A1",
    "goal": "Construir afirmaciones breves: sujeto, verbo conjugado y complemento.",
    "minutes": 20,
    "grammarIds": [
      "present",
      "personal-pronouns",
      "word-order",
      "articles"
    ],
    "vocabIds": [],
    "readingId": "reading-a1-1",
    "concepts": [
      {
        "de": "Verbzweitstellung (V2)",
        "es": "En una afirmación principal, el verbo conjugado ocupa la segunda posición sintáctica; una posición puede contener varias palabras.",
        "contrast": "A diferencia del inglés, otro constituyente puede preceder al verbo: Heute komme ich. El sujeto no queda obligatoriamente primero."
      },
      {
        "de": "Personalpronomen / Präsens",
        "es": "Pronombres sujeto: ich yo, du tú, er él, sie ella, es ello, wir nosotros, ihr vosotros, sie ellos, Sie usted/ustedes. kommen: komme, kommst, kommt, kommen, kommt, kommen."
      },
      {
        "de": "sein / Nominativ",
        "es": "sein = ser/estar: bin, bist, ist, sind, seid, sind. Nominativ = caso del sujeto. Sustantivos con mayúscula; der Lehrer = el profesor, die Sprache = la lengua, das Buch = el libro."
      },
      {
        "de": "heißen / wohnen",
        "es": "heißen = llamarse; wohnen = residir. ich heiße, du heißt, er heißt; ich wohne, du wohnst, er wohnt. aus Chile = de Chile; in Berlin = en Berlín."
      }
    ],
    "examples": [
      {
        "de": "Ich komme aus Chile.",
        "es": "Soy de Chile."
      },
      {
        "de": "Heute wohne ich in Berlin.",
        "es": "Hoy resido en Berlín."
      },
      {
        "de": "Der Lehrer heißt Paul.",
        "es": "El profesor se llama Paul."
      },
      {
        "de": "Wir sind hier.",
        "es": "Estamos aquí."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce al alemán: «Soy de Chile».",
        "explanation": "kommen aus expresa procedencia.",
        "answer": "Ich komme aus Chile.",
        "accepted": [
          "Ich komme aus Chile.",
          "Ich bin aus Chile."
        ],
        "id": "u01-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce al español: «Wir sind hier».",
        "explanation": "wir = nosotros; sind = somos/estamos.",
        "answer": "Estamos aquí.",
        "accepted": [
          "Estamos aquí.",
          "Nosotros estamos aquí.",
          "Nosotras estamos aquí."
        ],
        "id": "u01-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa: Ich ___ in Berlin. (wohnen)",
        "explanation": "Presente, primera persona singular: raíz wohn- + -e.",
        "answer": "wohne",
        "accepted": [
          "wohne"
        ],
        "id": "u01-e3"
      },
      {
        "type": "case",
        "prompt": "Elige el artículo nominativo de Lehrer: ___ Lehrer heißt Paul.",
        "explanation": "Lehrer es masculino: der Lehrer; el sujeto va en nominativo.",
        "options": [
          "Der",
          "Die",
          "Das"
        ],
        "correct": 0,
        "answer": "Der",
        "id": "u01-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga sein: Du ___ hier.",
        "explanation": "du bist = tú eres/estás.",
        "answer": "bist",
        "accepted": [
          "bist"
        ],
        "id": "u01-e5"
      },
      {
        "type": "word-order",
        "prompt": "Ordena la afirmación comenzando por Heute.",
        "explanation": "Heute ocupa la primera posición; komme la segunda.",
        "answer": "Heute komme ich aus Chile.",
        "accepted": [
          "Heute komme ich aus Chile."
        ],
        "tokens": [
          "ich",
          "Heute",
          "aus Chile",
          "komme"
        ],
        "id": "u01-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Lee: «Ich heiße Lea. Ich komme aus Chile. Jetzt wohne ich in Berlin». ¿Dónde vive Lea ahora?",
        "explanation": "Jetzt = ahora; wohnen indica residencia, kommen aus indica origen.",
        "options": [
          "En Chile",
          "En Berlín",
          "No se indica"
        ],
        "correct": 1,
        "answer": "En Berlín",
        "id": "u01-e7"
      }
    ]
  },
  {
    "id": "unit-02",
    "order": 2,
    "title": "Artículo, género y objeto acusativo",
    "level": "A1",
    "goal": "Distinguir sujeto y objeto directo; aprender cada sustantivo con género y plural.",
    "minutes": 20,
    "grammarIds": [
      "articles",
      "cases",
      "accusative",
      "personal-pronouns"
    ],
    "vocabIds": [],
    "readingId": "reading-a1-2",
    "concepts": [
      {
        "de": "Genus / Plural",
        "es": "Género: der masculino, die femenino, das neutro. Plural definido: die. Aprende la pareja: der Hund / die Hunde (perro/s), die Frau / die Frauen (mujer/es), das Buch / die Bücher (libro/s)."
      },
      {
        "de": "Akkusativ",
        "es": "Objeto directo: der→den; ein→einen. Femenino die/eine y neutro das/ein no cambian. Plural definido die. El verbo sehen = ver: ich sehe, du siehst, er/sie sieht."
      },
      {
        "de": "Akkusativpronomen",
        "es": "Pronombres objeto: mich me, dich te, ihn lo/a él, sie la/a ella, es lo, uns nos, euch os, sie los/las, Sie a usted/ustedes. haben = tener: ich habe, du hast, er hat.",
        "contrast": "Como en latín, el caso señala función; en alemán la marca suele estar en el artículo, no en el sustantivo."
      }
    ],
    "examples": [
      {
        "de": "Der Mann sieht den Hund.",
        "es": "El hombre ve al perro."
      },
      {
        "de": "Ich habe ein Buch.",
        "es": "Tengo un libro."
      },
      {
        "de": "Sie sieht mich.",
        "es": "Ella me ve."
      },
      {
        "de": "Wir lesen die Bücher.",
        "es": "Leemos los libros."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Tengo un libro».",
        "explanation": "Buch es neutro; el acusativo es ein Buch.",
        "answer": "Ich habe ein Buch.",
        "accepted": [
          "Ich habe ein Buch."
        ],
        "id": "u02-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce: «El hombre ve al perro».",
        "explanation": "Der Mann: sujeto nominativo; den Hund: objeto acusativo.",
        "answer": "Der Mann sieht den Hund.",
        "accepted": [
          "Der Mann sieht den Hund."
        ],
        "id": "u02-e2"
      },
      {
        "type": "cloze",
        "prompt": "Sustituye el objeto: Ich sehe den Hund. → Ich sehe ___.",
        "explanation": "Hund es masculino: pronombre acusativo ihn.",
        "answer": "ihn",
        "accepted": [
          "ihn"
        ],
        "id": "u02-e3"
      },
      {
        "type": "case",
        "prompt": "Ich sehe ___ Mann.",
        "explanation": "Mann es masculino y objeto directo: den Mann.",
        "options": [
          "der",
          "den",
          "das"
        ],
        "correct": 1,
        "answer": "den",
        "id": "u02-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga haben: Du ___ ein Buch.",
        "explanation": "Forma irregular: du hast.",
        "answer": "hast",
        "accepted": [
          "hast"
        ],
        "id": "u02-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Ich.",
        "explanation": "Sujeto + verbo conjugado + objeto acusativo.",
        "answer": "Ich habe ein Buch.",
        "accepted": [
          "Ich habe ein Buch."
        ],
        "tokens": [
          "ein Buch",
          "Ich",
          "habe"
        ],
        "id": "u02-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Lee: «Die Frau sieht den Mann. Der Mann sieht den Hund». ¿Quién ve al hombre?",
        "explanation": "Die Frau es el sujeto de la primera oración; den Mann es su objeto.",
        "options": [
          "La mujer",
          "El perro",
          "El hombre"
        ],
        "correct": 0,
        "answer": "La mujer",
        "id": "u02-e7"
      }
    ]
  },
  {
    "id": "unit-03",
    "order": 3,
    "title": "Preguntas y negación precisa",
    "level": "A1",
    "goal": "Preguntar por datos y distinguir la negación nominal de la negación de una frase.",
    "minutes": 20,
    "grammarIds": [
      "questions",
      "negation",
      "word-order",
      "accusative"
    ],
    "vocabIds": [],
    "readingId": "reading-a1-3",
    "concepts": [
      {
        "de": "W-Frage / Entscheidungsfrage",
        "es": "wo dónde, woher de dónde, wer quién, was qué, wann cuándo, wie cómo, warum por qué. Pregunta con interrogativo: Wo wohnst du? Pregunta sí/no: Wohnst du hier? Verbo primero."
      },
      {
        "de": "kein / nicht",
        "es": "kein niega un nombre sin artículo o con artículo indefinido: kein Buch, keinen Kaffee, keine Zeit. nicht niega un predicado, un adjetivo o un elemento contrastado. Kaffee = café (masculino), Zeit = tiempo (femenino)."
      },
      {
        "de": "nicht: Position",
        "es": "nicht suele ir al final en una oración simple; precede a adjetivos y complementos que niega: nicht müde, nicht in Berlin. La posición puede cambiar el foco; aquí se usan lecturas sin contraste ambiguo."
      },
      {
        "de": "trinken / lesen",
        "es": "trinken = beber: ich trinke, du trinkst, er trinkt. lesen = leer: ich lese, du liest, er liest. doch responde afirmativamente a una pregunta negativa."
      }
    ],
    "examples": [
      {
        "de": "Woher kommst du?",
        "es": "¿De dónde eres?"
      },
      {
        "de": "Trinkst du Kaffee?",
        "es": "¿Bebes café?"
      },
      {
        "de": "Ich habe keine Zeit.",
        "es": "No tengo tiempo."
      },
      {
        "de": "Ich bin nicht müde.",
        "es": "No estoy cansado/a."
      },
      {
        "de": "Liest du nicht? — Doch!",
        "es": "¿No lees? — ¡Sí que leo!"
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «¿Dónde vives?».",
        "explanation": "wo pregunta por ubicación; el verbo sigue al interrogativo.",
        "answer": "Wo wohnst du?",
        "accepted": [
          "Wo wohnst du?"
        ],
        "id": "u03-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce: «No estoy cansado».",
        "explanation": "nicht precede al adjetivo müde.",
        "answer": "Ich bin nicht müde.",
        "accepted": [
          "Ich bin nicht müde."
        ],
        "id": "u03-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa la negación: Ich habe ___ Zeit.",
        "explanation": "Nombre femenino sin artículo: keine Zeit.",
        "answer": "keine",
        "accepted": [
          "keine"
        ],
        "id": "u03-e3"
      },
      {
        "type": "case",
        "prompt": "Ich trinke ___ Kaffee.",
        "explanation": "Kaffee es masculino y objeto directo: keinen Kaffee.",
        "options": [
          "kein",
          "keinen",
          "keine"
        ],
        "correct": 1,
        "answer": "keinen",
        "id": "u03-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga lesen: Du ___ ein Buch.",
        "explanation": "leer presenta cambio de vocal: du liest.",
        "answer": "liest",
        "accepted": [
          "liest"
        ],
        "id": "u03-e5"
      },
      {
        "type": "word-order",
        "prompt": "Construye una pregunta de sí/no.",
        "explanation": "La pregunta de sí/no comienza con el verbo conjugado.",
        "answer": "Trinkst du Kaffee?",
        "accepted": [
          "Trinkst du Kaffee?"
        ],
        "tokens": [
          "Kaffee",
          "du",
          "Trinkst"
        ],
        "id": "u03-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Lee: «Wohnst du in Berlin? — Nein, ich wohne nicht in Berlin. Ich wohne in Hamburg». ¿Dónde vive quien responde?",
        "explanation": "nicht in Berlin niega esa ubicación; la frase siguiente da la correcta.",
        "options": [
          "Berlín",
          "Hamburgo",
          "No vive en ninguna ciudad"
        ],
        "correct": 1,
        "answer": "Hamburgo",
        "id": "u03-e7"
      }
    ]
  },
  {
    "id": "unit-04",
    "order": 4,
    "title": "Modalidad y verbos separables",
    "level": "A1",
    "goal": "Expresar capacidad, obligación e intención; reconocer el marco verbal.",
    "minutes": 20,
    "grammarIds": [
      "modal-verbs",
      "word-order",
      "present",
      "irregular-verbs"
    ],
    "vocabIds": [],
    "readingId": "reading-a1-4",
    "concepts": [
      {
        "de": "Modalverb / Infinitiv",
        "es": "können poder/saber hacer, müssen tener que, wollen querer, dürfen tener permiso, sollen deber por encargo o consejo, mögen gustar. Modal conjugado + infinitivo al final: Ich kann Deutsch lernen."
      },
      {
        "de": "Modalformen",
        "es": "Singular ich/er: kann, muss, will, darf, soll, mag; du: kannst, musst, willst, darfst, sollst, magst. Plural: können/könnt, müssen/müsst, wollen/wollt, dürfen/dürft, sollen/sollt, mögen/mögt."
      },
      {
        "de": "trennbares Verb / Satzklammer",
        "es": "aufstehen = levantarse: ich stehe ... auf. anfangen = empezar: er fängt ... an. Prefijo al final de la principal; infinitivo unido tras un modal: Ich muss aufstehen. um sieben Uhr = a las siete."
      },
      {
        "de": "nicht müssen / nicht dürfen",
        "es": "nicht müssen = no tener que; nicht dürfen = no tener permiso/prohibición.",
        "contrast": "English must not suele corresponder a nicht dürfen; nicht müssen corresponde a do not have to."
      }
    ],
    "examples": [
      {
        "de": "Ich stehe um sieben Uhr auf.",
        "es": "Me levanto a las siete."
      },
      {
        "de": "Ich muss um sieben Uhr aufstehen.",
        "es": "Tengo que levantarme a las siete."
      },
      {
        "de": "Der Kurs fängt heute an.",
        "es": "El curso empieza hoy."
      },
      {
        "de": "Du musst nicht arbeiten.",
        "es": "No tienes que trabajar."
      },
      {
        "de": "Du darfst hier nicht rauchen.",
        "es": "No puedes fumar aquí (está prohibido)."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Puedo aprender alemán».",
        "explanation": "kann conjugado en segunda posición; lernen al final.",
        "answer": "Ich kann Deutsch lernen.",
        "accepted": [
          "Ich kann Deutsch lernen."
        ],
        "id": "u04-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce: «Me levanto a las siete».",
        "explanation": "aufstehen se separa en esta principal.",
        "answer": "Ich stehe um sieben Uhr auf.",
        "accepted": [
          "Ich stehe um sieben Uhr auf.",
          "Um sieben Uhr stehe ich auf."
        ],
        "id": "u04-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa: Der Kurs fängt heute ___.",
        "explanation": "anfangen → fängt ... an.",
        "answer": "an",
        "accepted": [
          "an"
        ],
        "id": "u04-e3"
      },
      {
        "type": "case",
        "prompt": "Ich lese ___ Buch.",
        "explanation": "Repaso: Buch es neutro y el acusativo definido es das.",
        "options": [
          "der",
          "den",
          "das"
        ],
        "correct": 2,
        "answer": "das",
        "id": "u04-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga müssen: Du ___ lernen.",
        "explanation": "du musst; el infinitivo lernen cierra la oración.",
        "answer": "musst",
        "accepted": [
          "musst"
        ],
        "id": "u04-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Heute.",
        "explanation": "Modal en V2 e infinitivo al final.",
        "answer": "Heute muss ich lernen.",
        "accepted": [
          "Heute muss ich lernen."
        ],
        "tokens": [
          "ich",
          "lernen",
          "Heute",
          "muss"
        ],
        "id": "u04-e6"
      },
      {
        "type": "comprehension",
        "prompt": "¿Qué expresa «Du musst heute nicht arbeiten»?",
        "explanation": "nicht müssen elimina la obligación; no expresa prohibición.",
        "options": [
          "Está prohibido trabajar hoy",
          "No es necesario que trabajes hoy",
          "Debes trabajar hoy"
        ],
        "correct": 1,
        "answer": "No es necesario que trabajes hoy",
        "id": "u04-e7"
      }
    ]
  },
  {
    "id": "unit-05",
    "order": 5,
    "title": "Dativo y espacio: ubicación frente a destino",
    "level": "A2",
    "goal": "Interpretar receptores y elegir el caso según la relación espacial.",
    "minutes": 20,
    "grammarIds": [
      "dative",
      "prepositions",
      "two-way-prepositions",
      "personal-pronouns"
    ],
    "vocabIds": [],
    "readingId": "reading-a2-1",
    "concepts": [
      {
        "de": "Dativ",
        "es": "Receptor: Ich gebe dem Kind ein Buch. Artículos: der/das→dem, die→der, plural die→den; plural del nombre añade -n si no termina ya en -n/-s: den Kindern. Pronombres: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen. geben = dar: ich gebe, du gibst, er gibt."
      },
      {
        "de": "Dativpräpositionen",
        "es": "aus de/procedencia, bei en casa de/junto a, mit con, nach hacia/después de, seit desde/hace (duración vigente), von de, zu a. Todas rigen dativo. helfen = ayudar exige dativo: Ich helfe dir."
      },
      {
        "de": "Wechselpräpositionen",
        "es": "an, auf, hinter, in, neben, über, unter, vor, zwischen: dativo para ubicación; acusativo para destino/cambio de relación espacial. El movimiento por sí solo no determina el caso: Ich laufe im Park.",
        "contrast": "Compara «en el parque» con «hacia el interior del parque»; no copies una oposición mecánica movimiento/reposo."
      },
      {
        "de": "liegen / stellen",
        "es": "liegen = estar tendido/situado; stellen = colocar en posición vertical. der Tisch mesa, das Kind niño/a, der Park parque. im = in dem; ins = in das."
      }
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "es": "El libro está sobre la mesa."
      },
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "es": "Coloco el libro sobre la mesa."
      },
      {
        "de": "Ich gebe dem Kind ein Buch.",
        "es": "Le doy un libro al niño."
      },
      {
        "de": "Ich laufe im Park.",
        "es": "Corro en el parque."
      },
      {
        "de": "Ich helfe dir.",
        "es": "Te ayudo."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «El libro está sobre la mesa».",
        "explanation": "Ubicación: auf + dativo; Tisch es masculino.",
        "answer": "Das Buch liegt auf dem Tisch.",
        "accepted": [
          "Das Buch liegt auf dem Tisch.",
          "Auf dem Tisch liegt das Buch."
        ],
        "id": "u05-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce: «Te ayudo».",
        "explanation": "helfen rige dativo; dir = a ti.",
        "answer": "Ich helfe dir.",
        "accepted": [
          "Ich helfe dir."
        ],
        "id": "u05-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa la contracción: in dem Park = ___ Park.",
        "explanation": "im = in dem.",
        "answer": "im",
        "accepted": [
          "im"
        ],
        "id": "u05-e3"
      },
      {
        "type": "case",
        "prompt": "Destino: Ich stelle das Buch auf ___ Tisch.",
        "explanation": "Cambio de relación espacial: auf + acusativo, den Tisch.",
        "options": [
          "der",
          "dem",
          "den"
        ],
        "correct": 2,
        "answer": "den",
        "id": "u05-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga geben: Er ___ dem Kind ein Buch.",
        "explanation": "geben cambia e→i en segunda y tercera persona singular.",
        "answer": "gibt",
        "accepted": [
          "gibt"
        ],
        "id": "u05-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Ich.",
        "explanation": "Orden neutro con dos objetos nominales: dativo antes del acusativo.",
        "answer": "Ich gebe dem Kind ein Buch.",
        "accepted": [
          "Ich gebe dem Kind ein Buch.",
          "Ich gebe ein Buch dem Kind."
        ],
        "tokens": [
          "dem Kind",
          "Ich",
          "ein Buch",
          "gebe"
        ],
        "id": "u05-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Lee: «Mira läuft im Park. Danach geht sie in den Park zurück». ¿Qué señala im Park en la primera frase?",
        "explanation": "im Park indica ubicación, aunque el verbo denote movimiento.",
        "options": [
          "Destino hacia el parque",
          "Lugar donde corre",
          "Procedencia del parque"
        ],
        "correct": 1,
        "answer": "Lugar donde corre",
        "id": "u05-e7"
      }
    ]
  },
  {
    "id": "unit-06",
    "order": 6,
    "title": "Pasado conversacional y participios",
    "level": "A2",
    "goal": "Relatar hechos con Perfekt y reconocer las formas pasadas frecuentes de sein y haben.",
    "minutes": 20,
    "grammarIds": [
      "perfect",
      "past",
      "participles",
      "irregular-verbs"
    ],
    "vocabIds": [],
    "readingId": "reading-a2-2",
    "concepts": [
      {
        "de": "Perfekt",
        "es": "haben/sein conjugado + participio al final. haben es el auxiliar más frecuente. sein con muchos verbos intransitivos de cambio de lugar/estado: gehen→gegangen, kommen→gekommen; también bleiben→geblieben y sein→gewesen."
      },
      {
        "de": "Partizip II",
        "es": "Regulares: lernen→gelernt, arbeiten→gearbeitet. Irregulares: lesen→gelesen, sehen→gesehen, schreiben→geschrieben. Separables: aufstehen→aufgestanden. Sin ge-: verstehen→verstanden, studieren→studiert. studieren = cursar estudios universitarios; Deutsch studieren suele significar estudiar alemán como materia universitaria, no cualquier aprendizaje."
      },
      {
        "de": "Präteritum: sein / haben",
        "es": "Pasado simple frecuente incluso al hablar: ich/er war, du warst, wir/sie waren, ihr wart; ich/er hatte, du hattest, wir/sie hatten, ihr hattet. gestern ayer, danach después.",
        "contrast": "Perfekt alemán no equivale siempre al present perfect inglés: Ich habe gestern gearbeitet corresponde también a I worked yesterday."
      }
    ],
    "examples": [
      {
        "de": "Ich habe gestern gearbeitet.",
        "es": "Trabajé ayer."
      },
      {
        "de": "Sie ist nach Berlin gefahren.",
        "es": "Ella fue a Berlín."
      },
      {
        "de": "Wir haben das Buch gelesen.",
        "es": "Leímos el libro."
      },
      {
        "de": "Ich war müde und hatte keine Zeit.",
        "es": "Estaba cansado/a y no tenía tiempo."
      },
      {
        "de": "Er ist früh aufgestanden.",
        "es": "Él se levantó temprano."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce usando Perfekt: «Leí el libro».",
        "explanation": "lesen forma el participio gelesen y usa haben.",
        "answer": "Ich habe das Buch gelesen.",
        "accepted": [
          "Ich habe das Buch gelesen.",
          "Das Buch habe ich gelesen."
        ],
        "id": "u06-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce usando Perfekt: «Fui a Berlín» (gehen).",
        "explanation": "gehen, cambio de lugar, usa sein.",
        "answer": "Ich bin nach Berlin gegangen.",
        "accepted": [
          "Ich bin nach Berlin gegangen.",
          "Nach Berlin bin ich gegangen."
        ],
        "hint": "gehen → gegangen; nach Berlin = a Berlín.",
        "id": "u06-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa el participio: Ich habe Deutsch ___. (studieren)",
        "explanation": "Los verbos en -ieren no llevan ge-.",
        "answer": "studiert",
        "accepted": [
          "studiert"
        ],
        "id": "u06-e3"
      },
      {
        "type": "case",
        "prompt": "Ich habe mit ___ Lehrer gesprochen.",
        "explanation": "mit exige dativo; Lehrer masculino: dem Lehrer.",
        "options": [
          "der",
          "den",
          "dem"
        ],
        "correct": 2,
        "answer": "dem",
        "id": "u06-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga sein en Präteritum: Wir ___ in Berlin.",
        "explanation": "wir waren = estuvimos/estábamos.",
        "answer": "waren",
        "accepted": [
          "waren"
        ],
        "id": "u06-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Gestern.",
        "explanation": "Auxiliar en V2, participio al final.",
        "answer": "Gestern habe ich das Buch gelesen.",
        "accepted": [
          "Gestern habe ich das Buch gelesen."
        ],
        "tokens": [
          "gelesen",
          "Gestern",
          "ich",
          "habe",
          "das Buch"
        ],
        "id": "u06-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Lee: «Gestern war Lea müde. Sie hat das Buch nicht gelesen. Heute liest sie es». ¿Qué ocurrió ayer?",
        "explanation": "war indica estado pasado; hat ... nicht gelesen niega la lectura pasada.",
        "options": [
          "Lea leyó el libro",
          "Lea estaba cansada y no leyó el libro",
          "Lea fue a Berlín"
        ],
        "correct": 1,
        "answer": "Lea estaba cansada y no leyó el libro",
        "id": "u06-e7"
      }
    ]
  },
  {
    "id": "unit-07",
    "order": 7,
    "title": "Subordinadas: causa, contenido y condición",
    "level": "A2",
    "goal": "Enlazar proposiciones con el verbo al final y mantener V2 en la principal.",
    "minutes": 20,
    "grammarIds": [
      "subordinate",
      "word-order",
      "connectors",
      "perfect"
    ],
    "vocabIds": [],
    "readingId": "reading-a2-3",
    "concepts": [
      {
        "de": "Nebensatz",
        "es": "weil porque, dass que (contenido), wenn si/cuando (condición o repetición), ob si (pregunta indirecta). La subordinada lleva el verbo conjugado al final y se separa con coma."
      },
      {
        "de": "Nebensatz + Hauptsatz",
        "es": "Una subordinada inicial ocupa la primera posición: Wenn ich Zeit habe, lese ich. La principal comienza entonces con el verbo conjugado.",
        "contrast": "El español permite «Si tengo tiempo, yo leo»; en alemán no añadas un sujeto antes del verbo de esa principal."
      },
      {
        "de": "Verbgruppe im Nebensatz",
        "es": "Perfekt: weil ich gearbeitet habe. Modal + infinitivo: weil ich lernen muss. Para un evento único pasado «cuando» suele ser als; para repetición pasada, wenn. wissen = saber: ich weiß, du weißt, er weiß."
      }
    ],
    "examples": [
      {
        "de": "Ich lerne Deutsch, weil ich in Berlin wohnen möchte.",
        "es": "Aprendo alemán porque me gustaría vivir en Berlín."
      },
      {
        "de": "Ich weiß, dass er hier wohnt.",
        "es": "Sé que él vive aquí."
      },
      {
        "de": "Wenn ich Zeit habe, lese ich.",
        "es": "Si tengo tiempo, leo."
      },
      {
        "de": "Ich weiß nicht, ob sie kommt.",
        "es": "No sé si ella viene."
      },
      {
        "de": "Als ich in Berlin war, habe ich viel gelesen.",
        "es": "Cuando estuve en Berlín, leí mucho."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Leo porque tengo tiempo».",
        "explanation": "weil introduce subordinada; habe al final.",
        "answer": "Ich lese, weil ich Zeit habe.",
        "accepted": [
          "Ich lese, weil ich Zeit habe.",
          "Weil ich Zeit habe, lese ich."
        ],
        "id": "u07-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce: «No sé si ella viene».",
        "explanation": "La duda indirecta se introduce con ob, no con wenn.",
        "answer": "Ich weiß nicht, ob sie kommt.",
        "accepted": [
          "Ich weiß nicht, ob sie kommt."
        ],
        "id": "u07-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa el contenido afirmado («sé que…»): Ich weiß, ___ sie in Berlin wohnt.",
        "explanation": "Se afirma un contenido: dass = que.",
        "answer": "dass",
        "accepted": [
          "dass"
        ],
        "id": "u07-e3"
      },
      {
        "type": "case",
        "prompt": "Ich lerne, weil ich ___ Buch lesen möchte.",
        "explanation": "Buch neutro, objeto directo: das Buch; el caso no cambia por estar en subordinada.",
        "options": [
          "der",
          "dem",
          "das"
        ],
        "correct": 2,
        "answer": "das",
        "id": "u07-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga wissen: Ich ___, dass er kommt.",
        "explanation": "wissen tiene la forma irregular ich weiß.",
        "answer": "weiß",
        "accepted": [
          "weiß"
        ],
        "id": "u07-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por la subordinada Wenn ich Zeit habe.",
        "explanation": "La subordinada entera ocupa posición 1; lese ocupa posición 2.",
        "answer": "Wenn ich Zeit habe, lese ich das Buch.",
        "accepted": [
          "Wenn ich Zeit habe, lese ich das Buch."
        ],
        "tokens": [
          "ich",
          "Wenn ich Zeit habe,",
          "lese",
          "das Buch"
        ],
        "id": "u07-e6"
      },
      {
        "type": "comprehension",
        "prompt": "¿Cuál expresa incertidumbre sobre la llegada de Lea?",
        "explanation": "ob introduce una pregunta indirecta; dass afirma el contenido; wenn expresa condición.",
        "options": [
          "Ich weiß, dass Lea kommt.",
          "Ich weiß nicht, ob Lea kommt.",
          "Wenn Lea kommt, lese ich."
        ],
        "correct": 1,
        "answer": "Ich weiß nicht, ob Lea kommt.",
        "id": "u07-e7"
      }
    ]
  },
  {
    "id": "unit-08",
    "order": 8,
    "title": "Genitivo, pertenencia y tiempo",
    "level": "A2",
    "goal": "Leer posesión y relaciones entre nombres; distinguir formas frecuentes con genitivo.",
    "minutes": 20,
    "grammarIds": [
      "genitive",
      "possessives",
      "prepositions",
      "noun-declension",
      "future"
    ],
    "vocabIds": [],
    "readingId": "reading-a2-4",
    "concepts": [
      {
        "de": "Genitiv",
        "es": "Relación entre nombres: das Buch des Lehrers = el libro del profesor. Masculino/neutro fuerte: des/eines + nombre -(e)s; los débiles/mixtos tienen otras terminaciones (des Menschen/des Namens); femenino/plural: der/einer o der, sin esa terminación. der Lehrer→des Lehrers; das Kind→des Kindes."
      },
      {
        "de": "Genitivpräpositionen",
        "es": "wegen por/a causa de, trotz a pesar de, während durante, außerhalb fuera de: genitivo en el estándar formal. wegen des Wetters = por el tiempo meteorológico. El dativo con wegen existe en habla coloquial."
      },
      {
        "de": "Possessivartikel",
        "es": "mein mi, dein tu, sein su (de él/ello), ihr su (de ella/ellos), unser nuestro, euer vuestro, Ihr su (de usted). Se declinan como ein: mein Buch, meinen Hund, meinem Kind. euer→eure/eurem, etc."
      },
      {
        "de": "Zukunft",
        "es": "El presente con referencia temporal suele bastar: Morgen lese ich. Futur I: werden + infinitivo. ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden. También puede expresar conjetura."
      }
    ],
    "examples": [
      {
        "de": "Das ist das Buch des Lehrers.",
        "es": "Este es el libro del profesor."
      },
      {
        "de": "Wegen des Wetters bleiben wir hier.",
        "es": "Por el tiempo meteorológico nos quedamos aquí."
      },
      {
        "de": "Ich helfe meinem Kind.",
        "es": "Ayudo a mi hijo/a."
      },
      {
        "de": "Morgen werde ich das Buch lesen.",
        "es": "Mañana leeré el libro."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Es el libro del profesor».",
        "explanation": "Genitivo masculino: des Lehrers.",
        "answer": "Das ist das Buch des Lehrers.",
        "accepted": [
          "Das ist das Buch des Lehrers.",
          "Es ist das Buch des Lehrers."
        ],
        "id": "u08-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce usando Futur I: «Mañana leeré el libro».",
        "explanation": "werden conjugado en V2 + infinitivo final.",
        "answer": "Morgen werde ich das Buch lesen.",
        "accepted": [
          "Morgen werde ich das Buch lesen.",
          "Ich werde morgen das Buch lesen."
        ],
        "id": "u08-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa el nombre en genitivo: das Buch des ___. (Kind)",
        "explanation": "Kind suele formar el genitivo Kindes; Kinds también existe.",
        "answer": "Kindes",
        "accepted": [
          "Kindes",
          "Kinds"
        ],
        "id": "u08-e3"
      },
      {
        "type": "case",
        "prompt": "Ich helfe ___ Kind. (mi hijo/a)",
        "explanation": "helfen exige dativo; neutro: meinem Kind.",
        "options": [
          "mein",
          "meinen",
          "meinem"
        ],
        "correct": 2,
        "answer": "meinem",
        "id": "u08-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga werden: Du ___ das Buch lesen.",
        "explanation": "Futur I: du wirst + infinitivo.",
        "answer": "wirst",
        "accepted": [
          "wirst"
        ],
        "id": "u08-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Wegen des Wetters.",
        "explanation": "Todo el grupo preposicional ocupa la primera posición.",
        "answer": "Wegen des Wetters bleiben wir hier.",
        "accepted": [
          "Wegen des Wetters bleiben wir hier."
        ],
        "tokens": [
          "hier",
          "Wegen des Wetters",
          "wir",
          "bleiben"
        ],
        "id": "u08-e6"
      },
      {
        "type": "comprehension",
        "prompt": "En «das Buch der Lehrerin», ¿qué significa der Lehrerin?",
        "explanation": "El genitivo femenino usa der; el contexto del grupo nominal señala pertenencia.",
        "options": [
          "A la profesora",
          "De la profesora",
          "El profesor"
        ],
        "correct": 1,
        "answer": "De la profesora",
        "id": "u08-e7"
      }
    ]
  },
  {
    "id": "unit-09",
    "order": 9,
    "title": "Adjetivos y oraciones relativas",
    "level": "B1",
    "goal": "Leer descripciones compactas y calcular el caso del pronombre relativo por su función.",
    "minutes": 20,
    "grammarIds": [
      "adjective-endings",
      "relative",
      "cases",
      "demonstratives"
    ],
    "vocabIds": [],
    "readingId": "reading-b1-1",
    "concepts": [
      {
        "de": "Adjektivdeklination",
        "es": "Después de artículo definido: nominativo singular der gute Mann, die gute Frau, das gute Buch; acusativo den guten Mann, die gute Frau, das gute Buch. Dativo/genitivo/plural: -en. Sin artículo: guter Wein, gute Musik, gutes Brot; en plural gute Bücher."
      },
      {
        "de": "ein + Adjektiv",
        "es": "ein guter Mann, eine gute Frau, ein gutes Buch; einen guten Mann. Donde ein no marca género/caso, el adjetivo lo hace. Tras un dativo: mit einem guten Buch.",
        "contrast": "Como en griego/latín, hay concordancia, pero la terminación depende también del tipo de determinante."
      },
      {
        "de": "Relativpronomen",
        "es": "Género/número del antecedente; caso según función dentro de la relativa. Nominativo der/die/das/die; acusativo den/die/das/die; dativo dem/der/dem/denen; genitivo dessen/deren/dessen/deren. Verbo final y comas."
      },
      {
        "de": "dieser",
        "es": "dieser este, diese esta/estos/estas, dieses esto/este neutro; se declina como der: diesen Mann, diesem Kind. klug inteligente, interessant interesante."
      }
    ],
    "examples": [
      {
        "de": "Ich lese ein interessantes Buch.",
        "es": "Leo un libro interesante."
      },
      {
        "de": "Der Mann, den ich sehe, ist klug.",
        "es": "El hombre al que veo es inteligente."
      },
      {
        "de": "Die Frau, der ich helfe, ist hier.",
        "es": "La mujer a la que ayudo está aquí."
      },
      {
        "de": "Das ist der Lehrer, dessen Buch ich lese.",
        "es": "Este es el profesor cuyo libro leo."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Leo un libro interesante».",
        "explanation": "ein no marca nominativo/acusativo neutro; el adjetivo lleva -es.",
        "answer": "Ich lese ein interessantes Buch.",
        "accepted": [
          "Ich lese ein interessantes Buch."
        ],
        "id": "u09-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce: «El hombre al que veo es inteligente».",
        "explanation": "Mann masculino; den es objeto de sehe en la relativa.",
        "answer": "Der Mann, den ich sehe, ist klug.",
        "accepted": [
          "Der Mann, den ich sehe, ist klug."
        ],
        "id": "u09-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa: mit einem interessant___ Buch",
        "explanation": "Después del dativo einem, el adjetivo lleva -en.",
        "answer": "en",
        "accepted": [
          "en",
          "interessanten"
        ],
        "id": "u09-e3"
      },
      {
        "type": "case",
        "prompt": "Die Frau, ___ ich helfe, ist hier.",
        "explanation": "helfen rige dativo; antecedente femenino → der.",
        "options": [
          "die",
          "der",
          "den"
        ],
        "correct": 1,
        "answer": "der",
        "id": "u09-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga sehen: Der Mann, den du ___, ist hier.",
        "explanation": "du siehst; el verbo conjugado cierra la relativa.",
        "answer": "siehst",
        "accepted": [
          "siehst"
        ],
        "id": "u09-e5"
      },
      {
        "type": "word-order",
        "prompt": "Ordena la oración; comienza por Der Mann,.",
        "explanation": "La relativa lleva den + sujeto + verbo final.",
        "answer": "Der Mann, den ich sehe, ist hier.",
        "accepted": [
          "Der Mann, den ich sehe, ist hier."
        ],
        "tokens": [
          "Der Mann,",
          "den",
          "ich",
          "sehe,",
          "ist",
          "hier"
        ],
        "id": "u09-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Lee: «Der Lehrer, dessen Buch ich lese, wohnt in Berlin». ¿De quién es el libro?",
        "explanation": "dessen es genitivo masculino y remite a der Lehrer.",
        "options": [
          "Del lector",
          "Del profesor",
          "De Berlín"
        ],
        "correct": 1,
        "answer": "Del profesor",
        "id": "u09-e7"
      }
    ]
  },
  {
    "id": "unit-10",
    "order": 10,
    "title": "Pasiva: procesos y estados",
    "level": "B1",
    "goal": "Reconocer qué ocurre, a quién le ocurre y si se describe un proceso o su resultado.",
    "minutes": 20,
    "grammarIds": [
      "passive",
      "perfect",
      "past",
      "participles"
    ],
    "vocabIds": [],
    "readingId": "reading-b1-2",
    "concepts": [
      {
        "de": "Vorgangspassiv",
        "es": "Pasiva de proceso: werden + participio. Das Buch wird gelesen. El objeto acusativo activo pasa a sujeto; el dativo se conserva: Dem Kind wird geholfen. Agente: von + dativo; medio/causa frecuente: durch + acusativo."
      },
      {
        "de": "Passivzeiten",
        "es": "Presente wird gelesen; Präteritum wurde gelesen; Perfekt ist gelesen worden. En el Perfekt pasivo se usa worden, no geworden. werden en Präteritum: ich/er wurde, du wurdest, wir/sie wurden, ihr wurdet."
      },
      {
        "de": "Zustandspassiv",
        "es": "sein + participio describe estado resultante: Die Tür ist geöffnet = la puerta está abierta. werden + participio describe apertura: Die Tür wird geöffnet. öffnen = abrir; prüfen = comprobar; die Tür = puerta."
      },
      {
        "de": "Modalpassiv",
        "es": "Modal + participio + werden: Das Buch muss gelesen werden. En subordinada: weil das Buch gelesen werden muss."
      }
    ],
    "examples": [
      {
        "de": "Der Text wird von der Lehrerin gelesen.",
        "es": "La profesora está leyendo el texto / el texto es leído por la profesora."
      },
      {
        "de": "Die Tür ist geöffnet.",
        "es": "La puerta está abierta."
      },
      {
        "de": "Die Tür wurde geöffnet.",
        "es": "La puerta fue abierta."
      },
      {
        "de": "Der Text ist geprüft worden.",
        "es": "El texto ha sido comprobado."
      },
      {
        "de": "Dem Kind wird geholfen.",
        "es": "Se ayuda al niño."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce usando pasiva de proceso: «El libro es leído».",
        "explanation": "werden + participio; Buch pasa a sujeto nominativo.",
        "answer": "Das Buch wird gelesen.",
        "accepted": [
          "Das Buch wird gelesen."
        ],
        "id": "u10-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce usando pasiva de estado: «La puerta está abierta».",
        "explanation": "sein + participio describe el estado resultante.",
        "answer": "Die Tür ist geöffnet.",
        "accepted": [
          "Die Tür ist geöffnet."
        ],
        "id": "u10-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa el Perfekt pasivo: Der Text ist geprüft ___.",
        "explanation": "Perfekt pasivo: sein + participio + worden.",
        "answer": "worden",
        "accepted": [
          "worden"
        ],
        "id": "u10-e3"
      },
      {
        "type": "case",
        "prompt": "Der Text wird von ___ Lehrerin gelesen.",
        "explanation": "von exige dativo; femenino: der Lehrerin.",
        "options": [
          "die",
          "der",
          "den"
        ],
        "correct": 1,
        "answer": "der",
        "id": "u10-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga werden en Präteritum: Die Texte ___ gelesen.",
        "explanation": "Sujeto plural: wurden + participio.",
        "answer": "wurden",
        "accepted": [
          "wurden"
        ],
        "id": "u10-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Das Buch.",
        "explanation": "Modal conjugado en V2; participio + infinitivo werden al final.",
        "answer": "Das Buch muss gelesen werden.",
        "accepted": [
          "Das Buch muss gelesen werden."
        ],
        "tokens": [
          "werden",
          "gelesen",
          "Das Buch",
          "muss"
        ],
        "id": "u10-e6"
      },
      {
        "type": "comprehension",
        "prompt": "¿Qué frase describe explícitamente un estado resultante?",
        "explanation": "ist geöffnet describe el estado; wird geöffnet y öffnet describen el proceso.",
        "options": [
          "Die Tür wird geöffnet.",
          "Die Tür ist geöffnet.",
          "Die Lehrerin öffnet die Tür."
        ],
        "correct": 1,
        "answer": "Die Tür ist geöffnet.",
        "id": "u10-e7"
      }
    ]
  },
  {
    "id": "unit-11",
    "order": 11,
    "title": "Konjunktiv II: hipótesis y cortesía",
    "level": "B1",
    "goal": "Expresar situaciones hipotéticas y peticiones sin confundir forma verbal con tiempo.",
    "minutes": 20,
    "grammarIds": [
      "konjunktiv2",
      "modal-verbs",
      "subordinate"
    ],
    "vocabIds": [],
    "readingId": "reading-b1-3",
    "concepts": [
      {
        "de": "Konjunktiv II",
        "es": "Hipótesis/irrealidad y cortesía: wäre sería/estuviera, hätte tendría, könnte podría, müsste tendría que. Una forma basada en el pasado no implica por sí sola tiempo pasado: Wenn ich Zeit hätte, würde ich lesen. können en Konjunktiv II: ich könnte, du könntest, er könnte, wir könnten, ihr könntet, sie könnten."
      },
      {
        "de": "würde + Infinitiv",
        "es": "Forma frecuente para muchos verbos: ich würde lesen. Formas de würden: würde, würdest, würde, würden, würdet, würden. Con sein, haben y modales se prefieren a menudo wäre, hätte, könnte, etc."
      },
      {
        "de": "höfliche Bitte / Vorschlag",
        "es": "Könnten Sie ...? = ¿Podría(n) ...?; Ich hätte gern ... = Quisiera ...; Wir könnten ... = Podríamos ... . Si la condición empieza con wenn, verbo final y principal V2.",
        "contrast": "No toda condición exige Konjunktiv II: Wenn ich Zeit habe, lese ich puede ser una condición abierta y realista."
      }
    ],
    "examples": [
      {
        "de": "Wenn ich Zeit hätte, würde ich das Buch lesen.",
        "es": "Si tuviera tiempo, leería el libro."
      },
      {
        "de": "Könnten Sie mir helfen?",
        "es": "¿Podría ayudarme?"
      },
      {
        "de": "Ich wäre gern in Berlin.",
        "es": "Me gustaría estar en Berlín."
      },
      {
        "de": "Wir könnten morgen anfangen.",
        "es": "Podríamos empezar mañana."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Si tuviera tiempo, leería».",
        "explanation": "hätte expresa la condición hipotética; würde + infinitivo, el resultado.",
        "answer": "Wenn ich Zeit hätte, würde ich lesen.",
        "accepted": [
          "Wenn ich Zeit hätte, würde ich lesen.",
          "Ich würde lesen, wenn ich Zeit hätte.",
          "Hätte ich Zeit, würde ich lesen.",
          "Wenn ich Zeit hätte, läse ich."
        ],
        "id": "u11-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce como petición formal: «¿Podría ayudarme?».",
        "explanation": "Tratamiento formal Sie; helfen exige dativo mir.",
        "answer": "Könnten Sie mir helfen?",
        "accepted": [
          "Könnten Sie mir helfen?"
        ],
        "id": "u11-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa: Ich ___ gern in Berlin. (sein, Konjunktiv II)",
        "explanation": "wäre es la forma habitual de sein en Konjunktiv II.",
        "answer": "wäre",
        "accepted": [
          "wäre"
        ],
        "id": "u11-e3"
      },
      {
        "type": "case",
        "prompt": "Könnten Sie ___ helfen? (a mí)",
        "explanation": "helfen exige dativo: mir.",
        "options": [
          "ich",
          "mich",
          "mir"
        ],
        "correct": 2,
        "answer": "mir",
        "id": "u11-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga können en Konjunktiv II: Du ___ morgen kommen.",
        "explanation": "du könntest = podrías.",
        "answer": "könntest",
        "accepted": [
          "könntest"
        ],
        "id": "u11-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Wenn ich Zeit hätte.",
        "explanation": "La subordinada inicial ocupa posición 1; würde abre la principal.",
        "answer": "Wenn ich Zeit hätte, würde ich lesen.",
        "accepted": [
          "Wenn ich Zeit hätte, würde ich lesen."
        ],
        "tokens": [
          "lesen",
          "würde",
          "Wenn ich Zeit hätte,",
          "ich"
        ],
        "id": "u11-e6"
      },
      {
        "type": "comprehension",
        "prompt": "¿Qué hace principalmente «Könnten Sie mir helfen?» en una conversación?",
        "explanation": "Konjunktiv II puede expresar cortesía sin situar el evento en el pasado.",
        "options": [
          "Afirma un hecho pasado",
          "Formula una petición cortés",
          "Prohíbe ayudar"
        ],
        "correct": 1,
        "answer": "Formula una petición cortés",
        "id": "u11-e7"
      }
    ]
  },
  {
    "id": "unit-12",
    "order": 12,
    "title": "Infinitivos, finalidad y reflexivos",
    "level": "B1",
    "goal": "Condensar acciones con zu y distinguir finalidad de contenido.",
    "minutes": 20,
    "grammarIds": [
      "infinitive",
      "reflexive",
      "word-order",
      "subordinate"
    ],
    "vocabIds": [],
    "readingId": "reading-b1-4",
    "concepts": [
      {
        "de": "zu + Infinitiv",
        "es": "Tras muchos verbos: Ich versuche, Deutsch zu lernen. Con verbo separable, zu dentro: anzufangen, aufzustehen. Con modal no se añade zu: Ich muss lernen. intentar = versuchen; planear = planen."
      },
      {
        "de": "um ... zu / damit",
        "es": "um ... zu = para (finalidad); el sujeto implícito normalmente es el de la principal. Con distinto sujeto, usa damit + verbo final: Ich helfe dir, damit du lernen kannst."
      },
      {
        "de": "ohne ... zu / statt ... zu",
        "es": "ohne ... zu = sin hacer; statt ... zu = en vez de hacer. Con sujeto implícito compartido: Er liest, ohne zu sprechen. Se pone coma en los grupos infinitivos introducidos por um, ohne, statt."
      },
      {
        "de": "Reflexivpronomen",
        "es": "Acusativo mich/dich/sich/uns/euch/sich: Ich erinnere mich. Dativo mir/dir/sich/uns/euch/sich cuando otro objeto ocupa el acusativo: Ich wasche mir die Hände. sich interessieren für + acusativo = interesarse por."
      }
    ],
    "examples": [
      {
        "de": "Ich versuche, den Text zu verstehen.",
        "es": "Intento comprender el texto."
      },
      {
        "de": "Ich lerne Deutsch, um deutsche Bücher zu lesen.",
        "es": "Aprendo alemán para leer libros alemanes."
      },
      {
        "de": "Ich helfe dir, damit du lernen kannst.",
        "es": "Te ayudo para que puedas aprender."
      },
      {
        "de": "Ich plane, früh aufzustehen.",
        "es": "Planeo levantarme temprano."
      },
      {
        "de": "Ich interessiere mich für Philosophie.",
        "es": "Me interesa la filosofía."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Intento comprender el texto».",
        "explanation": "versuchen admite infinitivo con zu.",
        "answer": "Ich versuche, den Text zu verstehen.",
        "accepted": [
          "Ich versuche, den Text zu verstehen."
        ],
        "id": "u12-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce: «Me interesa la filosofía». Usa sich interessieren für.",
        "explanation": "sich interessieren für; mich concuerda con ich.",
        "answer": "Ich interessiere mich für Philosophie.",
        "accepted": [
          "Ich interessiere mich für Philosophie.",
          "Ich interessiere mich für die Philosophie."
        ],
        "id": "u12-e2"
      },
      {
        "type": "cloze",
        "prompt": "Forma zu + infinitivo de aufstehen: Ich plane, früh ___.",
        "explanation": "zu se inserta entre prefijo separable y raíz.",
        "answer": "aufzustehen",
        "accepted": [
          "aufzustehen"
        ],
        "id": "u12-e3"
      },
      {
        "type": "case",
        "prompt": "Ich wasche ___ die Hände. (a mí mismo/a)",
        "explanation": "die Hände es objeto acusativo; el reflexivo va en dativo mir.",
        "options": [
          "mich",
          "mir",
          "ich"
        ],
        "correct": 1,
        "answer": "mir",
        "id": "u12-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga versuchen: Er ___, den Text zu verstehen.",
        "explanation": "Tercera persona presente: versucht.",
        "answer": "versucht",
        "accepted": [
          "versucht"
        ],
        "id": "u12-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Ich.",
        "explanation": "Principal V2; infinitivo con zu al final de su grupo.",
        "answer": "Ich versuche, den Text zu verstehen.",
        "accepted": [
          "Ich versuche, den Text zu verstehen."
        ],
        "tokens": [
          "den Text",
          "Ich",
          "versuche,",
          "zu verstehen"
        ],
        "id": "u12-e6"
      },
      {
        "type": "comprehension",
        "prompt": "En «Ich helfe Lea, damit sie lernen kann», ¿quién aprende?",
        "explanation": "sie remite a Lea; damit permite un sujeto distinto del de la principal.",
        "options": [
          "Quien ayuda",
          "Lea",
          "Nadie"
        ],
        "correct": 1,
        "answer": "Lea",
        "id": "u12-e7"
      }
    ]
  },
  {
    "id": "unit-13",
    "order": 13,
    "title": "Conectores y estructura del argumento",
    "level": "B2",
    "goal": "Distinguir causa, consecuencia, concesión y medio; seguir su efecto en el orden verbal.",
    "minutes": 20,
    "grammarIds": [
      "connectors",
      "subordinate",
      "word-order"
    ],
    "vocabIds": [],
    "readingId": "reading-b2-1",
    "concepts": [
      {
        "de": "Konnektorarten",
        "es": "weil porque, obwohl aunque, indem mediante/al hacer: subordinantes, verbo final. denn porque, aber pero, und y: unen principales sin ocupar posición 1. deshalb por eso, trotzdem aun así: adverbios que sí ocupan una posición."
      },
      {
        "de": "Konzession / Folge",
        "es": "Obwohl es regnet, gehe ich hinaus. Es regnet; trotzdem gehe ich hinaus. Es regnet; deshalb bleibe ich hier. La concesión mantiene una conclusión a pesar de un obstáculo; la consecuencia se deriva de la premisa."
      },
      {
        "de": "zweiteilige Konnektoren",
        "es": "zwar ... aber = si bien ... pero; sowohl ... als auch = tanto ... como; weder ... noch = ni ... ni; nicht nur ... sondern auch = no solo ... sino también. Mantén paralelos los elementos coordinados."
      },
      {
        "de": "Mittel und Begründung",
        "es": "indem = medio/procedimiento: Er prüft die These, indem er Daten vergleicht. die These tesis, die Daten datos, vergleichen comparar; regnen llover; hinausgehen salir."
      }
    ],
    "examples": [
      {
        "de": "Obwohl es regnet, gehe ich hinaus.",
        "es": "Aunque llueve, salgo."
      },
      {
        "de": "Es regnet; trotzdem gehe ich hinaus.",
        "es": "Llueve; aun así salgo."
      },
      {
        "de": "Die These ist zwar klar, aber nicht bewiesen.",
        "es": "La tesis es clara, pero no está demostrada."
      },
      {
        "de": "Er prüft die These, indem er Daten vergleicht.",
        "es": "Comprueba la tesis comparando datos."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Aunque llueve, salgo».",
        "explanation": "obwohl introduce concesión; verbo final en subordinada y V2 en principal.",
        "answer": "Obwohl es regnet, gehe ich hinaus.",
        "accepted": [
          "Obwohl es regnet, gehe ich hinaus.",
          "Ich gehe hinaus, obwohl es regnet."
        ],
        "id": "u13-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce: «Llueve; por eso me quedo aquí».",
        "explanation": "deshalb expresa consecuencia y ocupa posición 1.",
        "answer": "Es regnet; deshalb bleibe ich hier.",
        "accepted": [
          "Es regnet; deshalb bleibe ich hier.",
          "Es regnet. Deshalb bleibe ich hier.",
          "Es regnet, deshalb bleibe ich hier.",
          "Es regnet; deswegen bleibe ich hier.",
          "Es regnet; daher bleibe ich hier."
        ],
        "id": "u13-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa el par: Die These ist ___ klar, aber nicht bewiesen.",
        "explanation": "zwar ... aber = concesión seguida de contraste.",
        "answer": "zwar",
        "accepted": [
          "zwar"
        ],
        "id": "u13-e3"
      },
      {
        "type": "case",
        "prompt": "Er vergleicht ___ Daten.",
        "explanation": "Daten es plural y objeto acusativo: die Daten.",
        "options": [
          "die",
          "den",
          "der"
        ],
        "correct": 0,
        "answer": "die",
        "id": "u13-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga vergleichen: Er ___ die Daten.",
        "explanation": "Tercera persona singular: vergleicht.",
        "answer": "vergleicht",
        "accepted": [
          "vergleicht"
        ],
        "id": "u13-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Trotzdem.",
        "explanation": "Adverbio conector ocupa posición 1; verbo en V2.",
        "answer": "Trotzdem gehe ich hinaus.",
        "accepted": [
          "Trotzdem gehe ich hinaus."
        ],
        "tokens": [
          "hinaus",
          "ich",
          "Trotzdem",
          "gehe"
        ],
        "id": "u13-e6"
      },
      {
        "type": "comprehension",
        "prompt": "«Die Erklärung ist einfach; trotzdem ist sie falsch». ¿Qué relación indica trotzdem?",
        "explanation": "trotzdem introduce un resultado contrario a la expectativa sugerida por la primera frase.",
        "options": [
          "Consecuencia necesaria",
          "Concesión: la simplicidad no garantiza verdad",
          "Identidad entre simplicidad y verdad"
        ],
        "correct": 1,
        "answer": "Concesión: la simplicidad no garantiza verdad",
        "id": "u13-e7"
      }
    ]
  },
  {
    "id": "unit-14",
    "order": 14,
    "title": "Nominalización y descripciones participiales",
    "level": "B2",
    "goal": "Descomprimir grupos nominales densos y recuperar acciones y participantes.",
    "minutes": 20,
    "grammarIds": [
      "participles",
      "adjective-endings",
      "noun-declension",
      "genitive",
      "infinitive"
    ],
    "vocabIds": [],
    "readingId": "reading-b2-2",
    "concepts": [
      {
        "de": "Nominalisierung",
        "es": "Infinitivos sustantivados: das Denken el pensar/pensamiento, das Lernen el aprendizaje; mayúscula y género neutro. Verbos→nombres léxicos: beobachten→die Beobachtung, erklären→die Erklärung, prüfen→die Prüfung."
      },
      {
        "de": "Partizip als Adjektiv",
        "es": "Partizip I: infinitivo + d, acción en curso: denkend, lesend. Partizip II: häufig resultado/pasiva con transitivos: geprüft. Como adjetivos se declinan: der denkende Mensch; die geprüfte These."
      },
      {
        "de": "erweitertes Attribut",
        "es": "Un participio puede llevar complementos delante: die von der Forscherin geprüfte These = la tesis comprobada por la investigadora. Reconstruye: Die Forscherin hat die These geprüft."
      },
      {
        "de": "n-Deklination / Genitivdeutung",
        "es": "Algunos masculinos añaden -(e)n fuera del nominativo singular: der Mensch→den/dem/des Menschen; der Student→Studenten. En «die Beobachtung des Forschers», el genitivo puede ser agente u objeto: el contexto decide.",
        "contrast": "El genitivo admite lecturas subjetiva/objetiva también familiares en latín y griego."
      }
    ],
    "examples": [
      {
        "de": "Das Denken ist eine Tätigkeit.",
        "es": "Pensar es una actividad."
      },
      {
        "de": "Der lesende Student sitzt hier.",
        "es": "El estudiante que está leyendo está sentado aquí."
      },
      {
        "de": "Die von der Forscherin geprüfte These ist klar.",
        "es": "La tesis comprobada por la investigadora es clara."
      },
      {
        "de": "Ich sehe den denkenden Menschen.",
        "es": "Veo al ser humano que piensa."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Pensar es una actividad».",
        "explanation": "Infinitivo sustantivado: das Denken, con mayúscula.",
        "answer": "Das Denken ist eine Tätigkeit.",
        "accepted": [
          "Das Denken ist eine Tätigkeit.",
          "Denken ist eine Tätigkeit."
        ],
        "id": "u14-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce al español: «die von der Forscherin geprüfte These».",
        "explanation": "El complemento von der Forscherin pertenece al participio geprüfte.",
        "answer": "La tesis comprobada por la investigadora.",
        "accepted": [
          "La tesis comprobada por la investigadora.",
          "La tesis examinada por la investigadora.",
          "La tesis verificada por la investigadora."
        ],
        "id": "u14-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa Partizip I: lesen → ___.",
        "explanation": "Partizip I: lesen + d.",
        "answer": "lesend",
        "accepted": [
          "lesend"
        ],
        "id": "u14-e3"
      },
      {
        "type": "case",
        "prompt": "Ich helfe ___ Studenten. (singular)",
        "explanation": "Dativo masculino: dem; Student añade -en en la declinación débil.",
        "options": [
          "der",
          "den",
          "dem"
        ],
        "correct": 2,
        "answer": "dem",
        "id": "u14-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Convierte a pasiva presente: Die Forscherin prüft die These. → Die These ___ geprüft.",
        "explanation": "Se nominalizó una acción; al reconstruir la pasiva, usa werden + participio.",
        "answer": "wird",
        "accepted": [
          "wird"
        ],
        "id": "u14-e5"
      },
      {
        "type": "word-order",
        "prompt": "Reconstruye la principal comenzando por Die Forscherin.",
        "explanation": "El atributo participial corresponde aquí a una acción en Perfekt.",
        "answer": "Die Forscherin hat die These geprüft.",
        "accepted": [
          "Die Forscherin hat die These geprüft."
        ],
        "tokens": [
          "die These",
          "geprüft",
          "Die Forscherin",
          "hat"
        ],
        "id": "u14-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Sin más contexto, «die Beobachtung des Forschers» puede significar…",
        "explanation": "El genitivo puede indicar agente u objeto; no decidas una lectura sin contexto.",
        "options": [
          "Solo que el investigador observa",
          "Solo que alguien observa al investigador",
          "La observación que hace el investigador o la observación del investigador como objeto"
        ],
        "correct": 2,
        "answer": "La observación que hace el investigador o la observación del investigador como objeto",
        "id": "u14-e7"
      }
    ]
  },
  {
    "id": "unit-15",
    "order": 15,
    "title": "Konjunktiv I y discurso referido",
    "level": "B2",
    "goal": "Distinguir el contenido atribuido de la afirmación propia del narrador.",
    "minutes": 20,
    "grammarIds": [
      "konjunktiv1",
      "konjunktiv2",
      "perfect",
      "passive"
    ],
    "vocabIds": [],
    "readingId": "reading-b2-3",
    "concepts": [
      {
        "de": "Konjunktiv I",
        "es": "Frecuente en noticias y textos académicos para discurso indirecto. Se construye desde raíz de presente: er komme, er habe, er könne. sein: ich sei, du seiest, er sei, wir seien, ihr seiet, sie seien."
      },
      {
        "de": "Formgleichheit — coincidencia de formas",
        "es": "Si Konjunktiv I coincide con indicativo, puede usarse Konjunktiv II para distinguir el discurso referido: sie haben→sie hätten. La sustitución no convierte automáticamente el contenido en irreal; depende del contexto."
      },
      {
        "de": "Zeitbezug im Bericht",
        "es": "Presente referido: Er sagt, er sei müde. Anterioridad: Er sagt, er habe gearbeitet / er sei gekommen. Pasiva: Der Bericht sagt, die These sei geprüft worden. No copies un desplazamiento temporal mecánico del inglés."
      },
      {
        "de": "Quellenabstand — distancia respecto de la fuente",
        "es": "Konjunktiv I atribuye una afirmación a otra fuente; no demuestra que sea falsa ni garantiza neutralidad total. behaupten afirmar/sostener, berichten informar, die Forscherin investigadora.",
        "contrast": "English reported speech suele cambiar tiempos; el alemán formal puede conservar el tiempo relativo con Konjunktiv I."
      }
    ],
    "examples": [
      {
        "de": "Lea sagt, sie sei müde.",
        "es": "Lea dice que está cansada."
      },
      {
        "de": "Der Forscher behauptet, er habe die These geprüft.",
        "es": "El investigador afirma que ha comprobado la tesis."
      },
      {
        "de": "Sie berichten, sie hätten keine Zeit.",
        "es": "Informan de que no tienen tiempo."
      },
      {
        "de": "Dem Bericht zufolge sei die These geprüft worden.",
        "es": "Según el informe, la tesis habría sido comprobada (contenido atribuido)."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Transforma a discurso referido con Konjunktiv I: Lea sagt: «Ich bin müde».",
        "explanation": "ich de la cita pasa a sie; bin pasa a sei.",
        "answer": "Lea sagt, sie sei müde.",
        "accepted": [
          "Lea sagt, sie sei müde.",
          "Lea sagt, dass sie müde sei."
        ],
        "id": "u15-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce al español: «Der Forscher behauptet, er habe die These geprüft».",
        "explanation": "habe geprüft atribuye una acción anterior a la fuente.",
        "answer": "El investigador afirma que ha comprobado la tesis.",
        "accepted": [
          "El investigador afirma que ha comprobado la tesis.",
          "El investigador sostiene que ha comprobado la tesis.",
          "El investigador afirma que comprobó la tesis.",
          "El investigador afirma que ha examinado la tesis.",
          "El investigador afirma haber comprobado la tesis."
        ],
        "id": "u15-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa la pasiva referida: Die These sei geprüft ___.",
        "explanation": "Anterioridad pasiva: sei + geprüft + worden.",
        "answer": "worden",
        "accepted": [
          "worden"
        ],
        "id": "u15-e3"
      },
      {
        "type": "case",
        "prompt": "Dem Bericht zufolge helfe die Forscherin ___ Kind.",
        "explanation": "helfen conserva su régimen dativo también en discurso referido.",
        "options": [
          "das",
          "dem",
          "den"
        ],
        "correct": 1,
        "answer": "dem",
        "id": "u15-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga haben en Konjunktiv I: Er ___ die These geprüft.",
        "explanation": "Tercera persona singular: habe.",
        "answer": "habe",
        "accepted": [
          "habe"
        ],
        "id": "u15-e5"
      },
      {
        "type": "word-order",
        "prompt": "Ordena el discurso referido; comienza por Lea sagt,.",
        "explanation": "Discurso indirecto sin dass puede mantener V2.",
        "answer": "Lea sagt, er sei müde.",
        "accepted": [
          "Lea sagt, er sei müde."
        ],
        "tokens": [
          "Lea sagt,",
          "er",
          "sei",
          "müde"
        ],
        "id": "u15-e6"
      },
      {
        "type": "comprehension",
        "prompt": "¿Qué puede inferirse de «Lea sagt, sie sei müde»?",
        "explanation": "Konjunktiv I marca atribución; por sí solo no establece verdad ni falsedad.",
        "options": [
          "El narrador afirma que Lea miente",
          "El estado de cansancio se atribuye a Lea",
          "Lea estará cansada mañana necesariamente"
        ],
        "correct": 1,
        "answer": "El estado de cansancio se atribuye a Lea",
        "id": "u15-e7"
      }
    ]
  },
  {
    "id": "unit-16",
    "order": 16,
    "title": "Secuencia temporal y comparación",
    "level": "B2",
    "goal": "Situar hechos respecto de otros hechos y comparar magnitudes sin perder referencias.",
    "minutes": 20,
    "grammarIds": [
      "past",
      "perfect",
      "future",
      "comparative",
      "subordinate"
    ],
    "vocabIds": [],
    "readingId": "reading-b2-4",
    "concepts": [
      {
        "de": "Plusquamperfekt",
        "es": "Anterioridad respecto de un momento pasado: hatte/war + participio. Nachdem sie das Buch gelesen hatte, schrieb sie einen Text. No significa simplemente «pasado más remoto»: requiere un punto pasado de referencia."
      },
      {
        "de": "Präteritum im Text",
        "es": "Narración escrita: lesen→las, schreiben→schrieb, gehen→ging, sehen→sah, denken→dachte. Regulares: lernte, arbeitete. Singular frecuente ich/er las; plural wir/sie lasen."
      },
      {
        "de": "Vergleich",
        "es": "Comparativo -er + als: schneller als más rápido que. Igualdad: so schnell wie tan rápido como. Irregulares: gut/besser/am besten; viel/mehr/am meisten. Superlativo adverbial: am schnellsten."
      },
      {
        "de": "Futur II / Vermutung",
        "es": "werden + participio + haben/sein: Er wird den Text gelesen haben. Puede indicar hecho completado en futuro o conjetura sobre pasado. Contexto: Bis morgen wird ... = para mañana habrá ...; Er wird wohl ... = probablemente haya ... ."
      }
    ],
    "examples": [
      {
        "de": "Nachdem Lea das Buch gelesen hatte, schrieb sie einen Text.",
        "es": "Después de haber leído el libro, Lea escribió un texto."
      },
      {
        "de": "Dieser Text ist klarer als der andere.",
        "es": "Este texto es más claro que el otro."
      },
      {
        "de": "Der zweite Text ist so klar wie der erste.",
        "es": "El segundo texto es tan claro como el primero."
      },
      {
        "de": "Bis morgen wird sie den Text gelesen haben.",
        "es": "Para mañana habrá leído el texto."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Este texto es más claro que el otro».",
        "explanation": "Comparativo klarer + als, no wie.",
        "answer": "Dieser Text ist klarer als der andere.",
        "accepted": [
          "Dieser Text ist klarer als der andere."
        ],
        "id": "u16-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce: «Después de haber leído el libro, Lea escribió un texto».",
        "explanation": "Plusquamperfekt marca lectura anterior a la escritura pasada.",
        "answer": "Nachdem Lea das Buch gelesen hatte, schrieb sie einen Text.",
        "accepted": [
          "Nachdem Lea das Buch gelesen hatte, schrieb sie einen Text.",
          "Nachdem sie das Buch gelesen hatte, schrieb Lea einen Text."
        ],
        "id": "u16-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa la igualdad: Dieser Text ist so klar ___ der andere.",
        "explanation": "Igualdad: so ... wie; desigualdad: comparativo + als.",
        "answer": "wie",
        "accepted": [
          "wie"
        ],
        "id": "u16-e3"
      },
      {
        "type": "case",
        "prompt": "Nachdem sie ___ Buch gelesen hatte, schrieb sie einen Text.",
        "explanation": "lesen toma objeto acusativo; Buch neutro: das.",
        "options": [
          "das",
          "dem",
          "der"
        ],
        "correct": 0,
        "answer": "das",
        "id": "u16-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga schreiben en Präteritum: Lea ___ einen Text.",
        "explanation": "schreiben → schrieb → geschrieben.",
        "answer": "schrieb",
        "accepted": [
          "schrieb"
        ],
        "id": "u16-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Bis morgen.",
        "explanation": "Futur II: wird + participio + infinitivo del auxiliar al final.",
        "answer": "Bis morgen wird sie den Text gelesen haben.",
        "accepted": [
          "Bis morgen wird sie den Text gelesen haben."
        ],
        "tokens": [
          "haben",
          "Bis morgen",
          "den Text",
          "wird",
          "sie",
          "gelesen"
        ],
        "id": "u16-e6"
      },
      {
        "type": "comprehension",
        "prompt": "«Nachdem sie gelesen hatte, schrieb sie». ¿Qué sucedió primero?",
        "explanation": "hatte gelesen expresa anterioridad respecto de schrieb.",
        "options": [
          "La escritura",
          "La lectura",
          "Ambas acciones son simultáneas"
        ],
        "correct": 1,
        "answer": "La lectura",
        "id": "u16-e7"
      }
    ]
  },
  {
    "id": "unit-17",
    "order": 17,
    "title": "Definiciones, condiciones y alcance",
    "level": "C1",
    "goal": "Introducir lectura avanzada de argumentos: reconocer definiciones y alcance lógico. Esta unidad no acredita nivel C1.",
    "minutes": 20,
    "grammarIds": [
      "connectors",
      "subordinate",
      "word-order",
      "relative"
    ],
    "vocabIds": [],
    "readingId": "reading-c1-1",
    "concepts": [
      {
        "de": "Begriffsbestimmung — definición conceptual",
        "es": "Unter X versteht man Y = por X se entiende Y. Als X gilt Y = Y se considera X. X bezeichnet Y = X designa Y. die Behauptung afirmación, die Bedingung condición, hinreichend suficiente, notwendig necesario. Construcción definitoria: unter + dativo (unter diesem Begriff = por este concepto); no expresa aquí destino espacial."
      },
      {
        "de": "nur wenn / wenn",
        "es": "P nur wenn Q: Q es condición necesaria de P. Wenn Q, dann P: Q es condición suficiente de P. No intercambies las direcciones. genau dann, wenn = si y solo si, en formulaciones explícitas."
      },
      {
        "de": "sofern / soweit",
        "es": "sofern = siempre que/en la medida en que (condición, según contexto); soweit = en la medida en que (alcance/límite). in diesem Sinne = en este sentido. Explicita el alcance antes de extraer una conclusión."
      },
      {
        "de": "Negationsbereich — alcance de la negación",
        "es": "Nicht alle Sätze sind wahr = no todos son verdaderos. Alle Sätze sind nicht wahr suele leerse como ninguno es verdadero, pero puede ser ambiguo según foco: evita esa formulación si la precisión lógica importa. Kein Satz ist wahr es inequívoco."
      }
    ],
    "examples": [
      {
        "de": "Unter Wissen versteht man hier eine begründete wahre Überzeugung.",
        "es": "Aquí se entiende por conocimiento una creencia verdadera justificada."
      },
      {
        "de": "Eine Behauptung ist nur dann Wissen, wenn sie wahr ist.",
        "es": "Una afirmación solo es conocimiento si es verdadera."
      },
      {
        "de": "Nicht alle wahren Behauptungen sind begründet.",
        "es": "No todas las afirmaciones verdaderas están justificadas."
      },
      {
        "de": "Die Definition gilt, sofern die genannten Bedingungen erfüllt sind.",
        "es": "La definición se aplica siempre que se cumplan las condiciones mencionadas."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «No todas las afirmaciones verdaderas están justificadas».",
        "explanation": "nicht alle niega la universalidad; no afirma que ninguna esté justificada.",
        "answer": "Nicht alle wahren Behauptungen sind begründet.",
        "accepted": [
          "Nicht alle wahren Behauptungen sind begründet."
        ],
        "id": "u17-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce al español: «Unter Wissen versteht man hier eine begründete wahre Überzeugung».",
        "explanation": "Unter ... versteht man introduce una definición local.",
        "answer": "Aquí se entiende por conocimiento una creencia verdadera justificada.",
        "accepted": [
          "Aquí se entiende por conocimiento una creencia verdadera justificada.",
          "Por conocimiento se entiende aquí una creencia verdadera justificada.",
          "Aquí se entiende por saber una creencia verdadera justificada."
        ],
        "id": "u17-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa la condición necesaria: P gilt nur dann, ___ Q gilt.",
        "explanation": "nur dann, wenn presenta Q como condición necesaria de P.",
        "answer": "wenn",
        "accepted": [
          "wenn"
        ],
        "id": "u17-e3"
      },
      {
        "type": "case",
        "prompt": "Unter ___ Begriff versteht man hier eine Fähigkeit. (este concepto)",
        "explanation": "En esta construcción definitoria, unter + dativo: unter diesem Begriff.",
        "options": [
          "dieser",
          "diesen",
          "diesem"
        ],
        "correct": 2,
        "answer": "diesem",
        "id": "u17-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga gelten: Die Definition ___ nur unter diesen Bedingungen.",
        "explanation": "gelten → gilt en tercera persona singular.",
        "answer": "gilt",
        "accepted": [
          "gilt"
        ],
        "id": "u17-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Nicht alle wahren Behauptungen.",
        "explanation": "El sujeto completo ocupa posición 1; sind ocupa posición 2.",
        "answer": "Nicht alle wahren Behauptungen sind begründet.",
        "accepted": [
          "Nicht alle wahren Behauptungen sind begründet."
        ],
        "tokens": [
          "begründet",
          "sind",
          "Nicht alle wahren Behauptungen"
        ],
        "id": "u17-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Si «Eine Behauptung ist nur dann Wissen, wenn sie wahr ist», ¿qué se sigue?",
        "explanation": "P solo si Q exige Q para P; no garantiza P a partir de Q.",
        "options": [
          "Toda afirmación verdadera es conocimiento",
          "La verdad es necesaria para que la afirmación sea conocimiento",
          "La verdad es irrelevante"
        ],
        "correct": 1,
        "answer": "La verdad es necesaria para que la afirmación sea conocimiento",
        "id": "u17-e7"
      }
    ]
  },
  {
    "id": "unit-18",
    "order": 18,
    "title": "Cognición: relaciones, procesos y evidencia",
    "level": "C1",
    "goal": "Leer textos didácticos originales sobre cognición; separar correlación, mecanismo y causa.",
    "minutes": 20,
    "grammarIds": [
      "comparative",
      "connectors",
      "participles",
      "passive",
      "reflexive"
    ],
    "vocabIds": [],
    "readingId": "reading-c1-2",
    "concepts": [
      {
        "de": "je ... desto / umso",
        "es": "je + comparativo y verbo final; desto/umso + comparativo y verbo conjugado: Je häufiger man übt, desto leichter erinnert man sich. Expresa covariación; por sí solo no demuestra causalidad."
      },
      {
        "de": "sich erinnern an",
        "es": "sich erinnern an + acusativo = recordar. Ich erinnere mich an den Text. die Aufmerksamkeit atención, die Verarbeitung procesamiento, der Reiz estímulo, die Erinnerung recuerdo/memoria, verursachen causar."
      },
      {
        "de": "Evidenzsprache — lenguaje de la evidencia",
        "es": "Daten sprechen dafür, dass ... = los datos apoyan que ...; daraus folgt nicht, dass ... = de ello no se sigue que ...; mit etwas zusammenhängen = estar relacionado con algo. Unterstützung ist kein logischer Beweis: apoyo empírico no equivale a prueba deductiva."
      },
      {
        "de": "Prozessbeschreibung",
        "es": "Der verarbeitete Reiz = el estímulo procesado; der zu verarbeitende Reiz = el estímulo que debe procesarse. zu + participio I suele expresar necesidad/posibilidad en construcciones atributivas; contexto y verbo determinan lectura."
      }
    ],
    "examples": [
      {
        "de": "Je häufiger man übt, desto leichter erinnert man sich an den Text.",
        "es": "Cuanto más a menudo se practica, más fácil resulta recordar el texto."
      },
      {
        "de": "Aufmerksamkeit hängt mit der Verarbeitung von Reizen zusammen.",
        "es": "La atención está relacionada con el procesamiento de estímulos."
      },
      {
        "de": "Daraus folgt nicht, dass Aufmerksamkeit allein die Erinnerung verursacht.",
        "es": "De ello no se sigue que la atención por sí sola cause el recuerdo."
      },
      {
        "de": "Der zu verarbeitende Reiz wird erneut gezeigt.",
        "es": "Se muestra de nuevo el estímulo que debe procesarse."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Recuerdo el texto».",
        "explanation": "sich erinnern an exige acusativo; Text es masculino.",
        "answer": "Ich erinnere mich an den Text.",
        "accepted": [
          "Ich erinnere mich an den Text."
        ],
        "id": "u18-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce al español: «Daraus folgt nicht, dass Aufmerksamkeit allein die Erinnerung verursacht».",
        "explanation": "Se rechaza una inferencia causal suficiente.",
        "answer": "De ello no se sigue que la atención por sí sola cause el recuerdo.",
        "accepted": [
          "De ello no se sigue que la atención por sí sola cause el recuerdo.",
          "De eso no se deduce que la atención por sí sola cause el recuerdo.",
          "De ello no se sigue que la atención por sí sola produzca el recuerdo."
        ],
        "id": "u18-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa: Je häufiger man übt, ___ leichter erinnert man sich.",
        "explanation": "Correlación graduada: je ... desto/umso.",
        "answer": "desto",
        "accepted": [
          "desto",
          "umso"
        ],
        "id": "u18-e3"
      },
      {
        "type": "case",
        "prompt": "Ich erinnere mich an ___ Reiz.",
        "explanation": "sich erinnern an rige acusativo; Reiz masculino: den Reiz.",
        "options": [
          "der",
          "dem",
          "den"
        ],
        "correct": 2,
        "answer": "den",
        "id": "u18-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga verursachen: Aufmerksamkeit allein ___ nicht jede Erinnerung.",
        "explanation": "Tercera persona singular regular: verursacht.",
        "answer": "verursacht",
        "accepted": [
          "verursacht"
        ],
        "id": "u18-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Der Reiz.",
        "explanation": "Pasiva de proceso; wird en V2 y participio final.",
        "answer": "Der Reiz wird erneut gezeigt.",
        "accepted": [
          "Der Reiz wird erneut gezeigt."
        ],
        "tokens": [
          "erneut",
          "gezeigt",
          "Der Reiz",
          "wird"
        ],
        "id": "u18-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Un texto dice: «Je häufiger ein Reiz auftritt, desto besser wird er erinnert». ¿Qué permite afirmar la estructura gramatical por sí sola?",
        "explanation": "je ... desto expresa covariación; la causalidad necesita evidencia adicional.",
        "options": [
          "Una asociación graduada",
          "Un mecanismo causal demostrado",
          "Que el estímulo es falso"
        ],
        "correct": 0,
        "answer": "Una asociación graduada",
        "id": "u18-e7"
      }
    ]
  },
  {
    "id": "unit-19",
    "order": 19,
    "title": "Contrafácticos y cautela epistemológica",
    "level": "C1",
    "goal": "Comparar hechos observados con alternativas pasadas y calibrar la fuerza de una conclusión.",
    "minutes": 20,
    "grammarIds": [
      "konjunktiv2",
      "konjunktiv1",
      "modal-verbs",
      "perfect",
      "subordinate"
    ],
    "vocabIds": [],
    "readingId": "reading-c1-3",
    "concepts": [
      {
        "de": "Irrealis der Vergangenheit",
        "es": "hätte/wäre + participio: Wenn wir die Daten geprüft hätten, hätten wir den Fehler bemerkt. La alternativa se sitúa en el pasado. gehen usa wäre gegangen; prüfen usa hätte geprüft."
      },
      {
        "de": "Modalverb im vergangenen Irrealis",
        "es": "hätte + infinitivo léxico + infinitivo modal: Ich hätte kommen können. Con subordinada y doble infinitivo, el auxiliar precede al grupo: weil ich hätte kommen können. La estructura es avanzada: aprende el patrón completo."
      },
      {
        "de": "epistemische Modalität",
        "es": "Das dürfte stimmen = probablemente sea correcto (dürfte expresa conjetura aquí). Das könnte stimmen = podría ser correcto. Das muss stimmen puede expresar inferencia fuerte o necesidad según contexto. No traduzcas cada modal con una única etiqueta."
      },
      {
        "de": "Einschränkung",
        "es": "soweit bekannt = hasta donde se sabe; nach bisherigem Kenntnisstand = según el conocimiento actual; lässt sich nicht ausschließen = no puede descartarse. der Fehler error, bemerken advertir, ausschließen descartar."
      }
    ],
    "examples": [
      {
        "de": "Wenn wir die Daten geprüft hätten, hätten wir den Fehler bemerkt.",
        "es": "Si hubiéramos comprobado los datos, habríamos advertido el error."
      },
      {
        "de": "Wir hätten den Fehler bemerken können.",
        "es": "Podríamos haber advertido el error."
      },
      {
        "de": "Die Erklärung dürfte unvollständig sein.",
        "es": "La explicación probablemente sea incompleta."
      },
      {
        "de": "Es lässt sich nicht ausschließen, dass ein Fehler vorliegt.",
        "es": "No puede descartarse que haya un error."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Podríamos haber advertido el error».",
        "explanation": "Con modal en esta estructura: hätten + bemerken + können.",
        "answer": "Wir hätten den Fehler bemerken können.",
        "accepted": [
          "Wir hätten den Fehler bemerken können."
        ],
        "id": "u19-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce al español: «Die Erklärung dürfte unvollständig sein».",
        "explanation": "dürfte expresa conjetura, no permiso en este contexto.",
        "answer": "La explicación probablemente sea incompleta.",
        "accepted": [
          "La explicación probablemente sea incompleta.",
          "La explicación probablemente es incompleta.",
          "Es probable que la explicación sea incompleta.",
          "La explicación probablemente esté incompleta."
        ],
        "id": "u19-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa: Wenn wir die Daten geprüft ___, hätten wir den Fehler bemerkt.",
        "explanation": "prüfen usa haben; pasado contrafáctico: geprüft hätten.",
        "answer": "hätten",
        "accepted": [
          "hätten"
        ],
        "id": "u19-e3"
      },
      {
        "type": "case",
        "prompt": "Wir hätten ___ Fehler bemerkt.",
        "explanation": "bemerken toma objeto acusativo; Fehler es masculino.",
        "options": [
          "der",
          "dem",
          "den"
        ],
        "correct": 2,
        "answer": "den",
        "id": "u19-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga haben en Konjunktiv II: Du ___ kommen können.",
        "explanation": "du hättest; el doble infinitivo expresa capacidad o posibilidad en una situación pasada hipotética.",
        "answer": "hättest",
        "accepted": [
          "hättest"
        ],
        "id": "u19-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Wir.",
        "explanation": "Auxiliar en V2; verbo léxico + modal en infinitivo al final.",
        "answer": "Wir hätten den Fehler bemerken können.",
        "accepted": [
          "Wir hätten den Fehler bemerken können."
        ],
        "tokens": [
          "können",
          "Wir",
          "den Fehler",
          "hätten",
          "bemerken"
        ],
        "id": "u19-e6"
      },
      {
        "type": "comprehension",
        "prompt": "«Es lässt sich nicht ausschließen, dass ein Fehler vorliegt» significa…",
        "explanation": "No descartar una posibilidad no equivale a confirmarla.",
        "options": [
          "Se ha demostrado que hay un error",
          "No se puede descartar la posibilidad de un error",
          "Se ha demostrado que no hay errores"
        ],
        "correct": 1,
        "answer": "No se puede descartar la posibilidad de un error",
        "id": "u19-e7"
      }
    ]
  },
  {
    "id": "unit-20",
    "order": 20,
    "title": "Lectura integrada: mente, ciencia y argumento",
    "level": "C1",
    "goal": "Descomprimir un argumento avanzado con relativas, nominalizaciones y límites de inferencia.",
    "minutes": 20,
    "grammarIds": [
      "relative",
      "adjective-endings",
      "genitive",
      "connectors",
      "konjunktiv1",
      "passive"
    ],
    "vocabIds": [],
    "readingId": "reading-c1-4",
    "concepts": [
      {
        "de": "Argumentrekonstruktion",
        "es": "Identifica premisa (Prämisse), conclusión (Schlussfolgerung), supuesto (Annahme) y objeción (Einwand). danach/dabei pueden ser temporales o discursivos; demnach = según ello/por consiguiente. Examina qué antecedente recupera cada pronombre."
      },
      {
        "de": "mehrteilige Struktur",
        "es": "Eine Erklärung, die ... , ist nicht schon deshalb ..., weil ... = una explicación que ... no es por ese solo motivo ..., porque ... . nicht schon deshalb bloquea una inferencia específica; no necesariamente niega la conclusión en todo caso."
      },
      {
        "de": "Verdichtung und Entfaltung — condensación y despliegue",
        "es": "die Erklärung des beobachteten Verhaltens = la explicación de la conducta observada. Verhalten es neutro; genitivo des Verhaltens. Reconstruye sujeto, acción y objeto al pasar de nominalización a oración."
      },
      {
        "de": "Bericht und Bewertung — atribución y valoración",
        "es": "Der Autor behauptet, Bewusstsein sei ... = el autor sostiene que la conciencia es ... . Bewusstsein conciencia, Verhalten conducta, vorhersagen predecir, erklären explicar. Distingue lo atribuido del juicio propio del texto; las unidades C1 introducen lectura avanzada y requieren ampliación."
      }
    ],
    "examples": [
      {
        "de": "Eine Theorie, die Verhalten vorhersagt, erklärt nicht automatisch Bewusstsein.",
        "es": "Una teoría que predice la conducta no explica automáticamente la conciencia."
      },
      {
        "de": "Die Erklärung des beobachteten Verhaltens ist noch unvollständig.",
        "es": "La explicación de la conducta observada sigue siendo incompleta."
      },
      {
        "de": "Der Autor behauptet, Bewusstsein sei eine Form der Verarbeitung.",
        "es": "El autor sostiene que la conciencia es una forma de procesamiento."
      },
      {
        "de": "Die Theorie ist nicht schon deshalb falsch, weil sie unvollständig ist.",
        "es": "La teoría no es falsa por el solo hecho de ser incompleta."
      }
    ],
    "exercises": [
      {
        "type": "translation",
        "prompt": "Traduce: «Una teoría que predice la conducta no explica automáticamente la conciencia».",
        "explanation": "die: sujeto femenino de relativa; vorhersagt va al final de la relativa.",
        "answer": "Eine Theorie, die Verhalten vorhersagt, erklärt nicht automatisch Bewusstsein.",
        "accepted": [
          "Eine Theorie, die Verhalten vorhersagt, erklärt nicht automatisch Bewusstsein.",
          "Eine Theorie, die das Verhalten vorhersagt, erklärt nicht automatisch Bewusstsein.",
          "Eine Theorie, die Verhalten vorhersagt, erklärt nicht automatisch das Bewusstsein.",
          "Eine Theorie, die das Verhalten vorhersagt, erklärt nicht automatisch das Bewusstsein."
        ],
        "id": "u20-e1"
      },
      {
        "type": "translation",
        "prompt": "Traduce al español: «Die Theorie ist nicht schon deshalb falsch, weil sie unvollständig ist».",
        "explanation": "Se rechaza que la incompletitud baste para inferir falsedad.",
        "answer": "La teoría no es falsa por el solo hecho de ser incompleta.",
        "accepted": [
          "La teoría no es falsa por el solo hecho de ser incompleta.",
          "La teoría no es falsa solo porque es incompleta.",
          "La teoría no es falsa por el mero hecho de ser incompleta.",
          "La teoría no es falsa por el simple hecho de estar incompleta."
        ],
        "id": "u20-e2"
      },
      {
        "type": "cloze",
        "prompt": "Completa en Konjunktiv I: Der Autor behauptet, Bewusstsein ___ eine Form der Verarbeitung.",
        "explanation": "Konjunktiv I de sein en tercera persona: sei.",
        "answer": "sei",
        "accepted": [
          "sei"
        ],
        "id": "u20-e3"
      },
      {
        "type": "case",
        "prompt": "die Erklärung ___ beobachteten Verhaltens",
        "explanation": "Genitivo neutro: des beobachteten Verhaltens; adjetivo tras des: -en.",
        "options": [
          "das",
          "des",
          "dem"
        ],
        "correct": 1,
        "answer": "des",
        "id": "u20-e4"
      },
      {
        "type": "conjugation",
        "prompt": "Conjuga vorhersagen dentro de la relativa: eine Theorie, die Verhalten ___.",
        "explanation": "En subordinada, el prefijo separable permanece unido al verbo final.",
        "answer": "vorhersagt",
        "accepted": [
          "vorhersagt"
        ],
        "id": "u20-e5"
      },
      {
        "type": "word-order",
        "prompt": "Comienza por Die Erklärung.",
        "explanation": "Sujeto en posición 1, ist en V2; noch = todavía/aún.",
        "answer": "Die Erklärung ist noch unvollständig.",
        "accepted": [
          "Die Erklärung ist noch unvollständig."
        ],
        "tokens": [
          "unvollständig",
          "Die Erklärung",
          "ist",
          "noch"
        ],
        "id": "u20-e6"
      },
      {
        "type": "comprehension",
        "prompt": "Texto didáctico original: «Eine Theorie sagt Verhalten voraus. Daraus folgt nicht, dass sie Bewusstsein erklärt. Sie kann dennoch nützlich sein». ¿Qué conclusión sostiene el texto?",
        "explanation": "Se limita una inferencia entre predicción y explicación; dennoch mantiene la posibilidad de utilidad.",
        "options": [
          "Predecir conducta garantiza explicar conciencia",
          "Una teoría puede ser útil sin que su éxito predictivo baste para explicar conciencia",
          "Toda teoría predictiva es falsa"
        ],
        "correct": 1,
        "answer": "Una teoría puede ser útil sin que su éxito predictivo baste para explicar conciencia",
        "id": "u20-e7"
      }
    ]
  }
];
