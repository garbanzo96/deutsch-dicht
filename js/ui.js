/* Deutsch Dicht · utilidades de interfaz: escape, idioma, iconos, marcado alemán y bloques de lección. */
(function () {
  'use strict';
  const App = window.DDApp = window.DDApp || {};
  App.views = App.views || {};
  App.actions = App.actions || {};

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lang = () => App.state?.settings?.language || 'es';
  const t = (es, en) => lang() === 'en' ? en : es;
  const loc = v => v == null ? '' : typeof v === 'string' ? v : (v[lang()] ?? v.es ?? '');
  const pad2 = n => String(n).padStart(2, '0');
  const fmtNum = n => Number(n || 0).toLocaleString(lang() === 'en' ? 'en-GB' : 'es-CL');

  /* Iconos propios: trazos 24×24, sin dependencias. */
  const P = {
    learn: '<path d="M2.5 8.5 12 4l9.5 4.5L12 13z"/><path d="M6.5 10.5V16c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3v-5.5"/><path d="M21.5 8.5V14"/>',
    grammar: '<path d="M3 5.5h6.5A2.5 2.5 0 0 1 12 8v12a2 2 0 0 0-2-2H3z"/><path d="M21 5.5h-6.5A2.5 2.5 0 0 0 12 8v12a2 2 0 0 1 2-2h7z"/>',
    dict: '<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19"/><path d="M9 7.5h6M9 11h4"/>',
    review: '<rect x="3.5" y="7.5" width="13" height="13" rx="2.5"/><path d="M8 3.5h10a2.5 2.5 0 0 1 2.5 2.5v10"/>',
    read: '<path d="M6 3.5h8l4.5 4.5v12.5H6z"/><path d="M14 3.5V8h4.5M9 12h6.5M9 15.5h6.5M9 8.5h2.5"/>',
    progress: '<path d="M4 20V11M10 20V5M16 20v-6M21 20H3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    volume: '<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    play: '<path d="M7.5 4.5v15l12-7.5z"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    check: '<path d="m4.5 12.5 5 5 10-11"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    arrow: '<path d="M4 12h15M13.5 6l6 6-6 6"/>',
    left: '<path d="m14.5 5.5-6.5 6.5 6.5 6.5"/>',
    right: '<path d="m9.5 5.5 6.5 6.5-6.5 6.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    words: '<path d="M4 6h10M4 12h16M4 18h12"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.2"/>',
    alert: '<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5M12 17.3v.2"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    redo: '<path d="M20 7v5h-5"/><path d="M19.5 12A7.5 7.5 0 1 1 17 6.5"/>',
    download: '<path d="M12 4v11M7 10.5l5 5 5-5M4.5 20h15"/>',
    upload: '<path d="M12 15.5V4.5M7 9l5-5 5 5M4.5 20h15"/>',
    layers: '<path d="m12 3.5 9 4.5-9 4.5L3 8z"/><path d="m3 12.5 9 4.5 9-4.5M3 16.5l9 4.5 9-4.5"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    ear: '<path d="M7 9a5 5 0 0 1 10 0c0 3-3 3.5-3 7a3 3 0 0 1-6 0"/><path d="M10 9.5a2 2 0 0 1 4 0"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    book: '<path d="M5 4.5h11.5A2.5 2.5 0 0 1 19 7v13.5H7.5A2.5 2.5 0 0 1 5 18z"/><path d="M5 18a2.5 2.5 0 0 1 2.5-2.5H19"/>',
    chat: '<path d="M4 5.5h16v10H9l-5 4z"/>',
    slow: '<path d="M4 15.5h2.5M2.5 12h4M4 8.5h2.5"/><circle cx="14" cy="12" r="6.5"/><path d="M14 9v3l2 1.5"/>'
  };
  const icon = (name, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[name] || ''}</svg>`;

  /* Marcado alemán en contenido didáctico:
     [x] resalta morfema · {m …} {f …} {n …} {p …} género · {N …} {A …} {D …} {G …} caso · {V …} verbo */
  function mark(s) {
    let out = esc(s);
    for (let i = 0; i < 3; i++) out = out.replace(/\{([mfnpNADGV]) ([^{}]*)\}/g, (_, k, x) => `<span class="${'mfnp'.includes(k) ? 'g-' + k : 'c-' + k}">${x}</span>`);
    return out.replace(/\[([^\[\]]+)\]/g, '<span class="hl">$1</span>');
  }
  const plain = s => String(s ?? '').replace(/\{[mfnpNADGV] ([^{}]*)\}/g, '$1').replace(/\[([^\[\]]+)\]/g, '$1');
  const cell = c => typeof c === 'string' ? `<span class="de">${mark(c)}</span>` : esc(loc(c));

  /* Botones de audio */
  const sayBtn = (text, label) => `<button type="button" class="say" data-say="${esc(plain(text))}" aria-label="${esc(t('Escuchar: ', 'Listen: ') + plain(text))}">${label ?? `<span class="de">${mark(text)}</span>`}${icon('volume', 's')}</button>`;
  const audioBtn = (text, cls = '') => `<button type="button" class="audio-btn ${cls}" data-say="${esc(plain(text))}" aria-label="${esc(t('Escuchar: ', 'Listen: ') + plain(text))}">${icon('volume', 's')}</button>`;
  const wordChip = text => `<button type="button" class="word-chip" data-say="${esc(plain(text))}"><span>${mark(text)}</span>${icon('volume')}</button>`;

  /* Encabezados de palabra con artículo coloreado */
  const ART = { m: 'der', f: 'die', n: 'das', pl: 'die' };
  const gclass = g => g === 'pl' ? 'g-p' : g ? 'g-' + g : '';
  function headword(e, { plural = true } = {}) {
    if (!e) return '';
    if (e.kind === 'n') {
      const art = e.g ? `<span class="art ${gclass(e.g)}">${ART[e.g]}</span> ` : '';
      const pl = plural ? (e.pl ? `<span class="pl">, ${esc(App.M.pluralNotation(e.lemma, e.pl) || e.pl)}</span>` : (e.g !== 'pl' ? `<span class="pl">, ${t('sin pl.', 'no pl.')}</span>` : '')) : '';
      return `<span class="${gclass(e.g)}">${art}<span>${esc(e.lemma)}</span></span>${pl}`;
    }
    return esc(e.de);
  }
  function formsLine(e) {
    if (!e) return '';
    if (e.kind === 'v') return [e.v.p3, e.v.prt, [e.v.aux, e.v.pp].filter(Boolean).join(' ')].filter(Boolean).map(esc).join(' · ') + (e.v.rek ? ` · <span class="hl">${esc(e.v.rek)}</span>` : '') + (e.v.obj === 'D' ? ` · <span class="c-D">+ Dat.</span>` : '');
    if (e.kind === 'a' && e.a.gradable !== false && (e.a.cmp || e.a.sup)) return [e.a.cmp, e.a.sup].filter(Boolean).map(esc).join(' · ');
    if (e.kind === 'n' && e.pl) return `<span class="g-p">die ${esc(e.pl)}</span>` + (e.weak ? ` · ${t('declinación n', 'n-declension')}` : '');
    if (e.kind === 'prep' && e.case) return ({ A: '+ Akk.', D: '+ Dat.', G: '+ Gen.', AD: 'Wo? + Dat. · Wohin? + Akk.', GD: '+ Gen. / Dat.' })[e.case] || '';
    return '';
  }
  const meaning = e => e ? esc(lang() === 'en' ? e.en : e.es) : '';
  const KIND_LABEL = { n: ['sustantivo', 'noun'], v: ['verbo', 'verb'], a: ['adjetivo', 'adjective'], adv: ['adverbio', 'adverb'], prep: ['preposición', 'preposition'], conj: ['conector', 'connector'], pron: ['pronombre', 'pronoun'], art: ['artículo', 'article'], part: ['partícula', 'particle'], num: ['número', 'numeral'], phr: ['expresión', 'phrase'], interj: ['interjección', 'interjection'], name: ['nombre propio', 'proper name'] };
  const kindLabel = k => { const x = KIND_LABEL[k] || [k, k]; return t(x[0], x[1]); };

  /* Etiquetas de análisis morfológico */
  function tagLabel(tag) {
    const P = { '1s': '1.ª sg.', '2s': '2.ª sg.', '3s': '3.ª sg.', '1p': '1.ª pl.', '2p': '2.ª pl.', '3p': '3.ª pl.' };
    const PE = { '1s': '1st sg.', '2s': '2nd sg.', '3s': '3rd sg.', '1p': '1st pl.', '2p': '2nd pl.', '3p': '3rd pl.' };
    const person = x => t(P[x], PE[x]);
    let m;
    if ((m = /^(pres|prt)\.(\w\w)(\.sep|\.joined)?$/.exec(tag))) return `${m[1] === 'pres' ? 'Präsens' : 'Präteritum'} · ${person(m[2])}${m[3] === '.sep' ? ' · ' + t('separable', 'separable') : ''}`;
    if (tag.startsWith('contr:')) return t('contracción: ', 'contraction: ') + tag.slice(6);
    if (tag.startsWith('det:')) return tag.slice(4).split('|').map(x => x.replace('nom', 'Nom').replace('akk', 'Akk').replace('dat', 'Dat').replace('gen', 'Gen').replace('.m', ' m.').replace('.f', ' f.').replace('.n', ' n.').replace('.pl', ' Pl.')).join(' · ');
    const map = {
      inf: ['infinitivo', 'infinitive'], pp: ['Partizip II', 'past participle'], 'pp.adj': ['Partizip II declinado', 'declined past participle'], p1: ['Partizip I', 'present participle'], 'p1.adj': ['Partizip I declinado', 'declined present participle'],
      'zu-inf': ['infinitivo con zu', 'zu-infinitive'], imp: ['imperativo', 'imperative'], 'imp.sep': ['imperativo (separable)', 'imperative (separable)'], k1: ['Konjunktiv I', 'Konjunktiv I'], k2: ['Konjunktiv II', 'Konjunktiv II'], 'k2.joined': ['Konjunktiv II', 'Konjunktiv II'],
      sg: ['singular', 'singular'], pl: ['plural', 'plural'], 'dat.pl': ['dativo plural', 'dative plural'], 'gen.sg': ['genitivo singular', 'genitive singular'], 'dat.sg': ['dativo singular (arcaico)', 'dative singular (archaic)'], 'n-decl': ['declinación n (Akk/Dat/Gen)', 'n-declension (acc/dat/gen)'],
      decl: ['forma declinada', 'declined form'], pos: ['positivo', 'positive'], cmp: ['comparativo', 'comparative'], 'cmp.decl': ['comparativo declinado', 'declined comparative'], sup: ['superlativo', 'superlative'],
      akk: ['acusativo', 'accusative'], dat: ['dativo', 'dative'], gen: ['genitivo', 'genitive'], nom: ['nominativo', 'nominative'], 'akk|dat': ['acusativo / dativo', 'accusative / dative'], 'nom|akk': ['nominativo / acusativo', 'nominative / accusative'],
      prefix: ['prefijo separable', 'separable prefix'], compound: ['compuesto', 'compound'], numeral: ['número compuesto', 'compound numeral'], times: ['número + -mal («… veces»)', 'number + -mal (“… times”)'], subst: ['sustantivado (das Gute, das Lernen)', 'nominalised (das Gute, das Lernen)'], ordinal: ['número ordinal (-te / -ste)', 'ordinal number (-te / -ste)'], lemma: ['', ''], phr: ['parte de una expresión', 'part of a phrase']
    };
    const x = map[tag] || map[tag.replace(/\.joined$/, '')];
    if (x) return t(x[0], x[1]);
    if (/\.joined$/.test(tag)) return tagLabel(tag.replace(/\.joined$/, ''));
    return tag;
  }

  /* ───────────── Bloques de lección ───────────── */
  function blocks(list, opts = {}) {
    const out = [];
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      if (b.b === 'concept') {
        const group = [b];
        while (list[i + 1]?.b === 'concept') group.push(list[++i]);
        out.push(`<div class="concepts ${group.length === 1 ? 'single' : ''}">${group.map(concept).join('')}</div>`);
        continue;
      }
      const fn = BLOCKS[b.b];
      out.push(fn ? fn(b, opts) : '');
    }
    return `<div class="blocks">${out.join('')}</div>`;
  }
  const head = (b, tag) => b.h ? `<h3>${esc(loc(b.h))}${tag ? `<span class="tag">${esc(tag)}</span>` : ''}</h3>` : '';
  const note = b => b.n ? `<p class="blk-note-text">${esc(loc(b.n))}</p>` : '';
  function concept(b) {
    return `<article class="concept"><div class="cterm" lang="de">${mark(b.de)}</div><p>${esc(loc(b.t))}</p>${b.ex ? `<div class="ex">${b.ex.map(x => sayBtn(x)).join('')}</div>` : ''}</article>`;
  }
  function tableHTML(columns, rows, opts = {}) {
    return `<div class="tbl-wrap"><table class="tbl"><thead><tr>${columns.map(c => `<th scope="col">${esc(loc(c))}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => i === 0 && opts.rowHead !== false ? `<th scope="row">${cell(c)}</th>` : `<td class="${typeof c === 'string' ? 'de' : ''}">${cell(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  const BLOCKS = {
    table: b => `<section class="blk">${head(b)}${tableHTML(b.c, b.r, b)}${note(b)}</section>`,
    slots(b) {
      const cols = b.c || ['Vorfeld', { es: 'Verbo', en: 'Verb' }, 'Mittelfeld', { es: 'Verbo 2', en: 'Verb 2' }, 'Nachfeld'];
      const verbIdx = b.v || cols.map((c, i) => /verb|konnektor|verbo/i.test(loc(c)) ? i : -1).filter(i => i >= 0);
      const tpl = cols.map((c, i) => verbIdx.includes(i) ? 'minmax(90px, .7fr)' : 'minmax(0, 1.3fr)').join(' ');
      return `<section class="blk">${head(b)}<div class="slots"><div class="slots-head" style="grid-template-columns:${tpl}">${cols.map(c => `<span>${esc(loc(c))}</span>`).join('')}</div>${b.r.map(r => `<div class="slots-row" style="grid-template-columns:${tpl}">${r.map((c, i) => `<div class="slot ${verbIdx.includes(i) ? 'verb' : ''} ${c ? '' : 'empty'}" lang="de">${mark(c)}</div>`).join('')}</div>`).join('')}</div>${note(b)}</section>`;
    },
    pairs: b => `<section class="blk">${head(b)}<div class="pairs">${b.r.map(([a, z, g]) => `<div class="pair"><div class="side" lang="de">${mark(a)}</div><div class="arrow">${icon('arrow', 'l')}</div><div class="side to" lang="de">${mark(z)}</div>${g ? `<div class="gloss">${esc(loc(g))}</div>` : ''}</div>`).join('')}</div>${note(b)}</section>`,
    formula: b => `<section class="blk">${head(b)}<div class="formula">${b.f.map(p => p === '+' || p === '=' || p === '→' || p === '…' ? `<span class="op">${esc(p)}</span>` : `<span class="part ${p.key ? 'key' : ''}">${typeof p === 'string' ? mark(p) : esc(loc(p.t || p))}</span>`).join('')}</div>${b.ex ? `<div class="formula-ex">${b.ex.map(x => sayBtn(x)).join('')}</div>` : ''}${note(b)}</section>`,
    list(b) {
      const cols = b.cols || 2;
      const items = b.r.map(([de, m, en]) => {
        const meaningText = m === undefined ? '' : typeof m === 'string' && en !== undefined ? t(m, en) : loc(m);
        if (/^\d+$/.test(de)) return `<div class="term num-term"><span class="k">${esc(de)}</span>${b.audio ? sayBtn(m) : `<span class="de">${mark(m)}</span>`}</div>`;
        return `<div class="term">${b.audio ? sayBtn(de) : `<span class="de">${mark(de)}</span>`}<span class="m">${esc(meaningText)}</span></div>`;
      });
      return `<section class="blk">${head(b)}<div class="term-list c${cols}">${items.join('')}</div>${note(b)}</section>`;
    },
    letters: b => `<section class="blk">${head(b)}<div class="letters">${b.r.map(([l, name, ipa]) => `<button type="button" class="letter" data-say="${esc(name)}" data-letter aria-label="${esc(l + ' · ' + name)}"><b>${esc(l)}</b><span>${esc(name)}</span><i>[${esc(ipa)}]</i></button>`).join('')}</div>${note(b)}</section>`,
    sounds: b => `<section class="blk">${head(b)}<div class="sounds">${b.r.map(([g, ipa, words, n]) => `<div class="sound"><span class="g">${esc(g)}</span><span class="ipa">[${esc(ipa)}]</span><span class="words">${words.map(wordChip).join('')}</span><span class="note">${esc(loc(n))}</span></div>`).join('')}</div>${note(b)}</section>`,
    minimal: b => `<section class="blk">${head(b)}<div class="minimal"><div class="minimal-head"><span>${esc(loc(b.c[0]))}</span><span>${esc(loc(b.c[1]))}</span><span>${t('Significados', 'Meanings')}</span></div>${b.r.map(([a, z, m]) => `<div class="minimal-row">${wordChip(a)}${wordChip(z)}<span class="m">${esc(loc(m))}</span></div>`).join('')}</div>${note(b)}</section>`,
    note(b) {
      const ic = b.tone === 'warn' ? icon('alert') : b.tone === 'l1' ? 'ES' : icon('bulb');
      const k = b.tone === 'warn' ? t('Atención', 'Watch out') : b.tone === 'l1' ? t('Desde el español', 'From Spanish & English') : t('Clave', 'Key point');
      return `<aside class="callout ${b.tone || 'tip'}"><span class="ic">${ic}</span><div><b class="k">${k}</b>${esc(loc(b.t))}</div></aside>`;
    },
    examples: b => `<section class="blk">${head(b)}<div class="lines">${b.r.map(e => exampleLine(e)).join('')}</div>${note(b)}</section>`,
    ref(b) {
      const g = App.C.grammarById.get(b.id);
      if (!g) return '';
      const tb = (g.blocks || []).filter(x => x.b === 'table')[b.table || 0];
      return tb ? BLOCKS.table({ ...tb, h: tb.h || { es: g.es, en: g.en } }) + `<p class="small"><a href="#grammar/${esc(g.id)}">${icon('grammar', 's')} ${t('Referencia completa', 'Full reference')}: ${esc(loc(g))}</a></p>` : '';
    }
  };
  function exampleLine(e) {
    const [de, es, en] = e;
    return `<div class="line">${audioBtn(de)}<span class="de" lang="de">${mark(de)}</span><span class="tr">${esc(t(es, en ?? es))}</span></div>`;
  }

  /* Progreso visual */
  const bar = (ratio, cls = '') => `<div class="bar ${cls}"><span style="width:${Math.round(Math.max(0, Math.min(1, ratio)) * 100)}%"></span></div>`;
  const ring = (ratio, label) => `<div class="ring" style="--v:${Math.round(Math.max(0, Math.min(1, ratio)) * 100)}" data-label="${esc(label)}" role="img" aria-label="${esc(label)}"></div>`;

  Object.assign(App, { esc, t, loc, pad2, fmtNum, icon, mark, plain, cell, sayBtn, audioBtn, wordChip, headword, formsLine, meaning, kindLabel, tagLabel, blocks, tableHTML, exampleLine, bar, ring, gclass, ART });
})();
