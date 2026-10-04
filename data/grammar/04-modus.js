/* Gramática · Modus */
(function () {
  const M = (es, en) => ({ es, en });
  DD.grammarTopic('k-modus', [
    {
      id: 'g-k2', level: 'B1', de: 'Konjunktiv II der Gegenwart', es: 'Konjunktiv II de presente', en: 'Present Konjunktiv II',
      summary: M('El modo de lo irreal, lo hipotético y lo cortés. Forma analítica: würde + infinitivo (la más usada). Formas simples obligatorias con sein, haben, modales y frecuentes con algunos verbos fuertes (käme, ginge, wüsste, gäbe). Se forma desde el Präteritum: fuertes con Umlaut + -e.', 'The mood of the unreal, the hypothetical and the polite. Analytic form: würde + infinitive (most used). Simple forms obligatory with sein, haben, modals and frequent with some strong verbs (käme, ginge, wüsste, gäbe). Formed from the Präteritum: strong verbs with umlaut + -e.'),
      blocks: [
        { b: 'table', h: M('Formas simples', 'Simple forms'), c: ['', 'sein', 'haben', 'werden', 'können', 'müssen', 'dürfen', 'sollen', 'wollen', 'wissen'], r: [
          ['ich', 'wäre', 'hätte', 'würde', 'könnte', 'müsste', 'dürfte', 'sollte', 'wollte', 'wüsste'],
          ['du', 'wär(e)st', 'hättest', 'würdest', 'könntest', 'müsstest', 'dürftest', 'solltest', 'wolltest', 'wüsstest'],
          ['er / sie / es', 'wäre', 'hätte', 'würde', 'könnte', 'müsste', 'dürfte', 'sollte', 'wollte', 'wüsste'],
          ['wir', 'wären', 'hätten', 'würden', 'könnten', 'müssten', 'dürften', 'sollten', 'wollten', 'wüssten'],
          ['ihr', 'wär(e)t', 'hättet', 'würdet', 'könntet', 'müsstet', 'dürftet', 'solltet', 'wolltet', 'wüsstet'],
          ['sie / Sie', 'wären', 'hätten', 'würden', 'könnten', 'müssten', 'dürften', 'sollten', 'wollten', 'wüssten']
        ], n: M('sollen y wollen no llevan Umlaut: K2 = Präteritum. Otros verbos fuertes frecuentes: käme, ginge, gäbe, bliebe, ließe, fände, hielte, läge, stünde/stände, täte.', 'sollen and wollen take no umlaut: K2 = Präteritum. Other frequent strong verbs: käme, ginge, gäbe, bliebe, ließe, fände, hielte, läge, stünde/stände, täte.') },
        { b: 'table', h: M('Usos del Konjunktiv II', 'Uses of Konjunktiv II'), c: [M('Uso', 'Use'), M('Ejemplo', 'Example')], r: [
          [M('cortesía', 'politeness'), '[Könnten] Sie mir helfen? · Ich [hätte] gern einen Tee.'],
          [M('deseo irreal', 'unreal wish'), 'Wenn ich nur mehr Zeit [hätte]! · Ich [wünschte], du [wärst] hier.'],
          [M('condición irreal', 'unreal condition'), 'Wenn ich reich [wäre], [würde] ich reisen.'],
          [M('consejo', 'advice'), 'Du [solltest] mehr schlafen. · An deiner Stelle [würde] ich …'],
          [M('comparación irreal', 'unreal comparison'), 'Er tut so, als ob er alles [wüsste].'],
          [M('cautela, conjetura', 'caution, conjecture'), 'Das [dürfte] stimmen. · Es [wäre] möglich, dass …']
        ] }
      ],
      examples: [['Ich würde gern mitkommen, aber ich habe keine Zeit.', 'Me gustaría ir, pero no tengo tiempo.', 'I’d like to come, but I have no time.'], ['Wenn ich du wäre, würde ich das Angebot annehmen.', 'Si yo fuera tú, aceptaría la oferta.', 'If I were you, I’d accept the offer.'], ['Hätten Sie kurz Zeit?', '¿Tendría un momento?', 'Would you have a moment?']]
    },
    {
      id: 'g-conditional', level: 'B1', de: 'Bedingungssätze: real und irreal', es: 'Oraciones condicionales: reales e irreales', en: 'Conditional sentences: real and unreal',
      summary: M('Real (posible): wenn/falls + indicativo. Irreal en el presente: K2 en ambas partes. Irreal en el pasado: hätte/wäre + PII en ambas partes. Sin wenn, el verbo va en posición 1.', 'Real (possible): wenn/falls + indicative. Unreal present: K2 in both halves. Unreal past: hätte/wäre + PII in both halves. Without wenn, the verb goes first.'),
      blocks: [
        { b: 'table', h: M('Los tres tipos', 'The three types'), c: [M('Tipo', 'Type'), M('Condición', 'Condition'), M('Consecuencia', 'Consequence')], r: [
          [M('real', 'real'), 'Wenn es [regnet],', 'bleiben wir zu Hause.'],
          [M('irreal presente', 'unreal present'), 'Wenn es [regnen würde] / Wenn ich Zeit [hätte],', '[würden] wir zu Hause [bleiben].'],
          [M('irreal pasado', 'unreal past'), 'Wenn es [geregnet hätte],', '[wären] wir zu Hause [geblieben].'],
          [M('mixto', 'mixed'), 'Wenn ich gestern früher [geschlafen hätte],', '[wäre] ich jetzt nicht so müde.']
        ], n: M('falls y sofern solo para condiciones reales; im Fall, dass / vorausgesetzt, dass: formales.', 'falls and sofern only for real conditions; im Fall, dass / vorausgesetzt, dass: formal.') }
      ],
      examples: [['Falls du Hilfe brauchst, ruf mich an.', 'Si necesitas ayuda, llámame.', 'If you need help, call me.'], ['Wenn ich mehr Geld hätte, würde ich eine größere Wohnung mieten.', 'Si tuviera más dinero, arrendaría un departamento más grande.', 'If I had more money, I’d rent a bigger flat.'], ['Wenn wir den Zug genommen hätten, wären wir pünktlich gewesen.', 'Si hubiéramos tomado el tren, habríamos llegado puntuales.', 'If we had taken the train, we would have been on time.']]
    },
    {
      id: 'g-k2-past', level: 'B1', de: 'Konjunktiv II der Vergangenheit', es: 'Konjunktiv II de pasado', en: 'Past Konjunktiv II',
      summary: M('hätte / wäre + Partizip II (misma elección de auxiliar que en el Perfekt). Con modal: hätte + infinitivo + modal en infinitivo (doble infinitivo). Para condiciones, deseos, reproches y lamentos referidos al pasado.', 'hätte / wäre + Partizip II (same auxiliary choice as in the Perfekt). With a modal: hätte + infinitive + modal infinitive (double infinitive). For past conditions, wishes, reproaches and regrets.'),
      blocks: [
        { b: 'table', h: M('Formas y funciones', 'Forms and functions'), c: [M('Función', 'Function'), M('Ejemplo', 'Example')], r: [
          [M('condición irreal', 'unreal condition'), 'Wenn ich das [gewusst hätte], [wäre] ich [gekommen].'],
          [M('deseo irreal', 'unreal wish'), '[Hätte] ich das bloß [gewusst]!'],
          [M('reproche', 'reproach'), 'Du [hättest] mich [anrufen sollen].'],
          [M('posibilidad no aprovechada', 'missed possibility'), 'Wir [hätten] den Zug [nehmen können].'],
          [M('casi ocurrió', 'nearly happened'), 'Fast [wäre] ich [gefallen].'],
          [M('comparación irreal', 'unreal comparison'), 'Er tut so, als ob er nichts [gehört hätte].']
        ] }
      ],
      examples: [['Ohne dich hätte ich es nicht geschafft.', 'Sin ti no lo habría logrado.', 'Without you I wouldn’t have made it.'], ['Das hättest du mir früher sagen müssen.', 'Eso debiste decírmelo antes.', 'You should have told me that earlier.'], ['Beinahe hätte ich den Termin vergessen.', 'Por poco olvido la cita.', 'I nearly forgot the appointment.']]
    },
    {
      id: 'g-k1', level: 'B2', de: 'Konjunktiv I', es: 'Konjunktiv I', en: 'Konjunktiv I',
      summary: M('Raíz del infinitivo + -e, -est, -e, -en, -et, -en. Se usa casi solo en 3.ª persona singular (er komme, sie habe, es gebe) y con sein en todas las personas. Función principal: discurso indirecto con distancia. Si coincide con el indicativo, se sustituye por el K2.', 'Infinitive stem + -e, -est, -e, -en, -et, -en. Used almost only in the 3rd person singular (er komme, sie habe, es gebe) and with sein in all persons. Main function: indirect speech with distance. If it coincides with the indicative, the K2 replaces it.'),
      blocks: [
        { b: 'table', h: M('Formas del Konjunktiv I', 'Konjunktiv I forms'), c: ['', 'sein', 'haben', 'werden', 'können', 'kommen', 'wissen'], r: [
          ['ich', 'sei', 'habe → hätte', 'werde → würde', 'könne', 'komme → käme', 'wisse'],
          ['du', 'sei(e)st', 'habest', 'werdest', 'könnest', 'kommest', 'wissest'],
          ['er / sie / es', 'sei', 'habe', 'werde', 'könne', 'komme', 'wisse'],
          ['wir', 'seien', 'haben → hätten', 'werden → würden', 'können → könnten', 'kommen → kämen', 'wissen → wüssten'],
          ['ihr', 'seiet', 'habet', 'werdet', 'könnet', 'kommet', 'wisset'],
          ['sie / Sie', 'seien', 'haben → hätten', 'werden → würden', 'können → könnten', 'kommen → kämen', 'wissen → wüssten']
        ], n: M('→ indica la sustitución por el K2 cuando el K1 coincide con el indicativo.', '→ marks replacement by K2 where K1 coincides with the indicative.') },
        { b: 'table', h: M('Otros usos del Konjunktiv I', 'Other uses of Konjunktiv I'), c: [M('Uso', 'Use'), M('Ejemplo', 'Example')], r: [
          [M('deseo, fórmula fija', 'wish, fixed formula'), 'Es [lebe] die Freiheit! · Gott [sei] Dank!'],
          [M('instrucciones (recetas, matemática)', 'instructions (recipes, maths)'), 'Man [nehme] 200 g Mehl. · Gegeben [sei] ein Dreieck.'],
          [M('concesión formal', 'formal concession'), 'Wie dem auch [sei], …'],
          [M('condición negativa', 'negative condition'), '…, es [sei] denn, es regnet.']
        ] }
      ],
      examples: [['Er sagt, er sei krank.', 'Dice que está enfermo.', 'He says he is ill.'], ['Laut Bericht gebe es keine Probleme.', 'Según el informe no hay problemas.', 'According to the report there are no problems.'], ['Man nehme zwei Eier und etwas Zucker.', 'Tómense dos huevos y algo de azúcar.', 'Take two eggs and some sugar.']]
    },
    {
      id: 'g-indirect-speech', level: 'B2', de: 'Indirekte Rede', es: 'Discurso indirecto', en: 'Indirect speech',
      summary: M('Para referir palabras ajenas: verbo introductorio + oración con o sin dass en Konjunktiv I (o II por sustitución). Solo tres tiempos: presente (er sei), pasado (er sei gewesen / habe gesagt) y futuro (er werde kommen). Preguntas con ob / palabra W; órdenes con sollen / mögen.', 'To report someone’s words: reporting verb + clause with or without dass in Konjunktiv I (or II by replacement). Only three times: present (er sei), past (er sei gewesen / habe gesagt) and future (er werde kommen). Questions with ob / W-word; commands with sollen / mögen.'),
      blocks: [
        { b: 'table', h: M('Transformaciones', 'Transformations'), c: [M('Directo', 'Direct'), M('Indirecto', 'Indirect')], r: [
          ['„Ich [bin] müde.“', 'Sie sagt, sie [sei] müde.'],
          ['„Wir [haben] keine Zeit.“', 'Sie sagen, sie [hätten] keine Zeit.'],
          ['„Ich [war] / [bin gewesen] krank.“', 'Er sagt, er [sei] krank [gewesen].'],
          ['„Ich [werde] kommen.“', 'Er sagt, er [werde] kommen.'],
          ['„[Kommst] du mit?“', 'Sie fragt, [ob] ich mitkomme / mitkäme.'],
          ['„Wo [wohnst] du?“', 'Er fragt, [wo] ich wohne.'],
          ['„[Ruf] mich an!“', 'Sie sagt, ich [solle] sie anrufen.'],
          ['„Bitte [warten] Sie!“', 'Er bat, ich [möge] warten.']
        ], n: M('Cambian también pronombres y adverbios según la perspectiva: ich → er/sie, hier → dort, heute → an diesem Tag, morgen → am nächsten Tag.', 'Pronouns and adverbs also shift with perspective: ich → er/sie, hier → dort, heute → an diesem Tag, morgen → am nächsten Tag.') },
        { b: 'list', h: M('Verbos introductorios', 'Reporting verbs'), cols: 3, r: [['sagen', M('decir', 'say')], ['erklären', M('explicar', 'explain')], ['behaupten', M('afirmar', 'claim')], ['betonen', M('subrayar', 'stress')], ['berichten', M('informar', 'report')], ['versichern', M('asegurar', 'assure')], ['bestreiten', M('negar', 'deny')], ['zugeben', M('admitir', 'admit')], ['fragen', M('preguntar', 'ask')], ['meinen', M('opinar', 'think')], ['vermuten', M('suponer', 'suppose')], ['bezweifeln', M('dudar', 'doubt')]] }
      ],
      examples: [['Der Minister erklärte, die Lage sei stabil.', 'El ministro explicó que la situación era estable.', 'The minister explained that the situation was stable.'], ['Sie fragte, wann der Zug ankomme.', 'Preguntó cuándo llegaba el tren.', 'She asked when the train would arrive.'], ['Er behauptet, er habe nichts gesehen.', 'Afirma no haber visto nada.', 'He claims he saw nothing.']]
    },
    {
      id: 'g-modal-subjective', level: 'B2', de: 'Subjektive Modalverben', es: 'Modales subjetivos (epistémicos)', en: 'Subjective (epistemic) modal verbs',
      summary: M('En uso subjetivo el modal expresa el grado de certeza del hablante (muss › dürfte › kann/könnte › kann nicht) o la fuente de la información (soll = dicen otros; will = afirma el sujeto). Para el pasado: modal en presente + infinitivo de pasado.', 'In subjective use the modal expresses the speaker’s certainty (muss › dürfte › kann/könnte › kann nicht) or the source of information (soll = others say; will = the subject claims). For the past: present modal + past infinitive.'),
      blocks: [
        { b: 'table', h: M('Escala y fuentes', 'Scale and sources'), c: [M('Modal', 'Modal'), M('Valor', 'Value'), M('Presente', 'Present'), M('Pasado', 'Past')], r: [
          ['muss', '≈ 95 %', 'Er [muss] krank sein.', 'Er [muss] krank [gewesen sein].'],
          ['dürfte', '≈ 75 %', 'Das [dürfte] stimmen.', 'Sie [dürfte] schon [angekommen sein].'],
          ['wird (wohl)', '≈ 70 %', 'Er [wird] wohl zu Hause sein.', 'Er [wird] es wohl [vergessen haben].'],
          ['kann / könnte', '≈ 50 %', 'Das [könnte] ein Fehler sein.', 'Er [könnte] sich [geirrt haben].'],
          ['kann nicht', '≈ 0 %', 'Das [kann nicht] stimmen.', 'Er [kann] das nicht [gewesen sein].'],
          ['soll', M('dicen otros', 'others say'), 'Er [soll] reich sein.', 'Er [soll] geflohen [sein].'],
          ['will', M('lo afirma él', 'he claims'), 'Sie [will] Ärztin sein.', 'Sie [will] nichts [gesehen haben].']
        ] }
      ],
      examples: [['Sie muss den Zug verpasst haben.', 'Debe de haber perdido el tren.', 'She must have missed the train.'], ['Der Schauspieler soll sehr schüchtern sein.', 'Dicen que el actor es muy tímido.', 'The actor is said to be very shy.'], ['Er will die Prüfung ohne Lernen bestanden haben.', 'Afirma haber aprobado el examen sin estudiar.', 'He claims to have passed the exam without studying.']]
    }
  ]);
})();
