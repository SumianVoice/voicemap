




register_node("About", "root", {
    title:"About", desc:
'Welcome! This is a project by Sumi (sumianvoice.com) to put in one place as much voice information as is available.\n\
\n\
<b>What I did do:</b>\n- understand and then describe all of the concepts here\n\
<b>What I didn\'t do:</b>\n- personally invent and pioneer everything here\n\
\n\n\n\
<b class="hlight">Work In Progress</b>\
',
    color:"#333",
    tooltip:" ",
})



/// GLOTTAL
register_node("glottal", "root", {
    title:"Glottal", desc:
"Anything to do with the vocal folds vibrating.",
    color:"#373737",
    tooltip:" ",
})


// VOCAL WEIGHT
register_node("vfvm", "glottal", {
    title:"Vocal Fold Geometry", desc:
'Vocal Fold Vibratory Mass <b>(VFVM)</b> is the physical thing happening in the folds that causes several things; how much of the folds is vibrating is likely what causes the sound quality of vocal weight. Contact area between the folds, quotient, and surface area engaged in creating pressure waves all contribute to the resulting sound. This can be thought of similar to the thickness of a guitar string More mass in the string, deeper more bassy sound (and a predisposition to low pitch). High vibratory mass and therefore more surface area creating pressure waves, will result in a sort of "rumble" which is most notable at low pitches.\n\n\
--> more vocal fold moving --> more VFVM --> sounds heavier\n\
--> less VFVM --> can achieve higher pitches easier',
    color:"#556",
    tooltip:" ",
})
register_node("naturalisation", "vfvm", {
    title:"Pitch Naturalisation", desc:
'Each pitch has its desired level of vibratory mass / weight, so there is an equillibrium that can be found between pitch and weight. \n\
Pitch Naturalisation is the process and concept of naturally adjusting a voice to this equillibrium.\n\n\
--> voice sounds like it\'s always been speeking at this pitch --> naturalised\n\
--> voice sounds forced or "pushed" or stressed --> not naturalised',
    color:"#075",
    tooltip:"Sumianvoice",
})
register_node("stress", "naturalisation", {
    title:"Stress", desc:
'When a voice has too much weight for the pitch, it is not naturalised. When we notice it is not naturalised, the sound quality that tells us this is "stress". Stress can be described as "pushing" or "forcing" the voice.',
    color:"#357",
    tooltip:"Sumianvoice",
})
register_node("basepitch", "naturalisation", {
    title:"Base Pitch", desc:
'Base Pitch is the pitch a voice naturally returns to after intonation. It is determined by vocal weight and represents the pitch that a voice is naturalised to.',
    color:"#547",
    tooltip:"Sumianvoice",
})

register_node("vocalweight", "vfvm", {
    title:"Vocal Weight", desc:
'Vocal Weight is a sound quality associated with low pitch, masculine voices. It can sound "rumbly" or just "heavy", and is linked with pitch. Higher pitches demand lighter vocal weight.',
    color:"#267",
    tooltip:"OVC",
})


register_node("vfvmpressure", "vfvm", {
    title:"Pressure to Vibratory Mass", desc:
'When we speak, we supply some amount of pressure from the lungs. This can be "used up" either by the vocal folds coming together like a valve, or by the pressure needing to push more mass out of the way. This means more pressure, provided there is otherwise normal closure, will encourage more VFVM or vocal weight.\n\n\
--> more air pressure --> more vocal weight (if enough closure)\n\
--> more "pushing" --> more vocal weight',
    color:"#444",
    tooltip:"Sumianvoice",
})





//// CLOSURE
register_node("closure", "glottal", {
    title:"Closure", desc:
'Closure covers the closing of the vocal folds, and this allows for the air pressure to push them open, \
resulting in phonation. High closure means the folds come together more completely, low closure means they come together incompletely or with not enough contact, allowing air to get through without being "used" for vibrating the folds.\n\n <b class="hlight">You cannot feel closure.</b> If you think you can, there\'s something <u>wrong</u>. You also cannot control it directly, and if it is attempted, there will likely be muscle tension or strain involved.',
    color:"#546",
    tooltip:" ",
})
register_node("breathiness", "closure", {
    title:"Breathiness", desc:
"Breathy voices are low in closure, and this means air gets through without directly helping the vocal folds vibrate. This results in an airy and breathy voice. Breathy qualities are usually caused by low lateral cricoarytenoid muscle activity (LCA). It sounds slightly different to an air leak involving the interarytenoids (IA).",
    color:"#365",
    tooltip:" ",
})
register_node("hyperadduction", "closure", {
    title:"Hyperadduction", desc:
'Hyperadduction can <b class="hlight">irreparably damage</b> the vocal folds, cause nodules, pain and more awful things you don\'t want.\n\
Do not do it under <b class="hlight">any circumstances</b> for any reason for any length of time.\
Hyperadduction is when the vocal folds are pressed together very tightly, but unlike pressed phonation, this is taken to the extreme. It is often accidentally employed to reach higher notes at the very top of the range. Never force your voice to go "a little bit higher" when it\'s already requiring effort.',
    color:"#222",
    tooltip:"Sumianvoice",
})
register_node("closureloss", "closure", {
    title:"Loss Of Closure", desc:
'This is when the voice cuts out, and only air comes out. This happens if there is the right amount of tension in the folds. The folds are in position but do not close, and have too much tension lengthwise (i.e. pitch) to be vibrated, instead air just rushes past. This is natural, and isn\'t a problem, and should not be forcibly avoided. It means there\'s too much tension in the vocal folds and not enough closure. Tensing up will either trigger <b class="hlight">hyperadduction</b> (bad) or make the closure loss worse, so relax instead.',
    color:"#556",
    tooltip:" ",
})
register_node("ia", "closure", {
    title:"Interarytenoids (IA)", desc:
'The IA muscles increase closure at the back of the folds and provide some stability. If your voice is unstable, hollow sounding, or has an air leak, it\'s possible that there is a lack of IA activity. You can\'t control this directly, but if we focus on a relaxed, steady tone with good support, it is possible to impove IA activity.',
    color:"#356",
    tooltip:" ",
})
register_node("lowia", "ia", {
    title:"Low IA Air Leak", desc:
'A low IA voice will usually allow for an air leak to occur. This can also cause instability.',
    color:"#445",
    tooltip:" ",
})






register_node("speech", "root", {
    title:"Speech", desc:
'Anything regarding speech, which is how voice is applied to speaking words in phrases. This includes speech patterns and other things that are not voice, but are how the voice is applied to communication.',
    color:"#344",
    tooltip:" ",
})
register_node("intonation", "speech", {
    title:"Intonation", desc:
'Intonation is how the voice goes up and down in pitch during speech, and the pattern with which it does so.\n\
--> monotone --> no intonation',
    color:"#644",
    tooltip:" ",
})
register_node("tempo", "speech", {
    title:"Tempo", desc:
'This is how fast words are spoken, and how that speed of speech changes in order to be more expressive.',
    color:"#256",
    tooltip:" ",
})
register_instance("basepitch", "speech")






/////////////////
// VOCAL FUNCTION
register_node("vocalfunction", "glottal", {
    title:"Vocal Health", desc:
'Things relating to vocal function and health.',
    color:"#505450",
    tooltip:" ",
})

// SOVTE
register_node("sovte", "vocalfunction", {
    title:"SOVTEs", desc:
'Semi Occluded Vocal Tract Exercises [under construction]',
    color:"#346",
    tooltip:" ",
})
register_node("liptrills", "sovte", {
    title:"Lip Trills", desc:
'[under construction]',
    color:"#455",
    tooltip:" ",
})
register_node("sovteshj", "sovte", {
    title:"SH and J", desc:
'[under construction]',
    color:"#455",
    tooltip:" ",
})

// VOCAL DAMAGE
register_node("damage", "vocalfunction", {
    title:"Vocal Damage", desc:
'This covers abnormal glottal function caused by damage to features of the glottis, notably the vocal folds.',
    color:"#222",
    tooltip:" ",
})
register_node("atrophy", "damage", {
    title:"Atrophy", desc:
'Atrophy is when muscles lose their ability to activate due to very long periods of disuse. This usually takes many years, and is often reversable but with effort proportional to how long whatever function has been neglected.\n\n\
Common points of atrophy are:\n\
--> adductor (closure) muscles (IA and LCA) --> usually from neglecting the ability to become loud\n\
--> TA muscles (the "vocal weight" muscle) --> sometimes intentionally, usually from neglecting lower pitches\n',
    color:"#334",
    tooltip:" ",
})
register_node("nodules", "damage", {
    title:"Nodules", desc:
'Nodules or vocal fold polyps are scar-like tissue which forms on the edge of the vocal folds after long term damage. The causes are primarily hyperadduction, constant overuse of function through screaming, and others. The damage from this is not usually permanent, but it is substantially long term, and professional help is often needed to reduce the damage.',
    color:"#334",
    tooltip:" ",
})
register_node("muscletension", "damage", {
    title:"Muscle Tension", desc:
'Muscle tension is what is happening in muscle tension dysphonia. It appears in two modes; primary and secondary. Primary MTD is when muscles outside the larynx, such as in the neck, are being tensed when they shouldn\'t be. This is extraneous muscle tension. Secondary is when muscles in the larynx (usually the adductors and abductors) are tensing in direct opposition to eachother. Both forms can disable a voice completely in the medium term, or cause significant enough fatigue that it becomes untenable to speak for longer than a few minutes. If you get fatigue within 30 minutes of sustained conversation, there is a significant issue and you should see a Speech Language Pathologist.\n\n\
This is surprisingly common in transvoice students, though thankfully it is usually not the extent of a diagnosis, and is often accidentally treated throughout the training journey. If you have concerns, contact an SLP or otherwise seek a second opinion.',
    color:"#443",
    tooltip:" ",
})



// PITCH
register_node("pitch", "glottal", {
    title:"Pitch", desc:
'Pitch is the frequency of the vocal folds.',
    color:"#595055",
    tooltip:" ",
})
register_node("cricothyroid", "pitch", {
    title:"Cricothyroid (CT)", desc:
'The muscle controlling raising the pitch by stretching the vocal folds.',
    color:"#444",
    tooltip:" ",
})
register_node("thyroarytenoid", "pitch", {
    title:"Thyroarytenoid (TA)", desc:
'The muscle controlling lowering the pitch by contracting the vocal folds.',
    color:"#444",
    tooltip:" ",
})
register_node("mechanisms", "pitch", {
    title:"Vocal Mechanisms", desc:
'Laryngeal Vibratory Mechanisms',
    color:"#444",
    tooltip:" ",
})
register_node("m1", "mechanisms", {
    title:"M1", desc:
'Normal speaking register. The folds get more contact and the ligament vibrates as well as the mucosa.',
    color:"#455",
    tooltip:" ",
})
register_node("m2", "mechanisms", {
    title:"M2", desc:
'Falsetto / Head Voice register, often hollow-sounding or at least less full than M1.',
    color:"#455",
    tooltip:" ",
})
register_node("m3", "mechanisms", {
    title:"M3", desc:
'Whistle Register. This can be dangerous; do not attempt without appropriate supervision and instruction.',
    color:"#545",
    tooltip:" ",
})
register_node("m0", "mechanisms", {
    title:"M0", desc:
'Vocal Fry register. This is usually at the very bottom of the range, but can happen anywhere due to airflow mechanics.',
    color:"#545",
    tooltip:" ",
})
register_node("creak", "m0", {
    title:"creak", desc:
'Vocal Fry specifically caused by airflow mechanics, at a pitch higher than the bottom of the range where M0 is forced to happen.',
    color:"#644",
    tooltip:" ",
})


// OTHER PHONATION
register_node("otherphonation", "glottal", {
    title:"Other Phonation Sources", desc:
'Alternate, and usually undesirable ways to make sounds.',
    color:"#655",
    tooltip:" ",
})
register_node("fvf", "otherphonation", {
    title:"False Vocal Folds", desc:
'The false vocal folds or ventricular folds are just above the true vocal folds, and can sometimes interrupt normal phonation causing subharmonics or be used as compensation for inadequate closure or atrophied vocal folds. They are not particularly damaging for the voice, but more of an annoyance or a sign of another problem. The sound they usually cause can be described as a rough, buzzy overtone, or a "rattle" sound.',
    color:"#444",
    tooltip:" ",
})
register_node("arytenoids", "otherphonation", {
    title:"Arytenoids", desc:
'The arytenoids can vibrate if we constrict the pharynx enough, and this allows for some metal singing distortion and for sounds like the crow caw sound.',
    color:"#444",
    tooltip:" ",
})





// RESONANCE
register_node("resonance", "root", {
    title:"Resonance", desc:
"Resonance is how the vocal tract affects the sound that is passed through it. It is a filter, so it will highlight or reduce the signal sent from the glottis.",
    color:"#473747",
    tooltip:" ",
})
register_node("larynx", "resonance", {
    title:"Larynx", desc:
"The larynx is what houses the vocal folds. By shifting this up and down we can change the resonance of the voice.",
    color:"#445",
    tooltip:" ",
})
register_node("articulation", "resonance", {
    title:"Articulation", desc:
'[under construction]',
    color:"#445",
    tooltip:" ",
})
register_node("mouthspace", "articulation", {
    title:"Mouth Space", desc:
'[under construction]',
    color:"#445",
    tooltip:" ",
})
register_node("vowel", "articulation", {
    title:"Vowel", desc:
'[under construction]',
    color:"#445",
    tooltip:" ",
})
register_node("macrovowel", "vowel", {
    title:"Macrovowel", desc:
'[under construction]',
    color:"#445",
    tooltip:" ",
})

register_node("opc", "resonance", {
    title:"Oropharyngeal Constriction", desc:
"OPC is oropharyngeal constriction. It's not the bad kind of constriction however, and does not require effort to activate. This is associated with hyperfem voices, as it significantly boosts resonance / brightness. At the back of the mouth, above the root of the tongue, is an arch which can be constricted inward to reduce the size of the opening at the back of the mouth. This smaller opening causes the resonance frequency to raise, giving a resonance boost.",
    color:"#445",
    tooltip:"",
})








// VOCAL COVERS
register_node("covers", "root", {
    title:"Vocal Covers", desc:
'A vocal cover is a feature of voice that is unintended and usually mutes or otherwise impedes the intended function or sound.',
    color:"#443",
    tooltip:" ",
})
register_node("tongueroot", "covers", {
    title:"Tongue Root Retraction", desc:
'Associated with Stitch, Kermit, Meatwad. This is a slightly dark quality which can sound like something is stuck in the throat. It is achieved by moving the base of the tongue backward.',
    color:"#344",
    tooltip:" ",
})
register_node("nasality", "covers", {
    title:"Nasality", desc:
'Nasality is when air is let through the nasal passage on sounds that don\'t need this. Nasal sounds like N, M and NG are meant to be nasal, but most other sounds should not have air coming through the nose. We can test this by saying a phrase which doesn\'t have any nasal sounds in it, and pinching the nose; if it sounds honky, it is nasal.',
    color:"#344",
    tooltip:" ",
})
register_node("lowiahollow", "covers", {
    title:"Low IA Hollowness", desc:
'Low IA closure voices can become hollow, losing their harmonic power and brightness. This can sound similar to m2 / falsetto.',
    color:"#344",
    tooltip:" ",
})



