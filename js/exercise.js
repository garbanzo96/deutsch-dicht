/* Deutsch Dicht · ejercicios: render, lectura de respuesta y retroalimentación (unidades y repaso). */
(function () {
  'use strict';
  const App = window.DDApp;
  const { t, loc, esc, icon, mark, plain } = App;

  const TYPE = {
    choice: ['Opción', 'Choice'], gap: ['Completar', 'Fill in'], order: ['Ordenar', 'Word order'], write: ['Traducir', 'Translate'],
    transform: ['Transformar', 'Transform'], match: ['Relacionar', 'Match'], listen: ['Dictado', 'Dictation'], rf: ['Verdadero o falso', 'True or false']
  };
  const DEFAULT_PROMPT = {
    choice: ['Elige la opción correcta.', 'Choose the correct option.'], gap: ['Completa con la forma correcta.', 'Fill in the correct form.'],
    order: ['Ordena las piezas para formar la frase.', 'Arrange the pieces into a sentence.'], write: ['Traduce al alemán.', 'Translate into German.'],
    match: ['Relaciona cada elemento de la izquierda con uno de la derecha.', 'Match each item on the left with one on the right.'],
    listen: ['Escucha y escribe lo que oyes.', 'Listen and write what you hear.'], rf: ['¿Verdadero o falso?', 'True or false?']
  };
  const typeLabel = ex => t(...(TYPE[ex.t] || [ex.t, ex.t]));
  const prompt = ex => ex.p ? loc(ex.p) : t(...(DEFAULT_PROMPT[ex.t] || ['', '']));

  /* PRNG con semilla: el orden aleatorio de opciones es estable para cada ejercicio. */
  function seeded(str) { let h = 2166136261; for (const c of String(str)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 1e6) / 1e6; }; }
  function shuffled(n, seed) { const r = seeded(seed), a = [...Array(n).keys()]; for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const optText = o => typeof o === 'string' ? `<span class="de">${mark(o)}</span>` : `<span>${esc(loc(o))}</span>`;
  const optPlain = o => typeof o === 'string' ? plain(o) : loc(o);

  /* Respuesta correcta en texto (para mostrar la solución). */
  function solution(ex) {
    switch (ex.t) {
      case 'choice': return optPlain(ex.o[ex.a]);
      case 'rf': return ex.a ? t('Verdadero · richtig', 'True · richtig') : t('Falso · falsch', 'False · falsch');
      case 'gap': { const answers = Array.isArray(ex.a) ? ex.a : [ex.a]; let k = 0; return ex.q.replace(/___/g, () => answers[k++]); }
      case 'match': return ex.pairs.map(([l, r]) => `${optPlain(l)} = ${optPlain(r)}`).join(' · ');
      default: return ex.a;
    }
  }
  /* Cuerpo según el tipo. ctx = {id, val, res, locked} */
  function body(ex, ctx) {
    const v = ctx.val, locked = ctx.locked;
    const audio = ex.audio || (ex.t === 'listen' ? ex.a : null);
    let html = '';
    if (audio) html += `<div class="listen-stage"><button type="button" class="audio-btn lg" data-say="${esc(plain(audio))}" id="ex-audio" aria-label="${t('Escuchar', 'Listen')}">${icon('play', 'fill')}</button><button type="button" class="btn sm ghost" data-action="say-slow" data-text="${esc(plain(audio))}">${icon('slow', 's')} ${t('Lento', 'Slow')}</button><span class="small muted">${t('Puedes repetirlo cuantas veces quieras.', 'Replay as often as you like.')}</span></div>`;
    if (ex.t === 'write') html += `<div class="ex-source"><span class="lab">${t('Original', 'Source')}</span><span class="src">${esc(loc(ex.s))}</span></div>`;
    if (ex.t === 'transform') html += `<div class="ex-q" lang="de">${mark(ex.q)}</div>`;
    if (ex.t === 'choice' || ex.t === 'rf') {
      if (ex.q) html += `<div class="ex-q" lang="de">${gapView(ex.q)}</div>`;
      if (ex.t === 'rf') html += `<div class="rf">${[true, false].map(b => `<button type="button" class="option ${ctx.res && v === b ? (ctx.res.ok ? 'correct' : 'wrong') : ''}" data-action="ex-pick" data-val="${b}" aria-pressed="${v === b}" ${locked ? 'disabled' : ''}><span class="k">${b ? 'R' : 'F'}</span><span>${b ? t('Verdadero', 'True') : t('Falso', 'False')} · <span class="de">${b ? 'richtig' : 'falsch'}</span></span></button>`).join('')}</div>`;
      else {
        const order = shuffled(ex.o.length, ex.id);
        const short = ex.o.every(o => optPlain(o).length < 18);
        html += `<div class="options ${short ? 'cols' : ''}">${order.map((oi, k) => {
          const picked = Array.isArray(ctx.tried) && ctx.tried.includes(oi);
          const cls = ctx.res?.ok && oi === ex.a ? 'correct' : (picked && oi !== ex.a ? 'wrong' : (ctx.reveal && oi === ex.a ? 'correct' : ''));
          return `<button type="button" class="option ${cls}" data-action="ex-pick" data-val="${oi}" aria-pressed="${v === oi}" ${locked || picked ? 'disabled' : ''}><span class="k">${k + 1}</span>${optText(ex.o[oi])}</button>`;
        }).join('')}</div>`;
      }
    }
    if (ex.t === 'gap') {
      const vals = Array.isArray(v) ? v : [];
      let k = 0;
      const q = mark(ex.q).replace(/___/g, () => { const i = k++, ans = (Array.isArray(ex.a) ? ex.a[i] : ex.a) || ''; return `<input class="gap-in" id="gap-${esc(ex.id)}-${i}" data-gap="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${Math.max(4, ans.length + 2)}ch" value="${esc(vals[i] || '')}" aria-label="${t('Hueco', 'Gap')} ${i + 1}" ${locked ? 'readonly' : ''}>`; });
      html += `<div class="ex-q gap-q" lang="de">${q}</div>${umlauts(locked)}`;
    }
    if (['write', 'transform', 'listen'].includes(ex.t)) {
      html += `<input class="input ex-input" id="ex-in-${esc(ex.id)}" data-field="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${t('Escribe en alemán…', 'Type in German…')}" value="${esc(typeof v === 'string' ? v : '')}" ${locked ? 'readonly' : ''} lang="de">${umlauts(locked)}`;
    }
    if (ex.t === 'order') {
      const picked = Array.isArray(v) ? v : [];
      html += `<div class="tokens-answer" data-placeholder="${t('Toca las piezas en orden…', 'Tap the pieces in order…')}">${picked.map((i, k) => `<button type="button" class="token" data-action="tok-del" data-k="${k}" ${locked ? 'disabled' : ''}>${esc(ex.w[i])}</button>`).join('')}</div>
        <div class="tokens-pool">${ex.w.map((w, i) => `<button type="button" class="token" data-action="tok-add" data-i="${i}" ${picked.includes(i) || locked ? 'disabled' : ''}>${esc(w)}</button>`).join('')}</div>`;
    }
    if (ex.t === 'match') {
      const vals = Array.isArray(v) ? v : Array(ex.pairs.length).fill(null);
      const right = shuffled(ex.pairs.length, ex.id + 'r');
      const sel = ctx.sel ?? null;
      const leftOf = ri => vals.indexOf(ri);
      html += `<div class="match"><div class="match-col">${ex.pairs.map(([l], i) => {
        const cls = ctx.res ? (vals[i] === i ? 'ok' : 'no') : (sel === i ? 'sel' : vals[i] !== null ? 'paired' : '');
        return `<button type="button" class="match-item ${cls}" data-action="match-left" data-i="${i}" ${locked ? 'disabled' : ''}>${optText(l)}${vals[i] !== null ? `<span class="tagn">${i + 1}</span>` : ''}</button>`;
      }).join('')}</div><div class="match-col">${right.map(ri => {
        const li = leftOf(ri);
        const cls = ctx.res ? (li === ri ? 'ok' : 'no') : (li >= 0 ? 'paired' : '');
        return `<button type="button" class="match-item ${cls}" data-action="match-right" data-i="${ri}" ${locked ? 'disabled' : ''}>${optText(ex.pairs[ri][1])}${li >= 0 ? `<span class="tagn">${li + 1}</span>` : ''}</button>`;
      }).join('')}</div></div>`;
    }
    return html;
  }
  const umlauts = locked => locked ? '' : `<div class="umlauts" aria-label="${t('Caracteres alemanes', 'German characters')}">${['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(c => `<button type="button" data-action="umlaut" data-c="${c}" tabindex="-1">${c}</button>`).join('')}</div>`;
  const gapView = q => mark(q).replace(/___/g, '<span class="gap">&nbsp;</span>');

  const HINTS = {
    umlaut: ['Casi: falta un Umlaut (ä, ö, ü). En alemán ae/oe/ue no se aceptan como equivalentes.', 'Almost: an umlaut (ä, ö, ü) is missing. ae/oe/ue are not accepted as equivalents.'],
    eszett: ['Casi: revisa ß / ss. Tras vocal larga o diptongo se escribe ß; tras vocal corta, ss.', 'Almost: check ß / ss. After a long vowel or diphthong write ß; after a short vowel, ss.'],
    typo: ['Casi: hay una letra de diferencia. Revisa la ortografía.', 'Almost: one letter is off. Check the spelling.'],
    case: ['Correcto. Ojo con las mayúsculas: los sustantivos alemanes siempre van con mayúscula.', 'Correct. Mind the capitals: German nouns are always capitalised.']
  };
  function feedback(ex, ctx) {
    const r = ctx.res;
    if (!r) return '';
    const answer = `<div class="ans" lang="de">${mark(solution(ex))}</div>`;
    const why = ex.x ? `<div class="why">${esc(loc(ex.x))}</div>` : '';
    if (r.assisted) return `<div class="feedback help" role="status"><div class="head">${icon('eye')} ${t('Solución', 'Solution')}</div>${answer}${why}<div class="fine">${ctx.mode === 'review' ? '' : t('Una solución consultada no cuenta para el dominio de la unidad durante 10 minutos.', 'A viewed solution does not count toward unit mastery for 10 minutes.')}</div></div>`;
    if (r.ok) return `<div class="feedback ok" role="status"><div class="head">${icon('check')} ${t('Richtig — correcto', 'Richtig — correct')}</div>${r.hint === 'case' ? `<div class="why">${esc(t(...HINTS.case))}</div>` : ''}${ex.t !== 'choice' && ex.t !== 'rf' && ex.t !== 'match' ? answer : ''}${why}</div>`;
    if (r.near) return `<div class="feedback near" role="status"><div class="head">${icon('alert')} ${t('Fast — casi', 'Fast — almost')}</div><div class="why">${esc(t(...(HINTS[r.hint] || HINTS.typo)))}</div>${ctx.mode === 'review' ? answer + why : ''}</div>`;
    if (ctx.mode === 'review') return `<div class="feedback bad" role="status"><div class="head">${icon('x')} ${t('Noch nicht — todavía no', 'Noch nicht — not yet')}</div>${answer}${why}</div>`;
    return `<div class="feedback bad" role="status"><div class="head">${icon('x')} ${t('Noch nicht — todavía no', 'Noch nicht — not yet')}</div><div class="why">${ex.h ? esc(loc(ex.h)) : t('Revisa la regla de la lección y vuelve a intentarlo. Si fallas otra vez se mostrará la solución.', 'Check the lesson rule and try again. If you miss again, the solution will be shown.')}</div></div>`;
  }
  /* Tarjeta completa. ctx: {mode, val, res, locked, top, actions} */
  function card(ex, ctx) {
    return `<div class="ex-card" data-ex="${esc(ex.id)}">
      <div class="ex-top"><span class="chip">${esc(typeLabel(ex))}</span><span>${ctx.top || ''}</span></div>
      <div class="ex-instr">${esc(prompt(ex))}</div>
      ${body(ex, ctx)}
      ${feedback(ex, ctx)}
      <div class="ex-actions">${ctx.actions || ''}</div>
    </div>`;
  }
  /* Lee la respuesta actual desde el DOM (campos de texto). */
  function readInputs(ex, root) {
    if (ex.t === 'gap') return [...root.querySelectorAll('.gap-in')].map(i => i.value);
    if (['write', 'transform', 'listen'].includes(ex.t)) return root.querySelector('.ex-input')?.value ?? '';
    return undefined;
  }
  /* ¿La respuesta está completa para comprobar? */
  function complete(ex, val) {
    if (ex.t === 'choice') return Number.isInteger(val);
    if (ex.t === 'rf') return typeof val === 'boolean';
    if (ex.t === 'order') return Array.isArray(val) && val.length === ex.w.length;
    if (ex.t === 'match') return Array.isArray(val) && val.every(x => x !== null && x !== undefined);
    if (ex.t === 'gap') return Array.isArray(val) && val.length === (Array.isArray(ex.a) ? ex.a.length : 1) && val.every(x => String(x).trim());
    return typeof val === 'string' && val.trim().length > 0;
  }
  function valueForEval(ex, val) {
    if (ex.t === 'order') return val.map(i => ex.w[i]).join(' ');
    if (ex.t === 'gap' && !Array.isArray(ex.a)) return val[0];
    return val;
  }
  function insertChar(c) {
    const el = document.activeElement?.matches?.('.gap-in, .ex-input') ? document.activeElement : (App.lastInput && document.contains(App.lastInput) ? App.lastInput : document.querySelector('.gap-in, .ex-input'));
    if (!el || el.readOnly) return;
    const s = el.selectionStart ?? el.value.length, e = el.selectionEnd ?? s;
    el.value = el.value.slice(0, s) + c + el.value.slice(e);
    el.focus(); el.setSelectionRange(s + 1, s + 1);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }
  document.addEventListener('focusin', e => { if (e.target.matches?.('.gap-in, .ex-input')) App.lastInput = e.target; });

  App.Exercise = { card, body, feedback, solution, readInputs, complete, valueForEval, typeLabel, prompt, shuffled, insertChar, optPlain };
})();
