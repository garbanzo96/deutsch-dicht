/* Deutsch Dicht · consulta universal de palabras.
   Toda palabra alemana visible (lecciones, tablas, ejemplos, ejercicios, gramática, diccionario, mazo) se puede
   tocar para ver lema, tipo, significado, formas y pronunciación. Las lecturas usan el mismo panel con su propio
   análisis (glosas del texto). Se excluyen enlaces, botones de respuesta y el anverso de las tarjetas sin revelar. */
(function () {
  'use strict';
  const App = window.DDApp;
  const { t, loc, esc, icon, headword, formsLine, meaning, tagLabel } = App;
  const main = document.getElementById('main');
  const popup = document.getElementById('word-popup');

  /* ───────────── Panel de palabra (compartido con el lector) ───────────── */
  App.wordCard = function (res, opts = {}) {
    const e = res.entry;
    const tags = (res.tags || []).map(tagLabel).filter(Boolean);
    const uidx = e ? App.C.unitIndex.get(e.unit) : null;
    const later = e && opts.unitIndex !== null && opts.unitIndex !== undefined && uidx > opts.unitIndex;
    const inDeck = e && (App.state.cards['w:' + e.id + ':r'] || App.state.deck.added.includes(e.id));
    let body = '';
    if (e && e.kind !== 'name') {
      const gl = res.gloss ? `<div class="p-ctx">${t('En este texto', 'In this text')}: ${esc(loc(res.gloss))}</div>` : '';
      const lemmaSay = e.kind === 'n' && e.g && e.g !== 'pl' ? App.ART[e.g] + ' ' + e.lemma : e.lemma;
      body += `<div class="p-lemma" lang="de">${headword(e)}${App.audioBtn(lemmaSay)}<span class="chip">${esc(App.kindLabel(e.kind))}</span><span class="chip outline">U${App.pad2(App.C.unitById.get(e.unit)?.order || 0)}</span></div><div class="p-mean">${meaning(e)}</div>${gl}`;
      if (tags.length) body += `<div class="p-tags">${tags.map(x => `<span class="chip accent">${esc(x)}</span>`).join('')}</div>`;
      if (res.parts) body += `<div class="p-ctx">${t('Compuesto', 'Compound')}: ${res.parts.map(id => { const x = App.C.byId.get(id); return x ? `<span lang="de">${esc(x.lemma)}</span> (${meaning(x)})` : ''; }).join(' + ')}</div>`;
      if ((res.tags || []).includes('prefix')) body += `<div class="p-ctx">${t('Partícula del verbo separable', 'Particle of the separable verb')} <b lang="de">${esc(e.lemma)}</b>.</div>`;
      const fl = formsLine(e); if (fl) body += `<div class="p-forms">${fl}</div>`;
      if (later) body += `<div class="small muted">${t('Se estudia en la unidad', 'Studied in unit')} ${App.pad2(App.C.unitById.get(e.unit).order)}.</div>`;
      body += `<div class="p-actions">${inDeck ? `<span class="chip good">${icon('check', 's')} ${t('En tu mazo', 'In your deck')}</span>` : `<button class="btn sm" data-action="deck-add" data-id="${e.id}">${icon('plus', 's')} ${t('Priorizar en el mazo', 'Prioritise in deck')}</button>`}<a class="btn sm ghost" href="#dict/${e.id}">${t('Ficha', 'Entry')} ${icon('right', 's')}</a></div>`;
    } else if (e && e.kind === 'name') body += `<div class="p-mean">${meaning(e)}</div><div class="small muted">${t('Nombre propio', 'Proper name')}</div>`;
    else if (res.gloss) body += `<div class="p-mean">${esc(loc(res.gloss))}</div><div class="small muted">${t('Glosa del texto', 'Text gloss')}</div>`;
    else body += `<div class="p-mean muted">${t('Sin entrada en el léxico del curso.', 'Not in the course lexicon.')}</div><div class="p-actions"><a class="btn sm" href="#dict" data-action="dict-search" data-q="${esc(res.token)}">${icon('search', 's')} ${t('Buscar en la referencia', 'Search the reference')}</a></div>`;
    if (res.others?.length) body += `<div class="p-others"><span>${t('Otras posibilidades', 'Other readings')}:</span>${res.others.slice(0, 3).map(o => `<a href="#dict/${o.entry.id}" lang="de">${esc(o.entry.de)} · ${meaning(o.entry)}</a>`).join('')}</div>`;
    return `<div class="p-head"><span class="p-token" lang="de">${esc(res.token)}</span><span class="row" style="gap:6px">${App.audioBtn(res.token)}<button class="icon-btn" data-action="popup-close" aria-label="${t('Cerrar', 'Close')}">${icon('x', 's')}</button></span></div>${body}`;
  };

  /* ───────────── Mostrar / ocultar ───────────── */
  let current = null, pinned = false, render = null;
  App.popupState = () => ({ current, pinned });
  App.showPopup = function (el, html, pin, rerender) {
    if (current && current !== el) current.classList.remove('on');
    current = el; el.classList.add('on'); render = rerender || null;
    popup.innerHTML = html; popup.hidden = false; pinned = !!pin;
    position(el);
  };
  App.refreshPopup = function () { if (current && !popup.hidden && render) popup.innerHTML = render(); };
  function position(el) {
    const rect = el.getBoundingClientRect(), w = popup.offsetWidth, h = popup.offsetHeight;
    let top = rect.bottom + 8; if (top + h > innerHeight - 12) top = Math.max(12, rect.top - h - 8);
    popup.style.left = Math.max(12, Math.min(rect.left - 10, innerWidth - w - 12)) + 'px';
    popup.style.top = top + 'px';
  }
  App.positionPopup = () => { if (!popup.hidden && current?.isConnected) position(current); };
  App.hidePopup = function () { popup.hidden = true; pinned = false; current?.classList.remove('on'); current = null; render = null; App.onHidePopup?.(); };
  App.popupPinned = () => pinned;
  App.popupCurrent = () => current;

  /* ───────────── Análisis de texto libre ───────────── */
  const CONTAINER = '[lang="de"], .de, .de-text';
  const contextFor = el => el.closest(CONTAINER) || el.parentElement;
  function offsetIn(box, el) {
    let off = 0;
    const walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) { if (el.contains(n)) return off; off += n.nodeValue.length; }
    return -1;
  }
  function currentUnitIndex() {
    const r = App.route();
    if (r.view === 'unit') return App.C.unitIndex.get(r.id) ?? null;
    return null;
  }
  App.lookupText = function (text, offset) {
    const C = App.C, M = App.M;
    const a = M.analyze(text, C.index);
    let pos = 0, j = -1;
    for (let i = 0; i < a.tokens.length; i++) { const len = a.tokens[i].length; if (offset >= pos && offset < pos + len) { j = i; break; } pos += len; }
    if (j < 0 || !M.isWord(a.tokens[j])) return null;
    let list = a.analysis[j] || [];
    const ui = currentUnitIndex();
    if (ui !== null && list.length > 1) {
      const level = c => C.unitIndex.get(C.byId.get(c.id)?.unit) ?? 999;
      if (level(list[0]) > ui) { const k = list.find(c => level(c) <= ui); if (k) list = [k, ...list.filter(c => c !== k)]; }
    }
    const [first, ...others] = list;
    const token = a.tokens[j];
    if (!first) return { token, entry: null, others: [] };
    return { token, entry: C.byId.get(first.id), tags: first.tags, parts: first.parts, others: others.map(o => ({ entry: C.byId.get(o.id), tags: o.tags })).filter(o => o.entry && o.entry.id !== first.id) };
  };
  function showFor(el) {
    const box = contextFor(el);
    const text = box.textContent, off = offsetIn(box, el);
    const res = off < 0 ? null : App.lookupText(text, off);
    if (!res) return;
    const html = () => App.wordCard(res, { unitIndex: currentUnitIndex() });
    App.showPopup(el, html(), true, html);
    if ('ontouchstart' in window === false) popup.querySelector('.audio-btn')?.blur();
  }

  /* ───────────── Envolver palabras ───────────── */
  const SKIP = 'a, input, textarea, select, option, .w, .wl, [data-nolookup], button:not(.say), [data-action], .btn, .chip, nav, .tabs, label, .option, .options, .match, .match-item, .tokens-pool, .tokens-answer, .token, .rf, .letters, .letter, .popup, .kbd, code, script, style';
  const WORD = /[\p{L}][\p{L}\p{M}]*(?:[-’'][\p{L}\p{M}]+)*/gu;
  const IPA = /[ɐɛɪʊʏøœçʃʒŋʁəːˈ]/u;
  function wrapText(node) {
    const s = node.nodeValue;
    if (!s || !/\p{L}{2}/u.test(s)) return;
    let last = 0, frag = null;
    for (const m of s.matchAll(WORD)) {
      const w = m[0];
      if (w.length < 2 || IPA.test(w) || /^[A-ZÄÖÜ]{2,4}$/.test(w)) continue;
      frag = frag || document.createDocumentFragment();
      if (m.index > last) frag.appendChild(document.createTextNode(s.slice(last, m.index)));
      const sp = document.createElement('span'); sp.className = 'wl'; sp.textContent = w; sp.tabIndex = 0; sp.setAttribute('role', 'button');
      frag.appendChild(sp); last = m.index + w.length;
    }
    if (!frag) return;
    if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }
  function eligible(textNode) {
    const p = textNode.parentElement;
    if (!p || p.closest(SKIP)) return false;
    const de = p.closest(CONTAINER);
    if (!de) return false;
    const other = p.closest('[lang]');
    return !other || other.getAttribute('lang') === 'de' || de.contains(other) === false;
  }
  /* Citas alemanas dentro de texto en español/inglés: «Den Kaffee trinkt Lena.», „…“.
     Se marcan como alemán solo si al menos el 60 % de sus palabras está en el índice morfológico. */
  const QUOTE = /([«„])([^«»„“”]{2,160})([»“])/g;
  const known = w => (App.C.index.index.get(App.M.key(w)) || []).length > 0;
  function isGerman(text) {
    if (/^\s*[¨\-–+]/.test(text)) return false;          // notación (¨-er, -en)
    const words = text.match(/[\p{L}][\p{L}\p{M}’'-]*/gu) || [];
    if (!words.length) return false;
    const hits = words.filter(known).length;
    return hits / words.length >= 0.6 && (words.length > 1 || /[äöüßÄÖÜ]|^[A-ZÄÖÜ]/.test(words[0]) || hits === 1);
  }
  function markQuotes(root) {
    const nodes = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => {
      const p = n.parentElement;
      if (!p || !/[«„]/.test(n.nodeValue) || p.closest(SKIP) || p.closest(CONTAINER) || p.closest('[lang]')?.getAttribute('lang') === 'de') return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    } });
    for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n);
    for (const node of nodes) {
      const s = node.nodeValue; let last = 0, frag = null;
      for (const m of s.matchAll(QUOTE)) {
        if (!isGerman(m[2])) continue;
        frag = frag || document.createDocumentFragment();
        frag.appendChild(document.createTextNode(s.slice(last, m.index) + m[1]));
        const sp = document.createElement('span'); sp.setAttribute('lang', 'de'); sp.className = 'q-de'; sp.textContent = m[2];
        frag.appendChild(sp); frag.appendChild(document.createTextNode(m[3]));
        last = m.index + m[0].length;
      }
      if (!frag) continue;
      if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
      node.parentNode.replaceChild(frag, node);
    }
  }
  App.linkify = function (root) {
    if (!root || !App.C) return;
    markQuotes(root);
    const nodes = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => eligible(n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
    for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n);
    nodes.forEach(wrapText);
  };
  let queued = false;
  const observer = new MutationObserver(() => { if (queued) return; queued = true; setTimeout(() => { queued = false; observer.disconnect(); try { App.linkify(main); } finally { observe(); } }, 0); });
  const observe = () => observer.observe(main, { childList: true, subtree: true });
  observe();

  /* ───────────── Eventos ───────────── */
  document.addEventListener('click', e => {
    const w = e.target.closest('.wl');
    if (!w) { if (!popup.hidden && !popup.contains(e.target) && !e.target.closest('.w')) App.hidePopup(); return; }
    e.preventDefault(); e.stopPropagation();
    if (current === w && !popup.hidden) { App.hidePopup(); return; }
    showFor(w);
  }, true);
  document.addEventListener('keydown', e => {
    const w = e.target.closest?.('.wl');
    if (w && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.stopPropagation(); showFor(w); popup.querySelector('button, a')?.focus(); }
  }, true);
  window.addEventListener('scroll', App.positionPopup, { passive: true });
  window.addEventListener('resize', () => App.hidePopup());
  Object.assign(App.actions, {
    'popup-close': () => { const c = current; App.hidePopup(); c?.focus({ preventScroll: true }); },
    'deck-add': b => {
      if (!App.state.deck.added.includes(b.dataset.id)) App.state.deck.added.unshift(b.dataset.id);
      App.save(); App.toast(t('Palabra priorizada: aparecerá entre tus próximas nuevas.', 'Word prioritised: it will appear among your next new cards.'));
      if (!popup.hidden && render) App.refreshPopup(); else App.render({ noFocus: true });
    }
  });
})();
