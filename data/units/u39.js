/* U39 · Dass er es hätte wissen müssen */
DD.lexicon.push({ unit: 'u39', words: [
  ['v', 'wieder|sehen', 'sieht wieder', 'sah wieder', 'hat wiedergesehen', 'volver a ver', 'see again'],
  ['v', 'zurück|lassen', 'lässt zurück', 'ließ zurück', 'hat zurückgelassen', 'dejar atrás', 'leave behind'],
  ['v', 'ahnen', 'ahnt', 'ahnte', 'hat geahnt', 'intuir; sospechar', 'suspect; sense'],
  ['v', 'trösten', 'tröstet', 'tröstete', 'hat getröstet', 'consolar', 'comfort'],
  ['v', 'sich verloben', 'verlobt', 'verlobte', 'hat verlobt', 'comprometerse (para casarse)', 'get engaged', { rek: 'mit + D' }],
  ['n', 'die Verlobung', 'Verlobungen', 'el compromiso (matrimonial)', 'engagement'],
  ['n', 'die Träne', 'Tränen', 'la lágrima', 'tear'],
  ['n', 'der Friedhof', 'Friedhöfe', 'el cementerio', 'cemetery'],
  ['n', 'das Grab', 'Gräber', 'la tumba', 'grave'],
  ['n', 'das Telefonbuch', 'Telefonbücher', 'la guía telefónica', 'phone book'],
  ['n', 'die Witwe', 'Witwen', 'la viuda', 'widow'],
  ['n', 'der Schachtelsatz', 'Schachtelsätze', 'la oración muy subordinada («en cajas»)', 'nested sentence'],
  ['n', 'das Nachfeld', '—', 'el campo final', 'final field'],
  ['n', 'das Mittelfeld', '—', 'el campo medio', 'middle field'],
  ['n', 'das Vorfeld', '—', 'el campo inicial', 'prefield'],
  ['adv', 'jahrzehntelang', 'durante décadas', 'for decades'],
  ['phr', 'Sollte es regnen, …', 'si llegara a llover…', 'should it rain…']
] });

DD.unit('u39', {
  minutes: 75,
  goals: [
    { es: 'Analizar cualquier oración con el modelo de campos completo: Vorfeld, paréntesis, Mittelfeld, Nachfeld.', en: 'Analyse any sentence with the full field model: prefield, brackets, middle field, final field.' },
    { es: 'Colocar el verbo conjugado delante del doble infinitivo en subordinadas: …, dass er es hätte wissen müssen.', en: 'Place the finite verb before the double infinitive in subordinate clauses: …, dass er es hätte wissen müssen.' },
    { es: 'Usar condicionales sin conector (Sollte es regnen, …) y descomponer oraciones encajadas (Schachtelsätze).', en: 'Use unintroduced conditionals (Sollte es regnen, …) and unpack nested sentences (Schachtelsätze).' }
  ],
  grammar: ['g-fields', 'g-double-inf', 'g-conditional-v1', 'g-nachfeld'],
  lesson: [
    { b: 'concept', de: 'Feldermodell', t: { es: 'Toda oración alemana se organiza en torno a un paréntesis verbal. Entre el paréntesis izquierdo (verbo conjugado o conector) y el derecho (resto del verbo) está el Mittelfeld; antes, el Vorfeld (un solo elemento); después, el Nachfeld (lo que se «saca» del paréntesis). Es la herramienta más potente para leer y escribir oraciones complejas.', en: 'Every German clause is organised around a verbal bracket. Between the left bracket (finite verb or connector) and the right one (the rest of the verb) lies the middle field; before it the prefield (a single element); after it the final field (what is moved out of the bracket). It is the most powerful tool for reading and writing complex sentences.' } },
    { b: 'slots', h: { es: 'El modelo de campos completo', en: 'The full field model' }, c: ['Vorfeld', { es: 'Paréntesis izq.', en: 'Left bracket' }, 'Mittelfeld', { es: 'Paréntesis der.', en: 'Right bracket' }, 'Nachfeld'], v: [1, 3], r: [
      ['Gestern', 'hat', 'Oma uns lange', 'erzählt', 'von ihrer Jugend.'],
      ['Sie', 'ist', 'damals größer', 'gewesen', 'als ihr Bruder.'],
      ['', 'Hätte', 'sie das', 'gewusst', ', …'],
      ['…,', 'dass', 'er es', 'hätte wissen müssen', '.'],
      ['Ich', 'habe', 'den Brief', 'gefunden', ', den sie gesucht hatte.']
    ], n: { es: 'En subordinadas el conector ocupa el paréntesis izquierdo y el verbo conjugado va al derecho. El Nachfeld suele recibir comparaciones (als …), oraciones relativas largas, infinitivas y sintagmas preposicionales largos.', en: 'In subordinate clauses the connector occupies the left bracket and the finite verb the right. The final field typically hosts comparisons (als …), long relative clauses, infinitive clauses and long prepositional phrases.' } },
    { b: 'concept', de: 'Doppelter Infinitiv im Nebensatz', t: { es: 'Regla especial: cuando hay doble infinitivo (modal, lassen, sehen, hören + infinitivo en Perfekt o K2 de pasado), el verbo conjugado no va al final, sino delante de los dos infinitivos: …, dass er es [hätte] [wissen müssen]. …, weil sie nicht [hat] [kommen können]. …, ob ich das [werde] [machen können].', en: 'Special rule: when there is a double infinitive (modal, lassen, sehen, hören + infinitive in the Perfekt or past K2), the finite verb does not go last but before both infinitives: …, dass er es [hätte] [wissen müssen]. …, weil sie nicht [hat] [kommen können]. …, ob ich das [werde] [machen können].' } },
    { b: 'table', h: { es: 'Doble infinitivo: principal y subordinada', en: 'Double infinitive: main and subordinate clause' }, c: [{ es: 'Principal', en: 'Main clause' }, { es: 'Subordinada', en: 'Subordinate clause' }], r: [
      ['Er [hätte] es [wissen müssen].', '…, dass er es [hätte wissen müssen].'],
      ['Sie [hat] nicht [kommen können].', '…, weil sie nicht [hat kommen können].'],
      ['Ich [habe] ihn [kommen sehen].', '…, dass ich ihn [habe kommen sehen].'],
      ['Wir [haben] das Auto [reparieren lassen].', '…, weil wir das Auto [haben reparieren lassen].'],
      ['Du [wirst] es [machen müssen].', '…, dass du es [wirst machen müssen].']
    ], n: { es: 'Con sehen, hören, lassen el doble infinitivo es obligatorio en el Perfekt (no «gesehen» con otro infinitivo): Ich habe ihn kommen sehen.', en: 'With sehen, hören, lassen the double infinitive is obligatory in the Perfekt (not “gesehen” with another infinitive): Ich habe ihn kommen sehen.' } },
    { b: 'concept', de: 'Konditionalsatz ohne wenn', t: { es: 'Una condición puede expresarse sin wenn, con el verbo conjugado en primera posición: Hätte ich Zeit, käme ich mit. Kommt er, (so / dann) gehen wir. Con sollte, la condición se presenta como poco probable: Sollte es regnen, bleiben wir zu Hause (si llegara a llover).', en: 'A condition can be expressed without wenn, with the finite verb in first position: Hätte ich Zeit, käme ich mit. Kommt er, (so / dann) gehen wir. With sollte, the condition is presented as unlikely: Sollte es regnen, bleiben wir zu Hause (should it rain).' } },
    { b: 'concept', de: 'Schachtelsatz', t: { es: 'Oraciones encajadas unas dentro de otras, típicas del alemán escrito (y famosas por Kleist o Thomas Mann). Para descomponerlas: (1) marca cada conector o relativo; (2) busca su verbo final; (3) lee primero la principal y luego cada caja de fuera hacia dentro.', en: 'Clauses nested inside one another, typical of written German (and famous from Kleist or Thomas Mann). To unpack them: (1) mark every connector or relative pronoun; (2) find its final verb; (3) read the main clause first, then each box from outside in.' } },
    { b: 'pairs', h: { es: 'Desarmar un Schachtelsatz', en: 'Unpacking a nested sentence' }, r: [
      ['Der Mann, [der] den Brief, [den] sie so lange gesucht [hatte], [geschrieben hatte], lebte in Berlin.', 'Der Mann lebte in Berlin. · Er hatte den Brief geschrieben. · Sie hatte den Brief so lange gesucht.'],
      ['Sie sagte, [dass] sie, [wenn] sie das [gewusst hätte], anders [entschieden hätte].', 'Sie sagte: Wenn ich das gewusst hätte, hätte ich anders entschieden.']
    ] },
    { b: 'note', tone: 'tip', t: { es: 'Para escribir con claridad, usa el Nachfeld: saca del paréntesis las comparaciones, las relativas largas y las infinitivas. «Ich habe den Mann, der gestern angerufen hat, gesehen» → «Ich habe den Mann gesehen, der gestern angerufen hat.»', en: 'To write clearly, use the final field: move comparisons, long relative clauses and infinitive clauses out of the bracket. “Ich habe den Mann, der gestern angerufen hat, gesehen” → “Ich habe den Mann gesehen, der gestern angerufen hat.”' } }
  ],
  chunks: [
    ['…, dass er es hätte wissen müssen.', '…que él debería haberlo sabido.', '…that he should have known.'],
    ['…, weil sie nicht hat kommen können.', '…porque no pudo venir.', '…because she wasn’t able to come.'],
    ['Sollte es regnen, bleiben wir zu Hause.', 'Si llegara a llover, nos quedamos en casa.', 'Should it rain, we’ll stay at home.'],
    ['Ich habe ihn kommen sehen.', 'Lo vi venir.', 'I saw him coming.'],
    ['Hätte ich das gewusst, wäre ich geblieben.', 'De haberlo sabido, me habría quedado.', 'Had I known, I would have stayed.']
  ],
  errors: [
    ['…, dass er es wissen müssen hätte.', '…, dass er es hätte wissen müssen.', { es: 'Doble infinitivo: el conjugado va delante.', en: 'Double infinitive: the finite verb goes first.' }],
    ['…, weil sie nicht kommen gekonnt hat.', '…, weil sie nicht hat kommen können.', { es: 'Modal en infinitivo + conjugado delante.', en: 'Modal in the infinitive + finite verb in front.' }],
    ['Ich habe ihn kommen gesehen.', 'Ich habe ihn kommen sehen.', { es: 'sehen + infinitivo: doble infinitivo.', en: 'sehen + infinitive: double infinitive.' }],
    ['Sollte es regnet, …', 'Sollte es regnen, …', { es: 'sollte + infinitivo.', en: 'sollte + infinitive.' }],
    ['Er ist größer als sein Vater geworden. (raro)', 'Er ist größer geworden als sein Vater.', { es: 'La comparación va al Nachfeld.', en: 'The comparison goes into the final field.' }]
  ],
  examples: [
    ['Ich glaube nicht, dass wir das hätten verhindern können.', 'No creo que hubiéramos podido evitarlo.', 'I don’t think we could have prevented it.'],
    ['Sie erzählte, wie sie ihn zum letzten Mal hatte abfahren sehen.', 'Contó cómo lo había visto partir por última vez.', 'She told how she had seen him leave for the last time.'],
    ['Sollten Sie Fragen haben, rufen Sie uns bitte an.', 'Si tuviera preguntas, llámenos, por favor.', 'Should you have any questions, please call us.'],
    ['Wäre der Zug pünktlich gewesen, hätten wir den Anschluss erreicht.', 'Si el tren hubiera sido puntual, habríamos alcanzado la conexión.', 'Had the train been on time, we would have made the connection.'],
    ['Er hat versprochen, morgen früher zu kommen.', 'Prometió venir mañana más temprano.', 'He promised to come earlier tomorrow.'],
    ['Das ist schwieriger, als ich gedacht hatte.', 'Esto es más difícil de lo que había pensado.', 'This is more difficult than I had thought.']
  ],
  reading: 'r-u39',
  exercises: [
    { t: 'choice', ph: 1, q: '…, dass er es ___.', o: ['wissen müssen hätte', 'hätte wissen müssen', 'gewusst müssen hätte'], a: 1, x: { es: 'Conjugado delante del doble infinitivo.', en: 'Finite verb before the double infinitive.' } },
    { t: 'choice', ph: 1, q: 'Ich habe ihn kommen ___.', o: ['gesehen', 'sehen', 'sah'], a: 1, x: { es: 'sehen + infinitivo → doble infinitivo.', en: 'sehen + infinitive → double infinitive.' } },
    { t: 'choice', ph: 1, q: '___ es regnen, bleiben wir zu Hause.', o: ['Wenn', 'Sollte', 'Ob'], a: 1, x: { es: 'Condicional sin conector con sollte.', en: 'Unintroduced conditional with sollte.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona elemento y campo.', en: 'Match element and field.' }, pairs: [['Gestern (en «Gestern hat Oma erzählt»)', 'Vorfeld'], ['hat', { es: 'paréntesis izquierdo', en: 'left bracket' }], ['erzählt', { es: 'paréntesis derecho', en: 'right bracket' }], ['als ihr Bruder', 'Nachfeld']], x: { es: 'Modelo de campos.', en: 'Field model.' } },
    { t: 'rf', ph: 1, q: '«Sollte es regnen» presenta la lluvia como algo poco probable.', a: true, x: { es: 'sollte = si llegara a…', en: 'sollte = should it…' } },
    { t: 'choice', ph: 1, q: '¿Dónde suele ir «als sein Vater» en «Er ist größer geworden als sein Vater»?', o: ['Vorfeld', 'Mittelfeld', 'Nachfeld'], a: 2, x: { es: 'Las comparaciones van al Nachfeld.', en: 'Comparisons go into the final field.' } },
    { t: 'gap', ph: 2, q: '…, weil sie nicht ___ kommen können. (Perfekt)', a: 'hat', x: { es: 'hat delante del doble infinitivo.', en: 'hat before the double infinitive.' } },
    { t: 'gap', ph: 2, q: 'Ich glaube nicht, dass wir das ___ verhindern können. (K2 pasado)', a: 'hätten', x: { es: 'hätten + doble infinitivo.', en: 'hätten + double infinitive.' } },
    { t: 'gap', ph: 2, q: '…, weil wir das Auto haben reparieren ___.', a: 'lassen', x: { es: 'lassen + infinitivo: doble infinitivo.', en: 'lassen + infinitive: double infinitive.' } },
    { t: 'gap', ph: 2, q: '___ Sie Fragen haben, rufen Sie uns an. (si tuviera)', a: 'Sollten', x: { es: 'Sollten Sie … (fórmula formal).', en: 'Sollten Sie … (formal formula).' } },
    { t: 'gap', ph: 2, q: '___ der Zug pünktlich gewesen, hätten wir den Anschluss erreicht.', a: 'Wäre', x: { es: 'Condicional sin wenn: verbo inicial.', en: 'Unintroduced conditional: verb first.' } },
    { t: 'gap', ph: 2, q: 'Das ist schwieriger, ___ ich gedacht hatte.', a: 'als', x: { es: 'Comparación en el Nachfeld.', en: 'Comparison in the final field.' } },
    { t: 'order', ph: 2, w: ['…, dass', 'er', 'es', 'hätte', 'wissen', 'müssen'], a: '…, dass er es hätte wissen müssen', x: { es: 'hätte + wissen + müssen.', en: 'hätte + wissen + müssen.' } },
    { t: 'transform', ph: 3, p: { es: 'Convierte en subordinada con «weil».', en: 'Turn into a «weil» clause.' }, q: 'Sie hat nicht kommen können.', a: 'weil sie nicht hat kommen können', alt: ['…, weil sie nicht hat kommen können.', 'Weil sie nicht hat kommen können.'], x: { es: 'hat delante del doble infinitivo.', en: 'hat before the double infinitive.' } },
    { t: 'transform', ph: 3, p: { es: 'Quita «wenn».', en: 'Remove «wenn».' }, q: 'Wenn ich das gewusst hätte, wäre ich geblieben.', a: 'Hätte ich das gewusst, wäre ich geblieben.', x: { es: 'Verbo conjugado en posición 1.', en: 'Finite verb in position 1.' } },
    { t: 'transform', ph: 3, p: { es: 'Mueve la relativa al Nachfeld.', en: 'Move the relative clause to the final field.' }, q: 'Ich habe den Mann, der gestern angerufen hat, gesehen.', a: 'Ich habe den Mann gesehen, der gestern angerufen hat.', x: { es: 'Ausklammerung: más legible.', en: 'Extraposition: more readable.' } },
    { t: 'write', ph: 3, s: { es: 'Si llegara a llover, nos quedamos en casa.', en: 'Should it rain, we’ll stay at home.' }, a: 'Sollte es regnen, bleiben wir zu Hause.', x: { es: 'sollte + infinitivo en posición 1.', en: 'sollte + infinitive in position 1.' } },
    { t: 'listen', ph: 3, a: 'Ich glaube nicht, dass wir das hätten verhindern können.', x: { es: 'hätten + doble infinitivo en subordinada.', en: 'hätten + double infinitive in a subordinate clause.' } }
  ],
  summary: [
    { es: 'Campos: Vorfeld | paréntesis izq. | Mittelfeld | paréntesis der. | Nachfeld. En subordinadas: conector a la izquierda, verbo conjugado a la derecha.', en: 'Fields: prefield | left bracket | middle field | right bracket | final field. In subordinate clauses: connector left, finite verb right.' },
    { es: 'Doble infinitivo en subordinada: conjugado delante: …, dass er es hätte wissen müssen / weil sie nicht hat kommen können.', en: 'Double infinitive in a subordinate clause: finite verb in front: …, dass er es hätte wissen müssen / weil sie nicht hat kommen können.' },
    { es: 'Condicional sin wenn: verbo en posición 1 (Hätte ich …, Sollte es …, Kommt er …).', en: 'Conditional without wenn: verb in position 1 (Hätte ich …, Sollte es …, Kommt er …).' },
    { es: 'Nachfeld: comparaciones, relativas largas, infinitivas. Schachtelsatz: principal primero, cajas de fuera hacia dentro.', en: 'Final field: comparisons, long relative clauses, infinitive clauses. Nested sentence: main clause first, boxes outside-in.' }
  ]
});

DD.readings.push({
  id: 'r-u39', unit: 'u39', level: 'C1', kind: 'unit',
  de: 'Was Oma Ilse erzählte', es: 'Lo que contó la abuela Ilse', en: 'What Grandma Ilse told',
  genre: { es: 'Relato · serie Leipzig 39', en: 'Story · Leipzig series 39' },
  intro: { es: 'Continuación de la U34. Con el café servido, la abuela de Lena cuenta la historia de la carta de 1961. El texto usa oraciones largas y encajadas, como en la narrativa literaria. (Historia ficticia en un contexto histórico real.)', en: 'Sequel to U34. Over coffee, Lena’s grandmother tells the story of the 1961 letter. The text uses long, nested sentences, as in literary prose. (Fictional story in a real historical context.)' },
  focus: { es: 'hätte … können / müssen en subordinada · habe … sehen / lassen · condicional sin wenn · Nachfeld · Schachtelsätze.', en: 'hätte … können / müssen in subordinate clauses · habe … sehen / lassen · unintroduced conditionals · final field · nested sentences.' },
  source: { type: 'original' },
  p: [
    ['Er hieß Karl, und wir hatten uns im Frühling 1961 verlobt, heimlich, weil meine Mutter, die nach dem Tod meines Vaters allein für drei Kinder sorgen musste, nichts davon wissen sollte. Karl hatte schon lange davon gesprochen, in den Westen zu gehen, wo er als Ingenieur mehr hätte verdienen können als hier. Ich wollte mit, aber im Sommer wurde meine Mutter krank, und ich blieb.', 'Se llamaba Karl, y nos habíamos comprometido en la primavera de 1961, en secreto, porque mi madre, que tras la muerte de mi padre tuvo que mantener sola a tres hijos, no debía saber nada. Karl hablaba desde hacía tiempo de irse al Oeste, donde como ingeniero habría podido ganar más que aquí. Yo quería ir con él, pero en el verano mi madre enfermó, y me quedé.', 'His name was Karl, and we had got engaged in the spring of 1961, secretly, because my mother, who after my father’s death had to provide alone for three children, was not supposed to know anything about it. Karl had long been talking about going to the West, where as an engineer he could have earned more than here. I wanted to go with him, but in the summer my mother fell ill, and I stayed.'],
    ['Am 12. August, einem Samstag, habe ich ihn am Hauptbahnhof in den Zug nach Berlin steigen sehen. Er sagte, ich solle in zwei Wochen nachkommen, sobald es meiner Mutter besser gehe. Hätte ich gewusst, was in der folgenden Nacht geschehen würde, wäre ich mitgefahren, krank oder nicht. Aber das konnte niemand wissen. Am Sonntagmorgen war die Grenze in Berlin geschlossen.', 'El 12 de agosto, un sábado, lo vi subir en la estación central al tren a Berlín. Dijo que yo debía seguirlo en dos semanas, en cuanto mi madre estuviera mejor. Si hubiera sabido lo que iba a ocurrir la noche siguiente, me habría ido con él, enferma o no. Pero eso nadie podía saberlo. El domingo en la mañana la frontera en Berlín estaba cerrada.', 'On 12 August, a Saturday, I saw him get on the train to Berlin at the main station. He said I should follow in two weeks, as soon as my mother was better. Had I known what would happen the following night, I would have gone with him, ill or not. But no one could know that. On Sunday morning the border in Berlin was closed.'],
    ['Seinen Brief, den er eine Woche später aus Westberlin geschickt hatte und den ich jahrzehntelang in jener Kiste aufbewahrt habe, die ihr gefunden habt, habe ich nie beantwortet. Ich habe mir lange vorgeworfen, dass ich ihm wenigstens hätte schreiben müssen. Aber was hätte ich schreiben sollen? Dass ich nicht hatte kommen können, wusste er. Und dass ich nicht mehr würde kommen können, wussten wir beide.', 'Su carta, que había enviado una semana después desde Berlín Occidental y que guardé durante décadas en esa caja que ustedes encontraron, nunca la respondí. Durante mucho tiempo me reproché que al menos debería haberle escrito. Pero ¿qué habría debido escribir? Que no había podido ir, eso él lo sabía. Y que ya no podría ir, lo sabíamos los dos.', 'His letter, which he had sent a week later from West Berlin and which I kept for decades in that box you found, I never answered. For a long time I reproached myself that I should at least have written to him. But what should I have written? That I hadn’t been able to come, he knew. And that I would no longer be able to come, we both knew.'],
    ['Zwei Jahre später lernte ich euren Opa kennen, und ich habe es nie bereut. Erst nach der Wende, 1990, habe ich Karls Namen in einem Westberliner Telefonbuch suchen lassen. Sollte er noch leben, dachte ich, möchte ich ihm wenigstens sagen, warum ich nicht geschrieben habe. Er lebte nicht mehr. Seine Witwe schrieb mir einen freundlichen Brief: Er habe oft von Leipzig erzählt, und er habe mir nie etwas vorgeworfen.', 'Dos años después conocí a su abuelo, y nunca me he arrepentido. Recién después de la Reunificación, en 1990, hice buscar el nombre de Karl en una guía telefónica de Berlín Occidental. Si todavía vivía, pensé, quería al menos decirle por qué no había escrito. Ya no vivía. Su viuda me escribió una carta amable: él había hablado a menudo de Leipzig y nunca me había reprochado nada.', 'Two years later I met your grandpa, and I have never regretted it. Only after the Wende, in 1990, did I have Karl’s name looked up in a West Berlin phone book. Should he still be alive, I thought, I wanted at least to tell him why I hadn’t written. He was no longer alive. His widow wrote me a kind letter: he had often talked about Leipzig, and he had never blamed me for anything.'],
    ['Oma schweigt. Lena nimmt ihre Hand. „Du hättest es uns früher erzählen können“, sagt sie leise. „Vielleicht“, sagt Oma und lächelt. „Aber manche Geschichten muss man erst wiederfinden, bevor man sie erzählen kann.“', 'La abuela calla. Lena le toma la mano. «Podrías habérnoslo contado antes», dice en voz baja. «Quizás», dice la abuela y sonríe. «Pero algunas historias hay que reencontrarlas antes de poder contarlas.»', 'Grandma falls silent. Lena takes her hand. “You could have told us earlier,” she says quietly. “Perhaps,” says Grandma, smiling. “But some stories you have to find again before you can tell them.”']
  ],
  gloss: [
    ['Karl', { es: 'Karl (nombre)', en: 'Karl (name)' }],
    ['Karls', { es: 'de Karl', en: 'Karl’s' }],
    ['Tod', { es: 'muerte (der Tod)', en: 'death' }],
    ['sorgen', { es: 'mantener; cuidar (sorgen für)', en: 'provide (sorgen für)' }],
    ['Ingenieur', { es: 'ingeniero', en: 'engineer' }],
    ['verdienen', { es: 'ganar (dinero)', en: 'earn' }],
    ['steigen', { es: 'subir', en: 'get on; climb' }],
    ['nachkommen', { es: 'seguir; venir después', en: 'follow; come later' }],
    ['gehe', { es: 'estuviera (es geht jdm besser, K1)', en: 'was (es geht jdm besser, K1)' }],
    ['mitgefahren', { es: 'ido con él (mitfahren)', en: 'gone along (mitfahren)' }],
    ['geschickt', { es: 'enviado (schicken)', en: 'sent (schicken)' }],
    ['jener', { es: 'aquella', en: 'that' }],
    ['euren', { es: 'su (de ustedes)', en: 'your (pl.)' }],
    ['Westberliner', { es: 'de Berlín Occidental', en: 'West Berlin (adj.)' }],
    ['Westberlin', { es: 'Berlín Occidental', en: 'West Berlin' }],
    ['wiederfinden', { es: 'reencontrar', en: 'find again' }]
  ],
  q: [
    { t: 'choice', q: 'Warum sollte Ilses Mutter nichts von der Verlobung wissen?', o: ['Sie mochte Karl nicht.', 'Der Text nennt keinen Grund – es war einfach heimlich.', 'Karl war schon verheiratet.'], a: 1, x: { es: 'Solo se dice que fue en secreto.', en: 'It only says it was secret.' } },
    { t: 'rf', q: 'Ilse hat Karl am 12. August in den Zug steigen sehen.', a: true, x: { es: '«habe ich ihn … in den Zug nach Berlin steigen sehen».', en: '“habe ich ihn … in den Zug nach Berlin steigen sehen”.' } },
    { t: 'choice', q: 'Was wäre passiert, wenn Ilse gewusst hätte, was in der Nacht geschehen würde?', o: ['Sie wäre mitgefahren.', 'Sie hätte Karl angerufen.', 'Nichts.'], a: 0, x: { es: '«wäre ich mitgefahren, krank oder nicht».', en: '“wäre ich mitgefahren, krank oder nicht”.' } },
    { t: 'choice', q: 'Was hat Ilse sich lange vorgeworfen?', o: ['dass sie Karl nicht geschrieben hat', 'dass sie geheiratet hat', 'dass sie den Brief versteckt hat'], a: 0, x: { es: '«dass ich ihm wenigstens hätte schreiben müssen».', en: '“dass ich ihm wenigstens hätte schreiben müssen”.' } },
    { t: 'rf', q: 'Nach der Wende hat Ilse Karl in Berlin wiedergesehen.', a: false, x: { es: 'Ya no vivía; su viuda le escribió.', en: 'He was no longer alive; his widow wrote to her.' } }
  ]
});
