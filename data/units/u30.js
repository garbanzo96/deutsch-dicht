/* U30 · Na ja, eben */
DD.lexicon.push({ unit: 'u30', words: [
  ['part', 'eben', 'así es; simplemente (resignación, evidencia)', 'just; simply (that’s how it is)', { id: 'particle-eben', note: ['Das ist eben so. = Así son las cosas. Como adverbio: eben = recién, hace un momento.', 'Das ist eben so. = That’s just how it is. As an adverb: eben = just now.'] }],
  ['part', 'halt', 'pues; qué le vamos a hacer (coloquial, sur)', 'just; well (colloquial, south)', { id: 'particle-halt' }],
  ['part', 'wohl', 'seguramente; probablemente (suposición)', 'probably; I suppose', { id: 'particle-wohl' }],
  ['part', 'bloß', '¡ni se te ocurra! (advertencia); solo; ojalá', 'don’t you dare (warning); only; if only', { id: 'particle-bloss' }],
  ['part', 'überhaupt', 'en absoluto; en realidad (duda de fondo)', 'at all; actually (fundamental doubt)', { id: 'particle-ueberhaupt' }],
  ['interj', 'na', 'bueno; ¿y?; vaya', 'well; so', { id: 'interj-na', forms: { 'na ja': 'phr', 'na also': 'phr', 'na und': 'phr', 'na gut': 'phr' } }],
  ['interj', 'ach', 'ah; ay', 'oh; ah', { id: 'interj-ach' }],
  ['interj', 'okay', 'okey; de acuerdo', 'OK', { id: 'interj-okay', forms: { ok: 'lemma', Okay: 'lemma' } }],
  ['a', 'egal', '—', '—', 'da igual', 'all the same', { decl: 0 }],
  ['a', 'klar', null, null, 'claro', 'clear; of course'],
  ['adv', 'gerade', 'justo ahora; precisamente', 'just (now); exactly', { note: ['Ich koche gerade = estoy cocinando (ahora). Como adjetivo: gerade = recto.', 'Ich koche gerade = I’m cooking right now. As an adjective: gerade = straight.'] }],
  ['adv', 'sowieso', 'de todos modos', 'anyway', { forms: { eh: 'lemma' } }],
  ['adv', 'absichtlich', 'a propósito', 'on purpose'],
  ['a', 'ständig', '—', '—', 'constante; constantemente', 'constant; constantly'],
  ['adv', 'zurück', 'de vuelta; atrás', 'back', { note: ['Con verbos: zurückkommen, zurückgeben, zurückrufen.', 'With verbs: zurückkommen, zurückgeben, zurückrufen.'] }],
  ['v', 'zurück|geben', 'gibt zurück', 'gab zurück', 'hat zurückgegeben', 'devolver', 'give back'],
  ['v', 'spülen', 'spült', 'spülte', 'hat gespült', 'lavar (la loza)', 'wash up'],
  ['v', 'streiten', 'streitet', 'stritt', 'hat gestritten', 'discutir; pelear', 'argue; quarrel', { rek: 'mit + D über + A' }],
  ['v', 'nerven', 'nervt', 'nervte', 'hat genervt', 'molestar; poner de los nervios', 'get on someone’s nerves'],
  ['v', 'reden', 'redet', 'redete', 'hat geredet', 'hablar; conversar', 'talk', { rek: 'mit + D über + A' }],
  ['v', 'sich ein|mischen', 'mischt ein', 'mischte ein', 'hat eingemischt', 'entrometerse', 'interfere', { rek: 'in + A' }],
  ['n', 'das Geschirr', '—', 'la loza; la vajilla', 'dishes'],
  ['n', 'die Spülmaschine', 'Spülmaschinen', 'el lavavajillas', 'dishwasher'],
  ['n', 'der Streit', 'Streite', 'la discusión; la pelea', 'argument; quarrel'],
  ['n', 'die Ordnung', 'Ordnungen', 'el orden', 'order; tidiness', { note: ['In Ordnung! = ¡De acuerdo!', 'In Ordnung! = OK!'] }],
  ['n', 'der Putzplan', 'Putzpläne', 'el turno de limpieza', 'cleaning rota'],
  ['n', 'die Schuld', 'Schulden', 'la culpa; (pl.) las deudas', 'guilt; fault; (pl.) debts', { note: ['Das ist meine Schuld. / Ich bin schuld.', 'Das ist meine Schuld. / Ich bin schuld.'], forms: { schuld: 'lemma' } }],
  ['n', 'der Quatsch', '—', 'la tontera', 'nonsense'],
  ['n', 'die Laune', 'Launen', 'el humor; el ánimo', 'mood'],
  ['a', 'dreckig', null, null, 'sucio', 'dirty'],
  ['a', 'beleidigt', '—', '—', 'ofendido', 'offended'],
  ['a', 'witzig', null, null, 'gracioso', 'funny; witty'],
  ['a', 'fair', null, null, 'justo; equitativo', 'fair'],
  ['phr', 'Na ja.', 'bueno…; en fin', 'oh well', { id: 'phr-na-ja' }],
  ['phr', 'Ach so!', '¡ah, ya entiendo!', 'oh, I see!'],
  ['phr', 'Mir ist das egal.', 'me da igual', 'I don’t care'],
  ['phr', 'Schon gut.', 'está bien; no pasa nada', 'it’s all right'],
  ['phr', 'Das ist doch nicht so schlimm.', 'no es para tanto', 'it’s not that bad'],
  ['phr', 'Was ist denn los?', '¿qué pasa?', 'what’s the matter?']
] });

DD.unit('u30', {
  minutes: 60,
  goals: [
    { es: 'Entender y usar las partículas modales más frecuentes: ja, doch, denn, mal, eben/halt, wohl, schon, bloß, ruhig, etwa, eigentlich.', en: 'Understand and use the most frequent modal particles: ja, doch, denn, mal, eben/halt, wohl, schon, bloß, ruhig, etwa, eigentlich.' },
    { es: 'Ordenar el campo medio: pronombres, dativo/acusativo, Te-Ka-Mo-Lo.', en: 'Order the middle field: pronouns, dative/accusative, Te-Ka-Mo-Lo.' },
    { es: 'Colocar nicht correctamente en la negación total y parcial.', en: 'Place nicht correctly in sentence and partial negation.' }
  ],
  grammar: ['g-particles', 'g-mittelfeld', 'g-negation'],
  lesson: [
    { b: 'concept', de: 'Modalpartikeln', t: { es: 'Palabras cortas, átonas, que no cambian el contenido sino la actitud del hablante: sorpresa, evidencia, impaciencia, suavidad. Van siempre en el campo medio (nunca en el Vorfeld), normalmente tras los pronombres. Hacen que el alemán suene natural; sin ellas suena seco.', en: 'Short, unstressed words that change not the content but the speaker’s attitude: surprise, obviousness, impatience, softness. They always sit in the middle field (never in the Vorfeld), usually after pronouns. They make German sound natural; without them it sounds curt.' } },
    { b: 'table', h: { es: 'Las partículas modales por tipo de oración', en: 'Modal particles by sentence type' }, c: [{ es: 'Partícula', en: 'Particle' }, { es: 'Oración', en: 'Sentence' }, { es: 'Matiz', en: 'Nuance' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['ja', { es: 'enunciativa', en: 'statement' }, { es: 'algo sabido / sorpresa', en: 'known fact / surprise' }, 'Du weißt [ja], ich habe keine Zeit. · Das ist [ja] toll!'],
      ['doch', { es: 'enunciativa · imperativa', en: 'statement · imperative' }, { es: 'recordar; insistir', en: 'remind; urge' }, 'Das habe ich dir [doch] gesagt! · Komm [doch] mit!'],
      ['denn', { es: 'interrogativa', en: 'question' }, { es: 'interés; naturalidad', en: 'interest; casualness' }, 'Was ist [denn] los? · Wo warst du [denn]?'],
      ['mal', { es: 'imperativa', en: 'imperative' }, { es: 'suavizar', en: 'soften' }, 'Hör [mal]! · Kannst du [mal] kommen?'],
      ['eben / halt', { es: 'enunciativa', en: 'statement' }, { es: 'resignación: «así es»', en: 'resignation: “that’s how it is”' }, 'Das ist [eben] so. · Dann warten wir [halt].'],
      ['wohl', { es: 'enunciativa', en: 'statement' }, { es: 'suposición', en: 'assumption' }, 'Er ist [wohl] krank.'],
      ['schon', { es: 'enunciativa', en: 'statement' }, { es: 'tranquilizar; conceder', en: 'reassure; concede' }, 'Das klappt [schon]. · Das stimmt [schon], aber …'],
      ['bloß / nur', { es: 'imperativa · deseo', en: 'imperative · wish' }, { es: 'advertencia; deseo intenso', en: 'warning; strong wish' }, 'Sag das [bloß] nicht! · Wenn er [nur] käme!'],
      ['ruhig', { es: 'imperativa', en: 'imperative' }, { es: 'permiso: «tranquilo, hazlo»', en: 'permission: “go ahead”' }, 'Komm [ruhig] rein!'],
      ['etwa', { es: 'interrogativa sí/no', en: 'yes/no question' }, { es: 'sospecha negativa', en: 'suspicious, negative expectation' }, 'Bist du [etwa] beleidigt?'],
      ['eigentlich', { es: 'interrogativa', en: 'question' }, { es: 'cambio de tema casual', en: 'casual topic shift' }, 'Wie spät ist es [eigentlich]?'],
      ['überhaupt', { es: 'interrogativa', en: 'question' }, { es: 'duda de fondo', en: 'fundamental doubt' }, 'Hast du [überhaupt] Zeit?']
    ], n: { es: 'Combinaciones frecuentes en orden fijo: ja doch, doch mal, denn eigentlich, halt mal: Komm doch mal her!', en: 'Frequent combinations in fixed order: ja doch, doch mal, denn eigentlich, halt mal: Komm doch mal her!' } },
    { b: 'concept', de: 'Mittelfeld', t: { es: 'Entre el verbo conjugado y el verbo final rige un orden por defecto. Primero lo conocido (pronombres), luego lo nuevo; lo más informativo va al final, justo antes del verbo 2.', en: 'Between the finite verb and the final verb there is a default order. Known information (pronouns) first, then new; the most informative element goes last, right before verb 2.' } },
    { b: 'table', h: { es: 'Reglas del campo medio', en: 'Middle-field rules' }, c: [{ es: 'Regla', en: 'Rule' }, { es: 'Orden', en: 'Order' }, { es: 'Ejemplo', en: 'Example' }], r: [
      [{ es: 'pronombres primero', en: 'pronouns first' }, 'Nom › Akk › Dat', 'Gestern hat [er] [es] [ihr] gegeben.'],
      [{ es: 'dos sustantivos', en: 'two nouns' }, 'Dat › Akk', 'Ich gebe [dem Kind] [das Buch].'],
      [{ es: 'pronombre y sustantivo', en: 'pronoun and noun' }, { es: 'pronombre › sustantivo', en: 'pronoun › noun' }, 'Ich gebe [es] [dem Kind]. · Ich gebe [ihm] [das Buch].'],
      [{ es: 'circunstanciales', en: 'adverbials' }, 'Te › Ka › Mo › Lo', 'Ich fahre [morgen] [wegen der Arbeit] [mit dem Zug] [nach Berlin].'],
      [{ es: 'partículas modales', en: 'modal particles' }, { es: 'tras pronombres, antes de lo nuevo', en: 'after pronouns, before new info' }, 'Du hast [mir] [doch] gestern das Geld gegeben.']
    ], n: { es: 'Te-Ka-Mo-Lo = temporal (wann?), kausal (warum?), modal (wie?), lokal (wo/wohin?). Es una tendencia, no una ley: el foco puede desplazar elementos.', en: 'Te-Ka-Mo-Lo = temporal (when?), causal (why?), modal (how?), local (where?). A tendency, not a law: focus can shift elements.' } },
    { b: 'concept', de: 'Position von nicht', t: { es: 'Negación total: nicht va lo más a la derecha posible, pero antes del verbo 2 y antes de los complementos estrechamente ligados al verbo (dirección, adjetivo o sustantivo predicativo, complemento preposicional). Negación parcial: nicht va justo delante de lo que se niega, a menudo con sondern.', en: 'Sentence negation: nicht goes as far right as possible, but before verb 2 and before complements tightly bound to the verb (direction, predicative adjective or noun, prepositional object). Partial negation: nicht goes right before what is negated, often with sondern.' } },
    { b: 'table', h: { es: 'Dónde va nicht', en: 'Where nicht goes' }, c: [{ es: 'Caso', en: 'Case' }, { es: 'Posición', en: 'Position' }, { es: 'Ejemplo', en: 'Example' }], r: [
      [{ es: 'objeto definido, pronombre, tiempo', en: 'definite object, pronoun, time' }, { es: 'después', en: 'after' }, 'Ich kenne den Mann [nicht]. · Ich komme heute [nicht].'],
      [{ es: 'verbo 2 (participio, infinitivo, prefijo)', en: 'verb 2 (participle, infinitive, prefix)' }, { es: 'antes', en: 'before' }, 'Ich habe ihn [nicht] gesehen. · Er ruft [nicht] an.'],
      [{ es: 'adjetivo / sustantivo predicativo', en: 'predicative adjective / noun' }, { es: 'antes', en: 'before' }, 'Das ist [nicht] fair. · Er ist [nicht] Arzt.'],
      [{ es: 'dirección, lugar ligado al verbo', en: 'direction, verb-bound place' }, { es: 'antes', en: 'before' }, 'Ich fahre [nicht] nach Berlin.'],
      [{ es: 'complemento preposicional', en: 'prepositional object' }, { es: 'antes', en: 'before' }, 'Ich warte [nicht] auf dich.'],
      [{ es: 'manera (wie?)', en: 'manner (how?)' }, { es: 'antes', en: 'before' }, 'Er spricht [nicht] laut.'],
      [{ es: 'negación parcial', en: 'partial negation' }, { es: 'ante el elemento negado', en: 'before the negated element' }, 'Ich komme [nicht heute], sondern morgen.']
    ], n: { es: 'Sustantivo indefinido o sin artículo → kein: Ich habe keine Zeit (no «nicht Zeit»).', en: 'Indefinite noun or noun without article → kein: Ich habe keine Zeit (not “nicht Zeit”).' } },
    { b: 'note', tone: 'l1', t: { es: 'Muchas partículas equivalen en español a entonación o a muletillas: «¿y qué pasa, entonces?» (denn), «ya te lo dije, pues» (doch), «así nomás es» (eben). No las traduzcas palabra por palabra: imita el tono.', en: 'Many particles correspond to intonation or filler words in English: “so what’s up?” (denn), “I told you, didn’t I?” (doch), “that’s just how it is” (eben). Don’t translate word for word: imitate the tone.' } }
  ],
  chunks: [
    ['Was ist denn los?', '¿Qué pasa, entonces?', 'What’s the matter?'],
    ['Komm doch mal her!', '¡Ven un momento, anda!', 'Come here a moment!'],
    ['Das ist eben so.', 'Así son las cosas.', 'That’s just how it is.'],
    ['Das klappt schon.', 'Ya va a resultar.', 'It’ll work out.'],
    ['Mach dir bloß keine Sorgen!', '¡No te preocupes para nada!', 'Don’t you worry!']
  ],
  errors: [
    ['Doch komm mit!', 'Komm doch mit!', { es: 'La partícula nunca va en el Vorfeld ni en posición 1.', en: 'A particle never goes in the Vorfeld or first position.' }],
    ['Ich gebe das Buch ihm.', 'Ich gebe ihm das Buch.', { es: 'Pronombre antes de sustantivo.', en: 'Pronoun before noun.' }],
    ['Ich gebe ihm es.', 'Ich gebe es ihm.', { es: 'Dos pronombres: acusativo antes de dativo.', en: 'Two pronouns: accusative before dative.' }],
    ['Ich habe nicht ihn gesehen.', 'Ich habe ihn nicht gesehen.', { es: 'Negación total: nicht tras el pronombre.', en: 'Sentence negation: nicht after the pronoun.' }],
    ['Ich warte auf dich nicht.', 'Ich warte nicht auf dich.', { es: 'nicht antes del complemento preposicional.', en: 'nicht before the prepositional object.' }]
  ],
  examples: [
    ['Du hast ja schon wieder nicht gespült!', '¡Otra vez no lavaste la loza!', 'You haven’t washed up again!'],
    ['Wer ist denn heute dran?', '¿Y a quién le toca hoy?', 'So whose turn is it today?'],
    ['Er hat es dir doch gestern erklärt.', 'Pero si te lo explicó ayer.', 'He explained it to you yesterday, didn’t he?'],
    ['Ich fahre morgen wegen eines Termins mit dem Rad zur Uni.', 'Mañana voy a la universidad en bicicleta por una cita.', 'Tomorrow I’m cycling to the university because of an appointment.'],
    ['Ich habe das nicht absichtlich gemacht.', 'No lo hice a propósito.', 'I didn’t do it on purpose.'],
    ['Nicht Mehmet, sondern ich habe die Tasse kaputt gemacht.', 'No fue Mehmet, sino yo quien rompió la taza.', 'It wasn’t Mehmet but me who broke the cup.']
  ],
  reading: 'r-u30',
  exercises: [
    { t: 'choice', ph: 1, q: 'Was ist ___ los? (pregunta con interés)', o: ['denn', 'ja', 'eben'], a: 0, x: { es: 'denn: partícula de preguntas.', en: 'denn: question particle.' } },
    { t: 'choice', ph: 1, q: 'Das habe ich dir ___ gesagt! (recordar algo)', o: ['denn', 'doch', 'etwa'], a: 1, x: { es: 'doch: «ya te lo dije».', en: 'doch: “I told you”.' } },
    { t: 'choice', ph: 1, q: 'Bist du ___ beleidigt? (sospecha)', o: ['etwa', 'mal', 'eben'], a: 0, x: { es: 'etwa: espero que no.', en: 'etwa: I hope not.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona partícula y matiz.', en: 'Match particle and nuance.' }, pairs: [['eben', { es: 'resignación', en: 'resignation' }], ['wohl', { es: 'suposición', en: 'assumption' }], ['ruhig', { es: 'permiso', en: 'permission' }], ['mal', { es: 'suavizar', en: 'softening' }]], x: { es: 'El matiz depende del tipo de oración.', en: 'The nuance depends on the sentence type.' } },
    { t: 'choice', ph: 1, q: 'Ich gebe ___.', o: ['ihm es', 'es ihm', 'es dem ihm'], a: 1, x: { es: 'Dos pronombres: Akk › Dat.', en: 'Two pronouns: acc. › dat.' } },
    { t: 'choice', ph: 1, q: 'Correcto:', o: ['Ich warte auf dich nicht.', 'Ich warte nicht auf dich.', 'Nicht ich warte auf dich.'], a: 1, x: { es: 'nicht ante el complemento preposicional.', en: 'nicht before the prepositional object.' } },
    { t: 'gap', ph: 2, q: 'Komm ___ rein! (permiso: tranquilo)', a: 'ruhig', x: { es: 'ruhig + imperativo = permiso.', en: 'ruhig + imperative = permission.' } },
    { t: 'gap', ph: 2, q: 'Der Bus kommt nicht. Dann gehen wir ___ zu Fuß. (resignación)', a: 'eben', alt: ['halt'], x: { es: 'eben / halt: qué le vamos a hacer.', en: 'eben / halt: oh well.' } },
    { t: 'gap', ph: 2, q: 'Hör ___ zu! (suavizar)', a: 'mal', x: { es: 'mal en imperativos.', en: 'mal in imperatives.' } },
    { t: 'gap', ph: 2, q: 'Er ist heute nicht da. Er ist ___ krank. (suposición)', a: 'wohl', x: { es: 'wohl = probablemente.', en: 'wohl = probably.' } },
    { t: 'gap', ph: 2, q: 'Das ist ___ fair! (negación del adjetivo)', a: 'nicht', x: { es: 'nicht ante adjetivo predicativo.', en: 'nicht before a predicative adjective.' } },
    { t: 'order', ph: 2, w: ['Ich', 'gebe', 'dem Kind', 'das Buch', 'morgen'], a: 'Ich gebe dem Kind morgen das Buch.', alt: ['Ich gebe morgen dem Kind das Buch.'], x: { es: 'Lo nuevo (das Buch) al final del campo medio.', en: 'New info (das Buch) at the end of the middle field.' } },
    { t: 'order', ph: 2, w: ['Ich', 'fahre', 'mit dem Zug', 'nach Leipzig', 'morgen'], a: 'Ich fahre morgen mit dem Zug nach Leipzig.', x: { es: 'Te-Mo-Lo.', en: 'Te-Mo-Lo.' } },
    { t: 'order', ph: 2, w: ['habe', 'Ich', 'nicht', 'ihn', 'gesehen'], a: 'Ich habe ihn nicht gesehen.', x: { es: 'nicht tras el pronombre, antes del participio.', en: 'nicht after the pronoun, before the participle.' } },
    { t: 'transform', ph: 3, p: { es: 'Niega solo «heute» y añade «sondern morgen».', en: 'Negate only “heute” and add “sondern morgen”.' }, q: 'Ich komme heute.', a: 'Ich komme nicht heute, sondern morgen.', x: { es: 'Negación parcial: nicht + elemento + sondern.', en: 'Partial negation: nicht + element + sondern.' } },
    { t: 'transform', ph: 3, p: { es: 'Sustituye los sustantivos por pronombres.', en: 'Replace the nouns with pronouns.' }, q: 'Ich gebe dem Kind das Buch.', a: 'Ich gebe es ihm.', x: { es: 'Akk-pronombre › Dat-pronombre.', en: 'Acc. pronoun › dat. pronoun.' } },
    { t: 'write', ph: 3, s: { es: '¡Ven con nosotros, anda! (doch mal)', en: 'Do come along with us! (doch mal)' }, a: 'Komm doch mal mit!', alt: ['Komm doch mit!'], x: { es: 'Orden fijo: doch mal.', en: 'Fixed order: doch mal.' } },
    { t: 'listen', ph: 3, a: 'Was ist denn los?', x: { es: 'denn: átono.', en: 'denn: unstressed.' } }
  ],
  summary: [
    { es: 'Partículas modales: átonas, en el campo medio, tras pronombres. Matiz según el tipo de oración.', en: 'Modal particles: unstressed, in the middle field, after pronouns. Nuance depends on sentence type.' },
    { es: 'Preguntas: denn, eigentlich, etwa, überhaupt. Imperativo: mal, doch, ruhig, bloß. Enunciados: ja, doch, eben/halt, wohl, schon.', en: 'Questions: denn, eigentlich, etwa, überhaupt. Imperatives: mal, doch, ruhig, bloß. Statements: ja, doch, eben/halt, wohl, schon.' },
    { es: 'Campo medio: pronombres (Nom › Akk › Dat) › Dat-sustantivo › Akk-sustantivo; Te-Ka-Mo-Lo; lo nuevo al final.', en: 'Middle field: pronouns (nom › acc › dat) › dat. noun › acc. noun; Te-Ka-Mo-Lo; new info last.' },
    { es: 'nicht total: tras objetos definidos y tiempo; antes de verbo 2, predicativo, dirección, complemento preposicional.', en: 'Sentence nicht: after definite objects and time; before verb 2, predicatives, direction, prepositional objects.' }
  ]
});

DD.readings.push({
  id: 'r-u30', unit: 'u30', level: 'B1', kind: 'unit', format: 'dialog',
  de: 'Wer ist denn heute dran?', es: '¿Y a quién le toca hoy?', en: 'So whose turn is it today?',
  genre: { es: 'Diálogo coloquial · serie Leipzig 30', en: 'Colloquial dialogue · Leipzig series 30' },
  intro: { es: 'Lunes en la mañana, cocina de la WG. La loza lleva tres días en el lavaplatos y nadie se hace cargo. Fíjate en cómo las partículas cambian el tono de cada frase.', en: 'Monday morning, WG kitchen. The dishes have been in the sink for three days and no one takes responsibility. Notice how the particles change the tone of each sentence.' },
  focus: { es: 'denn, doch, ja, mal, eben, halt, wohl, schon, bloß, etwa, eigentlich, überhaupt · posición de nicht.', en: 'denn, doch, ja, mal, eben, halt, wohl, schon, bloß, etwa, eigentlich, überhaupt · position of nicht.' },
  source: { type: 'original' },
  p: [
    ['Sag mal, was ist denn hier los? Das Geschirr steht ja schon seit Freitag in der Küche!', 'Oye, ¿qué pasa aquí? ¡La loza está en la cocina desde el viernes!', 'Hey, what’s going on here? The dishes have been in the kitchen since Friday!', 'Lena'],
    ['Ich war es nicht. Ich war doch das ganze Wochenende in Berlin.', 'Yo no fui. Estuve todo el fin de semana en Berlín, ¿recuerdas?', 'It wasn’t me. I was in Berlin all weekend, remember.', 'Mehmet'],
    ['Na ja, die Tassen mit dem Kaffee sind aber wohl von dir. Du trinkst ja als Einziger schwarzen Kaffee.', 'Bueno, pero las tazas con café seguramente son tuyas. Eres el único que toma café negro.', 'Well, but the cups with coffee are probably yours. You’re the only one who drinks black coffee.', 'Tomás'],
    ['Okay, okay, die zwei Tassen gebe ich zu. Aber wer ist eigentlich diese Woche dran? Wir haben doch einen Putzplan.', 'Ya, ya, las dos tazas las admito. Pero, a ver, ¿a quién le toca esta semana? Tenemos un turno de limpieza, ¿no?', 'OK, OK, I admit to the two cups. But whose turn is it actually this week? We do have a cleaning rota.', 'Mehmet'],
    ['Hängt der überhaupt noch? Ich habe ihn seit Wochen nicht gesehen.', '¿Y sigue colgado siquiera? Hace semanas que no lo veo.', 'Is it even still up? I haven’t seen it for weeks.', 'Lena'],
    ['Er hängt am Kühlschrank. Moment … Diese Woche ist Tomás dran. Oh.', 'Está colgado en el refrigerador. Un momento… Esta semana le toca a Tomás. Oh.', 'It’s on the fridge. Wait … This week it’s Tomás’s turn. Oh.', 'Mehmet'],
    ['Ach so … Ich hatte es wirklich vergessen. Nicht absichtlich! Ich hatte eben viel zu tun, die Prüfung und so.', 'Ah, ya… De verdad lo había olvidado. ¡No a propósito! Es que tenía mucho que hacer, el examen y todo eso.', 'Oh, I see … I really had forgotten. Not on purpose! I just had a lot to do, the exam and so on.', 'Tomás'],
    ['Bist du jetzt etwa beleidigt? Das ist doch nicht so schlimm. Du spülst halt heute Abend, und dann ist alles wieder in Ordnung.', '¿No estarás ofendido? No es para tanto. Lavas tú la loza esta noche y todo vuelve a estar en orden.', 'You’re not offended now, are you? It’s not that bad. You just wash up tonight, and everything is fine again.', 'Lena'],
    ['Nein, nein, du hast schon recht. Es nervt mich ja selbst, wenn die Küche dreckig ist. Aber ich habe eine Idee: Wir kaufen eine Spülmaschine. Dann streiten wir nie wieder.', 'No, no, tienes razón. A mí también me molesta cuando la cocina está sucia. Pero tengo una idea: compramos un lavavajillas. Así no discutimos nunca más.', 'No, no, you’re right. It annoys me too when the kitchen is dirty. But I have an idea: we buy a dishwasher. Then we’ll never argue again.', 'Tomás'],
    ['Eine Spülmaschine? Wo soll die denn stehen? Die Küche ist doch winzig. Na gut, wir reden heute Abend darüber. Aber du spülst trotzdem. Und mach bloß nicht wieder meine gute Tasse kaputt!', '¿Un lavavajillas? ¿Y dónde va a ir? La cocina es diminuta. Bueno, lo hablamos esta noche. Pero igual lavas tú. ¡Y ni se te ocurra volver a romper mi taza buena!', 'A dishwasher? Where’s that supposed to go? The kitchen is tiny. All right, we’ll talk about it tonight. But you’re still washing up. And don’t you dare break my good cup again!', 'Mehmet']
  ],
  gloss: [
    ['Sag', { es: 'oye (sag mal = dime)', en: 'say (sag mal = hey)' }],
    ['Tassen', { es: 'tazas (die Tasse)', en: 'cups' }],
    ['Einziger', { es: 'el único (als Einziger)', en: 'the only one' }],
    ['dran', { es: 'le toca (dran sein)', en: 'turn (dran sein)' }],
    ['Moment', { es: 'un momento', en: 'just a moment' }],
    ['Oh', { es: 'oh', en: 'oh' }],
    ['recht', { es: 'razón (recht haben)', en: 'right (recht haben)' }],
    ['winzig', { es: 'diminuta', en: 'tiny' }],
    ['kaputt', { es: 'roto (kaputt machen = romper)', en: 'broken (kaputt machen = break)' }]
  ],
  q: [
    { t: 'choice', q: 'Warum war Mehmet nicht schuld?', o: ['Er war am Wochenende in Berlin.', 'Er trinkt keinen Kaffee.', 'Er hat gespült.'], a: 0, x: { es: '«Ich war doch das ganze Wochenende in Berlin.»', en: '“Ich war doch das ganze Wochenende in Berlin.”' } },
    { t: 'rf', q: 'Die zwei Kaffeetassen sind von Mehmet.', a: true, x: { es: '«die zwei Tassen gebe ich zu».', en: '“die zwei Tassen gebe ich zu”.' } },
    { t: 'choice', q: 'Wer ist diese Woche dran?', o: ['Lena', 'Mehmet', 'Tomás'], a: 2, x: { es: 'Según el Putzplan, Tomás.', en: 'According to the rota, Tomás.' } },
    { t: 'choice', q: 'Was bedeutet «Bist du jetzt etwa beleidigt?»', o: ['Lena hofft, dass Tomás nicht beleidigt ist.', 'Lena weiß, dass Tomás beleidigt ist.', 'Lena ist beleidigt.'], a: 0, x: { es: 'etwa: sospecha, con esperanza de un «no».', en: 'etwa: suspicion, hoping for “no”.' } },
    { t: 'rf', q: 'Mehmet findet die Idee mit der Spülmaschine sofort gut.', a: false, x: { es: 'Duda: la cocina es diminuta.', en: 'He doubts it: the kitchen is tiny.' } }
  ]
});
