/* U32 · Die gestern veröffentlichte Studie */
DD.lexicon.push({ unit: 'u32', words: [
  ['n', 'der Schlaf', '—', 'el sueño (dormir)', 'sleep'],
  ['n', 'der Tiefschlaf', '—', 'el sueño profundo', 'deep sleep'],
  ['n', 'die Phase', 'Phasen', 'la fase', 'phase'],
  ['n', 'die Vokabel', 'Vokabeln', 'la palabra (de vocabulario)', 'vocabulary item'],
  ['n', 'die Kontrollgruppe', 'Kontrollgruppen', 'el grupo de control', 'control group'],
  ['n', 'die Forschungsgruppe', 'Forschungsgruppen', 'el grupo de investigación', 'research group'],
  ['n', 'der Leiter', 'Leiter', 'el director; el jefe', 'head; leader (m.)'],
  ['n', 'die Leiterin', 'Leiterinnen', 'la directora; la jefa', 'head; leader (f.)'],
  ['n', 'die Fachzeitschrift', 'Fachzeitschriften', 'la revista especializada', 'specialist journal'],
  ['n', 'die Pressemitteilung', 'Pressemitteilungen', 'el comunicado de prensa', 'press release'],
  ['n', 'die Beobachtung', 'Beobachtungen', 'la observación', 'observation'],
  ['n', 'der Hinweis', 'Hinweise', 'el indicio; la indicación', 'indication; hint'],
  ['n', 'die Annahme', 'Annahmen', 'la suposición; el supuesto', 'assumption'],
  ['n', 'die Folge', 'Folgen', 'la consecuencia; el episodio', 'consequence; episode'],
  ['n', 'der Zusammenhang', 'Zusammenhänge', 'la relación; el contexto', 'connection; context'],
  ['v', 'beobachten', 'beobachtet', 'beobachtete', 'hat beobachtet', 'observar', 'observe'],
  ['v', 'festigen', 'festigt', 'festigte', 'hat gefestigt', 'consolidar', 'consolidate'],
  ['v', 'belegen', 'belegt', 'belegte', 'hat belegt', 'demostrar (con datos); inscribir (un curso)', 'prove; document; take (a course)'],
  ['v', 'nach|weisen', 'weist nach', 'wies nach', 'hat nachgewiesen', 'demostrar; comprobar', 'prove; demonstrate'],
  ['v', 'hin|deuten', 'deutet hin', 'deutete hin', 'hat hingedeutet', 'indicar; apuntar a', 'point to; indicate', { rek: 'auf + A' }],
  ['v', 'zu|nehmen', 'nimmt zu', 'nahm zu', 'hat zugenommen', 'aumentar; subir de peso', 'increase; gain weight'],
  ['v', 'beeindrucken', 'beeindruckt', 'beeindruckte', 'hat beeindruckt', 'impresionar', 'impress'],
  ['a', 'signifikant', null, null, 'significativo (estadísticamente)', 'significant'],
  ['a', 'bisherig', '—', '—', 'anterior; hasta ahora', 'previous; to date'],
  ['a', 'entsprechend', '—', '—', 'correspondiente; adecuado', 'corresponding; appropriate', { note: ['Como preposición (+ D): entsprechend den Regeln.', 'As a preposition (+ dat.): entsprechend den Regeln.'] }],
  ['a', 'vorliegend', '—', '—', 'presente (que nos ocupa)', 'present; at hand'],
  ['a', 'sogenannt', '—', '—', 'llamado; denominado', 'so-called'],
  ['adv', 'erneut', 'de nuevo', 'again; anew'],
  ['adv', 'wiederum', 'a su vez; por otra parte', 'in turn']
] });

DD.unit('u32', {
  minutes: 65,
  goals: [
    { es: 'Entender y formar atributos de participio: die schlafenden Kinder, die gestern veröffentlichte Studie.', en: 'Understand and form participial attributes: die schlafenden Kinder, die gestern veröffentlichte Studie.' },
    { es: 'Descomponer atributos extendidos en oraciones relativas (y al revés).', en: 'Unpack extended attributes into relative clauses (and back).' },
    { es: 'Reconocer zu + Partizip I (die zu lösende Aufgabe) y las construcciones participiales abreviadas.', en: 'Recognise zu + present participle (die zu lösende Aufgabe) and abbreviated participial phrases.' }
  ],
  grammar: ['g-participles', 'g-participial-attr'],
  lesson: [
    { b: 'concept', de: 'Partizip als Attribut', t: { es: 'Ambos participios se declinan como adjetivos delante del sustantivo. Partizip I (infinitivo + d) = acción simultánea, sentido activo: das schlafende Kind (el niño que duerme). Partizip II = acción terminada, normalmente sentido pasivo: die veröffentlichte Studie (el estudio que fue publicado).', en: 'Both participles decline like adjectives in front of the noun. Partizip I (infinitive + d) = simultaneous action, active sense: das schlafende Kind (the child who is sleeping). Partizip II = completed action, usually passive sense: die veröffentlichte Studie (the study that was published).' } },
    { b: 'table', h: { es: 'Partizip I y Partizip II como atributo', en: 'Present and past participle as attributes' }, c: ['', { es: 'Forma', en: 'Form' }, { es: 'Sentido', en: 'Meaning' }, { es: 'Equivale a', en: 'Equivalent to' }], r: [
      ['Partizip I', 'schlafen[d] → das schlafend[e] Kind', { es: 'activo, simultáneo', en: 'active, simultaneous' }, 'das Kind, das schläft'],
      ['Partizip I', 'steigen[d] → steigend[e] Preise', { es: 'proceso en curso', en: 'ongoing process' }, 'Preise, die steigen'],
      ['Partizip II (transitivo)', 'veröffentlich[t] → die veröffentlicht[e] Studie', { es: 'pasivo, terminado', en: 'passive, completed' }, 'die Studie, die veröffentlicht wurde'],
      ['Partizip II (con sein)', 'angekomm[en] → die angekommen[en] Gäste', { es: 'activo, terminado', en: 'active, completed' }, 'die Gäste, die angekommen sind'],
      ['zu + Partizip I', 'zu lösen[d] → die zu lösend[e] Aufgabe', { es: 'necesidad / posibilidad pasiva', en: 'passive necessity / possibility' }, 'die Aufgabe, die gelöst werden muss']
    ], n: { es: 'Partizip II de verbos intransitivos con haben no se usa como atributo (✗ das geschlafene Kind).', en: 'The Partizip II of intransitive verbs with haben is not used attributively (✗ das geschlafene Kind).' } },
    { b: 'concept', de: 'erweitertes Partizipialattribut', t: { es: 'El participio puede llevar complementos delante: todo lo que en la oración relativa va entre el relativo y el verbo se coloca entre el artículo y el participio. Es la «oración relativa comprimida» típica de textos científicos y periodísticos. Para leerla: busca el artículo, salta al participio y al sustantivo, y luego lee el medio.', en: 'The participle can take complements in front of it: everything that in the relative clause stands between the pronoun and the verb goes between the article and the participle. It is the “compressed relative clause” typical of scientific and journalistic texts. To read it: find the article, jump to the participle and the noun, then read the middle.' } },
    { b: 'slots', h: { es: 'Anatomía de un atributo extendido', en: 'Anatomy of an extended attribute' }, c: [{ es: 'Artículo', en: 'Article' }, { es: 'Complementos', en: 'Complements' }, { es: 'Participio', en: 'Participle' }, { es: 'Sustantivo', en: 'Noun' }], v: [2], r: [
      ['die', 'gestern', 'veröffentlichte', 'Studie'],
      ['die', 'von einer Leipziger Forschungsgruppe gestern', 'veröffentlichte', 'Studie'],
      ['die', 'seit Jahren stark', 'steigenden', 'Mieten'],
      ['die', 'bis Freitag', 'zu lösende', 'Aufgabe']
    ], n: { es: '= die Studie, die gestern von einer Leipziger Forschungsgruppe veröffentlicht wurde · die Mieten, die seit Jahren stark steigen · die Aufgabe, die bis Freitag gelöst werden muss.', en: '= die Studie, die gestern von einer Leipziger Forschungsgruppe veröffentlicht wurde · die Mieten, die seit Jahren stark steigen · die Aufgabe, die bis Freitag gelöst werden muss.' } },
    { b: 'pairs', h: { es: 'De la oración relativa al atributo', en: 'From relative clause to attribute' }, r: [
      ['die Kinder, [die] im Garten [spielen]', 'die im Garten [spielenden] Kinder'],
      ['der Brief, [der] gestern [geschrieben wurde]', 'der gestern [geschriebene] Brief'],
      ['die Probleme, [die] noch [gelöst werden müssen]', 'die noch [zu lösenden] Probleme'],
      ['der Zug, [der] aus Berlin [gekommen ist]', 'der aus Berlin [gekommene] Zug']
    ] },
    { b: 'concept', de: 'Partizipialkonstruktion', t: { es: 'Un participio con complementos puede formar una construcción abreviada, separada por coma, que equivale a una subordinada con el mismo sujeto: [In Leipzig angekommen], rief er sofort an (= Nachdem er in Leipzig angekommen war, …). [Laut lachend] verließ sie den Raum. Son frecuentes en narración y en estilo formal.', en: 'A participle with complements can form an abbreviated phrase, set off by a comma, equivalent to a subordinate clause with the same subject: [In Leipzig angekommen], rief er sofort an (= Nachdem er in Leipzig angekommen war, …). [Laut lachend] verließ sie den Raum. Frequent in narration and formal style.' } },
    { b: 'list', h: { es: 'Participios lexicalizados frecuentes', en: 'Frequent lexicalised participles' }, cols: 3, r: [
      ['folgend', { es: 'siguiente', en: 'following' }], ['entsprechend', { es: 'correspondiente', en: 'corresponding' }], ['vorliegend', { es: 'presente', en: 'present' }],
      ['bekannt', { es: 'conocido', en: 'known' }], ['sogenannt', { es: 'llamado', en: 'so-called' }], ['zunehmend', { es: 'creciente', en: 'increasing' }],
      ['überraschend', { es: 'sorprendente', en: 'surprising' }], ['beeindruckend', { es: 'impresionante', en: 'impressive' }], ['entscheidend', { es: 'decisivo', en: 'decisive' }]
    ] },
    { b: 'note', tone: 'l1', t: { es: 'El español pone estos complementos después del sustantivo («el estudio publicado ayer por un grupo de Leipzig»); el alemán los pone antes. Lee de fuera hacia dentro: artículo → sustantivo → participio → complementos.', en: 'English puts these complements after the noun (“the study published yesterday by a Leipzig group”); German puts them before. Read outside-in: article → noun → participle → complements.' } }
  ],
  chunks: [
    ['die gestern veröffentlichte Studie', 'el estudio publicado ayer', 'the study published yesterday'],
    ['die ständig steigenden Mieten', 'los arriendos que no paran de subir', 'the constantly rising rents'],
    ['die noch zu lösenden Probleme', 'los problemas aún por resolver', 'the problems still to be solved'],
    ['In Leipzig angekommen, rief er sofort an.', 'Al llegar a Leipzig, llamó de inmediato.', 'Having arrived in Leipzig, he called at once.'],
    ['im folgenden Abschnitt', 'en la siguiente sección', 'in the following section']
  ],
  errors: [
    ['die gestern veröffentlicht Studie', 'die gestern veröffentlichte Studie', { es: 'El participio atributo se declina.', en: 'The attributive participle declines.' }],
    ['das schlafene Kind', 'das schlafende Kind', { es: 'Partizip I = infinitivo + d: schlafend.', en: 'Partizip I = infinitive + d: schlafend.' }],
    ['die Studie gestern veröffentlichte', 'die gestern veröffentlichte Studie', { es: 'Los complementos van entre artículo y participio.', en: 'Complements go between article and participle.' }],
    ['die zu lösen Aufgabe', 'die zu lösende Aufgabe', { es: 'zu + Partizip I declinado.', en: 'zu + declined present participle.' }],
    ['das geschlafene Kind', 'das Kind, das geschlafen hat', { es: 'Intransitivo con haben: no hay atributo con Partizip II.', en: 'Intransitive with haben: no Partizip II attribute.' }]
  ],
  examples: [
    ['Die von der Stadt geplante Brücke wird erst 2030 fertig.', 'El puente planificado por la ciudad recién estará listo en 2030.', 'The bridge planned by the city will only be finished in 2030.'],
    ['Wegen der stark gestiegenen Preise kaufen viele weniger ein.', 'Por los precios muy aumentados, muchos compran menos.', 'Because of the sharply increased prices many people buy less.'],
    ['Die im Text genannten Zahlen sind gerundet.', 'Las cifras mencionadas en el texto están redondeadas.', 'The figures mentioned in the text are rounded.'],
    ['Das ist eine nicht zu unterschätzende Gefahr.', 'Es un peligro que no hay que subestimar.', 'That is a danger not to be underestimated.'],
    ['Die Ergebnisse werden im folgenden Abschnitt beschrieben.', 'Los resultados se describen en la siguiente sección.', 'The results are described in the following section.'],
    ['Müde von der Reise, ging sie früh ins Bett.', 'Cansada del viaje, se acostó temprano.', 'Tired from the journey, she went to bed early.']
  ],
  reading: 'r-u32',
  exercises: [
    { t: 'choice', ph: 1, q: 'das ___ Kind (das Kind, das schläft)', o: ['geschlafene', 'schlafende', 'schlafen'], a: 1, x: { es: 'Partizip I: activo, simultáneo.', en: 'Partizip I: active, simultaneous.' } },
    { t: 'choice', ph: 1, q: 'die gestern ___ Studie (die Studie, die gestern veröffentlicht wurde)', o: ['veröffentlichende', 'veröffentlichte', 'veröffentlichen'], a: 1, x: { es: 'Partizip II: pasivo, terminado.', en: 'Partizip II: passive, completed.' } },
    { t: 'choice', ph: 1, q: '«die zu lösende Aufgabe» =', o: ['die Aufgabe, die gelöst wurde', 'die Aufgabe, die gelöst werden muss', 'die Aufgabe, die löst'], a: 1, x: { es: 'zu + Partizip I = necesidad pasiva.', en: 'zu + Partizip I = passive necessity.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona atributo y relativa.', en: 'Match attribute and relative clause.' }, pairs: [['die steigenden Preise', 'die Preise, die steigen'], ['die gestiegenen Preise', 'die Preise, die gestiegen sind'], ['der geschriebene Brief', 'der Brief, der geschrieben wurde'], ['die zu schreibende Arbeit', 'die Arbeit, die geschrieben werden muss']], x: { es: 'I = en curso; II = terminado; zu + I = por hacer.', en: 'I = ongoing; II = completed; zu + I = to be done.' } },
    { t: 'rf', ph: 1, q: '«die angekommenen Gäste» = die Gäste, die angekommen sind.', a: true, x: { es: 'Verbo con sein: Partizip II activo.', en: 'Verb with sein: active Partizip II.' } },
    { t: 'choice', ph: 1, q: 'In der ___ Woche beginnt der Kurs.', o: ['folgende', 'folgenden', 'gefolgten'], a: 1, x: { es: 'in der (dativo f) → -en.', en: 'in der (dative f.) → -en.' } },
    { t: 'gap', ph: 2, q: 'die im Garten spiel___ Kinder', a: 'enden', alt: ['-enden'], x: { es: 'Partizip I + -en (plural con artículo).', en: 'Partizip I + -en (plural with article).' } },
    { t: 'gap', ph: 2, q: 'der gestern ___ Brief (schreiben)', a: 'geschriebene', x: { es: 'Partizip II + -e.', en: 'Partizip II + -e.' } },
    { t: 'gap', ph: 2, q: 'die noch zu ___ Probleme (lösen)', a: 'lösenden', x: { es: 'zu + Partizip I + -en.', en: 'zu + Partizip I + -en.' } },
    { t: 'gap', ph: 2, q: 'die stark ___ Mieten (steigen, en curso)', a: 'steigenden', x: { es: 'Proceso en curso: Partizip I.', en: 'Ongoing process: Partizip I.' } },
    { t: 'gap', ph: 2, q: 'In Leipzig ___, rief er sofort an. (ankommen)', a: 'angekommen', x: { es: 'Construcción participial con Partizip II.', en: 'Participial phrase with Partizip II.' } },
    { t: 'order', ph: 2, w: ['die', 'von der Stadt', 'geplante', 'Brücke'], a: 'die von der Stadt geplante Brücke', x: { es: 'Artículo – complementos – participio – sustantivo.', en: 'Article – complements – participle – noun.' } },
    { t: 'transform', ph: 3, p: { es: 'Convierte en atributo de participio.', en: 'Turn into a participial attribute.' }, q: 'die Zahlen, die im Text genannt werden', a: 'die im Text genannten Zahlen', x: { es: 'Partizip II pasivo + -en.', en: 'Passive Partizip II + -en.' } },
    { t: 'transform', ph: 3, p: { es: 'Convierte en oración relativa.', en: 'Turn into a relative clause.' }, q: 'die seit Jahren steigenden Preise', a: 'die Preise, die seit Jahren steigen', x: { es: 'Partizip I → presente activo.', en: 'Partizip I → active present.' } },
    { t: 'transform', ph: 3, p: { es: 'Convierte en oración relativa con modal.', en: 'Turn into a relative clause with a modal.' }, q: 'die bis Freitag zu lösende Aufgabe', a: 'die Aufgabe, die bis Freitag gelöst werden muss', x: { es: 'zu + Partizip I → muss … werden.', en: 'zu + Partizip I → muss … werden.' } },
    { t: 'write', ph: 3, s: { es: 'el estudio publicado ayer', en: 'the study published yesterday' }, a: 'die gestern veröffentlichte Studie', x: { es: 'Complemento antes del participio.', en: 'Complement before the participle.' } },
    { t: 'write', ph: 3, s: { es: 'los niños que duermen', en: 'the sleeping children' }, a: 'die schlafenden Kinder', x: { es: 'Partizip I + -en.', en: 'Partizip I + -en.' } },
    { t: 'listen', ph: 3, a: 'Die Ergebnisse werden im folgenden Abschnitt beschrieben.', x: { es: 'folgend = participio lexicalizado.', en: 'folgend = lexicalised participle.' } }
  ],
  summary: [
    { es: 'Partizip I (inf. + d) = activo y simultáneo: die lesenden Studenten. Partizip II = terminado (pasivo con transitivos): das gelesene Buch.', en: 'Partizip I (inf. + d) = active, simultaneous: die lesenden Studenten. Partizip II = completed (passive with transitives): das gelesene Buch.' },
    { es: 'Atributo extendido: artículo + complementos + participio declinado + sustantivo.', en: 'Extended attribute: article + complements + declined participle + noun.' },
    { es: 'zu + Partizip I = lo que debe / puede hacerse: die zu lösende Aufgabe.', en: 'zu + Partizip I = what must / can be done: die zu lösende Aufgabe.' },
    { es: 'Para leer: artículo → sustantivo → participio → complementos; para escribir con claridad: relativa.', en: 'To read: article → noun → participle → complements; to write clearly: relative clause.' }
  ]
});

DD.readings.push({
  id: 'r-u32', unit: 'u32', level: 'B2', kind: 'unit',
  de: 'Wer schläft, lernt', es: 'Quien duerme, aprende', en: 'Those who sleep, learn',
  genre: { es: 'Comunicado de prensa científico · serie Leipzig 32', en: 'Science press release · Leipzig series 32' },
  intro: { es: 'Un comunicado de prensa (ficticio) de la Universidad de Leipzig presenta un estudio sobre sueño y memoria. El efecto descrito está bien documentado en la investigación; el estudio concreto es inventado para esta unidad.', en: 'A (fictional) Leipzig University press release presents a study on sleep and memory. The effect described is well documented in research; this particular study is invented for this unit.' },
  focus: { es: 'Atributos de participio extendidos · zu + Partizip I · participios lexicalizados (folgend, entsprechend, sogenannt).', en: 'Extended participial attributes · zu + Partizip I · lexicalised participles (folgend, entsprechend, sogenannt).' },
  source: { type: 'original' },
  p: [
    ['Pressemitteilung. Die gestern in einer internationalen Fachzeitschrift veröffentlichte Studie einer Leipziger Forschungsgruppe bestätigt eine seit Langem bekannte Beobachtung: Wer nach dem Lernen schläft, behält mehr. An der im letzten Winter durchgeführten Untersuchung nahmen 120 Studierende teil.', 'Comunicado de prensa. El estudio de un grupo de investigación de Leipzig, publicado ayer en una revista especializada internacional, confirma una observación conocida desde hace tiempo: quien duerme después de estudiar retiene más. En la investigación, realizada el invierno pasado, participaron 120 estudiantes.', 'Press release. The study by a Leipzig research group, published yesterday in an international specialist journal, confirms a long-known observation: those who sleep after learning retain more. 120 students took part in the investigation, carried out last winter.'],
    ['Alle Teilnehmenden lernten am Abend vierzig Wortpaare in einer ihnen unbekannten Sprache. Die eine Hälfte schlief danach acht Stunden im Labor; die als Kontrollgruppe dienende andere Hälfte blieb die ganze Nacht wach. Zwei Tage später, nach einer für beide Gruppen gleich langen Erholungsphase, wurden alle erneut getestet.', 'Todos los participantes aprendieron en la noche cuarenta pares de palabras en una lengua que no conocían. Una mitad durmió luego ocho horas en el laboratorio; la otra mitad, que servía como grupo de control, se quedó despierta toda la noche. Dos días después, tras una fase de recuperación igual de larga para ambos grupos, todos fueron evaluados de nuevo.', 'All participants learned forty word pairs in a language unknown to them in the evening. One half then slept for eight hours in the lab; the other half, serving as a control group, stayed awake all night. Two days later, after a recovery phase of equal length for both groups, everyone was tested again.'],
    ['Das Ergebnis war deutlich: Die nach dem Lernen schlafenden Personen erinnerten sich an signifikant mehr Wörter als die wach gebliebenen. Besonders wichtig scheint der sogenannte Tiefschlaf zu sein. In dieser Phase werden die am Tag gesammelten Informationen offenbar erneut aktiviert und gefestigt. Die Messungen zeigten außerdem einen Zusammenhang zwischen der Dauer des Tiefschlafs und der Zahl der behaltenen Wörter.', 'El resultado fue claro: las personas que durmieron después de estudiar recordaron significativamente más palabras que las que se mantuvieron despiertas. El llamado sueño profundo parece ser especialmente importante. En esta fase, la información reunida durante el día aparentemente se reactiva y se consolida. Las mediciones mostraron además una relación entre la duración del sueño profundo y el número de palabras retenidas.', 'The result was clear: the people who slept after learning remembered significantly more words than those who stayed awake. So-called deep sleep seems to be especially important. In this phase, information gathered during the day is apparently reactivated and consolidated. The measurements also showed a relationship between the duration of deep sleep and the number of words retained.'],
    ['„Die vorliegenden Ergebnisse passen gut zu den bisherigen Studien“, sagt die Leiterin der Forschungsgruppe. „Sie sind aber kein Grund, vor einer Prüfung nur zu schlafen.“ Für alle Lernenden ergebe sich daraus ein einfacher, nicht zu unterschätzender Rat: kurz vor dem Schlafen wiederholen, genug schlafen und am folgenden Morgen das Gelernte noch einmal abfragen. Die noch offenen Fragen, etwa zur Rolle der Träume, sollen in einer bereits geplanten zweiten Studie untersucht werden.', '«Los presentes resultados encajan bien con los estudios anteriores», dice la directora del grupo de investigación. «Pero no son razón para solo dormir antes de un examen.» De ahí resulta para todos los que aprenden un consejo simple que no hay que subestimar: repasar poco antes de dormir, dormir lo suficiente y a la mañana siguiente volver a evaluarse en lo aprendido. Las preguntas aún abiertas, por ejemplo sobre el papel de los sueños, se investigarán en un segundo estudio ya planificado.', '“The present results fit well with previous studies,” says the head of the research group. “But they are no reason to only sleep before an exam.” From this follows a simple piece of advice for all learners, not to be underestimated: review shortly before sleeping, sleep enough, and test yourself on what you learned again the following morning. The questions still open, such as the role of dreams, are to be investigated in a second study that is already planned.']
  ],
  gloss: [
    ['Pressemitteilung', { es: 'comunicado de prensa', en: 'press release' }],
    ['internationalen', { es: 'internacional', en: 'international' }],
    ['Leipziger', { es: 'de Leipzig (adjetivo invariable)', en: 'Leipzig (invariable adjective)' }],
    ['Langem', { es: 'seit Langem = desde hace tiempo', en: 'seit Langem = for a long time' }],
    ['behält', { es: 'retiene (behalten)', en: 'retains (behalten)' }],
    ['Studierende', { es: 'estudiantes (los que estudian)', en: 'students' }],
    ['Teilnehmenden', { es: 'participantes (los que participan)', en: 'participants' }],
    ['Wortpaare', { es: 'pares de palabras', en: 'word pairs' }],
    ['unbekannten', { es: 'desconocida', en: 'unknown' }],
    ['dienende', { es: 'que servía (dienen)', en: 'serving (dienen)' }],
    ['Erholungsphase', { es: 'fase de recuperación', en: 'recovery phase' }],
    ['gebliebenen', { es: 'que se quedaron (bleiben)', en: 'who stayed (bleiben)' }],
    ['scheint', { es: 'parece (scheinen + zu)', en: 'seems (scheinen + zu)' }],
    ['offenbar', { es: 'aparentemente', en: 'apparently' }],
    ['aktiviert', { es: 'activada (aktivieren)', en: 'activated (aktivieren)' }],
    ['Dauer', { es: 'duración', en: 'duration' }],
    ['behaltenen', { es: 'retenidas (behalten)', en: 'retained (behalten)' }],
    ['Lernenden', { es: 'los que aprenden', en: 'learners' }],
    ['ergebe', { es: 'resulta (sich ergeben, K1)', en: 'follows (sich ergeben, K1)' }],
    ['daraus', { es: 'de ello', en: 'from this' }],
    ['unterschätzender', { es: 'que hay que subestimar (unterschätzen)', en: 'to be underestimated (unterschätzen)' }],
    ['Rat', { es: 'consejo', en: 'advice' }],
    ['Gelernte', { es: 'lo aprendido', en: 'what was learned' }],
    ['offenen', { es: 'abiertas', en: 'open' }],
    ['Träume', { es: 'sueños (der Traum)', en: 'dreams' }],
  ],
  q: [
    { t: 'choice', q: 'Was bestätigt die Studie?', o: ['Wer nach dem Lernen schläft, behält mehr.', 'Wer nachts lernt, behält mehr.', 'Schlaf ist für das Gedächtnis unwichtig.'], a: 0, x: { es: 'Dormir después de aprender ayuda a retener.', en: 'Sleeping after learning helps retention.' } },
    { t: 'rf', q: 'Die Kontrollgruppe hat acht Stunden geschlafen.', a: false, x: { es: 'El grupo de control se quedó despierto.', en: 'The control group stayed awake.' } },
    { t: 'choice', q: 'Welche Schlafphase scheint besonders wichtig zu sein?', o: ['der Traumschlaf', 'der Tiefschlaf', 'das Einschlafen'], a: 1, x: { es: 'El sueño profundo.', en: 'Deep sleep.' } },
    { t: 'choice', q: 'Was rät die Leiterin?', o: ['vor einer Prüfung nur schlafen', 'vor dem Schlafen wiederholen und morgens abfragen', 'nachts lernen'], a: 1, x: { es: 'Repasar antes de dormir y evaluarse al despertar.', en: 'Review before sleep and self-test in the morning.' } },
    { t: 'rf', q: 'Die Rolle der Träume ist schon geklärt.', a: false, x: { es: 'Es una de las preguntas aún abiertas.', en: 'It is one of the questions still open.' } }
  ]
});
