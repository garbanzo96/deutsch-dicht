/* U29 · Es muss geprüft werden */
DD.lexicon.push({ unit: 'u29', words: [
  ['v', 'prüfen', 'prüft', 'prüfte', 'hat geprüft', 'revisar; examinar; comprobar', 'check; examine; test'],
  ['v', 'überprüfen', 'überprüft', 'überprüfte', 'hat überprüft', 'verificar', 'verify; review'],
  ['v', 'genehmigen', 'genehmigt', 'genehmigte', 'hat genehmigt', 'aprobar; autorizar', 'approve; authorise'],
  ['v', 'löschen', 'löscht', 'löschte', 'hat gelöscht', 'borrar; eliminar', 'delete; erase'],
  ['v', 'unterschreiben', 'unterschreibt', 'unterschrieb', 'hat unterschrieben', 'firmar', 'sign'],
  ['v', 'beachten', 'beachtet', 'beachtete', 'hat beachtet', 'tener en cuenta; respetar', 'observe; take into account'],
  ['v', 'ein|halten', 'hält ein', 'hielt ein', 'hat eingehalten', 'cumplir (una norma, un plazo)', 'comply with; keep (a deadline)'],
  ['v', 'schützen', 'schützt', 'schützte', 'hat geschützt', 'proteger', 'protect', { rek: 'vor + D' }],
  ['v', 'beantragen', 'beantragt', 'beantragte', 'hat beantragt', 'solicitar (formalmente)', 'apply for'],
  ['v', 'ab|geben', 'gibt ab', 'gab ab', 'hat abgegeben', 'entregar', 'hand in; submit'],
  ['v', 'ab|brechen', 'bricht ab', 'brach ab', 'hat abgebrochen', 'interrumpir; abandonar', 'break off; abort'],
  ['v', 'begründen', 'begründet', 'begründete', 'hat begründet', 'fundamentar; justificar', 'justify; give reasons for'],
  ['v', 'verschlüsseln', 'verschlüsselt', 'verschlüsselte', 'hat verschlüsselt', 'cifrar; encriptar', 'encrypt'],
  ['n', 'die Ethikkommission', 'Ethikkommissionen', 'el comité de ética', 'ethics committee'],
  ['n', 'der Antrag', 'Anträge', 'la solicitud', 'application; proposal'],
  ['n', 'die Genehmigung', 'Genehmigungen', 'la autorización', 'approval; permit'],
  ['n', 'die Einwilligung', 'Einwilligungen', 'el consentimiento', 'consent'],
  ['n', 'der Fragebogen', 'Fragebögen', 'el cuestionario', 'questionnaire'],
  ['n', 'die Gruppe', 'Gruppen', 'el grupo', 'group'],
  ['n', 'die Durchführung', 'Durchführungen', 'la realización; la ejecución', 'implementation; carrying out'],
  ['n', 'die Auswertung', 'Auswertungen', 'el análisis (de datos); la evaluación', 'analysis; evaluation'],
  ['n', 'die Vorschrift', 'Vorschriften', 'la norma; el reglamento', 'regulation; rule'],
  ['n', 'das Gesetz', 'Gesetze', 'la ley', 'law'],
  ['n', 'der Datenschutz', '—', 'la protección de datos', 'data protection'],
  ['n', 'die Privatsphäre', '—', 'la privacidad', 'privacy'],
  ['n', 'der Forscher', 'Forscher', 'el investigador', 'researcher (m.)'],
  ['n', 'die Forscherin', 'Forscherinnen', 'la investigadora', 'researcher (f.)'],
  ['n', 'das Verfahren', 'Verfahren', 'el procedimiento', 'procedure'],
  ['n', 'das Ende', 'Enden', 'el final; el fin', 'end', { note: ['am Ende = al final; zu Ende = terminado.', 'am Ende = at the end; zu Ende = over.'] }],
  ['n', 'der Punkt', 'Punkte', 'el punto', 'point; full stop'],
  ['adv', 'nun', 'ahora (bien); pues', 'now; well'],
  ['adv', 'jederzeit', 'en cualquier momento', 'at any time'],
  ['adv', 'völlig', 'completamente; del todo', 'completely'],
  ['adv', 'erstens', 'primero; en primer lugar', 'firstly', { forms: { zweitens: 'phr', drittens: 'phr', viertens: 'phr', fünftens: 'phr', letztens: 'phr' }, note: ['erstens, zweitens, drittens, viertens, fünftens: ordinal + -ens.', 'erstens, zweitens, drittens, viertens, fünftens: ordinal + -ens.'] }],
  ['prep', 'per', 'por (medio de)', 'by; via', { case: 'A', note: ['Sin artículo: per E-Mail, per Post.', 'Without article: per E-Mail, per Post.'] }],
  ['a', 'anonym', null, null, 'anónimo', 'anonymous'],
  ['a', 'wissenschaftlich', '—', '—', 'científico', 'scientific'],
  ['a', 'freiwillig', '—', '—', 'voluntario', 'voluntary'],
  ['a', 'machbar', '—', '—', 'factible', 'feasible'],
  ['a', 'lösbar', '—', '—', 'solucionable', 'solvable'],
  ['a', 'vermeidbar', '—', '—', 'evitable', 'avoidable'],
  ['a', 'unvermeidlich', '—', '—', 'inevitable', 'unavoidable'],
  ['a', 'erkennbar', '—', '—', 'reconocible', 'recognisable'],
  ['a', 'zuständig', '—', '—', 'competente; responsable (de)', 'responsible (for)', { rek: 'für + A' }],
  ['phr', 'Das lässt sich machen.', 'se puede hacer', 'that can be done'],
  ['phr', 'Das ist nicht zu ändern.', 'no se puede cambiar', 'it can’t be changed']
] });

DD.unit('u29', {
  minutes: 60,
  goals: [
    { es: 'Formar la pasiva con modales en todas las posiciones: muss geprüft werden · …, dass es geprüft werden muss.', en: 'Form the passive with modals in every position: muss geprüft werden · …, dass es geprüft werden muss.' },
    { es: 'Reconocer y usar las alternativas a la pasiva: man, sich lassen, sein + zu, adjetivos en -bar / -lich.', en: 'Recognise and use passive alternatives: man, sich lassen, sein + zu, adjectives in -bar / -lich.' },
    { es: 'Entender normas y procedimientos de investigación (ética, datos, consentimiento).', en: 'Understand research rules and procedures (ethics, data, consent).' }
  ],
  grammar: ['g-passive', 'g-passive-modal', 'g-passive-alt'],
  lesson: [
    { b: 'concept', de: 'Passiv mit Modalverb', t: { es: 'El modal se conjuga y va en posición 2; al final va el «infinitivo pasivo»: Partizip II + werden. Die Daten [müssen] [gelöscht werden]. El modal conserva su significado: obligación, permiso, posibilidad.', en: 'The modal is conjugated in position 2; at the end comes the “passive infinitive”: Partizip II + werden. Die Daten [müssen] [gelöscht werden]. The modal keeps its meaning: obligation, permission, possibility.' } },
    { b: 'slots', h: { es: 'Pasiva con modal en los tres tipos de oración', en: 'Modal passive in the three clause types' }, c: ['Vorfeld', { es: 'Verbo 1', en: 'Verb 1' }, 'Mittelfeld', { es: 'Verbo 2', en: 'Verb 2' }], v: [1, 3], r: [
      ['Die Daten', 'müssen', 'nach zwei Jahren', 'gelöscht werden.'],
      ['', 'Darf', 'das Experiment jederzeit', 'abgebrochen werden?'],
      ['…, dass', '', 'die Daten nach zwei Jahren', 'gelöscht werden müssen.']
    ], n: { es: 'En subordinada el modal conjugado va al final del todo: gelöscht werden müssen.', en: 'In a subordinate clause the conjugated modal goes to the very end: gelöscht werden müssen.' } },
    { b: 'table', h: { es: 'Pasiva con modal en los tiempos', en: 'Modal passive across tenses' }, c: [{ es: 'Tiempo', en: 'Tense' }, { es: 'Forma', en: 'Form' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['Präsens', 'muss + PII + werden', 'Der Antrag [muss] [geprüft werden].'],
      ['Präteritum', 'musste + PII + werden', 'Der Antrag [musste] [geprüft werden].'],
      ['Konjunktiv II', 'müsste / könnte + PII + werden', 'Das [könnte] besser [erklärt werden].'],
      ['Perfekt', 'hat + PII + werden + müssen', 'Der Antrag [hat] [geprüft werden müssen].']
    ], n: { es: 'En la práctica, la pasiva con modal se usa casi solo en presente, Präteritum y Konjunktiv II. El Perfekt (doble infinitivo) es raro.', en: 'In practice the modal passive is used almost only in the present, Präteritum and Konjunktiv II. The Perfekt (double infinitive) is rare.' } },
    { b: 'concept', de: 'Passiversatz', t: { es: 'El alemán tiene varias construcciones con sentido pasivo, más cortas o más formales. Son frecuentes en textos técnicos, normas e instrucciones; hay que reconocerlas al leer.', en: 'German has several constructions with passive meaning, shorter or more formal. They are frequent in technical texts, rules and instructions; you must recognise them when reading.' } },
    { b: 'table', h: { es: 'Alternativas a la pasiva', en: 'Passive alternatives' }, c: [{ es: 'Construcción', en: 'Construction' }, { es: 'Equivale a', en: 'Equivalent to' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['man + Aktiv', { es: 'pasiva neutra', en: 'neutral passive' }, '[Man] [prüft] den Antrag. = Der Antrag wird geprüft.'],
      ['sich lassen + Inf.', { es: 'kann + pasiva', en: 'kann + passive' }, 'Das Problem [lässt sich] [lösen]. = … kann gelöst werden.'],
      ['sein + zu + Inf.', { es: 'muss / kann + pasiva', en: 'muss / kann + passive' }, 'Der Antrag [ist] bis Freitag [abzugeben]. = … muss abgegeben werden.'],
      ['-bar', { es: 'kann + pasiva', en: 'kann + passive' }, 'Das Problem ist [lösbar]. = … kann gelöst werden.'],
      ['-lich', { es: 'kann + pasiva (algunos)', en: 'kann + passive (some)' }, 'Der Fehler ist [unvermeidlich]. = … kann nicht vermieden werden.'],
      ['bekommen + PII', { es: 'pasiva del dativo (coloquial)', en: 'dative passive (colloquial)' }, 'Sie [bekommt] das Geld [erstattet]. = Ihr wird das Geld erstattet.']
    ], n: { es: 'sein + zu + infinitivo es ambiguo: obligación (Die Regeln sind einzuhalten) o posibilidad (Das ist nicht zu ändern). El contexto decide.', en: 'sein + zu + infinitive is ambiguous: obligation (Die Regeln sind einzuhalten) or possibility (Das ist nicht zu ändern). Context decides.' } },
    { b: 'list', h: { es: 'Adjetivos en -bar frecuentes', en: 'Frequent -bar adjectives' }, cols: 3, r: [
      ['mach[bar]', { es: 'factible', en: 'feasible' }], ['lös[bar]', { es: 'solucionable', en: 'solvable' }], ['vermeid[bar]', { es: 'evitable', en: 'avoidable' }],
      ['erkenn[bar]', { es: 'reconocible', en: 'recognisable' }], ['ess[bar]', { es: 'comestible', en: 'edible' }], ['les[bar]', { es: 'legible', en: 'legible' }],
      ['trink[bar]', { es: 'potable; bebible', en: 'drinkable' }], ['erreich[bar]', { es: 'alcanzable', en: 'reachable' }], ['un…[bar]', { es: 'in…ble: unlösbar', en: 'un…able: unlösbar' }]
    ], n: { es: 'Raíz verbal transitiva + -bar ≈ «-ble». Con un- se niega: unvermeidbar, unerreichbar.', en: 'Transitive verb stem + -bar ≈ “-able”. un- negates: unvermeidbar, unerreichbar.' } },
    { b: 'note', tone: 'l1', t: { es: 'El «se» impersonal del español (se debe revisar) corresponde a muss geprüft werden o a man muss … prüfen. Das lässt sich machen ≈ «se puede hacer».', en: 'Spanish impersonal “se” (se debe revisar) corresponds to muss geprüft werden or man muss … prüfen. Das lässt sich machen ≈ “it can be done”.' } }
  ],
  chunks: [
    ['Der Antrag muss bis Freitag abgegeben werden.', 'La solicitud debe entregarse antes del viernes.', 'The application must be submitted by Friday.'],
    ['Das lässt sich leicht erklären.', 'Eso se explica fácilmente.', 'That is easy to explain.'],
    ['Die Regeln sind unbedingt einzuhalten.', 'Las normas deben cumplirse sin falta.', 'The rules must be strictly observed.'],
    ['Das Problem ist lösbar.', 'El problema tiene solución.', 'The problem can be solved.'],
    ['Darf das Experiment jederzeit abgebrochen werden?', '¿Se puede interrumpir el experimento en cualquier momento?', 'May the experiment be stopped at any time?']
  ],
  errors: [
    ['Die Daten müssen gelöscht werden werden.', 'Die Daten müssen gelöscht werden.', { es: 'Un solo werden: el modal ocupa la posición 2.', en: 'Only one werden: the modal takes position 2.' }],
    ['…, dass die Daten müssen gelöscht werden.', '…, dass die Daten gelöscht werden müssen.', { es: 'Subordinada: modal conjugado al final.', en: 'Subordinate clause: conjugated modal at the end.' }],
    ['Das Problem lässt lösen.', 'Das Problem lässt sich lösen.', { es: 'sich lassen necesita el reflexivo.', en: 'sich lassen needs the reflexive.' }],
    ['Der Antrag ist bis Freitag abgeben.', 'Der Antrag ist bis Freitag abzugeben.', { es: 'sein + zu + infinitivo; en separables, zu va dentro: abzugeben.', en: 'sein + zu + infinitive; with separable verbs zu goes inside: abzugeben.' }],
    ['Die Daten müssen geschützt sein werden.', 'Die Daten müssen geschützt werden.', { es: 'Proceso: werden. Estado: geschützt sein (sin werden).', en: 'Process: werden. State: geschützt sein (no werden).' }]
  ],
  examples: [
    ['Jede Studie muss von der Ethikkommission genehmigt werden.', 'Todo estudio debe ser aprobado por el comité de ética.', 'Every study must be approved by the ethics committee.'],
    ['Die Teilnahme kann jederzeit ohne Begründung beendet werden.', 'La participación puede terminarse en cualquier momento sin justificación.', 'Participation can be ended at any time without giving reasons.'],
    ['Die Ergebnisse sollten in einer Fachzeitschrift veröffentlicht werden.', 'Los resultados deberían publicarse en una revista especializada.', 'The results should be published in a specialist journal.'],
    ['Diese Frage lässt sich nicht so einfach beantworten.', 'Esta pregunta no se responde tan fácilmente.', 'This question can’t be answered so easily.'],
    ['Der Fragebogen ist vollständig auszufüllen.', 'El cuestionario debe llenarse completo.', 'The questionnaire must be filled in completely.'],
    ['Ich glaube, dass der Fehler vermeidbar gewesen wäre.', 'Creo que el error habría sido evitable.', 'I think the mistake would have been avoidable.']
  ],
  reading: 'r-u29',
  exercises: [
    { t: 'choice', ph: 1, q: 'Die Daten müssen nach zwei Jahren gelöscht ___.', o: ['werden', 'worden', 'wird'], a: 0, x: { es: 'Modal + PII + werden.', en: 'Modal + PII + werden.' } },
    { t: 'choice', ph: 1, q: '…, dass der Antrag geprüft werden ___.', o: ['muss', 'müssen', 'gemusst'], a: 0, x: { es: 'Modal conjugado al final (singular).', en: 'Conjugated modal at the end (singular).' } },
    { t: 'choice', ph: 1, q: 'Das Problem lässt ___ lösen.', o: ['es', 'sich', 'man'], a: 1, x: { es: 'sich lassen + infinitivo.', en: 'sich lassen + infinitive.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona cada alternativa con su equivalente.', en: 'Match each alternative with its equivalent.' }, pairs: [['Das ist lösbar.', 'Das kann gelöst werden.'], ['Das ist abzugeben.', 'Das muss abgegeben werden.'], ['Man prüft das.', 'Das wird geprüft.'], ['Das lässt sich ändern.', 'Das kann geändert werden.']], x: { es: 'Cuatro alternativas a la pasiva.', en: 'Four passive alternatives.' } },
    { t: 'rf', ph: 1, q: '«Die Regeln sind einzuhalten» = Die Regeln müssen eingehalten werden.', a: true, x: { es: 'sein + zu: aquí obligación.', en: 'sein + zu: obligation here.' } },
    { t: 'choice', ph: 1, q: 'Was bedeutet «unvermeidlich»?', o: ['kann nicht vermieden werden', 'muss vermieden werden', 'wurde vermieden'], a: 0, x: { es: 'un- + -lich: imposibilidad pasiva.', en: 'un- + -lich: passive impossibility.' } },
    { t: 'gap', ph: 2, q: 'Der Fragebogen muss vollständig ___ werden. (ausfüllen)', a: 'ausgefüllt', x: { es: 'PII de separable: aus-ge-füllt.', en: 'Separable PII: aus-ge-füllt.' } },
    { t: 'gap', ph: 2, q: 'Darf das Experiment jederzeit ___ werden? (abbrechen)', a: 'abgebrochen', x: { es: 'abbrechen → abgebrochen.', en: 'abbrechen → abgebrochen.' } },
    { t: 'gap', ph: 2, q: 'Der Antrag ist bis Freitag ___. (abgeben)', a: 'abzugeben', x: { es: 'sein + zu: abzugeben.', en: 'sein + zu: abzugeben.' } },
    { t: 'gap', ph: 2, q: 'Diese Frage ___ sich leicht beantworten.', a: 'lässt', x: { es: 'sich lassen, 3.ª singular.', en: 'sich lassen, 3rd singular.' } },
    { t: 'gap', ph: 2, q: 'Die Daten ___ verschlüsselt gespeichert werden. (müssen)', a: 'müssen', x: { es: 'Plural: müssen.', en: 'Plural: müssen.' } },
    { t: 'gap', ph: 2, q: 'Das Ziel ist erreich___.', a: 'bar', alt: ['-bar'], x: { es: 'erreichbar = puede alcanzarse.', en: 'erreichbar = can be reached.' } },
    { t: 'order', ph: 2, w: ['genehmigt werden', 'Jede Studie', 'von der Ethikkommission', 'muss'], a: 'Jede Studie muss von der Ethikkommission genehmigt werden.', x: { es: 'Modal en 2; infinitivo pasivo al final.', en: 'Modal in 2; passive infinitive at the end.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe en pasiva con modal.', en: 'Rewrite as a modal passive.' }, q: 'Man muss die Daten anonym speichern.', a: 'Die Daten müssen anonym gespeichert werden.', x: { es: 'man + modal → modal + PII + werden.', en: 'man + modal → modal + PII + werden.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con «sich lassen».', en: 'Rewrite with “sich lassen”.' }, q: 'Das kann man leicht erklären.', a: 'Das lässt sich leicht erklären.', x: { es: 'kann man + Inf. → lässt sich + Inf.', en: 'kann man + inf. → lässt sich + inf.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con un adjetivo en -bar.', en: 'Rewrite with a -bar adjective.' }, q: 'Der Fehler kann vermieden werden.', a: 'Der Fehler ist vermeidbar.', x: { es: 'kann + pasiva → -bar.', en: 'kann + passive → -bar.' } },
    { t: 'write', ph: 3, s: { es: 'La solicitud debe entregarse antes del viernes.', en: 'The application must be submitted by Friday.' }, a: 'Der Antrag muss bis Freitag abgegeben werden.', alt: ['Der Antrag ist bis Freitag abzugeben.'], x: { es: 'bis + día; abgeben → abgegeben.', en: 'bis + day; abgeben → abgegeben.' } },
    { t: 'listen', ph: 3, a: 'Die Teilnahme kann jederzeit beendet werden.', x: { es: 'kann + PII + werden.', en: 'kann + PII + werden.' } }
  ],
  summary: [
    { es: 'Pasiva con modal: modal conjugado (pos. 2) + PII + werden al final. Subordinada: … gelöscht werden muss.', en: 'Modal passive: conjugated modal (pos. 2) + PII + werden at the end. Subordinate: … gelöscht werden muss.' },
    { es: 'man + activa = pasiva neutra. sich lassen + Inf. = kann + pasiva.', en: 'man + active = neutral passive. sich lassen + inf. = kann + passive.' },
    { es: 'sein + zu + Inf. = muss / kann + pasiva (contexto). Separables: abzugeben.', en: 'sein + zu + inf. = muss / kann + passive (context). Separable: abzugeben.' },
    { es: '-bar / -lich ≈ «-ble»: lösbar, machbar, unvermeidlich.', en: '-bar / -lich ≈ “-able”: lösbar, machbar, unvermeidlich.' }
  ]
});

DD.readings.push({
  id: 'r-u29', unit: 'u29', level: 'B1', kind: 'unit',
  de: 'Bevor das Experiment beginnen darf', es: 'Antes de que el experimento pueda comenzar', en: 'Before the experiment may begin',
  genre: { es: 'Texto informativo y correo · serie Leipzig 29', en: 'Information text and e-mail · Leipzig series 29' },
  intro: { es: 'Lena quiere repetir su experimento Stroop con más participantes. Primero debe pasar por el comité de ética. Lee las normas de la universidad y la respuesta del comité.', en: 'Lena wants to repeat her Stroop experiment with more participants. First she must go through the ethics committee. Read the university’s rules and the committee’s reply.' },
  focus: { es: 'muss / darf / kann + PII + werden · sich lassen · sein + zu · -bar.', en: 'muss / darf / kann + PII + werden · sich lassen · sein + zu · -bar.' },
  source: { type: 'original' },
  p: [
    ['Ihr erstes Experiment hat Lena nur mit zwanzig Freunden durchgeführt. Für ihre Abschlussarbeit sollen nun zweihundert Personen getestet werden. Ihre Professorin hat ihr erklärt: Jede Studie mit Menschen muss vorher von der Ethikkommission der Universität genehmigt werden. Auf der Webseite der Ethikkommission findet Lena die wichtigsten Regeln.', 'Lena hizo su primer experimento solo con veinte amigos. Para su tesis ahora deben examinarse doscientas personas. Su profesora le explicó: todo estudio con personas debe ser aprobado antes por el comité de ética de la universidad. En el sitio web del comité, Lena encuentra las normas más importantes.', 'Lena carried out her first experiment with only twenty friends. For her thesis, two hundred people are now to be tested. Her professor explained to her: every study with humans must first be approved by the university’s ethics committee. On the committee’s website Lena finds the most important rules.'],
    ['Regeln für Studien mit Versuchspersonen. Erstens: Alle Teilnehmer müssen vor Beginn schriftlich informiert werden. Zweck, Dauer und mögliche Risiken der Studie sind verständlich zu erklären. Zweitens: Die Teilnahme ist freiwillig. Sie kann jederzeit und ohne Begründung abgebrochen werden. Drittens: Die Einwilligung muss von jeder Person unterschrieben werden. Viertens: Die Daten dürfen nur anonym gespeichert werden. Namen und Daten müssen getrennt und verschlüsselt aufbewahrt werden. Fünftens: Nach dem Ende der Studie sind alle persönlichen Daten zu löschen.', 'Normas para estudios con sujetos experimentales. Primero: todos los participantes deben ser informados por escrito antes del comienzo. El propósito, la duración y los posibles riesgos del estudio deben explicarse de forma comprensible. Segundo: la participación es voluntaria. Puede interrumpirse en cualquier momento y sin justificación. Tercero: el consentimiento debe ser firmado por cada persona. Cuarto: los datos solo pueden almacenarse de forma anónima. Los nombres y los datos deben guardarse separados y cifrados. Quinto: tras el fin del estudio, todos los datos personales deben borrarse.', 'Rules for studies with research participants. First: all participants must be informed in writing before the start. The purpose, duration and possible risks of the study are to be explained clearly. Second: participation is voluntary. It can be stopped at any time without giving reasons. Third: the consent form must be signed by each person. Fourth: data may only be stored anonymously. Names and data must be kept separately and encrypted. Fifth: after the end of the study, all personal data are to be deleted.'],
    ['Lena schreibt ihren Antrag und gibt ihn eine Woche vor der Frist ab. Zwei Wochen später kommt die Antwort per E-Mail: „Sehr geehrte Frau Weiß, Ihr Antrag wurde geprüft. Grundsätzlich kann die Studie genehmigt werden. Zwei Punkte müssen aber noch geändert werden. Im Fragebogen fragen Sie nach dem Geburtsdatum. Damit wären die Personen leicht erkennbar. Das Alter in Jahren reicht völlig aus. Außerdem sollte genauer beschrieben werden, wer Zugang zu den Daten hat.“', 'Lena escribe su solicitud y la entrega una semana antes del plazo. Dos semanas después llega la respuesta por correo: «Estimada señora Weiß: su solicitud ha sido revisada. En principio, el estudio puede aprobarse. Sin embargo, todavía deben modificarse dos puntos. En el cuestionario usted pregunta por la fecha de nacimiento. Con ello las personas serían fácilmente reconocibles. La edad en años es suficiente. Además, debería describirse con más precisión quién tiene acceso a los datos.»', 'Lena writes her application and submits it a week before the deadline. Two weeks later the reply arrives by e-mail: “Dear Ms Weiß, your application has been reviewed. In principle the study can be approved. Two points must still be changed, however. In the questionnaire you ask for the date of birth. That would make the persons easily identifiable. Age in years is completely sufficient. In addition, it should be described more precisely who has access to the data.”'],
    ['Lena ist erleichtert. „Das lässt sich machen“, sagt sie zu Tomás. „Die Fragen sind schnell geändert. Eigentlich hätte ich das selbst sehen müssen.“ Tomás findet die Regeln streng. „Muss das wirklich alles kontrolliert werden? Es ist doch nur ein Test mit Farben.“ – „Ja“, sagt Lena. „Gerade weil es kleine Studien sind, werden die Regeln oft nicht beachtet. Und Datenschutz ist kein Detail. Ohne Vertrauen gibt es keine Teilnehmer, und ohne Teilnehmer gibt es keine Forschung.“', 'Lena está aliviada. «Eso se puede hacer», le dice a Tomás. «Las preguntas se cambian rápido. En realidad debería haberlo visto yo misma.» A Tomás las normas le parecen estrictas. «¿De verdad hay que controlar todo eso? Es solo un test con colores.» —«Sí», dice Lena. «Precisamente porque son estudios pequeños, a menudo no se respetan las normas. Y la protección de datos no es un detalle. Sin confianza no hay participantes, y sin participantes no hay investigación.»', 'Lena is relieved. “That can be done,” she says to Tomás. “The questions are quickly changed. Actually I should have seen that myself.” Tomás finds the rules strict. “Does all that really have to be checked? It’s only a test with colours.” – “Yes,” says Lena. “Precisely because they are small studies, the rules are often not observed. And data protection is not a detail. Without trust there are no participants, and without participants there’s no research.”']
  ],
  gloss: [
    ['Abschlussarbeit', { es: 'tesis (de fin de carrera)', en: 'thesis' }],
    ['getestet', { es: 'examinadas (testen)', en: 'tested (testen)' }],
    ['vorher', { es: 'antes', en: 'beforehand' }],
    ['Webseite', { es: 'sitio web', en: 'website' }],
    ['schriftlich', { es: 'por escrito', en: 'in writing' }],
    ['Dauer', { es: 'duración', en: 'duration' }],
    ['mögliche', { es: 'posibles', en: 'possible' }],
    ['verständlich', { es: 'de forma comprensible', en: 'clearly; comprehensibly' }],
    ['Teilnahme', { es: 'participación', en: 'participation' }],
    ['Begründung', { es: 'justificación', en: 'reason; justification' }],
    ['getrennt', { es: 'por separado (trennen)', en: 'separately (trennen)' }],
    ['aufbewahrt', { es: 'guardados (aufbewahren)', en: 'kept (aufbewahren)' }],
    ['persönlichen', { es: 'personales', en: 'personal' }],
    ['Grundsätzlich', { es: 'en principio', en: 'in principle' }],
    ['Geburtsdatum', { es: 'fecha de nacimiento', en: 'date of birth' }],
    ['reicht', { es: 'basta (ausreichen)', en: 'is enough (ausreichen)' }],
    ['Zugang', { es: 'acceso', en: 'access' }],
    ['erleichtert', { es: 'aliviada', en: 'relieved' }],
    ['streng', { es: 'estrictas', en: 'strict' }],
    ['kontrolliert', { es: 'controlado (kontrollieren)', en: 'checked (kontrollieren)' }],
    ['Farben', { es: 'colores', en: 'colours' }],
    ['Gerade', { es: 'precisamente', en: 'precisely' }],
    ['Detail', { es: 'detalle', en: 'detail' }],
    ['Vertrauen', { es: 'confianza', en: 'trust' }]
  ],
  q: [
    { t: 'choice', q: 'Wer muss die Studie genehmigen?', o: ['Lenas Professorin', 'die Ethikkommission', 'die Teilnehmer'], a: 1, x: { es: 'El comité de ética de la universidad.', en: 'The university’s ethics committee.' } },
    { t: 'rf', q: 'Die Teilnehmer müssen erklären, warum sie die Studie abbrechen.', a: false, x: { es: '«ohne Begründung».', en: '“ohne Begründung”.' } },
    { t: 'choice', q: 'Was muss im Fragebogen geändert werden?', o: ['Statt des Geburtsdatums soll nur das Alter gefragt werden.', 'Der Name muss angegeben werden.', 'Der Test muss länger werden.'], a: 0, x: { es: 'Con la fecha de nacimiento serían reconocibles.', en: 'With the date of birth they would be identifiable.' } },
    { t: 'rf', q: 'Der Antrag wurde abgelehnt.', a: false, x: { es: 'Puede aprobarse con dos cambios.', en: 'It can be approved with two changes.' } },
    { t: 'choice', q: 'Warum ist Datenschutz für Lena wichtig?', o: ['weil es ein Gesetz aus Berlin ist', 'weil es ohne Vertrauen keine Teilnehmer gibt', 'weil Tomás es sagt'], a: 1, x: { es: '«Ohne Vertrauen gibt es keine Teilnehmer.»', en: '“Ohne Vertrauen gibt es keine Teilnehmer.”' } }
  ]
});
