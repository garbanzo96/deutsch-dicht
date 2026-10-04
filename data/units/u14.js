/* U14 · Was ziehe ich an? */
DD.lexicon.push({ unit: 'u14', words: [
  ['pron', 'welcher', '¿cuál?; ¿qué?', 'which', { decl: 'der', stem: 'welch' }],
  ['pron', 'dieser', 'este', 'this', { decl: 'der', stem: 'dies', forms: { dies: 'lemma' } }],
  ['pron', 'jeder', 'cada; todo', 'every; each', { decl: 'der', stem: 'jed' }],
  ['pron', 'alle', 'todos', 'all', { decl: 'der', stem: 'all', forms: { alles: 'det:nom.n|akk.n', all: 'lemma' } }],
  ['phr', 'was für ein …?', '¿qué tipo de…?', 'what kind of…?'],
  ['v', 'werden', 'wird', 'wurde', 'ist geworden', 'llegar a ser; ponerse; volverse', 'become; get', { pres: 'werde wirst wird werden werdet werden', k2: 'würde', forms: { worden: 'pp' }, note: ['También auxiliar del futuro y de la pasiva (U20, U25).', 'Also the auxiliary of the future and the passive (U20, U25).'], ex: ['Im Winter wird es früh dunkel.', 'En invierno oscurece temprano.', 'In winter it gets dark early.'] }],
  ['v', 'an|ziehen', 'zieht an', 'zog an', 'hat angezogen', 'ponerse (ropa); vestir', 'put on (clothes); dress'],
  ['v', 'aus|ziehen', 'zieht aus', 'zog aus', 'hat/ist ausgezogen', 'quitarse (ropa) [hat]; mudarse de [ist]', 'take off (clothes) [hat]; move out [ist]'],
  ['v', 'an|probieren', 'probiert an', 'probierte an', 'hat anprobiert', 'probarse (ropa)', 'try on'],
  ['v', 'probieren', 'probiert', 'probierte', 'hat probiert', 'probar', 'try; taste'],
  ['v', 'zahlen', 'zahlt', 'zahlte', 'hat gezahlt', 'pagar', 'pay'],
  ['v', 'um|tauschen', 'tauscht um', 'tauschte um', 'hat umgetauscht', 'cambiar (un producto)', 'exchange (a product)'],
  ['v', 'frieren', 'friert', 'fror', 'hat gefroren', 'tener frío; congelarse', 'be cold; freeze'],
  ['n', 'die Kleidung', '—', 'la ropa', 'clothing'],
  ['n', 'die Jacke', 'Jacken', 'la chaqueta', 'jacket'],
  ['n', 'der Mantel', 'Mäntel', 'el abrigo', 'coat'],
  ['n', 'die Hose', 'Hosen', 'el pantalón', 'trousers'],
  ['n', 'das Hemd', 'Hemden', 'la camisa', 'shirt'],
  ['n', 'die Bluse', 'Blusen', 'la blusa', 'blouse'],
  ['n', 'das T-Shirt', 'T-Shirts', 'la polera', 'T-shirt'],
  ['n', 'der Pullover', 'Pullover', 'el chaleco; el suéter', 'jumper; sweater'],
  ['n', 'das Kleid', 'Kleider', 'el vestido', 'dress'],
  ['n', 'der Rock', 'Röcke', 'la falda', 'skirt'],
  ['n', 'der Schuh', 'Schuhe', 'el zapato', 'shoe'],
  ['n', 'der Stiefel', 'Stiefel', 'la bota', 'boot'],
  ['n', 'die Mütze', 'Mützen', 'el gorro', 'woolly hat; cap'],
  ['n', 'der Schal', 'Schals', 'la bufanda', 'scarf'],
  ['n', 'der Handschuh', 'Handschuhe', 'el guante', 'glove'],
  ['n', 'die Socke', 'Socken', 'el calcetín', 'sock'],
  ['n', 'die Größe', 'Größen', 'la talla; el tamaño', 'size'],
  ['n', 'die Farbe', 'Farben', 'el color', 'colour'],
  ['n', 'die Kasse', 'Kassen', 'la caja (para pagar)', 'checkout; till'],
  ['n', 'die Umkleidekabine', 'Umkleidekabinen', 'el probador', 'changing room'],
  ['n', 'das Angebot', 'Angebote', 'la oferta', 'offer'],
  ['n', 'die Mode', 'Moden', 'la moda', 'fashion'],
  ['n', 'die Wolle', '—', 'la lana', 'wool'],
  ['a', 'rot', null, null, 'rojo', 'red'],
  ['a', 'blau', null, null, 'azul', 'blue'],
  ['a', 'grün', null, null, 'verde', 'green'],
  ['a', 'gelb', null, null, 'amarillo', 'yellow'],
  ['a', 'schwarz', null, null, 'negro', 'black'],
  ['a', 'weiß', null, null, 'blanco', 'white', { homonym: 1 }],
  ['a', 'grau', null, null, 'gris', 'grey'],
  ['a', 'braun', null, null, 'café; marrón', 'brown'],
  ['a', 'bunt', null, null, 'de colores', 'colourful'],
  ['a', 'dick', null, null, 'grueso; gordo', 'thick; fat'],
  ['a', 'dünn', null, null, 'delgado; fino', 'thin'],
  ['a', 'lang', 'länger', 'am längsten', 'largo', 'long'],
  ['a', 'kurz', 'kürzer', 'am kürzesten', 'corto', 'short'],
  ['a', 'schick', null, null, 'elegante; chic', 'smart; chic'],
  ['a', 'elegant', null, null, 'elegante', 'elegant'],
  ['a', 'hässlich', null, null, 'feo', 'ugly'],
  ['a', 'hübsch', null, null, 'bonito; lindo', 'pretty'],
  ['a', 'altmodisch', null, null, 'pasado de moda', 'old-fashioned'],
  ['a', 'sportlich', null, null, 'deportivo', 'sporty'],
  ['a', 'günstig', null, null, 'conveniente; barato', 'good value; favourable'],
  ['a', 'echt', null, null, 'auténtico; (coloq.) realmente', 'genuine; (coll.) really'],
  ['a', 'normal', null, null, 'normal', 'normal']
] });

DD.unit('u14', {
  minutes: 60,
  goals: [
    { es: 'Declinar el adjetivo tras artículo definido (débil) e indefinido/posesivo (mixto).', en: 'Decline adjectives after definite (weak) and indefinite/possessive (mixed) articles.' },
    { es: 'Entender la lógica de la «terminación señal»: alguien debe mostrar el género y el caso.', en: 'Understand the “signal ending” logic: someone has to show gender and case.' },
    { es: 'Describir ropa y comprarla: welcher, dieser, jeder, was für ein; colores y tallas.', en: 'Describe and buy clothes: welcher, dieser, jeder, was für ein; colours and sizes.' }
  ],
  grammar: ['g-adj-decl', 'g-determiners'],
  lesson: [
    { b: 'concept', de: 'prädikativ · attributiv', t: { es: 'Tras sein, werden, bleiben el adjetivo no cambia: Der Mantel ist warm. Delante del sustantivo, sí lleva terminación: der warm[e] Mantel, ein warm[er] Mantel.', en: 'After sein, werden, bleiben the adjective does not change: Der Mantel ist warm. Before a noun it takes an ending: der warme Mantel, ein warmer Mantel.' } },
    { b: 'concept', de: 'Signalendung', t: { es: 'Principio único: el género y el caso deben marcarse una vez con claridad. Si el artículo ya los muestra (der, den, dem, die, das), el adjetivo lleva una terminación «débil» (-e / -en). Si el artículo no los muestra (ein, mein, kein en masc./neutro), el adjetivo toma la señal: -er, -es.', en: 'One principle: gender and case must be clearly marked once. If the article already shows them (der, den, dem, die, das), the adjective takes a “weak” ending (-e / -en). If it doesn’t (ein, mein, kein in masc./neuter), the adjective carries the signal: -er, -es.' } },
    { b: 'table', h: { es: 'Tras artículo definido (der, dieser, welcher, jeder): débil', en: 'After the definite article (der, dieser, welcher, jeder): weak' }, c: ['', { es: 'masculino', en: 'masculine' }, { es: 'femenino', en: 'feminine' }, { es: 'neutro', en: 'neuter' }, 'Plural'], r: [
      ['Nominativ', '{m der} warm[e] Mantel', '{f die} warm[e] Jacke', '{n das} warm[e] Hemd', '{p die} warm[en] Schuhe'],
      ['Akkusativ', '{A den} warm[en] Mantel', '{f die} warm[e] Jacke', '{n das} warm[e] Hemd', '{p die} warm[en] Schuhe'],
      ['Dativ', '{D dem} warm[en] Mantel', '{D der} warm[en] Jacke', '{D dem} warm[en] Hemd', '{D den} warm[en] Schuhen']
    ], n: { es: 'Solo cinco -e (Nom. sg. de los tres géneros y Akk. f/n); todo lo demás -en.', en: 'Only five -e endings (nom. sg. of all genders and acc. f/n); everything else -en.' } },
    { b: 'table', h: { es: 'Tras ein, kein, mein…: mixta', en: 'After ein, kein, mein…: mixed' }, c: ['', { es: 'masculino', en: 'masculine' }, { es: 'femenino', en: 'feminine' }, { es: 'neutro', en: 'neuter' }, 'Plural'], r: [
      ['Nominativ', '{m ein} warm[er] Mantel', '{f eine} warm[e] Jacke', '{n ein} warm[es] Hemd', '{p meine} warm[en] Schuhe'],
      ['Akkusativ', '{A einen} warm[en] Mantel', '{f eine} warm[e] Jacke', '{n ein} warm[es] Hemd', '{p meine} warm[en] Schuhe'],
      ['Dativ', '{D einem} warm[en] Mantel', '{D einer} warm[en] Jacke', '{D einem} warm[en] Hemd', '{D meinen} warm[en] Schuhen']
    ], n: { es: 'Solo cambian tres casillas respecto a la tabla débil: ein warm[er] (Nom. m), ein warm[es] (Nom./Akk. n). Ahí ein no muestra el género y el adjetivo lo hace (-er como der, -es como das).', en: 'Only three cells differ from the weak table: ein warmer (nom. m), ein warmes (nom./acc. n). There ein doesn’t show gender, so the adjective does (-er like der, -es like das).' } },
    { b: 'pairs', h: { es: 'La señal pasa del artículo al adjetivo', en: 'The signal moves from article to adjective' }, r: [
      ['de[r] warm[e] Mantel', 'ein warm[er] Mantel', { es: 'der → -er pasa al adjetivo', en: 'der → -er moves to the adjective' }],
      ['da[s] neu[e] Hemd', 'ein neu[es] Hemd', { es: 'das → -es pasa al adjetivo', en: 'das → -es moves to the adjective' }],
      ['mit de[m] neu[en] Schal', 'mit ein[em] neu[en] Schal', { es: 'el artículo ya marca: adjetivo -en', en: 'the article marks it: adjective -en' }]
    ] },
    { b: 'table', h: { es: 'Determinantes como der: dieser, welcher, jeder, alle', en: 'der-type determiners: dieser, welcher, jeder, alle' }, c: ['', 'm', 'f', 'n', 'Pl'], r: [
      ['Nom', 'dies[er]', 'dies[e]', 'dies[es]', 'dies[e]'], ['Akk', 'dies[en]', 'dies[e]', 'dies[es]', 'dies[e]'], ['Dat', 'dies[em]', 'dies[er]', 'dies[em]', 'dies[en]']
    ], n: { es: 'Llevan las mismas terminaciones que der/die/das. jeder solo en singular; alle solo en plural. Tras ellos, adjetivo débil: dieser warm[e] Mantel, alle neu[en] Schuhe.', en: 'Same endings as der/die/das. jeder is singular only; alle plural only. After them, weak adjective: dieser warme Mantel, alle neuen Schuhe.' } },
    { b: 'list', h: { es: 'Preguntar por una cosa', en: 'Asking about a thing' }, cols: 2, r: [
      ['[Welcher] Mantel gefällt dir?', { es: '¿Cuál abrigo te gusta? (elección entre varios)', en: 'Which coat do you like? (choice among several)' }],
      ['[Was für ein] Mantel ist das?', { es: '¿Qué tipo de abrigo es? (clase, características)', en: 'What kind of coat is it? (type)' }],
      ['– Der blaue. / – Ein warmer Wintermantel.', { es: '– El azul. / – Un abrigo de invierno caliente.', en: '– The blue one. / – A warm winter coat.' }],
      ['Was für Schuhe suchst du? – Bequeme.', { es: '¿Qué tipo de zapatos buscas? – Cómodos.', en: 'What kind of shoes are you looking for? – Comfortable ones.' }]
    ] },
    { b: 'list', h: { es: 'Farben · colores', en: 'Colours' }, cols: 4, audio: true, r: [
      ['rot', { es: 'rojo', en: 'red' }], ['blau', { es: 'azul', en: 'blue' }], ['grün', { es: 'verde', en: 'green' }], ['gelb', { es: 'amarillo', en: 'yellow' }],
      ['schwarz', { es: 'negro', en: 'black' }], ['weiß', { es: 'blanco', en: 'white' }], ['grau', { es: 'gris', en: 'grey' }], ['braun', { es: 'café', en: 'brown' }]
    ], n: { es: 'Matices: dunkelblau, hellgrün. rosa, lila y orange no se declinan en lengua cuidada: ein rosa Schal.', en: 'Shades: dunkelblau, hellgrün. rosa, lila and orange are not declined in careful usage: ein rosa Schal.' } },
    { b: 'note', tone: 'tip', t: { es: 'Truco de ritmo: en dativo y en plural (con artículo) el adjetivo es siempre -en. Con eso cubres la mitad de los casos.', en: 'Rhythm trick: in the dative and in the plural (with an article) the adjective is always -en. That alone covers half the cases.' } },
    { b: 'note', tone: 'l1', t: { es: 'Das steht dir gut = te queda bien (stehen + dativo). Die Hose passt mir nicht = no me queda (talla). Me gusta = gefällt mir.', en: 'Das steht dir gut = it suits you (stehen + dative). Die Hose passt mir nicht = it doesn’t fit me. I like it = Es gefällt mir.' } }
  ],
  chunks: [
    ['Kann ich Ihnen helfen? – Ja, ich suche einen warmen Mantel.', '¿Le puedo ayudar? – Sí, busco un abrigo caliente.', 'Can I help you? – Yes, I’m looking for a warm coat.'],
    ['Welche Größe haben Sie? – Größe L.', '¿Qué talla tiene? – Talla L.', 'What size are you? – Size L.'],
    ['Kann ich den grauen Mantel anprobieren?', '¿Me puedo probar el abrigo gris?', 'Can I try on the grey coat?'],
    ['Die Umkleidekabine ist dort hinten.', 'El probador está allá atrás.', 'The changing room is at the back over there.'],
    ['Der steht dir gut! – Findest du?', '¡Te queda bien! – ¿Tú crees?', 'It suits you! – Do you think so?'],
    ['Die Hose ist zu eng. Haben Sie die eine Nummer größer?', 'El pantalón está muy apretado. ¿Lo tiene una talla más grande?', 'The trousers are too tight. Do you have them a size bigger?']
  ],
  errors: [
    ['ein warme Mantel', 'ein warmer Mantel', { es: 'ein no muestra el masculino: el adjetivo toma -er.', en: 'ein doesn’t show masculine: the adjective takes -er.' }],
    ['der warmer Mantel', 'der warme Mantel', { es: 'der ya marca: el adjetivo -e.', en: 'der already marks it: adjective -e.' }],
    ['mit dem neue Schal', 'mit dem neuen Schal', { es: 'Dativo: siempre -en.', en: 'Dative: always -en.' }],
    ['Der Mantel ist warmer.', 'Der Mantel ist warm.', { es: 'Tras sein, sin terminación (warmer = comparativo).', en: 'After sein, no ending (warmer = comparative).' }],
    ['Welche Mantel?', 'Welcher Mantel?', { es: 'welcher se declina como der.', en: 'welcher declines like der.' }]
  ],
  examples: [
    ['Ich brauche einen warmen Mantel und dicke Handschuhe.', 'Necesito un abrigo caliente y guantes gruesos.', 'I need a warm coat and thick gloves.'],
    ['Die schwarzen Stiefel sind zu teuer.', 'Las botas negras son demasiado caras.', 'The black boots are too expensive.'],
    ['Lena trägt heute ein rotes Kleid.', 'Lena lleva hoy un vestido rojo.', 'Lena is wearing a red dress today.'],
    ['Mit diesem grauen Schal siehst du elegant aus.', 'Con esta bufanda gris te ves elegante.', 'You look elegant in this grey scarf.'],
    ['Welche Jacke nimmst du? – Die grüne.', '¿Qué chaqueta llevas? – La verde.', 'Which jacket are you taking? – The green one.'],
    ['Jeder neue Student bekommt eine Karte.', 'Cada estudiante nuevo recibe una tarjeta.', 'Every new student gets a card.']
  ],
  reading: 'r-u14',
  exercises: [
    { t: 'choice', ph: 1, q: 'Ich suche einen warm___ Mantel.', o: ['-e', '-en', '-er'], a: 1, x: { es: 'Akk. m tras einen: -en.', en: 'Acc. masc. after einen: -en.' } },
    { t: 'choice', ph: 1, q: 'Das ist ein warm___ Mantel.', o: ['-e', '-en', '-er'], a: 2, x: { es: 'Nom. m tras ein: el adjetivo muestra el género: -er.', en: 'Nom. masc. after ein: the adjective shows gender: -er.' } },
    { t: 'choice', ph: 1, q: 'Der warm___ Mantel ist teuer.', o: ['-e', '-en', '-er'], a: 0, x: { es: 'der ya marca: -e.', en: 'der already marks it: -e.' } },
    { t: 'choice', ph: 1, q: 'Lena trägt ein rot___ Kleid.', o: ['-e', '-es', '-en'], a: 1, x: { es: 'Akk. n tras ein: -es.', en: 'Acc. neuter after ein: -es.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona cada sintagma con su caso.', en: 'Match each phrase with its case.' }, pairs: [['der neue Schal', 'Nominativ'], ['den neuen Schal', 'Akkusativ'], ['dem neuen Schal', 'Dativ']], x: { es: 'El artículo marca el caso; el adjetivo, -e / -en.', en: 'The article marks case; the adjective -e / -en.' } },
    { t: 'choice', ph: 1, q: '___ Mantel gefällt dir? – Der blaue.', o: ['Welcher', 'Welchen', 'Was für'], a: 0, x: { es: 'Sujeto masculino: welcher.', en: 'Masculine subject: welcher.' } },
    { t: 'gap', ph: 2, q: 'Die schwarz___ Stiefel sind zu teuer.', a: 'en', alt: ['-en'], x: { es: 'Plural con artículo: -en.', en: 'Plural with article: -en.' } },
    { t: 'gap', ph: 2, q: 'Mit einem dick___ Schal friert man nicht.', a: 'en', alt: ['-en'], x: { es: 'Dativo: -en.', en: 'Dative: -en.' } },
    { t: 'gap', ph: 2, q: 'Ich nehme die grün___ Jacke.', a: 'e', alt: ['-e'], x: { es: 'Akk. f tras die: -e.', en: 'Acc. fem. after die: -e.' } },
    { t: 'gap', ph: 2, q: 'Das ist ein schön___ Hemd.', a: 'es', alt: ['-es'], x: { es: 'Nom. n tras ein: -es.', en: 'Nom. neuter after ein: -es.' } },
    { t: 'gap', ph: 2, q: 'Wie findest du ___ grauen Pullover? (dieser, Akk.)', a: 'diesen', x: { es: 'dieser + Akk. m: diesen.', en: 'dieser + acc. masc.: diesen.' } },
    { t: 'gap', ph: 2, q: 'Mein neu___ Mantel ist sehr warm.', a: 'er', alt: ['-er'], x: { es: 'mein (Nom. m) no marca: -er.', en: 'mein (nom. masc.) doesn’t mark: -er.' } },
    { t: 'gap', ph: 2, q: 'Der Mantel ist ___. (warm)', a: 'warm', x: { es: 'Predicativo: sin terminación.', en: 'Predicative: no ending.' } },
    { t: 'order', ph: 2, w: ['einen', 'Ich', 'Mantel', 'warmen', 'suche'], a: 'Ich suche einen warmen Mantel.', x: { es: 'Artículo + adjetivo + sustantivo.', en: 'Article + adjective + noun.' } },
    { t: 'transform', ph: 3, p: { es: 'Cambia «der» por «ein».', en: 'Replace “der” with “ein”.' }, q: 'Der neue Laptop ist schnell.', a: 'Ein neuer Laptop ist schnell.', x: { es: 'ein no marca el masculino: -er.', en: 'ein doesn’t mark masculine: -er.' } },
    { t: 'write', ph: 3, s: { es: 'Busco unos zapatos cómodos.', en: 'I’m looking for comfortable shoes.' }, a: 'Ich suche bequeme Schuhe.', x: { es: 'Plural sin artículo: -e (adjetivo fuerte, U27).', en: 'Plural without article: -e (strong adjective, U27).' } },
    { t: 'write', ph: 3, s: { es: 'El abrigo gris te queda bien.', en: 'The grey coat suits you.' }, a: 'Der graue Mantel steht dir gut.', x: { es: 'der + -e; stehen + dativo.', en: 'der + -e; stehen + dative.' } },
    { t: 'listen', ph: 3, a: 'Ich nehme den blauen Schal.', x: { es: 'Akk. m: den … -en.', en: 'Acc. masc.: den … -en.' } }
  ],
  summary: [
    { es: 'Tras sein: sin terminación. Delante del sustantivo: siempre terminación.', en: 'After sein: no ending. Before the noun: always an ending.' },
    { es: 'Débil (der, dieser, welcher, jeder, alle): -e en Nom. sg. y Akk. f/n; -en en el resto.', en: 'Weak (der, dieser, welcher, jeder, alle): -e in nom. sg. and acc. f/n; -en elsewhere.' },
    { es: 'Mixta (ein, kein, mein…): igual que la débil salvo -er (Nom. m) y -es (Nom./Akk. n).', en: 'Mixed (ein, kein, mein…): same as weak except -er (nom. m) and -es (nom./acc. n).' },
    { es: 'Dativo y plural con artículo: siempre -en.', en: 'Dative and plural with an article: always -en.' },
    { es: 'welcher = cuál (elección); was für ein = qué tipo de.', en: 'welcher = which (choice); was für ein = what kind of.' }
  ]
});

DD.readings.push({
  id: 'r-u14', unit: 'u14', level: 'A2', kind: 'unit',
  de: 'Der erste Winter', es: 'El primer invierno', en: 'The first winter',
  genre: { es: 'Narración y diálogo · serie Leipzig 14', en: 'Narrative and dialogue · Leipzig series 14' },
  intro: { es: 'Es noviembre y hace frío. Tomás nunca ha vivido un invierno así. Lena lo acompaña a comprar ropa. Fíjate en cada adjetivo delante de un sustantivo.', en: 'It is November and cold. Tomás has never experienced a winter like this. Lena takes him clothes shopping. Notice every adjective in front of a noun.' },
  focus: { es: 'einen warmen Mantel, der graue Mantel, ein dicker Schal, mit dem roten Schal · welcher / was für ein.', en: 'einen warmen Mantel, der graue Mantel, ein dicker Schal, mit dem roten Schal · welcher / was für ein.' },
  source: { type: 'original' },
  p: [
    ['Im November wird es in Leipzig kalt. Am Morgen sind es nur zwei Grad, und ein kalter Wind kommt aus dem Osten. Tomás friert. In Valparaíso ist der Winter mild: Dort braucht man nur eine leichte Jacke. Hier braucht er einen warmen Mantel, dicke Handschuhe und eine Mütze. Lena lacht: „Du siehst aus wie ein trauriger Pinguin. Komm, wir gehen einkaufen!“', 'En noviembre en Leipzig hace frío. En la mañana hace solo dos grados y sopla un viento frío del este. Tomás tiene frío. En Valparaíso el invierno es suave: allí solo se necesita una chaqueta ligera. Aquí necesita un abrigo caliente, guantes gruesos y un gorro. Lena se ríe: «Pareces un pingüino triste. ¡Ven, vamos de compras!»', 'In November it gets cold in Leipzig. In the morning it is only two degrees, and a cold wind blows from the east. Tomás is freezing. In Valparaíso the winter is mild: there you only need a light jacket. Here he needs a warm coat, thick gloves and a hat. Lena laughs: “You look like a sad penguin. Come on, let’s go shopping!”'],
    ['Im Kaufhaus gibt es viele Mäntel: lange und kurze, schwarze, graue und blaue. Eine freundliche Verkäuferin fragt: „Kann ich Ihnen helfen?“ – „Ja, ich suche einen warmen Wintermantel.“ – „Was für einen Mantel möchten Sie? Einen sportlichen oder einen eleganten?“ – „Einen warmen!“, sagt Tomás. Alle lachen.', 'En la tienda por departamentos hay muchos abrigos: largos y cortos, negros, grises y azules. Una vendedora amable pregunta: «¿Le puedo ayudar?» – «Sí, busco un abrigo de invierno caliente.» – «¿Qué tipo de abrigo quiere? ¿Uno deportivo o uno elegante?» – «¡Uno caliente!», dice Tomás. Todos se ríen.', 'In the department store there are lots of coats: long and short, black, grey and blue. A friendly shop assistant asks: “Can I help you?” – “Yes, I’m looking for a warm winter coat.” – “What kind of coat would you like? A sporty one or an elegant one?” – “A warm one!” says Tomás. Everyone laughs.'],
    ['Er probiert zwei Mäntel an: einen schwarzen und einen grauen. Der schwarze Mantel ist elegant, aber zu eng. Der graue Mantel ist lang, dick und sehr bequem. „Welcher gefällt dir besser?“, fragt er Lena. „Der graue. Der steht dir gut. Und mit diesem roten Schal siehst du nicht mehr traurig aus.“', 'Se prueba dos abrigos: uno negro y uno gris. El abrigo negro es elegante, pero muy apretado. El abrigo gris es largo, grueso y muy cómodo. «¿Cuál te gusta más?», le pregunta a Lena. «El gris. Te queda bien. Y con esta bufanda roja ya no te ves triste.»', 'He tries on two coats: a black one and a grey one. The black coat is elegant but too tight. The grey coat is long, thick and very comfortable. “Which do you like better?” he asks Lena. “The grey one. It suits you. And with this red scarf you no longer look sad.”'],
    ['An der Kasse bezahlt Tomás den grauen Mantel, den roten Schal und ein Paar schwarze Handschuhe. Das ist nicht billig, aber es gibt ein gutes Angebot: zwanzig Prozent auf alle Wintermäntel. Draußen schneit es jetzt. Tomás zieht den neuen Mantel an, legt den roten Schal um den Hals und lächelt. Der erste Schnee in seinem Leben!', 'En la caja Tomás paga el abrigo gris, la bufanda roja y un par de guantes negros. No es barato, pero hay una buena oferta: veinte por ciento en todos los abrigos de invierno. Afuera ahora está nevando. Tomás se pone el abrigo nuevo, se pone la bufanda roja alrededor del cuello y sonríe. ¡La primera nieve de su vida!', 'At the till Tomás pays for the grey coat, the red scarf and a pair of black gloves. It isn’t cheap, but there is a good offer: twenty per cent off all winter coats. Outside it is snowing now. Tomás puts on the new coat, wraps the red scarf around his neck and smiles. The first snow of his life!']
  ],
  gloss: [
    ['Osten', { es: 'este (der Osten)', en: 'east (der Osten)' }],
    ['mild', { es: 'suave; templado', en: 'mild' }],
    ['leichte', { es: 'ligera (leicht)', en: 'light (leicht)' }],
    ['Pinguin', { es: 'pingüino (der Pinguin, -e)', en: 'penguin (der Pinguin, -e)' }],
    ['Kaufhaus', { es: 'tienda por departamentos (das Kaufhaus, ¨-er)', en: 'department store' }],
    ['Wintermantel', { es: 'abrigo de invierno', en: 'winter coat' }],
    ['Wintermäntel', { es: 'abrigos de invierno', en: 'winter coats' }],
    ['besser', { es: 'mejor (comparativo de gut, U15)', en: 'better (comparative of gut, U15)' }],
    ['Paar', { es: 'par (das Paar, -e)', en: 'pair (das Paar, -e)' }],
    ['Prozent', { es: 'por ciento (das Prozent, -e)', en: 'per cent' }],
    ['Hals', { es: 'cuello (der Hals, ¨-e)', en: 'neck (der Hals, ¨-e)' }],
    ['lächelt', { es: 'sonríe (lächeln)', en: 'smiles (lächeln)' }],
    ['seinem', { es: 'su (dativo)', en: 'his (dative)' }]
  ],
  q: [
    { t: 'rf', q: 'In Valparaíso ist der Winter sehr kalt.', a: false, x: { es: 'Es suave: basta una chaqueta ligera.', en: 'It is mild: a light jacket is enough.' } },
    { t: 'choice', q: 'Was sucht Tomás im Kaufhaus?', o: ['einen eleganten Anzug', 'einen warmen Wintermantel', 'eine leichte Jacke'], a: 1, x: { es: '«Ich suche einen warmen Wintermantel.»', en: '“Ich suche einen warmen Wintermantel.”' } },
    { t: 'choice', q: 'Warum nimmt er den schwarzen Mantel nicht?', o: ['Er ist zu teuer.', 'Er ist zu eng.', 'Er ist zu kurz.'], a: 1, x: { es: 'Es elegante pero muy apretado.', en: 'It is elegant but too tight.' } },
    { t: 'rf', q: 'Lena findet, dass der graue Mantel Tomás gut steht.', a: true, x: { es: '«Der graue. Der steht dir gut.»', en: '“Der graue. Der steht dir gut.”' } },
    { t: 'choice', q: 'Was passiert am Ende?', o: ['Es regnet.', 'Es schneit zum ersten Mal für Tomás.', 'Tomás tauscht den Mantel um.'], a: 1, x: { es: 'La primera nieve de su vida.', en: 'The first snow of his life.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u14', ext: true, words: [
  ['pron', 'solche', 'tales; así', 'such', { decl: 'der', stem: 'solch' }],
  ['n', 'die Art', 'Arten', 'el tipo; la manera; la especie', 'kind; way; species', { note: ['eine Art … = una especie de … · auf diese Art = de esta manera.', 'eine Art … = a kind of … · auf diese Art = in this way.'] }],
  ['n', 'der Anzug', 'Anzüge', 'el terno', 'suit'],
  ['n', 'der Gürtel', 'Gürtel', 'el cinturón', 'belt'],
  ['n', 'der Hut', 'Hüte', 'el sombrero', 'hat'],
  ['n', 'der Strumpf', 'Strümpfe', 'la media; el calcetín largo', 'stocking'],
  ['n', 'die Uniform', 'Uniformen', 'el uniforme', 'uniform'],
  ['n', 'die Kette', 'Ketten', 'la cadena; el collar', 'chain; necklace'],
  ['n', 'die Brille', 'Brillen', 'los anteojos', 'glasses'],
  ['n', 'der Bart', 'Bärte', 'la barba', 'beard'],
  ['v', 'aus|suchen', 'sucht aus', 'suchte aus', 'hat ausgesucht', 'escoger', 'pick out'],
  ['a', 'blond', '—', '—', 'rubio', 'blond'],
  ['a', 'schlank', null, null, 'delgado', 'slim'],
  ['a', 'glatt', null, null, 'liso; resbaladizo', 'smooth; slippery'],
  ['a', 'kühl', null, null, 'fresco; frío', 'cool'],
  ['a', 'fein', null, null, 'fino', 'fine'],
  ['a', 'ander', '—', '—', 'otro; distinto', 'other; different', { stem: 'ander' }],
] });
