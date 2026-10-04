/* Gramática · Satzbau */
(function () {
  const M = (es, en) => ({ es, en });
  const F = ['Vorfeld', M('Verbo 1', 'Verb 1'), 'Mittelfeld', M('Verbo 2', 'Verb 2'), 'Nachfeld'];
  DD.grammarTopic('k-satz', [
    {
      id: 'g-word-order', level: 'A1', de: 'Verbstellung: V2, V1, Verbletzt', es: 'Posición del verbo: V2, V1, verbo final', en: 'Verb position: V2, V1, verb-final',
      summary: M('Tres tipos de oración según la posición del verbo conjugado: V2 (enunciados y preguntas W: un solo elemento antes del verbo), V1 (preguntas sí/no, imperativos, condicionales sin wenn) y verbo final (subordinadas). El resto del verbo (participio, infinitivo, prefijo) va al final: es la Satzklammer.', 'Three clause types by the position of the finite verb: V2 (statements and W-questions: exactly one element before the verb), V1 (yes/no questions, imperatives, conditionals without wenn) and verb-final (subordinate clauses). The rest of the verb (participle, infinitive, prefix) goes to the end: the Satzklammer.'),
      blocks: [
        { b: 'slots', h: M('Los tres tipos', 'The three types'), c: F, v: [1, 3], r: [
          ['Ich', 'habe', 'gestern einen Film', 'gesehen.', ''], ['Gestern', 'habe', 'ich einen Film', 'gesehen.', ''], ['Was', 'hast', 'du gestern', 'gesehen?', ''],
          ['', 'Hast', 'du den Film', 'gesehen?', ''], ['', 'Ruf', 'mich morgen', 'an!', ''], ['…, weil', '', 'ich den Film', 'gesehen habe.', '']
        ] },
        { b: 'note', tone: 'l1', t: M('Error típico: poner dos elementos antes del verbo («Gestern ich habe…»). En alemán, si el Vorfeld ya está ocupado por «gestern», el sujeto pasa detrás del verbo.', 'Typical error: putting two elements before the verb (“Gestern ich habe…”). If the Vorfeld is taken by “gestern”, the subject moves behind the verb.') }
      ],
      examples: [['Morgen fahre ich nach Berlin.', 'Mañana viajo a Berlín.', 'Tomorrow I’m going to Berlin.'], ['Kommst du heute Abend mit?', '¿Vienes esta noche?', 'Are you coming tonight?'], ['Ich glaube, dass er schon angekommen ist.', 'Creo que ya llegó.', 'I think he has already arrived.']]
    },
    {
      id: 'g-fields', level: 'B2', de: 'Das Feldermodell', es: 'El modelo de campos', en: 'The field model',
      summary: M('Toda oración se organiza en: Vorfeld | paréntesis izquierdo | Mittelfeld | paréntesis derecho | Nachfeld. En principales, el paréntesis izquierdo es el verbo conjugado; en subordinadas, el conector. El Nachfeld recibe comparaciones, relativas, infinitivas y sintagmas largos.', 'Every clause is organised as: prefield | left bracket | middle field | right bracket | final field. In main clauses the left bracket is the finite verb; in subordinate clauses, the connector. The final field takes comparisons, relative and infinitive clauses and long phrases.'),
      blocks: [
        { b: 'slots', h: M('Ejemplos analizados', 'Analysed examples'), c: ['Vorfeld', M('Paréntesis izq.', 'Left bracket'), 'Mittelfeld', M('Paréntesis der.', 'Right bracket'), 'Nachfeld'], v: [1, 3], r: [
          ['Lena', 'hat', 'ihrer Oma gestern', 'geholfen.', ''], ['Sie', 'ist', 'älter', 'geworden', 'als ihr Bruder.'], ['Ich', 'habe', 'vergessen', '', ', dich anzurufen.'],
          ['…,', 'dass', 'er es', 'hätte wissen müssen.', ''], ['Wir', 'haben', 'den Mann', 'gesehen', ', der angerufen hat.']
        ] },
        { b: 'table', h: M('Qué va en cada campo', 'What goes in each field'), c: [M('Campo', 'Field'), M('Contenido', 'Content')], r: [
          ['Vorfeld', M('exactamente un constituyente (sujeto, tiempo, objeto, subordinada…); tema o contraste', 'exactly one constituent (subject, time, object, subordinate clause…); topic or contrast')],
          [M('paréntesis izquierdo', 'left bracket'), M('verbo conjugado (principal) o conector (subordinada)', 'finite verb (main clause) or connector (subordinate clause)')],
          ['Mittelfeld', M('pronombres › sujeto › Dat › Te-Ka-Mo-Lo › Akk › nicht', 'pronouns › subject › dat. › Te-Ka-Mo-Lo › acc. › nicht')],
          [M('paréntesis derecho', 'right bracket'), M('participio, infinitivo(s), prefijo separable; en subordinada, también el verbo conjugado', 'participle, infinitive(s), separable prefix; in subordinate clauses also the finite verb')],
          ['Nachfeld', M('comparaciones con als/wie, relativas, infinitivas, subordinadas, sintagmas preposicionales largos', 'comparisons with als/wie, relative and infinitive clauses, subordinate clauses, long prepositional phrases')]
        ] }
      ],
      examples: [['Er ist größer geworden als sein Vater.', 'Se volvió más alto que su padre.', 'He has grown taller than his father.'], ['Ich habe vergessen, die Tür abzuschließen.', 'Olvidé cerrar la puerta con llave.', 'I forgot to lock the door.'], ['Wir haben über das Problem gesprochen, das du erwähnt hast.', 'Hablamos del problema que mencionaste.', 'We talked about the problem you mentioned.']]
    },
    {
      id: 'g-questions', level: 'A1', de: 'Fragesätze', es: 'Oraciones interrogativas', en: 'Questions',
      summary: M('Preguntas W (V2): palabra interrogativa + verbo + sujeto. Preguntas sí/no (V1): verbo + sujeto. Respuesta afirmativa a una pregunta negativa: doch. Preguntas indirectas: ob / palabra W + verbo final.', 'W-questions (V2): question word + verb + subject. Yes/no questions (V1): verb + subject. Affirmative answer to a negative question: doch. Indirect questions: ob / W-word + verb last.'),
      blocks: [
        { b: 'list', h: M('Palabras interrogativas', 'Question words'), cols: 3, r: [['wer? wen? wem? wessen?', M('quién (casos)', 'who (cases)')], ['was?', M('qué', 'what')], ['wann?', M('cuándo', 'when')], ['wo? wohin? woher?', M('dónde, adónde, de dónde', 'where, where to, where from')], ['wie? wie viel(e)? wie lange? wie oft?', M('cómo, cuánto(s), cuánto tiempo, con qué frecuencia', 'how, how much/many, how long, how often')], ['warum? wieso? weshalb?', M('por qué', 'why')], ['welcher?', M('cuál', 'which')], ['was für ein?', M('qué tipo de', 'what kind of')], ['wozu? womit? worüber?', M('para qué, con qué, sobre qué', 'what for, with what, about what')]] },
        { b: 'table', h: M('ja, nein, doch', 'ja, nein, doch'), c: [M('Pregunta', 'Question'), M('Sí', 'Yes'), M('No', 'No')], r: [
          ['Kommst du?', 'Ja, ich komme.', 'Nein, ich komme nicht.'], ['Kommst du nicht?', '[Doch], ich komme!', 'Nein, ich komme nicht.']
        ] },
        { b: 'table', h: M('Preguntas indirectas', 'Indirect questions'), c: [M('Directa', 'Direct'), M('Indirecta', 'Indirect')], r: [
          ['Wo wohnt er?', 'Weißt du, [wo] er [wohnt]?'], ['Hat sie Zeit?', 'Ich frage mich, [ob] sie Zeit [hat].'], ['Wann beginnt der Kurs?', 'Können Sie mir sagen, [wann] der Kurs [beginnt]?']
        ], n: M('Las preguntas indirectas son la forma más cortés de preguntar a desconocidos.', 'Indirect questions are the most polite way to ask strangers.') }
      ],
      examples: [['Woher kommst du?', '¿De dónde eres?', 'Where are you from?'], ['Hast du keinen Hunger? – Doch!', '¿No tienes hambre? – ¡Sí!', 'Aren’t you hungry? – Yes, I am!'], ['Wissen Sie, wie spät es ist?', '¿Sabe qué hora es?', 'Do you know what time it is?']]
    },
    {
      id: 'g-negation', level: 'A1', de: 'Negation: nicht und kein', es: 'Negación: nicht y kein', en: 'Negation: nicht and kein',
      summary: M('kein niega sustantivos con artículo indefinido o sin artículo (kein Auto, keine Zeit) y se declina como ein. nicht niega todo lo demás: verbos, adjetivos, adverbios, sustantivos con artículo definido o posesivo. Posición de nicht: al final del campo medio (negación total) o ante el elemento negado (parcial).', 'kein negates nouns with an indefinite article or no article (kein Auto, keine Zeit) and declines like ein. nicht negates everything else: verbs, adjectives, adverbs, nouns with definite or possessive articles. Position of nicht: end of the middle field (sentence negation) or before the negated element (partial).'),
      blocks: [
        { b: 'table', h: M('kein o nicht', 'kein or nicht'), c: [M('Afirmación', 'Affirmative'), M('Negación', 'Negative'), M('Regla', 'Rule')], r: [
          ['Ich habe ein Auto.', 'Ich habe [kein] Auto.', 'ein → kein'], ['Ich habe Zeit.', 'Ich habe [keine] Zeit.', M('sin artículo → kein', 'no article → kein')],
          ['Ich habe das Auto.', 'Ich habe das Auto [nicht].', M('artículo definido → nicht', 'definite article → nicht')], ['Er ist müde.', 'Er ist [nicht] müde.', M('adjetivo → nicht', 'adjective → nicht')]
        ] },
        { b: 'ref', id: 'g-mittelfeld', table: 1 },
        { b: 'list', h: M('Otras negaciones', 'Other negatives'), cols: 3, r: [['nie / niemals', M('nunca', 'never')], ['nichts', M('nada', 'nothing')], ['niemand', M('nadie', 'nobody')], ['nirgends / nirgendwo', M('en ninguna parte', 'nowhere')], ['noch nicht', M('todavía no', 'not yet')], ['nicht mehr / kein … mehr', M('ya no', 'no longer')], ['gar nicht / überhaupt nicht', M('para nada', 'not at all')], ['weder … noch', M('ni… ni', 'neither… nor')], ['nicht …, sondern', M('no…, sino', 'not…, but')]] }
      ],
      examples: [['Ich habe keine Geschwister.', 'No tengo hermanos.', 'I have no siblings.'], ['Das ist nicht mein Problem.', 'No es mi problema.', 'That’s not my problem.'], ['Er raucht nicht mehr.', 'Ya no fuma.', 'He doesn’t smoke any more.']]
    },
    {
      id: 'g-mittelfeld', level: 'B1', de: 'Wortstellung im Mittelfeld; Stellung von nicht', es: 'Orden del campo medio; posición de nicht', en: 'Middle-field word order; position of nicht',
      summary: M('Orden por defecto: pronombres (Nom › Akk › Dat) › sujeto sustantivo › dativo › circunstanciales Te-Ka-Mo-Lo › acusativo › nicht › complementos ligados al verbo. Lo conocido antes que lo nuevo; lo más informativo al final.', 'Default order: pronouns (nom › acc › dat) › noun subject › dative › Te-Ka-Mo-Lo adverbials › accusative › nicht › verb-bound complements. Known before new; the most informative last.'),
      blocks: [
        { b: 'table', h: M('Reglas de orden', 'Ordering rules'), c: [M('Regla', 'Rule'), M('Ejemplo', 'Example')], r: [
          [M('pronombres primero: Nom › Akk › Dat', 'pronouns first: nom › acc › dat'), 'Gestern hat [er] [es] [ihr] gegeben.'], [M('dos sustantivos: Dat › Akk', 'two nouns: dat › acc'), 'Ich gebe [dem Kind] [das Buch].'],
          [M('pronombre antes de sustantivo', 'pronoun before noun'), 'Ich gebe [es] dem Kind. · Ich gebe [ihm] das Buch.'], [M('Te-Ka-Mo-Lo', 'Te-Ka-Mo-Lo'), 'Ich fahre [morgen] [wegen der Arbeit] [mit dem Zug] [nach Berlin].'],
          [M('reflexivo lo más a la izquierda', 'reflexive as far left as possible'), 'Heute hat [sich] mein Bruder erkältet.'], [M('partículas tras pronombres', 'particles after pronouns'), 'Du hast mir [doch] das Geld gegeben.']
        ] },
        { b: 'table', h: M('Posición de nicht', 'Position of nicht'), c: [M('Caso', 'Case'), M('Posición', 'Position'), M('Ejemplo', 'Example')], r: [
          [M('objeto definido, pronombre, tiempo', 'definite object, pronoun, time'), M('después', 'after'), 'Ich kenne den Mann [nicht]. · Ich komme heute [nicht].'],
          [M('verbo 2', 'verb 2'), M('antes', 'before'), 'Ich habe ihn [nicht] gesehen.'], [M('predicativo', 'predicative'), M('antes', 'before'), 'Das ist [nicht] fair.'],
          [M('dirección / lugar ligado', 'direction / bound place'), M('antes', 'before'), 'Ich fahre [nicht] nach Berlin.'], [M('complemento preposicional', 'prepositional object'), M('antes', 'before'), 'Ich warte [nicht] auf dich.'],
          [M('manera', 'manner'), M('antes', 'before'), 'Er spricht [nicht] laut.'], [M('negación parcial', 'partial negation'), M('ante el elemento', 'before the element'), 'Ich komme [nicht heute], sondern morgen.']
        ] }
      ],
      examples: [['Kannst du es mir morgen geben?', '¿Me lo puedes dar mañana?', 'Can you give it to me tomorrow?'], ['Ich habe das Buch nicht gelesen.', 'No he leído el libro.', 'I haven’t read the book.'], ['Wir fahren am Freitag mit dem Bus nach Dresden.', 'El viernes vamos en bus a Dresde.', 'On Friday we’re taking the bus to Dresden.']]
    },
    {
      id: 'g-nachfeld', level: 'C1', de: 'Nachfeld und Ausklammerung', es: 'Campo final y extraposición', en: 'Final field and extraposition',
      summary: M('Colocar elementos después del paréntesis derecho aligera la oración: obligatorio para subordinadas y comparaciones largas, recomendable para relativas e infinitivas largas, coloquial para sintagmas preposicionales.', 'Placing elements after the right bracket lightens the sentence: obligatory for subordinate clauses and long comparisons, advisable for long relative and infinitive clauses, colloquial for prepositional phrases.'),
      blocks: [
        { b: 'pairs', h: M('Sin y con Nachfeld', 'Without and with the final field'), r: [
          ['Er ist größer als sein Vater geworden.', 'Er ist größer geworden [als sein Vater].'], ['Ich habe den Mann, der gestern angerufen hat, gesehen.', 'Ich habe den Mann gesehen, [der gestern angerufen hat].'],
          ['Sie hat, das Buch bis Freitag zu lesen, versprochen.', 'Sie hat versprochen, [das Buch bis Freitag zu lesen].'], ['Wir haben über das neue Projekt gesprochen.', 'Wir haben gesprochen [über das neue Projekt]. (coloquial)']
        ] }
      ],
      examples: [['Das ist teurer gewesen, als ich gedacht hatte.', 'Fue más caro de lo que había pensado.', 'That was more expensive than I had thought.'], ['Er hat angefangen, Deutsch zu lernen.', 'Empezó a aprender alemán.', 'He started learning German.'], ['Ich habe eine Frau kennengelernt, die in Chile gelebt hat.', 'Conocí a una mujer que vivió en Chile.', 'I met a woman who lived in Chile.']]
    },
    {
      id: 'g-coord', level: 'A2', de: 'Koordinierende Konjunktionen', es: 'Conjunciones coordinantes', en: 'Coordinating conjunctions',
      summary: M('und, oder, aber, denn, sondern (y doch): ocupan la «posición 0», no cuentan para la regla V2. Coma obligatoria antes de aber, denn, sondern, doch.', 'und, oder, aber, denn, sondern (and doch): they occupy “position 0” and do not count for the V2 rule. Comma required before aber, denn, sondern, doch.'),
      blocks: [
        { b: 'slots', h: M('Posición 0', 'Position 0'), c: [M('Pos. 0', 'Pos. 0'), 'Vorfeld', M('Verbo', 'Verb'), 'Mittelfeld'], v: [2], r: [
          ['und', 'ich', 'gehe', 'nach Hause.'], ['aber', 'heute', 'habe', 'ich keine Zeit.'], ['denn', 'ich', 'bin', 'müde.'], ['sondern', 'wir', 'fahren', 'morgen.']
        ], n: M('denn = porque (orden normal, registro algo formal); sondern solo tras negación (nicht …, sondern …).', 'denn = because (normal order, slightly formal); sondern only after a negation (nicht …, sondern …).') }
      ],
      examples: [['Ich bleibe zu Hause, denn ich bin krank.', 'Me quedo en casa, pues estoy enfermo.', 'I’m staying at home, because I’m ill.'], ['Er kommt nicht heute, sondern morgen.', 'No viene hoy, sino mañana.', 'He isn’t coming today but tomorrow.'], ['Ich möchte mitkommen, aber ich habe keine Zeit.', 'Quiero ir, pero no tengo tiempo.', 'I’d like to come, but I have no time.']]
    },
    {
      id: 'g-subord', level: 'A2', de: 'Nebensätze und subordinierende Konjunktionen', es: 'Subordinadas y conjunciones subordinantes', en: 'Subordinate clauses and subordinating conjunctions',
      summary: M('El conector subordinante envía el verbo conjugado al final. Si la subordinada va primero, ocupa el Vorfeld y el verbo principal va inmediatamente después (verbo, verbo).', 'A subordinating connector sends the finite verb to the end. If the subordinate clause comes first, it fills the Vorfeld and the main verb follows immediately (verb, verb).'),
      blocks: [
        { b: 'table', h: M('Conectores por relación', 'Connectors by relation'), c: [M('Relación', 'Relation'), M('Conectores', 'Connectors'), M('Ejemplo', 'Example')], r: [
          [M('contenido', 'content'), 'dass, ob, W-Wort', 'Ich weiß, [dass] du recht [hast].'], [M('causa', 'cause'), 'weil, da', 'Ich bleibe, [weil] ich krank [bin].'],
          [M('concesión', 'concession'), 'obwohl, obgleich, auch wenn', '[Obwohl] es [regnet], gehen wir.'], [M('condición', 'condition'), 'wenn, falls, sofern', '[Wenn] du [willst], komme ich mit.'],
          [M('finalidad', 'purpose'), 'damit, um … zu', 'Ich spreche langsam, [damit] du mich [verstehst].'], [M('consecuencia', 'consequence'), 'sodass, so …, dass', 'Er war müde, [sodass] er früh [schlief].'],
          [M('tiempo', 'time'), 'als, wenn, während, bevor, nachdem, seit, bis, sobald, solange', '[Als] ich klein [war], …'], [M('modo', 'manner'), 'indem, ohne dass, (an)statt dass', 'Er lernt, [indem] er [liest].'],
          [M('comparación', 'comparison'), 'als ob, wie, je … desto', 'Er tut, [als ob] er nichts [wüsste].']
        ] },
        { b: 'table', h: M('als o wenn', 'als or wenn'), c: [M('Uso', 'Use'), M('Conector', 'Connector'), M('Ejemplo', 'Example')], r: [
          [M('un hecho único en el pasado', 'single past event'), 'als', 'Als ich 1990 nach Leipzig kam, …'], [M('repetición en el pasado (cada vez que)', 'repeated past events (whenever)'), '(immer) wenn', 'Immer wenn ich bei Oma war, …'],
          [M('presente / futuro', 'present / future'), 'wenn', 'Wenn ich Zeit habe, …']
        ] }
      ],
      examples: [['Weil ich müde war, bin ich früh ins Bett gegangen.', 'Como estaba cansado, me acosté temprano.', 'Because I was tired, I went to bed early.'], ['Ich weiß nicht, ob er heute kommt.', 'No sé si viene hoy.', 'I don’t know whether he’s coming today.'], ['Nachdem wir gegessen hatten, gingen wir spazieren.', 'Después de comer, salimos a caminar.', 'After we had eaten, we went for a walk.']]
    },
    {
      id: 'g-connectors-adv', level: 'B1', de: 'Konnektoren: Adverbien und Präzision', es: 'Conectores adverbiales y de precisión', en: 'Adverbial and precision connectors',
      summary: M('Los conectores adverbiales (deshalb, trotzdem, folglich, außerdem…) ocupan el Vorfeld o el campo medio, nunca la posición 0: el verbo va inmediatamente después. Los conectores de precisión (insofern … als, sofern, zumal, wohingegen…) subordinan.', 'Adverbial connectors (deshalb, trotzdem, folglich, außerdem…) fill the Vorfeld or middle field, never position 0: the verb follows immediately. Precision connectors (insofern … als, sofern, zumal, wohingegen…) subordinate.'),
      blocks: [
        { b: 'table', h: M('Conectores adverbiales', 'Adverbial connectors'), c: [M('Relación', 'Relation'), M('Conectores', 'Connectors'), M('Ejemplo', 'Example')], r: [
          [M('consecuencia', 'consequence'), 'deshalb, deswegen, darum, daher, also, folglich, somit, demnach', 'Es regnet, [deshalb] bleiben wir zu Hause.'],
          [M('concesión', 'concession'), 'trotzdem, dennoch, gleichwohl, allerdings', 'Es regnet, [trotzdem] gehen wir.'],
          [M('adición', 'addition'), 'außerdem, zudem, ferner, auch', '[Außerdem] ist es zu teuer.'],
          [M('contraste', 'contrast'), 'dagegen, hingegen, jedoch, aber (en el campo medio)', 'Er liest gern, sie [hingegen] sieht lieber fern.'],
          [M('tiempo', 'time'), 'dann, danach, vorher, inzwischen, schließlich, zuerst', '[Danach] gingen wir essen.'],
          [M('alternativa', 'alternative'), 'sonst, andernfalls', 'Beeil dich, [sonst] verpasst du den Zug.']
        ] },
        { b: 'ref', id: 'g-subord' }
      ],
      examples: [['Der Zug hatte Verspätung, deshalb kamen wir zu spät.', 'El tren venía atrasado; por eso llegamos tarde.', 'The train was late, so we arrived late.'], ['Die Wohnung ist schön, allerdings ziemlich teuer.', 'El departamento es bonito, eso sí, bastante caro.', 'The flat is nice, though rather expensive.'], ['Beeil dich, sonst kommst du zu spät!', '¡Apúrate, si no llegas tarde!', 'Hurry up, or you’ll be late!']]
    },
    {
      id: 'g-two-part', level: 'B1', de: 'Zweiteilige Konnektoren', es: 'Conectores dobles', en: 'Two-part connectors',
      summary: M('sowohl … als auch (tanto… como), nicht nur … sondern auch, entweder … oder, weder … noch, zwar … aber, je … desto/umso. Je introduce una subordinada (verbo final); desto/umso + comparativo va en el Vorfeld de la principal.', 'sowohl … als auch (both… and), nicht nur … sondern auch, entweder … oder, weder … noch, zwar … aber, je … desto/umso. Je introduces a subordinate clause (verb last); desto/umso + comparative fills the main clause Vorfeld.'),
      blocks: [
        { b: 'table', h: M('Significado y uso', 'Meaning and use'), c: [M('Conector', 'Connector'), M('Significado', 'Meaning'), M('Ejemplo', 'Example')], r: [
          ['sowohl … als auch', M('tanto… como', 'both… and'), 'Sie spricht [sowohl] Deutsch [als auch] Spanisch.'], ['nicht nur … sondern auch', M('no solo… sino también', 'not only… but also'), 'Er ist [nicht nur] klug, [sondern auch] nett.'],
          ['entweder … oder', M('o… o', 'either… or'), '[Entweder] du kommst mit, [oder] du bleibst hier.'], ['weder … noch', M('ni… ni', 'neither… nor'), 'Ich habe [weder] Zeit [noch] Geld.'],
          ['zwar … aber', M('es cierto que… pero', 'admittedly… but'), 'Das ist [zwar] teuer, [aber] gut.'], ['je … desto / umso', M('cuanto más… más', 'the more… the more'), '[Je] mehr ich lerne, [desto] besser verstehe ich.']
        ] }
      ],
      examples: [['Je früher wir losfahren, desto weniger Verkehr gibt es.', 'Cuanto antes salgamos, menos tráfico habrá.', 'The earlier we leave, the less traffic there will be.'], ['Ich trinke weder Kaffee noch Tee.', 'No tomo ni café ni té.', 'I drink neither coffee nor tea.'], ['Die Stadt ist nicht nur schön, sondern auch günstig.', 'La ciudad no solo es bonita, sino también barata.', 'The city is not only beautiful but also affordable.']]
    },
    {
      id: 'g-conditional-v1', level: 'C1', de: 'Konditionalsätze ohne Konjunktion', es: 'Condicionales sin conector', en: 'Conditionals without a connector',
      summary: M('La condición puede expresarse con el verbo conjugado en posición 1: Hätte ich Zeit, … · Kommt er, (so/dann) … · Sollte es regnen, … (si llegara a…). Muy frecuente en registro escrito y en fórmulas formales (Sollten Sie Fragen haben, …).', 'The condition can be expressed with the finite verb in position 1: Hätte ich Zeit, … · Kommt er, (so/dann) … · Sollte es regnen, … (should it…). Very frequent in written register and formal formulas (Sollten Sie Fragen haben, …).'),
      blocks: [
        { b: 'pairs', h: M('Con wenn y sin wenn', 'With and without wenn'), r: [
          ['Wenn ich Zeit hätte, käme ich mit.', '[Hätte] ich Zeit, käme ich mit.'], ['Wenn der Zug pünktlich gewesen wäre, …', '[Wäre] der Zug pünktlich gewesen, …'],
          ['Falls es regnet, bleiben wir zu Hause.', '[Sollte] es regnen, bleiben wir zu Hause.'], ['Wenn Sie Fragen haben, rufen Sie an.', '[Sollten] Sie Fragen haben, rufen Sie an.']
        ] }
      ],
      examples: [['Hätte ich das gewusst, wäre ich gekommen.', 'De haberlo sabido, habría venido.', 'Had I known, I would have come.'], ['Sollte der Termin nicht passen, melden Sie sich bitte.', 'Si la cita no le acomoda, avísenos, por favor.', 'Should the appointment not suit you, please get in touch.'], ['Regnet es, (dann) bleiben wir drinnen.', 'Si llueve, nos quedamos adentro.', 'If it rains, we stay inside.']]
    },
    {
      id: 'g-participial-attr', level: 'B2', de: 'Erweiterte Partizipialattribute', es: 'Atributos de participio extendidos', en: 'Extended participial attributes',
      summary: M('Entre el artículo y el sustantivo puede ir todo un «sintagma verbal comprimido»: die [gestern von der Stadt veröffentlichte] Studie. Para leerlos: artículo → sustantivo → participio → complementos. Para escribir con claridad, se pueden transformar en relativas.', 'Between article and noun there can be a whole “compressed verb phrase”: die [gestern von der Stadt veröffentlichte] Studie. To read them: article → noun → participle → complements. To write clearly, turn them into relative clauses.'),
      blocks: [
        { b: 'slots', h: M('Anatomía', 'Anatomy'), c: [M('Artículo', 'Article'), M('Complementos', 'Complements'), M('Participio', 'Participle'), M('Sustantivo', 'Noun')], v: [2], r: [
          ['die', 'gestern von der Stadt', 'veröffentlichte', 'Studie'], ['die', 'seit Jahren stark', 'steigenden', 'Mieten'], ['die', 'bis Freitag', 'zu lösende', 'Aufgabe'], ['der', 'aus Berlin', 'angekommene', 'Zug']
        ] },
        { b: 'ref', id: 'g-participles', table: 1 }
      ],
      examples: [['Die im Text genannten Zahlen sind gerundet.', 'Las cifras mencionadas en el texto están redondeadas.', 'The figures mentioned in the text are rounded.'], ['Das ist eine nicht zu unterschätzende Gefahr.', 'Es un peligro que no hay que subestimar.', 'That is a danger not to be underestimated.'], ['Die von uns befragten Personen waren zufrieden.', 'Las personas encuestadas por nosotros estaban satisfechas.', 'The people we surveyed were satisfied.']]
    },
    {
      id: 'g-genitive-chains', level: 'C1', de: 'Genitivketten', es: 'Cadenas de genitivo', en: 'Genitive chains',
      summary: M('Los sustantivos encadenados en genitivo se leen de derecha a izquierda: die Bedingungen der Möglichkeit der Erfahrung = la experiencia → su posibilidad → las condiciones de ella. Más de tres eslabones dificultan la lectura: conviene deshacerlas con verbos.', 'Nouns chained in the genitive are read right to left: die Bedingungen der Möglichkeit der Erfahrung = experience → its possibility → its conditions. More than three links hamper reading: unpack them with verbs.'),
      blocks: [
        { b: 'pairs', h: M('Desplegar una cadena', 'Unfolding a chain'), r: [
          ['die Kritik der Methode der Studie', 'Man kritisiert, wie die Studie vorgegangen ist.'], ['die Verbesserung der Qualität des Unterrichts', 'Der Unterricht soll besser werden.'], ['die Frage nach dem Sinn des Lebens', 'Man fragt, welchen Sinn das Leben hat.']
        ] }
      ],
      examples: [['Die Analyse der Ergebnisse der Umfrage dauert zwei Wochen.', 'El análisis de los resultados de la encuesta tarda dos semanas.', 'The analysis of the survey results takes two weeks.'], ['die Phänomenologie des Geistes', 'la Fenomenología del espíritu', 'the Phenomenology of Spirit'], ['die Freiheit des Willens', 'la libertad de la voluntad', 'freedom of the will']]
    },
    {
      id: 'g-nominal-style', level: 'B2', de: 'Nominalstil und Verbalstil', es: 'Estilo nominal y estilo verbal', en: 'Nominal and verbal style',
      summary: M('El estilo nominal (textos oficiales, científicos) condensa subordinadas en sustantivos con preposición: weil → wegen, obwohl → trotz, wenn → bei, nachdem → nach, bevor → vor, damit → zu/für, indem → durch. El verbal es más claro; el buen estilo alterna ambos.', 'Nominal style (official, scientific texts) condenses clauses into nouns with prepositions: weil → wegen, obwohl → trotz, wenn → bei, nachdem → nach, bevor → vor, damit → zu/für, indem → durch. Verbal style is clearer; good style alternates.'),
      blocks: [
        { b: 'pairs', h: M('Transformaciones', 'Transformations'), r: [
          ['[Weil] es stark [regnete], …', '[Wegen] des starken Regens …'], ['[Obwohl] er krank [war], …', '[Trotz] seiner Krankheit …'], ['[Wenn] man [arbeitet], …', '[Bei] der Arbeit …'],
          ['[Nachdem] der Zug [angekommen war], …', '[Nach] der Ankunft des Zuges …'], ['[Damit] die Luft besser [wird], …', '[Zur] Verbesserung der Luft …'], ['[Indem] man neue Linien [einführt], …', '[Durch] die Einführung neuer Linien …']
        ] },
        { b: 'ref', id: 'g-word-formation', table: 1 }
      ],
      examples: [['Nach Abschluss des Studiums arbeitete sie in Berlin.', 'Tras terminar los estudios, trabajó en Berlín.', 'After finishing her studies she worked in Berlin.'], ['Bei schlechtem Wetter findet das Fest im Saal statt.', 'Con mal tiempo, la fiesta se hace en el salón.', 'In bad weather the party takes place in the hall.'], ['Zur Vorbereitung lesen Sie bitte Kapitel 3.', 'Como preparación, lean el capítulo 3.', 'To prepare, please read chapter 3.']]
    },
    {
      id: 'g-fvg', level: 'B2', de: 'Funktionsverbgefüge', es: 'Construcciones con verbo funcional', en: 'Light-verb constructions',
      summary: M('Verbo casi vacío + sustantivo que aporta el significado. Más formales que el verbo simple y a veces con matiz aspectual (in Gang kommen = empezar a funcionar) o pasivo (Anwendung finden = ser aplicado).', 'Almost empty verb + noun carrying the meaning. More formal than the simple verb and sometimes with an aspectual (in Gang kommen = get going) or passive nuance (Anwendung finden = be applied).'),
      blocks: [
        { b: 'table', h: M('Las más frecuentes', 'The most frequent'), c: [M('Construcción', 'Construction'), M('Equivale a', 'Equals'), M('Ejemplo', 'Example')], r: [
          ['eine Entscheidung treffen', 'entscheiden', 'Wir müssen eine Entscheidung treffen.'], ['eine Frage stellen', 'fragen', 'Darf ich eine Frage stellen?'], ['in Frage stellen', 'bezweifeln', 'Sie stellt das Ergebnis in Frage.'],
          ['zur Verfügung stellen / stehen', 'geben / verfügbar sein', 'Die Uni stellt Räume zur Verfügung.'], ['in Kraft treten', 'gültig werden', 'Das Gesetz tritt im Januar in Kraft.'], ['Kritik üben an', 'kritisieren', 'Er übt Kritik an dem Plan.'],
          ['zum Ausdruck bringen', 'ausdrücken', 'Sie brachte ihre Sorge zum Ausdruck.'], ['in Betracht ziehen', 'erwägen', 'Wir ziehen eine Ausnahme in Betracht.'], ['Rücksicht nehmen auf', 'berücksichtigen', 'Nimm Rücksicht auf die Nachbarn!'],
          ['Anwendung finden', 'angewendet werden', 'Die Regel findet keine Anwendung.'], ['zur Diskussion stellen', 'diskutieren lassen', 'Ich stelle die These zur Diskussion.'], ['in Anspruch nehmen', 'nutzen; beanspruchen', 'Das nimmt viel Zeit in Anspruch.'],
          ['Abschied nehmen von', 'sich verabschieden', 'Wir nahmen Abschied von Leipzig.'], ['einen Beitrag leisten zu', 'beitragen', 'Jeder kann einen Beitrag leisten.'], ['unter Druck setzen / stehen', 'drängen / gedrängt werden', 'Er steht unter Druck.']
        ] }
      ],
      examples: [['Der Rat hat noch keine Entscheidung getroffen.', 'El concejo aún no ha tomado una decisión.', 'The council hasn’t made a decision yet.'], ['Die neue Regel tritt morgen in Kraft.', 'La nueva norma entra en vigor mañana.', 'The new rule comes into force tomorrow.'], ['Das nimmt viel Zeit in Anspruch.', 'Eso requiere mucho tiempo.', 'That takes up a lot of time.']]
    }
  ]);
})();
