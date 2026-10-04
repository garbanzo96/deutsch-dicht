/* U04 · Was machst du gern? */
DD.lexicon.push({ unit: 'u04', words: [
  ['v', 'haben', 'hat', 'hatte', 'hat gehabt', 'tener', 'have', { k2: 'hätte', ex: ['Hast du heute Zeit?', '¿Tienes tiempo hoy?', 'Do you have time today?'], note: ['También auxiliar del Perfekt (U10).', 'Also the Perfekt auxiliary (U10).'] }],
  ['v', 'lesen', 'liest', 'las', 'hat gelesen', 'leer', 'read', { ex: ['Lena liest gern Krimis.', 'A Lena le gusta leer novelas policiales.', 'Lena likes reading crime novels.'] }],
  ['v', 'sehen', 'sieht', 'sah', 'hat gesehen', 'ver', 'see', { ex: ['Siehst du den Park?', '¿Ves el parque?', 'Can you see the park?'] }],
  ['v', 'fahren', 'fährt', 'fuhr', 'ist gefahren', 'ir (en vehículo); conducir', 'go (by vehicle); drive', { ex: ['Wir fahren am Sonntag Fahrrad.', 'El domingo andamos en bicicleta.', 'On Sunday we go cycling.'], note: ['Perfekt con haben si hay objeto: Ich habe das Auto gefahren.', 'Perfekt with haben when there is an object: Ich habe das Auto gefahren.'] }],
  ['v', 'schlafen', 'schläft', 'schlief', 'hat geschlafen', 'dormir', 'sleep'],
  ['v', 'laufen', 'läuft', 'lief', 'ist gelaufen', 'correr; caminar; (máquina) funcionar', 'run; walk; work (machine)'],
  ['v', 'treffen', 'trifft', 'traf', 'hat getroffen', 'encontrarse con; reunirse', 'meet', { ex: ['Ich treffe Lena im Park.', 'Me junto con Lena en el parque.', 'I meet Lena in the park.'] }],
  ['v', 'spielen', 'spielt', 'spielte', 'hat gespielt', 'jugar; tocar (instrumento)', 'play'],
  ['v', 'hören', 'hört', 'hörte', 'hat gehört', 'oír; escuchar', 'hear; listen to'],
  ['v', 'tanzen', 'tanzt', 'tanzte', 'hat getanzt', 'bailar', 'dance'],
  ['v', 'schwimmen', 'schwimmt', 'schwamm', 'ist geschwommen', 'nadar', 'swim'],
  ['v', 'kochen', 'kocht', 'kochte', 'hat gekocht', 'cocinar', 'cook'],
  ['v', 'reisen', 'reist', 'reiste', 'ist gereist', 'viajar', 'travel'],
  ['v', 'wandern', 'wandert', 'wanderte', 'ist gewandert', 'hacer senderismo; caminar por el campo', 'hike'],
  ['v', 'singen', 'singt', 'sang', 'hat gesungen', 'cantar', 'sing'],
  ['v', 'finden', 'findet', 'fand', 'hat gefunden', 'encontrar; opinar (Ich finde … toll)', 'find; think (Ich finde … great)', { ex: ['Ich finde den Film spannend.', 'Encuentro la película emocionante.', 'I find the film exciting.'] }],
  ['n', 'die Freizeit', '—', 'el tiempo libre', 'free time'],
  ['n', 'die Zeit', 'Zeiten', 'el tiempo', 'time'],
  ['n', 'das Hobby', 'Hobbys', 'el pasatiempo', 'hobby'],
  ['n', 'der Sport', '—', 'el deporte', 'sport', { note: ['Plural: Sportarten (tipos de deporte).', 'Plural: Sportarten (kinds of sport).'] }],
  ['n', 'der Fußball', 'Fußbälle', 'el fútbol; la pelota de fútbol', 'football; soccer ball'],
  ['n', 'das Fahrrad', 'Fahrräder', 'la bicicleta', 'bicycle'],
  ['n', 'das Kino', 'Kinos', 'el cine', 'cinema'],
  ['n', 'der Film', 'Filme', 'la película', 'film'],
  ['n', 'die Serie', 'Serien', 'la serie', 'series'],
  ['n', 'das Spiel', 'Spiele', 'el juego; el partido', 'game; match'],
  ['n', 'das Konzert', 'Konzerte', 'el concierto', 'concert'],
  ['n', 'die Gitarre', 'Gitarren', 'la guitarra', 'guitar'],
  ['n', 'das Klavier', 'Klaviere', 'el piano', 'piano'],
  ['n', 'das Instrument', 'Instrumente', 'el instrumento', 'instrument'],
  ['n', 'der Roman', 'Romane', 'la novela', 'novel'],
  ['n', 'der Krimi', 'Krimis', 'la novela/película policial', 'crime novel/film'],
  ['n', 'der Park', 'Parks', 'el parque', 'park'],
  ['n', 'die Natur', '—', 'la naturaleza', 'nature'],
  ['n', 'der Tag', 'Tage', 'el día', 'day'],
  ['n', 'der Morgen', 'Morgen', 'la mañana', 'morning', { homonym: 1, note: ['am Morgen = en la mañana; morgen (adverbio) = mañana.', 'am Morgen = in the morning; morgen (adverb) = tomorrow.'] }],
  ['n', 'der Abend', 'Abende', 'la tarde-noche', 'evening'],
  ['n', 'das Wochenende', 'Wochenenden', 'el fin de semana', 'weekend'],
  ['n', 'die Idee', 'Ideen', 'la idea', 'idea'],
  ['n', 'der Bruder', 'Brüder', 'el hermano', 'brother'],
  ['n', 'die Schwester', 'Schwestern', 'la hermana', 'sister'],
  ['art', 'kein, keine', 'ningún, ninguna; no (+ sustantivo)', 'no; not a', { id: 'particle-kein', deck: 0, decl: 'ein', stem: 'kein', note: ['Niega sustantivos con artículo indefinido o sin artículo.', 'Negates nouns with indefinite or zero article.'] }],
  ['part', 'nicht', 'no', 'not', { id: 'particle-nicht' }],
  ['part', 'doch', 'sí (contradiciendo una negación); pues; sin embargo', 'yes (contradicting a negative); after all', { id: 'particle-doch' }],
  ['adv', 'gern', 'con gusto (+ verbo = gustar)', 'gladly (+ verb = like)', { forms: { gerne: 'lemma', lieber: 'cmp', liebsten: 'sup' }, note: ['gern, lieber, am liebsten: Ich lese gern / lieber / am liebsten.', 'gern, lieber, am liebsten: Ich lese gern / lieber / am liebsten.'] }],
  ['adv', 'oft', 'a menudo', 'often'],
  ['adv', 'manchmal', 'a veces', 'sometimes'],
  ['adv', 'immer', 'siempre', 'always'],
  ['adv', 'nie', 'nunca', 'never'],
  ['adv', 'selten', 'rara vez', 'rarely'],
  ['adv', 'noch', 'todavía; aún; más', 'still; yet; more'],
  ['adv', 'wirklich', 'realmente; de verdad', 'really'],
  ['a', 'ganz', '—', '—', 'entero; todo; (adv.) bastante, completamente', 'whole; (adv.) quite, completely'],
  ['a', 'toll', null, null, 'genial; fantástico', 'great; fantastic'],
  ['a', 'langweilig', null, null, 'aburrido', 'boring'],
  ['a', 'spannend', null, null, 'emocionante; apasionante', 'exciting; gripping'],
  ['a', 'lustig', null, null, 'divertido; gracioso', 'funny; fun'],
  ['a', 'ruhig', null, null, 'tranquilo; callado', 'quiet; calm'],
  ['a', 'langsam', null, null, 'lento', 'slow'],
  ['a', 'schnell', null, null, 'rápido', 'fast; quick'],
  ['phr', 'in der Freizeit', 'en el tiempo libre', 'in one’s free time'],
  ['phr', 'am Wochenende', 'el fin de semana', 'at the weekend'],
  ['phr', 'Gute Idee!', '¡buena idea!', 'good idea!'],
  ['phr', 'Keine Ahnung.', 'ni idea', 'no idea'],
  ['name', 'Jonas', 'Jonas (hermano de Lena, cocinero)', 'Jonas (Lena’s brother, a cook)']
] });

DD.unit('u04', {
  minutes: 45,
  goals: [
    { es: 'Conjugar los verbos con cambio vocálico (fährt, liest, spricht) y haben.', en: 'Conjugate stem-changing verbs (fährt, liest, spricht) and haben.' },
    { es: 'Hacer preguntas de sí/no con el verbo en 1.ª posición y responder con ja, nein o doch.', en: 'Ask yes/no questions with the verb first and answer ja, nein or doch.' },
    { es: 'Negar con precisión: nicht frente a kein; expresar gustos con gern, lieber, am liebsten.', en: 'Negate precisely: nicht vs kein; express likes with gern, lieber, am liebsten.' }
  ],
  grammar: ['g-present-irregular', 'g-questions', 'g-negation'],
  lesson: [
    { b: 'concept', de: 'Vokalwechsel', t: { es: 'Muchos verbos fuertes cambian la vocal de la raíz, pero solo en du y er/sie/es. El resto de personas es regular. El cambio está en la 3.ª persona de las formas principales: fahren – fährt – fuhr.', en: 'Many strong verbs change their stem vowel, but only for du and er/sie/es. All other persons are regular. The change shows in the 3rd-person principal part: fahren – fährt – fuhr.' } },
    { b: 'concept', de: 'haben', t: { es: 'haben (tener) es casi regular: pierde la b en du hast y er hat. Es el verbo más frecuente después de sein y será el auxiliar del pasado.', en: 'haben (have) is almost regular: it drops the b in du hast and er hat. It is the most frequent verb after sein and will be the past-tense auxiliary.' } },
    { b: 'table', h: { es: 'Präsens con cambio vocálico', en: 'Present with vowel change' }, c: [{ es: 'Persona', en: 'Person' }, 'fahren · a→ä', 'laufen · au→äu', 'sprechen · e→i', 'lesen · e→ie', 'haben'], r: [
      ['ich', 'fahre', 'laufe', 'spreche', 'lese', 'habe'],
      ['du', 'f[ä]hrst', 'l[äu]fst', 'spr[i]chst', 'l[ie]st', 'ha[st]'],
      ['er · sie · es', 'f[ä]hrt', 'l[äu]ft', 'spr[i]cht', 'l[ie]st', 'ha[t]'],
      ['wir', 'fahren', 'laufen', 'sprechen', 'lesen', 'haben'],
      ['ihr', 'fahrt', 'lauft', 'sprecht', 'lest', 'habt'],
      ['sie · Sie', 'fahren', 'laufen', 'sprechen', 'lesen', 'haben']
    ], n: { es: 'Igual que fahren: schlafen, tragen, waschen. Igual que sprechen: essen (isst), geben (gibt), nehmen (nimmt), treffen (trifft), helfen (hilft). Igual que lesen: sehen (sieht). lesen, essen: du liest, du isst (la s de la raíz absorbe la del sufijo).', en: 'Like fahren: schlafen, tragen, waschen. Like sprechen: essen (isst), geben (gibt), nehmen (nimmt), treffen (trifft), helfen (hilft). Like lesen: sehen (sieht). du liest, du isst: the stem s absorbs the ending s.' } },
    { b: 'concept', de: 'Ja/Nein-Frage', t: { es: 'En la pregunta cerrada el verbo conjugado va en 1.ª posición y el sujeto lo sigue. No se necesita palabra interrogativa ni signo inicial.', en: 'In a closed question the finite verb comes first, followed by the subject. No question word is needed.' } },
    { b: 'concept', de: 'ja · nein · doch', t: { es: 'Ante una pregunta afirmativa: ja / nein. Ante una pregunta negativa, doch contradice la negación: Hast du keine Zeit? – Doch! (¡Sí tengo!).', en: 'To a positive question: ja / nein. To a negative question, doch contradicts the negation: Hast du keine Zeit? – Doch! (Yes, I do!).' } },
    { b: 'slots', h: { es: 'Tres tipos de oración principal', en: 'Three main-clause types' }, c: ['Vorfeld', { es: 'Verbo', en: 'Verb' }, 'Mittelfeld'], r: [
      ['Du', 'spielst', 'Gitarre.'], ['', 'Spielst', 'du Gitarre?'], ['Was', 'spielst', 'du?'], ['Am Sonntag', 'fährt', 'Lena Fahrrad.'], ['', 'Fährt', 'Lena am Sonntag Fahrrad?']
    ], n: { es: 'Afirmación y pregunta W: V2. Pregunta sí/no: V1 (Vorfeld vacío).', en: 'Statement and W-question: V2. Yes/no question: V1 (empty Vorfeld).' } },
    { b: 'concept', de: 'nicht oder kein?', t: { es: 'kein niega un sustantivo que llevaría ein o ningún artículo (kein = «ningún / no + sustantivo»). nicht niega todo lo demás: verbos, adjetivos, adverbios, nombres propios y sustantivos con artículo definido.', en: 'kein negates a noun that would take ein or no article (“no / not a”). nicht negates everything else: verbs, adjectives, adverbs, names and nouns with the definite article.' } },
    { b: 'table', h: { es: 'kein en nominativo · se declina como ein', en: 'kein in the nominative · declines like ein' }, c: ['', { es: 'masculino', en: 'masculine' }, { es: 'femenino', en: 'feminine' }, { es: 'neutro', en: 'neuter' }, 'Plural'], r: [
      [{ es: 'afirmativo', en: 'positive' }, '{m ein} Film', '{f eine} Idee', '{n ein} Hobby', '— Hobbys'],
      [{ es: 'negativo', en: 'negative' }, '{m [kein]} Film', '{f [keine]} Idee', '{n [kein]} Hobby', '{p [keine]} Hobbys']
    ], n: { es: 'kein también tiene plural (keine), aunque ein no lo tenga. En acusativo masculino: keinen (U05).', en: 'kein has a plural (keine), although ein does not. Masculine accusative: keinen (U05).' } },
    { b: 'pairs', h: { es: 'Negar: kein o nicht', en: 'Negating: kein or nicht' }, r: [
      ['Das ist {n ein} Hobby.', 'Das ist {n [kein]} Hobby.'],
      ['Ich habe Zeit.', 'Ich habe [keine] Zeit.', { es: 'Sustantivo sin artículo → kein.', en: 'Noun without article → kein.' }],
      ['Ich tanze gern.', 'Ich tanze [nicht] gern.', { es: 'Verbo/adverbio → nicht.', en: 'Verb/adverb → nicht.' }],
      ['Der Film ist spannend.', 'Der Film ist [nicht] spannend.', { es: 'Adjetivo → nicht.', en: 'Adjective → nicht.' }],
      ['Das ist {m der} Park.', 'Das ist [nicht] {m der} Park.', { es: 'Artículo definido → nicht.', en: 'Definite article → nicht.' }]
    ] },
    { b: 'list', h: { es: 'Gustos y frecuencia', en: 'Likes and frequency' }, cols: 2, r: [
      ['Ich lese [gern].', { es: 'Me gusta leer.', en: 'I like reading.' }], ['Ich lese [nicht gern].', { es: 'No me gusta leer.', en: 'I don’t like reading.' }],
      ['Ich lese [lieber] Krimis.', { es: 'Prefiero leer novelas policiales.', en: 'I prefer reading crime novels.' }], ['[Am liebsten] lese ich Kant.', { es: 'Lo que más me gusta es leer a Kant.', en: 'Most of all I like reading Kant.' }],
      ['immer · oft · manchmal', { es: 'siempre · a menudo · a veces', en: 'always · often · sometimes' }], ['selten · nie', { es: 'rara vez · nunca', en: 'rarely · never' }]
    ], n: { es: 'gern acompaña al verbo: no hay verbo «gustar» en esta construcción. Escala: nie < selten < manchmal < oft < immer.', en: 'gern goes with the verb; there is no “like” verb in this construction. Scale: nie < selten < manchmal < oft < immer.' } },
    { b: 'note', tone: 'l1', t: { es: '«Me gusta bailar» = Ich tanze gern (no *Mir gefällt tanzen). «Prefiero el té» = Ich trinke lieber Tee. Y en la pregunta negativa, el sí contradictorio es doch, nunca ja.', en: '“I like dancing” = Ich tanze gern. “I prefer tea” = Ich trinke lieber Tee. And when contradicting a negative question, the yes is doch, never ja.' } }
  ],
  chunks: [
    ['Was machst du gern in der Freizeit?', '¿Qué te gusta hacer en tu tiempo libre?', 'What do you like doing in your free time?'],
    ['Ich lese gern, aber am liebsten koche ich.', 'Me gusta leer, pero lo que más me gusta es cocinar.', 'I like reading, but most of all I like cooking.'],
    ['Hast du am Wochenende Zeit? – Ja, klar!', '¿Tienes tiempo el fin de semana? – ¡Sí, claro!', 'Do you have time at the weekend? – Yes, sure!'],
    ['Spielst du kein Instrument? – Doch, Gitarre.', '¿No tocas ningún instrumento? – Sí, guitarra.', 'Don’t you play an instrument? – Yes, I do: guitar.'],
    ['Ich finde den Film toll / langweilig.', 'La película me parece genial / aburrida.', 'I think the film is great / boring.'],
    ['Keine Ahnung.', 'Ni idea.', 'No idea.']
  ],
  errors: [
    ['Du fahrst nach Berlin.', 'Du fährst nach Berlin.', { es: 'Cambio vocálico en du y er/sie/es.', en: 'Vowel change for du and er/sie/es.' }],
    ['Ich lese nicht ein Buch.', 'Ich lese kein Buch.', { es: 'Sustantivo con ein → kein.', en: 'Noun with ein → kein.' }],
    ['Ich habe nicht Zeit.', 'Ich habe keine Zeit.', { es: 'Sustantivo sin artículo → kein.', en: 'Noun without article → kein.' }],
    ['Hast du keine Zeit? – Ja!', 'Hast du keine Zeit? – Doch!', { es: 'Contradecir una negación: doch.', en: 'Contradicting a negative: doch.' }],
    ['Du spielst Gitarre?', 'Spielst du Gitarre?', { es: 'Pregunta neutra: verbo en 1.ª posición.', en: 'Neutral question: verb first.' }]
  ],
  examples: [
    ['Lena liest gern Krimis.', 'A Lena le gusta leer novelas policiales.', 'Lena likes reading crime novels.'],
    ['Fährst du am Wochenende Fahrrad?', '¿Andas en bicicleta el fin de semana?', 'Do you cycle at the weekend?'],
    ['Jonas spricht Deutsch und Türkisch.', 'Jonas habla alemán y turco.', 'Jonas speaks German and Turkish.'],
    ['Ich habe heute keine Zeit.', 'Hoy no tengo tiempo.', 'I have no time today.'],
    ['Wir tanzen nicht gern, aber wir singen oft.', 'No nos gusta bailar, pero cantamos a menudo.', 'We don’t like dancing, but we often sing.'],
    ['Schläfst du noch? – Nein, ich laufe im Park.', '¿Todavía duermes? – No, estoy corriendo en el parque.', 'Are you still asleep? – No, I’m running in the park.']
  ],
  reading: 'r-u04',
  exercises: [
    { t: 'choice', ph: 1, q: 'Lena ___ gern Krimis.', o: ['lest', 'liest', 'lesst'], a: 1, x: { es: 'lesen: e → ie en er/sie/es: liest.', en: 'lesen: e → ie for er/sie/es: liest.' } },
    { t: 'choice', ph: 1, q: '___ du am Sonntag Zeit?', o: ['Hast', 'Habst', 'Hat'], a: 0, x: { es: 'haben: du hast (sin b).', en: 'haben: du hast (no b).' } },
    { t: 'choice', ph: 1, p: { es: '¿Qué frase es una pregunta de sí/no?', en: 'Which sentence is a yes/no question?' }, o: ['Was spielst du?', 'Spielst du Klavier?', 'Du spielst Klavier.'], a: 1, x: { es: 'Verbo en 1.ª posición, sin palabra W.', en: 'Verb first, no W-word.' } },
    { t: 'choice', ph: 1, q: 'Hast du keine Gitarre? – ___, ich habe eine Gitarre.', o: ['Ja', 'Doch', 'Nein'], a: 1, x: { es: 'Afirmar ante una pregunta negativa: doch.', en: 'Affirming after a negative question: doch.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona infinitivo y 3.ª persona.', en: 'Match infinitive and 3rd person.' }, pairs: [['fahren', 'fährt'], ['sprechen', 'spricht'], ['sehen', 'sieht'], ['laufen', 'läuft'], ['essen', 'isst']], x: { es: 'a→ä, e→i, e→ie, au→äu.', en: 'a→ä, e→i, e→ie, au→äu.' } },
    { t: 'choice', ph: 1, q: 'Das ist ___ Idee.', p: { es: 'Niega: «Das ist eine Idee.»', en: 'Negate: “Das ist eine Idee.”' }, o: ['nicht', 'keine', 'kein'], a: 1, x: { es: 'eine Idee → keine Idee.', en: 'eine Idee → keine Idee.' } },
    { t: 'gap', ph: 2, q: 'Du ___ (fahren) gern Fahrrad.', a: 'fährst', x: { es: 'a → ä: du fährst.', en: 'a → ä: du fährst.' } },
    { t: 'gap', ph: 2, q: 'Tomás ___ (sprechen) Spanisch.', a: 'spricht', x: { es: 'e → i: er spricht.', en: 'e → i: er spricht.' } },
    { t: 'gap', ph: 2, q: 'Jonas ___ (schlafen) noch.', a: 'schläft', x: { es: 'a → ä: er schläft.', en: 'a → ä: er schläft.' } },
    { t: 'gap', ph: 2, q: 'Ihr ___ (lesen) viel, aber ihr ___ (sehen) nie Filme.', a: ['lest', 'seht'], x: { es: 'ihr no cambia la vocal: lest, seht.', en: 'ihr keeps the vowel: lest, seht.' } },
    { t: 'gap', ph: 2, q: 'Ich habe ___ Zeit.', a: 'keine', x: { es: 'Zeit sin artículo → keine (femenino).', en: 'Zeit without article → keine (feminine).' } },
    { t: 'gap', ph: 2, q: 'Der Film ist ___ spannend.', a: 'nicht', x: { es: 'Adjetivo → nicht.', en: 'Adjective → nicht.' } },
    { t: 'order', ph: 2, w: ['du', 'Spielst', 'Gitarre'], a: 'Spielst du Gitarre?', x: { es: 'Pregunta sí/no: V1.', en: 'Yes/no question: V1.' } },
    { t: 'order', ph: 2, w: ['ich', 'Am liebsten', 'lese', 'Romane'], a: 'Am liebsten lese ich Romane.', x: { es: 'Am liebsten en el Vorfeld → verbo → sujeto.', en: 'Am liebsten in the Vorfeld → verb → subject.' } },
    { t: 'transform', ph: 3, p: { es: 'Convierte en pregunta de sí/no.', en: 'Turn into a yes/no question.' }, q: 'Lena läuft oft im Park.', a: 'Läuft Lena oft im Park?', x: { es: 'El verbo pasa a la 1.ª posición.', en: 'The verb moves to first position.' } },
    { t: 'transform', ph: 3, p: { es: 'Niega la frase.', en: 'Negate the sentence.' }, q: 'Ich habe ein Fahrrad.', a: 'Ich habe kein Fahrrad.', x: { es: 'ein Fahrrad → kein Fahrrad.', en: 'ein Fahrrad → kein Fahrrad.' } },
    { t: 'write', ph: 3, s: { es: 'No me gusta bailar, pero me gusta cantar.', en: 'I don’t like dancing, but I like singing.' }, a: 'Ich tanze nicht gern, aber ich singe gern.', alt: ['Ich tanze nicht gern, aber singe gern.', 'Ich tanze nicht gerne, aber ich singe gerne.'], x: { es: 'gustar + verbo → verbo + gern; negación: nicht gern.', en: 'like + verb → verb + gern; negative: nicht gern.' } },
    { t: 'listen', ph: 3, a: 'Fährst du am Wochenende Fahrrad?', x: { es: 'Pregunta V1 con verbo de cambio vocálico.', en: 'V1 question with a stem-changing verb.' } }
  ],
  summary: [
    { es: 'Cambio vocálico solo en du y er/sie/es: a→ä (fährt), au→äu (läuft), e→i (spricht), e→ie (liest).', en: 'Vowel change only for du and er/sie/es: a→ä (fährt), au→äu (läuft), e→i (spricht), e→ie (liest).' },
    { es: 'haben: habe, hast, hat, haben, habt, haben.', en: 'haben: habe, hast, hat, haben, habt, haben.' },
    { es: 'Pregunta sí/no = V1. Respuestas: ja / nein; tras una negación, doch.', en: 'Yes/no question = V1. Answers: ja / nein; after a negative, doch.' },
    { es: 'kein niega sustantivos con ein o sin artículo; nicht niega todo lo demás.', en: 'kein negates nouns with ein or no article; nicht negates everything else.' },
    { es: 'Gustos: verbo + gern / nicht gern / lieber / am liebsten.', en: 'Likes: verb + gern / nicht gern / lieber / am liebsten.' }
  ]
});

DD.readings.push({
  id: 'r-u04', unit: 'u04', level: 'A1', kind: 'unit',
  de: 'Was machst du am Wochenende?', es: '¿Qué haces el fin de semana?', en: 'What are you doing at the weekend?',
  genre: { es: 'Diálogo · serie Leipzig 4', en: 'Dialogue · Leipzig series 4' },
  intro: { es: 'En la cocina de la residencia, Tomás y Lena hablan de sus pasatiempos. Busca los verbos con cambio vocálico y cada negación.', en: 'In the residence kitchen, Tomás and Lena talk about their hobbies. Look for stem-changing verbs and every negation.' },
  focus: { es: 'liest, läuft, fährt, schläft, spricht · nicht / kein · preguntas V1 · doch.', en: 'liest, läuft, fährt, schläft, spricht · nicht / kein · V1 questions · doch.' },
  source: { type: 'original' },
  p: [
    ['Lena, was machst du gern in der Freizeit?', 'Lena, ¿qué te gusta hacer en tu tiempo libre?', 'Lena, what do you like doing in your free time?', 'Tomás'],
    ['Ich lese sehr gern, und ich laufe oft im Park. Am liebsten laufe ich am Morgen: Da ist der Park noch ruhig.', 'Me gusta mucho leer, y corro a menudo en el parque. Lo que más me gusta es correr en la mañana: a esa hora el parque todavía está tranquilo.', 'I love reading, and I often run in the park. Most of all I like running in the morning: the park is still quiet then.', 'Lena'],
    ['Was liest du? Romane?', '¿Qué lees? ¿Novelas?', 'What do you read? Novels?', 'Tomás'],
    ['Ja, aber am liebsten lese ich Krimis. Und du? Liest du auch gern?', 'Sí, pero lo que más me gusta leer son novelas policiales. ¿Y tú? ¿También te gusta leer?', 'Yes, but most of all I like reading crime novels. And you? Do you like reading too?', 'Lena'],
    ['Ja, ich lese viel, aber keine Krimis. Ich lese Philosophie. Auf Deutsch lese ich noch langsam.', 'Sí, leo mucho, pero no novelas policiales. Leo filosofía. En alemán todavía leo lento.', 'Yes, I read a lot, but no crime novels. I read philosophy. In German I still read slowly.', 'Tomás'],
    ['Spielst du ein Instrument?', '¿Tocas algún instrumento?', 'Do you play an instrument?', 'Lena'],
    ['Ja, ich spiele Gitarre. Und du? Spielst du kein Instrument?', 'Sí, toco guitarra. ¿Y tú? ¿No tocas ningún instrumento?', 'Yes, I play the guitar. And you? Don’t you play any instrument?', 'Tomás'],
    ['Doch, Klavier – aber nicht gut! Mein Bruder Jonas spielt sehr gut. Er ist Koch und arbeitet viel, aber er singt und spielt immer. Er schläft nie!', 'Sí, piano, ¡pero no bien! Mi hermano Jonas toca muy bien. Es cocinero y trabaja mucho, pero siempre canta y toca. ¡Nunca duerme!', 'Yes, the piano – but not well! My brother Jonas plays very well. He is a cook and works a lot, but he is always singing and playing. He never sleeps!', 'Lena'],
    ['Hast du am Wochenende Zeit? Fährst du gern Fahrrad?', '¿Tienes tiempo el fin de semana? ¿Te gusta andar en bicicleta?', 'Do you have time at the weekend? Do you like cycling?', 'Tomás'],
    ['Am Samstag habe ich keine Zeit, da arbeite ich. Aber am Sonntag, ja! Wir fahren zusammen, und Jonas kocht am Abend. Er kocht wirklich toll.', 'El sábado no tengo tiempo, trabajo. ¡Pero el domingo, sí! Vamos juntos en bicicleta, y Jonas cocina en la noche. Cocina realmente genial.', 'On Saturday I have no time, I’m working. But on Sunday, yes! We’ll cycle together, and Jonas will cook in the evening. He cooks really well.', 'Lena'],
    ['Gute Idee! Ich finde das super.', '¡Buena idea! Me parece genial.', 'Good idea! I think that’s great.', 'Tomás']
  ],
  gloss: [
    ['im', { es: 'en el (in + dem)', en: 'in the (in + dem)' }],
    ['am', { es: 'en el (an + dem): am Morgen, am Sonntag', en: 'on/in the (an + dem): am Morgen, am Sonntag' }],
    ['Samstag', { es: 'sábado (U07)', en: 'Saturday (U07)' }],
    ['Sonntag', { es: 'domingo (U07)', en: 'Sunday (U07)' }],
    ['Mein', { es: 'mi (posesivo, U08)', en: 'my (possessive, U08)' }],
    ['Koch', { es: 'cocinero (der Koch, ¨-e)', en: 'cook (der Koch, ¨-e)' }],
    ['auf', { es: 'en (auf Deutsch = en alemán)', en: 'in (auf Deutsch = in German)' }],
    ['Philosophie', { es: 'filosofía', en: 'philosophy' }]
  ],
  q: [
    { t: 'rf', q: 'Lena läuft am liebsten am Abend.', a: false, x: { es: 'Prefiere correr en la mañana.', en: 'She prefers running in the morning.' } },
    { t: 'rf', q: 'Tomás liest keine Krimis.', a: true, x: { es: '«Ich lese viel, aber keine Krimis.»', en: '“Ich lese viel, aber keine Krimis.”' } },
    { t: 'choice', q: 'Wer spielt sehr gut Klavier?', o: ['Lena', 'Jonas', 'Tomás'], a: 1, x: { es: 'Lena toca, pero no bien; Jonas toca muy bien.', en: 'Lena plays, but not well; Jonas plays very well.' } },
    { t: 'choice', q: 'Wann hat Lena keine Zeit?', o: ['am Samstag', 'am Sonntag', 'am Abend'], a: 0, x: { es: 'El sábado trabaja.', en: 'She works on Saturday.' } },
    { t: 'rf', q: 'Jonas ist Koch.', a: true, x: { es: '«Er ist Koch und arbeitet viel.»', en: '“Er ist Koch und arbeitet viel.”' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u04', ext: true, words: [
  ['n', 'der Spaß', 'Späße', 'la diversión', 'fun', { note: ['Das macht Spaß! = ¡Es entretenido! · Viel Spaß!', 'Das macht Spaß! = It’s fun! · Have fun!'] }],
  ['n', 'der Witz', 'Witze', 'el chiste', 'joke'],
  ['n', 'der Ball', 'Bälle', 'la pelota', 'ball'],
  ['n', 'das Tor', 'Tore', 'el gol; el arco; el portón', 'goal; gate'],
  ['n', 'der Ski', 'Skier', 'el esquí', 'ski', { note: ['Ski fahren = esquiar.', 'Ski fahren = to ski.'] }],
  ['n', 'das Training', 'Trainings', 'el entrenamiento', 'training'],
  ['n', 'die Halle', 'Hallen', 'el gimnasio (techado); el pabellón', 'hall', { note: ['die Sporthalle.', 'die Sporthalle.'] }],
  ['n', 'das Schwimmbad', 'Schwimmbäder', 'la piscina', 'swimming pool'],
  ['n', 'das Theater', 'Theater', 'el teatro', 'theatre'],
  ['n', 'die Disco', 'Discos', 'la disco', 'club; disco'],
  ['n', 'das Rad', 'Räder', 'la bici; la rueda', 'bike; wheel', { note: ['Rad fahren = andar en bici.', 'Rad fahren = to cycle.'] }],
  ['v', 'joggen', 'joggt', 'joggte', 'ist gejoggt', 'trotar', 'jog'],
  ['v', 'malen', 'malt', 'malte', 'hat gemalt', 'pintar', 'paint'],
  ['v', 'basteln', 'bastelt', 'bastelte', 'hat gebastelt', 'hacer manualidades', 'do crafts'],
  ['v', 'sammeln', 'sammelt', 'sammelte', 'hat gesammelt', 'coleccionar; juntar', 'collect'],
  ['a', 'faul', null, null, 'flojo', 'lazy'],
  ['a', 'wunderbar', null, null, 'maravilloso', 'wonderful'],
  ['phr', 'Schade!', '¡qué lástima!', 'what a pity!', { forms: { schade: 'lemma' } }]
] });
