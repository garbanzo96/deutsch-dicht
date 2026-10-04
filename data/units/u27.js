/* U27 · Trotz des Regens */
DD.lexicon.push({ unit: 'u27', words: [
  ['prep', 'aufgrund', 'debido a', 'due to', { case: 'G' }],
  ['prep', 'infolge', 'a consecuencia de', 'as a result of', { case: 'G' }],
  ['prep', 'anstelle', 'en lugar de', 'in place of', { case: 'G' }],
  ['prep', 'angesichts', 'ante; en vista de', 'in view of', { case: 'G' }],
  ['prep', 'hinsichtlich', 'con respecto a', 'with regard to', { case: 'G' }],
  ['prep', 'laut', 'según', 'according to', { case: 'GD', homonym: 1, id: 'prep-laut' }],
  ['prep', 'mithilfe', 'con ayuda de', 'with the help of', { case: 'G' }],
  ['prep', 'zugunsten', 'a favor de', 'in favour of', { case: 'G' }],
  ['prep', 'oberhalb', 'por encima de', 'above', { case: 'G' }],
  ['prep', 'unterhalb', 'por debajo de', 'below', { case: 'G' }],
  ['n', 'der Junge', 'Jungen', 'el muchacho', 'boy', { n: 1 }],
  ['n', 'der Präsident', 'Präsidenten', 'el presidente', 'president', { n: 1 }],
  ['n', 'die Präsidentin', 'Präsidentinnen', 'la presidenta', 'president (f.)'],
  ['n', 'der Journalist', 'Journalisten', 'el periodista', 'journalist (m.)', { n: 1 }],
  ['n', 'die Journalistin', 'Journalistinnen', 'la periodista', 'journalist (f.)'],
  ['n', 'der Polizist', 'Polizisten', 'el policía', 'police officer (m.)', { n: 1 }],
  ['n', 'der Experte', 'Experten', 'el experto', 'expert (m.)', { n: 1 }],
  ['n', 'die Expertin', 'Expertinnen', 'la experta', 'expert (f.)'],
  ['n', 'der Bauer', 'Bauern', 'el campesino; el agricultor', 'farmer', { n: 1 }],
  ['n', 'der Glaube', '—', 'la fe; la creencia', 'belief; faith', { n: 1, gen: 'des Glaubens' }],
  ['n', 'das Unwetter', 'Unwetter', 'el temporal', 'storm; severe weather'],
  ['n', 'der Sturm', 'Stürme', 'la tormenta (de viento)', 'storm; gale'],
  ['n', 'das Gewitter', 'Gewitter', 'la tormenta eléctrica', 'thunderstorm'],
  ['n', 'das Hochwasser', 'Hochwasser', 'la crecida; la inundación', 'flood'],
  ['n', 'die Feuerwehr', 'Feuerwehren', 'los bomberos', 'fire brigade'],
  ['n', 'der Einsatz', 'Einsätze', 'la intervención; el uso', 'deployment; operation'],
  ['n', 'die Warnung', 'Warnungen', 'la advertencia; la alerta', 'warning'],
  ['n', 'der Bürgermeister', 'Bürgermeister', 'el alcalde', 'mayor'],
  ['n', 'die Bürgermeisterin', 'Bürgermeisterinnen', 'la alcaldesa', 'mayor (f.)'],
  ['n', 'das Stadtfest', 'Stadtfeste', 'la fiesta de la ciudad', 'city festival'],
  ['n', 'der Besucher', 'Besucher', 'el visitante', 'visitor'],
  ['n', 'der Helfer', 'Helfer', 'el ayudante; el voluntario', 'helper; volunteer'],
  ['n', 'das Programm', 'Programme', 'el programa', 'programme'],
  ['n', 'die Veranstaltung', 'Veranstaltungen', 'el evento', 'event'],
  ['n', 'der Verkehr', '—', 'el tráfico', 'traffic'],
  ['n', 'die Verspätung', 'Verspätungen', 'el retraso', 'delay'],
  ['n', 'der Schutz', '—', 'la protección', 'protection'],
  ['n', 'die Bevölkerung', 'Bevölkerungen', 'la población', 'population'],
  ['n', 'der Klimawandel', '—', 'el cambio climático', 'climate change'],
  ['v', 'warnen', 'warnt', 'warnte', 'hat gewarnt', 'advertir; alertar', 'warn', { rek: 'vor + D' }],
  ['v', 'zerstören', 'zerstört', 'zerstörte', 'hat zerstört', 'destruir', 'destroy'],
  ['v', 'beschädigen', 'beschädigt', 'beschädigte', 'hat beschädigt', 'dañar', 'damage'],
  ['v', 'sperren', 'sperrt', 'sperrte', 'hat gesperrt', 'cerrar (el paso); bloquear', 'close off; block'],
  ['v', 'fort|setzen', 'setzt fort', 'setzte fort', 'hat fortgesetzt', 'continuar; proseguir', 'continue'],
  ['a', 'heftig', null, null, 'violento; intenso', 'violent; heavy'],
  ['a', 'zahlreich', null, null, 'numeroso', 'numerous'],
  ['pron', 'mehrere', 'varios', 'several', { decl: 'der', stem: 'mehrer' }],
  ['a', 'örtlich', null, null, 'local', 'local'],
  ['a', 'überflutet', '—', '—', 'inundado', 'flooded'],
  ['adv', 'glücklicherweise', 'afortunadamente', 'fortunately']
] });

DD.unit('u27', {
  minutes: 60,
  goals: [
    { es: 'Usar las preposiciones con genitivo del registro escrito (aufgrund, infolge, angesichts, laut…).', en: 'Use written-register genitive prepositions (aufgrund, infolge, angesichts, laut…).' },
    { es: 'Dominar la declinación n (des Studenten, dem Kollegen) y los mixtos (des Namens).', en: 'Master the n-declension (des Studenten, dem Kollegen) and the mixed nouns (des Namens).' },
    { es: 'Declinar el adjetivo sin artículo (fuerte): heißer Kaffee, mit großem Interesse, trotz starken Regens.', en: 'Decline adjectives without an article (strong): heißer Kaffee, mit großem Interesse, trotz starken Regens.' }
  ],
  grammar: ['g-genitive', 'g-noun-decl', 'g-adj-decl', 'g-prep-gen'],
  lesson: [
    { b: 'concept', de: 'n-Deklination', t: { es: 'Un grupo de masculinos toma -(e)n en todos los casos salvo el nominativo singular: der Student, den/dem/des Student[en]. Son casi todos seres vivos: masculinos en -e (Junge, Kollege, Experte) y préstamos en -ent, -ant, -ist, -oge, -at (Präsident, Journalist, Psychologe, Diplomat), más Herr, Mensch, Nachbar, Bauer.', en: 'A group of masculine nouns takes -(e)n in every case except the nominative singular: der Student, den/dem/des Studenten. Almost all denote living beings: masculines in -e (Junge, Kollege, Experte) and loans in -ent, -ant, -ist, -oge, -at (Präsident, Journalist, Psychologe, Diplomat), plus Herr, Mensch, Nachbar, Bauer.' } },
    { b: 'table', h: { es: 'Declinación n y mixta', en: 'n-declension and mixed nouns' }, c: ['', 'der Student', 'der Kollege', 'der Herr', 'der Name · mixto'], r: [
      ['Nominativ', 'der Student', 'der Kollege', 'der Herr', 'der Name'],
      ['Akkusativ', 'den Student[en]', 'den Kollege[n]', 'den Herr[n]', 'den Name[n]'],
      ['Dativ', 'dem Student[en]', 'dem Kollege[n]', 'dem Herr[n]', 'dem Name[n]'],
      ['Genitiv', 'des Student[en]', 'des Kollege[n]', 'des Herr[n]', 'des Name[ns]'],
      ['Plural', 'die Student[en]', 'die Kollege[n]', 'die Herr[en]', 'die Name[n]']
    ], n: { es: 'Mixtos (-ns en genitivo): der Name, der Gedanke, der Glaube, der Buchstabe, der Wille, der Friede(n). Neutro irregular: das Herz, des Herzens, dem Herzen.', en: 'Mixed (-ns in the genitive): der Name, der Gedanke, der Glaube, der Buchstabe, der Wille, der Friede(n). Irregular neuter: das Herz, des Herzens, dem Herzen.' } },
    { b: 'concept', de: 'starke Adjektivdeklination', t: { es: 'Sin artículo, el adjetivo lleva la «señal» del artículo definido: heißer Kaffee (der), frische Milch (die), kaltes Wasser (das), mit großem Interesse (dem). Única excepción: genitivo masculino/neutro -en, porque el sustantivo ya muestra -(e)s: trotz starken Regens.', en: 'Without an article the adjective carries the definite article’s “signal”: heißer Kaffee (der), frische Milch (die), kaltes Wasser (das), mit großem Interesse (dem). Only exception: masculine/neuter genitive -en, because the noun already shows -(e)s: trotz starken Regens.' } },
    { b: 'table', h: { es: 'Adjetivo sin artículo (fuerte)', en: 'Adjective without article (strong)' }, c: ['', { es: 'masculino', en: 'masculine' }, { es: 'femenino', en: 'feminine' }, { es: 'neutro', en: 'neuter' }, 'Plural'], r: [
      ['Nominativ', 'heiß[er] Kaffee', 'frisch[e] Milch', 'kalt[es] Wasser', 'neu[e] Ideen'],
      ['Akkusativ', 'heiß[en] Kaffee', 'frisch[e] Milch', 'kalt[es] Wasser', 'neu[e] Ideen'],
      ['Dativ', 'heiß[em] Kaffee', 'frisch[er] Milch', 'kalt[em] Wasser', 'neu[en] Ideen'],
      ['Genitiv', 'heiß[en] Kaffees', 'frisch[er] Milch', 'kalt[en] Wassers', 'neu[er] Ideen']
    ], n: { es: 'También tras números, viele, wenige, einige, mehrere y tras posesivo + número: zwei alte Freunde, viele neue Studenten, mit einigen guten Ideen.', en: 'Also after numbers, viele, wenige, einige, mehrere: zwei alte Freunde, viele neue Studenten, mit einigen guten Ideen.' } },
    { b: 'table', h: { es: 'Las tres declinaciones en una mirada (nominativo masc. · neutro)', en: 'The three declensions at a glance (nom. masc. · neuter)' }, c: [{ es: 'Tipo', en: 'Type' }, { es: 'Cuándo', en: 'When' }, { es: 'masculino', en: 'masculine' }, { es: 'neutro', en: 'neuter' }], r: [
      [{ es: 'débil', en: 'weak' }, 'der, dieser, jeder, welcher, alle', 'der neu[e] Plan', 'das neu[e] Projekt'],
      [{ es: 'mixta', en: 'mixed' }, 'ein, kein, mein…', 'ein neu[er] Plan', 'ein neu[es] Projekt'],
      [{ es: 'fuerte', en: 'strong' }, { es: 'sin artículo; tras números, viele, einige', en: 'no article; after numbers, viele, einige' }, 'neu[er] Plan', 'neu[es] Projekt']
    ] },
    { b: 'list', h: { es: 'Preposiciones con genitivo del registro escrito', en: 'Written-register genitive prepositions' }, cols: 2, r: [
      ['[aufgrund] des Wetters', { es: 'debido al tiempo', en: 'due to the weather' }], ['[infolge] des Sturms', { es: 'a consecuencia de la tormenta', en: 'as a result of the storm' }],
      ['[anstelle] des Konzerts', { es: 'en lugar del concierto', en: 'instead of the concert' }], ['[angesichts] der Lage', { es: 'ante la situación', en: 'in view of the situation' }],
      ['[hinsichtlich] der Kosten', { es: 'con respecto a los costos', en: 'regarding the costs' }], ['[laut] des Berichts / laut dem Bericht', { es: 'según el informe', en: 'according to the report' }],
      ['[mithilfe] der Feuerwehr', { es: 'con ayuda de los bomberos', en: 'with the help of the fire brigade' }], ['[oberhalb] / [unterhalb] der Brücke', { es: 'por encima / debajo del puente', en: 'above / below the bridge' }]
    ], n: { es: 'Son típicas de noticias, informes y textos académicos. En el habla se prefieren construcciones con wegen + dativo, statt, mit Hilfe von…', en: 'Typical of news, reports and academic texts. Speech prefers wegen + dative, statt, mit Hilfe von…' } },
    { b: 'note', tone: 'l1', t: { es: 'Truco para el adjetivo fuerte: imagina el artículo definido y pon su última letra en el adjetivo (der → -er, dem → -em, das → -es). La excepción es el genitivo masc./neutro: -en.', en: 'Strong-adjective trick: imagine the definite article and put its last letter on the adjective (der → -er, dem → -em, das → -es). The exception is masc./neuter genitive: -en.' } }
  ],
  chunks: [
    ['Aufgrund des starken Regens wurde das Konzert abgesagt.', 'Debido a la fuerte lluvia se canceló el concierto.', 'Due to the heavy rain the concert was cancelled.'],
    ['Laut Wetterbericht wird es morgen besser.', 'Según el pronóstico, mañana mejora.', 'According to the forecast it will be better tomorrow.'],
    ['Ich trinke gern heißen Tee mit frischer Milch.', 'Me gusta tomar té caliente con leche fresca.', 'I like drinking hot tea with fresh milk.'],
    ['Wir haben mit großem Interesse zugehört.', 'Escuchamos con gran interés.', 'We listened with great interest.'],
    ['Kennst du den Namen des neuen Kollegen?', '¿Sabes el nombre del nuevo colega?', 'Do you know the new colleague’s name?']
  ],
  errors: [
    ['Ich spreche mit dem Student.', 'Ich spreche mit dem Studenten.', { es: 'Declinación n: -en fuera del nominativo.', en: 'n-declension: -en outside the nominative.' }],
    ['heiße Kaffee', 'heißer Kaffee', { es: 'Sin artículo, nominativo m: -er.', en: 'No article, nom. masc.: -er.' }],
    ['mit großen Interesse', 'mit großem Interesse', { es: 'Sin artículo, dativo n: -em.', en: 'No article, dat. neut.: -em.' }],
    ['trotz starkes Regens', 'trotz starken Regens', { es: 'Genitivo m sin artículo: -en.', en: 'Masc. genitive without article: -en.' }],
    ['der Name des Herr', 'der Name des Herrn', { es: 'Herr: des Herrn.', en: 'Herr: des Herrn.' }]
  ],
  examples: [
    ['Infolge des Sturms wurden mehrere Straßen gesperrt.', 'A consecuencia de la tormenta se cerraron varias calles.', 'As a result of the storm, several streets were closed.'],
    ['Der Bürgermeister dankte den Helfern der Feuerwehr.', 'El alcalde agradeció a los voluntarios de los bomberos.', 'The mayor thanked the fire brigade’s helpers.'],
    ['Der Journalist fragte den Experten nach den Ursachen.', 'El periodista le preguntó al experto por las causas.', 'The journalist asked the expert about the causes.'],
    ['Bei starkem Wind fahren keine Straßenbahnen.', 'Con viento fuerte no circulan tranvías.', 'In strong wind no trams run.'],
    ['Zahlreiche Besucher kamen trotz schlechten Wetters.', 'Numerosos visitantes vinieron a pesar del mal tiempo.', 'Numerous visitors came despite bad weather.'],
    ['Angesichts des Klimawandels werden solche Unwetter häufiger.', 'Ante el cambio climático, estos temporales se vuelven más frecuentes.', 'In view of climate change, such storms are becoming more frequent.']
  ],
  reading: 'r-u27',
  exercises: [
    { t: 'choice', ph: 1, q: 'Ich spreche mit dem ___.', o: ['Student', 'Studenten', 'Studentes'], a: 1, x: { es: 'Declinación n: dem Studenten.', en: 'n-declension: dem Studenten.' } },
    { t: 'choice', ph: 1, q: 'Ich trinke gern heiß___ Kaffee.', o: ['-e', '-en', '-er'], a: 1, x: { es: 'Acusativo m sin artículo: -en.', en: 'Acc. masc. without article: -en.' } },
    { t: 'choice', ph: 1, q: 'Das ist kalt___ Wasser.', o: ['-e', '-es', '-em'], a: 1, x: { es: 'Nominativo n sin artículo: -es (como das).', en: 'Nom. neuter without article: -es (like das).' } },
    { t: 'choice', ph: 1, q: '___ des Wetters wurde das Fest abgesagt.', o: ['Aufgrund', 'Mit', 'Seit'], a: 0, x: { es: 'Causa con genitivo: aufgrund.', en: 'Cause with genitive: aufgrund.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona preposición y significado.', en: 'Match preposition and meaning.' }, pairs: [['infolge', { es: 'a consecuencia de', en: 'as a result of' }], ['anstelle', { es: 'en lugar de', en: 'instead of' }], ['angesichts', { es: 'ante; en vista de', en: 'in view of' }], ['laut', { es: 'según', en: 'according to' }]], x: { es: 'Registro escrito + genitivo.', en: 'Written register + genitive.' } },
    { t: 'choice', ph: 1, q: 'der Name des ___', o: ['Herr', 'Herrn', 'Herren'], a: 1, x: { es: 'Singular: des Herrn.', en: 'Singular: des Herrn.' } },
    { t: 'gap', ph: 2, q: 'Der Journalist fragt den ___ (Experte).', a: 'Experten', x: { es: 'Declinación n: den Experten.', en: 'n-declension: den Experten.' } },
    { t: 'gap', ph: 2, q: 'Wir haben mit groß___ Interesse zugehört.', a: 'em', alt: ['-em'], x: { es: 'Dativo n sin artículo: -em.', en: 'Dat. neut. without article: -em.' } },
    { t: 'gap', ph: 2, q: 'Trotz stark___ Regens kamen viele Besucher.', a: 'en', alt: ['-en'], x: { es: 'Genitivo m sin artículo: -en.', en: 'Masc. genitive without article: -en.' } },
    { t: 'gap', ph: 2, q: 'Ich möchte frisch___ Milch.', a: 'e', alt: ['-e'], x: { es: 'Acusativo f: -e.', en: 'Acc. fem.: -e.' } },
    { t: 'gap', ph: 2, q: 'Zwei alt___ Freunde haben mich besucht.', a: 'e', alt: ['-e'], x: { es: 'Tras número: fuerte, plural -e.', en: 'After a number: strong, plural -e.' } },
    { t: 'gap', ph: 2, q: 'Kennst du den Namen des neuen ___? (Kollege)', a: 'Kollegen', x: { es: 'Genitivo n-declinación: des Kollegen.', en: 'Genitive n-declension: des Kollegen.' } },
    { t: 'gap', ph: 2, q: '___ des Sturms wurden mehrere Bäume zerstört.', a: 'Infolge', alt: ['Aufgrund', 'Wegen'], x: { es: 'Consecuencia: infolge.', en: 'Result: infolge.' } },
    { t: 'order', ph: 2, w: ['wurde', 'Aufgrund des Regens', 'das Konzert', 'abgesagt'], a: 'Aufgrund des Regens wurde das Konzert abgesagt.', x: { es: 'Preposición con genitivo en el Vorfeld + pasiva.', en: 'Genitive prepositional phrase in the Vorfeld + passive.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con «aufgrund».', en: 'Rewrite with “aufgrund”.' }, q: 'Weil das Wetter schlecht war, wurde das Fest abgesagt.', a: 'Aufgrund des schlechten Wetters wurde das Fest abgesagt.', alt: ['Wegen des schlechten Wetters wurde das Fest abgesagt.'], x: { es: 'Subordinada → sintagma nominal en genitivo.', en: 'Clause → genitive noun phrase.' } },
    { t: 'write', ph: 3, s: { es: 'Según el informe, el puente está dañado.', en: 'According to the report, the bridge is damaged.' }, a: 'Laut Bericht ist die Brücke beschädigt.', alt: ['Laut dem Bericht ist die Brücke beschädigt.', 'Laut des Berichts ist die Brücke beschädigt.'], x: { es: 'laut + dativo/genitivo; pasiva de estado.', en: 'laut + dative/genitive; state passive.' } },
    { t: 'write', ph: 3, s: { es: 'Tomo café caliente con leche fría.', en: 'I drink hot coffee with cold milk.' }, a: 'Ich trinke heißen Kaffee mit kalter Milch.', x: { es: 'Akk m -en; Dat f -er.', en: 'Acc. masc. -en; dat. fem. -er.' } },
    { t: 'listen', ph: 3, a: 'Infolge des Sturms wurden mehrere Straßen gesperrt.', x: { es: 'infolge + genitivo; pasiva en Präteritum.', en: 'infolge + genitive; passive in the Präteritum.' } }
  ],
  summary: [
    { es: 'Declinación n: -(e)n en todos los casos salvo Nom. sg.: den/dem/des Studenten. Mixtos: des Namens.', en: 'n-declension: -(e)n everywhere except nom. sg.: den/dem/des Studenten. Mixed: des Namens.' },
    { es: 'Adjetivo fuerte (sin artículo): señal del artículo definido (-er, -e, -es, -em…); genitivo m/n: -en.', en: 'Strong adjective (no article): the definite article’s signal (-er, -e, -es, -em…); masc./neut. genitive: -en.' },
    { es: 'Fuerte también tras números, viele, einige, mehrere, wenige.', en: 'Strong also after numbers, viele, einige, mehrere, wenige.' },
    { es: 'Genitivo escrito: aufgrund, infolge, anstelle, angesichts, hinsichtlich, laut, mithilfe, zugunsten.', en: 'Written genitive: aufgrund, infolge, anstelle, angesichts, hinsichtlich, laut, mithilfe, zugunsten.' }
  ]
});

DD.readings.push({
  id: 'r-u27', unit: 'u27', level: 'B1', kind: 'unit',
  de: 'Unwetter über Leipzig', es: 'Temporal sobre Leipzig', en: 'Storm over Leipzig',
  genre: { es: 'Noticia de prensa · serie Leipzig 27', en: 'News report · Leipzig series 27' },
  intro: { es: 'Una noticia local (ficticia) sobre un temporal durante la fiesta de la ciudad. Observa el estilo periodístico: pasiva, preposiciones con genitivo y adjetivos sin artículo.', en: 'A (fictional) local news item about a storm during the city festival. Notice the journalistic style: passive, genitive prepositions and adjectives without articles.' },
  focus: { es: 'aufgrund / infolge / trotz / laut + genitivo · starker Wind, heftiger Regen, mit großem Einsatz · des Bürgermeisters, des Experten.', en: 'aufgrund / infolge / trotz / laut + genitive · starker Wind, heftiger Regen, mit großem Einsatz · des Bürgermeisters, des Experten.' },
  source: { type: 'original' },
  p: [
    ['Leipzig. Heftiger Regen und starker Wind haben am Samstagabend den Verkehr in der Innenstadt stark behindert. Infolge des Unwetters wurden mehrere Straßen gesperrt, und zahlreiche Straßenbahnen fuhren mit großer Verspätung. Laut Polizei wurden zwei Personen leicht verletzt. Größere Schäden wurden nicht gemeldet.', 'Leipzig. Una lluvia intensa y un fuerte viento dificultaron gravemente el tráfico en el centro el sábado en la noche. A consecuencia del temporal se cerraron varias calles y numerosos tranvías circularon con gran retraso. Según la policía, dos personas resultaron levemente heridas. No se informaron daños mayores.', 'Leipzig. Heavy rain and strong wind severely disrupted traffic in the city centre on Saturday evening. As a result of the storm several streets were closed, and numerous trams ran with long delays. According to the police, two people were slightly injured. No major damage was reported.'],
    ['Trotz des schlechten Wetters kamen tausende Besucher zum Stadtfest auf den Augustusplatz. Aufgrund einer Warnung des Wetterdienstes musste das große Konzert am Abend allerdings abgebrochen werden. Anstelle des Konzerts wurde im Gewandhaus ein kleines Programm mit lokalen Musikern angeboten. „Wir sind froh, dass niemand schwer verletzt wurde“, sagte die Bürgermeisterin. Sie dankte den Helfern der Feuerwehr, die bis tief in die Nacht im Einsatz waren.', 'A pesar del mal tiempo, miles de visitantes acudieron a la fiesta de la ciudad en el Augustusplatz. Debido a una alerta del servicio meteorológico, sin embargo, el gran concierto de la noche tuvo que interrumpirse. En lugar del concierto se ofreció en el Gewandhaus un pequeño programa con músicos locales. «Estamos contentos de que nadie resultara gravemente herido», dijo la alcaldesa. Agradeció a los voluntarios de los bomberos, que estuvieron trabajando hasta altas horas de la noche.', 'Despite the bad weather, thousands of visitors came to the city festival on Augustusplatz. Due to a warning from the weather service, however, the big evening concert had to be stopped. Instead of the concert, a small programme with local musicians was offered in the Gewandhaus. “We are glad that no one was seriously injured,” said the mayor. She thanked the fire brigade’s helpers, who were on duty until late into the night.'],
    ['Ein Experte der Universität erklärte gegenüber unserer Zeitung, dass solche Unwetter angesichts des Klimawandels häufiger werden. „Warme Luft kann mehr Wasser aufnehmen. Deshalb fällt bei starken Gewittern heute oft mehr Regen in kürzerer Zeit als früher.“ Hinsichtlich des Hochwasserschutzes sei Leipzig aber gut vorbereitet, sagte der Experte.', 'Un experto de la universidad explicó a nuestro diario que, ante el cambio climático, estos temporales se vuelven más frecuentes. «El aire caliente puede absorber más agua. Por eso hoy, en tormentas fuertes, a menudo cae más lluvia en menos tiempo que antes.» En cuanto a la protección contra inundaciones, Leipzig está bien preparada, dijo el experto.', 'An expert from the university told our newspaper that, in view of climate change, such storms are becoming more frequent. “Warm air can hold more water. That’s why strong thunderstorms today often bring more rain in a shorter time than before.” With regard to flood protection, however, Leipzig is well prepared, the expert said.'],
    ['Am Sonntagmorgen schien schon wieder die Sonne. Mithilfe vieler freiwilliger Helfer wurde der Platz schnell aufgeräumt, und das Stadtfest konnte fortgesetzt werden. Unter den Besuchern waren auch drei Studenten aus einer WG im Süden der Stadt. „Bei so schönem Wetter ist ein Stadtfest das Beste, was es gibt“, sagte einer von ihnen, ein junger Chilene, unserem Journalisten.', 'El domingo en la mañana ya volvía a brillar el sol. Con ayuda de muchos voluntarios la plaza se ordenó rápidamente y la fiesta de la ciudad pudo continuar. Entre los visitantes estaban también tres estudiantes de una WG del sur de la ciudad. «Con un tiempo tan bonito, una fiesta de la ciudad es lo mejor que hay», le dijo uno de ellos, un joven chileno, a nuestro periodista.', 'On Sunday morning the sun was already shining again. With the help of many volunteers the square was quickly tidied up, and the city festival could continue. Among the visitors were three students from a flatshare in the south of the city. “In such lovely weather a city festival is the best thing there is,” one of them, a young Chilean, told our journalist.']
  ],
  gloss: [
    ['behindert', { es: 'dificultado (behindern)', en: 'disrupted (behindern)' }],
    ['Schäden', { es: 'daños (der Schaden, ¨)', en: 'damage' }],
    ['tausende', { es: 'miles', en: 'thousands' }],
    ['Wetterdienstes', { es: 'servicio meteorológico (der Wetterdienst)', en: 'weather service' }],
    ['allerdings', { es: 'sin embargo', en: 'however' }],
    ['abgebrochen', { es: 'interrumpido (abbrechen)', en: 'stopped (abbrechen)' }],
    ['angeboten', { es: 'ofrecido (anbieten)', en: 'offered (anbieten)' }],
    ['lokalen', { es: 'locales', en: 'local' }],
    ['Musikern', { es: 'músicos (der Musiker, -)', en: 'musicians' }],
    ['tief', { es: 'bis tief in die Nacht = hasta altas horas', en: 'deep (into the night)' }],
    ['gegenüber', { es: 'ante; a (erklärte gegenüber = declaró a)', en: 'to (told)' }],
    ['häufiger', { es: 'más frecuentes', en: 'more frequent' }],
    ['Luft', { es: 'aire (die Luft)', en: 'air' }],
    ['aufnehmen', { es: 'absorber; recibir', en: 'absorb; take in' }],
    ['kürzerer', { es: 'más corto', en: 'shorter' }],
    ['Hochwasserschutzes', { es: 'protección contra inundaciones', en: 'flood protection' }],
    ['sei', { es: 'está (Konjunktiv I, discurso indirecto, U31)', en: 'is (Konjunktiv I, reported speech, U31)' }],
    ['vorbereitet', { es: 'preparada', en: 'prepared' }],
    ['Sonntagmorgen', { es: 'domingo en la mañana', en: 'Sunday morning' }],
    ['freiwilliger', { es: 'voluntarios (freiwillig)', en: 'voluntary' }],
    ['Beste', { es: 'lo mejor', en: 'the best' }],
    ['einer', { es: 'uno', en: 'one' }]
  ],
  q: [
    { t: 'rf', q: 'Wegen des Unwetters wurden mehrere Straßen gesperrt.', a: true, x: { es: '«Infolge des Unwetters wurden mehrere Straßen gesperrt.»', en: '“Infolge des Unwetters wurden mehrere Straßen gesperrt.”' } },
    { t: 'choice', q: 'Warum wurde das Konzert abgebrochen?', o: ['aufgrund einer Warnung des Wetterdienstes', 'weil keine Besucher kamen', 'wegen eines Feuers'], a: 0, x: { es: 'Por la alerta meteorológica.', en: 'Because of the weather warning.' } },
    { t: 'choice', q: 'Was gab es anstelle des Konzerts?', o: ['nichts', 'ein kleines Programm im Gewandhaus', 'eine Demonstration'], a: 1, x: { es: 'Un pequeño programa con músicos locales.', en: 'A small programme with local musicians.' } },
    { t: 'rf', q: 'Laut dem Experten werden solche Unwetter seltener.', a: false, x: { es: 'Se vuelven más frecuentes.', en: 'They are becoming more frequent.' } },
    { t: 'choice', q: 'Wer sprach am Sonntag mit dem Journalisten?', o: ['die Bürgermeisterin', 'ein junger Chilene', 'ein Polizist'], a: 1, x: { es: 'Uno de los tres estudiantes: Tomás, seguramente.', en: 'One of the three students – Tomás, presumably.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u27', ext: true, words: [
  ['n', 'die Aktion', 'Aktionen', 'la acción; la campaña', 'campaign; action'],
  ['n', 'das Urteil', 'Urteile', 'la sentencia; el juicio', 'verdict; judgement'],
  ['a', 'aktuell', null, null, 'actual; de actualidad', 'current']
] });
