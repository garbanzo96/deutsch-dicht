/* Deutsch Dicht · currículo. 8 módulos × 5 unidades, A1 → C1.
   La secuencia sigue la jerarquía de procesamiento del alemán L2 (orden canónico → Satzklammer →
   inversión V2 → verbo final en subordinadas) y la progresión de casos Nom → Akk → Dat → Gen.
   Cada unidad se completa en data/units/*.js mediante DD.unit(id, {...}). */
window.DD = window.DD || {};
(function (DD) {
  DD.lexicon = DD.lexicon || [];
  DD.readings = DD.readings || [];
  DD.grammar = DD.grammar || [];
  /* Género de los hablantes de los diálogos (voz masculina en el audio si hay una voz masculina de calidad instalada). */
  DD.speakers = { 'Tomás': 'm', 'Mehmet': 'm', 'Jonas': 'm', 'Karl': 'm', 'Opa': 'm', 'Herr Berger': 'm', 'Lena': 'f', 'Oma': 'f', 'Ilse': 'f', 'Frau Berger': 'f', 'Frau Weiß': 'f' };

  DD.modules = [
    { id: 'm1', code: 'A1.1', level: 'A1', de: 'Erste Schritte', es: 'Primeros pasos', en: 'First steps' },
    { id: 'm2', code: 'A1.2', level: 'A1', de: 'Alltag', es: 'Vida cotidiana', en: 'Everyday life' },
    { id: 'm3', code: 'A2.1', level: 'A2', de: 'Wohnen und Leben', es: 'Vivir y habitar', en: 'Living' },
    { id: 'm4', code: 'A2.2', level: 'A2', de: 'Beziehungen', es: 'Relaciones', en: 'Relationships' },
    { id: 'm5', code: 'B1.1', level: 'B1', de: 'Erzählen', es: 'Narrar', en: 'Narrating' },
    { id: 'm6', code: 'B1.2', level: 'B1', de: 'Argumentieren', es: 'Argumentar', en: 'Arguing' },
    { id: 'm7', code: 'B2', level: 'B2', de: 'Präzision', es: 'Precisión', en: 'Precision' },
    { id: 'm8', code: 'C1', level: 'C1', de: 'Wissenschaft und Philosophie', es: 'Ciencia y filosofía', en: 'Science and philosophy' }
  ];

  const U = (id, module, level, de, es, en, fes, fen) => ({ id, order: Number(id.slice(1)), module, level, de, es, en, focus: { es: fes, en: fen } });
  DD.units = [
    U('u01', 'm1', 'A1', 'Hallo! Laute und Buchstaben', 'Sonidos y letras', 'Sounds and letters', 'Pronunciación, alfabeto, saludos, números 0–20', 'Pronunciation, alphabet, greetings, numbers 0–20'),
    U('u02', 'm1', 'A1', 'Ich heiße Tomás', 'Presentarse', 'Introducing yourself', 'Presente regular, sein, pronombres sujeto, preguntas W, verbo en 2.ª posición', 'Regular present, sein, subject pronouns, W-questions, verb second'),
    U('u03', 'm1', 'A1', 'Der, die, das', 'Género y plural', 'Gender and plural', 'Género, artículo definido e indefinido, plural, reglas de género', 'Gender, definite and indefinite article, plural, gender rules'),
    U('u04', 'm1', 'A1', 'Was machst du gern?', 'Tiempo libre', 'Free time', 'Verbos con cambio vocálico, haben, preguntas sí/no, negación nicht/kein, gern', 'Stem-changing verbs, haben, yes/no questions, nicht/kein, gern'),
    U('u05', 'm1', 'A1', 'Ich nehme einen Kaffee', 'Comer y comprar', 'Eating and shopping', 'Acusativo: artículos y pronombres, es gibt, precios y números', 'Accusative: articles and pronouns, es gibt, prices and numbers'),

    U('u06', 'm2', 'A1', 'Ich kann, ich muss, ich will', 'Poder y deber', 'Can and must', 'Verbos modales, möchten, la Satzklammer', 'Modal verbs, möchten, the verbal bracket'),
    U('u07', 'm2', 'A1', 'Mein Tag', 'La rutina', 'Daily routine', 'Verbos separables e inseparables, la hora, días, am/um/im', 'Separable and inseparable verbs, telling time, days, am/um/im'),
    U('u08', 'm2', 'A1', 'Meine Familie', 'La familia', 'Family', 'Posesivos en nominativo y acusativo, imperativo', 'Possessives in nominative and accusative, imperative'),
    U('u09', 'm2', 'A1', 'In der Stadt', 'En la ciudad', 'In the city', 'Dativo: artículos, pronombres, preposiciones y verbos con dativo', 'Dative: articles, pronouns, prepositions and verbs'),
    U('u10', 'm2', 'A1', 'Am Wochenende', 'El fin de semana', 'The weekend', 'Perfekt con haben y sein, participios regulares e irregulares', 'Perfekt with haben and sein, regular and irregular participles'),

    U('u11', 'm3', 'A2', 'Die neue Wohnung', 'La vivienda', 'The flat', 'Preposiciones de doble caso, stehen/stellen, liegen/legen', 'Two-way prepositions, stehen/stellen, liegen/legen'),
    U('u12', 'm3', 'A2', 'Früher und heute', 'Antes y ahora', 'Then and now', 'Präteritum de sein, haben y modales; Perfekt de separables y -ieren', 'Präteritum of sein, haben and modals; Perfekt of separable and -ieren verbs'),
    U('u13', 'm3', 'A2', 'Weil ich Zeit habe', 'Razones y opiniones', 'Reasons and opinions', 'Subordinadas con weil, dass, wenn, ob; conectores de posición 0 y 1', 'Subordinate clauses with weil, dass, wenn, ob; position-0 and position-1 connectors'),
    U('u14', 'm3', 'A2', 'Was ziehe ich an?', 'Ropa y descripción', 'Clothes and description', 'Declinación del adjetivo tras artículo, welcher, was für ein', 'Adjective endings after articles, welcher, was für ein'),
    U('u15', 'm3', 'A2', 'Schneller, höher, weiter', 'Comparar', 'Comparing', 'Comparativo, superlativo, als / wie', 'Comparative, superlative, als / wie'),

    U('u16', 'm4', 'A2', 'Ich fühle mich nicht gut', 'Cuerpo y salud', 'Body and health', 'Verbos reflexivos con acusativo y dativo, sollen como consejo', 'Reflexive verbs with accusative and dative, sollen for advice'),
    U('u17', 'm4', 'A2', 'Worauf freust du dich?', 'Emociones e intereses', 'Feelings and interests', 'Verbos con preposición fija, da- y wo-', 'Verbs with fixed prepositions, da- and wo-compounds'),
    U('u18', 'm4', 'A2', 'Als ich klein war', 'Recuerdos', 'Memories', 'Subordinadas temporales: als, wenn, bevor, nachdem, während, seit, bis; pluscuamperfecto', 'Temporal clauses: als, wenn, bevor, nachdem, während, seit, bis; past perfect'),
    U('u19', 'm4', 'A2', 'Ein Brief an Frau Berger', 'Escribir formalmente', 'Formal writing', 'Genitivo, preposiciones con genitivo, carta formal', 'Genitive, genitive prepositions, formal letters'),
    U('u20', 'm4', 'A2', 'Pläne für die Zukunft', 'Planes', 'Plans', 'Futur I, los usos de werden, cortesía con Konjunktiv II', 'Future I, uses of werden, politeness with Konjunktiv II'),

    U('u21', 'm5', 'B1', 'Es war einmal …', 'Contar historias', 'Telling stories', 'Präteritum de todos los verbos, narración, pluscuamperfecto', 'Präteritum of all verbs, narration, past perfect'),
    U('u22', 'm5', 'B1', 'Die Frau, die alles weiß', 'Describir personas', 'Describing people', 'Oraciones relativas en todos los casos, con preposición, wer/was/wo', 'Relative clauses in all cases, with prepositions, wer/was/wo'),
    U('u23', 'm5', 'B1', 'Wenn ich Zeit hätte …', 'Hipótesis', 'Hypotheses', 'Konjunktiv II de presente, condiciones irreales, deseos, consejos, als ob', 'Present Konjunktiv II, unreal conditions, wishes, advice, als ob'),
    U('u24', 'm5', 'B1', 'Um zu verstehen', 'Finalidad', 'Purpose', 'Infinitivo con zu, um … zu / damit, ohne … zu, statt … zu', 'zu-infinitive, um … zu / damit, ohne … zu, statt … zu'),
    U('u25', 'm5', 'B1', 'Wie wird das gemacht?', 'Procesos', 'Processes', 'Pasiva de proceso en presente, Präteritum y Perfekt; pasiva de estado', 'Process passive in present, Präteritum and Perfekt; state passive'),

    U('u26', 'm6', 'B1', 'Sowohl … als auch', 'Ponderar', 'Weighing up', 'Conectores dobles, je … desto', 'Two-part connectors, je … desto'),
    U('u27', 'm6', 'B1', 'Trotz des Regens', 'Noticias y sociedad', 'News and society', 'Genitivo avanzado, declinación n, adjetivo sin artículo', 'Advanced genitive, n-declension, adjectives without article'),
    U('u28', 'm6', 'B1', 'Hätte ich das gewusst!', 'Lo que pudo ser', 'What might have been', 'Konjunktiv II de pasado, doble infinitivo con modales', 'Past Konjunktiv II, double infinitive with modals'),
    U('u29', 'm6', 'B1', 'Es muss geprüft werden', 'Normas e investigación', 'Rules and research', 'Pasiva con modales, alternativas a la pasiva', 'Passive with modals, passive alternatives'),
    U('u30', 'm6', 'B1', 'Na ja, eben', 'Hablar con naturalidad', 'Natural speech', 'Partículas modales, orden del campo medio, posición de nicht', 'Modal particles, middle-field order, position of nicht'),

    U('u31', 'm7', 'B2', 'Sie sagte, sie sei müde', 'Discurso referido', 'Reported speech', 'Konjunktiv I, discurso indirecto, verbos introductorios', 'Konjunktiv I, indirect speech, reporting verbs'),
    U('u32', 'm7', 'B2', 'Die gestern veröffentlichte Studie', 'Información densa', 'Dense information', 'Atributos de participio, zu + participio I, construcciones participiales', 'Participial attributes, zu + present participle, participial phrases'),
    U('u33', 'm7', 'B2', 'Die Entscheidung über …', 'Estilo nominal', 'Nominal style', 'Nominalización, estilo nominal y verbal, verbos funcionales', 'Nominalisation, nominal vs verbal style, light-verb constructions'),
    U('u34', 'm7', 'B2', 'Das dürfte stimmen', 'Suponer y afirmar', 'Supposing and claiming', 'Modales subjetivos, Futur II de conjetura, palabras modales', 'Subjective modals, Futur II for conjecture, modal words'),
    U('u35', 'm7', 'B2', 'Insofern, als …', 'Precisar relaciones', 'Precise relations', 'Conectores avanzados y formación de palabras', 'Advanced connectors and word formation'),

    U('u36', 'm8', 'C1', 'Es lässt sich zeigen', 'Lenguaje científico', 'Scientific language', 'Construcciones impersonales, cautela epistémica, procesamiento predictivo', 'Impersonal constructions, epistemic caution, predictive processing'),
    U('u37', 'm8', 'C1', 'Zwar …, doch …', 'Argumentar y objetar', 'Arguing and objecting', 'Concesión, objeción, referir posiciones; filosofía de la mente', 'Concession, objection, reporting positions; philosophy of mind'),
    U('u38', 'm8', 'C1', 'Das Sein und das Bewusstsein', 'Terminología filosófica', 'Philosophical terminology', 'Sustantivación, cadenas de genitivo, Kant y Hegel', 'Nominalisation, genitive chains, Kant and Hegel'),
    U('u39', 'm8', 'C1', 'Dass er es hätte wissen müssen', 'Sintaxis compleja', 'Complex syntax', 'Incrustación múltiple, doble infinitivo subordinado, condicional sin conector, campo final', 'Multiple embedding, subordinate double infinitive, unintroduced conditionals, final field'),
    U('u40', 'm8', 'C1', 'Sprache und Welt', 'Lengua y mundo', 'Language and world', 'Registro, paráfrasis y síntesis; Wittgenstein y enactivismo', 'Register, paraphrase and synthesis; Wittgenstein and enactivism')
  ];

  DD.unit = function (id, data) {
    const unit = DD.units.find(u => u.id === id);
    if (!unit) throw new Error('Unidad desconocida: ' + id);
    Object.assign(unit, data);
  };
  // Equivalencias aproximadas de la ruta v1 → v3 (solo para recolocar la unidad activa).
  DD.legacyUnits = { 'unit-01': 'u02', 'unit-02': 'u03', 'unit-03': 'u04', 'unit-04': 'u06', 'unit-05': 'u09', 'unit-06': 'u10', 'unit-07': 'u13', 'unit-08': 'u19', 'unit-09': 'u14', 'unit-10': 'u25', 'unit-11': 'u23', 'unit-12': 'u24', 'unit-13': 'u26', 'unit-14': 'u32', 'unit-15': 'u31', 'unit-16': 'u15', 'unit-17': 'u35', 'unit-18': 'u36', 'unit-19': 'u28', 'unit-20': 'u40' };
})(window.DD);
