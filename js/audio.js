/* Deutsch Dicht · audio.
   1) Clips locales pregenerados (scripts/build-audio.py, voz Anna de macOS): palabras, formas, ejemplos y frases.
   2) Respaldo: síntesis del navegador con la mejor voz alemana disponible (sin opciones para el usuario).
   Los signos de separación (– — / · →) nunca se leen: se convierten en pausas, igual que en los clips. */
(function () {
  'use strict';
  const player = new Audio();
  player.preload = 'auto';
  let seq = null, currentButton = null, utterance = null, active = null;
  const listeners = new Set();

  /* Clave de un texto: la misma que usa scripts/build-audio.py */
  const norm = s => String(s ?? '').normalize('NFC').replace(/[‘’]/g, '’').replace(/\s+/g, ' ').trim().toLocaleLowerCase('de');
  const manifest = () => window.DD?.audio || {};
  const clips = () => manifest().clips || {};
  function clipFor(text, voice) {
    const c = clips(), k = norm(text), bare = k.replace(/[.!?…]+$/, '');
    if (voice === 'm') { const m = c['m|' + k] || c['m|' + bare]; if (m) return m; }
    return c[k] || c[bare] || null;
  }

  /* Nombres de las letras: el sintetizador lee «en», «er», «es» como palabras; se usa una grafía fonética. */
  const LETTERS = { a: 'Aah', b: 'Beh', be: 'Beh', c: 'Zeh', ce: 'Zeh', d: 'Deh', de: 'Deh', e: 'Eeh', f: 'Eff', ef: 'Eff', g: 'Geh', ge: 'Geh', h: 'Haa', ha: 'Haa', i: 'Ieh', j: 'Jott', jott: 'Jott', k: 'Kaa', ka: 'Kaa', l: 'Ell', el: 'Ell', m: 'Emm', em: 'Emm', n: 'Enn', en: 'Enn', o: 'Ooh', p: 'Peh', pe: 'Peh', q: 'Kuh', ku: 'Kuh', r: 'Ärr', er: 'Ärr', s: 'Ess', es: 'Ess', t: 'Teh', te: 'Teh', u: 'Uuh', v: 'Fau', vau: 'Fau', w: 'Weh', we: 'Weh', x: 'Ix', ix: 'Ix', y: 'Üpsilon', 'üpsilon': 'Üpsilon', ypsilon: 'Üpsilon', z: 'Zett', zett: 'Zett', 'ä': 'Äh', 'ö': 'Öh', 'ü': 'Üh', 'ß': 'Esszett', eszett: 'Esszett' };
  const letterText = name => LETTERS[norm(name)] || name;

  /* Texto hablado: sin marcas; separadores → partes que se leen con pausa. */
  const SEPARATORS = /\s+[–—]\s+|\s+\/\s+|\s*·\s*|\s*→\s*|\s*\|\s*|(?<=\p{L})\/(?=\p{L})/u;
  function parts(text) {
    return String(text ?? '')
      .replace(/\{[mfnpNADGV] ([^{}]*)\}/g, '$1').replace(/[\[\]]/g, '')
      .split(SEPARATORS).map(s => s.replace(/^[\s–—-]+|[\s–—-]+$/g, '').replace(/\s*\+\s*/g, ' ').trim()).filter(s => /\p{L}/u.test(s));
  }

  /* Mejor voz del sistema: Anna local > otra voz local de-DE > voz de red alemana. */
  function voices() { return 'speechSynthesis' in window ? speechSynthesis.getVoices().filter(v => /^de[-_]DE$/i.test(v.lang)) : []; }
  function bestVoice() {
    const v = voices();
    const rank = x => (/Anna/i.test(x.name) ? 0 : /Petra|Helena|Markus|Yannick|Viktor/i.test(x.name) ? 1 : x.localService ? 3 : /Google/i.test(x.name) ? 2 : 4) + (/Premium|Enhanced|Erweitert/i.test(x.name) ? -0.5 : 0);
    return v.sort((a, b) => rank(a) - rank(b))[0] || null;
  }
  function mark(btn, state) { if (btn) btn.dataset.state = state; }
  function clearButton() { if (currentButton) { delete currentButton.dataset.state; currentButton = null; } }

  function stop() {
    if (active) active.cancelled = true;
    if (seq) { const s = seq; seq = null; s.onEnd?.(true); }
    player.pause(); player.removeAttribute('src');
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    clearButton();
  }
  const pause = ms => new Promise(r => setTimeout(r, ms));
  function speakOne(text, rate) {
    return new Promise((resolve, reject) => {
      const voice = bestVoice();
      if (!voice) return reject(new Error('no-voice'));
      utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE'; utterance.voice = voice; utterance.rate = rate * 0.92;
      utterance.onend = () => resolve('synth');
      utterance.onerror = ev => (ev.error === 'interrupted' || ev.error === 'canceled') ? resolve('cancelled') : reject(new Error('voice-error'));
      speechSynthesis.speak(utterance);
    });
  }
  async function speakSynth(text, rate, token) {
    const list = parts(text);
    for (let i = 0; i < list.length; i++) {
      if (token.cancelled) return 'cancelled';
      await speakOne(list[i], rate);
      if (i < list.length - 1) await pause(380);
    }
    return 'synth';
  }
  /* Reproduce y resuelve al terminar (no al empezar). */
  function playOne(text, opts = {}, token = { cancelled: false }) {
    const rate = opts.slow ? 0.78 : 1;
    const key = opts.letter ? 'letter:' + norm(text) : text;
    const spoken = opts.letter ? letterText(text) : text;
    const clip = clipFor(key, opts.voice);
    if (clip) {
      return new Promise((resolve, reject) => {
        player.src = clip; player.playbackRate = rate; player.preservesPitch = true;
        const done = () => { cleanup(); resolve('local'); };
        const fail = () => { cleanup(); speakSynth(spoken, rate, token).then(resolve, reject); };
        const cleanup = () => { player.removeEventListener('ended', done); player.removeEventListener('error', fail); };
        player.addEventListener('ended', done); player.addEventListener('error', fail);
        player.play().catch(fail);
      });
    }
    return speakSynth(spoken, rate, token);
  }
  async function play(text, opts = {}, button = null) {
    stop();
    const token = active = { cancelled: false };
    currentButton = button; mark(button, 'playing');
    try { const src = await playOne(text, opts, token); if (active === token) clearButton(); return src; }
    catch (e) { clearButton(); throw e; }
  }
  /* Secuencia de frases: onIndex(i) antes de cada frase; onEnd(cancelled) al final. opts.voices[i] = 'm' | 'f'. */
  async function sequence(texts, opts = {}) {
    stop();
    const me = seq = { onEnd: opts.onEnd }, token = active = { cancelled: false };
    for (let i = 0; i < texts.length; i++) {
      if (seq !== me) return;
      opts.onIndex?.(i);
      try { await playOne(texts[i], { ...opts, voice: opts.voices?.[i] }, token); } catch (e) { if (seq === me) { seq = null; opts.onEnd?.(false, e); } return; }
      if (seq !== me) return;
      if (opts.gap) await pause(opts.gap);
    }
    if (seq === me) { seq = null; opts.onEnd?.(false); }
  }
  const playing = () => !!seq;
  if ('speechSynthesis' in window) speechSynthesis.addEventListener?.('voiceschanged', () => listeners.forEach(fn => fn()));
  const info = () => ({ clips: Object.keys(clips()).length, voice: manifest().voice || 'Anna', male: manifest().maleVoice || null, fallback: bestVoice()?.name || null });
  window.DDAudio = { play, sequence, stop, playing, voices, bestVoice, has: t => !!clipFor(t), norm, parts, letterText, info, subscribe: fn => listeners.add(fn) };
})();
