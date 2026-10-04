/* U25 · Wie wird das gemacht? */
DD.lexicon.push({ unit: 'u25', words: [
  ['v', 'durch|führen', 'führt durch', 'führte durch', 'hat durchgeführt', 'realizar; llevar a cabo', 'carry out; conduct'],
  ['v', 'testen', 'testet', 'testete', 'hat getestet', 'probar; poner a prueba', 'test'],
  ['v', 'aus|werten', 'wertet aus', 'wertete aus', 'hat ausgewertet', 'evaluar; analizar (datos)', 'evaluate; analyse (data)'],
  ['v', 'auf|zeichnen', 'zeichnet auf', 'zeichnete auf', 'hat aufgezeichnet', 'registrar; grabar', 'record'],
  ['v', 'präsentieren', 'präsentiert', 'präsentierte', 'hat präsentiert', 'presentar', 'present'],
  ['v', 'drücken', 'drückt', 'drückte', 'hat gedrückt', 'apretar; presionar', 'press'],
  ['v', 'reagieren', 'reagiert', 'reagierte', 'hat reagiert', 'reaccionar', 'react'],
  ['v', 'analysieren', 'analysiert', 'analysierte', 'hat analysiert', 'analizar', 'analyse'],
  ['v', 'veröffentlichen', 'veröffentlicht', 'veröffentlichte', 'hat veröffentlicht', 'publicar', 'publish'],
  ['v', 'her|stellen', 'stellt her', 'stellte her', 'hat hergestellt', 'fabricar; producir', 'manufacture; produce'],
  ['v', 'drucken', 'druckt', 'druckte', 'hat gedruckt', 'imprimir', 'print'],
  ['v', 'produzieren', 'produziert', 'produzierte', 'hat produziert', 'producir', 'produce'],
  ['v', 'erzeugen', 'erzeugt', 'erzeugte', 'hat erzeugt', 'generar; producir', 'generate'],
  ['v', 'benennen', 'benennt', 'benannte', 'hat benannt', 'nombrar; denominar', 'name'],
  ['v', 'ab|lenken', 'lenkt ab', 'lenkte ab', 'hat abgelenkt', 'distraer', 'distract'],
  ['adv', 'gar', 'en absoluto (gar nicht / gar kein)', 'at all (gar nicht / gar kein)'],
  ['n', 'die Versuchsperson', 'Versuchspersonen', 'el sujeto experimental', 'participant (in an experiment)'],
  ['n', 'der Teilnehmer', 'Teilnehmer', 'el participante', 'participant (m.)'],
  ['n', 'die Teilnehmerin', 'Teilnehmerinnen', 'la participante', 'participant (f.)'],
  ['n', 'die Reaktionszeit', 'Reaktionszeiten', 'el tiempo de reacción', 'reaction time'],
  ['n', 'die Taste', 'Tasten', 'la tecla', 'key (button)'],
  ['n', 'der Bildschirm', 'Bildschirme', 'la pantalla', 'screen'],
  ['n', 'die Aufgabe', 'Aufgaben', 'la tarea', 'task'],
  ['n', 'der Ablauf', 'Abläufe', 'el desarrollo; el procedimiento', 'procedure; sequence'],
  ['n', 'der Prozess', 'Prozesse', 'el proceso', 'process'],
  ['n', 'die Messung', 'Messungen', 'la medición', 'measurement'],
  ['n', 'die Daten', '—', 'los datos', 'data', { plOnly: 1, id: 'noun-daten' }],
  ['n', 'die Hypothese', 'Hypothesen', 'la hipótesis', 'hypothesis'],
  ['n', 'die Bedingung', 'Bedingungen', 'la condición', 'condition'],
  ['n', 'die Wirkung', 'Wirkungen', 'el efecto (consecuencia)', 'effect'],
  ['n', 'der Effekt', 'Effekte', 'el efecto', 'effect'],
  ['n', 'das Produkt', 'Produkte', 'el producto', 'product'],
  ['n', 'die Maschine', 'Maschinen', 'la máquina', 'machine'],
  ['n', 'die Fabrik', 'Fabriken', 'la fábrica', 'factory'],
  ['n', 'die Messe', 'Messen', 'la feria; (relig.) la misa', 'trade fair; mass'],
  ['n', 'der Verlag', 'Verlage', 'la editorial', 'publisher'],
  ['a', 'korrekt', null, null, 'correcto', 'correct'],
  ['a', 'statistisch', null, null, 'estadístico', 'statistical'],
  ['a', 'zufällig', null, null, 'casual; aleatorio', 'random; by chance'],
  ['a', 'unbewusst', null, null, 'inconsciente', 'unconscious'],
  ['a', 'bewusst', null, null, 'consciente', 'conscious'],
  ['a', 'automatisch', null, null, 'automático', 'automatic'],
  ['a', 'geschlossen', '—', '—', 'cerrado', 'closed'],
  ['a', 'geöffnet', '—', '—', 'abierto', 'open'],
  ['name', 'John Ridley Stroop', 'J. R. Stroop (1897–1973), psicólogo estadounidense', 'J. R. Stroop (1897–1973), American psychologist']
] });

DD.unit('u25', {
  minutes: 60,
  goals: [
    { es: 'Formar la pasiva de proceso (werden + Partizip II) en presente, Präteritum, Perfekt y Plusquamperfekt.', en: 'Form the process passive (werden + past participle) in present, Präteritum, Perfekt and Plusquamperfekt.' },
    { es: 'Indicar el agente (von + Dat) o el medio (durch + Akk) y usar la pasiva impersonal.', en: 'Indicate the agent (von + dat.) or the means (durch + acc.) and use the impersonal passive.' },
    { es: 'Distinguir pasiva de proceso (wird geschlossen) y de estado (ist geschlossen); describir procedimientos.', en: 'Distinguish process passive (wird geschlossen) and state passive (ist geschlossen); describe procedures.' }
  ],
  grammar: ['g-passive', 'g-werden'],
  lesson: [
    { b: 'concept', de: 'Vorgangspassiv', t: { es: 'La pasiva pone el foco en la acción o el proceso, no en quien actúa. werden conjugado + Partizip II al final. El objeto en acusativo de la activa pasa a ser sujeto en nominativo.', en: 'The passive focuses on the action or process, not on the doer. Conjugated werden + past participle at the end. The accusative object of the active becomes the nominative subject.' } },
    { b: 'pairs', h: { es: 'De activa a pasiva', en: 'From active to passive' }, r: [
      ['{N Die Forscher} messen {A die Reaktionszeit}.', '{N Die Reaktionszeit} [wird] (von den Forschern) [gemessen].'],
      ['{N Man} druckt {A das Buch} in Leipzig.', '{N Das Buch} [wird] in Leipzig [gedruckt].'],
      ['{N Wundt} gründete 1879 {A das Labor}.', '{N Das Labor} [wurde] 1879 von Wundt [gegründet].']
    ], n: { es: 'El sujeto man desaparece en la pasiva. El agente se añade solo si es informativo.', en: 'The subject man disappears in the passive. The agent is added only if informative.' } },
    { b: 'table', h: { es: 'La pasiva en todos los tiempos', en: 'The passive in all tenses' }, c: [{ es: 'Tiempo', en: 'Tense' }, { es: 'Forma', en: 'Form' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['Präsens', 'wird + Partizip II', 'Der Text [wird] [übersetzt].'],
      ['Präteritum', 'wurde + Partizip II', 'Der Text [wurde] [übersetzt].'],
      ['Perfekt', 'ist + Partizip II + [worden]', 'Der Text [ist] übersetzt [worden].'],
      ['Plusquamperfekt', 'war + Partizip II + worden', 'Der Text [war] übersetzt [worden].'],
      ['Futur I', 'wird + Partizip II + werden', 'Der Text [wird] übersetzt [werden].']
    ], n: { es: 'En el Perfekt pasivo se usa worden (sin ge-), nunca geworden. Es el tiempo de la noticia escrita y del informe científico: Präteritum pasivo.', en: 'The passive Perfekt uses worden (no ge-), never geworden. News and scientific reports favour the passive Präteritum.' } },
    { b: 'table', h: { es: 'Agente o medio', en: 'Agent or means' }, c: [{ es: 'Preposición', en: 'Preposition' }, { es: 'Uso', en: 'Use' }, { es: 'Ejemplo', en: 'Example' }], r: [
      ['von + {D Dativ}', { es: 'quien actúa (persona, institución)', en: 'doer (person, institution)' }, 'Das Experiment wird [von der Professorin] geleitet.'],
      ['durch + {A Akkusativ}', { es: 'medio, causa, intermediario', en: 'means, cause, intermediary' }, 'Die Stadt wurde [durch ein Erdbeben] zerstört.']
    ] },
    { b: 'concept', de: 'Zustandspassiv', t: { es: 'sein + Partizip II describe el estado resultante: Die Tür [wird] geschlossen (alguien la está cerrando: proceso) frente a Die Tür [ist] geschlossen (está cerrada: estado).', en: 'sein + past participle describes the resulting state: Die Tür wird geschlossen (someone is closing it: process) vs Die Tür ist geschlossen (it is closed: state).' } },
    { b: 'concept', de: 'unpersönliches Passiv', t: { es: 'Verbos sin objeto también forman pasiva, sin sujeto real: Hier [wird] nicht [geraucht]. Am Samstag [wird] [gefeiert]. Si nada ocupa el Vorfeld, entra es: [Es] wird getanzt.', en: 'Verbs without an object also form a passive, with no real subject: Hier wird nicht geraucht. Am Samstag wird gefeiert. If nothing fills the Vorfeld, es is inserted: Es wird getanzt.' } },
    { b: 'note', tone: 'warn', t: { es: 'Solo el acusativo se convierte en sujeto. El dativo sigue en dativo: Man hilft mir → {D Mir} wird geholfen (no *Ich werde geholfen).', en: 'Only the accusative becomes the subject. The dative stays dative: Man hilft mir → Mir wird geholfen (not *Ich werde geholfen).' } },
    { b: 'slots', h: { es: 'La pasiva en la oración', en: 'The passive in the sentence' }, c: ['Vorfeld', { es: 'Verbo 1', en: 'Verb 1' }, 'Mittelfeld', { es: 'Verbo 2', en: 'Verb 2' }], v: [1, 3], r: [
      ['Die Daten', 'werden', 'am Computer', 'aufgezeichnet.'],
      ['1935', 'wurde', 'der Effekt von Stroop', 'beschrieben.'],
      ['Das Experiment', 'ist', 'schon oft', 'wiederholt worden.'],
      ['Ich glaube, dass', '', 'das Experiment schon oft', 'wiederholt worden ist.']
    ] },
    { b: 'note', tone: 'l1', t: { es: 'El español usa mucho la pasiva refleja: «se mide el tiempo» = Die Zeit wird gemessen; «se habla alemán» = Hier wird Deutsch gesprochen. «Fue construido» = wurde gebaut; «está cerrado» = ist geschlossen.', en: '“The time is measured” = Die Zeit wird gemessen; “German is spoken here” = Hier wird Deutsch gesprochen. “Was built” = wurde gebaut; “is closed” = ist geschlossen.' } }
  ],
  chunks: [
    ['Wie wird das gemacht?', '¿Cómo se hace eso?', 'How is that done?'],
    ['Das Buch wurde 1925 veröffentlicht.', 'El libro se publicó en 1925.', 'The book was published in 1925.'],
    ['Hier wird nicht geraucht.', 'Aquí no se fuma.', 'No smoking here.'],
    ['Das ist schon erledigt worden.', 'Eso ya se hizo.', 'That has already been done.'],
    ['Der Laden ist sonntags geschlossen.', 'La tienda está cerrada los domingos.', 'The shop is closed on Sundays.'],
    ['Mir wurde sofort geholfen.', 'Me ayudaron de inmediato.', 'I was helped immediately.']
  ],
  errors: [
    ['Das Labor wurde 1879 gegründen.', 'Das Labor wurde 1879 gegründet.', { es: 'Partizip II, no infinitivo.', en: 'Past participle, not infinitive.' }],
    ['Das Experiment ist wiederholt geworden.', 'Das Experiment ist wiederholt worden.', { es: 'Perfekt pasivo: worden.', en: 'Passive Perfekt: worden.' }],
    ['Ich werde geholfen.', 'Mir wird geholfen.', { es: 'helfen + dativo: el dativo se mantiene.', en: 'helfen + dative: the dative stays.' }],
    ['Die Stadt wurde von ein Erdbeben zerstört.', 'Die Stadt wurde durch ein Erdbeben zerstört.', { es: 'Causa no humana: durch + Akk.', en: 'Non-human cause: durch + acc.' }],
    ['Die Tür wird geschlossen. (= está cerrada)', 'Die Tür ist geschlossen.', { es: 'Estado: sein + Partizip.', en: 'State: sein + participle.' }]
  ],
  examples: [
    ['Im Labor werden Reaktionszeiten gemessen.', 'En el laboratorio se miden tiempos de reacción.', 'Reaction times are measured in the lab.'],
    ['Der Stroop-Effekt wurde 1935 beschrieben.', 'El efecto Stroop se describió en 1935.', 'The Stroop effect was described in 1935.'],
    ['Das Experiment ist tausendmal wiederholt worden.', 'El experimento se ha repetido mil veces.', 'The experiment has been repeated a thousand times.'],
    ['Die Daten werden von einem Programm ausgewertet.', 'Los datos los evalúa un programa.', 'The data are analysed by a program.'],
    ['In Leipzig wurden früher viele Bücher gedruckt.', 'Antes en Leipzig se imprimían muchos libros.', 'Many books used to be printed in Leipzig.'],
    ['Die Bibliothek ist bis 22 Uhr geöffnet.', 'La biblioteca está abierta hasta las 22.', 'The library is open until 10 p.m.']
  ],
  reading: 'r-u25',
  exercises: [
    { t: 'choice', ph: 1, q: 'Die Reaktionszeit ___ gemessen.', o: ['wird', 'ist', 'hat'], a: 0, x: { es: 'Proceso: werden + Partizip II.', en: 'Process: werden + participle.' } },
    { t: 'choice', ph: 1, q: 'Das Labor ___ 1879 gegründet.', o: ['wird', 'wurde', 'würde'], a: 1, x: { es: 'Pasado: wurde + Partizip II.', en: 'Past: wurde + participle.' } },
    { t: 'choice', ph: 1, q: 'Das Experiment ist oft wiederholt ___.', o: ['geworden', 'worden', 'werden'], a: 1, x: { es: 'Perfekt pasivo: worden.', en: 'Passive Perfekt: worden.' } },
    { t: 'choice', ph: 1, p: { es: '«Die Tür ist geschlossen.» ¿Proceso o estado?', en: '“Die Tür ist geschlossen.” Process or state?' }, o: [{ es: 'proceso', en: 'process' }, { es: 'estado', en: 'state' }], a: 1, x: { es: 'sein + Partizip = estado.', en: 'sein + participle = state.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona tiempo y forma pasiva.', en: 'Match tense and passive form.' }, pairs: [['Präsens', 'wird gemacht'], ['Präteritum', 'wurde gemacht'], ['Perfekt', 'ist gemacht worden'], ['Futur', 'wird gemacht werden']], x: { es: 'werden marca el tiempo.', en: 'werden marks the tense.' } },
    { t: 'choice', ph: 1, q: 'Die Stadt wurde ___ ein Erdbeben zerstört.', o: ['von', 'durch', 'mit'], a: 1, x: { es: 'Causa: durch + Akk.', en: 'Cause: durch + acc.' } },
    { t: 'gap', ph: 2, q: 'Das Buch ___ in Leipzig ___. (drucken, Präsens)', a: ['wird', 'gedruckt'], x: { es: 'wird + gedruckt.', en: 'wird + gedruckt.' } },
    { t: 'gap', ph: 2, q: 'Die Daten ___ gestern ___. (auswerten, Präteritum)', a: ['wurden', 'ausgewertet'], x: { es: 'Plural: wurden + ausgewertet.', en: 'Plural: wurden + ausgewertet.' } },
    { t: 'gap', ph: 2, q: 'Der Text ist schon ___ worden. (übersetzen)', a: 'übersetzt', x: { es: 'über- inseparable aquí: übersetzt.', en: 'über- is inseparable here: übersetzt.' } },
    { t: 'gap', ph: 2, q: 'Hier ___ nicht geraucht.', a: 'wird', x: { es: 'Pasiva impersonal: wird.', en: 'Impersonal passive: wird.' } },
    { t: 'gap', ph: 2, q: '___ wurde sofort geholfen. (ich)', a: 'Mir', x: { es: 'helfen + dativo: Mir wurde geholfen.', en: 'helfen + dative: Mir wurde geholfen.' } },
    { t: 'gap', ph: 2, q: 'Das Experiment wird von ___ Professorin geleitet.', a: 'der', x: { es: 'von + dativo femenino: der.', en: 'von + feminine dative: der.' } },
    { t: 'gap', ph: 2, q: 'Am Samstag ___ in der WG gefeiert.', a: 'wird', x: { es: 'Pasiva impersonal con Vorfeld ocupado.', en: 'Impersonal passive with a filled Vorfeld.' } },
    { t: 'order', ph: 2, w: ['wurde', '1935', 'beschrieben', 'der Effekt'], a: '1935 wurde der Effekt beschrieben.', alt: ['Der Effekt wurde 1935 beschrieben.'], x: { es: 'wurde en 2.ª posición, participio al final.', en: 'wurde second, participle last.' } },
    { t: 'transform', ph: 3, p: { es: 'Pasa a pasiva (sin agente).', en: 'Make it passive (no agent).' }, q: 'Man misst die Reaktionszeit.', a: 'Die Reaktionszeit wird gemessen.', x: { es: 'man desaparece; Akk → Nom.', en: 'man disappears; acc. → nom.' } },
    { t: 'transform', ph: 3, p: { es: 'Pasa a pasiva en Perfekt.', en: 'Make it passive in the Perfekt.' }, q: 'Die Forscher haben die Studie veröffentlicht.', a: 'Die Studie ist veröffentlicht worden.', alt: ['Die Studie ist von den Forschern veröffentlicht worden.'], x: { es: 'ist + Partizip + worden.', en: 'ist + participle + worden.' } },
    { t: 'write', ph: 3, s: { es: 'Aquí se habla alemán.', en: 'German is spoken here.' }, a: 'Hier wird Deutsch gesprochen.', x: { es: 'Pasiva de proceso con sujeto Deutsch.', en: 'Process passive with Deutsch as subject.' } },
    { t: 'listen', ph: 3, a: 'Die Daten werden automatisch aufgezeichnet.', x: { es: 'werden + aufgezeichnet.', en: 'werden + aufgezeichnet.' } }
  ],
  summary: [
    { es: 'Vorgangspassiv: werden + Partizip II; el acusativo pasa a sujeto, man desaparece.', en: 'Process passive: werden + participle; the accusative becomes subject, man disappears.' },
    { es: 'wird gemacht / wurde gemacht / ist gemacht worden / war gemacht worden / wird gemacht werden.', en: 'wird gemacht / wurde gemacht / ist gemacht worden / war gemacht worden / wird gemacht werden.' },
    { es: 'Agente: von + Dat; medio o causa: durch + Akk.', en: 'Agent: von + dat.; means or cause: durch + acc.' },
    { es: 'Estado: sein + Partizip (ist geschlossen). Impersonal: Hier wird getanzt / Es wird getanzt.', en: 'State: sein + participle (ist geschlossen). Impersonal: Hier wird getanzt / Es wird getanzt.' },
    { es: 'El dativo no se convierte en sujeto: Mir wird geholfen.', en: 'The dative does not become the subject: Mir wird geholfen.' }
  ]
});

DD.readings.push({
  id: 'r-u25', unit: 'u25', level: 'B1', kind: 'unit',
  de: 'Rot, Blau, Grün: Ein Experiment', es: 'Rojo, azul, verde: un experimento', en: 'Red, blue, green: an experiment',
  genre: { es: 'Informe de laboratorio · serie Leipzig 25', en: 'Lab report · Leipzig series 25' },
  intro: { es: 'Tomás participa por primera vez en un experimento del laboratorio de la profesora Weiß. Luego escribe un breve informe. El efecto Stroop es uno de los resultados más replicados de la psicología.', en: 'Tomás takes part in an experiment in Professor Weiß’s lab for the first time. Then he writes a short report. The Stroop effect is one of the most replicated findings in psychology.' },
  focus: { es: 'wird / werden + participio · wurde · ist … worden · von / durch · pasiva de estado.', en: 'wird / werden + participle · wurde · ist … worden · von / durch · state passive.' },
  source: { type: 'original', note: { es: 'Stroop, J. R. (1935). Studies of interference in serial verbal reactions. Journal of Experimental Psychology, 18, 643–662.', en: 'Stroop, J. R. (1935). Studies of interference in serial verbal reactions. Journal of Experimental Psychology, 18, 643–662.' } },
  p: [
    ['Im Labor von Professorin Weiß werden jede Woche Experimente durchgeführt. Heute ist Tomás zum ersten Mal Versuchsperson. Er wird in einen kleinen, ruhigen Raum geführt. Das Licht ist gedimmt, und vor ihm steht ein Bildschirm. „Sie müssen nur auf die Farben achten“, wird ihm erklärt.', 'En el laboratorio de la profesora Weiß se realizan experimentos cada semana. Hoy Tomás es por primera vez sujeto experimental. Lo llevan a una sala pequeña y tranquila. La luz está atenuada y frente a él hay una pantalla. «Solo tiene que prestar atención a los colores», le explican.', 'Experiments are carried out every week in Professor Weiß’s lab. Today Tomás is a participant for the first time. He is led into a small, quiet room. The light is dimmed, and there is a screen in front of him. “You only have to pay attention to the colours,” he is told.'],
    ['Auf dem Bildschirm werden Wörter präsentiert: ROT, BLAU, GRÜN, GELB. Aber die Wörter sind in verschiedenen Farben geschrieben. Manchmal ist das Wort ROT auch rot gedruckt, manchmal ist es blau oder grün. Tomás soll nicht das Wort lesen, sondern die Farbe der Buchstaben benennen. Dafür wird für jede Farbe eine Taste gedrückt. Jede Reaktion wird vom Computer aufgezeichnet.', 'En la pantalla se presentan palabras: ROJO, AZUL, VERDE, AMARILLO. Pero las palabras están escritas en distintos colores. A veces la palabra ROJO también está impresa en rojo; a veces está en azul o en verde. Tomás no debe leer la palabra, sino nombrar el color de las letras. Para ello se presiona una tecla para cada color. Cada reacción queda registrada por el computador.', 'Words are presented on the screen: RED, BLUE, GREEN, YELLOW. But the words are written in different colours. Sometimes the word RED is also printed in red, sometimes it is blue or green. Tomás is not supposed to read the word but to name the colour of the letters. A key is pressed for each colour. Every response is recorded by the computer.'],
    ['Am Anfang ist es leicht. Doch wenn das Wort BLAU in roter Farbe erscheint, zögert Tomás. Sein Gehirn liest das Wort automatisch, obwohl das gar nicht verlangt wird. Nach zwanzig Minuten ist das Experiment beendet. Tomás ist überrascht, wie anstrengend eine so einfache Aufgabe war.', 'Al principio es fácil. Pero cuando la palabra AZUL aparece en color rojo, Tomás duda. Su cerebro lee la palabra automáticamente, aunque eso no se pide en absoluto. Después de veinte minutos el experimento ha terminado. Tomás se sorprende de lo agotadora que fue una tarea tan simple.', 'At first it is easy. But when the word BLUE appears in red, Tomás hesitates. His brain reads the word automatically, although that is not asked for at all. After twenty minutes the experiment is over. Tomás is surprised at how tiring such a simple task was.'],
    ['Am Abend schreibt er einen kurzen Bericht: „Der Effekt wurde 1935 von dem amerikanischen Psychologen John Ridley Stroop beschrieben. Seitdem ist das Experiment tausendmal wiederholt worden. Das Ergebnis ist immer ähnlich: Wenn Wort und Farbe nicht übereinstimmen, wird langsamer reagiert, und es werden mehr Fehler gemacht. Das Lesen ist bei Erwachsenen so stark automatisiert, dass es nicht einfach unterdrückt werden kann. Die Daten unseres Labors werden jetzt statistisch ausgewertet.“', 'En la noche escribe un breve informe: «El efecto fue descrito en 1935 por el psicólogo estadounidense John Ridley Stroop. Desde entonces el experimento se ha repetido miles de veces. El resultado es siempre parecido: cuando la palabra y el color no coinciden, se reacciona más lento y se cometen más errores. En los adultos la lectura está tan automatizada que no se puede suprimir sin más. Los datos de nuestro laboratorio se están evaluando ahora estadísticamente.»', 'In the evening he writes a short report: “The effect was described in 1935 by the American psychologist John Ridley Stroop. Since then the experiment has been repeated thousands of times. The result is always similar: when word and colour do not match, people react more slowly and make more mistakes. In adults reading is so strongly automated that it cannot simply be suppressed. Our lab’s data are now being analysed statistically.”'],
    ['Unter den Bericht schreibt Professorin Weiß: „Sehr gut! Nur eine Frage: Was bedeutet das für die Aufmerksamkeit? Darüber wird nächste Woche im Seminar diskutiert.“', 'Debajo del informe la profesora Weiß escribe: «¡Muy bien! Solo una pregunta: ¿qué significa esto para la atención? De eso se discutirá la próxima semana en el seminario.»', 'Below the report Professor Weiß writes: “Very good! Just one question: what does this mean for attention? That will be discussed in the seminar next week.”']
  ],
  gloss: [
    ['geführt', { es: 'conducido (führen)', en: 'led (führen)' }],
    ['Raum', { es: 'sala; espacio (der Raum, ¨-e)', en: 'room; space' }],
    ['Licht', { es: 'luz (das Licht, -er)', en: 'light' }],
    ['gedimmt', { es: 'atenuada', en: 'dimmed' }],
    ['ROT', { es: 'ROJO', en: 'RED' }], ['BLAU', { es: 'AZUL', en: 'BLUE' }], ['GRÜN', { es: 'VERDE', en: 'GREEN' }], ['GELB', { es: 'AMARILLO', en: 'YELLOW' }],
    ['Buchstaben', { es: 'letras (der Buchstabe, -n)', en: 'letters (der Buchstabe, -n)' }],
    ['Reaktion', { es: 'reacción (die Reaktion, -en)', en: 'reaction' }],
    ['roter', { es: 'roja (adjetivo declinado)', en: 'red (declined)' }],
    ['zögert', { es: 'duda; vacila (zögern)', en: 'hesitates (zögern)' }],
    ['verlangt', { es: 'pedido; exigido (verlangen)', en: 'required (verlangen)' }],
    ['beendet', { es: 'terminado (beenden)', en: 'finished (beenden)' }],
    ['Bericht', { es: 'informe (der Bericht, -e)', en: 'report (der Bericht, -e)' }],
    ['amerikanischen', { es: 'estadounidense', en: 'American' }],
    ['tausendmal', { es: 'mil veces', en: 'a thousand times' }],
    ['übereinstimmen', { es: 'coincidir', en: 'match' }],
    ['Erwachsenen', { es: 'adultos (der/die Erwachsene)', en: 'adults' }],
    ['automatisiert', { es: 'automatizada', en: 'automated' }],
    ['unterdrückt', { es: 'suprimida (unterdrücken)', en: 'suppressed (unterdrücken)' }],
    ['unseres', { es: 'de nuestro (genitivo)', en: 'of our (genitive)' }],
    ['Lesen', { es: 'la lectura (das Lesen)', en: 'reading (das Lesen)' }]
  ],
  q: [
    { t: 'rf', q: 'Tomás soll die Wörter laut lesen.', a: false, x: { es: 'Debe nombrar el color de las letras.', en: 'He must name the colour of the letters.' } },
    { t: 'choice', q: 'Wodurch werden die Reaktionen aufgezeichnet?', o: ['von Professorin Weiß', 'vom Computer', 'von Tomás'], a: 1, x: { es: '«Jede Reaktion wird vom Computer aufgezeichnet.»', en: '“Jede Reaktion wird vom Computer aufgezeichnet.”' } },
    { t: 'choice', q: 'Wann zögert Tomás?', o: ['wenn Wort und Farbe gleich sind', 'wenn das Wort BLAU rot erscheint', 'am Ende des Experiments'], a: 1, x: { es: 'Cuando palabra y color no coinciden.', en: 'When word and colour don’t match.' } },
    { t: 'rf', q: 'Der Effekt wurde 1935 beschrieben.', a: true, x: { es: 'Por J. R. Stroop.', en: 'By J. R. Stroop.' } },
    { t: 'choice', q: 'Warum ist die Aufgabe schwer?', o: ['Weil Lesen bei Erwachsenen automatisiert ist.', 'Weil die Farben dunkel sind.', 'Weil der Computer langsam ist.'], a: 0, x: { es: 'La lectura no se puede suprimir sin más.', en: 'Reading cannot simply be suppressed.' } }
  ]
});

/* Ampliación · vocabulario básico del nivel (cobertura de la lista de referencia A1–B1) */
DD.lexicon.push({ unit: 'u25', ext: true, words: [
  ['n', 'das Material', 'Materialien', 'el material', 'material'],
  ['v', 'mischen', 'mischt', 'mischte', 'hat gemischt', 'mezclar', 'mix'],
  ['v', 'füllen', 'füllt', 'füllte', 'hat gefüllt', 'llenar', 'fill'],
  ['v', 'trennen', 'trennt', 'trennte', 'hat getrennt', 'separar', 'separate']
] });
