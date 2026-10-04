/* U02 · Ich heiße Tomás */
DD.lexicon.push({ unit: 'u02', words: [
  ['v', 'heißen', 'heißt', 'hieß', 'hat geheißen', 'llamarse', 'be called', { ex: ['Wie heißt du? – Ich heiße Lena.', '¿Cómo te llamas? – Me llamo Lena.', 'What’s your name? – My name is Lena.'] }],
  ['v', 'kommen', 'kommt', 'kam', 'ist gekommen', 'venir', 'come', { note: ['kommen aus + país/ciudad: procedencia.', 'kommen aus + country/city: origin.'], ex: ['Ich komme aus Chile.', 'Soy de Chile.', 'I am from Chile.'] }],
  ['v', 'wohnen', 'wohnt', 'wohnte', 'hat gewohnt', 'vivir (residir)', 'live (reside)', { ex: ['Lena wohnt in Leipzig.', 'Lena vive en Leipzig.', 'Lena lives in Leipzig.'] }],
  ['v', 'leben', 'lebt', 'lebte', 'hat gelebt', 'vivir (estar vivo; llevar una vida)', 'live (be alive; lead a life)', { homonym: 1, ex: ['Wir leben in Europa.', 'Vivimos en Europa.', 'We live in Europe.'] }],
  ['v', 'lernen', 'lernt', 'lernte', 'hat gelernt', 'aprender; estudiar (para un examen)', 'learn; study', { ex: ['Ich lerne Deutsch.', 'Aprendo alemán.', 'I am learning German.'] }],
  ['v', 'studieren', 'studiert', 'studierte', 'hat studiert', 'estudiar (en la universidad)', 'study (at university)', { ex: ['Sie studiert Psychologie.', 'Estudia psicología.', 'She studies psychology.'] }],
  ['v', 'arbeiten', 'arbeitet', 'arbeitete', 'hat gearbeitet', 'trabajar', 'work', { ex: ['Er arbeitet in Berlin.', 'Trabaja en Berlín.', 'He works in Berlin.'] }],
  ['v', 'machen', 'macht', 'machte', 'hat gemacht', 'hacer', 'do; make', { ex: ['Was machst du hier?', '¿Qué haces aquí?', 'What are you doing here?'] }],
  ['v', 'sprechen', 'spricht', 'sprach', 'hat gesprochen', 'hablar', 'speak', { note: ['Cambio vocálico: du sprichst, er spricht (U04).', 'Vowel change: du sprichst, er spricht (U04).'], ex: ['Sprichst du Spanisch?', '¿Hablas español?', 'Do you speak Spanish?'] }],
  ['v', 'schreiben', 'schreibt', 'schrieb', 'hat geschrieben', 'escribir', 'write'],
  ['v', 'sagen', 'sagt', 'sagte', 'hat gesagt', 'decir', 'say'],
  ['v', 'fragen', 'fragt', 'fragte', 'hat gefragt', 'preguntar', 'ask'],
  ['v', 'antworten', 'antwortet', 'antwortete', 'hat geantwortet', 'responder', 'answer'],
  ['v', 'buchstabieren', 'buchstabiert', 'buchstabierte', 'hat buchstabiert', 'deletrear', 'spell', { produce: 0 }],
  ['pron', 'er', 'él', 'he; it (m.)', { forms: { ihn: 'akk', ihm: 'dat', seiner: 'gen' } }],
  ['pron', 'sie', 'ella', 'she; it (f.)', { id: 'pron-sie-singular', homonym: 1, forms: { ihr: 'dat', ihrer: 'gen' } }],
  ['pron', 'es', 'ello (neutro)', 'it', { forms: { ihm: 'dat', seiner: 'gen' } }],
  ['pron', 'ihr', 'vosotros/as; ustedes (informal)', 'you (informal pl.)', { id: 'pron-ihr', forms: { euch: 'akk|dat', euer: 'gen' } }],
  ['pron', 'sie (Plural)', 'ellos/as', 'they', { id: 'pron-sie-plural', forms: { sie: 'nom|akk', ihnen: 'dat', ihrer: 'gen' } }],
  ['pron', 'Sie', 'usted; ustedes (formal)', 'you (formal)', { id: 'pron-sie-formal', homonym: 1, forms: { Ihnen: 'dat', Ihrer: 'gen' } }],
  ['pron', 'wer', 'quién', 'who', { forms: { wen: 'akk', wem: 'dat', wessen: 'gen' } }],
  ['pron', 'was', 'qué', 'what'],
  ['adv', 'wo', 'dónde', 'where'],
  ['adv', 'woher', 'de dónde', 'where from'],
  ['adv', 'wie', 'cómo', 'how', { note: ['También comparación: so groß wie (U15).', 'Also comparison: so groß wie (U15).'] }],
  ['adv', 'hier', 'aquí', 'here'],
  ['adv', 'jetzt', 'ahora', 'now'],
  ['adv', 'heute', 'hoy', 'today'],
  ['adv', 'sehr', 'muy; mucho', 'very; very much'],
  ['adv', 'ein bisschen', 'un poco', 'a little', { id: 'adv-ein-bisschen', forms: { bisschen: 'lemma' } }],
  ['adv', 'zusammen', 'juntos', 'together'],
  ['conj', 'aber', 'pero', 'but', { type: 'coord' }],
  ['prep', 'aus', 'de (procedencia); de (material)', 'from; out of', { case: 'D' }],
  ['prep', 'in', 'en', 'in', { case: 'AD', forms: { im: 'contr:in + dem', ins: 'contr:in + das' }, note: ['Ubicación con dativo (in Leipzig); dirección con acusativo (U11).', 'Location with dative (in Leipzig); direction with accusative (U11).'] }],
  ['a', 'alt', 'älter', 'am ältesten', 'viejo; antiguo', 'old', { note: ['Edad: Ich bin 28 Jahre alt.', 'Age: Ich bin 28 Jahre alt.'] }],
  ['a', 'interessant', null, null, 'interesante', 'interesting'],
  ['a', 'schwer', null, null, 'difícil; pesado', 'difficult; heavy'],
  ['a', 'einfach', null, null, 'fácil; simple', 'easy; simple'],
  ['n', 'der Name', 'Namen', 'el nombre', 'name', { n: 1, gen: 'des Namens', note: ['Declinación mixta: des Namens, dem/den Namen.', 'Mixed declension: des Namens, dem/den Namen.'] }],
  ['n', 'das Jahr', 'Jahre', 'el año', 'year'],
  ['n', 'das Land', 'Länder', 'el país; el campo', 'country; countryside'],
  ['n', 'die Stadt', 'Städte', 'la ciudad', 'city; town'],
  ['n', 'die Sprache', 'Sprachen', 'la lengua; el idioma', 'language'],
  ['n', 'der Student', 'Studenten', 'el estudiante', 'student (m.)', { n: 1 }],
  ['n', 'die Studentin', 'Studentinnen', 'la estudiante', 'student (f.)'],
  ['n', 'die Nachbarin', 'Nachbarinnen', 'la vecina', 'neighbour (f.)'],
  ['n', 'der Philosoph', 'Philosophen', 'el filósofo', 'philosopher (m.)', { n: 1 }],
  ['n', 'die Philosophin', 'Philosophinnen', 'la filósofa', 'philosopher (f.)'],
  ['n', 'die Universität', 'Universitäten', 'la universidad', 'university', { note: ['Coloquial: die Uni, -s.', 'Colloquial: die Uni, -s.'] }],
  ['n', 'der Herr', 'Herren', 'el señor', 'gentleman; Mr', { n: 1, gen: 'des Herrn', forms: { Herrn: 'n-decl' } }],
  ['n', 'die Frau', 'Frauen', 'la mujer; la señora', 'woman; Mrs/Ms'],
  ['n', 'die Philosophie', 'Philosophien', 'la filosofía', 'philosophy'],
  ['n', 'die Psychologie', '—', 'la psicología', 'psychology'],
  ['n', 'die Kognitionswissenschaft', 'Kognitionswissenschaften', 'la ciencia cognitiva', 'cognitive science'],
  ['n', 'das Deutsch', '—', 'el alemán (idioma)', 'German (language)', { id: 'noun-deutsch', note: ['Idioma sin artículo: Ich lerne Deutsch. Adjetivo: deutsch.', 'Language without article: Ich lerne Deutsch. Adjective: deutsch.'] }],
  ['n', 'das Spanisch', '—', 'el español (idioma)', 'Spanish (language)', { id: 'noun-spanisch' }],
  ['n', 'das Englisch', '—', 'el inglés (idioma)', 'English (language)', { id: 'noun-englisch' }],
  ['n', 'das Französisch', '—', 'el francés (idioma)', 'French (language)', { id: 'noun-franzoesisch' }],
  ['n', 'der Chilene', 'Chilenen', 'el chileno', 'Chilean (m.)', { n: 1 }],
  ['n', 'die Chilenin', 'Chileninnen', 'la chilena', 'Chilean (f.)'],
  ['n', 'der Deutsche', 'Deutschen', 'el alemán (persona)', 'German (man)', { adj: 1, note: ['Se declina como adjetivo: der Deutsche, ein Deutscher, die Deutschen.', 'Declined like an adjective: der Deutsche, ein Deutscher, die Deutschen.'] }],
  ['name', 'Deutschland', 'Alemania', 'Germany'],
  ['name', 'Chile', 'Chile', 'Chile'],
  ['name', 'Spanien', 'España', 'Spain'],
  ['name', 'Österreich', 'Austria', 'Austria'],
  ['name', 'die Schweiz', 'Suiza (con artículo: in der Schweiz)', 'Switzerland (with article: in der Schweiz)', { id: 'name-schweiz' }],
  ['name', 'Valparaíso', 'Valparaíso', 'Valparaíso'],
  ['name', 'Berlin', 'Berlín', 'Berlin'],
  ['name', 'Europa', 'Europa', 'Europe'],
  ['name', 'Berger', 'Berger (administradora de la residencia)', 'Berger (residence manager)'],
  ['num', 'dreißig', 'treinta', 'thirty', { note: ['Con ß, no -zig.', 'With ß, not -zig.'] }],
  ['num', 'vierzig', 'cuarenta', 'forty'],
  ['num', 'fünfzig', 'cincuenta', 'fifty'],
  ['num', 'sechzig', 'sesenta', 'sixty', { note: ['sechs → sech-.', 'sechs → sech-.'] }],
  ['num', 'siebzig', 'setenta', 'seventy', { note: ['sieben → sieb-.', 'sieben → sieb-.'] }],
  ['num', 'achtzig', 'ochenta', 'eighty'],
  ['num', 'neunzig', 'noventa', 'ninety'],
  ['num', 'hundert', 'cien', 'hundred'],
  ['phr', 'Wie bitte?', '¿cómo? (no entendí)', 'pardon?'],
  ['phr', 'Noch einmal, bitte.', 'otra vez, por favor', 'once more, please'],
  ['phr', 'Langsam, bitte.', 'despacio, por favor', 'slowly, please']
] });

DD.unit('u02', {
  minutes: 45,
  goals: [
    { es: 'Presentarte y presentar a otra persona: nombre, origen, residencia, edad, estudios, idiomas.', en: 'Introduce yourself and someone else: name, origin, residence, age, studies, languages.' },
    { es: 'Conjugar en presente los verbos regulares y sein.', en: 'Conjugate regular verbs and sein in the present.' },
    { es: 'Construir afirmaciones con el verbo en 2.ª posición y preguntas W.', en: 'Build statements with the verb in second position and W-questions.' }
  ],
  grammar: ['g-present', 'g-personal', 'g-word-order', 'g-questions', 'g-numbers'],
  lesson: [
    { b: 'concept', de: 'Personalpronomen', t: { es: 'El alemán exige el sujeto: no se omite como en español (vivo → ich wohne). Hay tres «sie»: sie (ella), sie (ellos) y Sie (usted/ustedes, siempre con mayúscula). El verbo los distingue.', en: 'German requires the subject; it is never dropped. There are three “sie”: sie (she), sie (they) and Sie (formal you, always capitalised). The verb tells them apart.' } },
    { b: 'concept', de: 'Konjugation', t: { es: 'Raíz + terminación: lern-en → lern-e. La terminación indica la persona. Sustituye -en del infinitivo por -e, -st, -t, -en, -t, -en.', en: 'Stem + ending: lern-en → lern-e. The ending marks the person. Replace infinitive -en with -e, -st, -t, -en, -t, -en.' } },
    { b: 'table', h: { es: 'Präsens · verbos regulares', en: 'Präsens · regular verbs' }, c: [{ es: 'Persona', en: 'Person' }, 'lernen', 'wohnen', 'kommen', { es: 'Terminación', en: 'Ending' }], r: [
      ['ich', 'lern[e]', 'wohn[e]', 'komm[e]', '-e'],
      ['du', 'lern[st]', 'wohn[st]', 'komm[st]', '-st'],
      ['er · sie · es', 'lern[t]', 'wohn[t]', 'komm[t]', '-t'],
      ['wir', 'lern[en]', 'wohn[en]', 'komm[en]', '-en'],
      ['ihr', 'lern[t]', 'wohn[t]', 'komm[t]', '-t'],
      ['sie · Sie', 'lern[en]', 'wohn[en]', 'komm[en]', '-en']
    ], n: { es: 'wir, sie y Sie = infinitivo. er/sie/es e ihr comparten -t.', en: 'wir, sie and Sie = infinitive. er/sie/es and ihr share -t.' } },
    { b: 'table', h: { es: 'Dos ajustes fonéticos', en: 'Two phonetic adjustments' }, c: [{ es: 'Raíz', en: 'Stem' }, { es: 'Regla', en: 'Rule' }, 'du', 'er / ihr'], r: [
      [{ es: 'en -t, -d (arbeit-, antwort-)', en: 'ending in -t, -d (arbeit-, antwort-)' }, { es: 'se inserta -e-', en: 'insert -e-' }, 'arbeit[est]', 'arbeit[et]'],
      [{ es: 'en -s, -ß, -z (heiß-, tanz-)', en: 'ending in -s, -ß, -z (heiß-, tanz-)' }, { es: 'du solo añade -t', en: 'du adds only -t' }, 'heiß[t]', 'heiß[t]']
    ] },
    { b: 'table', h: { es: 'sein · ser / estar (irregular)', en: 'sein · to be (irregular)' }, c: [{ es: 'Singular', en: 'Singular' }, '', { es: 'Plural', en: 'Plural' }, ''], r: [
      ['ich', '[bin]', 'wir', '[sind]'],
      ['du', '[bist]', 'ihr', '[seid]'],
      ['er · sie · es', '[ist]', 'sie · Sie', '[sind]']
    ], n: { es: 'sein cubre ser y estar: Ich bin Student. / Ich bin hier.', en: 'sein covers both “be” senses: Ich bin Student. / Ich bin hier.' } },
    { b: 'concept', de: 'Verbzweitstellung (V2)', t: { es: 'En la oración afirmativa el verbo conjugado ocupa siempre la 2.ª posición. Delante va un solo constituyente (puede tener varias palabras: «In Leipzig»). Si no es el sujeto, el sujeto pasa detrás del verbo.', en: 'In a statement the finite verb is always in 2nd position. Exactly one constituent precedes it (it may have several words: “In Leipzig”). If it is not the subject, the subject moves after the verb.' } },
    { b: 'slots', h: { es: 'Campos de la oración', en: 'Sentence fields' }, c: ['Vorfeld', { es: 'Verbo', en: 'Verb' }, 'Mittelfeld'], r: [
      ['Ich', 'komme', 'aus Chile.'],
      ['Jetzt', 'wohne', '{N ich} in Leipzig.'],
      ['In Leipzig', 'studiere', '{N ich} Kognitionswissenschaft.'],
      ['Deutsch', 'lerne', '{N ich} hier.'],
      ['Woher', 'kommst', '{N du}?']
    ], n: { es: 'La posición se cuenta por constituyentes, no por palabras. El sujeto (marcado) se mueve; el verbo no.', en: 'Positions count constituents, not words. The subject (marked) moves; the verb does not.' } },
    { b: 'pairs', h: { es: 'Mover un elemento al Vorfeld', en: 'Moving an element into the Vorfeld' }, r: [
      ['Ich wohne {V jetzt} in Leipzig.', '{V Jetzt} wohne ich in Leipzig.'],
      ['Ich lerne {V hier} Deutsch.', '{V Hier} lerne ich Deutsch.'],
      ['Du kommst {V aus Chile}.', '{V Woher} kommst du?']
    ] },
    { b: 'list', h: { es: 'W-Fragen · preguntas con W (verbo en 2.ª posición)', en: 'W-questions (verb in 2nd position)' }, cols: 2, r: [
      ['Wer bist du?', { es: '¿Quién eres?', en: 'Who are you?' }], ['Was machst du?', { es: '¿Qué haces?', en: 'What do you do?' }],
      ['Wo wohnst du?', { es: '¿Dónde vives?', en: 'Where do you live?' }], ['Woher kommst du?', { es: '¿De dónde eres?', en: 'Where are you from?' }],
      ['Wie heißt du?', { es: '¿Cómo te llamas?', en: 'What’s your name?' }], ['Wie alt bist du?', { es: '¿Cuántos años tienes?', en: 'How old are you?' }]
    ] },
    { b: 'list', h: { es: 'Zahlen 21–100', en: 'Numbers 21–100' }, cols: 4, audio: true, r: [
      ['21', 'einundzwanzig'], ['22', 'zweiundzwanzig'], ['28', 'achtundzwanzig'], ['30', 'dreißig'], ['40', 'vierzig'], ['50', 'fünfzig'], ['60', 'sechzig'], ['70', 'siebzig'], ['80', 'achtzig'], ['90', 'neunzig'], ['99', 'neunundneunzig'], ['100', 'hundert']
    ], n: { es: 'Unidad + und + decena, en una sola palabra: «uno-y-veinte». Se escribe junto. 30 lleva ß; 60 y 70 acortan sechs y sieben.', en: 'Unit + und + ten, as one word: “one-and-twenty”. 30 has ß; 60 and 70 shorten sechs and sieben.' } },
    { b: 'list', h: { es: 'Länder und Sprachen · países e idiomas', en: 'Countries and languages' }, cols: 2, r: [
      ['Chile → Spanisch', { es: 'Chile → español', en: 'Chile → Spanish' }], ['Deutschland → Deutsch', { es: 'Alemania → alemán', en: 'Germany → German' }],
      ['Österreich → Deutsch', { es: 'Austria → alemán', en: 'Austria → German' }], ['die Schweiz → Deutsch, Französisch …', { es: 'Suiza → alemán, francés…', en: 'Switzerland → German, French…' }],
      ['Spanien → Spanisch', { es: 'España → español', en: 'Spain → Spanish' }], ['England → Englisch', { es: 'Inglaterra → inglés', en: 'England → English' }]
    ], n: { es: 'Idiomas con mayúscula y sin artículo: Ich spreche Deutsch. Países casi siempre sin artículo; excepciones: die Schweiz, die USA, die Türkei.', en: 'Languages capitalised, no article: Ich spreche Deutsch. Countries mostly without article; exceptions: die Schweiz, die USA, die Türkei.' } },
    { b: 'note', tone: 'l1', t: { es: 'Edad con sein, no con haben: Ich bin 28 (Jahre alt). Procedencia con aus, no con von: Ich komme aus Chile. Estudios: Ich studiere Philosophie (no «Ich bin Student von…»).', en: 'Age uses sein: Ich bin 28 (Jahre alt). Origin uses aus: Ich komme aus Chile. Studies: Ich studiere Philosophie.' } }
  ],
  chunks: [
    ['Wie heißt du? / Wie heißen Sie?', '¿Cómo te llamas? / ¿Cómo se llama usted?', 'What’s your name? (informal / formal)'],
    ['Woher kommst du? – Aus Chile.', '¿De dónde eres? – De Chile.', 'Where are you from? – From Chile.'],
    ['Wo wohnst du? – In Leipzig.', '¿Dónde vives? – En Leipzig.', 'Where do you live? – In Leipzig.'],
    ['Wie alt bist du? – Ich bin 28.', '¿Cuántos años tienes? – Tengo 28.', 'How old are you? – I’m 28.'],
    ['Was machst du? – Ich studiere Philosophie.', '¿A qué te dedicas? – Estudio filosofía.', 'What do you do? – I study philosophy.'],
    ['Ich spreche Spanisch, Englisch und ein bisschen Deutsch.', 'Hablo español, inglés y un poco de alemán.', 'I speak Spanish, English and a little German.'],
    ['Wie bitte? Noch einmal, bitte. Langsam, bitte.', '¿Cómo? Otra vez, por favor. Despacio, por favor.', 'Pardon? Once more, please. Slowly, please.']
  ],
  errors: [
    ['Ich habe 28 Jahre.', 'Ich bin 28 Jahre alt.', { es: 'La edad se expresa con sein.', en: 'Age is expressed with sein.' }],
    ['Wohne in Leipzig.', 'Ich wohne in Leipzig.', { es: 'El sujeto es obligatorio.', en: 'The subject is obligatory.' }],
    ['Heute ich lerne Deutsch.', 'Heute lerne ich Deutsch.', { es: 'V2: tras Heute viene el verbo.', en: 'V2: the verb comes right after Heute.' }],
    ['Ich komme von Chile.', 'Ich komme aus Chile.', { es: 'Procedencia geográfica: aus.', en: 'Geographic origin: aus.' }],
    ['Du arbeitst viel.', 'Du arbeitest viel.', { es: 'Raíz en -t: se inserta -e-.', en: 'Stem in -t: insert -e-.' }]
  ],
  examples: [
    ['Ich heiße Tomás und komme aus Chile.', 'Me llamo Tomás y soy de Chile.', 'My name is Tomás and I’m from Chile.'],
    ['Jetzt wohne ich in Leipzig.', 'Ahora vivo en Leipzig.', 'Now I live in Leipzig.'],
    ['Lena studiert Psychologie und arbeitet auch.', 'Lena estudia psicología y además trabaja.', 'Lena studies psychology and also works.'],
    ['Woher kommen Sie, Frau Berger?', '¿De dónde es usted, señora Berger?', 'Where are you from, Mrs Berger?'],
    ['Wir sind Studenten. Ihr seid Nachbarn.', 'Somos estudiantes. Ustedes son vecinos.', 'We are students. You are neighbours.'],
    ['Deutsch ist schwer, aber sehr interessant.', 'El alemán es difícil, pero muy interesante.', 'German is hard but very interesting.']
  ],
  reading: 'r-u02',
  exercises: [
    { t: 'choice', ph: 1, p: { es: 'Elige el pronombre.', en: 'Choose the pronoun.' }, q: '___ komme aus Chile.', o: ['Ich', 'Du', 'Er'], a: 0, x: { es: 'La terminación -e corresponde a ich.', en: 'The ending -e belongs to ich.' } },
    { t: 'choice', ph: 1, q: 'Wir ___ aus Deutschland.', o: ['kommt', 'kommen', 'kommst'], a: 1, x: { es: 'wir → -en (= infinitivo).', en: 'wir → -en (= infinitive).' } },
    { t: 'choice', ph: 1, p: { es: '«Jetzt wohnt Lena in Leipzig.» ¿Cuál es el sujeto?', en: '“Jetzt wohnt Lena in Leipzig.” Which is the subject?' }, o: ['Jetzt', 'Lena', 'Leipzig'], a: 1, x: { es: 'Jetzt ocupa el Vorfeld; el sujeto Lena va tras el verbo.', en: 'Jetzt fills the Vorfeld; the subject Lena follows the verb.' } },
    { t: 'choice', ph: 1, q: '___ kommst du? – Aus Valparaíso.', o: ['Woher', 'Wo', 'Wer'], a: 0, x: { es: 'Procedencia → woher.', en: 'Origin → woher.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona el pronombre con la forma de sein.', en: 'Match each pronoun with the form of sein.' }, pairs: [['ich', 'bin'], ['du', 'bist'], ['er', 'ist'], ['wir', 'sind'], ['ihr', 'seid']], x: { es: 'sein es irregular: bin, bist, ist, sind, seid, sind.', en: 'sein is irregular: bin, bist, ist, sind, seid, sind.' } },
    { t: 'choice', ph: 1, p: { es: 'Hablas con la señora Berger, administradora de la residencia (60 años). Preguntas:', en: 'You speak to Mrs Berger, the residence manager (60). You ask:' }, o: ['Woher kommst du?', 'Woher kommen Sie?', 'Woher kommt ihr?'], a: 1, x: { es: 'Trato formal: Sie + verbo en -en.', en: 'Formal address: Sie + verb in -en.' } },
    { t: 'gap', ph: 2, q: 'Ich ___ Tomás. (heißen)', a: 'heiße', x: { es: 'ich → -e: heiße.', en: 'ich → -e: heiße.' } },
    { t: 'gap', ph: 2, q: 'Du ___ Deutsch. (lernen)', a: 'lernst', x: { es: 'du → -st.', en: 'du → -st.' } },
    { t: 'gap', ph: 2, q: 'Ihr ___ in Leipzig. (wohnen)', a: 'wohnt', x: { es: 'ihr → -t.', en: 'ihr → -t.' } },
    { t: 'gap', ph: 2, q: 'Lena ___ (arbeiten) und ___ (studieren).', a: ['arbeitet', 'studiert'], x: { es: 'arbeit- termina en -t: arbeitet. studier- + t.', en: 'arbeit- ends in -t: arbeitet. studier- + t.' } },
    { t: 'gap', ph: 2, q: 'Wir ___ Studenten. Ihr ___ Nachbarn. (sein)', a: ['sind', 'seid'], x: { es: 'wir sind, ihr seid (¡con d!).', en: 'wir sind, ihr seid (with d!).' } },
    { t: 'gap', ph: 2, q: 'Du ___ (heißen) Lena und ___ (antworten) schnell.', a: ['heißt', 'antwortest'], alt: [[], []], x: { es: 'heiß- + t (raíz en ß); antwort- + est (raíz en t).', en: 'heiß- + t (stem in ß); antwort- + est (stem in t).' } },
    { t: 'order', ph: 2, w: ['ich', 'in Leipzig', 'Jetzt', 'wohne'], a: 'Jetzt wohne ich in Leipzig.', x: { es: 'Jetzt en el Vorfeld → verbo → sujeto.', en: 'Jetzt in the Vorfeld → verb → subject.' } },
    { t: 'order', ph: 2, w: ['du', 'Was', 'hier', 'machst'], a: 'Was machst du hier?', x: { es: 'Palabra W + verbo + sujeto.', en: 'W-word + verb + subject.' } },
    { t: 'transform', ph: 3, p: { es: 'Empieza con «Heute».', en: 'Start with “Heute”.' }, q: 'Ich lerne heute Deutsch.', a: 'Heute lerne ich Deutsch.', x: { es: 'Heute ocupa el Vorfeld; el sujeto va tras el verbo.', en: 'Heute fills the Vorfeld; the subject follows the verb.' } },
    { t: 'write', ph: 3, s: { es: '¿De dónde eres?', en: 'Where are you from?' }, a: 'Woher kommst du?', x: { es: 'woher + kommen (aus).', en: 'woher + kommen (aus).' } },
    { t: 'write', ph: 3, s: { es: 'Me llamo Lena y vivo en Leipzig.', en: 'My name is Lena and I live in Leipzig.' }, a: 'Ich heiße Lena und wohne in Leipzig.', alt: ['Ich heiße Lena und ich wohne in Leipzig.', 'Ich heiße Lena und lebe in Leipzig.', 'Ich heiße Lena und ich lebe in Leipzig.'], x: { es: 'Tras und puede repetirse o omitirse el sujeto común.', en: 'After und the shared subject may be repeated or omitted.' } },
    { t: 'write', ph: 3, s: { es: 'Tengo 28 años.', en: 'I am 28 years old.' }, a: 'Ich bin achtundzwanzig Jahre alt.', alt: ['Ich bin 28 Jahre alt.', 'Ich bin achtundzwanzig.', 'Ich bin 28.'], x: { es: 'Edad: sein + (Jahre alt).', en: 'Age: sein + (Jahre alt).' } },
    { t: 'listen', ph: 3, a: 'Woher kommen Sie?', x: { es: 'Pregunta formal: verbo + Sie.', en: 'Formal question: verb + Sie.' } }
  ],
  summary: [
    { es: 'Presente: raíz + -e, -st, -t, -en, -t, -en. Raíz en -t/-d: du -est, er -et. Raíz en -s/-ß/-z: du -t.', en: 'Present: stem + -e, -st, -t, -en, -t, -en. Stem in -t/-d: du -est, er -et. Stem in -s/-ß/-z: du -t.' },
    { es: 'sein: bin, bist, ist, sind, seid, sind.', en: 'sein: bin, bist, ist, sind, seid, sind.' },
    { es: 'Afirmación y pregunta W: verbo conjugado en 2.ª posición; un solo constituyente delante.', en: 'Statements and W-questions: finite verb in 2nd position; one constituent before it.' },
    { es: 'El sujeto nunca se omite. sie = ella/ellos según el verbo; Sie = usted.', en: 'The subject is never dropped. sie = she/they depending on the verb; Sie = formal you.' },
    { es: 'Edad con sein; procedencia con aus; idiomas sin artículo y con mayúscula.', en: 'Age with sein; origin with aus; languages capitalised, no article.' }
  ]
});

DD.readings.push({
  id: 'r-u02', unit: 'u02', level: 'A1', kind: 'unit',
  de: 'Wer ist wer?', es: '¿Quién es quién?', en: 'Who is who?',
  genre: { es: 'Presentación y diálogo · serie Leipzig 2', en: 'Introduction and dialogue · Leipzig series 2' },
  intro: { es: 'Tomás se presenta y luego habla con la administradora de la residencia. Observa la diferencia entre du y Sie, y el verbo siempre en 2.ª posición.', en: 'Tomás introduces himself and then talks to the residence manager. Notice du vs Sie and the verb always in 2nd position.' },
  source: { type: 'original' },
  p: [
    ['Hallo! Ich heiße Tomás Rivas. Ich komme aus Chile, aus Valparaíso. Ich bin achtundzwanzig Jahre alt. Jetzt wohne ich in Leipzig. Hier studiere ich Kognitionswissenschaft. Ich spreche Spanisch und Englisch. Jetzt lerne ich Deutsch. Deutsch ist schwer, aber sehr interessant.', '¡Hola! Me llamo Tomás Rivas. Soy de Chile, de Valparaíso. Tengo veintiocho años. Ahora vivo en Leipzig. Aquí estudio ciencia cognitiva. Hablo español e inglés. Ahora aprendo alemán. El alemán es difícil, pero muy interesante.', 'Hi! My name is Tomás Rivas. I’m from Chile, from Valparaíso. I’m twenty-eight. Now I live in Leipzig. Here I study cognitive science. I speak Spanish and English. Now I’m learning German. German is hard but very interesting.'],
    ['Lena ist meine Nachbarin. Sie kommt aus Leipzig und ist sechsundzwanzig. Sie studiert Psychologie und arbeitet auch. Lena spricht Deutsch, Englisch und ein bisschen Spanisch. Wir lernen zusammen: Sie lernt Spanisch, ich lerne Deutsch.', 'Lena es mi vecina. Es de Leipzig y tiene veintiséis años. Estudia psicología y además trabaja. Lena habla alemán, inglés y un poco de español. Aprendemos juntos: ella aprende español, yo aprendo alemán.', 'Lena is my neighbour. She’s from Leipzig and is twenty-six. She studies psychology and also works. Lena speaks German, English and a little Spanish. We learn together: she learns Spanish, I learn German.'],
    ['Guten Tag! Sind Sie Herr Rivas?', '¡Buenos días! ¿Es usted el señor Rivas?', 'Good afternoon! Are you Mr Rivas?', 'Frau Berger'],
    ['Ja, guten Tag! Ich bin Tomás Rivas.', 'Sí, ¡buenos días! Soy Tomás Rivas.', 'Yes, good afternoon! I’m Tomás Rivas.', 'Tomás'],
    ['Ich heiße Berger. Willkommen! Woher kommen Sie, Herr Rivas?', 'Me llamo Berger. ¡Bienvenido! ¿De dónde es usted, señor Rivas?', 'My name is Berger. Welcome! Where are you from, Mr Rivas?', 'Frau Berger'],
    ['Aus Chile. Und Sie? Kommen Sie aus Leipzig?', 'De Chile. ¿Y usted? ¿Es de Leipzig?', 'From Chile. And you? Are you from Leipzig?', 'Tomás'],
    ['Nein, ich komme aus Österreich, aber ich lebe schon dreißig Jahre hier. Was studieren Sie?', 'No, soy de Austria, pero vivo aquí hace ya treinta años. ¿Qué estudia usted?', 'No, I’m from Austria, but I’ve lived here for thirty years. What do you study?', 'Frau Berger'],
    ['Kognitionswissenschaft. Ich bin Philosoph, aber jetzt lerne ich auch Psychologie.', 'Ciencia cognitiva. Soy filósofo, pero ahora también aprendo psicología.', 'Cognitive science. I’m a philosopher, but now I’m also learning psychology.', 'Tomás'],
    ['Sehr interessant! Wie bitte? Sprechen Sie langsam, bitte. Mein Deutsch ist nicht so gut.', '¡Muy interesante! ¿Cómo? Hable despacio, por favor. Mi alemán no es tan bueno.', 'Very interesting! Pardon? Please speak slowly. My German isn’t that good.', 'Tomás'],
    ['Ihr Deutsch ist schon gut, Herr Rivas!', '¡Su alemán ya es bueno, señor Rivas!', 'Your German is already good, Mr Rivas!', 'Frau Berger']
  ],
  gloss: [
    ['ein', { es: 'un (artículo, U03); ein bisschen = un poco', en: 'a (article, U03); ein bisschen = a little' }],
    ['meine', { es: 'mi (posesivo, U08)', en: 'my (possessive, U08)' }],
    ['Mein', { es: 'mi (posesivo, U08)', en: 'my (possessive, U08)' }],
    ['Ihr', { es: 'su (de usted; posesivo, U08)', en: 'your (formal; possessive, U08)' }],
    ['schon', { es: 'ya; (con tiempo) desde hace', en: 'already; (with time) for' }],
    ['nicht', { es: 'no (negación, U04)', en: 'not (negation, U04)' }],
    ['so', { es: 'tan; así', en: 'so; that' }]
  ],
  focus: { es: 'Busca todas las formas de sein y los casos en que el sujeto va detrás del verbo (Jetzt wohne ich…).', en: 'Find every form of sein and every case where the subject follows the verb (Jetzt wohne ich…).' },
  q: [
    { t: 'rf', q: 'Tomás ist sechsundzwanzig Jahre alt.', a: false, x: { es: 'Tomás tiene 28; Lena, 26.', en: 'Tomás is 28; Lena is 26.' } },
    { t: 'rf', q: 'Lena lernt Spanisch.', a: true, x: { es: '«Sie lernt Spanisch, ich lerne Deutsch.»', en: '“Sie lernt Spanisch, ich lerne Deutsch.”' } },
    { t: 'rf', q: 'Frau Berger kommt aus Leipzig.', a: false, x: { es: 'Es de Austria, pero vive en Leipzig hace 30 años.', en: 'She is from Austria but has lived in Leipzig for 30 years.' } },
    { t: 'choice', q: 'Was studiert Tomás?', o: ['Psychologie', 'Kognitionswissenschaft', 'Deutsch'], a: 1, x: { es: '«Hier studiere ich Kognitionswissenschaft.»', en: '“Hier studiere ich Kognitionswissenschaft.”' } },
    { t: 'rf', q: 'Tomás und Frau Berger sagen „du“.', a: false, x: { es: 'Usan Sie: es una conversación formal entre adultos que no se conocen.', en: 'They use Sie: it is a formal conversation between adults who do not know each other.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u02', ext: true, words: [
  ['adv', 'warum', 'por qué', 'why', { forms: { wieso: 'lemma', weshalb: 'lemma' }, note: ['Respuesta con weil (U13). Sinónimos: wieso, weshalb.', 'Answer with weil (U13). Synonyms: wieso, weshalb.'] }],
  ['adv', 'her', 'hacia aquí (hacia el hablante)', 'here (towards the speaker)', { note: ['Komm her! · Wo kommst du her?', 'Komm her! · Wo kommst du her?'] }],
  ['adv', 'hin', 'hacia allá (lejos del hablante)', 'there (away from the speaker)', { note: ['Wo gehst du hin? · hin und her = de un lado a otro.', 'Wo gehst du hin? · hin und her = back and forth.'] }],
  ['n', 'der Vorname', 'Vornamen', 'el nombre (de pila)', 'first name', { n: 1, gen: 'des Vornamens' }],
  ['n', 'der Nachname', 'Nachnamen', 'el apellido', 'surname', { n: 1, gen: 'des Nachnamens' }],
  ['n', 'der Ausländer', 'Ausländer', 'el extranjero', 'foreigner (m.)'],
  ['n', 'die Ausländerin', 'Ausländerinnen', 'la extranjera', 'foreigner (f.)'],
  ['n', 'die Grammatik', 'Grammatiken', 'la gramática', 'grammar'],
  ['n', 'der Satz', 'Sätze', 'la oración; la frase', 'sentence'],
  ['n', 'das Verb', 'Verben', 'el verbo', 'verb'],
  ['n', 'das Substantiv', 'Substantive', 'el sustantivo', 'noun', { forms: { Substantiven: 'dat.pl' } }],
  ['n', 'das Adjektiv', 'Adjektive', 'el adjetivo', 'adjective'],
  ['n', 'die Seite', 'Seiten', 'la página; el lado', 'page; side'],
  ['n', 'der Unterricht', '—', 'la clase; la enseñanza', 'lessons; teaching'],
  ['n', 'die Klasse', 'Klassen', 'el curso; la clase', 'class; form'],
  ['n', 'das Papier', 'Papiere', 'el papel', 'paper'],
  ['n', 'das Blatt', 'Blätter', 'la hoja', 'sheet; leaf'],
  ['n', 'der Zettel', 'Zettel', 'el papelito; la nota', 'slip of paper; note'],
  ['n', 'der Bleistift', 'Bleistifte', 'el lápiz grafito', 'pencil'],
  ['n', 'der Kugelschreiber', 'Kugelschreiber', 'el lápiz pasta', 'ballpoint pen', { forms: { Kuli: 'lemma', Kulis: 'pl' } }],
  ['v', 'aus|sprechen', 'spricht aus', 'sprach aus', 'hat ausgesprochen', 'pronunciar', 'pronounce'],
  ['v', 'übersetzen', 'übersetzt', 'übersetzte', 'hat übersetzt', 'traducir', 'translate'],
  ['v', 'korrigieren', 'korrigiert', 'korrigierte', 'hat korrigiert', 'corregir', 'correct'],
  ['v', 'beantworten', 'beantwortet', 'beantwortete', 'hat beantwortet', 'responder (algo)', 'answer (something)', { note: ['eine Frage beantworten = auf eine Frage antworten.', 'eine Frage beantworten = auf eine Frage antworten.'] }],
  ['v', 'bedeuten', 'bedeutet', 'bedeutete', 'hat bedeutet', 'significar', 'mean'],
  ['a', 'angenehm', null, null, 'agradable', 'pleasant', { note: ['Angenehm! = ¡Mucho gusto!', 'Angenehm! = Pleased to meet you!'] }]
] });
