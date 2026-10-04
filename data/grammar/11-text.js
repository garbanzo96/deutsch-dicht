/* Gramática · Text und Stil */
(function () {
  const M = (es, en) => ({ es, en });
  DD.grammarTopic('k-text', [
    {
      id: 'g-register', level: 'B2', de: 'Register und formelle Schreiben', es: 'Registro y escritos formales', en: 'Register and formal writing',
      summary: M('El registro se marca en el léxico (kriegen / bekommen / erhalten), la sintaxis (verbal / nominal), el trato (du / Sie) y la cortesía (Konjunktiv II). La carta formal alemana tiene una estructura fija.', 'Register shows in vocabulary (kriegen / bekommen / erhalten), syntax (verbal / nominal), address (du / Sie) and politeness (Konjunktiv II). The German formal letter has a fixed structure.'),
      blocks: [
        { b: 'table', h: M('Tres registros', 'Three registers'), c: [M('Coloquial', 'Colloquial'), M('Estándar', 'Standard'), M('Formal', 'Formal')], r: [
          ['kriegen', 'bekommen', 'erhalten'], ['gucken', 'sehen', 'betrachten'], ['Kumpel', 'Freund', 'Bekannter'], ['kaputt', 'nicht in Ordnung', 'defekt'], ['super', 'sehr gut', 'ausgezeichnet'], ['Hast du Zeit?', 'Haben Sie Zeit?', 'Hätten Sie kurz Zeit?']
        ] },
        { b: 'table', h: M('Carta formal', 'Formal letter'), c: [M('Parte', 'Part'), M('Fórmula', 'Formula')], r: [
          [M('saludo', 'greeting'), 'Sehr geehrte Frau Berger, · Sehr geehrter Herr Weiß, · Sehr geehrte Damen und Herren,'],
          [M('motivo', 'reason'), 'ich wende mich an Sie, weil … · Bezug nehmend auf Ihr Schreiben vom …'],
          [M('petición', 'request'), 'Ich bitte Sie, … · Könnten Sie mir bitte mitteilen, ob …'],
          [M('cierre', 'closing'), 'Über eine baldige Antwort würde ich mich freuen.'],
          [M('despedida', 'sign-off'), 'Mit freundlichen Grüßen'], [M('semiformal', 'semi-formal'), 'Liebe Frau Berger, … Viele Grüße · Herzliche Grüße']
        ], n: M('Tras la coma del saludo, la primera palabra va en minúscula (salvo sustantivos). Fecha: Leipzig, den 3. Oktober 2026.', 'After the greeting comma, the first word is lower case (unless a noun). Date: Leipzig, den 3. Oktober 2026.') }
      ],
      examples: [['Sehr geehrte Damen und Herren, ich wende mich an Sie, weil die Heizung defekt ist.', 'Estimados señores: me dirijo a ustedes porque la calefacción está averiada.', 'Dear Sir or Madam, I am writing because the heating is broken.'], ['Haben Sie meine E-Mail erhalten?', '¿Recibió mi correo?', 'Did you receive my e-mail?'], ['Mit freundlichen Grüßen', 'Saludos cordiales', 'Yours sincerely']]
    },
    {
      id: 'g-academic', level: 'C1', de: 'Wissenschaftssprache', es: 'Lenguaje académico', en: 'Academic language',
      summary: M('Impersonalidad (pasiva, man, sich lassen, sein + zu), condensación (estilo nominal, atributos de participio, cadenas de genitivo), Konjunktiv I para referir fuentes y fórmulas fijas de estructura (im Folgenden, Ziel dieser Arbeit ist es, zusammenfassend).', 'Impersonality (passive, man, sich lassen, sein + zu), condensation (nominal style, participial attributes, genitive chains), Konjunktiv I for reporting sources and fixed structuring phrases (im Folgenden, Ziel dieser Arbeit ist es, zusammenfassend).'),
      blocks: [
        { b: 'list', h: M('Redemittel', 'Phrases'), cols: 2, r: [['Im Folgenden wird gezeigt, …', M('a continuación se muestra…', 'in what follows it is shown…')], ['Ziel dieser Arbeit ist es, …', M('el objetivo de este trabajo es…', 'the aim of this paper is…')], ['Es lässt sich zeigen, dass …', M('se puede demostrar que…', 'it can be shown that…')], ['Daraus ergibt sich, dass …', M('de ello se desprende que…', 'it follows that…')], ['Es ist davon auszugehen, dass …', M('cabe suponer que…', 'it can be assumed that…')], ['Im Rahmen dieser Studie …', M('en el marco de este estudio…', 'within this study…')], ['Vor diesem Hintergrund …', M('en este contexto…', 'against this background…')], ['Zusammenfassend lässt sich sagen, …', M('en resumen…', 'in summary…')]] },
        { b: 'ref', id: 'g-passive-alt' }
      ],
      examples: [['Im Folgenden werden zwei Ansätze verglichen.', 'A continuación se comparan dos enfoques.', 'In what follows, two approaches are compared.'], ['Die Daten wurden statistisch ausgewertet.', 'Los datos se analizaron estadísticamente.', 'The data were analysed statistically.'], ['Diese Frage ist noch zu klären.', 'Esta pregunta aún debe aclararse.', 'This question remains to be clarified.']]
    },
    {
      id: 'g-hedging', level: 'C1', de: 'Epistemische Vorsicht', es: 'Cautela epistémica', en: 'Epistemic caution (hedging)',
      summary: M('Graduar la certeza de cada afirmación: zeigen / belegen (hallazgo) › bestätigen, sprechen für › nahelegen, darauf hindeuten (indicio) › gelten als (consenso) › scheinen zu, dürfte (apariencia) › könnte, möglicherweise (posibilidad).', 'Grade the certainty of each claim: zeigen / belegen (finding) › bestätigen, sprechen für › nahelegen, darauf hindeuten (indication) › gelten als (consensus) › scheinen zu, dürfte (appearance) › könnte, möglicherweise (possibility).'),
      blocks: [
        { b: 'table', h: M('De lo seguro a lo especulativo', 'From certain to speculative'), c: [M('Grado', 'Degree'), M('Fórmulas', 'Phrases')], r: [
          [M('hallazgo', 'finding'), 'Die Studie zeigt / belegt / weist nach, dass …'], [M('apoyo', 'support'), 'Dafür spricht, dass … · Die Ergebnisse bestätigen …'], [M('indicio', 'indication'), 'Die Daten legen nahe / deuten darauf hin, dass …'],
          [M('consenso', 'consensus'), 'Das Modell gilt als gut belegt. · Es ist davon auszugehen, dass …'], [M('apariencia', 'appearance'), 'Der Effekt scheint stabil zu sein. · Das dürfte zutreffen.'], [M('posibilidad', 'possibility'), 'Das könnte bedeuten … · Möglicherweise … · Es ist denkbar, dass …']
        ] },
        { b: 'ref', id: 'g-modal-subjective' }
      ],
      examples: [['Die Ergebnisse deuten darauf hin, dass Schlaf das Lernen fördert.', 'Los resultados indican que el sueño favorece el aprendizaje.', 'The results indicate that sleep promotes learning.'], ['Der Effekt scheint bei Kindern stärker zu sein.', 'El efecto parece ser mayor en niños.', 'The effect seems to be stronger in children.'], ['Diese Erklärung gilt heute als überholt.', 'Esta explicación hoy se considera superada.', 'This explanation is now considered outdated.']]
    },
    {
      id: 'g-concession', level: 'C1', de: 'Konzessive Strukturen', es: 'Estructuras concesivas', en: 'Concessive structures',
      summary: M('Conceder antes de objetar: zwar … aber/doch, es mag sein, dass …, zugegeben, obwohl/obgleich, auch wenn, selbst wenn (+ K2), so … auch / wie … auch / was … auch (con principal sin inversión), trotzdem/dennoch.', 'Concede before objecting: zwar … aber/doch, es mag sein, dass …, zugegeben, obwohl/obgleich, auch wenn, selbst wenn (+ K2), so … auch / wie … auch / was … auch (main clause without inversion), trotzdem/dennoch.'),
      blocks: [
        { b: 'table', h: M('Repertorio', 'Repertoire'), c: [M('Fórmula', 'Formula'), M('Ejemplo', 'Example')], r: [
          ['zwar …, aber / doch', 'Das Argument ist [zwar] elegant, [doch] es überzeugt nicht.'], ['Es mag sein, dass …, aber …', '[Es mag sein], dass das stimmt, [aber] …'], ['Zugegeben, …', '[Zugegeben], die Lücke ist nicht geschlossen.'],
          ['obwohl · obgleich · auch wenn', '[Obgleich] die Kritik berechtigt ist, …'], ['selbst wenn (+ K2)', '[Selbst wenn] das wahr wäre, …'], ['so … auch', '[So] überzeugend das [auch] ist, es bleibt eine Hypothese.'], ['was / wie … auch (immer)', '[Was] man [auch] misst, die Frage bleibt.']
        ] }
      ],
      examples: [['Zwar ist die Methode neu, doch die Ergebnisse sind überzeugend.', 'Es cierto que el método es nuevo, pero los resultados convencen.', 'Admittedly the method is new, yet the results are convincing.'], ['Auch wenn es schwer ist, gebe ich nicht auf.', 'Aunque sea difícil, no me rindo.', 'Even if it’s hard, I won’t give up.'], ['Wie dem auch sei, wir müssen entscheiden.', 'Sea como sea, tenemos que decidir.', 'Be that as it may, we have to decide.']]
    },
    {
      id: 'g-argument', level: 'C1', de: 'Argumentieren und Positionen wiedergeben', es: 'Argumentar y referir posiciones', en: 'Arguing and reporting positions',
      summary: M('Estructura de un párrafo argumentativo: tesis ajena → concesión → objeción → conclusión propia. Para referir: vertritt die These / Auffassung, X zufolge, nach Auffassung von X, X argumentiert / wendet ein / weist darauf hin (con Konjunktiv I).', 'Structure of an argumentative paragraph: other’s thesis → concession → objection → own conclusion. To report: vertritt die These / Auffassung, X zufolge, nach Auffassung von X, X argumentiert / wendet ein / weist darauf hin (with Konjunktiv I).'),
      blocks: [
        { b: 'table', h: M('Redemittel', 'Phrases'), c: [M('Función', 'Function'), M('Fórmulas', 'Phrases')], r: [
          [M('tesis', 'thesis'), 'X vertritt die These, dass … · X geht davon aus, dass …'], [M('argumento a favor', 'supporting argument'), 'Dafür spricht, dass … · Ein wichtiges Argument ist …'],
          [M('objeción', 'objection'), 'Dagegen lässt sich einwenden, dass … · Man könnte einwenden … · Dem ist entgegenzuhalten, dass …'], [M('duda', 'doubt'), 'Fraglich ist jedoch, ob … · Es bleibt offen, ob …'],
          [M('opinión propia', 'own view'), 'Meiner Ansicht nach … · Ich teile diese Auffassung (nicht), weil …'], [M('conclusión', 'conclusion'), 'Daraus folgt, dass … · Somit … · Abschließend lässt sich festhalten, …']
        ] },
        { b: 'ref', id: 'g-indirect-speech' }
      ],
      examples: [['Nagel weist darauf hin, dass jedes Erleben subjektiv sei.', 'Nagel señala que toda vivencia es subjetiva.', 'Nagel points out that all experience is subjective.'], ['Dagegen lässt sich einwenden, dass die Daten unvollständig sind.', 'A esto se puede objetar que los datos están incompletos.', 'Against this one can object that the data are incomplete.'], ['Meiner Ansicht nach überzeugt dieses Argument nicht.', 'En mi opinión, este argumento no convence.', 'In my view this argument is not convincing.']]
    },
    {
      id: 'g-paraphrase', level: 'C1', de: 'Paraphrasieren', es: 'Parafrasear', en: 'Paraphrasing',
      summary: M('Decir lo mismo con otras palabras: sinónimo, cambio de estilo (verbal ↔ nominal), de voz (activa ↔ pasiva o alternativas), de estructura (subordinada ↔ sintagma preposicional), antónimo negado (häufig = nicht selten) y discurso indirecto.', 'Saying the same in other words: synonym, change of style (verbal ↔ nominal), of voice (active ↔ passive or alternatives), of structure (clause ↔ prepositional phrase), negated antonym (häufig = nicht selten) and indirect speech.'),
      blocks: [
        { b: 'pairs', h: M('Técnicas', 'Techniques'), r: [
          ['Die Studie zeigt …', 'Die Studie belegt …', M('sinónimo', 'synonym')], ['Weil die Preise steigen, …', 'Wegen des Anstiegs der Preise …', M('verbal → nominal', 'verbal → nominal')], ['Man kann das lösen.', 'Das lässt sich lösen. / Das ist lösbar.', M('voz', 'voice')],
          ['Das kommt häufig vor.', 'Das kommt nicht selten vor.', M('antónimo negado', 'negated antonym')], ['„Ich komme morgen.“', 'Sie sagt, sie komme am nächsten Tag.', M('discurso indirecto', 'indirect speech')]
        ] },
        { b: 'list', h: M('Fórmulas de reformulación', 'Reformulation phrases'), cols: 3, r: [['mit anderen Worten', M('en otras palabras', 'in other words')], ['anders ausgedrückt', M('dicho de otro modo', 'put differently')], ['das heißt (d. h.)', M('es decir', 'that is')], ['gemeint ist …', M('se quiere decir…', 'what is meant is…')], ['genauer gesagt', M('más precisamente', 'more precisely')], ['kurz gesagt', M('en pocas palabras', 'in short')]] }
      ],
      examples: [['Mit anderen Worten: Ohne Übung kein Fortschritt.', 'En otras palabras: sin práctica no hay progreso.', 'In other words: no practice, no progress.'], ['Gemeint ist, dass Bedeutung im Gebrauch entsteht.', 'Se quiere decir que el significado surge en el uso.', 'What is meant is that meaning arises in use.'], ['Das ist nicht unwichtig.', 'Eso no carece de importancia.', 'That is not unimportant.']]
    },
    {
      id: 'g-summary', level: 'C1', de: 'Zusammenfassen und Synthese', es: 'Resumir y sintetizar', en: 'Summarising and synthesising',
      summary: M('Un resumen alemán: tema y tesis en la primera frase; orden lógico; Präsens y discurso indirecto o fórmulas de referencia; sin opinión salvo que se pida; un cuarto a un tercio del original. La síntesis compara fuentes: Beide Texte stimmen darin überein, dass … / Im Unterschied zu A vertritt B …', 'A German summary: topic and thesis in the first sentence; logical order; present tense and indirect speech or reporting phrases; no opinion unless requested; a quarter to a third of the original. A synthesis compares sources: Beide Texte stimmen darin überein, dass … / Im Unterschied zu A vertritt B …'),
      blocks: [
        { b: 'list', h: M('Redemittel', 'Phrases'), cols: 2, r: [['Der Text behandelt die Frage, …', M('el texto trata la pregunta…', 'the text deals with the question…')], ['Im Mittelpunkt steht …', M('en el centro está…', 'the focus is on…')], ['Die Autorin vertritt die These, dass …', M('la autora sostiene que…', 'the author argues that…')], ['Zunächst … Anschließend … Schließlich …', M('primero… luego… finalmente…', 'first… then… finally…')], ['Beide Texte stimmen darin überein, dass …', M('ambos textos coinciden en que…', 'both texts agree that…')], ['Im Unterschied zu A betont B …', M('a diferencia de A, B subraya…', 'unlike A, B stresses…')], ['Abschließend lässt sich festhalten, …', M('para concluir, cabe constatar…', 'in conclusion…')], ['Insgesamt zeigt sich, dass …', M('en conjunto se ve que…', 'overall it becomes clear that…')]] }
      ],
      examples: [['Der Text behandelt die Frage, ob Maschinen Sprachen ersetzen können.', 'El texto trata la pregunta de si las máquinas pueden sustituir los idiomas.', 'The text deals with whether machines can replace languages.'], ['Im Unterschied zu Descartes betont Nagel die subjektive Perspektive.', 'A diferencia de Descartes, Nagel subraya la perspectiva subjetiva.', 'Unlike Descartes, Nagel stresses the subjective perspective.'], ['Insgesamt zeigt sich, dass beide Ansätze sich ergänzen.', 'En conjunto se ve que ambos enfoques se complementan.', 'Overall it becomes clear that both approaches complement each other.']]
    },
    {
      id: 'g-terminology', level: 'C1', de: 'Philosophische Terminologie', es: 'Terminología filosófica', en: 'Philosophical terminology',
      summary: M('El alemán filosófico se construye con sustantivaciones (das Sein, das Ich, das Wahre), compuestos (Erkenntnistheorie) y sufijos (-heit, -keit, -ung, -ismus). Glosario de términos clave de Kant, Hegel, la fenomenología y la filosofía de la mente.', 'Philosophical German is built from nominalisations (das Sein, das Ich, das Wahre), compounds (Erkenntnistheorie) and suffixes (-heit, -keit, -ung, -ismus). Glossary of key terms from Kant, Hegel, phenomenology and philosophy of mind.'),
      blocks: [
        { b: 'table', h: M('Glosario', 'Glossary'), c: [M('Término', 'Term'), M('Español', 'English'), M('Uso', 'Usage')], r: [
          ['die Erkenntnis · die Erkenntnistheorie', M('el conocimiento · la epistemología', 'cognition · epistemology'), M('teoría del conocimiento', 'theory of knowledge')],
          ['der Verstand · die Vernunft', M('el entendimiento · la razón', 'understanding · reason'), 'Kant'], ['die Anschauung · der Begriff', M('la intuición · el concepto', 'intuition · concept'), 'Kant'],
          ['die Erscheinung · das Ding an sich', M('el fenómeno · la cosa en sí', 'appearance · thing in itself'), 'Kant'], ['a priori · a posteriori', M('previo / posterior a la experiencia', 'prior / posterior to experience'), 'Kant'],
          ['der Geist · die Aufhebung · der Widerspruch', M('el espíritu · la superación · la contradicción', 'spirit · sublation · contradiction'), 'Hegel'],
          ['das Bewusstsein · das Selbstbewusstsein', M('la conciencia · la autoconciencia', 'consciousness · self-consciousness'), M('general', 'general')],
          ['das Dasein · das Sein · das Seiende', M('la existencia · el ser · el ente', 'existence · being · beings'), M('ontología', 'ontology')],
          ['die Intentionalität · das Erleben', M('la intencionalidad · la vivencia', 'intentionality · lived experience'), M('fenomenología', 'phenomenology')],
          ['der Leib · der Körper', M('el cuerpo vivido · el cuerpo físico', 'lived body · physical body'), M('fenomenología', 'phenomenology')],
          ['das Sprachspiel · die Lebensform', M('el juego de lenguaje · la forma de vida', 'language game · form of life'), 'Wittgenstein']
        ], n: M('Leib/Körper: el alemán distingue el cuerpo como se vive desde dentro (Leib) y el cuerpo como objeto (Körper), distinción central para la fenomenología y el enactivismo.', 'Leib/Körper: German distinguishes the body as lived from within (Leib) and the body as an object (Körper), a distinction central to phenomenology and enactivism.') },
        { b: 'ref', id: 'g-nominalisation-adj' }
      ],
      examples: [['Das Wahre ist das Ganze.', 'Lo verdadero es el todo.', 'The true is the whole.'], ['Gedanken ohne Inhalt sind leer, Anschauungen ohne Begriffe sind blind.', 'Pensamientos sin contenido son vacíos; intuiciones sin conceptos son ciegas.', 'Thoughts without content are empty, intuitions without concepts are blind.'], ['Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.', 'Los límites de mi lenguaje significan los límites de mi mundo.', 'The limits of my language mean the limits of my world.']]
    }
  ]);
})();
