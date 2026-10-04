/* U38 · Das Sein und das Bewusstsein */
DD.lexicon.push({ unit: 'u38', words: [
  ['n', 'das Sein', '—', 'el ser', 'being', { homonym: 1 }],
  ['n', 'das Dasein', '—', 'la existencia', 'existence; being-there'],
  ['n', 'das Wesen', 'Wesen', 'la esencia; el ser (vivo)', 'essence; being; creature'],
  ['n', 'das Nichts', '—', 'la nada', 'nothingness', { homonym: 1 }],
  ['n', 'das Ich', '—', 'el yo', 'the self; the ego', { homonym: 1 }],
  ['n', 'das Subjekt', 'Subjekte', 'el sujeto', 'subject'],
  ['n', 'das Objekt', 'Objekte', 'el objeto', 'object'],
  ['n', 'die Vernunft', '—', 'la razón', 'reason'],
  ['n', 'der Verstand', '—', 'el entendimiento', 'understanding; intellect'],
  ['n', 'die Anschauung', 'Anschauungen', 'la intuición (sensible); la visión', 'intuition; view'],
  ['n', 'die Erkenntnis', 'Erkenntnisse', 'el conocimiento', 'knowledge; cognition'],
  ['n', 'die Erscheinung', 'Erscheinungen', 'el fenómeno; la aparición', 'appearance; phenomenon'],
  ['n', 'die Aufklärung', '—', 'la Ilustración; el esclarecimiento', 'Enlightenment; clarification'],
  ['n', 'die Unmündigkeit', '—', 'la minoría de edad (intelectual)', 'immaturity; tutelage'],
  ['n', 'der Wille', '—', 'la voluntad', 'will', { n: 1, gen: 'des Willens' }],
  ['n', 'der Widerspruch', 'Widersprüche', 'la contradicción', 'contradiction'],
  ['n', 'die Aufhebung', 'Aufhebungen', 'la superación (Hegel); la anulación', 'sublation; abolition'],
  ['n', 'die Dialektik', '—', 'la dialéctica', 'dialectic'],
  ['n', 'die Stufe', 'Stufen', 'el nivel; el peldaño; la etapa', 'stage; step'],
  ['n', 'die Gestalt', 'Gestalten', 'la forma; la figura', 'form; figure'],
  ['n', 'die Notwendigkeit', 'Notwendigkeiten', 'la necesidad', 'necessity'],
  ['v', 'auf|heben', 'hebt auf', 'hob auf', 'hat aufgehoben', 'levantar; guardar; anular; (Hegel) superar', 'pick up; keep; cancel; (Hegel) sublate'],
  ['v', 'sich bedienen', 'bedient', 'bediente', 'hat bedient', 'servirse de', 'make use of', { rek: '+ G', id: 'verb-sich-bedienen', homonym: 1 }],
  ['a', 'rein', null, null, 'puro', 'pure'],
  ['a', 'philosophisch', '—', '—', 'filosófico', 'philosophical'],
  ['name', 'Kant', 'Immanuel Kant (1724–1804), filósofo de Königsberg', 'Immanuel Kant (1724–1804), philosopher from Königsberg'],
  ['name', 'Hegel', 'G. W. F. Hegel (1770–1831), filósofo', 'G. W. F. Hegel (1770–1831), philosopher'],
  ['a', 'mündig', '—', '—', 'mayor de edad; emancipado', 'of age; autonomous'],
  ['a', 'selbstverschuldet', '—', '—', 'autoculpable; del que uno mismo es culpable', 'self-incurred'],
  ['phr', 'das Ding an sich', 'la cosa en sí', 'the thing in itself'],
  ['phr', 'a priori', 'a priori', 'a priori', { forms: { priori: 'phr' } }],
  ['phr', 'etwas Neues', 'algo nuevo', 'something new', { forms: { Neues: 'phr' } }],
  ['phr', 'nichts Besonderes', 'nada especial', 'nothing special', { forms: { Besonderes: 'phr' } }]
] });

DD.unit('u38', {
  minutes: 70,
  goals: [
    { es: 'Sustantivar adjetivos, participios, infinitivos y pronombres y declinarlos bien: das Gute, etwas Neues, das Sein, das Ich.', en: 'Nominalise adjectives, participles, infinitives and pronouns and decline them correctly: das Gute, etwas Neues, das Sein, das Ich.' },
    { es: 'Leer cadenas de genitivo de derecha a izquierda: die Bedingungen der Möglichkeit der Erfahrung.', en: 'Read genitive chains right to left: die Bedingungen der Möglichkeit der Erfahrung.' },
    { es: 'Dominar la terminología básica de Kant y Hegel y leer frases originales breves.', en: 'Master basic Kantian and Hegelian terminology and read short original sentences.' }
  ],
  grammar: ['g-nominalisation-adj', 'g-genitive-chains', 'g-terminology'],
  lesson: [
    { b: 'concept', de: 'Substantivierung', t: { es: 'Casi cualquier palabra puede volverse sustantivo: se escribe con mayúscula y lleva artículo. Los adjetivos y participios sustantivados se siguen declinando como adjetivos; los infinitivos sustantivados son neutros y no tienen plural. Es la principal fuente del vocabulario filosófico alemán: das Wahre, das Sein, das Werden, das Ich.', en: 'Almost any word can become a noun: it is capitalised and takes an article. Nominalised adjectives and participles keep adjective declension; nominalised infinitives are neuter and have no plural. It is the main source of German philosophical vocabulary: das Wahre, das Sein, das Werden, das Ich.' } },
    { b: 'table', h: { es: 'Adjetivos sustantivados (neutro: lo abstracto)', en: 'Nominalised adjectives (neuter: the abstract)' }, c: ['', { es: 'con artículo', en: 'with article' }, 'etwas / nichts / viel', 'alles'], r: [
      ['Nominativ', 'das Gut[e]', 'etwas Gut[es]', 'alles Gut[e]'],
      ['Akkusativ', 'das Gut[e]', 'etwas Gut[es]', 'alles Gut[e]'],
      ['Dativ', 'dem Gut[en]', 'mit etwas Gut[em]', 'allem Gut[en]'],
      ['Genitiv', 'des Gut[en]', '—', 'alles Gut[en]']
    ], n: { es: 'etwas, nichts, viel, wenig + declinación fuerte (etwas Neues); alles + débil (alles Gute). Personas: der Kranke, ein Kranker, die Kranken; der/die Deutsche, die Angestellten.', en: 'etwas, nichts, viel, wenig + strong declension (etwas Neues); alles + weak (alles Gute). People: der Kranke, ein Kranker, die Kranken; der/die Deutsche, die Angestellten.' } },
    { b: 'table', h: { es: 'Infinitivos y pronombres sustantivados', en: 'Nominalised infinitives and pronouns' }, c: [{ es: 'Forma', en: 'Form' }, { es: 'Ejemplo', en: 'Example' }, { es: 'Nota', en: 'Note' }], r: [
      ['das + Infinitiv', '[das] Sein · [das] Werden · [das] Denken', { es: 'neutro, sin plural', en: 'neuter, no plural' }],
      ['beim + Infinitiv', '[beim] Lesen · [beim] Kochen', { es: '= mientras se hace', en: '= while doing' }],
      ['zum + Infinitiv', '[zum] Lernen · [zum] Nachdenken', { es: '= para hacer', en: '= for doing' }],
      [{ es: 'pronombres', en: 'pronouns' }, '[das] Ich · [das] Selbst · [das] Andere · [das] Nichts', { es: 'términos filosóficos', en: 'philosophical terms' }],
      [{ es: 'participios', en: 'participles' }, '[das] Gegebene · [das] Gedachte · [der] Reisende', { es: 'declinación adjetival', en: 'adjectival declension' }]
    ] },
    { b: 'concept', de: 'Genitivketten', t: { es: 'El alemán encadena genitivos: cada eslabón determina al anterior. Para leer, empieza por la derecha y avanza hacia la izquierda: die Bedingungen der Möglichkeit der Erfahrung = la experiencia → su posibilidad → las condiciones de esa posibilidad. Es la fórmula clásica de la pregunta trascendental de Kant.', en: 'German chains genitives: each link determines the previous one. To read, start on the right and move left: die Bedingungen der Möglichkeit der Erfahrung = experience → its possibility → the conditions of that possibility. It is the classic formula of Kant’s transcendental question.' } },
    { b: 'slots', h: { es: 'Anatomía de una cadena de genitivos', en: 'Anatomy of a genitive chain' }, c: [{ es: 'Núcleo', en: 'Head' }, { es: 'Genitivo 1', en: 'Genitive 1' }, { es: 'Genitivo 2', en: 'Genitive 2' }], v: [0], r: [
      ['die Kritik', 'der reinen Vernunft', ''],
      ['die Phänomenologie', 'des Geistes', ''],
      ['die Bedingungen', 'der Möglichkeit', 'der Erfahrung'],
      ['das Bewusstsein', 'der Freiheit', 'des Willens']
    ], n: { es: 'Kritik der reinen Vernunft (Kant, 1781) · Phänomenologie des Geistes (Hegel, 1807): los títulos ya son cadenas de genitivo.', en: 'Kritik der reinen Vernunft (Kant, 1781) · Phänomenologie des Geistes (Hegel, 1807): the titles themselves are genitive chains.' } },
    { b: 'table', h: { es: 'Vocabulario filosófico esencial', en: 'Essential philosophical vocabulary' }, c: [{ es: 'Término', en: 'Term' }, { es: 'Español', en: 'English' }, { es: 'Contexto típico', en: 'Typical context' }], r: [
      ['der Verstand', { es: 'el entendimiento', en: 'understanding' }, { es: 'Kant: facultad de los conceptos', en: 'Kant: faculty of concepts' }],
      ['die Vernunft', { es: 'la razón', en: 'reason' }, { es: 'Kant: facultad de los principios e ideas', en: 'Kant: faculty of principles and ideas' }],
      ['die Anschauung', { es: 'la intuición', en: 'intuition' }, { es: 'Kant: lo dado sensiblemente', en: 'Kant: what is given in sensibility' }],
      ['die Erscheinung', { es: 'el fenómeno', en: 'appearance' }, { es: 'Kant: frente al Ding an sich', en: 'Kant: as opposed to the thing in itself' }],
      ['der Geist', { es: 'el espíritu', en: 'spirit; mind' }, { es: 'Hegel: razón que se conoce a sí misma en la historia', en: 'Hegel: reason knowing itself in history' }],
      ['die Aufhebung', { es: 'la superación', en: 'sublation' }, { es: 'Hegel: negar, conservar y elevar a la vez', en: 'Hegel: negate, preserve and raise at once' }],
      ['das Sein · das Dasein', { es: 'el ser · la existencia', en: 'being · existence' }, { es: 'ontología', en: 'ontology' }],
      ['die Erkenntnis', { es: 'el conocimiento', en: 'cognition; knowledge' }, { es: 'teoría del conocimiento', en: 'epistemology' }]
    ] },
    { b: 'note', tone: 'tip', t: { es: 'aufheben tiene en alemán corriente tres sentidos: levantar algo del suelo, guardarlo y anularlo (ein Gesetz aufheben). Hegel aprovecha esa ambigüedad: lo «aufgehoben» queda negado y, a la vez, conservado en un nivel superior.', en: 'In ordinary German aufheben has three senses: pick something up, keep it, and cancel it (ein Gesetz aufheben). Hegel exploits this ambiguity: what is “aufgehoben” is negated and at the same time preserved at a higher level.' } },
    { b: 'note', tone: 'l1', t: { es: 'El «lo» neutro del español corresponde al neutro sustantivado: lo verdadero = das Wahre, lo bello = das Schöne, lo dado = das Gegebene. El inglés necesita perífrasis («the true», «that which is given»).', en: 'Spanish neuter “lo” corresponds to the nominalised neuter: lo verdadero = das Wahre, lo bello = das Schöne. English needs paraphrase (“the true”, “that which is given”).' } }
  ],
  chunks: [
    ['Alles Gute zum Geburtstag!', '¡Feliz cumpleaños! (todo lo mejor)', 'All the best for your birthday!'],
    ['Gibt es etwas Neues?', '¿Hay algo nuevo?', 'Is there anything new?'],
    ['Das ist nichts Besonderes.', 'No es nada especial.', 'It’s nothing special.'],
    ['Beim Lesen mache ich mir Notizen.', 'Al leer tomo apuntes.', 'When reading I take notes.'],
    ['die Bedingungen der Möglichkeit der Erfahrung', 'las condiciones de posibilidad de la experiencia', 'the conditions of the possibility of experience']
  ],
  errors: [
    ['das gute', 'das Gute', { es: 'Sustantivado: mayúscula.', en: 'Nominalised: capital letter.' }],
    ['etwas Neue', 'etwas Neues', { es: 'Tras etwas: declinación fuerte (-es).', en: 'After etwas: strong declension (-es).' }],
    ['alles Gutes', 'alles Gute', { es: 'Tras alles: declinación débil (-e).', en: 'After alles: weak declension (-e).' }],
    ['ein Kranke', 'ein Kranker', { es: 'Adjetivo sustantivado tras ein: mixta (-er).', en: 'Nominalised adjective after ein: mixed (-er).' }],
    ['die Seins', 'das Sein', { es: 'Infinitivo sustantivado: neutro, sin plural.', en: 'Nominalised infinitive: neuter, no plural.' }]
  ],
  examples: [
    ['Das Schöne an dieser Theorie ist ihre Einfachheit.', 'Lo bello de esta teoría es su simplicidad.', 'The beautiful thing about this theory is its simplicity.'],
    ['Im Denken unterscheidet sich der Mensch vom Tier.', 'En el pensar, el ser humano se distingue del animal.', 'In thinking, human beings differ from animals.'],
    ['Kant fragt nach den Bedingungen der Möglichkeit der Erfahrung.', 'Kant pregunta por las condiciones de posibilidad de la experiencia.', 'Kant asks about the conditions of the possibility of experience.'],
    ['Wir erkennen die Dinge nur, wie sie uns erscheinen, nicht, wie sie an sich sind.', 'Conocemos las cosas solo como se nos aparecen, no como son en sí.', 'We know things only as they appear to us, not as they are in themselves.'],
    ['Für Hegel ist das Ganze mehr als die Summe seiner Teile.', 'Para Hegel, el todo es más que la suma de sus partes.', 'For Hegel the whole is more than the sum of its parts.'],
    ['Die Aufhebung eines Widerspruchs bewahrt das Wahre beider Seiten.', 'La superación de una contradicción conserva lo verdadero de ambos lados.', 'The sublation of a contradiction preserves what is true on both sides.']
  ],
  reading: 'r-u38',
  exercises: [
    { t: 'choice', ph: 1, q: 'Gibt es etwas ___?', o: ['Neue', 'Neues', 'Neuen'], a: 1, x: { es: 'etwas + fuerte: -es.', en: 'etwas + strong: -es.' } },
    { t: 'choice', ph: 1, q: 'Alles ___ zum Geburtstag!', o: ['Gute', 'Gutes', 'Guten'], a: 0, x: { es: 'alles + débil: -e.', en: 'alles + weak: -e.' } },
    { t: 'choice', ph: 1, q: '___ Lesen mache ich Notizen. (mientras leo)', o: ['Zum', 'Beim', 'Vom'], a: 1, x: { es: 'beim + infinitivo.', en: 'beim + infinitive.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona término y traducción.', en: 'Match term and translation.' }, pairs: [['der Verstand', { es: 'el entendimiento', en: 'understanding' }], ['die Vernunft', { es: 'la razón', en: 'reason' }], ['die Anschauung', { es: 'la intuición', en: 'intuition' }], ['die Erscheinung', { es: 'el fenómeno', en: 'appearance' }]], x: { es: 'Terminología kantiana.', en: 'Kantian terminology.' } },
    { t: 'rf', ph: 1, q: 'En «die Bedingungen der Möglichkeit der Erfahrung», la experiencia es lo que tiene posibilidad.', a: true, x: { es: 'Lectura de derecha a izquierda.', en: 'Read right to left.' } },
    { t: 'choice', ph: 1, q: 'Hegels Wort für «negar y conservar a la vez» es…', o: ['Aufklärung', 'Aufhebung', 'Anschauung'], a: 1, x: { es: 'die Aufhebung.', en: 'die Aufhebung.' } },
    { t: 'gap', ph: 2, q: 'Das ___ an dieser Idee ist ihre Einfachheit. (schön)', a: 'Schöne', x: { es: 'das + adjetivo débil: -e, mayúscula.', en: 'das + weak adjective: -e, capitalised.' } },
    { t: 'gap', ph: 2, q: 'Das ist nichts ___. (besonders)', a: 'Besonderes', x: { es: 'nichts + fuerte: -es.', en: 'nichts + strong: -es.' } },
    { t: 'gap', ph: 2, q: 'Im Krankenhaus liegen viele ___. (krank, plural)', a: 'Kranke', x: { es: 'viele + fuerte plural: -e.', en: 'viele + strong plural: -e.' } },
    { t: 'gap', ph: 2, q: 'mit etwas ___ (neu, dativo)', a: 'Neuem', x: { es: 'Dativo fuerte: -em.', en: 'Strong dative: -em.' } },
    { t: 'gap', ph: 2, q: 'die Kritik der rein___ Vernunft', a: 'en', alt: ['-en'], x: { es: 'Genitivo f con artículo: -en.', en: 'Feminine genitive with article: -en.' } },
    { t: 'gap', ph: 2, q: 'die Phänomenologie des ___ (Geist)', a: 'Geistes', x: { es: 'Genitivo m: -es.', en: 'Masculine genitive: -es.' } },
    { t: 'order', ph: 2, w: ['die Bedingungen', 'der Möglichkeit', 'der Erfahrung'], a: 'die Bedingungen der Möglichkeit der Erfahrung', x: { es: 'Núcleo + genitivo 1 + genitivo 2.', en: 'Head + genitive 1 + genitive 2.' } },
    { t: 'transform', ph: 3, p: { es: 'Sustantiva el infinitivo.', en: 'Nominalise the infinitive.' }, q: 'Wenn man liest, lernt man viel.', a: 'Beim Lesen lernt man viel.', x: { es: 'wenn man + verbo → beim + infinitivo.', en: 'wenn man + verb → beim + infinitive.' } },
    { t: 'transform', ph: 3, p: { es: 'Convierte en cadena de genitivos.', en: 'Turn into a genitive chain.' }, q: 'Man kritisiert die Methode der Studie.', a: 'die Kritik der Methode der Studie', x: { es: 'Verbo → sustantivo + genitivo.', en: 'Verb → noun + genitive.' } },
    { t: 'write', ph: 3, s: { es: 'lo verdadero es el todo', en: 'the true is the whole' }, a: 'Das Wahre ist das Ganze.', x: { es: 'Hegel, Phänomenologie des Geistes (1807), prólogo.', en: 'Hegel, Phenomenology of Spirit (1807), preface.' } },
    { t: 'write', ph: 3, s: { es: '¿Hay algo nuevo?', en: 'Is there anything new?' }, a: 'Gibt es etwas Neues?', x: { es: 'etwas + fuerte.', en: 'etwas + strong.' } },
    { t: 'listen', ph: 3, a: 'Das Wahre ist das Ganze.', x: { es: 'Dos adjetivos sustantivados.', en: 'Two nominalised adjectives.' } }
  ],
  summary: [
    { es: 'Sustantivar = mayúscula + artículo. Adjetivos y participios siguen declinándose: das Gute, des Guten, ein Kranker.', en: 'Nominalise = capital + article. Adjectives and participles keep declining: das Gute, des Guten, ein Kranker.' },
    { es: 'etwas / nichts / viel / wenig + fuerte (etwas Neues, mit etwas Neuem); alles + débil (alles Gute).', en: 'etwas / nichts / viel / wenig + strong (etwas Neues, mit etwas Neuem); alles + weak (alles Gute).' },
    { es: 'Infinitivo sustantivado: das, sin plural; beim / zum + infinitivo.', en: 'Nominalised infinitive: das, no plural; beim / zum + infinitive.' },
    { es: 'Cadenas de genitivo: leer de derecha a izquierda. Kant: Verstand, Vernunft, Anschauung, Erscheinung. Hegel: Geist, Aufhebung, das Wahre, das Ganze.', en: 'Genitive chains: read right to left. Kant: Verstand, Vernunft, Anschauung, Erscheinung. Hegel: Geist, Aufhebung, das Wahre, das Ganze.' }
  ]
});

DD.readings.push({
  id: 'r-u38', unit: 'u38', level: 'C1', kind: 'unit',
  de: 'Zwei Sätze aus Königsberg und Jena', es: 'Dos frases de Königsberg y Jena', en: 'Two sentences from Königsberg and Jena',
  genre: { es: 'Explicación filosófica con citas · serie Leipzig 38', en: 'Philosophical explanation with quotations · Leipzig series 38' },
  intro: { es: 'Tomás pide a Lena que le explique por qué Kant y Hegel son tan difíciles. Ella elige cuatro frases breves y famosas, citadas literalmente (dominio público), y las explica en un texto propio. Solo lo que va entre comillas es cita.', en: 'Tomás asks Lena to explain why Kant and Hegel are so difficult. She chooses four short, famous sentences, quoted verbatim (public domain), and explains them in her own text. Only what is in quotation marks is quoted.' },
  focus: { es: 'Sustantivos abstractos (das Wahre, das Ganze, die Unmündigkeit) · cadenas de genitivo · terminología kantiana y hegeliana.', en: 'Abstract nouns (das Wahre, das Ganze, die Unmündigkeit) · genitive chains · Kantian and Hegelian terminology.' },
  source: { type: 'original', note: { es: 'Citas literales: Kant, «Beantwortung der Frage: Was ist Aufklärung?» (1784); Kant, Kritik der reinen Vernunft (1781, A 51 / B 75); Hegel, Phänomenologie des Geistes (1807), Vorrede. Ortografía modernizada.', en: 'Verbatim quotations: Kant, “An Answer to the Question: What Is Enlightenment?” (1784); Kant, Critique of Pure Reason (1781, A 51 / B 75); Hegel, Phenomenology of Spirit (1807), preface. Modernised spelling.' } },
  p: [
    ['„Warum klingt deutsche Philosophie immer so schwer?“, fragt Tomás. Lena überlegt. „Weil sie fast nur aus Substantiven besteht. Aber wenn man die Substantive wieder in Sätze verwandelt, wird vieles einfacher. Ich zeige es dir an vier Sätzen.“', '«¿Por qué la filosofía alemana siempre suena tan difícil?», pregunta Tomás. Lena reflexiona. «Porque consiste casi solo en sustantivos. Pero si vuelves a convertir los sustantivos en oraciones, mucho se vuelve más simple. Te lo muestro con cuatro frases.»', '“Why does German philosophy always sound so difficult?” asks Tomás. Lena thinks. “Because it consists almost entirely of nouns. But if you turn the nouns back into sentences, a lot becomes simpler. I’ll show you with four sentences.”'],
    ['Der erste Satz stammt aus einem kurzen Text, den Immanuel Kant 1784 in Königsberg veröffentlichte: „Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit.“ Unmündig ist, wer sich seines eigenen Verstandes nicht ohne die Leitung eines anderen bedienen kann. Selbstverschuldet ist diese Unmündigkeit, wenn nicht der Verstand fehlt, sondern der Mut. Deshalb lautet Kants Aufforderung: „Habe Mut, dich deines eigenen Verstandes zu bedienen!“', 'La primera frase proviene de un texto breve que Immanuel Kant publicó en 1784 en Königsberg: «La Ilustración es la salida del ser humano de su minoría de edad autoculpable». Es menor de edad quien no puede servirse de su propio entendimiento sin la guía de otro. Esta minoría de edad es autoculpable cuando no falta el entendimiento, sino el valor. Por eso la exhortación de Kant dice: «¡Ten valor de servirte de tu propio entendimiento!»', 'The first sentence comes from a short text Immanuel Kant published in Königsberg in 1784: “Enlightenment is man’s emergence from his self-incurred immaturity.” Immature is whoever cannot make use of their own understanding without the guidance of another. This immaturity is self-incurred when what is lacking is not understanding but courage. Hence Kant’s call: “Have courage to make use of your own understanding!”'],
    ['Der zweite Satz steht in der Kritik der reinen Vernunft: „Gedanken ohne Inhalt sind leer, Anschauungen ohne Begriffe sind blind.“ Kant fragt dort nach den Bedingungen der Möglichkeit der Erfahrung. Seine Antwort: Erkenntnis entsteht nur, wenn zwei Quellen zusammenarbeiten – die Sinnlichkeit, die uns Anschauungen gibt, und der Verstand, der sie durch Begriffe ordnet. Was die Dinge an sich sind, unabhängig von uns, können wir nach Kant nicht erkennen. Wir erkennen nur Erscheinungen.', 'La segunda frase está en la Crítica de la razón pura: «Pensamientos sin contenido son vacíos, intuiciones sin conceptos son ciegas». Kant pregunta allí por las condiciones de posibilidad de la experiencia. Su respuesta: el conocimiento surge solo cuando colaboran dos fuentes: la sensibilidad, que nos da intuiciones, y el entendimiento, que las ordena mediante conceptos. Lo que las cosas son en sí, independientemente de nosotros, según Kant no podemos conocerlo. Solo conocemos fenómenos.', 'The second sentence is in the Critique of Pure Reason: “Thoughts without content are empty, intuitions without concepts are blind.” There Kant asks about the conditions of the possibility of experience. His answer: knowledge only arises when two sources work together – sensibility, which gives us intuitions, and the understanding, which orders them through concepts. What things are in themselves, independently of us, we cannot know according to Kant. We know only appearances.'],
    ['Der dritte Satz ist viel kürzer und trotzdem schwieriger. Georg Wilhelm Friedrich Hegel schrieb 1807 in Jena in der Vorrede zur Phänomenologie des Geistes: „Das Wahre ist das Ganze.“ Gemeint ist: Keine einzelne Aussage ist für sich allein wahr. Wahrheit zeigt sich erst in der Entwicklung, in der jede Stufe ihre Widersprüche zeigt und in einer höheren Stufe aufgehoben wird – negiert, aber zugleich bewahrt. Das Ganze ist also kein fertiges Ding, sondern ein Prozess.', 'La tercera frase es mucho más corta y, aun así, más difícil. Georg Wilhelm Friedrich Hegel escribió en 1807, en Jena, en el prólogo de la Fenomenología del espíritu: «Lo verdadero es el todo». Se quiere decir: ninguna afirmación aislada es verdadera por sí sola. La verdad se muestra solo en el desarrollo, en el cual cada etapa muestra sus contradicciones y es superada en una etapa superior: negada, pero a la vez conservada. El todo, entonces, no es una cosa terminada, sino un proceso.', 'The third sentence is much shorter and yet more difficult. Georg Wilhelm Friedrich Hegel wrote in 1807 in Jena, in the preface to the Phenomenology of Spirit: “The true is the whole.” What is meant: no single statement is true on its own. Truth shows itself only in development, in which each stage reveals its contradictions and is sublated at a higher stage – negated, but at the same time preserved. The whole is therefore not a finished thing but a process.'],
    ['Tomás nickt langsam. „Und warum schreiben sie nicht einfach in Verben?“ – „Weil man mit Substantiven über das Denken selbst sprechen kann“, sagt Lena. „Das Sein, das Werden, das Ich – das sind keine Dinge, aber man kann sie zum Thema machen. Das ist das Schwierige und zugleich das Schöne daran.“', 'Tomás asiente lentamente. «¿Y por qué no escriben simplemente con verbos?» —«Porque con sustantivos se puede hablar del pensar mismo», dice Lena. «El ser, el devenir, el yo: no son cosas, pero se los puede convertir en tema. Eso es lo difícil y, a la vez, lo bello del asunto.»', 'Tomás nods slowly. “And why don’t they just write in verbs?” – “Because with nouns you can talk about thinking itself,” says Lena. “Being, becoming, the self – these aren’t things, but you can make them a topic. That is what’s difficult about it, and at the same time what’s beautiful.”']
  ],
  gloss: [
    ['verwandelt', { es: 'conviertes (verwandeln)', en: 'turn (verwandeln)' }],
    ['vieles', { es: 'mucho; muchas cosas', en: 'much; many things' }],
    ['Immanuel', { es: 'Immanuel (nombre)', en: 'Immanuel (name)' }],
    ['Kant', { es: 'Immanuel Kant (1724–1804)', en: 'Immanuel Kant (1724–1804)' }],
    ['Kants', { es: 'de Kant', en: 'Kant’s' }],
    ['Königsberg', { es: 'Königsberg (hoy Kaliningrado)', en: 'Königsberg (today Kaliningrad)' }],
    ['Menschen', { es: 'del ser humano', en: 'of man' }],
    ['Unmündig', { es: 'menor de edad (intelectualmente)', en: 'immature' }],
    ['eigenen', { es: 'propio', en: 'own' }],
    ['Leitung', { es: 'guía; dirección', en: 'guidance' }],
    ['lautet', { es: 'dice (lauten)', en: 'reads (lauten)' }],
    ['Aufforderung', { es: 'exhortación', en: 'call; summons' }],
    ['Habe', { es: 'ten (imperativo de haben, estilo antiguo)', en: 'have (imperative, old style)' }],
    ['Gedanken', { es: 'pensamientos', en: 'thoughts' }],
    ['Quellen', { es: 'fuentes', en: 'sources' }],
    ['zusammenarbeiten', { es: 'colaboran', en: 'work together' }],
    ['Sinnlichkeit', { es: 'sensibilidad', en: 'sensibility' }],
    ['ordnet', { es: 'ordena (ordnen)', en: 'orders (ordnen)' }],
    ['unabhängig', { es: 'independientemente', en: 'independently' }],
    ['Georg', { es: 'Georg (nombre)', en: 'Georg (name)' }],
    ['Wilhelm', { es: 'Wilhelm (nombre)', en: 'Wilhelm (name)' }],
    ['Friedrich', { es: 'Friedrich (nombre)', en: 'Friedrich (name)' }],
    ['Hegel', { es: 'G. W. F. Hegel (1770–1831)', en: 'G. W. F. Hegel (1770–1831)' }],
    ['Jena', { es: 'Jena (ciudad de Turingia)', en: 'Jena (city in Thuringia)' }],
    ['Vorrede', { es: 'prólogo', en: 'preface' }],
    ['Phänomenologie', { es: 'fenomenología', en: 'phenomenology' }],
    ['Gemeint', { es: 'se quiere decir (meinen)', en: 'what is meant (meinen)' }],
    ['Wahrheit', { es: 'la verdad', en: 'truth' }],
    ['höheren', { es: 'superior', en: 'higher' }],
    ['negiert', { es: 'negada (negieren)', en: 'negated (negieren)' }],
    ['zugleich', { es: 'a la vez', en: 'at the same time' }],
    ['bewahrt', { es: 'conservada (bewahren)', en: 'preserved (bewahren)' }],
    ['fertiges', { es: 'terminada', en: 'finished' }],
    ['nickt', { es: 'asiente (nicken)', en: 'nods (nicken)' }],
    ['Werden', { es: 'el devenir', en: 'becoming' }],
    ['daran', { es: 'de ello', en: 'about it' }]
  ],
  q: [
    { t: 'choice', q: 'Warum klingt deutsche Philosophie laut Lena so schwer?', o: ['wegen der vielen Substantive', 'wegen der langen Verben', 'wegen der Aussprache'], a: 0, x: { es: 'Consiste casi solo en sustantivos.', en: 'It consists almost entirely of nouns.' } },
    { t: 'choice', q: 'Wann ist Unmündigkeit nach Kant «selbstverschuldet»?', o: ['wenn der Verstand fehlt', 'wenn nicht der Verstand, sondern der Mut fehlt', 'wenn man jung ist'], a: 1, x: { es: 'Falta el valor, no el entendimiento.', en: 'Courage is lacking, not understanding.' } },
    { t: 'rf', q: 'Nach Kant können wir die Dinge an sich erkennen.', a: false, x: { es: 'Solo conocemos fenómenos.', en: 'We know only appearances.' } },
    { t: 'choice', q: 'Was bedeutet «aufgehoben» bei Hegel laut Text?', o: ['nur negiert', 'negiert und zugleich bewahrt', 'vergessen'], a: 1, x: { es: 'Negado y conservado a la vez.', en: 'Negated and preserved at once.' } },
    { t: 'rf', q: 'Für Hegel ist das Ganze ein fertiges Ding.', a: false, x: { es: 'Es un proceso.', en: 'It is a process.' } }
  ]
});
