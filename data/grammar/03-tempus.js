/* Gramática · Tempus */
(function () {
  const M = (es, en) => ({ es, en });
  DD.grammarTopic('k-tempus', [
    {
      id: 'g-tense-overview', level: 'A2', de: 'Die sechs Tempora im Überblick', es: 'Los seis tiempos de un vistazo', en: 'The six tenses at a glance',
      summary: M('El alemán tiene seis tiempos del indicativo: dos simples (Präsens, Präteritum) y cuatro compuestos (Perfekt, Plusquamperfekt, Futur I, Futur II). En la práctica, el Perfekt domina el pasado hablado y el Präteritum el escrito; el futuro se expresa a menudo con el presente.', 'German has six indicative tenses: two simple (Präsens, Präteritum) and four compound (Perfekt, Plusquamperfekt, Futur I, Futur II). In practice the Perfekt dominates the spoken past and the Präteritum the written one; the future is often expressed with the present.'),
      blocks: [
        { b: 'table', h: M('Formación', 'Formation'), c: ['Tempus', M('Estructura', 'Structure'), 'machen', 'fahren'], r: [
          ['Präsens', M('raíz + terminación', 'stem + ending'), 'er macht', 'er fährt'],
          ['Präteritum', M('débil -te / fuerte Ablaut', 'weak -te / strong ablaut'), 'er machte', 'er fuhr'],
          ['Perfekt', 'haben / sein + PII', 'er hat gemacht', 'er ist gefahren'],
          ['Plusquamperfekt', 'hatte / war + PII', 'er hatte gemacht', 'er war gefahren'],
          ['Futur I', 'werden + Inf.', 'er wird machen', 'er wird fahren'],
          ['Futur II', 'werden + PII + haben / sein', 'er wird gemacht haben', 'er wird gefahren sein']
        ] },
        { b: 'table', h: M('Qué tiempo usar', 'Which tense to use'), c: [M('Situación', 'Situation'), M('Tiempo preferido', 'Preferred tense'), M('Ejemplo', 'Example')], r: [
          [M('pasado en conversación, correos', 'past in conversation, e-mails'), 'Perfekt', 'Gestern [habe] ich lange [gearbeitet].'],
          [M('narración escrita, noticias, cuentos', 'written narration, news, stories'), 'Präteritum', 'Es [war] einmal ein König.'],
          [M('sein, haben, modales (también hablando)', 'sein, haben, modals (also in speech)'), 'Präteritum', 'Ich [war] müde und [musste] schlafen.'],
          [M('anterior a otro pasado', 'prior to another past'), 'Plusquamperfekt', 'Nachdem er [gegessen hatte], ging er.'],
          [M('futuro con indicación de tiempo', 'future with a time marker'), 'Präsens', 'Morgen [fahre] ich nach Berlin.'],
          [M('intención, predicción, promesa', 'intention, prediction, promise'), 'Futur I', 'Ich [werde] dich nie [vergessen].'],
          [M('suposición sobre el pasado', 'assumption about the past'), 'Futur II', 'Er [wird] den Bus [verpasst haben].']
        ] },
        { b: 'note', tone: 'l1', t: M('El alemán no distingue aspecto como el español (comía / comí): Präteritum y Perfekt no se oponen por aspecto sino por registro. «Ich habe gegessen» puede ser «comí», «he comido» o «comía», según el contexto.', 'German does not mark aspect the way English does with progressive forms: Präteritum and Perfekt differ by register, not aspect. “Ich habe gegessen” can be “I ate”, “I have eaten” or “I was eating” depending on context.') }
      ],
      examples: [['Ich habe das Buch schon gelesen.', 'Ya leí el libro.', 'I have already read the book.'], ['Als wir ankamen, hatte der Film schon begonnen.', 'Cuando llegamos, la película ya había empezado.', 'When we arrived, the film had already started.'], ['Bis Montag werde ich alles erledigt haben.', 'Para el lunes lo habré terminado todo.', 'By Monday I will have done everything.']]
    },
    {
      id: 'g-perfect', level: 'A2', de: 'Perfekt', es: 'Perfekt (pasado compuesto)', en: 'Perfekt (present perfect)',
      summary: M('haben o sein conjugado (posición 2) + Partizip II al final. sein: verbos de movimiento sin objeto (gehen, fahren, fliegen), de cambio de estado (aufstehen, einschlafen, sterben, werden) y sein, bleiben, passieren. Todos los demás: haben.', 'Conjugated haben or sein (position 2) + Partizip II at the end. sein: movement verbs without object (gehen, fahren, fliegen), change-of-state verbs (aufstehen, einschlafen, sterben, werden) and sein, bleiben, passieren. All others: haben.'),
      blocks: [
        { b: 'formula', h: M('Fórmula', 'Formula'), f: [{ t: M('haben / sein (conjugado, pos. 2)', 'haben / sein (finite, pos. 2)'), key: 1 }, '+', '…', '+', { t: M('Partizip II (al final)', 'Partizip II (at the end)'), key: 1 }], ex: ['Ich habe einen Brief geschrieben.', 'Sie ist nach Berlin gefahren.'] },
        { b: 'table', h: M('¿haben o sein?', 'haben or sein?'), c: [M('Auxiliar', 'Auxiliary'), M('Grupo', 'Group'), M('Ejemplos', 'Examples')], r: [
          ['sein', M('movimiento de A a B (sin objeto directo)', 'movement from A to B (no direct object)'), 'gehen, kommen, fahren, fliegen, laufen, reisen, steigen, fallen'],
          ['sein', M('cambio de estado', 'change of state'), 'aufstehen, einschlafen, aufwachen, sterben, werden, wachsen, verschwinden'],
          ['sein', M('excepciones', 'exceptions'), 'sein, bleiben, passieren, geschehen, gelingen, begegnen'],
          ['haben', M('verbos con objeto en acusativo', 'verbs with an accusative object'), 'Ich habe das Auto gefahren. (¡con objeto!)'],
          ['haben', M('reflexivos', 'reflexive'), 'Ich habe mich beeilt.'],
          ['haben', M('modales y casi todo lo demás', 'modals and almost everything else'), 'schlafen, arbeiten, essen, lernen, sitzen, stehen, liegen']
        ], n: M('sitzen, stehen, liegen: haben en el norte, sein en el sur, Austria y Suiza.', 'sitzen, stehen, liegen: haben in the north, sein in the south, Austria and Switzerland.') }
      ],
      examples: [['Wir sind gestern ins Kino gegangen.', 'Ayer fuimos al cine.', 'We went to the cinema yesterday.'], ['Hast du gut geschlafen?', '¿Dormiste bien?', 'Did you sleep well?'], ['Was ist passiert?', '¿Qué pasó?', 'What happened?']]
    },
    {
      id: 'g-preterite', level: 'B1', de: 'Präteritum', es: 'Präteritum (pasado simple)', en: 'Präteritum (simple past)',
      summary: M('Débiles: raíz + -te + terminaciones (ich machte, du machtest). Fuertes: raíz con Ablaut, sin -te; 1.ª y 3.ª persona sin terminación (ich/er fuhr). Es el tiempo de la narración escrita; en la conversación se usa con sein, haben, modales y algunos verbos frecuentes (es gab, ich dachte, ich wusste).', 'Weak: stem + -te + endings (ich machte, du machtest). Strong: ablaut stem, no -te; 1st and 3rd person without ending (ich/er fuhr). It is the tense of written narration; in conversation it is used with sein, haben, modals and some frequent verbs (es gab, ich dachte, ich wusste).'),
      blocks: [
        { b: 'table', h: M('Terminaciones', 'Endings'), c: ['', M('débil: machen', 'weak: machen'), M('débil: arbeiten', 'weak: arbeiten'), M('fuerte: fahren', 'strong: fahren'), M('mixto: denken', 'mixed: denken'), 'sein', 'haben'], r: [
          ['ich', 'mach[te]', 'arbeit[ete]', 'fuhr', 'dach[te]', 'war', 'hatte'],
          ['du', 'mach[test]', 'arbeit[etest]', 'fuhr[st]', 'dach[test]', 'warst', 'hattest'],
          ['er / sie / es', 'mach[te]', 'arbeit[ete]', 'fuhr', 'dach[te]', 'war', 'hatte'],
          ['wir', 'mach[ten]', 'arbeit[eten]', 'fuhr[en]', 'dach[ten]', 'waren', 'hatten'],
          ['ihr', 'mach[tet]', 'arbeit[etet]', 'fuhr[t]', 'dach[tet]', 'wart', 'hattet'],
          ['sie / Sie', 'mach[ten]', 'arbeit[eten]', 'fuhr[en]', 'dach[ten]', 'waren', 'hatten']
        ], n: M('Las formas de los verbos fuertes deben aprenderse: véase la lista de formas principales.', 'Strong verb forms must be learned: see the list of principal parts.') },
        { b: 'note', tone: 'tip', t: M('Fuertes con raíz en -s, -ß, -z, -t, -d: du + -est (du lasest, du fandest; formas raras). En la práctica, la 2.ª persona del Präteritum casi solo aparece en literatura.', 'Strong verbs with stems in -s, -ß, -z, -t, -d: du + -est (du lasest, du fandest; rare forms). In practice the 2nd person of the Präteritum appears almost only in literature.') }
      ],
      examples: [['Als Kind wohnte ich in Valparaíso.', 'De niño vivía en Valparaíso.', 'As a child I lived in Valparaíso.'], ['Plötzlich klingelte das Telefon.', 'De repente sonó el teléfono.', 'Suddenly the phone rang.'], ['Es gab keine Karten mehr.', 'Ya no quedaban entradas.', 'There were no tickets left.']]
    },
    {
      id: 'g-pluperfect', level: 'B1', de: 'Plusquamperfekt', es: 'Pluscuamperfecto', en: 'Past perfect',
      summary: M('hatte / war + Partizip II. Expresa un hecho anterior a otro hecho pasado. Típico con nachdem y en narraciones en Präteritum.', 'hatte / war + Partizip II. Expresses an event prior to another past event. Typical with nachdem and in Präteritum narratives.'),
      blocks: [
        { b: 'table', h: M('Secuencia temporal con nachdem', 'Time sequence with nachdem'), c: [M('Subordinada (antes)', 'Subordinate (earlier)'), M('Principal (después)', 'Main clause (later)')], r: [
          ['Nachdem er gegessen [hatte],', 'ging er spazieren. (Präteritum)'],
          ['Nachdem sie angekommen [war],', 'rief sie ihre Mutter an.'],
          ['Nachdem ich gegessen [habe],', 'gehe ich spazieren. (Perfekt → Präsens)']
        ], n: M('Regla de tiempos con nachdem: Plusquamperfekt + Präteritum/Perfekt; Perfekt + Präsens/Futur.', 'Tense rule with nachdem: Plusquamperfekt + Präteritum/Perfekt; Perfekt + Präsens/Futur.') }
      ],
      examples: [['Ich hatte den Schlüssel vergessen und musste warten.', 'Había olvidado la llave y tuve que esperar.', 'I had forgotten the key and had to wait.'], ['Als wir kamen, war er schon gegangen.', 'Cuando llegamos, ya se había ido.', 'When we came, he had already left.'], ['Nachdem sie die Prüfung bestanden hatte, feierte sie.', 'Después de aprobar el examen, celebró.', 'After she had passed the exam, she celebrated.']]
    },
    {
      id: 'g-future', level: 'A2', de: 'Futur I', es: 'Futuro I', en: 'Future I',
      summary: M('werden (posición 2) + infinitivo al final. Expresa intención firme, promesa o predicción; con wohl, wahrscheinlich, suposición sobre el presente. Si el contexto ya indica futuro, se prefiere el presente.', 'werden (position 2) + infinitive at the end. Expresses firm intention, promise or prediction; with wohl, wahrscheinlich, an assumption about the present. If the context already marks the future, the present is preferred.'),
      blocks: [
        { b: 'table', h: M('Usos del Futur I', 'Uses of Future I'), c: [M('Uso', 'Use'), M('Ejemplo', 'Example')], r: [
          [M('intención firme', 'firm intention'), 'Ich [werde] mehr Sport [machen].'],
          [M('promesa', 'promise'), 'Ich [werde] dich nie [vergessen].'],
          [M('predicción', 'prediction'), 'Morgen [wird] es [regnen].'],
          [M('suposición presente (+ wohl)', 'present assumption (+ wohl)'), 'Sie [wird] (wohl) im Büro [sein].'],
          [M('orden enérgica', 'emphatic order'), 'Du [wirst] jetzt sofort ins Bett [gehen]!']
        ] }
      ],
      examples: [['Nächstes Jahr werde ich in Berlin studieren.', 'El próximo año estudiaré en Berlín.', 'Next year I will study in Berlin.'], ['Das wird schon klappen.', 'Ya va a resultar.', 'It’ll work out.'], ['Er wird wohl krank sein.', 'Estará enfermo.', 'He’s probably ill.']]
    },
    {
      id: 'g-futur2', level: 'B2', de: 'Futur II', es: 'Futuro II', en: 'Future II',
      summary: M('werden + Partizip II + haben / sein. Dos usos: acción terminada en un momento futuro, y —mucho más frecuente— suposición sobre el pasado (con wohl).', 'werden + Partizip II + haben / sein. Two uses: action completed by a future point, and —much more often— an assumption about the past (with wohl).'),
      blocks: [
        { b: 'table', h: M('Usos del Futur II', 'Uses of Future II'), c: [M('Uso', 'Use'), M('Ejemplo', 'Example'), M('Paráfrasis', 'Paraphrase')], r: [
          [M('futuro terminado', 'completed future'), 'Bis Freitag [werde] ich den Text [geschrieben haben].', 'Am Freitag ist der Text fertig.'],
          [M('suposición sobre el pasado', 'assumption about the past'), 'Er [wird] den Bus (wohl) [verpasst haben].', 'Wahrscheinlich hat er den Bus verpasst.']
        ] }
      ],
      examples: [['In einer Stunde werden wir angekommen sein.', 'En una hora habremos llegado.', 'In an hour we will have arrived.'], ['Sie wird es wohl vergessen haben.', 'Lo habrá olvidado.', 'She will probably have forgotten.'], ['Bis dahin wird sich vieles verändert haben.', 'Para entonces muchas cosas habrán cambiado.', 'By then a lot will have changed.']]
    }
  ]);
})();
