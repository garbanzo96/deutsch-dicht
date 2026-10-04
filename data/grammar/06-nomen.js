/* Gramática · Nomen, Artikel, Kasus */
(function () {
  const M = (es, en) => ({ es, en });
  DD.grammarTopic('k-nomen', [
    {
      id: 'g-gender', level: 'A1', de: 'Genus: Regeln und Tendenzen', es: 'Género: reglas y tendencias', en: 'Gender: rules and tendencies',
      summary: M('Tres géneros (der, die, das) que hay que aprender con cada sustantivo. Pero el sufijo predice el género con mucha fiabilidad, y algunos grupos semánticos también. En compuestos manda la última palabra.', 'Three genders (der, die, das) to be learned with each noun. But the suffix predicts gender very reliably, and some semantic groups do too. In compounds the last word decides.'),
      blocks: [
        { b: 'table', h: M('Sufijos que predicen el género', 'Suffixes that predict gender'), c: [M('Género', 'Gender'), M('Sufijos (casi sin excepciones)', 'Suffixes (almost no exceptions)'), M('Ejemplos', 'Examples')], r: [
          ['{m der}', '-er (personas, aparatos), -ling, -ismus, -ant, -ent, -ist, -or, -ig', 'der Lehrer, der Computer, der Frühling, der Tourismus, der Student, der Motor, der Honig'],
          ['{f die}', '-ung, -heit, -keit, -schaft, -ion, -tät, -ik, -ur, -enz, -anz, -ie, -ei, -in', 'die Zeitung, die Freiheit, die Möglichkeit, die Freundschaft, die Nation, die Universität, die Musik, die Kultur'],
          ['{n das}', '-chen, -lein, -um, -ment, -ma, -nis (mayoría), Ge- + raíz, infinitivos', 'das Mädchen, das Fräulein, das Museum, das Dokument, das Thema, das Ergebnis, das Gebäude, das Essen']
        ], n: M('-e final: unas 90 % femeninas (die Lampe, die Straße), pero masculinos n-declinación (der Junge, der Kollege) y algunos neutros (das Ende, das Auge).', 'Final -e: about 90% feminine (die Lampe, die Straße), but masculine n-declension nouns (der Junge, der Kollege) and some neuters (das Ende, das Auge).') },
        { b: 'table', h: M('Grupos semánticos', 'Semantic groups'), c: [M('Género', 'Gender'), M('Grupos', 'Groups'), M('Ejemplos', 'Examples')], r: [
          ['{m der}', M('días, meses, estaciones, puntos cardinales, clima, bebidas alcohólicas (salvo das Bier), marcas de autos', 'days, months, seasons, compass points, weather, alcoholic drinks (except das Bier), car brands'), 'der Montag, der Mai, der Winter, der Norden, der Regen, der Wein, der BMW'],
          ['{f die}', M('la mayoría de árboles y flores, números como sustantivo, barcos y aviones', 'most trees and flowers, numbers as nouns, ships and planes'), 'die Eiche, die Rose, die Drei, die Titanic'],
          ['{n das}', M('metales, colores y letras sustantivados, idiomas sustantivados, hoteles, cines, la mayoría de países y ciudades', 'metals, nominalised colours and letters, languages as nouns, hotels, cinemas, most countries and cities'), 'das Gold, das Blau, das A, das Deutsch, das Hilton, das alte Leipzig']
        ], n: M('Países con artículo: die Schweiz, die Türkei, der Iran, der Irak, die USA (pl.), die Niederlande (pl.).', 'Countries with articles: die Schweiz, die Türkei, der Iran, der Irak, die USA (pl.), die Niederlande (pl.).') },
        { b: 'note', tone: 'tip', t: M('Aprende siempre el sustantivo con artículo y plural (der Tisch, -e). La app colorea los géneros: azul der, rojo die, verde das, ámbar plural.', 'Always learn the noun with article and plural (der Tisch, -e). The app colour-codes gender: blue der, red die, green das, amber plural.') }
      ],
      examples: [['Die Zeitung liegt auf dem Tisch.', 'El diario está sobre la mesa.', 'The newspaper is on the table.'], ['Das Mädchen liest ein Buch.', 'La niña lee un libro.', 'The girl is reading a book.'], ['Der Frühling beginnt im März.', 'La primavera empieza en marzo.', 'Spring starts in March.']]
    },
    {
      id: 'g-plural', level: 'A1', de: 'Pluralbildung', es: 'Formación del plural', en: 'Plural formation',
      summary: M('Cinco terminaciones de plural (-e, -er, -(e)n, -s, –) a menudo con Umlaut. El plural siempre lleva el artículo die y en dativo añade -n (salvo plurales en -n o -s).', 'Five plural endings (-e, -er, -(e)n, -s, –) often with umlaut. The plural always takes die and adds -n in the dative (except plurals in -n or -s).'),
      blocks: [
        { b: 'table', h: M('Los cinco tipos de plural', 'The five plural types'), c: [M('Tipo', 'Type'), M('Típico de', 'Typical of'), M('Ejemplos', 'Examples')], r: [
          ['-e / ¨-e', M('masculinos y neutros monosílabos', 'monosyllabic masculines and neuters'), 'der Tisch → Tische · der Stuhl → Stühle · das Jahr → Jahre'],
          ['-er / ¨-er', M('neutros monosílabos', 'monosyllabic neuters'), 'das Kind → Kinder · das Haus → Häuser · der Mann → Männer'],
          ['-(e)n', M('femeninos; masculinos débiles', 'feminines; weak masculines'), 'die Frau → Frauen · die Lampe → Lampen · der Student → Studenten'],
          ['-nen', M('femeninos en -in', 'feminines in -in'), 'die Lehrerin → Lehrerinnen'],
          ['– / ¨', M('masculinos y neutros en -er, -el, -en, -chen, -lein', 'masculines and neuters in -er, -el, -en, -chen, -lein'), 'der Lehrer → Lehrer · der Vater → Väter · das Mädchen → Mädchen'],
          ['-s', M('préstamos, abreviaturas, vocal final (no -e)', 'loanwords, abbreviations, final vowel (not -e)'), 'das Auto → Autos · das Handy → Handys · die Oma → Omas']
        ] },
        { b: 'table', h: M('Plurales especiales', 'Special plurals'), c: [M('Singular', 'Singular'), M('Plural', 'Plural'), M('Nota', 'Note')], r: [
          ['das Museum', 'die Museen', M('-um → -en', '-um → -en')], ['das Thema', 'die Themen', M('-a → -en', '-a → -en')], ['das Studium', 'die Studien', M('-ium → -ien', '-ium → -ien')],
          ['der Mythos', 'die Mythen', M('-os → -en', '-os → -en')], ['das Wort', 'die Wörter / die Worte', M('palabras sueltas / enunciado', 'single words / utterance')], ['die Bank', 'die Bänke / die Banken', M('bancos (asiento) / bancos (dinero)', 'benches / banks')]
        ], n: M('Solo plural: die Eltern, die Leute, die Ferien, die Kosten, die Lebensmittel. Solo singular: das Obst, das Gemüse, die Milch, das Geld, die Polizei.', 'Plural only: die Eltern, die Leute, die Ferien, die Kosten, die Lebensmittel. Singular only: das Obst, das Gemüse, die Milch, das Geld, die Polizei.') }
      ],
      examples: [['Die Kinder spielen mit den Hunden.', 'Los niños juegan con los perros.', 'The children are playing with the dogs.'], ['In Leipzig gibt es viele Museen.', 'En Leipzig hay muchos museos.', 'There are many museums in Leipzig.'], ['Meine Eltern haben zwei Autos.', 'Mis padres tienen dos autos.', 'My parents have two cars.']]
    },
    {
      id: 'g-articles', level: 'A1', de: 'Bestimmter, unbestimmter und Nullartikel', es: 'Artículo definido, indefinido y cero', en: 'Definite, indefinite and zero article',
      summary: M('der/die/das = algo conocido o único; ein/eine = algo nuevo o uno cualquiera; kein = negación de ein; sin artículo: plurales indefinidos, sustancias, profesiones y nacionalidades tras sein/werden, nombres propios.', 'der/die/das = known or unique; ein/eine = new or any one; kein = negation of ein; no article: indefinite plurals, substances, professions and nationalities after sein/werden, proper names.'),
      blocks: [
        { b: 'table', h: M('Cuándo no se usa artículo', 'When no article is used'), c: [M('Caso', 'Case'), M('Ejemplo', 'Example')], r: [
          [M('profesión, nacionalidad, religión (con sein, werden)', 'profession, nationality, religion (with sein, werden)'), 'Sie ist [Ärztin]. Er wird [Lehrer]. Ich bin [Chilene].'],
          [M('sustancias y abstractos en sentido general', 'substances and abstracts in a general sense'), 'Ich trinke [Wasser]. Er hat [Geduld].'],
          [M('plural indefinido', 'indefinite plural'), 'Wir kaufen [Äpfel].'],
          [M('nombres de personas, ciudades, países neutros', 'names of people, cities, neuter countries'), '[Lena] wohnt in [Leipzig], [Deutschland].'],
          [M('expresiones fijas', 'fixed expressions'), 'Angst haben, Auto fahren, Zeit haben, zu Fuß, nach Hause']
        ] }
      ],
      examples: [['Ich habe einen Bruder. Der Bruder heißt Max.', 'Tengo un hermano. El hermano se llama Max.', 'I have a brother. The brother is called Max.'], ['Sie ist Ingenieurin.', 'Es ingeniera.', 'She is an engineer.'], ['Hast du Zeit?', '¿Tienes tiempo?', 'Do you have time?']]
    },
    {
      id: 'g-cases', level: 'A1', de: 'Die vier Kasus: Funktionen', es: 'Los cuatro casos: funciones', en: 'The four cases: functions',
      summary: M('El caso indica la función de un sustantivo y se marca sobre todo en el artículo. Nominativo: sujeto. Acusativo: objeto directo y tras ciertas preposiciones. Dativo: objeto indirecto, tras ciertas preposiciones y verbos. Genitivo: posesión, tras ciertas preposiciones (registro escrito).', 'Case shows a noun’s function and is marked mainly on the article. Nominative: subject. Accusative: direct object and after certain prepositions. Dative: indirect object, after certain prepositions and verbs. Genitive: possession, after certain prepositions (written register).'),
      blocks: [
        { b: 'table', h: M('Preguntas y funciones', 'Questions and functions'), c: [M('Caso', 'Case'), M('Pregunta', 'Question'), M('Función', 'Function'), M('Ejemplo', 'Example')], r: [
          ['{N Nominativ}', 'wer? was?', M('sujeto; predicativo (sein, werden, bleiben)', 'subject; predicate noun (sein, werden, bleiben)'), '{N Der Mann} ist {N ein Lehrer}.'],
          ['{A Akkusativ}', 'wen? was?', M('objeto directo; tiempo (jeden Tag)', 'direct object; time (jeden Tag)'), 'Ich sehe {A den Mann}.'],
          ['{D Dativ}', 'wem?', M('objeto indirecto; verbos y preposiciones de dativo', 'indirect object; dative verbs and prepositions'), 'Ich gebe {D dem Mann} das Buch.'],
          ['{G Genitiv}', 'wessen?', M('posesión; preposiciones de genitivo', 'possession; genitive prepositions'), 'Das ist das Auto {G des Mannes}.']
        ] },
        { b: 'ref', id: 'g-declension-overview' }
      ],
      examples: [['Der Lehrer gibt dem Schüler das Buch des Kollegen.', 'El profesor le da al alumno el libro del colega.', 'The teacher gives the pupil the colleague’s book.'], ['Wem gehört der Schlüssel?', '¿De quién es la llave?', 'Who does the key belong to?'], ['Ich habe einen Hund und eine Katze.', 'Tengo un perro y un gato.', 'I have a dog and a cat.']]
    },
    {
      id: 'g-declension-overview', level: 'A2', de: 'Deklination: Gesamtübersicht', es: 'Declinación: cuadro general', en: 'Declension: complete overview',
      summary: M('Todo el sistema de casos en una página: artículos definidos e indefinidos, posesivos, pronombres personales y la clave del sistema: el masculino solo cambia en acusativo (den/einen); el dativo plural lleva -n; el genitivo masculino/neutro lleva -(e)s en el sustantivo.', 'The entire case system on one page: definite and indefinite articles, possessives, personal pronouns, and the key to the system: the masculine changes alone in the accusative (den/einen); the dative plural takes -n; masculine/neuter genitive adds -(e)s to the noun.'),
      blocks: [
        { b: 'table', h: M('Artículo definido', 'Definite article'), c: ['', '{m maskulin}', '{f feminin}', '{n neutral}', '{p Plural}'], r: [
          ['Nominativ', 'der Tisch', 'die Lampe', 'das Bett', 'die Tische'],
          ['Akkusativ', '[den] Tisch', 'die Lampe', 'das Bett', 'die Tische'],
          ['Dativ', '[dem] Tisch', '[der] Lampe', '[dem] Bett', '[den] Tische[n]'],
          ['Genitiv', '[des] Tisch[es]', '[der] Lampe', '[des] Bett[es]', '[der] Tische']
        ], n: M('Igual que der: dieser, jener, jeder, mancher, welcher, solcher, aller (con -er, -e, -es, -en, -em).', 'Like der: dieser, jener, jeder, mancher, welcher, solcher, aller (with -er, -e, -es, -en, -em).') },
        { b: 'table', h: M('Artículo indefinido, negativo y posesivo', 'Indefinite, negative and possessive article'), c: ['', '{m maskulin}', '{f feminin}', '{n neutral}', '{p Plural}'], r: [
          ['Nominativ', 'ein / kein / mein', 'eine / keine / meine', 'ein / kein / mein', '— / keine / meine'],
          ['Akkusativ', '[einen] / [keinen] / [meinen]', 'eine / keine / meine', 'ein / kein / mein', '— / keine / meine'],
          ['Dativ', '[einem] / [keinem] / [meinem]', '[einer] / [keiner] / [meiner]', '[einem] / [keinem] / [meinem]', '— / [keinen] / [meinen]'],
          ['Genitiv', '[eines] / [keines] / [meines]', '[einer] / [keiner] / [meiner]', '[eines] / [keines] / [meines]', '— / [keiner] / [meiner]']
        ], n: M('Posesivos: mein, dein, sein, ihr, sein, unser, euer (eure), ihr, Ihr. Sin terminación en Nom m/n y Akk n: es la «laguna» que obliga al adjetivo a mostrar el género (ein guter Wein).', 'Possessives: mein, dein, sein, ihr, sein, unser, euer (eure), ihr, Ihr. No ending in nom. m/n and acc. n: this “gap” forces the adjective to show gender (ein guter Wein).') },
        { b: 'table', h: M('Pronombres personales', 'Personal pronouns'), c: ['Nominativ', 'Akkusativ', 'Dativ', M('Genitivo (raro)', 'Genitive (rare)')], r: [
          ['ich', 'mich', 'mir', 'meiner'], ['du', 'dich', 'dir', 'deiner'], ['er', 'ihn', 'ihm', 'seiner'], ['sie', 'sie', 'ihr', 'ihrer'], ['es', 'es', 'ihm', 'seiner'],
          ['wir', 'uns', 'uns', 'unser'], ['ihr', 'euch', 'euch', 'euer'], ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen', 'ihrer / Ihrer']
        ] },
        { b: 'table', h: M('Interrogativos y relativos', 'Interrogatives and relatives'), c: ['', 'wer?', 'was?', M('relativo m', 'relative m'), M('relativo f', 'relative f'), M('relativo n', 'relative n'), M('relativo pl', 'relative pl')], r: [
          ['Nominativ', 'wer', 'was', 'der', 'die', 'das', 'die'], ['Akkusativ', 'wen', 'was', 'den', 'die', 'das', 'die'],
          ['Dativ', 'wem', '—', 'dem', 'der', 'dem', '[denen]'], ['Genitiv', 'wessen', '—', '[dessen]', '[deren]', '[dessen]', '[deren]']
        ] },
        { b: 'note', tone: 'tip', t: M('Tres claves que lo explican casi todo: (1) solo el masculino distingue Nom y Akk; (2) dativo = -m (m/n), -r (f), -n (pl); (3) genitivo = -s (m/n), -r (f, pl).', 'Three keys explain nearly everything: (1) only the masculine distinguishes nom. and acc.; (2) dative = -m (m/n), -r (f), -n (pl); (3) genitive = -s (m/n), -r (f, pl).') }
      ],
      examples: [['Ich schenke meinem Bruder einen Kalender.', 'Le regalo a mi hermano un calendario.', 'I give my brother a calendar.'], ['Das ist die Frau, deren Sohn in Chile lebt.', 'Esa es la mujer cuyo hijo vive en Chile.', 'That is the woman whose son lives in Chile.'], ['Wem hast du das erzählt?', '¿A quién le contaste eso?', 'Who did you tell that to?']]
    },
    {
      id: 'g-accusative', level: 'A1', de: 'Der Akkusativ', es: 'El acusativo', en: 'The accusative',
      summary: M('Caso del objeto directo. Solo el masculino cambia de forma (der → den, ein → einen). También tras durch, für, gegen, ohne, um; tras las preposiciones de doble caso con movimiento (wohin?); con es gibt; y en expresiones de tiempo sin preposición (jeden Tag, nächsten Monat).', 'Case of the direct object. Only the masculine changes (der → den, ein → einen). Also after durch, für, gegen, ohne, um; after two-way prepositions with movement (wohin?); with es gibt; and in time expressions without a preposition (jeden Tag, nächsten Monat).'),
      blocks: [
        { b: 'table', h: M('Usos del acusativo', 'Uses of the accusative'), c: [M('Uso', 'Use'), M('Ejemplo', 'Example')], r: [
          [M('objeto directo', 'direct object'), 'Ich kaufe {A einen Kaffee}.'], ['es gibt', 'Es gibt {A keinen Zucker} mehr.'],
          [M('preposiciones de acusativo', 'accusative prepositions'), 'Das ist für {A dich}.'], [M('Wechselpräposition + wohin?', 'two-way preposition + wohin?'), 'Ich gehe in {A den Park}.'],
          [M('tiempo y medida sin preposición', 'time and measure without preposition'), 'Ich jogge {A jeden Morgen}. Er bleibt {A einen Monat}.'], [M('saludos y deseos', 'greetings and wishes'), '{A Guten Tag}! {A Vielen Dank}!']
        ] }
      ],
      examples: [['Ich brauche einen neuen Laptop.', 'Necesito un nuevo notebook.', 'I need a new laptop.'], ['Wir fahren nächsten Sommer nach Chile.', 'El próximo verano vamos a Chile.', 'We are going to Chile next summer.'], ['Hast du einen Bruder?', '¿Tienes un hermano?', 'Do you have a brother?']]
    },
    {
      id: 'g-dative', level: 'A2', de: 'Der Dativ', es: 'El dativo', en: 'The dative',
      summary: M('Caso del objeto indirecto (normalmente una persona que recibe algo). Marcas: dem, der, dem, den + -n en plural. También tras aus, bei, mit, nach, seit, von, zu, gegenüber; tras preposiciones de doble caso sin movimiento (wo?); con un grupo de verbos (helfen, danken, gefallen…) y adjetivos (ähnlich, dankbar, bekannt).', 'Case of the indirect object (usually a person receiving something). Markers: dem, der, dem, den + -n in the plural. Also after aus, bei, mit, nach, seit, von, zu, gegenüber; after two-way prepositions without movement (wo?); with a group of verbs (helfen, danken, gefallen…) and adjectives (ähnlich, dankbar, bekannt).'),
      blocks: [
        { b: 'table', h: M('Usos del dativo', 'Uses of the dative'), c: [M('Uso', 'Use'), M('Ejemplo', 'Example')], r: [
          [M('objeto indirecto', 'indirect object'), 'Ich schenke {D meiner Mutter} Blumen.'], [M('verbos con dativo', 'dative verbs'), 'Das gefällt {D mir}.'],
          [M('preposiciones de dativo', 'dative prepositions'), 'Ich fahre mit {D dem Bus}.'], [M('Wechselpräposition + wo?', 'two-way preposition + wo?'), 'Ich bin in {D dem Park} = im Park.'],
          [M('sensación personal', 'personal sensation'), '{D Mir} ist kalt. {D Ihm} ist schlecht.'], [M('partes del cuerpo (posesivo)', 'body parts (possessive)'), 'Ich wasche {D mir} die Hände. {D Mir} tut der Kopf weh.'],
          [M('adjetivos con dativo', 'adjectives with dative'), 'Er ist {D seinem Vater} sehr ähnlich.']
        ] }
      ],
      examples: [['Kannst du mir helfen?', '¿Me puedes ayudar?', 'Can you help me?'], ['Ich wohne seit einem Jahr bei meinen Freunden.', 'Vivo hace un año con mis amigos.', 'I have been living with my friends for a year.'], ['Mir ist heute so kalt.', 'Hoy tengo tanto frío.', 'I’m so cold today.']]
    },
    {
      id: 'g-genitive', level: 'B1', de: 'Der Genitiv', es: 'El genitivo', en: 'The genitive',
      summary: M('Caso de la posesión y la relación entre sustantivos: des Mannes, der Frau, des Kindes, der Kinder. Masculinos y neutros añaden -s / -es al sustantivo. En el habla se reemplaza a menudo por von + dativo; en la escritura es obligatorio.', 'Case of possession and relations between nouns: des Mannes, der Frau, des Kindes, der Kinder. Masculines and neuters add -s / -es to the noun. Speech often replaces it with von + dative; in writing it is obligatory.'),
      blocks: [
        { b: 'table', h: M('-s o -es', '-s or -es'), c: [M('Regla', 'Rule'), M('Ejemplos', 'Examples')], r: [
          [M('-es: monosílabos y raíz en -s, -ß, -x, -z, -sch', '-es: monosyllables and stems in -s, -ß, -x, -z, -sch'), 'des Mannes, des Hauses, des Fußes, des Tisches'],
          [M('-s: polisílabos', '-s: polysyllables'), 'des Lehrers, des Vaters, des Mädchens, des Computers'],
          [M('nombres propios: -s sin apóstrofo', 'proper names: -s without apostrophe'), 'Lenas Buch, Kants Kritik · tras -s: Hans’ Auto'],
          [M('n-declinación: -(e)n', 'n-declension: -(e)n'), 'des Studenten, des Kollegen, des Herrn · des Namens']
        ] },
        { b: 'table', h: M('Usos del genitivo', 'Uses of the genitive'), c: [M('Uso', 'Use'), M('Ejemplo', 'Example')], r: [
          [M('atributo de un sustantivo', 'noun attribute'), 'das Ende {G des Films}'],
          [M('preposiciones', 'prepositions'), 'wegen {G des Wetters}, trotz {G des Regens}, während {G der Reise}'],
          [M('verbos formales', 'formal verbs'), 'Wir gedenken {G der Opfer}.'],
          [M('adverbial de tiempo', 'adverbial of time'), '{G Eines Tages} … · {G eines Abends}'],
          [M('cadenas de genitivo (escrito)', 'genitive chains (written)'), 'die Lösung {G des Problems} {G der Stadt}']
        ] }
      ],
      examples: [['Das ist das Auto meines Vaters.', 'Ese es el auto de mi padre.', 'That is my father’s car.'], ['Wegen des Streiks fahren keine Züge.', 'Por la huelga no circulan trenes.', 'Because of the strike no trains are running.'], ['Eines Tages wirst du das verstehen.', 'Algún día lo entenderás.', 'One day you’ll understand.']]
    },
    {
      id: 'g-noun-decl', level: 'B1', de: 'Nomendeklination: stark, schwach (n-Deklination), gemischt', es: 'Declinación del sustantivo: fuerte, débil (n), mixta', en: 'Noun declension: strong, weak (n-declension), mixed',
      summary: M('La mayoría de los sustantivos solo cambian en genitivo singular (m/n: -s) y dativo plural (-n). Los masculinos débiles (n-declinación) toman -(e)n en todos los casos salvo el nominativo singular. Unos pocos son mixtos (des Namens).', 'Most nouns only change in the genitive singular (m/n: -s) and the dative plural (-n). Weak masculines (n-declension) take -(e)n in every case except the nominative singular. A few are mixed (des Namens).'),
      blocks: [
        { b: 'table', h: M('Tres modelos', 'Three models'), c: ['', M('fuerte: der Tag', 'strong: der Tag'), M('débil: der Student', 'weak: der Student'), M('mixto: der Name', 'mixed: der Name'), M('femenino: die Frau', 'feminine: die Frau')], r: [
          ['Nom. Sg.', 'der Tag', 'der Student', 'der Name', 'die Frau'], ['Akk. Sg.', 'den Tag', 'den Student[en]', 'den Name[n]', 'die Frau'],
          ['Dat. Sg.', 'dem Tag', 'dem Student[en]', 'dem Name[n]', 'der Frau'], ['Gen. Sg.', 'des Tag[es]', 'des Student[en]', 'des Name[ns]', 'der Frau'],
          ['Nom. Pl.', 'die Tage', 'die Studenten', 'die Namen', 'die Frauen'], ['Dat. Pl.', 'den Tage[n]', 'den Studenten', 'den Namen', 'den Frauen']
        ] },
        { b: 'list', h: M('Quiénes son débiles (n-Deklination)', 'Which nouns are weak (n-declension)'), cols: 2, r: [
          [M('masculinos en -e (personas, animales)', 'masculines in -e (people, animals)'), 'der Junge, der Kollege, der Kunde, der Experte, der Löwe, der Affe'],
          [M('-ent, -ant, -ist, -oge, -at, -soph, -graf', '-ent, -ant, -ist, -oge, -at, -soph, -graf'), 'der Student, der Praktikant, der Journalist, der Psychologe, der Diplomat, der Philosoph, der Fotograf'],
          [M('otros', 'others'), 'der Herr (-n, pl. -en), der Mensch, der Nachbar, der Bauer, der Held, der Prinz, der Bär'],
          [M('mixtos (-ns en genitivo)', 'mixed (-ns in genitive)'), 'der Name, der Gedanke, der Glaube, der Buchstabe, der Wille, der Friede · das Herz (des Herzens)']
        ].map(([a, b]) => [b, a]) }
      ],
      examples: [['Ich habe mit dem Nachbarn gesprochen.', 'Hablé con el vecino.', 'I spoke to the neighbour.'], ['Kennst du den neuen Kollegen?', '¿Conoces al nuevo colega?', 'Do you know the new colleague?'], ['Wie war noch mal der Name des Herrn?', '¿Cómo era el nombre del señor?', 'What was the gentleman’s name again?']]
    },
    {
      id: 'g-determiners', level: 'A2', de: 'Artikelwörter: dieser, jeder, welcher, mancher, alle …', es: 'Determinantes: dieser, jeder, welcher, mancher, alle…', en: 'Determiners: dieser, jeder, welcher, mancher, alle…',
      summary: M('Se declinan como el artículo definido (-er, -e, -es, -en, -em) y hacen que el adjetivo siguiente vaya en declinación débil. Excepción importante: einige, viele, wenige, mehrere y los números NO son determinantes: tras ellos el adjetivo va en declinación fuerte.', 'They decline like the definite article (-er, -e, -es, -en, -em) and make the following adjective weak. Important exception: einige, viele, wenige, mehrere and numbers are NOT determiners: after them the adjective is strong.'),
      blocks: [
        { b: 'table', h: M('Declinación de dieser', 'Declension of dieser'), c: ['', '{m maskulin}', '{f feminin}', '{n neutral}', '{p Plural}'], r: [
          ['Nominativ', 'dies[er]', 'dies[e]', 'dies[es]', 'dies[e]'], ['Akkusativ', 'dies[en]', 'dies[e]', 'dies[es]', 'dies[e]'],
          ['Dativ', 'dies[em]', 'dies[er]', 'dies[em]', 'dies[en]'], ['Genitiv', 'dies[es]', 'dies[er]', 'dies[es]', 'dies[er]']
        ] },
        { b: 'table', h: M('Determinantes y su significado', 'Determiners and their meaning'), c: [M('Palabra', 'Word'), M('Significado', 'Meaning'), M('Ejemplo', 'Example')], r: [
          ['dieser', M('este', 'this'), 'Dieser Film ist gut.'], ['jener', M('aquel (escrito)', 'that (written)'), 'in jener Zeit'], ['jeder (solo sg.)', M('cada', 'every'), 'jeden Tag'],
          ['alle (pl.)', M('todos', 'all'), 'alle Kinder'], ['welcher', M('cuál', 'which'), 'Welches Buch?'], ['mancher', M('algún que otro', 'many a; some'), 'manche Leute'],
          ['solcher', M('tal', 'such'), 'solche Probleme · so ein Problem'], ['derselbe', M('el mismo', 'the same'), 'dieselbe Frage'], ['was für ein', M('qué tipo de', 'what kind of'), 'Was für ein Auto hast du?']
        ] }
      ],
      examples: [['Welche Jacke nimmst du, diese oder jene?', '¿Qué chaqueta te llevas, esta o aquella?', 'Which jacket are you taking, this one or that one?'], ['Jeder Mensch braucht Schlaf.', 'Todo ser humano necesita dormir.', 'Every human being needs sleep.'], ['Wir haben dieselbe Lehrerin.', 'Tenemos la misma profesora.', 'We have the same teacher.']]
    },
    {
      id: 'g-nominalisation-adj', level: 'B2', de: 'Substantivierung: Adjektive, Partizipien, Infinitive', es: 'Sustantivación: adjetivos, participios, infinitivos', en: 'Nominalisation: adjectives, participles, infinitives',
      summary: M('Cualquier adjetivo, participio o infinitivo puede usarse como sustantivo: mayúscula + artículo. Adjetivos y participios siguen la declinación adjetival (der Kranke, ein Kranker); infinitivos son neutros sin plural (das Lernen).', 'Any adjective, participle or infinitive can be used as a noun: capital letter + article. Adjectives and participles keep adjectival declension (der Kranke, ein Kranker); infinitives are neuter without plural (das Lernen).'),
      blocks: [
        { b: 'table', h: M('Adjetivo sustantivado: personas', 'Nominalised adjective: people'), c: ['', M('con der', 'with der'), M('con ein', 'with ein'), M('plural', 'plural')], r: [
          ['Nominativ', 'der Deutsch[e]', 'ein Deutsch[er]', 'die Deutsch[en] / Deutsch[e]'], ['Akkusativ', 'den Deutsch[en]', 'einen Deutsch[en]', 'die Deutsch[en] / Deutsch[e]'],
          ['Dativ', 'dem Deutsch[en]', 'einem Deutsch[en]', 'den Deutsch[en] / Deutsch[en]'], ['Genitiv', 'des Deutsch[en]', 'eines Deutsch[en]', 'der Deutsch[en] / Deutsch[er]']
        ], n: M('Igual: der/die Angestellte, Bekannte, Erwachsene, Jugendliche, Kranke, Verwandte, Reisende, Vorsitzende, Beamte (pero: die Beamtin).', 'Likewise: der/die Angestellte, Bekannte, Erwachsene, Jugendliche, Kranke, Verwandte, Reisende, Vorsitzende, Beamte (but: die Beamtin).') },
        { b: 'table', h: M('Lo abstracto (neutro)', 'The abstract (neuter)'), c: [M('Tras', 'After'), M('Declinación', 'Declension'), M('Ejemplos', 'Examples')], r: [
          ['das / dem / des', M('débil', 'weak'), 'das Gute, im Allgemeinen, des Weiteren'],
          ['etwas, nichts, viel, wenig, genug', M('fuerte', 'strong'), 'etwas Neues, nichts Besonderes, viel Gutes, mit etwas Neuem'],
          ['alles', M('débil', 'weak'), 'alles Gute, alles Wichtige'],
          [M('infinitivo', 'infinitive'), 'das + Inf.', 'das Lesen, beim Kochen, zum Lernen, das Sein']
        ] }
      ],
      examples: [['Das Wichtigste ist, dass du gesund bist.', 'Lo más importante es que estés sano.', 'The most important thing is that you’re healthy.'], ['Gibt es etwas Neues?', '¿Hay algo nuevo?', 'Is there anything new?'], ['Beim Autofahren telefoniert man nicht.', 'Al manejar no se habla por teléfono.', 'You don’t phone while driving.']]
    },
    {
      id: 'g-word-formation', level: 'B2', de: 'Wortbildung: Komposition und Derivation', es: 'Formación de palabras: composición y derivación', en: 'Word formation: compounding and derivation',
      summary: M('Composición: sustantivos unidos, el último es el núcleo (género y significado básico), a veces con elemento de unión (-s-, -n-, -er-). Derivación: prefijos y sufijos con significados regulares. Conocer las piezas permite descifrar palabras nuevas.', 'Compounding: joined nouns, the last one is the head (gender and basic meaning), sometimes with a linking element (-s-, -n-, -er-). Derivation: prefixes and suffixes with regular meanings. Knowing the pieces lets you decode new words.'),
      blocks: [
        { b: 'table', h: M('Elementos de unión (Fugenelemente)', 'Linking elements'), c: [M('Elemento', 'Element'), M('Cuándo', 'When'), M('Ejemplos', 'Examples')], r: [
          ['-s-', M('tras -ung, -heit, -keit, -schaft, -ion, -tät, -ling, -tum', 'after -ung, -heit, -keit, -schaft, -ion, -tät, -ling, -tum'), 'Wohnung[s]tür, Freiheit[s]kampf, Universität[s]stadt'],
          ['-(e)n-', M('tras femeninos en -e y n-declinación', 'after feminines in -e and n-declension'), 'Straße[n]bahn, Student[en]ausweis'],
          ['-er-', M('plurales en -er', 'plurals in -er'), 'Kind[er]garten, Bild[er]buch'],
          ['-e-', M('algunos', 'some'), 'Hund[e]hütte'],
          ['–', M('muchos sin elemento', 'many with none'), 'Haustür, Tischlampe, Wörterbuch']
        ] },
        { b: 'table', h: M('Sufijos de sustantivo', 'Noun suffixes'), c: [M('Sufijo', 'Suffix'), M('Base', 'Base'), M('Ejemplos', 'Examples')], r: [
          ['-ung (die)', M('verbo → acción/resultado', 'verb → action/result'), 'lösen → die Lösung'], ['-heit / -keit (die)', M('adjetivo → cualidad', 'adjective → quality'), 'frei → Freiheit, möglich → Möglichkeit'],
          ['-schaft (die)', M('colectivo, estado', 'collective, state'), 'Freundschaft, Mannschaft'], ['-er (der)', M('agente, instrumento', 'agent, instrument'), 'Lehrer, Drucker'],
          ['-in (die)', M('femenino de persona', 'female person'), 'Lehrerin, Ärztin'], ['-chen / -lein (das)', M('diminutivo (con Umlaut)', 'diminutive (with umlaut)'), 'Häuschen, Büchlein'],
          ['-nis (die/das)', M('resultado, estado', 'result, state'), 'Ergebnis, Erlaubnis'], ['-tum (das)', M('colectivo, ámbito', 'collective, domain'), 'Eigentum, Christentum']
        ] },
        { b: 'table', h: M('Prefijos y sufijos de adjetivo', 'Adjective prefixes and suffixes'), c: [M('Afijo', 'Affix'), M('Significado', 'Meaning'), M('Ejemplos', 'Examples')], r: [
          ['un-', M('negación', 'negation'), 'unmöglich, unklar'], ['-los', M('sin', 'without'), 'arbeitslos, sinnlos'], ['-voll', M('lleno de', 'full of'), 'sinnvoll, wertvoll'],
          ['-reich / -arm', M('con mucho / poco', 'rich / poor in'), 'erfolgreich, fettarm'], ['-bar', M('se puede', 'can be done'), 'lesbar, machbar'], ['-lich', M('relación; posibilidad', 'relation; possibility'), 'freundlich, verständlich'],
          ['-ig', M('que tiene', 'having'), 'sonnig, lustig'], ['-isch', M('origen, tipo', 'origin, type'), 'chilenisch, typisch'], ['-haft', M('con carácter de', 'like'), 'fehlerhaft, zweifelhaft'], ['-sam', M('tendencia', 'tendency'), 'langsam, sparsam']
        ] }
      ],
      examples: [['die Spracherkennungssoftware = Sprache + Erkennung + s + Software', 'el software de reconocimiento del habla', 'speech recognition software'], ['Das ist eine sinnvolle Lösung.', 'Es una solución sensata.', 'That is a sensible solution.'], ['Er ist seit Mai arbeitslos.', 'Está cesante desde mayo.', 'He has been unemployed since May.']]
    }
  ]);
})();
