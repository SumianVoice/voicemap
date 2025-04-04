/*
Copyright (c) 2023 Sumi, SumianVoice <sumianvoice.com> <https://github.com/SumianVoice/voicemap>
    offered under MIT License <https://opensource.org/license/MIT/>
*/




Register.register_node("About", "root", {
    title:"About", desc:
`Welcome! This is a project by Sumi to put in one place as much voice information as is available. It is more a reference than a guide; you won't learn much of how to change your own voice here, but instead learn about voice itself and how it works, and about voice pedagogy.

Many of these concepts and notes are proven through use, not academics and are just a working theory used by teachers in the field to get the results we need. As with anything some random person on the internet says, question it and do your own research instead of implicitly trusting it. The focus of this project is mapping out currently known voice pedagogy, nothing more. If you have information, corrections or sources to add, please open an <a href="https://github.com/SumianVoice/voicemap">issue</a> or contact Sumitt{{Discord: sumianvoice or <@340353849414123523>, info[at]sumianvoice.com}}

<b>What I did do:</b>
<i style="color:#999">- understand and then describe all of the concepts here</i>
<b>What I did not do:</b>
<i style="color:#999">- personally invent and pioneer everything here</i>

<i style="color:#666">Copyright (c) 2025 Sumi, <<a style="color:#696040" href="https://sumianvoice.com">sumianvoice.com</a>>
Distributed under open source <a style="color:#696040" href="https://github.com/SumianVoice/voicemap/blob/master/LICENSE">MIT license</a>
</i>

<b class="hlight">Work In Progress</b>
`,
    color:"#333",
    tooltip:` `,
})




//////////////////////
// Intuitive
//////////////////////
Register.register_node("intuitive", "root", {
    title:"Intuitive Practice", desc:
`Most students focus too much on the how and the why of voice, but often all that is needed is to <b>use the voice</b> and gently direct it toward the goal, especially for voice feminisation. You probably don't need to know all about these fancy terms and concepts or know about the physiology of the voice. As such, below constitutes "enough" to get any fairly typical voice gender-wise if starting from the beginning with no significant vocal issues.

It is only when we get truly stuck or we are interested in vocal pedagogy that this sort of information finds its utility, but even here we are better off prioritising intuitive methods over theoretical or clinical ones. During lessons with a voice teacher, you'll often go through the slightly more technical things because it's a controlled environment and knowing what to look for speeds up the process, but if you are on your own then just using intuitive methods <b>correctly</b> is often a more certain way to avoid most pitfalls than going though all this technical info alone.

If you are unsure of what to do or are just starting out, try these notes below for a few weeks, and listen carefully to them and take them seriously, don't skip over a single word of it, as these are carefully worded.

There are some basic and t[[importantprinciples|important principles]] to take into account as well, see below.


`,
    color:"#075",
    tooltip:` `,
})

Register.register_node("intuitivefem", "intuitive", {
    title:"Feminisation Guide", desc:
`Never try hard. Never force it. The voice should sound natural at all stages of training. Go a little higher and speak like a girl for a whilett{{whatever you think 'feminine' sounds like; don't overthink it, just use whatever you are biased toward.}}. <b>If it's right, it will feel effortless.</b> The coordination can take time to develop.

Don't overthink it, just listen and pay attention to the voice as a whole.
Continue until goal is reached or any issues arise. Don't try hard, don't push to go higher or achieve any arbitrary goal, just 'lean' towards a feminine voicett{{use voice examples and listen to feminine voices regularly}} and speak.

This will work for most beginners if taken seriously.
`,
    color:"#946",
    tooltip:` `,
})

Register.register_node("intuitivemasc", "intuitive", {
    title:"Masculinisation Guide", desc:
`Never try hard. Never force it. The voice should sound natural at all stages of training. Avoid rough or buzzy sounds.tt{{pressed phonation, hyperadduction, FVF and fry mix all share harsh or buzzy sounds, so be very cautious of anything like this}} Try to hit lower notes repeatedly and gain more vocal power. Try speaking in a slighlty deeper, darker tone and experiment with dark vowel sounds like "haww".

Don't overthink it, just listen and pay attention to the voice as a whole.
Continue until goal is reached or any issues arise.

This will work for most beginners if taken seriously.
`,
    color:"#469",
    tooltip:` `,
})

Register.register_node("importantprinciples", "intuitive", {
    title:"Important Principles", desc:
`<b>No Effort</b>
You will never need to put more effort into any speech related training than you would into your untrained and relaxed voice. Ever. No exceptions. Yes this is true.

<b>Passive Awareness</b>
The harder you try to control things tightly, the less results you get, so use <i>passive awareness</i> instead; listen intently but don't try to control too tightly.

<b>Understand the "why"</b>
When doing an exercise or practice, don't just go through the motions, ask why. What <i>sound</i> did you get? <i>Why</i> does the exercise work? What sound do you <i>want</i>? Theory is not important to this.

<b>Exploration</b>
Exploration is key; we stumble around in the dark until we trip over the correct way or a hint of it, so explore and experiment with the above in mind, and let yourself make mistakes so you can learn from them.
`,
    color:"#445",
    tooltip:` `,
})



//////////////////////
// GLOTTAL
//////////////////////
Register.register_node("glottal", "root", {
    title:"Glottal", desc:
`Anything to do with the vocal folds vibrating. The glottis is the area of the larynx in which the vocal folds and false folds are located. The behavior of the components in this area are covered under the umbrella term <b>glottal behavior</b>.`,
    color:"#373737",
    tooltip:` `,
})


//////////////////////
// VOCAL FOLD VIBRATORY MASS
//////////////////////
Register.register_node("vfvm", "glottal", {
    title:"Vocal Fold Geometry", desc:
`Vocal Fold Vibratory Mass <b>(VFVM)</b> is likely part of the physical thing happening in the folds that causes several things; how much of the folds is vibrating and the surface area when interacting is likely what causes the sound quality of t[[vocalweight|vocal weight]] and affects t[[quotient|quotient]].tt{{source: internal testing by Sumi and based on various footage of laryngoscopy and papers that mention how much of the folds is active and related notes during different mechanisms. Know this isn't hard fact, but a working theory or "the closest we know of as an explanation".

<u><h3>Further reading</h3></u>\
B. Roubeau, N.H. Bernardoni, M. Castellengo
<i>'Laryngeal Vibratory Mechanisms: The Notion of Vocal Register Revisited'</i>
<a href="https://doi.org/10.1016/j.jvoice.2007.10.014">DOI:10.1016/j.jvoice.2007.10.014</a>

H. Lehoux, L. Popeil, and J.G. Švec
<i>'Laryngeal and Acoustic Analysis of Chest and Head Registers Extended Across a Three-Octave Range: A Case Study'</i>
<a href="https://doi.org/10.1016/j.jvoice.2022.02.014">DOI:10.1016/j.jvoice.2022.02.014</a>

C.T. Herbst, Q. Qiu, H.K. Schutte and J.G. Švec
<i>'Membranous and cartilaginous vocal fold adduction in singing'</i>
<a href="https://doi.org/10.1121/1.3552874">DOI:10.1121/1.3552874</a>
}} \
\
Contact area between the folds, t[[quotient|quotient]], and surface area engaged in creating pressure waves all contribute to the resulting sound. This can be thought of similar to the thickness of a guitar string. More mass in the string results in a deeper more bassy sound (and a predisposition to low pitch). High vibratory mass will result in a sort of 'rumble' which is most notable at low pitches.

- more vocal fold moving --> more VFVM --> sounds heavier
- less VFVM --> can achieve higher pitches easier`,
    color:"#445",
    tooltip:` `,
})

//////////////////////
// PITCH NATURALISATION
//////////////////////
Register.register_node("naturalisation", "vfvm", {
    title:"Pitch Naturalisation", desc:
`Each pitch has its desired level of t[[vfvm|vibratory mass]] / t[[vocalweight|weight]], so there is an equillibrium that can be found between pitch and t[[vocalweight|vocal weight]].
Pitch Naturalisation is the process and concept of naturally adjusting a voice to this equillibrium.tt{{Pitch Naturalisation is the core of the Pitch Intuitive Practice Methodology (PIPM) designed by Sumi / Sumianvoice, which is a near standalone methodology for changing the voice using the existing positive conflations most people have with pitch.}} Since this is only useful for reducing weight to match a higher pitch, it's a concept used mostly for voice feminisation and sometimes general range.

Usually we use this by raising pitch very slightly, then letting the voice naturally adjust without letting clarity and volume be sacrificed. We can also do this long term by raising the t[[basepitch|base pitch]] of the voice slightly and speaking here for a matter of several days or weeks. Given the right conditions - specifically that there is not much conscious control or effort which would cause t[[compensation|compensation]] - a voice will adjust rather than become strained or forced.

Naturalised voices:
- sound like the speaker has been speeking at this pitch their whole life
- sustainable and effortless to produce
Non-naturalised voices:
- sound forced or 't[[pushing|pushed]]' or stressed
- tiring or requires high level of concentration
- might sound like the speaker is intentionally speaking higher
`,
    color:"#075",
    tooltip:` `,
})
Register.register_node("basepitch", "naturalisation", {
    title:"Base Pitch", desc:
`Base Pitchtt{{first known use: Sumianvoice, 2022 (but probably not the first use)\n\nNote it was used in Scinguistics in 2020 and probably elsewhere but defined as the fundamental freq rather than a speech pattern feature like this is defined as. It was much later (2022) defined as a return to note and tested in a research project conducted on the Voice Art Project Discord server, but used before then for some time as an automatically returned-to pitch to aid in changing pitch and keeping that change consistent.}} is the pitch a voice most often naturally returns to after intonation. It is in essence the 'home position' for the voice. Since pitch and t[[vocalweight|vocal weight]] are linked, base pitch represents the pitch that a voice is t[[naturalisation|naturalised]] to and has the appropriate vocal weight for, and this is usually the lowest note a voice will naturally go to during normal speech.

For example if we speak at F3/175hz, the voice will go above F3 for intonation and then eventually return to F3 as the lowest note time after time. It can be changed at will once trained, and is the basis of t[[naturalisation|pitch naturalisation]]. It is possible for a voice to hit lower notes than the base pitch it is naturalised to, but generally this will be rare or used for expressiveness of speech that goes beyond that natural tendency to return to some pitch. Since it's a natural feature of voice, it stays very consistent over time.

Physiologically, it is likely determined by t[[closedquotient|CQ]] and t[[vfvmpressure|pressure]].

A relatively sure way to test what your base pitch is, is to read the following phases as if listing off each one, and draw out the last word of each phrase so that it is longer, such as "glaaaaaaass" instead of "glass". This will usually be the base pitch.

<i style="color:#aaa">Open the crate but don't break the <b style="color:#bbb">glass</b>.
Oak is strong and also gives <b style="color:#bbb">shade</b>.</i>
`,
    color:"#547",
    tooltip:` `,
})
Register.register_node("pitchresistance", "naturalisation", {
    title:"Pitch Resistance", desc:
`Pitch Resistancett{{first known use: Sumianvoice, 2023}} is when a voice attempts to raise in pitch, but something resists this and it sounds stressed or forced. Usually this is because of too much t[[vfvmpressure|pressure]] which converts to t[[closedquotient|CQ]]. Because it is most commonly caused by pressure / CQ / weight, it can be used as a sign of t[[pushing|pushing]] too much. 'Letting it go' a little and letting it get closer to t[[m2|falsetto]] can help.

Another, somewhat rare cause of this resistance is t[[pitchresconflation|pitch-resonance conflation]]. This can happen when the larynx is already at the top of its range, and the voice tries to raise pitch in this configuration. The pitch-resonance conflation triggers, but the larynx cannot move, so the pitch cannot move either. The simple test for this is to slide up in pitch again with a lower resonance, and if it doesn't get resistance then it was likely pitch-resonance conflation.`,
    color:"#645",
    tooltip:` `,
    audio:{
        ["Example"]:"pushing.mp3",
    },
})
Register.register_node("pushing", "naturalisation", {
    title:"Pushing", desc:
`Pushingtt{{first known (actually defined) use: Sumianvoice}} is when a voice adds more pressure in order to force a voice to get higher in pitch or louder, and usually results in t[[pitchresistance|pitch resistance]] through adding more t[[vocalweight|vocal weight]] / t[[vfvm|fold mass]] and often tense or improper t[[closure|closure]] when it is done as a t[[compensation|compensation]].
t[[belting|Belting]] is an example of a pushed configuration; it involves more t[[vfvmpressure|pressure]] and more weight in order to reach higher notes without leaving t[[m1|M1]].`,
    color:"#446",
    tooltip:` `,
    audio:{
        ["Example"]:"pushing.mp3",
    },
})

//////////////////////
// VOCAL WEIGHT
//////////////////////
Register.register_node("vocalweight", "vfvm", {
    title:"Vocal Weight", desc:
`Vocal Weighttt{{first known use: TransVoiceLessons}} is a sound quality associated with low pitch, masculine voices. It can sound 'rumbly' or just 'heavy', and is linked with pitch. Higher pitches demand lighter vocal weight else they will sound forced or stressed because of tt[[pitchresistance|pitch resistance]]. This is a perceptual, subjective quality we hear, but it is mostly explained by t[[closedquotient|closed quotient]] which it is derived from. Heavy vocal weight and high t[[resonance|resonance]] can sound cartoonish or 'goblin-like'.`,
    color:"#267",
    tooltip:` `,
    audio:{
        ["Very<br>Heavy"]:"low_heavy.mp3",
        ["Heavy"]:"E3_heavy.mp3",
        ["Light"]:"E3_light.mp3",
        ["Very<br>Light"]:"m2_full.mp3",
    },
})
Register.register_node("fullness", "vocalweight", {
    title:"Overfull and Underfull", desc:
`Overfulltt{{first known use: TransVoiceLessons}} relates to a voice that has too high vocal weight (and usually t[[closure|closure]]) for and too high resonance. As a result we get a buzzy or 'nerdy' sound.\n\
Underfull is when a voice has either too low weight or too low t[[resonance|resonance]], resulting in a dark or hooty voice.`,
    color:"#566",
    tooltip:` `,
})
Register.register_node("vocalweightgeneralisations", "vocalweight", {
    title:"Vocal Weight\nGeneralisations", desc:
`There are certain generalisations that help determine or change vocal weight. These are assuming normal voice characteristics, so if you're extremely breathy or any other issue is happening, these might not be accurate.

No resistance to going low in pitch --> <b>heavier</b>
No resistance to going high in pitch --> <i>lighter</i>
More powerful or 'pushed' voice --> <b>heavier</b>
Less forceful, more delicate voice --> <i>lighter</i>
Strong, forceful and gritty voice --> <b>heavier</b>
Clear tone, crisp, 'ringing' rather than booming --> <i>lighter</i>

These hold true in so many circumstances because vocal weight has an inverse relationship with pitch. The higher the pitch, the lower the vocal weight wants to be. If there is an imbalance, the voice may become unstable and yodel, or may sound stressed or strained as if there is tt[[pitchresistance|resistance]] to going higher in pitch.
`,
    color:"#376",
    tooltip:` `,
})
Register.register_node("m2aslightweight", "vocalweight", {
    title:"Falsetto as a Guide", desc:
`Falsetto or t[[m2|M2]] has extremely light t[[vocalweight|vocal weight]]. It is essentially 'too light'. It has some qualities we don't want, such as instability and hollowness from low t[[closure|closure]], but overall it can be a very useful voice feminisation method. We can use this as a guide; as we go higher in pitch to reach lighter weight, we will get closer to that falsetto quality. This can help with direction, and often prevent strain and t[[pushing|pushing]]. Note that this will not allow for a both strong / loud and light voice, only a light voice. Learning to reduce vocal weight through t[[naturalisation|pitch naturalisation]], t[[phraserepetition|phrase repetition]] or other methods is better if volume, clarity or high t[[closure|closure]] is desired. However, this can be an excellent way to give context to those other methods, as long as it isn't entirely relied on.

We can also start low, then try to make the voice more like t[[m2|falsetto]]. As soon as we are about to speak, we instead just do a slightly lower pitch than we were about to, and this process can continue all through the range. This can prevent strain effectively since we're always doing a lower pitch than our voice is adjusted to, and this is likely the lightest you can get though "just go directly to a light voice without pre-priming the voice" methods.
`,
    color:"#758",
    tooltip:` `,
})
Register.register_node("vocalweightdarkconflation", "vocalweight", {
    title:"Dark Heavy Voice Conflation", desc:
`A heavy voice will seem t[[brightness|darker]] due to several reasons:
- heavy voices are typically darker, so there is a subconscious mental assumption
- heavy voices typically use more t[[vfvmpressure|air pressure]] and flow, resulting in a smoother, duller soundtt{{Note that heavy and buzzy are not the same thing. A heavy voice can sound dark and hollow due to low t[[closure|closure]] and high pressure, or bright and buzzy due to high closure. That high closure is encouraged by high resonance, so there is further conflations there.}}
- the rumble-like sound quality of heavy vocal weight is auditorily similar to a dark low t[[resonance|resonance]] voice with normal closure

Note that since there is a conflation between closure and vocal weight. If the closure is kept the same, the above follows, but if the closure is let to increase with conflation with weight it will often sound the same or brighter.
`,
    color:"#567",
    tooltip:` `,
})


//////////////////////
// QUOTIENT
//////////////////////
Register.register_node("quotient", "vfvm", {
    title:"Quotient", desc:
`Quotient is a fraction of how long the folds spend in the open state versus their closed state. Since it is possible to measure, unlike t[[vocalweight|vocal weight]] or t[[vfvm|active fold mass / VFVM]], it is used in research. It closely approximates these other concepts under typical conditions. Usually this measurement is done with EGG.`,
    color:"#754",
    tooltip:` `,
    audio:{
        ["High CQ"]:"low_heavy.mp3",
        ["Med CQ"]:"E3_heavy.mp3",
        ["High OQ"]:"E3_light.mp3",
        ["Higher OQ"]:"m2_full.mp3",
    },
})
Register.register_node("openquotient", "quotient", {
    title:"Open Quotient (OQ)", desc:
`How long as a fraction of a cycle the vocal folds are open.`,
    color:"#544",
    tooltip:` `,
})
Register.register_node("closedquotient", "quotient", {
    title:"Closed Quotient (CQ)", desc:
`How long as a fraction of a cycle the vocal folds are closed and resisting air pressure. This affects the sound wave created, making it less like a sinewave and more like a 'squashed' sinewave with a longer low pressure component. More CQ is associated with higher t[[vocalweight|vocal weight]].`,
    color:"#544",
    tooltip:` `,
})
Register.register_node("speedquotient", "quotient", {
    title:"Speed Quotient (SQ)", desc:
`How quickly the vocal folds move between open and closed state. Somewhat affected by adduction.`,
    color:"#544",
    tooltip:` `,
})


Register.register_node("pressure", "vfvm", {
    title:"Pressure", desc:
`For the vocal folds to vibrate, we go through these steps:
<b>1)</b> add pressure from the lungs
<b>2)</b> close the vocal folds to block the airway
<b>3)</b> the pressure builds up behind the folds
<b>4)</b> the pressure overcomes the closing force of the folds, and pushes them out of the way
<b>5)</b> they start to come closed again to repeat the cycle.

How long is spent in (3) where the pressure is building up, and how much pressure there is, determines the felt pressure at the folds and contributes to (and likely is the primary cause) of t[[quotient|closed quotient]] and t[[vocalweight|vocal weight]].`,
    color:"#357",
    tooltip:` `,
})

Register.register_node("vfvmpressure", "pressure", {
    title:"Pressure to Vibratory Mass / CQ", desc:
`When we speak, we supply some amount of pressure from the lungs. This can be 'used up' either by the vocal folds coming together like a valve leading to higher t[[closure|closure]], or by the pressure building up longer leading to higher t[[closedquotient|CQ]]. This means that more pressure - provided there is otherwise normal closure - will encourage more VFVM / vocal weight.tt{{This is known mostly due to informal testing by Sumi, along with various papers which mention related facts. Theoretically, higher pressure with the same closure should result in higher closed quotient, the effect of which is to make the voice heavier.

<u><h3>Further reading</h3></u>\
C.T. Herbst, Q. Qiu, H.K. Schutte and J.G. Švec
<i>'Membranous and cartilaginous vocal fold adduction in singing'</i>
<a href="https://doi.org/10.1121/1.3552874">DOI:10.1121/1.3552874</a>
}}

- more air pressure --> more vfvm / vocal weight (if enough closure)
- more 'pushing' --> more vfvm / vocal weight

This has some but limited impact on the ability to increase weight; while more pressure encourages more weight it does not build the ability to do it, it only allows the level of ability to do weight which has already been built. Pressure feels like a 'powerful' voice, but does not require effort in any way.`,
    color:"#556",
    tooltip:` `,
})
Register.register_instance("pushing", "vfvmpressure")





//////////////////////
// CLOSURE
//////////////////////
Register.register_node("closure", "glottal", {
    title:"Closure", desc:
`Closure covers the closing of the vocal folds, and this allows for the air pressure to push them open, resulting in phonation. High closure means the folds come together more completely, low closure means they come together incompletely or with not enough contact, allowing air to get through without being 'used' for vibrating the folds. High closure can sound t[[brightness|brighter]] because it boosts harmonic power in the high frequencies. The bright 'edge' heard in some voices is this effect.

<b class="hlight">You cannot feel closure.</b> If you think you can, there's something <u>wrong</u>. You also cannot control it directly, and if it is attempted, there will likely be t[[muscletension|muscle tension]] or strain involved.`,
    color:"#546",
    tooltip:` `,
})
Register.register_node("breathiness", "closure", {
    title:"Breathiness", desc:
`Breathy voices are low in t[[closure|closure]], and this means air gets through without directly helping the vocal folds vibrate. This results in an airy and breathy voice. Breathy qualities are usually caused by low lateral cricoarytenoid (t[[lca|LCA]]) and interarytenoid muscle activity. It sounds slightly different to an air leak involving tension and lack of t[[ia|interarytenoid muscle]] (IA) activity. This will usually "dull" the voice slightly, making it softer and slightly t[[brightness|darker]].

Breathiness is often a t[[compensation|compensation]].`,
    color:"#456",
    tooltip:` `,
    audio:{
        ["Breathy"]:"breathy.mp3",
        ["Normal"]:"E3_light.mp3",
    },
})
Register.register_node("closureloss", "closure", {
    title:"Loss Of Closure", desc:
`A Loss of t[[closure|Closure]] is when the voice cuts out, and only air comes out. This happens if there is some amount of tension in the folds and not the right closure. The folds are in position but do not close, and have too much tension lengthwise (i.e. t[[pitch|pitch]]) to be vibrated and instead air just rushes past. This is natural, and isn't a problem, and <b>should not be forcibly avoided</b>. Forcing it will either trigger <b class="hlight">t[[hyperadduction|hyperadduction]]</b> (bad) or make the closure loss worse through more tension, so it is usually best to relax instead.

This can affect range, and it is thought that the main limiting factor for most beginners for pitch range up to about B5 is that there is too much tension in the folds than needed, and this causes the student to either press harder and keep tensing up, or lose closure. As such it's important to realise that except in extreme cases, it is not a lack of effort that prevents high pitches but an excess of tension.

Common causes of closure loss:
- excess tension in the vocal folds
- atrophy of t[[ia|IA muscles]]
- excess of mucus on folds`,
    color:"#556",
    tooltip:` `,
    audio:{
        ["Example"]:"closureloss.mp3",
    },
})
Register.register_node("lca", "closure", {
    title:"Lateral Cricoarytenoids (LCA)", desc:
`The LCA muscles adduct (push together) the vocal folds mostly in the middle. This is how phonation is possible, by putting the folds in the path of the air pressure in order for them to be made to vibrate. However without t[[ia|IA]], the t[[closure|closure]] will be incomplete and air leaky, and possibly unstable. The t[[thyroarytenoid|TA]] can contribute to this middle of the folds closure / medialisation as well.`,
    color:"#466",
    tooltip:` `,
})
Register.register_node("ia", "closure", {
    title:"Interarytenoids (IA)", desc:
`The IA muscles increase t[[closure|closure]] at the back of the folds and provide some stability.tt{{Mostly hypothetical, based on Sumi's testing and the behaviors of students' voices, but no hard empirical data for most of this.

<u><h3>Further reading</h3></u>\
C.T. Herbst, Q. Qiu, H.K. Schutte and J.G. Švec
<i>'Membranous and cartilaginous vocal fold adduction in singing'</i>
<a href="https://doi.org/10.1121/1.3552874">DOI:10.1121/1.3552874</a>
}} If your voice is unstable, hollow sounding, or has an air leak, it's possible that there is a lack of IA activity. You can't control nor feel this directly, but if we focus on a relaxed, steady tone with good support, it is possible to improve IA activity.`,
    color:"#356",
    tooltip:` `,
})
Register.register_node("lowiaairleak", "ia", {
    title:"Low IA Air Leak", desc:
`A low t[[ia|IA]] voice will usually allow for an air leak to occur. Particularly this is noticeable when other adduction is normal, i.e. the LCA is functioning correctly or even compensatorily more adducted. This can also cause instability.`,
    color:"#445",
    tooltip:` `,
})
Register.register_instance("lowiahollow", "ia")


Register.register_node("hyperadduction", "closure", {
    title:"Hyperadduction", desc:
`Hyperadductiontt{{first known use: Sumianvoice, 2022}} can <b class="hlight">irreparably damage</b> the vocal folds, cause t[[nodules|nodules,]] pain and more awful things you don't want.
Do not do it under <b class="hlight">any circumstances</b> for any reason for any length of time. It causes a buzzy, extremely high frequency "rattle" sound.

Hyperadduction is when the vocal folds are pressed together very tightly, but unlike pressed phonation, this is taken to the extreme. It is often accidentally employed to reach higher notes at the very top of the range. Never force your voice to go "a little bit higher" when it's already requiring effort.

This usually shows up as around 8000 to 15,000hz harmonics, and this can be a somewhat reliable way to test for it. t[[fvf|FVF]] causes a similar signal this high in frequency but less periodic and more noisy. FVF is the safer of the two of course.
`,
    color:"#222",
    tooltip:` `,
    audio:{
        ["Example"]:"hyperadduction.mp3",
    },
})

//////////////////////
// VOCAL FUNCTION
//////////////////////
Register.register_node("vocalfunction", "glottal", {
    title:"Vocal Health", desc:
`Things relating to vocal function and health.`,
    color:"#505450",
    tooltip:` `,
})

// SOVTE
Register.register_node("sovte", "vocalfunction", {
    title:"SOVTEs", desc:
`Semi Occluded Vocal Tract Exercises. These are exercises that can be done in a relaxed way but give good opportunities to train the voice in various fundamental ways. Mostly they help with clarity, reducing strain and tension, stability, and t[[closure|closure]]. These all must be done in a relaxed way and not pushed, and it's best not to set arbitrary goals like "hit this specific note" since that will allow for more t[[compensation|compensation]] and tension if predisposed to it.

These work by partially blocking the airway above the folds, such as at the lips, which causes backpressure on the folds, as a kind of air cushion.
Often these are done by picking random pitches or doing progressively higher pitches, providing one is careful not to force the voice or try hard.`,
    color:"#346",
    tooltip:` `,
})
Register.register_node("liptrills", "sovte", {
    title:"Lip Trills", desc:
`Vibrating the lips. This can be described as "idling motorcycle".`,
    color:"#455",
    tooltip:` `,
})
Register.register_node("sovteshj", "sovte", {
    title:"SH and J", desc:
`The SH sound is a SOVTE, when we voice the SH sound it becomes the J sound.`,
    color:"#455",
    tooltip:` `,
})

//////////////////////
// VOCAL DAMAGE
//////////////////////
Register.register_node("damage", "vocalfunction", {
    title:"Vocal Damage and Disorder", desc:
`This covers abnormal glottal function caused by damage to features of the glottis, notably the vocal folds, or from behavioral issues (e.g. t[[muscletension|MTD]]). Almost everything here is a "seek medical help" situation.`,
    color:"#222",
    tooltip:` `,
})
Register.register_node("atrophy", "damage", {
    title:"Atrophy", desc:
`Atrophy is when muscles lose some of their ability to activate due to very long periods of disuse. This usually takes many years, and is often reversable but with effort proportional to how long whatever function has been neglected. This can be atrophy of the coordination to do something or physical atrophy of a muscle.

Common points of atrophy are:
- Adductor (t[[closure|closure]]) muscles (t[[ia|IA]] and t[[lca|LCA]]), usually from neglecting the ability to become loud
- t[[thyroarytenoid|TA]] muscles (the "t[[vocalweight|vocal weight]]" muscle), sometimes intentionally, usually from neglecting lower pitches
- t[[m2|M2]] access, usually just through disuse, sometimes due to avoiding it
`,
    color:"#233",
    tooltip:` `,
})
Register.register_node("muscletension", "damage", {
    title:"Muscle Tension", desc:
`Muscle tension is what is happening in Muscle Tension Dysphonia (MTD). It appears in two modes; primary and secondary. Primary MTD is when muscles outside the larynx, such as in the neck, are being tensed when they shouldn't be. This is extraneous muscle tension. Secondary is when muscles in the larynx (usually the adductors and abductors) are tensing in direct opposition to eachother.tt{{source: Dysphonia.org, <a href="https://dysphonia.org/voice-conditions/muscle-tension-dysphonia/">https://dysphonia.org/voice-conditions/muscle-tension-dysphonia/</a>}} Both forms can disable a voice completely in the long term, or cause significant enough t[[fatigue|fatigue]] that it becomes untenable to speak for longer than a few minutes. If a voice gets fatigue within 30 minutes of sustained conversation, there is likely a significant issue and a Speech Language Pathologist (SLP) should be consulted about this.


General muscle tension is surprisingly common in transvoice students, though thankfully it is usually not the extent of a diagnosis.
If you have any concerns, it is advisable to contact an SLP or otherwise seek a second opinion.`,
    color:"#332",
    tooltip:` `,
})
Register.register_node("fatigue", "damage", {
    title:"Fatigue", desc:
`When the voice is either overused such as when speaking loudly for several hours with minimal rest or when it is strained when doing something incorrectly or with effort, the voice will feel lazy as if it doesn't want to work any more. It might also feel as though the same functions that could easily be done before take more effort. This is fatigue, and is normal in the case  extremely long amounts of time using the voice, however it can be a sign of t[[muscletension|muscle tension]] or other issues if it happens regularly, or if it happens within an hour of starting speaking. Often this also is accompanied by a feeling of tension or discomfort, or a slight "muscle burn" sensation.

Common causes are:
- forcing the voice and t[[pushing|pushing]] it to a higher pitch than is comfortable
- trying to consciously control things too much and getting t[[compensation|compensation]]
- learning through methods that encourage muscle tension such as swallow and hold and similar "just make the throat forcibly smaller" methods
- speaking very loudly and with high pressure

It is slightly different from a voice just being "tired" which can be more described as the voice becoming weak over time due to it being used excessively. This can happen for example when doing t[[sovte|SOVTEs]] for too long. Unlike fatigue, it usually does not include discormfort or tension.`,
    color:"#134",
    tooltip:` `,
})
Register.register_node("fatiguevstiredness", "fatigue", {
    title:"Fatigue vs Tiredness", desc:
`It is normal to have the voice feel weaker after several hours of constant speaking, but not after less than 60 minutes. These are the differences between fatigue and tiredness.

Fatigue
- commonly includes 'muscle burn' sensation
- is a sign of muscle tension or overuse
- can happen very soon after speaking (within 60min)
- usually symptoms reduce substantially within seconds of stopping speaking

Tiredness
- completely natural
- only happens after several (2+) hours of speaking
- a dull, weak feeling, but no pain or burn
- does not subside immediately, but the voice remains feeling weak for some time after stopping speaking

Both are to be avoided, but fatigue is a sign of a larger problem. Usually tiredness will come from just using the voice at all, where fatigue comes from incorrect use of voice, such as muscle tension and constriction.
`,
    color:"#246",
    tooltip:` `,
})
Register.register_node("nodules", "damage", {
    title:"Nodules", desc:
`Nodules are hardened scar-like or callous-like tissue which forms on the edge of the vocal folds after long term damage. The causes are primarily t[[hyperadduction|hyperadduction]], constant overuse of function through screaming, and others. The damage from this is not always permanent, but it is substantially long term, and professional help is often needed to reduce the damage.`,
    color:"#333",
    tooltip:` `,
})
Register.register_node("vocalpolyp", "damage", {
    title:"Vocal Polyp", desc:
`A lesion on a vocal fold similar to a blister.`,
    color:"#333",
    tooltip:` `,
})
Register.register_node("vocalcyst", "damage", {
    title:"Vocal Cyst", desc:
`A rounded mass on a vocal fold usually as a result of severe and rapid damage. Can be permanent.`,
    color:"#333",
    tooltip:` `,
})
Register.register_node("diplophonia", "damage", {
    title:"Diplophonia", desc:
`Diplophonia is when the vocal folds vibrate in two distinct places, causing two independent sounds. This is not the same as subharmonics which are bound to the t[[pitch|F0]], in diplophonia the extra frequency can diverge from the other, meaning the vocal folds have two vibratory patterns occuring simultaneouslytt{{<img src="img/diplophonia-vs-subharmonics.jpg" width=300 />}}. This means the voice is either damaged, such as with t[[nodules|nodules]], t[[vocalcyst|vocal cysts]], t[[vocalpolyp|vocal polyps]] or is extremely tense at an extremely high pitch.

It is a warning sign that a voice has already received medium-or-longer-term damage to the folds themselves, or it's about to. If this is observed, stop immediately, do only light voice use, and seek a professional opinion.`,
    color:"#332",
    tooltip:` `,
})





//////////////////////
// tvfconstriction
//////////////////////
Register.register_node("tvfconstriction", "closure", {
    title:"Vocal Fold Constriction", desc:
`The true vocal folds can be constricted or tensed, and this can cause some issues, including loss of clarity, instability, more creak, more t[[subharmonics|subharmonics]] and more. This might be due to t[[muscletension|muscle tension]] between adductors and abductors, or just too much of one adductor muscle vs another such as high t[[lca|LCA]] vs low t[[ia|IA]].
`,
    color:"#655",
    tooltip:` `,
})





//////////////////////
// PITCH
//////////////////////
Register.register_node("pitch", "glottal", {
    title:"Pitch", desc:
`Pitch is the frequency of the vocal folds. Several muscles such as the t[[thyroarytenoid|thyroarytenoids]] and t[[cricothyroid|cricothyroids]] change the level of lengthwise tension in the vocal folds and this defines the frequency with which they vibrate.`,
    color:"#595055",
    tooltip:` `,
})
Register.register_node("mechanisms", "pitch", {
    title:"Vocal Mechanisms", desc:
`Laryngeal Vibratory Mechanisms tt{{<u><h3>Further reading</h3></u>\
B. Roubeau, N.H. Bernardoni, M. Castellengo
<i>'Laryngeal Vibratory Mechanisms: The Notion of Vocal Register Revisited'</i>
<a href="https://doi.org/10.1016/j.jvoice.2007.10.014">DOI:10.1016/j.jvoice.2007.10.014</a>}}
These are mostly arbitrary delineations between different configurations which help define different type of voice production. Given enough training it is possible to smoothly t[[m2blend|blend]] most mechanisms, as they mostly just describe different levels of t[[closure|closure]] and t[[vfvm|fold vibratory mass]]. This means that given enough training, M1 and M2 for example become more or less irrelevant since the imbalance that would normally make them distinct is no longer an obstacle.`,
    color:"#444",
    tooltip:` `,
})
Register.register_node("m1", "mechanisms", {
    title:`M1 <i style="color:#999">(modal voice)</i>`, desc:
`Normal speaking register. The folds get more complete contact (t[[closure|closure]], especially t[[ia|IA]]) and the ligament vibrates as well as the mucosa and some of the muscle (the t[[thyroarytenoid|TA]]).`,
    color:"#455",
    tooltip:` `,
})
Register.register_node("m2", "mechanisms", {
    title:`M2 <i style="color:#999">(falsetto)</i>`, desc:
`Falsetto / Head Voice register, often hollow-sounding or at least less full than M1. This usually has only the mucosa and ligament vibrating or at least much less of the muscle and ligament than in M1. Often this is coupled with low t[[closure|closure]].

Falsetto refers to the hollow sound quality, where M2 refers to the vibratory pattern.`,
    color:"#455",
    tooltip:` `,
    audio:{
        ["Example"]:"m2.mp3",
    },
})
Register.register_node("m2blending", "m2", {
    title:`M2 Blending <i style="color:#999">(mix voice)</i>`, desc:
`It is possible to blend between M1 and M2, negating the break and smoothly transitioning. This process is a delicate balance of several parts of the voice and should not be effortful or tense. It is assumed that maintaining t[[closure|closure]] (especially t[[ia|IA]]) and reducing t[[vfvmpressure|pressure]] and t[[vfvm|vibratory mass]] to reduce the imbalance that would cause the break is how this is done. There is also some evidence that t[[thyroarytenoid|TA]] and t[[cricothyroid|CT]] in tension are involved in breakstt{{\
In particular, this Kochis-Jennings paper shows that in abrupt transitions, TA and CT are in more tension than in smooth transitions.

Kochis-Jennings KA, Finnegan EM, Hoffman HT, Jaiswal S, Hull D.
<i>'Cricothyroid muscle and thyroarytenoid muscle dominance in vocal register control: preliminary results'</i>
<a href="https://doi.org/10.1016/j.jvoice.2014.01.017">DOI:10.1016/j.jvoice.2014.01.017</a>}}.`,
    color:"#457",
    tooltip:` `,
})
Register.register_node("m3", "mechanisms", {
    title:`M3 <i style="color:#999">(whistle)</i>`, desc:
`Whistle Register. This can be dangerous; do not attempt without appropriate supervision and instruction.`,
    color:"#545",
    tooltip:` `,
    audio:{
        ["Example"]:"m3.mp3",
    },
})
Register.register_node("m0", "mechanisms", {
    title:"M0", desc:
`Vocal Fry register. This is usually at the very bottom of the range, but can happen anywhere due to airflow mechanics. Often there is a casual separation of t[[creak|creak]] and fry, with creak being from too little airflow for periodic vibration to happen but still enough t[[closure|closure]] to make aperiodic sound, and fry being caused by not being able to vibrate the folds any slower for whatever configuration of voice, whether it be because of low pitch, low airflow, or tension. These are then mostly different causes but have the same resulting vocal fold behavior.`,
    color:"#545",
    tooltip:` `,
})
Register.register_node("mechanismbreak", "mechanisms", {
    title:"Vocal Break", desc:
`Vocal breaks, mechanism breaks, voice cracks. These happen due to an imbalance in fold vibratory mass / t[[vocalweight|vocal weight]]. t[[ia|IA]] adduction probably also helps substantially to reduce instability in this.`,
    color:"#445",
    tooltip:` `,
})
Register.register_node("noseperationhypothesis", "mechanisms", {
    title:"No Separation Hypothesis", desc:
`This is a hypothesistt{{first known attribution: Sumianvoice, 2024\n\nThere may be a mention of this in research somewhere, and if you find anything, send it in!}} that the difference between mechanisms is not a vibratory pattern that is distinct and separated, but instead a grouping of features of voice that coincide with that resulting vibratory pattern. For example, M2 might have lower t[[ia|IA closure]], leading to incomplete vibration of the folds and lower t[[closedquotient|closed quotient]] (CQ), and the bifurcation event (break) could be explained as being caused by the imbalance of vibration frequency and t[[closedquotient|CQ]], with the easiest solution to that imbalance being the loss of IA closure. t[[m3|M3]] is simply very low pressure and high closure, and t[[m0|M0]] is when the vibration cannot happen slow enough, either due to not enough CQ to allow for a frequency that is so low / slow, or closure causing speed quotient (SQ) to take too much of the vibratory cycle and therefore lead to the same result. This hypothesis fits the anecdotal and experimental observation of many people, but it is not known if these are the physical factors or if the relationship is coincidental.

The lack of a bifurcation event in some (especially cis female) voices could be explained by either a lack of ability to increase CQ to imbalance causing levels, or that the pressure is too low to cause that CQ; in other words the voice is too t[[vocalweight|light]] to break.`,
    color:"#254",
    tooltip:` `,
})
Register.register_node("creak", "m0", {
    title:"Creak", desc:
`Vocal fry specifically caused by airflow mechanics, at a pitch higher than the bottom of the range where t[[m2|M0]] is forced to happen.`,
    color:"#644",
    tooltip:` `,
})
Register.register_node("frymix", "m0", {
    title:"Fry Mix", desc:
`Since mechanisms are not necessarily distinct but instead mostly arbitrary delineations on a spectrum, it is possible to blend most mechanisms. Just as we can adjust the needed components to t[[m2blending|blend between M1 and M2]], we can blend between M1 and M0.

It is usually to be avoided unless for stylistic reasons, or for singing. It is sometimes accidentally achieved during voice masculinisation training, since it allows for much lower pitches (e.g. a normal floor of 120hz down to a floor of 90hz with fry mix). Sometimes people use this during voice masculinisation thinking the lower pitch means progress has been made, but fry mix does not increase vocal weight or range, it only cheats a little more range. That is, using fry mix to increase range will alwaystt{{Technically there may be some exception to this, but it's yet to be discovered.}} result in failure.
`,
    color:"#554",
    tooltip:` `,
})

Register.register_node("belting", "pitch", {
    title:"Belting", desc:
`Belting is a singing concept, and the process allows a singer to hit higher notes without blending with t[[m2|M2]]. It works by increasing t[[vfvmpressure|air pressure]], fold mass / t[[vocalweight|vocal weight]] and t[[closure|closure]]. As a result, we get a kind of controlled yelling. It is advised to not learn belting until t[[m2blending|M2 blending]] is somewhat mastered, since belting will drastically cut down the top of the pitch range for most people and make vocal weight harder to control if it's the only way they ever reach high notes. The ability to do M2 at all can t[[atrophy|atrophy]] over long periods.

As a method of singing however it is quite useful when learned properly; just getting louder and pushing the voice to go higher is <i>not how you do it</i> though, it requires a proper balance of all the elements mentioned above, or else we will only achieve a lot of t[[compensation|compensation]] and strain.
`,
    color:"#556",
    tooltip:` `,
})
Register.register_node("beltblend", "belting", {
    title:"Belt Blend", desc:
`It might seem impossible at first, but it is possible to t[[belting|belt]] up to some point and then, still in the belt, blend into t[[m2|M2]]. Not much is actually known about this and how to do it currently. This like most vocal features does not require strain or effort, but is a careful balance.

As far as can be deduced, this is likely through reducing t[[thyroarytenoid|TA]] while balancing t[[cricothyroid|CT]], keeping or increasing t[[closure|closure]] and reducing the air pressure slighlty. All of these things are theoretically needed in order to go from a pushed, loud belt into a gradually lighter but still full sounding M2.
`,
    color:"#345",
    tooltip:` `,
})

Register.register_node("pitchmatching", "pitch", {
    title:`Pitch Matching`, desc:
`Pitch Matching is the ability to replicate a note you hear. Some people naturally have this from experience, some need to learn it.
You can use <a href="https://szynalski.com/tone#G2,tri,v0.2">a tone generator</a> or any virtual keyboard or synth or DAW to do this.`,
    color:"#456",
    tooltip:` `,
})

Register.register_node("beating", "pitchmatching", {
    title:`Beating`, desc:
`Beating is when two notes are played that are very close in frequency. If you play a 100hz note and a 105hz note, they will interfere with eachother every 5 hz. It will take a certain amount of cycles for both notes to line up and cancel out. This works the same way as active noise cancelling; if you imagine the sound wave as a swing, if it is pushed one way with some force, then as it is coming back it's pushed the same way with the same force, it cancels out. Vibrations in the air are similar, and you can cancel out some sound with the opposite of the same sound. Similarly the sound waves can add together at the peaks instead of cancel out, and this happens at the same frequency as the cancelling out of course.

The result is that two sounds played at the same time will produce a kind of 'ghost' of a third note which is equal to the difference between the two notes.
100hz and 105hz will cause a 'ghost note' at 5hz. The original notes will still be heard, but will be morphed into a third frequency by this interaction between the sound waves.
`,
    color:"#645",
    tooltip:` `,
})

Register.register_node("cricothyroid", "pitch", {
    title:"Cricothyroid (CT)", desc:
`The muscle controlling raising the pitch by tilting the thyroid cartilage (the shield-like cartilage of the larynx) and thereby stretching the vocal folds.`,
    color:"#444",
    tooltip:` `,
})

Register.register_node("thyroarytenoid", "pitch", {
    title:"Thyroarytenoid (TA)", desc:
`The muscle controlling lowering the pitch by contracting the vocal folds. This likely contributes substantially to fold vibratory mass, since the folds will bulk up slightly. It, along with the CT control pitch, usually with both contracting somewhat; the CT providing tension, and the TA providing slight amounts of t[[closure|closure]], and allowing for a more full sound.`,
    color:"#444",
    tooltip:` `,
})

Register.register_node("rangeexpansion", "pitch", {
    title:"Range Expansion", desc:
`It is possible to expand the pitch range in several ways, and for two main ends.
1. to expand the comfortable speaking range
2. to expand the overall phonation range

If we want to expand the range in which we speak, it is a different goal than reaching the absolute highest note we can, and requires a different approach. Both will not require physical effort or strain, but instead a precise coordination in order to minimise tension while keeping enough closure to continue making the voice function.`,
    color:"#444",
    tooltip:` `,
})







//////////////////////
// OTHER PHONATION
//////////////////////
Register.register_node("otherphonation", "glottal", {
    title:"Other Phonation Sources", desc:
`Alternate, and usually undesirable ways to make sounds.`,
    color:"#655",
    tooltip:` `,
})
Register.register_node("fvf", "otherphonation", {
    title:"False Vocal Folds", desc:
`The false vocal folds or ventricular folds are just above the true vocal folds, and can sometimes interrupt normal phonation causing t[[subharmonics|subharmonics]] or be used as t[[compensation|compensation]] for inadequate t[[closure|closure]] or atrophied vocal folds. They are not particularly damaging for the voice, but more of an annoyance or a sign of another problem. The sound they usually cause can be described as a rough, buzzy overtone, or a 'rattle' sound.

Typically they cause aperiodic (messy) sounds in the 8000 to 15,000hz range. It can sound similar to t[[hyperadduction|hyperadduction]], but less harmonic / more rough, since hyperadduction causes clear harmonics instead of noise. How FVF effects look on a spectrogram can be described as similar to t[[m0|vocal fry]], but in the 10khz range instead of the 30-200hz range.
It is unclear exactly why and how FVF causes this high frequency.`,
    color:"#444",
    tooltip:` `,
})
Register.register_node("arytenoids", "otherphonation", {
    title:"Arytenoids", desc:
`The arytenoids can vibrate if we constrict the pharynx enough, and this allows for some metal singing distortion and for sounds like the crow caw sound.`,
    color:"#444",
    tooltip:` `,
})







//////////////////////
// SPEECH
//////////////////////
Register.register_node("speech", "root", {
    title:"Speech", desc:
`Anything regarding speech, which is how voice is applied to speaking words in phrases. This includes speech patterns and other things that are not voice, but are how the voice is applied to communication.`,
    color:"#344",
    tooltip:` `,
})
//////////////////////
Register.register_node("intonation", "speech", {
    title:"Intonation", desc:
`Intonation is how the voice goes up and down in pitch during speech, and the pattern with which it does so.
- monotone = no intonation
- pitch goes up when you start speaking and eventually comes down = intonation

The pitch a voice eventually and most often returns to after it intonates up is called the t[[basepitch|base pitch]].

Generally speaking, feminine voices will have higher intonation range and move up and down through the range with higher frequency, while masculine voices tent to have a more subdued intonation pattern, although it is important to note that these generalisations don't make a voice more feminine or more masculine directly, but augment other patterns such as articulation. Plenty of masculine voices have huge intonation range and frequency for example, but since they don't have the articulation and other patterns and features of voice to go with it, they don't sound feminine.`,
    color:"#644",
    tooltip:` `,
})
Register.register_node("tempo", "speech", {
    title:"Tempo", desc:
`This is how fast words are spoken, and how that speed of speech changes in order to be more expressive. A generalisation, but not a rule, is that feminine voices typically have more changes to tempo throughout speech, where masculine voices are more often at a similar tempo throughout.`,
    color:"#256",
    tooltip:` `,
})
Register.register_node("emphasis", "speech", {
    title:"Emphasis", desc:
`Emphasis is when we change something about the voice in order to draw more attention to or place more importance on some word or phrase. In masculine voices this is often done with t[[pushing|pushing]] i.e. adding power and volume. Other ways include t[[intonation|intonation]], slowing t[[tempo|tempo]] and changing t[[articulation|articulation]].`,
    color:"#556",
    tooltip:` `,
})



Register.register_instance("basepitch", "speech")



Register.register_node("microbehaviors", "speech", {
    title:"Microbehaviors", desc:
`Microbehaviorstt{{first known use: Sumianvoice, 2022}} are a completely "what if" concept. It's used to explain features of voice too small and too automatic and subconscious to be able to directly influence, unlike concepts like t[[vocalweight|weight]] and t[[resonance|resonance]] which have very clear definitions. Microbehaviors are glottal, resonance or speech behaviors (or even maybe something else, who knows) which give a voice its distinct and unique 'fingerprint'. We don't really know much about it aside from "things happen and they make a voice sound different".

When we keep vocal weight, resonance, pitch, and all the main concepts the same, yet we sound like one person rather than a seperate person, the difference is what is covered by this concept. It is the unexplained tiny changes that make up the difference between two unique voices. One notable example of a voice with a high level of this behavior which makes it unique is Druew. The basic characteristics such as weight, resonance, t[[articulation|articulation]], t[[closure|closure]] etc do not fully explain how it sounds so unique, and so the vague concept "microbehaviors" is invoked to explain this.

As a subconscious and more or less inexplicable concept, it is mostly controlled through mimicry. Higher skill in mimicry allows for more control over these microbehaviors.

Basically:
- we have no idea how it works
- but it happens and we can hear it and use it`,
    color:"#466",
    tooltip:` `,
})




Register.register_node("onsets", "speech", {
    title:"Onsets", desc:
`Onsets are the very beginning of the voiced sound. It is the configuration the vocal folds are in when the sound starts.

<h2>Soft Onsets</h2> Soft onsets are when the folds are open, then come together just as the air starts flowing through, leading to a smooth transition into phonation without any change in volume throughout.

<h2>Hard Onsets</h2> Hard onsets start with the folds closed and with pressure already pushing against them. This means the beginning of the sound can be t[[m0|creaky]] or louder than the rest. This encourages more t[[vocalweight|weight]] to a very small degree and also general roughness, TVF tension and more.

<h2>Aspirate Onsets</h2> These start with the folds open like soft onsets, but the folds come together after the airflow has already begun, meaning we get a slightly breathy or aspirate start to the sound. This can encourage breathiness, but can be useful for some character voices.
`,
    color:"#456",
    tooltip:` `,
    audio:{
        ["Hard"]:"onsethard.mp3",
        ["Soft"]:"onsetsoft.mp3",
        ["Aspirate"]:"onsetaspirate.mp3",
    },
})
Register.register_node("offsets", "speech", {
    title:"Offsets", desc:
`Offsets are the very end of the voiced sound. It is the configuration the vocal folds are in when they stop vibrating.

<h2>Soft Offsets</h2> The folds close just in time for the pressure to stop, meaning the voice comes to a smooth and immediate stop.

<h2>Hard Offsets</h2> The folds close but the pressure keeps going for longer, meaning the folds have to press harder to stop the sound or t[[m0|creak / fry]] happens.

<h2>Aspirate Offsets</h2> The folds just open, and the pressure stops after, meaning we have a small aspirate / t[[breathiness|breathy]] trailing end to the sound, or it will just fade out smoothly rather than abruptly ending.
`,
    color:"#456",
    tooltip:` `,
})




//////////////////////
// RESONANCE
//////////////////////
Register.register_node("resonance", "root", {
    title:"Resonance", desc:
`Resonance is how the shape of the vocal tract affects the sound that is passed through it. It is a filter, so it will highlight or reduce each frequency of the voice as it passes through, based on the shape of the vocal tract. It is essentially which parts of the spectrum get highlighted. Higher resonance configurations mean higher frequencies get highlighted (making the voice sound brighter overall) and lower resonance means lower frequencies get highlighted (making the voice sound darker overall).`,
    color:"#473747",
    tooltip:` `,
    audio:{
        ["Low Resonance"]:"dark.mp3",
        ["Med Resonance"]:"mouthspacesmall.mp3",
        ["High Resonance"]:"bright.mp3",
    },
})
Register.register_node("larynxheight", "resonance", {
    title:"Larynx Height", desc:
`The larynx is what houses the vocal folds. By shifting this up and down we can change the t[[resonance|resonance]] of the voice. This is because the tube that is the vocal tract is shorter when it is raised, since the sound starts further along the length of the vocal tract. A shorter tube will cause a higher frequency of resonance.`,
    color:"#446",
    tooltip:` `,
})
Register.register_node("thyrohyoid-stylohyoid", "larynxheight", {
    title:"Thyrohyoid and Stylohyoid", desc:
`Both muscles raise the t[[larynxheight|larynx]], but usually only the thyrohyoid (TH) is involved in the natural conflation with pitch. When the thyroid tilts to stretch the vocal folds, the thyrohyoid will typically also activate and raise the larynx slightly. This is a natural process.

When 'manually' raising the larynx such as through whisper exercises or in an attempt to do a brighter voice, we usually use both the TH and stylohyoid (SH) muscles. It is possible in some cases that the SH does not trigger for this, and this can result in a loss of resonance range in some students.tt{{This is from 3 students and Sumi's testing on this, achieved through doing pitch slides to gauge natural conflation's effect, and then whisper and voiced resonance exercises to test manual control's effect. The results were conclusive, but this is a sample size of 4.

source: Sumianvoice}}
`,
    color:"#456",
    tooltip:` `,
})
Register.register_node("brightness", "resonance", {
    title:"Brightness", desc:
`Brightness is a combination of the tone of the voice (from glottal behavior) and t[[resonance|resonance]]. A bright voice has more high frequencies / more substantial high frequency harmonics. Basically, brightness is harmonic power. Importantly, it isn't just another name for resonance; a voice can be high resonance yet sound dark due to low clarity, breathiness, nasality, M2 or low IA, and more.

- a brighter voice will have more high frequencies present in the sound
- a darker voice will be more concentrated towards the pitch of the voice rather than high harmonics
- it's linked to but not 1:1 with resonance
- high t[[closure|closure]] results in more brightness due to more harmonic power`,
    color:"#455",
    tooltip:` `,
    audio:{
        ["Dark"]:"dark.mp3",
        ["Bright"]:"bright.mp3",
    },
})

Register.register_node("articulation", "resonance", {
    title:"Articulation", desc:
`Articulation is how and how much we move the mouth when speaking. Mumbling is low articulation, while some accents such as "valley girl" have a lot of articulation. Articulation is specifically about "how much" we do a vowel. If we do the "a" vowel in "bat" and we mumble it, it is underdone or underarticulated. If we say it as if mockingly, this will be overdone or overarticulated. Changing the amount that we articulate vowels during speech can allow a lot of expressive freedom.

An example of this is "oh my god". Said underarticulated, it may sound like "uh muh guhd". Said in an overarticulated way, it may sound more like "ouw maiy gaud".

This can be used as a way to make a voice substantially more feminine, or to make it neutral. Which vowels we articulate and how and how much is a complex mix of behaviors, but can substantially influence gender perception. Feminine voices often have more articulation overall, but the more important thing is the patterns of articulation.
`,
    color:"#445",
    tooltip:` `,
    audio:{
        ["Low Articulation"]:"underarticulated.mp3",
        ["High Articulation"]:"overarticulated.mp3",
    },
})
Register.register_node("mouthspace", "articulation", {
    title:"Mouth Space", desc:
`Mouth space is a way to change t[[resonance|resonance]]. We can shift things around in the mouth to raise resonance without necessarily changing t[[vowel|vowel]]. This act of changing the shape of the mouth while maintaining the same vowel is mouth space. It's extremely important as a gendered aspect, and particularly useful for feminine voices at low pitches where resonance is typically lower.

Mouth space does affect resonance frequencies / t[[formants|formants]], but more importantly, it allows for more feminine or masculine t[[articulation|articulation]] and subtle cues that are more gendered than raw frequency. Often, the effects of mouth space are not even obvious on a spectrogram. We can to some degree use either "speak in a mumbled way" for large mouth space and low articulation, or "speak like a valley girl" or "just speak in a feminine way" to trigger small mouth space and more articulation.`,
    color:"#645",
    tooltip:` `,
    audio:{
        ["Large<br>Mouth space"]:"mouthspacelarge.mp3",
        ["Small<br>Mouth space"]:"mouthspacesmall.mp3",
    },
})

Register.register_node("vowel", "articulation", {
    title:"Vowel", desc:
`Vowels are made by changing the first two t[[resonance|resonance]] formants, F1 and F2. Their relative position to eachother determines the vowel. Far apart, they create the "eee" as in "happ <b>y</b>" vowel. Close together and high they create the "a" as in "b <b>a</b> t" vowel.`,
    color:"#455",
    tooltip:` `,
})
Register.register_node("macrovowel", "vowel", {
    title:"Macrovowel", desc:
`A Macrovoweltt{{first known use: TransVoiceLessons}} is achieved by shifting the shape of the mouth slightly toward some vowel, usually to brighten ("a" or "i") or darken ("uh") the whole voice.`,
    color:"#657",
    tooltip:` `,
})

Register.register_node("opc", "resonance", {
    title:"Oropharyngeal Constriction", desc:
`Oropharyngeal Constriction (OPC). It's not the bad kind of constriction however, and does not require effort to activate. This is associated with hyperfem voices, as it significantly boosts t[[resonance|resonance]] / t[[brightness|brightness]]. At the back of the mouth, above the root of the tongue, is an arch which can be constricted inward to reduce the size of the opening at the back of the mouth. This smaller opening causes the resonance frequency to raise, giving a resonance boost.`,
    color:"#747",
    tooltip:` `,
    audio:{
        ["Example"]:"opc.mp3",
    },
})
Register.register_node("pharyngealconstriction", "resonance", {
    title:"Pharyngeal Constriction", desc:
`Unlike OPC this is usually not ideal. Pharyngeal constriction is when the throat between the larynx and the mouth (the pharynx) is constricted. This is esentially squeezing the throat. It raises the resonant frequencies slightly and trying to max out t[[resonance|resonance]] range is usually how people accidentally do it.

Pharyngeal constriction usually comes from t[[compensation|compensation]], when trying to raise the larynx or when doing other resonance raising modifications. It is not particularly damaging but can lead to t[[muscletension|tension]] habits if done regularly.`,
    color:"#222",
    tooltip:` `,
})
Register.register_node("formants", "resonance", {
    title:"Formants", desc:
`A formant is an area of the voice that is highlighted due to t[[resonance|resonance]] effects. The voice is made up of a fundamental (pitch) and many harmonics and some turbulent noise. These harmonics that are higher (in multiples of the fundamental) in frequency can be highlighted by the filter effect of resonance, and these areas that highlight the harmonics are formants.
A more technical description is that formants are the peak of resonance frequencies locally in the frequencies of the voice. Since the vocal tract is not a perfect smooth straight tube, it doesn't just highlight exactly one frequency, but instead a range, concentrated in a peak which we define as a formant frequency.

Usually these formants are referred to with F and a number to denote which formant, starting from the lowest frequency:
- F0 --> fundamental (pitch)
- F1 --> 1st formant from lowest freq to highest
- F(n) --> (n)th formant

Note that it is possible to make other formants happen that are in between the formants we usually see, but these do not replace the existing F1 F2 etc. So if t[[nasality|nasal]] resonance joins the F1 and F2, the "old" F3 is still called F3. We don't downrank it to F2 because there now appears to be less formants below it.
`,
    color:"#547",
    tooltip:` `,
})

Register.register_node("vocalsize", "resonance", {
    title:"Vocal Size", desc:
`Vocal Size or Acoustic Sizett{{
<b>First known use:</b>
David R R Smith, Roy D Patterson, Richard Turner, Hideki Kawahara, Toshio Irino, 2005
<i>"The processing and perception of size information in speech sounds"</i>
<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2346562/">PubMed</a>, <a href="https://doi.org/10.1121/1.1828637">DOI</a>

And later:
Benjamin D. Charlton, Anna M. Taylor, and David Reby, 2013
<i>"Are men better than women at acoustic size judgements?"</i>
<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3730639/">PubMed</a>, <a href="https://doi.org/10.1098%2Frsbl.2013.0270">DOI</a>}} \
is a way of intuitively explaining t[[resonance|resonance]] by using descriptions of the physical stature of the speaker within the framework of character voices. A cartoon character who is a giant will have a booming, deep voice, where a small pixie will have a bright voice. These voices can then be described as a "small voice" or a "large voice", and the sound that is described is immediately understood. This is not about the size of the vocal tracttt{{Never attempt to change or shrink the vocal tract directly as this can lead to t[[muscletension|tension habits]]}} but instead about the size or stature of the hypothetical speaker and what kind of sound we expect from this speaker.`,
    color:"#454050",
    tooltip:` `,
})

Register.register_node("subglottalresonance", "resonance", {
    title:"Subglottal Resonance", desc:
`Subglottal resonance covers two topics: the resonance chambers below the glottis in the airway and what their frequencies are, and how resonance frequencies overall change based on whether the glottis is open or closed.

Since in an open tube the standing wave is propagated relative to the center of the tube, we get around half the effective length and double the resonance frequency as when the tube is closedtt{{you can test this out using a toilet paper roll (or any tube) and making a "shh" sound into it while blocking and unblocking the other end with your hand, or look at the complex math behind it}}. In the case of voice, this change is really small so it's not worth using in any practical way, and a near open glottis during speech will mean severe breathiness which will make the harmonics in the voice less defined, causing the voice to overall sound darker despite the very slight increase in resonant frequency.

In testing, the frequency of the F1 with closed glottis was approximately 87-93% of the frequency of the open glottis when noise was played into the mouth with a speaker meaning a ~10% increase when open.tt{{source: Sumi's informal testing, sample size 3, using externally induced vibration (speaker) at, above and below the larynx/glottis, at the mouth, using harmonic sounds, white and brown noise, using glottal taps as a way to open and close the glottis, as well as doing the same tests with constricted fold t[[closure|closure]] (glottal fricative / H sound) and voiced sounds using breathiness and normal closure sounds. Each test yielded the same changes, with some small variation due to the nature of the vocal tract not being a mathematical model.

}} This is counterintuitive, since we all know that usually a larger space yields a lower resonance frequency, but in the case of voice, complexities in the pressures between supraglottal and subglottal volumes means that somehow, we get a result closer to an open tube than a tube going into a larger chamber.

In terms of subglottal resonance frequencies however, these can be measured (with difficulty), and much research has gone into this, including as a way to fingerprint voices as the subglottal resonance frequencies are fairly unique and don't change during speech.
`,
    color:"#454050",
    tooltip:` `,
})







//////////////////////
// VOCAL COVERS
//////////////////////
Register.register_node("covers", "root", {
    title:"Vocal Covers", desc:
`A vocal cover is a feature of voice that is unintended and usually mutes or otherwise impedes the intended function or sound.`,
    color:"#43403f",
    tooltip:` `,
})
Register.register_node("tongueroot", "covers", {
    title:"Tongue Root Retraction", desc:
`Associated with Stitch, Kermit, Meatwad. This is a slightly dark quality which can sound like something is stuck in the throat. It is achieved by moving the base of the tongue backward.`,
    color:"#544",
    tooltip:` `,
})
Register.register_node("nasality", "covers", {
    title:"Nasality", desc:
`Nasality is when air is let through the nasal passage on sounds that don't need this. Nasal sounds like N, M and NG are meant to be nasal, but most other sounds should not have air coming through the nose. We can test this by saying a phrase which doesn't have any nasal sounds in it, and pinching the nose; if it sounds honky, it is nasal.

Here are some sentences containing no nasal sounds to test:
- That black cat attacked the plastic bag.
- The elevator stopped for us at the third floor.`,
    color:"#544",
    tooltip:` `,
})
Register.register_node("nasopharyngealcover", "covers", {
    title:"Nasopharyngeal Covers", desc:
`This is hypothetical, and is a "it fits but hasn't been proven" feature of voice. The concept is that instead of plain nasality, some form of the nasopharynx and the surrounding area at the back, top of the mouth can be flexed slightly, leading to a nasality-like cover through this nasopharyngeal constriction / NPC. The difference is that it does not show up in nasality tests due to being airflow-independent, and slightly boosts formant levels at the cost of a dull quality similar to nasality. This can happen when trying to maximise formant frequencies in unvoiced exercises, or accidentally when training resonance in general. It is hard to detect and hard to remove, though there is potential in using low resonance and oropharyngeal expansion to force it to reduce.`,
    color:"#544",
    tooltip:` `,
})
Register.register_node("lowiahollow", "covers", {
    title:"Low IA Hollowness", desc:
`Low t[[ia|IA]] closure voices can become hollow, losing their harmonic power and t[[brightness|brightness]]. This can sound similar to t[[m2|M2 / falsetto]].`,
    color:"#544",
    tooltip:` `,
    audio:{
        ["Example"]:"low_ia.mp3",
    },
})

Register.register_instance("breathiness", "covers")

Register.register_node("subharmonics", "covers", {
    title:"Subharmonics", desc:
`Subharmonics sound similar to creak or t[[m0|M0]], but are more harmonic and less like random noise. They form for various reasons, but often due to true vocal fold tension / constriction and too much t[[closure|closure]] for the level of pressure / airflow.

This presents itself as 'extra harmonics'. The folds get interrupted every second or third or etc cycle, and so it sounds like there are two voices at once. It isn't damaging but it can be very hard to build a habit that leaves it behind. It can be used in singing to do lower notes, or as a stylistic choice such as in certain types of overtone singing.`,
    color:"#545",
    tooltip:` `,
    audio:{
        ["Example"]:"subharmonics.mp3",
    },
})



//////////////////////
// TRAINING RELATED
//////////////////////
Register.register_node("training", "root", {
    title:"Training Related", desc:
`Covers anything about voice training as an act, rather than specifically about the actual voice.`,
    color:"#373747",
    tooltip:` `,
})

Register.register_node("compensation", "training", {
    title:"Compensation", desc:
`Compensationtt{{first known (defined) use: ca. 2022 Sumianvoice, specifically in regard to its features in voice and strain etc. it has been previously used to describe causes of MTD but no source has been found yet}} is when we consciously try to achieve some goal, but lack the coordination or feel we lack it. As a result the body recruits muscles it doesn't need, in an attempt to force the goal to be achieved. Often this is very unhelpful and can lead to hard to change habits.

Compensation thrives on lack of awareness and on effort, so most of what we need to do in order to reduce it is to be passively aware; know what is happening and draw attention to it, but not try hard to change it. It is different to conflation, which is more to do with linking two things by habit or misconception rather than unintentionally doing something due to effort.

Common compensations are:
- tension and strain (leading to t[[fatigue|fatigue]])
- t[[pushing]] / adding pressure
- t[[breathiness|breathiness]]
- buzzy or rattle-like sounds (t[[fvf|FVF]] or t[[hyperadduction|hyperadduction]])
- t[[nasopharyngealcover|nasopharyngeal constrictions]]
- t[[nasality|nasality]]`,
    color:"#545",
    tooltip:` `,
})



Register.register_node("conflation", "training", {
    title:"Conflation", desc:
`Conflation is when we confuse or link together similar concepts or sounds. It usually happens due to misunderstanding how something sounds, such as thinking we are raising pitch when we actually raise resonance. Conflations can be positive, such as the conflation between medium to high pitch and light weight, but most conflations get in the way or prevent fine control over a feature of voice instead. Generally, it is advised to reduce all conflations so that greater control is achieved if those conflations get in the way of training such as with t[[pitchresconflation|pitch-resonance conflation]].

Common conflations are:
- pitch and t[[resonance|resonance]]
- pitch and tension
- pitch and t[[breathiness|breathiness]]
- t[[closure|closure]] and tension
- resonance and t[[tongueroot|tongue root]]`,
    color:"#455",
    tooltip:` `,
})

Register.register_node("pitchresconflation", "conflation", {
    title:"Pitch-Resonance Conflation", desc:
`This is when either:
1. we try to raise pitch, but the t[[larynxheight|larynx]] raises / t[[resonance|resonance]] raises instead
2. we try to change resonance but pitch changes instead
3. we try to do either on its own but both change

A small amount of pitch-resonance conflation is normal, and necessary to sound natural, but if it's completely involuntary it can get in the way of training and reduce pitch and resonance range.

In the case of lost range, if our bodies are trying to hit a C6 in pitch because of trying to do high resonance, when we inevitably can't do the high pitch we will lose resonance range. This is part of why there is a difference in resonance between unvoiced exercises and voiced ones. It is natural to have some pitch conflation and lose some resonance range coming from unvoiced to voiced, but this shouldn't get in the way of training.`,
    color:"#467",
    tooltip:` `,
})

Register.register_node("voicerisks", "training", {
    title:"Voice Risks", desc:
`Under no circumstances should anything written below be acted on or imitated even as a joke. They are here to educate people of the risks of using unsafe methods. There is very little research done on the links between any exercise or feature of voice and any negative outcome however, even in extreme cases such as swallow and hold. As such if there is no citation for a statement (most likely all of them), it can be assumed to be from anecdotal experience as a voice teacher along with other theory which suggests that link is more than coincidence.

Obviously, this is not in any way exhaustive, and there are likely even risks mentioned on this very page that aren't listed below.`,
    color:"#282828",
    tooltip:` `,
})
Register.register_node("swallowandhold", "voicerisks", {
    title:"Swallow and Hold", desc:
`Swallow and hold was used in the past to force the larynx and therefore t[[resonance|resonance]] to raise, but swallowing also involves the overuse and abuse of non-speech related muscles, leading to extreme fatigue and muscle tension. This can set students back several years. The issue is that there is a small survival rate, and so people who used it and succeeded still spread it around as if it's safe, since it happened to work for them. They are part of the 0.1% who got lucky however.`,
    color:"#222",
    tooltip:` `,
})
Register.register_node("manualphysicalmanipulation", "voicerisks", {
    title:"Manual Physical Manipulation", desc:
`The use of physical force to move parts of the throat (i.e. the larynx). There have been people who have used their hands to push the larynx up. Not only does this not help train, it also means those muscles which would do that work are now forcibly compressed and others forcibly stretched. If lucky, this results in temporary pain and loss of function, and if unlucky, there's nearly no end to what can go wrong. Massaging the muscles around the larynx gently is safe, manually moving things with your hands is not.`,
    color:"#222",
    tooltip:` `,
})
Register.register_node("directmusclecontrol", "voicerisks", {
    title:"Direct Muscle Control", desc:
`Directly trying to make a single muscle activate usually results in many other compensations happening instead, or alongside the actual intended action. This can lead to muscle tension habits if unchecked, usually even if those compensations don't get in the way. Muscles are all primarily subconsciously activated, so when the conscious mind forces them into action, it is often very inaccurate due to the "tunnel vision" like focus of conscious intent. This is especially dangerous when manually trying to change speaking closure. For non-speech it is unlikely to do much long term, but if tensing the wrong muscles through conscious control becomes a habit that crosses into general speech, it can become a near permanent feature of voice, leading to things like muscle tension habits.`,
    color:"#222",
    tooltip:` `,
})
Register.register_node("physicalproprioception", "voicerisks", {
    title:"Physical Sensations", desc:
`There is barely any sensory inervation in the vocal tract, else we would feel irritation and numbness and other unpleasant sensations just by speaking. Instead, most physical sensation / proprioception of the vocal tract comes from larger features either outside the throat in the neck, further up the vocal tract like the soft palate, or from parts that are inside the throat but are usually not affected by any speech action.

When you spoke prior to any voice training, you would not notice any physical sensations, because there were no large scale movements or tensions happening. This should remain the case during and after training. The problem with physical sensations is not the feeling of them, but the use of them to determine what to do, or when the sensation is expected as feedback, which is likely to result in tension just so you can feel that sensation. That is, you expect a sensation, so you tense up to make that sensation happen because that's easier than doing the sound you wanted.

Any sensation is very unlikely to be a "correct" coordination of voice, but instead a source of tension. Feeling vague movements and vibrations is normal, but feeling pinpointed force / contraction or squeezing is just about always vocal dysfunction rather than a natural requirement to do that sound. As a general rule, if you notice you can feel something and you didn't have to go looking to find that feeling, it's extraneous tension.`,
    color:"#222",
    tooltip:` `,
})
Register.register_node("overuseoffry", "voicerisks", {
    title:"Overuse of Fry", desc:
`Overuse of t[[m0|fry / creak / m0]] can, over decades, lead to deterioration of the voice. There's very little evidence for this, and little known about whether this is coordination or physical damage, but there is a correlation.`,
    color:"#222",
    tooltip:` `,
})

Register.register_instance("pharyngealconstriction", "voicerisks")
Register.register_instance("hyperadduction", "voicerisks")





Register.register_node("Credit", "root", {
    title:"Credit", desc:
`There are tooltips on <b>some</b> notes that tell you where the concept was first seen or where <b>the writer (Sumi) got it from</b> or a source of the information or statement, but these are just the earliest known use / source, and are <b>not included if not known</b>.

If you know of an earlier use / origin of a term, concept, fact or exercise, please make an issue on the repository or contact info[at]sumianvoice.com.

If a dispute about the origin of a thing is unresolved, the tooltip will be completely removed until it is resolved.
`,
    color:"#333",
    tooltip:` `,
})

Register.register_node("DataResearch", "root", {
    title:"Data and Research", desc:
`The following is a list of things we would very much like to have <b>data and research</b> for. If you find some, please notify us! It's likely that this research exists obscurely, or not at all.
It can also be inspiration for research topics <i>hint hint</i>.

- is IA activity specifically responsible for mechanism blending along with TA vs CT
- is it possible that low IA can allow for partial vocal fold vibration
- is only TA responsible for vocal fold vibratory mass and as such vocal weight
- is vocal fold vibratory mass actually the cause of the sound, and how specifically (probably need high speed camera footage and skilled vocalist)
- can the TA be hypertrophied physically
- can the TA be atrophied physically
`,
    color:"#333",
    tooltip:` `,
})


Register.register_node("Disclaimer", "root", {
    title:`<aaaa style="opacity:0.4;">Disclaimer</aaaa>`, desc:
`<aaaa style="opacity:0.4;">THE CONTENT IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE CONTENT OR THE USE OR OTHER DEALINGS IN THE CONTENT.

The author does not endorse, guarantee nor otherwise deal in the validity nor safety of any of the content nor the pages to which it links. Nothing in the content is medical advice nor advice of any kind, even where implied or explicitly stated otherwise.</aaaa>
`,
    color:"#333",
    tooltip:` `,
})




