/* U15 · Schneller, höher, weiter */
DD.lexicon.push({ unit: 'u15', words: [
  ['conj', 'als', 'que (comparación); cuando (pasado, U18); como (función)', 'than; when (past, U18); as', { type: 'sub', note: ['Comparación: größer als = más grande que.', 'Comparison: größer als = bigger than.'] }],
  ['v', 'vergleichen', 'vergleicht', 'verglich', 'hat verglichen', 'comparar', 'compare'],
  ['v', 'messen', 'misst', 'maß', 'hat gemessen', 'medir', 'measure'],
  ['v', 'steigen', 'steigt', 'stieg', 'ist gestiegen', 'subir; aumentar', 'rise; climb'],
  ['v', 'sinken', 'sinkt', 'sank', 'ist gesunken', 'bajar; hundirse', 'fall; sink'],
  ['v', 'wachsen', 'wächst', 'wuchs', 'ist gewachsen', 'crecer', 'grow'],
  ['a', 'stark', 'stärker', 'am stärksten', 'fuerte', 'strong'],
  ['a', 'schwach', 'schwächer', 'am schwächsten', 'débil', 'weak'],
  ['a', 'hart', 'härter', 'am härtesten', 'duro', 'hard'],
  ['a', 'weich', null, null, 'blando; suave', 'soft'],
  ['a', 'klug', 'klüger', 'am klügsten', 'inteligente; listo', 'clever'],
  ['a', 'dumm', 'dümmer', 'am dümmsten', 'tonto', 'stupid'],
  ['a', 'gesund', 'gesünder', 'am gesündesten', 'sano', 'healthy'],
  ['a', 'leicht', null, null, 'ligero; fácil', 'light; easy'],
  ['a', 'laut', null, null, 'ruidoso; fuerte (sonido)', 'loud', { homonym: 1 }],
  ['a', 'leise', null, null, 'silencioso; bajo (sonido)', 'quiet'],
  ['a', 'heiß', null, null, 'caliente; caluroso', 'hot'],
  ['a', 'trocken', null, null, 'seco', 'dry'],
  ['a', 'nass', 'nasser', 'am nassesten', 'mojado', 'wet'],
  ['a', 'flach', null, null, 'plano', 'flat'],
  ['a', 'tief', null, null, 'profundo', 'deep'],
  ['a', 'dicht', null, null, 'denso; tupido; cerrado', 'dense; tight', { note: ['dicht besiedelt = densamente poblado. El nombre de esta app: alemán denso.', 'dicht besiedelt = densely populated. The name of this app: dense German.'] }],
  ['a', 'verschieden', '—', '—', 'distinto; diverso', 'different; various'],
  ['a', 'gleich', '—', '—', 'igual; mismo', 'same; equal', { id: 'adj-gleich', homonym: 1 }],
  ['a', 'beliebt', null, null, 'popular; querido', 'popular'],
  ['a', 'international', '—', '—', 'internacional', 'international'],
  ['adv', 'genauso', 'igual de; exactamente igual', 'just as'],
  ['adv', 'besonders', 'especialmente', 'especially'],
  ['adv', 'ziemlich', 'bastante', 'fairly; quite'],
  ['adv', 'fast', 'casi', 'almost'],
  ['adv', 'etwa', 'aproximadamente; acaso', 'about; perhaps'],
  ['adv', 'mindestens', 'por lo menos', 'at least'],
  ['adv', 'höchstens', 'como máximo', 'at most'],
  ['adv', 'doppelt', 'doble', 'twice; double'],
  ['n', 'der Vergleich', 'Vergleiche', 'la comparación', 'comparison'],
  ['n', 'der Einwohner', 'Einwohner', 'el habitante', 'inhabitant'],
  ['n', 'die Zahl', 'Zahlen', 'el número; la cifra', 'number; figure'],
  ['n', 'die Fläche', 'Flächen', 'la superficie', 'area; surface'],
  ['n', 'die Hauptstadt', 'Hauptstädte', 'la capital', 'capital city'],
  ['n', 'die Million', 'Millionen', 'el millón', 'million'],
  ['n', 'der Kilometer', 'Kilometer', 'el kilómetro', 'kilometre'],
  ['n', 'der Meter', 'Meter', 'el metro', 'metre'],
  ['n', 'die Küste', 'Küsten', 'la costa', 'coast'],
  ['n', 'die Wüste', 'Wüsten', 'el desierto', 'desert'],
  ['n', 'der Vulkan', 'Vulkane', 'el volcán', 'volcano'],
  ['n', 'das Klima', 'Klimas', 'el clima', 'climate'],
  ['n', 'die Temperatur', 'Temperaturen', 'la temperatura', 'temperature'],
  ['n', 'der Norden', '—', 'el norte', 'north'],
  ['n', 'der Süden', '—', 'el sur', 'south'],
  ['n', 'der Osten', '—', 'el este; el oriente', 'east'],
  ['n', 'der Westen', '—', 'el oeste; el occidente', 'west'],
  ['n', 'das Erdbeben', 'Erdbeben', 'el terremoto', 'earthquake'],
  ['n', 'der Unterschied', 'Unterschiede', 'la diferencia', 'difference'],
  ['n', 'die Gemeinsamkeit', 'Gemeinsamkeiten', 'el punto en común', 'common feature'],
  ['n', 'das Referat', 'Referate', 'la exposición (oral)', 'presentation (talk)'],
  ['n', 'das Prozent', 'Prozent', 'el porcentaje; por ciento', 'per cent'],
  ['name', 'Santiago', 'Santiago (capital de Chile)', 'Santiago (capital of Chile)'],
  ['name', 'Atacama', 'desierto de Atacama', 'Atacama Desert'],
  ['name', 'Zugspitze', 'Zugspitze (montaña más alta de Alemania, 2962 m)', 'Zugspitze (Germany’s highest mountain, 2,962 m)'],
  ['name', 'Ojos del Salado', 'Ojos del Salado (volcán, 6893 m)', 'Ojos del Salado (volcano, 6,893 m)']
] });

DD.unit('u15', {
  minutes: 50,
  goals: [
    { es: 'Formar comparativo y superlativo, incluidos los irregulares (besser, mehr, lieber, höher, näher).', en: 'Form comparatives and superlatives, including irregulars (besser, mehr, lieber, höher, näher).' },
    { es: 'Comparar con als (diferencia) y so … wie (igualdad).', en: 'Compare with als (difference) and so … wie (equality).' },
    { es: 'Usar el superlativo predicativo (am schnellsten) y atributivo (der schnellste Zug).', en: 'Use the predicative (am schnellsten) and attributive (der schnellste Zug) superlative.' }
  ],
  grammar: ['g-comparison', 'g-adj-decl'],
  lesson: [
    { b: 'concept', de: 'Komparativ', t: { es: 'Adjetivo + -er, sin «más»: schnell → schnell[er]. La diferencia se introduce con als: Berlin ist größer als Leipzig. Delante de sustantivo, el comparativo lleva además la terminación normal: ein größer[es] Zimmer.', en: 'Adjective + -er, no “more”: schnell → schneller. The difference is introduced with als: Berlin ist größer als Leipzig. Before a noun the comparative also takes the normal ending: ein größeres Zimmer.' } },
    { b: 'concept', de: 'Superlativ', t: { es: 'Dos formas. Predicativa o adverbial: am + -(e)sten (Der Zug ist am schnellsten). Atributiva: artículo + -(e)st- + terminación (der schnellst[e] Zug, mit dem schnellst[en] Zug).', en: 'Two forms. Predicative or adverbial: am + -(e)sten (Der Zug ist am schnellsten). Attributive: article + -(e)st- + ending (der schnellste Zug, mit dem schnellsten Zug).' } },
    { b: 'table', h: { es: 'Positiv · Komparativ · Superlativ', en: 'Positive · comparative · superlative' }, c: ['Positiv', 'Komparativ', 'Superlativ', { es: 'Tipo', en: 'Type' }], r: [
      ['klein', 'klein[er]', 'am klein[sten]', { es: 'regular', en: 'regular' }],
      ['schnell', 'schnell[er]', 'am schnell[sten]', { es: 'regular', en: 'regular' }],
      ['alt', '[ä]lt[er]', 'am [ä]lt[esten]', { es: 'Umlaut + -est', en: 'umlaut + -est' }],
      ['groß', 'gr[ö]ß[er]', 'am gr[ö]ß[ten]', { es: 'Umlaut (excepción: -ten)', en: 'umlaut (exception: -ten)' }],
      ['warm · kalt · lang · kurz', 'w[ä]rmer · k[ä]lter · l[ä]nger · k[ü]rzer', 'am wärmsten · am kältesten · am längsten · am kürzesten', { es: 'monosílabos con Umlaut', en: 'monosyllables with umlaut' }],
      ['gut', '[besser]', 'am [besten]', { es: 'irregular', en: 'irregular' }],
      ['viel', '[mehr]', 'am [meisten]', { es: 'irregular', en: 'irregular' }],
      ['gern', '[lieber]', 'am [liebsten]', { es: 'irregular', en: 'irregular' }],
      ['hoch', 'h[ö]her', 'am h[ö]chsten', { es: 'irregular (hoh-)', en: 'irregular (hoh-)' }],
      ['nah', 'n[ä]her', 'am n[ä]chsten', { es: 'irregular', en: 'irregular' }],
      ['teuer · dunkel', 'teurer · dunkler', 'am teuersten · am dunkelsten', { es: 'pierden la e', en: 'drop the e' }]
    ], n: { es: '-est tras -d, -t, -s, -ß, -x, -z, -sch (am ältesten, am heißesten, am kürzesten). Umlaut en muchos monosílabos con a, o, u: alt, arm, groß, jung, kalt, klug, kurz, lang, stark, warm, gesund.', en: '-est after -d, -t, -s, -ß, -x, -z, -sch (am ältesten, am heißesten, am kürzesten). Umlaut in many one-syllable adjectives with a, o, u: alt, arm, groß, jung, kalt, klug, kurz, lang, stark, warm, gesund.' } },
    { b: 'pairs', h: { es: 'Diferencia e igualdad', en: 'Difference and equality' }, r: [
      ['Berlin ist größer [als] Leipzig.', 'Leipzig ist nicht [so] groß [wie] Berlin.', { es: 'als = diferencia; (nicht) so … wie = (des)igualdad', en: 'als = difference; (nicht) so … wie = (in)equality' }],
      ['Chile ist [doppelt so] groß [wie] Deutschland.', 'Der Winter in Leipzig ist [viel] kälter [als] in Valparaíso.', { es: 'doppelt so … wie = el doble de…; viel / noch / etwas + comparativo', en: 'doppelt so … wie = twice as…; viel / noch / etwas + comparative' }],
      ['Mein Deutsch ist [genauso] gut [wie] dein Spanisch.', 'Es wird [immer] kälter.', { es: 'genauso … wie = igual de…; immer + comparativo = cada vez más', en: 'genauso … wie = just as…; immer + comparative = more and more' }]
    ] },
    { b: 'table', h: { es: 'Superlativo: dos usos', en: 'Superlative: two uses' }, c: [{ es: 'Uso', en: 'Use' }, { es: 'Forma', en: 'Form' }, { es: 'Ejemplos', en: 'Examples' }], r: [
      [{ es: 'predicativo / adverbial', en: 'predicative / adverbial' }, 'am …sten', 'Der ICE fährt [am schnellsten]. · Im August ist es [am heißesten].'],
      [{ es: 'atributivo (con sustantivo)', en: 'attributive (with a noun)' }, 'der / die / das …ste', 'Der Ojos del Salado ist [der höchste] Vulkan der Welt.'],
      [{ es: 'atributivo, otros casos', en: 'attributive, other cases' }, { es: 'terminaciones normales', en: 'normal endings' }, 'in [der größten] Stadt · mit [den besten] Freunden']
    ] },
    { b: 'note', tone: 'l1', t: { es: '«Más grande que» = größer als (nunca *mehr groß). «Tan grande como» = so groß wie. «El más grande» = der größte / am größten. Pero con sustantivos sí se usa mehr: mehr Einwohner als Berlin.', en: '“Bigger than” = größer als (never *mehr groß). “As big as” = so groß wie. With nouns, mehr is used: mehr Einwohner als Berlin.' } }
  ],
  chunks: [
    ['Berlin ist größer als Leipzig, aber Leipzig ist ruhiger.', 'Berlín es más grande que Leipzig, pero Leipzig es más tranquilo.', 'Berlin is bigger than Leipzig, but Leipzig is quieter.'],
    ['Was gefällt dir besser: der Sommer oder der Winter?', '¿Qué te gusta más: el verano o el invierno?', 'Which do you like better: summer or winter?'],
    ['Am liebsten trinke ich Tee.', 'Lo que más me gusta tomar es té.', 'I like drinking tea best of all.'],
    ['Das ist der beste Kuchen der Welt!', '¡Es el mejor queque del mundo!', 'That’s the best cake in the world!'],
    ['Es wird immer kälter.', 'Hace cada vez más frío.', 'It’s getting colder and colder.'],
    ['Er ist genauso alt wie ich.', 'Tiene la misma edad que yo.', 'He is just as old as me.']
  ],
  errors: [
    ['Berlin ist mehr groß als Leipzig.', 'Berlin ist größer als Leipzig.', { es: 'Comparativo con -er, no con mehr.', en: 'Comparative with -er, not mehr.' }],
    ['Berlin ist größer wie Leipzig.', 'Berlin ist größer als Leipzig.', { es: 'Diferencia: als (wie solo con so … wie).', en: 'Difference: als (wie only with so … wie).' }],
    ['Der Zug ist der schnellste.', 'Der Zug ist am schnellsten.', { es: 'Ambas son posibles, pero sin sustantivo lo normal es am …sten.', en: 'Both exist, but without a noun am …sten is normal.' }],
    ['gut, guter, am gutesten', 'gut, besser, am besten', { es: 'gut es irregular.', en: 'gut is irregular.' }],
    ['ein größer Zimmer', 'ein größeres Zimmer', { es: 'El comparativo atributivo también se declina.', en: 'The attributive comparative also declines.' }]
  ],
  examples: [
    ['Chile ist etwa doppelt so groß wie Deutschland.', 'Chile es aproximadamente el doble de grande que Alemania.', 'Chile is about twice as big as Germany.'],
    ['Deutschland hat viel mehr Einwohner als Chile.', 'Alemania tiene muchos más habitantes que Chile.', 'Germany has many more inhabitants than Chile.'],
    ['Die Atacama ist die trockenste Wüste der Welt.', 'Atacama es el desierto más seco del mundo.', 'The Atacama is the driest desert in the world.'],
    ['Im Winter ist es in Leipzig am kältesten.', 'En invierno es cuando hace más frío en Leipzig.', 'Leipzig is coldest in winter.'],
    ['Mein Zimmer in der WG ist größer und heller.', 'Mi pieza en el depto. compartido es más grande y luminosa.', 'My room in the flatshare is bigger and brighter.'],
    ['Lena läuft schneller als ich, aber ich schwimme besser.', 'Lena corre más rápido que yo, pero yo nado mejor.', 'Lena runs faster than me, but I swim better.']
  ],
  reading: 'r-u15',
  exercises: [
    { t: 'choice', ph: 1, q: 'Berlin ist größer ___ Leipzig.', o: ['als', 'wie', 'so'], a: 0, x: { es: 'Diferencia: comparativo + als.', en: 'Difference: comparative + als.' } },
    { t: 'choice', ph: 1, q: 'Leipzig ist nicht so groß ___ Berlin.', o: ['als', 'wie', 'dass'], a: 1, x: { es: '(nicht) so … wie.', en: '(nicht) so … wie.' } },
    { t: 'choice', ph: 1, p: { es: 'Comparativo de «gut»:', en: 'Comparative of “gut”:' }, o: ['guter', 'besser', 'mehr gut'], a: 1, x: { es: 'gut – besser – am besten.', en: 'gut – besser – am besten.' } },
    { t: 'choice', ph: 1, p: { es: 'Superlativo de «hoch»:', en: 'Superlative of “hoch”:' }, o: ['am hochsten', 'am höchsten', 'am hösten'], a: 1, x: { es: 'hoch – höher – am höchsten.', en: 'hoch – höher – am höchsten.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona positivo y comparativo.', en: 'Match positive and comparative.' }, pairs: [['viel', 'mehr'], ['gern', 'lieber'], ['alt', 'älter'], ['nah', 'näher'], ['teuer', 'teurer']], x: { es: 'Irregulares y con Umlaut.', en: 'Irregular and umlauted forms.' } },
    { t: 'choice', ph: 1, q: 'Das ist ___ Kuchen der Welt.', o: ['der beste', 'am besten', 'besser'], a: 0, x: { es: 'Con sustantivo: der beste + sustantivo.', en: 'With a noun: der beste + noun.' } },
    { t: 'gap', ph: 2, q: 'Im Winter ist es in Leipzig ___ als in Valparaíso. (kalt)', a: 'kälter', x: { es: 'kalt → kälter (Umlaut).', en: 'kalt → kälter (umlaut).' } },
    { t: 'gap', ph: 2, q: 'Lena läuft ___ als ich. (schnell)', a: 'schneller', x: { es: 'schnell + er.', en: 'schnell + er.' } },
    { t: 'gap', ph: 2, q: 'Im August ist es am ___. (heiß)', a: 'heißesten', x: { es: 'Tras -ß: -esten.', en: 'After -ß: -esten.' } },
    { t: 'gap', ph: 2, q: 'Ich trinke ___ Tee als Kaffee. (gern)', a: 'lieber', x: { es: 'gern → lieber.', en: 'gern → lieber.' } },
    { t: 'gap', ph: 2, q: 'Wir suchen eine ___ Wohnung. (groß, comparativo)', a: 'größere', x: { es: 'größer + -e (Akk. f tras eine).', en: 'größer + -e (acc. fem. after eine).' } },
    { t: 'gap', ph: 2, q: 'Das ist die ___ Wüste der Welt. (trocken, superlativo)', a: 'trockenste', x: { es: 'die + trocken + -ste.', en: 'die + trocken + -ste.' } },
    { t: 'gap', ph: 2, q: 'Er ist genauso alt ___ ich.', a: 'wie', x: { es: 'Igualdad: genauso … wie.', en: 'Equality: genauso … wie.' } },
    { t: 'order', ph: 2, w: ['hat', 'Deutschland', 'mehr Einwohner', 'als Chile'], a: 'Deutschland hat mehr Einwohner als Chile.', x: { es: 'Con sustantivo: mehr + sustantivo + als.', en: 'With a noun: mehr + noun + als.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con «nicht so … wie».', en: 'Rewrite with “nicht so … wie”.' }, q: 'Berlin ist größer als Leipzig.', a: 'Leipzig ist nicht so groß wie Berlin.', x: { es: 'Invierte los términos y usa el positivo.', en: 'Swap the terms and use the positive.' } },
    { t: 'write', ph: 3, s: { es: 'El tren es más rápido que el bus.', en: 'The train is faster than the bus.' }, a: 'Der Zug ist schneller als der Bus.', x: { es: 'schneller als.', en: 'schneller als.' } },
    { t: 'write', ph: 3, s: { es: 'Lo que más me gusta es leer.', en: 'Most of all I like reading.' }, a: 'Am liebsten lese ich.', alt: ['Ich lese am liebsten.'], x: { es: 'gern → am liebsten.', en: 'gern → am liebsten.' } },
    { t: 'listen', ph: 3, a: 'Es wird immer kälter.', x: { es: 'immer + comparativo = cada vez más.', en: 'immer + comparative = more and more.' } }
  ],
  summary: [
    { es: 'Comparativo: -er (+ terminación si va ante sustantivo); diferencia con als.', en: 'Comparative: -er (+ ending before a noun); difference with als.' },
    { es: 'Igualdad: (genauso / nicht) so … wie. Intensificar: viel, noch, etwas, doppelt so … wie.', en: 'Equality: (genauso / nicht) so … wie. Intensify: viel, noch, etwas, doppelt so … wie.' },
    { es: 'Superlativo: am …sten (predicativo) / der …ste + sustantivo (atributivo).', en: 'Superlative: am …sten (predicative) / der …ste + noun (attributive).' },
    { es: 'Irregulares: gut–besser–am besten, viel–mehr–am meisten, gern–lieber–am liebsten, hoch–höher–am höchsten, nah–näher–am nächsten.', en: 'Irregulars: gut–besser–am besten, viel–mehr–am meisten, gern–lieber–am liebsten, hoch–höher–am höchsten, nah–näher–am nächsten.' },
    { es: 'Umlaut en monosílabos frecuentes (älter, größer, kälter); -est tras d/t/s/ß/z.', en: 'Umlaut in common monosyllables (älter, größer, kälter); -est after d/t/s/ß/z.' }
  ]
});

DD.readings.push({
  id: 'r-u15', unit: 'u15', level: 'A2', kind: 'unit',
  de: 'Chile und Deutschland im Vergleich', es: 'Chile y Alemania comparados', en: 'Chile and Germany compared',
  genre: { es: 'Exposición · serie Leipzig 15', en: 'Presentation · Leipzig series 15' },
  intro: { es: 'En su curso de alemán, Tomás presenta un breve Referat comparando su país con Alemania. Las cifras son aproximadas y reales.', en: 'In his German class, Tomás gives a short presentation comparing his country with Germany. The figures are approximate and real.' },
  focus: { es: 'größer als, (nicht) so … wie, doppelt so … wie · am höchsten / der höchste · mehr Einwohner.', en: 'größer als, (nicht) so … wie, doppelt so … wie · am höchsten / der höchste · mehr Einwohner.' },
  source: { type: 'original', note: { es: 'Cifras redondeadas: superficie de Chile ≈ 756 000 km² y de Alemania ≈ 357 000 km²; población ≈ 20 y 84 millones; Ojos del Salado 6893 m; Zugspitze 2962 m.', en: 'Rounded figures: Chile ≈ 756,000 km², Germany ≈ 357,000 km²; population ≈ 20 and 84 million; Ojos del Salado 6,893 m; Zugspitze 2,962 m.' } },
  p: [
    ['Mein Referat heute heißt „Chile und Deutschland im Vergleich“. Viele Leute denken, dass Chile ein kleines Land ist. Das stimmt nicht: Chile ist etwa doppelt so groß wie Deutschland. Aber Deutschland hat viel mehr Einwohner: ungefähr vierundachtzig Millionen. In Chile leben nur etwa zwanzig Millionen Menschen. Deutschland ist also viel dichter besiedelt.', 'Mi exposición de hoy se llama «Chile y Alemania comparados». Mucha gente piensa que Chile es un país pequeño. No es cierto: Chile es aproximadamente el doble de grande que Alemania. Pero Alemania tiene muchos más habitantes: unos ochenta y cuatro millones. En Chile viven solo unos veinte millones de personas. Alemania está, por lo tanto, mucho más densamente poblada.', 'My presentation today is called “Chile and Germany compared”. Many people think Chile is a small country. That isn’t true: Chile is about twice as big as Germany. But Germany has many more inhabitants: about eighty-four million. Only about twenty million people live in Chile. So Germany is much more densely populated.'],
    ['Chile ist eines der längsten Länder der Welt, wenn man von Norden nach Süden misst: mehr als viertausend Kilometer! Gleichzeitig ist es sehr schmal, im Durchschnitt nur etwa hundertachtzig Kilometer. Deutschland ist viel kürzer, aber breiter.', 'Chile es uno de los países más largos del mundo si se mide solo de norte a sur: ¡más de cuatro mil kilómetros! Al mismo tiempo es muy angosto, en promedio solo unos ciento ochenta kilómetros. Alemania es mucho más corta, pero más ancha.', 'Chile is one of the longest countries in the world if you only measure north to south: more than four thousand kilometres! At the same time it is very narrow, on average only about a hundred and eighty kilometres. Germany is much shorter, but wider.'],
    ['Auch die Natur ist sehr verschieden. Im Norden von Chile liegt die Atacama, die trockenste Wüste der Welt. Im Süden gibt es Gletscher, Seen und Wälder. Der höchste Berg in Chile ist der Ojos del Salado, ein Vulkan mit fast siebentausend Metern. Er ist der höchste Vulkan der Welt. Der höchste Berg in Deutschland, die Zugspitze, ist nicht einmal halb so hoch: knapp dreitausend Meter.', 'También la naturaleza es muy distinta. En el norte de Chile está Atacama, el desierto más seco del mundo. En el sur hay glaciares, lagos y bosques. La montaña más alta de Chile es el Ojos del Salado, un volcán de casi siete mil metros. Es el volcán más alto del mundo. La montaña más alta de Alemania, la Zugspitze, no alcanza ni la mitad: apenas tres mil metros.', 'Nature is very different too. In the north of Chile lies the Atacama, the driest desert in the world. In the south there are glaciers, lakes and forests. The highest mountain in Chile is Ojos del Salado, a volcano of almost seven thousand metres. It is the highest volcano in the world. Germany’s highest mountain, the Zugspitze, is not even half as high: just under three thousand metres.'],
    ['Und das Klima? Valparaíso hat ein mildes Klima: Der Winter ist nicht so kalt wie in Leipzig, und der Sommer ist trockener. Hier in Leipzig wird es im Winter immer dunkler und kälter. Für mich ist das am schwierigsten! Aber eine Sache ist in beiden Ländern gleich: Das Brot. Nein, das stimmt nicht – das deutsche Brot ist besser. Das muss ich zugeben.', '¿Y el clima? Valparaíso tiene un clima templado: el invierno no es tan frío como en Leipzig y el verano es más seco. Aquí en Leipzig en invierno está cada vez más oscuro y frío. ¡Para mí eso es lo más difícil! Pero una cosa es igual en ambos países: el pan. No, no es cierto: el pan alemán es mejor. Tengo que admitirlo.', 'And the climate? Valparaíso has a mild climate: winter is not as cold as in Leipzig, and summer is drier. Here in Leipzig it gets darker and colder and colder in winter. For me that is the hardest part! But one thing is the same in both countries: the bread. No, that isn’t true – German bread is better. I have to admit it.']
  ],
  gloss: [
    ['vierundachtzig', { es: 'ochenta y cuatro', en: 'eighty-four' }],
    ['besiedelt', { es: 'poblado', en: 'populated' }],
    ['Welt', { es: 'mundo (die Welt, -en)', en: 'world (die Welt, -en)' }],
    ['viertausend', { es: 'cuatro mil', en: 'four thousand' }],
    ['Gleichzeitig', { es: 'al mismo tiempo', en: 'at the same time' }],
    ['schmal', { es: 'angosto', en: 'narrow' }],
    ['Durchschnitt', { es: 'promedio (im Durchschnitt = en promedio)', en: 'average (im Durchschnitt = on average)' }],
    ['Gletscher', { es: 'glaciares (der Gletscher, -)', en: 'glaciers (der Gletscher, -)' }],
    ['einmal', { es: 'nicht einmal = ni siquiera', en: 'nicht einmal = not even' }],
    ['halb', { es: 'la mitad (halb so hoch = la mitad de alto)', en: 'half (halb so hoch)' }],
    ['knapp', { es: 'apenas; poco menos de', en: 'just under' }],
    ['mildes', { es: 'templado (mild)', en: 'mild' }],
    ['Sache', { es: 'cosa (die Sache, -n)', en: 'thing (die Sache, -n)' }],
    ['beiden', { es: 'ambos', en: 'both' }],
    ['zugeben', { es: 'admitir', en: 'admit' }],
    ['deutsche', { es: 'alemán (adjetivo)', en: 'German (adjective)' }]
  ],
  q: [
    { t: 'rf', q: 'Chile ist kleiner als Deutschland.', a: false, x: { es: 'Es aproximadamente el doble de grande.', en: 'It is about twice as big.' } },
    { t: 'rf', q: 'In Deutschland leben mehr Menschen als in Chile.', a: true, x: { es: 'Unos 84 frente a unos 20 millones.', en: 'About 84 versus about 20 million.' } },
    { t: 'choice', q: 'Was ist die Atacama?', o: ['der höchste Vulkan der Welt', 'die trockenste Wüste der Welt', 'der längste Fluss in Chile'], a: 1, x: { es: '«…die trockenste Wüste der Welt.»', en: '“…die trockenste Wüste der Welt.”' } },
    { t: 'choice', q: 'Wie hoch ist die Zugspitze ungefähr?', o: ['knapp 3000 Meter', 'fast 7000 Meter', '4000 Meter'], a: 0, x: { es: 'Apenas tres mil metros.', en: 'Just under three thousand metres.' } },
    { t: 'choice', q: 'Was findet Tomás in Leipzig am schwierigsten?', o: ['das Brot', 'die dunklen, kalten Wintertage', 'die Sprache'], a: 1, x: { es: 'El invierno, cada vez más oscuro y frío.', en: 'Winter, ever darker and colder.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u15', ext: true, words: [
  ['n', 'die Hälfte', 'Hälften', 'la mitad', 'half'],
  ['n', 'der Rest', 'Reste', 'el resto', 'rest'],
  ['n', 'das Gewicht', 'Gewichte', 'el peso', 'weight'],
  ['n', 'die Wirtschaft', 'Wirtschaften', 'la economía', 'economy'],
  ['n', 'die Energie', 'Energien', 'la energía', 'energy'],
  ['n', 'das Feld', 'Felder', 'el campo', 'field'],
  ['n', 'der Mond', 'Monde', 'la luna', 'moon'],
  ['n', 'der Stern', 'Sterne', 'la estrella', 'star'],
  ['n', 'der Vogel', 'Vögel', 'el pájaro', 'bird'],
  ['n', 'das Pferd', 'Pferde', 'el caballo', 'horse'],
  ['n', 'die Kuh', 'Kühe', 'la vaca', 'cow'],
  ['n', 'das Schwein', 'Schweine', 'el cerdo', 'pig'],
  ['n', 'der Zoll', 'Zölle', 'la aduana; el arancel', 'customs; duty'],
  ['v', 'wiegen', 'wiegt', 'wog', 'hat gewogen', 'pesar', 'weigh'],
  ['v', 'fließen', 'fließt', 'floss', 'ist geflossen', 'fluir; correr (agua)', 'flow'],
  ['phr', 'die meisten', 'la mayoría', 'most', { forms: { meisten: 'phr', meiste: 'phr' } }],
  ['adv', 'eher', 'más bien; antes', 'rather; sooner', { note: ['Comparativo de bald: eher = antes; también «más bien».', 'Comparative of bald: eher = sooner; also “rather”.'] }]
] });
