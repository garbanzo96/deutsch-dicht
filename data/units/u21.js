/* U21 · Es war einmal … */
DD.lexicon.push({ unit: 'u21', words: [
  ['v', 'halten', 'hält', 'hielt', 'hat gehalten', 'sostener; detenerse; (halten für) considerar', 'hold; stop; (halten für) consider'],
  ['v', 'springen', 'springt', 'sprang', 'ist gesprungen', 'saltar', 'jump'],
  ['v', 'reiten', 'reitet', 'ritt', 'ist geritten', 'cabalgar; montar', 'ride'],
  ['v', 'ziehen', 'zieht', 'zog', 'hat gezogen', 'tirar; arrastrar; (ist) desplazarse', 'pull; (ist) move'],
  ['v', 'heben', 'hebt', 'hob', 'hat gehoben', 'levantar', 'lift'],
  ['v', 'werfen', 'wirft', 'warf', 'hat geworfen', 'lanzar; tirar', 'throw'],
  ['v', 'schlagen', 'schlägt', 'schlug', 'hat geschlagen', 'golpear; (vencer) derrotar; proponer (vorschlagen)', 'hit; beat'],
  ['v', 'lügen', 'lügt', 'log', 'hat gelogen', 'mentir', 'lie (tell lies)'],
  ['v', 'wetten', 'wettet', 'wettete', 'hat gewettet', 'apostar', 'bet'],
  ['v', 'schweigen', 'schweigt', 'schwieg', 'hat geschwiegen', 'callar', 'be silent'],
  ['v', 'erscheinen', 'erscheint', 'erschien', 'ist erschienen', 'aparecer; publicarse', 'appear; be published'],
  ['v', 'verschwinden', 'verschwindet', 'verschwand', 'ist verschwunden', 'desaparecer', 'disappear'],
  ['v', 'staunen', 'staunt', 'staunte', 'hat gestaunt', 'asombrarse', 'be amazed'],
  ['v', 'erschrecken', 'erschrickt', 'erschrak', 'ist erschrocken', 'asustarse', 'be startled'],
  ['v', 'gelingen', 'gelingt', 'gelang', 'ist gelungen', 'lograrse (+ dativo: es gelingt mir = logro)', 'succeed (+ dative)', { obj: 'D' }],
  ['v', 'schreien', 'schreit', 'schrie', 'hat geschrien', 'gritar', 'scream'],
  ['v', 'greifen', 'greift', 'griff', 'hat gegriffen', 'agarrar; recurrir (zu)', 'grab; reach for'],
  ['v', 'lassen', 'lässt', 'ließ', 'hat gelassen', 'dejar; hacer (que)', 'let; leave; have (done)'],
  ['v', 'lächeln', 'lächelt', 'lächelte', 'hat gelächelt', 'sonreír', 'smile'],
  ['n', 'der Doktor', 'Doktoren', 'el doctor', 'doctor (title)'],
  ['adv', 'allein', 'solo', 'alone'],
  ['n', 'das Märchen', 'Märchen', 'el cuento de hadas', 'fairy tale'],
  ['n', 'die Sage', 'Sagen', 'la leyenda (popular)', 'legend; saga'],
  ['n', 'die Legende', 'Legenden', 'la leyenda', 'legend'],
  ['n', 'der König', 'Könige', 'el rey', 'king'],
  ['n', 'die Königin', 'Königinnen', 'la reina', 'queen'],
  ['n', 'der Teufel', 'Teufel', 'el diablo', 'devil'],
  ['n', 'der Zauberer', 'Zauberer', 'el mago', 'magician; wizard'],
  ['n', 'die Hexe', 'Hexen', 'la bruja', 'witch'],
  ['n', 'das Fass', 'Fässer', 'el barril', 'barrel'],
  ['n', 'der Wirt', 'Wirte', 'el dueño de un local; el posadero', 'landlord (of an inn)'],
  ['n', 'der Gast', 'Gäste', 'el invitado; el cliente', 'guest'],
  ['n', 'das Gasthaus', 'Gasthäuser', 'la posada; el restaurante tradicional', 'inn'],
  ['n', 'das Wunder', 'Wunder', 'el milagro; la maravilla', 'miracle; wonder'],
  ['n', 'das Geheimnis', 'Geheimnisse', 'el secreto; el misterio', 'secret; mystery'],
  ['n', 'die Seele', 'Seelen', 'el alma', 'soul'],
  ['n', 'der Pakt', 'Pakte', 'el pacto', 'pact'],
  ['n', 'der Gelehrte', 'Gelehrten', 'el erudito; el sabio', 'scholar', { adj: 1 }],
  ['n', 'die Wette', 'Wetten', 'la apuesta', 'bet'],
  ['a', 'mächtig', null, null, 'poderoso', 'powerful'],
  ['a', 'böse', null, null, 'malo; malvado; enojado', 'evil; angry'],
  ['a', 'unglaublich', null, null, 'increíble', 'incredible'],
  ['a', 'unmöglich', null, null, 'imposible', 'impossible'],
  ['a', 'geheimnisvoll', null, null, 'misterioso', 'mysterious'],
  ['a', 'fröhlich', null, null, 'alegre', 'cheerful'],
  ['a', 'tot', '—', '—', 'muerto', 'dead'],
  ['adv', 'noch heute', 'todavía hoy', 'to this day', { id: 'adv-noch-heute' }],
  ['name', 'Faust', 'Johann Georg Faust (h. 1480–1541), modelo histórico del Fausto', 'Johann Georg Faust (c. 1480–1541), historical model for Faust'],
  ['name', 'Auerbachs Keller', 'Auerbachs Keller (restaurante histórico de Leipzig)', 'Auerbachs Keller (historic restaurant in Leipzig)'],
  ['name', 'Johann Wolfgang von Goethe', 'Johann Wolfgang von Goethe (1749–1832)', 'Johann Wolfgang von Goethe (1749–1832)']
] });

DD.unit('u21', {
  minutes: 60,
  more: ['lib-kafka-gibs-auf', 'lib-kafka-fabel'],
  goals: [
    { es: 'Narrar en Präteritum con verbos débiles, fuertes y mixtos.', en: 'Narrate in the Präteritum with weak, strong and mixed verbs.' },
    { es: 'Reconocer los grupos de alternancia vocálica (Ablaut) de los verbos fuertes.', en: 'Recognise the vowel-alternation (Ablaut) groups of strong verbs.' },
    { es: 'Organizar un relato: Präteritum para la acción, Plusquamperfekt para lo anterior, conectores temporales.', en: 'Organise a story: Präteritum for the action, Plusquamperfekt for what came before, temporal connectors.' }
  ],
  grammar: ['g-preterite', 'g-strong-verbs', 'g-pluperfect'],
  lesson: [
    { b: 'concept', de: 'Erzählpräteritum', t: { es: 'La narración escrita (cuentos, novelas, noticias, biografías) usa el Präteritum. La 1.ª y 3.ª persona del singular son iguales y los verbos fuertes no llevan terminación en ellas: ich kam, er kam.', en: 'Written narrative (tales, novels, news, biographies) uses the Präteritum. 1st and 3rd persons singular are identical, and strong verbs have no ending there: ich kam, er kam.' } },
    { b: 'concept', de: 'drei Typen', t: { es: 'Débiles: raíz + -te (machte). Fuertes: cambio de vocal, sin -te (kam, ging, sah). Mixtos: cambio de vocal + -te (brachte, dachte, kannte, wusste). El tipo se aprende con las formas principales.', en: 'Weak: stem + -te (machte). Strong: vowel change, no -te (kam, ging, sah). Mixed: vowel change + -te (brachte, dachte, kannte, wusste). The type is learned with the principal parts.' } },
    { b: 'table', h: { es: 'Terminaciones del Präteritum', en: 'Präteritum endings' }, c: ['', { es: 'débil · machen', en: 'weak · machen' }, { es: 'fuerte · kommen', en: 'strong · kommen' }, { es: 'mixto · denken', en: 'mixed · denken' }, { es: 'raíz en -t · arbeiten', en: 'stem in -t · arbeiten' }], r: [
      ['ich', 'mach[te]', 'k[a]m', 'd[a]ch[te]', 'arbeit[ete]'], ['du', 'mach[test]', 'k[a]m[st]', 'd[a]ch[test]', 'arbeit[etest]'], ['er · sie · es', 'mach[te]', 'k[a]m', 'd[a]ch[te]', 'arbeit[ete]'],
      ['wir', 'mach[ten]', 'k[a]m[en]', 'd[a]ch[ten]', 'arbeit[eten]'], ['ihr', 'mach[tet]', 'k[a]m[t]', 'd[a]ch[tet]', 'arbeit[etet]'], ['sie · Sie', 'mach[ten]', 'k[a]m[en]', 'd[a]ch[ten]', 'arbeit[eten]']
    ], n: { es: 'Fuertes con raíz en -d/-t/-s: du fandest, ihr fandet; du lasest. En la práctica, du e ihr en Präteritum aparecen poco fuera de la literatura.', en: 'Strong verbs with stems in -d/-t/-s: du fandest, ihr fandet; du lasest. In practice, du and ihr in the Präteritum are rare outside literature.' } },
    { b: 'table', h: { es: 'Ablaut · los grupos de los verbos fuertes', en: 'Ablaut · strong-verb groups' }, c: [{ es: 'Patrón', en: 'Pattern' }, { es: 'Modelo', en: 'Model' }, { es: 'Otros verbos', en: 'Other verbs' }], r: [
      ['ei – i – i', 'r[ei]ten – r[i]tt – ger[i]tten', 'greifen, schneiden, leiden'],
      ['ei – ie – ie', 'bl[ei]ben – bl[ie]b – gebl[ie]ben', 'schreiben, schweigen, scheinen, steigen, leihen, schreien'],
      ['ie – o – o', 'fl[ie]gen – fl[o]g – gefl[o]gen', 'ziehen, verlieren, schließen, lügen, heben'],
      ['i – a – u', 'f[i]nden – f[a]nd – gef[u]nden', 'trinken, singen, springen, gelingen, verschwinden'],
      ['i – a – o', 'beg[i]nnen – beg[a]nn – beg[o]nnen', 'schwimmen, gewinnen'],
      ['e – a – o', 'h[e]lfen – h[a]lf – geh[o]lfen', 'sprechen, nehmen, werfen, sterben, treffen, brechen'],
      ['e – a – e', 'g[e]ben – g[a]b – geg[e]ben', 'lesen, sehen, essen (aß), vergessen, messen'],
      ['a – u – a', 'f[a]hren – f[u]hr – gef[a]hren', 'tragen, schlagen, wachsen, waschen'],
      ['a – ie – a', 'schl[a]fen – schl[ie]f – geschl[a]fen', 'fallen, halten, lassen (ließ), laufen (lief)'],
      [{ es: 'irregulares', en: 'irregular' }, 'gehen – ging · stehen – stand · sitzen – saß · liegen – lag · tun – tat · sein – war', 'kommen – kam · bitten – bat · ziehen – zog']
    ], n: { es: 'Unos 170 verbos fuertes concentran gran parte de la frecuencia. La lista completa ordenada por grupos está en Gramática → Stammformen.', en: 'About 170 strong verbs carry much of the frequency. The full list by group is in Grammar → Stammformen.' } },
    { b: 'list', h: { es: 'Mixtos (vocal distinta + -te)', en: 'Mixed (different vowel + -te)' }, cols: 3, r: [
      ['bringen – brachte – gebracht', { es: 'traer', en: 'bring' }], ['denken – dachte – gedacht', { es: 'pensar', en: 'think' }], ['kennen – kannte – gekannt', { es: 'conocer', en: 'know' }],
      ['nennen – nannte – genannt', { es: 'nombrar', en: 'name' }], ['rennen – rannte – gerannt', { es: 'correr', en: 'run' }], ['wissen – wusste – gewusst', { es: 'saber', en: 'know' }]
    ] },
    { b: 'concept', de: 'Erzählstruktur', t: { es: 'Relato = Präteritum para la secuencia principal + Plusquamperfekt para lo ocurrido antes + conectores (als, nachdem, bevor, während) y adverbios de orden (zuerst, dann, danach, plötzlich, schließlich). El diálogo dentro del relato va en presente.', en: 'A story = Präteritum for the main sequence + Plusquamperfekt for earlier events + connectors (als, nachdem, bevor, während) and sequencing adverbs (zuerst, dann, danach, plötzlich, schließlich). Dialogue within the story is in the present.' } },
    { b: 'note', tone: 'l1', t: { es: 'Imperfecto e indefinido se traducen igual: «llovía / llovió» = es regnete. «Érase una vez» = Es war einmal. El contraste aspectual se expresa con adverbios (gerade, plötzlich, immer).', en: 'English simple past and past progressive both map to the Präteritum: “it rained / was raining” = es regnete. “Once upon a time” = Es war einmal.' } }
  ],
  chunks: [
    ['Es war einmal ein König …', 'Érase una vez un rey…', 'Once upon a time there was a king…'],
    ['Eines Tages geschah etwas Seltsames.', 'Un día ocurrió algo extraño.', 'One day something strange happened.'],
    ['Plötzlich hörte er eine Stimme.', 'De repente oyó una voz.', 'Suddenly he heard a voice.'],
    ['Niemand wusste, was passiert war.', 'Nadie sabía qué había pasado.', 'Nobody knew what had happened.'],
    ['Und wenn sie nicht gestorben sind, dann leben sie noch heute.', 'Y si no han muerto, todavía viven (= fueron felices y comieron perdices).', 'And if they haven’t died, they’re still alive today (= happily ever after).']
  ],
  errors: [
    ['Er kamte nach Hause.', 'Er kam nach Hause.', { es: 'Fuerte: sin -te.', en: 'Strong: no -te.' }],
    ['Ich denkte an dich.', 'Ich dachte an dich.', { es: 'Mixto: dachte.', en: 'Mixed: dachte.' }],
    ['Er gingt schnell.', 'Er ging schnell.', { es: '3.ª persona sin terminación.', en: '3rd person, no ending.' }],
    ['Wir sahten den Film.', 'Wir sahen den Film.', { es: 'Fuerte plural: -en.', en: 'Strong plural: -en.' }],
    ['Als er ankam, die Party schon begonnen hatte.', 'Als er ankam, hatte die Party schon begonnen.', { es: 'Tras la subordinada, el verbo.', en: 'After the subordinate clause, the verb.' }]
  ],
  examples: [
    ['Es war einmal ein Gelehrter, der alles wissen wollte.', 'Érase una vez un erudito que quería saberlo todo.', 'Once upon a time there was a scholar who wanted to know everything.'],
    ['Faust setzte sich auf das Fass und ritt die Treppe hinauf.', 'Fausto se sentó sobre el barril y subió la escalera cabalgando.', 'Faust sat on the barrel and rode up the stairs.'],
    ['Die Gäste staunten und schwiegen.', 'Los invitados se asombraron y callaron.', 'The guests were amazed and fell silent.'],
    ['Niemand wusste, wie ihm das gelungen war.', 'Nadie sabía cómo lo había logrado.', 'Nobody knew how he had managed it.'],
    ['Er lief schnell zum Bahnhof, aber der Zug war schon abgefahren.', 'Corrió rápido a la estación, pero el tren ya había partido.', 'He ran quickly to the station, but the train had already left.'],
    ['Sie dachte lange nach und schrieb dann einen Brief.', 'Reflexionó mucho rato y luego escribió una carta.', 'She thought for a long time and then wrote a letter.']
  ],
  reading: 'r-u21',
  exercises: [
    { t: 'choice', ph: 1, q: 'Gestern ___ er spät nach Hause.', o: ['kam', 'kamte', 'kommte'], a: 0, x: { es: 'kommen es fuerte: kam.', en: 'kommen is strong: kam.' } },
    { t: 'choice', ph: 1, q: 'Ich ___ oft an meine Familie.', p: { es: 'Präteritum de denken:', en: 'Präteritum of denken:' }, o: ['denkte', 'dachte', 'dacht'], a: 1, x: { es: 'Mixto: dachte.', en: 'Mixed: dachte.' } },
    { t: 'choice', ph: 1, p: { es: '¿Cuál es el infinitivo de «warf»?', en: 'What is the infinitive of “warf”?' }, o: ['werden', 'werfen', 'wirken'], a: 1, x: { es: 'werfen – warf – geworfen (e – a – o).', en: 'werfen – warf – geworfen (e – a – o).' } },
    { t: 'choice', ph: 1, p: { es: '¿Qué verbo sigue el patrón i – a – u?', en: 'Which verb follows i – a – u?' }, o: ['finden', 'bleiben', 'fliegen'], a: 0, x: { es: 'finden – fand – gefunden.', en: 'finden – fand – gefunden.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona infinitivo y Präteritum.', en: 'Match infinitive and Präteritum.' }, pairs: [['gehen', 'ging'], ['stehen', 'stand'], ['sitzen', 'saß'], ['bitten', 'bat'], ['tun', 'tat']], x: { es: 'Irregulares muy frecuentes.', en: 'Very frequent irregulars.' } },
    { t: 'choice', ph: 1, q: 'Wir ___ den ganzen Abend. (singen)', o: ['singten', 'sangen', 'sungen'], a: 1, x: { es: 'i – a – u: sangen.', en: 'i – a – u: sangen.' } },
    { t: 'gap', ph: 2, q: 'Er ___ (bleiben) drei Tage in Dresden.', a: 'blieb', x: { es: 'ei – ie – ie: blieb.', en: 'ei – ie – ie: blieb.' } },
    { t: 'gap', ph: 2, q: 'Sie ___ (fahren) mit dem Zug nach Berlin.', a: 'fuhr', x: { es: 'a – u – a: fuhr.', en: 'a – u – a: fuhr.' } },
    { t: 'gap', ph: 2, q: 'Wir ___ (sehen) einen alten Film.', a: 'sahen', x: { es: 'e – a – e: sahen.', en: 'e – a – e: sahen.' } },
    { t: 'gap', ph: 2, q: 'Ich ___ (bringen) einen Kuchen mit.', a: 'brachte', x: { es: 'Mixto: brachte.', en: 'Mixed: brachte.' } },
    { t: 'gap', ph: 2, q: 'Das Kind ___ (schlafen) sofort ein.', a: 'schlief', x: { es: 'a – ie – a: schlief.', en: 'a – ie – a: schlief.' } },
    { t: 'gap', ph: 2, q: 'Plötzlich ___ (verschwinden) der Mann.', a: 'verschwand', x: { es: 'i – a – u: verschwand.', en: 'i – a – u: verschwand.' } },
    { t: 'gap', ph: 2, q: 'Sie ___ (arbeiten) damals in einer Bibliothek.', a: 'arbeitete', x: { es: 'Raíz en -t: arbeitete.', en: 'Stem in -t: arbeitete.' } },
    { t: 'order', ph: 2, w: ['einmal', 'war', 'ein König', 'Es'], a: 'Es war einmal ein König.', x: { es: 'Fórmula inicial del cuento.', en: 'Fairy-tale opening formula.' } },
    { t: 'transform', ph: 3, p: { es: 'Pasa del Perfekt al Präteritum.', en: 'Change Perfekt to Präteritum.' }, q: 'Er hat das Fass gesehen und ist darauf geritten.', a: 'Er sah das Fass und ritt darauf.', x: { es: 'sehen → sah; reiten → ritt.', en: 'sehen → sah; reiten → ritt.' } },
    { t: 'transform', ph: 3, p: { es: 'Pasa al Präteritum.', en: 'Put into the Präteritum.' }, q: 'Die Gäste staunen und schweigen.', a: 'Die Gäste staunten und schwiegen.', x: { es: 'staunen (débil) → staunten; schweigen (fuerte) → schwiegen.', en: 'staunen (weak) → staunten; schweigen (strong) → schwiegen.' } },
    { t: 'write', ph: 3, s: { es: 'Nadie sabía qué había pasado.', en: 'Nobody knew what had happened.' }, a: 'Niemand wusste, was passiert war.', alt: ['Keiner wusste, was passiert war.', 'Niemand wusste, was geschehen war.'], x: { es: 'wusste (Präteritum) + Plusquamperfekt en la subordinada.', en: 'wusste (Präteritum) + Plusquamperfekt in the clause.' } },
    { t: 'listen', ph: 3, a: 'Plötzlich hörte er eine Stimme.', x: { es: 'hören (débil) → hörte.', en: 'hören (weak) → hörte.' } }
  ],
  summary: [
    { es: 'Präteritum = tiempo del relato escrito; ich = er sin terminación.', en: 'Präteritum = tense of written narrative; ich = er without ending.' },
    { es: 'Débiles -te (machte); fuertes con Ablaut (kam, ging, fand); mixtos Ablaut + -te (brachte, dachte, wusste).', en: 'Weak -te (machte); strong with Ablaut (kam, ging, fand); mixed Ablaut + -te (brachte, dachte, wusste).' },
    { es: 'Grupos de Ablaut: ei–i–i, ei–ie–ie, ie–o–o, i–a–u, i–a–o, e–a–o, e–a–e, a–u–a, a–ie–a.', en: 'Ablaut groups: ei–i–i, ei–ie–ie, ie–o–o, i–a–u, i–a–o, e–a–o, e–a–e, a–u–a, a–ie–a.' },
    { es: 'Plusquamperfekt para lo anterior; conectores als / nachdem / bevor.', en: 'Plusquamperfekt for earlier events; connectors als / nachdem / bevor.' },
    { es: 'Es war einmal … – Und wenn sie nicht gestorben sind …', en: 'Es war einmal … – Und wenn sie nicht gestorben sind …' }
  ]
});

DD.readings.push({
  id: 'r-u21', unit: 'u21', level: 'B1', kind: 'unit',
  de: 'Der Fassritt des Doktor Faust', es: 'La cabalgata del doctor Fausto sobre un barril', en: 'Doctor Faust’s barrel ride',
  genre: { es: 'Leyenda de Leipzig (versión propia) · serie Leipzig 21', en: 'Leipzig legend (our retelling) · Leipzig series 21' },
  intro: { es: 'Tomás y Lena cenan en Auerbachs Keller, el restaurante donde Goethe ambientó una escena de su Fausto. El mesero les cuenta la leyenda. Es una versión didáctica propia de una leyenda popular.', en: 'Tomás and Lena have dinner at Auerbachs Keller, the restaurant where Goethe set a scene of his Faust. The waiter tells them the legend. It is our own teaching version of a folk legend.' },
  focus: { es: 'Todos los Präteritum: débiles (staunten), fuertes (ritt, sah, schwieg), mixtos (dachte, wusste) · Plusquamperfekt.', en: 'Every Präteritum: weak (staunten), strong (ritt, sah, schwieg), mixed (dachte, wusste) · Plusquamperfekt.' },
  source: { type: 'original', note: { es: 'La leyenda del Fassritt (1525) está pintada en los muros de Auerbachs Keller; Goethe la usó en Fausto I.', en: 'The legend of the barrel ride (1525) is painted on the walls of Auerbachs Keller; Goethe used it in Faust I.' } },
  p: [
    ['An einem kalten Abend im März aßen Tomás und Lena in Auerbachs Keller, einem sehr alten Restaurant in der Innenstadt. An den Wänden hingen alte Bilder. Auf einem Bild saß ein Mann auf einem großen Fass. „Wer ist das?“, fragte Tomás. Der Kellner lächelte. „Das ist Doktor Faust. Kennen Sie die Geschichte nicht?“ Und er begann zu erzählen.', 'Una noche fría de marzo, Tomás y Lena comían en Auerbachs Keller, un restaurante muy antiguo del centro. En las paredes colgaban cuadros antiguos. En uno había un hombre sentado sobre un gran barril. «¿Quién es?», preguntó Tomás. El mesero sonrió. «Es el doctor Fausto. ¿No conocen la historia?» Y comenzó a contar.', 'One cold evening in March, Tomás and Lena were eating at Auerbachs Keller, a very old restaurant in the city centre. Old pictures hung on the walls. In one picture a man sat on a big barrel. “Who is that?” Tomás asked. The waiter smiled. “That is Doctor Faust. Don’t you know the story?” And he began to tell it.'],
    ['Es war im Jahr 1525. Damals lebte in Deutschland ein Gelehrter namens Faust. Er hatte viele Bücher gelesen und wusste viel, aber er war nie zufrieden. Man erzählte, dass er einen Pakt mit dem Teufel geschlossen hatte. Eines Abends kam Faust mit einigen Studenten nach Leipzig. Sie gingen in diesen Keller, weil sie Durst hatten.', 'Era el año 1525. En ese entonces vivía en Alemania un erudito llamado Fausto. Había leído muchos libros y sabía mucho, pero nunca estaba satisfecho. Se contaba que había hecho un pacto con el diablo. Una noche Fausto llegó a Leipzig con algunos estudiantes. Entraron en este sótano porque tenían sed.', 'It was the year 1525. At that time there lived in Germany a scholar called Faust. He had read many books and knew a great deal, but he was never satisfied. People said he had made a pact with the devil. One evening Faust came to Leipzig with some students. They went into this cellar because they were thirsty.'],
    ['Auf der Treppe sahen sie einige Arbeiter. Die Männer wollten ein riesiges Fass Wein aus dem Keller nach oben tragen, aber es war viel zu schwer. Sie zogen und hoben, doch das Fass bewegte sich nicht. Faust lachte. „Ihr seid schwach! Ich bringe das Fass allein nach oben.“ Der Wirt hielt das für einen Witz und rief: „Wenn Ihnen das gelingt, gehört Ihnen der Wein!“', 'En la escalera vieron a unos trabajadores. Los hombres querían subir desde el sótano un barril de vino enorme, pero era demasiado pesado. Tiraban y levantaban, pero el barril no se movía. Fausto se rió. «¡Son débiles! Yo subo el barril solo.» El posadero lo tomó por una broma y gritó: «¡Si lo logra, el vino es suyo!»', 'On the stairs they saw some workers. The men wanted to carry a huge barrel of wine up out of the cellar, but it was far too heavy. They pulled and lifted, yet the barrel did not move. Faust laughed. “You are weak! I’ll take the barrel up on my own.” The innkeeper thought it was a joke and called out: “If you manage it, the wine is yours!”'],
    ['Da setzte sich Faust auf das Fass wie auf ein Pferd. Er sagte ein paar seltsame Worte, und plötzlich bewegte sich das Fass. Faust ritt auf dem Fass die Treppe hinauf und auf die Straße. Die Arbeiter erschraken, die Studenten schrien, und der Wirt stand da und schwieg. Niemand wusste, wie das möglich war. Faust bekam den Wein, und alle tranken bis zum Morgen. Am nächsten Tag war er verschwunden.', 'Entonces Fausto se sentó sobre el barril como sobre un caballo. Dijo unas palabras extrañas y de pronto el barril se movió. Fausto subió cabalgando sobre el barril la escalera y salió a la calle. Los trabajadores se asustaron, los estudiantes gritaron y el posadero se quedó ahí, callado. Nadie sabía cómo era posible. Fausto se quedó con el vino y todos bebieron hasta la mañana. Al día siguiente había desaparecido.', 'Then Faust sat on the barrel as if on a horse. He said a few strange words, and suddenly the barrel moved. Faust rode the barrel up the stairs and out onto the street. The workers were terrified, the students shouted, and the innkeeper stood there in silence. Nobody knew how it was possible. Faust got the wine, and everyone drank until morning. The next day he had vanished.'],
    ['„Und das ist wirklich passiert?“, fragte Lena. Der Kellner zuckte mit den Schultern. „Wer weiß? Fast dreihundert Jahre später kam ein junger Student oft hierher: Johann Wolfgang von Goethe. Er hörte die Geschichte und vergaß sie nie. In seinem Faust spielt eine Szene genau hier, in Auerbachs Keller.“ Tomás sah das Bild noch einmal lange an. Als sie gingen, berührte er das Fass am Eingang. „Für mehr Wissen“, sagte er. Lena lachte: „Pass auf, Doktor Rivas – keine Pakte mit dem Teufel!“', '«¿Y eso pasó de verdad?», preguntó Lena. El mesero se encogió de hombros. «¿Quién sabe? Casi trescientos años después venía a menudo aquí un joven estudiante: Johann Wolfgang von Goethe. Escuchó la historia y nunca la olvidó. En su Fausto, una escena transcurre justo aquí, en Auerbachs Keller.» Tomás volvió a mirar largo rato el cuadro. Al irse, tocó el barril de la entrada. «Para saber más», dijo. Lena se rió: «Cuidado, doctor Rivas: ¡nada de pactos con el diablo!»', '“And did that really happen?” Lena asked. The waiter shrugged. “Who knows? Almost three hundred years later a young student often came here: Johann Wolfgang von Goethe. He heard the story and never forgot it. In his Faust a scene takes place right here, in Auerbachs Keller.” Tomás looked at the picture again for a long time. As they left, he touched the barrel at the entrance. “For more knowledge,” he said. Lena laughed: “Careful, Doctor Rivas – no pacts with the devil!”']
  ],
  gloss: [
    ['Wänden', { es: 'paredes (die Wand, ¨-e; dativo plural)', en: 'walls (dative plural)' }],
    ['Kellner', { es: 'mesero', en: 'waiter' }],
    ['namens', { es: 'llamado', en: 'called; named' }],
    ['geschlossen', { es: 'cerrado; (einen Pakt schließen) hecho un pacto', en: 'concluded (a pact)' }],
    ['Arbeiter', { es: 'trabajadores (der Arbeiter, -)', en: 'workers' }],
    ['riesiges', { es: 'enorme (riesig)', en: 'huge (riesig)' }],
    ['oben', { es: 'arriba (nach oben = hacia arriba)', en: 'up (nach oben = upwards)' }],
    ['doch', { es: 'pero; sin embargo', en: 'but; yet' }],
    ['Witz', { es: 'broma (der Witz, -e)', en: 'joke (der Witz, -e)' }],
    ['Pferd', { es: 'caballo (das Pferd, -e)', en: 'horse (das Pferd, -e)' }],
    ['paar', { es: 'ein paar = unos cuantos', en: 'ein paar = a few' }],
    ['seltsame', { es: 'extrañas (seltsam)', en: 'strange (seltsam)' }],
    ['hinauf', { es: 'hacia arriba', en: 'up' }],
    ['tranken', { es: 'bebieron (Präteritum de trinken)', en: 'drank (Präteritum of trinken)' }],
    ['zuckte', { es: 'mit den Schultern zucken = encogerse de hombros', en: 'shrugged (mit den Schultern zucken)' }],
    ['Schultern', { es: 'hombros (die Schulter, -n)', en: 'shoulders' }],
    ['hierher', { es: 'hacia aquí', en: 'here (to this place)' }],
    ['Szene', { es: 'escena (die Szene, -n)', en: 'scene' }],
    ['berührte', { es: 'tocó (berühren)', en: 'touched (berühren)' }],
    ['Eingang', { es: 'entrada (der Eingang, ¨-e)', en: 'entrance' }],
    ['Wissen', { es: 'saber; conocimiento (das Wissen)', en: 'knowledge (das Wissen)' }],
    ['Pass', { es: '¡cuidado! (aufpassen)', en: 'watch out (aufpassen)' }]
  ],
  q: [
    { t: 'rf', q: 'Auerbachs Keller ist ein neues Restaurant.', a: false, x: { es: 'Es un restaurante muy antiguo.', en: 'It is a very old restaurant.' } },
    { t: 'choice', q: 'Warum wollten die Arbeiter Hilfe?', o: ['Das Fass war zu schwer.', 'Der Wein war schlecht.', 'Die Treppe war kaputt.'], a: 0, x: { es: 'El barril era demasiado pesado.', en: 'The barrel was too heavy.' } },
    { t: 'choice', q: 'Was versprach der Wirt?', o: ['Geld', 'den Wein', 'ein Pferd'], a: 1, x: { es: '«…gehört Ihnen der Wein!»', en: '“…gehört Ihnen der Wein!”' } },
    { t: 'rf', q: 'Nach dem Ritt schwieg der Wirt.', a: true, x: { es: '«…der Wirt stand da und schwieg.»', en: '“…der Wirt stand da und schwieg.”' } },
    { t: 'choice', q: 'Wer hörte die Geschichte fast dreihundert Jahre später?', o: ['Bach', 'Goethe', 'Kant'], a: 1, x: { es: 'Goethe, de joven estudiante en Leipzig.', en: 'Goethe, as a young student in Leipzig.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u21', ext: true, words: [
  ['n', 'der Gott', 'Götter', 'el dios; Dios', 'god; God', { note: ['Gott sei Dank! = ¡Gracias a Dios!', 'Gott sei Dank! = Thank God!'] }],
  ['n', 'der Geist', 'Geister', 'el espíritu; el fantasma; la mente', 'spirit; ghost; mind'],
  ['n', 'das Feuer', 'Feuer', 'el fuego', 'fire'],
  ['n', 'das Holz', 'Hölzer', 'la madera', 'wood'],
  ['v', 'stehlen', 'stiehlt', 'stahl', 'hat gestohlen', 'robar', 'steal'],
  ['v', 'brennen', 'brennt', 'brannte', 'hat gebrannt', 'arder; quemar', 'burn']
] });
