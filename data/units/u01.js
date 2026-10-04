/* U01 · Hallo! Laute und Buchstaben */
DD.lexicon.push({ unit: 'u01', words: [
  ['phr', 'Hallo!', '¡hola!', 'hello!', { id: 'phrase-hallo' }],
  ['phr', 'Guten Morgen!', '¡buenos días! (mañana)', 'good morning!'],
  ['phr', 'Guten Tag!', '¡buenos días! / ¡buenas tardes!', 'good day! / hello!'],
  ['phr', 'Guten Abend!', '¡buenas tardes! / ¡buenas noches! (al llegar)', 'good evening!'],
  ['phr', 'Gute Nacht!', '¡buenas noches! (al despedirse)', 'good night!'],
  ['phr', 'Tschüss!', '¡chao!', 'bye!', { id: 'phrase-tschuess' }],
  ['phr', 'Auf Wiedersehen!', '¡adiós! (formal)', 'goodbye! (formal)'],
  ['phr', 'Bis später!', '¡hasta luego!', 'see you later!'],
  ['phr', 'Bis morgen!', '¡hasta mañana!', 'see you tomorrow!'],
  ['phr', 'Wie geht’s?', '¿cómo estás?', 'how are you?', { id: 'phrase-wie-gehts', note: ['Informal; forma completa: Wie geht es dir?', 'Informal; full form: Wie geht es dir?'] }],
  ['phr', 'Wie geht es Ihnen?', '¿cómo está usted?', 'how are you? (formal)'],
  ['phr', 'Und dir?', '¿y tú?', 'and you?'],
  ['phr', 'Freut mich!', '¡encantado/a!', 'nice to meet you!'],
  ['phr', 'Willkommen!', '¡bienvenido/a!', 'welcome!'],
  ['phr', 'Entschuldigung!', '¡perdón! / disculpe', 'sorry! / excuse me'],
  ['phr', 'Wie schreibt man das?', '¿cómo se escribe eso?', 'how do you spell that?'],
  ['part', 'ja', 'sí', 'yes', { id: 'particle-ja' }],
  ['part', 'nein', 'no', 'no'],
  ['part', 'danke', 'gracias', 'thank you'],
  ['part', 'bitte', 'por favor; de nada', 'please; you’re welcome', { id: 'particle-bitte' }],
  ['a', 'gut', 'besser', 'am besten', 'bueno; bien', 'good; well', { note: ['Adjetivo que también funciona como adverbio: Das ist gut. / Ich spreche gut Deutsch.', 'Adjective also used as an adverb: Das ist gut. / Ich spreche gut Deutsch.'] }],
  ['adv', 'auch', 'también', 'also; too', { id: 'particle-auch' }],
  ['adv', 'super', 'genial', 'great', { deck: 0 }],
  ['conj', 'und', 'y', 'and', { type: 'coord' }],
  ['pron', 'ich', 'yo', 'I', { forms: { mich: 'akk', mir: 'dat', meiner: 'gen' } }],
  ['pron', 'du', 'tú', 'you (informal sg.)', { forms: { dich: 'akk', dir: 'dat', deiner: 'gen' } }],
  ['pron', 'wir', 'nosotros/as', 'we', { forms: { uns: 'akk|dat', unser: 'gen' } }],
  ['v', 'sein', 'ist', 'war', 'ist gewesen', 'ser; estar', 'be', { pres: 'bin bist ist sind seid sind', k1: 'sei', imp: 'sei', k2: 'wäre', forms: { seien: 'k1', seiest: 'k1', seiet: 'k1' }, ex: ['Ich bin Tomás.', 'Soy Tomás.', 'I am Tomás.'] }],
  ['n', 'das Zimmer', 'Zimmer', 'la pieza; la habitación', 'room', { ex: ['Das Zimmer ist klein.', 'La pieza es pequeña.', 'The room is small.'] }],
  ['n', 'die Nummer', 'Nummern', 'el número (de pieza, de teléfono)', 'number (room, phone)'],
  ['n', 'der Nachbar', 'Nachbarn', 'el vecino', 'neighbour', { n: 1, gen: 'des Nachbarn' }],
  ['num', 'null', 'cero', 'zero'],
  ['num', 'eins', 'uno', 'one', { note: ['Al contar: eins; ante sustantivo: ein/eine.', 'When counting: eins; before a noun: ein/eine.'] }],
  ['num', 'zwei', 'dos', 'two'],
  ['num', 'drei', 'tres', 'three'],
  ['num', 'vier', 'cuatro', 'four'],
  ['num', 'fünf', 'cinco', 'five'],
  ['num', 'sechs', 'seis', 'six'],
  ['num', 'sieben', 'siete', 'seven'],
  ['num', 'acht', 'ocho', 'eight'],
  ['num', 'neun', 'nueve', 'nine'],
  ['num', 'zehn', 'diez', 'ten'],
  ['num', 'elf', 'once', 'eleven'],
  ['num', 'zwölf', 'doce', 'twelve'],
  ['num', 'dreizehn', 'trece', 'thirteen'],
  ['num', 'vierzehn', 'catorce', 'fourteen'],
  ['num', 'fünfzehn', 'quince', 'fifteen'],
  ['num', 'sechzehn', 'dieciséis', 'sixteen', { note: ['sechs pierde la -s: sechzehn.', 'sechs drops its -s: sechzehn.'] }],
  ['num', 'siebzehn', 'diecisiete', 'seventeen', { note: ['sieben pierde -en: siebzehn.', 'sieben drops -en: siebzehn.'] }],
  ['num', 'achtzehn', 'dieciocho', 'eighteen'],
  ['num', 'neunzehn', 'diecinueve', 'nineteen'],
  ['num', 'zwanzig', 'veinte', 'twenty'],
  ['name', 'Leipzig', 'Leipzig (ciudad de Sajonia)', 'Leipzig (city in Saxony)'],
  ['name', 'Tomás', 'Tomás (protagonista, de Chile)', 'Tomás (main character, from Chile)'],
  ['name', 'Rivas', 'Rivas (apellido de Tomás)', 'Rivas (Tomás’s surname)'],
  ['name', 'Lena', 'Lena (vecina de Tomás)', 'Lena (Tomás’s neighbour)'],
  ['name', 'Hoffmann', 'Hoffmann (apellido de Lena)', 'Hoffmann (Lena’s surname)']
] });

DD.unit('u01', {
  minutes: 40,
  goals: [
    { es: 'Pronunciar vocales largas y cortas, Umlaute (ä, ö, ü) y diptongos.', en: 'Pronounce long and short vowels, umlauts (ä, ö, ü) and diphthongs.' },
    { es: 'Leer sin dudar ch, sch, sp/st, z, w, v, s, ß y la -g final.', en: 'Read ch, sch, sp/st, z, w, v, s, ß and final -g without hesitation.' },
    { es: 'Saludar, despedirte, deletrear y contar de 0 a 20.', en: 'Greet, say goodbye, spell and count from 0 to 20.' }
  ],
  grammar: ['g-sounds', 'g-alphabet', 'g-numbers'],
  lesson: [
    { b: 'concept', de: 'Lautschrift', t: { es: 'El alemán se escribe casi como se pronuncia: una vez dominadas unas 20 correspondencias, puedes leer cualquier palabra en voz alta. Aprende cada regla con su ejemplo y escúchalo.', en: 'German is spelled almost as it sounds: once you master about 20 correspondences you can read any word aloud. Learn each rule with its example and listen to it.' } },
    { b: 'concept', de: 'Betonung', t: { es: 'Acento: normalmente en la primera sílaba de la raíz (ARbeit, WASser). Los prefijos be-, ge-, ver-, er-, ent- no se acentúan (beSUchen). Los préstamos suelen llevarlo al final (UniversiTÄT, InformaTION, stuDIEren).', en: 'Stress: normally on the first syllable of the stem (ARbeit, WASser). The prefixes be-, ge-, ver-, er-, ent- are unstressed (beSUchen). Loanwords usually stress the end (UniversiTÄT, InformaTION, stuDIEren).' } },
    { b: 'letters', h: { es: 'Das Alphabet · el alfabeto', en: 'Das Alphabet · the alphabet' }, r: [
      ['A', 'A', 'aː'], ['B', 'Be', 'beː'], ['C', 'Tse', 'tseː'], ['D', 'De', 'deː'], ['E', 'E', 'eː'], ['F', 'Ef', 'ɛf'], ['G', 'Ge', 'ɡeː'], ['H', 'Ha', 'haː'], ['I', 'I', 'iː'], ['J', 'Jot', 'jɔt'],
      ['K', 'Ka', 'kaː'], ['L', 'El', 'ɛl'], ['M', 'Em', 'ɛm'], ['N', 'En', 'ɛn'], ['O', 'O', 'oː'], ['P', 'Pe', 'peː'], ['Q', 'Ku', 'kuː'], ['R', 'Er', 'ɛʁ'], ['S', 'Es', 'ɛs'], ['T', 'Te', 'teː'],
      ['U', 'U', 'uː'], ['V', 'Fau', 'faʊ̯'], ['W', 'We', 'veː'], ['X', 'Ix', 'ɪks'], ['Y', 'Ypsilon', 'ˈʏpsilɔn'], ['Z', 'Zett', 'tsɛt'], ['Ä', 'Ä', 'ɛː'], ['Ö', 'Ö', 'øː'], ['Ü', 'Ü', 'yː'], ['ß', 'Eszett', 'ɛsˈtsɛt']
    ], n: { es: 'Para deletrear: «T – O – M – A – S». ß nunca empieza palabra; en mayúsculas se escribe SS o ẞ.', en: 'To spell: “T – O – M – A – S”. ß never begins a word; in capitals it is written SS or ẞ.' } },
    { b: 'sounds', h: { es: 'Vocales: larga o corta', en: 'Vowels: long or short' }, r: [
      ['aa · ah · a', 'aː', ['Staat', 'fahren', 'Tag'], { es: 'Larga: vocal doble, vocal + h, o vocal ante una sola consonante.', en: 'Long: double vowel, vowel + h, or vowel before a single consonant.' }],
      ['a + 2 consonantes', 'a', ['Stadt', 'kalt', 'Mann'], { es: 'Corta y tensa ante dos consonantes o consonante doble.', en: 'Short before two consonants or a double consonant.' }],
      ['ie', 'iː', ['Liebe', 'vier', 'Miete'], { es: 'ie = i larga (¡no «i-e»!).', en: 'ie = long i (not “i-e”!).' }],
      ['e · ee · eh', 'eː', ['zehn', 'Tee', 'gehen'], { es: 'e larga cerrada, más tensa que la española.', en: 'Long closed e, tenser than English “ay” without the glide.' }],
      ['-e final', 'ə', ['Name', 'bitte', 'Schule'], { es: 'Átona y relajada (schwa), pero siempre se pronuncia.', en: 'Unstressed and relaxed (schwa), but always pronounced.' }]
    ] },
    { b: 'minimal', h: { es: 'Pares mínimos · la duración cambia el significado', en: 'Minimal pairs · length changes meaning' }, c: [{ es: 'larga', en: 'long' }, { es: 'corta', en: 'short' }], r: [
      ['Miete', 'Mitte', { es: 'alquiler / centro', en: 'rent / middle' }], ['Staat', 'Stadt', { es: 'Estado / ciudad', en: 'state / city' }], ['Ofen', 'offen', { es: 'horno / abierto', en: 'oven / open' }], ['Beet', 'Bett', { es: 'cantero / cama', en: 'flowerbed / bed' }], ['Hüte', 'Hütte', { es: 'sombreros / cabaña', en: 'hats / hut' }]
    ] },
    { b: 'sounds', h: { es: 'Umlaute y diptongos', en: 'Umlauts and diphthongs' }, r: [
      ['ä', 'ɛ(ː)', ['Käse', 'Mädchen', 'Äpfel'], { es: 'Como la e abierta de «perro».', en: 'Like the e in “bed”.' }],
      ['ö', 'ø(ː)', ['schön', 'hören', 'zwölf'], { es: 'Di «e» con los labios redondeados como para «o».', en: 'Say “e” with lips rounded as for “o”.' }],
      ['ü', 'y(ː)', ['über', 'fünf', 'müde'], { es: 'Di «i» con los labios redondeados como para «u».', en: 'Say “i” with lips rounded as for “u”.' }],
      ['ei · ai', 'aɪ̯', ['mein', 'Zeit', 'drei'], { es: 'ei suena «ai». Contraste: ie = «i».', en: 'ei sounds “eye”. Contrast: ie = “ee”.' }],
      ['eu · äu', 'ɔʏ̯', ['heute', 'neun', 'Häuser'], { es: 'Suena «oi».', en: 'Sounds “oy”.' }],
      ['au', 'aʊ̯', ['Haus', 'auch', 'Frau'], { es: 'Como «au» en «auto».', en: 'Like “ow” in “how”.' }]
    ] },
    { b: 'minimal', h: { es: 'Con y sin Umlaut', en: 'With and without umlaut' }, c: [{ es: 'sin', en: 'without' }, { es: 'con', en: 'with' }], r: [
      ['schon', 'schön', { es: 'ya / bonito', en: 'already / beautiful' }], ['Mutter', 'Mütter', { es: 'madre / madres', en: 'mother / mothers' }], ['Bruder', 'Brüder', { es: 'hermano / hermanos', en: 'brother / brothers' }], ['zahlen', 'zählen', { es: 'pagar / contar', en: 'pay / count' }]
    ] },
    { b: 'sounds', h: { es: 'Consonantes que cambian', en: 'Consonants that differ' }, r: [
      ['ch (tras a, o, u, au)', 'x', ['Buch', 'acht', 'auch'], { es: 'Como la jota española.', en: 'Like Scottish “loch”.' }],
      ['ch (en los demás casos)', 'ç', ['ich', 'Milch', 'Mädchen'], { es: 'Suave: sopla con la lengua en posición de «i».', en: 'Soft: breathe out with the tongue in “ee” position, as in “huge”.' }],
      ['-ig final', 'ɪç', ['zwanzig', 'wichtig', 'König'], { es: 'La -g final de -ig suena como ch suave.', en: 'Final -ig sounds like soft ch.' }],
      ['sch', 'ʃ', ['Schule', 'schön', 'Tisch'], { es: 'Como «sh» inglesa.', en: 'Like English “sh”.' }],
      ['sp- · st- (inicio)', 'ʃp · ʃt', ['Sprache', 'Straße', 'Student'], { es: 'Al inicio de palabra o raíz: «shp», «sht».', en: 'At the start of a word or stem: “shp”, “sht”.' }],
      ['s + vocal', 'z', ['Sonne', 'sieben', 'Rose'], { es: 's sonora, como zumbido de abeja.', en: 'Voiced s, as in “zoo”.' }],
      ['ß · ss', 's', ['Straße', 'Wasser', 'heißen'], { es: 'Siempre s sorda. ß tras vocal larga o diptongo; ss tras vocal corta.', en: 'Always voiceless s. ß after long vowel or diphthong; ss after short vowel.' }],
      ['z · tz', 'ts', ['zehn', 'Zeit', 'Platz'], { es: 'Siempre «ts».', en: 'Always “ts”.' }],
      ['w', 'v', ['Wasser', 'wie', 'zwei'], { es: 'w = v labiodental (como inglés «very»).', en: 'w = English “v”.' }],
      ['v', 'f', ['Vater', 'viel', 'vier'], { es: 'v = f en palabras alemanas (en préstamos: Vase [v]).', en: 'v = “f” in native words (in loanwords: Vase [v]).' }],
      ['j', 'j', ['ja', 'Jahr', 'jetzt'], { es: 'Como la «y» de «yo» suave.', en: 'Like English “y”.' }],
      ['h', 'h · —', ['Haus', 'gehen', 'Sohn'], { es: 'Aspirada al inicio; muda tras vocal (alarga la vocal).', en: 'Breathy at the start; silent after a vowel (lengthens it).' }],
      ['-b · -d · -g final', 'p · t · k', ['ab', 'Kind', 'Tag'], { es: 'Endurecimiento final: al final de sílaba suenan sordas.', en: 'Final devoicing: at the end of a syllable they become voiceless.' }],
      ['r', 'ʁ · ɐ', ['rot', 'Bruder', 'hier'], { es: 'Al inicio, r uvular (gargarismo suave); al final, casi una «a».', en: 'Initially uvular r; finally almost an “uh”.' }]
    ] },
    { b: 'note', tone: 'l1', t: { es: 'Trampas para hispanohablantes: ei ≠ «ei» español (mein = «main»); z ≠ «s/z» española (zehn = «tsen»); v = f (vier = «fir»); la h inicial se aspira; la e final nunca se omite (Name = «na-me»).', en: 'Traps for Spanish speakers: ei ≠ Spanish “ei” (mein = “mine”); z = “ts”; v = f; initial h is breathed; final e is never dropped.' } },
    { b: 'list', h: { es: 'Zahlen 0–20 · números', en: 'Zahlen 0–20 · numbers' }, cols: 4, audio: true, r: [
      ['0', 'null'], ['1', 'eins'], ['2', 'zwei'], ['3', 'drei'], ['4', 'vier'], ['5', 'fünf'], ['6', 'sechs'], ['7', 'sieben'], ['8', 'acht'], ['9', 'neun'], ['10', 'zehn'],
      ['11', 'elf'], ['12', 'zwölf'], ['13', 'dreizehn'], ['14', 'vierzehn'], ['15', 'fünfzehn'], ['16', 'sechzehn'], ['17', 'siebzehn'], ['18', 'achtzehn'], ['19', 'neunzehn'], ['20', 'zwanzig']
    ], n: { es: '13–19 = unidad + zehn. Irregulares: elf, zwölf, sechzehn (sin -s), siebzehn (sin -en). zwei se dice a veces «zwo» para evitar confusión con drei.', en: '13–19 = unit + zehn. Irregular: elf, zwölf, sechzehn (no -s), siebzehn (no -en). zwei is sometimes said “zwo” to avoid confusion with drei.' } },
    { b: 'note', tone: 'tip', t: { es: 'Registro: du (tú) con amigos, familia, niños y entre estudiantes; Sie (usted, siempre con mayúscula) con desconocidos adultos y en contextos formales. Wie geht’s? es informal; Wie geht es Ihnen? es formal.', en: 'Register: du with friends, family, children and among students; Sie (always capitalised) with adult strangers and in formal settings. Wie geht’s? is informal; Wie geht es Ihnen? is formal.' } }
  ],
  chunks: [
    ['Guten Morgen! / Guten Tag! / Guten Abend!', '¡Buenos días! / ¡Buenas tardes! / ¡Buenas noches!', 'Good morning! / Good afternoon! / Good evening!'],
    ['Ich bin Tomás. – Freut mich!', 'Soy Tomás. – ¡Encantado!', 'I’m Tomás. – Nice to meet you!'],
    ['Wie geht’s? – Gut, danke. Und dir?', '¿Cómo estás? – Bien, gracias. ¿Y tú?', 'How are you? – Fine, thanks. And you?'],
    ['Wie geht es Ihnen? – Danke, gut.', '¿Cómo está usted? – Bien, gracias.', 'How are you? (formal) – Fine, thank you.'],
    ['Wie schreibt man das? – T – O – M – A – S.', '¿Cómo se escribe? – T – O – M – A – S.', 'How do you spell that? – T – O – M – A – S.'],
    ['Entschuldigung! – Kein Problem.', '¡Perdón! – No hay problema.', 'Sorry! – No problem.'],
    ['Danke! – Bitte!', '¡Gracias! – ¡De nada!', 'Thanks! – You’re welcome!'],
    ['Tschüss! / Auf Wiedersehen! / Bis später!', '¡Chao! / ¡Adiós! / ¡Hasta luego!', 'Bye! / Goodbye! / See you later!']
  ],
  errors: [
    ['mein = «mein»', 'mein = «main»', { es: 'ei siempre suena «ai».', en: 'ei always sounds like “eye”.' }],
    ['vier = «bier»', 'vier = «fir»', { es: 'v alemana = f.', en: 'German v = f.' }],
    ['zehn = «sen»', 'zehn = «tsen»', { es: 'z siempre suena «ts».', en: 'z always sounds “ts”.' }],
    ['Gute Nacht! (al llegar)', 'Guten Abend! (al llegar)', { es: 'Gute Nacht solo para despedirse antes de dormir.', en: 'Gute Nacht is only for saying goodbye at bedtime.' }]
  ],
  examples: [
    ['Guten Morgen, Lena!', '¡Buenos días, Lena!', 'Good morning, Lena!'],
    ['Wie geht’s? – Gut, danke.', '¿Cómo estás? – Bien, gracias.', 'How are you? – Fine, thanks.'],
    ['Ich bin Tomás Rivas.', 'Soy Tomás Rivas.', 'I am Tomás Rivas.'],
    ['Das Zimmer ist Nummer zwölf.', 'La pieza es la número doce.', 'The room is number twelve.'],
    ['Wir sind Nachbarn.', 'Somos vecinos.', 'We are neighbours.'],
    ['Auf Wiedersehen und danke!', '¡Adiós y gracias!', 'Goodbye and thank you!']
  ],
  reading: 'r-u01',
  exercises: [
    { t: 'choice', ph: 1, audio: 'Mitte', p: { es: 'Escucha. ¿Qué palabra oyes?', en: 'Listen. Which word do you hear?' }, o: ['Miete', 'Mitte'], a: 1, x: { es: 'Mitte: i corta ante tt. Miete: ie = i larga.', en: 'Mitte: short i before tt. Miete: ie = long i.' } },
    { t: 'choice', ph: 1, audio: 'Staat', p: { es: 'Escucha. ¿Qué palabra oyes?', en: 'Listen. Which word do you hear?' }, o: ['Staat', 'Stadt'], a: 0, x: { es: 'Staat: aa = a larga. Stadt: a corta ante dt.', en: 'Staat: aa = long a. Stadt: short a before dt.' } },
    { t: 'choice', ph: 1, p: { es: '¿Cómo suena «ei» en «mein»?', en: 'How does “ei” sound in “mein”?' }, o: [{ es: '«ai», como en «hay»', en: '“eye”' }, { es: '«ei», como en «rey»', en: '“ay”, as in “say”' }, { es: '«i» larga', en: 'long “ee”' }], a: 0, x: { es: 'ei/ai = [aɪ]. La i larga se escribe ie.', en: 'ei/ai = [aɪ]. Long “ee” is spelled ie.' } },
    { t: 'choice', ph: 1, p: { es: '¿En qué palabra «ch» suena como la jota española [x]?', en: 'In which word does “ch” sound like Scottish “loch” [x]?' }, o: ['ich', 'Buch', 'Milch'], a: 1, x: { es: 'Tras a, o, u, au: [x] (Buch). Tras i, e, l…: [ç] (ich, Milch).', en: 'After a, o, u, au: [x] (Buch). After i, e, l…: [ç] (ich, Milch).' } },
    { t: 'choice', ph: 1, p: { es: '¿Vocal larga o corta? «Bett»', en: 'Long or short vowel? “Bett”' }, o: [{ es: 'larga', en: 'long' }, { es: 'corta', en: 'short' }], a: 1, x: { es: 'Consonante doble (tt) → vocal corta.', en: 'Double consonant (tt) → short vowel.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona cada número con su palabra.', en: 'Match each number with its word.' }, pairs: [['3', 'drei'], ['7', 'sieben'], ['12', 'zwölf'], ['16', 'sechzehn'], ['20', 'zwanzig']], x: { es: 'Fíjate en sechzehn (sin -s) y siebzehn (sin -en).', en: 'Note sechzehn (no -s) and siebzehn (no -en).' } },
    { t: 'gap', ph: 2, p: { es: 'Escribe el número en letras.', en: 'Write the number in words.' }, q: '13 = ___', a: 'dreizehn', x: { es: 'drei + zehn.', en: 'drei + zehn.' } },
    { t: 'gap', ph: 2, p: { es: 'Escribe el número en letras.', en: 'Write the number in words.' }, q: '17 = ___', a: 'siebzehn', x: { es: 'sieben pierde -en: siebzehn.', en: 'sieben drops -en: siebzehn.' } },
    { t: 'gap', ph: 2, p: { es: 'Escribe el número en letras.', en: 'Write the number in words.' }, q: '16 = ___', a: 'sechzehn', x: { es: 'sechs pierde la -s: sechzehn.', en: 'sechs drops the -s: sechzehn.' } },
    { t: 'listen', ph: 2, a: 'heute', x: { es: 'eu suena «oi»: heute.', en: 'eu sounds “oy”: heute.' } },
    { t: 'listen', ph: 2, a: 'Straße', x: { es: 'st inicial = «sht»; ß tras vocal larga.', en: 'Initial st = “sht”; ß after a long vowel.' } },
    { t: 'listen', ph: 2, a: 'zehn', x: { es: 'z = «ts»; eh = e larga.', en: 'z = “ts”; eh = long e.' } },
    { t: 'choice', ph: 2, p: { es: 'Son las 8:00 y llegas a la universidad. Saludas:', en: 'It is 8:00 and you arrive at university. You say:' }, o: ['Guten Morgen!', 'Guten Abend!', 'Gute Nacht!'], a: 0, x: { es: 'Guten Morgen hasta media mañana; luego Guten Tag; desde la tarde-noche Guten Abend.', en: 'Guten Morgen until mid-morning; then Guten Tag; from evening Guten Abend.' } },
    { t: 'choice', ph: 2, p: { es: 'Hablas con una profesora que no conoces. Preguntas:', en: 'You speak to a lecturer you don’t know. You ask:' }, o: ['Wie geht’s?', 'Wie geht es Ihnen?', 'Und dir?'], a: 1, x: { es: 'Con desconocidos adultos y en contextos formales: Sie / Ihnen.', en: 'With adult strangers and in formal settings: Sie / Ihnen.' } },
    { t: 'order', ph: 3, p: { es: 'Ordena la pregunta formal.', en: 'Put the formal question in order.' }, w: ['es', 'Wie', 'Ihnen', 'geht'], a: 'Wie geht es Ihnen?', x: { es: 'Fórmula fija: Wie geht es + dativo (Ihnen/dir)?', en: 'Fixed formula: Wie geht es + dative (Ihnen/dir)?' } },
    { t: 'write', ph: 3, s: { es: '¡Gracias! – ¡De nada!', en: 'Thanks! – You’re welcome!' }, a: 'Danke! – Bitte!', alt: ['Danke! Bitte!', 'Danke! – Bitte schön!', 'Danke! – Gern geschehen!'], x: { es: 'bitte = por favor y también «de nada».', en: 'bitte = please and also “you’re welcome”.' } },
    { t: 'write', ph: 3, s: { es: 'Buenos días, soy Tomás.', en: 'Good morning, I am Tomás.' }, a: 'Guten Morgen, ich bin Tomás.', alt: ['Guten Tag, ich bin Tomás.', 'Guten Morgen! Ich bin Tomás.', 'Guten Tag! Ich bin Tomás.'], x: { es: 'Guten Morgen / Guten Tag + ich bin + nombre.', en: 'Guten Morgen / Guten Tag + ich bin + name.' } },
    { t: 'listen', ph: 3, a: 'Wir sind Nachbarn.', x: { es: 'wir sind = somos. En «Nachbarn», ch va tras a: suena [x], como la jota.', en: 'wir sind = we are. In “Nachbarn”, ch follows a: it sounds [x], as in “loch”.' } }
  ],
  summary: [
    { es: 'ei = «ai», ie = «i», eu/äu = «oi»; ä ö ü se pronuncian con los labios precisos.', en: 'ei = “eye”, ie = “ee”, eu/äu = “oy”; ä ö ü need precise lip shape.' },
    { es: 'Vocal + consonante doble = corta (Bett); vocal doble, vocal + h o ie = larga (Tee, gehen, vier).', en: 'Vowel + double consonant = short (Bett); double vowel, vowel + h or ie = long (Tee, gehen, vier).' },
    { es: 'z = ts, w = v, v = f, s + vocal = z, sp-/st- = shp/sht, -ig = ich; -b/-d/-g finales son sordas.', en: 'z = ts, w = v, v = f, s + vowel = z, sp-/st- = shp/sht, -ig = ich; final -b/-d/-g are voiceless.' },
    { es: 'du para lo informal, Sie para lo formal. Guten Morgen / Tag / Abend al llegar; Gute Nacht solo al despedirse.', en: 'du for informal, Sie for formal. Guten Morgen / Tag / Abend when arriving; Gute Nacht only when leaving.' },
    { es: '13–19 = unidad + zehn; ojo con elf, zwölf, sechzehn y siebzehn.', en: '13–19 = unit + zehn; watch out for elf, zwölf, sechzehn and siebzehn.' }
  ]
});

DD.readings.push({
  id: 'r-u01', unit: 'u01', level: 'A1', kind: 'unit', format: 'dialog',
  de: 'Willkommen in Leipzig', es: 'Bienvenido a Leipzig', en: 'Welcome to Leipzig',
  genre: { es: 'Diálogo · serie Leipzig 1', en: 'Dialogue · Leipzig series 1' },
  intro: { es: 'Tomás, un chileno que llega a estudiar a Leipzig, conoce a su vecina Lena en la residencia. Lee primero en voz alta, frase por frase, imitando el audio.', en: 'Tomás, a Chilean arriving to study in Leipzig, meets his neighbour Lena at the student residence. First read aloud sentence by sentence, imitating the audio.' },
  source: { type: 'original' },
  p: [
    ['Hallo! Bist du Tomás?', '¡Hola! ¿Eres Tomás?', 'Hello! Are you Tomás?', 'Lena'],
    ['Ja, hallo! Ich bin Tomás. Tomás Rivas.', '¡Sí, hola! Soy Tomás. Tomás Rivas.', 'Yes, hello! I’m Tomás. Tomás Rivas.', 'Tomás'],
    ['Ich bin Lena, Lena Hoffmann. Willkommen in Leipzig!', 'Soy Lena, Lena Hoffmann. ¡Bienvenido a Leipzig!', 'I’m Lena, Lena Hoffmann. Welcome to Leipzig!', 'Lena'],
    ['Danke! Freut mich, Lena.', '¡Gracias! Encantado, Lena.', 'Thank you! Nice to meet you, Lena.', 'Tomás'],
    ['Freut mich auch! Wie geht’s?', '¡Encantada también! ¿Cómo estás?', 'Nice to meet you too! How are you?', 'Lena'],
    ['Gut, danke. Und dir?', 'Bien, gracias. ¿Y tú?', 'Fine, thanks. And you?', 'Tomás'],
    ['Auch gut, danke. Entschuldigung, wie schreibt man „Rivas“?', 'También bien, gracias. Perdón, ¿cómo se escribe «Rivas»?', 'Fine too, thanks. Sorry, how do you spell “Rivas”?', 'Lena'],
    ['R – I – V – A – S.', 'R – I – V – A – S.', 'R – I – V – A – S.', 'Tomás'],
    ['Danke. Und das Zimmer? Welche Nummer?', 'Gracias. ¿Y la pieza? ¿Qué número?', 'Thanks. And the room? Which number?', 'Lena'],
    ['Zimmer zwölf. Nein, Entschuldigung: Zimmer zwanzig.', 'Pieza doce. No, perdón: pieza veinte.', 'Room twelve. No, sorry: room twenty.', 'Tomás'],
    ['Zwanzig? Super! Ich bin in Zimmer neunzehn.', '¿Veinte? ¡Genial! Yo estoy en la pieza diecinueve.', 'Twenty? Great! I’m in room nineteen.', 'Lena'],
    ['Neunzehn und zwanzig – wir sind Nachbarn!', 'Diecinueve y veinte: ¡somos vecinos!', 'Nineteen and twenty – we’re neighbours!', 'Tomás'],
    ['Ja! Bis später, Tomás. Tschüss!', '¡Sí! Hasta luego, Tomás. ¡Chao!', 'Yes! See you later, Tomás. Bye!', 'Lena'],
    ['Tschüss, Lena! Bis später!', '¡Chao, Lena! ¡Hasta luego!', 'Bye, Lena! See you later!', 'Tomás']
  ],
  gloss: [
    ['Welche', { es: '¿qué…? / ¿cuál…? (welcher, U14)', en: 'which…? (welcher, U14)' }],
    ['in', { es: 'en', en: 'in' }],
    ['das', { es: 'el / la / lo (artículo neutro, U03)', en: 'the (neuter article, U03)' }],
    ['schreibt', { es: 'escribe (schreiben, U02)', en: 'writes (schreiben, U02)' }],
    ['man', { es: 'uno / se (impersonal)', en: 'one / you (impersonal)' }],
    ['wie', { es: 'cómo', en: 'how' }]
  ],
  focus: { es: 'Escucha: ei en «Leipzig», z en «zwölf/zwanzig», ü en «Tschüss», ch en «Entschuldigung».', en: 'Listen for: ei in “Leipzig”, z in “zwölf/zwanzig”, ü in “Tschüss”, ch in “Entschuldigung”.' },
  q: [
    { t: 'rf', q: 'Lena ist in Zimmer zwanzig.', a: false, x: { es: 'Lena está en la 19; Tomás en la 20.', en: 'Lena is in 19; Tomás in 20.' } },
    { t: 'rf', q: 'Tomás und Lena sind Nachbarn.', a: true, x: { es: 'Neunzehn und zwanzig – wir sind Nachbarn!', en: 'Neunzehn und zwanzig – wir sind Nachbarn!' } },
    { t: 'choice', q: 'Wie geht es Tomás?', o: ['Gut.', 'Nicht gut.', 'Super schlecht.'], a: 0, x: { es: '«Gut, danke.»', en: '“Gut, danke.”' } },
    { t: 'choice', q: 'Lena fragt: „Wie schreibt man …?“ Was schreibt Tomás?', o: ['Leipzig', 'Rivas', 'Lena'], a: 1, x: { es: 'Deletrea su apellido: R – I – V – A – S.', en: 'He spells his surname: R – I – V – A – S.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u01', ext: true, words: [
  ['n', 'der Buchstabe', 'Buchstaben', 'la letra', 'letter (of the alphabet)', { n: 1, gen: 'des Buchstabens' }],
  ['n', 'die Aussprache', 'Aussprachen', 'la pronunciación', 'pronunciation'],
  ['v', 'zählen', 'zählt', 'zählte', 'hat gezählt', 'contar (números)', 'count'],
  ['n', 'der Dank', '—', 'el agradecimiento', 'thanks', { note: ['Vielen Dank! · Herzlichen Dank!', 'Vielen Dank! · Herzlichen Dank!'] }],
  ['a', 'herzlich', '—', '—', 'cordial; afectuoso', 'warm; cordial', { note: ['Herzlich willkommen!', 'Herzlich willkommen!'] }],
  ['a', 'prima', '—', '—', 'estupendo; bacán', 'great', { decl: 0 }],
  ['adv', 'so', 'así; tan', 'so; like this; such', { note: ['so groß wie (U15) · so … dass (U13).', 'so groß wie (U15) · so … dass (U13).'] }]
] });
