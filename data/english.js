/* English content layer. Load after the four original data files.
   German examples, grammatical forms and stable IDs remain unchanged.
   In concept records, `es` is the legacy translation slot; here it contains English. */
window.DeutschData = window.DeutschData || {};
(() => {
  const data = window.DeutschData;
  const english = { vocabulary: {}, grammar: {}, lessons: {}, readings: {} };
  const vocabRows = [
['verb-sein','to be','Copular verb; predicate noun in the nominative.','I am from Chile.'],
['verb-haben','to have','Accusative object; also an auxiliary.','I have a question.'],
['verb-kommen','to come; to originate','aus + dative: origin.','I come from Chile.'],
['verb-wohnen','to live; to reside','in + dative: place of residence.','She lives in Berlin.'],
['verb-heissen','to be called; to mean','Not reflexive: ich heiße, without mich.','What is your name?'],
['verb-sprechen','to speak','mit + dative; über + accusative.','I am speaking to the teacher.'],
['verb-lernen','to learn; to study','Accusative object.','We are learning German.'],
['verb-lesen','to read','Accusative object.','He is reading a book.'],
['verb-schreiben','to write','jemandem + dative; etwas + accusative.','I am writing you a message.'],
['verb-gehen','to go; to walk','zu + dative; nach Hause: home, as a destination.','We are going home.'],
['verb-machen','to do; to make','Accusative object.','What are you doing today?'],
['verb-arbeiten','to work','The stem ending -t- takes an intervening -e-: du arbeitest.','I work on Monday.'],
['verb-trinken','to drink','Accusative object.','She is drinking water.'],
['verb-essen','to eat','Accusative object.','I am eating an apple.'],
['verb-kaufen','to buy','Accusative object.','He is buying a loaf of bread.'],
['verb-sehen','to see; to look at','Accusative object.','I see the train.'],
['verb-hoeren','to hear; to listen to','Accusative object.','We are listening to music.'],
['verb-geben','to give','Dative recipient + accusative thing; es gibt + accusative = there is/are.','She gives the child a book.'],
['verb-nehmen','to take','Accusative object.','I take the bus.'],
['verb-brauchen','to need','Accusative object.','I need more time.'],
['verb-koennen','can; to be able to; to know how to','Modal + infinitive without zu; with another verb: hat lesen können.','I can read German.'],
['verb-muessen','must; to have to','Modal + infinitive; nicht müssen = not to have to.','You do not have to wait.'],
['verb-wollen','to want to; to intend to','Modal + infinitive without zu.','We want to travel to Berlin.'],
['verb-duerfen','may; to be allowed to','nicht dürfen = not to be allowed to.','You are not allowed to smoke here.'],
['verb-sollen','should; to be supposed to','Modal + infinitive; contrasts with müssen (necessity).','I am supposed to call you.'],
['verb-moegen','to like','Accusative object. möchte = would like (Konjunktiv II).','I like this film.'],
['verb-fahren','to travel by vehicle; to drive','Intransitive travel: sein; driving a vehicle as an object: haben.','We travel by train.'],
['verb-aufstehen','to get up','Separable; not reflexive in this meaning.','I get up at seven.'],
['verb-ankommen','to arrive','Separable.','The train arrives at eight.'],
['verb-anrufen','to telephone; to call','Separable; person in the accusative.','I will call you tomorrow.'],
['verb-verstehen','to understand','Inseparable; accusative object.','I understand the question.'],
['verb-wissen','to know a fact','Fact or proposition; kennen = to know a person or thing.','I know that she lives here.'],
['verb-kennen','to know; to be familiar with','Accusative object; do not confuse with wissen.','Do you know this city?'],
['verb-finden','to find; to consider','Accusative object.','I find the text interesting.'],
['verb-helfen','to help','Person in the dative.','I help my friend.'],
['verb-gefallen','to appeal to; to be pleasing to','Person in the dative; the thing liked is the subject.','I like the book.'],
['verb-warten','to wait','auf + accusative: to wait for someone/something.','We are waiting for the bus.'],
['verb-bleiben','to stay; to remain','Perfekt with sein, even though it does not express travel.','Today I am staying at home.'],
['verb-werden','to become','Also a future/passive auxiliary; passive Perfekt: ist gemacht worden.','It is getting cold.'],
['verb-denken','to think','an + accusative: to think of/about; über + accusative: to have an opinion about.','I am thinking about the question.'],
['verb-glauben','to believe','Person in the dative; an + accusative = to believe in.','I believe you.'],
['verb-erinnern','to remember; to recall','Accusative reflexive; an + accusative.','I remember the name.'],
['verb-interessieren','to be interested','Accusative reflexive; für + accusative.','She is interested in philosophy.'],
['verb-erklaeren','to explain','Dative person + accusative thing; inseparable.','He explains the rule to me.'],
['verb-vergleichen','to compare','Accusative + mit + dative.','We compare German with English.'],
['verb-entscheiden','to decide','Reflexive: sich für/gegen + accusative entscheiden.','I decide on this course.'],
['verb-begruenden','to justify; to substantiate','Accusative object.','She substantiates her thesis.'],
['verb-unterscheiden','to distinguish','Accusative + von + dative; sich unterscheiden = to differ.','We distinguish knowledge from opinion.'],
['verb-voraussetzen','to presuppose','Separable; accusative object or dass clause.','The thesis presupposes that perception is reliable.'],
['verb-widersprechen','to contradict','Person or thesis in the dative; inseparable.','This finding contradicts the theory.'],
['noun-haus','house','','The house is large.'],
['noun-buch','book','','I am reading a book.'],
['noun-mann','man; husband','','The man is waiting here.'],
['noun-frau','woman; wife; Ms/Mrs','','The woman speaks German.'],
['noun-kind','child','Grammatical gender does not determine sex.','The child is playing.'],
['noun-wasser','water','Wässer exists for kinds of water; it is not the basic use.','I drink water.'],
['noun-brot','bread; loaf','','The bread is fresh.'],
['noun-apfel','apple','','I am buying three apples.'],
['noun-kaffee','coffee','','Two coffees, please.'],
['noun-tag','day','','Today is a good day.'],
['noun-woche','week','','I am staying for a week.'],
['noun-jahr','year','','She has been learning German for a year.'],
['noun-zeit','time','The plural usually refers to eras, occasions or verb tenses.','I have little time today.'],
['noun-uhr','clock; watch; o’clock in time expressions','','It is eight o’clock.'],
['noun-stadt','city; town','','The city is beautiful.'],
['noun-land','country; countryside','auf dem Land = in the countryside.','Chile is a country in South America.'],
['noun-sprache','language','','I speak two languages.'],
['noun-name','name','Accusative/dative: den/dem Namen; genitive: des Namens.','I know your name.'],
['noun-freund','friend (male); boyfriend depending on context','','I help a friend.'],
['noun-freundin','friend (female); girlfriend depending on context','','My friend lives here.'],
['noun-familie','family','','My family lives in Chile.'],
['noun-arbeit','work; job','Plural: tasks, works or pieces of work.','Work begins at nine.'],
['noun-frage','question; issue','','Do you have a question?'],
['noun-antwort','answer; response','','I know the answer.'],
['noun-zug','train; feature; move depending on context','','The train goes to Berlin.'],
['noun-bahnhof','railway station','','We meet at the station.'],
['noun-wohnung','home; apartment; flat','','The apartment has two rooms.'],
['noun-zimmer','room','','My room is small.'],
['noun-tisch','table','','The book is on the table.'],
['noun-stuhl','chair','','I am sitting on a chair.'],
['noun-weg','path; way; method','','The path is long.'],
['noun-regel','rule','','This rule has an exception.'],
['noun-satz','sentence; proposition; theorem','','The sentence has a verb.'],
['noun-wort','word','Wörter: lexical units; Worte: words as speech or discourse.','I am learning ten new words.'],
['noun-text','text','','The text is short.'],
['noun-beispiel','example','','The example explains the rule.'],
['noun-problem','problem','','We have a problem.'],
['noun-grund','reason; foundation; ground','','What is the reason for your decision?'],
['noun-meinung','opinion','','I share your opinion.'],
['noun-erfahrung','experience','','This experience was important.'],
['noun-begriff','concept; term','','We must define the concept.'],
['noun-erkenntnis','knowledge; insight; finding','','The investigation provides new insights.'],
['noun-wissen','knowledge','','Knowledge alone is not enough.'],
['noun-wahrnehmung','perception','','Perception can deceive us.'],
['noun-bewusstsein','consciousness; awareness','','What do we mean by consciousness?'],
['noun-geist','mind; spirit','In philosophy of mind, it usually means mind; context is decisive.','How do mind and body relate to each other?'],
['noun-wahrheit','truth','','The truth of a proposition is disputed.'],
['noun-wirklichkeit','reality; actuality in philosophical contexts','','The model is not reality.'],
['noun-freiheit','freedom; liberty','Plural: freedoms or latitude for action.','Freedom entails responsibility.'],
['noun-wissenschaft','science; academic discipline','Broader than English science: includes the humanities.','Science tests hypotheses.'],
['adj-gut','good; well','','That is a good idea.'],
['adj-schlecht','bad; badly','','The weather is bad.'],
['adj-gross','large; big; tall','','Berlin is a large city.'],
['adj-klein','small','','The room is small.'],
['adj-alt','old; ancient; aged','','How old are you?'],
['adj-neu','new','','I am learning new words.'],
['adj-jung','young','','She is still young.'],
['adj-lang','long','','The text is long.'],
['adj-kurz','short; brief','','The answer is brief.'],
['adj-schoen','beautiful; nice; pleasant','','Today is a beautiful day.'],
['adj-schnell','fast; quickly','Adverbial use without changing form.','The train travels fast.'],
['adj-langsam','slow; slowly','','Please speak slowly.'],
['adj-einfach','simple; easy','As a particle/adverb, also means simply.','The rule is simple.'],
['adj-schwierig','difficult','','This question is difficult.'],
['adj-wichtig','important','','The difference is important.'],
['adj-richtig','correct; right; appropriate','','Your answer is correct.'],
['adj-falsch','incorrect; false; wrong','','The sentence is incorrect.'],
['adj-moeglich','possible','','Another explanation is possible.'],
['adj-notwendig','necessary','','A precise definition is necessary.'],
['adj-wahr','true','das Wahre = what is true (nominalized adjective).','Is this claim true?'],
['adj-bewusst','conscious; deliberate','sich einer Sache bewusst sein: dative reflexive + genitive.','That was a deliberate decision.'],
['adj-zuverlaessig','reliable; dependable','','The method is reliable.'],
['adj-wesentlich','essential; substantial','','That is an essential difference.'],
['adj-empirisch','empirical: based on observation','','The thesis needs empirical evidence.'],
['adj-begrifflich','conceptual','','We must draw a conceptual distinction.'],
['adv-heute','today','','Today I am studying German.'],
['adv-morgen','tomorrow','der Morgen = the morning; a capitalized noun.','I will come back tomorrow.'],
['adv-gestern','yesterday','','Yesterday I was at home.'],
['adv-jetzt','now','','Now I have time.'],
['adv-hier','here','','I live here.'],
['adv-dort','there','','The station is there.'],
['adv-immer','always','','I always read in the evening.'],
['adv-oft','often','','We often speak German.'],
['adv-manchmal','sometimes','','Sometimes I take the bus.'],
['adv-nie','never','','I never drink coffee.'],
['adv-bald','soon','','The train will arrive soon.'],
['adv-vielleicht','perhaps; maybe','','Perhaps it will rain tomorrow.'],
['adv-deshalb','therefore; that is why','Adverbial connector: occupies a position and requires the verb in second position.','I am tired. That is why I am staying at home.'],
['adv-trotzdem','nevertheless; even so','Adverbial connector with the verb in second position.','It is raining. Even so, we are going for a walk.'],
['adv-bereits','already','','The answer is already known.'],
['adv-allerdings','however; admittedly','Also confirms: certainly. Context determines its meaning.','The idea is good. However, it is expensive.'],
['adv-demnach','consequently; according to that','','Consequently, the explanation is incomplete.'],
['adv-insbesondere','in particular; especially','','I am particularly interested in philosophy of mind.'],
['adv-hingegen','by contrast; on the other hand','','The second theory, by contrast, makes a different prediction.'],
['adv-inwiefern','to what extent; in what sense','','To what extent does the model explain the data?'],
['conj-und','and','Coordinating; does not move the verb.','I read and you write.'],
['conj-oder','or','Coordinating.','Would you like tea or coffee?'],
['conj-aber','but','Coordinating.','I am tired, but I keep reading.'],
['conj-denn','for; because','Causal coordinating conjunction; verb in second position. Another use: interrogative particle.','I am staying here, because I have time.'],
['conj-sondern','but rather','Corrects a preceding negation: nicht X, sondern Y.','That is not an error but an exception.'],
['conj-weil','because','Causal subordinating conjunction: verb at the end in standard written German.','I am learning German because I want to read Kant.'],
['conj-dass','that','Subordinating; verb at the end. Do not confuse with das (article/pronoun).','I know that he is coming.'],
['conj-wenn','if; when (present/future or repeated events)','Subordinating; for a single past event: als.','If I have time, I read.'],
['conj-als','when (a single past event)','Temporal subordinating conjunction; also compares inequality: größer als.','When I was a child, I lived in Chile.'],
['conj-ob','whether; if (indirect question)','Indirect yes/no question; does not express a condition.','I do not know whether he is coming.'],
['conj-obwohl','although; even though','Concessive subordinating conjunction.','Although it is raining, we go outside.'],
['conj-damit','so that; in order that','Purpose subordinating conjunction; may have a different subject. As an adverb: with that.','I explain the rule so that you understand it.'],
['conj-waehrend','while; whereas','Temporal or contrastive subordinating conjunction. As a preposition: genitive.','While you read, I take notes.'],
['conj-sobald','as soon as','Temporal subordinating conjunction.','As soon as I know the answer, I will tell you.'],
['conj-sofern','provided that; insofar as','Conditional/restrictive subordinating conjunction.','The thesis holds provided that the assumptions are correct.'],
['prep-aus','from; out of','Always dative; origin/material.','I am from Chile.'],
['prep-bei','at someone’s home; near; during','Always dative.','I live with my sister.'],
['prep-mit','with','Always dative.','I travel by train.'],
['prep-nach','to; towards; after; according to','Always dative; cities/countries without an article: nach Berlin, nach Chile.','After eating, I read.'],
['prep-seit','since; for (continuing duration)','Always dative; a continuing duration usually takes the present tense.','I have been learning German for a month.'],
['prep-von','of; from; by','Always dative; agent in the passive.','The book is from my friend.'],
['prep-zu','to; towards; at','Always dative; zu dem = zum, zu der = zur.','I am going to the station.'],
['prep-durch','through; by means of','Always accusative.','We walk through the park.'],
['prep-fuer','for; in favour of','Always accusative.','The book is for you.'],
['prep-gegen','against; around (approximate time)','Always accusative.','I am against this proposal.'],
['prep-ohne','without','Always accusative.','I drink coffee without sugar.'],
['prep-um','around; at (time)','Always accusative.','We meet at eight.'],
['prep-in','in; inside; into','Location: dative; spatial destination: accusative. Movement within a location alone does not require accusative.','I go into the kitchen. Now I am in the kitchen.'],
['prep-an','on; at; to (contact/edge)','Location: dative; destination: accusative. A verb’s governed preposition may have a different fixed use.','The picture hangs on the wall.'],
['prep-auf','on; on top of; onto','Location: dative; destination: accusative. warten auf + accusative is a governed verb construction.','I put the book on the table.'],
['prep-ueber','over; above; about','Spatial: dative/accusative; topic: accusative.','We are talking about the book.'],
['prep-unter','under; among','Location: dative; destination: accusative.','The bag is under the table.'],
['prep-vor','in front of; before; ago','Spatial: dative/accusative; temporal: dative.','I arrived a year ago.'],
['prep-hinter','behind','Location: dative; destination: accusative.','The house stands behind the station.'],
['prep-neben','beside; in addition to','Location: dative; destination: accusative.','I am sitting beside my friend.'],
['prep-zwischen','between; among','Location: dative; destination: accusative.','The chair stands between the tables.'],
['prep-wegen','because of; due to','Genitive in standard writing; dative common in speech.','Because of the rain, we are staying at home.'],
['prep-trotz','despite; in spite of','Genitive in standard writing; dative in regional/colloquial use.','Despite the rain, we go for a walk.'],
['pron-ich','I','','I am learning German.'],
['pron-du','you (informal singular)','','I help you.'],
['pron-er','he; masculine referent','','The table is new. It is large.'],
['pron-sie-singular','she; feminine referent','Also sie = they; distinguish by verb and context.','The city is beautiful. It is large.'],
['pron-es','it; neuter referent; impersonal subject','','The book is short. It is good.'],
['pron-wir','we','','We read together.'],
['pron-ihr','you (informal plural)','Also ihr = to her/her/their; distinguish by function.','What are you reading?'],
['pron-sie-plural','they','','The children are playing. They are here.'],
['pron-sie-formal','you (formal singular or plural)','Capitalization required in formal address; plural verb.','Do you speak German?'],
['pron-man','one; people; generic you','Third-person singular verb.','German is spoken here.'],
['pron-jemand','someone','Also appears without an ending in accusative/dative.','Does anyone have a question?'],
['pron-niemand','no one; nobody','','Nobody knows the answer.'],
['pron-sich','oneself (third-person reflexive and formal Sie)','Accusative/dative; ich: mich/mir, du: dich/dir, wir: uns, ihr: euch.','She remembers the book.'],
['pron-wer','who','','To whom are you giving the book?'],
['pron-was','what','For things; preposition + thing: worauf, womit, etc.','What are you reading?'],
['pron-dieser','this; these','Demonstrative determiner; endings mostly like der/die/das, but genitive masculine/neuter dieses.','I like this book.'],
['pron-mein','my; mine','Possessive; functions as a determiner before a noun. Endings follow ein.','That is my book.'],
['pron-jeder','each; every; everyone','Singular; inflects like dieser.','Every sentence has a meaning.'],
['pron-etwas','something; a little','Invariable; etwas Neues = something new.','I would like something to drink.'],
['particle-nicht','not (negation)','Negates a verb, adjective or phrase; kein negates indefinite noun phrases.','I do not understand the sentence.'],
['particle-ja','yes; modal: as you know / as is known','The unstressed modal particle refers to shared knowledge.','You already know that.'],
['particle-doch','yes (contradicting a negation); insistence or reminder','Context-dependent; no single translation.','You are not coming? — Yes, I am!'],
['particle-denn','interest or surprise in questions','Does not mean because in this use; often left untranslated.','What do you mean, then?'],
['particle-mal','softens a request; for a moment','Colloquial form of einmal; often softens imperatives.','Have a look here.'],
['particle-eben','simply; that is how things are','As an adverb also just/just now; here acceptance of a reason.','It is simply difficult.'],
['particle-wohl','probably; I suppose','Marks a conjecture, not certainty.','I suppose he is already at home.'],
['particle-nur','only; just','Focus particle: restricts the element it applies to.','I have only one question.'],
['particle-auch','also; even depending on focus','Additive particle.','I also speak English.'],
['particle-schon','already; reassurance or concession','Temporal adverb: already; as a modal particle, context changes the meaning.','It will work out, I am sure.'],
['particle-bitte','please; you are welcome; go ahead depending on context','','A water, please.'],
['particle-kein','no; not a; not any','Negative determiner grouped here with negation; singular like ein, plural like the possessive determiners.','I do not have a car.'],
['noun-lehrer','teacher (male)','','The teacher explains the rule.'],
['noun-lehrerin','teacher (female)','','I ask the teacher.'],
['noun-hund','dog','','The dog is lying beside the table.'],
['noun-kurs','course','','I attend a German course.'],
['noun-park','park','','We walk through the park.'],
['noun-tuer','door','','The door is open.'],
['noun-wetter','weather','For climate as a long-term pattern: das Klima.','The weather is nice today.'],
['verb-anfangen','to begin; to start','Separable; mit + dative or zu + infinitive.','The course begins at nine.'],
['verb-liegen','to lie; to be located','State/location; Perfekt with sein also occurs regionally in the south.','The book is on the table.'],
['verb-stellen','to put; to place upright','Accusative object; spatial destination: two-way preposition + accusative.','I put the chair beside the table.'],
['noun-these','thesis; proposition being defended','','This thesis needs a justification.'],
['noun-daten','data','Normally plural in science/computing; das Datum usually means date.','The data contradict the theory.'],
['noun-forscher','researcher (male)','','The researcher examines the data.'],
['noun-forscherin','researcher (female)','','The researcher explains the result.'],
['noun-behauptung','claim; assertion','','This claim has not been proved.'],
['noun-bedingung','condition','','Under what conditions does the theory hold?'],
['noun-reiz','stimulus; appeal depending on context','In cognitive science: stimulus; do not always translate as appeal.','The person reacts to a visual stimulus.'],
['noun-aufmerksamkeit','attention','die Aufmerksamkeiten = thoughtful gestures or small gifts, a different meaning.','The task requires attention.'],
['noun-erinnerung','memory; recollection; reminder','','My memory was wrong.'],
['noun-verarbeitung','processing; treatment','Singular usual for processing as an activity.','Processing the information takes time.'],
['noun-theorie','theory','','Two theories explain the same data.'],
['noun-erklaerung','explanation; declaration depending on context','','The explanation is incomplete.'],
['noun-verhalten','behaviour','','The model describes human behaviour.'],
['verb-pruefen','to examine; to check; to test','Accusative object; prüfen, ob … = to check whether…','We check whether the explanation is correct.'],
['verb-versuchen','to try; to attempt','Inseparable; zu + infinitive for the attempted action.','I try to understand the text.'],
['verb-planen','to plan; to intend','Accusative object; also zu + infinitive.','We are planning a trip.'],
['verb-gelten','to hold; to apply; to be considered','gelten für + accusative = to apply to; gelten als = to be considered.','This rule applies to all sentences.'],
['verb-vorhersagen','to predict','Separable; accusative object.','The model predicts the answer.'],
['verb-verursachen','to cause','Inseparable; accusative object.','The error causes a problem.'],
['verb-bemerken','to notice; to observe','Inseparable; accusative object or dass clause.','I notice that the words are easier.'],
['adj-muede','tired','','I am tired.'],
['adj-klug','intelligent; sensible','Comparative: klüger; superlative: am klügsten.','That is a sensible decision.'],
['adj-interessant','interesting','','The book is interesting.'],
['adj-klar','clear','','The explanation is clear.'],
['adj-unvollstaendig','incomplete','','The theory is incomplete.'],
['adj-nuetzlich','useful','','This example is useful.'],
['noun-taetigkeit','activity; occupation','','Thinking is an activity.'],
['verb-studieren','to study at university; to pursue an academic subject','No ge- because it ends in -ieren. For learning/practising a language in general: lernen.','She studies philosophy at university.']
  ];
  const metadata = s => s && s.replaceAll('masculino','masculine').replaceAll('femenino','feminine').replaceAll('neutro','neuter').replaceAll('sin plural habitual en este sentido','no usual plural in this sense').replaceAll('sin plural habitual','no usual plural').replaceAll('porciones/tipos','servings/kinds').replaceAll('países','countries').replaceAll('espíritus','spirits').replaceAll('contextos especiales','special contexts').replaceAll('procesos/tipos','processes/kinds');
  for (const [id,en,noteEn,exampleEn] of vocabRows) {
    const source = data.vocabulary.find(x => x.id === id);
    if (!source) throw new Error('Unknown vocabulary ID: '+id);
    english.vocabulary[id] = { en, ...(noteEn ? {noteEn} : {}), exampleEn,
      ...(source.gender ? {genderEn:metadata(source.gender)} : {}),
      ...(source.plural ? {pluralEn:metadata(source.plural)} : {}) };
  }
  function G(id,title,deTitle,summary,columns,rowEdits,notes,examples) {
    const source = data.grammar.find(x => x.id === id);
    if (!source) throw new Error('Unknown grammar ID: '+id);
    const rows = source.rows.map(row => row.slice());
    for (const [r, edits] of Object.entries(rowEdits)) for (const [c,value] of Object.entries(edits)) rows[Number(r)][Number(c)] = value;
    english.grammar[id] = {title,deTitle,summary,columns,rows,notes,examples};
  }
G('cases','The four cases','Kasus — grammatical case','Case marks function and government; it does not automatically correspond to an English preposition.',['Case','Guiding question','Typical function','Example'],{
0:{0:'Nominativ — nominative',1:'wer? / was? — who? / what?',2:'Subject; predicate with sein/werden/bleiben'},1:{0:'Akkusativ — accusative',1:'wen? / was? — whom? / what?',2:'Object of many verbs; governed by prepositions'},2:{0:'Dativ — dative',1:'wem? — to whom?',2:'Recipient; object of certain verbs and prepositions'},3:{0:'Genitiv — genitive',1:'wessen? — whose?',2:'Relation between nouns; certain verbs and prepositions'}},[
'Genus = gender: Maskulinum (masculine), Femininum (feminine), Neutrum (neuter). Numerus = number: Singular (singular), Plural (plural).','Nominative and accusative article forms coincide in the feminine, neuter and plural; they are still different cases.','Learn government with each word: helfen + Dativ, sehen + Akkusativ; it cannot be inferred from translation.'
],['The teacher gives the child the book. Subject: der Lehrer; recipient: dem Kind; object: das Buch.','The researcher’s idea is new.']);
G('articles','Articles: definite, indefinite and negative','Artikel — article','Complete paradigms. ∅ means no form; ein has no plural.',['Type / case','Masculine','Feminine','Neuter','Plural'],Object.fromEntries(Array.from({length:12},(_,i)=>[i,{0:["Definite","Indefinite","Negative"][Math.floor(i/4)]+' · '+['Nom','Akk','Dat','Gen'][i%4]}])),[
'Nom/Akk/Dat/Gen abbreviate nominative/accusative/dative/genitive.','kein = no / not a: negates noun phrases with ein or no article; nicht usually negates phrases with a definite article or possessive.','Dative plural: den Kindern; add -n to the noun unless its plural already ends in -n or -s. Masculine/neuter singular genitive: des Mannes, des Buches.','Common contractions: an dem → am; in dem → im; bei dem → beim; von dem → vom; zu dem → zum; zu der → zur; an das → ans; in das → ins. An emphasized article may remain separate.','An unmodified profession after sein/werden takes no article: Ich bin Lehrer. When modified or individualized: Er ist ein guter Lehrer.'
],['I have a dog, but no cat.','The books are on the table.']);
G('personal-pronouns','Personal pronouns: all cases','Personalpronomen — personal pronoun','Choose object forms by the required case, not by a translation’s gender.',['Person / meaning','Nom','Akk','Dat','Gen (formal, uncommon)'],{
0:{0:'I'},1:{0:'you (informal singular)'},2:{0:'he / masculine referent'},3:{0:'she / feminine referent'},4:{0:'it / neuter referent'},5:{0:'we'},6:{0:'you / informal plural'},7:{0:'they'},8:{0:'you, formal address'}},[
'Formal Sie/Ihnen/Ihrer are capitalized and take a third-person plural verb.','Personal genitives occur with few verbs and in elevated registers: Wir gedenken ihrer = We remember her/them respectfully. They do not replace possessive determiners.','es may refer to a neuter noun or be impersonal: Es regnet = It is raining. man = one / generic you; third-person singular verb; objects: einen (Akk), einem (Dat).'
],['I see her and help her.','Can you help me? (formal singular or plural)']);
G('possessives','Possessives: determiner and pronoun','Possessivartikel / Possessivpronomen — possessive determiner / pronoun','The stem identifies the possessor; the ending agrees with what is possessed. Complete example with mein- (my/mine).',['Use / case','Masculine','Feminine','Neuter','Plural'],Object.fromEntries(Array.from({length:8},(_,i)=>[i,{0:(i<4?'With noun':'Without noun')+' · '+['Nom','Akk','Dat','Gen'][i%4]}])),[
'Stems: ich → mein- (my); du → dein- (your); er/es → sein- (his/its); singular sie → ihr- (her); wir → unser- (our); ihr → euer- (your, plural); plural sie → ihr- (their); Sie → Ihr- (your, formal).','euer normally drops its second e before an ending: eure, euren, eurem, eurer, eures. unser permits reduced forms: unsere / unsre.','sein or ihr depends on the possessor’s gender; mein/meine depends on the gender and number of the thing possessed.','After possessive determiners, the adjective takes mixed declension: mein guter Freund; mit meinem guten Freund.'
],['Her/their/your sister (depending on context) reads his book.','Is that your book? — Yes, it is mine.']);
G('present','Present tense: regular verbs and auxiliaries','Präsens — present tense','Verb stem + ending. The present can also express future time when context supplies the time reference.',['Person','lernen — to learn','sein — to be','haben — to have','werden — to become / auxiliary'],{},[
'Regular endings: -e, -st, -t, -en, -t, -en. Stems in -d/-t and certain consonant clusters: arbeiten → du arbeitest, er arbeitet, ihr arbeitet.','After s/ß/z/x, du normally takes -t: heißen → du heißt; tanzen → du tanzt.','Strong changes only in du and er/sie/es: lesen → liest/liest; geben → gibst/gibt; nehmen → nimmst/nimmt; fahren → fährst/fährt; laufen → läufst/läuft. Other persons retain the infinitive stem.','wissen: ich weiß, du weißt, er weiß, wir wissen, ihr wisst, sie wissen.'
],['I am learning German. Tomorrow I am travelling to Berlin.','You read and I listen attentively.']);
G('irregular-verbs','Common verbs: principal forms','Stammformen — principal forms','Memorize infinitive + third-person present + preterite + participle and auxiliary. h = haben; s = sein.',['Infinitive · English','er/sie/es · present','Präteritum · ich/er','Partizip II · auxiliary'],Object.fromEntries([
['sein','to be'],['haben','to have'],['werden','to become'],['gehen','to go'],['kommen','to come'],['fahren','to travel/drive'],['bleiben','to stay'],['sehen','to see'],['lesen','to read'],['sprechen','to speak'],['geben','to give'],['nehmen','to take'],['essen','to eat'],['finden','to find'],['denken','to think'],['bringen','to bring'],['wissen','to know a fact'],['kennen','to be familiar with'],['schreiben','to write'],['verstehen','to understand'],['helfen','to help'],['schlafen','to sleep'],['stehen','to stand'],['liegen','to lie/be located']
].map((x,i)=>[i,{0:x[0]+' · '+x[1],...(i===5?{3:'gefahren · s/h depending on use'}:{}),...(i===22?{3:'gestanden · h; regional s'}:{}),...(i===23?{3:'gelegen · h; regional s'}:{})}])),[
'stark = strong: usually changes its vowel and takes -en in the participle; schwach = weak: -te and -(e)t; gemischt = mixed: stem change + -te / -t.','Intransitive travel with fahren: ist gefahren. Transitive: hat das Auto gefahren (has driven the car).','The passive auxiliary werden takes worden in the passive perfect: ist gelesen worden. As the verb “to become”: geworden.','In Austria, Switzerland and parts of southern Germany, stehen/liegen/sitzen often form the perfect with sein. This reference uses haben as the main teaching variant.'
],['She has read the text and then left.','I know the answer, but I do not know the author.']);
G('modal-verbs','Modal verbs: complete paradigm','Modalverben — modal verbs','Conjugated modal + infinitive without zu at the end. The stem changes in the singular; ich and er/sie/es usually coincide.',['Person / tense','können · can/be able to','müssen · must/have to','dürfen · be allowed to','sollen · be supposed to','wollen · want to','mögen · like'],{
0:{0:'ich · present'},1:{0:'du · present'},2:{0:'er/sie/es · present'},3:{0:'wir · present'},4:{0:'ihr · present'},5:{0:'sie/Sie · present'},6:{0:'ich/er · preterite'},7:{0:'Participle, without another infinitive'}},[
'möchte (would like) is the Konjunktiv II of mögen: ich möchte, du möchtest, er möchte, wir möchten, ihr möchtet, sie möchten. For a past intention: wollte.','nicht müssen = not to have to; nicht dürfen = not to be allowed to.','Perfect with another infinitive: hat lesen können (has been able to read), rather than hat lesen gekonnt in the standard teaching pattern.','The preterite adds to konnte/musste/etc.: ∅, -st, ∅, -n, -t, -n; du konntest, wir konnten.','Advanced epistemic uses: Er muss zu Hause sein = He must be at home (inference); Er soll krank sein = He is said to be ill.'
],['I do not have to work, but I am not allowed to smoke here.','He can explain the text.']);
G('word-order','Word order: verb second and verbal bracket','Wortstellung / Satzklammer — word order / verbal bracket','In main declarative clauses, the finite verb occupies the second constituent position, not the second word.',['Structure','Pattern','Example','Meaning'],{
0:{0:'Hauptsatz — main clause',1:'One constituent + finite verb + remainder',3:'Today Anna reads a book.'},1:{0:'Satzklammer — verbal bracket',1:'Finite verb + middle + final verbal element',3:'Anna has read a book today.'},2:{0:'Trennbares Verb — separable verb',1:'Conjugated stem + middle + prefix',3:'Anna gets up early.'},3:{1:'Finite modal + middle + infinitive',3:'Anna wants to read the book.'},4:{0:'Yes/no question',1:'Finite verb + subject + remainder',3:'Does Anna read the book?'},5:{0:'Nebensatz — subordinate clause',1:'Introducer + subject + remainder + final verb',3:'because Anna reads the book'},6:{0:'Initial subordinate clause',1:'Whole subordinate clause + main verb + subject',3:'Because it is raining, Anna stays at home.'}},[
'Vorfeld = initial field; Mittelfeld = middle field; Nachfeld = final field. The initial field permits one complete constituent, including a subordinate clause.','With two neutral noun objects, dative usually precedes accusative: Ich gebe dem Kind das Buch. With two pronouns, accusative usually precedes dative: Ich gebe es ihm. An unstressed pronoun usually precedes a noun object: Ich gebe ihm das Buch / Ich gebe es dem Kind.','TeKaMoLo = temporal, causal, modal, local: a guide to ordering adverbials, not a rigid law; focus and context may change it.','Common separable prefixes: ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, weg-, zu-, zurück-. Inseparable: be-, emp-, ent-, er-, ge-, miss-, ver-, zer-. Some prefixes change behaviour according to stress and meaning.'
],['The text, I will read tomorrow.','Yesterday I gave him the book.']);
G('negation','Negation and scope','Negation — negation','kein negates indefinite noun phrases; nicht negates other constituents or the predicate.',['Form','Meaning / function','Example','Translation'],{
0:{0:'kein + noun',1:'no / not a',3:'I do not have a car.'},1:{0:'nicht + adjective',1:'not',3:'That is not difficult.'},2:{0:'nicht + contrasted constituent',1:'not X (but Y)',3:'Anna is not coming; Paul is.'},3:{0:'nicht before a final verbal element',1:'Negation of the predicate',3:'I cannot come today.'},4:{0:'nicht, without a final verbal element',1:'Late position, depending on structure',3:'I do not know him.'},5:{1:'never',3:'He never arrives late.'},6:{1:'nobody / nothing',3:'Nobody says anything. I see nothing.'},7:{1:'not yet / no longer',3:'I am not finished yet.'},8:{1:'not any yet / no … anymore',3:'I have no time left.'}},[
'Standard German does not require Spanish-style double negation: Ich sehe nichts = I see nothing.','nicht has no single position: first identify what is being negated. It often precedes predicative complements, prepositional phrases tied to the verb and final verbal elements.','doch gives an affirmative answer to a negative question: Kommst du nicht? — Doch! = Are you not coming? — Yes, I am!','sondern = but rather, after corrective negation; aber = but.'
],['I am not reading this book but that one.','You do not have to know that.']);
G('accusative','Accusative: objects and extent','Akkusativ — accusative','The accusative is required by a verb, a preposition or an adverbial expression of duration/extent.',['Use','Pattern / form','Example','Translation'],{
0:{0:'Verb object',3:'I need a pen.'},1:{0:'Masculine',3:'I see the teacher / I see him.'},2:{0:'Other genders and plural',3:'I read the book.'},3:{0:'Duration without a preposition',3:'I am staying for a week.'},4:{0:'Extent / distance',3:'We walk one kilometre.'},5:{0:'Preposition',3:'That is for my brother.'}},[
'German has no obligatory equivalent of the Spanish personal a: Ich sehe Anna.','A verb’s object is not always accusative: helfen, danken, gefallen require the dative.','Two accusatives occur in some patterns: jemanden etwas fragen (ask someone something); jemanden einen Freund nennen (call someone a friend).'
],['I ask the teacher something.','She is looking for her key.']);
G('dative','Dative: government and recipient','Dativ — dative','It does not simply mean “indirect object”: many verbs and prepositions require it.',['Use','Government / form','Example','Translation'],{
0:{0:'Recipient',3:'I show the child the picture.'},1:{0:'Verb with dative',3:'I help my sister.'},2:{0:'Experience / evaluation',3:'I like the book.'},3:{0:'Article forms',3:'with the man / the woman'},4:{0:'Noun plural',1:'-n unless the plural ends in -n or -s',3:'with the children / the cars'},5:{0:'Preposition',3:'I have been learning German for a year.'}},[
'Pronouns: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen.','fragen usually takes an accusative person; antworten takes dative: Ich frage ihn; ich antworte ihm.','Es ist mir kalt / Mir ist kalt = I feel cold; Ich bin kalt describes being cold to the touch or emotionally cold.','Weak masculine nouns are also marked: dem Studenten; see “Noun declension”.'
],['That belongs to me.','I give it to her.']);
G('genitive','Genitive: relations and inflection','Genitiv — genitive','Productive in written language; expresses relationships as well as possession.',['Use / class','Form','Example','Translation'],{
0:{0:'Strong masculine',3:'the colour of the table'},1:{0:'Strong neuter',3:'the end of the book'},2:{0:'Feminine',1:'der / einer; noun unmarked',3:'the apartment’s door'},3:{0:'Plural',1:'der; noun without a genitive ending',3:'the children’s ideas'},4:{0:'Weak masculine',3:'the student’s question'},5:{0:'Mixed',3:'the meaning of the name'},6:{0:'Proper name',1:'name + -s, before the noun',3:'Anna’s book'},7:{0:'Name ending in s/ß/x/z',1:'apostrophe, without added s',3:'Max’s book'},8:{0:'Formal preposition',3:'because of the rain'},9:{0:'Formal verb',3:'We commemorate the victims.'}},[
'The choice of -s/-es depends on the word: des Autos; des Kindes. After sibilants, -es is common/necessary: des Hauses. Learn the genitive with the noun when uncertain.','von + dative replaces many relations in speech but can be ambiguous: das Buch von Anna.','Personal genitives meiner/deiner/etc. are rare; for “my book” use mein Buch, not meiner Buch.','dessen/deren = whose/of whom: identify the possessor; following words take their own case: mit deren kleinen Kindern.'
],['The limits of language are difficult to determine.','We are staying here because of the bad weather.']);
G('prepositions','Prepositions and government','Präpositionen / Rektion — prepositions / government','Learn each preposition with its contextual meaning and case. One English equivalent can correspond to several constructions.',['Government','Prepositions · meaning','Example','Translation'],{
0:{1:'durch · through; für · for; gegen · against/around (time); ohne · without; um · around/at (time); wider · against (formal)',3:'without a plan; at eight'},1:{1:'aus · from/out of; außer · except; bei · at someone’s home/near/at an organization; mit · with; nach · towards/after; seit · since/for; von · of/from; zu · to/towards',3:'by train; at my mother’s home'},2:{1:'gegenüber · opposite/in relation to (before or after noun); ab · from/onwards',3:'opposite the station; from the first day'},3:{0:'Genitive (formal writing)',1:'wegen · because of; trotz · despite; während · during; (an)statt · instead of; innerhalb · inside; außerhalb · outside',3:'despite the rain; during the day'},4:{1:'dank · thanks to; laut · according to; formal genitive preferred in many constructions; dative also standard',3:'thanks to your advice'},5:{0:'Accusative, usually without an article',1:'bis · until/as far as; before another preposition, the inner one governs case',3:'until Friday; as far as the station'},6:{0:'Accusative when placed after the noun',1:'entlang · along; before the noun, usually genitive, also dative',3:'along the river'},7:{1:'an, auf, hinter, in, neben, über, unter, vor, zwischen · see next table',3:'in the room / into the room'}},[
'wegen/trotz/während/(an)statt: learn the genitive for formal writing; dative exists in colloquial/regional registers and some contexts with no visible genitive marking. This is not presented as a change in meaning.','ab may take accusative in temporal expressions without an article: ab nächsten Montag.','Destination: nach Chile/Berlin, but in die Schweiz / in die USA (countries with articles), zu Anna / zum Arzt, nach Hause. Location: in Chile, in der Schweiz, bei Anna, zu Hause.','Pronominal reference to things: daran, dafür, damit; questions: woran, wofür, womit. With people: an ihn, für wen?, mit ihr. Add r before a vowel: da + auf → darauf.','Do not infer case from “location/direction” when a verb governs its preposition: warten auf + Akk, teilnehmen an + Dat.'
],['I travel to Berlin by train.','What are you waiting for? — The bus.']);
G('two-way-prepositions','The nine two-way prepositions','Wechselpräpositionen — two-way prepositions','Spatial use: dative locates within a relation; accusative expresses the destination of that relation. Movement alone does not determine case; accusative can also mark a path crossing a space.',['Preposition · English','Dative · where?','Accusative · where to?'],{
0:{0:'an · beside/in contact with',1:'an der Wand · on the wall',2:'an die Wand · towards/onto the wall'},1:{0:'auf · on',1:'auf dem Tisch · on the table',2:'auf den Tisch · onto the table’s surface'},2:{0:'hinter · behind',1:'hinter dem Haus · behind the house',2:'hinter das Haus · to a place behind the house'},3:{0:'in · in/inside',1:'in der Stadt · in the city',2:'in die Stadt · into the city'},4:{0:'neben · beside',1:'neben dem Bett · beside the bed',2:'neben das Bett · to a place beside the bed'},5:{0:'über · above/over',1:'über dem Tisch · above the table',2:'über den Tisch · passing over the table'},6:{0:'unter · under/among',1:'unter dem Tisch · under the table',2:'unter den Tisch · to a place under the table'},7:{0:'vor · in front of/before',1:'vor dem Haus · in front of the house',2:'vor das Haus · to a place in front of the house'},8:{0:'zwischen · between',1:'zwischen den Häusern · between the houses',2:'zwischen die Häuser · into the space between the houses'}},[
'Key contrast: Ich laufe im Park (I run within the park, Dat) / Ich laufe in den Park (I run into the park, Akk).','Useful pairs: liegen/stehen/sitzen + dative location; legen/stellen/setzen + accusative destination. hängen permits both patterns depending on use.','Temporal uses: am Montag, im Oktober, vor einer Stunde (Dat); über das Wochenende (Akk). Each construction has its own government.','Abstract or verb-governed use: to think of = denken an + Akk; to participate in = teilnehmen an + Dat. Memorize the whole construction.'
],['I put the book on the table. It is on the table.','The children are running in the garden.']);
G('perfect','Perfect tense and participle','Perfekt / Partizip II — perfect / past participle','Conjugated haben or sein + participle at the end; commonly used to narrate the past in conversation.',['Pattern','Formation','Example','Translation'],{
0:{0:'Weak',1:'ge- + stem + -(e)t',3:'to learn → learned; to work → worked'},1:{0:'Strong',1:'ge- + stem (often changed) + -en',3:'to read → read; to go → gone'},2:{0:'Mixed',1:'ge- + changed stem + -t',3:'to think → thought; to bring → brought'},3:{0:'Separable prefix',1:'prefix + ge- + stem + ending',3:'to get up → got up'},4:{0:'Inseparable prefix',1:'without ge-',3:'to understand → understood; to visit → visited'},5:{0:'Verb in -ieren',1:'without ge-; -iert',3:'to study → studied'},6:{1:'many verbs; transitives and reflexives',3:'I have read / washed myself.'},7:{1:'intransitive travel/change of state; sein/bleiben/werden',3:'She has come / fallen asleep.'},8:{0:'Modal + infinitive',1:'haben + infinitive + modal infinitive',3:'I have had to go.'}},[
'Do not choose haben/sein by an English translation. Learn the auxiliary with the vocabulary item.','Movement with an object may take haben: Ich habe das Auto gefahren; activity without change of location may vary by verb/context.','With sein: ist gewesen (has been), ist geblieben (has stayed), ist geworden (has become).','Normal subordinate clause: weil sie den Text gelesen hat. With a modal and double infinitive: weil sie den Text hat lesen müssen (the auxiliary precedes the infinitive group).','German perfect and preterite do not exactly match the English present perfect/simple past distinction; German usage also depends on register and region.'
],['I have read the book and gone home.','She has not been able to come.']);
G('past','Preterite and pluperfect','Präteritum / Plusquamperfekt — simple past / past perfect','Präteritum predominates in written narrative; sein/haben/modals are also common in conversation.',['Person','machen · to do','gehen · to go','sein · to be','haben · to have','werden · to become'],{},[
'Weak: stem + -(e)te + ∅/-st/∅/-n/-t/-n. Strong: past stem + ∅/-st/∅/-en/-t/-en; some consonant combinations permit/require e: du fandest.','Plusquamperfekt: hatte/war + Partizip II. Locates an event before another past event: Als ich ankam, war sie schon gegangen.','arbeitete, dachte, brachte are preterite forms; dachte/ brachte are mixed, not a productive pattern for every verb.','In narrative, do not alternate tenses simply to imitate English or Spanish tense choices; observe the temporal frame and register of the German text.'
],['I was tired and had no time.','When we arrived, the film had already begun.']);
G('adjective-endings','Adjectives: all three complete declensions','Adjektivdeklination — adjective declension','Before a noun, the adjective marks case, gender and number. These tables give endings; good = gut-.',['Pattern / case','Masculine','Feminine','Neuter','Plural'],Object.fromEntries(Array.from({length:12},(_,i)=>[i,{0:['Strong','Weak','Mixed'][Math.floor(i/4)]+' · '+['Nom','Akk','Dat','Gen'][i%4]}])),[
'stark (strong): without a fully marking determiner: guter Wein, gutes Brot, mit gutem Wein. Strong masculine/neuter genitive takes -en: guten Weines, guten Brotes.','schwach (weak): after der/die/das, dies-, jen-, etc.: der gute Wein, das gute Brot, die guten Bücher.','gemischt (mixed): after ein-, kein- and possessives: ein guter Wein, ein gutes Brot, meine guten Bücher. ein has no plural; mixed plural here means keine/meine/etc.','Predicative and adverbial use has no ending: Der Wein ist gut; sie spricht gut. The comparative still has its -er: sie spricht besser.','Several coordinated adjectives usually share an ending: mit gutem deutschem Wein. Variations after certain quantifiers require checking the construction.','Nominalized adjectives retain declension and are capitalized: ein Deutscher, der Deutsche, mit einem Deutschen; etwas Neues, nichts Wichtiges.'
],['I read a good book and talk to a good friend.','Good ideas need clear concepts.']);
G('subordinate','Subordinate clauses and their connectors','Nebensatz / Subjunktion — subordinate clause / subordinating conjunction','In an introduced subordinate clause, the finite verb normally goes at the end. Separate main and subordinate clauses with a comma.',['Introducer · English','Use','German example','Translation'],{
0:{0:'dass · that',1:'content of a statement',3:'I know that he is coming.'},1:{0:'ob · whether/if',1:'indirect yes/no question',3:'I do not know whether he is coming.'},2:{0:'weil · because',1:'cause',3:'I am staying because it is raining.'},3:{0:'da · since/as',1:'cause presented as known',3:'As it is raining, we are staying.'},4:{0:'wenn · if/when',1:'condition; repeated or future time',3:'If/when I have time, I read.'},5:{0:'als · when',1:'single past temporal event',3:'When I was little, I read a lot.'},6:{0:'obwohl · although',1:'factual concession',3:'He is coming although he is tired.'},7:{0:'bevor / nachdem · before / after',1:'temporal sequence',3:'After she had eaten, she left.'},8:{0:'während / seit(dem) · while / since',1:'simultaneity / starting point',3:'While she reads, I listen to music.'},9:{0:'bis / sobald · until / as soon as',1:'limit / immediate onset',3:'Wait until I am finished.'},10:{0:'damit / sodass · so that / with the result that',1:'purpose / consequence',3:'I explain it so that you understand it.'}},[
'Verbal bracket principle: ..., weil sie das Buch lesen will; ..., weil sie das Buch gelesen hat.','Important exception with the modal Ersatzinfinitiv (substitute infinitive): ..., weil sie das Buch hat lesen müssen.','An initial subordinate clause occupies the main clause’s initial field: Wenn er kommt, gehen wir.','dass (that, conjunction) ≠ das (the/that, article or pronoun).','An indirect W-question retains final verb position: Ich weiß, wo er wohnt (I know where he lives).'
],['Although the text is short, it is difficult.','I wonder why she has left.']);
G('relative','Relatives: paradigm and independent case','Relativpronomen / Relativsatz — relative pronoun / clause','Gender and number come from the antecedent; case depends on the pronoun’s function inside the relative clause.',['Case','Masculine','Feminine','Neuter','Plural'],{},[
'Commas before and after an embedded relative clause; finite verb at the end: Der Mann, den ich sehe, ist hier.','A preposition precedes the relative pronoun: der Mann, mit dem ich spreche (the man with whom I speak).','dessen/deren = whose/of whom: der Autor, dessen Buch ich lese. The possessed noun does not determine dessen/deren; the antecedent does.','After alles, etwas, nichts, das and a nominalized neuter superlative, was is common: alles, was ich weiß (everything I know); das Beste, was ich kenne.','wo refers to places; it does not replace the personal relative pronoun in the standard taught here. Referring to a preceding sentence: Sie ging, was mich überraschte (She left, which surprised me).','welcher/welche/welches is a more formal alternative in Nom/Akk/Dat, with endings like dieser; for possession, use dessen/deren.'
],['The woman whom I help is a doctor.','These are the children whose mother works here.']);
G('passive','Passive: process, state and tenses','Vorgangspassiv / Zustandspassiv — process passive / state passive','werden + participle focuses on the process; sein + participle usually expresses its resulting state.',['Form','Pattern','Example','Translation'],{
0:{0:'Present process passive',3:'The book is being read.'},1:{0:'Preterite process passive',3:'The book was read.'},2:{0:'Perfect process passive',3:'The book has been read.'},3:{0:'Pluperfect process passive',3:'The book had been read.'},4:{0:'Future process passive',3:'The book will be read.'},5:{0:'Modal + passive',3:'The book must be read.'},6:{0:'Present state',3:'The door is closed.'},7:{0:'Past state',3:'The door was closed.'},8:{0:'Impersonal',1:'no new subject; singular verb',3:'People work here / Work is being done here.'}},[
'Active accusative object → passive nominative subject: Man liest den Text → Der Text wird gelesen. A dative object keeps its case: Dem Kind wird geholfen.','Usual agent: von + dative; means/cause may take durch + accusative. Their distinction depends on context, not a fixed equivalence.','worden is the form of passive auxiliary werden; geworden is the participle of “to become”: Sie ist Ärztin geworden (She has become a doctor).','Initial es in an impersonal passive is a positional placeholder; it disappears when another element comes first: Es wird hier gearbeitet → Hier wird gearbeitet.','Not every transitive verb permits every passive construction; sein (be), possessive haben (have) and reflexive verbs have restrictions.'
],['The text was translated by a student.','The patient is being helped.']);
G('konjunktiv2','Hypotheses, politeness and counterfactuals','Konjunktiv II — hypothetical/counterfactual mood','It does not itself mark past time. Common forms: wäre (would be), hätte (would have), könnte (could); alternative würde + infinitive.',['Person','sein','haben','werden + infinitive','können','müssen'],{},[
'Formed from the preterite stem: strong verbs often take an Umlaut (a→ä, o→ö, u→ü) + -e/-est/-e/-en/-et/-en: kam → käme.','Many weak forms coincide with the preterite: machte. würde machen avoids ambiguity and is common; sein/haben/modals often retain simple forms.','Other modals: dürfte (might/be allowed to), sollte (should), wollte (would want), möchte (would like). sollte/wollte take no Umlaut.','Past counterfactual: hätte/wäre + Partizip II: Wenn ich Zeit gehabt hätte, wäre ich gekommen. With a modal and another infinitive: hätte kommen können.','A German hypothetical condition may contain würde: Wenn ich mehr Zeit hätte / Wenn ich mehr arbeiten würde... Do not mechanically transfer English or Spanish restrictions on conditional forms in if-clauses.'
],['Could you explain it, please?','If I had more time, I would read more.','I would have come if I had had time.']);
G('konjunktiv1','Reported speech','Konjunktiv I — reported-speech mood','Common in journalism and formal exposition. Attributes a statement to a source, without requiring it to be false.',['Person','sein','haben','werden','lernen · regular example'],{},[
'Present stem + -e/-est/-e/-en/-et/-en; sein is exceptional. It does not express a temporal contrast equivalent to the Spanish subjunctive.','The third-person singular is often distinctive: er sagt → er sage; er hat → er habe. Many other forms coincide with the indicative.','When a form coincides with the indicative, Konjunktiv II may be used; if that is also ambiguous, würde + infinitive. These substitutes do not necessarily signal doubt.','Reported past: Er sagt, er habe den Text gelesen / er sei gegangen. Reported future: Er sagt, er werde kommen.','There is no obligatory English-style tense backshift: Er sagte, er sei krank = He said he was ill (simultaneous with saying it).','Also in formulas: Es sei angenommen, dass... = Let it be assumed that...'
],['The author states that the theory is incomplete.','He said he had understood the question.']);
G('connectors','Connectors: meaning and syntax','Konnektoren — connectors','Distinguish coordination, subordination and connecting adverbs: the same logical relation can use different word orders.',['Class','Connector · English','Order','Example'],{
0:{0:'Coordination',1:'und · and; oder · or; aber · but; sondern · but rather; denn · for/because',2:'Do not occupy the initial field; each main clause retains V2'},1:{0:'Subordination',1:'weil/da · because/since; obwohl · although; wenn · if/when; dass · that',2:'Finite verb at the end'},2:{0:'Connecting adverb',1:'deshalb/deswegen/daher · therefore; trotzdem/dennoch · nevertheless',2:'Occupies a constituent position; when first, followed by the verb'},3:{0:'Addition',1:'außerdem · in addition; zudem · moreover; auch · also',2:'Adverb, position depending on focus'},4:{0:'Contrast',1:'jedoch/allerdings · however; dagegen · by contrast',2:'Adverb'},5:{0:'Sequence',1:'zuerst · first; dann · then; danach · afterwards; schließlich · finally',2:'Adverb'},6:{0:'Paired',1:'entweder ... oder · either ... or; weder ... noch · neither ... nor',2:'Coordinates parallel elements'},7:{0:'Paired',1:'sowohl ... als auch · both ... and; nicht nur ... sondern auch · not only ... but also',2:'Coordinates parallel elements'},8:{0:'Proportional',1:'je ... desto/umso · the ... the ...',2:'je: final verb; desto: comparative + V2'}},[
'denn gives the cause; deshalb introduces the result. Ich bin müde, denn ich habe gearbeitet / Ich habe gearbeitet, deshalb bin ich müde.','aber/sondern do not themselves cause inversion: ..., aber ich bleibe. trotzdem does occupy the initial field: Trotzdem bleibe ich.','Use syntactic category as well as translation to construct the sentence.','weil with V2 occurs in some conversation; the teaching model for standard writing uses final verb position.'
],['The text is difficult; nevertheless I read it.','The more precisely we ask, the clearer the problem becomes.']);
G('comparative','Comparison and superlative','Komparation — adjective comparison','Comparative in -er; superlative in -(e)st-. Attributive forms additionally take a declension ending.',['Positive · English','Comparative','Adverbial/predicative superlative','Attributive example'],Object.fromEntries([
['klein','small'],['schnell','fast'],['alt','old'],['groß','large'],['gut','good'],['viel','much'],['gern','gladly'],['hoch','high'],['nah','near'],['dunkel','dark']
].map((x,i)=>[i,{0:x[0]+' · '+x[1],...(i===6?{3:'— (adverb)'}:{})}])),[
'Inequality: größer als = larger than. Equality: so groß wie = as large as.','Several monosyllables take an Umlaut; learn each word. Not all do: schnell → schneller.','Adverbial/predicative: besser, am besten. Attributive: ein besserer Text, der beste Text.','The ending -(e)st depends on the stem: neu → am neuesten; heiß → am heißesten. groß → am größten.','mehr/weniger (more/less) are invariable: mehr Zeit, weniger Bücher. Do not form mehre.'
],['This text is shorter than that one, but just as difficult.','I prefer reading at home.']);
G('infinitive','Infinitives and purpose','Infinitiv / zu-Infinitiv — infinitive / zu-infinitive','The infinitive retains its verb’s government. The construction determines whether zu appears.',['Construction','Pattern','Example','Translation'],{
0:{1:'infinitive without zu',3:'I want to learn.'},1:{1:'infinitive without zu, with an object depending on use',3:'I hear her singing.'},2:{0:'Many verbs/adjectives',1:'zu + infinitive',3:'I try to understand the text.'},3:{0:'Separable verb',1:'prefix + zu + stem',3:'It is difficult to get up early.'},4:{0:'Inseparable verb',1:'zu + whole infinitive',3:'It is important to understand that.'},5:{0:'Purpose',1:'um ... zu + infinitive',3:'I read in order to learn German.'},6:{0:'Alternative / absence',3:'She left without saying anything.'},7:{0:'Anteriority',3:'She claims to have seen him.'},8:{0:'Obligation / possibility',3:'The text must/can be translated, depending on context.'}},[
'um ... zu normally shares an implied subject with the main clause. With a different subject use damit: Ich spreche langsam, damit du mich verstehst.','2024 spelling rules: expanded infinitival subordinate clauses are separated by commas, even without an introducer: Ich versuche, den Text zu verstehen. An unexpanded zu-infinitive may be interpreted as a group without a comma; when part of a compound verbal predicate, no comma separates it: Sie scheint zu schlafen.','lassen = let / have something done; Ich lasse das Auto reparieren = I am having the car repaired.','Negated brauchen with an infinitive: du brauchst nicht (zu) kommen = you do not need to come; careful writing is taught with zu.','Perfect with a modal: hat lesen können; with lassen: hat das Auto reparieren lassen.'
],['I have no time to read everything.','He is learning German in order to read texts in their original language.']);
G('noun-declension','Noun declension, plural and gender','Deklination der Nomen — noun declension','Learn each noun as article + singular + plural. The ending does not predict the whole paradigm.',['Case / class','Strong masculine · Mann','Strong neuter · Kind','Feminine · Frau','Weak masculine · Student','Mixed masculine · Name'],{
0:{0:'Nom singular'},1:{0:'Akk singular'},2:{0:'Dat singular'},3:{0:'Gen singular'},4:{0:'Nom/Akk plural'},5:{0:'Dat plural'},6:{0:'Gen plural'}},[
'N-Deklination (n-declension): many masculine person/animal nouns take -(e)n except in singular nominative: der Junge → den/dem/des Jungen; der Mensch → Menschen; der Herr → Herrn (singular), Herren (plural). Not all masculine human nouns belong to this class.','Mixed: der Name → Namen / Namens; der Gedanke → Gedanken / Gedankens. Special neuter das Herz → Akk das Herz, Dat dem Herzen (also Herz depending on use), Gen des Herzens; plural die Herzen.','Main plurals: -e (Tag/Tage), -(e)n (Frau/Frauen), -er (Kind/Kinder), -s (Auto/Autos), ∅ (Lehrer/Lehrer), with possible Umlaut (Mann/Männer, Mutter/Mütter). Memorize; do not generate from one universal rule.','Reliable gender suffixes: -ung/-heit/-keit/-schaft/-ion/-tät feminine; -chen/-lein neuter; nominalized infinitives neuter: das Lesen. A compound’s gender comes from its last noun: die Haustür.','All nouns and nominalizations are capitalized. Grammatical gender ≠ sex: das Mädchen = the girl.','Some nouns normally occur only in the singular (das Wissen, knowledge) or plural (die Eltern, parents); do not invent forms.'
],['I speak with a student about the author’s name.','The children’s books are on the tables.']);
G('reflexive','Reflexives: accusative and dative','Reflexivpronomen / reflexive Verben — reflexive pronoun / verbs','In the third person, sich is both accusative and dative; in first/second person it matches the personal object pronoun.',['Person','Akk','Dat','Example'],{},[
'When another accusative object names what is being washed, the reflexive is usually dative: Ich wasche mir die Hände = I wash my hands.','Lexical government: sich interessieren für + Akk (be interested in); sich erinnern an + Akk (remember); sich freuen auf + Akk (look forward to), über + Akk (be pleased about something).','Reflexivity does not always match English or Spanish: sich beeilen = hurry; aufstehen = get up (without sich).','Reflexive verbs form the perfect with haben: Ich habe mich beeilt.','einander = one another, reciprocal; sich may be reflexive or reciprocal depending on context: Sie sehen sich.'
],['I am interested in philosophy of mind.','I have bought myself a book.']);
G('demonstratives','Demonstratives and quantifiers','Demonstrativpronomen / Quantifikatoren — demonstratives / quantifiers','dies- (this) and jen- (that) take strong determiner endings. der/die/das may be used as an emphatic pronoun.',['Series / case','Masculine','Feminine','Neuter','Plural'],{
4:{0:'Pronoun der · Nom'},5:{0:'Pronoun der · Akk'},6:{0:'Pronoun der · Dat'},7:{0:'Pronoun der · Gen'},8:{0:'jed- · Nom (each)',4:'—; alle (all)'}},[
'jen- and welch- (which) take the same endings as dies-. derjenige (the one who) and derselbe (the same) inflect both parts: denjenigen, demselben.','jeder is normally singular; alle is plural (all). Alles = everything as neuter singular: Alles ist klar. Alle sind hier = Everyone is here.','deren usually resumes a preceding referent; derer may anticipate a relative clause: die Zahl derer, die... (the number of those who...). For genitive relatives use dessen/deren.','After inflected dies-/jen-/jed-/all-, the adjective is usually weak: diese guten Bücher, alle guten Bücher.','Without context, Das ist... may identify any gender: Das ist meine Schwester. This das is an identifying correlate, not necessarily a neuter article.'
],['This book is short; that one is longer.','Every person may ask, but not all questions are the same.']);
G('questions','Questions: forms and cases','Fragesatz / Fragewörter — interrogative clause / question words','Yes/no: verb first. W-question: question word + finite verb + subject, unless the question word is the subject.',['Form','Meaning / case','Example','Translation'],{
0:{1:'who? · Nom',3:'Who is coming?'},1:{1:'whom? · Akk',3:'Whom do you see?'},2:{1:'to whom? · Dat',3:'Whom do you help?'},3:{1:'whose? · Gen',3:'Whose book is that?'},4:{1:'what? · Nom/Akk',3:'What are you reading?'},5:{1:'where? / where to? / where from?',3:'Where do you live? Where are you going?'},6:{1:'when? / how long? / since when?',3:'How long have you been learning German?'},7:{1:'why?',3:'Why are you staying?'},8:{1:'how? / how much/many?',3:'How many books do you have?'},9:{1:'which? · inflects like dies-',3:'Which book are you reading?'},10:{1:'what kind of...? · ein inflects',3:'What kind of book are you reading?'},11:{0:'wo(r)- + preposition',1:'preposition + what?, for things',3:'What are you talking about?'}},[
'With people retain preposition + question pronoun: Mit wem sprichst du? (With whom are you speaking?).','A complete answer to a negative question avoids ambiguity. doch explicitly contradicts the negation: Bist du nicht müde? — Doch, ich bin müde = Are you not tired? — Yes, I am tired.','Indirect questions: ob for yes/no, W for open questions; final verb: Ich weiß nicht, ob er kommt / wann er kommt.','welch- and was für ein- inflect according to the phrase’s function: Mit welchem Buch? / Mit was für einem Buch?'
],['Do you have time? — Yes, I have time.','Who does the book belong to?']);
G('future','Future and conjecture','Futur I / Futur II — future / future perfect','The present with a time reference suffices for many future situations. werden + infinitive also expresses prediction or conjecture.',['Form','Pattern','Example','Translation'],{
0:{0:'Present with future context',1:'Präsens + time',3:'I am coming / will come tomorrow.'},1:{1:'finite werden + infinitive',3:'I will read the text.'},2:{0:'Present conjecture',1:'werden + infinitive',3:'He will be at home (I suppose).'},3:{0:'Futur II with haben',1:'werden + participle + haben',3:'By tomorrow I will have read the book.'},4:{0:'Futur II with sein',1:'werden + participle + sein',3:'By eight she will have arrived.'},5:{0:'Past conjecture',1:'Futur II, often with wohl',3:'She will probably have left.'}},[
'Present werden: werde, wirst, wird, werden, werdet, werden. Infinitive at the end: Ich werde morgen kommen.','werden + adjective/noun without an infinitive = become: Es wird kalt (It is getting cold).','werden + participle = passive: Der Text wird gelesen; distinguish from Futur I: Er wird lesen.','Futur II does not require chronological future time: it may infer something that has already occurred.'
],['We will address the question later.','She has probably already read the letter.']);
G('participles','Participles, imperative and nominalization','Partizip / Imperativ / Nominalisierung — participle / imperative / nominalization','Participles may modify nouns and then inflect as adjectives. Partizip I: sein → seiend and tun → tuend are exceptions to infinitive + -d.',['Form','Construction','Example','Translation'],{
0:{0:'Partizip I · present participle',1:'infinitive + -d',3:'to read → reading; the child who is reading'},1:{0:'Partizip II · past participle',1:'lexical form for perfect/passive',3:'the book that has been read'},2:{0:'Participle I phrase',1:'complements + inflected participle',3:'the author living in Berlin'},3:{0:'Participle II phrase',1:'complements + inflected participle',3:'the text translated yesterday'},4:{0:'du imperative',1:'stem; often optional -e',3:'Read! Come! Work! (singular)'},5:{0:'ihr imperative',1:'ihr form without the pronoun',3:'Read! Come! Work! (plural)'},6:{0:'Sie / wir imperative',1:'verb + pronoun',3:'Read! (formal) Let us go!'},7:{0:'sein imperative',3:'Be quiet!'},8:{0:'Nominalized infinitive',1:'das + capitalized infinitive',3:'reading; while reading'}},[
'Partizip I is usually active/simultaneous; Partizip II may be passive/resultative with transitives or express anteriority with certain intransitives: der angekommene Zug (the train that has arrived). It has no single English translation.','Strong imperative with e→i/ie: geben → gib, lesen → lies; a→ä is not retained: fahren → fahr, not fähr. With separables: Steh auf!','The du imperative of haben is hab(e); werden: werde. Do not automatically add -e to forms such as lies/gib.','Adjective-derived nouns retain adjective endings: etwas Interessantes = something interesting; der Reisende = the traveller; ein Reisender = a traveller.','Dense participial constructions are frequent in scientific writing; first reconstruct a relative clause to interpret them.'
],['The values measured in the experiment differ.','Read the text and explain the question!']);
G('numbers','Numbers, dates and time','Zahlen / Datum / Uhrzeit — numbers / date / time','Compound numbers are written as one word up to a million; units precede tens.',['Value / pattern','German','Use / English'],{
0:{2:'zero–six'},1:{2:'seven–twelve'},2:{2:'sixteen and seventeen shorten the stem'},3:{2:'twenty / thirty / forty'},4:{2:'fifty–ninety'},5:{2:'unit + und + ten'},6:{2:'one hundred / one thousand / one million'},7:{0:'Ordinal 1 / 2 / 3 / 7 / 8',2:'first / second / third / seventh / eighth'},8:{0:'Ordinal 4–19 / from 20',2:'stem + -t / -st, with the indicated exceptions'},9:{0:'Date',2:'on the first of October / the first of October (Dat / Nom)'},10:{0:'Formal time',2:'thirteen thirty'},11:{0:'Everyday time',2:'1:30; 1:15; 1:45'},12:{0:'Decimal',2:'one point five (German uses a comma)'}},[
'ein before a noun; eins as a standalone number: ein Buch, ein Uhr, eins plus eins.','Ordinals inflect as adjectives: am zweiten Tag, der dritte Text. A written dot marks an ordinal: am 1. Oktober.','halb zwei means half an hour before two: 1:30. dreiviertel zwei = 1:45 is regional; the general pattern taught here is Viertel vor zwei.','Millions and above are separate nouns: zwei Millionen, eine Milliarde (one billion).','Years: 1998 → neunzehnhundertachtundneunzig; 2026 → zweitausendsechsundzwanzig.'
],['The course begins on the third of October at eight.','I have twenty-one books.']);
  function L(id,title,goal,concepts,examples,exerciseRows) {
    const source = data.lessons.find(x => x.id === id);
    if (!source) throw new Error('Unknown lesson ID: '+id);
    const exercises = {};
    exerciseRows.forEach(([prompt,explanation,options,answer,accepted,hint],i) => {
      const original = source.exercises[i];
      if (!original) throw new Error('Unknown exercise in '+id+': '+i);
      exercises[original.id] = {prompt,explanation,
        ...(options ? {options, ...(original.correct !== undefined ? {answer:options[original.correct]} : {})} : {}),
        ...(answer !== undefined ? {answer} : {}),
        ...(accepted ? {accepted} : {}), ...(hint ? {hint} : {})};
    });
    english.lessons[id] = {title,goal,concepts:concepts.map(([es,contrast])=>({es,...(contrast?{contrast}:{})})),examples,exercises};
  }
L('unit-01','Identity, present tense and verb position','Build short statements: subject, conjugated verb and complement.',[
['In a main statement, the finite verb occupies the second syntactic position; one position may contain several words.','Unlike English, another constituent may precede the verb: Heute komme ich. The subject need not come first.'],
['Subject pronouns: ich I, du you, er he, sie she, es it, wir we, ihr you (plural), sie they, Sie you (formal). kommen: komme, kommst, kommt, kommen, kommt, kommen.'],
['sein = to be: bin, bist, ist, sind, seid, sind. Nominativ = subject case. Nouns are capitalized; der Lehrer = the teacher, die Sprache = the language, das Buch = the book.'],
['heißen = to be called; wohnen = to reside. ich heiße, du heißt, er heißt; ich wohne, du wohnst, er wohnt. aus Chile = from Chile; in Berlin = in Berlin.']
],['I am from Chile.','Today I live in Berlin.','The teacher is called Paul.','We are here.'],[
['Translate into German: “I am from Chile”.','kommen aus expresses origin.'],
['Translate into English: “Wir sind hier”.','wir = we; sind = are.',null,'We are here.',['We are here.','We’re here.']],
['Complete: Ich ___ in Berlin. (wohnen)','Present, first-person singular: stem wohn- + -e.'],
['Choose Lehrer’s nominative article: ___ Lehrer heißt Paul.','Lehrer is masculine: der Lehrer; the subject is nominative.'],
['Conjugate sein: Du ___ hier.','du bist = you are.'],
['Order the statement, starting with Heute.','Heute occupies first position; komme second.'],
['Read: “Ich heiße Lea. Ich komme aus Chile. Jetzt wohne ich in Berlin”. Where does Lea live now?','Jetzt = now; wohnen indicates residence, kommen aus origin.',['In Chile','In Berlin','Not specified']]
]);
L('unit-02','Article, gender and accusative object','Distinguish subject and direct object; learn each noun with gender and plural.',[
['Gender: der masculine, die feminine, das neuter. Definite plural: die. Learn the pair: der Hund / die Hunde (dog/dogs), die Frau / die Frauen (woman/women), das Buch / die Bücher (book/books).'],
['Direct object: der→den; ein→einen. Feminine die/eine and neuter das/ein do not change. Definite plural die. sehen = to see: ich sehe, du siehst, er/sie sieht.'],
['Object pronouns: mich me, dich you, ihn him, sie her, es it, uns us, euch you (plural), sie them, Sie you (formal). haben = to have: ich habe, du hast, er hat.','As in Latin, case marks function; in German, the marking is often on the article rather than the noun.']
],['The man sees the dog.','I have a book.','She sees me.','We read the books.'],[
['Translate into German: “I have a book”.','Buch is neuter; the accusative is ein Buch.'],
['Translate into German: “The man sees the dog”.','Der Mann: nominative subject; den Hund: accusative object.'],
['Replace the object: Ich sehe den Hund. → Ich sehe ___.','Hund is masculine: accusative pronoun ihn.'],
['Ich sehe ___ Mann.','Mann is masculine and a direct object: den Mann.'],
['Conjugate haben: Du ___ ein Buch.','Irregular form: du hast.'],
['Start with Ich.','Subject + finite verb + accusative object.'],
['Read: “Die Frau sieht den Mann. Der Mann sieht den Hund”. Who sees the man?','Die Frau is the subject of the first sentence; den Mann is its object.',['The woman','The dog','The man']]
]);
L('unit-03','Questions and precise negation','Ask for information and distinguish noun-phrase negation from sentence negation.',[
['wo where, woher where from, wer who, was what, wann when, wie how, warum why. Question with question word: Wo wohnst du? Yes/no question: Wohnst du hier? Verb first.'],
['kein negates a noun without an article or with an indefinite article: kein Buch, keinen Kaffee, keine Zeit. nicht negates a predicate, adjective or contrasted element. Kaffee = coffee (masculine), Zeit = time (feminine).'],
['nicht often comes late in a simple sentence; it precedes adjectives and complements it negates: nicht müde, nicht in Berlin. Position may change focus; these examples avoid ambiguous contrasts.'],
['trinken = to drink: ich trinke, du trinkst, er trinkt. lesen = to read: ich lese, du liest, er liest. doch answers a negative question affirmatively.']
],['Where are you from?','Do you drink coffee?','I have no time.','I am not tired.','Do you not read? — Yes, I do!'],[
['Translate into German: “Where do you live?”','wo asks about location; the verb follows the question word.'],
['Translate into German: “I am not tired”.','nicht precedes the adjective müde.'],
['Complete the negation: Ich habe ___ Zeit.','Feminine noun without an article: keine Zeit.'],
['Ich trinke ___ Kaffee.','Kaffee is masculine and a direct object: keinen Kaffee.'],
['Conjugate lesen: Du ___ ein Buch.','lesen has a vowel change: du liest.'],
['Build a yes/no question.','A yes/no question begins with the conjugated verb.'],
['Read: “Wohnst du in Berlin? — Nein, ich wohne nicht in Berlin. Ich wohne in Hamburg”. Where does the respondent live?','nicht in Berlin negates that location; the next sentence gives the correct one.',['Berlin','Hamburg','In no city']]
]);
L('unit-04','Modality and separable verbs','Express ability, obligation and intention; recognize the verbal bracket.',[
['können can/know how to, müssen have to, wollen want to, dürfen have permission, sollen be supposed to or advised to, mögen like. Conjugated modal + final infinitive: Ich kann Deutsch lernen.'],
['Singular ich/er: kann, muss, will, darf, soll, mag; du: kannst, musst, willst, darfst, sollst, magst. Plural: können/könnt, müssen/müsst, wollen/wollt, dürfen/dürft, sollen/sollt, mögen/mögt.'],
['aufstehen = to get up: ich stehe ... auf. anfangen = to begin: er fängt ... an. Prefix at the end of the main clause; joined infinitive after a modal: Ich muss aufstehen. um sieben Uhr = at seven.'],
['nicht müssen = not to have to; nicht dürfen = not to have permission/prohibition.','English must not usually corresponds to nicht dürfen; nicht müssen corresponds to do not have to.']
],['I get up at seven.','I have to get up at seven.','The course starts today.','You do not have to work.','You are not allowed to smoke here.'],[
['Translate into German: “I can learn German”.','Conjugated kann in second position; lernen at the end.'],
['Translate into German: “I get up at seven”.','aufstehen separates in this main clause.'],
['Complete: Der Kurs fängt heute ___.','anfangen → fängt ... an.'],
['Ich lese ___ Buch.','Review: Buch is neuter and the definite accusative is das.'],
['Conjugate müssen: Du ___ lernen.','du musst; infinitive lernen closes the sentence.'],
['Start with Heute.','Modal in V2 and infinitive at the end.'],
['What does “Du musst heute nicht arbeiten” express?','nicht müssen removes the obligation; it does not express prohibition.',['Working today is forbidden','You do not need to work today','You must work today']]
]);
L('unit-05','Dative and space: location versus destination','Interpret recipients and choose case according to the spatial relation.',[
['Recipient: Ich gebe dem Kind ein Buch. Articles: der/das→dem, die→der, plural die→den; noun plural adds -n unless already ending in -n/-s: den Kindern. Pronouns: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen. geben = give: ich gebe, du gibst, er gibt.'],
['aus from/origin, bei at someone’s home/beside, mit with, nach towards/after, seit since/for (continuing duration), von from/of, zu to. All govern dative. helfen = to help requires dative: Ich helfe dir.'],
['an, auf, hinter, in, neben, über, unter, vor, zwischen: dative for location; accusative for destination/change of spatial relation. Movement alone does not determine case: Ich laufe im Park.','Compare “in the park” with “into the park”; do not use a mechanical movement/rest opposition.'],
['liegen = to lie/be situated; stellen = to place upright. der Tisch table, das Kind child, der Park park. im = in dem; ins = in das.']
],['The book is on the table.','I place the book on the table.','I give the child a book.','I run in the park.','I help you.'],[
['Translate into German: “The book is on the table”.','Location: auf + dative; Tisch is masculine.'],
['Translate into German: “I help you”.','helfen governs dative; dir = to you.'],
['Complete the contraction: in dem Park = ___ Park.','im = in dem.'],
['Destination: Ich stelle das Buch auf ___ Tisch.','Change of spatial relation: auf + accusative, den Tisch.'],
['Conjugate geben: Er ___ dem Kind ein Buch.','geben changes e→i in second- and third-person singular.'],
['Start with Ich.','Neutral order with two noun objects: dative before accusative.'],
['Read: “Mira läuft im Park. Danach geht sie in den Park zurück”. What does im Park mark in the first sentence?','im Park indicates location, even though the verb denotes movement.',['Destination into the park','The place where she runs','Origin from the park']]
]);
L('unit-06','Conversational past and participles','Narrate events with Perfekt and recognize common past forms of sein and haben.',[
['Conjugated haben/sein + participle at the end. haben is the most common auxiliary. sein with many intransitive verbs changing location/state: gehen→gegangen, kommen→gekommen; also bleiben→geblieben and sein→gewesen.'],
['Regular: lernen→gelernt, arbeiten→gearbeitet. Irregular: lesen→gelesen, sehen→gesehen, schreiben→geschrieben. Separable: aufstehen→aufgestanden. Without ge-: verstehen→verstanden, studieren→studiert. studieren = to study at university; Deutsch studieren usually means studying German as a university subject, not any kind of language learning.'],
['Common simple past even in speech: ich/er war, du warst, wir/sie waren, ihr wart; ich/er hatte, du hattest, wir/sie hatten, ihr hattet. gestern yesterday, danach afterwards.','German Perfekt does not always equal English present perfect: Ich habe gestern gearbeitet also corresponds to I worked yesterday.']
],['I worked yesterday.','She went to Berlin.','We read the book.','I was tired and had no time.','He got up early.'],[
['Translate using Perfekt: “I read the book” (past).','lesen forms the participle gelesen and takes haben.'],
['Translate using Perfekt: “I went to Berlin” (gehen).','gehen, changing location, takes sein.',null,undefined,undefined,'gehen → gegangen; nach Berlin = to Berlin.'],
['Complete the participle: Ich habe Deutsch ___. (studieren)','Verbs ending in -ieren take no ge-.'],
['Ich habe mit ___ Lehrer gesprochen.','mit requires dative; masculine Lehrer: dem Lehrer.'],
['Conjugate sein in Präteritum: Wir ___ in Berlin.','wir waren = we were.'],
['Start with Gestern.','Auxiliary in V2, participle at the end.'],
['Read: “Gestern war Lea müde. Sie hat das Buch nicht gelesen. Heute liest sie es”. What happened yesterday?','war marks a past state; hat ... nicht gelesen negates past reading.',['Lea read the book','Lea was tired and did not read the book','Lea went to Berlin']]
]);
L('unit-07','Subordinate clauses: cause, content and condition','Link propositions with final verb position while retaining V2 in the main clause.',[
['weil because, dass that (content), wenn if/when (condition or repetition), ob whether (indirect question). The subordinate clause has its conjugated verb at the end and is separated by a comma.'],
['An initial subordinate clause occupies first position: Wenn ich Zeit habe, lese ich. The main clause then begins with the conjugated verb.','English permits “If I have time, I read”; German does not insert a subject before the verb of that main clause.'],
['Perfekt: weil ich gearbeitet habe. Modal + infinitive: weil ich lernen muss. For a single past event, “when” is usually als; for past repetition, wenn. wissen = know: ich weiß, du weißt, er weiß.']
],['I am learning German because I would like to live in Berlin.','I know that he lives here.','If I have time, I read.','I do not know whether she is coming.','When I was in Berlin, I read a lot.'],[
['Translate into German: “I read because I have time”.','weil introduces a subordinate clause; habe at the end.'],
['Translate into German: “I do not know whether she is coming”.','An indirect question is introduced with ob, not wenn.'],
['Complete the asserted content (“I know that…”): Ich weiß, ___ sie in Berlin wohnt.','A content is asserted: dass = that.'],
['Ich lerne, weil ich ___ Buch lesen möchte.','Neuter Buch, direct object: das Buch; case does not change because it is inside a subordinate clause.'],
['Conjugate wissen: Ich ___, dass er kommt.','wissen has the irregular form ich weiß.'],
['Start with the subordinate clause Wenn ich Zeit habe.','The whole subordinate clause occupies position 1; lese occupies position 2.'],
['Which expresses uncertainty about Lea’s arrival?','ob introduces an indirect question; dass asserts content; wenn expresses a condition.']
]);
L('unit-08','Genitive, possession and time','Read possession and relationships between nouns; distinguish common genitive forms.',[
['Relation between nouns: das Buch des Lehrers = the teacher’s book. Strong masculine/neuter: des/eines + noun -(e)s; weak/mixed nouns have other endings (des Menschen/des Namens); feminine/plural: der/einer or der, without that ending. der Lehrer→des Lehrers; das Kind→des Kindes.'],
['wegen because of, trotz despite, während during, außerhalb outside: genitive in formal standard German. wegen des Wetters = because of the weather. Dative with wegen exists in colloquial speech.'],
['mein my, dein your, sein his/its, ihr her/their, unser our, euer your (plural), Ihr your (formal). Inflect like ein: mein Buch, meinen Hund, meinem Kind. euer→eure/eurem, etc.'],
['The present with a temporal reference usually suffices: Morgen lese ich. Futur I: werden + infinitive. ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden. It can also express conjecture.']
],['This is the teacher’s book.','We stay here because of the weather.','I help my child.','Tomorrow I will read the book.'],[
['Translate into German: “It is the teacher’s book”.','Masculine genitive: des Lehrers.'],
['Translate using Futur I: “Tomorrow I will read the book”.','Conjugated werden in V2 + final infinitive.'],
['Complete the noun in genitive: das Buch des ___. (Kind)','Kind usually has the genitive Kindes; Kinds also exists.'],
['Ich helfe ___ Kind. (my child)','helfen requires dative; neuter: meinem Kind.'],
['Conjugate werden: Du ___ das Buch lesen.','Futur I: du wirst + infinitive.'],
['Start with Wegen des Wetters.','The whole prepositional phrase occupies first position.'],
['In “das Buch der Lehrerin”, what does der Lehrerin mean?','Feminine genitive takes der; the noun phrase context indicates possession.',['To the teacher','Of the teacher','The teacher (male)']]
]);
L('unit-09','Adjectives and relative clauses','Read compact descriptions and calculate a relative pronoun’s case from its function.',[
['After a definite article: singular nominative der gute Mann, die gute Frau, das gute Buch; accusative den guten Mann, die gute Frau, das gute Buch. Dative/genitive/plural: -en. Without an article: guter Wein, gute Musik, gutes Brot; plural gute Bücher.'],
['ein guter Mann, eine gute Frau, ein gutes Buch; einen guten Mann. Where ein does not mark gender/case, the adjective does. After a dative: mit einem guten Buch.','As in Greek/Latin, there is agreement, but the ending also depends on the type of determiner.'],
['Gender/number from the antecedent; case from function inside the relative clause. Nominative der/die/das/die; accusative den/die/das/die; dative dem/der/dem/denen; genitive dessen/deren/dessen/deren. Final verb and commas.'],
['dieser/diese/dieses = this/these, with forms according to gender and number; endings mostly like der: diesen Mann, diesem Kind (genitive masculine/neuter: dieses). klug intelligent, interessant interesting.']
],['I read an interesting book.','The man whom I see is intelligent.','The woman whom I help is here.','This is the teacher whose book I read.'],[
['Translate into German: “I read an interesting book”.','ein does not mark neuter nominative/accusative; the adjective takes -es.'],
['Translate into German: “The man whom I see is intelligent”.','Masculine Mann; den is the object of sehe in the relative clause.'],
['Complete: mit einem interessant___ Buch','After dative einem, the adjective takes -en.'],
['Die Frau, ___ ich helfe, ist hier.','helfen governs dative; feminine antecedent → der.'],
['Conjugate sehen: Der Mann, den du ___, ist hier.','du siehst; the conjugated verb closes the relative clause.'],
['Order the sentence; start with Der Mann,.','The relative clause takes den + subject + final verb.'],
['Read: “Der Lehrer, dessen Buch ich lese, wohnt in Berlin”. Whose book is it?','dessen is masculine genitive and refers to der Lehrer.',['The reader’s','The teacher’s','Berlin’s']]
]);
L('unit-10','Passive: processes and states','Recognize what happens, whom it happens to, and whether a process or its result is being described.',[
['Process passive: werden + participle. Das Buch wird gelesen. The active accusative object becomes the subject; dative remains: Dem Kind wird geholfen. Agent: von + dative; common means/cause: durch + accusative.'],
['Present wird gelesen; Präteritum wurde gelesen; Perfekt ist gelesen worden. Passive Perfekt takes worden, not geworden. Präteritum of werden: ich/er wurde, du wurdest, wir/sie wurden, ihr wurdet.'],
['sein + participle describes a resulting state: Die Tür ist geöffnet = the door is open. werden + participle describes opening: Die Tür wird geöffnet. öffnen = open; prüfen = check; die Tür = door.'],
['Modal + participle + werden: Das Buch muss gelesen werden. In a subordinate clause: weil das Buch gelesen werden muss.']
],['The teacher is reading the text / the text is being read by the teacher.','The door is open.','The door was opened.','The text has been checked.','The child is being helped.'],[
['Translate using process passive: “The book is being read”.','werden + participle; Buch becomes the nominative subject.'],
['Translate using state passive: “The door is open”.','sein + participle describes the resulting state.'],
['Complete the passive Perfekt: Der Text ist geprüft ___.','Passive Perfekt: sein + participle + worden.'],
['Der Text wird von ___ Lehrerin gelesen.','von requires dative; feminine: der Lehrerin.'],
['Conjugate werden in Präteritum: Die Texte ___ gelesen.','Plural subject: wurden + participle.'],
['Start with Das Buch.','Finite modal in V2; participle + infinitive werden at the end.'],
['Which sentence explicitly describes a resulting state?','ist geöffnet describes the state; wird geöffnet and öffnet describe the process.']
]);
L('unit-11','Konjunktiv II: hypotheses and politeness','Express hypothetical situations and requests without confusing verb form with time.',[
['Hypotheses/counterfactuals and politeness: wäre would be, hätte would have, könnte could, müsste would have to. A form based on the past does not itself imply past time: Wenn ich Zeit hätte, würde ich lesen. Konjunktiv II of können: ich könnte, du könntest, er könnte, wir könnten, ihr könntet, sie könnten.'],
['Common form for many verbs: ich würde lesen. Forms of würden: würde, würdest, würde, würden, würdet, würden. With sein, haben and modals, wäre, hätte, könnte, etc. are often preferred.'],
['Könnten Sie ...? = Could you ...?; Ich hätte gern ... = I would like ...; Wir könnten ... = We could ... . If the condition begins with wenn, final verb and main-clause V2.','Not every condition requires Konjunktiv II: Wenn ich Zeit habe, lese ich may be an open, realistic condition.']
],['If I had time, I would read the book.','Could you help me?','I would like to be in Berlin.','We could start tomorrow.'],[
['Translate into German: “If I had time, I would read”.','hätte expresses the hypothetical condition; würde + infinitive expresses the result.'],
['Translate as a formal request: “Could you help me?”','Formal Sie; helfen requires dative mir.'],
['Complete: Ich ___ gern in Berlin. (sein, Konjunktiv II)','wäre is the usual Konjunktiv II form of sein.'],
['Könnten Sie ___ helfen? (me)','helfen requires dative: mir.'],
['Conjugate können in Konjunktiv II: Du ___ morgen kommen.','du könntest = you could.'],
['Start with Wenn ich Zeit hätte.','The initial subordinate clause occupies position 1; würde opens the main clause.'],
['What does “Könnten Sie mir helfen?” mainly do in conversation?','Konjunktiv II may express politeness without placing the event in the past.',['States a past fact','Makes a polite request','Forbids helping']]
]);
L('unit-12','Infinitives, purpose and reflexives','Condense actions with zu and distinguish purpose from content.',[
['After many verbs: Ich versuche, Deutsch zu lernen. With a separable verb, zu goes inside: anzufangen, aufzustehen. With a modal, do not add zu: Ich muss lernen. to try = versuchen; to plan = planen.'],
['um ... zu = in order to (purpose); the implied subject is normally the main clause’s subject. With a different subject, use damit + final verb: Ich helfe dir, damit du lernen kannst.'],
['ohne ... zu = without doing; statt ... zu = instead of doing. With a shared implied subject: Er liest, ohne zu sprechen. Use a comma for infinitive groups introduced by um, ohne, statt.'],
['Accusative mich/dich/sich/uns/euch/sich: Ich erinnere mich. Dative mir/dir/sich/uns/euch/sich when another object occupies the accusative: Ich wasche mir die Hände. sich interessieren für + accusative = to be interested in.']
],['I try to understand the text.','I am learning German in order to read German books.','I help you so that you can learn.','I plan to get up early.','I am interested in philosophy.'],[
['Translate into German: “I try to understand the text”.','versuchen permits a zu-infinitive.'],
['Translate into German: “I am interested in philosophy”. Use sich interessieren für.','sich interessieren für; mich agrees with ich.'],
['Form zu + infinitive of aufstehen: Ich plane, früh ___.','zu is inserted between the separable prefix and stem.'],
['Ich wasche ___ die Hände. (my own hands)','die Hände is accusative object; the reflexive is dative mir.'],
['Conjugate versuchen: Er ___, den Text zu verstehen.','Third-person present: versucht.'],
['Start with Ich.','Main-clause V2; zu-infinitive at the end of its group.'],
['In “Ich helfe Lea, damit sie lernen kann”, who learns?','sie refers to Lea; damit permits a subject different from the main clause’s subject.',['The person helping','Lea','Nobody']]
]);
L('unit-13','Connectors and argument structure','Distinguish cause, consequence, concession and means; follow their effects on verb order.',[
['weil because, obwohl although, indem by doing: subordinating, final verb. denn because, aber but, und and: join main clauses without occupying position 1. deshalb therefore, trotzdem nevertheless: adverbs that do occupy a position.'],
['Obwohl es regnet, gehe ich hinaus. Es regnet; trotzdem gehe ich hinaus. Es regnet; deshalb bleibe ich hier. A concession retains a conclusion despite an obstacle; a consequence follows from a premise.'],
['zwar ... aber = admittedly ... but; sowohl ... als auch = both ... and; weder ... noch = neither ... nor; nicht nur ... sondern auch = not only ... but also. Keep coordinated elements parallel.'],
['indem = means/procedure: Er prüft die These, indem er Daten vergleicht. die These thesis, die Daten data, vergleichen compare; regnen rain; hinausgehen go outside.']
],['Although it is raining, I go outside.','It is raining; nevertheless I go outside.','The thesis is clear, but not proved.','He tests the thesis by comparing data.'],[
['Translate into German: “Although it is raining, I go outside”.','obwohl introduces a concession; final subordinate verb and main-clause V2.'],
['Translate into German: “It is raining; therefore I stay here”.','deshalb expresses consequence and occupies position 1.'],
['Complete the pair: Die These ist ___ klar, aber nicht bewiesen.','zwar ... aber = concession followed by contrast.'],
['Er vergleicht ___ Daten.','Daten is plural and an accusative object: die Daten.'],
['Conjugate vergleichen: Er ___ die Daten.','Third-person singular: vergleicht.'],
['Start with Trotzdem.','The connecting adverb occupies position 1; verb in V2.'],
['“Die Erklärung ist einfach; trotzdem ist sie falsch”. What relation does trotzdem mark?','trotzdem introduces a result contrary to the expectation suggested by the first sentence.',['Necessary consequence','Concession: simplicity does not guarantee truth','Identity between simplicity and truth']]
]);
L('unit-14','Nominalization and participial descriptions','Unpack dense noun phrases and recover actions and participants.',[
['Nominalized infinitives: das Denken thinking/thought, das Lernen learning; capitalization and neuter gender. Verbs→lexical nouns: beobachten→die Beobachtung, erklären→die Erklärung, prüfen→die Prüfung.'],
['Partizip I: infinitive + d, ongoing action: denkend, lesend. Partizip II: often result/passive with transitive verbs: geprüft. They inflect as adjectives: der denkende Mensch; die geprüfte These.'],
['A participle may have preceding complements: die von der Forscherin geprüfte These = the thesis tested by the researcher. Reconstruct: Die Forscherin hat die These geprüft.'],
['Some masculine nouns add -(e)n outside singular nominative: der Mensch→den/dem/des Menschen; der Student→Studenten. In “die Beobachtung des Forschers”, the genitive may be agent or object: context decides.','Subjective/objective readings of the genitive are also familiar from Latin and Greek.']
],['Thinking is an activity.','The student who is reading is sitting here.','The thesis tested by the researcher is clear.','I see the thinking human being.'],[
['Translate into German: “Thinking is an activity”.','Nominalized infinitive: das Denken, capitalized.'],
['Translate into English: “die von der Forscherin geprüfte These”.','The complement von der Forscherin belongs to the participle geprüfte.',null,'The thesis tested by the researcher.',['The thesis tested by the researcher.','The thesis examined by the researcher.','The thesis checked by the researcher.','The thesis verified by the researcher.']],
['Complete Partizip I: lesen → ___.','Partizip I: lesen + d.'],
['Ich helfe ___ Studenten. (singular)','Masculine dative: dem; Student adds -en in weak declension.'],
['Convert to present passive: Die Forscherin prüft die These. → Die These ___ geprüft.','The action was nominalized; reconstructing the passive uses werden + participle.'],
['Reconstruct the main clause starting with Die Forscherin.','The participial attribute here corresponds to a Perfekt action.'],
['Without further context, “die Beobachtung des Forschers” may mean…','The genitive may mark agent or object; do not choose a reading without context.',['Only that the researcher observes','Only that someone observes the researcher','The observation made by the researcher or observation of the researcher as object']]
]);
L('unit-15','Konjunktiv I and reported speech','Distinguish attributed content from the narrator’s own assertion.',[
['Common in news and academic texts for indirect speech. Built from the present stem: er komme, er habe, er könne. sein: ich sei, du seiest, er sei, wir seien, ihr seiet, sie seien.'],
['If Konjunktiv I coincides with the indicative, Konjunktiv II may distinguish reported speech: sie haben→sie hätten. Substitution does not automatically make the content counterfactual; context matters.'],
['Reported present: Er sagt, er sei müde. Anteriority: Er sagt, er habe gearbeitet / er sei gekommen. Passive: Der Bericht sagt, die These sei geprüft worden. Do not copy English tense backshift mechanically.'],
['Konjunktiv I attributes a statement to another source; it neither proves it false nor guarantees complete neutrality. behaupten claim/maintain, berichten report, die Forscherin researcher.','English reported speech often changes tenses; formal German can preserve relative time with Konjunktiv I.']
],['Lea says she is tired.','The researcher claims to have tested the thesis.','They report that they have no time.','According to the report, the thesis has been tested (attributed content).'],[
['Transform into reported speech with Konjunktiv I: Lea sagt: “Ich bin müde”.','ich in the quotation becomes sie; bin becomes sei.'],
['Translate into English: “Der Forscher behauptet, er habe die These geprüft”.','habe geprüft attributes an earlier action to the source.',null,'The researcher claims that he has tested the thesis.',['The researcher claims that he has tested the thesis.','The researcher claims to have tested the thesis.','The researcher states that he has tested the thesis.','The researcher claims that he tested the thesis.','The researcher claims that he has examined the thesis.','The researcher claims to have checked the thesis.']],
['Complete the reported passive: Die These sei geprüft ___.','Passive anteriority: sei + geprüft + worden.'],
['Dem Bericht zufolge helfe die Forscherin ___ Kind.','helfen retains its dative government in reported speech.'],
['Conjugate haben in Konjunktiv I: Er ___ die These geprüft.','Third-person singular: habe.'],
['Order the reported speech; start with Lea sagt,.','Indirect speech without dass may retain V2.'],
['What can be inferred from “Lea sagt, sie sei müde”?','Konjunktiv I marks attribution; by itself it establishes neither truth nor falsity.',['The narrator states that Lea is lying','The state of tiredness is attributed to Lea','Lea necessarily will be tired tomorrow']]
]);
L('unit-16','Temporal sequence and comparison','Locate events relative to other events and compare quantities without losing their reference points.',[
['Anteriority relative to a past point: hatte/war + participle. Nachdem sie das Buch gelesen hatte, schrieb sie einen Text. It does not simply mean “a more remote past”: it requires a past reference point.'],
['Written narrative: lesen→las, schreiben→schrieb, gehen→ging, sehen→sah, denken→dachte. Regular: lernte, arbeitete. Common singular ich/er las; plural wir/sie lasen.'],
['Comparative -er + als: schneller als faster than. Equality: so schnell wie as fast as. Irregular: gut/besser/am besten; viel/mehr/am meisten. Adverbial superlative: am schnellsten.'],
['werden + participle + haben/sein: Er wird den Text gelesen haben. May mark future completion or a conjecture about the past. Context: Bis morgen wird ... = by tomorrow will have ...; Er wird wohl ... = he probably has ... .']
],['After Lea had read the book, she wrote a text.','This text is clearer than the other one.','The second text is as clear as the first.','By tomorrow she will have read the text.'],[
['Translate into German: “This text is clearer than the other one”.','Comparative klarer + als, not wie.'],
['Translate into German: “After Lea had read the book, she wrote a text”.','Plusquamperfekt marks reading before past writing.'],
['Complete the equality: Dieser Text ist so klar ___ der andere.','Equality: so ... wie; inequality: comparative + als.'],
['Nachdem sie ___ Buch gelesen hatte, schrieb sie einen Text.','lesen takes an accusative object; neuter Buch: das.'],
['Conjugate schreiben in Präteritum: Lea ___ einen Text.','schreiben → schrieb → geschrieben.'],
['Start with Bis morgen.','Futur II: wird + participle + auxiliary infinitive at the end.'],
['“Nachdem sie gelesen hatte, schrieb sie”. What happened first?','hatte gelesen expresses anteriority relative to schrieb.',['Writing','Reading','Both actions were simultaneous']]
]);
L('unit-17','Definitions, conditions and scope','Begin advanced argument reading: recognize definitions and logical scope. This unit does not certify C1 proficiency.',[
['Unter X versteht man Y = X is understood to mean Y. Als X gilt Y = Y is considered X. X bezeichnet Y = X denotes Y. die Behauptung claim, die Bedingung condition, hinreichend sufficient, notwendig necessary. Definitional construction: unter + dative (unter diesem Begriff = by this concept); no spatial destination is expressed here.'],
['P nur wenn Q: Q is a necessary condition for P. Wenn Q, dann P: Q is sufficient for P. Do not reverse the directions. genau dann, wenn = if and only if, in explicit formulations.'],
['sofern = provided that/insofar as (condition, according to context); soweit = insofar as (scope/limit). in diesem Sinne = in this sense. Make scope explicit before drawing a conclusion.'],
['Nicht alle Sätze sind wahr = not all propositions are true. Alle Sätze sind nicht wahr often reads as none being true, but may be ambiguous according to focus: avoid that formulation when logical precision matters. Kein Satz ist wahr is unambiguous.']
],['Here knowledge is understood as justified true belief.','A claim is knowledge only if it is true.','Not all true claims are justified.','The definition applies provided that the stated conditions hold.'],[
['Translate into German: “Not all true claims are justified”.','nicht alle negates universality; it does not assert that none are justified.'],
['Translate into English: “Unter Wissen versteht man hier eine begründete wahre Überzeugung”.','Unter ... versteht man introduces a local definition.',null,'Here knowledge is understood as justified true belief.',['Here knowledge is understood as justified true belief.','Knowledge is understood here as justified true belief.','By knowledge we mean a justified true belief here.','Here knowledge means a justified true belief.']],
['Complete the necessary condition: P gilt nur dann, ___ Q gilt.','nur dann, wenn presents Q as necessary for P.'],
['Unter ___ Begriff versteht man hier eine Fähigkeit. (this concept)','In this definitional construction, unter + dative: unter diesem Begriff.'],
['Conjugate gelten: Die Definition ___ nur unter diesen Bedingungen.','gelten → gilt in third-person singular.'],
['Start with Nicht alle wahren Behauptungen.','The whole subject occupies position 1; sind occupies position 2.'],
['If “Eine Behauptung ist nur dann Wissen, wenn sie wahr ist”, what follows?','P only if Q requires Q for P; it does not guarantee P from Q.',['Every true claim is knowledge','Truth is necessary for the claim to be knowledge','Truth is irrelevant']]
]);
L('unit-18','Cognition: relations, processes and evidence','Read original teaching texts on cognition; separate correlation, mechanism and cause.',[
['je + comparative and final verb; desto/umso + comparative and conjugated verb: Je häufiger man übt, desto leichter erinnert man sich. Expresses covariation; by itself it does not prove causation.'],
['sich erinnern an + accusative = to remember. Ich erinnere mich an den Text. die Aufmerksamkeit attention, die Verarbeitung processing, der Reiz stimulus, die Erinnerung memory/recollection, verursachen cause.'],
['Daten sprechen dafür, dass ... = the data support ...; daraus folgt nicht, dass ... = it does not follow that ...; mit etwas zusammenhängen = to be related to something. Unterstützung ist kein logischer Beweis: empirical support is not deductive proof.'],
['Der verarbeitete Reiz = the processed stimulus; der zu verarbeitende Reiz = the stimulus to be processed. zu + present participle often marks necessity/possibility in attributive constructions; context and verb determine the reading.']
],['The more often one practises, the easier it is to remember the text.','Attention is related to stimulus processing.','It does not follow that attention alone causes the recollection.','The stimulus to be processed is shown again.'],[
['Translate into German: “I remember the text”.','sich erinnern an requires accusative; Text is masculine.'],
['Translate into English: “Daraus folgt nicht, dass Aufmerksamkeit allein die Erinnerung verursacht”.','A sufficient causal inference is rejected.',null,'It does not follow that attention alone causes the recollection.',['It does not follow that attention alone causes the recollection.','It does not follow from this that attention alone causes the memory.','It does not follow that attention alone causes memory.','This does not imply that attention alone causes the recollection.','It cannot be inferred from this that attention alone produces the memory.']],
['Complete: Je häufiger man übt, ___ leichter erinnert man sich.','Graded correlation: je ... desto/umso.'],
['Ich erinnere mich an ___ Reiz.','sich erinnern an governs accusative; masculine Reiz: den Reiz.'],
['Conjugate verursachen: Aufmerksamkeit allein ___ nicht jede Erinnerung.','Regular third-person singular: verursacht.'],
['Start with Der Reiz.','Process passive; wird in V2 and final participle.'],
['A text says: “Je häufiger ein Reiz auftritt, desto besser wird er erinnert”. What does the grammatical structure alone establish?','je ... desto expresses covariation; causation requires additional evidence.',['A graded association','A demonstrated causal mechanism','That the stimulus is false']]
]);
L('unit-19','Counterfactuals and epistemic caution','Compare observed facts with past alternatives and calibrate the strength of a conclusion.',[
['hätte/wäre + participle: Wenn wir die Daten geprüft hätten, hätten wir den Fehler bemerkt. The alternative is in the past. gehen takes wäre gegangen; prüfen takes hätte geprüft.'],
['hätte + lexical infinitive + modal infinitive: Ich hätte kommen können. In a subordinate clause with double infinitive, the auxiliary precedes the group: weil ich hätte kommen können. This is advanced: learn the whole pattern.'],
['Das dürfte stimmen = that is probably correct (dürfte marks conjecture here). Das könnte stimmen = that could be correct. Das muss stimmen may express a strong inference or necessity, depending on context. Do not translate every modal with one fixed label.'],
['soweit bekannt = as far as is known; nach bisherigem Kenntnisstand = according to current knowledge; lässt sich nicht ausschließen = cannot be ruled out. der Fehler error, bemerken notice, ausschließen rule out.']
],['If we had checked the data, we would have noticed the error.','We could have noticed the error.','The explanation is probably incomplete.','It cannot be ruled out that there is an error.'],[
['Translate into German: “We could have noticed the error”.','With a modal in this construction: hätten + bemerken + können.'],
['Translate into English: “Die Erklärung dürfte unvollständig sein”.','dürfte marks conjecture, not permission in this context.',null,'The explanation is probably incomplete.',['The explanation is probably incomplete.','The explanation is likely incomplete.','The explanation is likely to be incomplete.','It is probable that the explanation is incomplete.']],
['Complete: Wenn wir die Daten geprüft ___, hätten wir den Fehler bemerkt.','prüfen takes haben; past counterfactual: geprüft hätten.'],
['Wir hätten ___ Fehler bemerkt.','bemerken takes an accusative object; Fehler is masculine.'],
['Conjugate haben in Konjunktiv II: Du ___ kommen können.','du hättest; the double infinitive expresses ability or possibility in a hypothetical past situation.'],
['Start with Wir.','Auxiliary in V2; lexical verb + modal infinitive at the end.'],
['“Es lässt sich nicht ausschließen, dass ein Fehler vorliegt” means…','Not ruling out a possibility does not confirm it.',['It has been proved that there is an error','The possibility of an error cannot be ruled out','It has been proved that there are no errors']]
]);
L('unit-20','Integrated reading: mind, science and argument','Unpack an advanced argument with relatives, nominalizations and inferential limits.',[
['Identify premise (Prämisse), conclusion (Schlussfolgerung), assumption (Annahme) and objection (Einwand). danach/dabei may be temporal or discourse references; demnach = accordingly/consequently. Examine the antecedent recovered by each pronoun.'],
['Eine Erklärung, die ... , ist nicht schon deshalb ..., weil ... = an explanation which ... is not ... solely because ... . nicht schon deshalb blocks a particular inference; it does not necessarily deny the conclusion in every case.'],
['die Erklärung des beobachteten Verhaltens = the explanation of the observed behaviour. Verhalten is neuter; genitive des Verhaltens. Reconstruct subject, action and object when expanding a nominalization into a clause.'],
['Der Autor behauptet, Bewusstsein sei ... = the author maintains that consciousness is ... . Bewusstsein consciousness, Verhalten behaviour, vorhersagen predict, erklären explain. Distinguish attributed content from the text’s own judgment; C1 units introduce advanced reading and require further expansion.']
],['A theory that predicts behaviour does not automatically explain consciousness.','The explanation of the observed behaviour remains incomplete.','The author maintains that consciousness is a form of processing.','The theory is not false merely because it is incomplete.'],[
['Translate into German: “A theory that predicts behaviour does not automatically explain consciousness”.','die: feminine subject of the relative clause; vorhersagt ends the relative clause.'],
['Translate into English: “Die Theorie ist nicht schon deshalb falsch, weil sie unvollständig ist”.','The inference that incompleteness suffices for falsity is rejected.',null,'The theory is not false merely because it is incomplete.',['The theory is not false merely because it is incomplete.','The theory is not false just because it is incomplete.','The theory is not false simply because it is incomplete.','The theory is not false solely because it is incomplete.','The theory is not false for the sole reason that it is incomplete.']],
['Complete in Konjunktiv I: Der Autor behauptet, Bewusstsein ___ eine Form der Verarbeitung.','Third-person Konjunktiv I of sein: sei.'],
['die Erklärung ___ beobachteten Verhaltens','Neuter genitive: des beobachteten Verhaltens; adjective after des: -en.'],
['Conjugate vorhersagen inside the relative clause: eine Theorie, die Verhalten ___.','In a subordinate clause, the separable prefix remains joined to the final verb.'],
['Start with Die Erklärung.','Subject in position 1, ist in V2; noch = still/yet.'],
['Original teaching text: “Eine Theorie sagt Verhalten voraus. Daraus folgt nicht, dass sie Bewusstsein erklärt. Sie kann dennoch nützlich sein”. What conclusion does the text support?','It limits an inference between prediction and explanation; dennoch preserves possible usefulness.',['Predicting behaviour guarantees explaining consciousness','A theory may be useful without its predictive success being sufficient to explain consciousness','Every predictive theory is false']]
]);
  function R(id,title,kind,label,licenseNote,paragraphs,glossary,questions) {
    english.readings[id] = {title,kind,source:{label,licenseNote},paragraphs,glossary,
      questions:questions.map(([prompt,options,explanation])=>({prompt,options,explanation}))};
  }
R('reading-a1-1','Ich komme aus Chile · Introducing yourself','everyday','Original teaching text · introduction','German and translation written for this project; not a quotation.',[
'My name is Gabriel. I am from Chile and live in Santiago. I speak Spanish and English. Now I am learning German.',
'I like reading. Today I am reading a short text. The text is simple. I understand many words.'
],['to be called (without a reflexive pronoun)','gladly; expresses liking an activity','now','many words'],[
['Which languages does Gabriel speak before starting German?',['Spanish and Greek','Spanish and English','English and German'],'Ich spreche Spanisch und Englisch = I speak Spanish and English.'],
['What does Ich lese gern mean?',['I have to read','I am reading tomorrow','I like reading'],'gern with a verb expresses enjoyment of that activity.']
]);
R('reading-a1-2','Am Morgen · Morning','everyday','Original teaching text · routine','Original German and translation.',[
'It is seven o’clock. Anna is at home. She drinks water and eats bread. Her coffee is warm.',
'At eight she goes to work. Work begins at nine. Today Anna has plenty of time.'
],['in the morning','at home (location)','to work; zu der → zur','to begin'],[
['At what time does work begin?',['At seven','At eight','At nine'],'Die Arbeit beginnt um neun Uhr.'],
['In Ihr Kaffee, what does Ihr express?',['Her coffee','You (plural) drink coffee','There is coffee here'],'ihr is a possessive referring to Anna; it is capitalized because it starts the sentence.']
]);
R('reading-a1-3','Im Zimmer · Location','everyday','Original teaching text · space','Original German and translation.',[
'My room is small. It has a table, two chairs and a bed. There is a book on the table. There is a pen beside the book.',
'I am sitting on a chair. The window is open. I hear a train. The station is not far away.'
],['to lie/be located; here: to be on something','pen or pencil','window','not far away'],[
['Where is the book?',['On the bed','On the table','At the station'],'Auf dem Tisch liegt ein Buch.'],
['Why does auf dem Tisch use the dative?',['It describes location','Tisch is feminine','All movement requires dative'],'auf + dative expresses where something is located; dem Tisch is masculine dative.']
]);
R('reading-a1-4','Ein Buch, eine Frage · A first idea','philosophy','Original teaching text · questions and thought','Elementary philosophy written for this project; does not reproduce an author.',[
'I am reading a book. The book has many questions. One question is: What is true? I do not know the answer.',
'My friend is reading too. We talk about the book. He has an idea, and I have an example. We think together.'
],['true','answer','about the book; topic with accusative','together'],[
['What does the narrator know about the answer?',['He knows it with certainty','His friend knows it','He does not know it'],'Ich kenne die Antwort nicht negates knowing the answer.'],
['What does each person contribute?',['The friend an idea; the narrator an example','Both a translation','The friend an example; the narrator an idea'],'Er hat eine Idee, und ich habe ein Beispiel.']
]);
R('reading-a2-1','Ein Tag in Berlin · A day in Berlin','everyday','Original teaching text · Perfekt narrative','Fictional story and original translation.',[
'Yesterday I travelled to Berlin by train. I arrived at ten. At the station I met my friend. First we went to a café.',
'Afterwards we visited a museum. I learned a lot, but did not understand everything. In the evening I was tired. That is why I went home early.'
],['arrived; participle of ankommen','met; participle of treffen','afterwards','therefore; connecting adverb + verb in position 2'],[
['What did they do after going to the café?',['They returned to Chile','They visited a museum','They took a train'],'Danach haben wir ein Museum besucht.'],
['What do gefahren, angekommen and gegangen have in common in this story?',['They take haben','They are infinitives','They form the Perfekt with sein'],'These verbs describe intransitive travel/arrival and here form the Perfekt with sein.']
]);
R('reading-a2-2','Im Buchladen · Buying and comparing','everyday','Original teaching text · dialogue','Fictional dialogue and original translation.',[
'“Hello. I am looking for a book for a friend. He is learning German.” — “What kinds of texts does he like to read?” — “He likes short stories and philosophy. The book must not be too difficult.”',
'“This book has simple stories. Every story has a translation.” — “That is good. How much does it cost?” — “Twelve euros.” — “Then I will take it. Thank you very much!”'
],['to look for','too difficult','translation','Then I will take/buy it'],[
['Who is the book being bought for?',['A friend','The bookseller','A teacher'],'für einen Freund takes accusative after für.'],
['Which feature convinces the buyer?',['It has a hundred pages','Each story has a translation','It has no stories'],'Jede Geschichte hat eine Übersetzung.']
]);
R('reading-a2-3','Warum ich Deutsch lerne · Explaining a goal','learning','Original teaching text · motivation','Original German and translation.',[
'I am learning German because I want to read German books. English sometimes helps me: Haus and house are similar. But I also have to learn the differences.',
'I learn every noun with its article and plural. Every day I review some words. If I make a mistake, I look for a new example. That way I understand the rule better.'
],['because; subordinating conjunction with final verb','similar','noun','to review; to repeat'],[
['How does the narrator study nouns?',['Only their translation','With article and plural','Without examples'],'mit dem Artikel und dem Plural = with the article and plural.'],
['Where does möchte go in the weil clause?',['At the beginning','Always after ich','At the end of the subordinate clause'],'weil introduces a subordinate clause; finite möchte closes ich deutsche Bücher lesen möchte.']
]);
R('reading-a2-4','Eine kleine Beobachtung · Observing and doubting','science','Original teaching text · everyday observation','Fictional reasoning scene; not a scientific report.',[
'There are two cups on my table. One cup is white; the other is blue. I see them in daylight. In the evening the colours look different because the lamp has a warm light.',
'Have the cups changed? No, only the light is different. My observation therefore also depends on the surroundings. I must describe precisely when and where I see something.'
],['cup','daylight','to depend on','surroundings; environment'],[
['According to the story, what explains the apparent colour change?',['The lamp’s light','The cup changed material','The narrator changed the cups'],'Only the lighting changes, according to the text.'],
['What is the practical conclusion?',['Never describe colours','All perception is false','Describe the conditions of observation'],'The text requires saying when and where one observes; it does not reject all perception.']
]);
R('reading-b1-1','Eine Nachricht an die Vermieterin · Solving a problem','everyday','Original teaching text · formal email','Fictional example; no message is sent to anyone.',[
'Dear Ms Weber, for three days the heating in my apartment has not been working properly. Although I have switched it on, the living room stays cold. I have already checked whether the windows are closed.',
'Could you please send someone to look at the heating? On Wednesday I am at home from two p.m. If that time is not possible, please call me. Thank you very much for your help. Yours sincerely, Daniel Rojas'
],['landlady','heating','switched on/activated','Could you …?; polite request in Konjunktiv II','if; in case'],[
['How long has the problem existed?',['Since Wednesday','For three days','For three weeks'],'seit drei Tagen marks a duration that is still continuing.'],
['In der sich die Heizung ansieht, whom does der refer to?',['The living room','The heating','The person requested to be sent'],'The relative clause expands jemanden: someone who will inspect the heating.']
]);
R('reading-b1-2','Ein Fehler im Experiment · Revising a conclusion','science','Original teaching text · fictional experiment','Experiment invented to practise German; does not assert a real empirical result.',[
'A student wanted to know whether music helps with learning. She studied on Monday with music and on Tuesday without music. On Wednesday she took a test. She could remember Monday’s words better.',
'At first she thought the music was the cause. But then she noticed that Monday’s words were much easier. So she could not yet draw a reliable conclusion. For a better comparison she would have to use words of similar difficulty.'
],['cause','to notice; to realize','to draw a conclusion','would have to; Konjunktiv II of müssen','to use'],[
['What prevents attributing the result solely to music?',['The different difficulty of the words','The test was on Wednesday','The student did not study'],'Difficulty changed along with music; it is an alternative explanation.'],
['What does müsste express?',['A completed past','A necessity in a proposed scenario','A formal imperative command'],'Konjunktiv II presents what would need to change in a better design.']
]);
R('reading-b1-3','Eine Entscheidung begründen · Giving reasons','philosophy','Original teaching text · reasons and preferences','Original German and translation; no quotation or attribution of doctrine.',[
'Two friends discuss which book they should read together. Lea wants to choose a short book because she has little time. Amir wants to read a more difficult book because he wants to learn new concepts. Both have reasons for their decision.',
'They distinguish a personal wish from a shared goal. Their goal is to talk about a text every week. That is why they choose a book with short but demanding chapters. A good justification must therefore take into account which question is being answered at that moment.'
],['together; shared','to choose','demanding','to take into account','justification; substantiation'],[
['What is the shared goal?',['To read the longest book','To talk about a text every week','To avoid all difficulty'],'Ihr Ziel ist, jede Woche über einen Text zu sprechen.'],
['What solution do they agree on?',['Not to read any book','To read separate books without discussing them','A book with short, demanding chapters'],'It combines Lea’s limited time with Amir’s interest in new concepts.']
]);
R('reading-b1-4','Was ich zu wissen glaube · Memory and certainty','mind','Original teaching text · philosophy of mind','Fictional scene and original reflection; does not reproduce studies or authors.',[
'I am sure that I put my key on the table. At home, however, it is not there. My sister says I put it in my jacket pocket. At first I do not believe her.',
'Then I do indeed find the key in my jacket. My memory was very clear, but it was wrong. It does not follow that every memory is false. It only shows that a strong feeling of certainty is not yet proof.'
],['key','jacket pocket','indeed; in fact','it follows from this','proof; demonstration'],[
['Which conclusion does the example permit?',['All memory is false','Subjective certainty does not guarantee truth','The sister is always right'],'The text distinguishes feeling certain from having proof.'],
['Where does the narrator finally find the key?',['In the jacket','On the table','On the train'],'Dann finde ich den Schlüssel tatsächlich in meiner Jacke.']
]);
R('reading-b2-1','Ein Vorschlag für die Stadt · Public argument','society','Original teaching text · fictional urban debate','The situation is fictional: the text does not describe a real city.',[
'The city council is considering closing a street to cars at weekends. Supporters expect less noise and more space for pedestrians. Some shop owners, by contrast, fear that customers might no longer be able to reach their shops. Both sides appeal to experiences that have not yet been compared systematically.',
'A time-limited trial could help assess the consequences more accurately. It should examine not only sales but also accessibility and the quality of the public space. Even if average sales remained unchanged, this would not yet show that every individual shop is affected equally.'
],['to consider; to weigh up','supporter; advocate','to appeal to; to invoke','time-limited','sales; turnover','to the same extent'],[
['Why would a stable average be insufficient?',['Because sales never matter','Because it may hide different effects on individual shops','Because it proves that nobody changed their behaviour'],'The average does not determine how effects are distributed among shops.'],
['What does the text propose to improve the debate?',['A limited trial with several measures','A decision based solely on one anecdote','Ignoring accessibility and sales'],'The proposal combines a temporary Erprobung with sales, accessibility and quality of public space.']
]);
R('reading-b2-2','Vorhersage und Erklärung · Cognitive models','cognitive science','Original teaching text · contemporary cognitive science','Original exposition of methodological distinctions; not an extract from a publication.',[
'A model can reliably predict human responses without representing the actual thought process. If two models produce the same results, it does not follow that they use the same assumptions. Evaluating a cognitive model therefore crucially depends on the kind of achievement claimed: prediction, description or explanation.',
'An explanation should also show under what conditions a process occurs and why it changes. Additional measurements, for example of the time required, can help distinguish competing models. However, even good agreement with several measured variables does not automatically prove that the proposed mechanism is the only possible one.'
],['to predict','to represent; to model','assumption','to claim; to purport to provide','measured variable','agreement'],[
['What does the text distinguish?',['Prediction, description and explanation','A model and a person are identical','Assumptions are unimportant'],'The ability to predict does not itself imply representing the actual mechanism.'],
['What can time measurements contribute?',['Guarantee a unique theory','Eliminate the need for assumptions','Help distinguish models with equal prediction accuracy'],'They add constraints that may discriminate between models; they do not guarantee uniqueness.']
]);
R('reading-b2-3','Der Geist und seine Funktionen · Analytic philosophy','mind','Original teaching text · analytic philosophy of mind','Original, simplified presentation of functionalism; no quotation or modern extract.',[
'A functionalist account describes mental states in terms of their relationships to perceptions, actions and other mental states. A belief is then determined not only by what its bearer is made of, but also by the role it plays in a larger context. This at least permits asking whether different physical systems might possess similar mental functions.',
'However, this does not yet settle whether a description of functions also fully explains subjective experience. The question of what a system does and the question of how a state feels for that system must first be distinguished. Whether both questions can ultimately receive the same answer remains a subject of philosophical discussion.'
],['on the basis of; by means of','belief; conviction','bearer; carrier','subjective experience','ultimately'],[
['How does this presentation characterize mental states?',['Solely by the substance they are made of','By their relationships and functions','As entities unrelated to action'],'The text presents a functional criterion, not a merely material one.'],
['Is the problem of subjective experience declared solved?',['Yes, every function equals experience','Yes, experience does not exist','No; it is distinguished as an open question'],'The final sentence presents the relationship between the two questions as a matter of debate.']
]);
R('reading-b2-4','Das gleiche Wort, verschiedene Aufgaben · Wittgenstein','philosophy','Original didactic paraphrase · inspired by the later Wittgenstein','Original wording and examples on linguistic use; not a quotation or translation of Wittgenstein. The link identifies the primary archive, not a source of copied text.',[
'When someone says “I know”, we must ask in what situation those words are used. In a conversation about a train connection, the statement may mean that the person has checked the timetable. In an argument, by contrast, the same wording may express impatience. The words stay the same, but their task in the conversation can change.',
'This didactic reflection is inspired by Wittgenstein’s attention to linguistic use. It invites us to examine concrete examples before seeking one explanation for all uses of an expression. It does not claim that every meaning is arbitrary or that rules are unimportant.'
],['train connection','transport timetable','language use','inspired; stimulated','arbitrary; at will'],[
['What changes between the two examples?',['The conversational function of the expression','The words in the expression','The speaker’s language'],'The same wording performs different tasks depending on the situation.'],
['What is the status of this text?',['A literal quotation from a 1953 edition','An original didactic paraphrase','A translation of a Wittgenstein manuscript'],'The source explicitly declares original wording and examples inspired by a philosophical theme.']
]);
R('reading-c1-1','Kant · Aufklärung, 1784','philosophy','Immanuel Kant · Beantwortung der Frage: Was ist Aufklärung? (1784), p. 481','Only the first paragraph is a literal quotation from the first edition (1784), public domain in Chile (Kant died in 1804; Law 17.336, articles 10–11). Historical spelling is preserved. Second paragraph: original teaching commentary. Original English translation; no published translation is reproduced.',[
'Enlightenment is the human being’s emergence from self-incurred immaturity.',
'Original teaching commentary: The sentence is grammatically short but contains several abstract concepts. “Des Menschen” is a genitive dependent on “Ausgang”. The preposition “aus” requires the dative. “Selbst verschuldet” here denotes responsibility attributed to the human being, while “Unmündigkeit” is not simply a statement of chronological age.'
],['Enlightenment; here: intellectual emancipation','exit; starting point in other contexts','self-incurred; attributable to one’s own responsibility','immaturity; here: lack of intellectual autonomy','of the human being; singular genitive of der Mensch (weak declension)'],[
['Which case appears in aus seiner … Unmündigkeit?',['Accusative','Genitive','Dative'],'aus governs dative; seiner is feminine singular dative.'],
['Which part is reproduced verbatim from Kant?',['Only the first paragraph','The entire text, including exercises','Only the teaching commentary'],'The source distinguishes the historical quotation from original commentary; the English translation is original.']
]);
R('reading-c1-2','Hegel · Das Wahre und das Ganze','philosophy','G. W. F. Hegel · Phänomenologie des Geistes, preface; historical 1907 edition, p. 14','First paragraph: two literal sentences from Hegel’s text (1807 work), verified in the Dürr edition, Leipzig 1907, p. 14. Public domain in Chile: Hegel died in 1831; Law 17.336, articles 10–11. Only his text is copied, without modern editorial notes. Second paragraph: original commentary. Original English translation.',[
'The true is the whole. But the whole is only the essence that completes itself through its development.',
'Original teaching commentary: “Das Wahre” and “das Ganze” are nominalized adjectives. In the second statement, an expanded participial phrase precedes “Wesen”. To understand it, one can expand it into a relative clause: the essence that completes itself through its development. This transformation makes the syntax easier, but does not replace interpretation of Hegel’s concepts.'
],['the true; what is true; nominalized neuter adjective','the whole; totality','essence; also being or creature according to context','development','to complete oneself/itself; to reach realization','present participle with attributive ending -e'],[
['Which element does sich vollendende modify?',['ist','Wesen','aber'],'The participial phrase modifies Wesen: the essence that completes itself.'],
['What does expansion into a relative clause provide?',['It simplifies syntax while retaining the basic relationship','It solves all of Hegel’s philosophy','It changes the historical text without saying so'],'The commentary explicitly marks a didactic reformulation and its interpretive limits.']
]);
R('reading-c1-3','Bewusstsein und Erklärungsebenen · Consciousness','mind','Original teaching text · contemporary analytic philosophy of mind','Original argument for teaching; no publication extracts or claim of scientific consensus.',[
'Anyone who wants to explain consciousness must first specify which phenomenon requires explanation. The ability to report information can be distinguished from the question of whether and how something is subjectively experienced. This distinction does not yet commit us to a particular theory; it merely prevents success at one explanatory level from being prematurely presented as a solution at the other.',
'Suppose a system could answer every question about its internal states. From that performance alone one could neither directly infer the presence of subjective experience nor prove its absence. Additional assumptions would be required to determine the relationship between observable behaviour and experience. Precisely those assumptions form an essential part of philosophical debate.'
],['in need of explanation','to establish; to determine','prematurely; without sufficient examination','to present as','to infer something; auf + accusative','debate; argumentative engagement'],[
['What does the initial distinction prevent?',['Confusing informational performance with an explanation of experience','All empirical research','The need to define the phenomenon'],'It distinguishes explanatory goals without deciding a theory of consciousness in advance.'],
['What does ließe sich … schließen express?',['A conclusion already observed','A hypothetical inferential possibility','An imperative instruction'],'Konjunktiv II of lassen with sich + infinitive presents what could be inferred in the proposed scenario.']
]);
R('reading-c1-4','Modelle, Daten und Ungewissheit · Cognitive science','cognitive science','Original teaching text · contemporary cognitive-science methodology','Original didactic essay; not a translation, extract or review of a real article.',[
'A model’s fit to existing data must be distinguished from its performance on new data. The more flexible a model is, the more easily it can capture peculiarities of a sample that have no reliable significance outside that sample. High goodness of fit therefore does not, by itself, provide sufficient evidence for the robustness of the underlying assumptions.',
'A convincing test would require disclosing which predictions were fixed before analysis, which decisions were made only after inspecting the results, and under what conditions the model would fail. Stating uncertainty precisely does not mean abandoning knowledge. Rather, it makes visible how far the available findings support a conclusion and where further investigation remains necessary.'
],['validation; performance when put to the test','sample','goodness of fit','sufficient (sufficient condition)','to underlie','to disclose; to make explicit','finding; observed result'],[
['Why is good fit alone insufficient?',['Because every flexible model is false','Because it can capture peculiarities that do not generalize','Because data never inform us'],'The text distinguishes fitting a sample from working with new data.'],
['What is the purpose of expressing uncertainty?',['To delimit the support for conclusions','To abandon knowledge','To avoid all testing'],'It shows what findings support and where more investigation is needed.']
]);
  // Some source concept labels contain a German term followed by a Spanish gloss.
  // Preserve the term and localize only its gloss in the English projection.
  const conceptLabels = {
    'unit-15': {1:'Formgleichheit — coincidence of forms',3:'Quellenabstand — distance from the source'},
    'unit-17': {0:'Begriffsbestimmung — conceptual definition',3:'Negationsbereich — scope of negation'},
    'unit-18': {2:'Evidenzsprache — language of evidence'},
    'unit-20': {2:'Verdichtung und Entfaltung — condensation and expansion',3:'Bericht und Bewertung — attribution and evaluation'}
  };
  for (const [id, labels] of Object.entries(conceptLabels)) {
    for (const [index, label] of Object.entries(labels)) english.lessons[id].concepts[index].de = label;
  }
  data.english = english;
})();
