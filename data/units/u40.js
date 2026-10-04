/* U40 · Sprache und Welt */
DD.lexicon.push({ unit: 'u40', words: [
  ['n', 'das Register', 'Register', 'el registro', 'register'],
  ['n', 'die Fachsprache', 'Fachsprachen', 'el lenguaje técnico', 'technical language'],
  ['n', 'die Umgangssprache', 'Umgangssprachen', 'el lenguaje coloquial', 'colloquial language'],
  ['n', 'der Gebrauch', 'Gebräuche', 'el uso', 'use; usage'],
  ['n', 'das Sprachspiel', 'Sprachspiele', 'el juego de lenguaje', 'language game'],
  ['n', 'die Lebensform', 'Lebensformen', 'la forma de vida', 'form of life'],
  ['n', 'der Mittelpunkt', 'Mittelpunkte', 'el centro', 'centre; focus', { note: ['im Mittelpunkt stehen = estar en el centro.', 'im Mittelpunkt stehen = be the focus.'] }],
  ['n', 'der Absatz', 'Absätze', 'el párrafo; el taco (zapato)', 'paragraph; heel'],
  ['n', 'die Paraphrase', 'Paraphrasen', 'la paráfrasis', 'paraphrase'],
  ['n', 'der Kumpel', 'Kumpel', 'el amigo; el compadre (coloquial)', 'mate; buddy (colloquial)'],
  ['v', 'kriegen', 'kriegt', 'kriegte', 'hat gekriegt', 'recibir; conseguir (coloquial)', 'get (colloquial)'],
  ['v', 'gebrauchen', 'gebraucht', 'gebrauchte', 'hat gebraucht', 'usar; emplear', 'use'],
  ['v', 'hervor|bringen', 'bringt hervor', 'brachte hervor', 'hat hervorgebracht', 'producir; hacer surgir', 'bring forth; produce'],
  ['v', 'fest|halten', 'hält fest', 'hielt fest', 'hat festgehalten', 'sostener; constatar; aferrarse', 'hold; record; hold on to', { note: ['Es lässt sich festhalten, dass … = cabe constatar que…', 'Es lässt sich festhalten, dass … = it can be noted that…'] }],
  ['v', 'zusammen|tragen', 'trägt zusammen', 'trug zusammen', 'hat zusammengetragen', 'reunir; compilar', 'compile; gather'],
  ['a', 'umgangssprachlich', '—', '—', 'coloquial', 'colloquial'],
  ['a', 'bildungssprachlich', '—', '—', 'culto', 'educated; formal'],
  ['a', 'defekt', '—', '—', 'averiado', 'defective'],
  ['a', 'verkörpert', '—', '—', 'encarnado; corporizado', 'embodied'],
  ['a', 'stumm', '—', '—', 'mudo', 'mute; silent'],
  ['a', 'abschließend', '—', '—', 'final; para terminar', 'final; in conclusion'],
  ['phr', 'mit anderen Worten', 'en otras palabras', 'in other words'],
  ['phr', 'anders ausgedrückt', 'dicho de otro modo', 'put differently'],
  ['phr', 'Der Text behandelt …', 'el texto trata…', 'the text deals with…'],
  ['phr', 'Im Mittelpunkt steht …', 'en el centro está…', 'the focus is on…']
] });

DD.unit('u40', {
  minutes: 75,
  goals: [
    { es: 'Reconocer y cambiar de registro: coloquial, estándar, culto y técnico.', en: 'Recognise and switch register: colloquial, standard, educated and technical.' },
    { es: 'Parafrasear con técnicas sistemáticas: sinónimos, cambio de estilo, de voz y de estructura.', en: 'Paraphrase with systematic techniques: synonyms, change of style, voice and structure.' },
    { es: 'Resumir y sintetizar un texto argumentativo; leer a Wittgenstein en el original y relacionarlo con el enactivismo.', en: 'Summarise and synthesise an argumentative text; read Wittgenstein in the original and relate him to enactivism.' }
  ],
  grammar: ['g-register', 'g-paraphrase', 'g-summary'],
  lesson: [
    { b: 'concept', de: 'Register', t: { es: 'Un mismo contenido se dice distinto según la situación. El alemán marca el registro en el vocabulario (kriegen / bekommen / erhalten), en la sintaxis (verbal / nominal), en las partículas (más en lo coloquial) y en la cortesía (du / Sie, Konjunktiv II). Dominar el C1 significa elegir el registro adecuado y poder cambiarlo a voluntad.', en: 'The same content is said differently depending on the situation. German marks register in vocabulary (kriegen / bekommen / erhalten), syntax (verbal / nominal), particles (more in colloquial speech) and politeness (du / Sie, Konjunktiv II). Mastering C1 means choosing the right register and being able to switch at will.' } },
    { b: 'table', h: { es: 'Tres registros, un significado', en: 'Three registers, one meaning' }, c: [{ es: 'Coloquial', en: 'Colloquial' }, { es: 'Estándar', en: 'Standard' }, { es: 'Culto / técnico', en: 'Educated / technical' }, { es: 'Significado', en: 'Meaning' }], r: [
      ['kriegen', 'bekommen', 'erhalten', { es: 'recibir', en: 'receive' }],
      ['gucken', 'sehen / schauen', 'betrachten', { es: 'mirar', en: 'look' }],
      ['kaputt', 'nicht in Ordnung', 'defekt', { es: 'averiado', en: 'broken' }],
      ['der Kumpel', 'der Freund', 'der Bekannte', { es: 'amigo / conocido', en: 'friend / acquaintance' }],
      ['super', 'sehr gut', 'ausgezeichnet', { es: 'excelente', en: 'excellent' }],
      ['anfangen', 'beginnen', 'einsetzen', { es: 'comenzar', en: 'begin' }],
      ['Weil ich krank war …', 'Weil ich krank war …', 'Krankheitsbedingt …', { es: 'por enfermedad', en: 'due to illness' }]
    ], n: { es: 'Errores de registro comunes en C1: usar kriegen en una carta formal, o erhalten en una conversación entre amigos. Los dos son correctos; solo uno es adecuado.', en: 'Common C1 register errors: using kriegen in a formal letter, or erhalten in a chat among friends. Both are correct; only one is appropriate.' } },
    { b: 'table', h: { es: 'Técnicas de paráfrasis', en: 'Paraphrase techniques' }, c: [{ es: 'Técnica', en: 'Technique' }, { es: 'Original', en: 'Original' }, { es: 'Paráfrasis', en: 'Paraphrase' }], r: [
      [{ es: 'sinónimo', en: 'synonym' }, 'Die Studie [zeigt] …', 'Die Studie [belegt] …'],
      [{ es: 'verbal → nominal', en: 'verbal → nominal' }, 'Weil die Preise [steigen], …', '[Wegen] des [Anstiegs] der Preise …'],
      [{ es: 'activa → pasiva', en: 'active → passive' }, 'Man [prüft] den Antrag.', 'Der Antrag [wird geprüft].'],
      [{ es: 'antónimo negado', en: 'negated antonym' }, 'Das ist [häufig].', 'Das ist [nicht selten].'],
      [{ es: 'modal → paráfrasis', en: 'modal → paraphrase' }, 'Das [lässt sich] lösen.', 'Das [ist lösbar] / [kann gelöst werden].'],
      [{ es: 'cita → discurso indirecto', en: 'quote → indirect speech' }, '„Ich [komme].“', 'Sie sagt, sie [komme].']
    ] },
    { b: 'list', h: { es: 'Redemittel para resumir y sintetizar', en: 'Phrases for summarising and synthesising' }, cols: 2, r: [
      ['[Der Text behandelt] …', { es: 'el texto trata…', en: 'the text deals with…' }], ['[Im Mittelpunkt steht] …', { es: 'en el centro está…', en: 'the focus is on…' }],
      ['Die Autorin [vertritt die These], dass …', { es: 'la autora sostiene que…', en: 'the author holds that…' }], ['[Zunächst] … [dann] … [schließlich] …', { es: 'primero… luego… finalmente…', en: 'first… then… finally…' }],
      ['[Mit anderen Worten]: …', { es: 'en otras palabras…', en: 'in other words…' }], ['[Anders ausgedrückt]: …', { es: 'dicho de otro modo…', en: 'put differently…' }],
      ['[Abschließend] lässt sich [festhalten], dass …', { es: 'para concluir, cabe constatar que…', en: 'in conclusion it can be noted that…' }], ['Beide Texte [stimmen darin überein], dass …', { es: 'ambos textos coinciden en que…', en: 'both texts agree that…' }]
    ] },
    { b: 'concept', de: 'Zusammenfassen', t: { es: 'Un buen resumen alemán: (1) presenta tema y tesis en la primera frase; (2) sigue el orden lógico, no el del texto; (3) usa Präsens y discurso indirecto o fórmulas de referencia; (4) no incluye opinión propia salvo que se pida; (5) ocupa entre un cuarto y un tercio del original.', en: 'A good German summary: (1) states topic and thesis in the first sentence; (2) follows the logical order, not the text’s; (3) uses the present tense and indirect speech or reporting phrases; (4) includes no personal opinion unless requested; (5) is a quarter to a third of the original’s length.' } },
    { b: 'note', tone: 'tip', t: { es: 'Wittgenstein en dos obras: en el Tractatus (1921) el lenguaje figura los hechos del mundo; en las Investigaciones filosóficas (publicadas en 1953) el significado nace del uso en «juegos de lenguaje» insertos en «formas de vida». El enactivismo (Varela, Thompson y Rosch, 1991) radicaliza esa segunda idea: la mente no representa un mundo dado, sino que lo «hace surgir» actuando en él con un cuerpo.', en: 'Wittgenstein in two works: in the Tractatus (1921) language pictures the facts of the world; in the Philosophical Investigations (published 1953) meaning arises from use in “language games” embedded in “forms of life”. Enactivism (Varela, Thompson and Rosch, 1991) radicalises the second idea: the mind does not represent a pre-given world but “brings it forth” by acting in it with a body.' } }
  ],
  chunks: [
    ['Mit anderen Worten: Bedeutung entsteht im Gebrauch.', 'En otras palabras: el significado surge en el uso.', 'In other words: meaning arises in use.'],
    ['Der Text behandelt die Frage, wie Sprache und Welt zusammenhängen.', 'El texto trata la pregunta de cómo se relacionan lengua y mundo.', 'The text deals with the question of how language and world are connected.'],
    ['Abschließend lässt sich festhalten, dass beide Ansätze sich ergänzen.', 'Para concluir, cabe constatar que ambos enfoques se complementan.', 'In conclusion, it can be noted that both approaches complement each other.'],
    ['Hast du die Mail gekriegt? – Haben Sie meine E-Mail erhalten?', '¿Te llegó el mail? – ¿Recibió usted mi correo?', 'Did you get the mail? – Did you receive my e-mail?'],
    ['Anders ausgedrückt: Ohne Körper keine Welt.', 'Dicho de otro modo: sin cuerpo, no hay mundo.', 'Put differently: no body, no world.']
  ],
  errors: [
    ['Sehr geehrte Frau Berger, haben Sie meine Mail gekriegt?', '…, haben Sie meine E-Mail erhalten?', { es: 'Carta formal: registro culto.', en: 'Formal letter: educated register.' }],
    ['Der Text behandelt über die Sprache.', 'Der Text behandelt die Sprache. / Der Text handelt von der Sprache.', { es: 'behandeln + Akk; handeln von + Dat.', en: 'behandeln + acc.; handeln von + dat.' }],
    ['Zusammenfassend lässt sich sagen, dass die Autorin hat recht.', '…, dass die Autorin recht hat.', { es: 'dass: verbo al final.', en: 'dass: verb last.' }],
    ['In meinem Resümee: Ich finde den Text super.', 'Abschließend lässt sich festhalten, dass … (sin opinión)', { es: 'El resumen no lleva opinión ni registro coloquial.', en: 'A summary has no opinion or colloquial register.' }],
    ['Mit anderem Wort …', 'Mit anderen Worten …', { es: 'Fórmula fija: mit anderen Worten.', en: 'Fixed phrase: mit anderen Worten.' }]
  ],
  examples: [
    ['Krankheitsbedingt muss die Veranstaltung leider entfallen.', 'Por motivos de salud, lamentablemente el evento debe suspenderse.', 'Due to illness, the event unfortunately has to be cancelled.'],
    ['Im Mittelpunkt des Aufsatzes steht der Begriff des Sprachspiels.', 'En el centro del ensayo está el concepto de juego de lenguaje.', 'The essay focuses on the concept of the language game.'],
    ['Die Autorin vertritt die These, dass Denken ohne Körper nicht möglich sei.', 'La autora sostiene la tesis de que pensar sin cuerpo no es posible.', 'The author holds the thesis that thinking without a body is not possible.'],
    ['Beide Texte stimmen darin überein, dass Bedeutung kein inneres Bild ist.', 'Ambos textos coinciden en que el significado no es una imagen interior.', 'Both texts agree that meaning is not an inner picture.'],
    ['Das kommt nicht selten vor.', 'Eso ocurre con frecuencia.', 'That happens quite often.'],
    ['Anders ausgedrückt: Wer eine Sprache lernt, lernt eine Lebensform.', 'Dicho de otro modo: quien aprende una lengua aprende una forma de vida.', 'Put differently: whoever learns a language learns a form of life.']
  ],
  reading: 'r-u40',
  exercises: [
    { t: 'choice', ph: 1, q: '¿Qué verbo es el más formal?', o: ['kriegen', 'bekommen', 'erhalten'], a: 2, x: { es: 'erhalten: registro culto.', en: 'erhalten: educated register.' } },
    { t: 'choice', ph: 1, q: '«Das ist nicht selten» significa…', o: ['Das ist häufig.', 'Das ist nie.', 'Das ist neu.'], a: 0, x: { es: 'Antónimo negado.', en: 'Negated antonym.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona coloquial y culto.', en: 'Match colloquial and educated.' }, pairs: [['gucken', 'betrachten'], ['kaputt', 'defekt'], ['super', 'ausgezeichnet'], ['der Kumpel', 'der Bekannte']], x: { es: 'Mismo significado, otro registro.', en: 'Same meaning, different register.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona fórmula y función.', en: 'Match formula and function.' }, pairs: [['Der Text behandelt …', { es: 'presentar el tema', en: 'present the topic' }], ['Mit anderen Worten …', { es: 'parafrasear', en: 'paraphrase' }], ['Abschließend lässt sich festhalten …', { es: 'concluir', en: 'conclude' }], ['Beide Texte stimmen darin überein …', { es: 'sintetizar', en: 'synthesise' }]], x: { es: 'Redemittel de síntesis.', en: 'Synthesis phrases.' } },
    { t: 'rf', ph: 1, q: 'Un resumen alemán debe seguir siempre el orden del texto original.', a: false, x: { es: 'Sigue el orden lógico.', en: 'It follows the logical order.' } },
    { t: 'choice', ph: 1, q: 'Wittgenstein: «Die Bedeutung eines Wortes ist sein ___ in der Sprache.»', o: ['Bild', 'Gebrauch', 'Klang'], a: 1, x: { es: 'Investigaciones filosóficas, § 43.', en: 'Philosophical Investigations, § 43.' } },
    { t: 'gap', ph: 2, q: 'Mit ___ Worten: Bedeutung entsteht im Gebrauch.', a: 'anderen', x: { es: 'mit anderen Worten.', en: 'mit anderen Worten.' } },
    { t: 'gap', ph: 2, q: 'Im Mittelpunkt ___ der Begriff des Sprachspiels.', a: 'steht', x: { es: 'im Mittelpunkt stehen.', en: 'im Mittelpunkt stehen.' } },
    { t: 'gap', ph: 2, q: 'Abschließend lässt sich ___, dass … (constatar)', a: 'festhalten', x: { es: 'festhalten = constatar.', en: 'festhalten = note.' } },
    { t: 'gap', ph: 2, q: 'Haben Sie meine E-Mail ___? (formal: erhalten)', a: 'erhalten', x: { es: 'Participio igual al infinitivo.', en: 'Participle identical to infinitive.' } },
    { t: 'gap', ph: 2, q: 'Der Text ___ von der Sprache. (trata de)', a: 'handelt', x: { es: 'handeln von + D.', en: 'handeln von + dat.' } },
    { t: 'gap', ph: 2, q: 'Beide Texte stimmen darin ___, dass …', a: 'überein', x: { es: 'übereinstimmen: partícula al final.', en: 'übereinstimmen: particle at the end.' } },
    { t: 'order', ph: 2, w: ['Die Grenzen', 'meiner Sprache', 'bedeuten', 'die Grenzen', 'meiner Welt'], a: 'Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.', x: { es: 'Tractatus 5.6.', en: 'Tractatus 5.6.' } },
    { t: 'transform', ph: 3, p: { es: 'Pasa a registro formal.', en: 'Rewrite in formal register.' }, q: 'Hast du meine Mail gekriegt?', a: 'Haben Sie meine E-Mail erhalten?', x: { es: 'Sie + erhalten.', en: 'Sie + erhalten.' } },
    { t: 'transform', ph: 3, p: { es: 'Parafrasea con estilo nominal.', en: 'Paraphrase in nominal style.' }, q: 'Weil sie krank war, konnte sie nicht kommen.', a: 'Wegen ihrer Krankheit konnte sie nicht kommen.', alt: ['Aufgrund ihrer Krankheit konnte sie nicht kommen.', 'Krankheitsbedingt konnte sie nicht kommen.'], x: { es: 'weil → wegen + G.', en: 'weil → wegen + gen.' } },
    { t: 'transform', ph: 3, p: { es: 'Parafrasea con un antónimo negado.', en: 'Paraphrase with a negated antonym.' }, q: 'Das kommt häufig vor.', a: 'Das kommt nicht selten vor.', x: { es: 'häufig = nicht selten.', en: 'häufig = nicht selten.' } },
    { t: 'write', ph: 3, s: { es: 'Los límites de mi lenguaje significan los límites de mi mundo.', en: 'The limits of my language mean the limits of my world.' }, a: 'Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.', x: { es: 'Wittgenstein, Tractatus 5.6.', en: 'Wittgenstein, Tractatus 5.6.' } },
    { t: 'listen', ph: 3, a: 'Die Bedeutung eines Wortes ist sein Gebrauch in der Sprache.', x: { es: 'Wittgenstein, Investigaciones filosóficas § 43.', en: 'Wittgenstein, Philosophical Investigations § 43.' } }
  ],
  summary: [
    { es: 'Registro: coloquial (kriegen, gucken, super) · estándar (bekommen, sehen) · culto/técnico (erhalten, betrachten, ausgezeichnet).', en: 'Register: colloquial (kriegen, gucken, super) · standard (bekommen, sehen) · educated/technical (erhalten, betrachten, ausgezeichnet).' },
    { es: 'Parafrasear: sinónimo, verbal ↔ nominal, activa ↔ pasiva, antónimo negado, cita ↔ indirecto.', en: 'Paraphrase: synonym, verbal ↔ nominal, active ↔ passive, negated antonym, quote ↔ indirect.' },
    { es: 'Resumir: tema y tesis primero; orden lógico; Präsens + K1; sin opinión; ¼–⅓ del original.', en: 'Summarise: topic and thesis first; logical order; present + K1; no opinion; ¼–⅓ of the original.' },
    { es: 'Wittgenstein: Tractatus (figura) → Investigaciones (uso, juego de lenguaje, forma de vida). Enactivismo: la mente hace surgir un mundo actuando con un cuerpo.', en: 'Wittgenstein: Tractatus (picture) → Investigations (use, language game, form of life). Enactivism: the mind brings forth a world by acting with a body.' }
  ]
});

DD.readings.push({
  id: 'r-u40', unit: 'u40', level: 'C1', kind: 'unit',
  de: 'Die Grenzen meiner Sprache', es: 'Los límites de mi lenguaje', en: 'The limits of my language',
  genre: { es: 'Ensayo personal · serie Leipzig 40 (final)', en: 'Personal essay · Leipzig series 40 (finale)' },
  intro: { es: 'Último texto de la serie. Tomás termina su año de intercambio y escribe un ensayo para el seminario de Lena: ¿qué cambió en su mundo al cambiar su lengua? Las dos frases de Wittgenstein son citas literales (dominio público); el resto es texto original.', en: 'Last text of the series. Tomás is finishing his exchange year and writes an essay for Lena’s seminar: what changed in his world when his language changed? The two Wittgenstein sentences are verbatim quotations (public domain); the rest is original text.' },
  focus: { es: 'Registro culto · fórmulas de síntesis · paráfrasis · discurso indirecto · todo lo aprendido.', en: 'Educated register · synthesis phrases · paraphrase · indirect speech · everything you have learned.' },
  source: { type: 'original', note: { es: 'Citas literales: Ludwig Wittgenstein, Tractatus logico-philosophicus (1921), 5.6; Philosophische Untersuchungen (1953), § 43.', en: 'Verbatim quotations: Ludwig Wittgenstein, Tractatus logico-philosophicus (1921), 5.6; Philosophical Investigations (1953), § 43.' } },
  p: [
    ['Als ich vor einem Jahr in Leipzig ankam, konnte ich auf Deutsch kaum mehr als bestellen, mich vorstellen und mich entschuldigen. Die Stadt, die mich umgab, war mir zwar sichtbar, aber nicht zugänglich: Ich sah die Schilder, verstand die Durchsagen nicht und lachte, wenn die anderen lachten, ohne zu wissen, warum. Im Rückblick würde ich sagen, dass ich damals in einer kleineren Welt lebte, obwohl die Stadt dieselbe war.', 'Cuando llegué a Leipzig hace un año, en alemán apenas podía pedir algo, presentarme y disculparme. La ciudad que me rodeaba me era visible, sí, pero no accesible: veía los letreros, no entendía los avisos y me reía cuando los demás se reían, sin saber por qué. Mirando atrás diría que entonces vivía en un mundo más pequeño, aunque la ciudad era la misma.', 'When I arrived in Leipzig a year ago, I could hardly do more in German than order, introduce myself and apologise. The city around me was visible to me, admittedly, but not accessible: I saw the signs, didn’t understand the announcements and laughed when the others laughed, without knowing why. Looking back, I would say that I lived in a smaller world then, although the city was the same.'],
    ['Ludwig Wittgenstein hat diese Erfahrung in einen berühmten Satz gefasst: „Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.“ Im Tractatus ist dieser Satz allerdings streng logisch gemeint. Die Sprache bildet dort die Tatsachen der Welt ab, und was sich nicht sagen lässt, liegt außerhalb dieser Grenze. Für einen Austauschstudenten klingt der Satz eher wie eine Beschreibung des Alltags. Mit anderen Worten: Jedes neue Wort hat ein Stück Welt geöffnet.', 'Ludwig Wittgenstein resumió esta experiencia en una frase famosa: «Los límites de mi lenguaje significan los límites de mi mundo». En el Tractatus, sin embargo, esta frase tiene un sentido estrictamente lógico. Allí el lenguaje figura los hechos del mundo, y lo que no se puede decir queda fuera de ese límite. Para un estudiante de intercambio, la frase suena más bien como una descripción de la vida diaria. En otras palabras: cada palabra nueva abrió un trozo de mundo.', 'Ludwig Wittgenstein put this experience into a famous sentence: “The limits of my language mean the limits of my world.” In the Tractatus, however, the sentence is meant in a strictly logical sense. There language pictures the facts of the world, and what cannot be said lies beyond that limit. For an exchange student the sentence sounds rather like a description of everyday life. In other words: every new word opened up a piece of world.'],
    ['Später hat Wittgenstein seine frühe Auffassung selbst kritisiert. In den Philosophischen Untersuchungen schreibt er: „Die Bedeutung eines Wortes ist sein Gebrauch in der Sprache.“ Anders ausgedrückt: Wörter sind keine Etiketten für Dinge, sondern Züge in einem Sprachspiel, das in eine ganze Lebensform eingebettet ist. Genau das habe ich in der WG gelernt. „Doch“ ist kein Eintrag im Wörterbuch, sondern ein Zug in einem Gespräch; „Feierabend“ ist nicht nur das Ende der Arbeit, sondern eine Art zu leben.', 'Más tarde Wittgenstein criticó él mismo su concepción temprana. En las Investigaciones filosóficas escribe: «El significado de una palabra es su uso en el lenguaje». Dicho de otro modo: las palabras no son etiquetas para cosas, sino jugadas en un juego de lenguaje inserto en toda una forma de vida. Justamente eso aprendí en la WG. «Doch» no es una entrada de diccionario, sino una jugada en una conversación; «Feierabend» no es solo el fin del trabajo, sino una manera de vivir.', 'Later Wittgenstein criticised his early view himself. In the Philosophical Investigations he writes: “The meaning of a word is its use in the language.” Put differently: words are not labels for things but moves in a language game embedded in a whole form of life. That is exactly what I learned in the flatshare. “Doch” is not a dictionary entry but a move in a conversation; “Feierabend” is not just the end of work but a way of living.'],
    ['Die Vertreter des Enaktivismus gehen noch einen Schritt weiter. Francisco Varela, Evan Thompson und Eleanor Rosch vertraten 1991 die These, dass Kognition kein inneres Abbild einer fertigen Welt sei, sondern verkörpertes Handeln, durch das ein Lebewesen seine Welt erst hervorbringe. Wenn das stimmt, dann habe ich Deutsch nicht nur im Kopf gelernt, sondern mit dem ganzen Körper: beim Radfahren im Regen, beim Spülen in einer zu kleinen Küche, beim Warten auf Straßenbahnen, die nicht kamen.', 'Los representantes del enactivismo van un paso más allá. Francisco Varela, Evan Thompson y Eleanor Rosch sostuvieron en 1991 la tesis de que la cognición no es una copia interior de un mundo terminado, sino acción corporizada, a través de la cual un ser vivo hace surgir su mundo. Si eso es cierto, entonces no aprendí alemán solo con la cabeza, sino con todo el cuerpo: andando en bici bajo la lluvia, lavando la loza en una cocina demasiado pequeña, esperando tranvías que no llegaban.', 'The proponents of enactivism go one step further. In 1991 Francisco Varela, Evan Thompson and Eleanor Rosch put forward the thesis that cognition is not an inner copy of a finished world but embodied action, through which a living being first brings forth its world. If that is true, then I did not learn German only in my head but with my whole body: cycling in the rain, washing up in a kitchen that was too small, waiting for trams that didn’t come.'],
    ['Abschließend lässt sich festhalten, dass beide Ansätze einander nicht widersprechen, sondern sich ergänzen. Die Grenzen meiner Sprache waren tatsächlich die Grenzen meiner Welt; aber verschoben habe ich sie nicht durch Lesen allein, sondern durch Leben in der Sprache. Nächste Woche fliege ich zurück nach Chile. Meine Welt wird nicht kleiner werden. Sie hat jetzt zwei Sprachen – und zwei Küchen, in denen niemand spülen will.', 'Para concluir, cabe constatar que ambos enfoques no se contradicen, sino que se complementan. Los límites de mi lenguaje fueron efectivamente los límites de mi mundo; pero no los desplacé solo leyendo, sino viviendo en la lengua. La próxima semana vuelo de regreso a Chile. Mi mundo no se va a achicar. Ahora tiene dos lenguas, y dos cocinas en las que nadie quiere lavar la loza.', 'In conclusion it can be noted that the two approaches do not contradict but complement each other. The limits of my language really were the limits of my world; but I did not shift them by reading alone, but by living in the language. Next week I fly back to Chile. My world will not get smaller. It now has two languages – and two kitchens where no one wants to wash up.']
  ],
  gloss: [
    ['umgab', { es: 'rodeaba (umgeben)', en: 'surrounded (umgeben)' }],
    ['sichtbar', { es: 'visible', en: 'visible' }],
    ['zugänglich', { es: 'accesible', en: 'accessible' }],
    ['kleineren', { es: 'más pequeño', en: 'smaller' }],
    ['Ludwig', { es: 'Ludwig (nombre)', en: 'Ludwig (name)' }],
    ['Wittgenstein', { es: 'Ludwig Wittgenstein (1889–1951)', en: 'Ludwig Wittgenstein (1889–1951)' }],
    ['gefasst', { es: 'resumido; formulado (fassen)', en: 'put (fassen)' }],
    ['Tractatus', { es: 'Tractatus logico-philosophicus (1921)', en: 'Tractatus logico-philosophicus (1921)' }],
    ['streng', { es: 'estrictamente', en: 'strictly' }],
    ['logisch', { es: 'lógico', en: 'logical' }],
    ['gemeint', { es: 'entendido; querido decir (meinen)', en: 'meant (meinen)' }],
    ['bildet', { es: 'figura (abbilden)', en: 'pictures (abbilden)' }],
    ['Tatsachen', { es: 'hechos', en: 'facts' }],
    ['liegt', { es: 'está; queda (liegen)', en: 'lies (liegen)' }],
    ['Austauschstudenten', { es: 'estudiante de intercambio', en: 'exchange student' }],
    ['Stück', { es: 'trozo', en: 'piece' }],
    ['geöffnet', { es: 'abierto (öffnen)', en: 'opened (öffnen)' }],
    ['frühe', { es: 'temprana', en: 'early' }],
    ['kritisiert', { es: 'criticado (kritisieren)', en: 'criticised (kritisieren)' }],
    ['Philosophischen', { es: 'filosóficas', en: 'philosophical' }],
    ['Untersuchungen', { es: 'investigaciones', en: 'investigations' }],
    ['Etiketten', { es: 'etiquetas', en: 'labels' }],
    ['Züge', { es: 'jugadas (der Zug)', en: 'moves (der Zug)' }],
    ['eingebettet', { es: 'inserto; incrustado', en: 'embedded' }],
    ['Eintrag', { es: 'entrada', en: 'entry' }],
    ['Zug', { es: 'jugada', en: 'move' }],
    ['Feierabend', { es: 'fin de la jornada (y el tiempo libre que sigue)', en: 'end of the working day (and the free time after it)' }],
    ['Vertreter', { es: 'representantes', en: 'proponents' }],
    ['Enaktivismus', { es: 'enactivismo', en: 'enactivism' }],
    ['Francisco', { es: 'Francisco Varela (1946–2001), biólogo chileno', en: 'Francisco Varela (1946–2001), Chilean biologist' }],
    ['Varela', { es: 'Francisco Varela', en: 'Francisco Varela' }],
    ['Evan', { es: 'Evan Thompson (n. 1962)', en: 'Evan Thompson (b. 1962)' }],
    ['Thompson', { es: 'Evan Thompson', en: 'Evan Thompson' }],
    ['Eleanor', { es: 'Eleanor Rosch (n. 1938)', en: 'Eleanor Rosch (b. 1938)' }],
    ['Rosch', { es: 'Eleanor Rosch', en: 'Eleanor Rosch' }],
    ['Kognition', { es: 'cognición', en: 'cognition' }],
    ['Abbild', { es: 'copia; reflejo', en: 'copy; image' }],
    ['fertigen', { es: 'terminado', en: 'finished' }],
    ['Lebewesen', { es: 'ser vivo', en: 'living being' }],
    ['hervorbringe', { es: 'hace surgir (hervorbringen, K1)', en: 'brings forth (hervorbringen, K1)' }],
    ['Radfahren', { es: 'andar en bici', en: 'cycling' }],
    ['Spülen', { es: 'lavar la loza', en: 'washing up' }],
    ['Warten', { es: 'esperar', en: 'waiting' }],
    ['einander', { es: 'mutuamente; entre sí', en: 'each other' }],
    ['ergänzen', { es: 'complementan', en: 'complement' }],
    ['verschoben', { es: 'desplazado (verschieben)', en: 'shifted (verschieben)' }]
  ],
  q: [
    { t: 'choice', q: 'Wie beschreibt Tomás die Stadt bei seiner Ankunft?', o: ['sichtbar, aber nicht zugänglich', 'klein und hässlich', 'laut und gefährlich'], a: 0, x: { es: 'La veía, pero no tenía acceso a ella.', en: 'He saw it but had no access to it.' } },
    { t: 'rf', q: 'Im Tractatus ist der Satz über die Grenzen der Sprache als Beschreibung des Alltags gemeint.', a: false, x: { es: 'Allí tiene un sentido estrictamente lógico.', en: 'There it has a strictly logical sense.' } },
    { t: 'choice', q: 'Was sind Wörter nach dem späten Wittgenstein (laut Text)?', o: ['Etiketten für Dinge', 'Züge in einem Sprachspiel', 'Bilder im Kopf'], a: 1, x: { es: 'Jugadas en un juego de lenguaje.', en: 'Moves in a language game.' } },
    { t: 'choice', q: 'Was ist Kognition für den Enaktivismus?', o: ['ein inneres Abbild einer fertigen Welt', 'verkörpertes Handeln, das eine Welt hervorbringt', 'reine Logik'], a: 1, x: { es: 'Acción corporizada.', en: 'Embodied action.' } },
    { t: 'rf', q: 'Tomás meint, dass seine Welt in Chile wieder kleiner wird.', a: false, x: { es: 'Su mundo ahora tiene dos lenguas.', en: 'His world now has two languages.' } }
  ]
});
