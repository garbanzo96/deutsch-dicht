/* U31 · Sie sagte, sie sei müde */
DD.lexicon.push({ unit: 'u31', words: [
  ['v', 'betonen', 'betont', 'betonte', 'hat betont', 'subrayar; recalcar', 'stress; emphasise'],
  ['v', 'versichern', 'versichert', 'versicherte', 'hat versichert', 'asegurar; garantizar', 'assure'],
  ['v', 'bestreiten', 'bestreitet', 'bestritt', 'hat bestritten', 'negar; disputar', 'deny; dispute'],
  ['v', 'zweifeln', 'zweifelt', 'zweifelte', 'hat gezweifelt', 'dudar', 'doubt', { rek: 'an + D' }],
  ['v', 'beweisen', 'beweist', 'bewies', 'hat bewiesen', 'demostrar; probar', 'prove'],
  ['v', 'unterscheiden', 'unterscheidet', 'unterschied', 'hat unterschieden', 'distinguir', 'distinguish', { note: ['sich unterscheiden von + D = diferenciarse de.', 'sich unterscheiden von + D = differ from.'] }],
  ['v', 'zusammen|fassen', 'fasst zusammen', 'fasste zusammen', 'hat zusammengefasst', 'resumir', 'summarise'],
  ['v', 'zitieren', 'zitiert', 'zitierte', 'hat zitiert', 'citar', 'quote'],
  ['prep', 'zufolge', 'según', 'according to', { case: 'D', note: ['Va detrás: dem Bericht zufolge.', 'Follows the noun: dem Bericht zufolge.'] }],
  ['n', 'die Angabe', 'Angaben', 'el dato; la indicación', 'statement; information', { note: ['nach Angaben der Polizei = según la policía.', 'nach Angaben der Polizei = according to the police.'] }],
  ['n', 'die Behauptung', 'Behauptungen', 'la afirmación', 'claim'],
  ['n', 'das Interview', 'Interviews', 'la entrevista', 'interview'],
  ['n', 'der Zweifel', 'Zweifel', 'la duda', 'doubt'],
  ['n', 'der Beweis', 'Beweise', 'la prueba', 'proof; evidence'],
  ['n', 'die Theorie', 'Theorien', 'la teoría', 'theory'],
  ['n', 'der Mythos', 'Mythen', 'el mito', 'myth'],
  ['n', 'der Faktor', 'Faktoren', 'el factor', 'factor'],
  ['n', 'die Motivation', 'Motivationen', 'la motivación', 'motivation'],
  ['n', 'der Akzent', 'Akzente', 'el acento', 'accent'],
  ['n', 'das Niveau', 'Niveaus', 'el nivel', 'level'],
  ['n', 'der Kontakt', 'Kontakte', 'el contacto', 'contact'],
  ['n', 'die Pubertät', '—', 'la pubertad', 'puberty'],
  ['n', 'die Sprachwissenschaftlerin', 'Sprachwissenschaftlerinnen', 'la lingüista', 'linguist (f.)'],
  ['n', 'der Sprachwissenschaftler', 'Sprachwissenschaftler', 'el lingüista', 'linguist (m.)'],
  ['n', 'der Leser', 'Leser', 'el lector', 'reader (m.)'],
  ['n', 'die Leserin', 'Leserinnen', 'la lectora', 'reader (f.)'],
  ['n', 'die Zusammenfassung', 'Zusammenfassungen', 'el resumen', 'summary'],
  ['n', 'das Fazit', 'Fazits', 'la conclusión', 'conclusion'],
  ['a', 'kritisch', null, null, 'crítico', 'critical'],
  ['a', 'zweisprachig', '—', '—', 'bilingüe', 'bilingual'],
  ['a', 'motiviert', null, null, 'motivado', 'motivated'],
  ['a', 'intensiv', null, null, 'intensivo', 'intensive'],
  ['a', 'entscheidend', '—', '—', 'decisivo', 'decisive'],
  ['adv', 'tatsächlich', 'efectivamente; de hecho', 'actually; indeed'],
  ['adv', 'hingegen', 'en cambio', 'on the other hand; whereas'],
  ['adv', 'zudem', 'además', 'moreover'],
  ['phr', 'nach eigenen Angaben', 'según sus propias palabras', 'by their own account']
] });

DD.unit('u31', {
  minutes: 65,
  goals: [
    { es: 'Formar el Konjunktiv I (er sei, habe, komme, könne) y saber cuándo se sustituye por el Konjunktiv II.', en: 'Form the Konjunktiv I (er sei, habe, komme, könne) and know when the Konjunktiv II replaces it.' },
    { es: 'Transformar estilo directo en indirecto: afirmaciones, preguntas y órdenes, en presente, pasado y futuro.', en: 'Turn direct into indirect speech: statements, questions and commands, in present, past and future.' },
    { es: 'Leer y escribir textos periodísticos que refieren posiciones con distancia (laut, zufolge, nach Angaben).', en: 'Read and write journalistic texts that report positions with distance (laut, zufolge, nach Angaben).' }
  ],
  grammar: ['g-k1', 'g-indirect-speech'],
  lesson: [
    { b: 'concept', de: 'Konjunktiv I', t: { es: 'Es el modo de la cita: el hablante refiere lo que otro dijo sin hacerse responsable. Se forma con la raíz del infinitivo + -e, -est, -e, -en, -et, -en. En la práctica se usa sobre todo en 3.ª persona singular: er komme, sie habe, es gebe. Es típico de noticias, informes y textos académicos.', en: 'It is the mood of quotation: the speaker reports what someone else said without vouching for it. It is formed from the infinitive stem + -e, -est, -e, -en, -et, -en. In practice it is used mainly in the 3rd person singular: er komme, sie habe, es gebe. Typical of news, reports and academic texts.' } },
    { b: 'table', h: { es: 'Formas del Konjunktiv I', en: 'Konjunktiv I forms' }, c: ['', 'sein', 'haben', 'kommen', 'können', 'werden'], r: [
      ['ich', 'sei', '(habe → hätte)', '(komme → käme)', 'könne', '(werde → würde)'],
      ['du', 'sei(e)st', 'hab[est]', 'komm[est]', 'könn[est]', 'werd[est]'],
      ['er / sie / es', '[sei]', 'hab[e]', 'komm[e]', 'könn[e]', 'werd[e]'],
      ['wir', 'seien', '(haben → hätten)', '(kommen → kämen)', '(können → könnten)', '(werden → würden)'],
      ['ihr', 'seiet', 'hab[et]', 'komm[et]', 'könn[et]', 'werd[et]'],
      ['sie / Sie', 'seien', '(haben → hätten)', '(kommen → kämen)', '(können → könnten)', '(werden → würden)']
    ], n: { es: 'Entre paréntesis: la forma de K1 coincide con el indicativo, así que se usa el Konjunktiv II (o würde + infinitivo). sein es la única forma totalmente distinta en todas las personas.', en: 'In brackets: the K1 form is identical to the indicative, so the Konjunktiv II (or würde + infinitive) is used instead. sein is the only verb distinct in every person.' } },
    { b: 'concept', de: 'Ersatzregel', t: { es: 'Regla de sustitución: si el Konjunktiv I es igual al indicativo, se usa el Konjunktiv II; si este también es igual al Präteritum (verbos regulares), se usa würde + infinitivo. Sie sagen, sie [hätten] keine Zeit. Sie sagen, sie [würden] morgen [arbeiten].', en: 'Replacement rule: if the Konjunktiv I equals the indicative, use the Konjunktiv II; if that also equals the Präteritum (regular verbs), use würde + infinitive. Sie sagen, sie [hätten] keine Zeit. Sie sagen, sie [würden] morgen [arbeiten].' } },
    { b: 'table', h: { es: 'Los tres tiempos del discurso indirecto', en: 'The three times of indirect speech' }, c: [{ es: 'Directo', en: 'Direct' }, { es: 'Indirecto', en: 'Indirect' }, { es: 'Forma', en: 'Form' }], r: [
      ['„Ich [bin] müde.“', 'Sie sagt, sie [sei] müde.', { es: 'presente: K1', en: 'present: K1' }],
      ['„Ich [war] / [bin] müde [gewesen].“', 'Sie sagt, sie [sei] müde [gewesen].', { es: 'pasado: sei / habe + PII', en: 'past: sei / habe + PII' }],
      ['„Ich [habe] es [gewusst].“', 'Er sagt, er [habe] es [gewusst].', { es: 'pasado: habe + PII', en: 'past: habe + PII' }],
      ['„Ich [werde] [kommen].“', 'Er sagt, er [werde] [kommen].', { es: 'futuro: werde + inf.', en: 'future: werde + inf.' }],
      ['„Das Haus [wird] [gebaut].“', 'Es heißt, das Haus [werde] [gebaut].', { es: 'pasiva: werde + PII', en: 'passive: werde + PII' }]
    ], n: { es: 'El discurso indirecto tiene solo tres tiempos: Präteritum, Perfekt y Plusquamperfekt del original se convierten todos en sei / habe + participio.', en: 'Indirect speech has only three times: the original Präteritum, Perfekt and Plusquamperfekt all become sei / habe + participle.' } },
    { b: 'table', h: { es: 'Preguntas y órdenes', en: 'Questions and commands' }, c: [{ es: 'Directo', en: 'Direct' }, { es: 'Indirecto', en: 'Indirect' }], r: [
      ['„[Hast] du Zeit?“', 'Sie fragt, [ob] er Zeit [habe].'],
      ['„Wann [kommst] du?“', 'Sie fragt, [wann] er [komme].'],
      ['„[Warte]!“', 'Er sagt, ich [solle] warten.'],
      ['„Bitte [nehmen] Sie Platz!“', 'Sie bat ihn, er [möge] Platz nehmen.']
    ], n: { es: 'Preguntas sí/no → ob; preguntas W → la misma palabra W; imperativo → sollen (orden) o mögen (ruego formal). Las personas cambian según la perspectiva: ich → er/sie, du → ich…', en: 'Yes/no questions → ob; W-questions → the same W-word; imperative → sollen (order) or mögen (formal request). Persons shift with perspective: ich → er/sie, du → ich…' } },
    { b: 'list', h: { es: 'Verbos y fórmulas para referir', en: 'Reporting verbs and phrases' }, cols: 2, r: [
      ['sagen · erklären · meinen', { es: 'decir · explicar · opinar', en: 'say · explain · think' }], ['betonen · versichern', { es: 'subrayar · asegurar', en: 'stress · assure' }],
      ['behaupten · bestreiten', { es: 'afirmar · negar', en: 'claim · deny' }], ['zugeben · vermuten', { es: 'admitir · suponer', en: 'admit · suppose' }],
      ['[laut] dem Bericht', { es: 'según el informe', en: 'according to the report' }], ['dem Bericht [zufolge]', { es: 'según el informe (pospuesto)', en: 'according to the report (postposed)' }],
      ['[nach Angaben] der Polizei', { es: 'según datos de la policía', en: 'according to the police' }], ['[wie] sie [sagt], …', { es: 'como dice ella…', en: 'as she says…' }]
    ] },
    { b: 'note', tone: 'tip', t: { es: 'Con dass el verbo va al final; sin dass, el discurso indirecto mantiene el verbo en posición 2: Sie sagt, dass sie müde sei = Sie sagt, sie sei müde. En la conversación casi siempre se usa el indicativo; el K1 marca registro escrito y distancia.', en: 'With dass the verb goes to the end; without dass, indirect speech keeps the verb in position 2: Sie sagt, dass sie müde sei = Sie sagt, sie sei müde. In conversation the indicative is almost always used; K1 marks written register and distance.' } },
    { b: 'note', tone: 'l1', t: { es: 'El español no tiene un modo especial para citar; usa el indicativo o cambia el tiempo (dijo que estaba cansada). El Konjunktiv I no implica duda: solo indica «esto lo dice otro».', en: 'English has no special mood for quoting; it backshifts tenses (she said she was tired). The Konjunktiv I does not imply doubt: it only signals “someone else says this”.' } }
  ],
  chunks: [
    ['Sie sagte, sie sei müde.', 'Dijo que estaba cansada.', 'She said she was tired.'],
    ['Er behauptet, er habe nichts gewusst.', 'Afirma que no sabía nada.', 'He claims he didn’t know anything.'],
    ['Laut dem Bericht gebe es keine Beweise.', 'Según el informe, no habría pruebas.', 'According to the report there is no evidence.'],
    ['Sie fragte, ob ich Zeit hätte.', 'Preguntó si yo tenía tiempo.', 'She asked whether I had time.'],
    ['Der Arzt sagte, ich solle mich ausruhen.', 'El médico dijo que debía descansar.', 'The doctor said I should rest.']
  ],
  errors: [
    ['Er sagt, er ist müde. (en una noticia)', 'Er sagt, er sei müde.', { es: 'Registro escrito y distancia: K1.', en: 'Written register and distance: K1.' }],
    ['Sie sagen, sie haben keine Zeit. (K1 = indicativo)', 'Sie sagen, sie hätten keine Zeit.', { es: 'Ersatzregel: K1 = indicativo → K2.', en: 'Replacement rule: K1 = indicative → K2.' }],
    ['Er sagte, er sei gestern gekommen war.', 'Er sagte, er sei gestern gekommen.', { es: 'Pasado indirecto: sei / habe + PII, sin más.', en: 'Indirect past: sei / habe + PII, nothing more.' }],
    ['Sie fragt, ob er hat Zeit.', 'Sie fragt, ob er Zeit habe.', { es: 'ob introduce subordinada: verbo al final.', en: 'ob introduces a subordinate clause: verb last.' }],
    ['Er sagte, ich warte.', 'Er sagte, ich solle warten.', { es: 'Imperativo indirecto: sollen.', en: 'Indirect imperative: sollen.' }]
  ],
  examples: [
    ['Die Ministerin betonte, die Lage sei unter Kontrolle.', 'La ministra subrayó que la situación estaba bajo control.', 'The minister stressed that the situation was under control.'],
    ['Der Angeklagte bestreitet, das Geld genommen zu haben.', 'El acusado niega haber tomado el dinero.', 'The accused denies having taken the money.'],
    ['Nach Angaben der Polizei sei niemand verletzt worden.', 'Según la policía, nadie habría resultado herido.', 'According to the police, nobody was injured.'],
    ['Er fragte, wann der nächste Zug fahre.', 'Preguntó cuándo salía el próximo tren.', 'He asked when the next train would leave.'],
    ['Sie meinte, man könne das auch anders sehen.', 'Opinó que eso también se podía ver de otra manera.', 'She thought one could see it differently too.'],
    ['Dem Bericht zufolge werde die Brücke im Mai repariert.', 'Según el informe, el puente se repararía en mayo.', 'According to the report, the bridge will be repaired in May.']
  ],
  reading: 'r-u31',
  exercises: [
    { t: 'choice', ph: 1, q: 'Er sagt, er ___ krank.', o: ['ist', 'sei', 'wäre'], a: 1, x: { es: 'sein → er sei.', en: 'sein → er sei.' } },
    { t: 'choice', ph: 1, q: 'Sie sagen, sie ___ keine Zeit.', o: ['haben', 'hätten', 'habe'], a: 1, x: { es: 'sie haben (K1) = indicativo → K2 hätten.', en: 'sie haben (K1) = indicative → K2 hätten.' } },
    { t: 'choice', ph: 1, q: 'Sie fragt, ___ ich mitkomme.', o: ['dass', 'ob', 'wenn'], a: 1, x: { es: 'Pregunta sí/no indirecta: ob.', en: 'Indirect yes/no question: ob.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona estilo directo e indirecto.', en: 'Match direct and indirect speech.' }, pairs: [['„Ich komme.“', 'Er sagt, er komme.'], ['„Ich bin gekommen.“', 'Er sagt, er sei gekommen.'], ['„Ich werde kommen.“', 'Er sagt, er werde kommen.'], ['„Komm!“', 'Er sagt, ich solle kommen.']], x: { es: 'Tres tiempos + imperativo.', en: 'Three times + imperative.' } },
    { t: 'rf', ph: 1, q: '«Laut Polizei sei niemand verletzt worden» significa que el periodista duda de la policía.', a: false, x: { es: 'K1 = distancia neutral, no duda.', en: 'K1 = neutral distance, not doubt.' } },
    { t: 'choice', ph: 1, q: 'Dem Bericht ___ gibt es keine Beweise.', o: ['laut', 'zufolge', 'nach'], a: 1, x: { es: 'zufolge va detrás, con dativo.', en: 'zufolge follows the noun, with the dative.' } },
    { t: 'gap', ph: 2, q: 'Er behauptet, er ___ nichts gewusst. (haben)', a: 'habe', x: { es: 'Pasado: habe + PII.', en: 'Past: habe + PII.' } },
    { t: 'gap', ph: 2, q: 'Sie sagte, sie ___ gestern in Berlin gewesen. (sein)', a: 'sei', x: { es: 'Pasado: sei + PII.', en: 'Past: sei + PII.' } },
    { t: 'gap', ph: 2, q: 'Der Minister erklärte, man ___ das Problem lösen. (können)', a: 'könne', x: { es: 'können → er könne.', en: 'können → er könne.' } },
    { t: 'gap', ph: 2, q: 'Die Ärztin sagte, ich ___ mehr schlafen. (sollen)', a: 'solle', x: { es: 'Imperativo indirecto: solle.', en: 'Indirect imperative: solle.' } },
    { t: 'gap', ph: 2, q: 'Er fragte, wann der Zug ___. (fahren)', a: 'fahre', x: { es: 'fahren → er fahre (sin Umlaut en K1).', en: 'fahren → er fahre (no umlaut in K1).' } },
    { t: 'gap', ph: 2, q: 'Laut Bericht ___ die Brücke im Mai repariert. (werden)', a: 'werde', x: { es: 'Pasiva indirecta: werde + PII.', en: 'Indirect passive: werde + PII.' } },
    { t: 'order', ph: 2, w: ['Sie', 'fragte', ',', 'ob', 'ich', 'Zeit', 'hätte'], a: 'Sie fragte, ob ich Zeit hätte.', x: { es: 'ob + verbo al final; ich habe → hätte.', en: 'ob + verb last; ich habe → hätte.' } },
    { t: 'transform', ph: 3, p: { es: 'Pasa a estilo indirecto (sin dass).', en: 'Turn into indirect speech (without dass).' }, q: 'Lena sagt: „Ich bin müde.“', a: 'Lena sagt, sie sei müde.', x: { es: 'ich → sie; bin → sei.', en: 'ich → sie; bin → sei.' } },
    { t: 'transform', ph: 3, p: { es: 'Pasa a estilo indirecto (sin dass).', en: 'Turn into indirect speech (without dass).' }, q: 'Mehmet sagt: „Ich habe die Stelle bekommen.“', a: 'Mehmet sagt, er habe die Stelle bekommen.', x: { es: 'Pasado: habe + PII.', en: 'Past: habe + PII.' } },
    { t: 'transform', ph: 3, p: { es: 'Pasa a estilo indirecto.', en: 'Turn into indirect speech.' }, q: 'Tomás fragt: „Kommst du mit?“', a: 'Tomás fragt, ob ich mitkomme.', alt: ['Tomás fragt, ob ich mitkäme.', 'Tomás fragt, ob er mitkomme.'], x: { es: 'Pregunta sí/no → ob; du → ich (perspectiva).', en: 'Yes/no question → ob; du → ich (perspective).' } },
    { t: 'write', ph: 3, s: { es: 'Según la policía, nadie resultó herido. (nach Angaben, K1)', en: 'According to the police, nobody was injured. (nach Angaben, K1)' }, a: 'Nach Angaben der Polizei sei niemand verletzt worden.', alt: ['Nach Angaben der Polizei wurde niemand verletzt.'], x: { es: 'Pasiva pasada en K1: sei … worden.', en: 'Past passive in K1: sei … worden.' } },
    { t: 'listen', ph: 3, a: 'Sie sagte, sie sei müde.', x: { es: 'sei = K1 de sein.', en: 'sei = K1 of sein.' } }
  ],
  summary: [
    { es: 'K1 = raíz + -e (er komme, habe, könne, werde); sein: sei, seien. Uso: citar con distancia.', en: 'K1 = stem + -e (er komme, habe, könne, werde); sein: sei, seien. Use: quoting with distance.' },
    { es: 'Si K1 = indicativo → K2 (hätten, kämen); si K2 = Präteritum → würde + infinitivo.', en: 'If K1 = indicative → K2 (hätten, kämen); if K2 = Präteritum → würde + infinitive.' },
    { es: 'Tres tiempos: er sei / habe (presente) · sei / habe + PII (pasado) · werde + inf. (futuro).', en: 'Three times: er sei / habe (present) · sei / habe + PII (past) · werde + inf. (future).' },
    { es: 'Preguntas: ob / palabra W + verbo al final. Órdenes: sollen; ruegos formales: möge.', en: 'Questions: ob / W-word + verb last. Commands: sollen; formal requests: möge.' }
  ]
});

DD.readings.push({
  id: 'r-u31', unit: 'u31', level: 'B2', kind: 'unit',
  de: 'Lernen Erwachsene schlechter?', es: '¿Aprenden peor los adultos?', en: 'Do adults learn worse?',
  genre: { es: 'Reportaje con entrevista · serie Leipzig 31', en: 'Report with interview · Leipzig series 31' },
  intro: { es: 'Un diario de Leipzig resume una charla de una lingüista (personaje ficticio) sobre la edad y el aprendizaje de lenguas. Casi todo está en discurso indirecto. Los datos de investigación citados son reales y están simplificados.', en: 'A Leipzig newspaper summarises a talk by a linguist (fictional character) on age and language learning. Almost everything is in indirect speech. The research cited is real and simplified.' },
  focus: { es: 'sei, habe, könne, gebe, werde · hätten / würden (Ersatzregel) · ob · laut, zufolge, nach Angaben.', en: 'sei, habe, könne, gebe, werde · hätten / würden (replacement rule) · ob · laut, zufolge, nach Angaben.' },
  source: { type: 'original' },
  p: [
    ['„Kinder lernen Sprachen einfach besser“ – diesen Satz hört Dr. Anna Krüger fast jeden Tag. Die Sprachwissenschaftlerin der Universität Leipzig hielt am Dienstag einen Vortrag im Rathaus. Der Satz sei nicht falsch, sagte sie, aber er sei zu einfach. Man müsse genau unterscheiden, was man meine: die Aussprache, die Grammatik oder den Wortschatz.', '«Los niños simplemente aprenden mejor los idiomas»: esa frase la escucha la Dra. Anna Krüger casi todos los días. La lingüista de la Universidad de Leipzig dio una charla el martes en el Ayuntamiento. La frase no es falsa, dijo, pero es demasiado simple. Hay que distinguir con precisión qué se quiere decir: la pronunciación, la gramática o el vocabulario.', '“Children simply learn languages better” – Dr Anna Krüger hears this sentence almost every day. The linguist from Leipzig University gave a talk at the town hall on Tuesday. The sentence is not wrong, she said, but it is too simple. One must distinguish exactly what one means: pronunciation, grammar or vocabulary.'],
    ['Bei der Aussprache hätten Kinder tatsächlich einen Vorteil, erklärte Krüger. Wer erst als Erwachsener anfange, behalte meistens einen Akzent. Das sei aber kein Problem, betonte sie: Ein Akzent mache niemanden schwerer verständlich, wenn Grammatik und Wortschatz stimmten. Am Anfang lernten Erwachsene sogar schneller als Kinder, weil sie Regeln bewusst verstehen und Strategien verwenden könnten.', 'En la pronunciación los niños sí tendrían una ventaja, explicó Krüger. Quien empieza recién de adulto suele conservar un acento. Pero eso no es un problema, subrayó: un acento no hace a nadie más difícil de entender si la gramática y el vocabulario son correctos. Al principio los adultos incluso aprenderían más rápido que los niños, porque pueden entender las reglas de forma consciente y usar estrategias.', 'In pronunciation children do have an advantage, Krüger explained. Anyone who only starts as an adult usually keeps an accent. But that is not a problem, she stressed: an accent makes no one harder to understand if grammar and vocabulary are right. At the start, adults even learn faster than children, because they can understand rules consciously and use strategies.'],
    ['Krüger zitierte eine große Online-Studie aus dem Jahr 2018 mit fast 670 000 Teilnehmern. Dieser Studie zufolge bleibe die Fähigkeit, Grammatik zu lernen, bis etwa zum Alter von 17 Jahren sehr hoch und nehme erst danach langsam ab. Wer ein Niveau wie ein Muttersprachler erreichen wolle, solle allerdings früh anfangen. Für die meisten Erwachsenen sei das aber gar nicht das Ziel, sagte Krüger. Sie wollten im Alltag, im Studium oder im Beruf sicher kommunizieren – und das sei in jedem Alter möglich.', 'Krüger citó un gran estudio en línea del año 2018 con casi 670 000 participantes. Según este estudio, la capacidad de aprender gramática se mantiene muy alta hasta los 17 años aproximadamente y solo después disminuye lentamente. Quien quiera alcanzar un nivel como el de un hablante nativo debería, eso sí, empezar temprano. Pero para la mayoría de los adultos ese no es en absoluto el objetivo, dijo Krüger. Quieren comunicarse con seguridad en la vida diaria, en los estudios o en el trabajo, y eso es posible a cualquier edad.', 'Krüger cited a large online study from 2018 with almost 670,000 participants. According to this study, the ability to learn grammar remains very high until about the age of 17 and only declines slowly after that. Anyone who wants to reach native-like level should, however, start early. But for most adults that is not the goal at all, Krüger said. They want to communicate confidently in everyday life, at university or at work – and that is possible at any age.'],
    ['Eine Zuhörerin fragte, ob man nach der Pubertät überhaupt noch eine Sprache richtig lernen könne. Das sei ein Mythos, antwortete Krüger. Entscheidend seien andere Faktoren: Motivation, die Zeit, die man investiere, und vor allem der Kontakt mit der Sprache. Wer täglich lese, höre und spreche, werde Fortschritte machen. Ein Student aus Chile, der seit einem Jahr in Leipzig lebt, bestätigte das nach dem Vortrag gegenüber unserer Zeitung. Er habe am Anfang gezweifelt, sagte er, aber heute denke er manchmal schon auf Deutsch.', 'Una asistente preguntó si después de la pubertad todavía se puede aprender bien un idioma. Eso es un mito, respondió Krüger. Lo decisivo son otros factores: la motivación, el tiempo que uno invierte y, sobre todo, el contacto con la lengua. Quien lee, escucha y habla a diario hará progresos. Un estudiante de Chile, que vive hace un año en Leipzig, lo confirmó a nuestro diario después de la charla. Al principio había dudado, dijo, pero hoy a veces ya piensa en alemán.', 'A member of the audience asked whether one could still learn a language properly at all after puberty. That is a myth, Krüger answered. Other factors are decisive: motivation, the time one invests and, above all, contact with the language. Anyone who reads, listens and speaks daily will make progress. A student from Chile who has been living in Leipzig for a year confirmed this to our newspaper after the talk. He had had doubts at first, he said, but today he sometimes already thinks in German.']
  ],
  gloss: [
    ['Dr', { es: 'Dra. (Doktor/in)', en: 'Dr' }],
    ['Anna', { es: 'Anna (nombre)', en: 'Anna (name)' }],
    ['Krüger', { es: 'Krüger (apellido, personaje ficticio)', en: 'Krüger (surname, fictional character)' }],
    ['hielt', { es: 'dio (einen Vortrag halten = dar una charla)', en: 'gave (einen Vortrag halten)' }],
    ['behalte', { es: 'conserva (behalten, K1)', en: 'keeps (behalten, K1)' }],
    ['verständlich', { es: 'comprensible', en: 'understandable' }],
    ['bewusst', { es: 'de forma consciente', en: 'consciously' }],
    ['Strategien', { es: 'estrategias', en: 'strategies' }],
    ['Online-Studie', { es: 'estudio en línea', en: 'online study' }],
    ['nehme', { es: 'disminuye (abnehmen, K1)', en: 'decreases (abnehmen, K1)' }],
    ['danach', { es: 'después', en: 'afterwards' }],
    ['kommunizieren', { es: 'comunicarse', en: 'communicate' }],
    ['Zuhörerin', { es: 'oyente; asistente', en: 'listener' }],
    ['investiere', { es: 'invierte (investieren, K1)', en: 'invests (investieren, K1)' }],
    ['Fortschritte', { es: 'progresos (der Fortschritt)', en: 'progress' }],
    ['bestätigte', { es: 'confirmó (bestätigen)', en: 'confirmed (bestätigen)' }]
  ],
  q: [
    { t: 'rf', q: 'Krüger sagt, der Satz „Kinder lernen Sprachen besser“ sei völlig falsch.', a: false, x: { es: 'No es falso, sino demasiado simple.', en: 'Not wrong, but too simple.' } },
    { t: 'choice', q: 'Wo haben Kinder laut Krüger einen klaren Vorteil?', o: ['beim Wortschatz', 'bei der Aussprache', 'bei den Regeln'], a: 1, x: { es: 'En la pronunciación.', en: 'In pronunciation.' } },
    { t: 'choice', q: 'Warum lernen Erwachsene am Anfang schneller?', o: ['weil sie mehr Zeit haben', 'weil sie Regeln bewusst verstehen und Strategien verwenden', 'weil sie keinen Akzent haben'], a: 1, x: { es: 'Comprensión consciente y estrategias.', en: 'Conscious understanding and strategies.' } },
    { t: 'rf', q: 'Der Studie zufolge nimmt die Fähigkeit, Grammatik zu lernen, schon mit zehn Jahren stark ab.', a: false, x: { es: 'Se mantiene alta hasta los 17 aprox.', en: 'It stays high until about 17.' } },
    { t: 'choice', q: 'Was ist laut Krüger entscheidend?', o: ['das Alter', 'Motivation, Zeit und Kontakt mit der Sprache', 'ein guter Akzent'], a: 1, x: { es: 'Motivación, tiempo y contacto.', en: 'Motivation, time and contact.' } }
  ]
});
