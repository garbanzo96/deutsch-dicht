/* U28 · Hätte ich das gewusst! */
DD.lexicon.push({ unit: 'u28', words: [
  ['v', 'bereuen', 'bereut', 'bereute', 'hat bereut', 'arrepentirse de', 'regret'],
  ['v', 'verpassen', 'verpasst', 'verpasste', 'hat verpasst', 'perder (un tren, una oportunidad)', 'miss (a train, a chance)'],
  ['v', 'vermeiden', 'vermeidet', 'vermied', 'hat vermieden', 'evitar', 'avoid'],
  ['v', 'sich trauen', 'traut', 'traute', 'hat getraut', 'atreverse', 'dare', { rek: 'zu + Inf.' }],
  ['v', 'zu|geben', 'gibt zu', 'gab zu', 'hat zugegeben', 'admitir; reconocer', 'admit'],
  ['v', 'an|sprechen', 'spricht an', 'sprach an', 'hat angesprochen', 'dirigirse a; abordar (a alguien, un tema)', 'speak to; address'],
  ['v', 'vor|werfen', 'wirft vor', 'warf vor', 'hat vorgeworfen', 'reprochar', 'reproach', { rek: 'jdm etw' }],
  ['v', 'buchen', 'bucht', 'buchte', 'hat gebucht', 'reservar (un vuelo, un hotel)', 'book'],
  ['v', 'landen', 'landet', 'landete', 'ist gelandet', 'aterrizar', 'land'],
  ['v', 'verschlafen', 'verschläft', 'verschlief', 'hat verschlafen', 'quedarse dormido', 'oversleep'],
  ['v', 'sich verlaufen', 'verläuft', 'verlief', 'hat verlaufen', 'perderse (caminando)', 'get lost (on foot)'],
  ['n', 'der Flug', 'Flüge', 'el vuelo', 'flight'],
  ['n', 'der Flughafen', 'Flughäfen', 'el aeropuerto', 'airport'],
  ['n', 'das Ticket', 'Tickets', 'el pasaje; la entrada', 'ticket'],
  ['n', 'der Zufall', 'Zufälle', 'la casualidad; el azar', 'chance; coincidence'],
  ['n', 'das Pech', '—', 'la mala suerte', 'bad luck'],
  ['n', 'das Schicksal', 'Schicksale', 'el destino', 'fate'],
  ['n', 'die Ausrede', 'Ausreden', 'la excusa', 'excuse'],
  ['n', 'der Vorwurf', 'Vorwürfe', 'el reproche', 'reproach'],
  ['n', 'der Rückblick', 'Rückblicke', 'la mirada retrospectiva', 'retrospective'],
  ['n', 'die Sehnsucht', 'Sehnsüchte', 'la nostalgia; el anhelo', 'longing'],
  ['n', 'der Anfänger', 'Anfänger', 'el principiante', 'beginner'],
  ['n', 'der Muttersprachler', 'Muttersprachler', 'el hablante nativo', 'native speaker'],
  ['n', 'die Muttersprache', 'Muttersprachen', 'la lengua materna', 'mother tongue'],
  ['adv', 'eigentlich', 'en realidad; propiamente', 'actually; really'],
  ['pron', 'manche', 'algunos; más de uno', 'some; many a', { decl: 'der', stem: 'manch' }],
  ['v', 'verbringen', 'verbringt', 'verbrachte', 'hat verbracht', 'pasar (tiempo)', 'spend (time)'],
  ['v', 'klopfen', 'klopft', 'klopfte', 'hat geklopft', 'golpear (a la puerta)', 'knock'],
  ['n', 'der Spaziergang', 'Spaziergänge', 'el paseo', 'walk'],
  ['adv', 'beinahe', 'casi (estuvo a punto de)', 'almost; nearly'],
  ['adv', 'stattdessen', 'en cambio; en su lugar', 'instead'],
  ['adv', 'hinterher', 'después; a posteriori', 'afterwards'],
  ['adv', 'rückblickend', 'mirando hacia atrás', 'in retrospect'],
  ['adv', 'rechtzeitig', 'a tiempo', 'in time'],
  ['adv', 'umsonst', 'en vano; gratis', 'in vain; for free'],
  ['phr', 'an deiner Stelle', 'en tu lugar', 'in your place; if I were you', { id: 'phr-an-deiner-stelle', forms: { 'an seiner Stelle': 'phr', 'an ihrer Stelle': 'phr', 'an Ihrer Stelle': 'phr' } }],
  ['phr', 'Bescheid sagen', 'avisar', 'let someone know', { id: 'phr-bescheid-sagen', forms: { Bescheid: 'phr' } }],
  ['phr', 'Das wäre nicht nötig gewesen.', 'no hacía falta', 'that wasn’t necessary']
] });

DD.unit('u28', {
  minutes: 60,
  goals: [
    { es: 'Expresar condiciones y deseos irreales en el pasado: Wenn ich das gewusst hätte, wäre ich gekommen.', en: 'Express unreal conditions and wishes in the past: Wenn ich das gewusst hätte, wäre ich gekommen.' },
    { es: 'Reprochar y lamentar con modales: Du hättest anrufen sollen. Ich hätte mehr üben müssen.', en: 'Reproach and regret with modals: Du hättest anrufen sollen. Ich hätte mehr üben müssen.' },
    { es: 'Narrar lo que casi pasó: Fast wäre ich zu spät gekommen.', en: 'Narrate what almost happened: Fast wäre ich zu spät gekommen.' }
  ],
  grammar: ['g-k2-past', 'g-double-inf', 'g-k2'],
  lesson: [
    { b: 'concept', de: 'Konjunktiv II der Vergangenheit', t: { es: 'Solo existe una forma de pasado irreal: hätte / wäre + Partizip II. Se elige hätte o wäre igual que en el Perfekt (hat gemacht → hätte gemacht; ist gekommen → wäre gekommen). No hay würde aquí.', en: 'There is only one unreal past form: hätte / wäre + Partizip II. hätte or wäre are chosen exactly as in the Perfekt (hat gemacht → hätte gemacht; ist gekommen → wäre gekommen). No würde here.' } },
    { b: 'table', h: { es: 'Del Perfekt al Konjunktiv II de pasado', en: 'From Perfekt to past Konjunktiv II' }, c: ['Perfekt', 'Konjunktiv II · Vergangenheit', { es: 'Significado', en: 'Meaning' }], r: [
      ['ich [habe] es gewusst', 'ich [hätte] es gewusst', { es: 'lo habría sabido / lo hubiera sabido', en: 'I would have known' }],
      ['du [bist] gekommen', 'du [wärst] gekommen', { es: 'habrías venido', en: 'you would have come' }],
      ['er [hat] angerufen', 'er [hätte] angerufen', { es: 'habría llamado', en: 'he would have called' }],
      ['wir [sind] geblieben', 'wir [wären] geblieben', { es: 'nos habríamos quedado', en: 'we would have stayed' }],
      ['ihr [habt] gelernt', 'ihr [hättet] gelernt', { es: 'habrían aprendido', en: 'you would have learned' }],
      ['sie [sind] geflogen', 'sie [wären] geflogen', { es: 'habrían volado', en: 'they would have flown' }]
    ] },
    { b: 'slots', h: { es: 'Pasado irreal en los campos de la oración', en: 'Unreal past in the sentence fields' }, c: ['Vorfeld', { es: 'Verbo 1', en: 'Verb 1' }, 'Mittelfeld', { es: 'Verbo 2', en: 'Verb 2' }], v: [1, 3], r: [
      ['[Wenn] ich das gewusst [hätte],', 'wäre', 'ich früher', 'gekommen.'],
      ['[Hätte] ich das gewusst,', 'wäre', 'ich früher', 'gekommen.'],
      ['Ich', 'hätte', 'früher', 'anfangen sollen.'],
      ['Fast', 'hätte', 'ich den Zug', 'verpasst.']
    ], n: { es: 'La condición entera ocupa el Vorfeld. Sin wenn, su verbo pasa a la primera posición (condicional sin conector). Ambas mitades pueden mezclar tiempos: Wenn ich früher ins Bett gegangen wäre, wäre ich jetzt nicht so müde.', en: 'The whole condition fills the Vorfeld. Without wenn, its verb moves to the first position (unintroduced conditional). The halves can mix times: Wenn ich früher ins Bett gegangen wäre, wäre ich jetzt nicht so müde.' } },
    { b: 'concept', de: 'Doppelter Infinitiv', t: { es: 'Con un modal, el pasado irreal no usa participio sino infinitivo del modal: hätte + infinitivo + modal en infinitivo. Siempre con hätte: Ich [hätte] früher [anfangen sollen]. Du [hättest] mich [fragen können].', en: 'With a modal, the unreal past uses the modal’s infinitive instead of a participle: hätte + infinitive + modal infinitive. Always with hätte: Ich [hätte] früher [anfangen sollen]. Du [hättest] mich [fragen können].' } },
    { b: 'table', h: { es: 'Modales en el pasado irreal', en: 'Modals in the unreal past' }, c: [{ es: 'Estructura', en: 'Structure' }, { es: 'Función', en: 'Function' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['hätte … sollen', { es: 'reproche; consejo tardío', en: 'reproach; late advice' }, 'Du [hättest] früher [anrufen sollen].'],
      ['hätte … müssen', { es: 'necesidad no cumplida', en: 'unfulfilled necessity' }, 'Ich [hätte] mehr [üben müssen].'],
      ['hätte … können', { es: 'posibilidad no aprovechada', en: 'unused possibility' }, 'Wir [hätten] den Zug [nehmen können].'],
      ['hätte … dürfen', { es: 'no permitido (con nicht)', en: 'not allowed (with nicht)' }, 'Das [hätte] er nicht [sagen dürfen].'],
      ['hätte … wollen', { es: 'deseo pasado no realizado', en: 'unrealised past wish' }, 'Sie [hätte] gern Medizin [studieren wollen].']
    ], n: { es: 'En subordinada, hätte se adelanta al bloque de infinitivos: …, weil ich mehr [hätte] [üben müssen]. Lo verás a fondo en U39.', en: 'In a subordinate clause, hätte moves in front of the infinitive block: …, weil ich mehr [hätte] [üben müssen]. Covered fully in U39.' } },
    { b: 'list', h: { es: 'Fórmulas para lamentar, reprochar y suponer', en: 'Phrases for regret, reproach and supposition' }, cols: 2, r: [
      ['[Hätte] ich das bloß [gewusst]!', { es: '¡Si lo hubiera sabido!', en: 'If only I had known!' }], ['[Wäre] ich doch früher [gekommen]!', { es: '¡Ojalá hubiera venido antes!', en: 'If only I had come earlier!' }],
      ['[Fast] [wäre] ich [gefallen].', { es: 'Casi me caigo.', en: 'I almost fell.' }], ['[Beinahe] [hätte] ich den Zug [verpasst].', { es: 'Por poco pierdo el tren.', en: 'I nearly missed the train.' }],
      ['[An deiner Stelle] [hätte] ich [gefragt].', { es: 'En tu lugar habría preguntado.', en: 'In your place I would have asked.' }], ['Das [wäre] nicht nötig [gewesen].', { es: 'No hacía falta.', en: 'That wasn’t necessary.' }],
      ['Ohne dich [hätte] ich das nicht [geschafft].', { es: 'Sin ti no lo habría logrado.', en: 'Without you I wouldn’t have made it.' }], ['Er tut so, als ob er nichts [gehört hätte].', { es: 'Hace como si no hubiera oído nada.', en: 'He acts as if he hadn’t heard anything.' }]
    ] },
    { b: 'note', tone: 'l1', t: { es: 'En español: «si lo hubiera sabido, habría venido». En alemán, ambas partes usan la misma forma: hätte/wäre + participio. Nunca «würde gekommen» en la condición.', en: 'Spanish uses pluperfect subjunctive + conditional perfect; German uses the same form in both halves: hätte/wäre + participle. Never “würde gekommen” in the condition.' } },
    { b: 'note', tone: 'tip', t: { es: 'fast / beinahe + Konjunktiv II de pasado describen lo que casi ocurrió, pero no ocurrió: Fast hätte ich es vergessen = no lo olvidé.', en: 'fast / beinahe + past Konjunktiv II describe what almost happened but did not: Fast hätte ich es vergessen = I didn’t forget.' } }
  ],
  chunks: [
    ['Wenn ich das gewusst hätte, wäre ich früher gekommen.', 'Si lo hubiera sabido, habría venido antes.', 'If I had known, I would have come earlier.'],
    ['Du hättest mir Bescheid sagen sollen.', 'Deberías haberme avisado.', 'You should have let me know.'],
    ['Beinahe hätte ich den Flug verpasst.', 'Por poco pierdo el vuelo.', 'I nearly missed the flight.'],
    ['An deiner Stelle hätte ich mich entschuldigt.', 'En tu lugar me habría disculpado.', 'In your place I would have apologised.'],
    ['Hätte ich bloß mehr geübt!', '¡Si tan solo hubiera practicado más!', 'If only I had practised more!']
  ],
  errors: [
    ['Wenn ich das gewusst würde, …', 'Wenn ich das gewusst hätte, …', { es: 'Pasado irreal: hätte/wäre + participio, nunca würde.', en: 'Unreal past: hätte/wäre + participle, never würde.' }],
    ['Ich hätte gekommen.', 'Ich wäre gekommen.', { es: 'kommen forma el Perfekt con sein → wäre.', en: 'kommen takes sein in the Perfekt → wäre.' }],
    ['Du hättest anrufen gesollt.', 'Du hättest anrufen sollen.', { es: 'Doble infinitivo: el modal va en infinitivo.', en: 'Double infinitive: the modal stays in the infinitive.' }],
    ['Ich wäre mehr üben müssen.', 'Ich hätte mehr üben müssen.', { es: 'Con doble infinitivo siempre hätte.', en: 'The double infinitive always takes hätte.' }],
    ['Fast ich hätte es vergessen.', 'Fast hätte ich es vergessen.', { es: 'fast ocupa el Vorfeld: verbo en posición 2.', en: 'fast fills the Vorfeld: verb in position 2.' }]
  ],
  examples: [
    ['Wenn der Zug pünktlich gewesen wäre, hätten wir das Konzert nicht verpasst.', 'Si el tren hubiera sido puntual, no nos habríamos perdido el concierto.', 'If the train had been on time, we wouldn’t have missed the concert.'],
    ['Hätte ich mehr geschlafen, wäre ich heute nicht so müde.', 'Si hubiera dormido más, hoy no estaría tan cansado.', 'If I had slept more, I wouldn’t be so tired today.'],
    ['Ihr hättet uns fragen können.', 'Podrían habernos preguntado.', 'You could have asked us.'],
    ['Das hätte sie nicht sagen dürfen.', 'Eso no debería haberlo dicho.', 'She shouldn’t have said that.'],
    ['Ohne deine Hilfe hätte ich die Prüfung nicht bestanden.', 'Sin tu ayuda no habría aprobado el examen.', 'Without your help I wouldn’t have passed the exam.'],
    ['Er sah aus, als ob er die ganze Nacht nicht geschlafen hätte.', 'Parecía como si no hubiera dormido en toda la noche.', 'He looked as if he hadn’t slept all night.']
  ],
  reading: 'r-u28',
  exercises: [
    { t: 'choice', ph: 1, q: 'Wenn ich das gewusst ___, wäre ich gekommen.', o: ['würde', 'hätte', 'wäre'], a: 1, x: { es: 'wissen → hat gewusst → hätte gewusst.', en: 'wissen → hat gewusst → hätte gewusst.' } },
    { t: 'choice', ph: 1, q: 'Wir ___ gern länger geblieben.', o: ['hätten', 'wären', 'würden'], a: 1, x: { es: 'bleiben → ist geblieben → wären geblieben.', en: 'bleiben → ist geblieben → wären geblieben.' } },
    { t: 'choice', ph: 1, q: 'Du hättest mich anrufen ___.', o: ['gesollt', 'sollen', 'sollst'], a: 1, x: { es: 'Doble infinitivo.', en: 'Double infinitive.' } },
    { t: 'rf', ph: 1, q: '«Fast hätte ich den Zug verpasst.» = Ich habe den Zug verpasst.', a: false, x: { es: 'fast + K2 pasado = casi, pero no.', en: 'fast + past K2 = almost, but not.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona estructura y función.', en: 'Match structure and function.' }, pairs: [['hätte … sollen', { es: 'reproche', en: 'reproach' }], ['hätte … können', { es: 'posibilidad no aprovechada', en: 'unused possibility' }], ['hätte … müssen', { es: 'necesidad no cumplida', en: 'unfulfilled necessity' }], ['hätte … dürfen', { es: 'no estaba permitido', en: 'was not allowed' }]], x: { es: 'Modal en infinitivo al final.', en: 'Modal infinitive at the end.' } },
    { t: 'choice', ph: 1, q: '___ ich mehr Zeit gehabt, hätte ich dir geschrieben.', o: ['Wenn', 'Hätte', 'Wäre'], a: 1, x: { es: 'Condición sin wenn: verbo en posición 1.', en: 'Condition without wenn: verb first.' } },
    { t: 'gap', ph: 2, q: 'Wenn du früher aufgestanden ___, hättest du den Bus nicht verpasst.', a: 'wärst', alt: ['wärest'], x: { es: 'aufstehen → ist aufgestanden → wärst.', en: 'aufstehen → ist aufgestanden → wärst.' } },
    { t: 'gap', ph: 2, q: 'Ich ___ mehr üben müssen.', a: 'hätte', x: { es: 'Doble infinitivo: siempre hätte.', en: 'Double infinitive: always hätte.' } },
    { t: 'gap', ph: 2, q: 'Beinahe ___ ich mich verlaufen.', a: 'hätte', x: { es: 'sich verlaufen → hat sich verlaufen.', en: 'sich verlaufen → hat sich verlaufen.' } },
    { t: 'gap', ph: 2, q: 'An deiner Stelle ___ ich nicht so lange gewartet.', a: 'hätte', x: { es: 'warten → hat gewartet.', en: 'warten → hat gewartet.' } },
    { t: 'gap', ph: 2, q: 'Wenn der Flug pünktlich ___ (landen), wären wir rechtzeitig angekommen.', a: 'gelandet wäre', x: { es: 'landen → ist gelandet.', en: 'landen → ist gelandet.' } },
    { t: 'gap', ph: 2, q: 'Das hätte er nicht sagen ___.', a: 'dürfen', x: { es: 'hätte … dürfen (no estaba permitido).', en: 'hätte … dürfen (not allowed).' } },
    { t: 'order', ph: 2, w: ['Du', 'hättest', 'mir', 'Bescheid', 'sagen', 'sollen'], a: 'Du hättest mir Bescheid sagen sollen.', x: { es: 'hätte en posición 2; doble infinitivo al final.', en: 'hätte in position 2; double infinitive at the end.' } },
    { t: 'order', ph: 2, w: ['hätte', 'ich', 'Hätte', 'ich das gewusst', 'nicht gefragt', ','], a: 'Hätte ich das gewusst, hätte ich nicht gefragt.', x: { es: 'Condicional sin conector: verbo inicial.', en: 'Unintroduced conditional: verb first.' } },
    { t: 'transform', ph: 3, p: { es: 'Convierte el hecho en una condición irreal.', en: 'Turn the fact into an unreal condition.' }, q: 'Ich hatte keine Zeit. Deshalb bin ich nicht gekommen.', a: 'Wenn ich Zeit gehabt hätte, wäre ich gekommen.', alt: ['Hätte ich Zeit gehabt, wäre ich gekommen.'], x: { es: 'Negaciones → afirmaciones irreales.', en: 'Negatives → unreal affirmatives.' } },
    { t: 'transform', ph: 3, p: { es: 'Formula un reproche con «sollen».', en: 'Phrase a reproach with “sollen”.' }, q: 'Du hast nicht angerufen.', a: 'Du hättest anrufen sollen.', x: { es: 'hätte + infinitivo + sollen.', en: 'hätte + infinitive + sollen.' } },
    { t: 'write', ph: 3, s: { es: 'Sin tu ayuda no lo habría logrado.', en: 'Without your help I wouldn’t have made it.' }, a: 'Ohne deine Hilfe hätte ich das nicht geschafft.', alt: ['Ohne deine Hilfe hätte ich es nicht geschafft.'], x: { es: 'ohne + Akk; schaffen → hat geschafft.', en: 'ohne + acc.; schaffen → hat geschafft.' } },
    { t: 'listen', ph: 3, a: 'Beinahe hätte ich den Flug verpasst.', x: { es: 'beinahe + hätte + participio.', en: 'beinahe + hätte + participle.' } }
  ],
  summary: [
    { es: 'Pasado irreal = hätte / wäre + Partizip II (misma elección que en el Perfekt). Nunca würde.', en: 'Unreal past = hätte / wäre + Partizip II (same choice as in the Perfekt). Never würde.' },
    { es: 'Sin wenn: Hätte ich das gewusst, … (verbo en posición 1).', en: 'Without wenn: Hätte ich das gewusst, … (verb first).' },
    { es: 'Con modal: hätte + infinitivo + modal en infinitivo (doble infinitivo): Du hättest fragen sollen.', en: 'With a modal: hätte + infinitive + modal infinitive (double infinitive): Du hättest fragen sollen.' },
    { es: 'fast / beinahe + K2 pasado = casi ocurrió. bloß / doch = deseo irreal: Hätte ich bloß …!', en: 'fast / beinahe + past K2 = it almost happened. bloß / doch = unreal wish: Hätte ich bloß …!' }
  ]
});

DD.readings.push({
  id: 'r-u28', unit: 'u28', level: 'B1', kind: 'unit',
  de: 'Ein Jahr in Leipzig', es: 'Un año en Leipzig', en: 'A year in Leipzig',
  genre: { es: 'Blog personal · serie Leipzig 28', en: 'Personal blog · Leipzig series 28' },
  intro: { es: 'Tomás lleva un año en Leipzig y escribe en su blog lo que haría distinto si pudiera volver a empezar.', en: 'Tomás has been in Leipzig for a year and writes on his blog what he would do differently if he could start again.' },
  focus: { es: 'hätte / wäre + participio · doble infinitivo (hätte … sollen / müssen / können) · fast, beinahe · Wenn ich … hätte.', en: 'hätte / wäre + participle · double infinitive (hätte … sollen / müssen / können) · fast, beinahe · Wenn ich … hätte.' },
  source: { type: 'original' },
  p: [
    ['Heute vor einem Jahr bin ich in Leipzig gelandet. Eigentlich wäre ich schon eine Woche früher gekommen, aber mein erster Flug wurde abgesagt. Rückblickend war das ein Glück: Wäre ich eine Woche früher gekommen, hätte ich Lena und Mehmet nie kennengelernt. Ich hätte ein anderes Zimmer genommen, und mein Leben hier wäre ganz anders gewesen. Manchmal entscheidet eben der Zufall.', 'Hoy hace un año aterricé en Leipzig. En realidad habría llegado una semana antes, pero mi primer vuelo fue cancelado. Mirando hacia atrás, fue una suerte: si hubiera llegado una semana antes, nunca habría conocido a Lena y a Mehmet. Habría tomado otra pieza y mi vida aquí habría sido muy distinta. A veces decide simplemente el azar.', 'A year ago today I landed in Leipzig. Actually I would have come a week earlier, but my first flight was cancelled. In retrospect that was lucky: had I come a week earlier, I would never have met Lena and Mehmet. I would have taken a different room, and my life here would have been completely different. Sometimes chance just decides.'],
    ['Natürlich habe ich auch Fehler gemacht. Am Anfang habe ich fast nur Englisch gesprochen, weil ich mich nicht getraut habe. Das war bequem, aber es war ein Fehler. Ich hätte von Anfang an Deutsch sprechen sollen, auch mit Fehlern. Hätte ich mehr gesprochen, hätte ich schneller gelernt. Heute weiß ich: Muttersprachler werfen einem Anfänger keine Fehler vor. Sie freuen sich, wenn man es versucht.', 'Por supuesto también cometí errores. Al principio hablaba casi solo inglés, porque no me atrevía. Era cómodo, pero fue un error. Debería haber hablado alemán desde el principio, incluso con errores. Si hubiera hablado más, habría aprendido más rápido. Hoy sé: los hablantes nativos no le reprochan errores a un principiante. Se alegran cuando uno lo intenta.', 'Of course I also made mistakes. At the beginning I spoke almost only English because I didn’t dare. It was comfortable, but it was a mistake. I should have spoken German from the beginning, even with mistakes. Had I spoken more, I would have learned faster. Today I know: native speakers don’t blame a beginner for mistakes. They’re pleased when you try.'],
    ['Ein anderer Fehler: Ich habe im Winter zu wenig Zeit draußen verbracht. Im Januar wurde es um vier Uhr dunkel, und ich bin oft den ganzen Tag zu Hause geblieben. Ich war müde und hatte Heimweh. Stattdessen hätte ich jeden Tag einen Spaziergang machen müssen, auch bei Regen. An meiner Stelle hätte Lena sofort einen Sportkurs gebucht. Das habe ich erst im Februar gemacht – zu spät, aber nicht umsonst.', 'Otro error: en invierno pasé muy poco tiempo afuera. En enero oscurecía a las cuatro y a menudo me quedaba todo el día en casa. Estaba cansado y tenía nostalgia. En lugar de eso, debería haber salido a caminar todos los días, incluso con lluvia. En mi lugar, Lena habría reservado de inmediato un curso de deporte. Eso lo hice recién en febrero: tarde, pero no en vano.', 'Another mistake: in winter I spent too little time outside. In January it got dark at four, and I often stayed at home all day. I was tired and homesick. Instead I should have gone for a walk every day, even in the rain. In my place, Lena would have booked a sports course immediately. I only did that in February – too late, but not in vain.'],
    ['Und dann war da der Tag der Prüfung. Ich hatte den Wecker vergessen und beinahe hätte ich verschlafen. Fast wäre ich zu spät gekommen, aber Mehmet hat an meine Tür geklopft. Ohne ihn hätte ich die Prüfung verpasst. Ich habe ihm hinterher gesagt: „Das wäre nicht nötig gewesen.“ Er hat nur gelacht: „Doch, das war nötig.“', 'Y luego estuvo el día del examen. Había olvidado el despertador y por poco me quedo dormido. Casi llego tarde, pero Mehmet golpeó mi puerta. Sin él me habría perdido el examen. Después le dije: «No hacía falta». Él solo se rió: «Sí, sí hacía falta».', 'And then there was the day of the exam. I had forgotten the alarm and I nearly overslept. I almost arrived late, but Mehmet knocked on my door. Without him I would have missed the exam. Afterwards I told him: “That wasn’t necessary.” He just laughed: “Yes, it was.”'],
    ['Bereue ich etwas? Eigentlich nicht. Ohne meine Fehler hätte ich nicht so viel gelernt. Aber wenn mich heute jemand aus Chile fragt, sage ich: Sprich vom ersten Tag an Deutsch, geh jeden Tag raus, und such dir eine WG. Hätte mir das jemand vor einem Jahr gesagt, hätte ich mir manche Ausrede gespart.', '¿Me arrepiento de algo? En realidad no. Sin mis errores no habría aprendido tanto. Pero si hoy alguien de Chile me pregunta, le digo: habla alemán desde el primer día, sal todos los días y búscate una WG. Si alguien me hubiera dicho eso hace un año, me habría ahorrado más de una excusa.', 'Do I regret anything? Not really. Without my mistakes I wouldn’t have learned so much. But if someone from Chile asks me today, I say: speak German from day one, go out every day, and find a flatshare. If someone had told me that a year ago, I would have saved myself many an excuse.']
  ],
  gloss: [
    ['einem', { es: 'a uno (dativo de man)', en: 'one (dative of man)' }],
    ['Sportkurs', { es: 'curso de deporte', en: 'sports course' }],
    ['raus', { es: 'afuera (geh raus = sal)', en: 'out' }],
    ['eben', { es: 'simplemente; así es (partícula, U30)', en: 'just; simply (particle, U30)' }]
  ],
  q: [
    { t: 'rf', q: 'Tomás ist eine Woche früher gekommen als geplant.', a: false, x: { es: 'Llegó una semana más tarde: su primer vuelo fue cancelado.', en: 'He came a week later: his first flight was cancelled.' } },
    { t: 'choice', q: 'Was hätte Tomás von Anfang an tun sollen?', o: ['mehr Englisch sprechen', 'Deutsch sprechen, auch mit Fehlern', 'allein wohnen'], a: 1, x: { es: '«Ich hätte von Anfang an Deutsch sprechen sollen.»', en: '“Ich hätte von Anfang an Deutsch sprechen sollen.”' } },
    { t: 'choice', q: 'Was hätte er im Winter machen müssen?', o: ['jeden Tag spazieren gehen', 'nach Chile fliegen', 'mehr schlafen'], a: 0, x: { es: 'Caminar cada día, incluso con lluvia.', en: 'A walk every day, even in the rain.' } },
    { t: 'rf', q: 'Tomás hat die Prüfung verpasst.', a: false, x: { es: 'Casi: Mehmet lo despertó.', en: 'Almost: Mehmet woke him up.' } },
    { t: 'choice', q: 'Bereut Tomás seine Fehler?', o: ['Ja, sehr.', 'Eigentlich nicht – er hat viel gelernt.', 'Er weiß es nicht.'], a: 1, x: { es: '«Ohne meine Fehler hätte ich nicht so viel gelernt.»', en: '“Ohne meine Fehler hätte ich nicht so viel gelernt.”' } }
  ]
});
