/* Deutsch Dicht · Referencia: diccionario (curso + WikDict) y gramática sistemática. */
(function () {
  'use strict';
  const App = window.DDApp;
  const { t, loc, esc, icon, mark, headword, formsLine, meaning, blocks, tableHTML, exampleLine } = App;
  const main = document.getElementById('main');
  const PAGE = 60;
  const KINDS = [['', ['Todo', 'All']], ['n', ['Sustantivos', 'Nouns']], ['v', ['Verbos', 'Verbs']], ['a', ['Adjetivos', 'Adjectives']], ['x', ['Otras clases', 'Other classes']], ['phr', ['Expresiones', 'Phrases']]];
  const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

  /* ───────────── Diccionario ───────────── */
  function searchCourse(q, f) {
    const C = App.C, k = App.M.key(q), unitLevel = e => C.unitById.get(e.unit)?.level;
    let list = C.lexicon.filter(e => e.kind !== 'name' || k);
    if (f.kind === 'x') list = list.filter(e => !['n', 'v', 'a', 'phr'].includes(e.kind));
    else if (f.kind) list = list.filter(e => e.kind === f.kind);
    if (f.level) list = list.filter(e => unitLevel(e) === f.level);
    if (f.deck) list = list.filter(e => App.state.cards['w:' + e.id + ':r']);
    if (!k) return list;
    const formHits = new Set((C.index.index.get(k) || []).map(x => x.id));
    const score = e => { const l = App.M.key(e.lemma); if (l === k) return 0; if (formHits.has(e.id)) return 1; if (l.startsWith(k)) return 2; if (l.includes(k)) return 3; const m = App.M.key(e.es + ' ' + e.en); if (m.split(/[;,\s()]+/).includes(k)) return 4; if (m.includes(k)) return 5; return 9; };
    return list.map(e => [e, score(e)]).filter(x => x[1] < 9).sort((a, b) => a[1] - b[1] || a[0].order - b[0].order).map(x => x[0]);
  }
  function searchReference(q, f) {
    const k = App.M.key(q); if (!k || !App.dictList) return [];
    const curated = new Set(App.C.lexicon.map(e => App.M.key(e.lemma)));
    const out = [];
    for (const x of App.dictList) {
      if (curated.has(App.M.key(x.lemma)) || x.category === 'abreviaturas') continue;
      if (f.kind && f.kind !== 'x' && x.kind !== f.kind) continue;
      const l = App.M.key(x.lemma);
      let s = l === k ? 0 : (x.aliases || []).some(a => App.M.key(a) === k) ? 1 : l.startsWith(k) ? 2 : App.M.key(x.es + ' ' + x.en).includes(k) && k.length > 2 ? 5 : 9;
      if (s < 9) out.push([x, s]);
      if (out.length > 400) break;
    }
    return out.sort((a, b) => a[1] - b[1] || (a[0].frequencyRank ?? 1e9) - (b[0].frequencyRank ?? 1e9)).map(x => x[0]);
  }
  const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWZ'.split('');
  const sortKey = e => App.M.key(e.lemma).replace(/^(sich|der|die|das) /, '').replace(/^[äÄ]/, 'a').replace(/^[öÖ]/, 'o').replace(/^[üÜ]/, 'u');
  /* Paginador: anterior · 1 … 4 5 [6] 7 8 … 41 · siguiente · selector con el rango de cada página */
  function pagerHTML(page, pages, all) {
    const nums = new Set([0, pages - 1]); for (let i = page - 2; i <= page + 2; i++) if (i >= 0 && i < pages) nums.add(i);
    const sorted = [...nums].sort((a, b) => a - b);
    let html = '', prev = -1;
    for (const n of sorted) { if (n - prev > 1) html += '<span class="gap">…</span>'; html += `<button class="pg ${n === page ? 'on' : ''}" data-action="dict-goto" data-p="${n}" ${n === page ? 'aria-current="page"' : ''}>${n + 1}</button>`; prev = n; }
    const label = i => { const a = all[i * PAGE], b = all[Math.min(all.length, (i + 1) * PAGE) - 1]; return `${i + 1} · ${a ? a.lemma : ''} – ${b ? b.lemma : ''}`; };
    const select = `<label class="pg-jump"><span class="sr-only">${t('Ir a la página', 'Go to page')}</span><select class="select" data-pager>${Array.from({ length: pages }, (_, i) => `<option value="${i}" ${i === page ? 'selected' : ''}>${esc(label(i))}</option>`).join('')}</select></label>`;
    return `<div class="pagination"><button class="btn sm" data-action="dict-page" data-d="-1" ${page === 0 ? 'disabled' : ''} aria-label="${t('Anterior', 'Previous')}">${icon('left', 's')}</button><div class="pg-nums">${html}</div><button class="btn sm" data-action="dict-page" data-d="1" ${page >= pages - 1 ? 'disabled' : ''} aria-label="${t('Siguiente', 'Next')}">${icon('right', 's')}</button>${select}</div>`;
  }
  function row(e) {
    const unit = e.unit ? App.C.unitById.get(e.unit) : null;
    const inDeck = App.state.cards['w:' + e.id + ':r'];
    return `<a class="dict-row" href="#dict/${esc(e.id)}">${App.audioBtn(e.kind === 'n' && e.g ? App.ART[e.g] + ' ' + e.lemma : e.lemma)}<span class="hw" lang="de">${headword(e)}<small>${esc(App.kindLabel(e.kind))}</small></span><span class="m">${meaning(e)}</span><span class="u small muted">${unit ? 'U' + App.pad2(unit.order) + ' · ' + unit.level : (e.reference ? 'WikDict' : '')}</span><span>${inDeck ? App.deckDot(e.id) : ''}</span></a>`;
  }
  App.views.dict = function (r) {
    if (r.id) return entryPage(r.id);
    const f = App.ui.dict;
    const course = searchCourse(f.q, f);
    let ref = [];
    if (f.scope === 'all' && f.q) { if (App.dictList) ref = searchReference(f.q, f); else loadRef(); }
    let all = [...course, ...ref];
    const az = f.sort === 'az' && !f.q;
    if (az) all = [...all].sort((x, y) => sortKey(x).localeCompare(sortKey(y), 'de'));
    const pages = Math.max(1, Math.ceil(all.length / PAGE)); f.page = Math.max(0, Math.min(f.page, pages - 1));
    const slice = all.slice(f.page * PAGE, (f.page + 1) * PAGE);
    const pager = pages > 1 ? pagerHTML(f.page, pages, all) : '';
    const letters = az ? `<div class="alpha-bar" role="navigation" aria-label="${t('Ir a la letra', 'Jump to letter')}">${ALPHA.map(L => { const i = all.findIndex(e => sortKey(e).startsWith(L.toLowerCase())); return i < 0 ? `<span class="off">${L}</span>` : `<button data-action="dict-goto" data-p="${Math.floor(i / PAGE)}" class="${Math.floor(i / PAGE) === f.page ? 'on' : ''}">${L}</button>`; }).join('')}</div>` : '';
    const total = App.C.lexicon.filter(e => e.kind !== 'name').length;
    return `<div class="page">
      <header class="page-head"><div><div class="eyebrow">Wörterbuch</div><h1>${t('Diccionario', 'Dictionary')}</h1><p class="lede">${t(`Léxico del curso: ${App.fmtNum(total)} entradas revisadas, cada palabra introducida una sola vez y en formato lexicográfico. Busca también por formas flexionadas (Häuser, kam, ging) o en la referencia completa de 35 000 entradas (WikDict).`, `Course lexicon: ${App.fmtNum(total)} curated entries, each word introduced once and in lexicographic format. Search inflected forms too (Häuser, kam, ging) or the full 35,000-entry reference (WikDict).`)}</p></div></header>
      <div class="stack">
        <label class="search-box">${icon('search')}<input class="input" id="dict-q" type="search" placeholder="${t('Busca en alemán, español o inglés…', 'Search in German, Spanish or English…')}" value="${esc(f.q)}" autocomplete="off" spellcheck="false"></label>
        <div class="filters" style="margin:0">
          <div class="seg">${[['course', t('Curso', 'Course')], ['all', t('Curso + referencia', 'Course + reference')]].map(([k, l]) => `<button data-action="dict-scope" data-v="${k}" aria-pressed="${f.scope === k}">${l}</button>`).join('')}</div>
          ${KINDS.map(([k, l]) => `<button class="btn sm ${f.kind === k ? 'primary' : ''}" data-action="dict-kind" data-v="${k}">${t(...l)}</button>`).join('')}
          <select class="select" style="width:auto;height:32px" id="dict-level"><option value="">${t('Todos los niveles', 'All levels')}</option>${LEVELS.map(l => `<option ${f.level === l ? 'selected' : ''}>${l}</option>`).join('')}</select>
          <button class="btn sm ${f.deck ? 'primary' : ''}" data-action="dict-deck">${icon('review', 's')} ${t('En mi mazo', 'In my deck')}</button>
          <div class="seg" title="${t('Orden de la lista', 'List order')}">${[['course', t('Orden del curso', 'Course order')], ['az', 'A–Z']].map(([k, l]) => `<button data-action="dict-sort" data-v="${k}" aria-pressed="${(f.sort || 'course') === k}">${l}</button>`).join('')}</div>
        </div>
        <div class="row spread small muted"><span>${App.fmtNum(all.length)} ${t('resultados', 'results')}${f.scope === 'all' && f.q && !App.dictList ? ' · ' + t('cargando referencia…', 'loading reference…') : ''}</span><span>${t('Plural: -e añade -e · ¨-er Umlaut + -er · – sin cambio', 'Plural: -e adds -e · ¨-er umlaut + -er · – unchanged')}</span></div>
        ${letters}${pager}<div class="dict-list">${slice.map(row).join('') || `<p class="empty">${t('Sin resultados.', 'No results.')}</p>`}</div>${pager}
      </div></div>`;
  };
  function loadRef() {
    App.loadDictionary().then(list => {
      App.dictList = list.map(x => ({ ...App.normalizeDict(x), aliases: x.aliases, category: x.category, frequencyRank: x.frequencyRank, source: x.source }));
      App.dictIndex = new Map(App.dictList.map(x => [x.id, x]));
      if (App.route().view === 'dict') App.render();
    }).catch(() => App.toast(t('No se pudo cargar la referencia.', 'The reference could not be loaded.')));
  }
  let dictTimer;
  main.addEventListener('input', e => {
    if (e.target.id === 'dict-q') { clearTimeout(dictTimer); const v = e.target.value; dictTimer = setTimeout(() => { App.ui.dict.q = v; App.ui.dict.page = 0; App.render(); }, 120); }
    if (e.target.id === 'gram-q') { App.ui.gram.q = e.target.value; App.render(); }
  });
  main.addEventListener('change', e => { if (e.target.matches('[data-pager]')) { App.ui.dict.page = Number(e.target.value); App.render({ noFocus: true }); window.scrollTo(0, 0); return; } if (e.target.id === 'dict-level') { App.ui.dict.level = e.target.value; App.ui.dict.page = 0; App.render({ noFocus: true }); } });
  Object.assign(App.actions, {
    'dict-scope': b => { App.ui.dict.scope = b.dataset.v; App.ui.dict.page = 0; App.render({ noFocus: true }); },
    'dict-kind': b => { App.ui.dict.kind = b.dataset.v; App.ui.dict.page = 0; App.render({ noFocus: true }); },
    'dict-deck': () => { App.ui.dict.deck = !App.ui.dict.deck; App.ui.dict.page = 0; App.render({ noFocus: true }); },
    'dict-page': b => { App.ui.dict.page += Number(b.dataset.d); App.render({ noFocus: true }); window.scrollTo(0, 0); },
    'dict-goto': b => { App.ui.dict.page = Number(b.dataset.p); App.render({ noFocus: true }); window.scrollTo(0, 0); },
    'dict-sort': b => { App.ui.dict.sort = b.dataset.v; App.ui.dict.page = 0; App.render({ noFocus: true }); },
    'dict-search': b => { App.ui.dict.q = b.dataset.q; App.ui.dict.scope = 'all'; App.ui.dict.page = 0; App.go('#dict'); }
  });

  /* Ficha */
  function nounTable(e) {
    if (!e.g || e.g === 'pl') return '';
    const art = { m: ['der', 'den', 'dem', 'des'], f: ['die', 'die', 'der', 'der'], n: ['das', 'das', 'dem', 'des'] }[e.g];
    const L = e.lemma;
    let gen = L;
    if (e.opts?.gen) gen = e.opts.gen.replace(/^des\s+/, '');
    else if (e.weak) gen = L + (/e$/.test(L) ? 'n' : 'en');
    else if (e.g !== 'f') gen = /nis$/.test(L) ? L + 'ses' : /([sßxz]|sch)$/.test(L) ? L + 'es' : (/^[^aeiouäöü]*[aeiouäöü]+[^aeiouäöü]+$/i.test(L) ? L + '(e)s' : L + 's');
    const weak = e.weak ? L + (/e$/.test(L) ? 'n' : 'en') : L;
    const sg = [L, e.weak ? weak : L, e.weak ? weak : L, gen];
    const pl = e.pl ? [e.pl, e.pl, /[ns]$/.test(e.pl) ? e.pl : e.pl + 'n', e.pl] : null;
    const rows = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'].map((c, i) => [c, `{${e.g} ${art[i]}} ${sg[i]}`, pl ? `{p ${['die', 'die', 'den', 'der'][i]}} ${pl[i]}` : '—']);
    return `<section class="blk"><h3>Deklination · ${t('declinación', 'declension')}</h3>${tableHTML(['Kasus', 'Singular', 'Plural'], rows)}</section>`;
  }
  function verbTables(e) {
    const rows = App.M.conjugation(e);
    if (!rows) return '';
    const v = e.v, o = e.opts || {};
    const strong = v.prt && !/e(\s|$)/.test(v.prt.split(' ')[0]);
    const k2 = o.k2 || (strong ? App.M.umlaut(v.prt.split(' ')[0]) + 'e' : null);
    const sep = v.sep ? ' ' + v.sep : '';
    const stem = App.M.verbStem(v.sep ? e.lemma.slice(v.sep.length) : e.lemma);
    const duImp = o.imp || (/i/.test(rows[1].pres.split(' ')[0]) && !/i/.test(stem) && !/ä|äu/.test(rows[1].pres) ? rows[1].pres.split(' ')[0].replace(/s?t$/, '').replace(/ss$/, 'ss') : stem);
    const table = tableHTML(['', 'Präsens', 'Präteritum', 'Perfekt'], rows.map(r => [r.person, r.pres, r.prt, r.perf]));
    const extra = [
      ['Imperativ', `${duImp}${sep}! · ${rows[4].pres.split(' ')[0]}${sep}! · ${e.lemma.replace(v.sep || '', '')} Sie${sep}!`.replace(/^ /, '')],
      ['Partizip I · II', `${e.lemma}d · ${v.pp}`],
      ['Konjunktiv II', k2 ? `${k2}${sep} (${t('o', 'or')} würde ${e.lemma})` : `würde ${e.lemma}`],
      ['Hilfsverb', v.aux === 'ist' ? 'sein' : v.aux === 'hat' ? 'haben' : v.aux]
    ];
    return `<section class="blk"><h3>Konjugation · ${t('conjugación', 'conjugation')}</h3>${table}<div class="term-list c2" style="margin-top:14px">${extra.map(([k, x]) => `<div class="term"><span class="m">${esc(k)}</span><span class="de">${esc(x)}</span></div>`).join('')}</div><p class="blk-note-text">${t('Conjugación generada a partir de las formas principales revisadas.', 'Conjugation generated from the reviewed principal parts.')}</p></section>`;
  }
  function occurrences(e) {
    App.occ = App.occ || new Map();
    if (!App.occIndex) {            // índice único: entrada → párrafos donde es el mejor análisis
      App.occIndex = new Map();
      for (const r of App.C.readings) r.p.forEach((_, i) => {
        for (const list of App.C.analyzeParagraph(r, i).analysis) {
          const id = list?.[0]?.id; if (!id) continue;
          const arr = App.occIndex.get(id) || App.occIndex.set(id, []).get(id);
          if (!arr.some(x => x.r === r)) arr.push({ r, i });
        }
      });
    }
    if (!App.occ.has(e.id)) {
      const hits = [];
      for (const { r, i } of App.occIndex.get(e.id) || []) {
        if (hits.length >= 8) break;
        const s = App.M.sentences(r.p[i][0]).find(s => App.M.analyze(s, App.C.index).analysis.some(l => l?.[0]?.id === e.id));
        hits.push({ r, s: s || r.p[i][0] });
      }
      App.occ.set(e.id, hits);
    }
    return App.occ.get(e.id);
  }
  function entryPage(id) {
    let e = App.C.byId.get(id) || App.dictIndex?.get(id);
    if (!e) { if (/^dict-/.test(id)) { loadRef(); return `<div class="page"><p class="muted">${t('Cargando…', 'Loading…')}</p></div>`; } return `<div class="page"><div class="empty"><h2>${t('Entrada no encontrada', 'Entry not found')}</h2><a class="btn" href="#dict">${t('Diccionario', 'Dictionary')}</a></div></div>`; }
    const unit = e.unit ? App.C.unitById.get(e.unit) : null;
    const r = App.state.cards['w:' + e.id + ':r'], p = App.state.cards['w:' + e.id + ':p'];
    const cardInfo = (c, label) => `<div class="kpi"><span class="l">${label}</span><span class="v" style="font-size:20px">${!c ? t('—', '—') : c.st === 2 ? Math.round(c.s) + ' d' : t('aprendiendo', 'learning')}</span><span class="d">${c ? t('próximo', 'next') + ': ' + new Date(c.due).toLocaleDateString() : t('aún no introducida', 'not introduced yet')}</span></div>`;
    const occ = e.reference ? [] : occurrences(e);
    const other = App.state.settings.language === 'en' ? e.es : e.en;
    const say = e.kind === 'n' && e.g ? App.ART[e.g] + ' ' + e.lemma : e.lemma;
    return `<div class="page">
      <nav class="crumbs"><a href="#dict">${t('Diccionario', 'Dictionary')}</a>${icon('right', 's')}<span>${esc(App.kindLabel(e.kind))}</span></nav>
      <div class="entry">
        <header class="entry-head"><div><h1 lang="de">${headword(e, { plural: false })} ${App.audioBtn(say, 'lg')}</h1>${formsLine(e) ? `<div class="line2" lang="de">${formsLine(e)}</div>` : ''}<div class="mean">${meaning(e)}</div><div class="small muted" style="margin-top:4px">${esc(other || '')}</div></div>
          <div class="row">${unit ? `<a class="chip outline" href="#unit/${unit.id}">U${App.pad2(unit.order)} · ${unit.level}</a>` : ''}<span class="chip">${esc(App.kindLabel(e.kind))}</span>${e.freq ? `<span class="chip outline" title="OpenSubtitles">#${App.fmtNum(e.freq)}</span>` : ''}</div></header>
        ${e.ex ? `<section class="blk"><h3>${t('Ejemplo', 'Example')}</h3><div class="lines">${exampleLine([e.ex.de, e.ex.es, e.ex.en])}</div></section>` : ''}
        ${e.note ? `<aside class="callout tip"><span class="ic">${icon('bulb')}</span><div>${esc(loc(e.note))}</div></aside>` : ''}
        ${e.kind === 'n' ? nounTable(e) : ''}${e.kind === 'v' && !e.reference ? verbTables(e) : ''}
        ${!e.reference && e.kind !== 'name' ? `<section class="blk"><h3>${t('En tu memoria', 'In your memory')}</h3><div class="grid g3">${cardInfo(r, t('Reconocimiento', 'Recognition'))}${cardInfo(p, t('Producción', 'Production'))}<div>${r || App.state.deck.added.includes(e.id) ? `<span class="chip good">${icon('check', 's')} ${t('En el mazo', 'In deck')}</span>` : `<button class="btn" data-action="deck-add" data-id="${esc(e.id)}">${icon('plus', 's')} ${t('Priorizar en el mazo', 'Prioritise in deck')}</button>`}</div></div><p class="blk-note-text">${t('Estabilidad FSRS: días que el recuerdo tarda en bajar al 90 %.', 'FSRS stability: days until recall probability falls to 90 %.')}</p></section>` : ''}
        ${e.reference ? `<section class="blk"><h3>${t('Referencia importada', 'Imported reference')}</h3><p class="small muted">WikDict / Wiktionary · CC BY-SA. ${t('No revisada entrada por entrada; puede incluir sentidos regionales o técnicos.', 'Not reviewed entry by entry; may include regional or technical senses.')}</p><div class="row" style="margin-top:10px"><button class="btn" data-action="deck-add" data-id="${esc(e.id)}">${icon('plus', 's')} ${t('Añadir al mazo', 'Add to deck')}</button></div></section>` : ''}
        ${occ.length ? `<section class="blk"><h3>${t('En las lecturas', 'In the readings')}</h3><div class="lines">${occ.map(o => `<a class="line" href="#read/${o.r.id}" style="color:inherit">${App.audioBtn(o.s)}<span class="de" lang="de">${esc(o.s)}</span><span class="tr">${esc(o.r.de)} · ${o.r.level}</span></a>`).join('')}</div></section>` : ''}
      </div></div>`;
  }

  /* ───────────── Gramática ───────────── */
  App.views.grammar = function (r) {
    const C = App.C, q = App.M.key(App.ui.gram.q || '');
    if (!C.grammar.length) return `<div class="page"><div class="empty"><h2>${t('Gramática en preparación', 'Grammar in preparation')}</h2></div></div>`;
    const match = g => !q || App.M.key([g.de, g.es, g.en, loc(g.summary)].join(' ')).includes(q);
    const topic = C.grammarById.get(r.id) || C.grammar[0];
    const nav = C.chapters.map(ch => {
      const list = C.grammar.filter(g => g.chapter === ch.id && match(g));
      if (!list.length) return '';
      return `<div><h4>${esc(ch.de)} · ${esc(loc(ch))}</h4>${list.map(g => `<a href="#grammar/${g.id}" class="${g.id === topic.id ? 'active' : ''}">${esc(loc(g))}<span class="de">${esc(g.de)}</span></a>`).join('')}</div>`;
    }).join('');
    const ch = C.chapters.find(c => c.id === topic.chapter);
    const units = C.units.filter(u => (u.grammar || []).includes(topic.id));
    const idx = C.grammar.indexOf(topic), prevT = C.grammar[idx - 1], nextT = C.grammar[idx + 1];
    return `<div class="page wide">
      <header class="page-head"><div><div class="eyebrow">Grammatik</div><h1>${t('Gramática', 'Grammar')}</h1><p class="lede">${t(`Referencia sistemática completa: ${C.grammar.length} temas en ${C.chapters.length} capítulos, con paradigmas íntegros, reglas, excepciones y ejemplos con audio.`, `Complete systematic reference: ${C.grammar.length} topics in ${C.chapters.length} chapters, with full paradigms, rules, exceptions and audio examples.`)}</p></div></header>
      <div class="ref-layout"><nav class="ref-nav"><label class="search-box">${icon('search')}<input class="input" id="gram-q" type="search" placeholder="${t('Buscar tema…', 'Search topics…')}" value="${esc(App.ui.gram.q || '')}"></label>${nav}</nav>
        <article><header class="topic-head"><div class="eyebrow">${ch ? esc(ch.de) + ' <span class="sep">·</span> ' + esc(loc(ch)) : ''} <span class="level">${topic.level}</span></div><h1 lang="de">${esc(topic.de)}</h1><p class="sub">${esc(loc(topic))}</p>${topic.summary ? `<p class="topic-summary">${esc(loc(topic.summary))}</p>` : ''}</header>
          ${blocks(topic.blocks || [])}
          ${topic.examples?.length ? `<section class="blk" style="margin-top:18px"><h3>${t('Ejemplos', 'Examples')}</h3><div class="lines">${topic.examples.map(exampleLine).join('')}</div></section>` : ''}
          ${units.length ? `<p class="small muted" style="margin-top:18px">${t('Se practica en', 'Practised in')}: ${units.map(u => `<a href="#unit/${u.id}">U${App.pad2(u.order)} · <span lang="de">${esc(u.de)}</span></a>`).join(' · ')}</p>` : ''}
          <nav class="unit-foot">${prevT ? `<a href="#grammar/${prevT.id}"><small>${t('Anterior', 'Previous')}</small><span lang="de">← ${esc(prevT.de)}</span></a>` : '<span></span>'}${nextT ? `<a class="next" href="#grammar/${nextT.id}"><small>${t('Siguiente', 'Next')}</small><span lang="de">${esc(nextT.de)} →</span></a>` : '<span></span>'}</nav>
        </article></div></div>`;
  };
})();
