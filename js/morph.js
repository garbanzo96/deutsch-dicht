/* Deutsch Dicht · léxico y morfología.
   Expande las entradas compactas del léxico curado, genera sus formas flexionadas con análisis,
   construye el índice de consulta, tokeniza textos y resuelve verbos separables y compuestos. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.DDMorph = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const key = s => String(s ?? '').normalize('NFC').toLocaleLowerCase('de').trim();
  const fold = s => String(s).normalize('NFC').toLocaleLowerCase('de').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const KIND_PREFIX = { n: 'noun', v: 'verb', a: 'adj', adv: 'adv', prep: 'prep', conj: 'conj', pron: 'pron', art: 'art', part: 'particle', num: 'num', phr: 'phrase', interj: 'interj', name: 'name' };
  const CATEGORY = { n: 'sustantivos', v: 'verbos', a: 'adjetivos', adv: 'adverbios', prep: 'preposiciones', conj: 'conectores', pron: 'pronombres', art: 'articulos', part: 'partículas', num: 'numerales', phr: 'expresiones', interj: 'interjecciones', name: 'nombres-propios' };
  const GENDER = { der: 'm', die: 'f', das: 'n' };
  const SEPARABLE = ['ab', 'an', 'auf', 'aus', 'bei', 'dar', 'durch', 'ein', 'empor', 'entgegen', 'fern', 'fest', 'fort', 'frei', 'gegenüber', 'her', 'heraus', 'herein', 'herum', 'hin', 'hinaus', 'hinein', 'hinter', 'kennen', 'los', 'mit', 'nach', 'nieder', 'statt', 'teil', 'um', 'über', 'unter', 'vor', 'voran', 'voraus', 'vorbei', 'vorher', 'weg', 'weiter', 'wieder', 'zu', 'zurecht', 'zurück', 'zusammen', 'spazieren', 'bekannt', 'klar', 'fertig', 'hoch', 'offen', 'kaputt', 'sauber', 'krank', 'weh', 'nahe', 'wahr', 'überein', 'hinzu', 'herauf', 'herunter', 'hinunter', 'hinauf'];

  /* ───────────── Expansión de entradas ─────────────
     n   ['n', 'der Tisch', 'Tische', es, en, opts]
     v   ['v', 'an|kommen', 'kommt an', 'kam an', 'ist angekommen', es, en, opts]
     a   ['a', 'groß', 'größer', 'am größten', es, en, opts]
     resto ['adv'|'prep'|..., lemma, es, en, opts] */
  function expand(raw, unit, order) {
    const kind = raw[0];
    let e;
    if (kind === 'n') {
      const [, head, plural, es, en, o = {}] = raw;
      const m = /^(der|die|das)\s+(.+)$/.exec(head);
      const lemma = m ? m[2] : head;
      e = { kind, lemma, de: head, es, en, o, g: o.plOnly ? 'pl' : (m ? GENDER[m[1]] : null), pl: plural === '—' || plural === null ? null : plural };
    } else if (kind === 'v') {
      const [, head, p3, prt, perfect, es, en, o = {}] = raw;
      const refl = /^sich\s+/.test(head);
      const bare = head.replace(/^sich\s+/, '');
      const sep = bare.includes('|') ? bare.split('|')[0] : (o.sep || null);
      const lemma = bare.replace('|', '');
      const [aux, ...ppParts] = String(perfect || '').split(' ');
      e = { kind, lemma, de: (refl ? 'sich ' : '') + lemma, es, en, o, v: { p3, prt, pp: ppParts.join(' '), aux, sep, refl: refl ? (o.refl || 'A') : null, rek: o.rek || null, obj: o.obj || null } };
    } else if (kind === 'a') {
      const [, lemma, cmp, sup, es, en, o = {}] = raw;
      e = { kind, lemma, de: lemma, es, en, o, a: { cmp: cmp === '—' ? null : cmp, sup: sup === '—' ? null : sup, gradable: cmp !== '—' } };
    } else {
      const [, lemma, es, en, o = {}] = raw;
      e = { kind, lemma, de: lemma, es, en, o };
    }
    const o = e.o;
    e.id = o.id || (KIND_PREFIX[kind] + '-' + fold(e.lemma.replace(/^sich\s+/, '')));
    e.cat = CATEGORY[kind];
    e.unit = unit; e.order = order; e.curated = true;
    e.deck = o.deck === 0 ? false : kind !== 'name';
    e.produce = o.produce !== 0;
    if (o.ex) e.ex = { de: o.ex[0], es: o.ex[1], en: o.ex[2] };
    if (o.note) e.note = { es: o.note[0], en: o.note[1] };
    if (o.case) e.case = o.case;
    if (o.type) e.ctype = o.type;
    if (o.n) e.weak = true;
    if (o.adj) e.adjn = true;
    if (o.level) e.level = o.level;
    delete e.o; e.opts = o;
    return e;
  }

  /* ───────────── Morfología ───────────── */
  function umlaut(stem) {
    const m = /(au|a|o|u)(?!.*(au|a|o|u))/i.exec(stem);
    if (!m) return stem;
    const rep = { au: 'äu', a: 'ä', o: 'ö', u: 'ü', Au: 'Äu', A: 'Ä', O: 'Ö', U: 'Ü' }[m[1]] || m[1];
    return stem.slice(0, m.index) + rep + stem.slice(m.index + m[1].length);
  }
  function verbStem(inf) {
    if (/[^aeiouäöü]e[lr]n$/.test(inf) || /(ei|au|eu|äu)ern$/.test(inf)) return inf.slice(0, -1);
    if (inf.endsWith('en')) return inf.slice(0, -2);
    if (inf.endsWith('n')) return inf.slice(0, -1);
    return inf;
  }
  const needsE = stem => /[dt]$/.test(stem) || /[^lrhmnaeiouäöü][mn]$/.test(stem);
  const sibilant = s => /([sßxz]|tz)$/.test(s);

  /* Conjugación de presente: [ich, du, er, wir, ihr, sie] */
  function present(inf, p3, override) {
    if (override) return override.split(/\s+/);
    const stem = verbStem(inf);
    const reg = {
      ich: /el$/.test(stem) && /eln$/.test(inf) ? stem.slice(0, -2) + 'le' : stem + 'e',
      du: stem + (needsE(stem) ? 'est' : sibilant(stem) ? 't' : 'st'),
      er: stem + (needsE(stem) ? 'et' : 't'),
      ihr: stem + (needsE(stem) ? 'et' : 't')
    };
    const wir = inf;
    if (!p3 || p3 === reg.er) return [reg.ich, reg.du, reg.er, wir, reg.ihr, wir];
    let du, ich = reg.ich;
    if (!/t$/.test(p3)) { ich = p3; du = p3 + (sibilant(p3) ? 't' : 'st'); }       // kann, weiß, will
    else if (/et$/.test(p3) && needsE(stem)) du = p3.slice(0, -2) + 'est';
    else if (/([sßxz]|tz)t$/.test(p3)) du = p3;                                    // liest, heißt, isst
    else if (/[dt]$/.test(stem) && !/et$/.test(p3)) du = p3 + 'st';                 // hält, gilt, tritt
    else du = p3.slice(0, -1) + 'st';                                              // nimmt, fährt
    return [ich, du, p3, wir, reg.ihr, wir];
  }
  /* Präteritum: [ich, du, er, wir, ihr, sie] */
  function preterite(prt, override) {
    if (override) return override.split(/\s+/);
    if (!prt) return [];
    if (/e$/.test(prt)) return [prt, prt + 'st', prt, prt + 'n', prt + 't', prt + 'n'];
    const dt = /[dt]$/.test(prt);
    return [prt, prt + (dt || sibilant(prt) ? 'est' : 'st'), prt, prt + 'en', prt + (dt ? 'et' : 't'), prt + 'en'];
  }
  const ADJ_ENDINGS = ['e', 'en', 'em', 'er', 'es'];
  function adjStem(lemma, o = {}) {
    if (o.stem) return o.stem;
    if (/[^aeiouäöü]el$/.test(lemma)) return lemma.slice(0, -2) + 'l';
    if (/(au|eu)er$/.test(lemma)) return lemma.slice(0, -2) + 'r';
    return lemma;
  }
  function superlativeBase(lemma, sup) {
    if (sup) return sup.replace(/^am\s+/, '').replace(/en$/, '');
    return lemma + (/([dtsßxz]|sch|[aeiouäöü])$/.test(lemma) ? 'est' : 'st');
  }

  /* Formas de una entrada: [{form, tag}] (tag = código de análisis) */
  function forms(e) {
    const out = [], add = (form, tag) => { if (form && !/\s/.test(form)) out.push({ form, tag }); };
    const o = e.opts || {};
    if (o.forms) for (const [form, tag] of Object.entries(o.forms)) add(form, tag);
    if (e.kind === 'n') {
      add(e.lemma, e.g === 'pl' ? 'pl' : 'sg');
      if (e.adjn) { const st = e.lemma.replace(/e$/, ''); for (const x of ADJ_ENDINGS) add(st + x, 'decl'); return out; }
      if (e.pl) { add(e.pl, 'pl'); if (!/[ns]$/.test(e.pl)) add(e.pl + 'n', 'dat.pl'); }
      if (e.weak) { add(e.lemma + (/e$/.test(e.lemma) ? 'n' : 'en'), 'n-decl'); if (o.gen) add(o.gen.replace(/^des\s+/, ''), 'gen.sg'); }
      else if (e.g === 'm' || e.g === 'n') {
        if (o.gen) add(o.gen.replace(/^des\s+/, ''), 'gen.sg');
        else { if (!/[sßxz]$/.test(e.lemma)) add(e.lemma + 's', 'gen.sg'); add(e.lemma + 'es', 'gen.sg'); if (/(nis)$/.test(e.lemma)) add(e.lemma + 'ses', 'gen.sg'); if (e.lemma === 'Haus' || o.datE) add(e.lemma + 'e', 'dat.sg'); }
      }
      return out;
    }
    if (e.kind === 'v') {
      const v = e.v, sep = v.sep;
      const base = sep ? e.lemma.slice(sep.length) : e.lemma;
      const p3 = sep && v.p3 ? v.p3.replace(new RegExp('\\s+' + sep + '$'), '') : v.p3;
      const prt = sep && v.prt ? v.prt.replace(new RegExp('\\s+' + sep + '$'), '') : v.prt;
      const pres = present(base, p3, o.pres);
      const prtForms = preterite(prt, o.prt);
      const tagsP = ['pres.1s', 'pres.2s', 'pres.3s', 'pres.1p', 'pres.2p', 'pres.3p'];
      const tagsT = ['prt.1s', 'prt.2s', 'prt.3s', 'prt.1p', 'prt.2p', 'prt.3p'];
      const finite = (form, tag) => { add(form, tag + (sep ? '.sep' : '')); if (sep) add(sep + form, tag + '.joined'); };
      add(e.lemma, 'inf');
      pres.forEach((f, i) => finite(f, tagsP[i]));
      prtForms.forEach((f, i) => finite(f, tagsT[i]));
      if (v.pp) { add(v.pp, 'pp'); for (const x of ADJ_ENDINGS) add(v.pp + x, 'pp.adj'); }
      const stem = verbStem(base);
      add(base + 'd', 'p1'); for (const x of ADJ_ENDINGS) add(base + 'd' + x, 'p1.adj');
      if (sep) { add(sep + 'zu' + base, 'zu-inf'); add(e.lemma + 'd', 'p1'); for (const x of ADJ_ENDINGS) add(e.lemma + 'd' + x, 'p1.adj'); }
      // Imperativo
      const impTag = sep ? 'imp.sep' : 'imp';
      if (o.imp) add(o.imp, impTag);
      else {
        add(stem, impTag); add(stem + 'e', impTag);
        if (/i/.test(pres[1]) && !/i/.test(stem)) { add(pres[1].replace(/st$/, ''), impTag); if (/sst$|ßt$|st$/.test(pres[1])) add(pres[1].replace(/t$/, ''), impTag); }
      }
      // Konjunktiv I (3. Sg.) y II
      add(o.k1 || stem + 'e', 'k1'); add(stem + 'est', 'k1'); add(stem + 'et', 'k1');
      const k2 = o.k2 || (prt && !/e$/.test(prt) ? umlaut(prt) + 'e' : null);
      if (k2) { const k2s = k2.replace(/e$/, ''); for (const [x, t] of [['e', 'k2'], ['est', 'k2'], ['st', 'k2'], ['en', 'k2'], ['et', 'k2'], ['t', 'k2']]) { add(k2s + x, t); if (sep) add(sep + k2s + x, 'k2.joined'); } }
      return out;
    }
    if (e.kind === 'a') {
      add(e.lemma, 'pos');
      const st = adjStem(e.lemma, o);
      for (const x of ADJ_ENDINGS) add(st + x, 'decl');
      if (e.a.gradable !== false && o.decl !== 0) {
        const cmp = e.a.cmp || (st + 'er');
        add(cmp, 'cmp'); for (const x of ADJ_ENDINGS) add(cmp + x, 'cmp.decl');
        const sb = superlativeBase(e.lemma, e.a.sup);
        for (const x of ADJ_ENDINGS) add(sb + x, 'sup');
      }
      return out;
    }
    if (e.kind === 'name') { const nm = e.lemma.replace(/^(der|die|das)\s+/, ''); const parts = nm.split(/\s+/); for (const w of parts) add(w, 'lemma'); const last = parts[parts.length - 1]; if (!/[sßxz]$/.test(last)) add(last + 's', 'gen.sg'); return out; }
    if (o.decl === 'der' || o.decl === 'ein') {
      const st = o.stem || e.lemma.replace(/(er|e|es)$/, '');
      const table = o.decl === 'der'
        ? { er: 'nom.m|dat.f|gen.f|gen.pl', e: 'nom.f|akk.f|nom.pl|akk.pl', es: 'nom.n|akk.n|gen.m|gen.n', en: 'akk.m|dat.pl', em: 'dat.m|dat.n' }
        : { '': 'nom.m|nom.n|akk.n', e: 'nom.f|akk.f|nom.pl|akk.pl', en: 'akk.m|dat.pl', em: 'dat.m|dat.n', er: 'dat.f|gen.f|gen.pl', es: 'gen.m|gen.n' };
      for (const [end, tag] of Object.entries(table)) add(st + end, 'det:' + tag);
      if (o.decl === 'ein' && /er$/.test(e.lemma)) add(e.lemma, 'det:nom.m|nom.n|akk.n');
      return out;
    }
    const words = e.lemma.replace(/[!?.,¡¿…]/g, ' ').trim().split(/\s+/).filter(Boolean);
    if (o.forms && words.length > 1) return out;
    if (words.length === 1) add(words[0], 'lemma');
    else for (const w of words) if (!/^[–-]$/.test(w)) add(w, 'phr');  // expresión: sus palabras, con prioridad mínima
    return out;
  }

  /* ───────────── Índice ───────────── */
  function buildIndex(entries) {
    const byId = new Map(), index = new Map();
    for (const e of entries) {
      byId.set(e.id, e);
      for (const { form, tag } of forms(e)) {
        const k = key(form);
        if (!index.has(k)) index.set(k, []);
        const list = index.get(k);
        const hit = list.find(x => x.id === e.id && x.exact === form);
        if (hit) { if (!hit.tags.includes(tag)) hit.tags.push(tag); }
        else list.push({ id: e.id, exact: form, tags: [tag] });
      }
      // Lemas de varias palabras (expresiones): se indexan por su primera palabra solo como referencia.
    }
    return { byId, index };
  }

  /* ───────────── Tokenización ───────────── */
  const WORD = /[\p{L}\p{M}]+(?:[-’'][\p{L}\p{M}]+)*/u;
  function tokens(text) { return String(text).match(/[\p{L}\p{M}]+(?:[-’'][\p{L}\p{M}]+)*|\d+(?:[.,]\d+)*\.?|[^\p{L}\p{M}\d]+/gu) || []; }
  const isWord = t => WORD.test(t) && /^[\p{L}]/u.test(t);
  const ABBREV = /\b(z\.\s?B|d\.\s?h|u\.\s?a|usw|bzw|vgl|ca|Nr|Dr|Prof|Hr|Fr|St|evtl|ggf|inkl|etc|bspw|s\.\s?o|s\.\s?u|o\.\s?ä|u\.\s?ä)\.$/i;
  /* Divide un párrafo en frases (para audio y resaltado), respetando abreviaturas y ordinales. */
  function sentences(text) {
    const out = [], re = /[^.!?…]+(?:[.!?…]+[“”"»«)]*|$)/g;
    let buf = '';
    for (const m of String(text).matchAll(re)) {
      buf += m[0];
      const t = buf.trimEnd();
      if (!t) continue;
      if (ABBREV.test(t) || /\b\d{1,2}\.$/.test(t) || /(^|\s)\p{L}\.$/u.test(t)) continue;
      out.push(buf.trim()); buf = '';
    }
    if (buf.trim()) out.push(buf.trim());
    return out;
  }

  /* ───────────── Consulta ───────────── */
  const CLAUSE_END = /[.,;:!?…–—()„“"»«]/;
  /* Analiza un texto: para cada token devuelve candidatos [{id, tags}] priorizados.
     Resuelve verbos separables por cláusula (… kommt … an.) y respeta mayúsculas. */
  function analyze(text, idx, opts = {}) {
    const toks = tokens(text), res = toks.map(() => null);
    const sentenceStart = new Set();
    let expectStart = true;
    toks.forEach((t, i) => {
      if (isWord(t)) { if (expectStart) sentenceStart.add(i); expectStart = false; }
      else if (/[.!?…:]\s*$/.test(t) || /[.!?…:][“”"»«]*\s*$/.test(t)) expectStart = true;
      else if (/^\s*[„“"»«]\s*$/.test(t)) { /* comillas no cambian */ }
    });
    toks.forEach((t, i) => { if (isWord(t)) res[i] = candidates(t, idx, sentenceStart.has(i), opts); });
    // Separables: partícula al final de cláusula + verbo finito previo en la misma cláusula
    for (let i = 0; i < toks.length; i++) {
      const t = toks[i];
      if (!isWord(t) || !SEPARABLE.includes(key(t))) continue;
      let j = i + 1; while (j < toks.length && /^\s+$/.test(toks[j])) j++;
      const atEnd = j >= toks.length || CLAUSE_END.test(toks[j]) || /^(und|oder|aber|denn|sondern)$/i.test(toks[j]);
      if (!atEnd) continue;
      const particle = key(t);
      for (let k = i - 1; k >= 0; k--) {
        if (!isWord(toks[k])) { if (/[,;:.!?]/.test(toks[k])) break; continue; }
        const found = separableMatch(toks[k], particle, idx);
        if (found) { res[k] = [found, ...(res[k] || []).filter(x => x.id !== found.id)]; res[i] = [{ id: found.id, tags: ['prefix'] }, ...(res[i] || [])]; break; }
      }
    }
    // Sustantivación: palabra con mayúscula (no inicial) analizada como adjetivo, participio o infinitivo → das Gute, das Lernen
    toks.forEach((t, i) => {
      const top = res[i]?.[0];
      if (!top || sentenceStart.has(i) || !/^\p{Lu}/u.test(t)) return;
      const e = idx.byId.get(top.id);
      if (e && (e.kind === 'a' || (e.kind === 'v' && top.tags.some(x => /^(inf|pp\.adj|p1\.adj|p1|pp)$/.test(x))))) res[i][0] = { ...top, tags: [...top.tags, 'subst'] };
    });
    return { tokens: toks, analysis: res };
  }
  /* ¿Es `verbToken` la parte finita de un verbo separable con esta partícula? */
  function separableMatch(verbToken, particle, idx) {
    const list = idx.index.get(key(verbToken)) || [];
    const finiteTags = c => c.tags.filter(x => /^(pres|prt|k1|k2|imp)/.test(x) && !/\.joined$/.test(x)).map(x => x.replace(/\.sep$/, '') + '.sep');
    for (const c of list) {                       // 1) forma registrada del propio verbo separable (fängt … an)
      const e = idx.byId.get(c.id);
      if (e?.kind === 'v' && e.v.sep === particle && c.tags.some(x => /\.sep$/.test(x))) return { id: e.id, tags: finiteTags(c) };
    }
    for (const c of list) {                       // 2) verbo base + partícula registrada como compuesto
      const e = idx.byId.get(c.id);
      if (e?.kind !== 'v' || e.v.sep) continue;
      const target = (idx.index.get(particle + e.lemma) || []).map(x => idx.byId.get(x.id)).find(x => x?.kind === 'v' && x.v.sep === particle);
      const tags = finiteTags(c);
      if (target && tags.length) return { id: target.id, tags };
    }
    return null;
  }
  function candidates(token, idx, atStart, opts = {}) {
    const k = key(token);
    let list = (idx.index.get(k) || []).map(x => ({ ...x, entry: idx.byId.get(x.id) }));
    const capital = /^\p{Lu}/u.test(token);
    const score = c => {
      let s = 0;
      if (c.exact === token) s += 40;
      else if (!atStart && capital !== /^\p{Lu}/u.test(c.exact)) s -= 60;   // Essen ≠ essen, Sie ≠ sie
      if (c.entry?.kind === 'n' && capital && !atStart) s += 15;
      if (c.entry?.kind === 'name') s -= 5;
      if (c.tags.length === 1 && c.tags[0] === 'phr') s -= 50;
      if (c.tags.includes('inf') || c.tags.includes('lemma') || c.tags.includes('sg') || c.tags.includes('pos')) s += 4;
      if (c.tags.some(t => /\.sep$/.test(t))) s -= 2; // forma de verbo separable sin partícula detectada
      if (c.tags.some(t => /\.joined$/.test(t))) s -= 1;
      if (c.tags.some(t => /^k[12]/.test(t)) && c.tags.length === 1) s -= 3;
      s -= (c.entry?.freq ? Math.log10(c.entry.freq) : 5) * 0.5;
      return s;
    };
    list.sort((a, b) => score(b) - score(a));
    // Las formas de separables sin partícula en la cláusula se descartan si hay alternativa simple
    const nonSep = list.filter(c => !c.tags.every(t => /\.sep$/.test(t)));
    if (nonSep.length) list = nonSep;
    if (!list.length && NUMERAL.test(k) && k.length > 3) {           // numerales compuestos: neunundneunzig, zweitausendsechsundzwanzig
      for (let i = 1; i < k.length; i++) { const hit = (idx.index.get(k.slice(i)) || []).find(c => idx.byId.get(c.id)?.kind === 'num'); if (hit) return [{ id: hit.id, tags: ['numeral'] }]; }
    }
    if (!list.length && /mal$/.test(k) && k.length > 5) {            // multiplicativos: zweimal, dreimal, hundertmal → einmal
      const n = k.slice(0, -3), base = (idx.index.get('einmal') || [])[0];
      if (base && (NUMERAL.test(n) || (idx.index.get(n) || []).some(c => idx.byId.get(c.id)?.kind === 'num'))) return [{ id: base.id, tags: ['times'] }];
    }
    if (!list.length && /te[rnsm]?$/.test(k) && k.length > 4) {      // ordinales: elfte, zwanzigsten, achte → número
      const isNum = n => (idx.index.get(n) || []).find(c => idx.byId.get(c.id)?.kind === 'num');
      for (const re of [/ste[rnsm]?$/, /te[rnsm]?$/, /e[rnsm]?$/]) {
        const n = k.replace(re, ''); if (n === k || n.length < 2) continue;
        let hit = isNum(n);
        if (!hit && NUMERAL.test(n)) for (let i = 1; i < n.length && !hit; i++) hit = isNum(n.slice(i));
        if (hit) return [{ id: hit.id, tags: ['ordinal'] }];
      }
    }
    if (!list.length && opts.compound !== false) { const c = compound(token, idx); if (c) return [c]; }
    return list.map(({ id, tags }) => ({ id, tags }));
  }
  const U9 = '(?:ein|zwei|drei|vier|fünf|sechs|sieben|acht|neun)';
  const NUMERAL = new RegExp(`^(?:${U9}?(?:hundert|tausend))*(?:${U9}und)?(?:zwanzig|dreißig|vierzig|fünfzig|sechzig|siebzig|achtzig|neunzig|zehn|elf|zwölf|dreizehn|vierzehn|fünfzehn|sechzehn|siebzehn|achtzehn|neunzehn|eins|zwei|drei|vier|fünf|sechs|sieben|acht|neun|hundert|tausend)?$`);
  /* Compuesto nominal: Wohn|heim, Lebens|mittel, Arbeits|zimmer… (último elemento = núcleo). */
  function compound(token, idx, depth = 0) {
    if (!/^\p{Lu}/u.test(token) || token.length < 7 || depth > 1) return null;
    const lower = key(token);
    for (let i = 3; i <= lower.length - 3; i++) {
      const head = lower.slice(i);
      const heads = (idx.index.get(head) || []).filter(c => idx.byId.get(c.id)?.kind === 'n');
      if (!heads.length) continue;
      let left = lower.slice(0, i);
      const tries = [left, left.replace(/(s|es|n|en|e|er)$/, ''), left + 'en', left + 'n', left + 'e'];
      for (const l of tries) {
        const hit = (idx.index.get(l) || []).find(c => ['n', 'v', 'a', 'adv', 'prep', 'num'].includes(idx.byId.get(c.id)?.kind)) || (idx.index.get(l + 'en') || []).find(c => idx.byId.get(c.id)?.kind === 'v');
        if (hit) return { id: heads[0].id, tags: ['compound'], parts: [hit.id, heads[0].id] };
        const inner = l.length >= 7 ? compound(l.charAt(0).toLocaleUpperCase('de') + l.slice(1), idx, depth + 1) : null;
        if (inner) return { id: heads[0].id, tags: ['compound'], parts: [...inner.parts, heads[0].id] };
      }
    }
    return null;
  }

  /* ───────────── Presentación ───────────── */
  /* Notación lexicográfica del plural: -e, ¨-er, –, -s… */
  function pluralNotation(lemma, pl) {
    if (!pl) return null;
    if (pl === lemma) return '–';
    if (pl.startsWith(lemma)) return '-' + pl.slice(lemma.length);
    const u = umlaut(lemma);
    if (pl === u) return '¨';
    if (pl.startsWith(u)) return '¨-' + pl.slice(u.length);
    if (lemma.endsWith('e') && pl.startsWith(lemma.slice(0, -1))) return null;
    return null;
  }
  /* Conjugación visible: presente, Präteritum, Perfekt y Konjunktiv II para fichas de verbo. */
  function conjugation(e) {
    if (e.kind !== 'v') return null;
    const v = e.v, sep = v.sep, o = e.opts || {};
    const base = sep ? e.lemma.slice(sep.length) : e.lemma;
    const strip = s => sep && s ? s.replace(new RegExp('\\s+' + sep + '$'), '') : s;
    const pres = present(base, strip(v.p3), o.pres), prt = preterite(strip(v.prt), o.prt);
    const tail = sep ? ' ' + sep : '';
    const refl = v.refl ? (v.refl === 'D' ? ['mir', 'dir', 'sich', 'uns', 'euch', 'sich'] : ['mich', 'dich', 'sich', 'uns', 'euch', 'sich']) : null;
    const auxH = ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'], auxS = ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'];
    const aux = v.aux === 'ist' ? auxS : auxH;
    const persons = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
    return persons.map((p, i) => ({
      person: p,
      pres: pres[i] + (refl ? ' ' + refl[i] : '') + tail,
      prt: (prt[i] || '') + (refl ? ' ' + refl[i] : '') + tail,
      perf: aux[i] + (refl ? ' ' + refl[i] : '') + ' ' + v.pp
    }));
  }

  return { key, fold, expand, forms, present, preterite, umlaut, verbStem, buildIndex, tokens, isWord, sentences, analyze, candidates, compound, pluralNotation, conjugation, SEPARABLE };
});
