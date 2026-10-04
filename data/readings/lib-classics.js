/* Biblioteca · clásicos de dominio público (citas literales, ortografía modernizada; traducciones propias). */
(function () {
  const PD = (author, work, year, note) => ({ type: 'public-domain', author, work, year, note });

  DD.readings.push({
    id: 'lib-goethe-nachtlied', kind: 'library', level: 'B1', format: 'verse', after: 'u21',
    de: 'Wandrers Nachtlied', es: 'Canción nocturna del caminante', en: 'Wanderer’s Night Song',
    genre: { es: 'Poema · Goethe', en: 'Poem · Goethe' },
    intro: { es: 'Ocho versos que Goethe escribió en 1780 en la pared de una cabaña de caza en el Kickelhahn, cerca de Ilmenau. Quizá el poema más famoso de la lengua alemana: léelo en voz alta y fíjate en el ritmo que se va calmando.', en: 'Eight lines Goethe wrote in 1780 on the wall of a hunting hut on the Kickelhahn near Ilmenau. Perhaps the most famous poem in German: read it aloud and notice the rhythm slowing down.' },
    focus: { es: 'Formas poéticas: Ruh (= Ruhe), spürest (= spürst), Vögelein (= Vöglein), balde (= bald), ruhest (= ruhst).', en: 'Poetic forms: Ruh (= Ruhe), spürest (= spürst), Vögelein (= Vöglein), balde (= bald), ruhest (= ruhst).' },
    source: PD('Johann Wolfgang von Goethe', 'Ein Gleiches (Wandrers Nachtlied II)', 1780, { es: 'Texto completo.', en: 'Complete text.' }),
    p: [
      ['Über allen Gipfeln\nIst Ruh,\nIn allen Wipfeln\nSpürest du\nKaum einen Hauch;\nDie Vögelein schweigen im Walde.\nWarte nur, balde\nRuhest du auch.', 'Sobre todas las cumbres\nhay calma,\nen todas las copas\napenas sientes\nun soplo;\nlos pajarillos callan en el bosque.\nEspera, pronto\ndescansarás tú también.', 'Over all the hilltops\nis calm,\nin all the treetops\nyou feel\nhardly a breath;\nthe little birds are silent in the wood.\nJust wait, soon\nyou too will rest.']
    ],
    gloss: [
      ['Gipfeln', { es: 'cumbres (der Gipfel)', en: 'peaks (der Gipfel)' }], ['Ruh', { es: 'calma (= die Ruhe)', en: 'calm (= die Ruhe)' }], ['Wipfeln', { es: 'copas de los árboles (der Wipfel)', en: 'treetops (der Wipfel)' }],
      ['Spürest', { es: 'sientes (= spürst, spüren)', en: 'feel (= spürst, spüren)' }], ['Hauch', { es: 'soplo; aliento', en: 'breath; whisper' }], ['Vögelein', { es: 'pajarillos (diminutivo de Vogel)', en: 'little birds' }],
      ['Walde', { es: 'bosque (dativo antiguo de Wald)', en: 'wood (old dative of Wald)' }], ['balde', { es: 'pronto (= bald)', en: 'soon (= bald)' }], ['Ruhest', { es: 'descansas (= ruhst, ruhen)', en: 'rest (= ruhst, ruhen)' }]
    ],
    q: [
      { t: 'choice', q: 'Was hört man im Wald?', o: ['laute Vögel', 'fast nichts', 'Wind und Regen'], a: 1, x: { es: 'Los pájaros callan; apenas un soplo.', en: 'The birds are silent; barely a breath.' } },
      { t: 'rf', q: '«Balde ruhest du auch» bedeutet: Bald wirst du auch ruhen.', a: true, x: { es: 'Futuro con presente; muchos lo leen como alusión a la muerte.', en: 'Future with present tense; many read it as alluding to death.' } }
    ]
  });

  DD.readings.push({
    id: 'lib-heine-loreley', kind: 'library', level: 'B1', format: 'verse', after: 'u18',
    de: 'Die Loreley (Anfang)', es: 'La Loreley (comienzo)', en: 'The Lorelei (opening)',
    genre: { es: 'Poema · Heine', en: 'Poem · Heine' },
    intro: { es: 'Las dos primeras estrofas del poema de Heinrich Heine (1824) sobre la roca del Rin donde una mujer encantadora distrae a los barqueros. Con la música de Friedrich Silcher se volvió canción popular.', en: 'The first two stanzas of Heinrich Heine’s poem (1824) about the Rhine rock where an enchanting woman distracts the boatmen. Set to music by Friedrich Silcher it became a folk song.' },
    focus: { es: 'Orden poético (was soll es bedeuten = was es bedeuten soll), sitzet (= sitzt), goldnes (= goldenes).', en: 'Poetic word order (was soll es bedeuten = was es bedeuten soll), sitzet (= sitzt), goldnes (= goldenes).' },
    source: PD('Heinrich Heine', 'Die Heimkehr, II («Ich weiß nicht, was soll es bedeuten»)', 1824, { es: 'Estrofas 1–2 de 6.', en: 'Stanzas 1–2 of 6.' }),
    p: [
      ['Ich weiß nicht, was soll es bedeuten,\nDass ich so traurig bin;\nEin Märchen aus alten Zeiten,\nDas kommt mir nicht aus dem Sinn.\nDie Luft ist kühl und es dunkelt,\nUnd ruhig fließt der Rhein;\nDer Gipfel des Berges funkelt\nIm Abendsonnenschein.', 'No sé qué querrá decir\nque esté tan triste;\nun cuento de tiempos antiguos\nno se me va de la mente.\nEl aire está fresco y oscurece,\ny tranquilo fluye el Rin;\nla cumbre del monte centellea\nen el sol del atardecer.', 'I do not know what it should mean\nthat I am so sad;\na fairy tale from olden times\nwill not leave my mind.\nThe air is cool and it grows dark,\nand calmly flows the Rhine;\nthe summit of the mountain sparkles\nin the evening sunshine.'],
      ['Die schönste Jungfrau sitzet\nDort oben wunderbar,\nIhr goldnes Geschmeide blitzet,\nSie kämmt ihr goldenes Haar.', 'La más bella doncella está sentada\nallá arriba, maravillosa;\nsus joyas doradas destellan,\nse peina su cabello dorado.', 'The fairest maiden sits\nup there, wondrous;\nher golden jewellery glitters,\nshe combs her golden hair.']
    ],
    gloss: [
      ['Märchen', { es: 'cuento de hadas', en: 'fairy tale' }], ['dunkelt', { es: 'oscurece (dunkeln)', en: 'grows dark (dunkeln)' }], ['Rhein', { es: 'el Rin', en: 'the Rhine' }],
      ['Gipfel', { es: 'cumbre', en: 'summit' }], ['Berges', { es: 'del monte (der Berg)', en: 'of the mountain' }], ['funkelt', { es: 'centellea (funkeln)', en: 'sparkles (funkeln)' }],
      ['Abendsonnenschein', { es: 'luz del sol del atardecer', en: 'evening sunshine' }], ['Jungfrau', { es: 'doncella', en: 'maiden' }], ['sitzet', { es: 'está sentada (= sitzt)', en: 'sits (= sitzt)' }],
      ['goldnes', { es: 'dorado (= goldenes)', en: 'golden (= goldenes)' }], ['goldenes', { es: 'dorado', en: 'golden' }], ['Geschmeide', { es: 'joyas', en: 'jewellery' }], ['blitzet', { es: 'destella (= blitzt)', en: 'glitters (= blitzt)' }]
    ],
    q: [
      { t: 'choice', q: 'Wie fühlt sich der Sprecher?', o: ['fröhlich', 'traurig', 'müde'], a: 1, x: { es: '«dass ich so traurig bin».', en: '“dass ich so traurig bin”.' } },
      { t: 'rf', q: 'Die Frau sitzt am Ufer des Rheins.', a: false, x: { es: 'Está «dort oben», en lo alto de la roca.', en: 'She is “dort oben”, up on the rock.' } }
    ]
  });

  DD.readings.push({
    id: 'lib-kafka-gibs-auf', kind: 'library', level: 'B1', after: 'u21',
    de: 'Gibs auf!', es: '¡Desiste!', en: 'Give it up!',
    genre: { es: 'Prosa breve · Kafka', en: 'Short prose · Kafka' },
    intro: { es: 'Un texto de Franz Kafka (1922) de una sola escena: alguien que llega tarde, una ciudad desconocida, un policía que sonríe. Narración en Präteritum, como en la U21. Léelo dos veces: la segunda, fíjate en cómo cambia el tono con la última frase.', en: 'A one-scene text by Franz Kafka (1922): someone running late, an unfamiliar city, a policeman who smiles. Narrated in the Präteritum, as in U21. Read it twice; the second time, notice how the tone shifts with the last sentence.' },
    focus: { es: 'Präteritum de verbos fuertes (ging, sah, ließ, lief, wandte) · später, als ich geglaubt hatte (Plusquamperfekt) · Gibs = Gib es.', en: 'Strong Präteritum (ging, sah, ließ, lief, wandte) · später, als ich geglaubt hatte (pluperfect) · Gibs = Gib es.' },
    source: PD('Franz Kafka', 'Gibs auf! (título póstumo de Max Brod)', 1922, { es: 'Texto completo.', en: 'Complete text.' }),
    p: [
      ['Es war sehr früh am Morgen, die Straßen rein und leer, ich ging zum Bahnhof. Als ich eine Turmuhr mit meiner Uhr verglich, sah ich, dass es schon viel später war, als ich geglaubt hatte, ich musste mich sehr beeilen, der Schrecken über diese Entdeckung ließ mich im Weg unsicher werden, ich kannte mich in dieser Stadt noch nicht sehr gut aus, glücklicherweise war ein Schutzmann in der Nähe, ich lief zu ihm und fragte ihn atemlos nach dem Weg. Er lächelte und sagte: „Von mir willst du den Weg erfahren?“ „Ja“, sagte ich, „da ich ihn selbst nicht finden kann.“ „Gibs auf, gibs auf“, sagte er und wandte sich mit einem großen Schwunge ab, so wie Leute, die mit ihrem Lachen allein sein wollen.', 'Era muy temprano en la mañana, las calles limpias y vacías, yo iba a la estación. Cuando comparé un reloj de torre con mi reloj, vi que ya era mucho más tarde de lo que había creído; tenía que apurarme mucho, el susto por este descubrimiento me hizo vacilar en el camino, todavía no conocía muy bien esta ciudad; por suerte había un policía cerca, corrí hacia él y, sin aliento, le pregunté el camino. Sonrió y dijo: «¿Quieres que yo te indique el camino?». «Sí», dije, «ya que no puedo encontrarlo solo». «Desiste, desiste», dijo, y se dio vuelta con un gran impulso, como la gente que quiere quedarse a solas con su risa.', 'It was very early in the morning, the streets clean and empty, I was walking to the station. When I compared a tower clock with my watch, I saw that it was already much later than I had thought; I had to hurry a great deal, the shock of this discovery made me unsure of the way, I did not yet know my way around this town very well; luckily there was a policeman nearby, I ran to him and breathlessly asked him the way. He smiled and said: “You want to learn the way from me?” “Yes,” I said, “since I cannot find it myself.” “Give it up, give it up,” he said, and turned away with a great sweep, like people who want to be alone with their laughter.']
    ],
    gloss: [
      ['rein', { es: 'limpias', en: 'clean' }], ['glücklicherweise', { es: 'afortunadamente', en: 'fortunately' }], ['Turmuhr', { es: 'reloj de torre', en: 'tower clock' }], ['verglich', { es: 'comparé (vergleichen)', en: 'compared (vergleichen)' }],
      ['Schrecken', { es: 'susto', en: 'fright' }], ['Entdeckung', { es: 'descubrimiento', en: 'discovery' }], ['kannte', { es: 'sich auskennen = orientarse', en: 'sich auskennen = know one’s way' }],
      ['aus', { es: 'sich auskennen (partícula)', en: 'sich auskennen (particle)' }], ['Schutzmann', { es: 'policía (antiguo)', en: 'policeman (old)' }], ['atemlos', { es: 'sin aliento', en: 'breathless' }],
      ['erfahren', { es: 'saber; enterarse', en: 'learn; find out' }], ['Gibs', { es: '= gib es: ¡déjalo!', en: '= gib es: give it up!' }], ['wandte', { es: 'se dio vuelta (sich abwenden)', en: 'turned (sich abwenden)' }],
      ['ab', { es: 'sich abwenden (partícula)', en: 'sich abwenden (particle)' }], ['Schwunge', { es: 'impulso (dativo antiguo de Schwung)', en: 'sweep (old dative of Schwung)' }], ['Lachen', { es: 'risa', en: 'laughter' }]
    ],
    q: [
      { t: 'choice', q: 'Warum muss sich der Erzähler beeilen?', o: ['Es ist später, als er dachte.', 'Der Zug fährt früher.', 'Der Polizist ruft ihn.'], a: 0, x: { es: '«…dass es schon viel später war, als ich geglaubt hatte».', en: '“…that it was already much later than I had thought”.' } },
      { t: 'rf', q: 'Der Schutzmann erklärt ihm den Weg.', a: false, x: { es: 'Le dice «Gibs auf» y se aleja riendo.', en: 'He says “Gibs auf” and turns away laughing.' } },
      { t: 'choice', q: 'Wie reagiert der Schutzmann?', o: ['Er ist böse.', 'Er lächelt und wendet sich ab.', 'Er bringt ihn zum Bahnhof.'], a: 1, x: { es: 'Sonríe, dice «gibs auf» y se da vuelta.', en: 'He smiles, says “gibs auf” and turns away.' } }
    ]
  });

  DD.readings.push({
    id: 'lib-kafka-fabel', kind: 'library', level: 'B1', after: 'u21',
    de: 'Kleine Fabel', es: 'Pequeña fábula', en: 'A Little Fable',
    genre: { es: 'Fábula · Kafka', en: 'Fable · Kafka' },
    intro: { es: 'Una fábula de Franz Kafka (hacia 1920) en tres frases: un ratón que siente que el mundo se estrecha, y un gato con un consejo. El final es tan breve como brutal.', en: 'A fable by Franz Kafka (around 1920) in three sentences: a mouse who feels the world getting narrower, and a cat with some advice. The ending is as short as it is brutal.' },
    focus: { es: 'Comparativo (enger) · so breit, dass … · eilen aufeinander zu · Präteritum fraß (fressen).', en: 'Comparative (enger) · so breit, dass … · eilen aufeinander zu · Präteritum fraß (fressen).' },
    source: PD('Franz Kafka', 'Kleine Fabel (título póstumo de Max Brod)', 1920, { es: 'Texto completo.', en: 'Complete text.' }),
    p: [
      ['„Ach“, sagte die Maus, „die Welt wird enger mit jedem Tag. Zuerst war sie so breit, dass ich Angst hatte, ich lief weiter und war glücklich, dass ich endlich rechts und links in der Ferne Mauern sah, aber diese langen Mauern eilen so schnell aufeinander zu, dass ich schon im letzten Zimmer bin, und dort im Winkel steht die Falle, in die ich laufe.“ – „Du musst nur die Laufrichtung ändern“, sagte die Katze und fraß sie.', '«Ay», dijo el ratón, «el mundo se vuelve más estrecho cada día. Al principio era tan ancho que tenía miedo, seguí corriendo y estaba feliz de ver por fin, a derecha e izquierda, muros en la lejanía; pero estos largos muros se precipitan tan rápido el uno hacia el otro que ya estoy en la última habitación, y allí, en el rincón, está la trampa hacia la que corro.» —«Solo tienes que cambiar de dirección», dijo el gato, y se lo comió.', '“Alas,” said the mouse, “the world is getting narrower every day. At first it was so wide that I was afraid, I ran on and was happy when at last I saw walls far away to the right and left, but these long walls are closing in on each other so fast that I am already in the last room, and there in the corner stands the trap I am running into.” – “You only need to change direction,” said the cat, and ate it up.']
    ],
    gloss: [
      ['Ach', { es: 'ay', en: 'alas' }], ['Maus', { es: 'ratón (die Maus)', en: 'mouse' }], ['enger', { es: 'más estrecho (eng)', en: 'narrower (eng)' }], ['breit', { es: 'ancho', en: 'wide' }], ['Ferne', { es: 'lejanía', en: 'distance' }],
      ['eilen', { es: 'se precipitan (zueilen auf)', en: 'rush (zueilen auf)' }], ['aufeinander', { es: 'el uno hacia el otro', en: 'towards each other' }], ['zu', { es: 'zueilen (partícula)', en: 'zueilen (particle)' }],
      ['Winkel', { es: 'rincón', en: 'corner' }], ['Falle', { es: 'trampa', en: 'trap' }], ['Laufrichtung', { es: 'dirección de la carrera', en: 'running direction' }], ['fraß', { es: 'comió (fressen)', en: 'ate (fressen)' }]
    ],
    q: [
      { t: 'choice', q: 'Wie verändert sich die Welt für die Maus?', o: ['Sie wird größer.', 'Sie wird enger.', 'Sie bleibt gleich.'], a: 1, x: { es: '«die Welt wird enger mit jedem Tag».', en: '“die Welt wird enger mit jedem Tag”.' } },
      { t: 'rf', q: 'Die Katze hilft der Maus.', a: false, x: { es: 'Le da un consejo… y se la come.', en: 'She gives advice… and eats it.' } }
    ]
  });

  DD.readings.push({
    id: 'lib-kant-aufklaerung', kind: 'library', level: 'C1', after: 'u38',
    de: 'Was ist Aufklärung?', es: '¿Qué es la Ilustración?', en: 'What is Enlightenment?',
    genre: { es: 'Ensayo filosófico · Kant', en: 'Philosophical essay · Kant' },
    intro: { es: 'Los dos primeros párrafos del artículo de Immanuel Kant publicado en la Berlinische Monatsschrift en diciembre de 1784. Prosa del siglo XVIII: oraciones largas, genitivo, verbos reflexivos con genitivo (sich bedienen + G). Te sirve de lectura de la U38.', en: 'The first two paragraphs of Immanuel Kant’s article published in the Berlinische Monatsschrift in December 1784. Eighteenth-century prose: long sentences, genitives, reflexive verbs with the genitive (sich bedienen + G). It goes with U38.' },
    focus: { es: 'sich + G bedienen · Ursache derselben · nachdem sie … freigesprochen (sc. hat) · Habe ich ein Buch …, so brauche ich … (condicional sin wenn).', en: 'sich + G bedienen · Ursache derselben · nachdem sie … freigesprochen (sc. hat) · Habe ich ein Buch …, so brauche ich … (conditional without wenn).' },
    source: PD('Immanuel Kant', 'Beantwortung der Frage: Was ist Aufklärung?', 1784, { es: 'Párrafos 1–2. Ortografía modernizada (Mut, Teil).', en: 'Paragraphs 1–2. Modernised spelling (Mut, Teil).' }),
    p: [
      ['Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit. Unmündigkeit ist das Unvermögen, sich seines Verstandes ohne Leitung eines anderen zu bedienen. Selbstverschuldet ist diese Unmündigkeit, wenn die Ursache derselben nicht am Mangel des Verstandes, sondern der Entschließung und des Mutes liegt, sich seiner ohne Leitung eines andern zu bedienen. Sapere aude! Habe Mut, dich deines eigenen Verstandes zu bedienen! ist also der Wahlspruch der Aufklärung.', 'La Ilustración es la salida del ser humano de su minoría de edad autoculpable. Minoría de edad es la incapacidad de servirse del propio entendimiento sin la guía de otro. Esta minoría de edad es autoculpable cuando su causa no reside en la falta de entendimiento, sino en la falta de decisión y de valor para servirse de él sin la guía de otro. ¡Sapere aude! ¡Ten el valor de servirte de tu propio entendimiento!: tal es, pues, el lema de la Ilustración.', 'Enlightenment is man’s emergence from his self-incurred immaturity. Immaturity is the inability to use one’s own understanding without the guidance of another. This immaturity is self-incurred when its cause lies not in a lack of understanding but in a lack of resolve and courage to use it without the guidance of another. Sapere aude! Have courage to use your own understanding! is thus the motto of the Enlightenment.'],
      ['Faulheit und Feigheit sind die Ursachen, warum ein so großer Teil der Menschen, nachdem sie die Natur längst von fremder Leitung freigesprochen (naturaliter maiorennes), dennoch gerne zeitlebens unmündig bleiben; und warum es anderen so leicht wird, sich zu deren Vormündern aufzuwerfen. Es ist so bequem, unmündig zu sein. Habe ich ein Buch, das für mich Verstand hat, einen Seelsorger, der für mich Gewissen hat, einen Arzt, der für mich die Diät beurteilt, usw., so brauche ich mich ja nicht selbst zu bemühen. Ich habe nicht nötig zu denken, wenn ich nur bezahlen kann; andere werden das verdrießliche Geschäft schon für mich übernehmen.', 'La pereza y la cobardía son las causas por las que una parte tan grande de los seres humanos, después de que la naturaleza los ha liberado hace tiempo de toda guía ajena, sigue gustosa siendo menor de edad durante toda la vida; y por las que a otros les resulta tan fácil erigirse en sus tutores. Es tan cómodo ser menor de edad. Si tengo un libro que tiene entendimiento por mí, un pastor que tiene conciencia por mí, un médico que juzga por mí la dieta, etc., entonces no necesito esforzarme yo mismo. No tengo necesidad de pensar, con tal de que pueda pagar; otros se encargarán por mí de ese fastidioso trabajo.', 'Laziness and cowardice are the reasons why so great a part of mankind, after nature has long since freed them from alien guidance, nevertheless gladly remain immature for life; and why it is so easy for others to set themselves up as their guardians. It is so comfortable to be immature. If I have a book that has understanding for me, a pastor who has a conscience for me, a doctor who judges my diet for me, and so on, I need not trouble myself. I have no need to think, if only I can pay; others will readily take over the tedious business for me.']
    ],
    gloss: [
      ['Unvermögen', { es: 'incapacidad', en: 'inability' }], ['unmündig', { es: 'menor de edad (intelectualmente)', en: 'immature; under tutelage' }], ['Leitung', { es: 'guía; dirección', en: 'guidance' }], ['derselben', { es: 'de la misma (= ihrer)', en: 'of the same (= its)' }],
      ['Mangel', { es: 'falta', en: 'lack' }], ['Entschließung', { es: 'decisión', en: 'resolve' }], ['seiner', { es: 'de él (genitivo: del entendimiento)', en: 'of it (genitive: the understanding)' }],
      ['andern', { es: 'otro (= anderen)', en: 'another (= anderen)' }], ['Sapere', { es: 'latín: «atrévete a saber» (Horacio)', en: 'Latin: “dare to know” (Horace)' }], ['aude', { es: 'latín: atrévete', en: 'Latin: dare' }],
      ['Wahlspruch', { es: 'lema', en: 'motto' }], ['Faulheit', { es: 'pereza', en: 'laziness' }], ['Feigheit', { es: 'cobardía', en: 'cowardice' }], ['fremder', { es: 'ajena', en: 'alien' }],
      ['freigesprochen', { es: 'liberado (freisprechen; se omite hat)', en: 'freed (freisprechen; hat omitted)' }], ['zeitlebens', { es: 'toda la vida', en: 'all their lives' }], ['naturaliter', { es: 'latín: por naturaleza', en: 'Latin: by nature' }], ['maiorennes', { es: 'latín: mayores de edad', en: 'Latin: of age' }],
      ['Vormündern', { es: 'tutores (der Vormund)', en: 'guardians (der Vormund)' }], ['aufzuwerfen', { es: 'erigirse (sich aufwerfen zu)', en: 'set oneself up (sich aufwerfen zu)' }],
      ['Seelsorger', { es: 'pastor; guía espiritual', en: 'pastor' }], ['Gewissen', { es: 'conciencia (moral)', en: 'conscience' }], ['Diät', { es: 'dieta', en: 'diet' }], ['beurteilt', { es: 'juzga (beurteilen)', en: 'judges (beurteilen)' }],
      ['usw', { es: 'etcétera (und so weiter)', en: 'etc. (und so weiter)' }], ['bemühen', { es: 'esforzarse (sich bemühen)', en: 'trouble oneself (sich bemühen)' }], ['verdrießliche', { es: 'fastidioso', en: 'tedious' }]
    ],
    q: [
      { t: 'choice', q: 'Was ist nach Kant Unmündigkeit?', o: ['das Unvermögen, den eigenen Verstand ohne fremde Leitung zu benutzen', 'jung zu sein', 'kein Geld zu haben'], a: 0, x: { es: 'Definición del primer párrafo.', en: 'Definition in the first paragraph.' } },
      { t: 'choice', q: 'Was sind die Ursachen der selbstverschuldeten Unmündigkeit?', o: ['Armut und Krankheit', 'Faulheit und Feigheit', 'Kirche und Staat'], a: 1, x: { es: '«Faulheit und Feigheit sind die Ursachen…».', en: '“Faulheit und Feigheit sind die Ursachen…”.' } },
      { t: 'rf', q: 'Kant meint, Unmündigkeit sei bequem.', a: true, x: { es: '«Es ist so bequem, unmündig zu sein.»', en: '“Es ist so bequem, unmündig zu sein.”' } }
    ]
  });

  DD.readings.push({
    id: 'lib-nietzsche-wahrheit', kind: 'library', level: 'C1', after: 'u36',
    de: 'Über Wahrheit und Lüge (Anfang)', es: 'Sobre verdad y mentira (comienzo)', en: 'On Truth and Lies (opening)',
    genre: { es: 'Ensayo filosófico · Nietzsche', en: 'Philosophical essay · Nietzsche' },
    intro: { es: 'La apertura del ensayo póstumo de Friedrich Nietzsche «Über Wahrheit und Lüge im außermoralischen Sinne» (escrito en 1873): una fábula cósmica sobre la invención del conocimiento.', en: 'The opening of Friedrich Nietzsche’s posthumous essay “On Truth and Lies in a Nonmoral Sense” (written 1873): a cosmic fable about the invention of knowledge.' },
    focus: { es: 'Atributo de participio extendido (des in zahllosen Sonnensystemen flimmernd ausgegossenen Weltalls) · superlativos · Präteritum narrativo.', en: 'Extended participial attribute (des in zahllosen Sonnensystemen flimmernd ausgegossenen Weltalls) · superlatives · narrative Präteritum.' },
    source: PD('Friedrich Nietzsche', 'Über Wahrheit und Lüge im außermoralischen Sinne', 1873, { es: 'Primeras frases. Ortografía modernizada (Tiere, hochmütigste, Atemzügen).', en: 'Opening sentences. Modernised spelling (Tiere, hochmütigste, Atemzügen).' }),
    p: [
      ['In irgendeinem abgelegenen Winkel des in zahllosen Sonnensystemen flimmernd ausgegossenen Weltalls gab es einmal ein Gestirn, auf dem kluge Tiere das Erkennen erfanden. Es war die hochmütigste und verlogenste Minute der „Weltgeschichte“: aber doch nur eine Minute. Nach wenigen Atemzügen der Natur erstarrte das Gestirn, und die klugen Tiere mussten sterben.', 'En algún rincón apartado del universo, derramado centelleante en innumerables sistemas solares, hubo una vez un astro en el que animales inteligentes inventaron el conocimiento. Fue el minuto más soberbio y más mentiroso de la «historia universal»: pero solo un minuto. Tras unas pocas respiraciones de la naturaleza, el astro se congeló y los animales inteligentes tuvieron que morir.', 'In some remote corner of the universe, poured out and glittering in innumerable solar systems, there once was a star on which clever animals invented knowing. It was the most arrogant and mendacious minute of “world history”: yet only a minute. After nature had drawn a few breaths the star grew cold, and the clever animals had to die.']
    ],
    gloss: [
      ['irgendeinem', { es: 'algún', en: 'some' }], ['abgelegenen', { es: 'apartado', en: 'remote' }], ['Winkel', { es: 'rincón', en: 'corner' }], ['zahllosen', { es: 'innumerables', en: 'countless' }],
      ['Sonnensystemen', { es: 'sistemas solares', en: 'solar systems' }], ['flimmernd', { es: 'centelleando (flimmern)', en: 'glittering (flimmern)' }], ['ausgegossenen', { es: 'derramado (ausgießen)', en: 'poured out (ausgießen)' }],
      ['Weltalls', { es: 'universo (das Weltall)', en: 'universe (das Weltall)' }], ['Gestirn', { es: 'astro', en: 'star; heavenly body' }], ['kluge', { es: 'inteligentes', en: 'clever' }], ['Erkennen', { es: 'el conocer', en: 'knowing' }],
      ['erfanden', { es: 'inventaron (erfinden)', en: 'invented (erfinden)' }], ['hochmütigste', { es: 'la más soberbia', en: 'most arrogant' }], ['verlogenste', { es: 'la más mentirosa', en: 'most mendacious' }],
      ['Weltgeschichte', { es: 'historia universal', en: 'world history' }], ['Atemzügen', { es: 'respiraciones', en: 'breaths' }], ['erstarrte', { es: 'se congeló; se entumeció (erstarren)', en: 'grew stiff (erstarren)' }], ['klugen', { es: 'inteligentes', en: 'clever' }]
    ],
    q: [
      { t: 'choice', q: 'Was erfanden die klugen Tiere?', o: ['das Feuer', 'das Erkennen', 'die Sprache'], a: 1, x: { es: '«…auf dem kluge Tiere das Erkennen erfanden».', en: '“…on which clever animals invented knowing”.' } },
      { t: 'rf', q: 'Für Nietzsche dauerte die „Weltgeschichte“ sehr lange.', a: false, x: { es: '«nur eine Minute».', en: '“only a minute”.' } }
    ]
  });

  DD.readings.push({
    id: 'lib-schopenhauer-vorstellung', kind: 'library', level: 'C1', after: 'u38',
    de: 'Die Welt ist meine Vorstellung', es: 'El mundo es mi representación', en: 'The world is my representation',
    genre: { es: 'Tratado filosófico · Schopenhauer', en: 'Philosophical treatise · Schopenhauer' },
    intro: { es: 'La primera frase de «El mundo como voluntad y representación» (1819) de Arthur Schopenhauer, que comienza con una tesis idealista radical.', en: 'The first sentence of Arthur Schopenhauer’s “The World as Will and Representation” (1819), which opens with a radical idealist thesis.' },
    focus: { es: 'Oración relativa (welche … gilt) · wiewohl (= obwohl) · tut er dies …, so … (condicional sin wenn).', en: 'Relative clause (welche … gilt) · wiewohl (= obwohl) · tut er dies …, so … (conditional without wenn).' },
    source: PD('Arthur Schopenhauer', 'Die Welt als Wille und Vorstellung, Bd. 1, § 1', 1819, { es: 'Primera frase. Ortografía modernizada (Bewusstsein, tut).', en: 'First sentence. Modernised spelling (Bewusstsein, tut).' }),
    p: [
      ['„Die Welt ist meine Vorstellung“: – dies ist eine Wahrheit, welche in Beziehung auf jedes lebende und erkennende Wesen gilt; wiewohl der Mensch allein sie in das reflektierte abstrakte Bewusstsein bringen kann: und tut er dies wirklich; so ist die philosophische Besonnenheit bei ihm eingetreten.', '«El mundo es mi representación»: esta es una verdad que vale para todo ser vivo y cognoscente, aunque solo el ser humano puede llevarla a la conciencia reflexiva y abstracta; y si realmente lo hace, ha surgido en él la reflexión filosófica.', '“The world is my representation”: this is a truth that holds for every living and knowing being, although man alone can bring it into reflective, abstract consciousness; and if he really does so, philosophical discernment has dawned in him.']
    ],
    gloss: [
      ['Vorstellung', { es: 'representación', en: 'representation' }], ['welche', { es: 'que (relativo formal)', en: 'which (formal relative)' }], ['Beziehung', { es: 'relación (in Beziehung auf = respecto de)', en: 'relation (in Beziehung auf = regarding)' }],
      ['lebende', { es: 'vivo', en: 'living' }], ['erkennende', { es: 'cognoscente', en: 'knowing' }], ['wiewohl', { es: 'aunque (= obwohl)', en: 'although (= obwohl)' }],
      ['reflektierte', { es: 'reflexiva', en: 'reflective' }], ['abstrakte', { es: 'abstracta', en: 'abstract' }], ['Besonnenheit', { es: 'reflexión serena; sensatez', en: 'discernment' }], ['eingetreten', { es: 'producido (eintreten)', en: 'occurred (eintreten)' }]
    ],
    q: [
      { t: 'rf', q: 'Laut Schopenhauer gilt die Wahrheit nur für Menschen.', a: false, x: { es: 'Vale para todo ser vivo y cognoscente; solo el ser humano puede reflexionarla.', en: 'It holds for every living, knowing being; only humans can reflect on it.' } }
    ]
  });

  DD.readings.push({
    id: 'lib-wittgenstein-tractatus', kind: 'library', level: 'C1', after: 'u40',
    de: 'Tractatus logico-philosophicus (Auswahl)', es: 'Tractatus logico-philosophicus (selección)', en: 'Tractatus logico-philosophicus (selection)',
    genre: { es: 'Proposiciones numeradas · Wittgenstein', en: 'Numbered propositions · Wittgenstein' },
    intro: { es: 'Una selección de las proposiciones del Tractatus (1921) de Ludwig Wittgenstein, del inicio al final. Frases breves y densas: ideales para practicar lectura lenta y paráfrasis (U40).', en: 'A selection of propositions from Ludwig Wittgenstein’s Tractatus (1921), from beginning to end. Short, dense sentences: ideal for slow reading and paraphrase (U40).' },
    focus: { es: 'Definiciones con sein · Gesamtheit, Tatsache, Sachverhalt · dass-Sätze · wovon … darüber.', en: 'Definitions with sein · Gesamtheit, Tatsache, Sachverhalt · dass-clauses · wovon … darüber.' },
    source: PD('Ludwig Wittgenstein', 'Logisch-philosophische Abhandlung (Tractatus logico-philosophicus)', 1921, { es: 'Proposiciones 1, 1.1, 1.11, 1.2, 2, 4.01, 5.6, 6.52 (primera frase), 6.522 y 7.', en: 'Propositions 1, 1.1, 1.11, 1.2, 2, 4.01, 5.6, 6.52 (first sentence), 6.522 and 7.' }),
    p: [
      ['1 Die Welt ist alles, was der Fall ist.\n1.1 Die Welt ist die Gesamtheit der Tatsachen, nicht der Dinge.\n1.11 Die Welt ist durch die Tatsachen bestimmt und dadurch, dass es alle Tatsachen sind.\n1.2 Die Welt zerfällt in Tatsachen.', '1 El mundo es todo lo que es el caso.\n1.1 El mundo es la totalidad de los hechos, no de las cosas.\n1.11 El mundo está determinado por los hechos y por ser estos todos los hechos.\n1.2 El mundo se descompone en hechos.', '1 The world is everything that is the case.\n1.1 The world is the totality of facts, not of things.\n1.11 The world is determined by the facts, and by their being all the facts.\n1.2 The world divides into facts.'],
      ['2 Was der Fall ist, die Tatsache, ist das Bestehen von Sachverhalten.\n4.01 Der Satz ist ein Bild der Wirklichkeit.\n5.6 Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.', '2 Lo que es el caso, el hecho, es el darse de estados de cosas.\n4.01 La proposición es una figura de la realidad.\n5.6 Los límites de mi lenguaje significan los límites de mi mundo.', '2 What is the case, the fact, is the existence of states of affairs.\n4.01 The proposition is a picture of reality.\n5.6 The limits of my language mean the limits of my world.'],
      ['6.52 Wir fühlen, dass selbst, wenn alle möglichen wissenschaftlichen Fragen beantwortet sind, unsere Lebensprobleme noch gar nicht berührt sind.\n6.522 Es gibt allerdings Unaussprechliches. Dies zeigt sich, es ist das Mystische.\n7 Wovon man nicht sprechen kann, darüber muss man schweigen.', '6.52 Sentimos que, aun cuando todas las posibles preguntas científicas hayan sido respondidas, nuestros problemas vitales todavía no han sido siquiera tocados.\n6.522 Hay, ciertamente, lo inexpresable. Esto se muestra; es lo místico.\n7 De lo que no se puede hablar, hay que callar.', '6.52 We feel that even when all possible scientific questions have been answered, the problems of life remain completely untouched.\n6.522 There is indeed the inexpressible. This shows itself; it is the mystical.\n7 Whereof one cannot speak, thereof one must be silent.']
    ],
    gloss: [
      ['Fall', { es: 'caso (der Fall sein = ser el caso)', en: 'case (der Fall sein = be the case)' }], ['Gesamtheit', { es: 'totalidad', en: 'totality' }], ['Tatsachen', { es: 'hechos (die Tatsache)', en: 'facts' }], ['Tatsache', { es: 'hecho', en: 'fact' }],
      ['zerfällt', { es: 'se descompone (zerfallen)', en: 'divides (zerfallen)' }], ['Bestehen', { es: 'el darse; la existencia', en: 'existence' }], ['Sachverhalten', { es: 'estados de cosas (der Sachverhalt)', en: 'states of affairs' }],
      ['Bild', { es: 'figura; imagen', en: 'picture' }], ['Wirklichkeit', { es: 'realidad', en: 'reality' }], ['Lebensprobleme', { es: 'problemas vitales', en: 'problems of life' }], ['berührt', { es: 'tocados (berühren)', en: 'touched (berühren)' }],
      ['Unaussprechliches', { es: 'lo inexpresable', en: 'the inexpressible' }], ['Mystische', { es: 'lo místico', en: 'the mystical' }], ['Wovon', { es: 'de lo que', en: 'whereof' }]
    ],
    q: [
      { t: 'choice', q: 'Woraus besteht die Welt nach 1.1?', o: ['aus Dingen', 'aus Tatsachen', 'aus Wörtern'], a: 1, x: { es: '«…die Gesamtheit der Tatsachen, nicht der Dinge».', en: '“…the totality of facts, not of things”.' } },
      { t: 'rf', q: 'Nach 6.52 lösen die Wissenschaften auch unsere Lebensprobleme.', a: false, x: { es: 'Los problemas vitales «noch gar nicht berührt».', en: 'The problems of life remain “untouched”.' } }
    ]
  });

  DD.readings.push({
    id: 'lib-lichtenberg-aphorismen', kind: 'library', level: 'B2', after: 'u34',
    de: 'Aphorismen', es: 'Aforismos', en: 'Aphorisms',
    genre: { es: 'Aforismos · Lichtenberg', en: 'Aphorisms · Lichtenberg' },
    intro: { es: 'Georg Christoph Lichtenberg (1742–1799), físico de Gotinga, anotó durante décadas ideas sueltas en sus «Sudelbücher» (cuadernos de borrador). Cinco de sus aforismos más citados, en la forma en que suelen reproducirse.', en: 'Georg Christoph Lichtenberg (1742–1799), a Göttingen physicist, jotted down loose ideas for decades in his “Sudelbücher” (scrapbooks). Five of his most quoted aphorisms, in the form in which they are usually reproduced.' },
    focus: { es: 'Ironía y juego de palabras · wenn … so … · Konjunktiv II implícito · ohne … zu.', en: 'Irony and wordplay · wenn … so … · implied Konjunktiv II · ohne … zu.' },
    source: PD('Georg Christoph Lichtenberg', 'Sudelbücher', 1799, { es: 'Formulación habitual en ediciones modernas; ortografía modernizada.', en: 'Wording as usually given in modern editions; modernised spelling.' }),
    p: [
      ['Ich kann freilich nicht sagen, ob es besser werden wird, wenn es anders wird; aber so viel kann ich sagen: es muss anders werden, wenn es gut werden soll.', 'No puedo decir, ciertamente, si mejorará cuando cambie; pero esto sí puedo decir: tiene que cambiar si ha de ser bueno.', 'I cannot say, of course, whether things will get better if they change; but this much I can say: they must change if they are to get better.'],
      ['Wenn ein Buch und ein Kopf zusammenstoßen und es klingt hohl, ist das allemal im Buch?', 'Si un libro y una cabeza chocan y suena hueco, ¿está siempre (el hueco) en el libro?', 'If a book and a head collide and there is a hollow sound, is it always in the book?'],
      ['Der Amerikaner, der den Kolumbus zuerst entdeckte, machte eine böse Entdeckung.', 'El americano que descubrió primero a Colón hizo un mal descubrimiento.', 'The American who first discovered Columbus made a bad discovery.'],
      ['Es ist fast unmöglich, die Fackel der Wahrheit durch ein Gedränge zu tragen, ohne jemandem den Bart zu sengen.', 'Es casi imposible llevar la antorcha de la verdad a través de una multitud sin chamuscarle la barba a alguien.', 'It is almost impossible to carry the torch of truth through a crowd without singeing somebody’s beard.'],
      ['Ein Buch ist ein Spiegel: wenn ein Affe hineinguckt, so kann kein Apostel heraussehen.', 'Un libro es un espejo: si un mono se asoma, no puede asomarse un apóstol.', 'A book is a mirror: if an ape looks into it, no apostle can look out.']
    ],
    gloss: [
      ['freilich', { es: 'ciertamente; claro', en: 'of course' }], ['hohl', { es: 'hueco', en: 'hollow' }], ['zusammenstoßen', { es: 'chocan', en: 'collide' }], ['allemal', { es: 'siempre; en todo caso', en: 'always; in every case' }], ['Kolumbus', { es: 'Colón', en: 'Columbus' }],
      ['Amerikaner', { es: 'americano (habitante originario)', en: 'American (native inhabitant)' }], ['Entdeckung', { es: 'descubrimiento', en: 'discovery' }], ['Fackel', { es: 'antorcha', en: 'torch' }], ['Gedränge', { es: 'multitud apretada', en: 'crowd; crush' }],
      ['sengen', { es: 'chamuscar', en: 'singe' }], ['Spiegel', { es: 'espejo', en: 'mirror' }], ['Affe', { es: 'mono', en: 'ape' }], ['hineinguckt', { es: 'mira adentro (hineingucken)', en: 'looks in (hineingucken)' }],
      ['Apostel', { es: 'apóstol', en: 'apostle' }], ['heraussehen', { es: 'mirar hacia afuera', en: 'look out' }]
    ],
    q: [
      { t: 'choice', q: 'Was meint Lichtenberg mit dem Buch als Spiegel?', o: ['Ein Buch zeigt dem Leser, wer er ist.', 'Bücher sind teuer.', 'Affen lesen Bücher.'], a: 0, x: { es: 'Lo que uno saca de un libro depende de quién lo lee.', en: 'What you get from a book depends on who reads it.' } }
    ]
  });

  DD.readings.push({
    id: 'lib-saetze-philosophen', kind: 'library', level: 'C1', after: 'u38',
    de: 'Sätze, die man kennen sollte', es: 'Frases que conviene conocer', en: 'Sentences worth knowing',
    genre: { es: 'Citas comentadas', en: 'Annotated quotations' },
    intro: { es: 'Frases célebres de la filosofía alemana, citadas literalmente (dominio público), cada una con un comentario breve en alemán escrito para Deutsch Dicht. Lo que va entre comillas es cita; el comentario no.', en: 'Famous sentences of German philosophy, quoted verbatim (public domain), each with a short German commentary written for Deutsch Dicht. What is in quotation marks is quoted; the commentary is not.' },
    focus: { es: 'Sustantivaciones (das Wahre, das Ganze) · Präteritum y Perfekt de verbos fuertes · discurso indirecto en los comentarios.', en: 'Nominalisations (das Wahre, das Ganze) · strong-verb tenses · indirect speech in the commentaries.' },
    source: PD('Hegel · Marx · Nietzsche · Kant', 'Phänomenologie des Geistes (1807); Thesen über Feuerbach (1845, ed. Engels 1888); Die fröhliche Wissenschaft § 125 (1882); Kritik der praktischen Vernunft, Beschluss (1788)', 1882, { es: 'Citas literales con ortografía modernizada; comentarios originales.', en: 'Verbatim quotations in modernised spelling; original commentaries.' }),
    p: [
      ['„Das Wahre ist das Ganze. Das Ganze aber ist nur das durch seine Entwicklung sich vollendende Wesen.“ (Hegel, 1807) – Für Hegel ist keine einzelne Aussage für sich allein wahr; die Wahrheit zeigt sich erst im ganzen Prozess.', '«Lo verdadero es el todo. Pero el todo es solo la esencia que se completa a través de su desarrollo.» (Hegel, 1807) – Para Hegel, ninguna afirmación aislada es verdadera por sí sola; la verdad solo se muestra en el proceso completo.', '“The true is the whole. But the whole is only the essence completing itself through its development.” (Hegel, 1807) – For Hegel no single statement is true on its own; truth shows itself only in the whole process.'],
      ['„Die Philosophen haben die Welt nur verschieden interpretiert, es kommt aber darauf an, sie zu verändern.“ (Marx, 1845, in der von Engels 1888 veröffentlichten Fassung) – Die elfte These über Feuerbach steht heute im Eingang der Humboldt-Universität in Berlin.', '«Los filósofos solo han interpretado el mundo de distintas maneras; pero de lo que se trata es de transformarlo.» (Marx, 1845, en la versión publicada por Engels en 1888) – La undécima tesis sobre Feuerbach está hoy en el vestíbulo de la Universidad Humboldt de Berlín.', '“The philosophers have only interpreted the world in various ways; the point, however, is to change it.” (Marx, 1845, in the version published by Engels in 1888) – The eleventh thesis on Feuerbach is today in the entrance hall of Berlin’s Humboldt University.'],
      ['„Gott ist tot! Gott bleibt tot! Und wir haben ihn getötet!“ (Nietzsche, 1882) – Der Satz ist keine theologische Behauptung, sondern eine Diagnose: Die alten Werte tragen nach Nietzsche nicht mehr.', '«¡Dios ha muerto! ¡Dios sigue muerto! ¡Y nosotros lo hemos matado!» (Nietzsche, 1882) – La frase no es una afirmación teológica, sino un diagnóstico: según Nietzsche, los viejos valores ya no sostienen nada.', '“God is dead! God remains dead! And we have killed him!” (Nietzsche, 1882) – The sentence is not a theological claim but a diagnosis: for Nietzsche the old values no longer hold.'],
      ['„Zwei Dinge erfüllen das Gemüt mit immer neuer und zunehmender Bewunderung und Ehrfurcht, je öfter und anhaltender sich das Nachdenken damit beschäftigt: der bestirnte Himmel über mir und das moralische Gesetz in mir.“ (Kant, 1788) – Der Satz steht auch auf einer Gedenktafel neben Kants Grab in Kaliningrad, dem früheren Königsberg.', '«Dos cosas llenan el ánimo de admiración y respeto siempre nuevos y crecientes, cuanto más a menudo y con más constancia se ocupa de ellas la reflexión: el cielo estrellado sobre mí y la ley moral en mí.» (Kant, 1788) – La frase está también en una placa junto a la tumba de Kant en Kaliningrado, la antigua Königsberg.', '“Two things fill the mind with ever new and increasing admiration and awe, the more often and steadily reflection is occupied with them: the starry heavens above me and the moral law within me.” (Kant, 1788) – The sentence is also on a memorial plaque next to Kant’s grave in Kaliningrad, formerly Königsberg.']
    ],
    gloss: [
      ['vollendende', { es: 'que se completa (sich vollenden)', en: 'completing itself (sich vollenden)' }], ['interpretiert', { es: 'interpretado', en: 'interpreted' }], ['Feuerbach', { es: 'Ludwig Feuerbach, filósofo (1804–1872)', en: 'Ludwig Feuerbach, philosopher (1804–1872)' }],
      ['Eingang', { es: 'entrada; vestíbulo', en: 'entrance' }], ['Humboldt-Universität', { es: 'Universidad Humboldt', en: 'Humboldt University' }], ['getötet', { es: 'matado (töten)', en: 'killed (töten)' }],
      ['theologische', { es: 'teológica', en: 'theological' }], ['Diagnose', { es: 'diagnóstico', en: 'diagnosis' }], ['Werte', { es: 'valores', en: 'values' }], ['tragen', { es: 'sostienen', en: 'hold; bear' }],
      ['Gemüt', { es: 'ánimo', en: 'mind; heart' }], ['zunehmender', { es: 'creciente', en: 'increasing' }], ['Bewunderung', { es: 'admiración', en: 'admiration' }], ['Ehrfurcht', { es: 'reverencia; respeto', en: 'awe' }],
      ['bestirnte', { es: 'estrellado', en: 'starry' }], ['moralische', { es: 'moral', en: 'moral' }], ['Gedenktafel', { es: 'placa conmemorativa', en: 'memorial plaque' }], ['Grab', { es: 'tumba', en: 'grave' }], ['öfter', { es: 'más a menudo', en: 'more often' }], ['anhaltender', { es: 'con más constancia', en: 'more steadily' }], ['Nachdenken', { es: 'la reflexión', en: 'reflection' }], ['beschäftigt', { es: 'se ocupa (sich beschäftigen)', en: 'is occupied (sich beschäftigen)' }], ['Engels', { es: 'Friedrich Engels (1820–1895)', en: 'Friedrich Engels (1820–1895)' }], ['Fassung', { es: 'versión', en: 'version' }], ['Kaliningrad', { es: 'Kaliningrado', en: 'Kaliningrad' }],
      ['früheren', { es: 'antigua', en: 'former' }], ['Marx', { es: 'Karl Marx (1818–1883)', en: 'Karl Marx (1818–1883)' }], ['Nietzsche', { es: 'Friedrich Nietzsche (1844–1900)', en: 'Friedrich Nietzsche (1844–1900)' }]
    ],
    q: [
      { t: 'choice', q: 'Wo steht die elfte These über Feuerbach heute?', o: ['in Kaliningrad', 'in der Humboldt-Universität', 'in Jena'], a: 1, x: { es: 'En el vestíbulo de la Universidad Humboldt.', en: 'In the entrance hall of Humboldt University.' } },
      { t: 'rf', q: 'Nach dem Kommentar ist Nietzsches Satz vor allem eine theologische Behauptung.', a: false, x: { es: 'Es un diagnóstico cultural.', en: 'It is a cultural diagnosis.' } }
    ]
  });
})();
