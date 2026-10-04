/* U24 · Um zu verstehen */
DD.lexicon.push({ unit: 'u24', words: [
  ['conj', 'um … zu', 'para (+ infinitivo)', 'in order to', { id: 'conj-um-zu', type: 'inf', forms: { um: 'phr' } }],
  ['conj', 'damit', 'para que', 'so that', { id: 'conj-damit', type: 'sub', homonym: 1 }],
  ['conj', 'ohne … zu', 'sin (+ infinitivo)', 'without (-ing)', { id: 'conj-ohne-zu', type: 'inf' }],
  ['conj', 'statt … zu', 'en vez de (+ infinitivo)', 'instead of (-ing)', { id: 'conj-statt-zu', type: 'inf' }],
  ['conj', 'ohne dass', 'sin que', 'without (+ clause)', { id: 'conj-ohne-dass', type: 'sub' }],
  ['v', 'versuchen', 'versucht', 'versuchte', 'hat versucht', 'intentar', 'try'],
  ['v', 'beschließen', 'beschließt', 'beschloss', 'hat beschlossen', 'decidir; acordar', 'decide; resolve'],
  ['v', 'erlauben', 'erlaubt', 'erlaubte', 'hat erlaubt', 'permitir', 'allow'],
  ['v', 'verbieten', 'verbietet', 'verbot', 'hat verboten', 'prohibir', 'forbid'],
  ['v', 'vor|schlagen', 'schlägt vor', 'schlug vor', 'hat vorgeschlagen', 'proponer', 'suggest; propose'],
  ['v', 'auf|fordern', 'fordert auf', 'forderte auf', 'hat aufgefordert', 'pedir; instar a', 'call on; ask'],
  ['v', 'sich an|fühlen', 'fühlt an', 'fühlte an', 'hat angefühlt', 'sentirse (al tacto o como sensación)', 'feel (like)'],
  ['v', 'verbessern', 'verbessert', 'verbesserte', 'hat verbessert', 'mejorar', 'improve'],
  ['v', 'ab|fragen', 'fragt ab', 'fragte ab', 'hat abgefragt', 'interrogar; tomar la lección', 'test (someone on something)'],
  ['v', 'behalten', 'behält', 'behielt', 'hat behalten', 'conservar; retener', 'keep; retain'],
  ['v', 'nutzen', 'nutzt', 'nutzte', 'hat genutzt', 'aprovechar; usar', 'use; make use of'],
  ['v', 'unterbrechen', 'unterbricht', 'unterbrach', 'hat unterbrochen', 'interrumpir', 'interrupt'],
  ['v', 'auf|geben', 'gibt auf', 'gab auf', 'hat aufgegeben', 'rendirse; abandonar', 'give up'],
  ['n', 'die Absicht', 'Absichten', 'la intención', 'intention'],
  ['n', 'der Zweck', 'Zwecke', 'el fin; el propósito', 'purpose'],
  ['n', 'die Methode', 'Methoden', 'el método', 'method'],
  ['n', 'die Strategie', 'Strategien', 'la estrategia', 'strategy'],
  ['n', 'die Wiederholung', 'Wiederholungen', 'la repetición; el repaso', 'repetition; review'],
  ['n', 'die Übung', 'Übungen', 'el ejercicio; la práctica', 'exercise; practice'],
  ['n', 'der Fehler', 'Fehler', 'el error', 'mistake'],
  ['n', 'der Fortschritt', 'Fortschritte', 'el progreso', 'progress'],
  ['n', 'die Karteikarte', 'Karteikarten', 'la tarjeta de estudio', 'flashcard'],
  ['n', 'der Abstand', 'Abstände', 'la distancia; el intervalo', 'distance; interval'],
  ['n', 'das Ergebnis', 'Ergebnisse', 'el resultado', 'result'],
  ['n', 'der Versuch', 'Versuche', 'el intento; el experimento', 'attempt; experiment'],
  ['n', 'die Mühe', 'Mühen', 'el esfuerzo', 'effort', { note: ['sich Mühe geben = esforzarse.', 'sich Mühe geben = make an effort.'] }],
  ['n', 'der Wortschatz', 'Wortschätze', 'el vocabulario', 'vocabulary'],
  ['a', 'aktiv', null, null, 'activo', 'active'],
  ['a', 'passiv', null, null, 'pasivo', 'passive'],
  ['a', 'wirksam', null, null, 'eficaz', 'effective'],
  ['a', 'effizient', null, null, 'eficiente', 'efficient'],
  ['a', 'sinnlos', null, null, 'sin sentido; inútil', 'pointless'],
  ['a', 'erlaubt', '—', '—', 'permitido', 'allowed'],
  ['a', 'nötig', null, null, 'necesario', 'necessary'],
  ['phr', 'Es ist wichtig, … zu …', 'es importante…', 'it is important to…'],
  ['phr', 'Ich habe keine Zeit, … zu …', 'no tengo tiempo de…', 'I have no time to…'],
  ['phr', 'sich Mühe geben', 'esforzarse', 'make an effort']
] });

DD.unit('u24', {
  minutes: 60,
  goals: [
    { es: 'Construir infinitivos con zu tras verbos, sustantivos y adjetivos (Ich versuche, … zu …).', en: 'Build zu-infinitives after verbs, nouns and adjectives (Ich versuche, … zu …).' },
    { es: 'Expresar finalidad con um … zu y damit; omisión y sustitución con ohne … zu / statt … zu.', en: 'Express purpose with um … zu and damit; omission and replacement with ohne … zu / statt … zu.' },
    { es: 'Distinguir infinitivo sin zu (modales, lassen, gehen…) y con zu.', en: 'Distinguish the bare infinitive (modals, lassen, gehen…) and the zu-infinitive.' }
  ],
  grammar: ['g-infinitive'],
  lesson: [
    { b: 'concept', de: 'Infinitiv mit zu', t: { es: 'Muchos verbos, sustantivos y adjetivos van seguidos de un infinitivo con zu, que se coloca al final de su grupo: Ich versuche, jeden Tag zu lernen. En los separables, zu va dentro: anzurufen, aufzustehen.', en: 'Many verbs, nouns and adjectives are followed by an infinitive with zu, placed at the end of its group: Ich versuche, jeden Tag zu lernen. In separable verbs, zu goes inside: anzurufen, aufzustehen.' } },
    { b: 'concept', de: 'ohne zu', t: { es: 'Sin zu: tras los modales (Ich kann schwimmen), lassen, werden (futuro) y verbos de movimiento y percepción: gehen, kommen, sehen, hören (Ich gehe einkaufen. Ich höre ihn singen).', en: 'Without zu: after modals (Ich kann schwimmen), lassen, werden (future) and verbs of motion and perception: gehen, kommen, sehen, hören (Ich gehe einkaufen. Ich höre ihn singen).' } },
    { b: 'table', h: { es: 'Dónde aparece el infinitivo con zu', en: 'Where the zu-infinitive appears' }, c: [{ es: 'Tras', en: 'After' }, { es: 'Ejemplos', en: 'Examples' }], r: [
      [{ es: 'verbos: versuchen, anfangen, aufhören, vergessen, beschließen, vorhaben, hoffen, planen, bitten, erlauben, verbieten', en: 'verbs: versuchen, anfangen, aufhören, vergessen, beschließen, vorhaben, hoffen, planen, bitten, erlauben, verbieten' }, 'Ich versuche, mehr [zu] lesen. · Vergiss nicht, mich an[zu]rufen!'],
      [{ es: 'sustantivos: Zeit, Lust, Angst, Möglichkeit, Ziel, Absicht', en: 'nouns: Zeit, Lust, Angst, Möglichkeit, Ziel, Absicht' }, 'Ich habe keine Lust, heute [zu] kochen.'],
      [{ es: 'adjetivos con es ist: wichtig, schwer, leicht, schön, nötig, möglich', en: 'adjectives with es ist: wichtig, schwer, leicht, schön, nötig, möglich' }, 'Es ist wichtig, regelmäßig [zu] wiederholen.'],
      [{ es: 'scheinen, brauchen (nicht), haben/sein (+ zu = deber, U29)', en: 'scheinen, brauchen (nicht), haben/sein (+ zu = must, U29)' }, 'Er scheint müde [zu] sein. · Du brauchst nicht [zu] warten.']
    ] },
    { b: 'table', h: { es: 'Conectores con infinitivo', en: 'Infinitive connectors' }, c: [{ es: 'Conector', en: 'Connector' }, { es: 'Significado', en: 'Meaning' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['[um] … [zu]', { es: 'para (finalidad)', en: 'in order to (purpose)' }, 'Ich lerne Deutsch, [um] in Leipzig [zu] studieren.'],
      ['[ohne] … [zu]', { es: 'sin', en: 'without' }, 'Er ging, [ohne] Tschüss [zu] sagen.'],
      ['[statt] … [zu] · [anstatt] … [zu]', { es: 'en vez de', en: 'instead of' }, '[Statt] zu lernen, sieht er fern.']
    ], n: { es: 'Los tres exigen el mismo sujeto en las dos partes. Si el sujeto cambia, se usa una subordinada: damit, ohne dass, statt dass.', en: 'All three require the same subject in both parts. If the subject changes, use a clause: damit, ohne dass, statt dass.' } },
    { b: 'pairs', h: { es: 'Mismo sujeto (infinitivo) o distinto sujeto (subordinada)', en: 'Same subject (infinitive) or different subject (clause)' }, r: [
      ['{N Ich} lerne, [um] die Prüfung [zu] bestehen.', '{N Ich} erkläre es, [damit] {N du} es [verstehst].', { es: 'yo… yo / yo… tú', en: 'I… I / I… you' }],
      ['{N Er} ging, [ohne] etwas [zu] sagen.', '{N Er} ging, [ohne dass] {N wir} es [merkten].', { es: 'él… él / él… nosotros', en: 'he… he / he… we' }]
    ] },
    { b: 'slots', h: { es: 'El grupo de infinitivo va detrás de la principal', en: 'The infinitive group follows the main clause' }, c: ['Hauptsatz', { es: 'Conector', en: 'Connector' }, 'Mittelfeld', { es: 'zu + infinitivo', en: 'zu + infinitive' }], v: [3], r: [
      ['Ich habe keine Zeit,', '', 'heute einkaufen', 'zu gehen.'],
      ['Tomás lernt jeden Tag,', 'um', 'seinen Wortschatz', 'zu verbessern.'],
      ['Vergiss nicht,', '', 'Lena', 'anzurufen!'],
      ['Er ist gegangen,', 'ohne', 'die Tür', 'abzuschließen.']
    ], n: { es: 'Coma recomendada antes del grupo de infinitivo (obligatoria con um, ohne, statt y con un sustantivo o es que lo anuncia).', en: 'A comma before the infinitive group is recommended (compulsory with um, ohne, statt and when a noun or es announces it).' } },
    { b: 'note', tone: 'l1', t: { es: '«Para» = um … zu (mismo sujeto) o damit (sujeto distinto); «para que» siempre damit. «Sin decir nada» = ohne etwas zu sagen. «No hace falta esperar» = Du brauchst nicht zu warten. No confundas la conjunción damit (para que) con el adverbio damit (con eso).', en: '“To / in order to” = um … zu; “so that” = damit. “Without saying anything” = ohne etwas zu sagen. Don’t confuse the conjunction damit (so that) with the adverb damit (with it).' } }
  ],
  chunks: [
    ['Ich versuche, jeden Tag zwanzig Minuten zu lesen.', 'Intento leer veinte minutos cada día.', 'I try to read for twenty minutes every day.'],
    ['Hast du Lust, heute Abend ins Kino zu gehen?', '¿Tienes ganas de ir al cine esta noche?', 'Do you feel like going to the cinema tonight?'],
    ['Es ist wichtig, regelmäßig zu wiederholen.', 'Es importante repasar con regularidad.', 'It’s important to review regularly.'],
    ['Vergiss nicht, die Tür abzuschließen!', '¡No olvides cerrar la puerta con llave!', 'Don’t forget to lock the door!'],
    ['Er ging, ohne ein Wort zu sagen.', 'Se fue sin decir una palabra.', 'He left without saying a word.'],
    ['Du brauchst nicht zu kommen.', 'No hace falta que vengas.', 'You don’t need to come.']
  ],
  errors: [
    ['Ich versuche zu mehr lesen.', 'Ich versuche, mehr zu lesen.', { es: 'zu + infinitivo al final.', en: 'zu + infinitive at the end.' }],
    ['Ich vergesse, anrufen zu dich.', 'Ich vergesse, dich anzurufen.', { es: 'Separables: zu dentro (anzurufen).', en: 'Separable: zu inside (anzurufen).' }],
    ['Ich kann zu schwimmen.', 'Ich kann schwimmen.', { es: 'Modales: sin zu.', en: 'Modals: no zu.' }],
    ['Ich erkläre es, um du es verstehst.', 'Ich erkläre es, damit du es verstehst.', { es: 'Sujeto distinto: damit.', en: 'Different subject: damit.' }],
    ['Statt lernen, sieht er fern.', 'Statt zu lernen, sieht er fern.', { es: 'statt … zu + infinitivo.', en: 'statt … zu + infinitive.' }]
  ],
  examples: [
    ['Tomás benutzt Karteikarten, um neue Wörter zu lernen.', 'Tomás usa tarjetas para aprender palabras nuevas.', 'Tomás uses flashcards to learn new words.'],
    ['Die Professorin erklärt es langsam, damit alle es verstehen.', 'La profesora lo explica lento para que todos lo entiendan.', 'The professor explains it slowly so that everyone understands.'],
    ['Statt die Lösung zu lesen, sollte man zuerst selbst antworten.', 'En vez de leer la solución, uno debería responder primero por sí mismo.', 'Instead of reading the answer, you should first answer yourself.'],
    ['Es ist nicht leicht, eine Sprache allein zu lernen.', 'No es fácil aprender un idioma solo.', 'It isn’t easy to learn a language alone.'],
    ['Lena hat beschlossen, ihre Masterarbeit über Gedächtnis zu schreiben.', 'Lena decidió escribir su tesis de máster sobre la memoria.', 'Lena has decided to write her master’s thesis on memory.'],
    ['Er scheint das Problem verstanden zu haben.', 'Parece haber entendido el problema.', 'He seems to have understood the problem.']
  ],
  reading: 'r-u24',
  exercises: [
    { t: 'choice', ph: 1, q: 'Ich habe keine Zeit, heute ___.', o: ['kochen', 'zu kochen', 'um kochen'], a: 1, x: { es: 'Zeit haben + zu-infinitivo.', en: 'Zeit haben + zu-infinitive.' } },
    { t: 'choice', ph: 1, q: 'Ich kann gut ___.', o: ['schwimmen', 'zu schwimmen', 'um zu schwimmen'], a: 0, x: { es: 'Modal: infinitivo sin zu.', en: 'Modal: bare infinitive.' } },
    { t: 'choice', ph: 1, q: 'Vergiss nicht, mich ___!', o: ['zu anrufen', 'anzurufen', 'anrufen zu'], a: 1, x: { es: 'Separable: an-zu-rufen.', en: 'Separable: an-zu-rufen.' } },
    { t: 'choice', ph: 1, q: 'Ich erkläre es dir, ___ du es verstehst.', o: ['um', 'damit', 'ohne'], a: 1, x: { es: 'Otro sujeto (du): damit.', en: 'Different subject (du): damit.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona conector y significado.', en: 'Match connector and meaning.' }, pairs: [['um … zu', { es: 'para', en: 'in order to' }], ['ohne … zu', { es: 'sin', en: 'without' }], ['statt … zu', { es: 'en vez de', en: 'instead of' }], ['damit', { es: 'para que', en: 'so that' }]], x: { es: 'Infinitivo: mismo sujeto; damit: otro sujeto.', en: 'Infinitive: same subject; damit: different subject.' } },
    { t: 'choice', ph: 1, q: 'Wir gehen heute ___.', o: ['einkaufen', 'einzukaufen', 'zu einkaufen'], a: 0, x: { es: 'gehen + infinitivo sin zu.', en: 'gehen + bare infinitive.' } },
    { t: 'gap', ph: 2, q: 'Es ist wichtig, regelmäßig ___. (wiederholen)', a: 'zu wiederholen', x: { es: 'es ist + adjetivo + zu-infinitivo; wieder- aquí es inseparable.', en: 'es ist + adjective + zu-infinitive; wieder- here is inseparable.' } },
    { t: 'gap', ph: 2, q: 'Er versucht, früh ___. (aufstehen)', a: 'aufzustehen', x: { es: 'Separable: auf-zu-stehen.', en: 'Separable: auf-zu-stehen.' } },
    { t: 'gap', ph: 2, q: 'Ich lerne Deutsch, ___ in Leipzig zu studieren.', a: 'um', x: { es: 'Finalidad, mismo sujeto: um … zu.', en: 'Purpose, same subject: um … zu.' } },
    { t: 'gap', ph: 2, q: 'Er ging, ___ Tschüss zu sagen.', a: 'ohne', x: { es: 'ohne … zu.', en: 'ohne … zu.' } },
    { t: 'gap', ph: 2, q: '___ zu lernen, sieht er fern.', a: 'Statt', alt: ['Anstatt'], x: { es: 'statt … zu.', en: 'statt … zu.' } },
    { t: 'gap', ph: 2, q: 'Du brauchst nicht ___ warten.', a: 'zu', x: { es: 'nicht brauchen + zu.', en: 'nicht brauchen + zu.' } },
    { t: 'gap', ph: 2, q: 'Hast du Lust, mit uns ___? (mitkommen)', a: 'mitzukommen', x: { es: 'mit-zu-kommen.', en: 'mit-zu-kommen.' } },
    { t: 'order', ph: 2, w: ['um', 'Ich', 'lerne', 'zu', 'die Prüfung', 'bestehen'], a: 'Ich lerne, um die Prüfung zu bestehen.', x: { es: 'Principal + um … zu + infinitivo.', en: 'Main clause + um … zu + infinitive.' } },
    { t: 'transform', ph: 3, p: { es: 'Une con «um … zu».', en: 'Join with “um … zu”.' }, q: 'Tomás benutzt Karteikarten. Er will neue Wörter lernen.', a: 'Tomás benutzt Karteikarten, um neue Wörter zu lernen.', x: { es: 'Mismo sujeto: um … zu.', en: 'Same subject: um … zu.' } },
    { t: 'transform', ph: 3, p: { es: 'Une con «damit».', en: 'Join with “damit”.' }, q: 'Die Professorin spricht langsam. Die Studenten verstehen alles.', a: 'Die Professorin spricht langsam, damit die Studenten alles verstehen.', x: { es: 'Sujeto distinto: damit + verbo final.', en: 'Different subject: damit + verb last.' } },
    { t: 'write', ph: 3, s: { es: 'No tengo ganas de cocinar hoy.', en: 'I don’t feel like cooking today.' }, a: 'Ich habe keine Lust, heute zu kochen.', alt: ['Ich habe heute keine Lust zu kochen.', 'Ich habe heute keine Lust, zu kochen.'], x: { es: 'Lust haben + zu-infinitivo.', en: 'Lust haben + zu-infinitive.' } },
    { t: 'listen', ph: 3, a: 'Es ist nicht leicht, eine Sprache zu lernen.', x: { es: 'es ist + adjetivo + zu.', en: 'es ist + adjective + zu.' } }
  ],
  summary: [
    { es: 'zu + infinitivo al final de su grupo, tras verbos (versuchen…), sustantivos (Lust, Zeit…) y es ist + adjetivo.', en: 'zu + infinitive at the end of its group, after verbs (versuchen…), nouns (Lust, Zeit…) and es ist + adjective.' },
    { es: 'Separables: zu dentro (anzurufen, aufzustehen).', en: 'Separable: zu inside (anzurufen, aufzustehen).' },
    { es: 'Sin zu: modales, lassen, werden, gehen/kommen, sehen/hören.', en: 'No zu: modals, lassen, werden, gehen/kommen, sehen/hören.' },
    { es: 'um … zu / ohne … zu / statt … zu = mismo sujeto; damit / ohne dass / statt dass = otro sujeto.', en: 'um … zu / ohne … zu / statt … zu = same subject; damit / ohne dass / statt dass = different subject.' },
    { es: 'nicht brauchen zu = no hace falta.', en: 'nicht brauchen zu = no need to.' }
  ]
});

DD.readings.push({
  id: 'r-u24', unit: 'u24', level: 'B1', kind: 'unit',
  de: 'Wie lernt man am besten?', es: '¿Cómo se aprende mejor?', en: 'How do you learn best?',
  genre: { es: 'Divulgación científica · serie Leipzig 24', en: 'Popular science · Leipzig series 24' },
  intro: { es: 'Lena, que estudia la memoria, le explica a Tomás qué dice la investigación sobre el aprendizaje. Los efectos descritos (recuperación activa, repaso espaciado) están bien documentados.', en: 'Lena, who studies memory, explains to Tomás what research says about learning. The effects described (retrieval practice, spaced review) are well documented.' },
  focus: { es: 'um … zu, damit, ohne … zu, statt … zu · es ist wichtig, … zu …', en: 'um … zu, damit, ohne … zu, statt … zu · es ist wichtig, … zu …' },
  source: { type: 'original', note: { es: 'Efecto de recuperación: Roediger y Karpicke (2006). Práctica espaciada: Cepeda et al. (2006); en segundas lenguas, Kim y Webb (2022).', en: 'Testing effect: Roediger & Karpicke (2006). Spaced practice: Cepeda et al. (2006); in second languages, Kim & Webb (2022).' } },
  p: [
    ['Tomás lernt jeden Abend Deutsch. Er liest seine Notizen immer wieder, um die neuen Wörter nicht zu vergessen. Aber nach einer Woche weiß er viele Wörter trotzdem nicht mehr. „Ich verstehe das nicht“, sagt er zu Lena. „Ich lese alles fünfmal, ohne etwas zu behalten.“', 'Tomás estudia alemán cada noche. Lee sus apuntes una y otra vez para no olvidar las palabras nuevas. Pero después de una semana, aun así, ya no sabe muchas palabras. «No lo entiendo», le dice a Lena. «Leo todo cinco veces sin retener nada.»', 'Tomás studies German every evening. He reads his notes again and again so as not to forget the new words. But after a week he still no longer knows many of them. “I don’t get it,” he says to Lena. “I read everything five times without retaining anything.”'],
    ['Lena lacht. „Das ist ganz normal. Lesen fühlt sich gut an, aber es ist nicht sehr wirksam. Die Forschung zeigt etwas anderes: Statt die Notizen noch einmal zu lesen, solltest du versuchen, dich ohne Hilfe zu erinnern. Schließ das Heft und frag dich selbst ab! Wenn man aktiv versucht, eine Antwort zu finden, merkt sich das Gehirn die Information viel besser. Psychologen nennen das den Testeffekt.“', 'Lena se ríe. «Es completamente normal. Leer se siente bien, pero no es muy eficaz. La investigación muestra otra cosa: en vez de volver a leer los apuntes, deberías intentar recordar sin ayuda. ¡Cierra el cuaderno y ponte a prueba! Cuando uno intenta activamente encontrar una respuesta, el cerebro retiene la información mucho mejor. Los psicólogos lo llaman el efecto de la prueba.»', 'Lena laughs. “That’s completely normal. Reading feels good, but it isn’t very effective. Research shows something else: instead of reading your notes again, you should try to remember without help. Close the notebook and test yourself! When you actively try to find an answer, the brain remembers the information much better. Psychologists call this the testing effect.”'],
    ['„Und wie oft soll ich wiederholen?“, fragt Tomás. „Nicht alles an einem Abend“, antwortet Lena. „Es ist besser, in größer werdenden Abständen zu wiederholen: nach einem Tag, nach drei Tagen, nach einer Woche, nach einem Monat. Das Vergessen ist dabei kein Feind. Wenn du ein Wort fast vergessen hast und es dann wiederfindest, wird die Erinnerung stärker. Genau dafür gibt es Programme mit Karteikarten, die die Abstände automatisch berechnen.“', '«¿Y cada cuánto debo repasar?», pregunta Tomás. «No todo en una noche», responde Lena. «Es mejor repasar a intervalos cada vez más grandes: después de un día, de tres días, de una semana, de un mes. El olvido no es un enemigo. Cuando casi has olvidado una palabra y luego la recuperas, el recuerdo se vuelve más fuerte. Justamente para eso existen programas de tarjetas que calculan los intervalos automáticamente.»', '“And how often should I review?” Tomás asks. “Not everything in one evening,” Lena answers. “It’s better to review at increasing intervals: after a day, after three days, after a week, after a month. Forgetting isn’t the enemy here. When you’ve almost forgotten a word and then retrieve it, the memory gets stronger. That’s exactly why there are flashcard programs that calculate the intervals automatically.”'],
    ['„Also muss ich Fehler machen, um besser zu lernen?“ – „Ja, in gewissem Sinn. Fehler sind Informationen. Wichtig ist, die richtige Antwort sofort danach zu sehen, damit du nichts Falsches lernst. Und noch etwas: Lern nicht nur Wörter, ohne sie zu benutzen. Lies Texte, sprich mit Menschen, schreib kurze Nachrichten. Das Gehirn braucht Kontext, um Wörter zu verbinden.“', '«O sea, ¿tengo que cometer errores para aprender mejor?» – «Sí, en cierto sentido. Los errores son información. Lo importante es ver la respuesta correcta justo después, para que no aprendas algo falso. Y otra cosa: no aprendas solo palabras sin usarlas. Lee textos, habla con personas, escribe mensajes cortos. El cerebro necesita contexto para conectar las palabras.»', '“So I have to make mistakes in order to learn better?” – “Yes, in a certain sense. Mistakes are information. What matters is seeing the right answer immediately afterwards so that you don’t learn anything wrong. And one more thing: don’t just learn words without using them. Read texts, talk to people, write short messages. The brain needs context to connect words.”'],
    ['Tomás denkt nach. Dann nimmt er sein Handy, um eine Lern-App zu installieren. „Statt fünfmal zu lesen, teste ich mich jetzt selbst“, sagt er. „Und wenn ich etwas vergesse, ärgere ich mich nicht – ich freue mich.“ Lena lacht: „Genau. Willkommen in der Kognitionswissenschaft!“', 'Tomás reflexiona. Luego toma su celular para instalar una aplicación de aprendizaje. «En vez de leer cinco veces, ahora me pongo a prueba yo mismo», dice. «Y si olvido algo, no me enojo: me alegro.» Lena se ríe: «Exacto. ¡Bienvenido a la ciencia cognitiva!»', 'Tomás thinks. Then he takes his phone to install a learning app. “Instead of reading five times, I’ll test myself now,” he says. “And if I forget something, I won’t be annoyed – I’ll be pleased.” Lena laughs: “Exactly. Welcome to cognitive science!”']
  ],
  gloss: [
    ['Notizen', { es: 'apuntes (die Notiz, -en)', en: 'notes (die Notiz, -en)' }],
    ['fünfmal', { es: 'cinco veces', en: 'five times' }],
    ['Testeffekt', { es: 'efecto de la prueba', en: 'testing effect' }],
    ['werdenden', { es: 'größer werdend = cada vez mayor', en: 'größer werdend = increasing' }],
    ['dabei', { es: 'en eso; al hacerlo', en: 'in this' }],
    ['Feind', { es: 'enemigo (der Feind, -e)', en: 'enemy (der Feind, -e)' }],
    ['wiederfindest', { es: 'vuelves a encontrar (wiederfinden)', en: 'find again (wiederfinden)' }],
    ['Programme', { es: 'programas (das Programm, -e)', en: 'programs' }],
    ['berechnen', { es: 'calculan', en: 'calculate' }],
    ['automatisch', { es: 'automáticamente', en: 'automatically' }],
    ['gewissem', { es: 'cierto (in gewissem Sinn)', en: 'certain (in a certain sense)' }],
    ['Sinn', { es: 'sentido', en: 'sense' }],
    ['Falsches', { es: 'algo falso', en: 'anything wrong' }],
    ['Kontext', { es: 'contexto', en: 'context' }],
    ['Lern-App', { es: 'aplicación de aprendizaje', en: 'learning app' }],
    ['installieren', { es: 'instalar', en: 'install' }],
    ['teste', { es: 'pongo a prueba (testen)', en: 'test (testen)' }]
  ],
  q: [
    { t: 'rf', q: 'Tomás liest seine Notizen nur einmal.', a: false, x: { es: 'Los lee cinco veces.', en: 'He reads them five times.' } },
    { t: 'choice', q: 'Was empfiehlt Lena statt des Lesens?', o: ['mehr Kaffee trinken', 'sich ohne Hilfe zu erinnern', 'nur Grammatik lernen'], a: 1, x: { es: 'Recuperar activamente sin ayuda.', en: 'Actively retrieve without help.' } },
    { t: 'rf', q: 'Nach Lena sollte man alles an einem Abend wiederholen.', a: false, x: { es: 'Mejor en intervalos crecientes.', en: 'Better at increasing intervals.' } },
    { t: 'choice', q: 'Warum soll man die richtige Antwort sofort sehen?', o: ['damit man nichts Falsches lernt', 'um schneller fertig zu sein', 'damit das Programm funktioniert'], a: 0, x: { es: '«…damit du nichts Falsches lernst.»', en: '“…damit du nichts Falsches lernst.”' } },
    { t: 'choice', q: 'Wozu braucht das Gehirn Kontext?', o: ['um Wörter zu verbinden', 'um zu schlafen', 'um Fehler zu vermeiden'], a: 0, x: { es: '«…um Wörter zu verbinden.»', en: '“…um Wörter zu verbinden.”' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u24', ext: true, words: [
  ['n', 'der Test', 'Tests', 'la prueba; el test', 'test'],
  ['n', 'das Thema', 'Themen', 'el tema', 'topic'],
  ['n', 'der Inhalt', 'Inhalte', 'el contenido', 'content'],
  ['n', 'der Abschnitt', 'Abschnitte', 'la sección; el párrafo', 'section'],
  ['n', 'die Liste', 'Listen', 'la lista', 'list'],
  ['n', 'der Tipp', 'Tipps', 'el consejo; el dato', 'tip'],
  ['adv', 'zunächst', 'primero; por de pronto', 'first; initially'],
  ['n', 'der Schritt', 'Schritte', 'el paso', 'step', { note: ['Schritt für Schritt = paso a paso.', 'Schritt für Schritt = step by step.'] }],
  ['v', 'schaffen', 'schafft', 'schaffte', 'hat geschafft', 'lograr; alcanzar', 'manage; make it', { note: ['Con el sentido «crear» es fuerte: schuf, hat geschaffen.', 'Meaning “create” it is strong: schuf, hat geschaffen.'] }],
  ['v', 'verwenden', 'verwendet', 'verwendete', 'hat verwendet', 'usar; emplear', 'use'],
  ['v', 'bilden', 'bildet', 'bildete', 'hat gebildet', 'formar', 'form'],
  ['v', 'klappen', 'klappt', 'klappte', 'hat geklappt', 'resultar; funcionar (coloq.)', 'work out'],
  ['v', 'handeln', 'handelt', 'handelte', 'hat gehandelt', 'actuar; comerciar', 'act; trade', { note: ['Es handelt sich um … = se trata de …', 'Es handelt sich um … = it is about …'] }],
  ['a', 'allgemein', '—', '—', 'general', 'general', { note: ['im Allgemeinen = en general.', 'im Allgemeinen = in general.'] }],
  ['a', 'einzeln', '—', '—', 'individual; suelto', 'individual; single']
] });
