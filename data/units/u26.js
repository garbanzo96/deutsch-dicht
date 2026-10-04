/* U26 · Sowohl … als auch */
DD.lexicon.push({ unit: 'u26', words: [
  ['conj', 'sowohl … als auch', 'tanto… como', 'both… and', { id: 'conj-sowohl', type: 'two', forms: { sowohl: 'phr' } }],
  ['conj', 'nicht nur … sondern auch', 'no solo… sino también', 'not only… but also', { id: 'conj-nicht-nur', type: 'two' }],
  ['conj', 'entweder … oder', 'o… o', 'either… or', { id: 'conj-entweder', type: 'two', forms: { entweder: 'phr' } }],
  ['conj', 'weder … noch', 'ni… ni', 'neither… nor', { id: 'conj-weder', type: 'two', forms: { weder: 'phr' } }],
  ['conj', 'zwar … aber', 'si bien… pero; es cierto que… pero', 'admittedly… but', { id: 'conj-zwar', type: 'two', forms: { zwar: 'phr' } }],
  ['conj', 'je … desto', 'cuanto más… más', 'the more… the more', { id: 'conj-je-desto', type: 'two', forms: { je: 'phr', desto: 'phr', umso: 'phr' } }],
  ['adv', 'einerseits', 'por un lado', 'on the one hand'],
  ['adv', 'andererseits', 'por otro lado', 'on the other hand'],
  ['v', 'ab|wägen', 'wägt ab', 'wog ab', 'hat abgewogen', 'sopesar', 'weigh up'],
  ['v', 'zögern', 'zögert', 'zögerte', 'hat gezögert', 'dudar; vacilar', 'hesitate'],
  ['v', 'sich entschließen', 'entschließt', 'entschloss', 'hat entschlossen', 'decidirse', 'make up one’s mind'],
  ['v', 'verzichten', 'verzichtet', 'verzichtete', 'hat verzichtet', 'renunciar a', 'do without; give up', { rek: 'auf + A' }],
  ['v', 'pendeln', 'pendelt', 'pendelte', 'ist gependelt', 'viajar a diario (entre casa y trabajo)', 'commute'],
  ['v', 'vermieten', 'vermietet', 'vermietete', 'hat vermietet', 'arrendar (como dueño)', 'let; rent out'],
  ['v', 'ein|gehen', 'geht ein', 'ging ein', 'ist eingegangen', 'asumir (un riesgo); entrar', 'take (a risk); enter'],
  ['v', 'zu|sagen', 'sagt zu', 'sagte zu', 'hat zugesagt', 'aceptar (una oferta); confirmar', 'accept; confirm'],
  ['v', 'ab|sagen', 'sagt ab', 'sagte ab', 'hat abgesagt', 'cancelar; rechazar', 'cancel; decline'],
  ['n', 'die Entscheidung', 'Entscheidungen', 'la decisión', 'decision'],
  ['n', 'die Alternative', 'Alternativen', 'la alternativa', 'alternative'],
  ['n', 'das Risiko', 'Risiken', 'el riesgo', 'risk'],
  ['n', 'die Chance', 'Chancen', 'la oportunidad; la posibilidad', 'chance'],
  ['n', 'die Großstadt', 'Großstädte', 'la gran ciudad', 'big city'],
  ['n', 'die Lebensqualität', '—', 'la calidad de vida', 'quality of life'],
  ['n', 'der Lärm', '—', 'el ruido', 'noise'],
  ['n', 'die Pendlerin', 'Pendlerinnen', 'la que viaja a diario al trabajo', 'commuter (f.)'],
  ['n', 'der Pendler', 'Pendler', 'el que viaja a diario al trabajo', 'commuter (m.)'],
  ['n', 'das Abenteuer', 'Abenteuer', 'la aventura', 'adventure'],
  ['n', 'die Sicherheit', 'Sicherheiten', 'la seguridad', 'security; safety'],
  ['n', 'der Abschied', 'Abschiede', 'la despedida', 'farewell'],
  ['a', 'riskant', null, null, 'arriesgado', 'risky'],
  ['a', 'vernünftig', null, null, 'sensato; razonable', 'sensible; reasonable'],
  ['a', 'attraktiv', null, null, 'atractivo', 'attractive'],
  ['a', 'hektisch', null, null, 'agitado; frenético', 'hectic'],
  ['a', 'entspannt', null, null, 'relajado', 'relaxed'],
  ['a', 'eindeutig', null, null, 'inequívoco; claro', 'clear; unambiguous'],
  ['phr', 'Das hat Vor- und Nachteile.', 'tiene ventajas y desventajas', 'it has pros and cons'],
  ['phr', 'auf der einen Seite … auf der anderen Seite', 'por un lado… por otro', 'on the one hand… on the other']
] });

DD.unit('u26', {
  minutes: 55,
  goals: [
    { es: 'Coordinar con conectores dobles: sowohl … als auch, nicht nur … sondern auch, entweder … oder, weder … noch, zwar … aber.', en: 'Coordinate with two-part connectors: sowohl … als auch, nicht nur … sondern auch, entweder … oder, weder … noch, zwar … aber.' },
    { es: 'Expresar proporción con je … desto/umso y su orden de palabras.', en: 'Express proportion with je … desto/umso and its word order.' },
    { es: 'Sopesar ventajas y desventajas y argumentar una decisión.', en: 'Weigh pros and cons and argue for a decision.' }
  ],
  grammar: ['g-two-part', 'g-comparison'],
  lesson: [
    { b: 'concept', de: 'zweiteilige Konnektoren', t: { es: 'Unen dos elementos del mismo tipo (sustantivos, verbos, oraciones) y precisan la relación: suma (sowohl … als auch), énfasis (nicht nur … sondern auch), alternativa (entweder … oder), doble negación (weder … noch) o concesión (zwar … aber).', en: 'They link two elements of the same kind (nouns, verbs, clauses) and specify the relation: addition (sowohl … als auch), emphasis (nicht nur … sondern auch), alternative (entweder … oder), double negation (weder … noch) or concession (zwar … aber).' } },
    { b: 'table', h: { es: 'Los conectores dobles', en: 'Two-part connectors' }, c: [{ es: 'Conector', en: 'Connector' }, { es: 'Significado', en: 'Meaning' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['sowohl … als auch', { es: 'tanto… como', en: 'both… and' }, 'Er spricht [sowohl] Spanisch [als auch] Deutsch.'],
      ['nicht nur … sondern auch', { es: 'no solo… sino también', en: 'not only… but also' }, 'Berlin ist [nicht nur] groß, [sondern auch] teuer.'],
      ['entweder … oder', { es: 'o… o', en: 'either… or' }, '[Entweder] ziehe ich nach Berlin, [oder] ich pendle.'],
      ['weder … noch', { es: 'ni… ni', en: 'neither… nor' }, 'Er hat [weder] Zeit [noch] Geld.'],
      ['zwar … aber', { es: 'si bien… pero', en: 'admittedly… but' }, 'Die Stelle ist [zwar] gut, [aber] weit weg.'],
      ['einerseits … andererseits', { es: 'por un lado… por otro', en: 'on the one hand… on the other' }, '[Einerseits] will ich gehen, [andererseits] bleibe ich gern.'],
      ['je … desto / umso', { es: 'cuanto más… más', en: 'the more… the more' }, '[Je] länger ich hier wohne, [desto] besser gefällt es mir.']
    ], n: { es: 'weder … noch ya es negativo: no se añade nicht ni kein.', en: 'weder … noch is already negative: no nicht or kein is added.' } },
    { b: 'concept', de: 'Wortstellung', t: { es: 'Uniendo oraciones: entweder, zwar, einerseits/andererseits pueden ocupar la posición 1 (inversión): [Entweder] ziehe ich um … En medio de la oración, no afectan el orden. oder, aber y sondern son de posición 0.', en: 'Linking clauses: entweder, zwar, einerseits/andererseits can fill position 1 (inversion): Entweder ziehe ich um … Inside the clause they don’t affect order. oder, aber and sondern are position 0.' } },
    { b: 'slots', h: { es: 'je … desto: dos órdenes distintos', en: 'je … desto: two different orders' }, c: [{ es: 'je + comparativo', en: 'je + comparative' }, { es: '… verbo final,', en: '… verb last,' }, { es: 'desto + comparativo', en: 'desto + comparative' }, { es: 'verbo + …', en: 'verb + …' }], v: [1, 3], r: [
      ['Je länger', 'ich hier wohne,', 'desto besser', 'gefällt es mir.'],
      ['Je mehr', 'man übt,', 'umso schneller', 'lernt man.'],
      ['Je früher', 'du kommst,', 'desto mehr Zeit', 'haben wir.']
    ], n: { es: 'La parte con je es subordinada (verbo al final); la parte con desto/umso es principal con inversión (verbo inmediatamente tras el comparativo).', en: 'The je part is subordinate (verb last); the desto/umso part is a main clause with inversion (verb right after the comparative).' } },
    { b: 'pairs', h: { es: 'De dos frases a un conector doble', en: 'From two sentences to a two-part connector' }, r: [
      ['Er hat keine Zeit. Er hat kein Geld.', 'Er hat [weder] Zeit [noch] Geld.'],
      ['Lena studiert. Sie arbeitet auch.', 'Lena studiert [nicht nur], [sondern] sie arbeitet [auch].'],
      ['Die Stelle ist gut. Sie ist aber weit weg.', 'Die Stelle ist [zwar] gut, [aber] weit weg.']
    ] },
    { b: 'note', tone: 'l1', t: { es: '«Ni… ni» = weder … noch (sin negación adicional). «Tanto… como» = sowohl … als auch. «Cuanto más estudio, más sé» = Je mehr ich lerne, desto mehr weiß ich: el verbo del primer miembro va al final.', en: '“Neither… nor” = weder … noch (no extra negation). “The more I study, the more I know” = Je mehr ich lerne, desto mehr weiß ich: verb last in the first part, inversion in the second.' } }
  ],
  chunks: [
    ['Das hat sowohl Vorteile als auch Nachteile.', 'Tiene tanto ventajas como desventajas.', 'It has both advantages and disadvantages.'],
    ['Entweder wir gehen jetzt, oder wir bleiben bis morgen.', 'O nos vamos ahora o nos quedamos hasta mañana.', 'Either we go now or we stay until tomorrow.'],
    ['Ich habe weder Zeit noch Lust.', 'No tengo ni tiempo ni ganas.', 'I have neither the time nor the inclination.'],
    ['Zwar ist es teuer, aber es lohnt sich.', 'Si bien es caro, vale la pena.', 'It’s expensive, admittedly, but it’s worth it.'],
    ['Je früher, desto besser.', 'Cuanto antes, mejor.', 'The sooner, the better.']
  ],
  errors: [
    ['Er hat weder Zeit noch kein Geld.', 'Er hat weder Zeit noch Geld.', { es: 'weder … noch ya niega.', en: 'weder … noch already negates.' }],
    ['Je länger ich wohne hier, desto besser es gefällt mir.', 'Je länger ich hier wohne, desto besser gefällt es mir.', { es: 'je: verbo final; desto: verbo enseguida.', en: 'je: verb last; desto: verb right after.' }],
    ['sowohl Spanisch als Deutsch', 'sowohl Spanisch als auch Deutsch', { es: 'Fórmula completa: als auch.', en: 'Full formula: als auch.' }],
    ['nicht nur groß, aber auch teuer', 'nicht nur groß, sondern auch teuer', { es: 'nicht nur … sondern auch.', en: 'nicht nur … sondern auch.' }]
  ],
  examples: [
    ['Mehmet hat sowohl in Berlin als auch in Leipzig Freunde.', 'Mehmet tiene amigos tanto en Berlín como en Leipzig.', 'Mehmet has friends both in Berlin and in Leipzig.'],
    ['Die neue Stelle ist nicht nur interessant, sondern auch gut bezahlt.', 'El nuevo puesto no solo es interesante, sino también bien pagado.', 'The new job is not only interesting but also well paid.'],
    ['Entweder zieht er nach Berlin, oder er pendelt jeden Tag.', 'O se muda a Berlín o viaja a diario.', 'Either he moves to Berlin or he commutes every day.'],
    ['In der WG gibt es weder einen Fernseher noch ein Auto.', 'En el depto. compartido no hay ni televisor ni auto.', 'In the flat there is neither a TV nor a car.'],
    ['Je mehr er darüber nachdenkt, desto unsicherer wird er.', 'Cuanto más lo piensa, más inseguro se vuelve.', 'The more he thinks about it, the more uncertain he becomes.'],
    ['Einerseits möchte er bleiben, andererseits reizt ihn das Abenteuer.', 'Por un lado quiere quedarse; por otro, lo tienta la aventura.', 'On the one hand he wants to stay; on the other, the adventure appeals to him.']
  ],
  reading: 'r-u26',
  exercises: [
    { t: 'choice', ph: 1, q: 'Er spricht sowohl Spanisch ___ Deutsch.', o: ['als auch', 'noch', 'oder'], a: 0, x: { es: 'sowohl … als auch.', en: 'sowohl … als auch.' } },
    { t: 'choice', ph: 1, q: 'Ich habe weder Zeit ___ Lust.', o: ['oder', 'noch', 'nicht'], a: 1, x: { es: 'weder … noch.', en: 'weder … noch.' } },
    { t: 'choice', ph: 1, q: 'Die Stelle ist nicht nur gut, ___ auch gut bezahlt.', o: ['aber', 'sondern', 'oder'], a: 1, x: { es: 'nicht nur … sondern auch.', en: 'nicht nur … sondern auch.' } },
    { t: 'choice', ph: 1, q: 'Je mehr man übt, ___ besser wird man.', o: ['desto', 'als', 'so'], a: 0, x: { es: 'je … desto / umso.', en: 'je … desto / umso.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona las dos partes.', en: 'Match the two parts.' }, pairs: [['entweder', 'oder'], ['weder', 'noch'], ['zwar', 'aber'], ['einerseits', 'andererseits'], ['je', 'desto']], x: { es: 'Fórmulas fijas.', en: 'Fixed formulas.' } },
    { t: 'choice', ph: 1, p: { es: '¿Qué frase es correcta?', en: 'Which sentence is correct?' }, o: ['Je länger ich hier wohne, desto besser es gefällt mir.', 'Je länger ich hier wohne, desto besser gefällt es mir.', 'Je länger wohne ich hier, desto besser gefällt es mir.'], a: 1, x: { es: 'je: verbo final; desto + comparativo + verbo.', en: 'je: verb last; desto + comparative + verb.' } },
    { t: 'gap', ph: 2, q: '___ ziehe ich nach Berlin, oder ich bleibe in Leipzig.', a: 'Entweder', x: { es: 'Alternativa: entweder … oder.', en: 'Alternative: entweder … oder.' } },
    { t: 'gap', ph: 2, q: 'Die Wohnung ist ___ klein, aber gemütlich.', a: 'zwar', x: { es: 'Concesión: zwar … aber.', en: 'Concession: zwar … aber.' } },
    { t: 'gap', ph: 2, q: 'Je früher du kommst, ___ mehr Zeit haben wir.', a: 'desto', alt: ['umso'], x: { es: 'je … desto/umso.', en: 'je … desto/umso.' } },
    { t: 'gap', ph: 2, q: 'Lena hat ___ einen Hund ___ eine Katze. (ninguno de los dos)', a: ['weder', 'noch'], x: { es: 'Doble negación: weder … noch.', en: 'Double negation: weder … noch.' } },
    { t: 'gap', ph: 2, q: 'Das hat ___ Vorteile als auch Nachteile.', a: 'sowohl', x: { es: 'sowohl … als auch.', en: 'sowohl … als auch.' } },
    { t: 'gap', ph: 2, q: 'Je länger ich warte, desto nervöser ___ ich. (werden)', a: 'werde', x: { es: 'desto + comparativo + verbo.', en: 'desto + comparative + verb.' } },
    { t: 'order', ph: 2, w: ['Je mehr', 'liest,', 'man', 'desto mehr', 'weiß', 'man'], a: 'Je mehr man liest, desto mehr weiß man.', x: { es: 'Patrón je … verbo, desto … verbo.', en: 'Pattern je … verb, desto … verb.' } },
    { t: 'transform', ph: 3, p: { es: 'Une con «weder … noch».', en: 'Join with “weder … noch”.' }, q: 'Er hat keine Zeit. Er hat kein Geld.', a: 'Er hat weder Zeit noch Geld.', x: { es: 'Sin kein: weder … noch.', en: 'No kein: weder … noch.' } },
    { t: 'transform', ph: 3, p: { es: 'Une con «je … desto».', en: 'Join with “je … desto”.' }, q: 'Man übt viel. Man spricht gut.', a: 'Je mehr man übt, desto besser spricht man.', alt: ['Je mehr man übt, umso besser spricht man.'], x: { es: 'viel → mehr; gut → besser.', en: 'viel → mehr; gut → besser.' } },
    { t: 'write', ph: 3, s: { es: 'Cuanto antes, mejor.', en: 'The sooner, the better.' }, a: 'Je früher, desto besser.', alt: ['Je früher, umso besser.', 'Je eher, desto besser.'], x: { es: 'Fórmula elíptica.', en: 'Elliptical formula.' } },
    { t: 'write', ph: 3, s: { es: 'No solo es grande, sino también caro.', en: 'It is not only big but also expensive.' }, a: 'Es ist nicht nur groß, sondern auch teuer.', x: { es: 'nicht nur … sondern auch.', en: 'nicht nur … sondern auch.' } },
    { t: 'listen', ph: 3, a: 'Entweder du kommst mit, oder du bleibst hier.', x: { es: 'entweder … oder.', en: 'entweder … oder.' } }
  ],
  summary: [
    { es: 'sowohl … als auch (suma), nicht nur … sondern auch (énfasis), entweder … oder (alternativa), weder … noch (ni… ni), zwar … aber (concesión).', en: 'sowohl … als auch (addition), nicht nur … sondern auch (emphasis), entweder … oder (alternative), weder … noch (neither… nor), zwar … aber (concession).' },
    { es: 'weder … noch no lleva nicht ni kein.', en: 'weder … noch takes no nicht or kein.' },
    { es: 'je + comparativo … verbo final, desto/umso + comparativo + verbo …', en: 'je + comparative … verb last, desto/umso + comparative + verb …' },
    { es: 'entweder, zwar, einerseits pueden ir en posición 1 con inversión.', en: 'entweder, zwar, einerseits can stand in position 1 with inversion.' }
  ]
});

DD.readings.push({
  id: 'r-u26', unit: 'u26', level: 'B1', kind: 'unit',
  de: 'Berlin oder Leipzig?', es: '¿Berlín o Leipzig?', en: 'Berlin or Leipzig?',
  genre: { es: 'Conversación argumentativa · serie Leipzig 26', en: 'Argumentative conversation · Leipzig series 26' },
  intro: { es: 'Mehmet consiguió el puesto en Berlín. Ahora debe decidir: ¿mudarse o viajar a diario? Los tres sopesan ventajas y desventajas.', en: 'Mehmet got the job in Berlin. Now he must decide: move or commute? The three weigh up the pros and cons.' },
  focus: { es: 'sowohl … als auch · nicht nur … sondern auch · entweder … oder · weder … noch · zwar … aber · je … desto.', en: 'sowohl … als auch · nicht nur … sondern auch · entweder … oder · weder … noch · zwar … aber · je … desto.' },
  source: { type: 'original' },
  p: [
    ['Eine Woche nach dem Vorstellungsgespräch kommt die E-Mail: Mehmet hat die Stelle bekommen! Die Firma bietet ihm nicht nur ein gutes Gehalt, sondern auch ein spannendes Projekt über Spracherkennung. Am Abend feiern sie in der WG. Aber dann wird Mehmet ernst. „Ich muss mich entscheiden. Entweder ziehe ich nach Berlin, oder ich pendle jeden Tag.“', 'Una semana después de la entrevista llega el correo: ¡Mehmet consiguió el puesto! La empresa no solo le ofrece un buen sueldo, sino también un proyecto apasionante sobre reconocimiento del habla. En la noche lo celebran en la WG. Pero luego Mehmet se pone serio. «Tengo que decidirme. O me mudo a Berlín o viajo cada día.»', 'A week after the interview the e-mail arrives: Mehmet has got the job! The company offers him not only a good salary but also an exciting project on speech recognition. In the evening they celebrate in the flat. But then Mehmet turns serious. “I have to decide. Either I move to Berlin or I commute every day.”'],
    ['Pendeln ist doch kein Problem. Mit dem ICE dauert die Fahrt nur etwas mehr als eine Stunde.', 'Viajar a diario no es ningún problema. En el ICE el viaje dura solo un poco más de una hora.', 'Commuting isn’t a problem. On the ICE the journey takes only a little over an hour.', 'Lena'],
    ['Zwar ist der Zug schnell, aber er ist auch teuer. Und zwei Stunden pro Tag im Zug – das sind zehn Stunden pro Woche. Je länger ich darüber nachdenke, desto weniger gefällt mir die Idee.', 'Si bien el tren es rápido, también es caro. Y dos horas al día en el tren son diez horas a la semana. Cuanto más lo pienso, menos me gusta la idea.', 'The train is fast, admittedly, but it’s also expensive. And two hours a day on the train – that’s ten hours a week. The longer I think about it, the less I like the idea.', 'Mehmet'],
    ['Dann zieh doch nach Berlin! Du kommst ja aus Berlin. Dort hast du sowohl deine Familie als auch deine alten Freunde.', '¡Entonces múdate a Berlín! Tú eres de Berlín. Allí tienes tanto a tu familia como a tus viejos amigos.', 'Then move to Berlin! You come from Berlin after all. You have both your family and your old friends there.', 'Tomás'],
    ['Einerseits stimmt das. Andererseits sind die Mieten in Berlin viel höher, und ich finde dort weder eine so schöne Wohnung noch so gute Mitbewohner wie hier. In Berlin ist alles hektisch. Leipzig ist entspannter.', 'Por un lado es cierto. Por otro, los arriendos en Berlín son mucho más altos, y allí no encuentro ni un departamento tan bonito ni compañeros tan buenos como aquí. En Berlín todo es frenético. Leipzig es más relajado.', 'On the one hand that’s true. On the other, rents in Berlin are much higher, and there I won’t find either such a nice flat or such good flatmates as here. Everything in Berlin is hectic. Leipzig is more relaxed.', 'Mehmet'],
    ['Lena holt ein Blatt Papier und zeichnet zwei Spalten: Vorteile und Nachteile. Nach einer Stunde ist das Blatt voll. Das Ergebnis ist nicht eindeutig: Berlin bietet mehr Chancen, Leipzig mehr Lebensqualität. „Vielleicht gibt es eine dritte Möglichkeit“, sagt Tomás. „Frag die Firma, ob du zwei Tage pro Woche von zu Hause arbeiten kannst. Dann pendelst du nur dreimal.“', 'Lena trae una hoja de papel y dibuja dos columnas: ventajas y desventajas. Después de una hora la hoja está llena. El resultado no es claro: Berlín ofrece más oportunidades; Leipzig, más calidad de vida. «Quizás haya una tercera posibilidad», dice Tomás. «Pregúntale a la empresa si puedes trabajar dos días a la semana desde casa. Así solo viajas tres veces.»', 'Lena fetches a sheet of paper and draws two columns: advantages and disadvantages. After an hour the sheet is full. The result is not clear-cut: Berlin offers more opportunities, Leipzig more quality of life. “Maybe there’s a third option,” says Tomás. “Ask the company whether you can work from home two days a week. Then you only commute three times.”'],
    ['Mehmet schreibt sofort eine E-Mail. Die Antwort kommt am nächsten Morgen: Es geht! „Je mehr ich darüber nachdenke, umso besser finde ich das“, sagt Mehmet. „So verliere ich weder meine Arbeit noch meine WG.“', 'Mehmet escribe de inmediato un correo. La respuesta llega a la mañana siguiente: ¡se puede! «Cuanto más lo pienso, mejor me parece», dice Mehmet. «Así no pierdo ni mi trabajo ni mi WG.»', 'Mehmet writes an e-mail at once. The reply comes the next morning: it’s possible! “The more I think about it, the better I like it,” says Mehmet. “That way I lose neither my job nor my flatshare.”']
  ],
  gloss: [
    ['bietet', { es: 'ofrece (bieten)', en: 'offers (bieten)' }],
    ['Spracherkennung', { es: 'reconocimiento del habla', en: 'speech recognition' }],
    ['ICE', { es: 'tren de alta velocidad alemán', en: 'German high-speed train' }],
    ['pro', { es: 'por (pro Tag = al día)', en: 'per' }],
    ['weniger', { es: 'menos', en: 'less' }],
    ['höher', { es: 'más altos', en: 'higher' }],
    ['Blatt', { es: 'hoja (das Blatt, ¨-er)', en: 'sheet (das Blatt, ¨-er)' }],
    ['Papier', { es: 'papel (das Papier, -e)', en: 'paper' }],
    ['Spalten', { es: 'columnas (die Spalte, -n)', en: 'columns' }],
    ['dritte', { es: 'tercera', en: 'third' }],
    ['dreimal', { es: 'tres veces', en: 'three times' }],
    ['ja', { es: 'ya; pues (partícula: Du kommst ja aus Berlin)', en: 'after all (particle)' }],
    ['doch', { es: 'pues (partícula que anima: Dann zieh doch!)', en: 'then (encouraging particle)' }]
  ],
  q: [
    { t: 'rf', q: 'Die Firma bietet Mehmet nur ein gutes Gehalt.', a: false, x: { es: 'También un proyecto apasionante.', en: 'Also an exciting project.' } },
    { t: 'choice', q: 'Wie lange dauert die Fahrt mit dem ICE?', o: ['etwas mehr als eine Stunde', 'zwei Stunden', 'dreißig Minuten'], a: 0, x: { es: 'Un poco más de una hora.', en: 'A little over an hour.' } },
    { t: 'choice', q: 'Was hat Mehmet in Berlin?', o: ['weder Familie noch Freunde', 'sowohl seine Familie als auch alte Freunde', 'nur eine Wohnung'], a: 1, x: { es: 'Familia y viejos amigos.', en: 'Family and old friends.' } },
    { t: 'rf', q: 'Nach Mehmet sind die Mieten in Berlin höher.', a: true, x: { es: '«…die Mieten in Berlin viel höher…»', en: '“…die Mieten in Berlin viel höher…”' } },
    { t: 'choice', q: 'Was ist die Lösung am Ende?', o: ['Er zieht nach Berlin.', 'Er sagt die Stelle ab.', 'Er arbeitet zwei Tage von zu Hause und pendelt dreimal.'], a: 2, x: { es: 'La tercera posibilidad propuesta por Tomás.', en: 'The third option suggested by Tomás.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u26', ext: true, words: [
  ['v', 'vor|ziehen', 'zieht vor', 'zog vor', 'hat vorgezogen', 'preferir', 'prefer']
] });
