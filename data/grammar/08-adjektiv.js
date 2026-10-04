/* Gramática · Adjektiv, Adverb, Partikel, Zahl */
(function () {
  const M = (es, en) => ({ es, en });
  DD.grammarTopic('k-adjektiv', [
    {
      id: 'g-adj-decl', level: 'A2', de: 'Adjektivdeklination: schwach, gemischt, stark', es: 'Declinación del adjetivo: débil, mixta, fuerte', en: 'Adjective declension: weak, mixed, strong',
      summary: M('El adjetivo predicativo no se declina (Der Wein ist gut). El atributivo sí, según lo que lo precede: tras der/dieser → débil (-e/-en); tras ein/kein/mein → mixta; sin artículo (o tras números, viele, einige) → fuerte. Principio único: la señal de género y caso debe aparecer una vez; si el artículo no la da, la da el adjetivo.', 'Predicative adjectives do not decline (Der Wein ist gut). Attributive ones do, depending on what precedes them: after der/dieser → weak (-e/-en); after ein/kein/mein → mixed; with no article (or after numbers, viele, einige) → strong. Single principle: the gender-case signal must appear once; if the article doesn’t give it, the adjective does.'),
      blocks: [
        { b: 'table', h: M('Débil (tras der, dieser, jeder, welcher, alle)', 'Weak (after der, dieser, jeder, welcher, alle)'), c: ['', '{m maskulin}', '{f feminin}', '{n neutral}', '{p Plural}'], r: [
          ['Nominativ', 'der neu[e] Plan', 'die neu[e] Idee', 'das neu[e] Buch', 'die neu[en] Bücher'], ['Akkusativ', 'den neu[en] Plan', 'die neu[e] Idee', 'das neu[e] Buch', 'die neu[en] Bücher'],
          ['Dativ', 'dem neu[en] Plan', 'der neu[en] Idee', 'dem neu[en] Buch', 'den neu[en] Büchern'], ['Genitiv', 'des neu[en] Plans', 'der neu[en] Idee', 'des neu[en] Buchs', 'der neu[en] Bücher']
        ], n: M('Solo cinco formas con -e (Nom sg. y Akk f/n); todo lo demás -en.', 'Only five forms with -e (nom. sg. and acc. f/n); everything else -en.') },
        { b: 'table', h: M('Mixta (tras ein, kein, mein, dein…)', 'Mixed (after ein, kein, mein, dein…)'), c: ['', '{m maskulin}', '{f feminin}', '{n neutral}', '{p Plural}'], r: [
          ['Nominativ', 'ein neu[er] Plan', 'eine neu[e] Idee', 'ein neu[es] Buch', 'meine neu[en] Bücher'], ['Akkusativ', 'einen neu[en] Plan', 'eine neu[e] Idee', 'ein neu[es] Buch', 'meine neu[en] Bücher'],
          ['Dativ', 'einem neu[en] Plan', 'einer neu[en] Idee', 'einem neu[en] Buch', 'meinen neu[en] Büchern'], ['Genitiv', 'eines neu[en] Plans', 'einer neu[en] Idee', 'eines neu[en] Buchs', 'meiner neu[en] Bücher']
        ], n: M('Difiere de la débil solo donde ein no tiene terminación: Nom m (-er), Nom/Akk n (-es).', 'Differs from weak only where ein has no ending: nom. m (-er), nom./acc. n (-es).') },
        { b: 'table', h: M('Fuerte (sin artículo; tras números, viele, wenige, einige, mehrere)', 'Strong (no article; after numbers, viele, wenige, einige, mehrere)'), c: ['', '{m maskulin}', '{f feminin}', '{n neutral}', '{p Plural}'], r: [
          ['Nominativ', 'heiß[er] Kaffee', 'frisch[e] Milch', 'kalt[es] Wasser', 'neu[e] Bücher'], ['Akkusativ', 'heiß[en] Kaffee', 'frisch[e] Milch', 'kalt[es] Wasser', 'neu[e] Bücher'],
          ['Dativ', 'heiß[em] Kaffee', 'frisch[er] Milch', 'kalt[em] Wasser', 'neu[en] Büchern'], ['Genitiv', 'heiß[en] Kaffees', 'frisch[er] Milch', 'kalt[en] Wassers', 'neu[er] Bücher']
        ], n: M('= terminaciones de der/die/das, salvo Gen m/n (-en: el sustantivo ya lleva -s).', '= endings of der/die/das, except gen. m/n (-en: the noun already has -s).') },
        { b: 'table', h: M('Particularidades', 'Special cases'), c: [M('Caso', 'Case'), M('Ejemplo', 'Example')], r: [
          [M('-el, -er pierden la e', '-el, -er drop the e'), 'dunkel → ein dunkles Zimmer · teuer → ein teures Auto'], [M('hoch → hoh-', 'hoch → hoh-'), 'ein hoher Berg'],
          [M('invariables: -er de ciudad, colores en -a, prima', 'invariable: city -er, colours in -a, prima'), 'der Leipziger Bahnhof · ein lila Kleid · eine prima Idee'],
          [M('varios adjetivos: misma terminación', 'several adjectives: same ending'), 'ein schöner, alter, großer Garten'], [M('participios como adjetivo', 'participles as adjectives'), 'die gestern veröffentlichte Studie']
        ] }
      ],
      examples: [['Ich trinke gern heißen Tee mit frischer Milch.', 'Me gusta el té caliente con leche fresca.', 'I like hot tea with fresh milk.'], ['Wir haben eine kleine, aber schöne Wohnung.', 'Tenemos un departamento pequeño pero bonito.', 'We have a small but nice flat.'], ['Kennst du den neuen Kollegen?', '¿Conoces al nuevo colega?', 'Do you know the new colleague?']]
    },
    {
      id: 'g-comparison', level: 'A2', de: 'Komparation: Komparativ und Superlativ', es: 'Comparación: comparativo y superlativo', en: 'Comparison: comparative and superlative',
      summary: M('Comparativo: adjetivo + -er (+ als). Superlativo: am + adjetivo + -sten, o der/die/das + adjetivo + -ste. Muchos monosílabos con a, o, u toman Umlaut (alt → älter). Igualdad: so … wie. Ambas formas se declinan como cualquier adjetivo cuando son atributivas.', 'Comparative: adjective + -er (+ als). Superlative: am + adjective + -sten, or der/die/das + adjective + -ste. Many one-syllable adjectives with a, o, u take umlaut (alt → älter). Equality: so … wie. Both forms decline like any adjective when attributive.'),
      blocks: [
        { b: 'table', h: M('Formas', 'Forms'), c: ['Positiv', 'Komparativ', 'Superlativ', M('Nota', 'Note')], r: [
          ['schnell', 'schnell[er]', 'am schnell[sten]', M('regular', 'regular')], ['alt', '[ä]lter', 'am [ä]ltesten', M('Umlaut; -esten tras -t, -d, -s, -ß, -z', 'umlaut; -esten after -t, -d, -s, -ß, -z')],
          ['groß', 'gr[ö]ßer', 'am gr[ö]ßten', M('-ß: solo -ten', '-ß: just -ten')], ['dunkel', 'dunkler', 'am dunkelsten', M('-el pierde e', '-el drops e')], ['teuer', 'teurer', 'am teuersten', M('-er pierde e', '-er drops e')],
          ['gut', '[besser]', 'am [besten]', M('irregular', 'irregular')], ['viel', '[mehr]', 'am [meisten]', M('irregular', 'irregular')], ['gern', '[lieber]', 'am [liebsten]', M('irregular', 'irregular')],
          ['hoch', '[höher]', 'am [höchsten]', M('irregular', 'irregular')], ['nah', '[näher]', 'am [nächsten]', M('irregular', 'irregular')], ['bald', '[eher]', 'am [ehesten]', M('irregular', 'irregular')]
        ] },
        { b: 'table', h: M('Comparar', 'Comparing'), c: [M('Relación', 'Relation'), M('Estructura', 'Structure'), M('Ejemplo', 'Example')], r: [
          [M('desigualdad', 'inequality'), 'Komparativ + als', 'Berlin ist größer [als] Leipzig.'], [M('igualdad', 'equality'), '(genau)so + Positiv + wie', 'Leipzig ist nicht [so] groß [wie] Berlin.'],
          [M('progresión', 'progression'), 'immer + Komparativ', 'Es wird [immer] wärmer.'], [M('proporción', 'proportion'), 'je + Komp. …, desto/umso + Komp.', '[Je] mehr ich lerne, [desto] mehr verstehe ich.'],
          [M('superlativo atributivo', 'attributive superlative'), 'der/die/das + -ste', 'Das ist [der] schönste Tag.'], [M('superlativo predicativo y adverbial', 'predicative and adverbial superlative'), 'am + -sten', 'Dieser Tag ist [am] schönsten. Sie läuft [am] schnellsten.']
        ] }
      ],
      examples: [['Mein Bruder ist zwei Jahre älter als ich.', 'Mi hermano es dos años mayor que yo.', 'My brother is two years older than me.'], ['Am liebsten trinke ich Tee.', 'Lo que más me gusta tomar es té.', 'I like tea best.'], ['Das ist die beste Idee, die ich je gehört habe.', 'Es la mejor idea que he escuchado.', 'That’s the best idea I’ve ever heard.']]
    },
    {
      id: 'g-numbers', level: 'A1', de: 'Zahlen, Datum, Uhrzeit, Brüche', es: 'Números, fecha, hora, fracciones', en: 'Numbers, dates, time, fractions',
      summary: M('Cardinales con unidades antes de las decenas (einundzwanzig). Ordinales: hasta 19 + -te, desde 20 + -ste, con punto en cifra (der 3. Mai). La hora oficial con Uhr (14:30 = vierzehn Uhr dreißig), la coloquial con halb, Viertel, vor, nach.', 'Cardinals with units before tens (einundzwanzig). Ordinals: up to 19 + -te, from 20 + -ste, with a dot in figures (der 3. Mai). Official time with Uhr (14:30 = vierzehn Uhr dreißig), colloquial with halb, Viertel, vor, nach.'),
      blocks: [
        { b: 'table', h: M('Cardinales', 'Cardinals'), c: [M('Número', 'Number'), M('Alemán', 'German'), M('Número', 'Number'), M('Alemán', 'German')], r: [
          ['0', 'null', '13', 'dreizehn'], ['1', 'eins', '16', 'sechzehn'], ['2', 'zwei', '17', 'siebzehn'], ['3', 'drei', '20', 'zwanzig'], ['7', 'sieben', '21', 'einundzwanzig'],
          ['11', 'elf', '30', 'dreißig'], ['12', 'zwölf', '100', 'hundert'], ['1 000', 'tausend', '1 000 000', 'eine Million'], ['2026', 'zweitausendsechsundzwanzig', '1989', 'neunzehnhundertneunundachtzig']
        ], n: M('Años hasta 1999: con hundert (neunzehnhundert…); desde 2000: con tausend. Decimales con coma: 3,5 = drei Komma fünf.', 'Years up to 1999: with hundert (neunzehnhundert…); from 2000: with tausend. Decimals with a comma: 3,5 = drei Komma fünf.') },
        { b: 'table', h: M('Ordinales y fechas', 'Ordinals and dates'), c: [M('Forma', 'Form'), M('Ejemplo', 'Example')], r: [
          [M('1.–19.: -te', '1st–19th: -te'), 'der erste, zweite, [dritte], vierte, [siebte], achte'], [M('desde 20.: -ste', 'from 20th: -ste'), 'der zwanzigste, einunddreißigste'],
          [M('fecha', 'date'), 'Heute ist [der] dritte Oktober. · [am] 3. Oktober (am dritten)'], [M('carta', 'letter'), 'Leipzig, [den] 3. Oktober 2026'], [M('adverbios', 'adverbs'), 'erstens, zweitens, drittens']
        ] },
        { b: 'table', h: M('La hora', 'Telling time'), c: [M('Hora', 'Time'), M('Oficial', 'Official'), M('Coloquial', 'Colloquial')], r: [
          ['8:00', 'acht Uhr', 'acht'], ['8:15', 'acht Uhr fünfzehn', 'Viertel nach acht'], ['8:30', 'acht Uhr dreißig', '[halb] neun'], ['8:45', 'acht Uhr fünfundvierzig', 'Viertel vor neun'],
          ['8:25', 'acht Uhr fünfundzwanzig', 'fünf vor halb neun'], ['20:10', 'zwanzig Uhr zehn', 'zehn nach acht']
        ], n: M('halb neun = 8:30 (media hora antes de las nueve), no 9:30.', 'halb neun = 8:30 (half an hour before nine), not 9:30.') },
        { b: 'list', h: M('Fracciones y multiplicativos', 'Fractions and multiplicatives'), cols: 3, r: [['halb / die Hälfte', M('medio / la mitad', 'half')], ['ein Drittel', M('un tercio', 'a third')], ['ein Viertel', M('un cuarto', 'a quarter')], ['anderthalb', M('uno y medio', 'one and a half')], ['einmal, zweimal', M('una vez, dos veces', 'once, twice')], ['doppelt', M('doble', 'double')]] }
      ],
      examples: [['Der Kurs beginnt am 14. Oktober um halb zehn.', 'El curso empieza el 14 de octubre a las nueve y media.', 'The course starts on 14 October at half past nine.'], ['Ich bin 1998 geboren.', 'Nací en 1998.', 'I was born in 1998.'], ['Das kostet dreiundzwanzig Euro fünfzig.', 'Cuesta veintitrés euros con cincuenta.', 'That costs twenty-three euros fifty.']]
    },
    {
      id: 'g-adverbs', level: 'A2', de: 'Adverbien: Arten und Stellung', es: 'Adverbios: tipos y posición', en: 'Adverbs: types and position',
      summary: M('Adverbios de tiempo, causa, modo y lugar responden a wann?, warum?, wie?, wo/wohin? En el campo medio tienden al orden Te-Ka-Mo-Lo. Casi cualquier adjetivo funciona como adverbio sin cambio (Er singt gut).', 'Adverbs of time, cause, manner and place answer wann?, warum?, wie?, wo/wohin? In the middle field they tend to the order Te-Ka-Mo-Lo. Almost any adjective works as an adverb unchanged (Er singt gut).'),
      blocks: [
        { b: 'table', h: M('Tipos frecuentes', 'Frequent types'), c: [M('Tipo', 'Type'), M('Pregunta', 'Question'), M('Ejemplos', 'Examples')], r: [
          ['temporal', 'wann? wie oft?', 'heute, gestern, morgen, jetzt, damals, bald, immer, oft, manchmal, selten, nie'],
          ['kausal', 'warum?', 'deshalb, deswegen, daher, darum, trotzdem'],
          ['modal', 'wie?', 'gern, leider, sehr, so, anders, vielleicht, sicher, kaum'],
          ['lokal', 'wo? wohin? woher?', 'hier, dort, da, oben, unten, drinnen, draußen, links, rechts, hin, her']
        ] },
        { b: 'table', h: M('hin y her', 'hin and her'), c: [M('Dirección', 'Direction'), M('Ejemplos', 'Examples')], r: [
          [M('her: hacia el hablante', 'her: towards the speaker'), 'Komm her! · herein, heraus, herauf, herunter (coloquial: rein, raus, rauf, runter)'],
          [M('hin: lejos del hablante', 'hin: away from the speaker'), 'Geh hin! · hinein, hinaus, hinauf, hinunter'],
          [M('preguntas', 'questions'), 'Wo gehst du hin? = Wohin gehst du? · Wo kommst du her? = Woher kommst du?']
        ] }
      ],
      examples: [['Ich gehe morgen wegen des Termins mit dem Rad zur Uni.', 'Mañana voy a la universidad en bici por la cita.', 'Tomorrow I’ll cycle to the university because of the appointment.'], ['Leider habe ich heute keine Zeit.', 'Lamentablemente hoy no tengo tiempo.', 'Unfortunately I have no time today.'], ['Komm doch rein!', '¡Pasa, anda!', 'Do come in!']]
    },
    {
      id: 'g-modal-words', level: 'B2', de: 'Modalwörter: vielleicht, wahrscheinlich, angeblich …', es: 'Palabras modales: vielleicht, wahrscheinlich, angeblich…', en: 'Modal words: vielleicht, wahrscheinlich, angeblich…',
      summary: M('Adverbios que expresan la actitud del hablante ante la verdad de lo dicho. Pueden ir en el Vorfeld o en el campo medio, y responder solos a una pregunta (Kommst du? – Vielleicht.). Escala: sicher, bestimmt, zweifellos › wahrscheinlich, vermutlich › vielleicht, möglicherweise; fuente: angeblich, offenbar, anscheinend; y el falso amigo scheinbar.', 'Adverbs expressing the speaker’s attitude to the truth of a statement. They can stand in the Vorfeld or middle field and answer a question on their own (Kommst du? – Vielleicht.). Scale: sicher, bestimmt, zweifellos › wahrscheinlich, vermutlich › vielleicht, möglicherweise; source: angeblich, offenbar, anscheinend; and the false friend scheinbar.'),
      blocks: [
        { b: 'table', h: M('Escala y matices', 'Scale and nuances'), c: [M('Palabra', 'Word'), M('Valor', 'Value'), M('Ejemplo', 'Example')], r: [
          ['sicher · bestimmt · zweifellos', '≈ 95 %', 'Sie kommt [bestimmt].'], ['wahrscheinlich · vermutlich', '≈ 75 %', 'Er ist [wahrscheinlich] krank.'], ['vielleicht · möglicherweise', '≈ 50 %', '[Vielleicht] regnet es.'],
          ['angeblich', M('dicen (y dudo)', 'allegedly'), 'Er ist [angeblich] Millionär.'], ['offenbar · anscheinend', M('según los indicios', 'judging by evidence'), 'Sie ist [offenbar] schon weg.'], ['scheinbar', M('parece, pero no', 'seems, but isn’t'), 'Er ist nur [scheinbar] ruhig.']
        ] }
      ],
      examples: [['Wahrscheinlich kommt er später.', 'Probablemente llega más tarde.', 'He’ll probably come later.'], ['Angeblich hat sie im Lotto gewonnen.', 'Supuestamente ganó la lotería.', 'She supposedly won the lottery.'], ['Das Problem ist nur scheinbar einfach.', 'El problema es solo aparentemente simple.', 'The problem only seems simple.']]
    },
    {
      id: 'g-particles', level: 'B1', de: 'Modalpartikeln', es: 'Partículas modales', en: 'Modal particles',
      summary: M('Palabras átonas del campo medio que matizan la actitud: ja (algo sabido, sorpresa), doch (recordar, insistir), denn (interés en preguntas), mal (suavizar órdenes), eben/halt (resignación), wohl (suposición), schon (tranquilizar), bloß/nur (advertencia, deseo), ruhig (permiso), etwa (sospecha), eigentlich (cambio de tema), überhaupt (duda de fondo).', 'Unstressed middle-field words that colour attitude: ja (known fact, surprise), doch (reminding, insisting), denn (interest in questions), mal (softening commands), eben/halt (resignation), wohl (assumption), schon (reassurance), bloß/nur (warning, wish), ruhig (permission), etwa (suspicion), eigentlich (topic shift), überhaupt (fundamental doubt).'),
      blocks: [
        { b: 'table', h: M('Por tipo de oración', 'By sentence type'), c: [M('Oración', 'Sentence'), M('Partículas', 'Particles'), M('Ejemplo', 'Example')], r: [
          [M('enunciativa', 'statement'), 'ja, doch, eben, halt, wohl, schon', 'Das ist [ja] toll! · Das ist [eben] so.'],
          [M('interrogativa W', 'W-question'), 'denn, eigentlich, bloß, nur', 'Wo warst du [denn]?'],
          [M('interrogativa sí/no', 'yes/no question'), 'denn, etwa, eigentlich, überhaupt', 'Bist du [etwa] krank?'],
          [M('imperativa', 'imperative'), 'mal, doch, ruhig, bloß, nur, halt, eben', 'Komm [doch] [mal] her!'],
          [M('deseo', 'wish'), 'doch, bloß, nur', 'Wenn er [doch] käme!']
        ], n: M('Combinaciones en orden fijo: ja doch, doch mal, denn eigentlich, halt mal. Nunca en el Vorfeld y siempre átonas: «DOCH» acentuado es otra palabra (sí, al contrario).', 'Combinations in fixed order: ja doch, doch mal, denn eigentlich, halt mal. Never in the Vorfeld and always unstressed: stressed “DOCH” is a different word (yes, on the contrary).') }
      ],
      examples: [['Was ist denn los?', '¿Qué pasa, entonces?', 'What’s the matter?'], ['Das habe ich dir doch gesagt!', '¡Pero si te lo dije!', 'I told you so!'], ['Mach dir bloß keine Sorgen!', '¡No te preocupes para nada!', 'Don’t you worry!']]
    }
  ]);
})();
