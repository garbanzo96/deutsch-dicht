/* Deutsch Dicht · ensamblaje del corpus.
   Une módulos, unidades, léxico, lecturas y gramática; asigna IDs de ejercicios, ordena el mazo,
   resuelve léxico de lecturas y mide su cobertura. Independiente del DOM (probado en Node). */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.DDContent = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const EXERCISE_PHASES = [
    { id: 1, de: 'Erkennen', es: 'Reconocer', en: 'Recognise' },
    { id: 2, de: 'Üben', es: 'Practicar', en: 'Practise' },
    { id: 3, de: 'Anwenden', es: 'Aplicar', en: 'Apply' }
  ];
  const REVIEWABLE = new Set(['choice', 'gap', 'order', 'write', 'transform', 'listen']);

  function build(DD, M) {
    const modules = [...(DD.modules || [])];
    const units = [...(DD.units || [])].sort((a, b) => a.order - b.order);
    const unitById = new Map(units.map(u => [u.id, u]));
    const unitIndex = new Map(units.map((u, i) => [u.id, i]));

    // Léxico curado: una palabra se introduce una sola vez (en su primera unidad).
    const lexicon = [], duplicates = [], seenIds = new Map();
    let order = 0;
    const blocks = [...(DD.lexicon || [])].sort((a, b) => (unitIndex.get(a.unit) ?? 999) - (unitIndex.get(b.unit) ?? 999));
    for (const block of blocks) for (const raw of block.words) {
      const e = M.expand(raw, block.unit, order++);
      if (block.ext) e.ext = true;
      if (seenIds.has(e.id)) { duplicates.push([e.id, seenIds.get(e.id), block.unit]); continue; }
      seenIds.set(e.id, block.unit);
      lexicon.push(e);
    }
    const ranks = DD.frequencyRanks || {};
    for (const e of lexicon) {
      const r = ranks[M.key(e.lemma)];
      e.freq = e.opts?.freq || (r ? r[0] : null);
    }
    const byId = new Map(lexicon.map(e => [e.id, e]));
    const index = M.buildIndex(lexicon);
    const vocabByUnit = new Map(units.map(u => [u.id, []]));
    for (const e of lexicon) if (vocabByUnit.has(e.unit)) vocabByUnit.get(e.unit).push(e);

    // Ejercicios con ID estable: u05-07
    const exercises = new Map();
    for (const u of units) {
      u.exercises = (u.exercises || []).map((x, i) => {
        const ex = { ...x, id: x.id || `${u.id}-${String(i + 1).padStart(2, '0')}`, unit: u.id, ph: x.ph || 2 };
        ex.reviewable = REVIEWABLE.has(ex.t) && x.review !== false;
        exercises.set(ex.id, ex);
        return ex;
      });
    }

    // Mazo: unidades visitadas primero (en orden del curso), después el resto.
    function deckOrder(state) {
      const visited = units.filter(u => state?.units?.[u.id]?.visited);
      const rest = units.filter(u => !state?.units?.[u.id]?.visited);
      const out = [...(state?.deck?.added || [])];
      const seen = new Set(out);
      for (const u of [...visited, ...rest]) {
        const words = (vocabByUnit.get(u.id) || []).filter(e => e.deck);
        words.sort((a, b) => (a.freq ?? 1e6) - (b.freq ?? 1e6) || a.order - b.order);
        for (const e of words) if (!seen.has(e.id)) { seen.add(e.id); out.push(e.id); }
      }
      return out;
    }

    // Lecturas
    const readings = [...(DD.readings || [])];
    const readingById = new Map(readings.map(r => [r.id, r]));
    for (const r of readings) {
      r.unitIndex = (r.unit || r.after) ? unitIndex.get(r.unit || r.after) ?? null : null;
      r.words = r.p.reduce((n, p) => n + M.tokens(p[0]).filter(M.isWord).length, 0);
      r.glossMap = new Map((r.gloss || []).map(([w, m]) => [w, m]));
    }
    // Lecturas de biblioteca recomendadas tras una unidad → «Más lecturas para esta unidad»
    for (const r of readings) if (r.after && unitById.has(r.after)) { const u = unitById.get(r.after); u.more = [...new Set([...(u.more || []), r.id])]; }
    const analysisCache = new Map();
    function analyzeParagraph(reading, i) {
      const k = reading.id + '#' + i;
      if (!analysisCache.has(k)) analysisCache.set(k, M.analyze(reading.p[i][0], index));
      return analysisCache.get(k);
    }
    /* Resolución de una palabra dentro de una lectura: override → glosa → análisis morfológico. */
    function resolve(reading, paragraph, tokenIndex) {
      const a = analyzeParagraph(reading, paragraph), token = a.tokens[tokenIndex];
      const forced = reading.lemmas?.[token];
      if (forced) {
        if (byId.has(forced)) { const hit = (a.analysis[tokenIndex] || []).find(c => c.id === forced); return { token, entry: byId.get(forced), tags: hit?.tags || [], others: [] }; }
        return { token, gloss: reading.glossMap.get(forced) || null, lemma: forced, others: [] };
      }
      const gloss = reading.glossMap.get(token) || reading.glossMap.get(M.key(token));
      let list = a.analysis[tokenIndex] || [];
      // Preferir la lectura ya estudiada al llegar al texto (p. ej. «Bis später!» en U01 antes de spät en U06).
      // Si el autor glosó la palabra y el mejor análisis aún no se ha estudiado, manda la glosa (evita promover un homógrafo equivocado).
      if (reading.unitIndex !== null && list.length > 1) {
        const level = c => unitIndex.get(byId.get(c.id)?.unit) ?? 999;
        if (level(list[0]) > reading.unitIndex) {
          if (gloss) return { token, gloss, others: list.map(o => ({ entry: byId.get(o.id), tags: o.tags })).filter(o => o.entry) };
          const k = list.find(c => level(c) <= reading.unitIndex); if (k) list = [k, ...list.filter(c => c !== k)];
        }
      }
      if (gloss && !list.length) return { token, gloss, others: [] };
      const [first, ...others] = list;
      return first ? { token, entry: byId.get(first.id), tags: first.tags, parts: first.parts, gloss, others: others.map(o => ({ entry: byId.get(o.id), tags: o.tags })).filter(o => o.entry) } : { token, gloss: null, others: [] };
    }
    /* Cobertura: % de tokens conocidos al llegar a la unidad de la lectura (o glosados). */
    function coverage(reading) {
      const limit = reading.unitIndex ?? units.length - 1;
      let total = 0, known = 0, glossed = 0;
      const unknown = new Map();
      reading.p.forEach((p, i) => {
        const a = analyzeParagraph(reading, i);
        a.tokens.forEach((t, j) => {
          if (!M.isWord(t) || t.length < 2) return;
          total++;
          const res = resolve(reading, i, j);
          if (res.entry && res.entry.kind !== 'name' && (unitIndex.get(res.entry.unit) ?? 999) <= limit) known++;
          else if (res.entry?.kind === 'name' || res.gloss) glossed++;
          else {
            const label = res.entry ? res.entry.lemma + ' (' + res.entry.unit + ')' : t;
            unknown.set(label, (unknown.get(label) || 0) + 1);
          }
        });
      });
      return { total, known, glossed, ratio: total ? known / total : 1, supported: total ? (known + glossed) / total : 1, unknown };
    }

    const grammar = [...(DD.grammar || [])].sort((a, b) => (a.chapterOrder ?? 0) - (b.chapterOrder ?? 0) || (a.order ?? 0) - (b.order ?? 0));
    const grammarById = new Map(grammar.map(g => [g.id, g]));

    return {
      modules, units, unitById, unitIndex, lexicon, byId, index, vocabByUnit, duplicates, exercises,
      readings, readingById, grammar, grammarById, chapters: DD.grammarChapters || [],
      deckOrder, analyzeParagraph, resolve, coverage, PHASES: EXERCISE_PHASES
    };
  }

  return { build, EXERCISE_PHASES };
});
