/* U22 · Die Frau, die alles weiß */
DD.lexicon.push({ unit: 'u22', words: [
  ['pron', 'der (Relativpronomen)', 'que; el cual; quien', 'who; which; that', { id: 'pron-relativ', deck: 0, forms: { dessen: 'gen.m|gen.n', deren: 'gen.f|gen.pl', denen: 'dat.pl' }, note: ['Formas propias: dessen, deren, denen; el resto como el artículo.', 'Own forms: dessen, deren, denen; the rest like the article.'] }],
  ['pron', 'welcher (Relativpronomen)', 'el cual (escrito, formal)', 'which (formal)', { id: 'pron-welcher-rel', deck: 0 }],
  ['v', 'beschreiben', 'beschreibt', 'beschrieb', 'hat beschrieben', 'describir', 'describe'],
  ['v', 'bewundern', 'bewundert', 'bewunderte', 'hat bewundert', 'admirar', 'admire'],
  ['v', 'komponieren', 'komponiert', 'komponierte', 'hat komponiert', 'componer', 'compose'],
  ['v', 'erfinden', 'erfindet', 'erfand', 'hat erfunden', 'inventar', 'invent'],
  ['v', 'entdecken', 'entdeckt', 'entdeckte', 'hat entdeckt', 'descubrir', 'discover'],
  ['v', 'beeinflussen', 'beeinflusst', 'beeinflusste', 'hat beeinflusst', 'influir en', 'influence'],
  ['v', 'gelten', 'gilt', 'galt', 'hat gegolten', 'valer; considerarse (als)', 'be valid; be regarded (as)'],
  ['v', 'vertrauen', 'vertraut', 'vertraute', 'hat vertraut', 'confiar (+ dativo)', 'trust (+ dative)', { obj: 'D' }],
  ['v', 'begegnen', 'begegnet', 'begegnete', 'ist begegnet', 'encontrarse con (+ dativo)', 'meet; encounter (+ dative)', { obj: 'D' }],
  ['v', 'verbinden', 'verbindet', 'verband', 'hat verbunden', 'unir; conectar', 'connect; link'],
  ['n', 'die Persönlichkeit', 'Persönlichkeiten', 'la personalidad', 'personality'],
  ['n', 'der Charakter', 'Charaktere', 'el carácter', 'character'],
  ['n', 'die Eigenschaft', 'Eigenschaften', 'la cualidad; la propiedad', 'quality; property'],
  ['n', 'das Aussehen', '—', 'el aspecto', 'appearance'],
  ['n', 'der Komponist', 'Komponisten', 'el compositor', 'composer (m.)', { n: 1 }],
  ['n', 'die Komponistin', 'Komponistinnen', 'la compositora', 'composer (f.)'],
  ['n', 'der Dichter', 'Dichter', 'el poeta', 'poet (m.)'],
  ['n', 'die Dichterin', 'Dichterinnen', 'la poeta', 'poet (f.)'],
  ['n', 'der Wissenschaftler', 'Wissenschaftler', 'el científico', 'scientist (m.)'],
  ['n', 'die Wissenschaftlerin', 'Wissenschaftlerinnen', 'la científica', 'scientist (f.)'],
  ['n', 'der Mathematiker', 'Mathematiker', 'el matemático', 'mathematician'],
  ['n', 'die Pianistin', 'Pianistinnen', 'la pianista', 'pianist (f.)'],
  ['n', 'das Werk', 'Werke', 'la obra', 'work (of art etc.)'],
  ['n', 'das Labor', 'Labore', 'el laboratorio', 'laboratory'],
  ['n', 'das Institut', 'Institute', 'el instituto', 'institute'],
  ['n', 'das Orchester', 'Orchester', 'la orquesta', 'orchestra'],
  ['n', 'die Ehe', 'Ehen', 'el matrimonio', 'marriage'],
  ['n', 'der Ehemann', 'Ehemänner', 'el marido', 'husband'],
  ['n', 'die Ehefrau', 'Ehefrauen', 'la esposa', 'wife'],
  ['n', 'die Bedeutung', 'Bedeutungen', 'el significado; la importancia', 'meaning; significance'],
  ['n', 'das Vorbild', 'Vorbilder', 'el modelo; el ejemplo a seguir', 'role model'],
  ['n', 'die Rolle', 'Rollen', 'el papel; el rol', 'role'],
  ['a', 'eigen', '—', '—', 'propio', 'own'],
  ['a', 'begabt', null, null, 'talentoso', 'gifted'],
  ['a', 'fleißig', null, null, 'trabajador; aplicado', 'hard-working'],
  ['a', 'großzügig', null, null, 'generoso', 'generous'],
  ['a', 'geduldig', null, null, 'paciente', 'patient'],
  ['a', 'selbstbewusst', null, null, 'seguro de sí mismo', 'self-confident'],
  ['a', 'schüchtern', null, null, 'tímido', 'shy'],
  ['a', 'humorvoll', null, null, 'con sentido del humor', 'humorous'],
  ['a', 'ernst', null, null, 'serio', 'serious'],
  ['a', 'experimentell', '—', '—', 'experimental', 'experimental'],
  ['a', 'wesentlich', null, null, 'esencial; considerable', 'essential; considerable'],
  ['name', 'Gottfried Wilhelm Leibniz', 'Leibniz (1646–1716), filósofo y matemático nacido en Leipzig', 'Leibniz (1646–1716), philosopher and mathematician born in Leipzig'],
  ['name', 'Clara Schumann', 'Clara Schumann (1819–1896), pianista y compositora nacida en Leipzig', 'Clara Schumann (1819–1896), pianist and composer born in Leipzig'],
  ['name', 'Robert Schumann', 'Robert Schumann (1810–1856), compositor', 'Robert Schumann (1810–1856), composer'],
  ['name', 'Wilhelm Wundt', 'Wilhelm Wundt (1832–1920), fundador de la psicología experimental', 'Wilhelm Wundt (1832–1920), founder of experimental psychology'],
  ['name', 'Felix Mendelssohn Bartholdy', 'Mendelssohn (1809–1847), compositor y director del Gewandhaus', 'Mendelssohn (1809–1847), composer and Gewandhaus conductor'],
  ['name', 'Gewandhaus', 'Gewandhaus (sala y orquesta de Leipzig)', 'Gewandhaus (Leipzig concert hall and orchestra)']
] });

DD.unit('u22', {
  minutes: 60,
  goals: [
    { es: 'Formar oraciones de relativo en nominativo, acusativo, dativo y genitivo (dessen, deren, denen).', en: 'Form relative clauses in the nominative, accusative, dative and genitive (dessen, deren, denen).' },
    { es: 'Usar relativas con preposición (mit dem, in der) y los relativos wo, was y wer.', en: 'Use relative clauses with prepositions (mit dem, in der) and the relatives wo, was and wer.' },
    { es: 'Describir personas, obras y lugares con precisión.', en: 'Describe people, works and places precisely.' }
  ],
  grammar: ['g-relative'],
  lesson: [
    { b: 'concept', de: 'Relativsatz', t: { es: 'Una relativa añade información a un sustantivo. Se separa con comas, empieza con el pronombre relativo y termina con el verbo conjugado. Va justo detrás del sustantivo (o lo más cerca posible).', en: 'A relative clause adds information to a noun. It is set off by commas, begins with the relative pronoun and ends with the finite verb. It comes right after the noun (or as close as possible).' } },
    { b: 'concept', de: 'zwei Fragen', t: { es: 'El género y el número del relativo vienen del sustantivo de referencia; el caso, de su función dentro de la relativa: der Mann, {N der} hier wohnt / der Mann, {A den} ich kenne / der Mann, {D dem} ich helfe.', en: 'Gender and number come from the antecedent; case comes from its function inside the relative clause: der Mann, der hier wohnt / der Mann, den ich kenne / der Mann, dem ich helfe.' } },
    { b: 'table', h: { es: 'Pronombres relativos', en: 'Relative pronouns' }, c: ['', { es: 'masculino', en: 'masculine' }, { es: 'femenino', en: 'feminine' }, { es: 'neutro', en: 'neuter' }, 'Plural'], r: [
      ['Nominativ', 'der', 'die', 'das', 'die'],
      ['Akkusativ', '{A den}', 'die', 'das', 'die'],
      ['Dativ', '{D dem}', '{D der}', '{D dem}', '{D [denen]}'],
      ['Genitiv', '{G [dessen]}', '{G [deren]}', '{G [dessen]}', '{G [deren]}']
    ], n: { es: 'Como el artículo, salvo las formas resaltadas: denen (dativo plural) y el genitivo dessen / deren. El sustantivo que sigue a dessen/deren no lleva artículo: der Komponist, dessen Werke…', en: 'Like the article except the highlighted forms: denen (dative plural) and the genitive dessen / deren. The noun after dessen/deren has no article: der Komponist, dessen Werke…' } },
    { b: 'slots', h: { es: 'El caso depende de la función en la relativa', en: 'Case depends on the function in the clause' }, c: [{ es: 'Sustantivo', en: 'Noun' }, { es: 'Relativo', en: 'Relative' }, 'Mittelfeld', { es: 'Verbo', en: 'Verb' }], v: [3], r: [
      ['Die Frau,', '{N die}', 'alles', 'weiß, …'],
      ['Der Film,', '{A den}', 'wir gestern gesehen', 'haben, …'],
      ['Die Freunde,', '{D denen}', 'ich oft', 'schreibe, …'],
      ['Der Komponist,', '{G dessen}', 'Musik ich so', 'liebe, …'],
      ['Die Stadt,', 'in {D der}', 'ich', 'wohne, …']
    ] },
    { b: 'pairs', h: { es: 'Dos frases → una con relativo', en: 'Two sentences → one with a relative clause' }, r: [
      ['Das ist Lena. Lena studiert Psychologie.', 'Das ist Lena, [die] Psychologie studiert.'],
      ['Das ist der Kurs. Ich besuche den Kurs.', 'Das ist der Kurs, [den] ich besuche.'],
      ['Das ist Mehmet. Ich wohne mit ihm.', 'Das ist Mehmet, [mit dem] ich wohne.'],
      ['Wundt gründete ein Labor. Seine Ideen waren neu.', 'Wundt, [dessen] Ideen neu waren, gründete ein Labor.']
    ] },
    { b: 'table', h: { es: 'wo · was · wer', en: 'wo · was · wer' }, c: [{ es: 'Relativo', en: 'Relative' }, { es: 'Uso', en: 'Use' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['wo', { es: 'lugares (alternativa a in dem / in der)', en: 'places (alternative to in dem / in der)' }, 'die Stadt, [wo] ich studiere'],
      ['was', { es: 'tras alles, etwas, nichts, das, vieles, superlativos neutros o una oración entera', en: 'after alles, etwas, nichts, das, vieles, neuter superlatives or a whole clause' }, 'Das ist alles, [was] ich weiß. · Er kam pünktlich, [was] mich überraschte.'],
      ['wer … (der)', { es: 'quien (sin sustantivo de referencia)', en: 'whoever (no antecedent)' }, '[Wer] viel liest, (der) lernt viel.'],
      ['wo(r) + Präp.', { es: 'con was: woran, worüber…', en: 'with was: woran, worüber…' }, 'alles, [worüber] wir gesprochen haben']
    ] },
    { b: 'note', tone: 'tip', t: { es: 'Con preposición, esta va delante del relativo y rige su caso: der Freund, auf [den] ich warte (warten auf + Akk); die Leute, mit [denen] ich arbeite (mit + Dat).', en: 'With a preposition, it comes before the relative and governs its case: der Freund, auf den ich warte; die Leute, mit denen ich arbeite.' } },
    { b: 'note', tone: 'l1', t: { es: 'El «que» español sirve para todo; el alemán concuerda en género, número y caso. «La ciudad en la que vivo» = die Stadt, in der ich wohne. «Cuya obra» = deren Werk (femenino) / dessen Werk (masculino). Nunca se omite el relativo (en inglés «the man I know» sí).', en: 'The relative pronoun can never be omitted (unlike English “the man I know”): der Mann, den ich kenne. It agrees in gender and number, and takes its case from the clause.' } }
  ],
  chunks: [
    ['Das ist die Professorin, von der ich dir erzählt habe.', 'Es la profesora de la que te hablé.', 'That’s the professor I told you about.'],
    ['Kennst du jemanden, der Spanisch spricht?', '¿Conoces a alguien que hable español?', 'Do you know anyone who speaks Spanish?'],
    ['Das ist alles, was ich weiß.', 'Es todo lo que sé.', 'That’s all I know.'],
    ['Die Stadt, in der ich aufgewachsen bin, liegt am Meer.', 'La ciudad en la que crecí está junto al mar.', 'The city I grew up in is by the sea.'],
    ['Wer zu spät kommt, muss draußen warten.', 'Quien llega tarde tiene que esperar afuera.', 'Whoever comes late has to wait outside.']
  ],
  errors: [
    ['Der Mann, der ich kenne…', 'Der Mann, den ich kenne…', { es: 'Objeto en la relativa → acusativo.', en: 'Object in the clause → accusative.' }],
    ['Die Leute, mit die ich arbeite…', 'Die Leute, mit denen ich arbeite…', { es: 'mit + dativo plural: denen.', en: 'mit + dative plural: denen.' }],
    ['Das ist alles, das ich weiß.', 'Das ist alles, was ich weiß.', { es: 'Tras alles: was.', en: 'After alles: was.' }],
    ['Der Komponist, dessen die Musik…', 'Der Komponist, dessen Musik…', { es: 'Tras dessen, sin artículo.', en: 'No article after dessen.' }],
    ['Die Frau, die ist Ärztin, …', 'Die Frau, die Ärztin ist, …', { es: 'Verbo al final de la relativa.', en: 'Verb at the end of the clause.' }]
  ],
  examples: [
    ['Leibniz, der 1646 in Leipzig geboren wurde, war Philosoph und Mathematiker.', 'Leibniz, que nació en Leipzig en 1646, fue filósofo y matemático.', 'Leibniz, who was born in Leipzig in 1646, was a philosopher and mathematician.'],
    ['Bach ist der Komponist, dessen Musik ich am meisten bewundere.', 'Bach es el compositor cuya música más admiro.', 'Bach is the composer whose music I admire most.'],
    ['Clara Schumann war eine Pianistin, deren Konzerte in ganz Europa berühmt waren.', 'Clara Schumann fue una pianista cuyos conciertos eran famosos en toda Europa.', 'Clara Schumann was a pianist whose concerts were famous throughout Europe.'],
    ['Das ist das Labor, in dem Wundt seine Experimente machte.', 'Es el laboratorio en el que Wundt hacía sus experimentos.', 'That is the lab where Wundt carried out his experiments.'],
    ['Die Studenten, denen ich helfe, kommen aus vielen Ländern.', 'Los estudiantes a los que ayudo vienen de muchos países.', 'The students I help come from many countries.'],
    ['Er hat die Prüfung bestanden, was uns alle gefreut hat.', 'Aprobó el examen, lo que nos alegró a todos.', 'He passed the exam, which pleased all of us.']
  ],
  reading: 'r-u22',
  exercises: [
    { t: 'choice', ph: 1, q: 'Das ist der Mann, ___ neben uns wohnt.', o: ['der', 'den', 'dem'], a: 0, x: { es: 'Sujeto de la relativa: nominativo der.', en: 'Subject of the clause: nominative der.' } },
    { t: 'choice', ph: 1, q: 'Das ist der Film, ___ wir gesehen haben.', o: ['der', 'den', 'dem'], a: 1, x: { es: 'Objeto directo: acusativo den.', en: 'Direct object: accusative den.' } },
    { t: 'choice', ph: 1, q: 'Die Kinder, ___ ich helfe, sind sehr nett.', o: ['die', 'denen', 'deren'], a: 1, x: { es: 'helfen + dativo plural: denen.', en: 'helfen + dative plural: denen.' } },
    { t: 'choice', ph: 1, q: 'Die Pianistin, ___ Konzerte berühmt waren, …', o: ['die', 'deren', 'dessen'], a: 1, x: { es: 'Genitivo femenino: deren.', en: 'Feminine genitive: deren.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona el antecedente con su relativo (dativo).', en: 'Match antecedent and relative (dative).' }, pairs: [['der Freund, mit …', 'dem'], ['die Freundin, mit …', 'der'], ['das Kind, mit …', 'dem'], ['die Freunde, mit …', 'denen']], x: { es: 'mit + dativo.', en: 'mit + dative.' } },
    { t: 'choice', ph: 1, q: 'Das ist alles, ___ ich weiß.', o: ['das', 'was', 'welches'], a: 1, x: { es: 'Tras alles: was.', en: 'After alles: was.' } },
    { t: 'gap', ph: 2, q: 'Die Stadt, in ___ ich wohne, ist schön.', a: 'der', alt: [], x: { es: 'in + dativo femenino (Wo?): der.', en: 'in + feminine dative (Wo?): der.' } },
    { t: 'gap', ph: 2, q: 'Der Freund, auf ___ ich warte, kommt immer zu spät.', a: 'den', x: { es: 'warten auf + Akk: den.', en: 'warten auf + acc.: den.' } },
    { t: 'gap', ph: 2, q: 'Das Buch, ___ ich lese, ist von Kafka.', a: 'das', x: { es: 'Neutro acusativo: das.', en: 'Neuter accusative: das.' } },
    { t: 'gap', ph: 2, q: 'Der Komponist, ___ Werke wir hören, hat in Leipzig gelebt.', a: 'dessen', x: { es: 'Genitivo masculino: dessen.', en: 'Masculine genitive: dessen.' } },
    { t: 'gap', ph: 2, q: 'Die Kollegen, mit ___ ich arbeite, sind sehr freundlich.', a: 'denen', x: { es: 'mit + dativo plural: denen.', en: 'mit + dative plural: denen.' } },
    { t: 'gap', ph: 2, q: 'Wer viel liest, ___ lernt viel.', a: 'der', x: { es: 'wer …, der …', en: 'wer …, der …' } },
    { t: 'gap', ph: 2, q: 'Das ist das Schönste, ___ ich je gesehen habe.', a: 'was', x: { es: 'Tras superlativo neutro: was.', en: 'After a neuter superlative: was.' } },
    { t: 'order', ph: 2, w: ['die', 'Psychologie', 'studiert', 'Das ist Lena,'], a: 'Das ist Lena, die Psychologie studiert.', x: { es: 'Relativo + … + verbo al final.', en: 'Relative + … + verb last.' } },
    { t: 'transform', ph: 3, p: { es: 'Une con un pronombre relativo.', en: 'Join with a relative pronoun.' }, q: 'Das ist Mehmet. Ich wohne mit ihm zusammen.', a: 'Das ist Mehmet, mit dem ich zusammen wohne.', alt: ['Das ist Mehmet, mit dem ich zusammenwohne.'], x: { es: 'mit ihm → mit dem; verbo al final.', en: 'mit ihm → mit dem; verb last.' } },
    { t: 'transform', ph: 3, p: { es: 'Une con un relativo en genitivo.', en: 'Join with a genitive relative.' }, q: 'Ich kenne einen Studenten. Seine Eltern wohnen in Chile.', a: 'Ich kenne einen Studenten, dessen Eltern in Chile wohnen.', x: { es: 'sein- → dessen (masculino).', en: 'sein- → dessen (masculine).' } },
    { t: 'write', ph: 3, s: { es: 'La mujer que conocí ayer es médica.', en: 'The woman I met yesterday is a doctor.' }, a: 'Die Frau, die ich gestern kennengelernt habe, ist Ärztin.', alt: ['Die Frau, die ich gestern getroffen habe, ist Ärztin.'], x: { es: 'Objeto → die (f. acusativo); verbo al final.', en: 'Object → die (fem. acc.); verb last.' } },
    { t: 'listen', ph: 3, a: 'Das ist die Stadt, in der ich geboren bin.', x: { es: 'Preposición + relativo en dativo.', en: 'Preposition + dative relative.' } }
  ],
  summary: [
    { es: 'Relativo: género/número del antecedente, caso según su función en la relativa; verbo al final; comas.', en: 'Relative: gender/number from the antecedent, case from its function; verb last; commas.' },
    { es: 'Formas especiales: denen (dat. pl.), dessen (gen. m/n), deren (gen. f/pl). Tras dessen/deren, sin artículo.', en: 'Special forms: denen (dat. pl.), dessen (gen. m/n), deren (gen. f/pl). No article after dessen/deren.' },
    { es: 'Preposición + relativo: mit dem, in der, auf den…', en: 'Preposition + relative: mit dem, in der, auf den…' },
    { es: 'was tras alles/etwas/nichts/das/superlativos o una oración; wo para lugares; wer …, der …', en: 'was after alles/etwas/nichts/das/superlatives or a clause; wo for places; wer …, der …' },
    { es: 'El relativo nunca se omite.', en: 'The relative pronoun is never omitted.' }
  ]
});

DD.readings.push({
  id: 'r-u22', unit: 'u22', level: 'B1', kind: 'unit',
  de: 'Menschen, die Leipzig berühmt gemacht haben', es: 'Personas que hicieron famosa a Leipzig', en: 'People who made Leipzig famous',
  genre: { es: 'Retratos · serie Leipzig 22', en: 'Portraits · Leipzig series 22' },
  intro: { es: 'Para un trabajo del curso de alemán, Tomás escribe pequeños retratos de personas ligadas a Leipzig. Los datos biográficos son reales.', en: 'For his German course, Tomás writes short portraits of people connected with Leipzig. The biographical facts are real.' },
  focus: { es: 'der / den / dem / denen / dessen / deren · in der, an dem · was, wo, wer.', en: 'der / den / dem / denen / dessen / deren · in der, an dem · was, wo, wer.' },
  source: { type: 'original', note: { es: 'Leibniz nació en Leipzig (1646); Bach fue Thomaskantor de 1723 a 1750; Goethe estudió allí de 1765 a 1768; Clara Wieck (Schumann) nació en Leipzig (1819); Wundt fundó su laboratorio de psicología en 1879.', en: 'Leibniz was born in Leipzig (1646); Bach was Thomaskantor from 1723 to 1750; Goethe studied there from 1765 to 1768; Clara Wieck (Schumann) was born in Leipzig (1819); Wundt founded his psychology lab in 1879.' } },
  p: [
    ['Leipzig ist eine Stadt, die viele berühmte Menschen angezogen hat. Hier sind einige von ihnen – Menschen, deren Ideen und Werke noch heute wichtig sind.', 'Leipzig es una ciudad que ha atraído a muchas personas famosas. Aquí hay algunas de ellas: personas cuyas ideas y obras siguen siendo importantes hoy.', 'Leipzig is a city that has attracted many famous people. Here are some of them – people whose ideas and works are still important today.'],
    ['Gottfried Wilhelm Leibniz, der 1646 in Leipzig geboren wurde, war Philosoph, Mathematiker und Diplomat. Er war ein Mensch, den fast alles interessierte. Unabhängig von Newton entwickelte er die Differentialrechnung, und er beschrieb das binäre Zahlensystem, mit dem heute jeder Computer arbeitet.', 'Gottfried Wilhelm Leibniz, que nació en Leipzig en 1646, fue filósofo, matemático y diplomático. Era una persona a la que casi todo le interesaba. Independientemente de Newton desarrolló el cálculo diferencial y describió el sistema numérico binario con el que hoy trabaja cualquier computador.', 'Gottfried Wilhelm Leibniz, who was born in Leipzig in 1646, was a philosopher, mathematician and diplomat. He was a person whom almost everything interested. Independently of Newton he developed differential calculus, and he described the binary number system with which every computer works today.'],
    ['Johann Sebastian Bach ist der Komponist, an den man in Leipzig sofort denkt. Von 1723 bis zu seinem Tod 1750 leitete er den Chor der Thomaskirche, in der er auch begraben ist. Bach, dessen Musik heute in der ganzen Welt gespielt wird, war zu seiner Zeit vor allem als Organist bekannt.', 'Johann Sebastian Bach es el compositor en el que uno piensa enseguida en Leipzig. Desde 1723 hasta su muerte en 1750 dirigió el coro de la iglesia de Santo Tomás, en la que también está enterrado. Bach, cuya música hoy se toca en todo el mundo, era conocido en su época sobre todo como organista.', 'Johann Sebastian Bach is the composer you immediately think of in Leipzig. From 1723 until his death in 1750 he directed the choir of St Thomas Church, in which he is also buried. Bach, whose music is played all over the world today, was known in his time above all as an organist.'],
    ['Clara Schumann, die 1819 in Leipzig zur Welt kam, war eine der bekanntesten Pianistinnen des 19. Jahrhunderts. Ihr Vater, dem sie ihre Ausbildung verdankte, war zuerst gegen die Ehe mit dem Komponisten Robert Schumann. Trotzdem heirateten die beiden. Clara war eine Frau, deren Konzerte in ganz Europa gefeiert wurden und die selbst komponierte – etwas, was für Frauen damals nicht normal war.', 'Clara Schumann, que nació en Leipzig en 1819, fue una de las pianistas más conocidas del siglo XIX. Su padre, a quien le debía su formación, al principio estaba en contra del matrimonio con el compositor Robert Schumann. Aun así, los dos se casaron. Clara fue una mujer cuyos conciertos se celebraban en toda Europa y que además componía: algo que en esa época no era normal para las mujeres.', 'Clara Schumann, who was born in Leipzig in 1819, was one of the best-known pianists of the 19th century. Her father, to whom she owed her training, was at first against her marriage to the composer Robert Schumann. Nevertheless the two married. Clara was a woman whose concerts were celebrated throughout Europe and who composed herself – something that was not normal for women at the time.'],
    ['Für Tomás ist aber Wilhelm Wundt die wichtigste Person, denn er gilt als Vater der experimentellen Psychologie. 1879 gründete er an der Universität Leipzig ein Labor, in dem zum ersten Mal Wahrnehmung und Aufmerksamkeit systematisch gemessen wurden. Viele Studenten, die bei Wundt gelernt hatten, gründeten später eigene Institute in Europa und Amerika. Wer heute Kognitionswissenschaft studiert, steht also ein bisschen auf Wundts Schultern – und das ist genau das, was Tomás an Leipzig so fasziniert.', 'Para Tomás, sin embargo, la persona más importante es Wilhelm Wundt, porque se le considera el padre de la psicología experimental. En 1879 fundó en la Universidad de Leipzig un laboratorio en el que por primera vez se midieron sistemáticamente la percepción y la atención. Muchos estudiantes que habían aprendido con Wundt fundaron después sus propios institutos en Europa y América. Quien hoy estudia ciencia cognitiva está, por lo tanto, un poco sobre los hombros de Wundt; y eso es justamente lo que tanto fascina a Tomás de Leipzig.', 'For Tomás, however, the most important person is Wilhelm Wundt, since he is regarded as the father of experimental psychology. In 1879 he founded a laboratory at Leipzig University in which perception and attention were measured systematically for the first time. Many students who had learned from Wundt later founded their own institutes in Europe and America. Whoever studies cognitive science today is therefore standing a little on Wundt’s shoulders – and that is exactly what fascinates Tomás so much about Leipzig.']
  ],
  gloss: [
    ['angezogen', { es: 'atraído (anziehen)', en: 'attracted (anziehen)' }],
    ['Diplomat', { es: 'diplomático', en: 'diplomat' }],
    ['Unabhängig', { es: 'independientemente', en: 'independently' }],
    ['Newton', { es: 'Isaac Newton', en: 'Isaac Newton' }],
    ['Differentialrechnung', { es: 'cálculo diferencial', en: 'differential calculus' }],
    ['binäre', { es: 'binario', en: 'binary' }],
    ['Zahlensystem', { es: 'sistema numérico', en: 'number system' }],
    ['jeder', { es: 'cada; cualquier', en: 'every' }],
    ['Tod', { es: 'muerte (der Tod)', en: 'death (der Tod)' }],
    ['Chor', { es: 'coro (der Chor, ¨-e)', en: 'choir' }],
    ['begraben', { es: 'enterrado', en: 'buried' }],
    ['gespielt', { es: 'tocada (spielen)', en: 'played' }],
    ['wird', { es: 'es (pasiva, U25)', en: 'is (passive, U25)' }],
    ['wurde', { es: 'fue (pasiva, U25)', en: 'was (passive, U25)' }],
    ['wurden', { es: 'eran / fueron (pasiva, U25)', en: 'were (passive, U25)' }],
    ['vor', { es: 'vor allem = sobre todo', en: 'vor allem = above all' }],
    ['allem', { es: 'vor allem = sobre todo', en: 'vor allem = above all' }],
    ['Organist', { es: 'organista', en: 'organist' }],
    ['zur', { es: 'zur Welt kommen = nacer', en: 'zur Welt kommen = be born' }],
    ['bekanntesten', { es: 'más conocidas (superlativo)', en: 'best-known' }],
    ['verdankte', { es: 'le debía (verdanken + dativo)', en: 'owed (verdanken + dative)' }],
    ['gegen', { es: 'en contra de', en: 'against' }],
    ['beiden', { es: 'los dos', en: 'the two' }],
    ['gefeiert', { es: 'celebrados (feiern)', en: 'celebrated' }],
    ['systematisch', { es: 'sistemáticamente', en: 'systematically' }],
    ['gemessen', { es: 'medidas (messen)', en: 'measured' }],
    ['Amerika', { es: 'América', en: 'America' }],
    ['Schultern', { es: 'hombros (die Schulter, -n)', en: 'shoulders' }],
    ['fasziniert', { es: 'fascina (faszinieren)', en: 'fascinates' }],
    ['Johann', { es: 'Johann (Sebastian Bach)', en: 'Johann (Sebastian Bach)' }],
    ['Sebastian', { es: 'Sebastian (Bach)', en: 'Sebastian (Bach)' }]
  ],
  q: [
    { t: 'rf', q: 'Leibniz ist in Dresden geboren.', a: false, x: { es: 'Nació en Leipzig en 1646.', en: 'He was born in Leipzig in 1646.' } },
    { t: 'choice', q: 'Womit arbeitet heute jeder Computer?', o: ['mit dem binären Zahlensystem', 'mit der Differentialrechnung', 'mit Bachs Musik'], a: 0, x: { es: 'El sistema binario que describió Leibniz.', en: 'The binary system Leibniz described.' } },
    { t: 'rf', q: 'Bach ist in der Thomaskirche begraben.', a: true, x: { es: '«…der Thomaskirche, in der er auch begraben ist.»', en: '“…der Thomaskirche, in der er auch begraben ist.”' } },
    { t: 'choice', q: 'Wer war zuerst gegen Claras Ehe?', o: ['ihre Mutter', 'ihr Vater', 'Robert Schumann'], a: 1, x: { es: 'Su padre, a quien debía su formación.', en: 'Her father, to whom she owed her training.' } },
    { t: 'choice', q: 'Was geschah in Wundts Labor zum ersten Mal?', o: ['Man komponierte Musik.', 'Man maß Wahrnehmung und Aufmerksamkeit systematisch.', 'Man baute Computer.'], a: 1, x: { es: 'Medición sistemática de percepción y atención.', en: 'Systematic measurement of perception and attention.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u22', ext: true, words: [
  ['n', 'die Kunst', 'Künste', 'el arte', 'art'],
  ['n', 'die Bühne', 'Bühnen', 'el escenario', 'stage'],
  ['n', 'der Zuschauer', 'Zuschauer', 'el espectador', 'spectator'],
  ['n', 'die Band', 'Bands', 'la banda (de música)', 'band'],
  ['a', 'intelligent', null, null, 'inteligente', 'intelligent'],
  ['a', 'blind', '—', '—', 'ciego', 'blind'],
  ['a', 'einzig', '—', '—', 'único', 'only; single']
] });
