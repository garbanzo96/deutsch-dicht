/* Bilingual, applied instructional layer. Existing IDs remain stable. */
window.DeutschData = window.DeutschData || {};
window.DeutschData.lessonSupport = {
  "unit-01": {
    "overview": {
      "es": "Construye una proposición y cambia el primer constituyente sin perder V2. Memoriza sein y las terminaciones; aus Chile / in Santiago funcionan aquí como expresiones completas.",
      "en": "Build a proposition and change the first constituent without losing V2. Memorise sein and the endings; aus Chile / in Santiago are learned here as complete expressions."
    },
    "steps": [
      {
        "es": "Reconstruye sujeto → verbo conjugado → complemento. La posición cuenta constituyentes, no palabras.",
        "en": "Reconstruct subject → finite verb → complement. Positions count constituents, not words."
      },
      {
        "es": "Contrasta come / comes con komme / kommst / kommt; el alemán distingue más personas que el inglés.",
        "en": "Contrast come / comes with komme / kommst / kommt; German marks more persons than English."
      },
      {
        "es": "Recupera el paradigma sin verlo; después lee y transforma Ich komme… → Heute komme ich…",
        "en": "Recall the paradigm without looking; then read and transform Ich komme… → Heute komme ich…"
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Präsens aplicado · ser/estar, venir, llamarse y residir",
          "en": "Applied Präsens · be, come, be called and live"
        },
        "columns": [
          {
            "es": "Persona",
            "en": "Person"
          },
          {
            "es": "sein",
            "en": "sein"
          },
          {
            "es": "kommen",
            "en": "kommen"
          },
          {
            "es": "heißen",
            "en": "heißen"
          },
          {
            "es": "wohnen",
            "en": "wohnen"
          },
          {
            "es": "sprechen",
            "en": "sprechen"
          }
        ],
        "rows": [
          [
            "ich",
            "bin",
            "komme",
            "heiße",
            "wohne",
            "spreche"
          ],
          [
            "du",
            "bist",
            "kommst",
            "heißt",
            "wohnst",
            "sprichst"
          ],
          [
            "er / sie / es",
            "ist",
            "kommt",
            "heißt",
            "wohnt",
            "spricht"
          ],
          [
            "wir",
            "sind",
            "kommen",
            "heißen",
            "wohnen",
            "sprechen"
          ],
          [
            "ihr",
            "seid",
            "kommt",
            "heißt",
            "wohnt",
            "sprecht"
          ],
          [
            "sie / Sie",
            "sind",
            "kommen",
            "heißen",
            "wohnen",
            "sprechen"
          ]
        ],
        "note": {
          "es": "er/sie/es comparten forma; sie/Sie = ellos/usted(es). sprechen cambia e→i en du/er. Nominativ: ich es sujeto.",
          "en": "er/sie/es share a form; sie/Sie = they/formal you. sprechen changes e→i in du/er. Nominativ: ich is the subject."
        }
      },
      {
        "title": {
          "es": "V2 aplicado · una posición puede tener varias palabras",
          "en": "Applied V2 · a position may contain several words"
        },
        "columns": [
          {
            "es": "Posición 1",
            "en": "Position 1"
          },
          {
            "es": "Verbo (2)",
            "en": "Verb (2)"
          },
          {
            "es": "Resto",
            "en": "Remainder"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "Ich",
            "komme",
            "aus Chile.",
            {
              "es": "Soy de Chile.",
              "en": "I am from Chile."
            }
          ],
          [
            "Heute",
            "wohne",
            "ich in Santiago.",
            {
              "es": "Hoy vivo en Santiago.",
              "en": "Today I live in Santiago."
            }
          ],
          [
            "Der Lehrer",
            "heißt",
            "Paul.",
            {
              "es": "El profesor se llama Paul.",
              "en": "The teacher is called Paul."
            }
          ],
          [
            "Wir",
            "sind",
            "hier.",
            {
              "es": "Estamos aquí.",
              "en": "We are here."
            }
          ]
        ],
        "note": {
          "es": "El inglés mantiene normalmente sujeto–verbo; V2 permite adelantar Heute. Sustantivos con mayúscula; Lehrer = profesor.",
          "en": "English normally keeps subject–verb order; V2 allows Heute first. Nouns are capitalised; Lehrer = teacher."
        }
      }
    ],
    "primaryReadingId": "reading-unit-01",
    "readingSequence": [
      "reading-unit-01"
    ],
    "prerequisites": [],
    "readingGrammarIds": [
      "present",
      "personal-pronouns",
      "word-order"
    ],
    "additionalVocabIds": [
      "pron-ich",
      "verb-heissen",
      "verb-kommen",
      "prep-aus",
      "adv-jetzt",
      "verb-wohnen",
      "prep-in",
      "verb-sprechen",
      "conj-und",
      "verb-lernen",
      "adv-heute",
      "pron-du",
      "particle-auch",
      "pron-wir",
      "verb-sein",
      "adv-hier",
      "noun-sprache",
      "adj-interessant"
    ]
  },
  "unit-02": {
    "overview": {
      "es": "Distingue Nominativ (sujeto) y Akkusativ (objeto de sehen/haben). Aprende artículo + nombre + plural como una entrada.",
      "en": "Distinguish Nominativ (subject) and Akkusativ (object of sehen/haben). Learn article + noun + plural as one entry."
    },
    "steps": [
      {
        "es": "Marca quién ve y qué ve antes de elegir el artículo.",
        "en": "Mark who sees and what is seen before choosing the article."
      },
      {
        "es": "Alterna nombre y pronombre: Ich sehe den Hund → Ich sehe ihn.",
        "en": "Alternate noun and pronoun: Ich sehe den Hund → Ich sehe ihn."
      },
      {
        "es": "Consulta las cuatro filas como mapa; hoy recupera solo Nom/Akk. Dativo y genitivo se trabajan en U05/U08.",
        "en": "Use the four rows as a map; recall only Nom/Akk today. Dative and genitive are practised in U05/U08."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Artikel + Nomen · definido, cuatro casos aplicados",
          "en": "Artikel + Nomen · definite, four applied cases"
        },
        "columns": [
          {
            "es": "Caso",
            "en": "Case"
          },
          {
            "es": "Masculino",
            "en": "Masculine"
          },
          {
            "es": "Femenino",
            "en": "Feminine"
          },
          {
            "es": "Neutro",
            "en": "Neuter"
          },
          {
            "es": "Plural",
            "en": "Plural"
          }
        ],
        "rows": [
          [
            "Nom",
            "der Hund",
            "die Frau",
            "das Buch",
            "die Hunde"
          ],
          [
            "Akk",
            "den Hund",
            "die Frau",
            "das Buch",
            "die Hunde"
          ],
          [
            "Dat · U05",
            "dem Hund",
            "der Frau",
            "dem Buch",
            "den Hunden"
          ],
          [
            "Gen · U08",
            "des Hundes",
            "der Frau",
            "des Buches",
            "der Hunde"
          ]
        ],
        "note": {
          "es": "Hund perro; Frau mujer; Buch libro. Gen singular masculino/neutro añade -(e)s; Dat plural añade -n. Las dos últimas filas son referencia anticipada.",
          "en": "Hund dog; Frau woman; Buch book. Masculine/neuter Gen singular adds -(e)s; Dat plural adds -n. The last two rows are advance reference."
        }
      },
      {
        "title": {
          "es": "ein aplicado · indefinido y ausencia de plural",
          "en": "Applied ein · indefinite and no plural form"
        },
        "columns": [
          {
            "es": "Caso",
            "en": "Case"
          },
          {
            "es": "Masculino",
            "en": "Masculine"
          },
          {
            "es": "Femenino",
            "en": "Feminine"
          },
          {
            "es": "Neutro",
            "en": "Neuter"
          },
          {
            "es": "Plural",
            "en": "Plural"
          }
        ],
        "rows": [
          [
            "Nom",
            "ein Hund",
            "eine Frau",
            "ein Buch",
            "Hunde (∅)"
          ],
          [
            "Akk",
            "einen Hund",
            "eine Frau",
            "ein Buch",
            "Hunde (∅)"
          ],
          [
            "Dat · U05",
            "einem Hund",
            "einer Frau",
            "einem Buch",
            "Hunden (∅)"
          ],
          [
            "Gen · U08",
            "eines Hundes",
            "einer Frau",
            "eines Buches",
            "Hunde (∅)"
          ]
        ],
        "note": {
          "es": "ein no tiene plural. der→den / ein→einen únicamente en masculino Akk singular.",
          "en": "ein has no plural. der→den / ein→einen only in masculine Akk singular."
        }
      },
      {
        "title": {
          "es": "Pronombres y verbos · ver/tener",
          "en": "Pronouns and verbs · see/have"
        },
        "columns": [
          {
            "es": "Sujeto",
            "en": "Subject"
          },
          {
            "es": "Objeto Akk",
            "en": "Akk object"
          },
          {
            "es": "sehen",
            "en": "sehen"
          },
          {
            "es": "haben",
            "en": "haben"
          }
        ],
        "rows": [
          [
            "ich",
            "mich",
            "sehe",
            "habe"
          ],
          [
            "du",
            "dich",
            "siehst",
            "hast"
          ],
          [
            "er",
            "ihn",
            "sieht",
            "hat"
          ],
          [
            "sie",
            "sie",
            "sieht",
            "hat"
          ],
          [
            "es",
            "es",
            "sieht",
            "hat"
          ],
          [
            "wir",
            "uns",
            "sehen",
            "haben"
          ],
          [
            "ihr",
            "euch",
            "seht",
            "habt"
          ],
          [
            "sie / Sie",
            "sie / Sie",
            "sehen",
            "haben"
          ]
        ],
        "note": {
          "es": "Ich sehe den Hund = veo al perro; Ich sehe ihn = lo veo. El género del pronombre sigue al nombre alemán.",
          "en": "Ich sehe den Hund = I see the dog; Ich sehe ihn = I see him/it. The pronoun follows the German noun’s gender."
        }
      }
    ],
    "primaryReadingId": "reading-unit-02",
    "readingSequence": [
      "reading-unit-02"
    ],
    "prerequisites": [
      "unit-01"
    ],
    "readingGrammarIds": [
      "articles",
      "cases",
      "accusative",
      "personal-pronouns"
    ],
    "additionalVocabIds": [
      "noun-mann",
      "verb-haben",
      "noun-hund",
      "verb-sehen",
      "noun-frau",
      "noun-buch",
      "verb-sein",
      "adj-interessant",
      "pron-ich",
      "pron-er",
      "pron-du",
      "verb-lesen",
      "pron-es",
      "pron-wir"
    ]
  },
  "unit-03": {
    "overview": {
      "es": "Pregunta por una posición vacía; después niega el elemento preciso. kein modifica el nombre, nicht modifica la proposición o un constituyente.",
      "en": "Ask for a missing constituent; then negate the precise element. kein modifies a noun, nicht a proposition or constituent."
    },
    "steps": [
      {
        "es": "Transforma afirmación → pregunta sí/no (verbo primero) → W-Frage (interrogativo primero).",
        "en": "Transform statement → yes/no question (verb first) → W-Frage (question word first)."
      },
      {
        "es": "Elige kein con nombre indefinido; elige nicht para adjetivo, verbo o contraste.",
        "en": "Choose kein with an indefinite noun; choose nicht for an adjective, verb or contrast."
      },
      {
        "es": "La traducción no determina por sí sola el caso: wer sujeto, wen objeto, wem destinatario (U05).",
        "en": "Translation alone does not determine case: wer subject, wen object, wem recipient (U05)."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Preguntas aplicadas · misma información, tres estructuras",
          "en": "Applied questions · same information, three structures"
        },
        "columns": [
          {
            "es": "Función",
            "en": "Function"
          },
          {
            "es": "Estructura",
            "en": "Structure"
          },
          {
            "es": "Ejemplo",
            "en": "Example"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            {
              "es": "Afirmación",
              "en": "Statement"
            },
            {
              "es": "sujeto + verbo + resto",
              "en": "subject + verb + remainder"
            },
            "Du liest ein Buch.",
            {
              "es": "Lees un libro.",
              "en": "You read a book."
            }
          ],
          [
            {
              "es": "Sí/no",
              "en": "Yes/no"
            },
            {
              "es": "verbo + sujeto + resto",
              "en": "verb + subject + remainder"
            },
            "Liest du ein Buch?",
            {
              "es": "¿Lees un libro?",
              "en": "Do you read a book?"
            }
          ],
          [
            {
              "es": "Objeto",
              "en": "Object"
            },
            {
              "es": "was + verbo + sujeto",
              "en": "was + verb + subject"
            },
            "Was liest du?",
            {
              "es": "¿Qué lees?",
              "en": "What do you read?"
            }
          ],
          [
            {
              "es": "Sujeto",
              "en": "Subject"
            },
            {
              "es": "wer + verbo + resto",
              "en": "wer + verb + remainder"
            },
            "Wer liest das Buch?",
            {
              "es": "¿Quién lee el libro?",
              "en": "Who reads the book?"
            }
          ],
          [
            {
              "es": "Lugar / origen",
              "en": "Place / origin"
            },
            {
              "es": "wo / woher + verbo",
              "en": "wo / woher + verb"
            },
            "Wo wohnst du? / Woher kommst du?",
            {
              "es": "¿Dónde vives? / ¿De dónde eres?",
              "en": "Where do you live? / Where are you from?"
            }
          ]
        ],
        "note": {
          "es": "was qué; wer quién; wen a quién (Akk); wo dónde; woher de dónde; wann cuándo; wie cómo; warum por qué.",
          "en": "was what; wer who; wen whom (Akk); wo where; woher where from; wann when; wie how; warum why."
        }
      },
      {
        "title": {
          "es": "kein / nicht aplicado · el alcance decide",
          "en": "Applied kein / nicht · scope determines the choice"
        },
        "columns": [
          {
            "es": "Base",
            "en": "Base"
          },
          {
            "es": "Negación",
            "en": "Negation"
          },
          {
            "es": "Lectura",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "Ich habe einen Hund.",
            "Ich habe keinen Hund.",
            {
              "es": "No tengo perro.",
              "en": "I do not have a dog."
            }
          ],
          [
            "Ich habe ein Buch.",
            "Ich habe kein Buch.",
            {
              "es": "No tengo libro.",
              "en": "I do not have a book."
            }
          ],
          [
            "Ich habe Bücher.",
            "Ich habe keine Bücher.",
            {
              "es": "No tengo libros.",
              "en": "I do not have books."
            }
          ],
          [
            "Der Text ist einfach.",
            "Der Text ist nicht einfach.",
            {
              "es": "El texto no es simple.",
              "en": "The text is not simple."
            }
          ],
          [
            "Ich lese das Buch.",
            "Ich lese das Buch nicht.",
            {
              "es": "No leo ese libro.",
              "en": "I am not reading that book."
            }
          ],
          [
            "Ich wohne in Berlin.",
            "Ich wohne nicht in Berlin.",
            {
              "es": "No vivo en Berlín.",
              "en": "I do not live in Berlin."
            }
          ]
        ],
        "note": {
          "es": "kein se declina como ein y sí tiene plural. nicht precede al adjetivo o al complemento negado; la negación global depende de la estructura.",
          "en": "kein declines like ein and does have plural forms. nicht precedes a negated adjective or complement; sentence negation depends on structure."
        }
      }
    ],
    "primaryReadingId": "reading-unit-03",
    "readingSequence": [
      "reading-unit-03"
    ],
    "prerequisites": [
      "unit-02"
    ],
    "readingGrammarIds": [
      "questions",
      "negation",
      "word-order"
    ],
    "additionalVocabIds": [
      "verb-lesen",
      "pron-du",
      "noun-buch",
      "pron-ich",
      "particle-kein",
      "noun-text",
      "verb-sein",
      "adj-schwierig",
      "pron-er",
      "particle-nicht",
      "adj-einfach",
      "pron-was",
      "verb-verstehen",
      "noun-frage",
      "verb-kennen",
      "noun-antwort",
      "pron-wer",
      "adv-vielleicht"
    ]
  },
  "unit-04": {
    "overview": {
      "es": "Construye el marco verbal: modal conjugado + infinitivo, o verbo conjugado + prefijo separable. Distingue capacidad, obligación, permiso y deseo.",
      "en": "Build the verbal bracket: finite modal + infinitive, or finite verb + separable prefix. Distinguish ability, obligation, permission and desire."
    },
    "steps": [
      {
        "es": "Recupera cada modal con significado y las seis personas; ich/er suelen coincidir.",
        "en": "Recall each modal with its meaning and all six persons; ich/er usually coincide."
      },
      {
        "es": "Mueve el sujeto sin abrir el infinitivo o perder el prefijo final.",
        "en": "Move the subject without splitting the infinitive or losing the final prefix."
      },
      {
        "es": "No tener que ≠ no tener permiso: nicht müssen / nicht dürfen.",
        "en": "Not having to ≠ not being allowed to: nicht müssen / nicht dürfen."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Modalverben · paradigma completo del presente",
          "en": "Modalverben · complete present paradigm"
        },
        "columns": [
          {
            "es": "Persona",
            "en": "Person"
          },
          {
            "es": "können",
            "en": "können"
          },
          {
            "es": "müssen",
            "en": "müssen"
          },
          {
            "es": "wollen",
            "en": "wollen"
          },
          {
            "es": "dürfen",
            "en": "dürfen"
          },
          {
            "es": "sollen",
            "en": "sollen"
          },
          {
            "es": "mögen",
            "en": "mögen"
          },
          {
            "es": "möchten",
            "en": "möchten"
          }
        ],
        "rows": [
          [
            "ich",
            "kann",
            "muss",
            "will",
            "darf",
            "soll",
            "mag",
            "möchte"
          ],
          [
            "du",
            "kannst",
            "musst",
            "willst",
            "darfst",
            "sollst",
            "magst",
            "möchtest"
          ],
          [
            "er / sie / es",
            "kann",
            "muss",
            "will",
            "darf",
            "soll",
            "mag",
            "möchte"
          ],
          [
            "wir",
            "können",
            "müssen",
            "wollen",
            "dürfen",
            "sollen",
            "mögen",
            "möchten"
          ],
          [
            "ihr",
            "könnt",
            "müsst",
            "wollt",
            "dürft",
            "sollt",
            "mögt",
            "möchtet"
          ],
          [
            "sie / Sie",
            "können",
            "müssen",
            "wollen",
            "dürfen",
            "sollen",
            "mögen",
            "möchten"
          ]
        ],
        "note": {
          "es": "können poder/saber; müssen tener que; wollen querer; dürfen tener permiso; sollen deber por encargo; mögen gustar; möchten quisiera/querer cortés (Konjunktiv II de mögen, aprendido aquí como patrón).",
          "en": "können can/be able; müssen must/have to; wollen want; dürfen may/be allowed; sollen be supposed to; mögen like; möchten would like (Konjunktiv II of mögen, learned here as a pattern)."
        }
      },
      {
        "title": {
          "es": "Satzklammer · marcos aplicados",
          "en": "Satzklammer · applied verbal brackets"
        },
        "columns": [
          {
            "es": "Posición 1",
            "en": "Position 1"
          },
          {
            "es": "Conjugado",
            "en": "Finite verb"
          },
          {
            "es": "Centro",
            "en": "Middle"
          },
          {
            "es": "Final",
            "en": "Final"
          }
        ],
        "rows": [
          [
            "Ich",
            "kann",
            "Deutsch",
            "lernen."
          ],
          [
            "Heute",
            "muss",
            "ich früh",
            "aufstehen."
          ],
          [
            "Ich",
            "stehe",
            "um sieben Uhr",
            "auf."
          ],
          [
            "Er",
            "fängt",
            "um neun Uhr",
            "an."
          ],
          [
            "Du",
            "darfst",
            "hier nicht",
            "arbeiten."
          ],
          [
            "Du",
            "musst",
            "heute nicht",
            "arbeiten."
          ]
        ],
        "note": {
          "es": "aufstehen levantarse; anfangen empezar; früh temprano; um sieben Uhr a las siete. Los infinitivos separables permanecen unidos detrás del modal.",
          "en": "aufstehen get up; anfangen begin; früh early; um sieben Uhr at seven. Separable infinitives remain joined after a modal."
        }
      }
    ],
    "primaryReadingId": "reading-unit-04",
    "readingSequence": [
      "reading-unit-04"
    ],
    "prerequisites": [
      "unit-03"
    ],
    "readingGrammarIds": [
      "modal-verbs",
      "word-order",
      "numbers"
    ],
    "additionalVocabIds": [
      "pron-ich",
      "verb-aufstehen",
      "prep-um",
      "noun-uhr",
      "adv-heute",
      "verb-muessen",
      "verb-arbeiten",
      "verb-koennen",
      "verb-lernen",
      "conj-aber",
      "verb-anfangen",
      "verb-moegen",
      "noun-buch",
      "verb-lesen",
      "pron-sie-singular",
      "verb-duerfen",
      "adv-hier",
      "particle-nicht",
      "pron-du",
      "verb-sprechen",
      "particle-ja"
    ]
  },
  "unit-05": {
    "overview": {
      "es": "El caso está regido por el verbo o la preposición. En espacio, contrasta ubicación con destino/cambio de relación, no inmovilidad con movimiento.",
      "en": "Case is governed by the verb or preposition. In space, contrast location with destination/change of relation, not stillness with movement."
    },
    "steps": [
      {
        "es": "Reconstruye sujeto, destinatario Dat y objeto Akk: Ich gebe dem Kind das Buch.",
        "en": "Reconstruct subject, Dat recipient and Akk object: Ich gebe dem Kind das Buch."
      },
      {
        "es": "Aprende helfen + Dat y las preposiciones de dativo como régimen léxico.",
        "en": "Learn helfen + Dat and dative prepositions as lexical government."
      },
      {
        "es": "Compara sobre la mesa / hacia la mesa y movimiento dentro de un lugar.",
        "en": "Compare on the table / onto the table, and movement within a place."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Dativ aplicado · pronombres y tres géneros",
          "en": "Applied Dativ · pronouns and three genders"
        },
        "columns": [
          {
            "es": "Nom",
            "en": "Nom"
          },
          {
            "es": "Dat",
            "en": "Dat"
          },
          {
            "es": "Ejemplo",
            "en": "Example"
          }
        ],
        "rows": [
          [
            "ich",
            "mir",
            "Der Lehrer hilft mir."
          ],
          [
            "du",
            "dir",
            "Ich helfe dir."
          ],
          [
            "er",
            "ihm",
            "Ich helfe dem Mann / ihm."
          ],
          [
            "sie",
            "ihr",
            "Ich helfe der Frau / ihr."
          ],
          [
            "es",
            "ihm",
            "Ich helfe dem Kind / ihm."
          ],
          [
            "wir",
            "uns",
            "Er hilft uns."
          ],
          [
            "ihr",
            "euch",
            "Er hilft euch."
          ],
          [
            "sie / Sie",
            "ihnen / Ihnen",
            "Ich helfe den Kindern / ihnen / Ihnen."
          ]
        ],
        "note": {
          "es": "helfen ayudar exige Dat. geben dar: ich gebe, du gibst, er gibt, wir geben, ihr gebt, sie geben. Den Kindern: plural añade -n.",
          "en": "helfen help requires Dat. geben give: ich gebe, du gibst, er gibt, wir geben, ihr gebt, sie geben. Den Kindern: plural adds -n."
        }
      },
      {
        "title": {
          "es": "Wechselpräpositionen · las nueve aplicadas",
          "en": "Wechselpräpositionen · all nine applied"
        },
        "columns": [
          {
            "es": "Preposición",
            "en": "Preposition"
          },
          {
            "es": "Ubicación · Dat",
            "en": "Location · Dat"
          },
          {
            "es": "Destino · Akk",
            "en": "Destination · Akk"
          }
        ],
        "rows": [
          [
            "an",
            "Das Bild hängt an der Wand.",
            "Ich hänge das Bild an die Wand."
          ],
          [
            "auf",
            "Das Buch liegt auf dem Tisch.",
            "Ich lege das Buch auf den Tisch."
          ],
          [
            "hinter",
            "Der Stuhl steht hinter dem Tisch.",
            "Ich stelle den Stuhl hinter den Tisch."
          ],
          [
            "in",
            "Ich bin im Zimmer.",
            "Ich gehe ins Zimmer."
          ],
          [
            "neben",
            "Der Stuhl steht neben dem Bett.",
            "Ich stelle den Stuhl neben das Bett."
          ],
          [
            "über",
            "Die Lampe hängt über dem Tisch.",
            "Ich hänge die Lampe über den Tisch."
          ],
          [
            "unter",
            "Das Buch liegt unter dem Tisch.",
            "Ich lege das Buch unter den Tisch."
          ],
          [
            "vor",
            "Der Stuhl steht vor dem Fenster.",
            "Ich stelle den Stuhl vor das Fenster."
          ],
          [
            "zwischen",
            "Der Stuhl steht zwischen dem Tisch und dem Bett.",
            "Ich stelle den Stuhl zwischen den Tisch und das Bett."
          ]
        ],
        "note": {
          "es": "Wand pared; Bild cuadro; Lampe lámpara; Bett cama; Fenster ventana. liegen/stehen ubicación; legen/stellen colocar. Ich laufe im Park usa Dat aunque hay movimiento.",
          "en": "Wand wall; Bild picture; Lampe lamp; Bett bed; Fenster window. liegen/stehen location; legen/stellen placement. Ich laufe im Park uses Dat despite movement."
        }
      }
    ],
    "primaryReadingId": "reading-unit-05",
    "readingSequence": [
      "reading-unit-05"
    ],
    "prerequisites": [
      "unit-04"
    ],
    "readingGrammarIds": [
      "dative",
      "prepositions",
      "two-way-prepositions"
    ],
    "additionalVocabIds": [
      "noun-buch",
      "verb-liegen",
      "prep-auf",
      "noun-tisch",
      "pron-ich",
      "noun-stuhl",
      "prep-neben",
      "verb-stellen",
      "prep-vor",
      "verb-sein",
      "noun-zimmer",
      "verb-gehen",
      "verb-geben",
      "noun-kind",
      "verb-helfen",
      "pron-wir",
      "verb-sprechen",
      "prep-mit",
      "noun-lehrer"
    ]
  },
  "unit-06": {
    "overview": {
      "es": "Expresa anterioridad conversacional con Perfekt y reconoce Präteritum. El auxiliar se elige por verbo y uso, no por traducción.",
      "en": "Express conversational past with Perfekt and recognise Präteritum. Choose the auxiliary by verb and usage, not translation."
    },
    "steps": [
      {
        "es": "Separa auxiliar conjugado y participio final; reconstruye el infinitivo.",
        "en": "Separate finite auxiliary and final participle; reconstruct the infinitive."
      },
      {
        "es": "Memoriza las formas principales de los verbos frecuentes, incluidas las separables.",
        "en": "Memorise principal parts of frequent verbs, including separable verbs."
      },
      {
        "es": "Contrasta presente → Präteritum → Perfekt; no confundas tiempo con modo.",
        "en": "Contrast present → Präteritum → Perfekt; do not confuse tense with mood."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Formas principales aplicadas · pasado y auxiliar",
          "en": "Applied principal parts · past and auxiliary"
        },
        "columns": [
          {
            "es": "Infinitivo",
            "en": "Infinitive"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          },
          {
            "es": "Präteritum ich/er",
            "en": "Präteritum ich/er"
          },
          {
            "es": "Perfekt ich",
            "en": "Perfekt ich"
          }
        ],
        "rows": [
          [
            "lernen",
            {
              "es": "aprender",
              "en": "learn"
            },
            "lernte",
            "habe gelernt"
          ],
          [
            "arbeiten",
            {
              "es": "trabajar",
              "en": "work"
            },
            "arbeitete",
            "habe gearbeitet"
          ],
          [
            "lesen",
            {
              "es": "leer",
              "en": "read"
            },
            "las",
            "habe gelesen"
          ],
          [
            "sehen",
            {
              "es": "ver",
              "en": "see"
            },
            "sah",
            "habe gesehen"
          ],
          [
            "schreiben",
            {
              "es": "escribir",
              "en": "write"
            },
            "schrieb",
            "habe geschrieben"
          ],
          [
            "verstehen",
            {
              "es": "entender",
              "en": "understand"
            },
            "verstand",
            "habe verstanden"
          ],
          [
            "denken",
            {
              "es": "pensar",
              "en": "think"
            },
            "dachte",
            "habe gedacht"
          ],
          [
            "treffen",
            {
              "es": "encontrarse con",
              "en": "meet"
            },
            "traf",
            "habe getroffen"
          ],
          [
            "besuchen",
            {
              "es": "visitar",
              "en": "visit"
            },
            "besuchte",
            "habe besucht"
          ],
          [
            "gehen",
            {
              "es": "ir",
              "en": "go"
            },
            "ging",
            "bin gegangen"
          ],
          [
            "fahren",
            {
              "es": "viajar (intransitivo)",
              "en": "travel (intransitive)"
            },
            "fuhr",
            "bin gefahren"
          ],
          [
            "kommen",
            {
              "es": "venir",
              "en": "come"
            },
            "kam",
            "bin gekommen"
          ],
          [
            "ankommen",
            {
              "es": "llegar",
              "en": "arrive"
            },
            "kam an",
            "bin angekommen"
          ],
          [
            "aufstehen",
            {
              "es": "levantarse",
              "en": "get up"
            },
            "stand auf",
            "bin aufgestanden"
          ],
          [
            "bleiben",
            {
              "es": "quedarse",
              "en": "stay"
            },
            "blieb",
            "bin geblieben"
          ],
          [
            "werden",
            {
              "es": "volverse",
              "en": "become"
            },
            "wurde",
            "bin geworden"
          ],
          [
            "sein",
            {
              "es": "ser/estar",
              "en": "be"
            },
            "war",
            "bin gewesen"
          ]
        ],
        "note": {
          "es": "fahren con objeto puede usar haben: Ich habe das Auto gefahren. be-/ver-/ent- y -ieren no llevan ge-. Para sein se practican cambios de lugar/estado intransitivos y los verbos señalados.",
          "en": "Transitive fahren can use haben: Ich habe das Auto gefahren. be-/ver-/ent- and -ieren take no ge-. Practise sein with the intransitive changes of location/state and listed verbs."
        }
      },
      {
        "title": {
          "es": "Präteritum aplicado · paradigma de pasado",
          "en": "Applied Präteritum · past paradigm"
        },
        "columns": [
          {
            "es": "Persona",
            "en": "Person"
          },
          {
            "es": "sein",
            "en": "sein"
          },
          {
            "es": "haben",
            "en": "haben"
          },
          {
            "es": "lernen",
            "en": "lernen"
          },
          {
            "es": "lesen",
            "en": "lesen"
          }
        ],
        "rows": [
          [
            "ich",
            "war",
            "hatte",
            "lernte",
            "las"
          ],
          [
            "du",
            "warst",
            "hattest",
            "lerntest",
            "lasest"
          ],
          [
            "er / sie / es",
            "war",
            "hatte",
            "lernte",
            "las"
          ],
          [
            "wir",
            "waren",
            "hatten",
            "lernten",
            "lasen"
          ],
          [
            "ihr",
            "wart",
            "hattet",
            "lerntet",
            "last"
          ],
          [
            "sie / Sie",
            "waren",
            "hatten",
            "lernten",
            "lasen"
          ]
        ],
        "note": {
          "es": "Ich las = leí/leía. El alemán no reparte Präteritum en perfecto/imperfecto españoles; el contexto decide. du lasest (también du last); ihr last.",
          "en": "Ich las = I read/was reading. German Präteritum does not reproduce the Spanish preterite/imperfect distinction; context decides. du lasest (also du last); ihr last."
        }
      }
    ],
    "primaryReadingId": "reading-unit-06",
    "readingSequence": [
      "reading-unit-06"
    ],
    "prerequisites": [
      "unit-05"
    ],
    "readingGrammarIds": [
      "perfect",
      "past",
      "irregular-verbs"
    ],
    "additionalVocabIds": [
      "adv-gestern",
      "verb-sein",
      "pron-ich",
      "prep-nach",
      "verb-fahren",
      "prep-um",
      "noun-uhr",
      "verb-ankommen",
      "noun-bahnhof",
      "verb-haben",
      "pron-wir",
      "prep-in",
      "verb-gehen",
      "verb-lernen",
      "adj-muede",
      "noun-zeit",
      "conj-aber",
      "particle-nicht",
      "verb-lesen",
      "adv-heute"
    ]
  },
  "unit-07": {
    "overview": {
      "es": "Empaqueta causa, contenido, condición y pregunta indirecta en subordinadas con verbo final. Conserva el marco modal o perfecto.",
      "en": "Package reason, content, condition and indirect question in subordinate clauses with a final finite verb. Preserve modal or perfect brackets."
    },
    "steps": [
      {
        "es": "Clasifica el nexo por significado; el orden depende de su clase, no de la traducción.",
        "en": "Classify the connector by meaning; order follows its class, not its translation."
      },
      {
        "es": "Si la subordinada va delante, toda ella ocupa posición 1 de la principal.",
        "en": "When a subordinate clause comes first, the whole clause occupies position 1 of the main clause."
      },
      {
        "es": "Recupera la misma oración en orden principal→subordinada y subordinada→principal.",
        "en": "Recall the same sentence in main→subordinate and subordinate→main order."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Subordinantes aplicados · significado y verbo final",
          "en": "Applied subordinators · meaning and final verb"
        },
        "columns": [
          {
            "es": "Nexo",
            "en": "Connector"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          },
          {
            "es": "Ejemplo",
            "en": "Example"
          }
        ],
        "rows": [
          [
            "weil",
            {
              "es": "porque",
              "en": "because"
            },
            "Ich lese, weil der Text interessant ist."
          ],
          [
            "dass",
            {
              "es": "que: contenido",
              "en": "that: content"
            },
            "Ich weiß, dass er Deutsch lernt."
          ],
          [
            "wenn",
            {
              "es": "si/cuando: condición o repetición",
              "en": "if/when: condition or recurrence"
            },
            "Wenn ich Zeit habe, lese ich."
          ],
          [
            "ob",
            {
              "es": "si: pregunta indirecta",
              "en": "whether: indirect question"
            },
            "Ich frage, ob er hier wohnt."
          ],
          [
            "obwohl",
            {
              "es": "aunque",
              "en": "although"
            },
            "Ich lese, obwohl ich müde bin."
          ],
          [
            "als",
            {
              "es": "cuando: evento único pasado",
              "en": "when: single past event"
            },
            "Als ich in Berlin war, habe ich Deutsch gelernt."
          ]
        ],
        "note": {
          "es": "Coma obligatoria entre principal y subordinada. ob no introduce una condición; wenn no introduce una pregunta indirecta.",
          "en": "A comma separates main and subordinate clauses. ob does not introduce a condition; wenn does not introduce an indirect question."
        }
      },
      {
        "title": {
          "es": "Verbo final aplicado · simple, modal y perfecto",
          "en": "Applied final verb · simple, modal and perfect"
        },
        "columns": [
          {
            "es": "Principal",
            "en": "Main clause"
          },
          {
            "es": "Subordinada",
            "en": "Subordinate clause"
          },
          {
            "es": "Con subordinada inicial",
            "en": "With initial subordinate clause"
          }
        ],
        "rows": [
          [
            "Ich lese den Text.",
            "weil ich den Text lese",
            "Weil ich den Text lese, lerne ich Deutsch."
          ],
          [
            "Ich kann den Text lesen.",
            "weil ich den Text lesen kann",
            "Weil ich den Text lesen kann, bin ich froh."
          ],
          [
            "Ich habe den Text gelesen.",
            "weil ich den Text gelesen habe",
            "Weil ich den Text gelesen habe, kenne ich die Antwort."
          ],
          [
            "Ich stehe früh auf.",
            "weil ich früh aufstehe",
            "Weil ich früh aufstehe, habe ich Zeit."
          ]
        ],
        "note": {
          "es": "La forma separable se reúne: aufstehe. froh contento; Antwort respuesta. No inviertas la subordinada como si fuera una pregunta inglesa.",
          "en": "The separable form rejoins: aufstehe. froh glad; Antwort answer. Do not invert a subordinate clause like an English question."
        }
      }
    ],
    "primaryReadingId": "reading-unit-07",
    "readingSequence": [
      "reading-unit-07"
    ],
    "prerequisites": [
      "unit-06"
    ],
    "readingGrammarIds": [
      "subordinate",
      "word-order",
      "connectors"
    ],
    "additionalVocabIds": [
      "pron-ich",
      "verb-lernen",
      "conj-weil",
      "noun-buch",
      "verb-lesen",
      "verb-moegen",
      "verb-wissen",
      "conj-dass",
      "particle-auch",
      "conj-wenn",
      "noun-zeit",
      "verb-haben",
      "conj-ob",
      "pron-sie-singular",
      "noun-text",
      "verb-verstehen",
      "adv-gestern",
      "verb-arbeiten",
      "verb-sein",
      "adj-muede",
      "adv-trotzdem",
      "conj-obwohl",
      "adj-schwierig",
      "conj-als",
      "prep-in",
      "adv-oft",
      "verb-sprechen"
    ]
  },
  "unit-08": {
    "overview": {
      "es": "Conecta poseedor y objeto sin proyectar el género del español. Reconoce genitivo, contracciones y referencia temporal.",
      "en": "Connect possessor and object without projecting Spanish gender. Recognise genitive, contractions and time reference."
    },
    "steps": [
      {
        "es": "La raíz posesiva identifica al poseedor; la terminación identifica género/número/caso de lo poseído.",
        "en": "The possessive stem identifies the possessor; the ending identifies gender/number/case of the possessed noun."
      },
      {
        "es": "Declina der Hund y das Buch en todos los casos y distingue el genitivo del objeto acusativo.",
        "en": "Decline der Hund and das Buch in all cases and distinguish genitive from accusative object."
      },
      {
        "es": "Lee rutina y relato completos; traduce im/am/zur mediante sus componentes.",
        "en": "Read a complete routine and narrative; translate im/am/zur through their components."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Possessivartikel · poseedor y raíz",
          "en": "Possessivartikel · possessor and stem"
        },
        "columns": [
          {
            "es": "Poseedor",
            "en": "Possessor"
          },
          {
            "es": "Raíz",
            "en": "Stem"
          },
          {
            "es": "Aplicación",
            "en": "Application"
          }
        ],
        "rows": [
          [
            "ich",
            "mein",
            "mein Buch"
          ],
          [
            "du",
            "dein",
            "dein Buch"
          ],
          [
            "er / es",
            "sein",
            "sein Buch"
          ],
          [
            "sie (singular)",
            "ihr",
            "ihr Buch"
          ],
          [
            "wir",
            "unser",
            "unser Buch"
          ],
          [
            "ihr",
            "euer",
            "euer Buch"
          ],
          [
            "sie (plural)",
            "ihr",
            "ihr Buch"
          ],
          [
            "Sie",
            "Ihr",
            "Ihr Buch"
          ]
        ],
        "note": {
          "es": "mein mi; dein tu; sein su de él/ello; ihr su de ella/ellos; unser nuestro; euer vuestro; Ihr su formal. La mayúscula Ihr identifica el trato formal salvo inicio de oración.",
          "en": "mein my; dein your; sein his/its; ihr her/their; unser our; euer your plural; Ihr formal your. Capital Ihr identifies formal address except at sentence start."
        }
      },
      {
        "title": {
          "es": "mein aplicado · cuatro casos con lo poseído",
          "en": "Applied mein · four cases of the possessed noun"
        },
        "columns": [
          {
            "es": "Caso",
            "en": "Case"
          },
          {
            "es": "Masculino",
            "en": "Masculine"
          },
          {
            "es": "Femenino",
            "en": "Feminine"
          },
          {
            "es": "Neutro",
            "en": "Neuter"
          },
          {
            "es": "Plural",
            "en": "Plural"
          }
        ],
        "rows": [
          [
            "Nom",
            "mein Hund",
            "meine Frau",
            "mein Buch",
            "meine Bücher"
          ],
          [
            "Akk",
            "meinen Hund",
            "meine Frau",
            "mein Buch",
            "meine Bücher"
          ],
          [
            "Dat",
            "meinem Hund",
            "meiner Frau",
            "meinem Buch",
            "meinen Büchern"
          ],
          [
            "Gen",
            "meines Hundes",
            "meiner Frau",
            "meines Buches",
            "meiner Bücher"
          ]
        ],
        "note": {
          "es": "euer pierde normalmente e al añadir terminación: eure Frau / eurem Hund. No cambia el género por ser poseído por una mujer: ihr Hund.",
          "en": "euer normally loses e before an ending: eure Frau / eurem Hund. A female possessor does not change noun gender: ihr Hund."
        }
      },
      {
        "title": {
          "es": "Genitiv aplicado · tipo de nombre y régimen",
          "en": "Applied Genitiv · noun type and government"
        },
        "columns": [
          {
            "es": "Base",
            "en": "Base"
          },
          {
            "es": "Relación",
            "en": "Relationship"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "der Lehrer",
            "das Buch des Lehrers",
            {
              "es": "el libro del profesor",
              "en": "the teacher’s book"
            }
          ],
          [
            "das Kind",
            "das Buch des Kindes",
            {
              "es": "el libro del niño",
              "en": "the child’s book"
            }
          ],
          [
            "die Frau",
            "das Buch der Frau",
            {
              "es": "el libro de la mujer",
              "en": "the woman’s book"
            }
          ],
          [
            "die Kinder",
            "das Buch der Kinder",
            {
              "es": "el libro de los niños",
              "en": "the children’s book"
            }
          ],
          [
            "der Mensch",
            "die Freiheit des Menschen",
            {
              "es": "la libertad del ser humano",
              "en": "human freedom"
            }
          ],
          [
            "das Wetter",
            "wegen des Wetters",
            {
              "es": "por el clima",
              "en": "because of the weather"
            }
          ]
        ],
        "note": {
          "es": "Mensch tiene declinación débil: den/dem/des Menschen. fuera de = außerhalb + Gen; apesar de = trotz + Gen en registro formal.",
          "en": "Mensch has weak declension: den/dem/des Menschen. outside = außerhalb + Gen; despite = trotz + Gen in formal standard usage."
        }
      },
      {
        "title": {
          "es": "Futur I aplicado · werden + infinitivo",
          "en": "Applied Futur I · werden + infinitive"
        },
        "columns": [
          {
            "es": "Persona",
            "en": "Person"
          },
          {
            "es": "werden",
            "en": "werden"
          },
          {
            "es": "Ejemplo",
            "en": "Example"
          }
        ],
        "rows": [
          [
            "ich",
            "werde",
            "ich werde morgen lesen."
          ],
          [
            "du",
            "wirst",
            "du wirst morgen lesen."
          ],
          [
            "er / sie / es",
            "wird",
            "er wird morgen lesen."
          ],
          [
            "wir",
            "werden",
            "wir werden morgen lesen."
          ],
          [
            "ihr",
            "werdet",
            "ihr werdet morgen lesen."
          ],
          [
            "sie / Sie",
            "werden",
            "sie werden morgen lesen."
          ]
        ],
        "note": {
          "es": "Morgen lese ich suele bastar: mañana leeré. Futur I también puede expresar conjetura. werden aquí es auxiliar, no volverse.",
          "en": "Morgen lese ich often suffices: I will read tomorrow. Futur I can also express conjecture. werden is an auxiliary here, not become."
        }
      }
    ],
    "primaryReadingId": "reading-unit-08",
    "readingSequence": [
      "reading-unit-08",
      "reading-a1-2",
      "reading-a1-3",
      "reading-a1-4",
      "reading-a2-1"
    ],
    "prerequisites": [
      "unit-07"
    ],
    "readingGrammarIds": [
      "possessives",
      "genitive",
      "future",
      "noun-declension"
    ],
    "additionalVocabIds": [
      "verb-haben",
      "noun-hund",
      "verb-sein",
      "adj-klein",
      "pron-ich",
      "prep-mit",
      "noun-buch",
      "pron-mein",
      "noun-lehrer",
      "verb-liegen",
      "prep-auf",
      "noun-tisch",
      "noun-kind",
      "prep-neben",
      "adv-heute",
      "noun-zeit",
      "prep-wegen",
      "noun-arbeit",
      "verb-lesen",
      "particle-nicht",
      "adv-morgen",
      "verb-werden",
      "verb-helfen",
      "noun-frage",
      "verb-verstehen",
      "pron-es",
      "noun-uhr",
      "prep-zu",
      "noun-haus",
      "pron-sie-singular",
      "verb-trinken",
      "noun-wasser",
      "conj-und",
      "verb-essen",
      "noun-brot",
      "noun-kaffee",
      "prep-um",
      "verb-gehen",
      "noun-zimmer",
      "noun-stuhl",
      "verb-hoeren",
      "noun-zug",
      "noun-bahnhof",
      "pron-was",
      "adj-wahr",
      "verb-kennen",
      "noun-antwort",
      "noun-freund",
      "particle-auch",
      "pron-wir",
      "verb-sprechen",
      "prep-ueber",
      "pron-er",
      "noun-beispiel",
      "verb-denken",
      "adv-gestern",
      "prep-nach",
      "verb-fahren",
      "verb-ankommen",
      "noun-freundin",
      "prep-in",
      "verb-lernen",
      "conj-aber",
      "adj-muede",
      "adv-deshalb"
    ]
  },
  "unit-09": {
    "overview": {
      "es": "La marca de caso se distribuye entre determinante y adjetivo. Resuelve el caso del relativo dentro de su propia oración. Introduce aquí la comparación elemental para las lecturas.",
      "en": "Case marking is distributed between determiner and adjective. Resolve the relative pronoun’s case inside its own clause. Introduce basic comparison here for the readings."
    },
    "steps": [
      {
        "es": "Calcula caso → género/número → determinante → terminación del adjetivo.",
        "en": "Determine case → gender/number → determiner → adjective ending."
      },
      {
        "es": "Reconstruye el antecedente en la relativa: der Mann… ich helfe dem Mann → dem ich helfe.",
        "en": "Restore the antecedent in the relative clause: der Mann… ich helfe dem Mann → dem ich helfe."
      },
      {
        "es": "Compara guter Text / der gute Text / ein guter Text; explica quién lleva la marca.",
        "en": "Compare guter Text / der gute Text / ein guter Text; explain where the case marker is carried."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Schwach · gut con artículo definido, completo",
          "en": "Weak · gut with definite article, complete"
        },
        "columns": [
          {
            "es": "Caso",
            "en": "Case"
          },
          {
            "es": "Masculino",
            "en": "Masculine"
          },
          {
            "es": "Femenino",
            "en": "Feminine"
          },
          {
            "es": "Neutro",
            "en": "Neuter"
          },
          {
            "es": "Plural",
            "en": "Plural"
          }
        ],
        "rows": [
          [
            "Nom",
            "der gute Mann",
            "die gute Frau",
            "das gute Buch",
            "die guten Bücher"
          ],
          [
            "Akk",
            "den guten Mann",
            "die gute Frau",
            "das gute Buch",
            "die guten Bücher"
          ],
          [
            "Dat",
            "dem guten Mann",
            "der guten Frau",
            "dem guten Buch",
            "den guten Büchern"
          ],
          [
            "Gen",
            "des guten Mannes",
            "der guten Frau",
            "des guten Buches",
            "der guten Bücher"
          ]
        ],
        "note": {
          "es": "gut bueno; Mann hombre; Frau mujer; Buch libro. Tras der: -e en Nom singular y Akk femenino/neutro; -en en el resto.",
          "en": "gut good; Mann man; Frau woman; Buch book. After der: -e in Nom singular and feminine/neuter Akk; -en elsewhere."
        }
      },
      {
        "title": {
          "es": "Gemischt · gut con ein/kein, completo",
          "en": "Mixed · gut with ein/kein, complete"
        },
        "columns": [
          {
            "es": "Caso",
            "en": "Case"
          },
          {
            "es": "Masculino",
            "en": "Masculine"
          },
          {
            "es": "Femenino",
            "en": "Feminine"
          },
          {
            "es": "Neutro",
            "en": "Neuter"
          },
          {
            "es": "Plural",
            "en": "Plural"
          }
        ],
        "rows": [
          [
            "Nom",
            "ein guter Mann",
            "eine gute Frau",
            "ein gutes Buch",
            "keine guten Bücher"
          ],
          [
            "Akk",
            "einen guten Mann",
            "eine gute Frau",
            "ein gutes Buch",
            "keine guten Bücher"
          ],
          [
            "Dat",
            "einem guten Mann",
            "einer guten Frau",
            "einem guten Buch",
            "keinen guten Büchern"
          ],
          [
            "Gen",
            "eines guten Mannes",
            "einer guten Frau",
            "eines guten Buches",
            "keiner guten Bücher"
          ]
        ],
        "note": {
          "es": "ein no tiene plural: se usa kein para mostrarlo. mein sigue el mismo patrón. Donde ein no lleva terminación, el adjetivo aporta -er/-es.",
          "en": "ein has no plural: kein illustrates plural forms. mein follows this pattern. When ein has no ending, the adjective supplies -er/-es."
        }
      },
      {
        "title": {
          "es": "Stark · gut sin artículo, completo",
          "en": "Strong · gut without an article, complete"
        },
        "columns": [
          {
            "es": "Caso",
            "en": "Case"
          },
          {
            "es": "Masculino",
            "en": "Masculine"
          },
          {
            "es": "Femenino",
            "en": "Feminine"
          },
          {
            "es": "Neutro",
            "en": "Neuter"
          },
          {
            "es": "Plural",
            "en": "Plural"
          }
        ],
        "rows": [
          [
            "Nom",
            "guter Wein",
            "gute Musik",
            "gutes Brot",
            "gute Bücher"
          ],
          [
            "Akk",
            "guten Wein",
            "gute Musik",
            "gutes Brot",
            "gute Bücher"
          ],
          [
            "Dat",
            "gutem Wein",
            "guter Musik",
            "gutem Brot",
            "guten Büchern"
          ],
          [
            "Gen",
            "guten Weines",
            "guter Musik",
            "guten Brotes",
            "guter Bücher"
          ]
        ],
        "note": {
          "es": "Wein vino; Musik música; Brot pan. Gen masculino/neutro fuerte del adjetivo acaba en -en: guten Weines, no gutes Weines.",
          "en": "Wein wine; Musik music; Brot bread. Strong masculine/neuter Gen adjective ends in -en: guten Weines, not gutes Weines."
        }
      },
      {
        "title": {
          "es": "Relativpronomen aplicado · las cuatro funciones",
          "en": "Applied Relativpronomen · all four functions"
        },
        "columns": [
          {
            "es": "Caso",
            "en": "Case"
          },
          {
            "es": "Masculino",
            "en": "Masculine"
          },
          {
            "es": "Femenino",
            "en": "Feminine"
          },
          {
            "es": "Neutro",
            "en": "Neuter"
          },
          {
            "es": "Plural",
            "en": "Plural"
          }
        ],
        "rows": [
          [
            "Nom",
            "der Mann, der liest",
            "die Frau, die liest",
            "das Kind, das liest",
            "die Kinder, die lesen"
          ],
          [
            "Akk",
            "der Mann, den ich sehe",
            "die Frau, die ich sehe",
            "das Kind, das ich sehe",
            "die Kinder, die ich sehe"
          ],
          [
            "Dat",
            "der Mann, dem ich helfe",
            "die Frau, der ich helfe",
            "das Kind, dem ich helfe",
            "die Kinder, denen ich helfe"
          ],
          [
            "Gen",
            "der Mann, dessen Buch ich lese",
            "die Frau, deren Buch ich lese",
            "das Kind, dessen Buch ich lese",
            "die Kinder, deren Buch ich lese"
          ]
        ],
        "note": {
          "es": "Género/número = antecedente; caso = función en relativa. dessen/deren = cuyo/a(s), sin concordar con Buch. Se cierra la relativa con coma si continúa la principal.",
          "en": "Gender/number = antecedent; case = role in the relative clause. dessen/deren = whose, without agreeing with Buch. Close the relative clause with a comma when the main clause continues."
        }
      },
      {
        "title": {
          "es": "Comparación elemental · preparación de lecturas",
          "en": "Basic comparison · reading preparation"
        },
        "columns": [
          {
            "es": "Base",
            "en": "Base"
          },
          {
            "es": "Comparativo",
            "en": "Comparative"
          },
          {
            "es": "Superlativo adverbial",
            "en": "Adverbial superlative"
          },
          {
            "es": "Aplicación",
            "en": "Application"
          }
        ],
        "rows": [
          [
            "gut",
            "besser",
            "am besten",
            "Ich verstehe den Text besser."
          ],
          [
            "einfach",
            "einfacher",
            "am einfachsten",
            "Dieser Text ist einfacher als der andere."
          ],
          [
            "schwierig",
            "schwieriger",
            "am schwierigsten",
            "Das Buch ist schwieriger."
          ],
          [
            "viel",
            "mehr",
            "am meisten",
            "Ich habe mehr Zeit."
          ],
          [
            "kurz",
            "kürzer",
            "am kürzesten",
            "Der Text ist kürzer."
          ]
        ],
        "note": {
          "es": "Comparativo + als = más… que; so… wie = tan… como. Atributivo: ein schwierigeres Buch. U16 retoma comparación y tiempo; aquí se aprende el patrón necesario.",
          "en": "Comparative + als = more… than; so… wie = as… as. Attributive: ein schwierigeres Buch. U16 revisits comparison and time; learn the required pattern here."
        }
      }
    ],
    "primaryReadingId": "reading-a1-1",
    "readingSequence": [
      "reading-a1-1",
      "reading-a2-2",
      "reading-a2-3",
      "reading-a2-4",
      "reading-b1-4"
    ],
    "prerequisites": [
      "unit-08"
    ],
    "readingGrammarIds": [
      "adjective-endings",
      "relative",
      "comparative",
      "demonstratives"
    ],
    "additionalVocabIds": [
      "pron-ich",
      "verb-heissen",
      "verb-kommen",
      "prep-aus",
      "conj-und",
      "verb-wohnen",
      "prep-in",
      "verb-sprechen",
      "adv-jetzt",
      "verb-lernen",
      "verb-lesen",
      "adv-heute",
      "adj-kurz",
      "noun-text",
      "verb-sein",
      "adj-einfach",
      "verb-verstehen",
      "noun-wort",
      "adj-gut",
      "noun-tag",
      "noun-buch",
      "prep-fuer",
      "noun-freund",
      "pron-er",
      "verb-moegen",
      "verb-duerfen",
      "particle-nicht",
      "adj-schwierig",
      "pron-dieser",
      "verb-haben",
      "pron-jeder",
      "pron-es",
      "verb-nehmen",
      "conj-weil",
      "verb-helfen",
      "adv-manchmal",
      "noun-haus",
      "conj-aber",
      "verb-muessen",
      "particle-auch",
      "prep-mit",
      "conj-wenn",
      "verb-machen",
      "adj-neu",
      "noun-beispiel",
      "noun-regel",
      "prep-auf",
      "pron-mein",
      "noun-tisch",
      "verb-sehen",
      "pron-sie-plural",
      "prep-bei",
      "verb-werden",
      "particle-nur",
      "prep-von",
      "pron-etwas",
      "conj-dass",
      "prep-zu",
      "verb-liegen",
      "adv-dort",
      "verb-glauben",
      "pron-sie-singular",
      "verb-finden",
      "noun-erinnerung",
      "adj-falsch",
      "particle-kein"
    ]
  },
  "unit-10": {
    "overview": {
      "es": "Distingue un proceso pasivo, un estado resultante y una oración activa. Conserva el dativo; solo el objeto acusativo se convierte en sujeto.",
      "en": "Distinguish a passive process, a resulting state and an active sentence. Preserve dative; only the accusative object becomes the subject."
    },
    "steps": [
      {
        "es": "Reconstruye la activa antes de formar la pasiva.",
        "en": "Restore the active sentence before forming the passive."
      },
      {
        "es": "Contrasta wird geöffnet / ist geöffnet: abrirse en proceso / estar abierta.",
        "en": "Contrast wird geöffnet / ist geöffnet: being opened / being open."
      },
      {
        "es": "Cambia presente→pasado→perfecto; recuerda worden en Perfekt pasivo. Reescribe Ich sehe die Tassen → Die Tassen werden gesehen y observa qué actor se omite.",
        "en": "Change present→past→perfect; remember worden in passive Perfekt. Rewrite Ich sehe die Tassen → Die Tassen werden gesehen and notice which actor is omitted."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Vorgangspassiv · lesen en tiempos aplicados",
          "en": "Vorgangspassiv · lesen in applied tenses"
        },
        "columns": [
          {
            "es": "Tiempo",
            "en": "Tense"
          },
          {
            "es": "Activa",
            "en": "Active"
          },
          {
            "es": "Pasiva de proceso",
            "en": "Process passive"
          }
        ],
        "rows": [
          [
            {
              "es": "Presente",
              "en": "Present"
            },
            "Die Frau liest das Buch.",
            "Das Buch wird gelesen."
          ],
          [
            "Präteritum",
            "Die Frau las das Buch.",
            "Das Buch wurde gelesen."
          ],
          [
            "Perfekt",
            "Die Frau hat das Buch gelesen.",
            "Das Buch ist gelesen worden."
          ],
          [
            "Plusquamperfekt · U16",
            "Die Frau hatte das Buch gelesen.",
            "Das Buch war gelesen worden."
          ],
          [
            "Futur I",
            "Die Frau wird das Buch lesen.",
            "Das Buch wird gelesen werden."
          ],
          [
            {
              "es": "Modal",
              "en": "Modal"
            },
            "Die Frau muss das Buch lesen.",
            "Das Buch muss gelesen werden."
          ]
        ],
        "note": {
          "es": "El objeto das Buch pasa a sujeto. Agente opcional: von der Frau. Plusquamperfekt se presenta como referencia y se practica en U16.",
          "en": "The object das Buch becomes the subject. Optional agent: von der Frau. Plusquamperfekt is advance reference and practised in U16."
        }
      },
      {
        "title": {
          "es": "Proceso / estado / dativo conservado",
          "en": "Process / state / retained dative"
        },
        "columns": [
          {
            "es": "Estructura",
            "en": "Structure"
          },
          {
            "es": "Ejemplo",
            "en": "Example"
          },
          {
            "es": "Lectura",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "werden + Partizip II",
            "Die Tür wird geöffnet.",
            {
              "es": "La puerta está siendo abierta.",
              "en": "The door is being opened."
            }
          ],
          [
            "sein + Partizip II",
            "Die Tür ist geöffnet.",
            {
              "es": "La puerta está abierta.",
              "en": "The door is open."
            }
          ],
          [
            {
              "es": "Dat permanece",
              "en": "Dat is retained"
            },
            "Dem Kind wird geholfen.",
            {
              "es": "Se ayuda al niño.",
              "en": "The child is being helped."
            }
          ],
          [
            {
              "es": "Akk→Nom; Dat permanece",
              "en": "Akk→Nom; Dat is retained"
            },
            "Dem Kind wird das Buch gegeben.",
            {
              "es": "Se da el libro al niño.",
              "en": "The book is being given to the child."
            }
          ],
          [
            "Modal + Partizip + werden",
            "weil der Text gelesen werden muss",
            {
              "es": "porque el texto debe leerse",
              "en": "because the text must be read"
            }
          ]
        ],
        "note": {
          "es": "Zustandspassiv designa un estado resultante; participios también pueden funcionar como adjetivos. Dem Kind no se convierte en nominativo.",
          "en": "Zustandspassiv denotes a resulting state; participles may also be adjectives. Dem Kind does not become nominative."
        }
      }
    ],
    "primaryReadingId": "reading-a2-4",
    "readingSequence": [
      "reading-a2-4",
      "reading-b1-4"
    ],
    "prerequisites": [
      "unit-09"
    ],
    "readingGrammarIds": [
      "passive",
      "perfect",
      "past"
    ],
    "additionalVocabIds": [
      "prep-auf",
      "pron-mein",
      "noun-tisch",
      "verb-sein",
      "pron-ich",
      "verb-sehen",
      "pron-sie-plural",
      "prep-bei",
      "conj-weil",
      "verb-haben",
      "verb-werden",
      "particle-nur",
      "particle-auch",
      "prep-von",
      "verb-muessen",
      "conj-und",
      "pron-etwas",
      "conj-dass",
      "prep-zu",
      "noun-haus",
      "verb-liegen",
      "pron-er",
      "conj-aber",
      "particle-nicht",
      "adv-dort",
      "prep-in",
      "verb-glauben",
      "pron-sie-singular",
      "verb-finden",
      "noun-erinnerung",
      "adj-falsch",
      "pron-jeder",
      "pron-es",
      "particle-kein"
    ]
  },
  "unit-11": {
    "overview": {
      "es": "Formula cortesía e hipótesis con Konjunktiv II. La forma basada en Präteritum no sitúa automáticamente el hecho en el pasado.",
      "en": "Express politeness and hypotheses with Konjunktiv II. A form based on Präteritum does not automatically place the event in the past."
    },
    "steps": [
      {
        "es": "Contrasta hatte / hätte y konnte / könnte antes de traducir.",
        "en": "Contrast hatte / hätte and konnte / könnte before translating."
      },
      {
        "es": "Prefiere wäre, hätte y modales; usa würde + infinitivo para muchos otros verbos.",
        "en": "Prefer wäre, hätte and modals; use würde + infinitive for many other verbs."
      },
      {
        "es": "Reformula una escena ya leída como posibilidad: Wir könnten… / Wenn ich Zeit hätte…",
        "en": "Reframe a previously read scene as a possibility: Wir könnten… / Wenn ich Zeit hätte…"
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Konjunktiv II · paradigma aplicado completo",
          "en": "Konjunktiv II · complete applied paradigm"
        },
        "columns": [
          {
            "es": "Persona",
            "en": "Person"
          },
          {
            "es": "sein",
            "en": "sein"
          },
          {
            "es": "haben",
            "en": "haben"
          },
          {
            "es": "können",
            "en": "können"
          },
          {
            "es": "müssen",
            "en": "müssen"
          },
          {
            "es": "würde + lesen",
            "en": "würde + lesen"
          }
        ],
        "rows": [
          [
            "ich",
            "wäre",
            "hätte",
            "könnte",
            "müsste",
            "würde lesen"
          ],
          [
            "du",
            "wär(e)st",
            "hättest",
            "könntest",
            "müsstest",
            "würdest lesen"
          ],
          [
            "er / sie / es",
            "wäre",
            "hätte",
            "könnte",
            "müsste",
            "würde lesen"
          ],
          [
            "wir",
            "wären",
            "hätten",
            "könnten",
            "müssten",
            "würden lesen"
          ],
          [
            "ihr",
            "wär(e)t",
            "hättet",
            "könntet",
            "müsstet",
            "würdet lesen"
          ],
          [
            "sie / Sie",
            "wären",
            "hätten",
            "könnten",
            "müssten",
            "würden lesen"
          ]
        ],
        "note": {
          "es": "wäre sería/estuviera; hätte tendría; könnte podría; müsste tendría que. wärst/wärest y wärt/wäret son variantes.",
          "en": "wäre would be; hätte would have; könnte could; müsste would have to. wärst/wärest and wärt/wäret are variants."
        }
      },
      {
        "title": {
          "es": "Präteritum modal / hipótesis / cortesía",
          "en": "Modal Präteritum / hypothesis / politeness"
        },
        "columns": [
          {
            "es": "Pasado real",
            "en": "Actual past"
          },
          {
            "es": "Hipótesis",
            "en": "Hypothesis"
          },
          {
            "es": "Significado del contraste",
            "en": "Meaning of the contrast"
          }
        ],
        "rows": [
          [
            "Ich konnte lesen.",
            "Ich könnte lesen.",
            {
              "es": "Pude/podía leer → podría leer.",
              "en": "I could/was able to read → I could read (hypothetically)."
            }
          ],
          [
            "Ich musste arbeiten.",
            "Ich müsste arbeiten.",
            {
              "es": "Tuve/tenía que trabajar → tendría que trabajar.",
              "en": "I had to work → I would have to work."
            }
          ],
          [
            "Ich wollte ein Buch.",
            "Ich möchte ein Buch.",
            {
              "es": "Quería un libro → quisiera un libro (patrón U04).",
              "en": "I wanted a book → I would like a book (U04 pattern)."
            }
          ],
          [
            "Ich hatte Zeit.",
            "Wenn ich Zeit hätte, würde ich lesen.",
            {
              "es": "Tenía tiempo → si tuviera tiempo, leería.",
              "en": "I had time → if I had time, I would read."
            }
          ],
          [
            "Sie konnten helfen.",
            "Könnten Sie bitte helfen?",
            {
              "es": "Pudo/pudieron ayudar → ¿podría(n) ayudar?",
              "en": "You were able to help → could you please help?"
            }
          ]
        ],
        "note": {
          "es": "konnte/musste/wollte no llevan umlaut; könnte/müsste sí. En lectura, los modales pasados se flexionan como lernte: konnte, konntest, konnte, konnten, konntet, konnten.",
          "en": "konnte/musste/wollte have no umlaut; könnte/müsste do. Past modals inflect like lernte: konnte, konntest, konnte, konnten, konntet, konnten."
        }
      }
    ],
    "primaryReadingId": "reading-a2-1",
    "readingSequence": [
      "reading-a2-1",
      "reading-a2-2"
    ],
    "prerequisites": [
      "unit-10"
    ],
    "readingGrammarIds": [
      "konjunktiv2",
      "modal-verbs"
    ],
    "additionalVocabIds": [
      "adv-gestern",
      "verb-sein",
      "pron-ich",
      "prep-mit",
      "noun-zug",
      "prep-nach",
      "verb-fahren",
      "prep-um",
      "noun-uhr",
      "verb-ankommen",
      "noun-bahnhof",
      "verb-haben",
      "pron-mein",
      "noun-freundin",
      "pron-wir",
      "prep-in",
      "verb-gehen",
      "verb-lernen",
      "conj-aber",
      "particle-nicht",
      "verb-verstehen",
      "adj-muede",
      "adv-deshalb",
      "noun-haus",
      "adj-gut",
      "noun-tag",
      "noun-buch",
      "prep-fuer",
      "noun-freund",
      "pron-er",
      "noun-text",
      "verb-lesen",
      "verb-moegen",
      "adj-kurz",
      "conj-und",
      "verb-duerfen",
      "adj-schwierig",
      "pron-dieser",
      "adj-einfach",
      "pron-jeder",
      "pron-es",
      "verb-nehmen"
    ]
  },
  "unit-12": {
    "overview": {
      "es": "Reconoce el sujeto implícito del infinitivo y el objeto reflexivo. La finalidad puede requerir um…zu o damit según el sujeto.",
      "en": "Identify the infinitive’s implicit subject and the reflexive object. Purpose may require um…zu or damit depending on the subject."
    },
    "steps": [
      {
        "es": "Reconstruye quién hace cada acción antes de elegir um…zu/damit.",
        "en": "Restore who performs each action before choosing um…zu/damit."
      },
      {
        "es": "Con modal no aparece zu; con separable zu se inserta entre prefijo y raíz.",
        "en": "Modals take no zu; separable verbs insert zu between prefix and stem."
      },
      {
        "es": "Distingue mich de mir identificando si ya existe un objeto acusativo.",
        "en": "Distinguish mich from mir by checking whether an accusative object already exists."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Infinitiv aplicado · ocho marcos",
          "en": "Applied Infinitiv · eight frames"
        },
        "columns": [
          {
            "es": "Patrón",
            "en": "Pattern"
          },
          {
            "es": "Ejemplo",
            "en": "Example"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "modal + Infinitiv",
            "Ich muss lernen.",
            {
              "es": "Tengo que aprender.",
              "en": "I have to learn."
            }
          ],
          [
            "versuchen + zu",
            "Ich versuche, Deutsch zu lernen.",
            {
              "es": "Intento aprender alemán.",
              "en": "I try to learn German."
            }
          ],
          [
            "separable + zu",
            "Ich versuche, früh aufzustehen.",
            {
              "es": "Intento levantarme temprano.",
              "en": "I try to get up early."
            }
          ],
          [
            "um…zu",
            "Ich lese, um Deutsch zu lernen.",
            {
              "es": "Leo para aprender alemán.",
              "en": "I read to learn German."
            }
          ],
          [
            "damit + verbo final",
            "Ich helfe dir, damit du lernen kannst.",
            {
              "es": "Te ayudo para que puedas aprender.",
              "en": "I help you so that you can learn."
            }
          ],
          [
            "ohne…zu",
            "Ich lese, ohne zu sprechen.",
            {
              "es": "Leo sin hablar.",
              "en": "I read without speaking."
            }
          ],
          [
            "statt…zu",
            "Ich lese, statt zu schlafen.",
            {
              "es": "Leo en vez de dormir.",
              "en": "I read instead of sleeping."
            }
          ],
          [
            "haben / sein + zu",
            "Der Text ist zu prüfen.",
            {
              "es": "El texto debe/puede comprobarse (según contexto).",
              "en": "The text must/can be checked (context determines the reading)."
            }
          ]
        ],
        "note": {
          "es": "um/ohne/statt + zu llevan coma. um…zu suele compartir sujeto con la principal; damit permite un sujeto distinto. schlafen dormir.",
          "en": "um/ohne/statt + zu take a comma. um…zu normally shares the main clause’s subject; damit permits a different subject. schlafen sleep."
        }
      },
      {
        "title": {
          "es": "Reflexivpronomen aplicado · Akk y Dat completos",
          "en": "Applied Reflexivpronomen · complete Akk and Dat"
        },
        "columns": [
          {
            "es": "Sujeto",
            "en": "Subject"
          },
          {
            "es": "Akk · erinnern",
            "en": "Akk · erinnern"
          },
          {
            "es": "Dat · Hände waschen",
            "en": "Dat · Hände waschen"
          }
        ],
        "rows": [
          [
            "ich",
            "Ich erinnere mich an den Text.",
            "Ich wasche mir die Hände."
          ],
          [
            "du",
            "Du erinnerst dich an den Text.",
            "Du wäschst dir die Hände."
          ],
          [
            "er / sie / es",
            "Er erinnert sich an den Text.",
            "Er wäscht sich die Hände."
          ],
          [
            "wir",
            "Wir erinnern uns an den Text.",
            "Wir waschen uns die Hände."
          ],
          [
            "ihr",
            "Ihr erinnert euch an den Text.",
            "Ihr wascht euch die Hände."
          ],
          [
            "sie / Sie",
            "Sie erinnern sich an den Text.",
            "Sie waschen sich die Hände."
          ]
        ],
        "note": {
          "es": "sich erinnern an + Akk recordar; sich die Hände waschen lavarse las manos. die Hände es objeto Akk; mir es Dat. sich no señala por sí mismo un caso visible.",
          "en": "sich erinnern an + Akk remember; sich die Hände waschen wash one’s hands. die Hände is Akk object; mir is Dat. sich does not visibly distinguish case."
        }
      }
    ],
    "primaryReadingId": "reading-b1-1",
    "readingSequence": [
      "reading-b1-1",
      "reading-b1-2",
      "reading-b1-3"
    ],
    "prerequisites": [
      "unit-11"
    ],
    "readingGrammarIds": [
      "infinitive",
      "reflexive",
      "relative",
      "konjunktiv2",
      "passive"
    ],
    "additionalVocabIds": [
      "noun-frau",
      "prep-seit",
      "noun-tag",
      "prep-in",
      "pron-mein",
      "noun-wohnung",
      "particle-nicht",
      "adj-richtig",
      "conj-obwohl",
      "pron-ich",
      "pron-sie-singular",
      "verb-haben",
      "verb-bleiben",
      "adv-bereits",
      "verb-pruefen",
      "conj-ob",
      "verb-sein",
      "verb-koennen",
      "particle-bitte",
      "pron-jemand",
      "pron-sich",
      "noun-uhr",
      "prep-zu",
      "noun-haus",
      "pron-dieser",
      "adj-moeglich",
      "verb-anrufen",
      "prep-fuer",
      "prep-mit",
      "verb-wollen",
      "verb-wissen",
      "verb-helfen",
      "verb-lernen",
      "conj-und",
      "prep-ohne",
      "verb-machen",
      "prep-an",
      "noun-wort",
      "adj-gut",
      "verb-erinnern",
      "verb-denken",
      "conj-dass",
      "verb-bemerken",
      "conj-aber",
      "adj-einfach",
      "particle-kein",
      "verb-muessen",
      "adj-schwierig",
      "noun-freund",
      "noun-buch",
      "pron-sie-plural",
      "verb-lesen",
      "verb-sollen",
      "verb-moegen",
      "adj-kurz",
      "conj-weil",
      "noun-zeit",
      "pron-er",
      "adj-neu",
      "noun-begriff",
      "noun-grund",
      "verb-unterscheiden",
      "prep-zwischen",
      "pron-jeder",
      "noun-woche",
      "prep-ueber",
      "noun-text",
      "verb-sprechen",
      "adv-deshalb",
      "noun-frage",
      "verb-werden"
    ]
  },
  "unit-13": {
    "overview": {
      "es": "Distingue causa, consecuencia, concesión y contraste; la clase del conector predice el orden. Mantén elementos paralelos en coordinaciones dobles.",
      "en": "Distinguish reason, consequence, concession and contrast; connector class predicts word order. Keep coordinated elements parallel in paired constructions."
    },
    "steps": [
      {
        "es": "Clasifica subordinante / coordinante / adverbio antes de producir la frase.",
        "en": "Classify subordinator / coordinator / adverb before producing the sentence."
      },
      {
        "es": "Reconstruye premisa y conclusión; obwohl y trotzdem conservan una conclusión contra una expectativa.",
        "en": "Restore premise and conclusion; obwohl and trotzdem retain a conclusion against an expectation."
      },
      {
        "es": "Localiza lo comparado en zwar…aber y nicht nur…sondern auch.",
        "en": "Locate the compared elements in zwar…aber and nicht nur…sondern auch."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Conectores aplicados · misma premisa, tres órdenes",
          "en": "Applied connectors · one premise, three orders"
        },
        "columns": [
          {
            "es": "Clase",
            "en": "Class"
          },
          {
            "es": "Nexo",
            "en": "Connector"
          },
          {
            "es": "Aplicación",
            "en": "Application"
          }
        ],
        "rows": [
          [
            {
              "es": "Subordinante: verbo final",
              "en": "Subordinator: verb final"
            },
            "weil",
            "Ich bleibe hier, weil es regnet."
          ],
          [
            {
              "es": "Coordinante: principal",
              "en": "Coordinator: main clause"
            },
            "denn",
            "Ich bleibe hier, denn es regnet."
          ],
          [
            {
              "es": "Adverbio: V2",
              "en": "Adverb: V2"
            },
            "deshalb",
            "Es regnet; deshalb bleibe ich hier."
          ],
          [
            {
              "es": "Subordinante: concesión",
              "en": "Subordinator: concession"
            },
            "obwohl",
            "Obwohl es regnet, gehe ich hinaus."
          ],
          [
            {
              "es": "Adverbio: concesión",
              "en": "Adverb: concession"
            },
            "trotzdem",
            "Es regnet; trotzdem gehe ich hinaus."
          ],
          [
            {
              "es": "Subordinante: medio",
              "en": "Subordinator: means"
            },
            "indem",
            "Er prüft die These, indem er Daten vergleicht."
          ]
        ],
        "note": {
          "es": "regnen llover; hinausgehen salir; prüfen comprobar. deshalb por eso; trotzdem aun así; indem mediante/al hacer. denn no ocupa posición 1.",
          "en": "regnen rain; hinausgehen go outside; prüfen check. deshalb therefore; trotzdem nevertheless; indem by doing. denn does not occupy position 1."
        }
      },
      {
        "title": {
          "es": "Conectores dobles · argumento aplicado",
          "en": "Paired connectors · applied argument"
        },
        "columns": [
          {
            "es": "Nexo",
            "en": "Connector"
          },
          {
            "es": "Ejemplo",
            "en": "Example"
          },
          {
            "es": "Función",
            "en": "Function"
          }
        ],
        "rows": [
          [
            "zwar…aber",
            "Das Buch ist zwar kurz, aber schwierig.",
            {
              "es": "Si bien…pero: concesión.",
              "en": "Admittedly…but: concession."
            }
          ],
          [
            "sowohl…als auch",
            "Wir prüfen sowohl die Theorie als auch die Daten.",
            {
              "es": "Tanto…como: inclusión.",
              "en": "Both…and: inclusion."
            }
          ],
          [
            "weder…noch",
            "Das ist weder ein Beweis noch eine Erklärung.",
            {
              "es": "Ni…ni: doble exclusión.",
              "en": "Neither…nor: double exclusion."
            }
          ],
          [
            "nicht nur…sondern auch",
            "Wir prüfen nicht nur die Daten, sondern auch die Annahmen.",
            {
              "es": "No solo…sino también: ampliación.",
              "en": "Not only…but also: addition."
            }
          ],
          [
            "je…desto · U18",
            "Je häufiger wir üben, desto leichter lernen wir.",
            {
              "es": "Cuanto más…más: covariación.",
              "en": "The more…the more: covariation."
            }
          ]
        ],
        "note": {
          "es": "Mantén paralelos los grupos nominales o cláusulas. Annahme supuesto; Beweis prueba; üben practicar. je…desto se practica a fondo en U18.",
          "en": "Keep noun phrases or clauses parallel. Annahme assumption; Beweis proof; üben practise. je…desto is fully practised in U18."
        }
      }
    ],
    "primaryReadingId": "reading-b2-1",
    "readingSequence": [
      "reading-b2-1",
      "reading-b1-3"
    ],
    "prerequisites": [
      "unit-12"
    ],
    "readingGrammarIds": [
      "connectors",
      "subordinate",
      "passive",
      "konjunktiv2"
    ],
    "additionalVocabIds": [
      "prep-fuer",
      "conj-und",
      "adv-hingegen",
      "conj-dass",
      "particle-nicht",
      "verb-koennen",
      "pron-sich",
      "prep-auf",
      "noun-erfahrung",
      "verb-vergleichen",
      "verb-werden",
      "verb-helfen",
      "verb-sollen",
      "particle-nur",
      "conj-sondern",
      "particle-auch",
      "conj-wenn",
      "verb-bleiben",
      "verb-sein",
      "pron-jeder",
      "noun-freund",
      "noun-buch",
      "pron-sie-plural",
      "verb-lesen",
      "verb-moegen",
      "adj-kurz",
      "conj-weil",
      "noun-zeit",
      "verb-haben",
      "adj-schwierig",
      "pron-er",
      "adj-neu",
      "noun-begriff",
      "verb-lernen",
      "verb-wollen",
      "noun-grund",
      "verb-unterscheiden",
      "prep-zwischen",
      "noun-woche",
      "prep-ueber",
      "noun-text",
      "verb-sprechen",
      "adv-deshalb",
      "prep-mit",
      "conj-aber",
      "adj-gut",
      "verb-muessen",
      "noun-frage"
    ]
  },
  "unit-14": {
    "overview": {
      "es": "Descomprime grupos nominales en acciones: participio + complementos delante del nombre, nominalización y genitivo. Distingue interpretación de sintaxis.",
      "en": "Expand noun phrases into actions: participle + complements before the noun, nominalisation and genitive. Distinguish interpretation from syntax."
    },
    "steps": [
      {
        "es": "Encuentra el núcleo del grupo nominal; después determina qué elemento lo modifica.",
        "en": "Find the noun phrase’s head; then determine what modifies it."
      },
      {
        "es": "Transforma atributo participial → relativa → oración activa cuando sea posible.",
        "en": "Transform participial modifier → relative clause → active sentence when possible."
      },
      {
        "es": "El genitivo no decide siempre quién actúa: usa contexto para agente/objeto.",
        "en": "Genitive does not always identify the actor: use context for agent/object."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Nominalización y participio · expansión aplicada",
          "en": "Nominalisation and participles · applied expansion"
        },
        "columns": [
          {
            "es": "Grupo compacto",
            "en": "Compact phrase"
          },
          {
            "es": "Expansión",
            "en": "Expansion"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "das Lernen",
            "Jemand lernt.",
            {
              "es": "aprender / el aprendizaje",
              "en": "learning"
            }
          ],
          [
            "die Prüfung der These",
            "Jemand prüft die These.",
            {
              "es": "la comprobación de la tesis",
              "en": "checking the thesis"
            }
          ],
          [
            "der denkende Mensch",
            "der Mensch, der denkt",
            {
              "es": "el ser humano que piensa",
              "en": "the human who thinks"
            }
          ],
          [
            "die von der Forscherin geprüfte These",
            "die These, die die Forscherin geprüft hat",
            {
              "es": "la tesis comprobada por la investigadora",
              "en": "the thesis checked by the researcher"
            }
          ],
          [
            "das sich durch seine Entwicklung vollendende Wesen",
            "das Wesen, das sich durch seine Entwicklung vollendet",
            {
              "es": "la esencia que se completa mediante su desarrollo",
              "en": "the essence completing itself through its development"
            }
          ],
          [
            "der zu verarbeitende Reiz",
            "der Reiz, der verarbeitet werden muss/kann",
            {
              "es": "el estímulo que debe/puede procesarse",
              "en": "the stimulus that must/can be processed"
            }
          ]
        ],
        "note": {
          "es": "Partizip I -d: denken→denkend; Partizip II: prüfen→geprüft. Atributivos se declinan como adjetivos. La reformulación sintáctica de Hegel no resuelve su interpretación.",
          "en": "Partizip I -d: denken→denkend; Partizip II: prüfen→geprüft. Attributive participles decline as adjectives. Syntactic reformulation of Hegel does not settle interpretation."
        }
      },
      {
        "title": {
          "es": "n-Deklination aplicada · Mensch / Name / Lehrer",
          "en": "Applied n-Deklination · Mensch / Name / Lehrer"
        },
        "columns": [
          {
            "es": "Caso",
            "en": "Case"
          },
          {
            "es": "der Mensch",
            "en": "der Mensch"
          },
          {
            "es": "der Name",
            "en": "der Name"
          },
          {
            "es": "der Lehrer",
            "en": "der Lehrer"
          }
        ],
        "rows": [
          [
            "Nom",
            "der Mensch",
            "der Name",
            "der Lehrer"
          ],
          [
            "Akk",
            "den Menschen",
            "den Namen",
            "den Lehrer"
          ],
          [
            "Dat",
            "dem Menschen",
            "dem Namen",
            "dem Lehrer"
          ],
          [
            "Gen",
            "des Menschen",
            "des Namens",
            "des Lehrers"
          ]
        ],
        "note": {
          "es": "Mensch ser humano: débil -(e)n fuera del Nom; Name nombre: mixto Gen -ns; Lehrer profesor: fuerte Gen -s. Aprende la clase con el sustantivo.",
          "en": "Mensch human: weak -(e)n outside Nom; Name name: mixed Gen -ns; Lehrer teacher: strong Gen -s. Learn the class with the noun."
        }
      }
    ],
    "primaryReadingId": "reading-c1-1",
    "readingSequence": [
      "reading-c1-1",
      "reading-c1-2",
      "reading-b2-2",
      "reading-b2-3"
    ],
    "prerequisites": [
      "unit-13"
    ],
    "readingGrammarIds": [
      "participles",
      "adjective-endings",
      "noun-declension",
      "genitive",
      "infinitive"
    ],
    "additionalVocabIds": [
      "verb-sein",
      "prep-aus",
      "noun-satz",
      "adj-kurz",
      "conj-aber",
      "noun-begriff",
      "prep-zu",
      "adv-hier",
      "conj-waehrend",
      "particle-kein",
      "particle-nur",
      "prep-durch",
      "pron-sich",
      "conj-und",
      "prep-in",
      "prep-vor",
      "verb-koennen",
      "pron-man",
      "pron-sie-singular",
      "pron-dieser",
      "prep-von",
      "noun-antwort",
      "adj-zuverlaessig",
      "verb-vorhersagen",
      "prep-ohne",
      "conj-wenn",
      "particle-nicht",
      "conj-dass",
      "pron-sie-plural",
      "prep-fuer",
      "verb-werden",
      "conj-oder",
      "noun-erklaerung",
      "verb-sollen",
      "prep-unter",
      "noun-bedingung",
      "pron-er",
      "noun-zeit",
      "verb-helfen",
      "verb-unterscheiden",
      "adv-allerdings",
      "particle-auch",
      "adj-gut",
      "prep-mit",
      "adj-moeglich",
      "noun-wahrnehmung",
      "conj-sondern",
      "adj-gross",
      "noun-frage",
      "conj-ob",
      "verb-erklaeren",
      "pron-was",
      "verb-muessen",
      "verb-bleiben"
    ]
  },
  "unit-15": {
    "overview": {
      "es": "Atribuye una afirmación sin confundirte con el tiempo inglés del discurso indirecto. Konjunktiv I distingue fuente y voz del narrador.",
      "en": "Attribute a statement without importing English reported-speech tense shifts. Konjunktiv I distinguishes source and narrator’s voice."
    },
    "steps": [
      {
        "es": "Identifica quién sostiene cada proposición antes de traducir el modo.",
        "en": "Identify who asserts each proposition before translating the mood."
      },
      {
        "es": "Compara indicativo / Konjunktiv I / sustitución por II cuando las formas coinciden.",
        "en": "Compare indicative / Konjunktiv I / replacement by II when forms coincide."
      },
      {
        "es": "Construye presente referido, anterioridad y pasiva manteniendo la atribución.",
        "en": "Build reported present, anteriority and passive while preserving attribution."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Konjunktiv I aplicado · cuatro paradigmas completos",
          "en": "Applied Konjunktiv I · four complete paradigms"
        },
        "columns": [
          {
            "es": "Persona",
            "en": "Person"
          },
          {
            "es": "sein",
            "en": "sein"
          },
          {
            "es": "haben",
            "en": "haben"
          },
          {
            "es": "kommen",
            "en": "kommen"
          },
          {
            "es": "können",
            "en": "können"
          }
        ],
        "rows": [
          [
            "ich",
            "sei",
            "habe",
            "komme",
            "könne"
          ],
          [
            "du",
            "seiest",
            "habest",
            "kommest",
            "könnest"
          ],
          [
            "er / sie / es",
            "sei",
            "habe",
            "komme",
            "könne"
          ],
          [
            "wir",
            "seien",
            "haben",
            "kommen",
            "können"
          ],
          [
            "ihr",
            "seiet",
            "habet",
            "kommet",
            "könnet"
          ],
          [
            "sie / Sie",
            "seien",
            "haben",
            "kommen",
            "können"
          ]
        ],
        "note": {
          "es": "Muchas formas coinciden con indicativo: wir haben, sie kommen. Sustitución posible por hätten/kämen o würde-forma según verbo y registro; la función puede seguir siendo discurso referido.",
          "en": "Many forms coincide with indicative: wir haben, sie kommen. Possible replacement by hätten/kämen or a würde-form, depending on verb and register; the function may remain reported speech."
        }
      },
      {
        "title": {
          "es": "Atribución aplicada · tiempo y voz",
          "en": "Applied attribution · tense and voice"
        },
        "columns": [
          {
            "es": "Directo",
            "en": "Direct"
          },
          {
            "es": "Referido",
            "en": "Reported"
          },
          {
            "es": "Relación",
            "en": "Relationship"
          }
        ],
        "rows": [
          [
            "„Ich bin müde.“",
            "Er sagt, er sei müde.",
            {
              "es": "Simultaneidad / estado.",
              "en": "Simultaneity / state."
            }
          ],
          [
            "„Ich habe gearbeitet.“",
            "Er sagt, er habe gearbeitet.",
            {
              "es": "Anterioridad con haben.",
              "en": "Anteriority with haben."
            }
          ],
          [
            "„Ich bin gekommen.“",
            "Er sagt, er sei gekommen.",
            {
              "es": "Anterioridad con sein.",
              "en": "Anteriority with sein."
            }
          ],
          [
            "„Die These wird geprüft.“",
            "Der Bericht sagt, die These werde geprüft.",
            {
              "es": "Proceso presente atribuido.",
              "en": "Attributed present process."
            }
          ],
          [
            "„Die These ist geprüft worden.“",
            "Der Bericht sagt, die These sei geprüft worden.",
            {
              "es": "Proceso anterior atribuido.",
              "en": "Attributed prior process."
            }
          ],
          [
            "„Regeln sind unwichtig.“",
            "Er behauptet, Regeln seien unwichtig.",
            {
              "es": "Afirmación atribuida; no declaración del narrador.",
              "en": "Attributed claim; not the narrator’s assertion."
            }
          ]
        ],
        "note": {
          "es": "Konjunktiv I no garantiza verdad/falsedad. Er sagt (presente) puede introducir anterioridad mediante Perfekt referido; no hay retroceso temporal mecánico.",
          "en": "Konjunktiv I does not guarantee truth/falsity. Er sagt (present) may introduce anteriority with reported Perfekt; there is no mechanical tense backshift."
        }
      }
    ],
    "primaryReadingId": "reading-b2-4",
    "readingSequence": [
      "reading-b2-4",
      "reading-b2-3"
    ],
    "prerequisites": [
      "unit-14"
    ],
    "readingGrammarIds": [
      "konjunktiv1",
      "konjunktiv2",
      "passive"
    ],
    "additionalVocabIds": [
      "conj-wenn",
      "pron-jemand",
      "pron-ich",
      "verb-wissen",
      "pron-es",
      "verb-muessen",
      "pron-wir",
      "prep-in",
      "pron-dieser",
      "noun-wort",
      "verb-werden",
      "prep-ueber",
      "verb-koennen",
      "conj-dass",
      "verb-pruefen",
      "verb-haben",
      "verb-bleiben",
      "pron-sich",
      "verb-sein",
      "prep-von",
      "noun-aufmerksamkeit",
      "prep-fuer",
      "pron-sie-singular",
      "noun-beispiel",
      "prep-zu",
      "prep-nach",
      "noun-erklaerung",
      "particle-nicht",
      "pron-jeder",
      "conj-oder",
      "noun-regel",
      "noun-wahrnehmung",
      "conj-und",
      "conj-sondern",
      "particle-auch",
      "adj-gross",
      "noun-frage",
      "conj-ob",
      "verb-erklaeren",
      "pron-was",
      "verb-unterscheiden",
      "noun-antwort"
    ]
  },
  "unit-16": {
    "overview": {
      "es": "Ordena momentos antes de elegir tiempo. Plusquamperfekt necesita un punto pasado de referencia; comparación expresa relación, no mera etiqueta.",
      "en": "Order moments before choosing tense. Plusquamperfekt needs a past reference point; comparison expresses a relation, not just a label."
    },
    "steps": [
      {
        "es": "Dibuja anterior→referencia pasada→ahora para distinguir Perfekt y Plusquamperfekt.",
        "en": "Draw earlier→past reference→now to distinguish Perfekt and Plusquamperfekt."
      },
      {
        "es": "Compara so…wie, -er…als y am…sten; la forma atributiva vuelve a declinarse.",
        "en": "Compare so…wie, -er…als and am…sten; attributive forms decline again."
      },
      {
        "es": "Interpreta Futur II por el contexto: futuro completado o conjetura sobre pasado.",
        "en": "Interpret Futur II by context: future completion or conjecture about the past."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Plusquamperfekt aplicado · auxiliares completos",
          "en": "Applied Plusquamperfekt · complete auxiliaries"
        },
        "columns": [
          {
            "es": "Persona",
            "en": "Person"
          },
          {
            "es": "lesen · haben",
            "en": "lesen · haben"
          },
          {
            "es": "gehen · sein",
            "en": "gehen · sein"
          }
        ],
        "rows": [
          [
            "ich",
            "hatte gelesen",
            "war gegangen"
          ],
          [
            "du",
            "hattest gelesen",
            "warst gegangen"
          ],
          [
            "er / sie / es",
            "hatte gelesen",
            "war gegangen"
          ],
          [
            "wir",
            "hatten gelesen",
            "waren gegangen"
          ],
          [
            "ihr",
            "hattet gelesen",
            "wart gegangen"
          ],
          [
            "sie / Sie",
            "hatten gelesen",
            "waren gegangen"
          ]
        ],
        "note": {
          "es": "Nachdem sie das Buch gelesen hatte, schrieb sie einen Text = después de haber leído el libro, escribió un texto. El pasado de referencia es schrieb.",
          "en": "Nachdem sie das Buch gelesen hatte, schrieb sie einen Text = after she had read the book, she wrote a text. The past reference point is schrieb."
        }
      },
      {
        "title": {
          "es": "Comparación y Futur II · interpretación aplicada",
          "en": "Comparison and Futur II · applied interpretation"
        },
        "columns": [
          {
            "es": "Patrón",
            "en": "Pattern"
          },
          {
            "es": "Ejemplo",
            "en": "Example"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "so…wie",
            "Dieser Text ist so schwierig wie der andere.",
            {
              "es": "tan difícil como",
              "en": "as difficult as"
            }
          ],
          [
            "-er…als",
            "Dieser Text ist schwieriger als der andere.",
            {
              "es": "más difícil que",
              "en": "more difficult than"
            }
          ],
          [
            "am…sten",
            "Dieser Text ist am schwierigsten.",
            {
              "es": "el más difícil (predicativo)",
              "en": "the most difficult (predicative)"
            }
          ],
          [
            {
              "es": "atributivo",
              "en": "attributive"
            },
            "Ich lese den schwierigeren Text.",
            {
              "es": "leo el texto más difícil de los comparados",
              "en": "I read the more difficult text"
            }
          ],
          [
            "Futur II + límite futuro",
            "Bis morgen werde ich den Text gelesen haben.",
            {
              "es": "Para mañana habré leído el texto.",
              "en": "By tomorrow I will have read the text."
            }
          ],
          [
            "Futur II + conjetura",
            "Er wird den Text wohl gelesen haben.",
            {
              "es": "Probablemente haya leído el texto.",
              "en": "He has probably read the text."
            }
          ]
        ],
        "note": {
          "es": "Futur II: werde/wirst/wird/werden/werdet/werden + Partizip II + haben/sein. Comparativo no significa causalidad.",
          "en": "Futur II: werde/wirst/wird/werden/werdet/werden + Partizip II + haben/sein. Comparison does not imply causation."
        }
      }
    ],
    "primaryReadingId": "reading-b1-2",
    "readingSequence": [
      "reading-b1-2",
      "reading-b2-1"
    ],
    "prerequisites": [
      "unit-15"
    ],
    "readingGrammarIds": [
      "past",
      "comparative",
      "future",
      "subordinate"
    ],
    "additionalVocabIds": [
      "verb-wollen",
      "verb-wissen",
      "conj-ob",
      "verb-helfen",
      "pron-sie-singular",
      "verb-lernen",
      "prep-mit",
      "conj-und",
      "prep-ohne",
      "verb-machen",
      "prep-an",
      "noun-wort",
      "verb-koennen",
      "pron-sich",
      "adj-gut",
      "verb-erinnern",
      "verb-denken",
      "conj-dass",
      "verb-sein",
      "verb-bemerken",
      "conj-aber",
      "adj-einfach",
      "particle-kein",
      "prep-fuer",
      "verb-muessen",
      "adj-schwierig",
      "adv-hingegen",
      "particle-nicht",
      "prep-auf",
      "noun-erfahrung",
      "verb-vergleichen",
      "verb-werden",
      "verb-sollen",
      "particle-nur",
      "conj-sondern",
      "particle-auch",
      "conj-wenn",
      "verb-bleiben",
      "pron-jeder"
    ]
  },
  "unit-17": {
    "overview": {
      "es": "Define condiciones sin invertir implicaciones. Distingue alcance de cuantificador y negación, y separa definición de afirmación empírica.",
      "en": "Define conditions without reversing implications. Distinguish quantifier and negation scope, and separate definitions from empirical claims."
    },
    "steps": [
      {
        "es": "Traduce el argumento a P/Q antes de decidir necesaria o suficiente.",
        "en": "Translate the argument into P/Q before deciding necessary or sufficient."
      },
      {
        "es": "Identifica qué niega nicht y qué cuantifica alle/kein.",
        "en": "Identify what nicht negates and what alle/kein quantify."
      },
      {
        "es": "Descomprime definiciones densas y explícita sus límites.",
        "en": "Expand dense definitions and state their limits explicitly."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Condiciones aplicadas · dirección lógica",
          "en": "Applied conditions · logical direction"
        },
        "columns": [
          {
            "es": "Alemán",
            "en": "German"
          },
          {
            "es": "Estructura",
            "en": "Structure"
          },
          {
            "es": "Lectura",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "P gilt nur, wenn Q gilt.",
            "P → Q",
            {
              "es": "Q necesaria para P.",
              "en": "Q necessary for P."
            }
          ],
          [
            "Wenn Q gilt, gilt P.",
            "Q → P",
            {
              "es": "Q suficiente para P.",
              "en": "Q sufficient for P."
            }
          ],
          [
            "P gilt genau dann, wenn Q gilt.",
            "P ↔ Q",
            {
              "es": "Q necesaria y suficiente para P.",
              "en": "Q necessary and sufficient for P."
            }
          ],
          [
            "P gilt, sofern Q gilt.",
            {
              "es": "Q → P (en lectura condicional)",
              "en": "Q → P (conditional reading)"
            },
            {
              "es": "P se afirma bajo condición Q; revisar alcance contextual.",
              "en": "P is asserted under condition Q; check contextual scope."
            }
          ],
          [
            "Soweit bekannt, gilt P.",
            {
              "es": "restricción epistémica",
              "en": "epistemic restriction"
            },
            {
              "es": "P según lo conocido; no una condición bicondicional.",
              "en": "P as far as known; not a biconditional condition."
            }
          ]
        ],
        "note": {
          "es": "gelten valer/aplicarse. La subordinada conserva verbo final; el símbolo representa el contenido, no el orden de las palabras.",
          "en": "gelten hold/apply. The subordinate clause keeps verb-final order; symbols represent content, not word order."
        }
      },
      {
        "title": {
          "es": "Definición y alcance · contrastes aplicados",
          "en": "Definition and scope · applied contrasts"
        },
        "columns": [
          {
            "es": "Forma",
            "en": "Form"
          },
          {
            "es": "Ejemplo",
            "en": "Example"
          },
          {
            "es": "Lectura",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "unter + Dat",
            "Unter diesem Begriff versteht man eine Fähigkeit.",
            {
              "es": "Por este concepto se entiende una capacidad.",
              "en": "This concept is understood as an ability."
            }
          ],
          [
            "als + categoría",
            "Als Beweis gilt eine gültige Ableitung.",
            {
              "es": "Una derivación válida cuenta como prueba.",
              "en": "A valid derivation counts as proof."
            }
          ],
          [
            "nicht alle",
            "Nicht alle Sätze sind wahr.",
            {
              "es": "Al menos uno no es verdadero.",
              "en": "At least one is not true."
            }
          ],
          [
            "kein",
            "Kein Satz ist wahr.",
            {
              "es": "Ninguno es verdadero.",
              "en": "None is true."
            }
          ],
          [
            "nur",
            "Nur dieser Satz ist wahr.",
            {
              "es": "Este es verdadero; los demás no.",
              "en": "This one is true; the others are not."
            }
          ],
          [
            "nicht nur",
            "Nicht nur dieser Satz ist wahr.",
            {
              "es": "Este y por lo menos otro son verdaderos.",
              "en": "This one and at least one other are true."
            }
          ]
        ],
        "note": {
          "es": "Begriff concepto; Fähigkeit capacidad; Ableitung derivación. Evita Alle Sätze sind nicht wahr si el foco puede volverla ambigua.",
          "en": "Begriff concept; Fähigkeit ability; Ableitung derivation. Avoid Alle Sätze sind nicht wahr when focus may make it ambiguous."
        }
      }
    ],
    "primaryReadingId": "reading-c1-3",
    "readingSequence": [
      "reading-c1-3",
      "reading-c1-1"
    ],
    "prerequisites": [
      "unit-16"
    ],
    "readingGrammarIds": [
      "connectors",
      "relative",
      "subordinate",
      "negation"
    ],
    "additionalVocabIds": [
      "pron-wer",
      "noun-bewusstsein",
      "verb-erklaeren",
      "verb-wollen",
      "verb-muessen",
      "verb-sein",
      "pron-sich",
      "prep-von",
      "noun-frage",
      "verb-unterscheiden",
      "conj-ob",
      "conj-und",
      "pron-etwas",
      "verb-werden",
      "pron-dieser",
      "particle-kein",
      "noun-theorie",
      "pron-sie-singular",
      "conj-dass",
      "prep-auf",
      "verb-koennen",
      "prep-ueber",
      "prep-aus",
      "prep-zwischen",
      "noun-verhalten",
      "adj-wesentlich",
      "noun-satz",
      "adj-kurz",
      "conj-aber",
      "noun-begriff",
      "prep-zu",
      "adv-hier",
      "conj-waehrend"
    ]
  },
  "unit-18": {
    "overview": {
      "es": "Lee covariación, proceso y evidencia sin convertir apoyo en demostración. Relaciona nominalización, participio y acción subyacente.",
      "en": "Read covariation, process and evidence without treating support as proof. Connect nominalisation, participles and the underlying action."
    },
    "steps": [
      {
        "es": "Construye je…desto con comparativo en ambas partes; conserva verbo final/V2.",
        "en": "Build je…desto with a comparative in both parts; preserve verb-final/V2 order."
      },
      {
        "es": "Recupera verbos detrás de los nombres: Anpassung→anpassen, Verarbeitung→verarbeiten.",
        "en": "Recover verbs behind nouns: Anpassung→anpassen, Verarbeitung→verarbeiten."
      },
      {
        "es": "Marca qué dato apoya qué afirmación y qué inferencia queda abierta.",
        "en": "Mark which evidence supports which claim and which inference remains open."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "je…desto aplicado · covariación y orden",
          "en": "Applied je…desto · covariation and word order"
        },
        "columns": [
          {
            "es": "je + comparativo, verbo final",
            "en": "je + comparative, verb final"
          },
          {
            "es": "desto + comparativo, V2",
            "en": "desto + comparative, V2"
          },
          {
            "es": "Sentido",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "Je häufiger man übt,",
            "desto leichter erinnert man sich.",
            {
              "es": "Cuanto más se practica, más fácil se recuerda.",
              "en": "The more often one practises, the more easily one remembers."
            }
          ],
          [
            "Je flexibler ein Modell ist,",
            "desto leichter kann es Besonderheiten erfassen.",
            {
              "es": "Cuanto más flexible el modelo, más fácil capta particularidades.",
              "en": "The more flexible the model, the more easily it can capture peculiarities."
            }
          ],
          [
            "Je mehr Daten wir prüfen,",
            "desto genauer können wir die These beurteilen.",
            {
              "es": "Cuantos más datos comprobamos, con mayor precisión podemos evaluar la tesis.",
              "en": "The more data we check, the more precisely we can assess the claim."
            }
          ]
        ],
        "note": {
          "es": "Estos ejemplos ilustran sintaxis; no afirman leyes empíricas. desto/umso son alternativas. häufiger más a menudo; leichter más fácilmente.",
          "en": "These examples illustrate syntax; they do not assert empirical laws. desto/umso are alternatives. häufiger more often; leichter more easily."
        }
      },
      {
        "title": {
          "es": "Lenguaje de evidencia · inferencia aplicada",
          "en": "Evidence language · applied inference"
        },
        "columns": [
          {
            "es": "Alemán",
            "en": "German"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          },
          {
            "es": "Compromiso",
            "en": "Commitment"
          }
        ],
        "rows": [
          [
            "Die Daten sprechen dafür, dass P gilt.",
            {
              "es": "Los datos apoyan que P.",
              "en": "The data support P."
            },
            {
              "es": "Apoyo, no garantía.",
              "en": "Support, not guarantee."
            }
          ],
          [
            "Daraus folgt nicht, dass P gilt.",
            {
              "es": "De ello no se sigue P.",
              "en": "P does not follow from this."
            },
            {
              "es": "Rechaza una inferencia; no implica ¬P.",
              "en": "Rejects an inference; does not imply ¬P."
            }
          ],
          [
            "A hängt mit B zusammen.",
            {
              "es": "A está relacionado con B.",
              "en": "A is related to B."
            },
            {
              "es": "Relación; dirección causal sin resolver.",
              "en": "Relation; causal direction unresolved."
            }
          ],
          [
            "Der Reiz wird verarbeitet.",
            {
              "es": "El estímulo se procesa.",
              "en": "The stimulus is processed."
            },
            {
              "es": "Proceso pasivo.",
              "en": "Passive process."
            }
          ],
          [
            "der zu verarbeitende Reiz",
            {
              "es": "el estímulo que debe/puede procesarse",
              "en": "the stimulus that must/can be processed"
            },
            {
              "es": "Atributo modal; contexto decide.",
              "en": "Modal modifier; context decides."
            }
          ]
        ],
        "note": {
          "es": "sich erinnern an + Akk; zusammenhängen mit + Dat. Evidencia y prueba lógica no son equivalentes.",
          "en": "sich erinnern an + Akk; zusammenhängen mit + Dat. Evidence and logical proof are not equivalent."
        }
      }
    ],
    "primaryReadingId": "reading-c1-4",
    "readingSequence": [
      "reading-c1-4",
      "reading-b2-2"
    ],
    "prerequisites": [
      "unit-17"
    ],
    "readingGrammarIds": [
      "comparative",
      "participles",
      "passive",
      "reflexive",
      "connectors"
    ],
    "additionalVocabIds": [
      "prep-an",
      "noun-daten",
      "verb-sein",
      "prep-von",
      "adj-neu",
      "verb-unterscheiden",
      "verb-koennen",
      "pron-es",
      "pron-dieser",
      "particle-kein",
      "prep-fuer",
      "pron-sich",
      "verb-nehmen",
      "verb-liegen",
      "prep-vor",
      "prep-nach",
      "verb-werden",
      "conj-und",
      "prep-unter",
      "noun-bedingung",
      "particle-nicht",
      "prep-auf",
      "noun-erkenntnis",
      "verb-machen",
      "prep-durch",
      "verb-bleiben",
      "noun-antwort",
      "adj-zuverlaessig",
      "verb-vorhersagen",
      "prep-ohne",
      "conj-wenn",
      "conj-dass",
      "pron-sie-plural",
      "conj-oder",
      "noun-erklaerung",
      "verb-sollen",
      "pron-er",
      "noun-zeit",
      "verb-helfen",
      "adv-allerdings",
      "particle-auch",
      "adj-gut",
      "prep-mit",
      "adj-moeglich"
    ]
  },
  "unit-19": {
    "overview": {
      "es": "Expresa alternativas pasadas y gradúa fuerza epistémica. Con doble infinitivo, aprende el grupo completo y su posición excepcional.",
      "en": "Express past alternatives and grade epistemic force. With double infinitives, learn the complete group and its exceptional position."
    },
    "steps": [
      {
        "es": "Separa hipótesis presente de contrafáctico pasado por el grupo verbal.",
        "en": "Separate present hypothesis from past counterfactual by the verb group."
      },
      {
        "es": "Con modal pasado no conviertas automáticamente el infinitivo modal en participio.",
        "en": "With a past modal do not automatically turn the modal infinitive into a participle."
      },
      {
        "es": "Determina si el modal expresa obligación, permiso o inferencia contextual.",
        "en": "Determine whether the modal expresses obligation, permission or contextual inference."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Irrealis pasado · grupos completos aplicados",
          "en": "Past irrealis · complete applied groups"
        },
        "columns": [
          {
            "es": "Patrón",
            "en": "Pattern"
          },
          {
            "es": "Principal",
            "en": "Main clause"
          },
          {
            "es": "Subordinada",
            "en": "Subordinate clause"
          }
        ],
        "rows": [
          [
            "hätte + Partizip",
            "Ich hätte den Text gelesen.",
            "wenn ich den Text gelesen hätte"
          ],
          [
            "wäre + Partizip",
            "Ich wäre nach Berlin gegangen.",
            "wenn ich nach Berlin gegangen wäre"
          ],
          [
            "hätte + dos infinitivos",
            "Ich hätte kommen können.",
            "weil ich hätte kommen können"
          ],
          [
            "hätte + dos infinitivos",
            "Ich hätte den Text lesen müssen.",
            "weil ich den Text hätte lesen müssen"
          ],
          [
            {
              "es": "Condición + consecuencia",
              "en": "Condition + consequence"
            },
            "Wenn wir die Daten geprüft hätten, hätten wir den Fehler bemerkt.",
            "—"
          ]
        ],
        "note": {
          "es": "Doble infinitivo: hätte va delante de kommen können / lesen müssen al final de la subordinada. bemerk(en) advertir; Fehler error.",
          "en": "Double infinitive: hätte precedes kommen können / lesen müssen in the subordinate verb cluster. bemerken notice; Fehler error."
        }
      },
      {
        "title": {
          "es": "Modalidad epistémica · fuerza y contexto",
          "en": "Epistemic modality · strength and context"
        },
        "columns": [
          {
            "es": "Expresión",
            "en": "Expression"
          },
          {
            "es": "Lectura epistémica",
            "en": "Epistemic reading"
          },
          {
            "es": "Contraste",
            "en": "Contrast"
          }
        ],
        "rows": [
          [
            "Das könnte stimmen.",
            {
              "es": "Podría ser correcto.",
              "en": "It could be correct."
            },
            {
              "es": "Posibilidad.",
              "en": "Possibility."
            }
          ],
          [
            "Das dürfte stimmen.",
            {
              "es": "Probablemente sea correcto.",
              "en": "It is probably correct."
            },
            {
              "es": "Conjetura; no permiso.",
              "en": "Conjecture; not permission."
            }
          ],
          [
            "Das muss stimmen.",
            {
              "es": "Tiene que ser correcto (inferencia).",
              "en": "It must be correct (inference)."
            },
            {
              "es": "También admite necesidad según contexto.",
              "en": "May also express necessity depending on context."
            }
          ],
          [
            "Das lässt sich nicht ausschließen.",
            {
              "es": "No puede descartarse.",
              "en": "It cannot be ruled out."
            },
            {
              "es": "No afirma que sea probable.",
              "en": "Does not assert that it is probable."
            }
          ],
          [
            "nach bisherigem Kenntnisstand",
            {
              "es": "según el conocimiento actual",
              "en": "according to current knowledge"
            },
            {
              "es": "Límite explícito del alcance.",
              "en": "Explicit scope restriction."
            }
          ]
        ],
        "note": {
          "es": "stimmen ser correcto; ausschließen descartar. No asignes probabilidad numérica a estos modales.",
          "en": "stimmen be correct; ausschließen rule out. Do not assign numerical probabilities to these modals."
        }
      }
    ],
    "primaryReadingId": "reading-c1-3",
    "readingSequence": [
      "reading-c1-3",
      "reading-c1-4"
    ],
    "prerequisites": [
      "unit-18"
    ],
    "readingGrammarIds": [
      "konjunktiv2",
      "modal-verbs",
      "konjunktiv1",
      "perfect"
    ],
    "additionalVocabIds": [
      "pron-wer",
      "noun-bewusstsein",
      "verb-erklaeren",
      "verb-wollen",
      "verb-muessen",
      "verb-sein",
      "pron-sich",
      "prep-von",
      "noun-frage",
      "verb-unterscheiden",
      "conj-ob",
      "conj-und",
      "pron-etwas",
      "verb-werden",
      "pron-dieser",
      "particle-kein",
      "noun-theorie",
      "pron-sie-singular",
      "conj-dass",
      "prep-auf",
      "verb-koennen",
      "prep-ueber",
      "prep-aus",
      "prep-zwischen",
      "noun-verhalten",
      "adj-wesentlich",
      "prep-an",
      "noun-daten",
      "adj-neu",
      "pron-es",
      "prep-fuer",
      "verb-nehmen",
      "verb-liegen",
      "prep-vor",
      "prep-nach",
      "prep-unter",
      "noun-bedingung",
      "particle-nicht",
      "noun-erkenntnis",
      "verb-machen",
      "prep-durch",
      "verb-bleiben"
    ]
  },
  "unit-20": {
    "overview": {
      "es": "Integra sintaxis y argumento: identifica proposiciones, fuente, supuesto, evidencia y alcance; luego traduce conservando esas relaciones.",
      "en": "Integrate syntax and argument: identify propositions, source, assumptions, evidence and scope; then translate while preserving those relations."
    },
    "steps": [
      {
        "es": "Lee primero núcleos verbales y nominales; después despliega atributos y subordinadas.",
        "en": "First read verbal and nominal heads; then expand modifiers and subordinate clauses."
      },
      {
        "es": "Reconstruye premisa→conclusión y localiza atribución, cautela y objeción.",
        "en": "Reconstruct premise→conclusion and locate attribution, caution and objection."
      },
      {
        "es": "Traduce una vez literalmente y otra con sintaxis natural; comprueba que ambas preservan el argumento.",
        "en": "Translate once literally and once naturally; check that both preserve the argument."
      }
    ],
    "appliedTables": [
      {
        "title": {
          "es": "Argumento integrado · grupos y funciones",
          "en": "Integrated argument · phrases and functions"
        },
        "columns": [
          {
            "es": "Segmento alemán",
            "en": "German segment"
          },
          {
            "es": "Función",
            "en": "Function"
          },
          {
            "es": "Significado",
            "en": "Meaning"
          }
        ],
        "rows": [
          [
            "Eine Erklärung, die Verhalten vorhersagt,",
            {
              "es": "Sujeto + relativa; vorhersagt final.",
              "en": "Subject + relative; vorhersagt final."
            },
            {
              "es": "Una explicación que predice conducta,",
              "en": "An explanation that predicts behaviour,"
            }
          ],
          [
            "ist nicht schon deshalb vollständig,",
            {
              "es": "Principal V2 + negación de inferencia.",
              "en": "Main clause V2 + negated inference."
            },
            {
              "es": "no es completa por ese solo motivo,",
              "en": "is not complete for that reason alone,"
            }
          ],
          [
            "weil ihre Vorhersagen zuverlässig sind.",
            {
              "es": "Subordinada causal; sind final.",
              "en": "Causal subordinate; sind final."
            },
            {
              "es": "porque sus predicciones son fiables.",
              "en": "because its predictions are reliable."
            }
          ],
          [
            "Der Autor behauptet, Bewusstsein sei erklärbar.",
            {
              "es": "Fuente + Konjunktiv I.",
              "en": "Source + Konjunktiv I."
            },
            {
              "es": "El autor sostiene que la conciencia es explicable.",
              "en": "The author claims consciousness is explainable."
            }
          ]
        ],
        "note": {
          "es": "La primera frase bloquea una inferencia; no niega toda posibilidad de explicación. Autor autor; vollständig completo; erklärbar explicable.",
          "en": "The first sentence blocks an inference; it does not deny every possibility of explanation. Autor author; vollständig complete; erklärbar explainable."
        }
      },
      {
        "title": {
          "es": "Condensación → expansión · casos aplicados",
          "en": "Condensation → expansion · applied cases"
        },
        "columns": [
          {
            "es": "Compacto",
            "en": "Compact"
          },
          {
            "es": "Expansión",
            "en": "Expansion"
          },
          {
            "es": "Relación gramatical",
            "en": "Grammatical relation"
          }
        ],
        "rows": [
          [
            "die Erklärung des beobachteten Verhaltens",
            "Jemand erklärt das Verhalten, das beobachtet wurde.",
            {
              "es": "Gen neutro des…-s; participio débil -en.",
              "en": "Neuter Gen des…-s; weak participle -en."
            }
          ],
          [
            "die Prüfung der zugrunde liegenden Annahmen",
            "Jemand prüft die Annahmen, die zugrunde liegen.",
            {
              "es": "Gen plural; Partizip I atributivo.",
              "en": "Plural Gen; attributive Partizip I."
            }
          ],
          [
            "die vom Autor behauptete Schlussfolgerung",
            "die Schlussfolgerung, die der Autor behauptet hat",
            {
              "es": "Agente von + Dat; participio como adjetivo.",
              "en": "Agent von + Dat; participle as adjective."
            }
          ],
          [
            "die Unterscheidung zwischen Vorhersage und Erklärung",
            "Jemand unterscheidet zwischen Vorhersage und Erklärung.",
            {
              "es": "zwischen + Dat no espacial; régimen léxico.",
              "en": "Non-spatial zwischen + Dat; lexical government."
            }
          ]
        ],
        "note": {
          "es": "Reconstruir la gramática no demuestra la tesis. Mantén separados texto, paráfrasis y evaluación propia.",
          "en": "Reconstructing grammar does not prove the claim. Keep text, paraphrase and your own assessment separate."
        }
      }
    ],
    "primaryReadingId": "reading-c1-4",
    "readingSequence": [
      "reading-c1-4",
      "reading-c1-3",
      "reading-c1-2",
      "reading-b2-3"
    ],
    "prerequisites": [
      "unit-19"
    ],
    "readingGrammarIds": [
      "relative",
      "adjective-endings",
      "genitive",
      "connectors",
      "konjunktiv1",
      "passive"
    ],
    "additionalVocabIds": [
      "prep-an",
      "noun-daten",
      "verb-sein",
      "prep-von",
      "adj-neu",
      "verb-unterscheiden",
      "verb-koennen",
      "pron-es",
      "pron-dieser",
      "particle-kein",
      "prep-fuer",
      "pron-sich",
      "verb-nehmen",
      "verb-liegen",
      "prep-vor",
      "prep-nach",
      "verb-werden",
      "conj-und",
      "prep-unter",
      "noun-bedingung",
      "particle-nicht",
      "prep-auf",
      "noun-erkenntnis",
      "verb-machen",
      "prep-durch",
      "verb-bleiben",
      "pron-wer",
      "noun-bewusstsein",
      "verb-erklaeren",
      "verb-wollen",
      "verb-muessen",
      "noun-frage",
      "conj-ob",
      "pron-etwas",
      "noun-theorie",
      "pron-sie-singular",
      "conj-dass",
      "prep-ueber",
      "prep-aus",
      "prep-zwischen",
      "noun-verhalten",
      "adj-wesentlich",
      "conj-aber",
      "particle-nur",
      "prep-in",
      "pron-man",
      "noun-begriff",
      "prep-zu",
      "noun-wahrnehmung",
      "conj-sondern",
      "particle-auch",
      "adj-gross",
      "pron-was",
      "noun-antwort"
    ]
  }
};
