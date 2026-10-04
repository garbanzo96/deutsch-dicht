/* Gramática · Präpositionen */
(function () {
  const M = (es, en) => ({ es, en });
  DD.grammarTopic('k-praep', [
    {
      id: 'g-prep-acc', level: 'A1', de: 'Präpositionen mit Akkusativ', es: 'Preposiciones con acusativo', en: 'Prepositions with the accusative',
      summary: M('durch, für, gegen, ohne, um (+ bis, entlang pospuesto, per, je, wider). Siempre acusativo. Contracciones coloquiales: durchs, fürs, ums.', 'durch, für, gegen, ohne, um (+ bis, postposed entlang, per, je, wider). Always accusative. Colloquial contractions: durchs, fürs, ums.'),
      blocks: [
        { b: 'table', h: M('Significados', 'Meanings'), c: [M('Preposición', 'Preposition'), M('Significados', 'Meanings'), M('Ejemplos', 'Examples')], r: [
          ['durch', M('a través de; por medio de', 'through; by means of'), 'durch {A den Park} · durch {A einen Zufall}'], ['für', M('para; por; durante', 'for'), 'für {A dich} · für {A eine Woche}'],
          ['gegen', M('contra; a eso de (hora)', 'against; around (time)'), 'gegen {A die Wand} · gegen {A acht Uhr}'], ['ohne', M('sin (a menudo sin artículo)', 'without (often no article)'), 'ohne {A Zucker} · ohne {A mich}'],
          ['um', M('alrededor de; a las (hora)', 'around; at (time)'), 'um {A den See} · um acht Uhr'], ['bis', M('hasta (sin artículo; con otra prep.: bis zum)', 'until (no article; with another prep.: bis zum)'), 'bis Montag · bis zum Bahnhof'],
          ['entlang', M('a lo largo de (pospuesto)', 'along (postposed)'), 'die Straße entlang']
        ] }
      ],
      examples: [['Wir gehen durch den Wald.', 'Caminamos por el bosque.', 'We walk through the forest.'], ['Das Geschenk ist für dich.', 'El regalo es para ti.', 'The present is for you.'], ['Ich trinke Kaffee ohne Milch.', 'Tomo café sin leche.', 'I drink coffee without milk.']]
    },
    {
      id: 'g-prep-dat', level: 'A2', de: 'Präpositionen mit Dativ', es: 'Preposiciones con dativo', en: 'Prepositions with the dative',
      summary: M('aus, bei, mit, nach, seit, von, zu, gegenüber (+ ab, außer, entgegen, gemäß, laut, zufolge). Siempre dativo. Contracciones: beim, vom, zum, zur.', 'aus, bei, mit, nach, seit, von, zu, gegenüber (+ ab, außer, entgegen, gemäß, laut, zufolge). Always dative. Contractions: beim, vom, zum, zur.'),
      blocks: [
        { b: 'table', h: M('Significados', 'Meanings'), c: [M('Preposición', 'Preposition'), M('Significados', 'Meanings'), M('Ejemplos', 'Examples')], r: [
          ['aus', M('de (origen, interior, material)', 'from; out of; made of'), 'aus {D Chile} · aus {D dem Haus} · aus {D Holz}'], ['bei', M('en casa de; junto a; durante', 'at someone’s; near; during'), 'bei {D meinen Eltern} · beim Essen'],
          ['mit', M('con; en (medio)', 'with; by (means)'), 'mit {D dir} · mit {D dem Bus}'], ['nach', M('a (ciudades, países, casa); después de; según', 'to (cities, countries, home); after; according to'), 'nach Berlin · nach Hause · nach {D dem Essen}'],
          ['seit', M('desde (hace)', 'since; for'), 'seit {D einem Jahr}'], ['von', M('de; desde; por (agente)', 'of; from; by (agent)'), 'von {D meiner Mutter} · vom Bahnhof'],
          ['zu', M('a (personas, lugares, actividades)', 'to (people, places, activities)'), 'zu {D dir} · zum Arzt · zur Uni'], ['gegenüber', M('enfrente de; respecto a', 'opposite; towards'), '{D dem Bahnhof} gegenüber · gegenüber {D der Post}'],
          ['außer', M('excepto', 'except'), 'alle außer {D mir}'], ['ab', M('a partir de', 'from (on)'), 'ab {D nächster Woche} · ab heute']
        ] },
        { b: 'table', h: M('¿Adónde? nach, zu, in', 'Where to? nach, zu, in'), c: [M('Destino', 'Destination'), M('Preposición', 'Preposition'), M('Ejemplo', 'Example')], r: [
          [M('ciudades, países sin artículo, puntos cardinales', 'cities, countries without article, compass points'), 'nach', 'nach Leipzig, nach Chile, nach Norden'],
          [M('países con artículo, edificios en los que se entra', 'countries with article, buildings one enters'), 'in + Akk', 'in die Schweiz, ins Kino'],
          [M('personas, instituciones, actividades', 'people, institutions, activities'), 'zu', 'zu Lena, zum Arzt, zur Arbeit'],
          [M('casa', 'home'), 'nach Hause (hacia) · zu Hause (en)', 'Ich gehe nach Hause. Ich bin zu Hause.']
        ] }
      ],
      examples: [['Ich komme aus Valparaíso.', 'Soy de Valparaíso.', 'I come from Valparaíso.'], ['Seit einem Monat wohne ich bei meiner Tante.', 'Hace un mes vivo donde mi tía.', 'I’ve been living at my aunt’s for a month.'], ['Nach dem Kurs gehen wir zum Bäcker.', 'Después del curso vamos a la panadería.', 'After the course we go to the baker’s.']]
    },
    {
      id: 'g-prep-two-way', level: 'A2', de: 'Wechselpräpositionen', es: 'Preposiciones de doble caso', en: 'Two-way prepositions',
      summary: M('an, auf, hinter, in, neben, über, unter, vor, zwischen. Wohin? (movimiento hacia una meta) → acusativo; Wo? (posición, o movimiento dentro del lugar) → dativo. En sentido figurado (verbos con preposición) el caso es fijo.', 'an, auf, hinter, in, neben, über, unter, vor, zwischen. Wohin? (movement to a goal) → accusative; Wo? (position, or movement within the place) → dative. In figurative use (verbs with prepositions) the case is fixed.'),
      blocks: [
        { b: 'table', h: M('Wohin? o Wo?', 'Wohin? or Wo?'), c: [M('Preposición', 'Preposition'), 'Wohin? + Akk', 'Wo? + Dat'], r: [
          ['in', 'Ich gehe in {A den Park}.', 'Ich bin in {D dem} Park (im Park).'], ['an', 'Ich hänge das Bild an {A die Wand}.', 'Das Bild hängt an {D der Wand}.'],
          ['auf', 'Ich lege das Buch auf {A den Tisch}.', 'Das Buch liegt auf {D dem Tisch}.'], ['unter', 'Die Katze läuft unter {A das Bett}.', 'Die Katze schläft unter {D dem Bett}.'],
          ['über', 'Ich hänge die Lampe über {A den Tisch}.', 'Die Lampe hängt über {D dem Tisch}.'], ['vor', 'Stell das Rad vor {A die Tür}.', 'Das Rad steht vor {D der Tür}.'],
          ['hinter', 'Er geht hinter {A das Haus}.', 'Der Garten ist hinter {D dem Haus}.'], ['neben', 'Setz dich neben {A mich}.', 'Sie sitzt neben {D mir}.'], ['zwischen', 'Ich stelle es zwischen {A die Bücher}.', 'Es steht zwischen {D den Büchern}.']
        ], n: M('Contracciones: ins, im, ans, am, aufs. Usos temporales con dativo: am Montag, im Mai, vor einer Woche, in zwei Tagen, zwischen den Kursen.', 'Contractions: ins, im, ans, am, aufs. Temporal uses take the dative: am Montag, im Mai, vor einer Woche, in zwei Tagen, zwischen den Kursen.') },
        { b: 'ref', id: 'g-positional-verbs' }
      ],
      examples: [['Ich stelle die Vase auf den Tisch. Jetzt steht sie auf dem Tisch.', 'Pongo el florero en la mesa. Ahora está en la mesa.', 'I put the vase on the table. Now it’s on the table.'], ['Wir sind im Park spazieren gegangen.', 'Fuimos a pasear al parque (dentro).', 'We went for a walk in the park.'], ['Häng die Jacke an den Haken!', '¡Cuelga la chaqueta en el gancho!', 'Hang the jacket on the hook!']]
    },
    {
      id: 'g-prep-gen', level: 'B1', de: 'Präpositionen mit Genitiv', es: 'Preposiciones con genitivo', en: 'Prepositions with the genitive',
      summary: M('Las más frecuentes: wegen, trotz, während, (an)statt, innerhalb, außerhalb. Registro escrito: aufgrund, infolge, angesichts, anlässlich, bezüglich, hinsichtlich, mithilfe, anstelle, zugunsten, oberhalb, unterhalb, jenseits, diesseits, laut, zufolge (+D). En el habla, wegen, trotz y während aparecen a menudo con dativo.', 'The most frequent: wegen, trotz, während, (an)statt, innerhalb, außerhalb. Written register: aufgrund, infolge, angesichts, anlässlich, bezüglich, hinsichtlich, mithilfe, anstelle, zugunsten, oberhalb, unterhalb, jenseits, diesseits, laut, zufolge (+dat.). In speech wegen, trotz and während often take the dative.'),
      blocks: [
        { b: 'table', h: M('Significados', 'Meanings'), c: [M('Preposición', 'Preposition'), M('Significado', 'Meaning'), M('Ejemplo', 'Example')], r: [
          ['wegen', M('por; a causa de', 'because of'), 'wegen {G des Regens}'], ['trotz', M('a pesar de', 'despite'), 'trotz {G der Kälte}'], ['während', M('durante', 'during'), 'während {G des Kurses}'],
          ['(an)statt', M('en vez de', 'instead of'), 'statt {G eines Briefes}'], ['innerhalb / außerhalb', M('dentro / fuera de', 'within / outside'), 'innerhalb {G einer Woche}'], ['aufgrund', M('debido a', 'due to'), 'aufgrund {G der Lage}'],
          ['infolge', M('a consecuencia de', 'as a result of'), 'infolge {G des Sturms}'], ['angesichts', M('ante; en vista de', 'in view of'), 'angesichts {G der Kosten}'], ['hinsichtlich / bezüglich', M('respecto de', 'regarding'), 'hinsichtlich {G des Plans}'],
          ['mithilfe', M('con ayuda de', 'with the help of'), 'mithilfe {G eines Wörterbuchs}'], ['anlässlich', M('con motivo de', 'on the occasion of'), 'anlässlich {G seines Geburtstags}'], ['jenseits', M('más allá de', 'beyond'), 'jenseits {G der Grenze}']
        ], n: M('Sin artículo ni adjetivo, el genitivo no se nota: se pasa al dativo (wegen Problemen, trotz Schmerzen).', 'Without article or adjective the genitive is invisible: the dative is used (wegen Problemen, trotz Schmerzen).') }
      ],
      examples: [['Wegen des Streiks fahren heute keine Züge.', 'Por la huelga hoy no circulan trenes.', 'Because of the strike no trains are running today.'], ['Trotz des schlechten Wetters sind wir gewandert.', 'A pesar del mal tiempo salimos a caminar.', 'Despite the bad weather we went hiking.'], ['Innerhalb einer Woche erhalten Sie eine Antwort.', 'En el plazo de una semana recibirá una respuesta.', 'You will receive an answer within a week.']]
    },
    {
      id: 'g-prep-time', level: 'A2', de: 'Temporale Präpositionen', es: 'Preposiciones de tiempo', en: 'Prepositions of time',
      summary: M('am (días, partes del día, fechas), im (meses, estaciones, años con im Jahr), um (hora exacta), gegen (hora aproximada), von … bis, ab, seit, vor (hace), in (dentro de), nach, während, innerhalb, bis. Años solos sin preposición: 1989 fiel die Mauer.', 'am (days, parts of the day, dates), im (months, seasons, years with im Jahr), um (exact time), gegen (approximate time), von … bis, ab, seit, vor (ago), in (in … time), nach, während, innerhalb, bis. Bare years without a preposition: 1989 fiel die Mauer.'),
      blocks: [
        { b: 'table', h: M('Qué preposición', 'Which preposition'), c: [M('Expresión', 'Expression'), M('Preposición', 'Preposition'), M('Ejemplo', 'Example')], r: [
          [M('día, fecha, parte del día', 'day, date, part of day'), 'am', 'am Montag, am 3. Mai, am Abend (pero: in der Nacht)'], [M('mes, estación, siglo', 'month, season, century'), 'im', 'im Mai, im Winter, im 19. Jahrhundert'],
          [M('hora', 'clock time'), 'um / gegen', 'um 8 Uhr · gegen 8 Uhr'], [M('periodo', 'period'), 'von … bis · zwischen', 'von 9 bis 17 Uhr'],
          [M('pasado (hace)', 'past (ago)'), 'vor + D', 'vor zwei Jahren'], [M('futuro (dentro de)', 'future (in)'), 'in + D', 'in zwei Wochen'],
          [M('desde (sigue)', 'since (ongoing)'), 'seit + D', 'seit Mai, seit drei Jahren'], [M('a partir de', 'from … on'), 'ab', 'ab nächster Woche'],
          [M('fiestas', 'holidays'), 'zu / an', 'zu Weihnachten, an Ostern']
        ] }
      ],
      examples: [['Wir treffen uns am Freitag um halb acht.', 'Nos juntamos el viernes a las siete y media.', 'We’re meeting on Friday at half past seven.'], ['Vor drei Jahren bin ich nach Leipzig gezogen.', 'Hace tres años me mudé a Leipzig.', 'I moved to Leipzig three years ago.'], ['In einer Stunde fängt der Film an.', 'En una hora empieza la película.', 'The film starts in an hour.']]
    },
    {
      id: 'g-prep-place', level: 'A2', de: 'Lokale Präpositionen: wo, wohin, woher', es: 'Preposiciones de lugar: dónde, adónde, de dónde', en: 'Prepositions of place: where, where to, where from',
      summary: M('Cada tipo de lugar tiene su tríada: in/in/aus (espacios cerrados, países con artículo), zu/bei/von (personas, instituciones), nach/in/aus (ciudades, países sin artículo), an/an/von (orillas, bordes), auf/auf/von (superficies, eventos abiertos).', 'Each type of place has its triad: in/in/aus (enclosed spaces, countries with article), zu/bei/von (people, institutions), nach/in/aus (cities, countries without article), an/an/von (shores, edges), auf/auf/von (surfaces, open events).'),
      blocks: [
        { b: 'table', h: M('Las tríadas', 'The triads'), c: [M('Lugar', 'Place'), 'Wohin?', 'Wo?', 'Woher?'], r: [
          [M('ciudad, país sin artículo', 'city, country without article'), 'nach Berlin', 'in Berlin', 'aus Berlin'], [M('edificio, país con artículo', 'building, country with article'), 'in die Schweiz · ins Kino', 'in der Schweiz · im Kino', 'aus der Schweiz · aus dem Kino'],
          [M('persona, institución', 'person, institution'), 'zum Arzt · zu Lena', 'beim Arzt · bei Lena', 'vom Arzt · von Lena'], [M('agua, borde', 'water, edge'), 'ans Meer', 'am Meer', 'vom Meer'],
          [M('superficie, evento abierto, isla', 'surface, open event, island'), 'auf den Markt · auf eine Party', 'auf dem Markt · auf der Party', 'vom Markt · von der Party'], [M('casa', 'home'), 'nach Hause', 'zu Hause', 'von zu Hause']
        ] }
      ],
      examples: [['Fahren wir am Wochenende ans Meer?', '¿Vamos al mar el fin de semana?', 'Shall we go to the sea at the weekend?'], ['Ich war gestern beim Zahnarzt.', 'Ayer estuve en el dentista.', 'I was at the dentist’s yesterday.'], ['Sie kommt gerade aus der Bibliothek.', 'Viene llegando de la biblioteca.', 'She’s just coming from the library.']]
    }
  ]);
})();
