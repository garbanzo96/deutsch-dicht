/* Gramática · Laute und Schrift */
DD.grammarTopic('k-laute', [
  {
    id: 'g-sounds', level: 'A1', de: 'Aussprache: Vokale, Konsonanten, Betonung', es: 'Pronunciación: vocales, consonantes, acento', en: 'Pronunciation: vowels, consonants, stress',
    summary: { es: 'El alemán distingue vocales largas y breves, tiene tres vocales con Umlaut y varios sonidos sin equivalente en español (ch, ü, ö, r uvular, h aspirada). El acento cae casi siempre en la primera sílaba de la raíz.', en: 'German distinguishes long and short vowels, has three umlaut vowels and several sounds with no Spanish equivalent (ch, ü, ö, uvular r, aspirated h). Stress almost always falls on the first syllable of the stem.' },
    blocks: [
      { b: 'table', h: { es: 'Vocales largas y breves', en: 'Long and short vowels' }, c: [{ es: 'Vocal', en: 'Vowel' }, { es: 'Larga: cuándo', en: 'Long: when' }, { es: 'Larga', en: 'Long' }, { es: 'Breve', en: 'Short' }], r: [
        ['a', { es: 'vocal doble, + h, + 1 consonante', en: 'double vowel, + h, + 1 consonant' }, 'Saal, Bahn, Tag', 'Stadt, Mann, hat'],
        ['e', { es: 'ee, eh, + 1 consonante', en: 'ee, eh, + 1 consonant' }, 'Tee, sehr, Weg', 'Bett, essen, denn'],
        ['i', { es: 'ie, ih', en: 'ie, ih' }, 'Liebe, ihr, wir', 'Kind, bitte, ist'],
        ['o', { es: 'oo, oh, + 1 consonante', en: 'oo, oh, + 1 consonant' }, 'Boot, Sohn, rot', 'kommen, oft, Sonne'],
        ['u', { es: 'uh, + 1 consonante', en: 'uh, + 1 consonant' }, 'Uhr, gut, Buch', 'Mutter, und, Bus'],
        ['ä', { es: 'äh, + 1 consonante', en: 'äh, + 1 consonant' }, 'Käse, spät, zählen', 'Äpfel, lässt, Hände'],
        ['ö', { es: 'öh, + 1 consonante', en: 'öh, + 1 consonant' }, 'schön, Öl, Söhne', 'können, öffnen, zwölf'],
        ['ü', { es: 'üh, + 1 consonante', en: 'üh, + 1 consonant' }, 'über, früh, Tür', 'Glück, müssen, fünf']
      ], n: { es: 'Regla práctica: vocal + consonante doble (ss, tt, mm…) o + dos consonantes = breve; vocal doble, vocal + h o ie = larga.', en: 'Rule of thumb: vowel + double consonant (ss, tt, mm…) or + two consonants = short; double vowel, vowel + h or ie = long.' } },
      { b: 'table', h: { es: 'Combinaciones de letras', en: 'Letter combinations' }, c: [{ es: 'Escritura', en: 'Spelling' }, { es: 'Sonido', en: 'Sound' }, { es: 'Ejemplos', en: 'Examples' }], r: [
        ['ei / ai', '/aɪ/', 'mein, Ei, Mai'],
        ['ie', '/iː/', 'Liebe, viel, sie'],
        ['eu / äu', '/ɔʏ/', 'neu, heute, Häuser'],
        ['au', '/aʊ/', 'Haus, Frau, auch'],
        ['ch (a, o, u, au)', '/x/', 'Buch, acht, auch'],
        ['ch (e, i, ä, ö, ü, consonante)', '/ç/', 'ich, Milch, Mädchen'],
        ['-ig (final)', '/ɪç/', 'richtig, König, zwanzig'],
        ['sch', '/ʃ/', 'Schule, Fisch, schön'],
        ['sp- / st- (inicio de sílaba)', '/ʃp/ / /ʃt/', 'Sport, sprechen, Straße, Stadt'],
        ['s + vocal', '/z/', 'Sonne, sehen, Rose'],
        ['ß / ss', '/s/', 'Straße, Fuß, Wasser'],
        ['z / tz', '/ts/', 'Zeit, zehn, Katze'],
        ['v', '/f/ · Vase: /v/', 'Vater, viel, vier · Vase'],
        ['w', '/v/', 'Wasser, wie, zwei'],
        ['j', '/j/', 'ja, Jahr, jung'],
        ['qu', '/kv/', 'Quatsch, Qualität'],
        ['pf', '/pf/', 'Apfel, Pferd, Kopf']
      ] },
      { b: 'table', h: { es: 'Consonantes que cambian', en: 'Consonants that change' }, c: [{ es: 'Fenómeno', en: 'Phenomenon' }, { es: 'Regla', en: 'Rule' }, { es: 'Ejemplos', en: 'Examples' }], r: [
        [{ es: 'ensordecimiento final', en: 'final devoicing' }, { es: 'b, d, g al final de sílaba suenan p, t, k', en: 'b, d, g at the end of a syllable sound p, t, k' }, 'gelb /p/, Hand /t/, Tag /k/ · aber: gelbe, Hände, Tage'],
        [{ es: 'r vocalizada', en: 'vocalised r' }, { es: '-er final y r tras vocal larga ≈ /ɐ/', en: 'final -er and r after long vowel ≈ /ɐ/' }, 'Mutter, Lehrer, hier, Uhr'],
        [{ es: 'r consonante', en: 'consonantal r' }, { es: 'uvular /ʁ/ al inicio y entre vocales', en: 'uvular /ʁ/ initially and between vowels' }, 'rot, Reise, Straße, hören'],
        [{ es: 'h aspirada', en: 'aspirated h' }, { es: 'al inicio de sílaba se pronuncia; tras vocal es muda', en: 'pronounced at syllable start; silent after a vowel' }, 'Haus, haben · gehen, sehr, Uhr'],
        [{ es: 'golpe de glotis', en: 'glottal stop' }, { es: 'antes de vocal inicial: no se enlaza', en: 'before initial vowel: no linking' }, 'ein | Apfel, be|enden, Ver|ein']
      ] },
      { b: 'concept', de: 'Wortakzent', t: { es: 'Palabras germánicas: acento en la primera sílaba de la raíz (ARbeit, LEben, verSTEHen: los prefijos be-, ge-, er-, ver-, zer-, ent-, emp-, miss- son átonos). Prefijos separables: siempre tónicos (ANrufen, MITkommen). Préstamos: suelen llevar el acento al final (StuDENT, UniversiTÄT, MuSIK, InformaTION).', en: 'Germanic words: stress on the first syllable of the stem (ARbeit, LEben, verSTEHen: the prefixes be-, ge-, er-, ver-, zer-, ent-, emp-, miss- are unstressed). Separable prefixes: always stressed (ANrufen, MITkommen). Loanwords usually stress the end (StuDENT, UniversiTÄT, MuSIK, InformaTION).' } },
      { b: 'note', tone: 'l1', t: { es: 'Errores típicos de hispanohablantes: pronunciar la e final como /e/ fuerte (bitte = /ˈbɪtə/, con schwa); no distinguir s sonora y sorda; confundir ü con u e ö con o; no aspirar la h; pronunciar la r como vibrante múltiple española (posible, pero marcada).', en: 'Typical errors of Spanish speakers: pronouncing final e as a full /e/ (bitte = /ˈbɪtə/, with schwa); not distinguishing voiced and voiceless s; confusing ü with u and ö with o; not aspirating h; using the Spanish trilled r (possible, but marked).' } }
    ],
    examples: [
      ['Der Sohn ist schon zwölf.', 'El hijo ya tiene doce.', 'The son is already twelve.'],
      ['Ich möchte ein Stück Käse.', 'Quisiera un trozo de queso.', 'I’d like a piece of cheese.'],
      ['Heute ist das Wetter schön.', 'Hoy el tiempo está lindo.', 'The weather is nice today.']
    ]
  },
  {
    id: 'g-alphabet', level: 'A1', de: 'Alphabet und Buchstabieren', es: 'El alfabeto y deletrear', en: 'The alphabet and spelling out',
    summary: { es: '26 letras más ä, ö, ü y ß. Deletrear nombres y direcciones es una tarea básica en Alemania (teléfono, oficinas). En contextos formales se usa el alfabeto telefónico alemán (A wie Anton…).', en: '26 letters plus ä, ö, ü and ß. Spelling out names and addresses is a basic task in Germany (phone, offices). Formal contexts use the German spelling alphabet (A wie Anton…).' },
    blocks: [
      { b: 'letters', h: { es: 'Nombres de las letras', en: 'Letter names' }, r: [['A', 'a', 'aː'], ['B', 'be', 'beː'], ['C', 'ce', 'tseː'], ['D', 'de', 'deː'], ['E', 'e', 'eː'], ['F', 'ef', 'ɛf'], ['G', 'ge', 'geː'], ['H', 'ha', 'haː'], ['I', 'i', 'iː'], ['J', 'jott', 'jɔt'], ['K', 'ka', 'kaː'], ['L', 'el', 'ɛl'], ['M', 'em', 'ɛm'], ['N', 'en', 'ɛn'], ['O', 'o', 'oː'], ['P', 'pe', 'peː'], ['Q', 'ku', 'kuː'], ['R', 'er', 'ɛʁ'], ['S', 'es', 'ɛs'], ['T', 'te', 'teː'], ['U', 'u', 'uː'], ['V', 'vau', 'faʊ'], ['W', 'we', 'veː'], ['X', 'ix', 'ɪks'], ['Y', 'üpsilon', 'ˈʏpsilɔn'], ['Z', 'zett', 'tsɛt'], ['Ä', 'ä', 'ɛː'], ['Ö', 'ö', 'øː'], ['Ü', 'ü', 'yː'], ['ß', 'eszett', 'ɛsˈtsɛt']] },
      { b: 'list', h: { es: 'Alfabeto telefónico (DIN 5009, versión tradicional)', en: 'Spelling alphabet (DIN 5009, traditional version)' }, cols: 4, r: [['A wie Anton', '', ''], ['B wie Berta', '', ''], ['C wie Cäsar', '', ''], ['D wie Dora', '', ''], ['E wie Emil', '', ''], ['F wie Friedrich', '', ''], ['G wie Gustav', '', ''], ['H wie Heinrich', '', ''], ['I wie Ida', '', ''], ['J wie Julius', '', ''], ['K wie Kaufmann', '', ''], ['L wie Ludwig', '', ''], ['M wie Martha', '', ''], ['N wie Nordpol', '', ''], ['O wie Otto', '', ''], ['P wie Paula', '', ''], ['Q wie Quelle', '', ''], ['R wie Richard', '', ''], ['S wie Samuel', '', ''], ['T wie Theodor', '', ''], ['U wie Ulrich', '', ''], ['V wie Viktor', '', ''], ['W wie Wilhelm', '', ''], ['Z wie Zacharias', '', '']], n: { es: 'Desde 2022 la norma DIN 5009 usa nombres de ciudades (A wie Aachen, B wie Berlin…); la versión tradicional sigue siendo muy usada.', en: 'Since 2022 DIN 5009 uses city names (A wie Aachen, B wie Berlin…); the traditional version is still widely used.' } },
      { b: 'list', h: { es: 'Fórmulas para deletrear', en: 'Spelling phrases' }, cols: 2, r: [['Wie schreibt man das?', { es: '¿Cómo se escribe?', en: 'How do you spell that?' }], ['Können Sie das bitte buchstabieren?', { es: '¿Puede deletrearlo, por favor?', en: 'Could you spell that, please?' }], ['mit Doppel-s / mit scharfem S', { es: 'con doble s / con ß', en: 'with double s / with ß' }], ['groß / klein geschrieben', { es: 'con mayúscula / minúscula', en: 'capitalised / lower case' }], ['a-Umlaut, o-Umlaut, u-Umlaut', { es: 'ä, ö, ü', en: 'ä, ö, ü' }], ['Bindestrich · Punkt · at (@)', { es: 'guion · punto · arroba', en: 'hyphen · dot · at' }]] }
    ],
    examples: [
      ['Mein Name ist Rivas: R – I – V – A – S.', 'Mi apellido es Rivas: R-I-V-A-S.', 'My surname is Rivas: R-I-V-A-S.'],
      ['Schreibt man das mit ß oder mit Doppel-s?', '¿Se escribe con ß o con doble s?', 'Is it spelled with ß or double s?'],
      ['Weiß – W wie Wilhelm, E, I, Eszett.', 'Weiß: W de Wilhelm, E, I, ß.', 'Weiß – W as in Wilhelm, E, I, sharp S.']
    ]
  },
  {
    id: 'g-spelling', level: 'A2', de: 'Rechtschreibung und Zeichensetzung', es: 'Ortografía y puntuación', en: 'Spelling and punctuation',
    summary: { es: 'Tres reglas cubren la mayoría de los casos: todos los sustantivos con mayúscula; ß tras vocal larga o diptongo, ss tras vocal breve; coma obligatoria antes de toda subordinada (y entre principal y subordinada en ambos sentidos).', en: 'Three rules cover most cases: all nouns capitalised; ß after a long vowel or diphthong, ss after a short vowel; a comma is obligatory before every subordinate clause (and between main and subordinate clause in both directions).' },
    blocks: [
      { b: 'table', h: { es: 'Mayúsculas', en: 'Capitalisation' }, c: [{ es: 'Se escribe con mayúscula', en: 'Capitalised' }, { es: 'Ejemplos', en: 'Examples' }], r: [
        [{ es: 'todos los sustantivos', en: 'all nouns' }, 'der Tisch, die Freiheit, das Leben'],
        [{ es: 'palabras sustantivadas', en: 'nominalised words' }, 'das Lernen, etwas Neues, beim Essen, das Ich'],
        [{ es: 'Sie, Ihnen, Ihr (cortesía)', en: 'Sie, Ihnen, Ihr (polite)' }, 'Haben Sie Zeit? · Ihr Termin'],
        [{ es: 'inicio de oración y tras dos puntos si sigue oración completa', en: 'sentence start and after a colon if a full sentence follows' }, 'Er sagte: Wir kommen morgen.'],
        [{ es: 'adjetivos en nombres propios', en: 'adjectives in proper names' }, 'der Schwarze Wald, das Rote Kreuz']
      ], n: { es: 'Minúscula: adjetivos de nacionalidad (deutsch, chilenisch), du/dich/dein (salvo en cartas, opcional), días con -s como adverbio (montags, abends).', en: 'Lower case: nationality adjectives (deutsch, chilenisch), du/dich/dein (except optionally in letters), day names with -s as adverbs (montags, abends).' } },
      { b: 'table', h: { es: 'ß o ss', en: 'ß or ss' }, c: [{ es: 'Regla', en: 'Rule' }, 'ß', 'ss'], r: [
        [{ es: 'vocal larga / diptongo → ß', en: 'long vowel / diphthong → ß' }, 'Straße, Fuß, heißen, groß', '—'],
        [{ es: 'vocal breve → ss', en: 'short vowel → ss' }, '—', 'Wasser, Kuss, muss, dass'],
        [{ es: 'cambios dentro de la familia', en: 'changes within the family' }, 'genießen, Genuss · fließen, Fluss', 'wissen, er weiß · essen, er aß']
      ], n: { es: 'En Suiza y Liechtenstein no se usa ß (siempre ss). En mayúsculas: STRASSE o, desde 2017, STRAẞE.', en: 'Switzerland and Liechtenstein do not use ß (always ss). In capitals: STRASSE or, since 2017, STRAẞE.' } },
      { b: 'table', h: { es: 'La coma', en: 'The comma' }, c: [{ es: 'Caso', en: 'Case' }, { es: 'Regla', en: 'Rule' }, { es: 'Ejemplo', en: 'Example' }], r: [
        [{ es: 'subordinada', en: 'subordinate clause' }, { es: 'siempre con coma', en: 'always set off' }, 'Ich weiß[,] dass du recht hast.'],
        [{ es: 'oración relativa', en: 'relative clause' }, { es: 'siempre entre comas', en: 'always set off' }, 'Der Mann[,] der dort steht[,] ist mein Vater.'],
        [{ es: 'infinitiva con um, ohne, statt, außer, als', en: 'infinitive clause with um, ohne, statt, außer, als' }, { es: 'obligatoria', en: 'obligatory' }, 'Er kam[,] um zu helfen.'],
        [{ es: 'und / oder entre principales', en: 'und / oder between main clauses' }, { es: 'opcional', en: 'optional' }, 'Er liest und sie schreibt.'],
        [{ es: 'aber, sondern, doch', en: 'aber, sondern, doch' }, { es: 'siempre coma antes', en: 'always a comma before' }, 'Nicht heute[,] sondern morgen.']
      ] },
      { b: 'note', tone: 'l1', t: { es: 'A diferencia del español, en alemán la coma ante dass, weil, ob, wenn… no es opcional ni depende de la longitud: es gramatical. Además, el alemán no usa ¿ ni ¡ al inicio.', en: 'Unlike English, the comma before dass, weil, ob, wenn… is not optional or length-dependent: it is grammatical.' } }
    ],
    examples: [
      ['Ich glaube, dass das Lernen am Abend am besten funktioniert.', 'Creo que estudiar en la noche funciona mejor.', 'I think learning in the evening works best.'],
      ['Haben Sie Ihren Ausweis dabei?', '¿Tiene su carnet consigo?', 'Do you have your ID with you?'],
      ['Die Straße, in der ich wohne, ist sehr ruhig.', 'La calle en la que vivo es muy tranquila.', 'The street I live in is very quiet.']
    ]
  }
]);
