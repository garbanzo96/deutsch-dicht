/* Deutsch Dicht · Lecturas: biblioteca, lector con audio por frase, análisis de palabras y comprensión. */
(function () {
  'use strict';
  const App = window.DDApp;
  const { t, loc, esc, icon, mark, headword, formsLine, meaning, tagLabel } = App;
  const main = document.getElementById('main');
  const popup = document.getElementById('word-popup');
  const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

  const RU = id => App.ui.read[id] || (App.ui.read[id] = { tr: 'off', answers: {} });
  const minutes = r => Math.max(1, Math.round(r.words / ({ A1: 60, A2: 80, B1: 110, B2: 130, C1: 150 }[r.level] || 100)));

  /* ───────────── Biblioteca ───────────── */
  App.views.read = function (r) {
    if (r.id) {
      const reading = App.C.readingById.get(r.id);
      if (!reading) return `<div class="page"><div class="empty"><h2>${t('Lectura no encontrada', 'Reading not found')}</h2><a class="btn" href="#read">${t('Biblioteca', 'Library')}</a></div></div>`;
      return `<div class="page">${render(reading, { embedded: false })}</div>`;
    }
    const f = App.ui.lib;
    const list = App.C.readings.filter(x => (!f.level || x.level === f.level) && (!f.kind || x.kind === f.kind))
      .sort((a, b) => (a.unitIndex ?? 99) - (b.unitIndex ?? 99) || LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level));
    const read = App.C.readings.filter(x => App.state.readings[x.id]?.read).length;
    const words = App.C.readings.reduce((n, x) => n + x.words, 0);
    const chip = (key, val, label) => `<button type="button" class="btn sm ${f[key] === val ? 'primary' : ''}" data-action="lib-filter" data-k="${key}" data-v="${val}">${label}</button>`;
    return `<div class="page">
      <header class="page-head"><div><div class="eyebrow">Lesen</div><h1>${t('Lecturas', 'Readings')}</h1><p class="lede">${t('Textos graduados con audio por frase y análisis de cada palabra. Los de unidad están escritos para que conozcas ≥ 95 % de su léxico al llegar a ellos; la biblioteca reúne textos originales y clásicos de dominio público.', 'Graded texts with sentence audio and word-by-word analysis. Unit texts are written so you know ≥ 95 % of their vocabulary when you reach them; the library gathers original texts and public-domain classics.')}</p></div>
        <div class="kpi" style="text-align:right"><span class="v">${read}<small> / ${App.C.readings.length}</small></span><span class="l">${t('leídas', 'read')} · ${App.fmtNum(words)} ${t('palabras en total', 'words in total')}</span></div></header>
      <div class="filters">${chip('level', '', t('Todos los niveles', 'All levels'))}${LEVELS.map(l => chip('level', l, l)).join('')}<span style="width:12px"></span>${chip('kind', '', t('Todas', 'All'))}${chip('kind', 'unit', t('De unidad', 'Unit texts'))}${chip('kind', 'library', t('Biblioteca', 'Library'))}</div>
      <div class="reading-grid">${list.map(card).join('') || `<p class="empty">${t('No hay lecturas con estos filtros.', 'No readings match these filters.')}</p>`}</div>
    </div>`;
  };
  function card(r) {
    const done = App.state.readings[r.id];
    const unit = r.unit ? App.C.unitById.get(r.unit) : null;
    return `<a class="reading-card" href="#read/${r.id}"><div class="row spread"><span class="row" style="gap:8px"><span class="level">${r.level}</span><span class="chip">${esc(loc(r.genre))}</span></span>${done?.read ? `<span class="status-dot done">${icon('check', 's')}</span>` : ''}</div>
      <div class="t" lang="de">${esc(r.de)}</div><div class="s">${esc(loc(r))}</div>
      <div class="bottom"><span>${icon('words', 's')} ${r.words}</span><span>${icon('clock', 's')} ${minutes(r)} min</span><span class="grow"></span>${unit ? `<span>${t('Unidad', 'Unit')} ${App.pad2(unit.order)}</span>` : `<span>${r.source?.type === 'public-domain' ? t('Clásico', 'Classic') : t('Original', 'Original')}${r.after ? ' · ' + t('tras U', 'after U') + App.pad2(App.C.unitById.get(r.after)?.order || 0) : ''}</span>`}</div></a>`;
  }
  App.actions['lib-filter'] = b => { App.ui.lib[b.dataset.k] = b.dataset.v; App.render({ noFocus: true }); };

  /* ───────────── Lector ───────────── */
  function sentenceRanges(text) {
    let pos = 0;
    return App.M.sentences(text).map(s => { const start = text.indexOf(s, pos); pos = start + s.length; return [start, start + s.length, s]; });
  }
  function paragraphHTML(r, i) {
    const a = App.C.analyzeParagraph(r, i), text = r.p[i][0];
    const ranges = sentenceRanges(text);
    let html = '', off = 0, si = -1;
    a.tokens.forEach((tok, j) => {
      const start = off; off += tok.length;
      const k = ranges.findIndex(([s, e]) => start >= s && start < e);
      if (k !== si) { if (si >= 0) html += '</span>'; if (k >= 0) html += `<span class="sent" data-p="${i}" data-s="${k}">`; si = k; }
      if (App.M.isWord(tok) && tok.length > 1) {
        const first = a.analysis[j]?.[0];
        const entry = first && App.C.byId.get(first.id);
        const isNew = r.unit && entry && entry.unit === r.unit && entry.kind !== 'name';
        html += `<span class="w${isNew ? ' new' : ''}" data-p="${i}" data-t="${j}" tabindex="0" role="button" aria-haspopup="dialog">${esc(tok)}</span>`;
      } else html += esc(tok);
    });
    if (si >= 0) html += '</span>';
    return html;
  }
  function render(r, opts = {}) {
    const ui = RU(r.id), state = App.state.readings[r.id];
    const unit = r.unit ? App.C.unitById.get(r.unit) : null;
    const dialog = r.format === 'dialog';
    const tr = ui.tr;
    const header = opts.embedded
      ? `<div class="reader-head"><div class="eyebrow"><span class="level">${r.level}</span> ${esc(loc(r.genre))}</div><h1 lang="de">${esc(r.de)}</h1><div class="sub">${esc(loc(r))} · ${r.words} ${t('palabras', 'words')} · ${minutes(r)} min</div></div>`
      : `<nav class="crumbs"><a href="#read">${t('Lecturas', 'Readings')}</a>${icon('right', 's')}<span>${r.level}</span>${unit ? `${icon('right', 's')}<a href="#unit/${unit.id}">${t('Unidad', 'Unit')} ${App.pad2(unit.order)}</a>` : ''}</nav>
         <div class="reader-head"><div class="eyebrow"><span class="level">${r.level}</span> ${esc(loc(r.genre))}</div><h1 lang="de">${esc(r.de)}</h1><div class="sub">${esc(loc(r))} · ${r.words} ${t('palabras', 'words')} · ${minutes(r)} min</div></div>`;
    const bar = `<div class="reader-bar ${opts.embedded ? 'embedded' : ''}">
      <button class="btn sm primary" data-action="read-all" data-id="${r.id}" id="read-all">${icon('play', 's fill')} ${t('Escuchar todo', 'Listen to all')}</button>
      <button class="btn sm ${App.state.settings.slowAudio ? 'primary' : ''}" data-action="toggle-slow" aria-pressed="${App.state.settings.slowAudio}">${icon('slow', 's')} ${t('Lento', 'Slow')}</button>
      <div class="seg" role="group" aria-label="${t('Traducción', 'Translation')}">${[['off', t('Sin traducción', 'No translation')], ['below', t('Debajo', 'Below')], ['parallel', t('Paralela', 'Side by side')]].map(([k, l]) => `<button data-action="read-tr" data-id="${r.id}" data-v="${k}" aria-pressed="${tr === k}">${l}</button>`).join('')}</div>
    </div>`;
    const intro = r.intro ? `<div class="callout tip" style="max-width:760px;margin:0 auto 22px"><span class="ic">${icon('info')}</span><div>${esc(loc(r.intro))}${r.focus ? `<br><b class="k" style="margin-top:8px">${t('Fíjate en', 'Notice')}</b>${esc(loc(r.focus))}` : ''}</div></div>` : '';
    const paras = r.p.map((p, i) => {
      const trText = t(p[1], p[2]);
      const dlg = dialog || !!p[3];
      return `<div class="para ${dlg ? 'dialog' : ''}">${dlg ? `<div class="who">${esc(p[3] || '')}</div>` : ''}<p class="de-text" lang="de">${paragraphHTML(r, i)} <button type="button" class="say" data-action="read-para" data-id="${r.id}" data-p="${i}" aria-label="${t('Escuchar párrafo', 'Play paragraph')}">${icon('volume', 's')}</button></p>${tr === 'off' ? '' : `<p class="tr-text">${esc(trText)}</p>`}</div>`;
    }).join('');
    const glossary = (r.gloss || []).length ? `<section class="card flat"><div class="card-head"><h3>${t('Glosario del texto', 'Text glossary')}</h3><span class="sub">${t('Palabras aún no estudiadas o con sentido contextual', 'Words not yet studied or with a contextual sense')}</span></div><div class="gloss-grid">${r.gloss.map(([w, m]) => `<div class="term">${App.sayBtn(w)}<span class="m">${esc(loc(m))}</span></div>`).join('')}</div></section>` : '';
    const questions = (r.q || []).length ? `<section class="card flat"><div class="card-head"><h3>${t('Comprensión', 'Comprehension')} · <span lang="de">Verstehen</span></h3><span class="sub">${Object.keys(ui.answers).length}/${r.q.length}</span></div><div class="questions">${r.q.map((q, qi) => question(r, q, qi, ui)).join('')}</div></section>` : '';
    const src = r.source || {};
    const source = `<p class="source-note">${src.type === 'public-domain' ? `<strong>${esc(src.author || '')}</strong>${src.work ? ` · <em lang="de">${esc(src.work)}</em>` : ''}${src.year ? ` (${esc(String(src.year))})` : ''}. ${t('Texto original en dominio público.', 'Original text in the public domain.')} ${src.url && /^https:\/\//.test(src.url) ? `<a href="${esc(src.url)}" target="_blank" rel="noopener noreferrer">${t('Fuente', 'Source')}</a>. ` : ''}${src.note ? esc(loc(src.note)) + ' ' : ''}${t('Traducciones propias.', 'Translations by Deutsch Dicht.')}` : t('Texto didáctico original de Deutsch Dicht, con traducciones propias.', 'Original Deutsch Dicht teaching text, with our own translations.') + (src.note ? ' ' + esc(loc(src.note)) : '')} ${t('Audio sintético (macOS, de-DE).', 'Synthetic audio (macOS, de-DE).')}</p>`;
    const done = `<div class="row" style="justify-content:center"><button class="btn ${state?.read ? '' : 'primary'}" data-action="read-done" data-id="${r.id}">${state?.read ? icon('check', 's') + ' ' + t('Leída', 'Read') : t('Marcar como leída', 'Mark as read')}</button></div>`;
    return `${header}${bar}${intro}<article class="reader ${tr === 'parallel' ? 'parallel' : ''} ${r.format === 'verse' ? 'verse' : ''}">${paras}</article><div class="reader-side">${questions}${glossary}${done}${source}</div>`;
  }
  function question(r, q, qi, ui) {
    const ans = ui.answers[qi];
    const answered = ans !== undefined;
    const ok = answered && ans === q.a;
    const opts = q.t === 'rf' ? [[true, t('Verdadero · richtig', 'True · richtig')], [false, t('Falso · falsch', 'False · falsch')]] : q.o.map((o, i) => [i, typeof o === 'string' ? o : loc(o)]);
    return `<div class="question"><div class="qq" lang="de"><b>${qi + 1}</b><span>${mark(q.q)}</span></div><div class="opts">${opts.map(([v, l]) => `<button type="button" class="btn sm ${answered && v === q.a ? 'primary' : ''}" data-action="read-q" data-id="${r.id}" data-q="${qi}" data-v="${v}" ${answered ? 'disabled' : ''} ${typeof l === 'string' && q.t !== 'rf' ? 'lang="de"' : ''}>${esc(l)}</button>`).join('')}</div>${answered ? `<div class="feedback ${ok ? 'ok' : 'bad'}"><div class="head">${icon(ok ? 'check' : 'x')} ${ok ? t('Correcto', 'Correct') : t('No es así', 'Not quite')}</div>${q.x ? `<div class="why">${esc(loc(q.x))}</div>` : ''}</div>` : ''}</div>`;
  }

  Object.assign(App.actions, {
    'read-tr': b => { RU(b.dataset.id).tr = b.dataset.v; App.render({ noFocus: true }); },
    'toggle-slow': () => { App.state.settings.slowAudio = !App.state.settings.slowAudio; App.save(); App.render({ noFocus: true }); },
    'read-done': b => { const s = App.state.readings[b.dataset.id] || {}; App.state.readings[b.dataset.id] = { ...s, read: s.read ? 0 : Date.now() }; if (!App.state.readings[b.dataset.id].read) delete App.state.readings[b.dataset.id]; App.save(); App.render({ noFocus: true }); },
    'read-q': b => {
      const r = App.C.readingById.get(b.dataset.id), ui = RU(r.id), qi = Number(b.dataset.q), q = r.q[qi];
      ui.answers[qi] = q.t === 'rf' ? b.dataset.v === 'true' : Number(b.dataset.v);
      if (Object.keys(ui.answers).length === r.q.length) {
        const score = r.q.filter((x, i) => ui.answers[i] === x.a).length / r.q.length;
        App.state.readings[r.id] = { read: App.state.readings[r.id]?.read || Date.now(), score };
        App.save();
      }
      App.render({ noFocus: true });
    },
    'read-para': b => playParagraphs(App.C.readingById.get(b.dataset.id), [Number(b.dataset.p)]),
    'read-all': b => { if (App.A.playing()) { App.A.stop(); return; } const r = App.C.readingById.get(b.dataset.id); playParagraphs(r, r.p.map((_, i) => i)); }
  });
  function playParagraphs(r, list) {
    const items = [];
    for (const p of list) sentenceRanges(r.p[p][0]).forEach(([, , s], k) => items.push({ p, k, s }));
    const btn = document.getElementById('read-all');
    const setBtn = playing => { if (btn) btn.innerHTML = playing ? `${icon('pause', 's')} ${t('Detener', 'Stop')}` : `${icon('play', 's fill')} ${t('Escuchar todo', 'Listen to all')}`; };
    setBtn(true);
    App.A.sequence(items.map(x => x.s), {
      slow: App.state.settings.slowAudio, gap: 180, voices: items.map(x => (window.DD.speakers || {})[r.p[x.p][3]] === 'm' ? 'm' : 'f'),
      onIndex: i => { main.querySelectorAll('.sent.playing').forEach(x => x.classList.remove('playing')); const el = main.querySelector(`.sent[data-p="${items[i].p}"][data-s="${items[i].k}"]`); if (el) { el.classList.add('playing'); el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } },
      onEnd: (cancelled, err) => { main.querySelectorAll('.sent.playing').forEach(x => x.classList.remove('playing')); setBtn(false); if (err) App.toast(t('No hay audio disponible para este texto.', 'No audio available for this text.')); }
    });
  }

  /* ───────────── Ventana de palabra ───────────── */
  let hideTimer = null, showTimer = null;
  function readingFor(el) {
    const r = App.route();
    if (r.view === 'read') return App.C.readingById.get(r.id);
    if (r.view === 'unit') return App.C.readingById.get(App.C.unitById.get(r.id)?.reading);
    return null;
  }
  const popupHTML = (r, p, j) => App.wordCard(App.C.resolve(r, p, j), { unitIndex: r.unitIndex });
  function show(el, pin) {
    const r = readingFor(el); if (!r) return;
    clearTimeout(hideTimer);
    const p = Number(el.dataset.p), j = Number(el.dataset.t);
    App.showPopup(el, popupHTML(r, p, j), pin, () => popupHTML(r, p, j));
  }
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  main.addEventListener('pointerover', e => { if (!fine.matches) return; const w = e.target.closest('.w'); if (!w || App.popupPinned()) return; clearTimeout(showTimer); showTimer = setTimeout(() => show(w, false), 140); });
  main.addEventListener('pointerout', e => { const w = e.target.closest('.w'); if (!w) return; clearTimeout(showTimer); if (!App.popupPinned()) hideTimer = setTimeout(() => { if (!popup.matches(':hover')) App.hidePopup(); }, 260); });
  popup.addEventListener('pointerenter', () => clearTimeout(hideTimer));
  popup.addEventListener('pointerleave', () => { if (!App.popupPinned()) hideTimer = setTimeout(App.hidePopup, 260); });
  main.addEventListener('click', e => { const w = e.target.closest('.w'); if (w) { e.stopPropagation(); show(w, true); } });
  main.addEventListener('keydown', e => { const w = e.target.closest?.('.w'); if (w && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); show(w, true); popup.querySelector('button, a')?.focus(); } });
  App.onHidePopup = () => clearTimeout(showTimer);

  App.Reader = { render, mounted() { } };
  App.views.readKey = (e) => { if (e.key === ' ' && e.target === document.body) { e.preventDefault(); document.getElementById('read-all')?.click(); } };
})();
