/* U20 · Pläne für die Zukunft */
DD.lexicon.push({ unit: 'u20', words: [
  ['v', 'gründen', 'gründet', 'gründete', 'hat gegründet', 'fundar', 'found; set up'],
  ['v', 'erreichen', 'erreicht', 'erreichte', 'hat erreicht', 'alcanzar; lograr; contactar', 'reach; achieve'],
  ['v', 'ab|schließen', 'schließt ab', 'schloss ab', 'hat abgeschlossen', 'terminar; concluir; cerrar con llave', 'complete; lock'],
  ['v', 'promovieren', 'promoviert', 'promovierte', 'hat promoviert', 'doctorarse', 'do a PhD'],
  ['v', 'forschen', 'forscht', 'forschte', 'hat geforscht', 'investigar', 'do research'],
  ['v', 'unterrichten', 'unterrichtet', 'unterrichtete', 'hat unterrichtet', 'enseñar; dar clases', 'teach'],
  ['v', 'entwickeln', 'entwickelt', 'entwickelte', 'hat entwickelt', 'desarrollar', 'develop'],
  ['v', 'ein|stellen', 'stellt ein', 'stellte ein', 'hat eingestellt', 'contratar; ajustar', 'hire; adjust'],
  ['v', 'leiten', 'leitet', 'leitete', 'hat geleitet', 'dirigir', 'lead; manage'],
  ['v', 'zurück|kehren', 'kehrt zurück', 'kehrte zurück', 'ist zurückgekehrt', 'regresar', 'return'],
  ['v', 'versprechen', 'verspricht', 'versprach', 'hat versprochen', 'prometer', 'promise'],
  ['v', 'voraus|sagen', 'sagt voraus', 'sagte voraus', 'hat vorausgesagt', 'predecir', 'predict'],
  ['n', 'der Plan', 'Pläne', 'el plan', 'plan'],
  ['n', 'das Ziel', 'Ziele', 'la meta; el objetivo', 'goal; aim'],
  ['n', 'der Traum', 'Träume', 'el sueño', 'dream'],
  ['n', 'die Karriere', 'Karrieren', 'la carrera (profesional)', 'career'],
  ['n', 'der Abschluss', 'Abschlüsse', 'el título; la conclusión', 'degree; completion'],
  ['n', 'der Master', 'Master', 'el máster', 'master’s degree'],
  ['n', 'die Promotion', 'Promotionen', 'el doctorado', 'doctorate'],
  ['n', 'das Praktikum', 'Praktika', 'la práctica (profesional)', 'internship'],
  ['n', 'das Vorstellungsgespräch', 'Vorstellungsgespräche', 'la entrevista de trabajo', 'job interview'],
  ['n', 'der Arbeitgeber', 'Arbeitgeber', 'el empleador', 'employer'],
  ['n', 'der Kollege', 'Kollegen', 'el colega', 'colleague (m.)', { n: 1 }],
  ['n', 'die Kollegin', 'Kolleginnen', 'la colega', 'colleague (f.)'],
  ['n', 'der Chef', 'Chefs', 'el jefe', 'boss (m.)'],
  ['n', 'die Chefin', 'Chefinnen', 'la jefa', 'boss (f.)'],
  ['n', 'das Gehalt', 'Gehälter', 'el sueldo', 'salary'],
  ['n', 'die Fähigkeit', 'Fähigkeiten', 'la capacidad; la habilidad', 'ability; skill'],
  ['n', 'die Stärke', 'Stärken', 'la fortaleza; el punto fuerte', 'strength'],
  ['n', 'die Schwäche', 'Schwächen', 'la debilidad', 'weakness'],
  ['n', 'das Team', 'Teams', 'el equipo', 'team'],
  ['n', 'das Projekt', 'Projekte', 'el proyecto', 'project'],
  ['n', 'die Technik', 'Techniken', 'la técnica; la tecnología', 'technology; technique'],
  ['n', 'die Entwicklung', 'Entwicklungen', 'el desarrollo', 'development'],
  ['n', 'die Intelligenz', '—', 'la inteligencia', 'intelligence'],
  ['n', 'die Gesellschaft', 'Gesellschaften', 'la sociedad; la compañía', 'society; company'],
  ['n', 'die Umwelt', '—', 'el medio ambiente', 'environment'],
  ['n', 'das Unternehmen', 'Unternehmen', 'la empresa', 'company; enterprise'],
  ['a', 'künftig', '—', '—', 'futuro; venidero', 'future'],
  ['a', 'flexibel', null, null, 'flexible', 'flexible'],
  ['a', 'kreativ', null, null, 'creativo', 'creative'],
  ['a', 'erfolgreich', null, null, 'exitoso', 'successful'],
  ['a', 'ehrlich', null, null, 'honesto; sincero', 'honest'],
  ['a', 'ehrgeizig', null, null, 'ambicioso', 'ambitious'],
  ['a', 'digital', null, null, 'digital', 'digital'],
  ['a', 'künstlich', null, null, 'artificial', 'artificial'],
  ['adv', 'wahrscheinlich', 'probablemente', 'probably'],
  ['adv', 'hoffentlich', 'ojalá; espero que', 'hopefully'],
  ['adv', 'irgendwann', 'algún día; en algún momento', 'some day; at some point'],
  ['adv', 'später', 'más tarde', 'later', { id: 'adv-spaeter', homonym: 1 }],
  ['phr', 'eines Tages', 'algún día', 'one day'],
  ['phr', 'in zwei Jahren', 'dentro de dos años', 'in two years'],
  ['phr', 'nächste Woche', 'la próxima semana', 'next week'],
  ['phr', 'Ich würde gern …', 'me gustaría…', 'I would like to…'],
  ['phr', 'Könnten Sie …?', '¿podría usted…?', 'could you…?'],
  ['phr', 'Es wäre schön, wenn …', 'sería bueno que…', 'it would be nice if…']
] });

DD.unit('u20', {
  minutes: 55,
  goals: [
    { es: 'Expresar planes, predicciones y promesas con Futur I y con presente + adverbio.', en: 'Express plans, predictions and promises with Futur I and present + adverb.' },
    { es: 'Distinguir los cuatro usos de werden.', en: 'Distinguish the four uses of werden.' },
    { es: 'Pedir y proponer con cortesía: würde, hätte, wäre, könnte, dürfte, möchte.', en: 'Ask and suggest politely: würde, hätte, wäre, könnte, dürfte, möchte.' }
  ],
  grammar: ['g-future', 'g-werden', 'g-k2'],
  lesson: [
    { b: 'concept', de: 'Futur I', t: { es: 'werden conjugado (posición 2) + infinitivo al final: Ich [werde] in Berlin arbeiten. Expresa intención firme, predicción o promesa. Si un adverbio ya marca el futuro, basta el presente: Morgen fahre ich nach Berlin.', en: 'Conjugated werden (position 2) + infinitive at the end: Ich werde in Berlin arbeiten. It expresses firm intention, prediction or promise. If an adverb already marks the future, the present is enough: Morgen fahre ich nach Berlin.' } },
    { b: 'concept', de: 'Vermutung', t: { es: 'Futur I también expresa suposición sobre el presente, a menudo con wohl o wahrscheinlich: Er [wird] (wohl) krank [sein] = probablemente está enfermo.', en: 'Futur I also expresses a guess about the present, often with wohl or wahrscheinlich: Er wird (wohl) krank sein = he is probably ill.' } },
    { b: 'table', h: { es: 'werden + infinitivo', en: 'werden + infinitive' }, c: ['', 'werden', 'Futur I'], r: [
      ['ich', 'werde', 'ich [werde] arbeiten'], ['du', 'w[i]rst', 'du [wirst] arbeiten'], ['er · sie · es', 'w[i]rd', 'er [wird] arbeiten'], ['wir', 'werden', 'wir [werden] arbeiten'], ['ihr', 'werdet', 'ihr [werdet] arbeiten'], ['sie · Sie', 'werden', 'sie [werden] arbeiten']
    ], n: { es: 'Ojo: du wirst, er wird (sin -d- en du).', en: 'Note: du wirst, er wird (no -d- for du).' } },
    { b: 'table', h: { es: 'Los cuatro usos de werden', en: 'The four uses of werden' }, c: [{ es: 'Uso', en: 'Use' }, { es: 'Estructura', en: 'Structure' }, { es: 'Ejemplo', en: 'Example' }], r: [
      [{ es: 'verbo pleno: llegar a ser', en: 'full verb: become' }, 'werden + Nomen/Adjektiv', 'Lena [wird] Psychologin. · Es [wird] kalt.'],
      [{ es: 'futuro', en: 'future' }, 'werden + Infinitiv', 'Ich [werde] promovieren.'],
      [{ es: 'pasiva (U25)', en: 'passive (U25)' }, 'werden + Partizip II', 'Die Heizung [wird] repariert.'],
      [{ es: 'Konjunktiv II', en: 'Konjunktiv II' }, 'würde + Infinitiv', 'Ich [würde] gern in Chile leben.']
    ], n: { es: 'Mira siempre qué forma acompaña a werden: sustantivo/adjetivo, infinitivo o participio.', en: 'Always check what form accompanies werden: noun/adjective, infinitive or participle.' } },
    { b: 'slots', h: { es: 'Futur en principal y subordinada', en: 'Future in main and subordinate clauses' }, c: ['Vorfeld', { es: 'Verbo 1', en: 'Verb 1' }, 'Mittelfeld', { es: 'Verbo 2', en: 'Verb 2' }], v: [1, 3], r: [
      ['Ich', 'werde', 'nach dem Studium in Berlin', 'arbeiten.'],
      ['Nächstes Jahr', 'wird', 'Lena ihren Master', 'abschließen.'],
      ['Ich glaube,', 'dass', 'Tomás nach Chile zurückkehren', 'wird.']
    ], n: { es: 'En subordinada, werden va al final, detrás del infinitivo.', en: 'In a subordinate clause, werden goes last, after the infinitive.' } },
    { b: 'concept', de: 'Konjunktiv II · Höflichkeit', t: { es: 'Para pedir o proponer con cortesía se usa el Konjunktiv II: würde + infinitivo, o las formas simples hätte, wäre, könnte, dürfte, möchte. Suaviza como el condicional español («¿podría…?»).', en: 'To ask or suggest politely, use the Konjunktiv II: würde + infinitive, or the simple forms hätte, wäre, könnte, dürfte, möchte. It softens like English “could/would”.' } },
    { b: 'table', h: { es: 'Formas de cortesía más frecuentes', en: 'Most frequent polite forms' }, c: ['', 'haben', 'sein', 'können', 'werden'], r: [
      ['ich', 'h[ä]tte', 'w[ä]re', 'k[ö]nnte', 'w[ü]rde'], ['du', 'h[ä]ttest', 'w[ä]r(e)st', 'k[ö]nntest', 'w[ü]rdest'], ['er · sie · es', 'h[ä]tte', 'w[ä]re', 'k[ö]nnte', 'w[ü]rde'],
      ['wir', 'h[ä]tten', 'w[ä]ren', 'k[ö]nnten', 'w[ü]rden'], ['ihr', 'h[ä]ttet', 'w[ä]r(e)t', 'k[ö]nntet', 'w[ü]rdet'], ['sie · Sie', 'h[ä]tten', 'w[ä]ren', 'k[ö]nnten', 'w[ü]rden']
    ], n: { es: 'Se forman desde el Präteritum con Umlaut: hatte → hätte, war → wäre, konnte → könnte, wurde → würde. Todo el sistema del Konjunktiv II: U23 y U28.', en: 'Formed from the Präteritum with umlaut: hatte → hätte, war → wäre, konnte → könnte, wurde → würde. The full Konjunktiv II system: U23 and U28.' } },
    { b: 'pairs', h: { es: 'De directo a cortés', en: 'From direct to polite' }, r: [
      ['[Kann] ich das Fenster öffnen?', '[Könnte] ich das Fenster öffnen?'],
      ['[Haben] Sie einen Moment Zeit?', '[Hätten] Sie einen Moment Zeit?'],
      ['Geben Sie mir das Formular!', '[Würden] Sie mir bitte das Formular geben?'],
      ['Ich [will] einen Kaffee.', 'Ich [hätte gern] einen Kaffee. / Ich [möchte] einen Kaffee.'],
      ['Das [ist] schön.', 'Das [wäre] schön.']
    ] },
    { b: 'note', tone: 'l1', t: { es: '«Trabajaré» = ich werde arbeiten (o ich arbeite + adverbio). «Trabajaría» = ich würde arbeiten. «¿Podría…?» = Könnten Sie…? «Quisiera» = ich hätte gern / ich möchte. Atención: werden ≠ «querer»; «quiero» = ich will.', en: '“I will work” = ich werde arbeiten (or present + adverb). “I would work” = ich würde arbeiten. Careful: ich will = “I want”, not “I will”.' } }
  ],
  chunks: [
    ['Was wirst du nach dem Studium machen?', '¿Qué vas a hacer después de los estudios?', 'What will you do after your studies?'],
    ['Ich werde wahrscheinlich promovieren.', 'Probablemente haré un doctorado.', 'I’ll probably do a PhD.'],
    ['Hoffentlich finde ich eine gute Stelle.', 'Ojalá encuentre un buen puesto.', 'Hopefully I’ll find a good job.'],
    ['Könnten Sie mir bitte sagen, wie viel das kostet?', '¿Podría decirme cuánto cuesta?', 'Could you please tell me how much it costs?'],
    ['Ich würde gern im Team arbeiten.', 'Me gustaría trabajar en equipo.', 'I would like to work in a team.'],
    ['Es wäre schön, wenn wir in Kontakt bleiben.', 'Sería bueno que siguiéramos en contacto.', 'It would be nice if we stayed in touch.']
  ],
  errors: [
    ['Ich werde arbeite in Berlin.', 'Ich werde in Berlin arbeiten.', { es: 'werden + infinitivo al final.', en: 'werden + infinitive at the end.' }],
    ['Du werdest kommen.', 'Du wirst kommen.', { es: 'werden: du wirst, er wird.', en: 'werden: du wirst, er wird.' }],
    ['Ich will morgen regnen. (= va a llover)', 'Morgen wird es regnen.', { es: 'Predicción: werden (wollen = querer).', en: 'Prediction: werden (wollen = want).' }],
    ['Können Sie mir helfen? (muy directo)', 'Könnten Sie mir helfen?', { es: 'Cortesía: Konjunktiv II.', en: 'Politeness: Konjunktiv II.' }],
    ['…, dass er wird kommen.', '…, dass er kommen wird.', { es: 'Subordinada: werden al final.', en: 'Subordinate clause: werden last.' }]
  ],
  examples: [
    ['Nach dem Master werde ich in Leipzig promovieren.', 'Después del máster haré el doctorado en Leipzig.', 'After my master’s I’ll do a PhD in Leipzig.'],
    ['Lena wird Psychologin.', 'Lena va a ser psicóloga.', 'Lena is going to be a psychologist.'],
    ['Mehmet wird wohl nervös sein.', 'Mehmet probablemente esté nervioso.', 'Mehmet is probably nervous.'],
    ['Würden Sie mir Ihre Stärken nennen?', '¿Podría decirme sus fortalezas?', 'Would you tell me your strengths?'],
    ['Ich hätte gern mehr Zeit für meine Familie.', 'Me gustaría tener más tiempo para mi familia.', 'I’d like more time for my family.'],
    ['In zwanzig Jahren wird die Welt ganz anders aussehen.', 'En veinte años el mundo se verá muy distinto.', 'In twenty years the world will look very different.']
  ],
  reading: 'r-u20',
  exercises: [
    { t: 'choice', ph: 1, q: 'Ich ___ nach dem Studium in Berlin arbeiten.', o: ['werde', 'würde', 'wird'], a: 0, x: { es: 'Futur: ich werde + infinitivo.', en: 'Future: ich werde + infinitive.' } },
    { t: 'choice', ph: 1, q: 'Du ___ bestimmt eine gute Stelle finden.', o: ['werdest', 'wirst', 'wird'], a: 1, x: { es: 'du wirst.', en: 'du wirst.' } },
    { t: 'choice', ph: 1, p: { es: '«Lena wird Psychologin.» ¿Qué uso de werden es?', en: '“Lena wird Psychologin.” Which use of werden?' }, o: [{ es: 'llegar a ser', en: 'become' }, { es: 'futuro', en: 'future' }, { es: 'pasiva', en: 'passive' }], a: 0, x: { es: 'werden + sustantivo = llegar a ser.', en: 'werden + noun = become.' } },
    { t: 'choice', ph: 1, p: { es: '¿Cuál es la forma más cortés?', en: 'Which is the most polite?' }, o: ['Geben Sie mir das Formular!', 'Können Sie mir das Formular geben?', 'Würden Sie mir bitte das Formular geben?'], a: 2, x: { es: 'Konjunktiv II + bitte.', en: 'Konjunktiv II + bitte.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona Präteritum y Konjunktiv II.', en: 'Match Präteritum and Konjunktiv II.' }, pairs: [['hatte', 'hätte'], ['war', 'wäre'], ['konnte', 'könnte'], ['wurde', 'würde']], x: { es: 'Konjunktiv II = Präteritum + Umlaut.', en: 'Konjunktiv II = Präteritum + umlaut.' } },
    { t: 'choice', ph: 1, p: { es: '«Er wird wohl krank sein.» ¿Qué significa?', en: '“Er wird wohl krank sein.” What does it mean?' }, o: [{ es: 'Se va a enfermar.', en: 'He will get ill.' }, { es: 'Probablemente está enfermo.', en: 'He is probably ill.' }], a: 1, x: { es: 'Futur + wohl = suposición sobre el presente.', en: 'Futur + wohl = guess about the present.' } },
    { t: 'gap', ph: 2, q: 'Wir ___ nächstes Jahr nach Chile fliegen. (werden)', a: 'werden', x: { es: 'wir werden + infinitivo.', en: 'wir werden + infinitive.' } },
    { t: 'gap', ph: 2, q: 'Ihr ___ das schon schaffen. (werden)', a: 'werdet', x: { es: 'ihr werdet.', en: 'ihr werdet.' } },
    { t: 'gap', ph: 2, q: 'Ich glaube, dass es morgen regnen ___.', a: 'wird', x: { es: 'Subordinada: werden al final.', en: 'Subordinate clause: werden last.' } },
    { t: 'gap', ph: 2, q: '___ Sie einen Moment Zeit? (haben, cortés)', a: 'Hätten', x: { es: 'haben → hätten.', en: 'haben → hätten.' } },
    { t: 'gap', ph: 2, q: '___ ich kurz Ihr Telefon benutzen? (können, cortés)', a: 'Könnte', x: { es: 'können → könnte.', en: 'können → könnte.' } },
    { t: 'gap', ph: 2, q: 'Das ___ wirklich schön! (sein, Konjunktiv II)', a: 'wäre', x: { es: 'sein → wäre.', en: 'sein → wäre.' } },
    { t: 'gap', ph: 2, q: 'Ich ___ gern im Ausland arbeiten. (werden, Konjunktiv II)', a: 'würde', x: { es: 'würde + gern + infinitivo.', en: 'würde + gern + infinitive.' } },
    { t: 'order', ph: 2, w: ['werde', 'promovieren', 'Ich', 'wahrscheinlich'], a: 'Ich werde wahrscheinlich promovieren.', x: { es: 'werden + … + infinitivo.', en: 'werden + … + infinitive.' } },
    { t: 'transform', ph: 3, p: { es: 'Pásalo a Futur I.', en: 'Put it into Futur I.' }, q: 'Lena schließt ihren Master ab.', a: 'Lena wird ihren Master abschließen.', x: { es: 'wird + infinitivo separable unido al final.', en: 'wird + joined separable infinitive at the end.' } },
    { t: 'transform', ph: 3, p: { es: 'Hazlo más cortés con «würde».', en: 'Make it more polite with “würde”.' }, q: 'Helfen Sie mir!', a: 'Würden Sie mir helfen?', alt: ['Würden Sie mir bitte helfen?'], x: { es: 'Würden Sie + infinitivo?', en: 'Würden Sie + infinitive?' } },
    { t: 'write', ph: 3, s: { es: 'Me gustaría trabajar en Berlín.', en: 'I would like to work in Berlin.' }, a: 'Ich würde gern in Berlin arbeiten.', alt: ['Ich würde gerne in Berlin arbeiten.', 'Ich möchte in Berlin arbeiten.', 'Ich möchte gern in Berlin arbeiten.'], x: { es: 'würde gern + infinitivo.', en: 'würde gern + infinitive.' } },
    { t: 'listen', ph: 3, a: 'Was wirst du nach dem Studium machen?', x: { es: 'Pregunta en Futur I.', en: 'Question in Futur I.' } }
  ],
  summary: [
    { es: 'Futur I = werden (pos. 2) + infinitivo (final); presente + adverbio también expresa futuro.', en: 'Futur I = werden (pos. 2) + infinitive (end); present + adverb also expresses the future.' },
    { es: 'werden: llegar a ser (+ sustantivo/adjetivo), futuro (+ infinitivo), pasiva (+ participio), würde (Konjunktiv II).', en: 'werden: become (+ noun/adjective), future (+ infinitive), passive (+ participle), würde (Konjunktiv II).' },
    { es: 'Futur + wohl = suposición: Er wird wohl krank sein.', en: 'Futur + wohl = supposition: Er wird wohl krank sein.' },
    { es: 'Cortesía: würde + infinitivo; hätte, wäre, könnte, dürfte, möchte.', en: 'Politeness: würde + infinitive; hätte, wäre, könnte, dürfte, möchte.' },
    { es: 'ich will = quiero; ich werde = voy a / llegaré a ser.', en: 'ich will = I want; ich werde = I will / I become.' }
  ]
});

DD.readings.push({
  id: 'r-u20', unit: 'u20', level: 'A2', kind: 'unit',
  de: 'Was wird aus uns?', es: '¿Qué será de nosotros?', en: 'What will become of us?',
  genre: { es: 'Diálogo y escena · serie Leipzig 20', en: 'Dialogue and scene · Leipzig series 20' },
  intro: { es: 'Fin del semestre de invierno. En la cocina de la WG, los tres hablan de sus planes. Después, Mehmet tiene su entrevista de trabajo en Berlín.', en: 'End of the winter semester. In the flat’s kitchen the three talk about their plans. Then Mehmet has his job interview in Berlin.' },
  focus: { es: 'werde / wirst / wird + infinitivo · los usos de werden · Könnten Sie…? Würden Sie…? Ich hätte gern…', en: 'werde / wirst / wird + infinitive · uses of werden · Könnten Sie…? Würden Sie…? Ich hätte gern…' },
  source: { type: 'original' },
  p: [
    ['Ende Februar ist das Wintersemester vorbei. Am Abend sitzen Lena, Mehmet und Tomás in der Küche. Draußen ist es noch kalt, aber die Tage werden schon länger. „Was werdet ihr eigentlich nach dem Studium machen?“, fragt Lena.', 'A fines de febrero termina el semestre de invierno. En la noche Lena, Mehmet y Tomás están sentados en la cocina. Afuera todavía hace frío, pero los días ya se hacen más largos. «¿Qué van a hacer, en realidad, después de los estudios?», pregunta Lena.', 'At the end of February the winter semester is over. In the evening Lena, Mehmet and Tomás are sitting in the kitchen. It is still cold outside, but the days are already getting longer. “So what are you going to do after your studies?” Lena asks.'],
    ['Ich werde wahrscheinlich promovieren. Professorin Weiß hat mir ein Projekt über Wahrnehmung vorgeschlagen. Das wären drei oder vier Jahre in Leipzig. Und danach? Vielleicht kehre ich nach Chile zurück und unterrichte an einer Universität. Oder ich bleibe hier. Ich weiß es noch nicht.', 'Probablemente haré un doctorado. La profesora Weiß me propuso un proyecto sobre percepción. Serían tres o cuatro años en Leipzig. ¿Y después? Quizás vuelva a Chile y dé clases en una universidad. O me quede aquí. Todavía no lo sé.', 'I’ll probably do a PhD. Professor Weiß has suggested a project on perception. That would be three or four years in Leipzig. And then? Maybe I’ll go back to Chile and teach at a university. Or I’ll stay here. I don’t know yet.', 'Tomás'],
    ['Ich werde Psychologin – das ist sicher. Ich würde gern mit Kindern arbeiten. Irgendwann möchte ich eine eigene Praxis gründen. Aber zuerst muss ich meinen Master abschließen.', 'Voy a ser psicóloga: eso es seguro. Me gustaría trabajar con niños. Algún día quiero abrir mi propia consulta. Pero primero tengo que terminar el máster.', 'I’m going to be a psychologist – that’s certain. I’d like to work with children. One day I want to set up my own practice. But first I have to finish my master’s.', 'Lena'],
    ['Und ich? Wenn alles gut geht, werde ich in Berlin bei einer Firma für künstliche Intelligenz arbeiten. Morgen habe ich das Vorstellungsgespräch. Ich bin so nervös!', '¿Y yo? Si todo sale bien, trabajaré en Berlín en una empresa de inteligencia artificial. Mañana tengo la entrevista. ¡Estoy tan nervioso!', 'And me? If all goes well, I’ll be working in Berlin at an artificial intelligence company. Tomorrow I have the interview. I’m so nervous!', 'Mehmet'],
    ['Am nächsten Tag sitzt Mehmet in einem modernen Büro in Berlin. Die Chefin des Teams ist freundlich. „Guten Tag, Herr Yılmaz. Würden Sie sich kurz vorstellen?“ Mehmet erzählt von seinem Studium und seinen Projekten. „Und was sind Ihre Stärken?“ – „Ich bin kreativ und arbeite gern im Team. Meine Schwäche: Manchmal bin ich zu ehrgeizig.“ Die Chefin lacht.', 'Al día siguiente Mehmet está sentado en una oficina moderna en Berlín. La jefa del equipo es amable. «Buenos días, señor Yılmaz. ¿Podría presentarse brevemente?» Mehmet habla de sus estudios y de sus proyectos. «¿Y cuáles son sus fortalezas?» – «Soy creativo y me gusta trabajar en equipo. Mi debilidad: a veces soy demasiado ambicioso.» La jefa se ríe.', 'The next day Mehmet is sitting in a modern office in Berlin. The head of the team is friendly. “Good afternoon, Mr Yılmaz. Would you briefly introduce yourself?” Mehmet talks about his studies and his projects. “And what are your strengths?” – “I’m creative and I like working in a team. My weakness: sometimes I’m too ambitious.” The head of the team laughs.'],
    ['Am Ende fragt Mehmet: „Könnten Sie mir sagen, wann ich eine Antwort bekomme?“ – „Wir werden uns innerhalb einer Woche bei Ihnen melden.“ Im Zug nach Leipzig schreibt Mehmet eine Nachricht an Lena und Tomás: „Es lief gut, glaube ich! Hoffentlich bekomme ich die Stelle. Heute Abend koche ich – das wäre doch eine gute Idee, oder?“', 'Al final Mehmet pregunta: «¿Podría decirme cuándo recibiré una respuesta?» – «Nos pondremos en contacto con usted dentro de una semana.» En el tren a Leipzig Mehmet les escribe un mensaje a Lena y Tomás: «¡Creo que salió bien! Ojalá me den el puesto. Esta noche cocino yo: sería buena idea, ¿no?»', 'At the end Mehmet asks: “Could you tell me when I’ll get an answer?” – “We will get back to you within a week.” On the train to Leipzig Mehmet writes a message to Lena and Tomás: “It went well, I think! Hopefully I’ll get the job. Tonight I’m cooking – that would be a good idea, wouldn’t it?”']
  ],
  gloss: [
    ['Ende', { es: 'final (Ende Februar = a fines de febrero)', en: 'end (Ende Februar = at the end of February)' }],
    ['Wintersemester', { es: 'semestre de invierno', en: 'winter semester' }],
    ['vorbei', { es: 'terminado; pasado', en: 'over' }],
    ['eigentlich', { es: 'en realidad; a todo esto', en: 'actually; by the way' }],
    ['vorgeschlagen', { es: 'propuesto (vorschlagen)', en: 'suggested (vorschlagen)' }],
    ['eigene', { es: 'propia', en: 'own' }],
    ['Büro', { es: 'oficina (das Büro, -s)', en: 'office (das Büro, -s)' }],
    ['Yılmaz', { es: 'Yılmaz (apellido de Mehmet)', en: 'Yılmaz (Mehmet’s surname)' }],
    ['kurz', { es: 'brevemente', en: 'briefly' }],
    ['lief', { es: 'salió; fue (Es lief gut = salió bien; laufen)', en: 'went (Es lief gut; laufen)' }],
    ['oder', { es: '¿no? (al final de la frase)', en: 'right? (tag question)' }]
  ],
  q: [
    { t: 'rf', q: 'Tomás weiß schon genau, wo er nach der Promotion leben wird.', a: false, x: { es: '«Ich weiß es noch nicht.»', en: '“Ich weiß es noch nicht.”' } },
    { t: 'choice', q: 'Was wird Lena?', o: ['Ärztin', 'Psychologin', 'Lehrerin'], a: 1, x: { es: '«Ich werde Psychologin.»', en: '“Ich werde Psychologin.”' } },
    { t: 'choice', q: 'Wo möchte Mehmet arbeiten?', o: ['bei einer Bank in Leipzig', 'bei einer KI-Firma in Berlin', 'an der Universität'], a: 1, x: { es: 'Una empresa de inteligencia artificial en Berlín.', en: 'An artificial intelligence company in Berlin.' } },
    { t: 'rf', q: 'Mehmet sagt, dass er manchmal zu ehrgeizig ist.', a: true, x: { es: 'Es su «debilidad».', en: 'It is his “weakness”.' } },
    { t: 'choice', q: 'Wann bekommt Mehmet eine Antwort?', o: ['morgen', 'innerhalb einer Woche', 'in einem Monat'], a: 1, x: { es: '«…innerhalb einer Woche bei Ihnen melden.»', en: '“…innerhalb einer Woche bei Ihnen melden.”' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u20', ext: true, words: [
  ['n', 'der Arbeitsplatz', 'Arbeitsplätze', 'el puesto de trabajo', 'workplace; job'],
  ['n', 'der Angestellte', 'Angestellten', 'el empleado', 'employee (m.)', { adj: 1, homonym: 1 }],
  ['n', 'die Angestellte', 'Angestellten', 'la empleada', 'employee (f.)', { adj: 1, id: 'noun-angestellte-f', homonym: 1 }],
  ['n', 'der Betrieb', 'Betriebe', 'la empresa; el funcionamiento', 'company; operation'],
  ['n', 'die Agentur', 'Agenturen', 'la agencia', 'agency'],
  ['n', 'der Lohn', 'Löhne', 'el sueldo (por horas)', 'wage'],
  ['n', 'die Kenntnisse', '—', 'los conocimientos', 'knowledge; skills', { plOnly: 1, note: ['gute Deutschkenntnisse.', 'gute Deutschkenntnisse.'] }],
  ['n', 'die Vorbereitung', 'Vorbereitungen', 'la preparación', 'preparation'],
  ['n', 'der Vortrag', 'Vorträge', 'la charla; la conferencia', 'talk; lecture'],
  ['n', 'die Kopie', 'Kopien', 'la copia', 'copy'],
  ['n', 'das Internet', '—', 'internet', 'internet'],
  ['n', 'die Sendung', 'Sendungen', 'el programa (de TV); el envío', 'programme; shipment'],
  ['n', 'der Kanal', 'Kanäle', 'el canal', 'channel; canal'],
  ['v', 'führen', 'führt', 'führte', 'hat geführt', 'conducir; dirigir; llevar', 'lead; run'],
  ['v', 'bieten', 'bietet', 'bot', 'hat geboten', 'ofrecer', 'offer'],
  ['v', 'leisten', 'leistet', 'leistete', 'hat geleistet', 'rendir; lograr', 'achieve; perform', { note: ['sich etwas leisten = darse el lujo de algo.', 'sich etwas leisten = afford something.'] }],
  ['v', 'erwarten', 'erwartet', 'erwartete', 'hat erwartet', 'esperar (algo); contar con', 'expect'],
  ['v', 'an|nehmen', 'nimmt an', 'nahm an', 'hat angenommen', 'aceptar; suponer', 'accept; assume'],
  ['v', 'übernehmen', 'übernimmt', 'übernahm', 'hat übernommen', 'asumir; hacerse cargo de', 'take over; take on'],
  ['v', 'unterstützen', 'unterstützt', 'unterstützte', 'hat unterstützt', 'apoyar', 'support'],
  ['v', 'kopieren', 'kopiert', 'kopierte', 'hat kopiert', 'copiar', 'copy'],
  ['v', 'liefern', 'liefert', 'lieferte', 'hat geliefert', 'entregar; repartir; proporcionar', 'deliver; supply'],
  ['v', 'senden', 'sendet', 'sendete', 'hat gesendet', 'enviar; transmitir', 'send; broadcast', { forms: { sandte: 'prt.3s', gesandt: 'pp' } }],
  ['a', 'arbeitslos', '—', '—', 'cesante', 'unemployed'],
  ['a', 'beruflich', '—', '—', 'profesional; laboral', 'professional; work-related'],
  ['a', 'persönlich', '—', '—', 'personal; en persona', 'personal; in person'],
  ['a', 'privat', '—', '—', 'privado', 'private'],
  ['a', 'bereit', '—', '—', 'dispuesto; listo', 'ready; willing']
] });
