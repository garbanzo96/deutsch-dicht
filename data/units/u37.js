/* U37 · Zwar …, doch … */
DD.lexicon.push({ unit: 'u37', words: [
  ['n', 'die These', 'Thesen', 'la tesis', 'thesis'],
  ['n', 'die Auffassung', 'Auffassungen', 'la concepción; la opinión', 'view; conception'],
  ['n', 'die Position', 'Positionen', 'la posición', 'position'],
  ['n', 'der Einwand', 'Einwände', 'la objeción', 'objection'],
  ['n', 'der Leib', 'Leiber', 'el cuerpo (vivido)', 'body (lived)'],
  ['n', 'die Materie', '—', 'la materia', 'matter'],
  ['n', 'der Dualismus', '—', 'el dualismo', 'dualism'],
  ['n', 'der Materialismus', '—', 'el materialismo', 'materialism'],
  ['n', 'der Funktionalismus', '—', 'el funcionalismo', 'functionalism'],
  ['n', 'das Erleben', '—', 'la vivencia; la experiencia vivida', 'experience (lived)'],
  ['n', 'die Lücke', 'Lücken', 'el vacío; la brecha', 'gap'],
  ['n', 'das Symbol', 'Symbole', 'el símbolo', 'symbol'],
  ['n', 'die Fledermaus', 'Fledermäuse', 'el murciélago', 'bat'],
  ['n', 'der Aufsatz', 'Aufsätze', 'el ensayo; el artículo', 'essay; paper'],
  ['v', 'ein|wenden', 'wendet ein', 'wandte ein', 'hat eingewandt', 'objetar', 'object', { forms: { wendete: 'prt.3s', eingewendet: 'pp' } }],
  ['v', 'entgegen|halten', 'hält entgegen', 'hielt entgegen', 'hat entgegengehalten', 'oponer; replicar', 'counter'],
  ['v', 'vertreten', 'vertritt', 'vertrat', 'hat vertreten', 'defender (una postura); representar', 'hold (a view); represent'],
  ['v', 'argumentieren', 'argumentiert', 'argumentierte', 'hat argumentiert', 'argumentar', 'argue'],
  ['v', 'reduzieren', 'reduziert', 'reduzierte', 'hat reduziert', 'reducir', 'reduce', { rek: 'auf + A' }],
  ['v', 'zurück|führen', 'führt zurück', 'führte zurück', 'hat zurückgeführt', 'atribuir; reducir a', 'trace back', { rek: 'auf + A' }],
  ['v', 'zusammen|hängen', 'hängt zusammen', 'hing zusammen', 'hat zusammengehangen', 'estar relacionado', 'be connected', { rek: 'mit + D' }],
  ['v', 'an|setzen', 'setzt an', 'setzte an', 'hat angesetzt', 'empezar; apuntar (una crítica); fijar', 'start; come in; schedule'],
  ['v', 'hin|weisen', 'weist hin', 'wies hin', 'hat hingewiesen', 'señalar; indicar', 'point out', { rek: 'auf + A' }],
  ['n', 'der Begriff', 'Begriffe', 'el concepto; el término', 'concept; term'],
  ['n', 'das Zeichen', 'Zeichen', 'el signo; la señal', 'sign; character'],
  ['n', 'die Verletzung', 'Verletzungen', 'la lesión; la herida', 'injury'],
  ['v', 'bestimmen', 'bestimmt', 'bestimmte', 'hat bestimmt', 'determinar; decidir', 'determine'],
  ['v', 'wirken', 'wirkt', 'wirkte', 'hat gewirkt', 'actuar; surtir efecto; parecer', 'work; have an effect; seem'],
  ['v', 'erfassen', 'erfasst', 'erfasste', 'hat erfasst', 'captar; registrar', 'capture; grasp'],
  ['v', 'erfüllen', 'erfüllt', 'erfüllte', 'hat erfüllt', 'cumplir', 'fulfil'],
  ['v', 'aus|lösen', 'löst aus', 'löste aus', 'hat ausgelöst', 'desencadenar', 'trigger'],
  ['a', 'vollständig', null, null, 'completo', 'complete'],
  ['a', 'grundsätzlich', '—', '—', 'fundamental; por principio', 'fundamental; in principle'],
  ['a', 'überzeugend', null, null, 'convincente', 'convincing'],
  ['a', 'fraglich', '—', '—', 'dudoso; cuestionable', 'questionable'],
  ['a', 'subjektiv', null, null, 'subjetivo', 'subjective'],
  ['a', 'objektiv', null, null, 'objetivo', 'objective'],
  ['a', 'unbestritten', '—', '—', 'indiscutido', 'undisputed'],
  ['conj', 'obgleich', 'aunque (formal)', 'although (formal)', { type: 'sub', forms: { obschon: 'lemma' } }],
  ['conj', 'selbst wenn', 'aun cuando; incluso si', 'even if', { id: 'conj-selbst-wenn', type: 'sub' }],
  ['phr', 'Zugegeben, …', 'es cierto que…; concedido…', 'admittedly…'],
  ['phr', 'Dem ist entgegenzuhalten, dass …', 'a ello cabe oponer que…', 'against this it must be said that…'],
  ['phr', 'die These vertreten, dass …', 'defender la tesis de que…', 'hold the thesis that…'],
  ['phr', 'Wie dem auch sei, …', 'sea como sea…', 'be that as it may…']
] });

DD.unit('u37', {
  minutes: 70,
  goals: [
    { es: 'Conceder y objetar con precisión: zwar … doch, es mag sein, dass …, aber; so … auch; selbst wenn; obgleich.', en: 'Concede and object precisely: zwar … doch, es mag sein, dass …, aber; so … auch; selbst wenn; obgleich.' },
    { es: 'Referir posiciones ajenas: X vertritt die These, dass …; X zufolge; nach Auffassung von X; X wendet ein, dass …', en: 'Report others’ positions: X vertritt die These, dass …; X zufolge; nach Auffassung von X; X wendet ein, dass …' },
    { es: 'Leer una exposición de filosofía de la mente y reconstruir su estructura argumentativa.', en: 'Read an exposition in philosophy of mind and reconstruct its argumentative structure.' }
  ],
  grammar: ['g-concession', 'g-argument', 'g-k1'],
  lesson: [
    { b: 'concept', de: 'Konzession', t: { es: 'Argumentar bien exige conceder lo que el adversario tiene de razón antes de objetar. El alemán tiene un repertorio graduado: desde el neutro zwar … aber hasta el formal obgleich y el enfático so … auch.', en: 'Good argument means conceding what the opponent gets right before objecting. German has a graded repertoire: from neutral zwar … aber to formal obgleich and emphatic so … auch.' } },
    { b: 'table', h: { es: 'Fórmulas de concesión', en: 'Concessive formulas' }, c: [{ es: 'Fórmula', en: 'Formula' }, { es: 'Orden', en: 'Order' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['zwar …, aber / doch', 'V2 · V2', 'Das Argument ist [zwar] elegant, [doch] es überzeugt nicht.'],
      ['Es mag sein / stimmen, dass …, aber', { es: 'V final · V2', en: 'V last · V2' }, '[Es mag sein], dass das stimmt, [aber] …'],
      ['Zugegeben, …', 'V2', '[Zugegeben], die Theorie ist einfach.'],
      ['obwohl · obgleich · auch wenn', { es: 'V final', en: 'V last' }, '[Obgleich] die Daten fehlen, …'],
      ['selbst wenn', { es: 'V final (a menudo K2)', en: 'V last (often K2)' }, '[Selbst wenn] das wahr wäre, …'],
      ['so … auch', { es: 'V final + principal sin inversión', en: 'V last + main clause without inversion' }, '[So] überzeugend das Argument [auch] ist, es löst das Problem nicht.'],
      ['wie / was / wer … auch (immer)', { es: 'ídem', en: 'same' }, '[Was] man [auch] sagt, die Frage bleibt.']
    ], n: { es: 'Tras so … auch, wie … auch o was … auch, la oración principal suele mantener su orden normal (es löst), sin invertir sujeto y verbo.', en: 'After so … auch, wie … auch or was … auch, the main clause usually keeps normal order (es löst), without inverting subject and verb.' } },
    { b: 'table', h: { es: 'Objetar', en: 'Objecting' }, c: [{ es: 'Fórmula', en: 'Formula' }, { es: 'Registro', en: 'Register' }], r: [
      ['Dagegen lässt sich einwenden, dass …', { es: 'académico', en: 'academic' }],
      ['Man könnte einwenden, dass …', { es: 'académico, prudente', en: 'academic, cautious' }],
      ['Dem ist entgegenzuhalten, dass …', { es: 'muy formal', en: 'very formal' }],
      ['Fraglich ist jedoch, ob …', { es: 'académico', en: 'academic' }],
      ['Das überzeugt (mich) nicht, weil …', { es: 'neutro', en: 'neutral' }],
      ['Da bin ich anderer Meinung.', { es: 'conversación', en: 'conversation' }]
    ] },
    { b: 'table', h: { es: 'Referir posiciones', en: 'Reporting positions' }, c: [{ es: 'Fórmula', en: 'Formula' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['X vertritt die These / Auffassung, dass …', 'Descartes [vertritt die Auffassung], dass Geist und Körper verschieden [seien].'],
      ['X zufolge / nach Auffassung von X', '[Nach Auffassung] der Funktionalisten [ist] der Geist eine Organisation.'],
      ['X argumentiert, dass …', 'Searle [argumentiert], dass Symbole kein Verstehen [erzeugten].'],
      ['X wendet ein, dass …', 'Kritiker [wenden ein], das Beispiel [sei] irreführend.'],
      ['X weist darauf hin, dass …', 'Nagel [weist darauf hin], dass Erleben subjektiv [ist].']
    ], n: { es: 'Al referir posiciones se usa con frecuencia el Konjunktiv I (U31): marca que la tesis es del autor citado, no del que escribe.', en: 'When reporting positions the Konjunktiv I (U31) is frequent: it marks the thesis as the cited author’s, not the writer’s.' } },
    { b: 'slots', h: { es: 'Estructura de un párrafo argumentativo', en: 'Structure of an argumentative paragraph' }, c: [{ es: 'Paso', en: 'Step' }, { es: 'Función', en: 'Function' }, { es: 'Fórmula típica', en: 'Typical formula' }], v: [], r: [
      ['1', { es: 'tesis ajena', en: 'other’s thesis' }, 'X vertritt die These, dass …'],
      ['2', { es: 'concesión', en: 'concession' }, 'Zwar spricht dafür, dass …'],
      ['3', { es: 'objeción', en: 'objection' }, 'Dagegen lässt sich jedoch einwenden, dass …'],
      ['4', { es: 'conclusión propia', en: 'own conclusion' }, 'Daraus folgt / Somit …']
    ] },
    { b: 'note', tone: 'l1', t: { es: 'zwar no significa «verdaderamente»: anuncia una concesión y exige su contrapeso (aber, doch, jedoch). «Es verdad que…, pero…» es la traducción natural.', en: 'zwar does not mean “truly”: it announces a concession and requires its counterweight (aber, doch, jedoch). “Admittedly…, but…” is the natural translation.' } }
  ],
  chunks: [
    ['Das Argument ist zwar elegant, doch es überzeugt nicht.', 'El argumento es elegante, es cierto, pero no convence.', 'The argument is elegant, admittedly, but it is not convincing.'],
    ['Dagegen lässt sich einwenden, dass …', 'A esto se puede objetar que…', 'Against this one can object that…'],
    ['So überzeugend das klingt, es bleibt eine Hypothese.', 'Por convincente que suene, sigue siendo una hipótesis.', 'However convincing that sounds, it remains a hypothesis.'],
    ['Selbst wenn das stimmen sollte, ist die Frage nicht gelöst.', 'Aun si eso fuera cierto, la pregunta no está resuelta.', 'Even if that were true, the question is not solved.'],
    ['Wie dem auch sei, wir müssen weiterdenken.', 'Sea como sea, tenemos que seguir pensando.', 'Be that as it may, we must think further.']
  ],
  errors: [
    ['Zwar ist es elegant.', 'Zwar ist es elegant, aber/doch …', { es: 'zwar exige un contrapeso.', en: 'zwar requires a counterweight.' }],
    ['So überzeugend das Argument auch ist, löst es das Problem nicht.', '…, es löst das Problem nicht.', { es: 'Tras so … auch: principal sin inversión (lo más frecuente).', en: 'After so … auch: main clause without inversion (most common).' }],
    ['Er vertritt die These, dass Geist und Körper sind verschieden.', '…, dass Geist und Körper verschieden sind / seien.', { es: 'dass: verbo al final.', en: 'dass: verb last.' }],
    ['Selbst wenn ist das wahr, …', 'Selbst wenn das wahr ist / wäre, …', { es: 'selbst wenn subordina.', en: 'selbst wenn subordinates.' }],
    ['Dagegen lässt sich einwenden, dass es ist falsch.', '…, dass es falsch ist.', { es: 'dass: verbo al final.', en: 'dass: verb last.' }]
  ],
  examples: [
    ['Zwar lassen sich viele Prozesse im Gehirn messen, doch das Erleben selbst bleibt unsichtbar.', 'Es cierto que muchos procesos cerebrales se pueden medir, pero la vivencia misma sigue invisible.', 'Admittedly many brain processes can be measured, yet experience itself remains invisible.'],
    ['Es mag sein, dass die Theorie einfach ist; aber Einfachheit ist kein Beweis.', 'Puede que la teoría sea simple; pero la simplicidad no es una prueba.', 'The theory may be simple; but simplicity is no proof.'],
    ['Obgleich die Kritik berechtigt ist, übersieht sie einen wichtigen Punkt.', 'Aunque la crítica es legítima, pasa por alto un punto importante.', 'Although the criticism is justified, it overlooks an important point.'],
    ['Dem ist entgegenzuhalten, dass auch Tiere Schmerz empfinden.', 'A ello cabe oponer que también los animales sienten dolor.', 'Against this it must be said that animals also feel pain.'],
    ['Was man auch misst, die Frage nach dem Erleben bleibt offen.', 'Se mida lo que se mida, la pregunta por la vivencia queda abierta.', 'Whatever one measures, the question of experience remains open.'],
    ['Nach Auffassung vieler Forscher lässt sich Bewusstsein naturwissenschaftlich erklären.', 'Según muchos investigadores, la conciencia se puede explicar desde las ciencias naturales.', 'In the view of many researchers, consciousness can be explained scientifically.']
  ],
  reading: 'r-u37',
  exercises: [
    { t: 'choice', ph: 1, q: 'Das Argument ist zwar elegant, ___ es überzeugt nicht.', o: ['doch', 'denn', 'weil'], a: 0, x: { es: 'zwar … doch / aber.', en: 'zwar … doch / aber.' } },
    { t: 'choice', ph: 1, q: 'So überzeugend das klingt, ___.', o: ['bleibt es eine Hypothese', 'es bleibt eine Hypothese', 'eine Hypothese es bleibt'], a: 1, x: { es: 'Principal sin inversión tras so … auch / so …', en: 'Main clause without inversion after so … (auch).' } },
    { t: 'choice', ph: 1, q: '«Fraglich ist jedoch, ob …» sirve para…', o: ['conceder', 'objetar', 'resumir'], a: 1, x: { es: 'Fórmula de objeción.', en: 'Objection formula.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona fórmula y función.', en: 'Match formula and function.' }, pairs: [['Zugegeben, …', { es: 'concesión', en: 'concession' }], ['Dem ist entgegenzuhalten, …', { es: 'objeción', en: 'objection' }], ['X vertritt die These, …', { es: 'referir posición', en: 'report a position' }], ['Wie dem auch sei, …', { es: 'cerrar y avanzar', en: 'close and move on' }]], x: { es: 'Bloques de la argumentación.', en: 'Building blocks of argument.' } },
    { t: 'rf', ph: 1, q: '«zwar» significa «verdaderamente».', a: false, x: { es: 'zwar anuncia una concesión.', en: 'zwar announces a concession.' } },
    { t: 'choice', ph: 1, q: '___ das wahr wäre, wäre die Frage nicht gelöst.', o: ['Selbst wenn', 'Zwar', 'Trotzdem'], a: 0, x: { es: 'selbst wenn + K2: concesión hipotética.', en: 'selbst wenn + K2: hypothetical concession.' } },
    { t: 'gap', ph: 2, q: 'Es mag ___, dass das stimmt, aber …', a: 'sein', alt: ['stimmen'], x: { es: 'Es mag sein, dass …', en: 'Es mag sein, dass …' } },
    { t: 'gap', ph: 2, q: 'Dagegen lässt sich ___, dass … (objetar)', a: 'einwenden', x: { es: 'einwenden = objetar.', en: 'einwenden = object.' } },
    { t: 'gap', ph: 2, q: 'Descartes ___ die These, dass Geist und Körper verschieden seien.', a: 'vertritt', x: { es: 'eine These vertreten.', en: 'eine These vertreten.' } },
    { t: 'gap', ph: 2, q: 'Was man ___ misst, die Frage bleibt offen.', a: 'auch', x: { es: 'was … auch = lo que sea que.', en: 'was … auch = whatever.' } },
    { t: 'gap', ph: 2, q: 'Kritiker weisen darauf ___, dass das Beispiel irreführend sei.', a: 'hin', x: { es: 'hinweisen auf.', en: 'hinweisen auf.' } },
    { t: 'gap', ph: 2, q: '___ die Kritik berechtigt ist, übersieht sie einen Punkt. (formal: aunque)', a: 'Obgleich', alt: ['Obwohl', 'Obschon'], x: { es: 'obgleich = obwohl (formal).', en: 'obgleich = obwohl (formal).' } },
    { t: 'order', ph: 2, w: ['Zwar', 'ist', 'die Theorie', 'einfach', ',', 'doch', 'sie', 'erklärt', 'nicht alles'], a: 'Zwar ist die Theorie einfach, doch sie erklärt nicht alles.', x: { es: 'zwar en el Vorfeld + V2; doch en posición 0 (o + V2).', en: 'zwar in the Vorfeld + V2; doch in position 0 (or + V2).' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con «zwar … aber».', en: 'Rewrite with “zwar … aber”.' }, q: 'Obwohl die Theorie elegant ist, überzeugt sie nicht.', a: 'Die Theorie ist zwar elegant, aber sie überzeugt nicht.', alt: ['Zwar ist die Theorie elegant, aber sie überzeugt nicht.', 'Die Theorie ist zwar elegant, überzeugt aber nicht.'], x: { es: 'Subordinada → dos principales.', en: 'Subordinate → two main clauses.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con «so … auch».', en: 'Rewrite with “so … auch”.' }, q: 'Das Argument ist sehr überzeugend, aber es löst das Problem nicht.', a: 'So überzeugend das Argument auch ist, es löst das Problem nicht.', x: { es: 'so + adjetivo … auch + V final; principal sin inversión.', en: 'so + adjective … auch + V last; main clause without inversion.' } },
    { t: 'write', ph: 3, s: { es: 'A esto se puede objetar que la vivencia es subjetiva.', en: 'Against this one can object that experience is subjective.' }, a: 'Dagegen lässt sich einwenden, dass das Erleben subjektiv ist.', alt: ['Dagegen lässt sich einwenden, dass Erleben subjektiv ist.', 'Dagegen kann man einwenden, dass das Erleben subjektiv ist.'], x: { es: 'Fórmula de objeción + dass.', en: 'Objection formula + dass.' } },
    { t: 'write', ph: 3, s: { es: 'Sea como sea, la pregunta sigue abierta.', en: 'Be that as it may, the question remains open.' }, a: 'Wie dem auch sei, die Frage bleibt offen.', alt: ['Wie dem auch sei, bleibt die Frage offen.'], x: { es: 'Fórmula fija; principal normalmente sin inversión.', en: 'Fixed phrase; main clause usually without inversion.' } },
    { t: 'listen', ph: 3, a: 'Das Argument ist zwar elegant, doch es überzeugt nicht.', x: { es: 'zwar … doch.', en: 'zwar … doch.' } }
  ],
  summary: [
    { es: 'Conceder: zwar … aber/doch; es mag sein, dass …; zugegeben; obwohl/obgleich; selbst wenn (+ K2).', en: 'Concede: zwar … aber/doch; es mag sein, dass …; zugegeben; obwohl/obgleich; selbst wenn (+ K2).' },
    { es: 'Concesión enfática: so / wie / was … auch + V final; la principal suele ir sin inversión.', en: 'Emphatic concession: so / wie / was … auch + V last; the main clause usually without inversion.' },
    { es: 'Objetar: dagegen lässt sich einwenden; man könnte einwenden; dem ist entgegenzuhalten; fraglich ist, ob.', en: 'Object: dagegen lässt sich einwenden; man könnte einwenden; dem ist entgegenzuhalten; fraglich ist, ob.' },
    { es: 'Referir: X vertritt die These, dass … (K1); X zufolge; nach Auffassung von X; X wendet ein; X weist darauf hin.', en: 'Report: X vertritt die These, dass … (K1); X zufolge; nach Auffassung von X; X wendet ein; X weist darauf hin.' }
  ]
});

DD.readings.push({
  id: 'r-u37', unit: 'u37', level: 'C1', kind: 'unit',
  de: 'Was ist es, ein Bewusstsein zu haben?', es: '¿Qué es tener conciencia?', en: 'What is it to have consciousness?',
  genre: { es: 'Exposición filosófica · serie Leipzig 37', en: 'Philosophical exposition · Leipzig series 37' },
  intro: { es: 'Para el seminario, Lena resume en un texto breve tres posiciones clásicas sobre la relación entre mente y cerebro. Las posiciones y fechas son reales; la exposición, en palabras propias, es original y simplificada: no son citas.', en: 'For the seminar, Lena summarises three classic positions on the relation between mind and brain in a short text. Positions and dates are real; the exposition, in her own words, is original and simplified: these are not quotations.' },
  focus: { es: 'vertritt die These · zufolge · nach Auffassung · K1 al referir · zwar … doch · so … auch · selbst wenn · dagegen lässt sich einwenden · fraglich ist.', en: 'vertritt die These · zufolge · nach Auffassung · K1 for reporting · zwar … doch · so … auch · selbst wenn · dagegen lässt sich einwenden · fraglich ist.' },
  source: { type: 'original' },
  p: [
    ['Wie hängen Geist und Gehirn zusammen? Diese Frage gehört zu den ältesten der Philosophie. René Descartes vertrat im 17. Jahrhundert die Auffassung, Geist und Körper seien zwei verschiedene Substanzen: Der Körper sei ausgedehnt und messbar, der Geist hingegen denke. Dieser Dualismus erklärt zwar, warum sich unser Erleben so anders anfühlt als ein physikalischer Prozess. Dagegen lässt sich jedoch einwenden, dass völlig unklar bleibt, wie zwei so verschiedene Substanzen aufeinander wirken sollen.', '¿Cómo se relacionan la mente y el cerebro? Esta pregunta es de las más antiguas de la filosofía. René Descartes sostuvo en el siglo XVII que mente y cuerpo son dos sustancias distintas: el cuerpo sería extenso y medible; la mente, en cambio, pensaría. Este dualismo explica, es cierto, por qué nuestra vivencia se siente tan distinta de un proceso físico. Pero a esto se puede objetar que sigue sin estar nada claro cómo dos sustancias tan distintas podrían actuar una sobre la otra.', 'How are mind and brain connected? This question is among the oldest in philosophy. In the 17th century René Descartes held the view that mind and body are two different substances: the body is extended and measurable, while the mind thinks. This dualism does explain why our experience feels so different from a physical process. Against it, however, one can object that it remains completely unclear how two such different substances are supposed to act on each other.'],
    ['Viele heutige Forscher vertreten deshalb die These, dass sich der Geist auf Prozesse im Gehirn zurückführen lasse. Nach Auffassung des Funktionalismus ist ein mentaler Zustand durch seine Funktion bestimmt, nicht durch das Material, aus dem er besteht. Schmerz wäre demnach das, was durch Verletzungen ausgelöst wird und Vermeidungsverhalten hervorruft. Selbst wenn ein Computer diese Funktion erfüllte, hätte er diesem Ansatz zufolge Schmerzen.', 'Por eso muchos investigadores actuales defienden la tesis de que la mente se puede reducir a procesos en el cerebro. Según el funcionalismo, un estado mental está determinado por su función, no por el material del que está hecho. El dolor sería, entonces, lo que es desencadenado por lesiones y provoca conductas de evitación. Aun si un computador cumpliera esa función, según este enfoque tendría dolor.', 'Many researchers today therefore hold the thesis that the mind can be traced back to processes in the brain. According to functionalism, a mental state is determined by its function, not by the material it consists of. Pain would thus be whatever is triggered by injuries and causes avoidance behaviour. Even if a computer fulfilled this function, according to this approach it would be in pain.'],
    ['Genau hier setzen zwei berühmte Einwände an. John Searle argumentierte 1980 mit dem Gedankenexperiment des „Chinesischen Zimmers“: Eine Person, die nach Regeln chinesische Zeichen sortiert, ohne Chinesisch zu können, könne perfekte Antworten liefern und trotzdem nichts verstehen. Symbole zu verarbeiten sei folglich nicht dasselbe wie Verstehen. Thomas Nagel hatte bereits 1974 in seinem Aufsatz „Wie ist es, eine Fledermaus zu sein?“ darauf hingewiesen, dass jedes Erleben eine subjektive Perspektive habe, die keine objektive Beschreibung vollständig erfasse.', 'Justo aquí apuntan dos objeciones famosas. John Searle argumentó en 1980 con el experimento mental de la «habitación china»: una persona que ordena signos chinos según reglas, sin saber chino, podría dar respuestas perfectas y aun así no entender nada. Procesar símbolos no sería, por tanto, lo mismo que entender. Thomas Nagel ya había señalado en 1974, en su ensayo «¿Qué se siente ser un murciélago?», que toda vivencia tiene una perspectiva subjetiva que ninguna descripción objetiva capta por completo.', 'This is exactly where two famous objections come in. In 1980 John Searle argued with the thought experiment of the “Chinese Room”: a person who sorts Chinese characters according to rules, without knowing Chinese, could give perfect answers and still understand nothing. Processing symbols is therefore not the same as understanding. As early as 1974 Thomas Nagel, in his essay “What is it like to be a bat?”, had pointed out that every experience has a subjective perspective that no objective description fully captures.'],
    ['So überzeugend diese Einwände auch sind, sie beweisen nicht, dass der Dualismus recht hat. Zugegeben, die „Lücke“ zwischen Gehirnprozessen und Erleben ist bis heute nicht geschlossen. Fraglich ist jedoch, ob sie grundsätzlich nicht zu schließen ist oder ob uns nur noch die richtigen Begriffe fehlen. Wie dem auch sei: Für Lena ergibt sich daraus eine Frage, die sie im Seminar diskutieren möchte. Wenn Verstehen mehr ist als Symbole verarbeiten – was genau tut ein Mensch, der eine Sprache versteht?', 'Por convincentes que sean estas objeciones, no prueban que el dualismo tenga razón. Es cierto que la «brecha» entre procesos cerebrales y vivencia no se ha cerrado hasta hoy. Pero es dudoso si es imposible cerrarla por principio o si solo nos faltan todavía los conceptos adecuados. Sea como sea: para Lena de ello se desprende una pregunta que quiere discutir en el seminario. Si entender es más que procesar símbolos, ¿qué hace exactamente una persona que entiende una lengua?', 'However convincing these objections are, they do not prove that dualism is right. Admittedly, the “gap” between brain processes and experience has not been closed to this day. It is questionable, however, whether it cannot be closed in principle or whether we simply still lack the right concepts. Be that as it may: for Lena this yields a question she wants to discuss in the seminar. If understanding is more than processing symbols – what exactly does a person do who understands a language?']
  ],
  gloss: [
    ['René', { es: 'René (nombre)', en: 'René (name)' }],
    ['Descartes', { es: 'Descartes (1596–1650)', en: 'Descartes (1596–1650)' }],
    ['Substanzen', { es: 'sustancias', en: 'substances' }],
    ['ausgedehnt', { es: 'extenso (con extensión)', en: 'extended' }],
    ['messbar', { es: 'medible', en: 'measurable' }],
    ['physikalischer', { es: 'físico', en: 'physical' }],
    ['unklar', { es: 'poco claro', en: 'unclear' }],
    ['aufeinander', { es: 'uno sobre otro', en: 'on each other' }],
    ['heutige', { es: 'actuales', en: 'present-day' }],
    ['mentaler', { es: 'mental', en: 'mental' }],
    ['bestimmt', { es: 'determinado (bestimmen)', en: 'determined (bestimmen)' }],
    ['besteht', { es: 'consiste (bestehen aus)', en: 'consists (bestehen aus)' }],
    ['Vermeidungsverhalten', { es: 'conducta de evitación', en: 'avoidance behaviour' }],
    ['hervorruft', { es: 'provoca (hervorrufen)', en: 'causes (hervorrufen)' }],
    ['John', { es: 'John (nombre)', en: 'John (name)' }],
    ['Searle', { es: 'John Searle (n. 1932)', en: 'John Searle (b. 1932)' }],
    ['Gedankenexperiment', { es: 'experimento mental', en: 'thought experiment' }],
    ['Chinesischen', { es: 'chino', en: 'Chinese' }],
    ['chinesische', { es: 'chinos', en: 'Chinese' }],
    ['sortiert', { es: 'ordena (sortieren)', en: 'sorts (sortieren)' }],
    ['Chinesisch', { es: 'chino (idioma)', en: 'Chinese (language)' }],
    ['perfekte', { es: 'perfectas', en: 'perfect' }],
    ['dasselbe', { es: 'lo mismo', en: 'the same' }],
    ['Thomas', { es: 'Thomas (nombre)', en: 'Thomas (name)' }],
    ['Nagel', { es: 'Thomas Nagel (n. 1937)', en: 'Thomas Nagel (b. 1937)' }],
    ['beweisen', { es: 'prueban', en: 'prove' }],
    ['recht', { es: 'razón (recht haben)', en: 'right (recht haben)' }],
    ['Gehirnprozessen', { es: 'procesos cerebrales', en: 'brain processes' }],
    ['geschlossen', { es: 'cerrado (schließen)', en: 'closed (schließen)' }],
  ],
  q: [
    { t: 'choice', q: 'Welche Auffassung vertrat Descartes?', o: ['Geist und Körper sind zwei verschiedene Substanzen.', 'Der Geist ist eine Funktion des Gehirns.', 'Es gibt keinen Geist.'], a: 0, x: { es: 'Dualismo de sustancias.', en: 'Substance dualism.' } },
    { t: 'rf', q: 'Dem Funktionalismus zufolge kommt es auf das Material an, aus dem ein Zustand besteht.', a: false, x: { es: 'Importa la función, no el material.', en: 'Function matters, not material.' } },
    { t: 'choice', q: 'Was soll das „Chinesische Zimmer“ zeigen?', o: ['Dass Computer Chinesisch lernen können.', 'Dass Symbole zu verarbeiten nicht dasselbe ist wie Verstehen.', 'Dass Chinesisch schwer ist.'], a: 1, x: { es: 'Procesar símbolos ≠ entender.', en: 'Processing symbols ≠ understanding.' } },
    { t: 'choice', q: 'Worauf weist Nagel hin?', o: ['Auf die subjektive Perspektive jedes Erlebens.', 'Auf die Funktion von Schmerz.', 'Auf neue Messmethoden.'], a: 0, x: { es: 'Perspectiva subjetiva.', en: 'Subjective perspective.' } },
    { t: 'rf', q: 'Laut Text beweisen die Einwände, dass der Dualismus recht hat.', a: false, x: { es: '«…sie beweisen nicht, dass der Dualismus recht hat».', en: '“…sie beweisen nicht, dass der Dualismus recht hat”.' } }
  ]
});
