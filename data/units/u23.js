/* U23 · Wenn ich Zeit hätte … */
DD.lexicon.push({ unit: 'u23', words: [
  ['conj', 'als ob', 'como si', 'as if', { id: 'conj-als-ob', type: 'sub', note: ['Con Konjunktiv II: Er tut so, als ob er alles wüsste.', 'With Konjunktiv II: Er tut so, als ob er alles wüsste.'] }],
  ['v', 'vermuten', 'vermutet', 'vermutete', 'hat vermutet', 'suponer', 'suppose'],
  ['v', 'tauschen', 'tauscht', 'tauschte', 'hat getauscht', 'intercambiar', 'swap; exchange'],
  ['v', 'verwandeln', 'verwandelt', 'verwandelte', 'hat verwandelt', 'transformar (sich verwandeln = transformarse)', 'transform'],
  ['v', 'aus|geben', 'gibt aus', 'gab aus', 'hat ausgegeben', 'gastar (dinero)', 'spend (money)'],
  ['v', 'spenden', 'spendet', 'spendete', 'hat gespendet', 'donar', 'donate'],
  ['v', 'existieren', 'existiert', 'existierte', 'hat existiert', 'existir', 'exist'],
  ['v', 'überlegen', 'überlegt', 'überlegte', 'hat überlegt', 'pensar; considerar (sich etwas überlegen)', 'consider; think over'],
  ['n', 'das Lotto', '—', 'la lotería', 'lottery'],
  ['n', 'der Wunsch', 'Wünsche', 'el deseo', 'wish'],
  ['n', 'die Fantasie', 'Fantasien', 'la imaginación; la fantasía', 'imagination'],
  ['n', 'die Vorstellung', 'Vorstellungen', 'la idea; la representación; la función', 'idea; notion; performance'],
  ['n', 'das Gedankenexperiment', 'Gedankenexperimente', 'el experimento mental', 'thought experiment'],
  ['n', 'der Gedanke', 'Gedanken', 'el pensamiento; la idea', 'thought', { n: 1, gen: 'des Gedankens' }],
  ['n', 'die Identität', 'Identitäten', 'la identidad', 'identity'],
  ['n', 'der Ratschlag', 'Ratschläge', 'el consejo', 'piece of advice'],
  ['n', 'der Rat', '—', 'el consejo', 'advice'],
  ['n', 'die Insel', 'Inseln', 'la isla', 'island'],
  ['n', 'das Vermögen', 'Vermögen', 'la fortuna; la capacidad', 'fortune; capacity'],
  ['a', 'irreal', '—', '—', 'irreal', 'unreal'],
  ['a', 'hypothetisch', '—', '—', 'hipotético', 'hypothetical'],
  ['a', 'derselbe', '—', '—', 'el mismo', 'the same', { forms: { derselbe: 'decl', dieselbe: 'decl', dasselbe: 'decl', denselben: 'decl', demselben: 'decl', derselben: 'decl', dieselben: 'decl', desselben: 'decl' } }],
  ['adv', 'lieber', 'más bien; preferiblemente', 'rather; preferably', { id: 'adv-lieber', note: ['Du solltest lieber … = Mejor deberías…', 'Du solltest lieber … = You’d better…'] }],
  ['phr', 'An deiner Stelle würde ich …', 'yo que tú…; en tu lugar…', 'if I were you, I would…'],
  ['phr', 'Ich wünschte, …', 'ojalá…; quisiera que…', 'I wish…'],
  ['phr', 'Was wäre, wenn …?', '¿qué pasaría si…?', 'what if…?'],
  ['phr', 'Wie wäre es mit …?', '¿qué tal si…?', 'how about…?'],
  ['name', 'John Locke', 'John Locke (1632–1704), filósofo inglés', 'John Locke (1632–1704), English philosopher']
] });

DD.unit('u23', {
  minutes: 60,
  goals: [
    { es: 'Formar el Konjunktiv II de presente: würde + infinitivo y las formas simples (wäre, hätte, könnte, wüsste, käme…).', en: 'Form the present Konjunktiv II: würde + infinitive and simple forms (wäre, hätte, könnte, wüsste, käme…).' },
    { es: 'Expresar condiciones irreales, deseos, consejos y comparaciones irreales (als ob).', en: 'Express unreal conditions, wishes, advice and unreal comparisons (als ob).' },
    { es: 'Razonar sobre hipótesis y experimentos mentales.', en: 'Reason about hypotheses and thought experiments.' }
  ],
  grammar: ['g-k2', 'g-conditional'],
  lesson: [
    { b: 'concept', de: 'Konjunktiv II', t: { es: 'Es el modo de lo irreal, lo hipotético y lo cortés. En la mayoría de los verbos se forma con würde + infinitivo. Con sein, haben, los modales, wissen y algunos verbos fuertes frecuentes se usa la forma simple, derivada del Präteritum con Umlaut.', en: 'It is the mood of the unreal, the hypothetical and the polite. Most verbs use würde + infinitive. sein, haben, the modals, wissen and some frequent strong verbs use the simple form, derived from the Präteritum with umlaut.' } },
    { b: 'concept', de: 'irreale Bedingung', t: { es: 'Condición irreal = Konjunktiv II en las dos partes: Wenn ich Zeit [hätte], [würde] ich mehr lesen. Sin wenn, el verbo va primero: [Hätte] ich Zeit, [würde] ich mehr lesen.', en: 'Unreal condition = Konjunktiv II in both parts: Wenn ich Zeit hätte, würde ich mehr lesen. Without wenn, the verb comes first: Hätte ich Zeit, würde ich mehr lesen.' } },
    { b: 'table', h: { es: 'Formas simples frecuentes', en: 'Frequent simple forms' }, c: ['Infinitiv', 'Präteritum', 'Konjunktiv II', { es: 'Ejemplo', en: 'Example' }], r: [
      ['sein', 'war', 'w[ä]re', 'Das [wäre] toll.'], ['haben', 'hatte', 'h[ä]tte', 'Ich [hätte] gern Zeit.'], ['werden', 'wurde', 'w[ü]rde', 'Ich [würde] reisen.'],
      ['können', 'konnte', 'k[ö]nnte', 'Du [könntest] fragen.'], ['müssen', 'musste', 'm[ü]sste', 'Er [müsste] mehr schlafen.'], ['dürfen', 'durfte', 'd[ü]rfte', '[Dürfte] ich fragen?'],
      ['sollen · wollen', 'sollte · wollte', 'sollte · wollte', 'Du [solltest] gehen.'],
      ['wissen', 'wusste', 'w[ü]sste', 'Wenn ich das [wüsste]!'], ['kommen · gehen', 'kam · ging', 'k[ä]me · ginge', 'Wenn er [käme], …'], ['geben · finden', 'gab · fand', 'g[ä]be · f[ä]nde', 'Es [gäbe] keine Probleme.'], ['brauchen', 'brauchte', 'br[ä]uchte', 'Ich [bräuchte] Hilfe. ']
    ], n: { es: 'sollen y wollen no toman Umlaut: sollte, wollte (iguales al Präteritum). Terminaciones: -e, -est, -e, -en, -et, -en.', en: 'sollen and wollen take no umlaut: sollte, wollte (same as the Präteritum). Endings: -e, -est, -e, -en, -et, -en.' } },
    { b: 'table', h: { es: 'Usos del Konjunktiv II', en: 'Uses of the Konjunktiv II' }, c: [{ es: 'Uso', en: 'Use' }, { es: 'Estructura', en: 'Structure' }, { es: 'Ejemplo', en: 'Example' }], r: [
      [{ es: 'condición irreal', en: 'unreal condition' }, 'Wenn … K2, … K2', 'Wenn ich reich [wäre], [würde] ich ein Haus am Meer kaufen.'],
      [{ es: 'deseo irreal', en: 'unreal wish' }, 'Wenn … doch / nur …! · Ich wünschte, …', 'Wenn ich doch mehr Zeit [hätte]! · Ich wünschte, du [wärst] hier.'],
      [{ es: 'consejo', en: 'advice' }, 'sollte / könnte / an deiner Stelle würde ich', 'Du [solltest] zum Arzt gehen. · An deiner Stelle [würde] ich warten.'],
      [{ es: 'comparación irreal', en: 'unreal comparison' }, 'als ob / als wenn + K2 (o als + verbo + …)', 'Er tut so, [als ob] er alles [wüsste]. · …, [als wüsste] er alles.'],
      [{ es: 'cortesía', en: 'politeness' }, { es: 'ver U20', en: 'see U20' }, '[Könnten] Sie mir helfen?']
    ] },
    { b: 'pairs', h: { es: 'De lo real a lo irreal', en: 'From real to unreal' }, r: [
      ['Wenn ich Zeit [habe], [lese] ich.', 'Wenn ich Zeit [hätte], [würde] ich lesen.', { es: 'posible / irreal (no tengo tiempo)', en: 'possible / unreal (I don’t have time)' }],
      ['Ich [kann] nicht kommen.', 'Ich [könnte] kommen, wenn du willst.', { es: 'hecho / posibilidad hipotética', en: 'fact / hypothetical possibility' }],
      ['Er [weiß] alles.', 'Er tut so, als ob er alles [wüsste].', { es: 'hecho / apariencia', en: 'fact / appearance' }]
    ] },
    { b: 'slots', h: { es: 'Condición con y sin wenn', en: 'Condition with and without wenn' }, c: [{ es: 'Condición', en: 'Condition' }, { es: 'Verbo', en: 'Verb' }, { es: 'Consecuencia', en: 'Consequence' }], v: [1], r: [
      ['Wenn ich mehr Geld hätte,', 'würde', 'ich nach Chile fliegen.'],
      ['Hätte ich mehr Geld,', 'würde', 'ich nach Chile fliegen.'],
      ['Wäre das Wetter besser,', 'könnten', 'wir wandern.']
    ], n: { es: 'La condición (con o sin wenn) ocupa el Vorfeld: luego viene el verbo de la principal. Con würde se evita usar würde también en la parte de wenn si hay forma simple: Wenn ich Zeit hätte (mejor que würde haben).', en: 'The condition (with or without wenn) fills the Vorfeld; then comes the main verb. Prefer the simple form in the wenn-clause: Wenn ich Zeit hätte (rather than hätte haben/würde haben).' } },
    { b: 'note', tone: 'l1', t: { es: '«Si tuviera tiempo, leería» = Wenn ich Zeit hätte, würde ich lesen: el español usa subjuntivo + condicional; el alemán, Konjunktiv II en ambas partes. «Ojalá estuvieras aquí» = Ich wünschte, du wärst hier. «Como si supiera» = als ob er wüsste.', en: '“If I had time, I would read” = Wenn ich Zeit hätte, würde ich lesen: Konjunktiv II in both clauses. “I wish you were here” = Ich wünschte, du wärst hier.' } }
  ],
  chunks: [
    ['Was würdest du machen, wenn du im Lotto gewinnen würdest?', '¿Qué harías si ganaras la lotería?', 'What would you do if you won the lottery?'],
    ['An deiner Stelle würde ich das nicht machen.', 'Yo que tú no lo haría.', 'If I were you, I wouldn’t do that.'],
    ['Du solltest mehr schlafen.', 'Deberías dormir más.', 'You should sleep more.'],
    ['Wenn ich das nur früher gewusst hätte!', '¡Si lo hubiera sabido antes!', 'If only I’d known earlier!'],
    ['Er tut so, als ob er alles wüsste.', 'Hace como si supiera todo.', 'He acts as if he knew everything.'],
    ['Wie wäre es mit einem Kaffee?', '¿Qué tal un café?', 'How about a coffee?']
  ],
  errors: [
    ['Wenn ich Zeit habe, würde ich lesen.', 'Wenn ich Zeit hätte, würde ich lesen.', { es: 'Irreal: Konjunktiv II en ambas partes.', en: 'Unreal: Konjunktiv II in both parts.' }],
    ['Wenn ich reich wäre, ich würde reisen.', 'Wenn ich reich wäre, würde ich reisen.', { es: 'Tras la condición, el verbo.', en: 'After the condition, the verb.' }],
    ['Ich würde sein glücklich.', 'Ich wäre glücklich.', { es: 'sein: forma simple wäre.', en: 'sein: simple form wäre.' }],
    ['Du solltest gehen zum Arzt.', 'Du solltest zum Arzt gehen.', { es: 'Infinitivo al final.', en: 'Infinitive at the end.' }],
    ['Er tut so, als ob er alles weiß.', 'Er tut so, als ob er alles wüsste.', { es: 'als ob: Konjunktiv II (en lengua cuidada).', en: 'als ob: Konjunktiv II (careful usage).' }]
  ],
  examples: [
    ['Wenn ich mehr Zeit hätte, würde ich Griechisch lernen.', 'Si tuviera más tiempo, aprendería griego.', 'If I had more time, I would learn Greek.'],
    ['Wäre das nicht schön?', '¿No sería bonito?', 'Wouldn’t that be nice?'],
    ['Ich wünschte, meine Familie wäre hier.', 'Ojalá mi familia estuviera aquí.', 'I wish my family were here.'],
    ['An deiner Stelle würde ich die Professorin fragen.', 'Yo que tú le preguntaría a la profesora.', 'If I were you, I would ask the professor.'],
    ['Ohne Gedächtnis wäre ich vielleicht nicht mehr dieselbe Person.', 'Sin memoria quizás ya no sería la misma persona.', 'Without memory I might no longer be the same person.'],
    ['Er spricht, als wäre er ein Professor.', 'Habla como si fuera profesor.', 'He talks as if he were a professor.']
  ],
  reading: 'r-u23',
  exercises: [
    { t: 'choice', ph: 1, q: 'Wenn ich Zeit ___, würde ich mehr lesen.', o: ['habe', 'hätte', 'hatte'], a: 1, x: { es: 'Condición irreal: hätte.', en: 'Unreal condition: hätte.' } },
    { t: 'choice', ph: 1, q: 'Wenn ich reich wäre, ___ ich ein Haus am Meer kaufen.', o: ['werde', 'würde', 'wurde'], a: 1, x: { es: 'Consecuencia: würde + infinitivo.', en: 'Consequence: würde + infinitive.' } },
    { t: 'choice', ph: 1, p: { es: '«Wenn ich Zeit hätte, käme ich.» ¿Tengo tiempo?', en: '“Wenn ich Zeit hätte, käme ich.” Do I have time?' }, o: [{ es: 'Sí', en: 'Yes' }, { es: 'No', en: 'No' }], a: 1, x: { es: 'Konjunktiv II = situación irreal.', en: 'Konjunktiv II = unreal situation.' } },
    { t: 'choice', ph: 1, q: 'Du ___ zum Arzt gehen.', p: { es: 'Consejo:', en: 'Advice:' }, o: ['solltest', 'sollst', 'solltet'], a: 0, x: { es: 'Consejo: du solltest.', en: 'Advice: du solltest.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona Präteritum y Konjunktiv II.', en: 'Match Präteritum and Konjunktiv II.' }, pairs: [['wusste', 'wüsste'], ['kam', 'käme'], ['gab', 'gäbe'], ['musste', 'müsste'], ['sollte', 'sollte']], x: { es: 'Umlaut + -e; sollen/wollen sin Umlaut.', en: 'Umlaut + -e; sollen/wollen no umlaut.' } },
    { t: 'choice', ph: 1, q: 'Er tut so, ___ er alles wüsste.', o: ['als ob', 'wenn', 'dass'], a: 0, x: { es: 'Comparación irreal: als ob + K2.', en: 'Unreal comparison: als ob + K2.' } },
    { t: 'gap', ph: 2, q: 'Wenn ich das ___ (wissen), würde ich es dir sagen.', a: 'wüsste', x: { es: 'wissen → wüsste.', en: 'wissen → wüsste.' } },
    { t: 'gap', ph: 2, q: 'Das ___ (sein) wirklich schön!', a: 'wäre', x: { es: 'sein → wäre.', en: 'sein → wäre.' } },
    { t: 'gap', ph: 2, q: 'Wenn du mehr Zeit hättest, ___ du mitkommen. (können)', a: 'könntest', x: { es: 'können → könntest.', en: 'können → könntest.' } },
    { t: 'gap', ph: 2, q: 'Ich wünschte, du ___ hier. (sein)', a: 'wärst', alt: ['wärest'], x: { es: 'Deseo: wünschte + K2.', en: 'Wish: wünschte + K2.' } },
    { t: 'gap', ph: 2, q: '___ ich mehr Geld, würde ich nach Chile fliegen. (haben)', a: 'Hätte', x: { es: 'Condición sin wenn: verbo primero.', en: 'Condition without wenn: verb first.' } },
    { t: 'gap', ph: 2, q: 'An deiner Stelle ___ ich warten. (werden)', a: 'würde', x: { es: 'An deiner Stelle würde ich…', en: 'An deiner Stelle würde ich…' } },
    { t: 'gap', ph: 2, q: 'Wenn es keine Probleme ___ (geben), wäre das Leben langweilig.', a: 'gäbe', x: { es: 'geben → gäbe.', en: 'geben → gäbe.' } },
    { t: 'order', ph: 2, w: ['würde', 'Wenn ich reich wäre,', 'ich', 'reisen', 'viel'], a: 'Wenn ich reich wäre, würde ich viel reisen.', x: { es: 'Condición en el Vorfeld + verbo.', en: 'Condition in the Vorfeld + verb.' } },
    { t: 'transform', ph: 3, p: { es: 'Convierte en condición irreal.', en: 'Make it an unreal condition.' }, q: 'Wenn ich Zeit habe, komme ich.', a: 'Wenn ich Zeit hätte, würde ich kommen.', alt: ['Wenn ich Zeit hätte, käme ich.'], x: { es: 'habe → hätte; komme → würde kommen / käme.', en: 'habe → hätte; komme → würde kommen / käme.' } },
    { t: 'transform', ph: 3, p: { es: 'Quita «wenn».', en: 'Remove “wenn”.' }, q: 'Wenn das Wetter besser wäre, könnten wir wandern.', a: 'Wäre das Wetter besser, könnten wir wandern.', x: { es: 'Sin wenn: el verbo pasa a la 1.ª posición.', en: 'Without wenn: the verb moves to first position.' } },
    { t: 'write', ph: 3, s: { es: 'Si tuviera más tiempo, aprendería griego.', en: 'If I had more time, I would learn Greek.' }, a: 'Wenn ich mehr Zeit hätte, würde ich Griechisch lernen.', alt: ['Hätte ich mehr Zeit, würde ich Griechisch lernen.'], x: { es: 'hätte … würde … lernen.', en: 'hätte … würde … lernen.' } },
    { t: 'listen', ph: 3, a: 'Was würdest du machen, wenn du reich wärst?', x: { es: 'würdest … wärst.', en: 'würdest … wärst.' } }
  ],
  summary: [
    { es: 'Konjunktiv II = würde + infinitivo, o forma simple: wäre, hätte, könnte, müsste, dürfte, wüsste, käme, ginge, gäbe.', en: 'Konjunktiv II = würde + infinitive, or simple form: wäre, hätte, könnte, müsste, dürfte, wüsste, käme, ginge, gäbe.' },
    { es: 'Irreal: Wenn … hätte, würde …; sin wenn: Hätte ich …, würde ich …', en: 'Unreal: Wenn … hätte, würde …; without wenn: Hätte ich …, würde ich …' },
    { es: 'Deseo: Wenn … doch …! / Ich wünschte, … Consejo: Du solltest … / An deiner Stelle würde ich …', en: 'Wish: Wenn … doch …! / Ich wünschte, … Advice: Du solltest … / An deiner Stelle würde ich …' },
    { es: 'als ob / als wenn + K2; o als + verbo: als wüsste er alles.', en: 'als ob / als wenn + K2; or als + verb: als wüsste er alles.' },
    { es: 'sollte y wollte no llevan Umlaut.', en: 'sollte and wollte take no umlaut.' }
  ]
});

DD.readings.push({
  id: 'r-u23', unit: 'u23', level: 'B1', kind: 'unit',
  de: 'Was wäre, wenn …?', es: '¿Qué pasaría si…?', en: 'What if…?',
  genre: { es: 'Conversación y filosofía · serie Leipzig 23', en: 'Conversation and philosophy · Leipzig series 23' },
  intro: { es: 'Una noche en la WG empieza con un juego sobre la lotería y termina en un experimento mental de John Locke sobre la identidad personal.', en: 'An evening in the flatshare starts with a lottery game and ends with John Locke’s thought experiment on personal identity.' },
  focus: { es: 'wäre, hätte, würde, könnte, wüsste · Wenn …, würde … · als ob · Ich wünschte …', en: 'wäre, hätte, würde, könnte, wüsste · Wenn …, würde … · als ob · Ich wünschte …' },
  source: { type: 'original', note: { es: 'Locke plantea en su Ensayo (1690) que la identidad personal depende de la conciencia y la memoria.', en: 'In his Essay (1690) Locke argues that personal identity depends on consciousness and memory.' } },
  p: [
    ['Es ist Freitagabend. Mehmet liest in der Zeitung, dass jemand zwanzig Millionen Euro im Lotto gewonnen hat. „Was würdet ihr machen, wenn ihr so viel Geld hättet?“, fragt er.', 'Es viernes en la noche. Mehmet lee en el diario que alguien ganó veinte millones de euros en la lotería. «¿Qué harían ustedes si tuvieran tanto dinero?», pregunta.', 'It is Friday evening. Mehmet reads in the paper that someone has won twenty million euros in the lottery. “What would you do if you had that much money?” he asks.'],
    ['Ich würde sofort nach Chile fliegen und meine Familie besuchen. Und dann würde ich ein Haus in Valparaíso kaufen, mit einem Balkon zum Meer. Den Rest würde ich spenden.', 'Volaría de inmediato a Chile a visitar a mi familia. Y después compraría una casa en Valparaíso, con un balcón hacia el mar. El resto lo donaría.', 'I would fly to Chile straight away and visit my family. And then I would buy a house in Valparaíso, with a balcony facing the sea. I would donate the rest.', 'Tomás'],
    ['Ich wüsste gar nicht, was ich machen sollte. Wahrscheinlich würde ich weiter studieren – aber ohne Stress. Ich hätte endlich Zeit für alles, was mich interessiert.', 'Yo no sabría qué hacer. Probablemente seguiría estudiando, pero sin estrés. Por fin tendría tiempo para todo lo que me interesa.', 'I wouldn’t know what to do. I’d probably carry on studying – but without stress. I would finally have time for everything that interests me.', 'Lena'],
    ['Ich würde eine eigene Firma gründen. Wenn ich mein eigener Chef wäre, könnte ich arbeiten, wann ich will. Aber ehrlich gesagt: Wenn ich so reich wäre, hätte ich bestimmt auch Angst, dass alle nur mein Geld wollen.', 'Yo fundaría mi propia empresa. Si fuera mi propio jefe, podría trabajar cuando quisiera. Pero, para ser honesto: si fuera tan rico, seguro que también tendría miedo de que todos solo quisieran mi dinero.', 'I’d set up my own company. If I were my own boss, I could work whenever I wanted. But to be honest: if I were that rich, I’d surely also be afraid that everyone just wanted my money.', 'Mehmet'],
    ['Tomás lacht. „Heute hatten wir im Seminar ein ganz anderes Gedankenexperiment. Stellt euch vor, ihr würdet morgen aufwachen und hättet keine Erinnerungen mehr. Ihr wüsstet nicht, wer eure Eltern sind, wo ihr studiert habt, wen ihr liebt. Wärt ihr dann noch dieselbe Person?“', 'Tomás se ríe. «Hoy en el seminario tuvimos un experimento mental muy distinto. Imagínense que mañana despertaran y ya no tuvieran recuerdos. No sabrían quiénes son sus padres, dónde estudiaron, a quién aman. ¿Seguirían siendo la misma persona?»', 'Tomás laughs. “Today in the seminar we had a completely different thought experiment. Imagine you woke up tomorrow and had no memories any more. You wouldn’t know who your parents are, where you studied, whom you love. Would you still be the same person?”'],
    ['„Mein Körper wäre noch derselbe“, sagt Mehmet. „Ja“, antwortet Tomás, „aber der Philosoph John Locke meinte schon 1690, dass die Identität einer Person vom Bewusstsein und vom Gedächtnis abhängt. Wenn er recht hätte, wärst du ohne Erinnerungen in gewissem Sinn ein anderer Mensch.“ Lena denkt nach. „Als Psychologin finde ich das schwierig. Auch Menschen mit schwerem Gedächtnisverlust haben noch einen Charakter, Gewohnheiten, Gefühle. Sie verhalten sich nicht so, als ob sie niemand wären.“', '«Mi cuerpo seguiría siendo el mismo», dice Mehmet. «Sí», responde Tomás, «pero el filósofo John Locke ya sostenía en 1690 que la identidad de una persona depende de la conciencia y de la memoria. Si tuviera razón, sin recuerdos serías en cierto sentido otra persona.» Lena reflexiona. «Como psicóloga me parece difícil. También las personas con una pérdida de memoria grave tienen todavía un carácter, hábitos, sentimientos. No se comportan como si no fueran nadie.»', '“My body would still be the same,” says Mehmet. “Yes,” Tomás replies, “but the philosopher John Locke argued as early as 1690 that a person’s identity depends on consciousness and memory. If he were right, you would in a certain sense be a different person without memories.” Lena thinks. “As a psychologist I find that difficult. Even people with severe memory loss still have a character, habits, feelings. They don’t behave as if they were nobody.”'],
    ['Mehmet steht auf. „Ich wünschte, ich hätte einfach im Lotto gewonnen. Das wäre weniger kompliziert. Wie wäre es mit einer Pizza?“', 'Mehmet se levanta. «Ojalá simplemente me hubiera ganado la lotería. Sería menos complicado. ¿Qué tal una pizza?»', 'Mehmet gets up. “I wish I had simply won the lottery. That would be less complicated. How about a pizza?”']
  ],
  gloss: [
    ['Rest', { es: 'resto (der Rest, -e)', en: 'rest; remainder' }],
    ['gar', { es: 'gar nicht = en absoluto', en: 'gar nicht = not at all' }],
    ['weiter', { es: 'seguir (weiter studieren = seguir estudiando)', en: 'carry on' }],
    ['Stress', { es: 'estrés', en: 'stress' }],
    ['gesagt', { es: 'ehrlich gesagt = para ser honesto', en: 'ehrlich gesagt = to be honest' }],
    ['Stellt', { es: 'imagínense (sich vorstellen)', en: 'imagine (sich vorstellen)' }],
    ['aufwachen', { es: 'despertar', en: 'wake up' }],
    ['Bewusstsein', { es: 'conciencia (U36)', en: 'consciousness (U36)' }],
    ['gewissem', { es: 'cierto (in gewissem Sinn = en cierto sentido)', en: 'certain (in a certain sense)' }],
    ['Sinn', { es: 'sentido (der Sinn, -e)', en: 'sense' }],
    ['schwerem', { es: 'grave (schwer)', en: 'severe' }],
    ['Gedächtnisverlust', { es: 'pérdida de memoria', en: 'memory loss' }],
    ['Gewohnheiten', { es: 'hábitos (die Gewohnheit, -en)', en: 'habits' }],
    ['verhalten', { es: 'sich verhalten = comportarse', en: 'sich verhalten = behave' }],
    ['weniger', { es: 'menos', en: 'less' }],
    ['kompliziert', { es: 'complicado', en: 'complicated' }],
    ['Pizza', { es: 'pizza', en: 'pizza' }],
    ['Freitagabend', { es: 'viernes en la noche', en: 'Friday evening' }]
  ],
  q: [
    { t: 'rf', q: 'Tomás würde das ganze Geld behalten.', a: false, x: { es: 'Donaría el resto.', en: 'He would donate the rest.' } },
    { t: 'choice', q: 'Was würde Lena machen?', o: ['eine Firma gründen', 'weiter studieren, aber ohne Stress', 'nach Chile fliegen'], a: 1, x: { es: 'Seguiría estudiando sin estrés.', en: 'She would keep studying without stress.' } },
    { t: 'choice', q: 'Wovor hätte Mehmet Angst, wenn er reich wäre?', o: ['dass alle nur sein Geld wollen', 'dass er keine Arbeit hat', 'dass er alles vergisst'], a: 0, x: { es: 'De que todos solo quisieran su dinero.', en: 'That everyone just wanted his money.' } },
    { t: 'rf', q: 'Nach Locke hängt die Identität einer Person vom Körper ab.', a: false, x: { es: 'Depende de la conciencia y la memoria.', en: 'It depends on consciousness and memory.' } },
    { t: 'choice', q: 'Was denkt Lena?', o: ['Ohne Gedächtnis ist man niemand.', 'Auch ohne Gedächtnis hat man Charakter und Gefühle.', 'Locke hat ganz recht.'], a: 1, x: { es: 'Las personas con pérdida de memoria conservan carácter, hábitos y sentimientos.', en: 'People with memory loss keep character, habits and feelings.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u23', ext: true, words: [
  ['v', 'raten', 'rät', 'riet', 'hat geraten', 'adivinar; aconsejar', 'guess; advise', { rek: 'jdm zu + D' }],
  ['v', 'sich irren', 'irrt', 'irrte', 'hat geirrt', 'equivocarse', 'be mistaken'],
  ['a', 'verrückt', null, null, 'loco', 'crazy'],
  ['conj', 'falls', 'en caso de que; si', 'in case; if', { type: 'sub', note: ['Condición real, más neutra que wenn: Falls es regnet, bleiben wir zu Hause.', 'Real condition, more neutral than wenn: Falls es regnet, bleiben wir zu Hause.'] }]
] });
