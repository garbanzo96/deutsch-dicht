/* Reading bridges, prerequisites, contextual lemmas and original bilingual glosses. */
window.DeutschData = window.DeutschData || {};
window.DeutschData.bridgeReadings = [
  {
    "id": "reading-unit-01",
    "title": "Ich komme aus Chile · Identidad y V2",
    "titleEn": "Ich komme aus Chile · Identity and V2",
    "level": "A1",
    "kind": "lectura puente",
    "kindEn": "bridge reading",
    "source": {
      "type": "original",
      "label": "Texto didáctico original · puente U01",
      "labelEn": "Original teaching text · U01 bridge",
      "licenseNote": "Texto alemán y traducciones propios; introduce solo las estructuras de esta unidad y las anteriores. No es una cita.",
      "licenseNoteEn": "Original German text and translations; introduces only structures from this unit and earlier ones. Not a quotation."
    },
    "paragraphs": [
      {
        "de": "Ich heiße Gabriel. Ich komme aus Chile. Jetzt wohne ich in Santiago. Ich spreche Spanisch und Englisch. Ich lerne Deutsch.",
        "es": "Me llamo Gabriel. Soy de Chile. Ahora vivo en Santiago. Hablo español e inglés. Aprendo alemán.",
        "en": "My name is Gabriel. I am from Chile. Now I live in Santiago. I speak Spanish and English. I am learning German."
      },
      {
        "de": "Heute lerne ich Deutsch. Du lernst auch Deutsch. Wir sind hier. Die Sprache ist interessant.",
        "es": "Hoy aprendo alemán. Tú también aprendes alemán. Estamos aquí. La lengua es interesante.",
        "en": "Today I am learning German. You are learning German too. We are here. The language is interesting."
      }
    ],
    "glossary": [
      {
        "de": "jetzt",
        "es": "ahora",
        "en": "now",
        "lemma": "jetzt"
      },
      {
        "de": "heute",
        "es": "hoy",
        "en": "today",
        "lemma": "heute"
      },
      {
        "de": "auch",
        "es": "también",
        "en": "also; too",
        "lemma": "auch"
      },
      {
        "de": "die Sprache",
        "es": "lengua; idioma",
        "en": "language",
        "lemma": "Sprache"
      },
      {
        "de": "interessant",
        "es": "interesante",
        "en": "interesting",
        "lemma": "interessant"
      },
      {
        "de": "Spanisch",
        "es": "español (idioma)",
        "en": "Spanish (language)",
        "lemma": "Spanisch"
      },
      {
        "de": "Englisch",
        "es": "inglés (idioma)",
        "en": "English (language)",
        "lemma": "Englisch"
      },
      {
        "de": "Deutsch",
        "es": "alemán (idioma)",
        "en": "German (language)",
        "lemma": "Deutsch"
      }
    ],
    "questions": [
      {
        "prompt": "En Heute lerne ich Deutsch, ¿qué ocupa posición 2?",
        "promptEn": "In Heute lerne ich Deutsch, what occupies position 2?",
        "options": [
          "Heute",
          "lerne",
          "ich"
        ],
        "optionsEn": [
          "Heute",
          "lerne",
          "ich"
        ],
        "answer": 1,
        "explanation": "El verbo conjugado lerne va en posición 2.",
        "explanationEn": "The finite verb lerne occupies position 2."
      },
      {
        "prompt": "¿Dónde vive Gabriel ahora?",
        "promptEn": "Where does Gabriel live now?",
        "options": [
          "Chile (sin ciudad)",
          "Santiago",
          "Berlín"
        ],
        "optionsEn": [
          "Chile (no city given)",
          "Santiago",
          "Berlin"
        ],
        "answer": 1,
        "explanation": "Jetzt wohne ich in Santiago.",
        "explanationEn": "Jetzt wohne ich in Santiago."
      }
    ]
  },
  {
    "id": "reading-unit-02",
    "title": "Ein Hund, ein Buch · Sujeto y objeto",
    "titleEn": "Ein Hund, ein Buch · Subject and object",
    "level": "A1",
    "kind": "lectura puente",
    "kindEn": "bridge reading",
    "source": {
      "type": "original",
      "label": "Texto didáctico original · puente U02",
      "labelEn": "Original teaching text · U02 bridge",
      "licenseNote": "Texto alemán y traducciones propios; introduce solo las estructuras de esta unidad y las anteriores. No es una cita.",
      "licenseNoteEn": "Original German text and translations; introduces only structures from this unit and earlier ones. Not a quotation."
    },
    "paragraphs": [
      {
        "de": "Der Mann hat einen Hund. Der Hund sieht die Frau. Die Frau hat ein Buch. Das Buch ist interessant.",
        "es": "El hombre tiene un perro. El perro ve a la mujer. La mujer tiene un libro. El libro es interesante.",
        "en": "The man has a dog. The dog sees the woman. The woman has a book. The book is interesting."
      },
      {
        "de": "Ich sehe den Hund. Ich sehe ihn. Du liest das Buch. Du liest es. Wir haben Bücher. Die Bücher sind interessant.",
        "es": "Veo al perro. Lo veo. Lees el libro. Lo lees. Tenemos libros. Los libros son interesantes.",
        "en": "I see the dog. I see him. You read the book. You read it. We have books. The books are interesting."
      }
    ],
    "glossary": [
      {
        "de": "der Mann",
        "es": "hombre",
        "en": "man",
        "lemma": "Mann"
      },
      {
        "de": "der Hund",
        "es": "perro",
        "en": "dog",
        "lemma": "Hund"
      },
      {
        "de": "die Frau",
        "es": "mujer",
        "en": "woman",
        "lemma": "Frau"
      },
      {
        "de": "das Buch",
        "es": "libro; plural Bücher",
        "en": "book; plural Bücher",
        "lemma": "Buch",
        "forms": [
          "Bücher"
        ]
      },
      {
        "de": "sehen",
        "es": "ver",
        "en": "see",
        "lemma": "sehen",
        "forms": [
          "sieht",
          "sehe"
        ]
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen",
        "forms": [
          "liest"
        ]
      },
      {
        "de": "haben",
        "es": "tener",
        "en": "have",
        "lemma": "haben",
        "forms": [
          "hat"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "¿Quién ve a la mujer en la primera parte?",
        "promptEn": "Who sees the woman in the first part?",
        "options": [
          "El hombre",
          "El perro",
          "El libro"
        ],
        "optionsEn": [
          "The man",
          "The dog",
          "The book"
        ],
        "answer": 1,
        "explanation": "Der Hund es el sujeto de sieht.",
        "explanationEn": "Der Hund is the subject of sieht."
      },
      {
        "prompt": "En Ich sehe ihn, ¿qué sustituye ihn?",
        "promptEn": "In Ich sehe ihn, what does ihn replace?",
        "options": [
          "der Hund como sujeto",
          "den Hund como objeto",
          "die Frau"
        ],
        "optionsEn": [
          "der Hund as subject",
          "den Hund as object",
          "die Frau"
        ],
        "answer": 1,
        "explanation": "ihn es pronombre acusativo masculino: den Hund.",
        "explanationEn": "ihn is the masculine accusative pronoun: den Hund."
      }
    ]
  },
  {
    "id": "reading-unit-03",
    "title": "Was liest du? · Preguntar y negar",
    "titleEn": "Was liest du? · Questions and negation",
    "level": "A1",
    "kind": "lectura puente",
    "kindEn": "bridge reading",
    "source": {
      "type": "original",
      "label": "Texto didáctico original · puente U03",
      "labelEn": "Original teaching text · U03 bridge",
      "licenseNote": "Texto alemán y traducciones propios; introduce solo las estructuras de esta unidad y las anteriores. No es una cita.",
      "licenseNoteEn": "Original German text and translations; introduces only structures from this unit and earlier ones. Not a quotation."
    },
    "paragraphs": [
      {
        "de": "„Liest du ein Buch?“ — „Nein, ich lese kein Buch. Ich lese einen Text.“ — „Ist der Text schwierig?“ — „Nein, er ist nicht schwierig. Er ist einfach.“",
        "es": "«¿Lees un libro?» — «No, no leo un libro. Leo un texto». — «¿El texto es difícil?» — «No, no es difícil. Es simple».",
        "en": "“Are you reading a book?” — “No, I am not reading a book. I am reading a text.” — “Is the text difficult?” — “No, it is not difficult. It is simple.”"
      },
      {
        "de": "„Was verstehst du?“ — „Ich verstehe die Frage. Ich kenne die Antwort nicht.“ — „Wer kennt die Antwort?“ — „Vielleicht Anna.“",
        "es": "«¿Qué entiendes?» — «Entiendo la pregunta. No conozco la respuesta». — «¿Quién conoce la respuesta?» — «Quizás Anna».",
        "en": "“What do you understand?” — “I understand the question. I do not know the answer.” — “Who knows the answer?” — “Perhaps Anna.”"
      }
    ],
    "glossary": [
      {
        "de": "nein",
        "es": "no (respuesta)",
        "en": "no (answer)",
        "lemma": "nein"
      },
      {
        "de": "kein",
        "es": "ningún; niega un nombre indefinido",
        "en": "no; not a; negates an indefinite noun",
        "lemma": "kein",
        "forms": [
          "keinen"
        ]
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "schwierig",
        "es": "difícil",
        "en": "difficult",
        "lemma": "schwierig"
      },
      {
        "de": "einfach",
        "es": "simple; fácil",
        "en": "simple; easy",
        "lemma": "einfach"
      },
      {
        "de": "verstehen",
        "es": "entender",
        "en": "understand",
        "lemma": "verstehen",
        "forms": [
          "verstehst",
          "verstehe"
        ]
      },
      {
        "de": "kennen",
        "es": "conocer",
        "en": "know; be familiar with",
        "lemma": "kennen",
        "forms": [
          "kenne",
          "kennt"
        ]
      },
      {
        "de": "die Frage",
        "es": "pregunta",
        "en": "question",
        "lemma": "Frage"
      },
      {
        "de": "die Antwort",
        "es": "respuesta",
        "en": "answer",
        "lemma": "Antwort"
      },
      {
        "de": "vielleicht",
        "es": "quizás",
        "en": "perhaps",
        "lemma": "vielleicht"
      }
    ],
    "questions": [
      {
        "prompt": "¿Por qué aparece kein Buch?",
        "promptEn": "Why does kein Buch appear?",
        "options": [
          "Niega un nombre indefinido",
          "Buch es masculino",
          "Es una pregunta"
        ],
        "optionsEn": [
          "It negates an indefinite noun",
          "Buch is masculine",
          "It is a question"
        ],
        "answer": 0,
        "explanation": "kein niega ein Buch; nicht se usa ante schwierig.",
        "explanationEn": "kein negates ein Buch; nicht is used before schwierig."
      },
      {
        "prompt": "¿Conoce quien habla la respuesta?",
        "promptEn": "Does the speaker know the answer?",
        "options": [
          "Sí",
          "No",
          "Solo en inglés"
        ],
        "optionsEn": [
          "Yes",
          "No",
          "Only in English"
        ],
        "answer": 1,
        "explanation": "Ich kenne die Antwort nicht.",
        "explanationEn": "Ich kenne die Antwort nicht."
      }
    ]
  },
  {
    "id": "reading-unit-04",
    "title": "Ich muss aufstehen · Modal y prefijo",
    "titleEn": "Ich muss aufstehen · Modal and prefix",
    "level": "A1",
    "kind": "lectura puente",
    "kindEn": "bridge reading",
    "source": {
      "type": "original",
      "label": "Texto didáctico original · puente U04",
      "labelEn": "Original teaching text · U04 bridge",
      "licenseNote": "Texto alemán y traducciones propios; introduce solo las estructuras de esta unidad y las anteriores. No es una cita.",
      "licenseNoteEn": "Original German text and translations; introduces only structures from this unit and earlier ones. Not a quotation."
    },
    "paragraphs": [
      {
        "de": "Ich stehe um sieben Uhr auf. Heute muss ich arbeiten. Ich kann Deutsch lernen, aber ich muss zuerst arbeiten. Ich fange um neun Uhr an.",
        "es": "Me levanto a las siete. Hoy tengo que trabajar. Puedo aprender alemán, pero primero tengo que trabajar. Comienzo a las nueve.",
        "en": "I get up at seven. Today I have to work. I can learn German, but I have to work first. I start at nine."
      },
      {
        "de": "Anna möchte ein Buch lesen. Sie darf hier lesen. Sie muss heute nicht arbeiten. „Kannst du Deutsch sprechen?“ — „Ja, ich kann Deutsch sprechen.“",
        "es": "Anna quisiera leer un libro. Puede leer aquí (tiene permiso). Hoy no tiene que trabajar. «¿Puedes hablar alemán?» — «Sí, puedo hablar alemán».",
        "en": "Anna would like to read a book. She is allowed to read here. She does not have to work today. “Can you speak German?” — “Yes, I can speak German.”"
      }
    ],
    "glossary": [
      {
        "de": "aufstehen",
        "es": "levantarse",
        "en": "get up",
        "lemma": "aufstehen",
        "forms": [
          "stehe",
          "auf"
        ]
      },
      {
        "de": "arbeiten",
        "es": "trabajar",
        "en": "work",
        "lemma": "arbeiten",
        "forms": [
          "arbeite"
        ]
      },
      {
        "de": "anfangen",
        "es": "empezar",
        "en": "begin",
        "lemma": "anfangen",
        "forms": [
          "fange",
          "an"
        ]
      },
      {
        "de": "zuerst",
        "es": "primero",
        "en": "first",
        "lemma": "zuerst"
      },
      {
        "de": "sieben",
        "es": "siete",
        "en": "seven",
        "lemma": "sieben"
      },
      {
        "de": "neun",
        "es": "nueve",
        "en": "nine",
        "lemma": "neun"
      },
      {
        "de": "die Uhr",
        "es": "reloj; con número, hora",
        "en": "clock; with number, time",
        "lemma": "Uhr"
      },
      {
        "de": "möchten",
        "es": "quisiera; querer cortés",
        "en": "would like",
        "lemma": "mögen",
        "forms": [
          "möchte"
        ]
      },
      {
        "de": "müssen",
        "es": "tener que",
        "en": "have to",
        "lemma": "müssen",
        "forms": [
          "muss"
        ]
      },
      {
        "de": "dürfen",
        "es": "tener permiso para",
        "en": "be allowed to",
        "lemma": "dürfen",
        "forms": [
          "darf"
        ]
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können",
        "forms": [
          "kann",
          "kannst"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "¿Qué significa Sie muss heute nicht arbeiten?",
        "promptEn": "What does Sie muss heute nicht arbeiten mean?",
        "options": [
          "Tiene prohibido trabajar",
          "No tiene que trabajar hoy",
          "No sabe trabajar"
        ],
        "optionsEn": [
          "She is forbidden to work",
          "She does not have to work today",
          "She does not know how to work"
        ],
        "answer": 1,
        "explanation": "nicht müssen niega obligación, no permiso.",
        "explanationEn": "nicht müssen negates obligation, not permission."
      },
      {
        "prompt": "¿Dónde queda el prefijo de aufstehen en Ich stehe um sieben Uhr auf?",
        "promptEn": "Where is the prefix of aufstehen in Ich stehe um sieben Uhr auf?",
        "options": [
          "Dentro de stehe",
          "Al final: auf",
          "Se elimina"
        ],
        "optionsEn": [
          "Inside stehe",
          "At the end: auf",
          "It is deleted"
        ],
        "answer": 1,
        "explanation": "El prefijo separable cierra la principal.",
        "explanationEn": "The separable prefix closes the main clause."
      }
    ]
  },
  {
    "id": "reading-unit-05",
    "title": "Auf dem Tisch · Ubicación y destino",
    "titleEn": "Auf dem Tisch · Location and destination",
    "level": "A1",
    "kind": "lectura puente",
    "kindEn": "bridge reading",
    "source": {
      "type": "original",
      "label": "Texto didáctico original · puente U05",
      "labelEn": "Original teaching text · U05 bridge",
      "licenseNote": "Texto alemán y traducciones propios; introduce solo las estructuras de esta unidad y las anteriores. No es una cita.",
      "licenseNoteEn": "Original German text and translations; introduces only structures from this unit and earlier ones. Not a quotation."
    },
    "paragraphs": [
      {
        "de": "Das Buch liegt auf dem Tisch. Ich lege das Buch auf den Tisch. Der Stuhl steht neben dem Bett. Ich stelle den Stuhl vor das Fenster.",
        "es": "El libro está sobre la mesa. Coloco el libro sobre la mesa. La silla está al lado de la cama. Coloco la silla delante de la ventana.",
        "en": "The book is on the table. I put the book onto the table. The chair is beside the bed. I put the chair in front of the window."
      },
      {
        "de": "Ich bin im Zimmer. Dann gehe ich ins Zimmer nebenan. Ich gebe dem Kind ein Buch. Das Kind hilft mir. Wir sprechen mit dem Lehrer.",
        "es": "Estoy en la habitación. Después voy a la habitación de al lado. Le doy un libro al niño. El niño me ayuda. Hablamos con el profesor.",
        "en": "I am in the room. Then I go into the room next door. I give the child a book. The child helps me. We speak with the teacher."
      }
    ],
    "glossary": [
      {
        "de": "liegen",
        "es": "estar situado; estar tendido",
        "en": "be located; lie",
        "lemma": "liegen",
        "forms": [
          "liegt"
        ]
      },
      {
        "de": "legen",
        "es": "colocar en posición horizontal",
        "en": "lay; put",
        "lemma": "legen",
        "forms": [
          "lege"
        ]
      },
      {
        "de": "stehen",
        "es": "estar de pie/situado",
        "en": "stand; be located",
        "lemma": "stehen",
        "forms": [
          "steht"
        ]
      },
      {
        "de": "stellen",
        "es": "colocar en posición vertical",
        "en": "place upright",
        "lemma": "stellen",
        "forms": [
          "stelle"
        ]
      },
      {
        "de": "der Tisch",
        "es": "mesa",
        "en": "table",
        "lemma": "Tisch"
      },
      {
        "de": "der Stuhl",
        "es": "silla",
        "en": "chair",
        "lemma": "Stuhl"
      },
      {
        "de": "das Bett",
        "es": "cama",
        "en": "bed",
        "lemma": "Bett"
      },
      {
        "de": "das Fenster",
        "es": "ventana",
        "en": "window",
        "lemma": "Fenster"
      },
      {
        "de": "das Zimmer",
        "es": "habitación",
        "en": "room",
        "lemma": "Zimmer"
      },
      {
        "de": "nebenan",
        "es": "al lado (otra habitación/lugar)",
        "en": "next door",
        "lemma": "nebenan"
      },
      {
        "de": "dann",
        "es": "entonces; después",
        "en": "then",
        "lemma": "dann"
      },
      {
        "de": "geben",
        "es": "dar",
        "en": "give",
        "lemma": "geben",
        "forms": [
          "gebe"
        ]
      },
      {
        "de": "helfen",
        "es": "ayudar + dativo",
        "en": "help + dative",
        "lemma": "helfen",
        "forms": [
          "hilft"
        ]
      },
      {
        "de": "das Kind",
        "es": "niño/a",
        "en": "child",
        "lemma": "Kind"
      },
      {
        "de": "im",
        "es": "en el: in dem, Dat",
        "en": "in the: in dem, Dat",
        "lemma": "in"
      },
      {
        "de": "ins",
        "es": "hacia/dentro del: in das, Akk",
        "en": "into the: in das, Akk",
        "lemma": "in"
      }
    ],
    "questions": [
      {
        "prompt": "¿Por qué auf den Tisch lleva Akk?",
        "promptEn": "Why does auf den Tisch take Akk?",
        "options": [
          "Expresa el destino al colocar el libro",
          "Tisch es femenino",
          "Todo verbo exige Akk"
        ],
        "optionsEn": [
          "It expresses the destination when placing the book",
          "Tisch is feminine",
          "Every verb requires Akk"
        ],
        "answer": 0,
        "explanation": "legen cambia la relación espacial: el libro pasa a la mesa.",
        "explanationEn": "legen changes the spatial relation: the book ends up on the table."
      },
      {
        "prompt": "En Das Kind hilft mir, ¿qué caso tiene mir?",
        "promptEn": "In Das Kind hilft mir, what case is mir?",
        "options": [
          "Nominativo",
          "Acusativo",
          "Dativo"
        ],
        "optionsEn": [
          "Nominative",
          "Accusative",
          "Dative"
        ],
        "answer": 2,
        "explanation": "helfen rige dativo.",
        "explanationEn": "helfen governs dative."
      }
    ]
  },
  {
    "id": "reading-unit-06",
    "title": "Gestern in Berlin · Reconstruir el pasado",
    "titleEn": "Gestern in Berlin · Reconstruct the past",
    "level": "A2",
    "kind": "lectura puente",
    "kindEn": "bridge reading",
    "source": {
      "type": "original",
      "label": "Texto didáctico original · puente U06",
      "labelEn": "Original teaching text · U06 bridge",
      "licenseNote": "Texto alemán y traducciones propios; introduce solo las estructuras de esta unidad y las anteriores. No es una cita.",
      "licenseNoteEn": "Original German text and translations; introduces only structures from this unit and earlier ones. Not a quotation."
    },
    "paragraphs": [
      {
        "de": "Gestern bin ich nach Berlin gefahren. Ich bin um zehn Uhr angekommen. Am Bahnhof habe ich Anna getroffen. Wir sind in ein Café gegangen.",
        "es": "Ayer viajé a Berlín. Llegué a las diez. En la estación me encontré con Anna. Fuimos a un café.",
        "en": "Yesterday I travelled to Berlin. I arrived at ten. At the station I met Anna. We went into a café."
      },
      {
        "de": "Danach haben wir ein Museum besucht. Ich habe viel gelernt. Am Abend war ich müde. Ich hatte Zeit, aber ich habe nicht gelesen. Heute lese ich wieder.",
        "es": "Después visitamos un museo. Aprendí mucho. Por la tarde estaba cansado. Tenía tiempo, pero no leí. Hoy vuelvo a leer.",
        "en": "Then we visited a museum. I learned a lot. In the evening I was tired. I had time, but I did not read. Today I am reading again."
      }
    ],
    "glossary": [
      {
        "de": "gestern",
        "es": "ayer",
        "en": "yesterday",
        "lemma": "gestern"
      },
      {
        "de": "fahren",
        "es": "viajar; ir en vehículo",
        "en": "travel; go by vehicle",
        "lemma": "fahren",
        "forms": [
          "gefahren"
        ]
      },
      {
        "de": "ankommen",
        "es": "llegar",
        "en": "arrive",
        "lemma": "ankommen",
        "forms": [
          "angekommen"
        ]
      },
      {
        "de": "treffen",
        "es": "encontrarse con",
        "en": "meet",
        "lemma": "treffen",
        "forms": [
          "getroffen"
        ]
      },
      {
        "de": "das Café",
        "es": "café (local)",
        "en": "café (place)",
        "lemma": "Café"
      },
      {
        "de": "das Museum",
        "es": "museo",
        "en": "museum",
        "lemma": "Museum"
      },
      {
        "de": "besuchen",
        "es": "visitar",
        "en": "visit",
        "lemma": "besuchen",
        "forms": [
          "besucht"
        ]
      },
      {
        "de": "danach",
        "es": "después",
        "en": "afterwards",
        "lemma": "danach"
      },
      {
        "de": "der Abend",
        "es": "tarde/noche",
        "en": "evening",
        "lemma": "Abend"
      },
      {
        "de": "müde",
        "es": "cansado",
        "en": "tired",
        "lemma": "müde"
      },
      {
        "de": "wieder",
        "es": "otra vez; de nuevo",
        "en": "again",
        "lemma": "wieder"
      },
      {
        "de": "zehn",
        "es": "diez",
        "en": "ten",
        "lemma": "zehn"
      }
    ],
    "questions": [
      {
        "prompt": "¿Qué auxiliar se usa con angekommen?",
        "promptEn": "Which auxiliary is used with angekommen?",
        "options": [
          "haben",
          "sein",
          "werden"
        ],
        "optionsEn": [
          "haben",
          "sein",
          "werden"
        ],
        "answer": 1,
        "explanation": "ankommen forma Perfekt con sein.",
        "explanationEn": "ankommen forms Perfekt with sein."
      },
      {
        "prompt": "¿Qué forma de sein expresa el pasado en el segundo párrafo?",
        "promptEn": "Which form of sein expresses past in the second paragraph?",
        "options": [
          "bin",
          "war",
          "sind"
        ],
        "optionsEn": [
          "bin",
          "war",
          "sind"
        ],
        "answer": 1,
        "explanation": "war es Präteritum de sein para ich/er.",
        "explanationEn": "war is the Präteritum of sein for ich/er."
      }
    ]
  },
  {
    "id": "reading-unit-07",
    "title": "Weil ich lernen möchte · Razón y condición",
    "titleEn": "Weil ich lernen möchte · Reason and condition",
    "level": "A2",
    "kind": "lectura puente",
    "kindEn": "bridge reading",
    "source": {
      "type": "original",
      "label": "Texto didáctico original · puente U07",
      "labelEn": "Original teaching text · U07 bridge",
      "licenseNote": "Texto alemán y traducciones propios; introduce solo las estructuras de esta unidad y las anteriores. No es una cita.",
      "licenseNoteEn": "Original German text and translations; introduces only structures from this unit and earlier ones. Not a quotation."
    },
    "paragraphs": [
      {
        "de": "Ich lerne Deutsch, weil ich Bücher lesen möchte. Ich weiß, dass Anna auch Deutsch lernt. Wenn ich Zeit habe, lese ich. Ich frage Anna, ob sie den Text versteht.",
        "es": "Aprendo alemán porque quisiera leer libros. Sé que Anna también aprende alemán. Si tengo tiempo, leo. Le pregunto a Anna si entiende el texto.",
        "en": "I am learning German because I would like to read books. I know that Anna is learning German too. If I have time, I read. I ask Anna whether she understands the text."
      },
      {
        "de": "Weil ich gestern gearbeitet habe, bin ich müde. Ich lese trotzdem. Obwohl der Text schwierig ist, verstehe ich die Frage. Als ich in Berlin war, habe ich oft Deutsch gesprochen.",
        "es": "Como ayer trabajé, estoy cansado. Aun así leo. Aunque el texto es difícil, entiendo la pregunta. Cuando estuve en Berlín, hablé alemán a menudo.",
        "en": "Because I worked yesterday, I am tired. I read nevertheless. Although the text is difficult, I understand the question. When I was in Berlin, I often spoke German."
      }
    ],
    "glossary": [
      {
        "de": "wissen",
        "es": "saber (hecho)",
        "en": "know (a fact)",
        "lemma": "wissen",
        "forms": [
          "weiß"
        ]
      },
      {
        "de": "fragen",
        "es": "preguntar",
        "en": "ask",
        "lemma": "fragen",
        "forms": [
          "frage"
        ]
      },
      {
        "de": "weil",
        "es": "porque; verbo final",
        "en": "because; verb final",
        "lemma": "weil"
      },
      {
        "de": "dass",
        "es": "que (contenido); verbo final",
        "en": "that (content); verb final",
        "lemma": "dass"
      },
      {
        "de": "wenn",
        "es": "si/cuando (condición/repetición)",
        "en": "if/when (condition/recurrence)",
        "lemma": "wenn"
      },
      {
        "de": "ob",
        "es": "si (pregunta indirecta)",
        "en": "whether (indirect question)",
        "lemma": "ob"
      },
      {
        "de": "obwohl",
        "es": "aunque; verbo final",
        "en": "although; verb final",
        "lemma": "obwohl"
      },
      {
        "de": "als",
        "es": "cuando (evento único pasado)",
        "en": "when (single past event)",
        "lemma": "als"
      },
      {
        "de": "trotzdem",
        "es": "aun así; ocupa posición de la principal",
        "en": "nevertheless; occupies a main-clause position",
        "lemma": "trotzdem"
      },
      {
        "de": "oft",
        "es": "a menudo",
        "en": "often",
        "lemma": "oft"
      }
    ],
    "questions": [
      {
        "prompt": "¿Qué distingue ob de wenn aquí?",
        "promptEn": "What distinguishes ob from wenn here?",
        "options": [
          "ob pregunta si; wenn pone condición",
          "Ambos indican lugar",
          "wenn exige verbo primero"
        ],
        "optionsEn": [
          "ob asks whether; wenn gives a condition",
          "Both indicate place",
          "wenn requires verb first"
        ],
        "answer": 0,
        "explanation": "ob introduce una pregunta indirecta; wenn introduce condición.",
        "explanationEn": "ob introduces an indirect question; wenn introduces a condition."
      },
      {
        "prompt": "Tras Weil ich gestern gearbeitet habe, ¿qué empieza la principal?",
        "promptEn": "After Weil ich gestern gearbeitet habe, what begins the main clause?",
        "options": [
          "ich",
          "bin",
          "habe"
        ],
        "optionsEn": [
          "ich",
          "bin",
          "habe"
        ],
        "answer": 1,
        "explanation": "La subordinada completa ocupa posición 1; bin va en posición 2.",
        "explanationEn": "The complete subordinate clause occupies position 1; bin is in position 2."
      }
    ]
  },
  {
    "id": "reading-unit-08",
    "title": "Mein Buch, ihr Hund · Posesión y futuro",
    "titleEn": "Mein Buch, ihr Hund · Possession and future",
    "level": "A2",
    "kind": "lectura puente",
    "kindEn": "bridge reading",
    "source": {
      "type": "original",
      "label": "Texto didáctico original · puente U08",
      "labelEn": "Original teaching text · U08 bridge",
      "licenseNote": "Texto alemán y traducciones propios; introduce solo las estructuras de esta unidad y las anteriores. No es una cita.",
      "licenseNoteEn": "Original German text and translations; introduces only structures from this unit and earlier ones. Not a quotation."
    },
    "paragraphs": [
      {
        "de": "Anna hat einen Hund. Ihr Hund ist klein. Ich spiele mit ihrem Hund. Das Buch meines Lehrers liegt auf meinem Tisch. Die Bücher der Kinder liegen neben dem Fenster.",
        "es": "Anna tiene un perro. Su perro es pequeño. Juego con su perro. El libro de mi profesor está sobre mi mesa. Los libros de los niños están junto a la ventana.",
        "en": "Anna has a dog. Her dog is small. I play with her dog. My teacher’s book is on my table. The children’s books are beside the window."
      },
      {
        "de": "Heute habe ich wenig Zeit. Wegen der Arbeit lese ich nicht. Morgen werde ich das Buch lesen. Anna wird mir helfen. Dann werde ich die Frage verstehen.",
        "es": "Hoy tengo poco tiempo. Por el trabajo no leo. Mañana leeré el libro. Anna me ayudará. Entonces entenderé la pregunta.",
        "en": "Today I have little time. Because of work I am not reading. Tomorrow I will read the book. Anna will help me. Then I will understand the question."
      }
    ],
    "glossary": [
      {
        "de": "spielen",
        "es": "jugar",
        "en": "play",
        "lemma": "spielen",
        "forms": [
          "spiele"
        ]
      },
      {
        "de": "mein",
        "es": "mi; declina según lo poseído",
        "en": "my; declines with the possessed noun",
        "lemma": "mein",
        "forms": [
          "meines",
          "meinem"
        ]
      },
      {
        "de": "ihr",
        "es": "su (de ella/ellos); aquí de Anna",
        "en": "her/their; here Anna’s",
        "lemma": "ihr",
        "forms": [
          "ihrem"
        ]
      },
      {
        "de": "wenig",
        "es": "poco",
        "en": "little; few",
        "lemma": "wenig"
      },
      {
        "de": "wegen",
        "es": "por; a causa de + genitivo",
        "en": "because of + genitive",
        "lemma": "wegen"
      },
      {
        "de": "morgen",
        "es": "mañana",
        "en": "tomorrow",
        "lemma": "morgen"
      },
      {
        "de": "werden",
        "es": "auxiliar de futuro aquí",
        "en": "future auxiliary here",
        "lemma": "werden",
        "forms": [
          "werde",
          "wird"
        ]
      },
      {
        "de": "der Lehrer",
        "es": "profesor",
        "en": "teacher",
        "lemma": "Lehrer",
        "forms": [
          "Lehrers"
        ]
      },
      {
        "de": "die Kinder",
        "es": "los niños; plural de Kind",
        "en": "the children; plural of Kind",
        "lemma": "Kind"
      }
    ],
    "questions": [
      {
        "prompt": "¿A quién se refiere ihr en Ihr Hund?",
        "promptEn": "Who does ihr refer to in Ihr Hund?",
        "options": [
          "Al profesor",
          "A Anna",
          "A los niños"
        ],
        "optionsEn": [
          "The teacher",
          "Anna",
          "The children"
        ],
        "answer": 1,
        "explanation": "La raíz ihr señala poseedora femenina Anna; Hund sigue siendo masculino.",
        "explanationEn": "The stem ihr identifies female possessor Anna; Hund remains masculine."
      },
      {
        "prompt": "En Das Buch meines Lehrers, ¿qué caso tiene meines Lehrers?",
        "promptEn": "In Das Buch meines Lehrers, what case is meines Lehrers?",
        "options": [
          "Nominativo",
          "Dativo",
          "Genitivo"
        ],
        "optionsEn": [
          "Nominative",
          "Dative",
          "Genitive"
        ],
        "answer": 2,
        "explanation": "Indica relación con el profesor; Gen masculino: meines + Lehrers.",
        "explanationEn": "It expresses the relationship to the teacher; masculine Gen: meines + Lehrers."
      }
    ]
  }
];
window.DeutschData.readings.push(...window.DeutschData.bridgeReadings);
window.DeutschData.readingSupport = {
  "reading-unit-01": {
    "minUnit": "unit-01",
    "grammarIds": [
      "present",
      "personal-pronouns",
      "word-order",
      "articles"
    ],
    "intro": {
      "es": "Lectura puente: recupera la estructura de la unidad; las palabras nuevas están glosadas.",
      "en": "Bridge reading: recall the unit’s structure; new words are glossed."
    },
    "teachingGlossary": [
      {
        "de": "jetzt",
        "es": "ahora",
        "en": "now",
        "lemma": "jetzt"
      },
      {
        "de": "heute",
        "es": "hoy",
        "en": "today",
        "lemma": "heute"
      },
      {
        "de": "auch",
        "es": "también",
        "en": "also; too",
        "lemma": "auch"
      },
      {
        "de": "die Sprache",
        "es": "lengua; idioma",
        "en": "language",
        "lemma": "Sprache"
      },
      {
        "de": "interessant",
        "es": "interesante",
        "en": "interesting",
        "lemma": "interessant"
      },
      {
        "de": "Spanisch",
        "es": "español (idioma)",
        "en": "Spanish (language)",
        "lemma": "Spanisch"
      },
      {
        "de": "Englisch",
        "es": "inglés (idioma)",
        "en": "English (language)",
        "lemma": "Englisch"
      },
      {
        "de": "Deutsch",
        "es": "alemán (idioma)",
        "en": "German (language)",
        "lemma": "Deutsch"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "heißen",
        "es": "llamarse; significar",
        "en": "be called; mean",
        "lemma": "heißen"
      },
      {
        "de": "Gabriel",
        "es": "Gabriel; nombre propio",
        "en": "Gabriel; proper name",
        "lemma": "Gabriel",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "kommen",
        "es": "venir; proceder",
        "en": "come; be from",
        "lemma": "kommen"
      },
      {
        "de": "aus",
        "es": "de; desde dentro + Dat",
        "en": "from; out of + Dat",
        "lemma": "aus"
      },
      {
        "de": "Chile",
        "es": "Chile; país, nombre propio",
        "en": "Chile; country, proper name",
        "lemma": "Chile",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "wohnen",
        "es": "vivir; residir",
        "en": "live; reside",
        "lemma": "wohnen"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "Santiago",
        "es": "Santiago; ciudad, nombre propio",
        "en": "Santiago; city, proper name",
        "lemma": "Santiago",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "sprechen",
        "es": "hablar",
        "en": "speak",
        "lemma": "sprechen"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "lernen",
        "es": "aprender; estudiar",
        "en": "learn; study",
        "lemma": "lernen"
      },
      {
        "de": "du",
        "es": "tú; dich acusativo, dir dativo",
        "en": "you informal singular; dich accusative, dir dative",
        "lemma": "du"
      },
      {
        "de": "wir",
        "es": "nosotros; uns acusativo/dativo",
        "en": "we; uns accusative/dative",
        "lemma": "wir"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "hier",
        "es": "aquí",
        "en": "here",
        "lemma": "hier"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      }
    ]
  },
  "reading-unit-02": {
    "minUnit": "unit-02",
    "grammarIds": [
      "articles",
      "accusative",
      "personal-pronouns",
      "present"
    ],
    "intro": {
      "es": "Lectura puente: recupera la estructura de la unidad; las palabras nuevas están glosadas.",
      "en": "Bridge reading: recall the unit’s structure; new words are glossed."
    },
    "teachingGlossary": [
      {
        "de": "der Mann",
        "es": "hombre",
        "en": "man",
        "lemma": "Mann"
      },
      {
        "de": "der Hund",
        "es": "perro",
        "en": "dog",
        "lemma": "Hund"
      },
      {
        "de": "die Frau",
        "es": "mujer",
        "en": "woman",
        "lemma": "Frau"
      },
      {
        "de": "das Buch",
        "es": "libro; plural Bücher",
        "en": "book; plural Bücher",
        "lemma": "Buch",
        "forms": [
          "Bücher"
        ]
      },
      {
        "de": "sehen",
        "es": "ver",
        "en": "see",
        "lemma": "sehen",
        "forms": [
          "sieht",
          "sehe"
        ]
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen",
        "forms": [
          "liest"
        ]
      },
      {
        "de": "haben",
        "es": "tener",
        "en": "have",
        "lemma": "haben",
        "forms": [
          "hat"
        ]
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "interessant",
        "es": "interesante",
        "en": "interesting",
        "lemma": "interessant"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "er",
        "es": "él; ihn acusativo, ihm dativo",
        "en": "he; ihn accusative, ihm dative",
        "lemma": "er"
      },
      {
        "de": "du",
        "es": "tú; dich acusativo, dir dativo",
        "en": "you informal singular; dich accusative, dir dative",
        "lemma": "du"
      },
      {
        "de": "es",
        "es": "ello; referente neutro/sujeto impersonal",
        "en": "it; neuter reference/impersonal subject",
        "lemma": "es"
      },
      {
        "de": "wir",
        "es": "nosotros; uns acusativo/dativo",
        "en": "we; uns accusative/dative",
        "lemma": "wir"
      }
    ]
  },
  "reading-unit-03": {
    "minUnit": "unit-03",
    "grammarIds": [
      "questions",
      "negation",
      "accusative",
      "word-order"
    ],
    "intro": {
      "es": "Lectura puente: recupera la estructura de la unidad; las palabras nuevas están glosadas.",
      "en": "Bridge reading: recall the unit’s structure; new words are glossed."
    },
    "teachingGlossary": [
      {
        "de": "nein",
        "es": "no (respuesta)",
        "en": "no (answer)",
        "lemma": "nein"
      },
      {
        "de": "kein",
        "es": "ningún; niega un nombre indefinido",
        "en": "no; not a; negates an indefinite noun",
        "lemma": "kein",
        "forms": [
          "keinen"
        ]
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "schwierig",
        "es": "difícil",
        "en": "difficult",
        "lemma": "schwierig"
      },
      {
        "de": "einfach",
        "es": "simple; fácil",
        "en": "simple; easy",
        "lemma": "einfach"
      },
      {
        "de": "verstehen",
        "es": "entender",
        "en": "understand",
        "lemma": "verstehen",
        "forms": [
          "verstehst",
          "verstehe"
        ]
      },
      {
        "de": "kennen",
        "es": "conocer",
        "en": "know; be familiar with",
        "lemma": "kennen",
        "forms": [
          "kenne",
          "kennt"
        ]
      },
      {
        "de": "die Frage",
        "es": "pregunta",
        "en": "question",
        "lemma": "Frage"
      },
      {
        "de": "die Antwort",
        "es": "respuesta",
        "en": "answer",
        "lemma": "Antwort"
      },
      {
        "de": "vielleicht",
        "es": "quizás",
        "en": "perhaps",
        "lemma": "vielleicht"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "du",
        "es": "tú; dich acusativo, dir dativo",
        "en": "you informal singular; dich accusative, dir dative",
        "lemma": "du"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "der Text",
        "es": "texto",
        "en": "text",
        "lemma": "Text"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "er",
        "es": "él; ihn acusativo, ihm dativo",
        "en": "he; ihn accusative, ihm dative",
        "lemma": "er"
      },
      {
        "de": "was",
        "es": "qué",
        "en": "what",
        "lemma": "was"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "wer",
        "es": "quién; sujeto",
        "en": "who; subject",
        "lemma": "wer"
      },
      {
        "de": "Anna",
        "es": "Anna; nombre propio",
        "en": "Anna; proper name",
        "lemma": "Anna",
        "kind": "proper-name",
        "dictionary": false
      }
    ]
  },
  "reading-unit-04": {
    "minUnit": "unit-04",
    "grammarIds": [
      "modal-verbs",
      "word-order",
      "present",
      "numbers"
    ],
    "intro": {
      "es": "Lectura puente: recupera la estructura de la unidad; las palabras nuevas están glosadas.",
      "en": "Bridge reading: recall the unit’s structure; new words are glossed."
    },
    "teachingGlossary": [
      {
        "de": "aufstehen",
        "es": "levantarse",
        "en": "get up",
        "lemma": "aufstehen",
        "forms": [
          "stehe",
          "auf"
        ]
      },
      {
        "de": "arbeiten",
        "es": "trabajar",
        "en": "work",
        "lemma": "arbeiten",
        "forms": [
          "arbeite"
        ]
      },
      {
        "de": "anfangen",
        "es": "empezar",
        "en": "begin",
        "lemma": "anfangen",
        "forms": [
          "fange",
          "an"
        ]
      },
      {
        "de": "zuerst",
        "es": "primero",
        "en": "first",
        "lemma": "zuerst"
      },
      {
        "de": "sieben",
        "es": "siete",
        "en": "seven",
        "lemma": "sieben"
      },
      {
        "de": "neun",
        "es": "nueve",
        "en": "nine",
        "lemma": "neun"
      },
      {
        "de": "die Uhr",
        "es": "reloj; con número, hora",
        "en": "clock; with number, time",
        "lemma": "Uhr"
      },
      {
        "de": "möchten",
        "es": "quisiera; querer cortés",
        "en": "would like",
        "lemma": "mögen",
        "forms": [
          "möchte"
        ]
      },
      {
        "de": "müssen",
        "es": "tener que",
        "en": "have to",
        "lemma": "müssen",
        "forms": [
          "muss"
        ]
      },
      {
        "de": "dürfen",
        "es": "tener permiso para",
        "en": "be allowed to",
        "lemma": "dürfen",
        "forms": [
          "darf"
        ]
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können",
        "forms": [
          "kann",
          "kannst"
        ]
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "um",
        "es": "a (hora); alrededor de; um…zu para",
        "en": "at (time); around; um…zu in order to",
        "lemma": "um"
      },
      {
        "de": "auf",
        "es": "prefijo separable de aufstehen: levantarse",
        "en": "separable prefix of aufstehen: get up",
        "lemma": "auf"
      },
      {
        "de": "heute",
        "es": "hoy",
        "en": "today",
        "lemma": "heute"
      },
      {
        "de": "Deutsch",
        "es": "alemán (idioma)",
        "en": "German (language)",
        "lemma": "Deutsch"
      },
      {
        "de": "lernen",
        "es": "aprender",
        "en": "learn",
        "lemma": "lernen"
      },
      {
        "de": "aber",
        "es": "pero",
        "en": "but",
        "lemma": "aber"
      },
      {
        "de": "an",
        "es": "prefijo separable de anfangen: empezar",
        "en": "separable prefix of anfangen: begin",
        "lemma": "an"
      },
      {
        "de": "Anna",
        "es": "Anna; nombre propio",
        "en": "Anna; proper name",
        "lemma": "Anna",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "mögen",
        "es": "gustar; möchten = quisiera",
        "en": "like; möchten = would like",
        "lemma": "mögen"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "Sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "hier",
        "es": "aquí",
        "en": "here",
        "lemma": "hier"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "du",
        "es": "tú; dich acusativo, dir dativo",
        "en": "you informal singular; dich accusative, dir dative",
        "lemma": "du"
      },
      {
        "de": "sprechen",
        "es": "hablar",
        "en": "speak",
        "lemma": "sprechen"
      },
      {
        "de": "ja",
        "es": "sí",
        "en": "yes",
        "lemma": "ja"
      }
    ]
  },
  "reading-unit-05": {
    "minUnit": "unit-05",
    "grammarIds": [
      "dative",
      "two-way-prepositions",
      "prepositions",
      "personal-pronouns"
    ],
    "intro": {
      "es": "Lectura puente: recupera la estructura de la unidad; las palabras nuevas están glosadas.",
      "en": "Bridge reading: recall the unit’s structure; new words are glossed."
    },
    "teachingGlossary": [
      {
        "de": "liegen",
        "es": "estar situado; estar tendido",
        "en": "be located; lie",
        "lemma": "liegen",
        "forms": [
          "liegt"
        ]
      },
      {
        "de": "legen",
        "es": "colocar en posición horizontal",
        "en": "lay; put",
        "lemma": "legen",
        "forms": [
          "lege"
        ]
      },
      {
        "de": "stehen",
        "es": "estar de pie/situado",
        "en": "stand; be located",
        "lemma": "stehen",
        "forms": [
          "steht"
        ]
      },
      {
        "de": "stellen",
        "es": "colocar en posición vertical",
        "en": "place upright",
        "lemma": "stellen",
        "forms": [
          "stelle"
        ]
      },
      {
        "de": "der Tisch",
        "es": "mesa",
        "en": "table",
        "lemma": "Tisch"
      },
      {
        "de": "der Stuhl",
        "es": "silla",
        "en": "chair",
        "lemma": "Stuhl"
      },
      {
        "de": "das Bett",
        "es": "cama",
        "en": "bed",
        "lemma": "Bett"
      },
      {
        "de": "das Fenster",
        "es": "ventana",
        "en": "window",
        "lemma": "Fenster"
      },
      {
        "de": "das Zimmer",
        "es": "habitación",
        "en": "room",
        "lemma": "Zimmer"
      },
      {
        "de": "nebenan",
        "es": "al lado (otra habitación/lugar)",
        "en": "next door",
        "lemma": "nebenan"
      },
      {
        "de": "dann",
        "es": "entonces; después",
        "en": "then",
        "lemma": "dann"
      },
      {
        "de": "geben",
        "es": "dar",
        "en": "give",
        "lemma": "geben",
        "forms": [
          "gebe"
        ]
      },
      {
        "de": "helfen",
        "es": "ayudar + dativo",
        "en": "help + dative",
        "lemma": "helfen",
        "forms": [
          "hilft"
        ]
      },
      {
        "de": "das Kind",
        "es": "niño/a",
        "en": "child",
        "lemma": "Kind"
      },
      {
        "de": "im",
        "es": "en el: in dem, Dat",
        "en": "in the: in dem, Dat",
        "lemma": "in"
      },
      {
        "de": "ins",
        "es": "hacia/dentro del: in das, Akk",
        "en": "into the: in das, Akk",
        "lemma": "in"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "auf",
        "es": "sobre; hacia encima; prefijo según contexto",
        "en": "on; onto; prefix depending on context",
        "lemma": "auf"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "neben",
        "es": "al lado de + Dat ubicación / Akk destino",
        "en": "beside + Dat location / Akk destination",
        "lemma": "neben"
      },
      {
        "de": "vor",
        "es": "delante de; antes de",
        "en": "in front of; before",
        "lemma": "vor"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "gehen",
        "es": "ir; caminar",
        "en": "go; walk",
        "lemma": "gehen"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "wir",
        "es": "nosotros; uns acusativo/dativo",
        "en": "we; uns accusative/dative",
        "lemma": "wir"
      },
      {
        "de": "sprechen",
        "es": "hablar",
        "en": "speak",
        "lemma": "sprechen"
      },
      {
        "de": "mit",
        "es": "con + Dat",
        "en": "with + Dat",
        "lemma": "mit"
      },
      {
        "de": "der Lehrer",
        "es": "profesor",
        "en": "teacher",
        "lemma": "Lehrer"
      }
    ]
  },
  "reading-unit-06": {
    "minUnit": "unit-06",
    "grammarIds": [
      "perfect",
      "past",
      "irregular-verbs",
      "word-order"
    ],
    "intro": {
      "es": "Lectura puente: recupera la estructura de la unidad; las palabras nuevas están glosadas.",
      "en": "Bridge reading: recall the unit’s structure; new words are glossed."
    },
    "teachingGlossary": [
      {
        "de": "gestern",
        "es": "ayer",
        "en": "yesterday",
        "lemma": "gestern"
      },
      {
        "de": "fahren",
        "es": "viajar; ir en vehículo",
        "en": "travel; go by vehicle",
        "lemma": "fahren",
        "forms": [
          "gefahren"
        ]
      },
      {
        "de": "ankommen",
        "es": "llegar",
        "en": "arrive",
        "lemma": "ankommen",
        "forms": [
          "angekommen"
        ]
      },
      {
        "de": "treffen",
        "es": "encontrarse con",
        "en": "meet",
        "lemma": "treffen",
        "forms": [
          "getroffen"
        ]
      },
      {
        "de": "das Café",
        "es": "café (local)",
        "en": "café (place)",
        "lemma": "Café"
      },
      {
        "de": "das Museum",
        "es": "museo",
        "en": "museum",
        "lemma": "Museum"
      },
      {
        "de": "besuchen",
        "es": "visitar",
        "en": "visit",
        "lemma": "besuchen",
        "forms": [
          "besucht"
        ]
      },
      {
        "de": "danach",
        "es": "después",
        "en": "afterwards",
        "lemma": "danach"
      },
      {
        "de": "der Abend",
        "es": "tarde/noche",
        "en": "evening",
        "lemma": "Abend"
      },
      {
        "de": "müde",
        "es": "cansado",
        "en": "tired",
        "lemma": "müde"
      },
      {
        "de": "wieder",
        "es": "otra vez; de nuevo",
        "en": "again",
        "lemma": "wieder"
      },
      {
        "de": "zehn",
        "es": "diez",
        "en": "ten",
        "lemma": "zehn"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "nach",
        "es": "hacia; después de + Dat",
        "en": "to; after + Dat",
        "lemma": "nach"
      },
      {
        "de": "Berlin",
        "es": "Berlín; ciudad, nombre propio",
        "en": "Berlin; city, proper name",
        "lemma": "Berlin",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "um",
        "es": "a (hora); alrededor de; um…zu para",
        "en": "at (time); around; um…zu in order to",
        "lemma": "um"
      },
      {
        "de": "die Uhr",
        "es": "reloj; hora en expresiones horarias",
        "en": "clock; time in time expressions",
        "lemma": "Uhr"
      },
      {
        "de": "am",
        "es": "en el: an dem; con fecha/hora por/en",
        "en": "at/on the: an dem; with time at/on",
        "lemma": "am"
      },
      {
        "de": "der Bahnhof",
        "es": "estación ferroviaria",
        "en": "railway station",
        "lemma": "Bahnhof"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "Anna",
        "es": "Anna; nombre propio",
        "en": "Anna; proper name",
        "lemma": "Anna",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "wir",
        "es": "nosotros; uns acusativo/dativo",
        "en": "we; uns accusative/dative",
        "lemma": "wir"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "gehen",
        "es": "ir; caminar",
        "en": "go; walk",
        "lemma": "gehen"
      },
      {
        "de": "viel",
        "es": "mucho; viele muchos (plural)",
        "en": "much; viele many (plural)",
        "lemma": "viel"
      },
      {
        "de": "lernen",
        "es": "aprender; estudiar",
        "en": "learn; study",
        "lemma": "lernen"
      },
      {
        "de": "die Zeit",
        "es": "tiempo",
        "en": "time",
        "lemma": "Zeit"
      },
      {
        "de": "aber",
        "es": "pero",
        "en": "but",
        "lemma": "aber"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "heute",
        "es": "hoy",
        "en": "today",
        "lemma": "heute"
      }
    ]
  },
  "reading-unit-07": {
    "minUnit": "unit-07",
    "grammarIds": [
      "subordinate",
      "connectors",
      "perfect",
      "word-order"
    ],
    "intro": {
      "es": "Lectura puente: recupera la estructura de la unidad; las palabras nuevas están glosadas.",
      "en": "Bridge reading: recall the unit’s structure; new words are glossed."
    },
    "teachingGlossary": [
      {
        "de": "wissen",
        "es": "saber (hecho)",
        "en": "know (a fact)",
        "lemma": "wissen",
        "forms": [
          "weiß"
        ]
      },
      {
        "de": "fragen",
        "es": "preguntar",
        "en": "ask",
        "lemma": "fragen",
        "forms": [
          "frage"
        ]
      },
      {
        "de": "weil",
        "es": "porque; verbo final",
        "en": "because; verb final",
        "lemma": "weil"
      },
      {
        "de": "dass",
        "es": "que (contenido); verbo final",
        "en": "that (content); verb final",
        "lemma": "dass"
      },
      {
        "de": "wenn",
        "es": "si/cuando (condición/repetición)",
        "en": "if/when (condition/recurrence)",
        "lemma": "wenn"
      },
      {
        "de": "ob",
        "es": "si (pregunta indirecta)",
        "en": "whether (indirect question)",
        "lemma": "ob"
      },
      {
        "de": "obwohl",
        "es": "aunque; verbo final",
        "en": "although; verb final",
        "lemma": "obwohl"
      },
      {
        "de": "als",
        "es": "cuando (evento único pasado)",
        "en": "when (single past event)",
        "lemma": "als"
      },
      {
        "de": "trotzdem",
        "es": "aun así; ocupa posición de la principal",
        "en": "nevertheless; occupies a main-clause position",
        "lemma": "trotzdem"
      },
      {
        "de": "oft",
        "es": "a menudo",
        "en": "often",
        "lemma": "oft"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "lernen",
        "es": "aprender; estudiar",
        "en": "learn; study",
        "lemma": "lernen"
      },
      {
        "de": "Deutsch",
        "es": "alemán (idioma)",
        "en": "German (language)",
        "lemma": "Deutsch"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "mögen",
        "es": "gustar; möchten = quisiera",
        "en": "like; möchten = would like",
        "lemma": "mögen"
      },
      {
        "de": "Anna",
        "es": "Anna; nombre propio",
        "en": "Anna; proper name",
        "lemma": "Anna",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "auch",
        "es": "también",
        "en": "also; too",
        "lemma": "auch"
      },
      {
        "de": "die Zeit",
        "es": "tiempo",
        "en": "time",
        "lemma": "Zeit"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "frage",
        "es": "preguntar",
        "en": "ask",
        "lemma": "fragen"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "der Text",
        "es": "texto",
        "en": "text",
        "lemma": "Text"
      },
      {
        "de": "verstehen",
        "es": "entender",
        "en": "understand",
        "lemma": "verstehen"
      },
      {
        "de": "gestern",
        "es": "ayer",
        "en": "yesterday",
        "lemma": "gestern"
      },
      {
        "de": "arbeiten",
        "es": "trabajar",
        "en": "work",
        "lemma": "arbeiten"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "müde",
        "es": "cansado",
        "en": "tired",
        "lemma": "müde"
      },
      {
        "de": "schwierig",
        "es": "difícil; schwierigeres más difícil + terminación",
        "en": "difficult; schwierigeres more difficult + ending",
        "lemma": "schwierig"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "Frage",
        "es": "preguntar",
        "en": "ask",
        "lemma": "fragen"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "Berlin",
        "es": "Berlín; ciudad, nombre propio",
        "en": "Berlin; city, proper name",
        "lemma": "Berlin",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "sprechen",
        "es": "hablar",
        "en": "speak",
        "lemma": "sprechen"
      }
    ]
  },
  "reading-unit-08": {
    "minUnit": "unit-08",
    "grammarIds": [
      "possessives",
      "genitive",
      "future",
      "dative"
    ],
    "intro": {
      "es": "Lectura puente: recupera la estructura de la unidad; las palabras nuevas están glosadas.",
      "en": "Bridge reading: recall the unit’s structure; new words are glossed."
    },
    "teachingGlossary": [
      {
        "de": "spielen",
        "es": "jugar",
        "en": "play",
        "lemma": "spielen",
        "forms": [
          "spiele"
        ]
      },
      {
        "de": "mein",
        "es": "mi; declina según lo poseído",
        "en": "my; declines with the possessed noun",
        "lemma": "mein",
        "forms": [
          "meines",
          "meinem"
        ]
      },
      {
        "de": "ihr",
        "es": "su (de ella/ellos); aquí de Anna",
        "en": "her/their; here Anna’s",
        "lemma": "ihr",
        "forms": [
          "ihrem"
        ]
      },
      {
        "de": "wenig",
        "es": "poco",
        "en": "little; few",
        "lemma": "wenig"
      },
      {
        "de": "wegen",
        "es": "por; a causa de + genitivo",
        "en": "because of + genitive",
        "lemma": "wegen"
      },
      {
        "de": "morgen",
        "es": "mañana",
        "en": "tomorrow",
        "lemma": "morgen"
      },
      {
        "de": "werden",
        "es": "auxiliar de futuro aquí",
        "en": "future auxiliary here",
        "lemma": "werden",
        "forms": [
          "werde",
          "wird"
        ]
      },
      {
        "de": "der Lehrer",
        "es": "profesor",
        "en": "teacher",
        "lemma": "Lehrer",
        "forms": [
          "Lehrers"
        ]
      },
      {
        "de": "die Kinder",
        "es": "los niños; plural de Kind",
        "en": "the children; plural of Kind",
        "lemma": "Kind"
      },
      {
        "de": "Anna",
        "es": "Anna; nombre propio",
        "en": "Anna; proper name",
        "lemma": "Anna",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "der Hund",
        "es": "perro",
        "en": "dog",
        "lemma": "Hund"
      },
      {
        "de": "Ihr",
        "es": "su de ella/ellos; posesivo",
        "en": "her/their; possessive",
        "lemma": "ihr"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "klein",
        "es": "pequeño",
        "en": "small",
        "lemma": "klein"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "mit",
        "es": "con + Dat",
        "en": "with + Dat",
        "lemma": "mit"
      },
      {
        "de": "ihrem",
        "es": "su de ella/ellos; posesivo",
        "en": "her/their; possessive",
        "lemma": "ihr"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "liegen",
        "es": "estar tendido/situado",
        "en": "lie; be located",
        "lemma": "liegen"
      },
      {
        "de": "auf",
        "es": "sobre; hacia encima; prefijo según contexto",
        "en": "on; onto; prefix depending on context",
        "lemma": "auf"
      },
      {
        "de": "der Tisch",
        "es": "mesa",
        "en": "table",
        "lemma": "Tisch"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "das Kind",
        "es": "niño/a",
        "en": "child",
        "lemma": "Kind"
      },
      {
        "de": "neben",
        "es": "al lado de + Dat ubicación / Akk destino",
        "en": "beside + Dat location / Akk destination",
        "lemma": "neben"
      },
      {
        "de": "das Fenster",
        "es": "ventana",
        "en": "window",
        "lemma": "Fenster"
      },
      {
        "de": "heute",
        "es": "hoy",
        "en": "today",
        "lemma": "heute"
      },
      {
        "de": "die Zeit",
        "es": "tiempo",
        "en": "time",
        "lemma": "Zeit"
      },
      {
        "de": "die Arbeit",
        "es": "trabajo",
        "en": "work",
        "lemma": "Arbeit"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "helfen",
        "es": "ayudar + dativo",
        "en": "help + dative",
        "lemma": "helfen"
      },
      {
        "de": "dann",
        "es": "entonces; después",
        "en": "then",
        "lemma": "dann"
      },
      {
        "de": "die Frage",
        "es": "pregunta; cuestión",
        "en": "question",
        "lemma": "Frage"
      },
      {
        "de": "verstehen",
        "es": "entender",
        "en": "understand",
        "lemma": "verstehen"
      }
    ]
  },
  "reading-a1-1": {
    "minUnit": "unit-09",
    "grammarIds": [
      "present",
      "word-order",
      "accusative",
      "adjective-endings"
    ],
    "intro": {
      "es": "A1 por tema, U09 por forma: einen kurzen Text requiere declinación. Lee palabras frecuentes, adjetivos y V2.",
      "en": "A1 by topic, U09 by form: einen kurzen Text requires adjective declension. Read frequent words, adjectives and V2."
    },
    "teachingGlossary": [
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "heißen",
        "es": "llamarse; significar",
        "en": "be called; mean",
        "lemma": "heißen"
      },
      {
        "de": "Gabriel",
        "es": "Gabriel; nombre propio",
        "en": "Gabriel; proper name",
        "lemma": "Gabriel",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "kommen",
        "es": "venir; proceder",
        "en": "come; be from",
        "lemma": "kommen"
      },
      {
        "de": "aus",
        "es": "de; desde dentro + Dat",
        "en": "from; out of + Dat",
        "lemma": "aus"
      },
      {
        "de": "Chile",
        "es": "Chile; país, nombre propio",
        "en": "Chile; country, proper name",
        "lemma": "Chile",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "wohnen",
        "es": "vivir; residir",
        "en": "live; reside",
        "lemma": "wohnen"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "Santiago",
        "es": "Santiago; ciudad, nombre propio",
        "en": "Santiago; city, proper name",
        "lemma": "Santiago",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "sprechen",
        "es": "hablar",
        "en": "speak",
        "lemma": "sprechen"
      },
      {
        "de": "Spanisch",
        "es": "español (idioma)",
        "en": "Spanish (language)",
        "lemma": "Spanisch"
      },
      {
        "de": "Englisch",
        "es": "inglés (idioma)",
        "en": "English (language)",
        "lemma": "Englisch"
      },
      {
        "de": "jetzt",
        "es": "ahora",
        "en": "now",
        "lemma": "jetzt"
      },
      {
        "de": "lernen",
        "es": "aprender; estudiar",
        "en": "learn; study",
        "lemma": "lernen"
      },
      {
        "de": "Deutsch",
        "es": "alemán (idioma)",
        "en": "German (language)",
        "lemma": "Deutsch"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "gern",
        "es": "con gusto; expresa que gusta una actividad",
        "en": "gladly; expresses liking an activity",
        "lemma": "gern"
      },
      {
        "de": "heute",
        "es": "hoy",
        "en": "today",
        "lemma": "heute"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "kurz",
        "es": "breve; corto",
        "en": "short",
        "lemma": "kurz"
      },
      {
        "de": "der Text",
        "es": "texto",
        "en": "text",
        "lemma": "Text"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "einfach",
        "es": "simple; fácil; einfacher más fácil",
        "en": "simple; easy; einfacher easier",
        "lemma": "einfach"
      },
      {
        "de": "verstehen",
        "es": "entender",
        "en": "understand",
        "lemma": "verstehen"
      },
      {
        "de": "viel",
        "es": "mucho; viele muchos (plural)",
        "en": "much; viele many (plural)",
        "lemma": "viel"
      },
      {
        "de": "das Wort",
        "es": "palabra; Wörter entradas léxicas, Worte palabras en discurso",
        "en": "word; Wörter lexical items, Worte words in discourse",
        "lemma": "Wort"
      }
    ]
  },
  "reading-a1-2": {
    "minUnit": "unit-08",
    "grammarIds": [
      "present",
      "possessives",
      "prepositions",
      "numbers"
    ],
    "intro": {
      "es": "Requiere posesivos y dativo: Ihr Kaffee / zur Arbeit. Los números y zu Hause se recuperan como expresiones aprendidas.",
      "en": "Requires possessives and dative: Ihr Kaffee / zur Arbeit. Numbers and zu Hause are recalled as learned expressions."
    },
    "teachingGlossary": [
      {
        "de": "es",
        "es": "ello; referente neutro/sujeto impersonal",
        "en": "it; neuter reference/impersonal subject",
        "lemma": "es"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "sieben",
        "es": "siete",
        "en": "seven",
        "lemma": "sieben"
      },
      {
        "de": "die Uhr",
        "es": "reloj; hora en expresiones horarias",
        "en": "clock; time in time expressions",
        "lemma": "Uhr"
      },
      {
        "de": "Anna",
        "es": "Anna; nombre propio",
        "en": "Anna; proper name",
        "lemma": "Anna",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "zu",
        "es": "a; en; partícula de infinitivo; demasiado según contexto",
        "en": "to; at; infinitive marker; too depending on context",
        "lemma": "zu"
      },
      {
        "de": "das Haus",
        "es": "casa; zu Hause en casa, nach Hause a casa",
        "en": "house; zu Hause at home, nach Hause homewards",
        "lemma": "Haus"
      },
      {
        "de": "Sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "trinken",
        "es": "beber",
        "en": "drink",
        "lemma": "trinken"
      },
      {
        "de": "das Wasser",
        "es": "agua",
        "en": "water",
        "lemma": "Wasser"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "essen",
        "es": "comer",
        "en": "eat",
        "lemma": "essen"
      },
      {
        "de": "das Brot",
        "es": "pan",
        "en": "bread",
        "lemma": "Brot"
      },
      {
        "de": "Ihr",
        "es": "su de ella/ellos; posesivo",
        "en": "her/their; possessive",
        "lemma": "ihr"
      },
      {
        "de": "der Kaffee",
        "es": "café",
        "en": "coffee",
        "lemma": "Kaffee"
      },
      {
        "de": "warm",
        "es": "caliente; cálido",
        "en": "warm",
        "lemma": "warm"
      },
      {
        "de": "um",
        "es": "a (hora); alrededor de; um…zu para",
        "en": "at (time); around; um…zu in order to",
        "lemma": "um"
      },
      {
        "de": "acht",
        "es": "ocho",
        "en": "eight",
        "lemma": "acht"
      },
      {
        "de": "gehen",
        "es": "ir; caminar",
        "en": "go; walk",
        "lemma": "gehen"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "zur",
        "es": "al/a la: zu der",
        "en": "to the: zu der",
        "lemma": "zur"
      },
      {
        "de": "die Arbeit",
        "es": "trabajo",
        "en": "work",
        "lemma": "Arbeit"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "beginnen",
        "es": "comenzar",
        "en": "begin",
        "lemma": "beginnen"
      },
      {
        "de": "neun",
        "es": "nueve",
        "en": "nine",
        "lemma": "neun"
      },
      {
        "de": "heute",
        "es": "hoy",
        "en": "today",
        "lemma": "heute"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "viel",
        "es": "mucho; viele muchos (plural)",
        "en": "much; viele many (plural)",
        "lemma": "viel"
      },
      {
        "de": "die Zeit",
        "es": "tiempo",
        "en": "time",
        "lemma": "Zeit"
      }
    ]
  },
  "reading-a1-3": {
    "minUnit": "unit-08",
    "grammarIds": [
      "present",
      "accusative",
      "two-way-prepositions",
      "possessives"
    ],
    "intro": {
      "es": "Requiere dativo espacial y posesivo: auf dem Tisch / auf einem Stuhl / Mein Zimmer.",
      "en": "Requires locative dative and possessives: auf dem Tisch / auf einem Stuhl / Mein Zimmer."
    },
    "teachingGlossary": [
      {
        "de": "mein",
        "es": "mi; posesivo Gen masculino/neutro",
        "en": "my; masculine/neuter Gen possessive",
        "lemma": "mein"
      },
      {
        "de": "das Zimmer",
        "es": "habitación",
        "en": "room",
        "lemma": "Zimmer"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "klein",
        "es": "pequeño",
        "en": "small",
        "lemma": "klein"
      },
      {
        "de": "es",
        "es": "ello; referente neutro/sujeto impersonal",
        "en": "it; neuter reference/impersonal subject",
        "lemma": "es"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "der Tisch",
        "es": "mesa",
        "en": "table",
        "lemma": "Tisch"
      },
      {
        "de": "zwei",
        "es": "dos",
        "en": "two",
        "lemma": "zwei"
      },
      {
        "de": "der Stuhl",
        "es": "silla",
        "en": "chair",
        "lemma": "Stuhl"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "das Bett",
        "es": "cama",
        "en": "bed",
        "lemma": "Bett"
      },
      {
        "de": "auf",
        "es": "sobre; hacia encima; prefijo según contexto",
        "en": "on; onto; prefix depending on context",
        "lemma": "auf"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "liegen",
        "es": "estar tendido/situado",
        "en": "lie; be located",
        "lemma": "liegen"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "neben",
        "es": "al lado de + Dat ubicación / Akk destino",
        "en": "beside + Dat location / Akk destination",
        "lemma": "neben"
      },
      {
        "de": "der Stift",
        "es": "lápiz; bolígrafo",
        "en": "pencil; pen",
        "lemma": "Stift"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "sitzen",
        "es": "estar sentado",
        "en": "sit",
        "lemma": "sitzen"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "das Fenster",
        "es": "ventana",
        "en": "window",
        "lemma": "Fenster"
      },
      {
        "de": "offen",
        "es": "abierto",
        "en": "open",
        "lemma": "offen"
      },
      {
        "de": "hören",
        "es": "oír; escuchar",
        "en": "hear; listen",
        "lemma": "hören"
      },
      {
        "de": "der Zug",
        "es": "tren",
        "en": "train",
        "lemma": "Zug"
      },
      {
        "de": "der Bahnhof",
        "es": "estación ferroviaria",
        "en": "railway station",
        "lemma": "Bahnhof"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "weit",
        "es": "lejos; hasta dónde según uso",
        "en": "far; how far depending on use",
        "lemma": "weit"
      }
    ]
  },
  "reading-a1-4": {
    "minUnit": "unit-08",
    "grammarIds": [
      "present",
      "questions",
      "negation",
      "possessives",
      "prepositions"
    ],
    "intro": {
      "es": "Pregunta elemental con posesivo y régimen temático: über das Buch + Akk.",
      "en": "Elementary question with possessive and topical government: über das Buch + Akk."
    },
    "teachingGlossary": [
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "viel",
        "es": "mucho; viele muchos (plural)",
        "en": "much; viele many (plural)",
        "lemma": "viel"
      },
      {
        "de": "die Frage",
        "es": "pregunta; cuestión",
        "en": "question",
        "lemma": "Frage"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "was",
        "es": "qué",
        "en": "what",
        "lemma": "was"
      },
      {
        "de": "wahr",
        "es": "verdadero",
        "en": "true",
        "lemma": "wahr"
      },
      {
        "de": "kennen",
        "es": "conocer",
        "en": "know; be familiar with",
        "lemma": "kennen"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Antwort",
        "es": "respuesta",
        "en": "answer",
        "lemma": "Antwort"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "mein",
        "es": "mi; posesivo Gen masculino/neutro",
        "en": "my; masculine/neuter Gen possessive",
        "lemma": "mein"
      },
      {
        "de": "der Freund",
        "es": "amigo",
        "en": "friend",
        "lemma": "Freund"
      },
      {
        "de": "auch",
        "es": "también",
        "en": "also; too",
        "lemma": "auch"
      },
      {
        "de": "wir",
        "es": "nosotros; uns acusativo/dativo",
        "en": "we; uns accusative/dative",
        "lemma": "wir"
      },
      {
        "de": "sprechen",
        "es": "hablar",
        "en": "speak",
        "lemma": "sprechen"
      },
      {
        "de": "über",
        "es": "sobre; acerca de",
        "en": "over; about",
        "lemma": "über"
      },
      {
        "de": "er",
        "es": "él; ihn acusativo, ihm dativo",
        "en": "he; ihn accusative, ihm dative",
        "lemma": "er"
      },
      {
        "de": "die Idee",
        "es": "idea",
        "en": "idea",
        "lemma": "Idee"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "das Beispiel",
        "es": "ejemplo",
        "en": "example",
        "lemma": "Beispiel"
      },
      {
        "de": "denken",
        "es": "pensar",
        "en": "think",
        "lemma": "denken"
      },
      {
        "de": "zusammen",
        "es": "juntos",
        "en": "together",
        "lemma": "zusammen"
      }
    ]
  },
  "reading-a2-1": {
    "minUnit": "unit-08",
    "grammarIds": [
      "perfect",
      "past",
      "possessives",
      "two-way-prepositions",
      "connectors"
    ],
    "intro": {
      "es": "Requiere Perfekt, war, posesivos y destino espacial. Reconstruye auxiliares y secuencia antes de traducir.",
      "en": "Requires Perfekt, war, possessives and spatial destination. Restore auxiliaries and sequence before translating."
    },
    "teachingGlossary": [
      {
        "de": "gestern",
        "es": "ayer",
        "en": "yesterday",
        "lemma": "gestern"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "mit",
        "es": "con + Dat",
        "en": "with + Dat",
        "lemma": "mit"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "der Zug",
        "es": "tren",
        "en": "train",
        "lemma": "Zug"
      },
      {
        "de": "nach",
        "es": "hacia; después de + Dat",
        "en": "to; after + Dat",
        "lemma": "nach"
      },
      {
        "de": "Berlin",
        "es": "Berlín; ciudad, nombre propio",
        "en": "Berlin; city, proper name",
        "lemma": "Berlin",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "fahren",
        "es": "viajar; conducir",
        "en": "travel; drive",
        "lemma": "fahren"
      },
      {
        "de": "um",
        "es": "a (hora); alrededor de; um…zu para",
        "en": "at (time); around; um…zu in order to",
        "lemma": "um"
      },
      {
        "de": "zehn",
        "es": "diez",
        "en": "ten",
        "lemma": "zehn"
      },
      {
        "de": "die Uhr",
        "es": "reloj; hora en expresiones horarias",
        "en": "clock; time in time expressions",
        "lemma": "Uhr"
      },
      {
        "de": "ankommen",
        "es": "llegar",
        "en": "arrive",
        "lemma": "ankommen"
      },
      {
        "de": "am",
        "es": "en el: an dem; con fecha/hora por/en",
        "en": "at/on the: an dem; with time at/on",
        "lemma": "am"
      },
      {
        "de": "der Bahnhof",
        "es": "estación ferroviaria",
        "en": "railway station",
        "lemma": "Bahnhof"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "mein",
        "es": "mi; mío, declina según lo poseído",
        "en": "my; mine, declines with possessed noun",
        "lemma": "mein"
      },
      {
        "de": "die Freundin",
        "es": "amiga",
        "en": "female friend",
        "lemma": "Freundin"
      },
      {
        "de": "treffen",
        "es": "encontrarse con",
        "en": "meet",
        "lemma": "treffen"
      },
      {
        "de": "wir",
        "es": "nosotros; uns acusativo/dativo",
        "en": "we; uns accusative/dative",
        "lemma": "wir"
      },
      {
        "de": "zuerst",
        "es": "primero",
        "en": "first",
        "lemma": "zuerst"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "das Café",
        "es": "café (local)",
        "en": "café (place)",
        "lemma": "Café"
      },
      {
        "de": "gehen",
        "es": "ir; caminar",
        "en": "go; walk",
        "lemma": "gehen"
      },
      {
        "de": "danach",
        "es": "después",
        "en": "afterwards",
        "lemma": "danach"
      },
      {
        "de": "das Museum",
        "es": "museo",
        "en": "museum",
        "lemma": "Museum"
      },
      {
        "de": "besuchen",
        "es": "visitar",
        "en": "visit",
        "lemma": "besuchen"
      },
      {
        "de": "viel",
        "es": "mucho; viele muchos (plural)",
        "en": "much; viele many (plural)",
        "lemma": "viel"
      },
      {
        "de": "lernen",
        "es": "aprender; estudiar",
        "en": "learn; study",
        "lemma": "lernen"
      },
      {
        "de": "aber",
        "es": "pero",
        "en": "but",
        "lemma": "aber"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "alles",
        "es": "todo; todos; determinante/pronombre, no agotado",
        "en": "all; everything; determiner/pronoun, not used up",
        "lemma": "all"
      },
      {
        "de": "verstehen",
        "es": "entender",
        "en": "understand",
        "lemma": "verstehen"
      },
      {
        "de": "der Abend",
        "es": "tarde/noche",
        "en": "evening",
        "lemma": "Abend"
      },
      {
        "de": "müde",
        "es": "cansado",
        "en": "tired",
        "lemma": "müde"
      },
      {
        "de": "deshalb",
        "es": "por eso",
        "en": "therefore",
        "lemma": "deshalb"
      },
      {
        "de": "früh",
        "es": "temprano",
        "en": "early",
        "lemma": "früh"
      },
      {
        "de": "das Haus",
        "es": "casa; zu Hause en casa, nach Hause a casa",
        "en": "house; zu Hause at home, nach Hause homewards",
        "lemma": "Haus"
      }
    ]
  },
  "reading-a2-2": {
    "minUnit": "unit-09",
    "grammarIds": [
      "modal-verbs",
      "questions",
      "accusative",
      "adjective-endings",
      "demonstratives"
    ],
    "intro": {
      "es": "Requiere modal, determinantes y adjetivos atributivos. möchten/darf se distinguen por deseo y permiso.",
      "en": "Requires modals, determiners and attributive adjectives. Distinguish möchten/darf as desire and permission."
    },
    "teachingGlossary": [
      {
        "de": "gut",
        "es": "bueno; bien",
        "en": "good; well",
        "lemma": "gut"
      },
      {
        "de": "der Tag",
        "es": "día",
        "en": "day",
        "lemma": "Tag"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "suchen",
        "es": "buscar",
        "en": "look for",
        "lemma": "suchen"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "für",
        "es": "para + Akk",
        "en": "for + Akk",
        "lemma": "für"
      },
      {
        "de": "der Freund",
        "es": "amigo",
        "en": "friend",
        "lemma": "Freund"
      },
      {
        "de": "er",
        "es": "él; ihn acusativo, ihm dativo",
        "en": "he; ihn accusative, ihm dative",
        "lemma": "er"
      },
      {
        "de": "lernen",
        "es": "aprender; estudiar",
        "en": "learn; study",
        "lemma": "lernen"
      },
      {
        "de": "Deutsch",
        "es": "alemán (idioma)",
        "en": "German (language)",
        "lemma": "Deutsch"
      },
      {
        "de": "welcher",
        "es": "qué/cuál; declina según caso/género/número",
        "en": "which; declines for case/gender/number",
        "lemma": "welcher"
      },
      {
        "de": "der Text",
        "es": "texto",
        "en": "text",
        "lemma": "Text"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "gern",
        "es": "con gusto; expresa que gusta una actividad",
        "en": "gladly; expresses liking an activity",
        "lemma": "gern"
      },
      {
        "de": "mögen",
        "es": "gustar; möchten = quisiera",
        "en": "like; möchten = would like",
        "lemma": "mögen"
      },
      {
        "de": "kurz",
        "es": "breve; corto",
        "en": "short",
        "lemma": "kurz"
      },
      {
        "de": "die Geschichte",
        "es": "historia; relato",
        "en": "story",
        "lemma": "Geschichte"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "die Philosophie",
        "es": "filosofía",
        "en": "philosophy",
        "lemma": "Philosophie"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "dürfen",
        "es": "tener permiso; dürfte puede expresar conjetura",
        "en": "be allowed; dürfte may express conjecture",
        "lemma": "dürfen"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "zu",
        "es": "demasiado: zu schwierig demasiado difícil",
        "en": "too: zu schwierig too difficult",
        "lemma": "zu"
      },
      {
        "de": "schwierig",
        "es": "difícil; schwierigeres más difícil + terminación",
        "en": "difficult; schwierigeres more difficult + ending",
        "lemma": "schwierig"
      },
      {
        "de": "sein",
        "es": "su de él/ello; determinante posesivo",
        "en": "his/its; possessive determiner",
        "lemma": "sein"
      },
      {
        "de": "dieser",
        "es": "este; declina según caso/género/número",
        "en": "this; declines for case/gender/number",
        "lemma": "dieser"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "einfach",
        "es": "simple; fácil; einfacher más fácil",
        "en": "simple; easy; einfacher easier",
        "lemma": "einfach"
      },
      {
        "de": "jeder",
        "es": "cada",
        "en": "each; every",
        "lemma": "jeder"
      },
      {
        "de": "die Übersetzung",
        "es": "traducción",
        "en": "translation",
        "lemma": "Übersetzung"
      },
      {
        "de": "wie",
        "es": "cómo",
        "en": "how",
        "lemma": "wie"
      },
      {
        "de": "viel",
        "es": "mucho; viele muchos (plural)",
        "en": "much; viele many (plural)",
        "lemma": "viel"
      },
      {
        "de": "kosten",
        "es": "costar",
        "en": "cost",
        "lemma": "kosten"
      },
      {
        "de": "es",
        "es": "ello; referente neutro/sujeto impersonal",
        "en": "it; neuter reference/impersonal subject",
        "lemma": "es"
      },
      {
        "de": "zwölf",
        "es": "doce",
        "en": "twelve",
        "lemma": "zwölf"
      },
      {
        "de": "der Euro",
        "es": "euro",
        "en": "euro",
        "lemma": "Euro"
      },
      {
        "de": "dann",
        "es": "entonces; después",
        "en": "then",
        "lemma": "dann"
      },
      {
        "de": "nehmen",
        "es": "tomar; aquí comprar/llevarse",
        "en": "take; here buy/take it",
        "lemma": "nehmen"
      },
      {
        "de": "der Dank",
        "es": "agradecimiento; Vielen Dank muchas gracias",
        "en": "thanks; Vielen Dank thank you very much",
        "lemma": "Dank"
      }
    ]
  },
  "reading-a2-3": {
    "minUnit": "unit-09",
    "grammarIds": [
      "subordinate",
      "modal-verbs",
      "adjective-endings",
      "comparative",
      "demonstratives"
    ],
    "intro": {
      "es": "La causa y condición ya se enseñaron en U07; U09 añade neues/deutsche y besser. house se identifica como palabra inglesa.",
      "en": "Reason and condition were taught in U07; U09 adds neues/deutsche and besser. house is identified as an English word."
    },
    "teachingGlossary": [
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "lernen",
        "es": "aprender; estudiar",
        "en": "learn; study",
        "lemma": "lernen"
      },
      {
        "de": "Deutsch",
        "es": "alemán (idioma)",
        "en": "German (language)",
        "lemma": "Deutsch"
      },
      {
        "de": "weil",
        "es": "porque; subordinada",
        "en": "because; subordinate clause",
        "lemma": "weil"
      },
      {
        "de": "deutsch",
        "es": "alemán (adjetivo)",
        "en": "German (adjective)",
        "lemma": "deutsch"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "mögen",
        "es": "gustar; möchten = quisiera",
        "en": "like; möchten = would like",
        "lemma": "mögen"
      },
      {
        "de": "Englisch",
        "es": "inglés (idioma)",
        "en": "English (language)",
        "lemma": "Englisch"
      },
      {
        "de": "helfen",
        "es": "ayudar + dativo",
        "en": "help + dative",
        "lemma": "helfen"
      },
      {
        "de": "manchmal",
        "es": "a veces",
        "en": "sometimes",
        "lemma": "manchmal"
      },
      {
        "de": "das Haus",
        "es": "casa; zu Hause en casa, nach Hause a casa",
        "en": "house; zu Hause at home, nach Hause homewards",
        "lemma": "Haus"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "house",
        "es": "house = casa en inglés; comparación interlingüística",
        "en": "house is English; used for cross-language comparison",
        "lemma": "house",
        "kind": "foreign-word",
        "dictionary": false
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "ähnlich",
        "es": "parecido",
        "en": "similar",
        "lemma": "ähnlich"
      },
      {
        "de": "aber",
        "es": "pero",
        "en": "but",
        "lemma": "aber"
      },
      {
        "de": "müssen",
        "es": "tener que; obligación/inferencia",
        "en": "have to; obligation/inference",
        "lemma": "müssen"
      },
      {
        "de": "auch",
        "es": "también",
        "en": "also; too",
        "lemma": "auch"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "der Unterschied",
        "es": "diferencia",
        "en": "difference",
        "lemma": "Unterschied"
      },
      {
        "de": "jeder",
        "es": "cada",
        "en": "each; every",
        "lemma": "jeder"
      },
      {
        "de": "das Nomen",
        "es": "sustantivo",
        "en": "noun",
        "lemma": "Nomen"
      },
      {
        "de": "mit",
        "es": "con + Dat",
        "en": "with + Dat",
        "lemma": "mit"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "der Artikel",
        "es": "artículo",
        "en": "article",
        "lemma": "Artikel"
      },
      {
        "de": "der Plural",
        "es": "plural",
        "en": "plural",
        "lemma": "Plural"
      },
      {
        "de": "der Tag",
        "es": "día",
        "en": "day",
        "lemma": "Tag"
      },
      {
        "de": "wiederholen",
        "es": "repasar; repetir",
        "en": "revise; repeat",
        "lemma": "wiederholen"
      },
      {
        "de": "einige",
        "es": "algunos; determinante/pronombre plural",
        "en": "some; plural determiner/pronoun",
        "lemma": "einige"
      },
      {
        "de": "das Wort",
        "es": "palabra; Wörter entradas léxicas, Worte palabras en discurso",
        "en": "word; Wörter lexical items, Worte words in discourse",
        "lemma": "Wort"
      },
      {
        "de": "wenn",
        "es": "si/cuando; condición o repetición",
        "en": "if/when; condition or repetition",
        "lemma": "wenn"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "der Fehler",
        "es": "error",
        "en": "mistake",
        "lemma": "Fehler"
      },
      {
        "de": "machen",
        "es": "hacer",
        "en": "do; make",
        "lemma": "machen"
      },
      {
        "de": "suchen",
        "es": "buscar",
        "en": "look for",
        "lemma": "suchen"
      },
      {
        "de": "neu",
        "es": "nuevo",
        "en": "new",
        "lemma": "neu"
      },
      {
        "de": "das Beispiel",
        "es": "ejemplo",
        "en": "example",
        "lemma": "Beispiel"
      },
      {
        "de": "so",
        "es": "así; de ese modo",
        "en": "so; in this way",
        "lemma": "so"
      },
      {
        "de": "verstehen",
        "es": "entender",
        "en": "understand",
        "lemma": "verstehen"
      },
      {
        "de": "die Regel",
        "es": "regla",
        "en": "rule",
        "lemma": "Regel"
      },
      {
        "de": "gut",
        "es": "bueno; bien",
        "en": "good; well",
        "lemma": "gut"
      }
    ]
  },
  "reading-a2-4": {
    "minUnit": "unit-09",
    "grammarIds": [
      "perfect",
      "subordinate",
      "possessives",
      "two-way-prepositions",
      "adjective-endings"
    ],
    "intro": {
      "es": "Distingue apariencia y objeto: sehen…aus es aussehen, hängt…ab es abhängen. Perfekt: geworden.",
      "en": "Distinguish appearance and object: sehen…aus is aussehen, hängt…ab is abhängen. Perfekt: geworden."
    },
    "teachingGlossary": [
      {
        "de": "auf",
        "es": "sobre; hacia encima; prefijo según contexto",
        "en": "on; onto; prefix depending on context",
        "lemma": "auf"
      },
      {
        "de": "mein",
        "es": "mi; mío, declina según lo poseído",
        "en": "my; mine, declines with possessed noun",
        "lemma": "mein"
      },
      {
        "de": "der Tisch",
        "es": "mesa",
        "en": "table",
        "lemma": "Tisch"
      },
      {
        "de": "stehen",
        "es": "estar de pie; estar situado",
        "en": "stand; be located",
        "lemma": "stehen"
      },
      {
        "de": "zwei",
        "es": "dos",
        "en": "two",
        "lemma": "zwei"
      },
      {
        "de": "die Tasse",
        "es": "taza",
        "en": "cup",
        "lemma": "Tasse"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "weiß",
        "es": "blanco (adjetivo); weiß también forma de wissen",
        "en": "white (adjective); weiß also a form of wissen",
        "lemma": "weiß"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "anderer",
        "es": "otro; distinto",
        "en": "other; different",
        "lemma": "anderer"
      },
      {
        "de": "blau",
        "es": "azul",
        "en": "blue",
        "lemma": "blau"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "sehen",
        "es": "ver",
        "en": "see",
        "lemma": "sehen"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "bei",
        "es": "junto a; durante + Dat",
        "en": "at; during + Dat",
        "lemma": "bei"
      },
      {
        "de": "das Tageslicht",
        "es": "luz del día",
        "en": "daylight",
        "lemma": "Tageslicht"
      },
      {
        "de": "am",
        "es": "en el: an dem; con fecha/hora por/en",
        "en": "at/on the: an dem; with time at/on",
        "lemma": "am"
      },
      {
        "de": "der Abend",
        "es": "tarde/noche",
        "en": "evening",
        "lemma": "Abend"
      },
      {
        "de": "aussehen",
        "es": "parecer; verse de cierta manera: sehen…aus",
        "en": "look; appear: sehen…aus",
        "lemma": "aussehen"
      },
      {
        "de": "die Farbe",
        "es": "color",
        "en": "colour",
        "lemma": "Farbe"
      },
      {
        "de": "anders",
        "es": "distinto; de otra manera",
        "en": "different; differently",
        "lemma": "anders"
      },
      {
        "de": "weil",
        "es": "porque; subordinada",
        "en": "because; subordinate clause",
        "lemma": "weil"
      },
      {
        "de": "die Lampe",
        "es": "lámpara",
        "en": "lamp",
        "lemma": "Lampe"
      },
      {
        "de": "warm",
        "es": "caliente; cálido",
        "en": "warm",
        "lemma": "warm"
      },
      {
        "de": "das Licht",
        "es": "luz",
        "en": "light",
        "lemma": "Licht"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "werden",
        "es": "volverse; auxiliar de futuro/pasiva",
        "en": "become; future/passive auxiliary",
        "lemma": "werden"
      },
      {
        "de": "nein",
        "es": "no (respuesta)",
        "en": "no (answer)",
        "lemma": "nein"
      },
      {
        "de": "nur",
        "es": "solo; solamente",
        "en": "only",
        "lemma": "nur"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "die Beobachtung",
        "es": "observación",
        "en": "observation",
        "lemma": "Beobachtung"
      },
      {
        "de": "abhängen",
        "es": "depender; abhängen von + Dat",
        "en": "depend; abhängen von + Dat",
        "lemma": "abhängen"
      },
      {
        "de": "also",
        "es": "por tanto; así pues",
        "en": "therefore",
        "lemma": "also"
      },
      {
        "de": "auch",
        "es": "también",
        "en": "also; too",
        "lemma": "auch"
      },
      {
        "de": "von",
        "es": "de; por + Dat",
        "en": "of; by + Dat",
        "lemma": "von"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "die Umgebung",
        "es": "entorno",
        "en": "surroundings",
        "lemma": "Umgebung"
      },
      {
        "de": "müssen",
        "es": "tener que; obligación/inferencia",
        "en": "have to; obligation/inference",
        "lemma": "müssen"
      },
      {
        "de": "genau",
        "es": "preciso; exactamente; genauer con mayor precisión",
        "en": "precise; exactly; genauer more precisely",
        "lemma": "genau"
      },
      {
        "de": "beschreiben",
        "es": "describir",
        "en": "describe",
        "lemma": "beschreiben"
      },
      {
        "de": "wann",
        "es": "cuándo",
        "en": "when",
        "lemma": "wann"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "wo",
        "es": "dónde",
        "en": "where",
        "lemma": "wo"
      },
      {
        "de": "etwas",
        "es": "algo; un poco",
        "en": "something; a little",
        "lemma": "etwas"
      }
    ]
  },
  "reading-b1-1": {
    "minUnit": "unit-12",
    "grammarIds": [
      "perfect",
      "relative",
      "konjunktiv2",
      "reflexive",
      "subordinate",
      "adjective-endings"
    ],
    "intro": {
      "es": "Reúne relativa, reflexivo, Perfekt y cortesía. Sie formal se diferencia de sie referido a la calefacción.",
      "en": "Combines relative clauses, reflexives, Perfekt and politeness. Formal Sie differs from sie referring to the heating."
    },
    "teachingGlossary": [
      {
        "de": "sehr",
        "es": "muy",
        "en": "very",
        "lemma": "sehr"
      },
      {
        "de": "geehrt",
        "es": "estimado en saludo formal",
        "en": "honoured in formal address",
        "lemma": "geehrt"
      },
      {
        "de": "die Frau",
        "es": "mujer; señora en tratamiento",
        "en": "woman; Ms in address",
        "lemma": "Frau"
      },
      {
        "de": "Weber",
        "es": "Weber; apellido de la destinataria ficticia",
        "en": "Weber; fictional recipient’s surname",
        "lemma": "Weber",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "seit",
        "es": "desde/hace (duración vigente) + Dat",
        "en": "since/for (ongoing duration) + Dat",
        "lemma": "seit"
      },
      {
        "de": "drei",
        "es": "tres",
        "en": "three",
        "lemma": "drei"
      },
      {
        "de": "der Tag",
        "es": "día",
        "en": "day",
        "lemma": "Tag"
      },
      {
        "de": "funktionieren",
        "es": "funcionar",
        "en": "work; function",
        "lemma": "funktionieren"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Heizung",
        "es": "calefacción",
        "en": "heating",
        "lemma": "Heizung"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "mein",
        "es": "mi; mío, declina según lo poseído",
        "en": "my; mine, declines with possessed noun",
        "lemma": "mein"
      },
      {
        "de": "die Wohnung",
        "es": "vivienda; departamento",
        "en": "apartment",
        "lemma": "Wohnung"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "richtig",
        "es": "correcto; adecuado",
        "en": "correct; proper",
        "lemma": "richtig"
      },
      {
        "de": "obwohl",
        "es": "aunque",
        "en": "although",
        "lemma": "obwohl"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "einschalten",
        "es": "encender; activar",
        "en": "switch on; activate",
        "lemma": "einschalten"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "bleiben",
        "es": "permanecer; quedarse",
        "en": "remain; stay",
        "lemma": "bleiben"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "das Wohnzimmer",
        "es": "sala de estar",
        "en": "living room",
        "lemma": "Wohnzimmer"
      },
      {
        "de": "kalt",
        "es": "frío",
        "en": "cold",
        "lemma": "kalt"
      },
      {
        "de": "bereits",
        "es": "ya",
        "en": "already",
        "lemma": "bereits"
      },
      {
        "de": "prüfen",
        "es": "comprobar; examinar",
        "en": "check; examine",
        "lemma": "prüfen"
      },
      {
        "de": "ob",
        "es": "si; pregunta indirecta",
        "en": "whether; indirect question",
        "lemma": "ob"
      },
      {
        "de": "das Fenster",
        "es": "ventana",
        "en": "window",
        "lemma": "Fenster"
      },
      {
        "de": "schließen",
        "es": "cerrar; inferir según contexto",
        "en": "close; infer depending on context",
        "lemma": "schließen"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können"
      },
      {
        "de": "Sie",
        "es": "usted/ustedes formal",
        "en": "formal you",
        "lemma": "sie"
      },
      {
        "de": "bitte",
        "es": "por favor",
        "en": "please",
        "lemma": "bitte"
      },
      {
        "de": "jemand",
        "es": "alguien; jemanden acusativo",
        "en": "someone; jemanden accusative",
        "lemma": "jemand"
      },
      {
        "de": "schicken",
        "es": "enviar",
        "en": "send",
        "lemma": "schicken"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "sich",
        "es": "se; reflexivo de tercera persona",
        "en": "third-person reflexive",
        "lemma": "sich"
      },
      {
        "de": "ansehen",
        "es": "mirar; revisar, sich etwas ansehen",
        "en": "look at; inspect, sich etwas ansehen",
        "lemma": "ansehen"
      },
      {
        "de": "am",
        "es": "en el: an dem; con fecha/hora por/en",
        "en": "at/on the: an dem; with time at/on",
        "lemma": "am"
      },
      {
        "de": "der Mittwoch",
        "es": "miércoles",
        "en": "Wednesday",
        "lemma": "Mittwoch"
      },
      {
        "de": "ab",
        "es": "a partir de; preposición de tiempo",
        "en": "from…onwards; time preposition",
        "lemma": "ab"
      },
      {
        "de": "vierzehn",
        "es": "catorce",
        "en": "fourteen",
        "lemma": "vierzehn"
      },
      {
        "de": "die Uhr",
        "es": "reloj; hora en expresiones horarias",
        "en": "clock; time in time expressions",
        "lemma": "Uhr"
      },
      {
        "de": "zu",
        "es": "a; en; partícula de infinitivo; demasiado según contexto",
        "en": "to; at; infinitive marker; too depending on context",
        "lemma": "zu"
      },
      {
        "de": "das Haus",
        "es": "casa; zu Hause en casa, nach Hause a casa",
        "en": "house; zu Hause at home, nach Hause homewards",
        "lemma": "Haus"
      },
      {
        "de": "falls",
        "es": "en caso de que; si",
        "en": "in case; if",
        "lemma": "falls"
      },
      {
        "de": "dieser",
        "es": "este; declina según caso/género/número",
        "en": "this; declines for case/gender/number",
        "lemma": "dieser"
      },
      {
        "de": "der Termin",
        "es": "cita; horario acordado",
        "en": "appointment; agreed time",
        "lemma": "Termin"
      },
      {
        "de": "möglich",
        "es": "posible",
        "en": "possible",
        "lemma": "möglich"
      },
      {
        "de": "anrufen",
        "es": "llamar por teléfono",
        "en": "telephone; call",
        "lemma": "anrufen"
      },
      {
        "de": "viel",
        "es": "mucho; viele muchos (plural)",
        "en": "much; viele many (plural)",
        "lemma": "viel"
      },
      {
        "de": "der Dank",
        "es": "agradecimiento; Vielen Dank muchas gracias",
        "en": "thanks; Vielen Dank thank you very much",
        "lemma": "Dank"
      },
      {
        "de": "für",
        "es": "para + Akk",
        "en": "for + Akk",
        "lemma": "für"
      },
      {
        "de": "Ihre",
        "es": "su de usted/ustedes; posesivo formal",
        "en": "formal your; possessive",
        "lemma": "ihr"
      },
      {
        "de": "die Hilfe",
        "es": "ayuda",
        "en": "help",
        "lemma": "Hilfe"
      },
      {
        "de": "mit",
        "es": "con + Dat",
        "en": "with + Dat",
        "lemma": "mit"
      },
      {
        "de": "freundlich",
        "es": "amable; cordial",
        "en": "friendly; cordial",
        "lemma": "freundlich"
      },
      {
        "de": "der Gruß",
        "es": "saludo; Mit freundlichen Grüßen atentamente",
        "en": "greeting; Mit freundlichen Grüßen kind regards",
        "lemma": "Gruß"
      },
      {
        "de": "Daniel",
        "es": "Daniel; nombre propio",
        "en": "Daniel; proper name",
        "lemma": "Daniel",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "Rojas",
        "es": "Rojas; apellido",
        "en": "Rojas; surname",
        "lemma": "Rojas",
        "kind": "proper-name",
        "dictionary": false
      }
    ]
  },
  "reading-b1-2": {
    "minUnit": "unit-12",
    "grammarIds": [
      "past",
      "subordinate",
      "konjunktiv2",
      "reflexive",
      "comparative",
      "adjective-endings"
    ],
    "intro": {
      "es": "Compara hechos en Präteritum con propuesta en müsste; sich erinnern an + Akk requiere U12.",
      "en": "Compare facts in Präteritum with a proposal in müsste; sich erinnern an + Akk requires U12."
    },
    "teachingGlossary": [
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "die Studentin",
        "es": "estudiante universitaria",
        "en": "female university student",
        "lemma": "Studentin"
      },
      {
        "de": "wollen",
        "es": "querer",
        "en": "want",
        "lemma": "wollen"
      },
      {
        "de": "wissen",
        "es": "saber (un hecho)",
        "en": "know (a fact)",
        "lemma": "wissen"
      },
      {
        "de": "ob",
        "es": "si; pregunta indirecta",
        "en": "whether; indirect question",
        "lemma": "ob"
      },
      {
        "de": "die Musik",
        "es": "música",
        "en": "music",
        "lemma": "Musik"
      },
      {
        "de": "beim",
        "es": "en/al: bei dem",
        "en": "at/while: bei dem",
        "lemma": "beim"
      },
      {
        "de": "das Lernen",
        "es": "el aprendizaje; infinitivo sustantivado",
        "en": "learning; nominalised infinitive",
        "lemma": "Lernen"
      },
      {
        "de": "helfen",
        "es": "ayudar + dativo",
        "en": "help + dative",
        "lemma": "helfen"
      },
      {
        "de": "Sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "lernen",
        "es": "aprender; estudiar",
        "en": "learn; study",
        "lemma": "lernen"
      },
      {
        "de": "am",
        "es": "en el: an dem; con fecha/hora por/en",
        "en": "at/on the: an dem; with time at/on",
        "lemma": "am"
      },
      {
        "de": "der Montag",
        "es": "lunes",
        "en": "Monday",
        "lemma": "Montag"
      },
      {
        "de": "mit",
        "es": "con + Dat",
        "en": "with + Dat",
        "lemma": "mit"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "der Dienstag",
        "es": "martes",
        "en": "Tuesday",
        "lemma": "Dienstag"
      },
      {
        "de": "ohne",
        "es": "sin + Akk; ohne…zu sin hacer",
        "en": "without + Akk; ohne…zu without doing",
        "lemma": "ohne"
      },
      {
        "de": "der Mittwoch",
        "es": "miércoles",
        "en": "Wednesday",
        "lemma": "Mittwoch"
      },
      {
        "de": "machen",
        "es": "hacer",
        "en": "do; make",
        "lemma": "machen"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "der Test",
        "es": "prueba",
        "en": "test",
        "lemma": "Test"
      },
      {
        "de": "an",
        "es": "en/junto a; en contacto; prefijo según contexto",
        "en": "at/on; in contact; prefix depending on context",
        "lemma": "an"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "das Wort",
        "es": "palabra; Wörter entradas léxicas, Worte palabras en discurso",
        "en": "word; Wörter lexical items, Worte words in discourse",
        "lemma": "Wort"
      },
      {
        "de": "vom",
        "es": "del: von dem",
        "en": "of/from the: von dem",
        "lemma": "vom"
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können"
      },
      {
        "de": "sich",
        "es": "se; reflexivo de tercera persona",
        "en": "third-person reflexive",
        "lemma": "sich"
      },
      {
        "de": "gut",
        "es": "bueno; bien",
        "en": "good; well",
        "lemma": "gut"
      },
      {
        "de": "erinnern",
        "es": "recordar; sich erinnern an + Akk",
        "en": "remember; sich erinnern an + Akk",
        "lemma": "erinnern"
      },
      {
        "de": "zuerst",
        "es": "primero",
        "en": "first",
        "lemma": "zuerst"
      },
      {
        "de": "denken",
        "es": "pensar",
        "en": "think",
        "lemma": "denken"
      },
      {
        "de": "dass",
        "es": "que; contenido, subordinada",
        "en": "that; content, subordinate clause",
        "lemma": "dass"
      },
      {
        "de": "die Ursache",
        "es": "causa",
        "en": "cause",
        "lemma": "Ursache"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "dann",
        "es": "entonces; después",
        "en": "then",
        "lemma": "dann"
      },
      {
        "de": "bemerken",
        "es": "advertir; notar",
        "en": "notice",
        "lemma": "bemerken"
      },
      {
        "de": "aber",
        "es": "pero",
        "en": "but",
        "lemma": "aber"
      },
      {
        "de": "viel",
        "es": "mucho; viele muchos (plural)",
        "en": "much; viele many (plural)",
        "lemma": "viel"
      },
      {
        "de": "einfach",
        "es": "simple; fácil; einfacher más fácil",
        "en": "simple; easy; einfacher easier",
        "lemma": "einfach"
      },
      {
        "de": "also",
        "es": "por tanto; así pues",
        "en": "therefore",
        "lemma": "also"
      },
      {
        "de": "noch",
        "es": "aún; todavía; otro más según contexto",
        "en": "still; yet; another depending on context",
        "lemma": "noch"
      },
      {
        "de": "kein",
        "es": "ningún; no un; negación nominal",
        "en": "no; not a; nominal negation",
        "lemma": "kein"
      },
      {
        "de": "sicher",
        "es": "seguro; cierto",
        "en": "certain; secure",
        "lemma": "sicher"
      },
      {
        "de": "die Schlussfolgerung",
        "es": "conclusión; inferencia",
        "en": "conclusion; inference",
        "lemma": "Schlussfolgerung"
      },
      {
        "de": "ziehen",
        "es": "tirar; eine Schlussfolgerung ziehen = sacar una conclusión",
        "en": "draw; eine Schlussfolgerung ziehen = draw a conclusion",
        "lemma": "ziehen"
      },
      {
        "de": "für",
        "es": "para + Akk",
        "en": "for + Akk",
        "lemma": "für"
      },
      {
        "de": "der Vergleich",
        "es": "comparación",
        "en": "comparison",
        "lemma": "Vergleich"
      },
      {
        "de": "müssen",
        "es": "tener que; obligación/inferencia",
        "en": "have to; obligation/inference",
        "lemma": "müssen"
      },
      {
        "de": "ähnlich",
        "es": "parecido",
        "en": "similar",
        "lemma": "ähnlich"
      },
      {
        "de": "schwierig",
        "es": "difícil; schwierigeres más difícil + terminación",
        "en": "difficult; schwierigeres more difficult + ending",
        "lemma": "schwierig"
      },
      {
        "de": "verwenden",
        "es": "utilizar",
        "en": "use",
        "lemma": "verwenden"
      }
    ]
  },
  "reading-b1-3": {
    "minUnit": "unit-12",
    "grammarIds": [
      "subordinate",
      "infinitive",
      "passive",
      "comparative",
      "adjective-endings"
    ],
    "intro": {
      "es": "Objetivo infinitivo y pasiva modal: über einen Text zu sprechen / beantwortet werden soll.",
      "en": "Infinitive goal and modal passive: über einen Text zu sprechen / beantwortet werden soll."
    },
    "teachingGlossary": [
      {
        "de": "zwei",
        "es": "dos",
        "en": "two",
        "lemma": "zwei"
      },
      {
        "de": "der Freund",
        "es": "amigo",
        "en": "friend",
        "lemma": "Freund"
      },
      {
        "de": "diskutieren",
        "es": "discutir; debatir",
        "en": "discuss; debate",
        "lemma": "diskutieren"
      },
      {
        "de": "welcher",
        "es": "qué/cuál; declina según caso/género/número",
        "en": "which; declines for case/gender/number",
        "lemma": "welcher"
      },
      {
        "de": "das Buch",
        "es": "libro",
        "en": "book",
        "lemma": "Buch"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "gemeinsam",
        "es": "en conjunto; compartido",
        "en": "together; shared",
        "lemma": "gemeinsam"
      },
      {
        "de": "lesen",
        "es": "leer",
        "en": "read",
        "lemma": "lesen"
      },
      {
        "de": "sollen",
        "es": "deber; sollte aquí consejo/hipótesis",
        "en": "should; sollte here advice/hypothesis",
        "lemma": "sollen"
      },
      {
        "de": "Lea",
        "es": "Lea; nombre propio",
        "en": "Lea; proper name",
        "lemma": "Lea",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "mögen",
        "es": "gustar; möchten = quisiera",
        "en": "like; möchten = would like",
        "lemma": "mögen"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "kurz",
        "es": "breve; corto",
        "en": "short",
        "lemma": "kurz"
      },
      {
        "de": "wählen",
        "es": "elegir",
        "en": "choose",
        "lemma": "wählen"
      },
      {
        "de": "weil",
        "es": "porque; subordinada",
        "en": "because; subordinate clause",
        "lemma": "weil"
      },
      {
        "de": "wenig",
        "es": "poco; weniger menos",
        "en": "little; weniger less",
        "lemma": "wenig"
      },
      {
        "de": "die Zeit",
        "es": "tiempo",
        "en": "time",
        "lemma": "Zeit"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "Amir",
        "es": "Amir; nombre propio",
        "en": "Amir; proper name",
        "lemma": "Amir",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "schwierig",
        "es": "difícil; schwierigeres más difícil + terminación",
        "en": "difficult; schwierigeres more difficult + ending",
        "lemma": "schwierig"
      },
      {
        "de": "er",
        "es": "él; ihn acusativo, ihm dativo",
        "en": "he; ihn accusative, ihm dative",
        "lemma": "er"
      },
      {
        "de": "neu",
        "es": "nuevo",
        "en": "new",
        "lemma": "neu"
      },
      {
        "de": "der Begriff",
        "es": "concepto; término",
        "en": "concept; term",
        "lemma": "Begriff"
      },
      {
        "de": "lernen",
        "es": "aprender",
        "en": "learn",
        "lemma": "lernen"
      },
      {
        "de": "wollen",
        "es": "querer",
        "en": "want",
        "lemma": "wollen"
      },
      {
        "de": "beide",
        "es": "ambos",
        "en": "both",
        "lemma": "beide"
      },
      {
        "de": "der Grund",
        "es": "razón; fundamento",
        "en": "reason; basis",
        "lemma": "Grund"
      },
      {
        "de": "für",
        "es": "para + Akk",
        "en": "for + Akk",
        "lemma": "für"
      },
      {
        "de": "ihre",
        "es": "su de ella/ellos; posesivo",
        "en": "her/their; possessive",
        "lemma": "ihr"
      },
      {
        "de": "die Entscheidung",
        "es": "decisión",
        "en": "decision",
        "lemma": "Entscheidung"
      },
      {
        "de": "Sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "unterscheiden",
        "es": "distinguir",
        "en": "distinguish",
        "lemma": "unterscheiden"
      },
      {
        "de": "zwischen",
        "es": "entre; Dat ubicación / Akk destino",
        "en": "between; Dat location / Akk destination",
        "lemma": "zwischen"
      },
      {
        "de": "persönlich",
        "es": "personal",
        "en": "personal",
        "lemma": "persönlich"
      },
      {
        "de": "der Wunsch",
        "es": "deseo",
        "en": "wish",
        "lemma": "Wunsch"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "das Ziel",
        "es": "objetivo",
        "en": "goal",
        "lemma": "Ziel"
      },
      {
        "de": "Ihr",
        "es": "su de ella/ellos; posesivo",
        "en": "her/their; possessive",
        "lemma": "ihr"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "jeder",
        "es": "cada",
        "en": "each; every",
        "lemma": "jeder"
      },
      {
        "de": "die Woche",
        "es": "semana",
        "en": "week",
        "lemma": "Woche"
      },
      {
        "de": "über",
        "es": "sobre; acerca de",
        "en": "over; about",
        "lemma": "über"
      },
      {
        "de": "der Text",
        "es": "texto",
        "en": "text",
        "lemma": "Text"
      },
      {
        "de": "zu",
        "es": "marcador de infinitivo; no es aquí preposición",
        "en": "infinitive marker; not a preposition here",
        "lemma": "zu"
      },
      {
        "de": "sprechen",
        "es": "hablar",
        "en": "speak",
        "lemma": "sprechen"
      },
      {
        "de": "deshalb",
        "es": "por eso",
        "en": "therefore",
        "lemma": "deshalb"
      },
      {
        "de": "mit",
        "es": "con + Dat",
        "en": "with + Dat",
        "lemma": "mit"
      },
      {
        "de": "aber",
        "es": "pero",
        "en": "but",
        "lemma": "aber"
      },
      {
        "de": "anspruchsvoll",
        "es": "exigente",
        "en": "demanding",
        "lemma": "anspruchsvoll"
      },
      {
        "de": "das Kapitel",
        "es": "capítulo",
        "en": "chapter",
        "lemma": "Kapitel"
      },
      {
        "de": "gut",
        "es": "bueno; bien",
        "en": "good; well",
        "lemma": "gut"
      },
      {
        "de": "die Begründung",
        "es": "justificación",
        "en": "justification",
        "lemma": "Begründung"
      },
      {
        "de": "müssen",
        "es": "tener que; obligación/inferencia",
        "en": "have to; obligation/inference",
        "lemma": "müssen"
      },
      {
        "de": "also",
        "es": "por tanto; así pues",
        "en": "therefore",
        "lemma": "also"
      },
      {
        "de": "berücksichtigen",
        "es": "tener en cuenta",
        "en": "take into account",
        "lemma": "berücksichtigen"
      },
      {
        "de": "die Frage",
        "es": "pregunta; cuestión",
        "en": "question",
        "lemma": "Frage"
      },
      {
        "de": "gerade",
        "es": "en este momento; adverbio temporal",
        "en": "currently; time adverb",
        "lemma": "gerade"
      },
      {
        "de": "beantworten",
        "es": "responder una pregunta",
        "en": "answer a question",
        "lemma": "beantworten"
      },
      {
        "de": "werden",
        "es": "volverse; auxiliar de futuro/pasiva",
        "en": "become; future/passive auxiliary",
        "lemma": "werden"
      }
    ]
  },
  "reading-b1-4": {
    "minUnit": "unit-09",
    "grammarIds": [
      "perfect",
      "past",
      "subordinate",
      "possessives",
      "two-way-prepositions",
      "adjective-endings"
    ],
    "intro": {
      "es": "Caso, Perfekt y adjetivo starkes sostienen el contraste entre certeza y prueba; no introduce aún contrafácticos.",
      "en": "Case, Perfekt and adjective starkes support the contrast between certainty and proof; it does not yet introduce counterfactuals."
    },
    "teachingGlossary": [
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "sicher",
        "es": "seguro; cierto",
        "en": "certain; secure",
        "lemma": "sicher"
      },
      {
        "de": "dass",
        "es": "que; contenido, subordinada",
        "en": "that; content, subordinate clause",
        "lemma": "dass"
      },
      {
        "de": "mein",
        "es": "mi; mío, declina según lo poseído",
        "en": "my; mine, declines with possessed noun",
        "lemma": "mein"
      },
      {
        "de": "der Schlüssel",
        "es": "llave",
        "en": "key",
        "lemma": "Schlüssel"
      },
      {
        "de": "auf",
        "es": "sobre; hacia encima; prefijo según contexto",
        "en": "on; onto; prefix depending on context",
        "lemma": "auf"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "der Tisch",
        "es": "mesa",
        "en": "table",
        "lemma": "Tisch"
      },
      {
        "de": "legen",
        "es": "poner horizontalmente; colocar",
        "en": "lay; put",
        "lemma": "legen"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "zu",
        "es": "a; en; partícula de infinitivo; demasiado según contexto",
        "en": "to; at; infinitive marker; too depending on context",
        "lemma": "zu"
      },
      {
        "de": "das Haus",
        "es": "casa; zu Hause en casa, nach Hause a casa",
        "en": "house; zu Hause at home, nach Hause homewards",
        "lemma": "Haus"
      },
      {
        "de": "liegen",
        "es": "estar tendido/situado",
        "en": "lie; be located",
        "lemma": "liegen"
      },
      {
        "de": "er",
        "es": "él; ihn acusativo, ihm dativo",
        "en": "he; ihn accusative, ihm dative",
        "lemma": "er"
      },
      {
        "de": "aber",
        "es": "pero",
        "en": "but",
        "lemma": "aber"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "dort",
        "es": "allí",
        "en": "there",
        "lemma": "dort"
      },
      {
        "de": "die Schwester",
        "es": "hermana",
        "en": "sister",
        "lemma": "Schwester"
      },
      {
        "de": "sagen",
        "es": "decir",
        "en": "say",
        "lemma": "sagen"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Jackentasche",
        "es": "bolsillo de la chaqueta",
        "en": "jacket pocket",
        "lemma": "Jackentasche"
      },
      {
        "de": "stecken",
        "es": "meter; poner dentro",
        "en": "put; stick",
        "lemma": "stecken"
      },
      {
        "de": "zuerst",
        "es": "primero",
        "en": "first",
        "lemma": "zuerst"
      },
      {
        "de": "glauben",
        "es": "creer; glauben + Dat creer a alguien",
        "en": "believe; glauben + Dat believe someone",
        "lemma": "glauben"
      },
      {
        "de": "ihr",
        "es": "a ella; Dat de sie, aquí creerle a la hermana",
        "en": "her; Dat of sie, here believing the sister",
        "lemma": "sie"
      },
      {
        "de": "dann",
        "es": "entonces; después",
        "en": "then",
        "lemma": "dann"
      },
      {
        "de": "finden",
        "es": "encontrar",
        "en": "find",
        "lemma": "finden"
      },
      {
        "de": "tatsächlich",
        "es": "efectivo; real; de hecho",
        "en": "actual; actually",
        "lemma": "tatsächlich"
      },
      {
        "de": "die Jacke",
        "es": "chaqueta",
        "en": "jacket",
        "lemma": "Jacke"
      },
      {
        "de": "die Erinnerung",
        "es": "recuerdo; memoria",
        "en": "memory",
        "lemma": "Erinnerung"
      },
      {
        "de": "sehr",
        "es": "muy",
        "en": "very",
        "lemma": "sehr"
      },
      {
        "de": "deutlich",
        "es": "claro; nítido",
        "en": "clear; vivid",
        "lemma": "deutlich"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "falsch",
        "es": "incorrecto; falso",
        "en": "wrong; false",
        "lemma": "falsch"
      },
      {
        "de": "daraus",
        "es": "de ello; de ahí",
        "en": "from this",
        "lemma": "daraus"
      },
      {
        "de": "folgen",
        "es": "seguir; sich daraus ergeben según uso",
        "en": "follow; result depending on use",
        "lemma": "folgen"
      },
      {
        "de": "jeder",
        "es": "cada",
        "en": "each; every",
        "lemma": "jeder"
      },
      {
        "de": "es",
        "es": "ello; referente neutro/sujeto impersonal",
        "en": "it; neuter reference/impersonal subject",
        "lemma": "es"
      },
      {
        "de": "zeigen",
        "es": "mostrar",
        "en": "show",
        "lemma": "zeigen"
      },
      {
        "de": "nur",
        "es": "solo; solamente",
        "en": "only",
        "lemma": "nur"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "stark",
        "es": "fuerte; intenso",
        "en": "strong; intense",
        "lemma": "stark"
      },
      {
        "de": "das Gefühl",
        "es": "sensación; sentimiento",
        "en": "feeling",
        "lemma": "Gefühl"
      },
      {
        "de": "von",
        "es": "de; por + Dat",
        "en": "of; by + Dat",
        "lemma": "von"
      },
      {
        "de": "die Sicherheit",
        "es": "seguridad; certeza",
        "en": "certainty; security",
        "lemma": "Sicherheit"
      },
      {
        "de": "noch",
        "es": "aún; todavía; otro más según contexto",
        "en": "still; yet; another depending on context",
        "lemma": "noch"
      },
      {
        "de": "kein",
        "es": "ningún; no un; negación nominal",
        "en": "no; not a; nominal negation",
        "lemma": "kein"
      },
      {
        "de": "der Beweis",
        "es": "prueba; demostración",
        "en": "proof",
        "lemma": "Beweis"
      }
    ]
  },
  "reading-b2-1": {
    "minUnit": "unit-13",
    "grammarIds": [
      "relative",
      "passive",
      "konjunktiv2",
      "infinitive",
      "reflexive",
      "connectors",
      "adjective-endings"
    ],
    "intro": {
      "es": "Integra relativa, pasiva, hipótesis y coordinación no solo…sino también. Kunden es plural de un nombre débil.",
      "en": "Integrates relatives, passive, hypotheses and not only…but also. Kunden is the plural of a weak noun."
    },
    "teachingGlossary": [
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "der Stadtrat",
        "es": "concejo municipal",
        "en": "city council",
        "lemma": "Stadtrat"
      },
      {
        "de": "erwägen",
        "es": "considerar; sopesar",
        "en": "consider; weigh up",
        "lemma": "erwägen"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "die Straße",
        "es": "calle",
        "en": "street",
        "lemma": "Straße"
      },
      {
        "de": "am",
        "es": "en el: an dem; con fecha/hora por/en",
        "en": "at/on the: an dem; with time at/on",
        "lemma": "am"
      },
      {
        "de": "das Wochenende",
        "es": "fin de semana",
        "en": "weekend",
        "lemma": "Wochenende"
      },
      {
        "de": "für",
        "es": "para + Akk",
        "en": "for + Akk",
        "lemma": "für"
      },
      {
        "de": "das Auto",
        "es": "automóvil",
        "en": "car",
        "lemma": "Auto"
      },
      {
        "de": "zu",
        "es": "marcador de infinitivo; no es aquí preposición",
        "en": "infinitive marker; not a preposition here",
        "lemma": "zu"
      },
      {
        "de": "sperren",
        "es": "cerrar; bloquear el acceso",
        "en": "close; block access",
        "lemma": "sperren"
      },
      {
        "de": "der Befürworter",
        "es": "partidario; defensor",
        "en": "supporter",
        "lemma": "Befürworter"
      },
      {
        "de": "erwarten",
        "es": "esperar (anticipar)",
        "en": "expect",
        "lemma": "erwarten"
      },
      {
        "de": "wenig",
        "es": "poco; weniger menos",
        "en": "little; weniger less",
        "lemma": "wenig"
      },
      {
        "de": "der Lärm",
        "es": "ruido",
        "en": "noise",
        "lemma": "Lärm"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "viel",
        "es": "mucho; viele muchos (plural)",
        "en": "much; viele many (plural)",
        "lemma": "viel"
      },
      {
        "de": "der Platz",
        "es": "espacio; lugar",
        "en": "space; place",
        "lemma": "Platz"
      },
      {
        "de": "der Fußgänger",
        "es": "peatón",
        "en": "pedestrian",
        "lemma": "Fußgänger"
      },
      {
        "de": "einige",
        "es": "algunos; determinante/pronombre plural",
        "en": "some; plural determiner/pronoun",
        "lemma": "einige"
      },
      {
        "de": "der Geschäftsinhaber",
        "es": "comerciante; dueño de un negocio",
        "en": "business owner",
        "lemma": "Geschäftsinhaber"
      },
      {
        "de": "befürchten",
        "es": "temer",
        "en": "fear",
        "lemma": "befürchten"
      },
      {
        "de": "hingegen",
        "es": "en cambio",
        "en": "in contrast",
        "lemma": "hingegen"
      },
      {
        "de": "dass",
        "es": "que; contenido, subordinada",
        "en": "that; content, subordinate clause",
        "lemma": "dass"
      },
      {
        "de": "der Kunde",
        "es": "cliente; declinación débil",
        "en": "customer; weak noun",
        "lemma": "Kunde"
      },
      {
        "de": "ihre",
        "es": "su de ella/ellos; posesivo",
        "en": "her/their; possessive",
        "lemma": "ihr"
      },
      {
        "de": "das Geschäft",
        "es": "negocio; tienda",
        "en": "business; shop",
        "lemma": "Geschäft"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "erreichen",
        "es": "alcanzar; llegar a",
        "en": "reach",
        "lemma": "erreichen"
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können"
      },
      {
        "de": "beide",
        "es": "ambos",
        "en": "both",
        "lemma": "beide"
      },
      {
        "de": "die Seite",
        "es": "lado; parte en una discusión",
        "en": "side; party in a debate",
        "lemma": "Seite"
      },
      {
        "de": "berufen",
        "es": "sich berufen auf + Akk: invocar/apelar a",
        "en": "sich berufen auf + Akk: invoke/appeal to",
        "lemma": "berufen"
      },
      {
        "de": "sich",
        "es": "se; reflexivo de tercera persona",
        "en": "third-person reflexive",
        "lemma": "sich"
      },
      {
        "de": "auf",
        "es": "sobre; hacia encima; prefijo según contexto",
        "en": "on; onto; prefix depending on context",
        "lemma": "auf"
      },
      {
        "de": "die Erfahrung",
        "es": "experiencia",
        "en": "experience",
        "lemma": "Erfahrung"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "bisher",
        "es": "hasta ahora",
        "en": "so far",
        "lemma": "bisher"
      },
      {
        "de": "jedoch",
        "es": "sin embargo",
        "en": "however",
        "lemma": "jedoch"
      },
      {
        "de": "systematisch",
        "es": "sistemático; sistemáticamente",
        "en": "systematic; systematically",
        "lemma": "systematisch"
      },
      {
        "de": "vergleichen",
        "es": "comparar",
        "en": "compare",
        "lemma": "vergleichen"
      },
      {
        "de": "werden",
        "es": "volverse; auxiliar de futuro/pasiva",
        "en": "become; future/passive auxiliary",
        "lemma": "werden"
      },
      {
        "de": "befristet",
        "es": "limitado en el tiempo",
        "en": "time-limited",
        "lemma": "befristet"
      },
      {
        "de": "die Erprobung",
        "es": "prueba; ensayo",
        "en": "trial; testing",
        "lemma": "Erprobung"
      },
      {
        "de": "helfen",
        "es": "ayudar + dativo",
        "en": "help + dative",
        "lemma": "helfen"
      },
      {
        "de": "die Folge",
        "es": "consecuencia",
        "en": "consequence",
        "lemma": "Folge"
      },
      {
        "de": "genau",
        "es": "preciso; exactamente; genauer con mayor precisión",
        "en": "precise; exactly; genauer more precisely",
        "lemma": "genau"
      },
      {
        "de": "beurteilen",
        "es": "evaluar; juzgar",
        "en": "assess; judge",
        "lemma": "beurteilen"
      },
      {
        "de": "dabei",
        "es": "al hacerlo; en ese contexto",
        "en": "in doing so; in that context",
        "lemma": "dabei"
      },
      {
        "de": "sollen",
        "es": "deber por encargo/consejo",
        "en": "be supposed to; should",
        "lemma": "sollen"
      },
      {
        "de": "nur",
        "es": "solo; solamente",
        "en": "only",
        "lemma": "nur"
      },
      {
        "de": "der Umsatz",
        "es": "ventas; volumen de negocio",
        "en": "sales; turnover",
        "lemma": "Umsatz"
      },
      {
        "de": "sondern",
        "es": "sino; corrección tras negación",
        "en": "but rather; correction after negation",
        "lemma": "sondern"
      },
      {
        "de": "auch",
        "es": "también",
        "en": "also; too",
        "lemma": "auch"
      },
      {
        "de": "die Zugänglichkeit",
        "es": "accesibilidad",
        "en": "accessibility",
        "lemma": "Zugänglichkeit"
      },
      {
        "de": "die Aufenthaltsqualität",
        "es": "calidad de un lugar para permanecer allí",
        "en": "quality of a place for spending time",
        "lemma": "Aufenthaltsqualität"
      },
      {
        "de": "untersuchen",
        "es": "investigar; examinar",
        "en": "investigate; examine",
        "lemma": "untersuchen"
      },
      {
        "de": "selbst",
        "es": "mismo; incluso",
        "en": "self; even",
        "lemma": "selbst"
      },
      {
        "de": "wenn",
        "es": "si/cuando; condición o repetición",
        "en": "if/when; condition or repetition",
        "lemma": "wenn"
      },
      {
        "de": "durchschnittlich",
        "es": "promedio; medio",
        "en": "average",
        "lemma": "durchschnittlich"
      },
      {
        "de": "unverändert",
        "es": "sin cambios",
        "en": "unchanged",
        "lemma": "unverändert"
      },
      {
        "de": "bleiben",
        "es": "permanecer; quedarse",
        "en": "remain; stay",
        "lemma": "bleiben"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "damit",
        "es": "con ello; de ese modo (adverbio, no para que)",
        "en": "with this; thereby (adverb, not so that)",
        "lemma": "damit"
      },
      {
        "de": "noch",
        "es": "aún; todavía; otro más según contexto",
        "en": "still; yet; another depending on context",
        "lemma": "noch"
      },
      {
        "de": "zeigen",
        "es": "mostrar",
        "en": "show",
        "lemma": "zeigen"
      },
      {
        "de": "jeder",
        "es": "cada",
        "en": "each; every",
        "lemma": "jeder"
      },
      {
        "de": "einzeln",
        "es": "individual; cada uno",
        "en": "individual; single",
        "lemma": "einzeln"
      },
      {
        "de": "gleichermaßen",
        "es": "en la misma medida",
        "en": "equally; to the same extent",
        "lemma": "gleichermaßen"
      },
      {
        "de": "betreffen",
        "es": "afectar; concernir",
        "en": "affect; concern",
        "lemma": "betreffen"
      }
    ]
  },
  "reading-b2-2": {
    "minUnit": "unit-14",
    "grammarIds": [
      "passive",
      "infinitive",
      "participles",
      "genitive",
      "adjective-endings",
      "subordinate"
    ],
    "intro": {
      "es": "U14 permite descomprimir der benötigten Zeit y konkurrierende Modelle. Predicción y explicación son objetivos diferentes.",
      "en": "U14 allows expansion of der benötigten Zeit and konkurrierende Modelle. Prediction and explanation are different goals."
    },
    "teachingGlossary": [
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "das Modell",
        "es": "modelo",
        "en": "model",
        "lemma": "Modell"
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können"
      },
      {
        "de": "menschlich",
        "es": "humano",
        "en": "human",
        "lemma": "menschlich"
      },
      {
        "de": "die Antwort",
        "es": "respuesta",
        "en": "answer",
        "lemma": "Antwort"
      },
      {
        "de": "zuverlässig",
        "es": "fiable; confiablemente",
        "en": "reliable; reliably",
        "lemma": "zuverlässig"
      },
      {
        "de": "vorhersagen",
        "es": "predecir",
        "en": "predict",
        "lemma": "vorhersagen"
      },
      {
        "de": "ohne",
        "es": "sin + Akk; ohne…zu sin hacer",
        "en": "without + Akk; ohne…zu without doing",
        "lemma": "ohne"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "tatsächlich",
        "es": "efectivo; real; de hecho",
        "en": "actual; actually",
        "lemma": "tatsächlich"
      },
      {
        "de": "der Denkprozess",
        "es": "proceso de pensamiento",
        "en": "thinking process",
        "lemma": "Denkprozess"
      },
      {
        "de": "abbilden",
        "es": "representar; reproducir mediante un modelo",
        "en": "represent; model",
        "lemma": "abbilden"
      },
      {
        "de": "wenn",
        "es": "si/cuando; condición o repetición",
        "en": "if/when; condition or repetition",
        "lemma": "wenn"
      },
      {
        "de": "zwei",
        "es": "dos",
        "en": "two",
        "lemma": "zwei"
      },
      {
        "de": "derselbe",
        "es": "el/la mismo/a; los mismos",
        "en": "the same",
        "lemma": "derselbe"
      },
      {
        "de": "das Ergebnis",
        "es": "resultado",
        "en": "result",
        "lemma": "Ergebnis"
      },
      {
        "de": "liefern",
        "es": "entregar; producir resultados",
        "en": "deliver; produce results",
        "lemma": "liefern"
      },
      {
        "de": "folgen",
        "es": "seguir; sich daraus ergeben según uso",
        "en": "follow; result depending on use",
        "lemma": "folgen"
      },
      {
        "de": "daraus",
        "es": "de ello; de ahí",
        "en": "from this",
        "lemma": "daraus"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "dass",
        "es": "que; contenido, subordinada",
        "en": "that; content, subordinate clause",
        "lemma": "dass"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "die Annahme",
        "es": "supuesto",
        "en": "assumption",
        "lemma": "Annahme"
      },
      {
        "de": "verwenden",
        "es": "utilizar",
        "en": "use",
        "lemma": "verwenden"
      },
      {
        "de": "für",
        "es": "para + Akk",
        "en": "for + Akk",
        "lemma": "für"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Beurteilung",
        "es": "evaluación",
        "en": "assessment",
        "lemma": "Beurteilung"
      },
      {
        "de": "kognitiv",
        "es": "cognitivo",
        "en": "cognitive",
        "lemma": "kognitiv"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "daher",
        "es": "por ello",
        "en": "therefore",
        "lemma": "daher"
      },
      {
        "de": "entscheidend",
        "es": "decisivo",
        "en": "decisive",
        "lemma": "entscheidend"
      },
      {
        "de": "welcher",
        "es": "qué/cuál; declina según caso/género/número",
        "en": "which; declines for case/gender/number",
        "lemma": "welcher"
      },
      {
        "de": "die Art",
        "es": "tipo; clase",
        "en": "kind; type",
        "lemma": "Art"
      },
      {
        "de": "von",
        "es": "de; por + Dat",
        "en": "of; by + Dat",
        "lemma": "von"
      },
      {
        "de": "die Leistung",
        "es": "desempeño; logro",
        "en": "performance; achievement",
        "lemma": "Leistung"
      },
      {
        "de": "beanspruchen",
        "es": "reivindicar; pretender ofrecer",
        "en": "claim; purport to offer",
        "lemma": "beanspruchen"
      },
      {
        "de": "werden",
        "es": "volverse; auxiliar de futuro/pasiva",
        "en": "become; future/passive auxiliary",
        "lemma": "werden"
      },
      {
        "de": "die Vorhersage",
        "es": "predicción",
        "en": "prediction",
        "lemma": "Vorhersage"
      },
      {
        "de": "die Beschreibung",
        "es": "descripción",
        "en": "description",
        "lemma": "Beschreibung"
      },
      {
        "de": "oder",
        "es": "o",
        "en": "or",
        "lemma": "oder"
      },
      {
        "de": "die Erklärung",
        "es": "explicación",
        "en": "explanation",
        "lemma": "Erklärung"
      },
      {
        "de": "sollen",
        "es": "deber; sollte aquí consejo/hipótesis",
        "en": "should; sollte here advice/hypothesis",
        "lemma": "sollen"
      },
      {
        "de": "außerdem",
        "es": "además",
        "en": "in addition",
        "lemma": "außerdem"
      },
      {
        "de": "zeigen",
        "es": "mostrar",
        "en": "show",
        "lemma": "zeigen"
      },
      {
        "de": "unter",
        "es": "debajo de; bajo; Dat ubicación/Akk destino",
        "en": "under; Dat location/Akk destination",
        "lemma": "unter"
      },
      {
        "de": "die Bedingung",
        "es": "condición",
        "en": "condition",
        "lemma": "Bedingung"
      },
      {
        "de": "der Prozess",
        "es": "proceso",
        "en": "process",
        "lemma": "Prozess"
      },
      {
        "de": "auftreten",
        "es": "ocurrir; aparecer",
        "en": "occur; arise",
        "lemma": "auftreten"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "weshalb",
        "es": "por qué; razón por la que",
        "en": "why; the reason why",
        "lemma": "weshalb"
      },
      {
        "de": "er",
        "es": "él; ihn acusativo, ihm dativo",
        "en": "he; ihn accusative, ihm dative",
        "lemma": "er"
      },
      {
        "de": "sich",
        "es": "se; reflexivo de tercera persona",
        "en": "third-person reflexive",
        "lemma": "sich"
      },
      {
        "de": "verändern",
        "es": "cambiar; modificar",
        "en": "change; modify",
        "lemma": "verändern"
      },
      {
        "de": "zusätzlich",
        "es": "adicional",
        "en": "additional",
        "lemma": "zusätzlich"
      },
      {
        "de": "die Messung",
        "es": "medición",
        "en": "measurement",
        "lemma": "Messung"
      },
      {
        "de": "etwa",
        "es": "por ejemplo; aproximadamente",
        "en": "for example; approximately",
        "lemma": "etwa"
      },
      {
        "de": "benötigen",
        "es": "necesitar",
        "en": "need",
        "lemma": "benötigen"
      },
      {
        "de": "die Zeit",
        "es": "tiempo",
        "en": "time",
        "lemma": "Zeit"
      },
      {
        "de": "helfen",
        "es": "ayudar + dativo",
        "en": "help + dative",
        "lemma": "helfen"
      },
      {
        "de": "konkurrierend",
        "es": "rival; competidor",
        "en": "competing",
        "lemma": "konkurrierend"
      },
      {
        "de": "zu",
        "es": "marcador de infinitivo; no es aquí preposición",
        "en": "infinitive marker; not a preposition here",
        "lemma": "zu"
      },
      {
        "de": "unterscheiden",
        "es": "distinguir",
        "en": "distinguish",
        "lemma": "unterscheiden"
      },
      {
        "de": "allerdings",
        "es": "sin embargo; eso sí",
        "en": "however",
        "lemma": "allerdings"
      },
      {
        "de": "beweisen",
        "es": "demostrar",
        "en": "prove",
        "lemma": "beweisen"
      },
      {
        "de": "auch",
        "es": "también",
        "en": "also; too",
        "lemma": "auch"
      },
      {
        "de": "gut",
        "es": "bueno; bien",
        "en": "good; well",
        "lemma": "gut"
      },
      {
        "de": "die Übereinstimmung",
        "es": "concordancia",
        "en": "agreement; fit",
        "lemma": "Übereinstimmung"
      },
      {
        "de": "mit",
        "es": "con + Dat",
        "en": "with + Dat",
        "lemma": "mit"
      },
      {
        "de": "mehrere",
        "es": "varios",
        "en": "several",
        "lemma": "mehrere"
      },
      {
        "de": "die Messgröße",
        "es": "magnitud medida",
        "en": "measured quantity",
        "lemma": "Messgröße"
      },
      {
        "de": "automatisch",
        "es": "automático; automáticamente",
        "en": "automatic; automatically",
        "lemma": "automatisch"
      },
      {
        "de": "vorschlagen",
        "es": "proponer",
        "en": "propose",
        "lemma": "vorschlagen"
      },
      {
        "de": "der Mechanismus",
        "es": "mecanismo",
        "en": "mechanism",
        "lemma": "Mechanismus"
      },
      {
        "de": "einzig",
        "es": "único",
        "en": "only; sole",
        "lemma": "einzig"
      },
      {
        "de": "möglich",
        "es": "posible",
        "en": "possible",
        "lemma": "möglich"
      }
    ]
  },
  "reading-b2-3": {
    "minUnit": "unit-14",
    "grammarIds": [
      "passive",
      "genitive",
      "infinitive",
      "reflexive",
      "participles",
      "subordinate"
    ],
    "intro": {
      "es": "Los nombres abstractos y el genitivo anhand ihrer Beziehungen requieren glosas; la sintaxis reutiliza pasiva e interrogativas indirectas.",
      "en": "Abstract nouns and genitive anhand ihrer Beziehungen need glosses; syntax reuses passive and indirect questions."
    },
    "teachingGlossary": [
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "funktionalistisch",
        "es": "funcionalista",
        "en": "functionalist",
        "lemma": "funktionalistisch"
      },
      {
        "de": "die Auffassung",
        "es": "concepción; postura",
        "en": "conception; view",
        "lemma": "Auffassung"
      },
      {
        "de": "beschreiben",
        "es": "describir",
        "en": "describe",
        "lemma": "beschreiben"
      },
      {
        "de": "mental",
        "es": "mental",
        "en": "mental",
        "lemma": "mental"
      },
      {
        "de": "der Zustand",
        "es": "estado",
        "en": "state",
        "lemma": "Zustand"
      },
      {
        "de": "anhand",
        "es": "a partir de; mediante + Gen",
        "en": "on the basis of; by means of + Gen",
        "lemma": "anhand"
      },
      {
        "de": "ihrer",
        "es": "su de ella/ellos; posesivo",
        "en": "her/their; possessive",
        "lemma": "ihr"
      },
      {
        "de": "die Beziehung",
        "es": "relación",
        "en": "relation",
        "lemma": "Beziehung"
      },
      {
        "de": "zu",
        "es": "a; en; partícula de infinitivo; demasiado según contexto",
        "en": "to; at; infinitive marker; too depending on context",
        "lemma": "zu"
      },
      {
        "de": "die Wahrnehmung",
        "es": "percepción",
        "en": "perception",
        "lemma": "Wahrnehmung"
      },
      {
        "de": "die Handlung",
        "es": "acción",
        "en": "action",
        "lemma": "Handlung"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "anderer",
        "es": "otro; distinto",
        "en": "other; different",
        "lemma": "anderer"
      },
      {
        "de": "die Überzeugung",
        "es": "creencia; convicción",
        "en": "belief; conviction",
        "lemma": "Überzeugung"
      },
      {
        "de": "werden",
        "es": "volverse; auxiliar de futuro/pasiva",
        "en": "become; future/passive auxiliary",
        "lemma": "werden"
      },
      {
        "de": "dann",
        "es": "entonces; después",
        "en": "then",
        "lemma": "dann"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "allein",
        "es": "solo; por sí solo",
        "en": "alone; by itself",
        "lemma": "allein"
      },
      {
        "de": "dadurch",
        "es": "por ello; mediante ello",
        "en": "thereby",
        "lemma": "dadurch"
      },
      {
        "de": "bestimmt",
        "es": "determinado; participio en wird bestimmt: se determina",
        "en": "determined; participle in wird bestimmt: is determined",
        "lemma": "bestimmen"
      },
      {
        "de": "woraus",
        "es": "de qué; de lo que",
        "en": "from what",
        "lemma": "woraus"
      },
      {
        "de": "ihr",
        "es": "su de ella/ellos; posesivo",
        "en": "her/their; possessive",
        "lemma": "ihr"
      },
      {
        "de": "der Träger",
        "es": "portador; soporte",
        "en": "bearer; substrate",
        "lemma": "Träger"
      },
      {
        "de": "bestehen",
        "es": "existir; bestehen aus estar compuesto de",
        "en": "exist; bestehen aus consist of",
        "lemma": "bestehen"
      },
      {
        "de": "sondern",
        "es": "sino; corrección tras negación",
        "en": "but rather; correction after negation",
        "lemma": "sondern"
      },
      {
        "de": "auch",
        "es": "también",
        "en": "also; too",
        "lemma": "auch"
      },
      {
        "de": "welcher",
        "es": "qué/cuál; declina según caso/género/número",
        "en": "which; declines for case/gender/number",
        "lemma": "welcher"
      },
      {
        "de": "die Rolle",
        "es": "papel; función",
        "en": "role",
        "lemma": "Rolle"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "groß",
        "es": "grande; größeren mayor + terminación",
        "en": "large; größeren larger + ending",
        "lemma": "groß"
      },
      {
        "de": "der Zusammenhang",
        "es": "relación; contexto",
        "en": "connection; context",
        "lemma": "Zusammenhang"
      },
      {
        "de": "spielen",
        "es": "jugar; desempeñar un papel",
        "en": "play; play a role",
        "lemma": "spielen"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "erlauben",
        "es": "permitir",
        "en": "allow",
        "lemma": "erlauben"
      },
      {
        "de": "zumindest",
        "es": "al menos",
        "en": "at least",
        "lemma": "zumindest"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Frage",
        "es": "pregunta; cuestión",
        "en": "question",
        "lemma": "Frage"
      },
      {
        "de": "ob",
        "es": "si; pregunta indirecta",
        "en": "whether; indirect question",
        "lemma": "ob"
      },
      {
        "de": "unterschiedlich",
        "es": "diferente",
        "en": "different",
        "lemma": "unterschiedlich"
      },
      {
        "de": "physisch",
        "es": "físico",
        "en": "physical",
        "lemma": "physisch"
      },
      {
        "de": "das System",
        "es": "sistema",
        "en": "system",
        "lemma": "System"
      },
      {
        "de": "ähnlich",
        "es": "parecido",
        "en": "similar",
        "lemma": "ähnlich"
      },
      {
        "de": "die Funktion",
        "es": "función",
        "en": "function",
        "lemma": "Funktion"
      },
      {
        "de": "besitzen",
        "es": "poseer",
        "en": "possess",
        "lemma": "besitzen"
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können"
      },
      {
        "de": "Damit",
        "es": "con ello; de ese modo (adverbio, no para que)",
        "en": "with this; thereby (adverb, not so that)",
        "lemma": "damit"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "jedoch",
        "es": "sin embargo",
        "en": "however",
        "lemma": "jedoch"
      },
      {
        "de": "noch",
        "es": "aún; todavía; otro más según contexto",
        "en": "still; yet; another depending on context",
        "lemma": "noch"
      },
      {
        "de": "klären",
        "es": "aclarar",
        "en": "clarify",
        "lemma": "klären"
      },
      {
        "de": "die Beschreibung",
        "es": "descripción",
        "en": "description",
        "lemma": "Beschreibung"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "subjektiv",
        "es": "subjetivo; subjetivamente",
        "en": "subjective; subjectively",
        "lemma": "subjektiv"
      },
      {
        "de": "das Erleben",
        "es": "experiencia vivida; vivencia",
        "en": "subjective experience",
        "lemma": "Erleben"
      },
      {
        "de": "vollständig",
        "es": "completo; completamente",
        "en": "complete; completely",
        "lemma": "vollständig"
      },
      {
        "de": "erklären",
        "es": "explicar",
        "en": "explain",
        "lemma": "erklären"
      },
      {
        "de": "was",
        "es": "qué",
        "en": "what",
        "lemma": "was"
      },
      {
        "de": "leisten",
        "es": "hacer; rendir; lograr",
        "en": "perform; accomplish",
        "lemma": "leisten"
      },
      {
        "de": "wie",
        "es": "cómo",
        "en": "how",
        "lemma": "wie"
      },
      {
        "de": "sich",
        "es": "se; reflexivo de tercera persona",
        "en": "third-person reflexive",
        "lemma": "sich"
      },
      {
        "de": "für",
        "es": "para + Akk",
        "en": "for + Akk",
        "lemma": "für"
      },
      {
        "de": "dieser",
        "es": "este; declina según caso/género/número",
        "en": "this; declines for case/gender/number",
        "lemma": "dieser"
      },
      {
        "de": "anfühlen",
        "es": "sich anfühlen sentirse (experiencia)",
        "en": "sich anfühlen feel (experience)",
        "lemma": "anfühlen"
      },
      {
        "de": "müssen",
        "es": "tener que; obligación/inferencia",
        "en": "have to; obligation/inference",
        "lemma": "müssen"
      },
      {
        "de": "zunächst",
        "es": "primero; en primer término",
        "en": "first; initially",
        "lemma": "zunächst"
      },
      {
        "de": "unterscheiden",
        "es": "distinguir",
        "en": "distinguish",
        "lemma": "unterscheiden"
      },
      {
        "de": "beide",
        "es": "ambos",
        "en": "both",
        "lemma": "beide"
      },
      {
        "de": "letztlich",
        "es": "en último término",
        "en": "ultimately",
        "lemma": "letztlich"
      },
      {
        "de": "derselbe",
        "es": "el/la mismo/a; los mismos",
        "en": "the same",
        "lemma": "derselbe"
      },
      {
        "de": "die Antwort",
        "es": "respuesta",
        "en": "answer",
        "lemma": "Antwort"
      },
      {
        "de": "erhalten",
        "es": "recibir; aquí recibir una respuesta",
        "en": "receive; here receive an answer",
        "lemma": "erhalten"
      },
      {
        "de": "bleiben",
        "es": "permanecer; quedarse",
        "en": "remain; stay",
        "lemma": "bleiben"
      },
      {
        "de": "der Gegenstand",
        "es": "objeto; tema",
        "en": "object; subject matter",
        "lemma": "Gegenstand"
      },
      {
        "de": "philosophisch",
        "es": "filosófico",
        "en": "philosophical",
        "lemma": "philosophisch"
      },
      {
        "de": "die Diskussion",
        "es": "discusión",
        "en": "discussion",
        "lemma": "Diskussion"
      }
    ]
  },
  "reading-b2-4": {
    "minUnit": "unit-15",
    "grammarIds": [
      "passive",
      "perfect",
      "infinitive",
      "konjunktiv1",
      "konjunktiv2",
      "subordinate"
    ],
    "intro": {
      "es": "La paráfrasis original combina discurso referido (seien), hipótesis (wäre) y uso contextual de weiß.",
      "en": "The original paraphrase combines reported speech (seien), hypothesis (wäre) and contextual use of weiß."
    },
    "teachingGlossary": [
      {
        "de": "wenn",
        "es": "si/cuando; condición o repetición",
        "en": "if/when; condition or repetition",
        "lemma": "wenn"
      },
      {
        "de": "jemand",
        "es": "alguien; jemanden acusativo",
        "en": "someone; jemanden accusative",
        "lemma": "jemand"
      },
      {
        "de": "ich",
        "es": "yo; mich acusativo, mir dativo",
        "en": "I; mich accusative, mir dative",
        "lemma": "ich"
      },
      {
        "de": "wissen",
        "es": "saber (un hecho)",
        "en": "know (a fact)",
        "lemma": "wissen"
      },
      {
        "de": "es",
        "es": "ello; referente neutro/sujeto impersonal",
        "en": "it; neuter reference/impersonal subject",
        "lemma": "es"
      },
      {
        "de": "sagen",
        "es": "decir",
        "en": "say",
        "lemma": "sagen"
      },
      {
        "de": "müssen",
        "es": "tener que; obligación/inferencia",
        "en": "have to; obligation/inference",
        "lemma": "müssen"
      },
      {
        "de": "wir",
        "es": "nosotros; uns acusativo/dativo",
        "en": "we; uns accusative/dative",
        "lemma": "wir"
      },
      {
        "de": "fragen",
        "es": "preguntar",
        "en": "ask",
        "lemma": "fragen"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "welcher",
        "es": "qué/cuál; declina según caso/género/número",
        "en": "which; declines for case/gender/number",
        "lemma": "welcher"
      },
      {
        "de": "die Situation",
        "es": "situación",
        "en": "situation",
        "lemma": "Situation"
      },
      {
        "de": "dieser",
        "es": "este; declina según caso/género/número",
        "en": "this; declines for case/gender/number",
        "lemma": "dieser"
      },
      {
        "de": "das Wort",
        "es": "palabra; Wörter entradas léxicas, Worte palabras en discurso",
        "en": "word; Wörter lexical items, Worte words in discourse",
        "lemma": "Wort"
      },
      {
        "de": "verwenden",
        "es": "utilizar",
        "en": "use",
        "lemma": "verwenden"
      },
      {
        "de": "werden",
        "es": "volverse; auxiliar de futuro/pasiva",
        "en": "become; future/passive auxiliary",
        "lemma": "werden"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "das Gespräch",
        "es": "conversación",
        "en": "conversation",
        "lemma": "Gespräch"
      },
      {
        "de": "über",
        "es": "sobre; acerca de",
        "en": "over; about",
        "lemma": "über"
      },
      {
        "de": "die Zugverbindung",
        "es": "conexión ferroviaria",
        "en": "rail connection",
        "lemma": "Zugverbindung"
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Aussage",
        "es": "afirmación; enunciado",
        "en": "statement",
        "lemma": "Aussage"
      },
      {
        "de": "bedeuten",
        "es": "significar",
        "en": "mean",
        "lemma": "bedeuten"
      },
      {
        "de": "dass",
        "es": "que; contenido, subordinada",
        "en": "that; content, subordinate clause",
        "lemma": "dass"
      },
      {
        "de": "die Person",
        "es": "persona",
        "en": "person",
        "lemma": "Person"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "der Fahrplan",
        "es": "horario de transporte",
        "en": "timetable",
        "lemma": "Fahrplan"
      },
      {
        "de": "prüfen",
        "es": "comprobar; examinar",
        "en": "check; examine",
        "lemma": "prüfen"
      },
      {
        "de": "haben",
        "es": "tener; auxiliar de perfecto",
        "en": "have; perfect auxiliary",
        "lemma": "haben"
      },
      {
        "de": "der Streit",
        "es": "discusión; disputa",
        "en": "dispute",
        "lemma": "Streit"
      },
      {
        "de": "derselbe",
        "es": "el/la mismo/a; los mismos",
        "en": "the same",
        "lemma": "derselbe"
      },
      {
        "de": "die Formulierung",
        "es": "formulación",
        "en": "formulation",
        "lemma": "Formulierung"
      },
      {
        "de": "dagegen",
        "es": "en cambio",
        "en": "in contrast",
        "lemma": "dagegen"
      },
      {
        "de": "die Ungeduld",
        "es": "impaciencia",
        "en": "impatience",
        "lemma": "Ungeduld"
      },
      {
        "de": "ausdrücken",
        "es": "expresar",
        "en": "express",
        "lemma": "ausdrücken"
      },
      {
        "de": "bleiben",
        "es": "permanecer; quedarse",
        "en": "remain; stay",
        "lemma": "bleiben"
      },
      {
        "de": "gleich",
        "es": "igual",
        "en": "same; equal",
        "lemma": "gleich"
      },
      {
        "de": "ihre",
        "es": "su de ella/ellos; posesivo",
        "en": "her/their; possessive",
        "lemma": "ihr"
      },
      {
        "de": "die Aufgabe",
        "es": "tarea; función",
        "en": "task; function",
        "lemma": "Aufgabe"
      },
      {
        "de": "im",
        "es": "en el: in dem",
        "en": "in the: in dem",
        "lemma": "im"
      },
      {
        "de": "sich",
        "es": "se; reflexivo de tercera persona",
        "en": "third-person reflexive",
        "lemma": "sich"
      },
      {
        "de": "jedoch",
        "es": "sin embargo",
        "en": "however",
        "lemma": "jedoch"
      },
      {
        "de": "ändern",
        "es": "cambiar",
        "en": "change",
        "lemma": "ändern"
      },
      {
        "de": "didaktisch",
        "es": "didáctico",
        "en": "didactic; instructional",
        "lemma": "didaktisch"
      },
      {
        "de": "die Überlegung",
        "es": "reflexión; consideración",
        "en": "reflection; consideration",
        "lemma": "Überlegung"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "von",
        "es": "de; por + Dat",
        "en": "of; by + Dat",
        "lemma": "von"
      },
      {
        "de": "Wittgensteins",
        "es": "Wittgenstein; filósofo, nombre propio",
        "en": "Wittgenstein; philosopher, proper name",
        "lemma": "Wittgenstein",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "die Aufmerksamkeit",
        "es": "atención",
        "en": "attention",
        "lemma": "Aufmerksamkeit"
      },
      {
        "de": "für",
        "es": "para + Akk",
        "en": "for + Akk",
        "lemma": "für"
      },
      {
        "de": "der Sprachgebrauch",
        "es": "uso del lenguaje",
        "en": "language use",
        "lemma": "Sprachgebrauch"
      },
      {
        "de": "anregen",
        "es": "inspirar; estimular",
        "en": "inspire; stimulate",
        "lemma": "anregen"
      },
      {
        "de": "Sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "auffordern",
        "es": "invitar/exhortar a hacer algo",
        "en": "call on; urge",
        "lemma": "auffordern"
      },
      {
        "de": "konkret",
        "es": "concreto",
        "en": "concrete",
        "lemma": "konkret"
      },
      {
        "de": "das Beispiel",
        "es": "ejemplo",
        "en": "example",
        "lemma": "Beispiel"
      },
      {
        "de": "zu",
        "es": "a; en; partícula de infinitivo; demasiado según contexto",
        "en": "to; at; infinitive marker; too depending on context",
        "lemma": "zu"
      },
      {
        "de": "untersuchen",
        "es": "investigar; examinar",
        "en": "investigate; examine",
        "lemma": "untersuchen"
      },
      {
        "de": "bevor",
        "es": "antes de que",
        "en": "before",
        "lemma": "bevor"
      },
      {
        "de": "nach",
        "es": "hacia; después de + Dat",
        "en": "to; after + Dat",
        "lemma": "nach"
      },
      {
        "de": "einzig",
        "es": "único",
        "en": "only; sole",
        "lemma": "einzig"
      },
      {
        "de": "die Erklärung",
        "es": "explicación",
        "en": "explanation",
        "lemma": "Erklärung"
      },
      {
        "de": "alle",
        "es": "todo; todos; determinante/pronombre, no agotado",
        "en": "all; everything; determiner/pronoun, not used up",
        "lemma": "all"
      },
      {
        "de": "die Verwendung",
        "es": "uso",
        "en": "use",
        "lemma": "Verwendung"
      },
      {
        "de": "der Ausdruck",
        "es": "expresión",
        "en": "expression",
        "lemma": "Ausdruck"
      },
      {
        "de": "suchen",
        "es": "buscar",
        "en": "look for",
        "lemma": "suchen"
      },
      {
        "de": "behaupten",
        "es": "afirmar; sostener",
        "en": "assert; claim",
        "lemma": "behaupten"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "jeder",
        "es": "cada",
        "en": "each; every",
        "lemma": "jeder"
      },
      {
        "de": "die Bedeutung",
        "es": "significado",
        "en": "meaning",
        "lemma": "Bedeutung"
      },
      {
        "de": "beliebig",
        "es": "arbitrario; a voluntad",
        "en": "arbitrary; at will",
        "lemma": "beliebig"
      },
      {
        "de": "oder",
        "es": "o",
        "en": "or",
        "lemma": "oder"
      },
      {
        "de": "die Regel",
        "es": "regla",
        "en": "rule",
        "lemma": "Regel"
      },
      {
        "de": "unwichtig",
        "es": "sin importancia",
        "en": "unimportant",
        "lemma": "unwichtig"
      }
    ]
  },
  "reading-c1-1": {
    "minUnit": "unit-14",
    "grammarIds": [
      "genitive",
      "noun-declension",
      "adjective-endings",
      "participles",
      "subordinate"
    ],
    "intro": {
      "es": "Cita histórica breve con comentario original: genitivo débil des Menschen y atributo verschuldeten. La complejidad conceptual no mide la longitud.",
      "en": "Short historical quotation with original commentary: weak genitive des Menschen and modifier verschuldeten. Conceptual complexity is not measured by length."
    },
    "teachingGlossary": [
      {
        "de": "die Aufklärung",
        "es": "Ilustración; emancipación intelectual en Kant",
        "en": "Enlightenment; intellectual emancipation in Kant",
        "lemma": "Aufklärung"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "der Ausgang",
        "es": "salida",
        "en": "exit; emergence",
        "lemma": "Ausgang"
      },
      {
        "de": "der Mensch",
        "es": "ser humano; aquí genitivo débil des Menschen",
        "en": "human being; here weak genitive des Menschen",
        "lemma": "Mensch"
      },
      {
        "de": "aus",
        "es": "de; desde dentro + Dat",
        "en": "from; out of + Dat",
        "lemma": "aus"
      },
      {
        "de": "seiner",
        "es": "su de él/ello; posesivo, no forma verbal",
        "en": "his/its; possessive, not a verb form",
        "lemma": "sein"
      },
      {
        "de": "selbst",
        "es": "mismo; incluso",
        "en": "self; even",
        "lemma": "selbst"
      },
      {
        "de": "verschuldet",
        "es": "debido a la propia responsabilidad",
        "en": "self-incurred",
        "lemma": "verschuldet"
      },
      {
        "de": "die Unmündigkeit",
        "es": "minoría de edad; aquí falta de autonomía intelectual",
        "en": "immaturity; here lack of intellectual autonomy",
        "lemma": "Unmündigkeit"
      },
      {
        "de": "didaktisch",
        "es": "didáctico",
        "en": "didactic; instructional",
        "lemma": "didaktisch"
      },
      {
        "de": "der Kommentar",
        "es": "comentario",
        "en": "commentary",
        "lemma": "Kommentar"
      },
      {
        "de": "der Originaltext",
        "es": "texto original",
        "en": "original text",
        "lemma": "Originaltext"
      },
      {
        "de": "der Satz",
        "es": "oración; proposición",
        "en": "sentence; proposition",
        "lemma": "Satz"
      },
      {
        "de": "grammatisch",
        "es": "gramatical; gramaticalmente",
        "en": "grammatical; grammatically",
        "lemma": "grammatisch"
      },
      {
        "de": "kurz",
        "es": "breve; corto",
        "en": "short",
        "lemma": "kurz"
      },
      {
        "de": "enthalten",
        "es": "contener",
        "en": "contain",
        "lemma": "enthalten"
      },
      {
        "de": "aber",
        "es": "pero",
        "en": "but",
        "lemma": "aber"
      },
      {
        "de": "mehrere",
        "es": "varios",
        "en": "several",
        "lemma": "mehrere"
      },
      {
        "de": "abstrakt",
        "es": "abstracto",
        "en": "abstract",
        "lemma": "abstrakt"
      },
      {
        "de": "der Begriff",
        "es": "concepto; término",
        "en": "concept; term",
        "lemma": "Begriff"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "der Genitiv",
        "es": "genitivo: caso de relación nominal",
        "en": "genitive: nominal relationship case",
        "lemma": "Genitiv"
      },
      {
        "de": "zu",
        "es": "a; en; partícula de infinitivo; demasiado según contexto",
        "en": "to; at; infinitive marker; too depending on context",
        "lemma": "zu"
      },
      {
        "de": "gehören",
        "es": "pertenecer; corresponder",
        "en": "belong",
        "lemma": "gehören"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Präposition",
        "es": "preposición",
        "en": "preposition",
        "lemma": "Präposition"
      },
      {
        "de": "verlangen",
        "es": "exigir",
        "en": "require",
        "lemma": "verlangen"
      },
      {
        "de": "der Dativ",
        "es": "dativo: caso regido por aus aquí",
        "en": "dative: case governed by aus here",
        "lemma": "Dativ"
      },
      {
        "de": "bezeichnen",
        "es": "designar",
        "en": "designate",
        "lemma": "bezeichnen"
      },
      {
        "de": "hier",
        "es": "aquí",
        "en": "here",
        "lemma": "hier"
      },
      {
        "de": "zurechnen",
        "es": "atribuir; imputar",
        "en": "attribute; impute",
        "lemma": "zurechnen"
      },
      {
        "de": "die Verantwortung",
        "es": "responsabilidad",
        "en": "responsibility",
        "lemma": "Verantwortung"
      },
      {
        "de": "während",
        "es": "mientras; durante + genitivo",
        "en": "while; during + genitive",
        "lemma": "während"
      },
      {
        "de": "kein",
        "es": "ningún; no un; negación nominal",
        "en": "no; not a; nominal negation",
        "lemma": "kein"
      },
      {
        "de": "bloß",
        "es": "mero",
        "en": "mere",
        "lemma": "bloß"
      },
      {
        "de": "die Angabe",
        "es": "indicación; dato",
        "en": "specification; detail",
        "lemma": "Angabe"
      },
      {
        "de": "das Lebensalter",
        "es": "edad cronológica",
        "en": "chronological age",
        "lemma": "Lebensalter"
      }
    ]
  },
  "reading-c1-2": {
    "minUnit": "unit-14",
    "grammarIds": [
      "participles",
      "adjective-endings",
      "noun-declension",
      "relative",
      "reflexive"
    ],
    "intro": {
      "es": "U14 enseña sustantivación y atributo participial ampliado; convierte el grupo en relativa antes de interpretar.",
      "en": "U14 teaches nominalisation and expanded participial modifiers; convert the phrase to a relative clause before interpreting."
    },
    "teachingGlossary": [
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "das Wahre",
        "es": "lo verdadero; adjetivo sustantivado",
        "en": "the true; nominalised adjective",
        "lemma": "Wahre"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "das Ganze",
        "es": "el todo; totalidad",
        "en": "the whole",
        "lemma": "Ganze"
      },
      {
        "de": "aber",
        "es": "pero",
        "en": "but",
        "lemma": "aber"
      },
      {
        "de": "nur",
        "es": "solo; solamente",
        "en": "only",
        "lemma": "nur"
      },
      {
        "de": "durch",
        "es": "por; a través de; mediante + Akk",
        "en": "through; by means of + Akk",
        "lemma": "durch"
      },
      {
        "de": "seine",
        "es": "su de él/ello; posesivo, no forma verbal",
        "en": "his/its; possessive, not a verb form",
        "lemma": "sein"
      },
      {
        "de": "die Entwicklung",
        "es": "desarrollo",
        "en": "development",
        "lemma": "Entwicklung"
      },
      {
        "de": "sich",
        "es": "se; reflexivo de tercera persona",
        "en": "third-person reflexive",
        "lemma": "sich"
      },
      {
        "de": "vollenden",
        "es": "completar; sich vollenden realizarse",
        "en": "complete; sich vollenden fulfil itself",
        "lemma": "vollenden"
      },
      {
        "de": "das Wesen",
        "es": "esencia; ser según contexto",
        "en": "essence; being depending on context",
        "lemma": "Wesen"
      },
      {
        "de": "didaktisch",
        "es": "didáctico",
        "en": "didactic; instructional",
        "lemma": "didaktisch"
      },
      {
        "de": "der Kommentar",
        "es": "comentario",
        "en": "commentary",
        "lemma": "Kommentar"
      },
      {
        "de": "der Originaltext",
        "es": "texto original",
        "en": "original text",
        "lemma": "Originaltext"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "substantivieren",
        "es": "sustantivar",
        "en": "nominalise",
        "lemma": "substantivieren"
      },
      {
        "de": "das Adjektiv",
        "es": "adjetivo",
        "en": "adjective",
        "lemma": "Adjektiv"
      },
      {
        "de": "in",
        "es": "en; dentro de; hacia",
        "en": "in; into",
        "lemma": "in"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "zweite",
        "es": "segundo; ordinal declinado",
        "en": "second; declined ordinal",
        "lemma": "zweite"
      },
      {
        "de": "die Aussage",
        "es": "afirmación; enunciado",
        "en": "statement",
        "lemma": "Aussage"
      },
      {
        "de": "stehen",
        "es": "estar de pie; estar situado",
        "en": "stand; be located",
        "lemma": "stehen"
      },
      {
        "de": "vor",
        "es": "delante de; antes de",
        "en": "in front of; before",
        "lemma": "vor"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "erweitern",
        "es": "ampliar",
        "en": "expand",
        "lemma": "erweitern"
      },
      {
        "de": "die Partizipialgruppe",
        "es": "grupo participial",
        "en": "participial phrase",
        "lemma": "Partizipialgruppe"
      },
      {
        "de": "zum",
        "es": "al: zu dem",
        "en": "to the: zu dem",
        "lemma": "zum"
      },
      {
        "de": "das Verständnis",
        "es": "comprensión",
        "en": "understanding",
        "lemma": "Verständnis"
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können"
      },
      {
        "de": "man",
        "es": "uno; sujeto general",
        "en": "one; general subject",
        "lemma": "man"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "der Relativsatz",
        "es": "oración relativa",
        "en": "relative clause",
        "lemma": "Relativsatz"
      },
      {
        "de": "auflösen",
        "es": "descomponer; aquí convertir en otra estructura",
        "en": "break down; here convert into another structure",
        "lemma": "auflösen"
      },
      {
        "de": "dieser",
        "es": "este; declina según caso/género/número",
        "en": "this; declines for case/gender/number",
        "lemma": "dieser"
      },
      {
        "de": "die Umformung",
        "es": "reformulación; transformación",
        "en": "reformulation; transformation",
        "lemma": "Umformung"
      },
      {
        "de": "erleichtern",
        "es": "facilitar",
        "en": "make easier",
        "lemma": "erleichtern"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Syntax",
        "es": "sintaxis",
        "en": "syntax",
        "lemma": "Syntax"
      },
      {
        "de": "ersetzen",
        "es": "sustituir",
        "en": "replace",
        "lemma": "ersetzen"
      },
      {
        "de": "kein",
        "es": "ningún; no un; negación nominal",
        "en": "no; not a; nominal negation",
        "lemma": "kein"
      },
      {
        "de": "die Interpretation",
        "es": "interpretación",
        "en": "interpretation",
        "lemma": "Interpretation"
      },
      {
        "de": "von",
        "es": "de; por + Dat",
        "en": "of; by + Dat",
        "lemma": "von"
      },
      {
        "de": "Hegels",
        "es": "Hegel; filósofo, nombre propio",
        "en": "Hegel; philosopher, proper name",
        "lemma": "Hegel",
        "kind": "proper-name",
        "dictionary": false
      },
      {
        "de": "der Begriff",
        "es": "concepto; término",
        "en": "concept; term",
        "lemma": "Begriff"
      }
    ]
  },
  "reading-c1-3": {
    "minUnit": "unit-17",
    "grammarIds": [
      "subordinate",
      "passive",
      "infinitive",
      "konjunktiv2",
      "genitive",
      "noun-declension",
      "connectors"
    ],
    "intro": {
      "es": "Integra definición de fenómeno, alcance de negación e hipótesis: lässt/ließe sich + infinitivo expresan posibilidad pasiva.",
      "en": "Integrates definition of the phenomenon, negation scope and hypothesis: lässt/ließe sich + infinitive express passive possibility."
    },
    "teachingGlossary": [
      {
        "de": "wer",
        "es": "quién; sujeto",
        "en": "who; subject",
        "lemma": "wer"
      },
      {
        "de": "das Bewusstsein",
        "es": "conciencia",
        "en": "consciousness",
        "lemma": "Bewusstsein"
      },
      {
        "de": "erklären",
        "es": "explicar",
        "en": "explain",
        "lemma": "erklären"
      },
      {
        "de": "wollen",
        "es": "querer",
        "en": "want",
        "lemma": "wollen"
      },
      {
        "de": "müssen",
        "es": "tener que; obligación/inferencia",
        "en": "have to; obligation/inference",
        "lemma": "müssen"
      },
      {
        "de": "zunächst",
        "es": "primero; en primer término",
        "en": "first; initially",
        "lemma": "zunächst"
      },
      {
        "de": "angeben",
        "es": "indicar; especificar",
        "en": "state; specify",
        "lemma": "angeben"
      },
      {
        "de": "welcher",
        "es": "qué/cuál; declina según caso/género/número",
        "en": "which; declines for case/gender/number",
        "lemma": "welcher"
      },
      {
        "de": "das Phänomen",
        "es": "fenómeno",
        "en": "phenomenon",
        "lemma": "Phänomen"
      },
      {
        "de": "erklärungsbedürftig",
        "es": "que requiere explicación",
        "en": "requiring explanation",
        "lemma": "erklärungsbedürftig"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Fähigkeit",
        "es": "capacidad",
        "en": "ability",
        "lemma": "Fähigkeit"
      },
      {
        "de": "die Information",
        "es": "información",
        "en": "information",
        "lemma": "Information"
      },
      {
        "de": "zu",
        "es": "marcador de infinitivo; no es aquí preposición",
        "en": "infinitive marker; not a preposition here",
        "lemma": "zu"
      },
      {
        "de": "berichten",
        "es": "informar; comunicar",
        "en": "report",
        "lemma": "berichten"
      },
      {
        "de": "lassen",
        "es": "dejar; lässt sich + Inf posibilidad de pasiva",
        "en": "let; lässt sich + Inf passive possibility",
        "lemma": "lassen"
      },
      {
        "de": "sich",
        "es": "se; reflexivo de tercera persona",
        "en": "third-person reflexive",
        "lemma": "sich"
      },
      {
        "de": "von",
        "es": "de; por + Dat",
        "en": "of; by + Dat",
        "lemma": "von"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "die Frage",
        "es": "pregunta; cuestión",
        "en": "question",
        "lemma": "Frage"
      },
      {
        "de": "unterscheiden",
        "es": "distinguir",
        "en": "distinguish",
        "lemma": "unterscheiden"
      },
      {
        "de": "ob",
        "es": "si; pregunta indirecta",
        "en": "whether; indirect question",
        "lemma": "ob"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "wie",
        "es": "cómo",
        "en": "how",
        "lemma": "wie"
      },
      {
        "de": "etwas",
        "es": "algo; un poco",
        "en": "something; a little",
        "lemma": "etwas"
      },
      {
        "de": "subjektiv",
        "es": "subjetivo; subjetivamente",
        "en": "subjective; subjectively",
        "lemma": "subjektiv"
      },
      {
        "de": "erleben",
        "es": "experimentar; vivir una experiencia",
        "en": "experience",
        "lemma": "erleben"
      },
      {
        "de": "werden",
        "es": "volverse; auxiliar de futuro/pasiva",
        "en": "become; future/passive auxiliary",
        "lemma": "werden"
      },
      {
        "de": "dieser",
        "es": "este; declina según caso/género/número",
        "en": "this; declines for case/gender/number",
        "lemma": "dieser"
      },
      {
        "de": "die Unterscheidung",
        "es": "distinción",
        "en": "distinction",
        "lemma": "Unterscheidung"
      },
      {
        "de": "festlegen",
        "es": "fijar; determinar",
        "en": "set; determine",
        "lemma": "festlegen"
      },
      {
        "de": "noch",
        "es": "aún; todavía; otro más según contexto",
        "en": "still; yet; another depending on context",
        "lemma": "noch"
      },
      {
        "de": "kein",
        "es": "ningún; no un; negación nominal",
        "en": "no; not a; nominal negation",
        "lemma": "kein"
      },
      {
        "de": "bestimmt",
        "es": "determinado; particular",
        "en": "particular; specific",
        "lemma": "bestimmt"
      },
      {
        "de": "die Theorie",
        "es": "teoría",
        "en": "theory",
        "lemma": "Theorie"
      },
      {
        "de": "sie",
        "es": "ella/ellos según contexto",
        "en": "she/they depending on context",
        "lemma": "sie"
      },
      {
        "de": "verhindern",
        "es": "impedir",
        "en": "prevent",
        "lemma": "verhindern"
      },
      {
        "de": "lediglich",
        "es": "solamente",
        "en": "merely",
        "lemma": "lediglich"
      },
      {
        "de": "dass",
        "es": "que; contenido, subordinada",
        "en": "that; content, subordinate clause",
        "lemma": "dass"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "der Erfolg",
        "es": "éxito; logro",
        "en": "success; achievement",
        "lemma": "Erfolg"
      },
      {
        "de": "auf",
        "es": "sobre; hacia encima; prefijo según contexto",
        "en": "on; onto; prefix depending on context",
        "lemma": "auf"
      },
      {
        "de": "die Erklärungsebene",
        "es": "nivel explicativo",
        "en": "level of explanation",
        "lemma": "Erklärungsebene"
      },
      {
        "de": "vorschnell",
        "es": "precipitadamente",
        "en": "prematurely",
        "lemma": "vorschnell"
      },
      {
        "de": "als",
        "es": "como; en función de (aquí no cuando)",
        "en": "as; in the role of (not when here)",
        "lemma": "als"
      },
      {
        "de": "die Lösung",
        "es": "solución",
        "en": "solution",
        "lemma": "Lösung"
      },
      {
        "de": "anderer",
        "es": "otro; distinto",
        "en": "other; different",
        "lemma": "anderer"
      },
      {
        "de": "ausgeben",
        "es": "ausgeben als presentar como",
        "en": "ausgeben als present as",
        "lemma": "ausgeben"
      },
      {
        "de": "annehmen",
        "es": "suponer; Angenommen supongamos",
        "en": "assume; Angenommen suppose",
        "lemma": "annehmen"
      },
      {
        "de": "das System",
        "es": "sistema",
        "en": "system",
        "lemma": "System"
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können"
      },
      {
        "de": "sämtlich",
        "es": "todos sin excepción",
        "en": "all without exception",
        "lemma": "sämtlich"
      },
      {
        "de": "über",
        "es": "sobre; acerca de",
        "en": "over; about",
        "lemma": "über"
      },
      {
        "de": "seine",
        "es": "su de él/ello; posesivo, no forma verbal",
        "en": "his/its; possessive, not a verb form",
        "lemma": "sein"
      },
      {
        "de": "intern",
        "es": "interno",
        "en": "internal",
        "lemma": "intern"
      },
      {
        "de": "der Zustand",
        "es": "estado",
        "en": "state",
        "lemma": "Zustand"
      },
      {
        "de": "beantworten",
        "es": "responder una pregunta",
        "en": "answer a question",
        "lemma": "beantworten"
      },
      {
        "de": "aus",
        "es": "de; desde dentro + Dat",
        "en": "from; out of + Dat",
        "lemma": "aus"
      },
      {
        "de": "die Leistung",
        "es": "desempeño; logro",
        "en": "performance; achievement",
        "lemma": "Leistung"
      },
      {
        "de": "allein",
        "es": "solo; por sí solo",
        "en": "alone; by itself",
        "lemma": "allein"
      },
      {
        "de": "weder",
        "es": "ni; weder…noch ni…ni",
        "en": "neither; weder…noch neither…nor",
        "lemma": "weder"
      },
      {
        "de": "unmittelbar",
        "es": "directamente; inmediato",
        "en": "directly; immediate",
        "lemma": "unmittelbar"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "das Vorhandensein",
        "es": "presencia; existencia",
        "en": "presence; existence",
        "lemma": "Vorhandensein"
      },
      {
        "de": "das Erleben",
        "es": "experiencia vivida; vivencia",
        "en": "subjective experience",
        "lemma": "Erleben"
      },
      {
        "de": "schließen",
        "es": "cerrar; inferir según contexto",
        "en": "close; infer depending on context",
        "lemma": "schließen"
      },
      {
        "de": "dessen",
        "es": "cuyo; genitivo relativo/demostrativo",
        "en": "whose; relative/demonstrative genitive",
        "lemma": "dessen"
      },
      {
        "de": "das Fehlen",
        "es": "ausencia",
        "en": "absence",
        "lemma": "Fehlen"
      },
      {
        "de": "beweisen",
        "es": "demostrar",
        "en": "prove",
        "lemma": "beweisen"
      },
      {
        "de": "dazu",
        "es": "para ello; además",
        "en": "for this; in addition",
        "lemma": "dazu"
      },
      {
        "de": "zusätzlich",
        "es": "adicional",
        "en": "additional",
        "lemma": "zusätzlich"
      },
      {
        "de": "die Annahme",
        "es": "supuesto",
        "en": "assumption",
        "lemma": "Annahme"
      },
      {
        "de": "erforderlich",
        "es": "necesario; requerido",
        "en": "required",
        "lemma": "erforderlich"
      },
      {
        "de": "der Zusammenhang",
        "es": "relación; contexto",
        "en": "connection; context",
        "lemma": "Zusammenhang"
      },
      {
        "de": "zwischen",
        "es": "entre; Dat ubicación / Akk destino",
        "en": "between; Dat location / Akk destination",
        "lemma": "zwischen"
      },
      {
        "de": "beobachtbar",
        "es": "observable",
        "en": "observable",
        "lemma": "beobachtbar"
      },
      {
        "de": "das Verhalten",
        "es": "conducta; comportamiento",
        "en": "behaviour",
        "lemma": "Verhalten"
      },
      {
        "de": "bestimmen",
        "es": "determinar",
        "en": "determine",
        "lemma": "bestimmen"
      },
      {
        "de": "Gerade",
        "es": "precisamente; adverbio focal",
        "en": "precisely; focus adverb",
        "lemma": "gerade"
      },
      {
        "de": "bilden",
        "es": "formar; constituir",
        "en": "form; constitute",
        "lemma": "bilden"
      },
      {
        "de": "wesentlich",
        "es": "esencial; sustancial",
        "en": "essential; substantial",
        "lemma": "wesentlich"
      },
      {
        "de": "der Teil",
        "es": "parte",
        "en": "part",
        "lemma": "Teil"
      },
      {
        "de": "philosophisch",
        "es": "filosófico",
        "en": "philosophical",
        "lemma": "philosophisch"
      },
      {
        "de": "die Auseinandersetzung",
        "es": "debate; confrontación argumentativa",
        "en": "debate; argumentative dispute",
        "lemma": "Auseinandersetzung"
      }
    ]
  },
  "reading-c1-4": {
    "minUnit": "unit-18",
    "grammarIds": [
      "comparative",
      "genitive",
      "participles",
      "infinitive",
      "konjunktiv2",
      "passive",
      "subordinate"
    ],
    "intro": {
      "es": "U18 enseña je…desto; la lectura integra además atributos participiales, pasiva e hipótesis metodológica.",
      "en": "U18 teaches je…desto; the reading also integrates participial modifiers, passive and methodological hypotheses."
    },
    "teachingGlossary": [
      {
        "de": "die",
        "es": "artículo/relativo femenino o plural",
        "en": "feminine or plural article/relative",
        "lemma": "die"
      },
      {
        "de": "die Anpassung",
        "es": "ajuste; adaptación",
        "en": "fit; adjustment",
        "lemma": "Anpassung"
      },
      {
        "de": "ein",
        "es": "artículo indefinido declinado; no tiene plural",
        "en": "declined indefinite article; no plural",
        "lemma": "ein"
      },
      {
        "de": "das Modell",
        "es": "modelo",
        "en": "model",
        "lemma": "Modell"
      },
      {
        "de": "an",
        "es": "en/junto a; en contacto; prefijo según contexto",
        "en": "at/on; in contact; prefix depending on context",
        "lemma": "an"
      },
      {
        "de": "vorhanden",
        "es": "existente; disponible",
        "en": "existing; available",
        "lemma": "vorhanden"
      },
      {
        "de": "die Daten",
        "es": "datos; plural",
        "en": "data; plural",
        "lemma": "Daten"
      },
      {
        "de": "sein",
        "es": "ser; estar",
        "en": "be",
        "lemma": "sein"
      },
      {
        "de": "von",
        "es": "de; por + Dat",
        "en": "of; by + Dat",
        "lemma": "von"
      },
      {
        "de": "seiner",
        "es": "su de él/ello; posesivo, no forma verbal",
        "en": "his/its; possessive, not a verb form",
        "lemma": "sein"
      },
      {
        "de": "die Bewährung",
        "es": "desempeño al ponerse a prueba",
        "en": "performance when put to the test",
        "lemma": "Bewährung"
      },
      {
        "de": "neu",
        "es": "nuevo",
        "en": "new",
        "lemma": "neu"
      },
      {
        "de": "zu",
        "es": "marcador de infinitivo; no es aquí preposición",
        "en": "infinitive marker; not a preposition here",
        "lemma": "zu"
      },
      {
        "de": "unterscheiden",
        "es": "distinguir",
        "en": "distinguish",
        "lemma": "unterscheiden"
      },
      {
        "de": "je",
        "es": "cuanto (comparación correlativa)",
        "en": "the (correlative comparison)",
        "lemma": "je"
      },
      {
        "de": "flexibel",
        "es": "flexible; flexibler más flexible",
        "en": "flexible; flexibler more flexible",
        "lemma": "flexibel"
      },
      {
        "de": "desto",
        "es": "tanto (comparación correlativa)",
        "en": "the (correlative comparison)",
        "lemma": "desto"
      },
      {
        "de": "leicht",
        "es": "fácil; leichter más fácilmente",
        "en": "easy; leichter more easily",
        "lemma": "leicht"
      },
      {
        "de": "können",
        "es": "poder; saber hacer",
        "en": "can; be able to",
        "lemma": "können"
      },
      {
        "de": "es",
        "es": "ello; referente neutro/sujeto impersonal",
        "en": "it; neuter reference/impersonal subject",
        "lemma": "es"
      },
      {
        "de": "die Besonderheit",
        "es": "particularidad",
        "en": "peculiarity",
        "lemma": "Besonderheit"
      },
      {
        "de": "die Stichprobe",
        "es": "muestra",
        "en": "sample",
        "lemma": "Stichprobe"
      },
      {
        "de": "erfassen",
        "es": "captar; registrar",
        "en": "capture; record",
        "lemma": "erfassen"
      },
      {
        "de": "außerhalb",
        "es": "fuera de + genitivo",
        "en": "outside + genitive",
        "lemma": "außerhalb"
      },
      {
        "de": "dieser",
        "es": "este; declina según caso/género/número",
        "en": "this; declines for case/gender/number",
        "lemma": "dieser"
      },
      {
        "de": "kein",
        "es": "ningún; no un; negación nominal",
        "en": "no; not a; nominal negation",
        "lemma": "kein"
      },
      {
        "de": "verlässlich",
        "es": "fiable",
        "en": "reliable",
        "lemma": "verlässlich"
      },
      {
        "de": "die Bedeutung",
        "es": "significado",
        "en": "meaning",
        "lemma": "Bedeutung"
      },
      {
        "de": "besitzen",
        "es": "poseer",
        "en": "possess",
        "lemma": "besitzen"
      },
      {
        "de": "hoch",
        "es": "alto; elevado",
        "en": "high",
        "lemma": "hoch"
      },
      {
        "de": "die Anpassungsgüte",
        "es": "calidad de ajuste",
        "en": "goodness of fit",
        "lemma": "Anpassungsgüte"
      },
      {
        "de": "darstellen",
        "es": "representar; constituir",
        "en": "represent; constitute",
        "lemma": "darstellen"
      },
      {
        "de": "daher",
        "es": "por ello",
        "en": "therefore",
        "lemma": "daher"
      },
      {
        "de": "für",
        "es": "para + Akk",
        "en": "for + Akk",
        "lemma": "für"
      },
      {
        "de": "sich",
        "es": "se; reflexivo de tercera persona",
        "en": "third-person reflexive",
        "lemma": "sich"
      },
      {
        "de": "nehmen",
        "es": "tomar; aquí comprar/llevarse",
        "en": "take; here buy/take it",
        "lemma": "nehmen"
      },
      {
        "de": "noch",
        "es": "aún; todavía; otro más según contexto",
        "en": "still; yet; another depending on context",
        "lemma": "noch"
      },
      {
        "de": "hinreichend",
        "es": "suficiente",
        "en": "sufficient",
        "lemma": "hinreichend"
      },
      {
        "de": "der Beleg",
        "es": "prueba; evidencia documental/empírica",
        "en": "evidence; supporting instance",
        "lemma": "Beleg"
      },
      {
        "de": "die Tragfähigkeit",
        "es": "solidez; capacidad de sostener una conclusión",
        "en": "soundness; capacity to support a conclusion",
        "lemma": "Tragfähigkeit"
      },
      {
        "de": "der",
        "es": "artículo definido/relativo masculino; forma según caso",
        "en": "masculine definite article/relative; form depends on case",
        "lemma": "der"
      },
      {
        "de": "zugrunde",
        "es": "a la base; zugrunde liegen subyacer",
        "en": "underlying; zugrunde liegen underlie",
        "lemma": "zugrunde"
      },
      {
        "de": "liegen",
        "es": "estar tendido/situado",
        "en": "lie; be located",
        "lemma": "liegen"
      },
      {
        "de": "die Annahme",
        "es": "supuesto",
        "en": "assumption",
        "lemma": "Annahme"
      },
      {
        "de": "überzeugend",
        "es": "convincente",
        "en": "convincing",
        "lemma": "überzeugend"
      },
      {
        "de": "die Prüfung",
        "es": "comprobación; contrastación",
        "en": "testing; examination",
        "lemma": "Prüfung"
      },
      {
        "de": "offenlegen",
        "es": "hacer explícito; revelar",
        "en": "disclose; make explicit",
        "lemma": "offenlegen"
      },
      {
        "de": "welcher",
        "es": "qué/cuál; declina según caso/género/número",
        "en": "which; declines for case/gender/number",
        "lemma": "welcher"
      },
      {
        "de": "die Vorhersage",
        "es": "predicción",
        "en": "prediction",
        "lemma": "Vorhersage"
      },
      {
        "de": "vor",
        "es": "delante de; antes de",
        "en": "in front of; before",
        "lemma": "vor"
      },
      {
        "de": "die Auswertung",
        "es": "análisis; evaluación de resultados",
        "en": "analysis; evaluation of results",
        "lemma": "Auswertung"
      },
      {
        "de": "feststehen",
        "es": "estar fijado/establecido",
        "en": "be fixed/established",
        "lemma": "feststehen"
      },
      {
        "de": "die Entscheidung",
        "es": "decisión",
        "en": "decision",
        "lemma": "Entscheidung"
      },
      {
        "de": "erst",
        "es": "solo entonces; recién",
        "en": "only then; only after",
        "lemma": "erst"
      },
      {
        "de": "nach",
        "es": "hacia; después de + Dat",
        "en": "to; after + Dat",
        "lemma": "nach"
      },
      {
        "de": "die Sichtung",
        "es": "examen; revisión inicial",
        "en": "inspection; initial review",
        "lemma": "Sichtung"
      },
      {
        "de": "das Ergebnis",
        "es": "resultado",
        "en": "result",
        "lemma": "Ergebnis"
      },
      {
        "de": "treffen",
        "es": "encontrarse con",
        "en": "meet",
        "lemma": "treffen"
      },
      {
        "de": "werden",
        "es": "volverse; auxiliar de futuro/pasiva",
        "en": "become; future/passive auxiliary",
        "lemma": "werden"
      },
      {
        "de": "und",
        "es": "y",
        "en": "and",
        "lemma": "und"
      },
      {
        "de": "unter",
        "es": "debajo de; bajo; Dat ubicación/Akk destino",
        "en": "under; Dat location/Akk destination",
        "lemma": "unter"
      },
      {
        "de": "die Bedingung",
        "es": "condición",
        "en": "condition",
        "lemma": "Bedingung"
      },
      {
        "de": "das",
        "es": "artículo/relativo neutro",
        "en": "neuter article/relative",
        "lemma": "das"
      },
      {
        "de": "scheitern",
        "es": "fracasar",
        "en": "fail",
        "lemma": "scheitern"
      },
      {
        "de": "würde",
        "es": "auxiliar Konjunktiv II: würde + infinitivo",
        "en": "Konjunktiv II auxiliary: würde + infinitive",
        "lemma": "würde"
      },
      {
        "de": "die Unsicherheit",
        "es": "incertidumbre",
        "en": "uncertainty",
        "lemma": "Unsicherheit"
      },
      {
        "de": "präzise",
        "es": "preciso; con precisión",
        "en": "precise; precisely",
        "lemma": "präzise"
      },
      {
        "de": "ausweisen",
        "es": "indicar; explicitar",
        "en": "indicate; state explicitly",
        "lemma": "ausweisen"
      },
      {
        "de": "bedeuten",
        "es": "significar",
        "en": "mean",
        "lemma": "bedeuten"
      },
      {
        "de": "dabei",
        "es": "al hacerlo; en ese contexto",
        "en": "in doing so; in that context",
        "lemma": "dabei"
      },
      {
        "de": "nicht",
        "es": "no (negación)",
        "en": "not",
        "lemma": "nicht"
      },
      {
        "de": "auf",
        "es": "sobre; hacia encima; prefijo según contexto",
        "en": "on; onto; prefix depending on context",
        "lemma": "auf"
      },
      {
        "de": "die Erkenntnis",
        "es": "conocimiento; comprensión",
        "en": "knowledge; understanding",
        "lemma": "Erkenntnis"
      },
      {
        "de": "verzichten",
        "es": "renunciar; verzichten auf + Akk",
        "en": "forgo; verzichten auf + Akk",
        "lemma": "verzichten"
      },
      {
        "de": "vielmehr",
        "es": "más bien",
        "en": "rather",
        "lemma": "vielmehr"
      },
      {
        "de": "machen",
        "es": "hacer",
        "en": "do; make",
        "lemma": "machen"
      },
      {
        "de": "sichtbar",
        "es": "visible",
        "en": "visible",
        "lemma": "sichtbar"
      },
      {
        "de": "wie",
        "es": "cómo",
        "en": "how",
        "lemma": "wie"
      },
      {
        "de": "weit",
        "es": "lejos; hasta dónde según uso",
        "en": "far; how far depending on use",
        "lemma": "weit"
      },
      {
        "de": "die Schlussfolgerung",
        "es": "conclusión; inferencia",
        "en": "conclusion; inference",
        "lemma": "Schlussfolgerung"
      },
      {
        "de": "durch",
        "es": "por; a través de; mediante + Akk",
        "en": "through; by means of + Akk",
        "lemma": "durch"
      },
      {
        "de": "vorliegend",
        "es": "disponible; presente",
        "en": "available; at hand",
        "lemma": "vorliegend"
      },
      {
        "de": "der Befund",
        "es": "hallazgo; resultado observado",
        "en": "finding; observed result",
        "lemma": "Befund"
      },
      {
        "de": "tragen",
        "es": "llevar; aquí respaldar/sostener",
        "en": "carry; here support",
        "lemma": "tragen"
      },
      {
        "de": "die Stelle",
        "es": "punto; lugar",
        "en": "point; place",
        "lemma": "Stelle"
      },
      {
        "de": "weiter",
        "es": "adicional; ulterior",
        "en": "further; additional",
        "lemma": "weiter"
      },
      {
        "de": "die Untersuchung",
        "es": "investigación",
        "en": "investigation",
        "lemma": "Untersuchung"
      },
      {
        "de": "erforderlich",
        "es": "necesario; requerido",
        "en": "required",
        "lemma": "erforderlich"
      },
      {
        "de": "bleiben",
        "es": "permanecer; quedarse",
        "en": "remain; stay",
        "lemma": "bleiben"
      }
    ]
  }
};
window.DeutschData.readingLemmas = {
  "reading-a1-1": {
    "ich": "pron-ich",
    "heiße": "verb-heissen",
    "gabriel": "Gabriel",
    "komme": "verb-kommen",
    "aus": "prep-aus",
    "chile": "Chile",
    "und": "conj-und",
    "wohne": "verb-wohnen",
    "in": "prep-in",
    "santiago": "Santiago",
    "spreche": "verb-sprechen",
    "spanisch": "Spanisch",
    "englisch": "Englisch",
    "jetzt": "adv-jetzt",
    "lerne": "verb-lernen",
    "deutsch": "Deutsch",
    "lese": "verb-lesen",
    "gern": "gern",
    "heute": "adv-heute",
    "einen": "ein",
    "kurzen": "adj-kurz",
    "text": "noun-text",
    "der": "der",
    "ist": "verb-sein",
    "einfach": "adj-einfach",
    "verstehe": "verb-verstehen",
    "viele": "viel",
    "wörter": "noun-wort"
  },
  "reading-a1-2": {
    "es": "pron-es",
    "ist": "verb-sein",
    "sieben": "sieben",
    "uhr": "noun-uhr",
    "anna": "Anna",
    "zu": "prep-zu",
    "hause": "noun-haus",
    "sie": "pron-sie-singular",
    "trinkt": "verb-trinken",
    "wasser": "noun-wasser",
    "und": "conj-und",
    "isst": "verb-essen",
    "brot": "noun-brot",
    "ihr": "reading-possessive-ihr",
    "kaffee": "noun-kaffee",
    "warm": "warm",
    "um": "prep-um",
    "acht": "acht",
    "geht": "verb-gehen",
    "zur": "zur",
    "arbeit": "noun-arbeit",
    "die": "die",
    "beginnt": "beginnen",
    "neun": "neun",
    "heute": "adv-heute",
    "hat": "verb-haben",
    "viel": "viel",
    "zeit": "noun-zeit"
  },
  "reading-a1-3": {
    "mein": "pron-mein",
    "zimmer": "noun-zimmer",
    "ist": "verb-sein",
    "klein": "adj-klein",
    "es": "pron-es",
    "hat": "verb-haben",
    "einen": "ein",
    "tisch": "noun-tisch",
    "zwei": "zwei",
    "stühle": "noun-stuhl",
    "und": "conj-und",
    "ein": "ein",
    "bett": "Bett",
    "auf": "prep-auf",
    "dem": "der",
    "liegt": "verb-liegen",
    "buch": "noun-buch",
    "neben": "prep-neben",
    "stift": "Stift",
    "ich": "pron-ich",
    "sitze": "sitzen",
    "einem": "ein",
    "stuhl": "noun-stuhl",
    "das": "das",
    "fenster": "Fenster",
    "offen": "offen",
    "höre": "verb-hoeren",
    "zug": "noun-zug",
    "der": "der",
    "bahnhof": "noun-bahnhof",
    "nicht": "particle-nicht",
    "weit": "weit"
  },
  "reading-a1-4": {
    "ich": "pron-ich",
    "lese": "verb-lesen",
    "ein": "ein",
    "buch": "noun-buch",
    "das": "das",
    "hat": "verb-haben",
    "viele": "viel",
    "fragen": "noun-frage",
    "eine": "ein",
    "frage": "noun-frage",
    "ist": "verb-sein",
    "was": "pron-was",
    "wahr": "adj-wahr",
    "kenne": "verb-kennen",
    "die": "die",
    "antwort": "noun-antwort",
    "nicht": "particle-nicht",
    "mein": "pron-mein",
    "freund": "noun-freund",
    "liest": "verb-lesen",
    "auch": "particle-auch",
    "wir": "pron-wir",
    "sprechen": "verb-sprechen",
    "über": "prep-ueber",
    "er": "pron-er",
    "idee": "Idee",
    "und": "conj-und",
    "habe": "verb-haben",
    "beispiel": "noun-beispiel",
    "denken": "verb-denken",
    "zusammen": "zusammen"
  },
  "reading-a2-1": {
    "gestern": "adv-gestern",
    "bin": "verb-sein",
    "ich": "pron-ich",
    "mit": "prep-mit",
    "dem": "der",
    "zug": "noun-zug",
    "nach": "prep-nach",
    "berlin": "Berlin",
    "gefahren": "verb-fahren",
    "um": "prep-um",
    "zehn": "zehn",
    "uhr": "noun-uhr",
    "angekommen": "verb-ankommen",
    "am": "am",
    "bahnhof": "noun-bahnhof",
    "habe": "verb-haben",
    "meine": "pron-mein",
    "freundin": "noun-freundin",
    "getroffen": "treffen",
    "wir": "pron-wir",
    "sind": "verb-sein",
    "zuerst": "zuerst",
    "in": "prep-in",
    "ein": "ein",
    "café": "Café",
    "gegangen": "verb-gehen",
    "danach": "danach",
    "haben": "verb-haben",
    "museum": "Museum",
    "besucht": "besuchen",
    "viel": "viel",
    "gelernt": "verb-lernen",
    "aber": "conj-aber",
    "nicht": "particle-nicht",
    "alles": "reading-determiner-all",
    "verstanden": "verb-verstehen",
    "abend": "Abend",
    "war": "verb-sein",
    "müde": "adj-muede",
    "deshalb": "adv-deshalb",
    "früh": "früh",
    "hause": "noun-haus"
  },
  "reading-a2-2": {
    "guten": "adj-gut",
    "tag": "noun-tag",
    "ich": "pron-ich",
    "suche": "suchen",
    "ein": "ein",
    "buch": "noun-buch",
    "für": "prep-fuer",
    "einen": "ein",
    "freund": "noun-freund",
    "er": "pron-er",
    "lernt": "verb-lernen",
    "deutsch": "Deutsch",
    "welche": "welcher",
    "texte": "noun-text",
    "liest": "verb-lesen",
    "gern": "gern",
    "mag": "verb-moegen",
    "kurze": "adj-kurz",
    "geschichten": "Geschichte",
    "und": "conj-und",
    "philosophie": "Philosophie",
    "das": "das",
    "darf": "verb-duerfen",
    "nicht": "particle-nicht",
    "zu": "reading-adverb-zu",
    "schwierig": "adj-schwierig",
    "sein": "verb-sein",
    "dieses": "pron-dieser",
    "hat": "verb-haben",
    "einfache": "adj-einfach",
    "jede": "pron-jeder",
    "geschichte": "Geschichte",
    "eine": "ein",
    "übersetzung": "Übersetzung",
    "ist": "verb-sein",
    "gut": "adj-gut",
    "wie": "wie",
    "viel": "viel",
    "kostet": "kosten",
    "es": "pron-es",
    "zwölf": "zwölf",
    "euro": "Euro",
    "dann": "dann",
    "nehme": "verb-nehmen",
    "vielen": "viel",
    "dank": "Dank"
  },
  "reading-a2-3": {
    "ich": "pron-ich",
    "lerne": "verb-lernen",
    "deutsch": "Deutsch",
    "weil": "conj-weil",
    "deutsche": "deutsch",
    "bücher": "noun-buch",
    "lesen": "verb-lesen",
    "möchte": "verb-moegen",
    "englisch": "Englisch",
    "hilft": "verb-helfen",
    "mir": "pron-ich",
    "manchmal": "adv-manchmal",
    "haus": "noun-haus",
    "und": "conj-und",
    "house": "house",
    "sind": "verb-sein",
    "ähnlich": "ähnlich",
    "aber": "conj-aber",
    "muss": "verb-muessen",
    "auch": "particle-auch",
    "die": "die",
    "unterschiede": "Unterschied",
    "lernen": "verb-lernen",
    "jedes": "pron-jeder",
    "nomen": "Nomen",
    "mit": "prep-mit",
    "dem": "der",
    "artikel": "Artikel",
    "plural": "Plural",
    "jeden": "pron-jeder",
    "tag": "noun-tag",
    "wiederhole": "wiederholen",
    "einige": "einige",
    "wörter": "noun-wort",
    "wenn": "conj-wenn",
    "einen": "ein",
    "fehler": "Fehler",
    "mache": "verb-machen",
    "suche": "suchen",
    "ein": "ein",
    "neues": "adj-neu",
    "beispiel": "noun-beispiel",
    "so": "so",
    "verstehe": "verb-verstehen",
    "regel": "noun-regel",
    "besser": "adj-gut"
  },
  "reading-a2-4": {
    "auf": "prep-auf",
    "meinem": "pron-mein",
    "tisch": "noun-tisch",
    "stehen": "stehen",
    "zwei": "zwei",
    "tassen": "Tasse",
    "eine": "ein",
    "tasse": "Tasse",
    "ist": "verb-sein",
    "weiß": "weiß",
    "die": "die",
    "andere": "anderer",
    "blau": "blau",
    "ich": "pron-ich",
    "sehe": "verb-sehen",
    "sie": "pron-sie-plural",
    "bei": "prep-bei",
    "tageslicht": "Tageslicht",
    "am": "am",
    "abend": "Abend",
    "sehen": "aussehen",
    "farben": "Farbe",
    "anders": "anders",
    "aus": "aussehen",
    "weil": "conj-weil",
    "lampe": "Lampe",
    "ein": "ein",
    "warmes": "warm",
    "licht": "Licht",
    "hat": "verb-haben",
    "sind": "verb-sein",
    "geworden": "verb-werden",
    "nein": "nein",
    "nur": "particle-nur",
    "das": "das",
    "meine": "pron-mein",
    "beobachtung": "Beobachtung",
    "hängt": "abhängen",
    "also": "also",
    "auch": "particle-auch",
    "von": "prep-von",
    "der": "der",
    "umgebung": "Umgebung",
    "ab": "abhängen",
    "muss": "verb-muessen",
    "genau": "genau",
    "beschreiben": "beschreiben",
    "wann": "wann",
    "und": "conj-und",
    "wo": "wo",
    "etwas": "pron-etwas"
  },
  "reading-b1-1": {
    "sehr": "sehr",
    "geehrte": "geehrt",
    "frau": "noun-frau",
    "weber": "Weber",
    "seit": "prep-seit",
    "drei": "drei",
    "tagen": "noun-tag",
    "funktioniert": "funktionieren",
    "die": "die",
    "heizung": "Heizung",
    "in": "prep-in",
    "meiner": "pron-mein",
    "wohnung": "noun-wohnung",
    "nicht": "particle-nicht",
    "richtig": "adj-richtig",
    "obwohl": "conj-obwohl",
    "ich": "pron-ich",
    "sie": "pron-sie-singular",
    "eingeschaltet": "einschalten",
    "habe": "verb-haben",
    "bleibt": "verb-bleiben",
    "das": "das",
    "wohnzimmer": "Wohnzimmer",
    "kalt": "kalt",
    "bereits": "adv-bereits",
    "geprüft": "verb-pruefen",
    "ob": "conj-ob",
    "fenster": "Fenster",
    "geschlossen": "schließen",
    "sind": "verb-sein",
    "könnten": "verb-koennen",
    "bitte": "particle-bitte",
    "jemanden": "pron-jemand",
    "schicken": "schicken",
    "der": "der",
    "sich": "pron-sich",
    "ansieht": "ansehen",
    "am": "am",
    "mittwoch": "Mittwoch",
    "bin": "verb-sein",
    "ab": "dict-bbce57da9492c437",
    "vierzehn": "vierzehn",
    "uhr": "noun-uhr",
    "zu": "prep-zu",
    "hause": "noun-haus",
    "falls": "falls",
    "dieser": "pron-dieser",
    "termin": "Termin",
    "möglich": "adj-moeglich",
    "ist": "verb-sein",
    "rufen": "verb-anrufen",
    "mich": "pron-ich",
    "an": "verb-anrufen",
    "vielen": "viel",
    "dank": "Dank",
    "für": "prep-fuer",
    "ihre": "reading-possessive-Ihr",
    "hilfe": "Hilfe",
    "mit": "prep-mit",
    "freundlichen": "freundlich",
    "grüßen": "Gruß",
    "daniel": "Daniel",
    "rojas": "Rojas"
  },
  "reading-b1-2": {
    "eine": "ein",
    "studentin": "Studentin",
    "wollte": "verb-wollen",
    "wissen": "verb-wissen",
    "ob": "conj-ob",
    "musik": "Musik",
    "beim": "beim",
    "lernen": "dict-4b2c91818fa849c5",
    "hilft": "verb-helfen",
    "sie": "pron-sie-singular",
    "lernte": "verb-lernen",
    "am": "am",
    "montag": "Montag",
    "mit": "prep-mit",
    "und": "conj-und",
    "dienstag": "Dienstag",
    "ohne": "prep-ohne",
    "mittwoch": "Mittwoch",
    "machte": "verb-machen",
    "einen": "ein",
    "test": "Test",
    "an": "prep-an",
    "die": "die",
    "wörter": "noun-wort",
    "vom": "vom",
    "konnte": "verb-koennen",
    "sich": "pron-sich",
    "besser": "adj-gut",
    "erinnern": "verb-erinnern",
    "zuerst": "zuerst",
    "dachte": "verb-denken",
    "dass": "conj-dass",
    "ursache": "Ursache",
    "war": "verb-sein",
    "dann": "dann",
    "bemerkte": "verb-bemerken",
    "aber": "conj-aber",
    "viel": "viel",
    "einfacher": "adj-einfach",
    "waren": "verb-sein",
    "also": "also",
    "noch": "noch",
    "keine": "particle-kein",
    "sichere": "sicher",
    "schlussfolgerung": "Schlussfolgerung",
    "ziehen": "ziehen",
    "für": "prep-fuer",
    "besseren": "adj-gut",
    "vergleich": "Vergleich",
    "müsste": "verb-muessen",
    "ähnlich": "ähnlich",
    "schwierige": "adj-schwierig",
    "verwenden": "verwenden"
  },
  "reading-b1-3": {
    "zwei": "zwei",
    "freunde": "noun-freund",
    "diskutieren": "diskutieren",
    "welches": "welcher",
    "buch": "noun-buch",
    "sie": "pron-sie-plural",
    "gemeinsam": "gemeinsam",
    "lesen": "verb-lesen",
    "sollen": "verb-sollen",
    "lea": "Lea",
    "möchte": "verb-moegen",
    "ein": "ein",
    "kurzes": "adj-kurz",
    "wählen": "wählen",
    "weil": "conj-weil",
    "wenig": "wenig",
    "zeit": "noun-zeit",
    "hat": "verb-haben",
    "amir": "Amir",
    "schwierigeres": "adj-schwierig",
    "er": "pron-er",
    "neue": "adj-neu",
    "begriffe": "noun-begriff",
    "lernen": "verb-lernen",
    "will": "verb-wollen",
    "beide": "beide",
    "haben": "verb-haben",
    "gründe": "noun-grund",
    "für": "prep-fuer",
    "ihre": "reading-possessive-ihr",
    "entscheidung": "Entscheidung",
    "unterscheiden": "verb-unterscheiden",
    "zwischen": "prep-zwischen",
    "einem": "ein",
    "persönlichen": "persönlich",
    "wunsch": "Wunsch",
    "und": "conj-und",
    "gemeinsamen": "gemeinsam",
    "ziel": "Ziel",
    "ihr": "reading-possessive-ihr",
    "ist": "verb-sein",
    "jede": "pron-jeder",
    "woche": "noun-woche",
    "über": "prep-ueber",
    "einen": "ein",
    "text": "noun-text",
    "zu": "reading-particle-zu",
    "sprechen": "verb-sprechen",
    "deshalb": "adv-deshalb",
    "mit": "prep-mit",
    "kurzen": "adj-kurz",
    "aber": "conj-aber",
    "anspruchsvollen": "anspruchsvoll",
    "kapiteln": "Kapitel",
    "eine": "ein",
    "gute": "adj-gut",
    "begründung": "Begründung",
    "muss": "verb-muessen",
    "also": "also",
    "berücksichtigen": "berücksichtigen",
    "welche": "welcher",
    "frage": "noun-frage",
    "gerade": "dict-fd5bbc53ff0c5e8e",
    "beantwortet": "beantworten",
    "werden": "verb-werden",
    "soll": "verb-sollen"
  },
  "reading-b1-4": {
    "ich": "pron-ich",
    "bin": "verb-sein",
    "sicher": "sicher",
    "dass": "conj-dass",
    "meinen": "pron-mein",
    "schlüssel": "Schlüssel",
    "auf": "prep-auf",
    "den": "der",
    "tisch": "noun-tisch",
    "gelegt": "legen",
    "habe": "verb-haben",
    "zu": "prep-zu",
    "hause": "noun-haus",
    "liegt": "verb-liegen",
    "er": "pron-er",
    "aber": "conj-aber",
    "nicht": "particle-nicht",
    "dort": "adv-dort",
    "meine": "pron-mein",
    "schwester": "Schwester",
    "sagt": "sagen",
    "ihn": "pron-er",
    "in": "prep-in",
    "die": "die",
    "jackentasche": "Jackentasche",
    "gesteckt": "stecken",
    "zuerst": "zuerst",
    "glaube": "verb-glauben",
    "ihr": "pron-sie-singular",
    "dann": "dann",
    "finde": "verb-finden",
    "tatsächlich": "tatsächlich",
    "meiner": "pron-mein",
    "jacke": "Jacke",
    "erinnerung": "noun-erinnerung",
    "war": "verb-sein",
    "sehr": "sehr",
    "deutlich": "deutlich",
    "sie": "pron-sie-singular",
    "falsch": "adj-falsch",
    "daraus": "daraus",
    "folgt": "folgen",
    "jede": "pron-jeder",
    "ist": "verb-sein",
    "es": "pron-es",
    "zeigt": "zeigen",
    "nur": "particle-nur",
    "ein": "ein",
    "starkes": "stark",
    "gefühl": "Gefühl",
    "von": "prep-von",
    "sicherheit": "Sicherheit",
    "noch": "noch",
    "kein": "particle-kein",
    "beweis": "Beweis"
  },
  "reading-b2-1": {
    "der": "der",
    "stadtrat": "Stadtrat",
    "erwägt": "erwägen",
    "eine": "ein",
    "straße": "Straße",
    "am": "am",
    "wochenende": "Wochenende",
    "für": "prep-fuer",
    "autos": "Auto",
    "zu": "reading-particle-zu",
    "sperren": "sperren",
    "befürworter": "Befürworter",
    "erwarten": "erwarten",
    "weniger": "wenig",
    "lärm": "Lärm",
    "und": "conj-und",
    "mehr": "viel",
    "platz": "Platz",
    "fußgänger": "Fußgänger",
    "einige": "einige",
    "geschäftsinhaber": "Geschäftsinhaber",
    "befürchten": "befürchten",
    "hingegen": "adv-hingegen",
    "dass": "conj-dass",
    "kunden": "Kunde",
    "ihre": "reading-possessive-ihr",
    "geschäfte": "Geschäft",
    "nicht": "particle-nicht",
    "erreichen": "erreichen",
    "könnten": "verb-koennen",
    "beide": "beide",
    "seiten": "Seite",
    "berufen": "berufen",
    "sich": "pron-sich",
    "auf": "prep-auf",
    "erfahrungen": "noun-erfahrung",
    "die": "die",
    "bisher": "bisher",
    "jedoch": "jedoch",
    "systematisch": "systematisch",
    "verglichen": "verb-vergleichen",
    "wurden": "verb-werden",
    "befristete": "befristet",
    "erprobung": "Erprobung",
    "könnte": "verb-koennen",
    "helfen": "verb-helfen",
    "folgen": "Folge",
    "genauer": "genau",
    "beurteilen": "beurteilen",
    "dabei": "dabei",
    "sollten": "verb-sollen",
    "nur": "particle-nur",
    "umsätze": "Umsatz",
    "sondern": "conj-sondern",
    "auch": "particle-auch",
    "zugänglichkeit": "Zugänglichkeit",
    "aufenthaltsqualität": "Aufenthaltsqualität",
    "untersucht": "untersuchen",
    "werden": "verb-werden",
    "selbst": "selbst",
    "wenn": "conj-wenn",
    "durchschnittlichen": "durchschnittlich",
    "unverändert": "unverändert",
    "blieben": "verb-bleiben",
    "wäre": "verb-sein",
    "damit": "reading-adverb-damit",
    "noch": "noch",
    "gezeigt": "zeigen",
    "jedes": "pron-jeder",
    "einzelne": "einzeln",
    "geschäft": "Geschäft",
    "gleichermaßen": "gleichermaßen",
    "betroffen": "betreffen",
    "ist": "verb-sein"
  },
  "reading-b2-2": {
    "ein": "ein",
    "modell": "Modell",
    "kann": "verb-koennen",
    "menschliche": "menschlich",
    "antworten": "noun-antwort",
    "zuverlässig": "adj-zuverlaessig",
    "vorhersagen": "verb-vorhersagen",
    "ohne": "prep-ohne",
    "den": "der",
    "tatsächlichen": "tatsächlich",
    "denkprozess": "Denkprozess",
    "abzubilden": "abbilden",
    "wenn": "conj-wenn",
    "zwei": "zwei",
    "modelle": "Modell",
    "dieselben": "derselbe",
    "ergebnisse": "Ergebnis",
    "liefern": "liefern",
    "folgt": "folgen",
    "daraus": "daraus",
    "nicht": "particle-nicht",
    "dass": "conj-dass",
    "sie": "pron-sie-plural",
    "annahmen": "Annahme",
    "verwenden": "verwenden",
    "für": "prep-fuer",
    "die": "die",
    "beurteilung": "Beurteilung",
    "eines": "ein",
    "kognitiven": "kognitiv",
    "modells": "Modell",
    "ist": "verb-sein",
    "daher": "daher",
    "entscheidend": "entscheidend",
    "welche": "welcher",
    "art": "Art",
    "von": "prep-von",
    "leistung": "Leistung",
    "beansprucht": "beanspruchen",
    "wird": "verb-werden",
    "vorhersage": "Vorhersage",
    "beschreibung": "Beschreibung",
    "oder": "conj-oder",
    "erklärung": "noun-erklaerung",
    "eine": "ein",
    "sollte": "verb-sollen",
    "außerdem": "außerdem",
    "zeigen": "zeigen",
    "unter": "prep-unter",
    "welchen": "welcher",
    "bedingungen": "noun-bedingung",
    "prozess": "Prozess",
    "auftritt": "auftreten",
    "und": "conj-und",
    "weshalb": "weshalb",
    "er": "pron-er",
    "sich": "pron-sich",
    "verändert": "verändern",
    "zusätzliche": "zusätzlich",
    "messungen": "Messung",
    "etwa": "etwa",
    "der": "der",
    "benötigten": "benötigen",
    "zeit": "noun-zeit",
    "können": "verb-koennen",
    "helfen": "verb-helfen",
    "konkurrierende": "konkurrierend",
    "zu": "reading-particle-zu",
    "unterscheiden": "verb-unterscheiden",
    "allerdings": "adv-allerdings",
    "beweist": "beweisen",
    "auch": "particle-auch",
    "gute": "adj-gut",
    "übereinstimmung": "Übereinstimmung",
    "mit": "prep-mit",
    "mehreren": "mehrere",
    "messgrößen": "Messgröße",
    "automatisch": "automatisch",
    "vorgeschlagene": "vorschlagen",
    "mechanismus": "Mechanismus",
    "einzig": "einzig",
    "mögliche": "adj-moeglich"
  },
  "reading-b2-3": {
    "eine": "ein",
    "funktionalistische": "funktionalistisch",
    "auffassung": "Auffassung",
    "beschreibt": "beschreiben",
    "mentale": "mental",
    "zustände": "Zustand",
    "anhand": "anhand",
    "ihrer": "reading-possessive-ihr",
    "beziehungen": "Beziehung",
    "zu": "prep-zu",
    "wahrnehmungen": "noun-wahrnehmung",
    "handlungen": "Handlung",
    "und": "conj-und",
    "anderen": "anderer",
    "mentalen": "mental",
    "zuständen": "Zustand",
    "überzeugung": "Überzeugung",
    "wird": "verb-werden",
    "dann": "dann",
    "nicht": "particle-nicht",
    "allein": "allein",
    "dadurch": "dadurch",
    "bestimmt": "dict-b89dabc8a7caa7a1",
    "woraus": "woraus",
    "ihr": "reading-possessive-ihr",
    "träger": "Träger",
    "besteht": "bestehen",
    "sondern": "conj-sondern",
    "auch": "particle-auch",
    "welche": "welcher",
    "rolle": "Rolle",
    "sie": "pron-sie-singular",
    "in": "prep-in",
    "einem": "ein",
    "größeren": "adj-gross",
    "zusammenhang": "Zusammenhang",
    "spielt": "spielen",
    "das": "das",
    "erlaubt": "erlauben",
    "zumindest": "zumindest",
    "die": "die",
    "frage": "noun-frage",
    "ob": "conj-ob",
    "unterschiedliche": "unterschiedlich",
    "physische": "physisch",
    "systeme": "System",
    "ähnliche": "ähnlich",
    "funktionen": "Funktion",
    "besitzen": "besitzen",
    "könnten": "verb-koennen",
    "damit": "reading-adverb-damit",
    "ist": "verb-sein",
    "jedoch": "jedoch",
    "noch": "noch",
    "geklärt": "klären",
    "beschreibung": "Beschreibung",
    "der": "der",
    "subjektive": "subjektiv",
    "erleben": "Erleben",
    "vollständig": "vollständig",
    "erklärt": "verb-erklaeren",
    "was": "pron-was",
    "ein": "ein",
    "system": "System",
    "leistet": "leisten",
    "wie": "wie",
    "sich": "pron-sich",
    "zustand": "Zustand",
    "für": "prep-fuer",
    "dieses": "pron-dieser",
    "anfühlt": "anfühlen",
    "müssen": "verb-muessen",
    "zunächst": "zunächst",
    "unterschieden": "verb-unterscheiden",
    "werden": "verb-werden",
    "beide": "beide",
    "fragen": "noun-frage",
    "letztlich": "letztlich",
    "dieselbe": "derselbe",
    "antwort": "noun-antwort",
    "erhalten": "dict-0438814afb2f84b7",
    "können": "verb-koennen",
    "bleibt": "verb-bleiben",
    "gegenstand": "Gegenstand",
    "philosophischer": "philosophisch",
    "diskussion": "Diskussion"
  },
  "reading-b2-4": {
    "wenn": "conj-wenn",
    "jemand": "pron-jemand",
    "ich": "pron-ich",
    "weiß": "verb-wissen",
    "es": "pron-es",
    "sagt": "sagen",
    "müssen": "verb-muessen",
    "wir": "pron-wir",
    "fragen": "dict-15497623ef69ba44",
    "in": "prep-in",
    "welcher": "welcher",
    "situation": "Situation",
    "diese": "pron-dieser",
    "worte": "noun-wort",
    "verwendet": "verwenden",
    "werden": "verb-werden",
    "einem": "ein",
    "gespräch": "Gespräch",
    "über": "prep-ueber",
    "eine": "ein",
    "zugverbindung": "Zugverbindung",
    "kann": "verb-koennen",
    "die": "die",
    "aussage": "Aussage",
    "bedeuten": "bedeuten",
    "dass": "conj-dass",
    "person": "Person",
    "den": "der",
    "fahrplan": "Fahrplan",
    "geprüft": "verb-pruefen",
    "hat": "verb-haben",
    "streit": "Streit",
    "dieselbe": "derselbe",
    "formulierung": "Formulierung",
    "dagegen": "dagegen",
    "ungeduld": "Ungeduld",
    "ausdrücken": "ausdrücken",
    "wörter": "noun-wort",
    "bleiben": "verb-bleiben",
    "gleich": "gleich",
    "ihre": "reading-possessive-ihr",
    "aufgabe": "Aufgabe",
    "im": "im",
    "sich": "pron-sich",
    "jedoch": "jedoch",
    "ändern": "ändern",
    "didaktische": "didaktisch",
    "überlegung": "Überlegung",
    "ist": "verb-sein",
    "von": "prep-von",
    "wittgensteins": "Wittgenstein",
    "aufmerksamkeit": "noun-aufmerksamkeit",
    "für": "prep-fuer",
    "sprachgebrauch": "Sprachgebrauch",
    "angeregt": "anregen",
    "sie": "pron-sie-singular",
    "fordert": "auffordern",
    "uns": "pron-wir",
    "auf": "auffordern",
    "konkrete": "konkret",
    "beispiele": "noun-beispiel",
    "zu": "prep-zu",
    "untersuchen": "untersuchen",
    "bevor": "bevor",
    "nach": "prep-nach",
    "einer": "ein",
    "einzigen": "einzig",
    "erklärung": "noun-erklaerung",
    "alle": "reading-determiner-all",
    "verwendungen": "Verwendung",
    "eines": "ein",
    "ausdrucks": "Ausdruck",
    "suchen": "suchen",
    "behauptet": "behaupten",
    "nicht": "particle-nicht",
    "jede": "pron-jeder",
    "bedeutung": "Bedeutung",
    "beliebig": "beliebig",
    "wäre": "verb-sein",
    "oder": "conj-oder",
    "regeln": "noun-regel",
    "unwichtig": "unwichtig",
    "seien": "verb-sein"
  },
  "reading-c1-1": {
    "aufklärung": "Aufklärung",
    "ist": "verb-sein",
    "der": "der",
    "ausgang": "Ausgang",
    "des": "der",
    "menschen": "dict-3183a0b77355cfb1",
    "aus": "prep-aus",
    "seiner": "reading-possessive-sein",
    "selbst": "selbst",
    "verschuldeten": "verschuldet",
    "unmündigkeit": "Unmündigkeit",
    "didaktischer": "didaktisch",
    "kommentar": "Kommentar",
    "originaltext": "Originaltext",
    "satz": "noun-satz",
    "grammatisch": "grammatisch",
    "kurz": "adj-kurz",
    "enthält": "enthalten",
    "aber": "conj-aber",
    "mehrere": "mehrere",
    "abstrakte": "abstrakt",
    "begriffe": "noun-begriff",
    "ein": "ein",
    "genitiv": "Genitiv",
    "zu": "prep-zu",
    "gehört": "gehören",
    "die": "die",
    "präposition": "Präposition",
    "verlangt": "verlangen",
    "den": "der",
    "dativ": "Dativ",
    "verschuldet": "verschuldet",
    "bezeichnet": "bezeichnen",
    "hier": "adv-hier",
    "eine": "ein",
    "dem": "der",
    "zugerechnete": "zurechnen",
    "verantwortung": "Verantwortung",
    "während": "conj-waehrend",
    "keine": "particle-kein",
    "bloße": "bloß",
    "angabe": "Angabe",
    "lebensalters": "Lebensalter"
  },
  "reading-c1-2": {
    "das": "das",
    "wahre": "Wahre",
    "ist": "verb-sein",
    "ganze": "Ganze",
    "aber": "conj-aber",
    "nur": "particle-nur",
    "durch": "prep-durch",
    "seine": "reading-possessive-sein",
    "entwicklung": "Entwicklung",
    "sich": "pron-sich",
    "vollendende": "vollenden",
    "wesen": "Wesen",
    "didaktischer": "didaktisch",
    "kommentar": "Kommentar",
    "originaltext": "Originaltext",
    "und": "conj-und",
    "sind": "verb-sein",
    "substantivierte": "substantivieren",
    "adjektive": "Adjektiv",
    "in": "prep-in",
    "der": "der",
    "zweiten": "zweite",
    "aussage": "Aussage",
    "steht": "stehen",
    "vor": "prep-vor",
    "eine": "ein",
    "erweiterte": "erweitern",
    "partizipialgruppe": "Partizipialgruppe",
    "zum": "zum",
    "verständnis": "Verständnis",
    "kann": "verb-koennen",
    "man": "pron-man",
    "sie": "pron-sie-singular",
    "einen": "ein",
    "relativsatz": "Relativsatz",
    "auflösen": "auflösen",
    "vollendet": "vollenden",
    "diese": "pron-dieser",
    "umformung": "Umformung",
    "erleichtert": "erleichtern",
    "die": "die",
    "syntax": "Syntax",
    "ersetzt": "ersetzen",
    "keine": "particle-kein",
    "interpretation": "Interpretation",
    "von": "prep-von",
    "hegels": "Hegel",
    "begriffen": "noun-begriff"
  },
  "reading-c1-3": {
    "wer": "pron-wer",
    "bewusstsein": "noun-bewusstsein",
    "erklären": "verb-erklaeren",
    "will": "verb-wollen",
    "muss": "verb-muessen",
    "zunächst": "zunächst",
    "angeben": "angeben",
    "welches": "welcher",
    "phänomen": "Phänomen",
    "erklärungsbedürftig": "erklärungsbedürftig",
    "ist": "verb-sein",
    "die": "die",
    "fähigkeit": "Fähigkeit",
    "informationen": "Information",
    "zu": "reading-particle-zu",
    "berichten": "berichten",
    "lässt": "lassen",
    "sich": "pron-sich",
    "von": "prep-von",
    "der": "der",
    "frage": "noun-frage",
    "unterscheiden": "verb-unterscheiden",
    "ob": "conj-ob",
    "und": "conj-und",
    "wie": "wie",
    "etwas": "pron-etwas",
    "subjektiv": "subjektiv",
    "erlebt": "erleben",
    "wird": "verb-werden",
    "diese": "pron-dieser",
    "unterscheidung": "Unterscheidung",
    "legt": "festlegen",
    "noch": "noch",
    "keine": "particle-kein",
    "bestimmte": "bestimmt",
    "theorie": "noun-theorie",
    "fest": "festlegen",
    "sie": "pron-sie-singular",
    "verhindert": "verhindern",
    "lediglich": "lediglich",
    "dass": "conj-dass",
    "ein": "ein",
    "erfolg": "Erfolg",
    "auf": "prep-auf",
    "einen": "ein",
    "erklärungsebene": "Erklärungsebene",
    "vorschnell": "vorschnell",
    "als": "reading-particle-als",
    "lösung": "Lösung",
    "anderen": "anderer",
    "ausgegeben": "ausgeben",
    "angenommen": "annehmen",
    "system": "System",
    "könnte": "verb-koennen",
    "sämtliche": "sämtlich",
    "fragen": "noun-frage",
    "über": "prep-ueber",
    "seine": "reading-possessive-sein",
    "internen": "intern",
    "zustände": "Zustand",
    "beantworten": "beantworten",
    "aus": "prep-aus",
    "dieser": "pron-dieser",
    "leistung": "Leistung",
    "allein": "allein",
    "ließe": "lassen",
    "weder": "weder",
    "unmittelbar": "unmittelbar",
    "das": "das",
    "vorhandensein": "Vorhandensein",
    "subjektiven": "subjektiv",
    "erlebens": "Erleben",
    "schließen": "schließen",
    "dessen": "dessen",
    "fehlen": "Fehlen",
    "beweisen": "beweisen",
    "dazu": "dazu",
    "wären": "verb-sein",
    "zusätzliche": "zusätzlich",
    "annahmen": "Annahme",
    "erforderlich": "erforderlich",
    "den": "der",
    "zusammenhang": "Zusammenhang",
    "zwischen": "prep-zwischen",
    "beobachtbarem": "beobachtbar",
    "verhalten": "noun-verhalten",
    "erleben": "Erleben",
    "bestimmen": "bestimmen",
    "gerade": "dict-fd5bbc53ff0c5e8e",
    "bilden": "bilden",
    "wesentlichen": "adj-wesentlich",
    "teil": "Teil",
    "philosophischen": "philosophisch",
    "auseinandersetzung": "Auseinandersetzung"
  },
  "reading-c1-4": {
    "die": "die",
    "anpassung": "Anpassung",
    "eines": "ein",
    "modells": "Modell",
    "an": "prep-an",
    "vorhandene": "vorhanden",
    "daten": "noun-daten",
    "ist": "verb-sein",
    "von": "prep-von",
    "seiner": "reading-possessive-sein",
    "bewährung": "Bewährung",
    "neuen": "adj-neu",
    "zu": "reading-particle-zu",
    "unterscheiden": "verb-unterscheiden",
    "je": "je",
    "flexibler": "flexibel",
    "ein": "ein",
    "modell": "Modell",
    "desto": "desto",
    "leichter": "leicht",
    "kann": "verb-koennen",
    "es": "pron-es",
    "besonderheiten": "Besonderheit",
    "einer": "ein",
    "stichprobe": "Stichprobe",
    "erfassen": "erfassen",
    "außerhalb": "außerhalb",
    "dieser": "pron-dieser",
    "keine": "particle-kein",
    "verlässliche": "verlässlich",
    "bedeutung": "Bedeutung",
    "besitzen": "besitzen",
    "eine": "ein",
    "hohe": "hoch",
    "anpassungsgüte": "Anpassungsgüte",
    "stellt": "darstellen",
    "daher": "daher",
    "für": "prep-fuer",
    "sich": "pron-sich",
    "genommen": "verb-nehmen",
    "noch": "noch",
    "keinen": "particle-kein",
    "hinreichenden": "hinreichend",
    "beleg": "Beleg",
    "tragfähigkeit": "Tragfähigkeit",
    "der": "der",
    "zugrunde": "zugrunde",
    "liegenden": "verb-liegen",
    "annahmen": "Annahme",
    "dar": "darstellen",
    "überzeugende": "überzeugend",
    "prüfung": "Prüfung",
    "wäre": "verb-sein",
    "offenzulegen": "offenlegen",
    "welche": "welcher",
    "vorhersagen": "Vorhersage",
    "vor": "prep-vor",
    "auswertung": "Auswertung",
    "feststanden": "feststehen",
    "entscheidungen": "Entscheidung",
    "erst": "erst",
    "nach": "prep-nach",
    "sichtung": "Sichtung",
    "ergebnisse": "Ergebnis",
    "getroffen": "treffen",
    "wurden": "verb-werden",
    "und": "conj-und",
    "unter": "prep-unter",
    "welchen": "welcher",
    "bedingungen": "noun-bedingung",
    "das": "das",
    "scheitern": "scheitern",
    "würde": "würde",
    "unsicherheit": "Unsicherheit",
    "präzise": "präzise",
    "auszuweisen": "ausweisen",
    "bedeutet": "bedeuten",
    "dabei": "dabei",
    "nicht": "particle-nicht",
    "auf": "prep-auf",
    "erkenntnis": "noun-erkenntnis",
    "verzichten": "verzichten",
    "vielmehr": "vielmehr",
    "macht": "verb-machen",
    "sichtbar": "sichtbar",
    "wie": "wie",
    "weit": "weit",
    "schlussfolgerung": "Schlussfolgerung",
    "durch": "prep-durch",
    "vorliegenden": "vorliegend",
    "befunde": "Befund",
    "getragen": "tragen",
    "wird": "verb-werden",
    "welcher": "welcher",
    "stelle": "Stelle",
    "weitere": "weiter",
    "untersuchung": "Untersuchung",
    "erforderlich": "erforderlich",
    "bleibt": "verb-bleiben"
  },
  "reading-unit-01": {
    "ich": "pron-ich",
    "heiße": "verb-heissen",
    "gabriel": "Gabriel",
    "komme": "verb-kommen",
    "aus": "prep-aus",
    "chile": "Chile",
    "jetzt": "adv-jetzt",
    "wohne": "verb-wohnen",
    "in": "prep-in",
    "santiago": "Santiago",
    "spreche": "verb-sprechen",
    "spanisch": "Spanisch",
    "und": "conj-und",
    "englisch": "Englisch",
    "lerne": "verb-lernen",
    "deutsch": "Deutsch",
    "heute": "adv-heute",
    "du": "pron-du",
    "lernst": "verb-lernen",
    "auch": "particle-auch",
    "wir": "pron-wir",
    "sind": "verb-sein",
    "hier": "adv-hier",
    "die": "die",
    "sprache": "noun-sprache",
    "ist": "verb-sein",
    "interessant": "adj-interessant"
  },
  "reading-unit-02": {
    "der": "der",
    "mann": "noun-mann",
    "hat": "verb-haben",
    "einen": "ein",
    "hund": "noun-hund",
    "sieht": "verb-sehen",
    "die": "die",
    "frau": "noun-frau",
    "ein": "ein",
    "buch": "noun-buch",
    "das": "das",
    "ist": "verb-sein",
    "interessant": "adj-interessant",
    "ich": "pron-ich",
    "sehe": "verb-sehen",
    "den": "der",
    "ihn": "pron-er",
    "du": "pron-du",
    "liest": "verb-lesen",
    "es": "pron-es",
    "wir": "pron-wir",
    "haben": "verb-haben",
    "bücher": "noun-buch",
    "sind": "verb-sein"
  },
  "reading-unit-03": {
    "liest": "verb-lesen",
    "du": "pron-du",
    "ein": "ein",
    "buch": "noun-buch",
    "nein": "nein",
    "ich": "pron-ich",
    "lese": "verb-lesen",
    "kein": "particle-kein",
    "einen": "ein",
    "text": "noun-text",
    "ist": "verb-sein",
    "der": "der",
    "schwierig": "adj-schwierig",
    "er": "pron-er",
    "nicht": "particle-nicht",
    "einfach": "adj-einfach",
    "was": "pron-was",
    "verstehst": "verb-verstehen",
    "verstehe": "verb-verstehen",
    "die": "die",
    "frage": "noun-frage",
    "kenne": "verb-kennen",
    "antwort": "noun-antwort",
    "wer": "pron-wer",
    "kennt": "verb-kennen",
    "vielleicht": "adv-vielleicht",
    "anna": "Anna"
  },
  "reading-unit-04": {
    "ich": "pron-ich",
    "stehe": "verb-aufstehen",
    "um": "prep-um",
    "sieben": "sieben",
    "uhr": "noun-uhr",
    "auf": "reading-prefix-auf-aufstehen",
    "heute": "adv-heute",
    "muss": "verb-muessen",
    "arbeiten": "verb-arbeiten",
    "kann": "verb-koennen",
    "deutsch": "Deutsch",
    "lernen": "verb-lernen",
    "aber": "conj-aber",
    "zuerst": "zuerst",
    "fange": "verb-anfangen",
    "neun": "neun",
    "an": "reading-prefix-an-anfangen",
    "anna": "Anna",
    "möchte": "verb-moegen",
    "ein": "ein",
    "buch": "noun-buch",
    "lesen": "verb-lesen",
    "sie": "pron-sie-singular",
    "darf": "verb-duerfen",
    "hier": "adv-hier",
    "nicht": "particle-nicht",
    "kannst": "verb-koennen",
    "du": "pron-du",
    "sprechen": "verb-sprechen",
    "ja": "particle-ja"
  },
  "reading-unit-05": {
    "das": "das",
    "buch": "noun-buch",
    "liegt": "verb-liegen",
    "auf": "prep-auf",
    "dem": "der",
    "tisch": "noun-tisch",
    "ich": "pron-ich",
    "lege": "legen",
    "den": "der",
    "der": "der",
    "stuhl": "noun-stuhl",
    "steht": "stehen",
    "neben": "prep-neben",
    "bett": "Bett",
    "stelle": "verb-stellen",
    "vor": "prep-vor",
    "fenster": "Fenster",
    "bin": "verb-sein",
    "im": "im",
    "zimmer": "noun-zimmer",
    "dann": "dann",
    "gehe": "verb-gehen",
    "ins": "ins",
    "nebenan": "nebenan",
    "gebe": "verb-geben",
    "kind": "noun-kind",
    "ein": "ein",
    "hilft": "verb-helfen",
    "mir": "pron-ich",
    "wir": "pron-wir",
    "sprechen": "verb-sprechen",
    "mit": "prep-mit",
    "lehrer": "noun-lehrer"
  },
  "reading-unit-06": {
    "gestern": "adv-gestern",
    "bin": "verb-sein",
    "ich": "pron-ich",
    "nach": "prep-nach",
    "berlin": "Berlin",
    "gefahren": "verb-fahren",
    "um": "prep-um",
    "zehn": "zehn",
    "uhr": "noun-uhr",
    "angekommen": "verb-ankommen",
    "am": "am",
    "bahnhof": "noun-bahnhof",
    "habe": "verb-haben",
    "anna": "Anna",
    "getroffen": "treffen",
    "wir": "pron-wir",
    "sind": "verb-sein",
    "in": "prep-in",
    "ein": "ein",
    "café": "Café",
    "gegangen": "verb-gehen",
    "danach": "danach",
    "haben": "verb-haben",
    "museum": "Museum",
    "besucht": "besuchen",
    "viel": "viel",
    "gelernt": "verb-lernen",
    "abend": "Abend",
    "war": "verb-sein",
    "müde": "adj-muede",
    "hatte": "verb-haben",
    "zeit": "noun-zeit",
    "aber": "conj-aber",
    "nicht": "particle-nicht",
    "gelesen": "verb-lesen",
    "heute": "adv-heute",
    "lese": "verb-lesen",
    "wieder": "wieder"
  },
  "reading-unit-07": {
    "ich": "pron-ich",
    "lerne": "verb-lernen",
    "deutsch": "Deutsch",
    "weil": "conj-weil",
    "bücher": "noun-buch",
    "lesen": "verb-lesen",
    "möchte": "verb-moegen",
    "weiß": "verb-wissen",
    "dass": "conj-dass",
    "anna": "Anna",
    "auch": "particle-auch",
    "lernt": "verb-lernen",
    "wenn": "conj-wenn",
    "zeit": "noun-zeit",
    "habe": "verb-haben",
    "lese": "verb-lesen",
    "frage": "dict-15497623ef69ba44",
    "ob": "conj-ob",
    "sie": "pron-sie-singular",
    "den": "der",
    "text": "noun-text",
    "versteht": "verb-verstehen",
    "gestern": "adv-gestern",
    "gearbeitet": "verb-arbeiten",
    "bin": "verb-sein",
    "müde": "adj-muede",
    "trotzdem": "adv-trotzdem",
    "obwohl": "conj-obwohl",
    "der": "der",
    "schwierig": "adj-schwierig",
    "ist": "verb-sein",
    "verstehe": "verb-verstehen",
    "die": "die",
    "als": "conj-als",
    "in": "prep-in",
    "berlin": "Berlin",
    "war": "verb-sein",
    "oft": "adv-oft",
    "gesprochen": "verb-sprechen"
  },
  "reading-unit-08": {
    "anna": "Anna",
    "hat": "verb-haben",
    "einen": "ein",
    "hund": "noun-hund",
    "ihr": "reading-possessive-ihr",
    "ist": "verb-sein",
    "klein": "adj-klein",
    "ich": "pron-ich",
    "spiele": "spielen",
    "mit": "prep-mit",
    "ihrem": "reading-possessive-ihr",
    "das": "das",
    "buch": "noun-buch",
    "meines": "pron-mein",
    "lehrers": "noun-lehrer",
    "liegt": "verb-liegen",
    "auf": "prep-auf",
    "meinem": "pron-mein",
    "tisch": "noun-tisch",
    "die": "die",
    "bücher": "noun-buch",
    "der": "der",
    "kinder": "noun-kind",
    "liegen": "verb-liegen",
    "neben": "prep-neben",
    "dem": "der",
    "fenster": "Fenster",
    "heute": "adv-heute",
    "habe": "verb-haben",
    "wenig": "wenig",
    "zeit": "noun-zeit",
    "wegen": "prep-wegen",
    "arbeit": "noun-arbeit",
    "lese": "verb-lesen",
    "nicht": "particle-nicht",
    "morgen": "adv-morgen",
    "werde": "verb-werden",
    "lesen": "verb-lesen",
    "wird": "verb-werden",
    "mir": "pron-ich",
    "helfen": "verb-helfen",
    "dann": "dann",
    "frage": "noun-frage",
    "verstehen": "verb-verstehen"
  }
};
window.DeutschData.readingSurfaceLemmas = {
  "reading-a1-1": {
    "Ich": "pron-ich",
    "heiße": "verb-heissen",
    "Gabriel": "Gabriel",
    "komme": "verb-kommen",
    "aus": "prep-aus",
    "Chile": "Chile",
    "und": "conj-und",
    "wohne": "verb-wohnen",
    "in": "prep-in",
    "Santiago": "Santiago",
    "spreche": "verb-sprechen",
    "Spanisch": "Spanisch",
    "Englisch": "Englisch",
    "Jetzt": "adv-jetzt",
    "lerne": "verb-lernen",
    "ich": "pron-ich",
    "Deutsch": "Deutsch",
    "lese": "verb-lesen",
    "gern": "gern",
    "Heute": "adv-heute",
    "einen": "ein",
    "kurzen": "adj-kurz",
    "Text": "noun-text",
    "Der": "der",
    "ist": "verb-sein",
    "einfach": "adj-einfach",
    "verstehe": "verb-verstehen",
    "viele": "viel",
    "Wörter": "noun-wort"
  },
  "reading-a1-2": {
    "Es": "pron-es",
    "ist": "verb-sein",
    "sieben": "sieben",
    "Uhr": "noun-uhr",
    "Anna": "Anna",
    "zu": "prep-zu",
    "Hause": "noun-haus",
    "Sie": "pron-sie-singular",
    "trinkt": "verb-trinken",
    "Wasser": "noun-wasser",
    "und": "conj-und",
    "isst": "verb-essen",
    "Brot": "noun-brot",
    "Ihr": "reading-possessive-ihr",
    "Kaffee": "noun-kaffee",
    "warm": "warm",
    "Um": "prep-um",
    "acht": "acht",
    "geht": "verb-gehen",
    "sie": "pron-sie-singular",
    "zur": "zur",
    "Arbeit": "noun-arbeit",
    "Die": "die",
    "beginnt": "beginnen",
    "um": "prep-um",
    "neun": "neun",
    "Heute": "adv-heute",
    "hat": "verb-haben",
    "viel": "viel",
    "Zeit": "noun-zeit"
  },
  "reading-a1-3": {
    "Mein": "pron-mein",
    "Zimmer": "noun-zimmer",
    "ist": "verb-sein",
    "klein": "adj-klein",
    "Es": "pron-es",
    "hat": "verb-haben",
    "einen": "ein",
    "Tisch": "noun-tisch",
    "zwei": "zwei",
    "Stühle": "noun-stuhl",
    "und": "conj-und",
    "ein": "ein",
    "Bett": "Bett",
    "Auf": "prep-auf",
    "dem": "der",
    "liegt": "verb-liegen",
    "Buch": "noun-buch",
    "Neben": "prep-neben",
    "Stift": "Stift",
    "Ich": "pron-ich",
    "sitze": "sitzen",
    "auf": "prep-auf",
    "einem": "ein",
    "Stuhl": "noun-stuhl",
    "Das": "das",
    "Fenster": "Fenster",
    "offen": "offen",
    "höre": "verb-hoeren",
    "Zug": "noun-zug",
    "Der": "der",
    "Bahnhof": "noun-bahnhof",
    "nicht": "particle-nicht",
    "weit": "weit"
  },
  "reading-a1-4": {
    "Ich": "pron-ich",
    "lese": "verb-lesen",
    "ein": "ein",
    "Buch": "noun-buch",
    "Das": "das",
    "hat": "verb-haben",
    "viele": "viel",
    "Fragen": "noun-frage",
    "Eine": "ein",
    "Frage": "noun-frage",
    "ist": "verb-sein",
    "Was": "pron-was",
    "wahr": "adj-wahr",
    "kenne": "verb-kennen",
    "die": "die",
    "Antwort": "noun-antwort",
    "nicht": "particle-nicht",
    "Mein": "pron-mein",
    "Freund": "noun-freund",
    "liest": "verb-lesen",
    "auch": "particle-auch",
    "Wir": "pron-wir",
    "sprechen": "verb-sprechen",
    "über": "prep-ueber",
    "das": "das",
    "Er": "pron-er",
    "eine": "ein",
    "Idee": "Idee",
    "und": "conj-und",
    "ich": "pron-ich",
    "habe": "verb-haben",
    "Beispiel": "noun-beispiel",
    "denken": "verb-denken",
    "zusammen": "zusammen"
  },
  "reading-a2-1": {
    "Gestern": "adv-gestern",
    "bin": "verb-sein",
    "ich": "pron-ich",
    "mit": "prep-mit",
    "dem": "der",
    "Zug": "noun-zug",
    "nach": "prep-nach",
    "Berlin": "Berlin",
    "gefahren": "verb-fahren",
    "Ich": "pron-ich",
    "um": "prep-um",
    "zehn": "zehn",
    "Uhr": "noun-uhr",
    "angekommen": "verb-ankommen",
    "Am": "am",
    "Bahnhof": "noun-bahnhof",
    "habe": "verb-haben",
    "meine": "pron-mein",
    "Freundin": "noun-freundin",
    "getroffen": "treffen",
    "Wir": "pron-wir",
    "sind": "verb-sein",
    "zuerst": "zuerst",
    "in": "prep-in",
    "ein": "ein",
    "Café": "Café",
    "gegangen": "verb-gehen",
    "Danach": "danach",
    "haben": "verb-haben",
    "wir": "pron-wir",
    "Museum": "Museum",
    "besucht": "besuchen",
    "viel": "viel",
    "gelernt": "verb-lernen",
    "aber": "conj-aber",
    "nicht": "particle-nicht",
    "alles": "reading-determiner-all",
    "verstanden": "verb-verstehen",
    "Abend": "Abend",
    "war": "verb-sein",
    "müde": "adj-muede",
    "Deshalb": "adv-deshalb",
    "früh": "früh",
    "Hause": "noun-haus"
  },
  "reading-a2-2": {
    "Guten": "adj-gut",
    "Tag": "noun-tag",
    "Ich": "pron-ich",
    "suche": "suchen",
    "ein": "ein",
    "Buch": "noun-buch",
    "für": "prep-fuer",
    "einen": "ein",
    "Freund": "noun-freund",
    "Er": "pron-er",
    "lernt": "verb-lernen",
    "Deutsch": "Deutsch",
    "Welche": "welcher",
    "Texte": "noun-text",
    "liest": "verb-lesen",
    "er": "pron-er",
    "gern": "gern",
    "mag": "verb-moegen",
    "kurze": "adj-kurz",
    "Geschichten": "Geschichte",
    "und": "conj-und",
    "Philosophie": "Philosophie",
    "Das": "das",
    "darf": "verb-duerfen",
    "nicht": "particle-nicht",
    "zu": "reading-adverb-zu",
    "schwierig": "adj-schwierig",
    "sein": "verb-sein",
    "Dieses": "pron-dieser",
    "hat": "verb-haben",
    "einfache": "adj-einfach",
    "Jede": "pron-jeder",
    "Geschichte": "Geschichte",
    "eine": "ein",
    "Übersetzung": "Übersetzung",
    "ist": "verb-sein",
    "gut": "adj-gut",
    "Wie": "wie",
    "viel": "viel",
    "kostet": "kosten",
    "es": "pron-es",
    "Zwölf": "zwölf",
    "Euro": "Euro",
    "Dann": "dann",
    "nehme": "verb-nehmen",
    "ich": "pron-ich",
    "Vielen": "viel",
    "Dank": "Dank"
  },
  "reading-a2-3": {
    "Ich": "pron-ich",
    "lerne": "verb-lernen",
    "Deutsch": "Deutsch",
    "weil": "conj-weil",
    "ich": "pron-ich",
    "deutsche": "deutsch",
    "Bücher": "noun-buch",
    "lesen": "verb-lesen",
    "möchte": "verb-moegen",
    "Englisch": "Englisch",
    "hilft": "verb-helfen",
    "mir": "pron-ich",
    "manchmal": "adv-manchmal",
    "Haus": "noun-haus",
    "und": "conj-und",
    "house": "house",
    "sind": "verb-sein",
    "ähnlich": "ähnlich",
    "Aber": "conj-aber",
    "muss": "verb-muessen",
    "auch": "particle-auch",
    "die": "die",
    "Unterschiede": "Unterschied",
    "lernen": "verb-lernen",
    "jedes": "pron-jeder",
    "Nomen": "Nomen",
    "mit": "prep-mit",
    "dem": "der",
    "Artikel": "Artikel",
    "Plural": "Plural",
    "Jeden": "pron-jeder",
    "Tag": "noun-tag",
    "wiederhole": "wiederholen",
    "einige": "einige",
    "Wörter": "noun-wort",
    "Wenn": "conj-wenn",
    "einen": "ein",
    "Fehler": "Fehler",
    "mache": "verb-machen",
    "suche": "suchen",
    "ein": "ein",
    "neues": "adj-neu",
    "Beispiel": "noun-beispiel",
    "So": "so",
    "verstehe": "verb-verstehen",
    "Regel": "noun-regel",
    "besser": "adj-gut"
  },
  "reading-a2-4": {
    "Auf": "prep-auf",
    "meinem": "pron-mein",
    "Tisch": "noun-tisch",
    "stehen": "stehen",
    "zwei": "zwei",
    "Tassen": "Tasse",
    "Eine": "ein",
    "Tasse": "Tasse",
    "ist": "verb-sein",
    "weiß": "weiß",
    "die": "die",
    "andere": "anderer",
    "blau": "blau",
    "Ich": "pron-ich",
    "sehe": "verb-sehen",
    "sie": "pron-sie-plural",
    "bei": "prep-bei",
    "Tageslicht": "Tageslicht",
    "Am": "am",
    "Abend": "Abend",
    "sehen": "aussehen",
    "Farben": "Farbe",
    "anders": "anders",
    "aus": "aussehen",
    "weil": "conj-weil",
    "Lampe": "Lampe",
    "ein": "ein",
    "warmes": "warm",
    "Licht": "Licht",
    "hat": "verb-haben",
    "Sind": "verb-sein",
    "geworden": "verb-werden",
    "Nein": "nein",
    "nur": "particle-nur",
    "das": "das",
    "Meine": "pron-mein",
    "Beobachtung": "Beobachtung",
    "hängt": "abhängen",
    "also": "also",
    "auch": "particle-auch",
    "von": "prep-von",
    "der": "der",
    "Umgebung": "Umgebung",
    "ab": "abhängen",
    "muss": "verb-muessen",
    "genau": "genau",
    "beschreiben": "beschreiben",
    "wann": "wann",
    "und": "conj-und",
    "wo": "wo",
    "ich": "pron-ich",
    "etwas": "pron-etwas"
  },
  "reading-b1-1": {
    "Sehr": "sehr",
    "geehrte": "geehrt",
    "Frau": "noun-frau",
    "Weber": "Weber",
    "seit": "prep-seit",
    "drei": "drei",
    "Tagen": "noun-tag",
    "funktioniert": "funktionieren",
    "die": "die",
    "Heizung": "Heizung",
    "in": "prep-in",
    "meiner": "pron-mein",
    "Wohnung": "noun-wohnung",
    "nicht": "particle-nicht",
    "richtig": "adj-richtig",
    "Obwohl": "conj-obwohl",
    "ich": "pron-ich",
    "sie": "pron-sie-singular",
    "eingeschaltet": "einschalten",
    "habe": "verb-haben",
    "bleibt": "verb-bleiben",
    "das": "das",
    "Wohnzimmer": "Wohnzimmer",
    "kalt": "kalt",
    "Ich": "pron-ich",
    "bereits": "adv-bereits",
    "geprüft": "verb-pruefen",
    "ob": "conj-ob",
    "Fenster": "Fenster",
    "geschlossen": "schließen",
    "sind": "verb-sein",
    "Könnten": "verb-koennen",
    "Sie": "pron-sie-formal",
    "bitte": "particle-bitte",
    "jemanden": "pron-jemand",
    "schicken": "schicken",
    "der": "der",
    "sich": "pron-sich",
    "ansieht": "ansehen",
    "Am": "am",
    "Mittwoch": "Mittwoch",
    "bin": "verb-sein",
    "ab": "dict-bbce57da9492c437",
    "vierzehn": "vierzehn",
    "Uhr": "noun-uhr",
    "zu": "prep-zu",
    "Hause": "noun-haus",
    "Falls": "falls",
    "dieser": "pron-dieser",
    "Termin": "Termin",
    "möglich": "adj-moeglich",
    "ist": "verb-sein",
    "rufen": "verb-anrufen",
    "mich": "pron-ich",
    "an": "verb-anrufen",
    "Vielen": "viel",
    "Dank": "Dank",
    "für": "prep-fuer",
    "Ihre": "reading-possessive-Ihr",
    "Hilfe": "Hilfe",
    "Mit": "prep-mit",
    "freundlichen": "freundlich",
    "Grüßen": "Gruß",
    "Daniel": "Daniel",
    "Rojas": "Rojas"
  },
  "reading-b1-2": {
    "Eine": "ein",
    "Studentin": "Studentin",
    "wollte": "verb-wollen",
    "wissen": "verb-wissen",
    "ob": "conj-ob",
    "Musik": "Musik",
    "beim": "beim",
    "Lernen": "dict-4b2c91818fa849c5",
    "hilft": "verb-helfen",
    "Sie": "pron-sie-singular",
    "lernte": "verb-lernen",
    "am": "am",
    "Montag": "Montag",
    "mit": "prep-mit",
    "und": "conj-und",
    "Dienstag": "Dienstag",
    "ohne": "prep-ohne",
    "Am": "am",
    "Mittwoch": "Mittwoch",
    "machte": "verb-machen",
    "sie": "pron-sie-singular",
    "einen": "ein",
    "Test": "Test",
    "An": "prep-an",
    "die": "die",
    "Wörter": "noun-wort",
    "vom": "vom",
    "konnte": "verb-koennen",
    "sich": "pron-sich",
    "besser": "adj-gut",
    "erinnern": "verb-erinnern",
    "Zuerst": "zuerst",
    "dachte": "verb-denken",
    "dass": "conj-dass",
    "Ursache": "Ursache",
    "war": "verb-sein",
    "Dann": "dann",
    "bemerkte": "verb-bemerken",
    "aber": "conj-aber",
    "viel": "viel",
    "einfacher": "adj-einfach",
    "waren": "verb-sein",
    "also": "also",
    "noch": "noch",
    "keine": "particle-kein",
    "sichere": "sicher",
    "Schlussfolgerung": "Schlussfolgerung",
    "ziehen": "ziehen",
    "Für": "prep-fuer",
    "besseren": "adj-gut",
    "Vergleich": "Vergleich",
    "müsste": "verb-muessen",
    "ähnlich": "ähnlich",
    "schwierige": "adj-schwierig",
    "verwenden": "verwenden"
  },
  "reading-b1-3": {
    "Zwei": "zwei",
    "Freunde": "noun-freund",
    "diskutieren": "diskutieren",
    "welches": "welcher",
    "Buch": "noun-buch",
    "sie": "pron-sie-plural",
    "gemeinsam": "gemeinsam",
    "lesen": "verb-lesen",
    "sollen": "verb-sollen",
    "Lea": "Lea",
    "möchte": "verb-moegen",
    "ein": "ein",
    "kurzes": "adj-kurz",
    "wählen": "wählen",
    "weil": "conj-weil",
    "wenig": "wenig",
    "Zeit": "noun-zeit",
    "hat": "verb-haben",
    "Amir": "Amir",
    "schwierigeres": "adj-schwierig",
    "er": "pron-er",
    "neue": "adj-neu",
    "Begriffe": "noun-begriff",
    "lernen": "verb-lernen",
    "will": "verb-wollen",
    "Beide": "beide",
    "haben": "verb-haben",
    "Gründe": "noun-grund",
    "für": "prep-fuer",
    "ihre": "reading-possessive-ihr",
    "Entscheidung": "Entscheidung",
    "Sie": "pron-sie-plural",
    "unterscheiden": "verb-unterscheiden",
    "zwischen": "prep-zwischen",
    "einem": "ein",
    "persönlichen": "persönlich",
    "Wunsch": "Wunsch",
    "und": "conj-und",
    "gemeinsamen": "gemeinsam",
    "Ziel": "Ziel",
    "Ihr": "reading-possessive-ihr",
    "ist": "verb-sein",
    "jede": "pron-jeder",
    "Woche": "noun-woche",
    "über": "prep-ueber",
    "einen": "ein",
    "Text": "noun-text",
    "zu": "reading-particle-zu",
    "sprechen": "verb-sprechen",
    "Deshalb": "adv-deshalb",
    "mit": "prep-mit",
    "kurzen": "adj-kurz",
    "aber": "conj-aber",
    "anspruchsvollen": "anspruchsvoll",
    "Kapiteln": "Kapitel",
    "Eine": "ein",
    "gute": "adj-gut",
    "Begründung": "Begründung",
    "muss": "verb-muessen",
    "also": "also",
    "berücksichtigen": "berücksichtigen",
    "welche": "welcher",
    "Frage": "noun-frage",
    "gerade": "dict-fd5bbc53ff0c5e8e",
    "beantwortet": "beantworten",
    "werden": "verb-werden",
    "soll": "verb-sollen"
  },
  "reading-b1-4": {
    "Ich": "pron-ich",
    "bin": "verb-sein",
    "sicher": "sicher",
    "dass": "conj-dass",
    "ich": "pron-ich",
    "meinen": "pron-mein",
    "Schlüssel": "Schlüssel",
    "auf": "prep-auf",
    "den": "der",
    "Tisch": "noun-tisch",
    "gelegt": "legen",
    "habe": "verb-haben",
    "Zu": "prep-zu",
    "Hause": "noun-haus",
    "liegt": "verb-liegen",
    "er": "pron-er",
    "aber": "conj-aber",
    "nicht": "particle-nicht",
    "dort": "adv-dort",
    "Meine": "pron-mein",
    "Schwester": "Schwester",
    "sagt": "sagen",
    "ihn": "pron-er",
    "in": "prep-in",
    "die": "die",
    "Jackentasche": "Jackentasche",
    "gesteckt": "stecken",
    "Zuerst": "zuerst",
    "glaube": "verb-glauben",
    "ihr": "pron-sie-singular",
    "Dann": "dann",
    "finde": "verb-finden",
    "tatsächlich": "tatsächlich",
    "meiner": "pron-mein",
    "Jacke": "Jacke",
    "Erinnerung": "noun-erinnerung",
    "war": "verb-sein",
    "sehr": "sehr",
    "deutlich": "deutlich",
    "sie": "pron-sie-singular",
    "falsch": "adj-falsch",
    "Daraus": "daraus",
    "folgt": "folgen",
    "jede": "pron-jeder",
    "ist": "verb-sein",
    "Es": "pron-es",
    "zeigt": "zeigen",
    "nur": "particle-nur",
    "ein": "ein",
    "starkes": "stark",
    "Gefühl": "Gefühl",
    "von": "prep-von",
    "Sicherheit": "Sicherheit",
    "noch": "noch",
    "kein": "particle-kein",
    "Beweis": "Beweis"
  },
  "reading-b2-1": {
    "Der": "der",
    "Stadtrat": "Stadtrat",
    "erwägt": "erwägen",
    "eine": "ein",
    "Straße": "Straße",
    "am": "am",
    "Wochenende": "Wochenende",
    "für": "prep-fuer",
    "Autos": "Auto",
    "zu": "reading-particle-zu",
    "sperren": "sperren",
    "Befürworter": "Befürworter",
    "erwarten": "erwarten",
    "weniger": "wenig",
    "Lärm": "Lärm",
    "und": "conj-und",
    "mehr": "viel",
    "Platz": "Platz",
    "Fußgänger": "Fußgänger",
    "Einige": "einige",
    "Geschäftsinhaber": "Geschäftsinhaber",
    "befürchten": "befürchten",
    "hingegen": "adv-hingegen",
    "dass": "conj-dass",
    "Kunden": "Kunde",
    "ihre": "reading-possessive-ihr",
    "Geschäfte": "Geschäft",
    "nicht": "particle-nicht",
    "erreichen": "erreichen",
    "könnten": "verb-koennen",
    "Beide": "beide",
    "Seiten": "Seite",
    "berufen": "berufen",
    "sich": "pron-sich",
    "auf": "prep-auf",
    "Erfahrungen": "noun-erfahrung",
    "die": "die",
    "bisher": "bisher",
    "jedoch": "jedoch",
    "systematisch": "systematisch",
    "verglichen": "verb-vergleichen",
    "wurden": "verb-werden",
    "Eine": "ein",
    "befristete": "befristet",
    "Erprobung": "Erprobung",
    "könnte": "verb-koennen",
    "helfen": "verb-helfen",
    "Folgen": "Folge",
    "genauer": "genau",
    "beurteilen": "beurteilen",
    "Dabei": "dabei",
    "sollten": "verb-sollen",
    "nur": "particle-nur",
    "Umsätze": "Umsatz",
    "sondern": "conj-sondern",
    "auch": "particle-auch",
    "Zugänglichkeit": "Zugänglichkeit",
    "Aufenthaltsqualität": "Aufenthaltsqualität",
    "untersucht": "untersuchen",
    "werden": "verb-werden",
    "Selbst": "selbst",
    "wenn": "conj-wenn",
    "durchschnittlichen": "durchschnittlich",
    "unverändert": "unverändert",
    "blieben": "verb-bleiben",
    "wäre": "verb-sein",
    "damit": "reading-adverb-damit",
    "noch": "noch",
    "gezeigt": "zeigen",
    "jedes": "pron-jeder",
    "einzelne": "einzeln",
    "Geschäft": "Geschäft",
    "gleichermaßen": "gleichermaßen",
    "betroffen": "betreffen",
    "ist": "verb-sein"
  },
  "reading-b2-2": {
    "Ein": "ein",
    "Modell": "Modell",
    "kann": "verb-koennen",
    "menschliche": "menschlich",
    "Antworten": "noun-antwort",
    "zuverlässig": "adj-zuverlaessig",
    "vorhersagen": "verb-vorhersagen",
    "ohne": "prep-ohne",
    "den": "der",
    "tatsächlichen": "tatsächlich",
    "Denkprozess": "Denkprozess",
    "abzubilden": "abbilden",
    "Wenn": "conj-wenn",
    "zwei": "zwei",
    "Modelle": "Modell",
    "dieselben": "derselbe",
    "Ergebnisse": "Ergebnis",
    "liefern": "liefern",
    "folgt": "folgen",
    "daraus": "daraus",
    "nicht": "particle-nicht",
    "dass": "conj-dass",
    "sie": "pron-sie-plural",
    "Annahmen": "Annahme",
    "verwenden": "verwenden",
    "Für": "prep-fuer",
    "die": "die",
    "Beurteilung": "Beurteilung",
    "eines": "ein",
    "kognitiven": "kognitiv",
    "Modells": "Modell",
    "ist": "verb-sein",
    "daher": "daher",
    "entscheidend": "entscheidend",
    "welche": "welcher",
    "Art": "Art",
    "von": "prep-von",
    "Leistung": "Leistung",
    "beansprucht": "beanspruchen",
    "wird": "verb-werden",
    "Vorhersage": "Vorhersage",
    "Beschreibung": "Beschreibung",
    "oder": "conj-oder",
    "Erklärung": "noun-erklaerung",
    "Eine": "ein",
    "sollte": "verb-sollen",
    "außerdem": "außerdem",
    "zeigen": "zeigen",
    "unter": "prep-unter",
    "welchen": "welcher",
    "Bedingungen": "noun-bedingung",
    "ein": "ein",
    "Prozess": "Prozess",
    "auftritt": "auftreten",
    "und": "conj-und",
    "weshalb": "weshalb",
    "er": "pron-er",
    "sich": "pron-sich",
    "verändert": "verändern",
    "Zusätzliche": "zusätzlich",
    "Messungen": "Messung",
    "etwa": "etwa",
    "der": "der",
    "benötigten": "benötigen",
    "Zeit": "noun-zeit",
    "können": "verb-koennen",
    "helfen": "verb-helfen",
    "konkurrierende": "konkurrierend",
    "zu": "reading-particle-zu",
    "unterscheiden": "verb-unterscheiden",
    "Allerdings": "adv-allerdings",
    "beweist": "beweisen",
    "auch": "particle-auch",
    "eine": "ein",
    "gute": "adj-gut",
    "Übereinstimmung": "Übereinstimmung",
    "mit": "prep-mit",
    "mehreren": "mehrere",
    "Messgrößen": "Messgröße",
    "automatisch": "automatisch",
    "vorgeschlagene": "vorschlagen",
    "Mechanismus": "Mechanismus",
    "einzig": "einzig",
    "mögliche": "adj-moeglich"
  },
  "reading-b2-3": {
    "Eine": "ein",
    "funktionalistische": "funktionalistisch",
    "Auffassung": "Auffassung",
    "beschreibt": "beschreiben",
    "mentale": "mental",
    "Zustände": "Zustand",
    "anhand": "anhand",
    "ihrer": "reading-possessive-ihr",
    "Beziehungen": "Beziehung",
    "zu": "prep-zu",
    "Wahrnehmungen": "noun-wahrnehmung",
    "Handlungen": "Handlung",
    "und": "conj-und",
    "anderen": "anderer",
    "mentalen": "mental",
    "Zuständen": "Zustand",
    "Überzeugung": "Überzeugung",
    "wird": "verb-werden",
    "dann": "dann",
    "nicht": "particle-nicht",
    "allein": "allein",
    "dadurch": "dadurch",
    "bestimmt": "dict-b89dabc8a7caa7a1",
    "woraus": "woraus",
    "ihr": "reading-possessive-ihr",
    "Träger": "Träger",
    "besteht": "bestehen",
    "sondern": "conj-sondern",
    "auch": "particle-auch",
    "welche": "welcher",
    "Rolle": "Rolle",
    "sie": "pron-sie-singular",
    "in": "prep-in",
    "einem": "ein",
    "größeren": "adj-gross",
    "Zusammenhang": "Zusammenhang",
    "spielt": "spielen",
    "Das": "das",
    "erlaubt": "erlauben",
    "zumindest": "zumindest",
    "die": "die",
    "Frage": "noun-frage",
    "ob": "conj-ob",
    "unterschiedliche": "unterschiedlich",
    "physische": "physisch",
    "Systeme": "System",
    "ähnliche": "ähnlich",
    "Funktionen": "Funktion",
    "besitzen": "besitzen",
    "könnten": "verb-koennen",
    "Damit": "reading-adverb-damit",
    "ist": "verb-sein",
    "jedoch": "jedoch",
    "noch": "noch",
    "geklärt": "klären",
    "eine": "ein",
    "Beschreibung": "Beschreibung",
    "der": "der",
    "das": "das",
    "subjektive": "subjektiv",
    "Erleben": "Erleben",
    "vollständig": "vollständig",
    "erklärt": "verb-erklaeren",
    "Die": "die",
    "was": "pron-was",
    "ein": "ein",
    "System": "System",
    "leistet": "leisten",
    "wie": "wie",
    "sich": "pron-sich",
    "Zustand": "Zustand",
    "für": "prep-fuer",
    "dieses": "pron-dieser",
    "anfühlt": "anfühlen",
    "müssen": "verb-muessen",
    "zunächst": "zunächst",
    "unterschieden": "verb-unterscheiden",
    "werden": "verb-werden",
    "Ob": "conj-ob",
    "beide": "beide",
    "Fragen": "noun-frage",
    "letztlich": "letztlich",
    "dieselbe": "derselbe",
    "Antwort": "noun-antwort",
    "erhalten": "dict-0438814afb2f84b7",
    "können": "verb-koennen",
    "bleibt": "verb-bleiben",
    "Gegenstand": "Gegenstand",
    "philosophischer": "philosophisch",
    "Diskussion": "Diskussion"
  },
  "reading-b2-4": {
    "Wenn": "conj-wenn",
    "jemand": "pron-jemand",
    "Ich": "pron-ich",
    "weiß": "verb-wissen",
    "es": "pron-es",
    "sagt": "sagen",
    "müssen": "verb-muessen",
    "wir": "pron-wir",
    "fragen": "dict-15497623ef69ba44",
    "in": "prep-in",
    "welcher": "welcher",
    "Situation": "Situation",
    "diese": "pron-dieser",
    "Worte": "noun-wort",
    "verwendet": "verwenden",
    "werden": "verb-werden",
    "In": "prep-in",
    "einem": "ein",
    "Gespräch": "Gespräch",
    "über": "prep-ueber",
    "eine": "ein",
    "Zugverbindung": "Zugverbindung",
    "kann": "verb-koennen",
    "die": "die",
    "Aussage": "Aussage",
    "bedeuten": "bedeuten",
    "dass": "conj-dass",
    "Person": "Person",
    "den": "der",
    "Fahrplan": "Fahrplan",
    "geprüft": "verb-pruefen",
    "hat": "verb-haben",
    "Streit": "Streit",
    "dieselbe": "derselbe",
    "Formulierung": "Formulierung",
    "dagegen": "dagegen",
    "Ungeduld": "Ungeduld",
    "ausdrücken": "ausdrücken",
    "Die": "die",
    "Wörter": "noun-wort",
    "bleiben": "verb-bleiben",
    "gleich": "gleich",
    "ihre": "reading-possessive-ihr",
    "Aufgabe": "Aufgabe",
    "im": "im",
    "sich": "pron-sich",
    "jedoch": "jedoch",
    "ändern": "ändern",
    "Diese": "pron-dieser",
    "didaktische": "didaktisch",
    "Überlegung": "Überlegung",
    "ist": "verb-sein",
    "von": "prep-von",
    "Wittgensteins": "Wittgenstein",
    "Aufmerksamkeit": "noun-aufmerksamkeit",
    "für": "prep-fuer",
    "Sprachgebrauch": "Sprachgebrauch",
    "angeregt": "anregen",
    "Sie": "pron-sie-singular",
    "fordert": "auffordern",
    "uns": "pron-wir",
    "auf": "auffordern",
    "konkrete": "konkret",
    "Beispiele": "noun-beispiel",
    "zu": "prep-zu",
    "untersuchen": "untersuchen",
    "bevor": "bevor",
    "nach": "prep-nach",
    "einer": "ein",
    "einzigen": "einzig",
    "Erklärung": "noun-erklaerung",
    "alle": "reading-determiner-all",
    "Verwendungen": "Verwendung",
    "eines": "ein",
    "Ausdrucks": "Ausdruck",
    "suchen": "suchen",
    "behauptet": "behaupten",
    "nicht": "particle-nicht",
    "jede": "pron-jeder",
    "Bedeutung": "Bedeutung",
    "beliebig": "beliebig",
    "wäre": "verb-sein",
    "oder": "conj-oder",
    "Regeln": "noun-regel",
    "unwichtig": "unwichtig",
    "seien": "verb-sein"
  },
  "reading-c1-1": {
    "Aufklärung": "Aufklärung",
    "ist": "verb-sein",
    "der": "der",
    "Ausgang": "Ausgang",
    "des": "der",
    "Menschen": "dict-3183a0b77355cfb1",
    "aus": "prep-aus",
    "seiner": "reading-possessive-sein",
    "selbst": "selbst",
    "verschuldeten": "verschuldet",
    "Unmündigkeit": "Unmündigkeit",
    "Didaktischer": "didaktisch",
    "Kommentar": "Kommentar",
    "Originaltext": "Originaltext",
    "Der": "der",
    "Satz": "noun-satz",
    "grammatisch": "grammatisch",
    "kurz": "adj-kurz",
    "enthält": "enthalten",
    "aber": "conj-aber",
    "mehrere": "mehrere",
    "abstrakte": "abstrakt",
    "Begriffe": "noun-begriff",
    "Des": "der",
    "ein": "ein",
    "Genitiv": "Genitiv",
    "zu": "prep-zu",
    "gehört": "gehören",
    "Die": "die",
    "Präposition": "Präposition",
    "verlangt": "verlangen",
    "den": "der",
    "Dativ": "Dativ",
    "Selbst": "selbst",
    "verschuldet": "verschuldet",
    "bezeichnet": "bezeichnen",
    "hier": "adv-hier",
    "eine": "ein",
    "dem": "der",
    "zugerechnete": "zurechnen",
    "Verantwortung": "Verantwortung",
    "während": "conj-waehrend",
    "keine": "particle-kein",
    "bloße": "bloß",
    "Angabe": "Angabe",
    "Lebensalters": "Lebensalter"
  },
  "reading-c1-2": {
    "Das": "das",
    "Wahre": "Wahre",
    "ist": "verb-sein",
    "das": "das",
    "Ganze": "Ganze",
    "aber": "conj-aber",
    "nur": "particle-nur",
    "durch": "prep-durch",
    "seine": "reading-possessive-sein",
    "Entwicklung": "Entwicklung",
    "sich": "pron-sich",
    "vollendende": "vollenden",
    "Wesen": "Wesen",
    "Didaktischer": "didaktisch",
    "Kommentar": "Kommentar",
    "Originaltext": "Originaltext",
    "und": "conj-und",
    "sind": "verb-sein",
    "substantivierte": "substantivieren",
    "Adjektive": "Adjektiv",
    "In": "prep-in",
    "der": "der",
    "zweiten": "zweite",
    "Aussage": "Aussage",
    "steht": "stehen",
    "vor": "prep-vor",
    "eine": "ein",
    "erweiterte": "erweitern",
    "Partizipialgruppe": "Partizipialgruppe",
    "Zum": "zum",
    "Verständnis": "Verständnis",
    "kann": "verb-koennen",
    "man": "pron-man",
    "sie": "pron-sie-singular",
    "in": "prep-in",
    "einen": "ein",
    "Relativsatz": "Relativsatz",
    "auflösen": "auflösen",
    "vollendet": "vollenden",
    "Diese": "pron-dieser",
    "Umformung": "Umformung",
    "erleichtert": "erleichtern",
    "die": "die",
    "Syntax": "Syntax",
    "ersetzt": "ersetzen",
    "keine": "particle-kein",
    "Interpretation": "Interpretation",
    "von": "prep-von",
    "Hegels": "Hegel",
    "Begriffen": "noun-begriff"
  },
  "reading-c1-3": {
    "Wer": "pron-wer",
    "Bewusstsein": "noun-bewusstsein",
    "erklären": "verb-erklaeren",
    "will": "verb-wollen",
    "muss": "verb-muessen",
    "zunächst": "zunächst",
    "angeben": "angeben",
    "welches": "welcher",
    "Phänomen": "Phänomen",
    "erklärungsbedürftig": "erklärungsbedürftig",
    "ist": "verb-sein",
    "Die": "die",
    "Fähigkeit": "Fähigkeit",
    "Informationen": "Information",
    "zu": "reading-particle-zu",
    "berichten": "berichten",
    "lässt": "lassen",
    "sich": "pron-sich",
    "von": "prep-von",
    "der": "der",
    "Frage": "noun-frage",
    "unterscheiden": "verb-unterscheiden",
    "ob": "conj-ob",
    "und": "conj-und",
    "wie": "wie",
    "etwas": "pron-etwas",
    "subjektiv": "subjektiv",
    "erlebt": "erleben",
    "wird": "verb-werden",
    "Diese": "pron-dieser",
    "Unterscheidung": "Unterscheidung",
    "legt": "festlegen",
    "noch": "noch",
    "keine": "particle-kein",
    "bestimmte": "bestimmt",
    "Theorie": "noun-theorie",
    "fest": "festlegen",
    "sie": "pron-sie-singular",
    "verhindert": "verhindern",
    "lediglich": "lediglich",
    "dass": "conj-dass",
    "ein": "ein",
    "Erfolg": "Erfolg",
    "auf": "prep-auf",
    "einen": "ein",
    "Erklärungsebene": "Erklärungsebene",
    "vorschnell": "vorschnell",
    "als": "reading-particle-als",
    "Lösung": "Lösung",
    "anderen": "anderer",
    "ausgegeben": "ausgeben",
    "Angenommen": "annehmen",
    "System": "System",
    "könnte": "verb-koennen",
    "sämtliche": "sämtlich",
    "Fragen": "noun-frage",
    "über": "prep-ueber",
    "seine": "reading-possessive-sein",
    "internen": "intern",
    "Zustände": "Zustand",
    "beantworten": "beantworten",
    "Aus": "prep-aus",
    "dieser": "pron-dieser",
    "Leistung": "Leistung",
    "allein": "allein",
    "ließe": "lassen",
    "weder": "weder",
    "unmittelbar": "unmittelbar",
    "das": "das",
    "Vorhandensein": "Vorhandensein",
    "subjektiven": "subjektiv",
    "Erlebens": "Erleben",
    "schließen": "schließen",
    "dessen": "dessen",
    "Fehlen": "Fehlen",
    "beweisen": "beweisen",
    "Dazu": "dazu",
    "wären": "verb-sein",
    "zusätzliche": "zusätzlich",
    "Annahmen": "Annahme",
    "erforderlich": "erforderlich",
    "die": "die",
    "den": "der",
    "Zusammenhang": "Zusammenhang",
    "zwischen": "prep-zwischen",
    "beobachtbarem": "beobachtbar",
    "Verhalten": "noun-verhalten",
    "Erleben": "Erleben",
    "bestimmen": "bestimmen",
    "Gerade": "dict-fd5bbc53ff0c5e8e",
    "diese": "pron-dieser",
    "bilden": "bilden",
    "wesentlichen": "adj-wesentlich",
    "Teil": "Teil",
    "philosophischen": "philosophisch",
    "Auseinandersetzung": "Auseinandersetzung"
  },
  "reading-c1-4": {
    "Die": "die",
    "Anpassung": "Anpassung",
    "eines": "ein",
    "Modells": "Modell",
    "an": "prep-an",
    "vorhandene": "vorhanden",
    "Daten": "noun-daten",
    "ist": "verb-sein",
    "von": "prep-von",
    "seiner": "reading-possessive-sein",
    "Bewährung": "Bewährung",
    "neuen": "adj-neu",
    "zu": "reading-particle-zu",
    "unterscheiden": "verb-unterscheiden",
    "Je": "je",
    "flexibler": "flexibel",
    "ein": "ein",
    "Modell": "Modell",
    "desto": "desto",
    "leichter": "leicht",
    "kann": "verb-koennen",
    "es": "pron-es",
    "Besonderheiten": "Besonderheit",
    "einer": "ein",
    "Stichprobe": "Stichprobe",
    "erfassen": "erfassen",
    "die": "die",
    "außerhalb": "außerhalb",
    "dieser": "pron-dieser",
    "keine": "particle-kein",
    "verlässliche": "verlässlich",
    "Bedeutung": "Bedeutung",
    "besitzen": "besitzen",
    "Eine": "ein",
    "hohe": "hoch",
    "Anpassungsgüte": "Anpassungsgüte",
    "stellt": "darstellen",
    "daher": "daher",
    "für": "prep-fuer",
    "sich": "pron-sich",
    "genommen": "verb-nehmen",
    "noch": "noch",
    "keinen": "particle-kein",
    "hinreichenden": "hinreichend",
    "Beleg": "Beleg",
    "Tragfähigkeit": "Tragfähigkeit",
    "der": "der",
    "zugrunde": "zugrunde",
    "liegenden": "verb-liegen",
    "Annahmen": "Annahme",
    "dar": "darstellen",
    "Für": "prep-fuer",
    "eine": "ein",
    "überzeugende": "überzeugend",
    "Prüfung": "Prüfung",
    "wäre": "verb-sein",
    "offenzulegen": "offenlegen",
    "welche": "welcher",
    "Vorhersagen": "Vorhersage",
    "vor": "prep-vor",
    "Auswertung": "Auswertung",
    "feststanden": "feststehen",
    "Entscheidungen": "Entscheidung",
    "erst": "erst",
    "nach": "prep-nach",
    "Sichtung": "Sichtung",
    "Ergebnisse": "Ergebnis",
    "getroffen": "treffen",
    "wurden": "verb-werden",
    "und": "conj-und",
    "unter": "prep-unter",
    "welchen": "welcher",
    "Bedingungen": "noun-bedingung",
    "das": "das",
    "scheitern": "scheitern",
    "würde": "würde",
    "Unsicherheit": "Unsicherheit",
    "präzise": "präzise",
    "auszuweisen": "ausweisen",
    "bedeutet": "bedeuten",
    "dabei": "dabei",
    "nicht": "particle-nicht",
    "auf": "prep-auf",
    "Erkenntnis": "noun-erkenntnis",
    "verzichten": "verzichten",
    "Vielmehr": "vielmehr",
    "macht": "verb-machen",
    "sichtbar": "sichtbar",
    "wie": "wie",
    "weit": "weit",
    "Schlussfolgerung": "Schlussfolgerung",
    "durch": "prep-durch",
    "vorliegenden": "vorliegend",
    "Befunde": "Befund",
    "getragen": "tragen",
    "wird": "verb-werden",
    "welcher": "welcher",
    "Stelle": "Stelle",
    "weitere": "weiter",
    "Untersuchung": "Untersuchung",
    "erforderlich": "erforderlich",
    "bleibt": "verb-bleiben"
  },
  "reading-unit-01": {
    "Ich": "pron-ich",
    "heiße": "verb-heissen",
    "Gabriel": "Gabriel",
    "komme": "verb-kommen",
    "aus": "prep-aus",
    "Chile": "Chile",
    "Jetzt": "adv-jetzt",
    "wohne": "verb-wohnen",
    "ich": "pron-ich",
    "in": "prep-in",
    "Santiago": "Santiago",
    "spreche": "verb-sprechen",
    "Spanisch": "Spanisch",
    "und": "conj-und",
    "Englisch": "Englisch",
    "lerne": "verb-lernen",
    "Deutsch": "Deutsch",
    "Heute": "adv-heute",
    "Du": "pron-du",
    "lernst": "verb-lernen",
    "auch": "particle-auch",
    "Wir": "pron-wir",
    "sind": "verb-sein",
    "hier": "adv-hier",
    "Die": "die",
    "Sprache": "noun-sprache",
    "ist": "verb-sein",
    "interessant": "adj-interessant"
  },
  "reading-unit-02": {
    "Der": "der",
    "Mann": "noun-mann",
    "hat": "verb-haben",
    "einen": "ein",
    "Hund": "noun-hund",
    "sieht": "verb-sehen",
    "die": "die",
    "Frau": "noun-frau",
    "Die": "die",
    "ein": "ein",
    "Buch": "noun-buch",
    "Das": "das",
    "ist": "verb-sein",
    "interessant": "adj-interessant",
    "Ich": "pron-ich",
    "sehe": "verb-sehen",
    "den": "der",
    "ihn": "pron-er",
    "Du": "pron-du",
    "liest": "verb-lesen",
    "das": "das",
    "es": "pron-es",
    "Wir": "pron-wir",
    "haben": "verb-haben",
    "Bücher": "noun-buch",
    "sind": "verb-sein"
  },
  "reading-unit-03": {
    "Liest": "verb-lesen",
    "du": "pron-du",
    "ein": "ein",
    "Buch": "noun-buch",
    "Nein": "nein",
    "ich": "pron-ich",
    "lese": "verb-lesen",
    "kein": "particle-kein",
    "Ich": "pron-ich",
    "einen": "ein",
    "Text": "noun-text",
    "Ist": "verb-sein",
    "der": "der",
    "schwierig": "adj-schwierig",
    "er": "pron-er",
    "ist": "verb-sein",
    "nicht": "particle-nicht",
    "Er": "pron-er",
    "einfach": "adj-einfach",
    "Was": "pron-was",
    "verstehst": "verb-verstehen",
    "verstehe": "verb-verstehen",
    "die": "die",
    "Frage": "noun-frage",
    "kenne": "verb-kennen",
    "Antwort": "noun-antwort",
    "Wer": "pron-wer",
    "kennt": "verb-kennen",
    "Vielleicht": "adv-vielleicht",
    "Anna": "Anna"
  },
  "reading-unit-04": {
    "Ich": "pron-ich",
    "stehe": "verb-aufstehen",
    "um": "prep-um",
    "sieben": "sieben",
    "Uhr": "noun-uhr",
    "auf": "reading-prefix-auf-aufstehen",
    "Heute": "adv-heute",
    "muss": "verb-muessen",
    "ich": "pron-ich",
    "arbeiten": "verb-arbeiten",
    "kann": "verb-koennen",
    "Deutsch": "Deutsch",
    "lernen": "verb-lernen",
    "aber": "conj-aber",
    "zuerst": "zuerst",
    "fange": "verb-anfangen",
    "neun": "neun",
    "an": "reading-prefix-an-anfangen",
    "Anna": "Anna",
    "möchte": "verb-moegen",
    "ein": "ein",
    "Buch": "noun-buch",
    "lesen": "verb-lesen",
    "Sie": "pron-sie-singular",
    "darf": "verb-duerfen",
    "hier": "adv-hier",
    "heute": "adv-heute",
    "nicht": "particle-nicht",
    "Kannst": "verb-koennen",
    "du": "pron-du",
    "sprechen": "verb-sprechen",
    "Ja": "particle-ja"
  },
  "reading-unit-05": {
    "Das": "das",
    "Buch": "noun-buch",
    "liegt": "verb-liegen",
    "auf": "prep-auf",
    "dem": "der",
    "Tisch": "noun-tisch",
    "Ich": "pron-ich",
    "lege": "legen",
    "das": "das",
    "den": "der",
    "Der": "der",
    "Stuhl": "noun-stuhl",
    "steht": "stehen",
    "neben": "prep-neben",
    "Bett": "Bett",
    "stelle": "verb-stellen",
    "vor": "prep-vor",
    "Fenster": "Fenster",
    "bin": "verb-sein",
    "im": "im",
    "Zimmer": "noun-zimmer",
    "Dann": "dann",
    "gehe": "verb-gehen",
    "ich": "pron-ich",
    "ins": "ins",
    "nebenan": "nebenan",
    "gebe": "verb-geben",
    "Kind": "noun-kind",
    "ein": "ein",
    "hilft": "verb-helfen",
    "mir": "pron-ich",
    "Wir": "pron-wir",
    "sprechen": "verb-sprechen",
    "mit": "prep-mit",
    "Lehrer": "noun-lehrer"
  },
  "reading-unit-06": {
    "Gestern": "adv-gestern",
    "bin": "verb-sein",
    "ich": "pron-ich",
    "nach": "prep-nach",
    "Berlin": "Berlin",
    "gefahren": "verb-fahren",
    "Ich": "pron-ich",
    "um": "prep-um",
    "zehn": "zehn",
    "Uhr": "noun-uhr",
    "angekommen": "verb-ankommen",
    "Am": "am",
    "Bahnhof": "noun-bahnhof",
    "habe": "verb-haben",
    "Anna": "Anna",
    "getroffen": "treffen",
    "Wir": "pron-wir",
    "sind": "verb-sein",
    "in": "prep-in",
    "ein": "ein",
    "Café": "Café",
    "gegangen": "verb-gehen",
    "Danach": "danach",
    "haben": "verb-haben",
    "wir": "pron-wir",
    "Museum": "Museum",
    "besucht": "besuchen",
    "viel": "viel",
    "gelernt": "verb-lernen",
    "Abend": "Abend",
    "war": "verb-sein",
    "müde": "adj-muede",
    "hatte": "verb-haben",
    "Zeit": "noun-zeit",
    "aber": "conj-aber",
    "nicht": "particle-nicht",
    "gelesen": "verb-lesen",
    "Heute": "adv-heute",
    "lese": "verb-lesen",
    "wieder": "wieder"
  },
  "reading-unit-07": {
    "Ich": "pron-ich",
    "lerne": "verb-lernen",
    "Deutsch": "Deutsch",
    "weil": "conj-weil",
    "ich": "pron-ich",
    "Bücher": "noun-buch",
    "lesen": "verb-lesen",
    "möchte": "verb-moegen",
    "weiß": "verb-wissen",
    "dass": "conj-dass",
    "Anna": "Anna",
    "auch": "particle-auch",
    "lernt": "verb-lernen",
    "Wenn": "conj-wenn",
    "Zeit": "noun-zeit",
    "habe": "verb-haben",
    "lese": "verb-lesen",
    "frage": "dict-15497623ef69ba44",
    "ob": "conj-ob",
    "sie": "pron-sie-singular",
    "den": "der",
    "Text": "noun-text",
    "versteht": "verb-verstehen",
    "Weil": "conj-weil",
    "gestern": "adv-gestern",
    "gearbeitet": "verb-arbeiten",
    "bin": "verb-sein",
    "müde": "adj-muede",
    "trotzdem": "adv-trotzdem",
    "Obwohl": "conj-obwohl",
    "der": "der",
    "schwierig": "adj-schwierig",
    "ist": "verb-sein",
    "verstehe": "verb-verstehen",
    "die": "die",
    "Frage": "dict-15497623ef69ba44",
    "Als": "conj-als",
    "in": "prep-in",
    "Berlin": "Berlin",
    "war": "verb-sein",
    "oft": "adv-oft",
    "gesprochen": "verb-sprechen"
  },
  "reading-unit-08": {
    "Anna": "Anna",
    "hat": "verb-haben",
    "einen": "ein",
    "Hund": "noun-hund",
    "Ihr": "reading-possessive-ihr",
    "ist": "verb-sein",
    "klein": "adj-klein",
    "Ich": "pron-ich",
    "spiele": "spielen",
    "mit": "prep-mit",
    "ihrem": "reading-possessive-ihr",
    "Das": "das",
    "Buch": "noun-buch",
    "meines": "pron-mein",
    "Lehrers": "noun-lehrer",
    "liegt": "verb-liegen",
    "auf": "prep-auf",
    "meinem": "pron-mein",
    "Tisch": "noun-tisch",
    "Die": "die",
    "Bücher": "noun-buch",
    "der": "der",
    "Kinder": "noun-kind",
    "liegen": "verb-liegen",
    "neben": "prep-neben",
    "dem": "der",
    "Fenster": "Fenster",
    "Heute": "adv-heute",
    "habe": "verb-haben",
    "ich": "pron-ich",
    "wenig": "wenig",
    "Zeit": "noun-zeit",
    "Wegen": "prep-wegen",
    "Arbeit": "noun-arbeit",
    "lese": "verb-lesen",
    "nicht": "particle-nicht",
    "Morgen": "adv-morgen",
    "werde": "verb-werden",
    "das": "das",
    "lesen": "verb-lesen",
    "wird": "verb-werden",
    "mir": "pron-ich",
    "helfen": "verb-helfen",
    "Dann": "dann",
    "die": "die",
    "Frage": "noun-frage",
    "verstehen": "verb-verstehen"
  }
};
window.DeutschData.readingVocabulary = [
  {
    "id": "reading-lex-zurechnen",
    "de": "zurechnen",
    "lemma": "zurechnen",
    "es": "atribuir; imputar",
    "en": "attribute; impute",
    "category": "verbos",
    "aliases": [
      "zurechnen",
      "zugerechnete"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-substantivieren",
    "de": "substantivieren",
    "lemma": "substantivieren",
    "es": "sustantivar",
    "en": "nominalise",
    "category": "verbos",
    "aliases": [
      "substantivieren",
      "substantivierte"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-feststehen",
    "de": "feststehen",
    "lemma": "feststehen",
    "es": "estar fijado/establecido",
    "en": "be fixed/established",
    "category": "verbos",
    "aliases": [
      "feststehen",
      "feststanden"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-jackentasche",
    "de": "die Jackentasche",
    "lemma": "Jackentasche",
    "es": "bolsillo de la chaqueta",
    "en": "jacket pocket",
    "category": "sustantivos",
    "aliases": [
      "jackentasche",
      "die jackentasche"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-geschaftsinhaber",
    "de": "der Geschäftsinhaber",
    "lemma": "Geschäftsinhaber",
    "es": "comerciante; dueño de un negocio",
    "en": "business owner",
    "category": "sustantivos",
    "aliases": [
      "geschäftsinhaber",
      "der geschäftsinhaber"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "der"
  },
  {
    "id": "reading-lex-erprobung",
    "de": "die Erprobung",
    "lemma": "Erprobung",
    "es": "prueba; ensayo",
    "en": "trial; testing",
    "category": "sustantivos",
    "aliases": [
      "erprobung",
      "die erprobung"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-zuganglichkeit",
    "de": "die Zugänglichkeit",
    "lemma": "Zugänglichkeit",
    "es": "accesibilidad",
    "en": "accessibility",
    "category": "sustantivos",
    "aliases": [
      "zugänglichkeit",
      "die zugänglichkeit"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-aufenthaltsqualitat",
    "de": "die Aufenthaltsqualität",
    "lemma": "Aufenthaltsqualität",
    "es": "calidad de un lugar para permanecer allí",
    "en": "quality of a place for spending time",
    "category": "sustantivos",
    "aliases": [
      "aufenthaltsqualität",
      "die aufenthaltsqualität"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-modell",
    "de": "das Modell",
    "lemma": "Modell",
    "es": "modelo",
    "en": "model",
    "category": "sustantivos",
    "aliases": [
      "modell",
      "das modell",
      "modelle",
      "modells"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "das"
  },
  {
    "id": "reading-lex-denkprozess",
    "de": "der Denkprozess",
    "lemma": "Denkprozess",
    "es": "proceso de pensamiento",
    "en": "thinking process",
    "category": "sustantivos",
    "aliases": [
      "denkprozess",
      "der denkprozess"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "der"
  },
  {
    "id": "reading-lex-messgrosse",
    "de": "die Messgröße",
    "lemma": "Messgröße",
    "es": "magnitud medida",
    "en": "measured quantity",
    "category": "sustantivos",
    "aliases": [
      "messgröße",
      "die messgröße",
      "messgrößen"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-zugverbindung",
    "de": "die Zugverbindung",
    "lemma": "Zugverbindung",
    "es": "conexión ferroviaria",
    "en": "rail connection",
    "category": "sustantivos",
    "aliases": [
      "zugverbindung",
      "die zugverbindung"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-originaltext",
    "de": "der Originaltext",
    "lemma": "Originaltext",
    "es": "texto original",
    "en": "original text",
    "category": "sustantivos",
    "aliases": [
      "originaltext",
      "der originaltext"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "der"
  },
  {
    "id": "reading-lex-lebensalter",
    "de": "das Lebensalter",
    "lemma": "Lebensalter",
    "es": "edad cronológica",
    "en": "chronological age",
    "category": "sustantivos",
    "aliases": [
      "lebensalter",
      "das lebensalter",
      "lebensalters"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "das"
  },
  {
    "id": "reading-lex-wahre",
    "de": "das Wahre",
    "lemma": "Wahre",
    "es": "lo verdadero; adjetivo sustantivado",
    "en": "the true; nominalised adjective",
    "category": "sustantivos",
    "aliases": [
      "wahre",
      "das wahre"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "das"
  },
  {
    "id": "reading-lex-ganze",
    "de": "das Ganze",
    "lemma": "Ganze",
    "es": "el todo; totalidad",
    "en": "the whole",
    "category": "sustantivos",
    "aliases": [
      "ganze",
      "das ganze"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "das"
  },
  {
    "id": "reading-lex-partizipialgruppe",
    "de": "die Partizipialgruppe",
    "lemma": "Partizipialgruppe",
    "es": "grupo participial",
    "en": "participial phrase",
    "category": "sustantivos",
    "aliases": [
      "partizipialgruppe",
      "die partizipialgruppe"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-relativsatz",
    "de": "der Relativsatz",
    "lemma": "Relativsatz",
    "es": "oración relativa",
    "en": "relative clause",
    "category": "sustantivos",
    "aliases": [
      "relativsatz",
      "der relativsatz"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "der"
  },
  {
    "id": "reading-lex-umformung",
    "de": "die Umformung",
    "lemma": "Umformung",
    "es": "reformulación; transformación",
    "en": "reformulation; transformation",
    "category": "sustantivos",
    "aliases": [
      "umformung",
      "die umformung"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-interpretation",
    "de": "die Interpretation",
    "lemma": "Interpretation",
    "es": "interpretación",
    "en": "interpretation",
    "category": "sustantivos",
    "aliases": [
      "interpretation",
      "die interpretation"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-erklarungsebene",
    "de": "die Erklärungsebene",
    "lemma": "Erklärungsebene",
    "es": "nivel explicativo",
    "en": "level of explanation",
    "category": "sustantivos",
    "aliases": [
      "erklärungsebene",
      "die erklärungsebene"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-vorhandensein",
    "de": "das Vorhandensein",
    "lemma": "Vorhandensein",
    "es": "presencia; existencia",
    "en": "presence; existence",
    "category": "sustantivos",
    "aliases": [
      "vorhandensein",
      "das vorhandensein"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "das"
  },
  {
    "id": "reading-lex-anpassungsgute",
    "de": "die Anpassungsgüte",
    "lemma": "Anpassungsgüte",
    "es": "calidad de ajuste",
    "en": "goodness of fit",
    "category": "sustantivos",
    "aliases": [
      "anpassungsgüte",
      "die anpassungsgüte"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-sichtung",
    "de": "die Sichtung",
    "lemma": "Sichtung",
    "es": "examen; revisión inicial",
    "en": "inspection; initial review",
    "category": "sustantivos",
    "aliases": [
      "sichtung",
      "die sichtung"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "article": "die"
  },
  {
    "id": "reading-lex-geehrt",
    "de": "geehrt",
    "lemma": "geehrt",
    "es": "estimado en saludo formal",
    "en": "honoured in formal address",
    "category": "adjetivos",
    "aliases": [
      "geehrt",
      "geehrte"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-anspruchsvoll",
    "de": "anspruchsvoll",
    "lemma": "anspruchsvoll",
    "es": "exigente",
    "en": "demanding",
    "category": "adjetivos",
    "aliases": [
      "anspruchsvoll",
      "anspruchsvollen"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-befristet",
    "de": "befristet",
    "lemma": "befristet",
    "es": "limitado en el tiempo",
    "en": "time-limited",
    "category": "adjetivos",
    "aliases": [
      "befristet",
      "befristete"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-systematisch",
    "de": "systematisch",
    "lemma": "systematisch",
    "es": "sistemático; sistemáticamente",
    "en": "systematic; systematically",
    "category": "adjetivos",
    "aliases": [
      "systematisch"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-konkurrierend",
    "de": "konkurrierend",
    "lemma": "konkurrierend",
    "es": "rival; competidor",
    "en": "competing",
    "category": "adjetivos",
    "aliases": [
      "konkurrierend",
      "konkurrierende"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-funktionalistisch",
    "de": "funktionalistisch",
    "lemma": "funktionalistisch",
    "es": "funcionalista",
    "en": "functionalist",
    "category": "adjetivos",
    "aliases": [
      "funktionalistisch",
      "funktionalistische"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-subjektiv",
    "de": "subjektiv",
    "lemma": "subjektiv",
    "es": "subjetivo; subjetivamente",
    "en": "subjective; subjectively",
    "category": "adjetivos",
    "aliases": [
      "subjektiv",
      "subjektive",
      "subjektiven"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-erklarungsbedurftig",
    "de": "erklärungsbedürftig",
    "lemma": "erklärungsbedürftig",
    "es": "que requiere explicación",
    "en": "requiring explanation",
    "category": "adjetivos",
    "aliases": [
      "erklärungsbedürftig"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-intern",
    "de": "intern",
    "lemma": "intern",
    "es": "interno",
    "en": "internal",
    "category": "adjetivos",
    "aliases": [
      "intern",
      "internen"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-beobachtbar",
    "de": "beobachtbar",
    "lemma": "beobachtbar",
    "es": "observable",
    "en": "observable",
    "category": "adjetivos",
    "aliases": [
      "beobachtbar",
      "beobachtbarem"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-hinreichend",
    "de": "hinreichend",
    "lemma": "hinreichend",
    "es": "suficiente",
    "en": "sufficient",
    "category": "adjetivos",
    "aliases": [
      "hinreichend",
      "hinreichenden"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-vorliegend",
    "de": "vorliegend",
    "lemma": "vorliegend",
    "es": "disponible; presente",
    "en": "available; at hand",
    "category": "adjetivos",
    "aliases": [
      "vorliegend",
      "vorliegenden"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-weiter",
    "de": "weiter",
    "lemma": "weiter",
    "es": "adicional; ulterior",
    "en": "further; additional",
    "category": "adjetivos",
    "aliases": [
      "weiter",
      "weitere"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-woraus",
    "de": "woraus",
    "lemma": "woraus",
    "es": "de qué; de lo que",
    "en": "from what",
    "category": "adverbios",
    "aliases": [
      "woraus"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-am",
    "de": "am",
    "lemma": "am",
    "es": "en el: an dem; con fecha/hora por/en",
    "en": "at/on the: an dem; with time at/on",
    "category": "preposiciones",
    "aliases": [
      "am"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-vom",
    "de": "vom",
    "lemma": "vom",
    "es": "del: von dem",
    "en": "of/from the: von dem",
    "category": "preposiciones",
    "aliases": [
      "vom"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-beim",
    "de": "beim",
    "lemma": "beim",
    "es": "en/al: bei dem",
    "en": "at/while: bei dem",
    "category": "preposiciones",
    "aliases": [
      "beim"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-lex-gabriel",
    "de": "Gabriel",
    "lemma": "Gabriel",
    "es": "Gabriel; nombre propio",
    "en": "Gabriel; proper name",
    "category": "nombres-propios",
    "aliases": [
      "gabriel",
      "gabriels"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-chile",
    "de": "Chile",
    "lemma": "Chile",
    "es": "Chile; país, nombre propio",
    "en": "Chile; country, proper name",
    "category": "nombres-propios",
    "aliases": [
      "chile",
      "chiles"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-santiago",
    "de": "Santiago",
    "lemma": "Santiago",
    "es": "Santiago; ciudad, nombre propio",
    "en": "Santiago; city, proper name",
    "category": "nombres-propios",
    "aliases": [
      "santiago",
      "santiagos"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-anna",
    "de": "Anna",
    "lemma": "Anna",
    "es": "Anna; nombre propio",
    "en": "Anna; proper name",
    "category": "nombres-propios",
    "aliases": [
      "anna",
      "annas"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-berlin",
    "de": "Berlin",
    "lemma": "Berlin",
    "es": "Berlín; ciudad, nombre propio",
    "en": "Berlin; city, proper name",
    "category": "nombres-propios",
    "aliases": [
      "berlin",
      "berlins"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-weber",
    "de": "Weber",
    "lemma": "Weber",
    "es": "Weber; apellido de la destinataria ficticia",
    "en": "Weber; fictional recipient’s surname",
    "category": "nombres-propios",
    "aliases": [
      "weber",
      "webers"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-daniel",
    "de": "Daniel",
    "lemma": "Daniel",
    "es": "Daniel; nombre propio",
    "en": "Daniel; proper name",
    "category": "nombres-propios",
    "aliases": [
      "daniel",
      "daniels"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-rojas",
    "de": "Rojas",
    "lemma": "Rojas",
    "es": "Rojas; apellido",
    "en": "Rojas; surname",
    "category": "nombres-propios",
    "aliases": [
      "rojas",
      "rojass"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-lea",
    "de": "Lea",
    "lemma": "Lea",
    "es": "Lea; nombre propio",
    "en": "Lea; proper name",
    "category": "nombres-propios",
    "aliases": [
      "lea",
      "leas"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-amir",
    "de": "Amir",
    "lemma": "Amir",
    "es": "Amir; nombre propio",
    "en": "Amir; proper name",
    "category": "nombres-propios",
    "aliases": [
      "amir",
      "amirs"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-wittgenstein",
    "de": "Wittgenstein",
    "lemma": "Wittgenstein",
    "es": "Wittgenstein; filósofo, nombre propio",
    "en": "Wittgenstein; philosopher, proper name",
    "category": "nombres-propios",
    "aliases": [
      "wittgenstein",
      "wittgensteins"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-hegel",
    "de": "Hegel",
    "lemma": "Hegel",
    "es": "Hegel; filósofo, nombre propio",
    "en": "Hegel; philosopher, proper name",
    "category": "nombres-propios",
    "aliases": [
      "hegel",
      "hegels"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "proper-name"
  },
  {
    "id": "reading-lex-house",
    "de": "house",
    "lemma": "house",
    "es": "house = casa en inglés; comparación interlingüística",
    "en": "house is English; used for cross-language comparison",
    "category": "otros",
    "aliases": [
      "house"
    ],
    "note": "Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.",
    "noteEn": "Original teaching gloss for the readings. Not an imported entry or a CEFR classification.",
    "source": {
      "name": "Deutsch Dicht · glosa didáctica original",
      "kind": "original-teaching-gloss"
    },
    "contextualKind": "foreign-word"
  },
  {
    "id": "reading-article-der",
    "de": "der",
    "lemma": "der",
    "es": "el; artículo definido masculino (Nom); den Akk, dem Dat, des Gen",
    "en": "the; masculine definite article (Nom); den Akk, dem Dat, des Gen",
    "category": "articulos",
    "aliases": [
      "der",
      "den",
      "dem",
      "des"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-article-die",
    "de": "die",
    "lemma": "die",
    "es": "la/los/las; femenino o plural; der Dat/Gen femenino, den Dat plural",
    "en": "the; feminine or plural; der feminine Dat/Gen, den plural Dat",
    "category": "articulos",
    "aliases": [
      "die",
      "der",
      "den"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-article-das",
    "de": "das",
    "lemma": "das",
    "es": "el/la neutro; Nom/Akk das, Dat dem, Gen des",
    "en": "the neuter; Nom/Akk das, Dat dem, Gen des",
    "category": "articulos",
    "aliases": [
      "das",
      "dem",
      "des"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-determiner-all",
    "de": "all / alle / alles",
    "lemma": "all",
    "es": "todo; todos; alles todo (pronombre), alle todos (plural); se declina según uso",
    "en": "all; everything; alles everything (pronoun), alle all (plural); declines with usage",
    "category": "pronombres",
    "aliases": [
      "all",
      "alle",
      "alles",
      "allen",
      "aller"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-prefix-auf-aufstehen",
    "de": "auf · prefijo de aufstehen",
    "lemma": "auf",
    "es": "prefijo separable de aufstehen: levantarse; no es preposición en esta frase",
    "en": "separable prefix of aufstehen: get up; not a preposition in this sentence",
    "category": "partículas",
    "aliases": [
      "auf"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-prefix-an-anfangen",
    "de": "an · prefijo de anfangen",
    "lemma": "an",
    "es": "prefijo separable de anfangen: empezar; no es preposición en esta frase",
    "en": "separable prefix of anfangen: begin; not a preposition in this sentence",
    "category": "partículas",
    "aliases": [
      "an"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-adverb-damit",
    "de": "damit",
    "lemma": "damit",
    "es": "con ello; de ese modo (adverbio pronominal)",
    "en": "with this; thereby (pronominal adverb)",
    "category": "adverbios",
    "aliases": [
      "damit"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-adverb-zu",
    "de": "zu",
    "lemma": "zu",
    "es": "demasiado (ante adjetivo/adverbio)",
    "en": "too (before an adjective/adverb)",
    "category": "adverbios",
    "aliases": [
      "zu"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-particle-zu",
    "de": "zu · Infinitiv",
    "lemma": "zu",
    "es": "marcador de infinitivo; no se traduce siempre con a/para",
    "en": "infinitive marker; not always translated with to",
    "category": "partículas",
    "aliases": [
      "zu"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-particle-als",
    "de": "als · función",
    "lemma": "als",
    "es": "como; en función de, no cuando (en este uso)",
    "en": "as; in the role of, not when (in this use)",
    "category": "partículas",
    "aliases": [
      "als"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-possessive-ihr",
    "de": "ihr / ihre",
    "lemma": "ihr",
    "es": "su; suyo de ella/ellos (posesivo); la terminación concuerda con lo poseído",
    "en": "her/their (possessive); ending agrees with the possessed noun",
    "category": "pronombres",
    "aliases": [
      "ihr",
      "ihre",
      "ihren",
      "ihrem",
      "ihrer",
      "ihres"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-possessive-Ihr",
    "de": "Ihr / Ihre",
    "lemma": "Ihr",
    "es": "su; suyo de usted/ustedes (posesivo formal); mayúscula de cortesía",
    "en": "formal your (possessive); capitalised for formal address",
    "category": "pronombres",
    "aliases": [
      "Ihr",
      "Ihre",
      "Ihren",
      "Ihrem",
      "Ihrer",
      "Ihres"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  },
  {
    "id": "reading-possessive-sein",
    "de": "sein / seine",
    "lemma": "sein",
    "es": "su; suyo de él/ello (posesivo); la terminación concuerda con lo poseído",
    "en": "his/its (possessive); ending agrees with the possessed noun",
    "category": "pronombres",
    "aliases": [
      "sein",
      "seine",
      "seinen",
      "seinem",
      "seiner",
      "seines"
    ],
    "source": {
      "name": "Deutsch Dicht · gramática de referencia",
      "kind": "original-teaching-gloss"
    }
  }
];
