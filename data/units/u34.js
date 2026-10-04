/* U34 · Das dürfte stimmen */
DD.lexicon.push({ unit: 'u34', words: [
  ['adv', 'vermutlich', 'presumiblemente', 'presumably'],
  ['adv', 'angeblich', 'supuestamente', 'allegedly'],
  ['adv', 'offenbar', 'por lo visto; evidentemente', 'apparently; evidently'],
  ['adv', 'anscheinend', 'al parecer', 'apparently'],
  ['adv', 'scheinbar', 'aparentemente (pero no en realidad)', 'seemingly (but not really)'],
  ['adv', 'zweifellos', 'sin duda', 'undoubtedly'],
  ['adv', 'möglicherweise', 'posiblemente', 'possibly'],
  ['adv', 'längst', 'hace mucho; desde hace tiempo', 'long since'],
  ['n', 'das Rätsel', 'Rätsel', 'el enigma; el acertijo', 'riddle; puzzle'],
  ['n', 'die Vermutung', 'Vermutungen', 'la suposición', 'supposition'],
  ['n', 'die Spur', 'Spuren', 'la huella; la pista', 'trace; clue'],
  ['n', 'der Dachboden', 'Dachböden', 'el entretecho; el desván', 'attic'],
  ['n', 'die Handschrift', 'Handschriften', 'la letra (manuscrita); el manuscrito', 'handwriting; manuscript'],
  ['n', 'der Umschlag', 'Umschläge', 'el sobre', 'envelope'],
  ['n', 'der Stempel', 'Stempel', 'el timbre; el matasellos', 'stamp; postmark'],
  ['n', 'das Tagebuch', 'Tagebücher', 'el diario (íntimo)', 'diary'],
  ['n', 'das Jahrzehnt', 'Jahrzehnte', 'la década', 'decade'],
  ['n', 'die Flucht', 'Fluchten', 'la huida', 'escape; flight'],
  ['n', 'die Urgroßmutter', 'Urgroßmütter', 'la bisabuela', 'great-grandmother'],
  ['n', 'der Zeuge', 'Zeugen', 'el testigo', 'witness (m.)', { n: 1 }],
  ['n', 'die Zeugin', 'Zeuginnen', 'la testigo', 'witness (f.)'],
  ['v', 'stammen', 'stammt', 'stammte', 'hat gestammt', 'provenir; datar', 'come from; date from', { rek: 'aus + D' }],
  ['v', 'fliehen', 'flieht', 'floh', 'ist geflohen', 'huir', 'flee'],
  ['v', 'verstecken', 'versteckt', 'versteckte', 'hat versteckt', 'esconder', 'hide'],
  ['v', 'auf|bewahren', 'bewahrt auf', 'bewahrte auf', 'hat aufbewahrt', 'guardar; conservar', 'keep; store'],
  ['v', 'erben', 'erbt', 'erbte', 'hat geerbt', 'heredar', 'inherit'],
  ['a', 'heimlich', '—', '—', 'secreto; a escondidas', 'secret; secretly'],
  ['a', 'unwahrscheinlich', null, null, 'improbable', 'unlikely'],
  ['phr', 'Das kann nicht sein.', 'no puede ser', 'that can’t be'],
  ['phr', 'Das dürfte stimmen.', 'eso debe de ser cierto', 'that’s probably right']
] });

DD.unit('u34', {
  minutes: 60,
  goals: [
    { es: 'Expresar grados de certeza con modales subjetivos: muss, dürfte, wird, kann/könnte, kann nicht.', en: 'Express degrees of certainty with subjective modals: muss, dürfte, wird, kann/könnte, kann nicht.' },
    { es: 'Referir rumores y afirmaciones ajenas con sollen y wollen: Er soll reich sein. Sie will nichts gesehen haben.', en: 'Report rumours and others’ claims with sollen and wollen: Er soll reich sein. Sie will nichts gesehen haben.' },
    { es: 'Formar el Futur II y el «infinitivo de pasado» (gemacht haben, gekommen sein) para conjeturas sobre el pasado.', en: 'Form the Futur II and the “past infinitive” (gemacht haben, gekommen sein) for conjectures about the past.' }
  ],
  grammar: ['g-modal-subjective', 'g-futur2', 'g-modal-words'],
  lesson: [
    { b: 'concept', de: 'subjektive Modalverben', t: { es: 'Los modales tienen dos usos. Objetivo: habla de obligación, permiso o capacidad del sujeto (Er muss arbeiten = tiene que trabajar). Subjetivo: el hablante evalúa qué tan seguro está de algo (Er muss krank sein = seguro que está enfermo). El uso subjetivo es central en textos argumentativos y científicos.', en: 'Modals have two uses. Objective: they talk about the subject’s obligation, permission or ability (Er muss arbeiten = he has to work). Subjective: the speaker assesses how sure they are (Er muss krank sein = he must be ill). The subjective use is central in argumentative and scientific texts.' } },
    { b: 'table', h: { es: 'La escala de certeza', en: 'The certainty scale' }, c: [{ es: 'Certeza', en: 'Certainty' }, { es: 'Modal', en: 'Modal' }, { es: 'Ejemplo', en: 'Example' }, { es: 'Palabra modal equivalente', en: 'Equivalent modal word' }], r: [
      ['≈ 95 %', '[muss]', 'Er [muss] zu Hause sein. Das Licht brennt.', 'sicher, bestimmt, zweifellos'],
      ['≈ 75 %', '[dürfte]', 'Das [dürfte] stimmen.', 'wahrscheinlich, vermutlich'],
      ['≈ 70 %', '[wird] (wohl)', 'Sie [wird] (wohl) im Büro sein.', 'wohl, wahrscheinlich'],
      ['≈ 50 %', '[kann] / [könnte]', 'Das [könnte] ein Fehler sein.', 'vielleicht, möglicherweise'],
      ['≈ 0 %', '[kann nicht]', 'Das [kann nicht] stimmen.', 'unmöglich, auf keinen Fall']
    ], n: { es: 'dürfte (K2 de dürfen) en uso subjetivo no tiene nada que ver con permiso: es la forma más típica de prudencia académica.', en: 'dürfte (K2 of dürfen) in its subjective use has nothing to do with permission: it is the most typical form of academic caution.' } },
    { b: 'table', h: { es: 'sollen y wollen: lo que dicen otros', en: 'sollen and wollen: what others say' }, c: ['', { es: 'Fuente', en: 'Source' }, { es: 'Ejemplo', en: 'Example' }, { es: 'Paráfrasis', en: 'Paraphrase' }], r: [
      ['[sollen]', { es: 'terceros (rumor, informe)', en: 'third parties (rumour, report)' }, 'Er [soll] sehr reich sein.', 'Man sagt, er sei sehr reich.'],
      ['[wollen]', { es: 'el propio sujeto (afirmación dudosa)', en: 'the subject itself (doubtful claim)' }, 'Sie [will] nichts gesehen haben.', 'Sie behauptet, sie habe nichts gesehen.']
    ] },
    { b: 'concept', de: 'Infinitiv Perfekt', t: { es: 'Para conjeturar sobre el pasado, el modal subjetivo va en presente y le sigue un «infinitivo de pasado»: Partizip II + haben / sein. Er [muss] den Zug [verpasst haben]. Sie [dürfte] schon [angekommen sein]. Er [soll] in den Westen [geflohen sein].', en: 'To conjecture about the past, the subjective modal stays in the present and is followed by a “past infinitive”: Partizip II + haben / sein. Er [muss] den Zug [verpasst haben]. Sie [dürfte] schon [angekommen sein]. Er [soll] in den Westen [geflohen sein].' } },
    { b: 'slots', h: { es: 'Conjetura sobre el pasado', en: 'Conjecture about the past' }, c: ['Vorfeld', { es: 'Modal', en: 'Modal' }, 'Mittelfeld', { es: 'Infinitivo de pasado', en: 'Past infinitive' }], v: [1, 3], r: [
      ['Er', 'muss', 'den Zug', 'verpasst haben.'],
      ['Der Brief', 'dürfte', 'aus dem Jahr 1961', 'stammen.'],
      ['Sie', 'soll', 'damals heimlich', 'geflohen sein.'],
      ['Er', 'wird', 'das wohl', 'vergessen haben.']
    ], n: { es: 'Compara: Er musste den Zug nehmen (objetivo, pasado: tuvo que) ≠ Er muss den Zug genommen haben (subjetivo: seguro que lo tomó).', en: 'Compare: Er musste den Zug nehmen (objective, past: had to) ≠ Er muss den Zug genommen haben (subjective: he must have taken it).' } },
    { b: 'concept', de: 'Futur II', t: { es: 'werden + Partizip II + haben / sein. Dos usos: (1) acción terminada en el futuro: Bis Freitag [werde] ich den Text [geschrieben haben]. (2) — mucho más frecuente — suposición sobre el pasado, casi siempre con wohl: Er [wird] den Bus (wohl) [verpasst haben].', en: 'werden + Partizip II + haben / sein. Two uses: (1) completed action in the future: Bis Freitag [werde] ich den Text [geschrieben haben]. (2) — much more frequent — assumption about the past, almost always with wohl: Er [wird] den Bus (wohl) [verpasst haben].' } },
    { b: 'list', h: { es: 'Palabras modales: matices finos', en: 'Modal words: fine distinctions' }, cols: 2, r: [
      ['[angeblich]', { es: 'según dicen (y lo dudo)', en: 'allegedly (and I doubt it)' }], ['[offenbar] / [anscheinend]', { es: 'según los indicios', en: 'judging by the evidence' }],
      ['[scheinbar]', { es: 'parece, pero no es así', en: 'it seems, but it isn’t so' }], ['[vermutlich]', { es: 'supongo que', en: 'presumably' }],
      ['[zweifellos]', { es: 'sin duda', en: 'without doubt' }], ['[möglicherweise]', { es: 'es posible que', en: 'possibly' }]
    ], n: { es: 'Er ist scheinbar ruhig = parece tranquilo, pero no lo está. Er ist anscheinend ruhig = al parecer está tranquilo (probablemente sí).', en: 'Er ist scheinbar ruhig = he looks calm but isn’t. Er ist anscheinend ruhig = apparently he is calm (probably true).' } },
    { b: 'note', tone: 'l1', t: { es: 'El español usa «deber de» para la conjetura (debe de estar en casa) y el futuro (estará en casa); el alemán usa muss / dürfte y el Futur con wohl. «Er muss gekommen sein» = «debe de haber venido».', en: 'English uses must/might have for conjecture; German uses muss / dürfte + past infinitive and the future with wohl. “Er muss gekommen sein” = “he must have come”.' } }
  ],
  chunks: [
    ['Das dürfte stimmen.', 'Eso debe de ser cierto.', 'That’s probably right.'],
    ['Er muss den Zug verpasst haben.', 'Debe de haber perdido el tren.', 'He must have missed the train.'],
    ['Sie soll sehr gut Deutsch sprechen.', 'Dicen que habla muy bien alemán.', 'She is said to speak German very well.'],
    ['Er will nichts gewusst haben.', 'Afirma no haber sabido nada.', 'He claims not to have known anything.'],
    ['Sie wird wohl schon angekommen sein.', 'Ya habrá llegado.', 'She’ll have arrived by now.']
  ],
  errors: [
    ['Er musste krank sein. (= seguro que está enfermo)', 'Er muss krank sein.', { es: 'Uso subjetivo: modal en presente.', en: 'Subjective use: modal in the present.' }],
    ['Er muss den Zug verpasst.', 'Er muss den Zug verpasst haben.', { es: 'Infinitivo de pasado: PII + haben.', en: 'Past infinitive: PII + haben.' }],
    ['Sie dürfte schon angekommen haben.', 'Sie dürfte schon angekommen sein.', { es: 'ankommen → sein.', en: 'ankommen → sein.' }],
    ['Er soll nichts gesehen haben. (= él dice que…)', 'Er will nichts gesehen haben.', { es: 'Afirmación del propio sujeto: wollen.', en: 'The subject’s own claim: wollen.' }],
    ['Er ist scheinbar krank. (= al parecer, sí está enfermo)', 'Er ist anscheinend krank.', { es: 'scheinbar = solo apariencia.', en: 'scheinbar = mere appearance.' }]
  ],
  examples: [
    ['Bei diesem Verkehr dürfte er erst gegen acht ankommen.', 'Con este tráfico, probablemente llegue recién a eso de las ocho.', 'With this traffic he will probably only arrive around eight.'],
    ['Das kann nicht stimmen – ich habe ihn gestern noch gesehen.', 'Eso no puede ser cierto: ayer todavía lo vi.', 'That can’t be right – I saw him only yesterday.'],
    ['Der Täter soll durch das Fenster geflohen sein.', 'Al parecer, el autor huyó por la ventana.', 'The culprit is said to have fled through the window.'],
    ['Sie will das Buch in zwei Tagen gelesen haben.', 'Ella afirma haber leído el libro en dos días.', 'She claims to have read the book in two days.'],
    ['Bis Ende des Monats werden wir die Arbeit abgeschlossen haben.', 'Para fin de mes habremos terminado el trabajo.', 'By the end of the month we will have finished the work.'],
    ['Die Studie ist offenbar sorgfältig durchgeführt worden.', 'Por lo visto, el estudio se realizó con cuidado.', 'The study has evidently been carried out carefully.']
  ],
  reading: 'r-u34',
  exercises: [
    { t: 'choice', ph: 1, q: 'Das Licht brennt. Er ___ zu Hause sein. (casi seguro)', o: ['muss', 'könnte', 'soll'], a: 0, x: { es: 'muss subjetivo ≈ 95 %.', en: 'Subjective muss ≈ 95%.' } },
    { t: 'choice', ph: 1, q: 'Das ___ stimmen. (probable, prudente)', o: ['darf', 'dürfte', 'durfte'], a: 1, x: { es: 'dürfte ≈ 75 %.', en: 'dürfte ≈ 75%.' } },
    { t: 'choice', ph: 1, q: 'Man sagt, er sei reich. = Er ___ reich sein.', o: ['will', 'soll', 'muss'], a: 1, x: { es: 'Rumor de terceros: sollen.', en: 'Third-party rumour: sollen.' } },
    { t: 'choice', ph: 1, q: 'Sie behauptet, sie habe nichts gesehen. = Sie ___ nichts gesehen haben.', o: ['soll', 'will', 'dürfte'], a: 1, x: { es: 'Afirmación del sujeto: wollen.', en: 'The subject’s claim: wollen.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona modal y grado de certeza.', en: 'Match modal and degree of certainty.' }, pairs: [['muss', '≈ 95 %'], ['dürfte', '≈ 75 %'], ['könnte', '≈ 50 %'], ['kann nicht', '≈ 0 %']], x: { es: 'La escala de certeza.', en: 'The certainty scale.' } },
    { t: 'rf', ph: 1, q: '«Er ist scheinbar müde» significa que de verdad está cansado.', a: false, x: { es: 'scheinbar = solo lo parece.', en: 'scheinbar = he only seems so.' } },
    { t: 'gap', ph: 2, q: 'Er muss den Zug verpasst ___.', a: 'haben', x: { es: 'verpassen → haben.', en: 'verpassen → haben.' } },
    { t: 'gap', ph: 2, q: 'Sie dürfte schon angekommen ___.', a: 'sein', x: { es: 'ankommen → sein.', en: 'ankommen → sein.' } },
    { t: 'gap', ph: 2, q: 'Er ___ das wohl vergessen haben. (Futur II)', a: 'wird', x: { es: 'werden + PII + haben.', en: 'werden + PII + haben.' } },
    { t: 'gap', ph: 2, q: 'Bis Freitag werde ich den Text ___ haben. (schreiben)', a: 'geschrieben', x: { es: 'Futur II: acción terminada en el futuro.', en: 'Futur II: action completed in the future.' } },
    { t: 'gap', ph: 2, q: 'Der Brief ___ aus den Sechzigerjahren stammen. (probable)', a: 'dürfte', x: { es: 'Conjetura prudente.', en: 'Cautious conjecture.' } },
    { t: 'gap', ph: 2, q: 'Der Täter soll durch das Fenster ___ sein. (fliehen)', a: 'geflohen', x: { es: 'fliehen → ist geflohen.', en: 'fliehen → ist geflohen.' } },
    { t: 'order', ph: 2, w: ['Er', 'muss', 'den Schlüssel', 'vergessen', 'haben'], a: 'Er muss den Schlüssel vergessen haben.', x: { es: 'Modal en 2; infinitivo de pasado al final.', en: 'Modal in 2; past infinitive at the end.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con un modal subjetivo.', en: 'Rewrite with a subjective modal.' }, q: 'Wahrscheinlich ist er krank.', a: 'Er dürfte krank sein.', alt: ['Er wird wohl krank sein.', 'Er wird krank sein.'], x: { es: 'wahrscheinlich → dürfte / wird wohl.', en: 'wahrscheinlich → dürfte / wird wohl.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con sollen.', en: 'Rewrite with sollen.' }, q: 'Man sagt, dass sie nach Berlin gezogen ist.', a: 'Sie soll nach Berlin gezogen sein.', x: { es: 'Rumor + pasado: soll + PII + sein.', en: 'Rumour + past: soll + PII + sein.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con muss (certeza sobre el pasado).', en: 'Rewrite with muss (certainty about the past).' }, q: 'Ich bin sicher, dass er den Bus verpasst hat.', a: 'Er muss den Bus verpasst haben.', x: { es: 'sicher → muss + infinitivo de pasado.', en: 'sicher → muss + past infinitive.' } },
    { t: 'write', ph: 3, s: { es: 'Eso no puede ser cierto.', en: 'That can’t be true.' }, a: 'Das kann nicht stimmen.', alt: ['Das kann nicht wahr sein.'], x: { es: 'kann nicht = imposibilidad.', en: 'kann nicht = impossibility.' } },
    { t: 'listen', ph: 3, a: 'Er muss den Zug verpasst haben.', x: { es: 'Conjetura segura sobre el pasado.', en: 'Confident conjecture about the past.' } }
  ],
  summary: [
    { es: 'Certeza: muss (≈95 %) › dürfte (≈75 %) › wird wohl › kann / könnte (≈50 %) › kann nicht (0 %).', en: 'Certainty: muss (≈95%) › dürfte (≈75%) › wird wohl › kann / könnte (≈50%) › kann nicht (0%).' },
    { es: 'sollen = dicen otros; wollen = lo afirma el sujeto (con duda).', en: 'sollen = others say; wollen = the subject claims (doubtfully).' },
    { es: 'Pasado: modal en presente + PII + haben / sein: Er muss es gewusst haben.', en: 'Past: present modal + PII + haben / sein: Er muss es gewusst haben.' },
    { es: 'Futur II = werden + PII + haben / sein: futuro terminado o suposición sobre el pasado (con wohl).', en: 'Futur II = werden + PII + haben / sein: completed future or assumption about the past (with wohl).' }
  ]
});

DD.readings.push({
  id: 'r-u34', unit: 'u34', level: 'B2', kind: 'unit',
  de: 'Der Brief vom Dachboden', es: 'La carta del entretecho', en: 'The letter from the attic',
  genre: { es: 'Relato · serie Leipzig 34', en: 'Story · Leipzig series 34' },
  intro: { es: 'En la casa de la abuela de Lena, en las afueras de Leipzig, Lena y Tomás encuentran una caja con una carta antigua. Sin saber nada seguro, hacen hipótesis. (Historia ficticia en un contexto histórico real: la construcción del Muro, agosto de 1961.)', en: 'At Lena’s grandmother’s house on the outskirts of Leipzig, Lena and Tomás find a box with an old letter. Knowing nothing for sure, they form hypotheses. (Fictional story in a real historical context: the building of the Wall, August 1961.)' },
  focus: { es: 'muss / dürfte / könnte / kann nicht + infinitivo de pasado · soll / will · Futur II con wohl · angeblich, offenbar, vermutlich.', en: 'muss / dürfte / könnte / kann nicht + past infinitive · soll / will · Futur II with wohl · angeblich, offenbar, vermutlich.' },
  source: { type: 'original' },
  p: [
    ['Lenas Oma will den Dachboden aufräumen, und Lena und Tomás helfen ihr. Ganz hinten, unter alten Zeitungen, finden sie eine kleine Kiste aus Holz. Darin liegen ein Foto und ein Brief in einem gelben Umschlag. Auf dem Foto sieht man einen jungen Mann vor dem Leipziger Hauptbahnhof.', 'La abuela de Lena quiere ordenar el entretecho, y Lena y Tomás la ayudan. Muy al fondo, bajo diarios viejos, encuentran una pequeña caja de madera. Dentro hay una foto y una carta en un sobre amarillo. En la foto se ve a un hombre joven frente a la estación central de Leipzig.', 'Lena’s grandmother wants to tidy the attic, and Lena and Tomás help her. Right at the back, under old newspapers, they find a small wooden box. Inside are a photo and a letter in a yellow envelope. The photo shows a young man in front of Leipzig main station.'],
    ['„Der Brief dürfte ziemlich alt sein“, sagt Tomás. „Das Papier ist ganz gelb.“ Lena schaut auf den Stempel. „Westberlin, 20. August 1961. Eine Woche nach dem Bau der Mauer! Dann muss der Mann kurz vorher in den Westen gegangen sein.“ – „Oder er könnte schon früher dort gelebt haben“, meint Tomás. „Das wissen wir nicht.“', '«La carta debe de ser bastante antigua», dice Tomás. «El papel está todo amarillo.» Lena mira el matasellos. «Berlín Occidental, 20 de agosto de 1961. ¡Una semana después de la construcción del Muro! Entonces el hombre debe de haberse ido al Oeste poco antes.» —«O podría haber vivido allí desde antes», opina Tomás. «Eso no lo sabemos.»', '“The letter must be quite old,” says Tomás. “The paper is completely yellow.” Lena looks at the postmark. “West Berlin, 20 August 1961. One week after the Wall was built! Then the man must have gone to the West shortly before.” – “Or he could have lived there earlier,” says Tomás. “We don’t know that.”'],
    ['Der Brief beginnt mit „Meine liebe Ilse“. Ilse ist der Vorname von Lenas Oma. „Er muss sie sehr gut gekannt haben“, sagt Lena leise. Der Mann schreibt, er habe nicht mehr warten können, und er hoffe, dass sie ihm bald folgen werde. Am Ende steht nur ein Buchstabe: „K.“ Tomás denkt nach. „Das kann nicht ihr Bruder gewesen sein. So schreibt man keiner Schwester.“', 'La carta comienza con «Mi querida Ilse». Ilse es el nombre de la abuela de Lena. «Debe de haberla conocido muy bien», dice Lena en voz baja. El hombre escribe que ya no podía esperar más y que espera que ella lo siga pronto. Al final hay solo una letra: «K.». Tomás reflexiona. «No puede haber sido su hermano. Así no se le escribe a una hermana.»', 'The letter begins with “My dear Ilse”. Ilse is the first name of Lena’s grandmother. “He must have known her very well,” says Lena quietly. The man writes that he could not wait any longer and that he hopes she will follow him soon. At the end there is only a letter: “K.” Tomás thinks. “That can’t have been her brother. You don’t write to a sister like that.”'],
    ['Lena erinnert sich an eine alte Familiengeschichte. Ihre Oma soll als junge Frau einen Freund gehabt haben, der angeblich nach Westberlin geflohen ist. Oma selbst will ihn nie wieder gesehen haben. „Vermutlich hat sie den Brief all die Jahre heimlich aufbewahrt“, sagt Lena. „Opa wird davon wohl nichts gewusst haben.“ – „Und K.?“, fragt Tomás. „Der wird inzwischen längst eine eigene Familie gehabt haben.“', 'Lena recuerda una vieja historia familiar. Su abuela, de joven, habría tenido un novio que supuestamente huyó a Berlín Occidental. La propia abuela afirma no haberlo vuelto a ver nunca. «Seguramente guardó la carta en secreto todos estos años», dice Lena. «El abuelo no habrá sabido nada de eso.» —«¿Y K.?», pregunta Tomás. «Ese ya habrá tenido hace tiempo su propia familia.»', 'Lena remembers an old family story. As a young woman her grandmother is said to have had a boyfriend who allegedly fled to West Berlin. Grandma herself claims never to have seen him again. “She presumably kept the letter secretly all these years,” says Lena. “Grandpa probably didn’t know anything about it.” – “And K.?” asks Tomás. “He will long since have had a family of his own.”'],
    ['In diesem Moment kommt Oma die Treppe herauf. Sie sieht den Brief in Lenas Hand und bleibt stehen. Lange sagt sie nichts. Dann lächelt sie. „Den habe ich seit sechzig Jahren gesucht“, sagt sie. „Kommt, ich koche uns einen Kaffee. Das ist eine lange Geschichte.“', 'En ese momento la abuela sube la escalera. Ve la carta en la mano de Lena y se detiene. Durante un largo rato no dice nada. Luego sonríe. «Esa la he buscado durante sesenta años», dice. «Vengan, les preparo un café. Es una historia larga.»', 'At that moment Grandma comes up the stairs. She sees the letter in Lena’s hand and stops. For a long time she says nothing. Then she smiles. “I’ve been looking for that for sixty years,” she says. “Come on, I’ll make us a coffee. It’s a long story.”']
  ],
  gloss: [
    ['hinten', { es: 'al fondo; atrás', en: 'at the back' }],
    ['Darin', { es: 'dentro (de ella)', en: 'inside it' }],
    ['gelben', { es: 'amarillo (gelb)', en: 'yellow' }],
    ['Leipziger', { es: 'de Leipzig', en: 'Leipzig (adj.)' }],
    ['Westberlin', { es: 'Berlín Occidental', en: 'West Berlin' }],
    ['vorher', { es: 'antes', en: 'before' }],
    ['Ilse', { es: 'Ilse (nombre)', en: 'Ilse (name)' }],
    ['leise', { es: 'en voz baja', en: 'quietly' }],
    ['keiner', { es: 'a ninguna (dativo)', en: 'to no (dative)' }],
    ['Familiengeschichte', { es: 'historia familiar', en: 'family story' }],
    ['eigene', { es: 'propia', en: 'own' }],
    ['herauf', { es: 'hacia arriba (hacia el hablante)', en: 'up (towards the speaker)' }],
    ['lächelt', { es: 'sonríe (lächeln)', en: 'smiles (lächeln)' }]
  ],
  q: [
    { t: 'choice', q: 'Wo finden Lena und Tomás die Kiste?', o: ['im Keller', 'auf dem Dachboden', 'im Bahnhof'], a: 1, x: { es: 'En el entretecho de la abuela.', en: 'In grandma’s attic.' } },
    { t: 'rf', q: 'Der Brief wurde eine Woche nach dem Bau der Mauer in Westberlin abgestempelt.', a: true, x: { es: '20 de agosto de 1961.', en: '20 August 1961.' } },
    { t: 'choice', q: 'Warum glaubt Tomás nicht, dass K. Omas Bruder war?', o: ['Wegen des Fotos.', 'Weil man so keiner Schwester schreibt.', 'Weil Oma keinen Bruder hat.'], a: 1, x: { es: 'Por el tono de la carta.', en: 'Because of the tone of the letter.' } },
    { t: 'choice', q: 'Was bedeutet «Oma will ihn nie wieder gesehen haben»?', o: ['Oma behauptet, sie habe ihn nie wieder gesehen.', 'Man sagt, Oma habe ihn wieder gesehen.', 'Oma möchte ihn wiedersehen.'], a: 0, x: { es: 'wollen + infinitivo de pasado = afirmación del sujeto.', en: 'wollen + past infinitive = the subject’s claim.' } },
    { t: 'rf', q: 'Oma ist böse, weil Lena den Brief gefunden hat.', a: false, x: { es: 'Sonríe: lo buscaba hace sesenta años.', en: 'She smiles: she had been looking for it for sixty years.' } }
  ]
});
