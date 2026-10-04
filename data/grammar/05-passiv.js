/* Gramática · Passiv */
(function () {
  const M = (es, en) => ({ es, en });
  DD.grammarTopic('k-passiv', [
    {
      id: 'g-passive', level: 'B1', de: 'Vorgangspassiv und Zustandspassiv', es: 'Pasiva de proceso y pasiva de estado', en: 'Process passive and state passive',
      summary: M('Pasiva de proceso: werden + Partizip II (Das Fenster wird geöffnet = alguien lo abre). Pasiva de estado: sein + Partizip II (Das Fenster ist geöffnet = está abierto). El objeto en acusativo pasa a sujeto; el dativo se conserva; el agente con von (persona) o durch (medio).', 'Process passive: werden + Partizip II (Das Fenster wird geöffnet = someone opens it). State passive: sein + Partizip II (Das Fenster ist geöffnet = it is open). The accusative object becomes the subject; the dative stays; the agent with von (person) or durch (means).'),
      blocks: [
        { b: 'table', h: M('La pasiva de proceso en todos los tiempos', 'The process passive in all tenses'), c: [M('Tiempo', 'Tense'), M('Forma', 'Form'), M('Ejemplo', 'Example')], r: [
          ['Präsens', 'wird + PII', 'Das Haus [wird] [gebaut].'], ['Präteritum', 'wurde + PII', 'Das Haus [wurde] [gebaut].'],
          ['Perfekt', 'ist + PII + worden', 'Das Haus [ist] [gebaut worden].'], ['Plusquamperfekt', 'war + PII + worden', 'Das Haus [war] [gebaut worden].'],
          ['Futur I', 'wird + PII + werden', 'Das Haus [wird] [gebaut werden].'], ['Konjunktiv II', 'würde + PII / wäre … worden', 'Das Haus [würde] [gebaut]. · … [wäre] [gebaut worden].']
        ] },
        { b: 'table', h: M('Activa → pasiva', 'Active → passive'), c: [M('Activa', 'Active'), M('Pasiva', 'Passive'), M('Regla', 'Rule')], r: [
          ['Der Arzt untersucht {A den Patienten}.', '{N Der Patient} wird (vom Arzt) untersucht.', M('Akk → Nom', 'Acc → Nom')],
          ['Man hilft {D dem Mann}.', '{D Dem Mann} wird geholfen.', M('el dativo no cambia', 'the dative stays')],
          ['Man arbeitet hier sonntags.', 'Hier wird sonntags gearbeitet.', M('pasiva impersonal (sin sujeto)', 'impersonal passive (no subject)')],
          ['Der Sturm zerstörte das Dach.', 'Das Dach wurde durch den Sturm zerstört.', M('causa / medio: durch', 'cause / means: durch')]
        ], n: M('Pasiva impersonal: si el Vorfeld queda vacío se rellena con es: Es wird hier sonntags gearbeitet.', 'Impersonal passive: if the Vorfeld is empty it is filled with es: Es wird hier sonntags gearbeitet.') },
        { b: 'table', h: M('Proceso o estado', 'Process or state'), c: [M('Pasiva de proceso', 'Process passive'), M('Pasiva de estado', 'State passive')], r: [
          ['Die Tür [wird] geschlossen. (alguien la cierra)', 'Die Tür [ist] geschlossen. (está cerrada)'],
          ['Der Tisch [wurde] gedeckt.', 'Der Tisch [war] gedeckt.'],
          ['Die Arbeit [ist] erledigt [worden].', 'Die Arbeit [ist] erledigt.']
        ] }
      ],
      examples: [['In Deutschland wird viel Brot gegessen.', 'En Alemania se come mucho pan.', 'A lot of bread is eaten in Germany.'], ['Der Brief wurde gestern abgeschickt.', 'La carta se envió ayer.', 'The letter was sent yesterday.'], ['Das Geschäft ist sonntags geschlossen.', 'La tienda está cerrada los domingos.', 'The shop is closed on Sundays.']]
    },
    {
      id: 'g-passive-modal', level: 'B1', de: 'Passiv mit Modalverben', es: 'Pasiva con modales', en: 'Passive with modal verbs',
      summary: M('Modal conjugado + Partizip II + werden al final: Das muss gemacht werden. En subordinada, el modal va al final del todo: …, dass das gemacht werden muss. Pasado: Das musste gemacht werden.', 'Conjugated modal + Partizip II + werden at the end: Das muss gemacht werden. In a subordinate clause the modal goes to the very end: …, dass das gemacht werden muss. Past: Das musste gemacht werden.'),
      blocks: [
        { b: 'slots', h: M('Posiciones', 'Positions'), c: ['Vorfeld', M('Modal', 'Modal'), 'Mittelfeld', M('Infinitivo pasivo', 'Passive infinitive')], v: [1, 3], r: [
          ['Die Daten', 'müssen', 'sofort', 'gelöscht werden.'],
          ['Das Problem', 'konnte', 'nicht', 'gelöst werden.'],
          ['…, dass', '', 'die Daten sofort', 'gelöscht werden müssen.']
        ] }
      ],
      examples: [['Der Antrag muss bis Freitag abgegeben werden.', 'La solicitud debe entregarse antes del viernes.', 'The application must be submitted by Friday.'], ['Hier darf nicht geraucht werden.', 'Aquí no se puede fumar.', 'Smoking is not allowed here.'], ['Das hätte vermieden werden können.', 'Eso podría haberse evitado.', 'That could have been avoided.']]
    },
    {
      id: 'g-passive-alt', level: 'B2', de: 'Passiversatzformen', es: 'Alternativas a la pasiva', en: 'Passive alternatives',
      summary: M('Construcciones con sentido pasivo, muy frecuentes en textos técnicos y académicos: man; sich lassen + Inf. (= kann … werden); sein + zu + Inf. (= muss/kann … werden); adjetivos en -bar / -lich (= kann … werden); bekommen + PII (pasiva del dativo); gehören + PII (coloquial).', 'Constructions with passive meaning, very frequent in technical and academic texts: man; sich lassen + inf. (= kann … werden); sein + zu + inf. (= muss/kann … werden); adjectives in -bar / -lich (= kann … werden); bekommen + PII (dative passive); gehören + PII (colloquial).'),
      blocks: [
        { b: 'table', h: M('Equivalencias', 'Equivalences'), c: [M('Alternativa', 'Alternative'), M('Ejemplo', 'Example'), M('Equivale a', 'Equals')], r: [
          ['man', '[Man] repariert das Dach.', 'Das Dach wird repariert.'],
          ['sich lassen + Inf.', 'Das Dach [lässt sich] reparieren.', 'Das Dach kann repariert werden.'],
          ['sein + zu + Inf.', 'Das Dach [ist] [zu reparieren].', 'Das Dach muss / kann repariert werden.'],
          ['-bar', 'Das Dach ist [reparierbar].', 'Das Dach kann repariert werden.'],
          ['bekommen + PII', 'Er [bekommt] das Geld [erstattet].', 'Ihm wird das Geld erstattet.'],
          ['gehören + PII', 'Das [gehört] [verboten]!', 'Das muss verboten werden.']
        ] }
      ],
      examples: [['Diese Frage lässt sich nicht einfach beantworten.', 'Esta pregunta no se responde fácilmente.', 'This question can’t be answered easily.'], ['Die Regeln sind unbedingt einzuhalten.', 'Las reglas deben cumplirse sin falta.', 'The rules must be strictly observed.'], ['Der Text ist kaum lesbar.', 'El texto es apenas legible.', 'The text is barely legible.']]
    }
  ]);
})();
