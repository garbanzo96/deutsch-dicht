/* Gramática · Pronomen */
(function () {
  const M = (es, en) => ({ es, en });
  DD.grammarTopic('k-pronomen', [
    {
      id: 'g-personal', level: 'A1', de: 'Personalpronomen und Anrede', es: 'Pronombres personales y tratamiento', en: 'Personal pronouns and forms of address',
      summary: M('Pronombres en cuatro casos. du/ihr para familia, amigos, niños y entre jóvenes; Sie (siempre con mayúscula, verbo en plural) para el trato formal. El pronombre de 3.ª persona sigue el género gramatical: der Tisch → er, die Lampe → sie, das Buch → es.', 'Pronouns in four cases. du/ihr for family, friends, children and among young people; Sie (always capitalised, plural verb) for formal address. The 3rd-person pronoun follows grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es.'),
      blocks: [
        { b: 'table', h: M('Declinación completa', 'Full declension'), c: ['Nominativ', 'Akkusativ', 'Dativ', M('Posesivo', 'Possessive')], r: [
          ['ich', 'mich', 'mir', 'mein'], ['du', 'dich', 'dir', 'dein'], ['er', 'ihn', 'ihm', 'sein'], ['sie', 'sie', 'ihr', 'ihr'], ['es', 'es', 'ihm', 'sein'],
          ['wir', 'uns', 'uns', 'unser'], ['ihr', 'euch', 'euch', 'euer'], ['sie', 'sie', 'ihnen', 'ihr'], ['Sie', 'Sie', 'Ihnen', 'Ihr']
        ] },
        { b: 'table', h: M('du o Sie', 'du or Sie'), c: [M('Situación', 'Situation'), M('Forma', 'Form')], r: [
          [M('familia, amigos, niños, mascotas', 'family, friends, children, pets'), 'du / ihr'], [M('estudiantes, compañeros de piso, muchos lugares de trabajo modernos', 'students, flatmates, many modern workplaces'), 'du (a menudo)'],
          [M('desconocidos adultos, oficinas, tiendas, profesores universitarios', 'adult strangers, offices, shops, university teachers'), 'Sie'], [M('pasar al du', 'switch to du'), 'Wollen wir uns duzen?']
        ], n: M('En caso de duda, Sie. Es la persona de mayor edad o rango quien propone el du.', 'When in doubt, Sie. The older or higher-ranking person proposes du.') },
        { b: 'note', tone: 'l1', t: M('El alemán no omite el sujeto como el español: «Bin müde» es coloquial y marcado; lo normal es «Ich bin müde». Y es (it) es obligatorio como sujeto vacío: Es regnet, Es gibt …', 'German does not drop the subject: “Bin müde” is colloquial and marked; normally “Ich bin müde”. And es is obligatory as a dummy subject: Es regnet, Es gibt …') }
      ],
      examples: [['Kannst du mir helfen? – Ja, ich helfe dir.', '¿Me puedes ayudar? – Sí, te ayudo.', 'Can you help me? – Yes, I’ll help you.'], ['Wie geht es Ihnen?', '¿Cómo está usted?', 'How are you?'], ['Wo ist die Lampe? – Sie steht dort.', '¿Dónde está la lámpara? – Está allí.', 'Where is the lamp? – It’s over there.']]
    },
    {
      id: 'g-possessive', level: 'A1', de: 'Possessivartikel', es: 'Artículos posesivos', en: 'Possessive articles',
      summary: M('mein, dein, sein, ihr, sein, unser, euer, ihr, Ihr. La raíz depende del poseedor; la terminación depende del objeto poseído (género, número y caso), como ein/kein en singular.', 'mein, dein, sein, ihr, sein, unser, euer, ihr, Ihr. The stem depends on the possessor; the ending depends on the thing possessed (gender, number and case), like ein/kein in the singular.'),
      blocks: [
        { b: 'table', h: M('Poseedor → raíz', 'Possessor → stem'), c: [M('Poseedor', 'Possessor'), M('Raíz', 'Stem'), M('Ejemplo', 'Example')], r: [
          ['ich', 'mein-', '[mein] Bruder'], ['du', 'dein-', '[deine] Schwester'], ['er / es', 'sein-', '[sein] Auto (de él)'], ['sie (sg.)', 'ihr-', '[ihr] Auto (de ella)'],
          ['wir', 'unser-', '[unsere] Wohnung'], ['ihr', 'euer- / eur-', '[eure] Kinder'], ['sie (pl.)', 'ihr-', '[ihr] Haus (de ellos)'], ['Sie', 'Ihr-', '[Ihr] Pass (de usted)']
        ] },
        { b: 'ref', id: 'g-declension-overview', table: 1 },
        { b: 'note', tone: 'l1', t: M('«Su» es ambiguo en español; el alemán distingue: sein (de él / de ello), ihr (de ella / de ellos), Ihr (de usted / ustedes).', 'Spanish «su» is ambiguous; German distinguishes: sein (his / its), ihr (her / their), Ihr (your, formal).') }
      ],
      examples: [['Das ist mein Bruder und seine Freundin.', 'Este es mi hermano y su novia.', 'This is my brother and his girlfriend.'], ['Wir besuchen unsere Großeltern.', 'Visitamos a nuestros abuelos.', 'We visit our grandparents.'], ['Haben Sie Ihren Ausweis dabei?', '¿Tiene su carnet consigo?', 'Do you have your ID with you?']]
    },
    {
      id: 'g-reflexive-pron', level: 'A2', de: 'Reflexivpronomen und einander', es: 'Pronombres reflexivos y einander', en: 'Reflexive pronouns and einander',
      summary: M('mich/mir, dich/dir, sich, uns, euch, sich. En 3.ª persona siempre sich (nunca ihn/ihm para el reflexivo). Valor recíproco: sich / einander (Sie helfen einander).', 'mich/mir, dich/dir, sich, uns, euch, sich. In the 3rd person always sich (never ihn/ihm for the reflexive). Reciprocal meaning: sich / einander (Sie helfen einander).'),
      blocks: [
        { b: 'ref', id: 'g-reflexive' },
        { b: 'table', h: M('Recíproco', 'Reciprocal'), c: [M('Forma', 'Form'), M('Ejemplo', 'Example')], r: [
          ['sich', 'Wir treffen uns. · Sie kennen sich seit Jahren.'], ['einander', 'Sie helfen einander. (más inequívoco)'], [M('preposición + einander', 'preposition + einander'), 'miteinander, voneinander, nebeneinander, aufeinander']
        ] }
      ],
      examples: [['Er sieht sich im Spiegel.', 'Se ve en el espejo.', 'He sees himself in the mirror.'], ['Wir haben viel voneinander gelernt.', 'Aprendimos mucho unos de otros.', 'We learned a lot from each other.'], ['Kauf dir doch etwas Schönes!', '¡Cómprate algo lindo!', 'Do buy yourself something nice!']]
    },
    {
      id: 'g-relative', level: 'B1', de: 'Relativpronomen und Relativsätze', es: 'Pronombres y oraciones relativas', en: 'Relative pronouns and relative clauses',
      summary: M('El relativo concuerda en género y número con el antecedente; el caso lo decide su función dentro de la relativa. Formas = artículo definido, salvo dativo plural (denen) y genitivo (dessen, deren). Verbo al final; siempre entre comas. Tras alles, etwas, nichts, das, superlativos neutros: was. Lugares: wo.', 'The relative pronoun agrees in gender and number with its antecedent; its case is decided by its function in the relative clause. Forms = definite article, except dative plural (denen) and genitive (dessen, deren). Verb last; always set off by commas. After alles, etwas, nichts, das, neuter superlatives: was. Places: wo.'),
      blocks: [
        { b: 'table', h: M('Formas del pronombre relativo', 'Relative pronoun forms'), c: ['', '{m maskulin}', '{f feminin}', '{n neutral}', '{p Plural}'], r: [
          ['Nominativ', 'der', 'die', 'das', 'die'], ['Akkusativ', 'den', 'die', 'das', 'die'], ['Dativ', 'dem', 'der', 'dem', '[denen]'], ['Genitiv', '[dessen]', '[deren]', '[dessen]', '[deren]']
        ] },
        { b: 'table', h: M('El caso según la función', 'Case by function'), c: [M('Función en la relativa', 'Function in the clause'), M('Ejemplo', 'Example')], r: [
          [M('sujeto', 'subject'), 'Der Mann, [der] dort steht, ist mein Onkel.'], [M('objeto directo', 'direct object'), 'Der Mann, [den] ich gesehen habe, …'],
          [M('objeto indirecto / verbo con dativo', 'indirect object / dative verb'), 'Der Mann, [dem] ich geholfen habe, …'], [M('posesión', 'possession'), 'Der Mann, [dessen] Auto kaputt ist, …'],
          [M('con preposición', 'with preposition'), 'Die Stadt, [in der] ich wohne, … · Die Leute, [mit denen] ich arbeite, …'],
          ['was', 'Das ist alles, [was] ich weiß. · Das Beste, [was] passiert ist, …'], ['wo / wohin / woher', 'Leipzig ist die Stadt, [wo] ich studiere.'],
          ['wer … (der)', '[Wer] lernt, (der) gewinnt.']
        ] },
        { b: 'note', tone: 'tip', t: M('welcher como relativo (der Mann, welcher …) es formal y raro; se usa para evitar repeticiones (die, die → die, welche).', 'welcher as a relative (der Mann, welcher …) is formal and rare; it avoids repetition (die, die → die, welche).') }
      ],
      examples: [['Das ist die Frau, deren Sohn in Chile lebt.', 'Esa es la mujer cuyo hijo vive en Chile.', 'That is the woman whose son lives in Chile.'], ['Ich habe etwas gefunden, was dich interessieren wird.', 'Encontré algo que te va a interesar.', 'I found something that will interest you.'], ['Die Kollegen, mit denen ich arbeite, sind sehr nett.', 'Los colegas con los que trabajo son muy simpáticos.', 'The colleagues I work with are very nice.']]
    },
    {
      id: 'g-pronominal-adverbs', level: 'A2', de: 'Pronominaladverbien: da(r)- und wo(r)-', es: 'Adverbios pronominales: da(r)- y wo(r)-', en: 'Pronominal adverbs: da(r)- and wo(r)-',
      summary: M('Preposición + pronombre referido a cosas o ideas se funde: über es → darüber, über was? → worüber? Con personas se usa preposición + pronombre: über ihn, über wen? El da-compuesto puede anticipar una subordinada (Ich freue mich darauf, dass …).', 'Preposition + pronoun referring to things or ideas merge: über es → darüber, über was? → worüber? With people use preposition + pronoun: über ihn, über wen? The da-compound can anticipate a clause (Ich freue mich darauf, dass …).'),
      blocks: [
        { b: 'ref', id: 'g-rection', table: 3 },
        { b: 'table', h: M('Anticipar una oración', 'Anticipating a clause'), c: [M('Verbo + preposición', 'Verb + preposition'), M('Ejemplo', 'Example')], r: [
          ['sich freuen auf', 'Ich freue mich [darauf], dass du kommst.'], ['denken an', 'Denk [daran], die Tür abzuschließen.'], ['bestehen aus', 'Die Arbeit besteht [darin], Daten zu prüfen.'], ['abhängen von', 'Es hängt [davon] ab, ob es regnet.']
        ] }
      ],
      examples: [['Worüber sprecht ihr? – Über den Film.', '¿De qué hablan? – De la película.', 'What are you talking about? – About the film.'], ['Hast du daran gedacht?', '¿Te acordaste de eso?', 'Did you remember that?'], ['Mit wem gehst du ins Kino?', '¿Con quién vas al cine?', 'Who are you going to the cinema with?']]
    },
    {
      id: 'g-indefinite', level: 'A2', de: 'Indefinitpronomen: man, jemand, niemand, etwas, nichts …', es: 'Pronombres indefinidos: man, jemand, niemand, etwas, nichts…', en: 'Indefinite pronouns: man, jemand, niemand, etwas, nichts…',
      summary: M('man = uno / se (solo nominativo; Akk einen, Dat einem). jemand / niemand (alguien / nadie), etwas / nichts (algo / nada), einer / keiner (uno / ninguno: concuerdan en género), alle, viele, einige, manche, beide.', 'man = one / you (nominative only; acc. einen, dat. einem). jemand / niemand (someone / no one), etwas / nichts (something / nothing), einer / keiner (one / none: agree in gender), alle, viele, einige, manche, beide.'),
      blocks: [
        { b: 'table', h: M('Formas', 'Forms'), c: ['Nominativ', 'Akkusativ', 'Dativ', M('Ejemplo', 'Example')], r: [
          ['man', 'einen', 'einem', 'Das freut [einen]. · Man weiß nie.'], ['jemand', 'jemand(en)', 'jemand(em)', 'Ich habe [jemanden] gesehen.'], ['niemand', 'niemand(en)', 'niemand(em)', 'Ich habe es [niemandem] erzählt.'],
          ['einer / eine / ein(e)s', 'einen / eine / ein(e)s', 'einem / einer / einem', 'Hast du einen Stift? – Ja, ich habe [einen].'], ['keiner / keine / kein(e)s', 'keinen / keine / kein(e)s', 'keinem / keiner / keinem', 'Hast du ein Auto? – Nein, ich habe [keins].'],
          ['etwas / nichts', '—', '—', '[etwas] Neues · [nichts] Besonderes']
        ], n: M('man no se repite con er: Wenn man müde ist, sollte man (✗ er) schlafen. Posesivo de man: sein.', 'man is not taken up with er: Wenn man müde ist, sollte man (✗ er) schlafen. Possessive of man: sein.') }
      ],
      examples: [['Hier spricht man Deutsch.', 'Aquí se habla alemán.', 'German is spoken here.'], ['Hat jemand meinen Schlüssel gesehen?', '¿Alguien vio mi llave?', 'Has anyone seen my key?'], ['Brauchst du einen Schirm? – Nein, ich habe einen.', '¿Necesitas un paraguas? – No, tengo uno.', 'Do you need an umbrella? – No, I have one.']]
    },
    {
      id: 'g-es', level: 'B1', de: 'Die Funktionen von es', es: 'Las funciones de es', en: 'The functions of es',
      summary: M('es es pronombre (das Buch → es), sujeto obligatorio de verbos impersonales (es regnet), relleno del Vorfeld que desaparece si otro elemento ocupa esa posición (Es kamen viele Leute → Viele Leute kamen), y correlato de una subordinada o infinitiva (Es ist wichtig, dass …).', 'es is a pronoun (das Buch → es), the obligatory subject of impersonal verbs (es regnet), a Vorfeld filler that disappears when something else takes that position (Es kamen viele Leute → Viele Leute kamen), and a correlate of a clause (Es ist wichtig, dass …).'),
      blocks: [
        { b: 'table', h: M('Cuatro funciones', 'Four functions'), c: [M('Función', 'Function'), M('Ejemplo', 'Example'), M('¿Desaparece?', 'Disappears?')], r: [
          [M('pronombre', 'pronoun'), 'Das Buch? [Es] liegt auf dem Tisch.', M('no', 'no')],
          [M('sujeto impersonal', 'impersonal subject'), '[Es] regnet. · [Es] gibt … · Wie geht [es] dir? · [Es] klingelt.', M('no', 'no')],
          [M('relleno del Vorfeld', 'Vorfeld filler'), '[Es] wird hier viel gearbeitet. → Hier wird viel gearbeitet.', M('sí, si el Vorfeld se ocupa', 'yes, if the Vorfeld is filled')],
          [M('correlato', 'correlate'), '[Es] ist schön, dass du da bist. → Dass du da bist, ist schön.', M('sí, si la subordinada va primero', 'yes, if the clause comes first')]
        ] }
      ],
      examples: [['Es gibt hier keinen Supermarkt.', 'Aquí no hay supermercado.', 'There is no supermarket here.'], ['Es fällt mir schwer, früh aufzustehen.', 'Me cuesta levantarme temprano.', 'I find it hard to get up early.'], ['Es waren viele Studenten auf dem Fest.', 'En la fiesta había muchos estudiantes.', 'There were many students at the party.']]
    }
  ]);
})();
