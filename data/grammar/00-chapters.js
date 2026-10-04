/* Gramática de referencia · capítulos. Cada tema vive en data/grammar/NN-*.js como DD.grammar.push({...}).
   Esquema de un tema: { id, chapter, chapterOrder, order, level, de, es, en, summary:{es,en}, blocks:[bloques de lección], examples:[[de, es, en]] }. */
DD.grammarChapters = [
  { id: 'k-laute', order: 1, de: 'Laute und Schrift', es: 'Sonidos y escritura', en: 'Sounds and spelling' },
  { id: 'k-verb', order: 2, de: 'Das Verb', es: 'El verbo', en: 'The verb' },
  { id: 'k-tempus', order: 3, de: 'Tempus', es: 'Los tiempos', en: 'Tenses' },
  { id: 'k-modus', order: 4, de: 'Modus', es: 'El modo (Konjunktiv)', en: 'Mood (Konjunktiv)' },
  { id: 'k-passiv', order: 5, de: 'Passiv', es: 'La voz pasiva', en: 'The passive' },
  { id: 'k-nomen', order: 6, de: 'Nomen, Artikel, Kasus', es: 'Sustantivo, artículo, caso', en: 'Noun, article, case' },
  { id: 'k-pronomen', order: 7, de: 'Pronomen', es: 'Pronombres', en: 'Pronouns' },
  { id: 'k-adjektiv', order: 8, de: 'Adjektiv, Adverb, Partikel', es: 'Adjetivo, adverbio, partícula', en: 'Adjective, adverb, particle' },
  { id: 'k-praep', order: 9, de: 'Präpositionen', es: 'Preposiciones', en: 'Prepositions' },
  { id: 'k-satz', order: 10, de: 'Satzbau', es: 'La oración', en: 'Sentence structure' },
  { id: 'k-text', order: 11, de: 'Text und Stil', es: 'Texto y estilo', en: 'Text and style' }
];
DD.grammarTopic = function (chapter, list) {
  const ch = DD.grammarChapters.find(c => c.id === chapter);
  list.forEach((g, i) => DD.grammar.push({ chapter, chapterOrder: ch ? ch.order : 99, order: i + 1, ...g }));
};
