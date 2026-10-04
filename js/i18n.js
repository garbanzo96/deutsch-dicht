(function(root,factory){const api=factory();if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.DeutschI18n=api;})(typeof window!=='undefined'?window:globalThis,function(){
'use strict';
function project(base,language){
 const E=language==='en'?(base.english||{}):{};const en=language==='en';
 const vocabulary=base.vocabulary.map(v=>{const x=E.vocabulary?.[v.id]||{};return {...v,es:en?(x.en||v.en||v.es):v.es,note:en?(x.noteEn||v.noteEn||v.note):v.note,gender:en?(x.genderEn||v.genderEn||v.gender):v.gender,plural:en?(x.pluralEn||v.pluralEn||v.plural):v.plural,example:v.example?{de:v.example.de,es:en?(x.exampleEn||v.example.en||v.example.es):v.example.es}:undefined};});
 const grammar=base.grammar.map(g=>{const x=E.grammar?.[g.id];return x?{...g,...x,examples:g.examples.map((e,i)=>({de:e.de,es:x.examples?.[i]||e.es}))}:g;});
 const lessons=base.lessons.map(l=>{const x=E.lessons?.[l.id];const localized=x?{...l,...x,concepts:l.concepts.map((c,i)=>({...c,...(x.concepts?.[i]||{})})),examples:l.examples.map((e,i)=>({de:e.de,es:x.examples?.[i]||e.es})),exercises:l.exercises.map(e=>({...e,...(x.exercises?.[e.id]||{})}))}:l;const support=base.lessonSupport?.[l.id];return {...localized,readingId:support?.primaryReadingId||l.readingId,support};});
 const readings=base.readings.map(r=>{const x=E.readings?.[r.id];return {...r,title:en?(x?.title||r.titleEn||r.title):r.title,kind:en?(x?.kind||r.kindEn||r.kind):r.kind,source:{...r.source,label:en?(x?.source?.label||r.source.labelEn||r.source.label):r.source.label,licenseNote:en?(x?.source?.licenseNote||r.source.licenseNoteEn||r.source.licenseNote):r.source.licenseNote},paragraphs:r.paragraphs.map((p,i)=>({de:p.de,es:en?(x?.paragraphs?.[i]||p.en||p.es):p.es})),glossary:r.glossary.map((g,i)=>({...g,es:en?(x?.glossary?.[i]||g.en||g.es):g.es})),questions:r.questions.map((q,i)=>({...q,prompt:en?(x?.questions?.[i]?.prompt||q.promptEn||q.prompt):q.prompt,options:en?(x?.questions?.[i]?.options||q.optionsEn||q.options):q.options,explanation:en?(x?.questions?.[i]?.explanation||q.explanationEn||q.explanation):q.explanation})),support:base.readingSupport?.[r.id]};});
 return {...base,vocabulary,grammar,lessons,readings};
}
return {project};
});
