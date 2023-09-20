/*
Licensed under MIT License, Copyright 2023 Sumi, sumianvoice.com
*/




register_node("About", "root", {
    title:"About", desc:
`Welcome! This is a project by Sumi to put in one place as much voice information as is available. It is more a reference than a guide; you won't learn how to change your voice here, you'll just learn about voice itself and how it works.

A lot of these concepts and notes are not proven and are just a working theory. As with anything some random person on the internet says, question it and do your own research instead of implicitly trusting it. The focus of this project is mapping out voice qualities, not making a scientific statement of fact.

<b>What I did do:</b>
<i style="color:#888">- understand and then describe all of the concepts here</i>
<b>What I did not do:</b>
<i style="color:#888">- personally invent and pioneer everything here</i>

<i style="color:#555">Copyright (c) 2023 Sumi, <<a style="color:#595040" href="https://sumianvoice.com">sumianvoice.com</a>>` +
// `not Distributed under open source MIT license` +
`
All rights reserved, Do Not Distribute` +
`</i>

<b class="hlight">Work In Progress</b>
`,
    color:"#333",
    tooltip:` `,
})




//////////////////////
// Intuitive
//////////////////////
register_node("inutitive", "root", {
    title:"Intuitive Practice", desc:
`Most students focus too much on the how and the why of voice, but often all that is needed is to <b>use the voice</b> and gently direct it toward the goal. You probably don't need to know all about these fancy terms and concepts or know about the physiology of the voice. Below constitutes "enough" to get any fairly typical voice gender-wise.

It is only when we get truly stuck or we are interested in vocal pedagogy that this sort of information finds its utility, but even here we are better off prioritising intuitive methods over theoretical or clinical ones. During lessons with a voice teacher, you'll often go through the slightly more technical things because it's a controlled environment and knowing what to look for speeds up the process, but if you are on your own then just using intuitive methods is often a more certain way to avoid most pitfalls.

If you are unsure of what to do or are just starting out, try these notes below for a few weeks, and listen carefully to them and take them seriously.
`,
    color:"#075",
    tooltip:` `,
})

register_node("inutitivefem", "inutitive", {
    title:"Feminisation Guide", desc:
`Never try hard. Never force it. Go a little higher and speak like a girl for a whilett{{whatever you think "feminine" sounds like; don't overthink it, just use whatever you are biased toward}}. <b>If it's right, it will feel effortless.</b>

Don't overthink it, just listen and pay attention to the voice as a whole.
Continue until goal is reached or any issues arise.

This will work for most beginners if taken seriously.
`,
    color:"#946",
    tooltip:` `,
})

register_node("inutitivemasc", "inutitive", {
    title:"Masculinisation Guide", desc:
`Never try hard. Never force it. Avoid rough or buzzy sounds. Try to hit lower notes repeatedly and gain more vocal power. Try speaking in a deeper, darker tone.

Don't overthink it, just listen and pay attention to the voice as a whole.
Continue until goal is reached or any issues arise.

This will work for most beginners if taken seriously.
`,
    color:"#469",
    tooltip:` `,
})




//////////////////////
// GLOTTAL
//////////////////////
register_node("glottal", "root", {
    title:"Glottal", desc:
`Anything to do with the vocal folds vibrating. The glottis is the area of the larynx in which the vocal folds and false folds are located. The behavior of the components in this area are covered under the umbrella term <b>glottal behavior</b>.`,
    color:"#373737",
    tooltip:` `,
})


//////////////////////
// VOCAL FOLD VIBRATORY MASS
//////////////////////
register_node("vfvm", "glottal", {
    title:"Vocal Fold Geometry", desc:
`Vocal Fold Vibratory Mass <b>(VFVM)</b> is the physical thing happening in the folds that causes several things; how much of the folds is vibrating is likely what causes the sound quality of vocal weight. Contact area between the folds, quotient, and surface area engaged in creating pressure waves all contribute to the resulting sound. This can be thought of similar to the thickness of a guitar string. More mass in the string, deeper more bassy sound (and a predisposition to low pitch). High vibratory mass will result in a sort of "rumble" which is most notable at low pitches.\n\n\
--> more vocal fold moving --> more VFVM --> sounds heavier\n\
--> less VFVM --> can achieve higher pitches easier`,
    color:"#445",
    tooltip:` `,
})

//////////////////////
// PITCH NATURALISATION
//////////////////////
register_node("naturalisation", "vfvm", {
    title:"Pitch Naturalisation", desc:
`Each pitch has its desired level of vibratory mass / weight, so there is an equillibrium that can be found between pitch and weight.
Pitch Naturalisation is the process and concept of naturally adjusting a voice to this equillibrium.tt{{Pitch Naturalisation is the core of the Pitch Intuitive Practice Methodology (PIPM) designed by Sumi / Sumianvoice, which is a near standalone methodology for changing the voice using the existing positive conflations most people have with pitch.}}

Usually we use this by raising pitch very slightly, then letting the voice naturally adjust without letting clarity and volume be sacrificed. We can also do this long term by raising the base pitch of the voice slightly and speaking here for a matter of several days or weeks. Given the right conditions, a voice will usually adjust rather than become strained or forced.

Naturalised voices:
--> sound like the speaker has been speeking at this pitch their whole life
--> sustainable and effortless to produce
Non-naturalised voices:
--> sound forced or "pushed" or stressed
--> tiring or requires high level of concentration
--> might sound like the speaker is intentionally speaking higher
`,
    color:"#075",
    tooltip:` `,
})
register_node("stress", "naturalisation", {
    title:"Stress", desc:
`When a voice has too much weight for the pitch, it is not naturalised. When we notice it is not naturalised, the sound quality that tells us this is "stress". Stress can be described as "pushing" or "forcing" the voice. It can have a harsh, tense quality to it that begs the question "why is this person forcing their voice to go high". It can also be so subtle as to be nearly unnoticeable especially if we aren't looking for it.`,
    color:"#357",
    tooltip:` `,
})
register_node("basepitch", "naturalisation", {
    title:"Base Pitch", desc:
`Base Pitchtt{{first known use: Sumianvoice}} is the pitch a voice naturally returns to after intonation. It is determined by vocal weight and represents the pitch that a voice is naturalised to. It is usually the lowest note a voice will go to, and is sort of like an anchor or "home position".`,
    color:"#547",
    tooltip:` `,
})
register_node("pushing", "naturalisation", {
    title:"Pushing", desc:
`Pushingtt{{first known use: Sumianvoice}} is when a voice adds more pressure in order to force a voice to get higher in pitch or louder, and usually results in stress through adding more weight / fold mass. Belting is an example of a pushed configuration; it involves more pressure and more weight in order to reach higher notes without reducing the weight or blending with m2.`,
    color:"#446",
    tooltip:` `,
})

//////////////////////
// VOCAL WEIGHT
//////////////////////
register_node("vocalweight", "vfvm", {
    title:"Vocal Weight", desc:
`Vocal Weighttt{{first known use: TransVoiceLessons}} is a sound quality associated with low pitch, masculine voices. It can sound "rumbly" or just "heavy", and is linked with pitch. Higher pitches demand lighter vocal weight.`,
    color:"#267",
    tooltip:` `,
})
register_node("fullness", "vocalweight", {
    title:"Overfull and Underfull", desc:
`Overfulltt{{first known use: TransVoiceLessons}} relates to a voice that has too high vocal weight (and usually closure) for and too high resonance. As a result we get a buzzy or "nerdy" sound.\n\
Underfull is when a voice has either too low weight or too low resonance, resulting in a dark or hooty voice.`,
    color:"#566",
    tooltip:` `,
})
register_node("m2aslightweight", "vocalweight", {
    title:"Falsetto as a Guide", desc:
`Falsetto or m2 has extremely light vocal weight. It is essentially "too light". It has some qualities we don't want, such as instability and hollowness, but overall it can be a very useful voice feminisation method. We can use this as a guide; as we go higher in pitch to reach lighter weight, we will get closer to that falsetto quality. This can help with direction, and often prevent strain. Note that this will not allow for a both strong / loud and light voice, only a light voice. Learning to reduce weight through pitch naturalisation, phrase repetition or other methods is better if volume, clarity or high closure is desired. However, this can be an excellent way to give context to those other methods, as long as it isn't entirely relied on.

We can also start low, then try to make the voice more like falsetto. As soon as we are about to speak, we instead just do a slightly lower pitch than we were about to, and this process can continue all through the range. This can prevent strain effectively since we're always doing a lower pitch than our voice is adjusted to, and this is likely the lightest you can get though "just go directly to a light voice without pre-priming the voice" methods.
`,
    color:"#758",
    tooltip:` `,
})


//////////////////////
// QUOTIENT
//////////////////////
register_node("quotient", "vfvm", {
    title:"Quotient", desc:
`Quotient is a fraction of how long the folds spend in the open state versus their closed state. Since it is possible to measure, unlike vocal weight or active fold mass / VFVM, it is used in research. It closely approximates these other concepts under typical conditions. Usually this measurement is done with EGG.`,
    color:"#754",
    tooltip:` `,
})
register_node("openquotient", "quotient", {
    title:"Open Quotient (OQ)", desc:
`How long as a fraction of a cycle the vocal folds are open.`,
    color:"#544",
    tooltip:` `,
})
register_node("closedquotient", "quotient", {
    title:"Closed Quotient (CQ)", desc:
`How long as a fraction of a cycle the vocal folds are closed and resisting air pressure.`,
    color:"#544",
    tooltip:` `,
})



register_node("vfvmpressure", "vfvm", {
    title:"Pressure --> Vibratory Mass", desc:
`When we speak, we supply some amount of pressure from the lungs. This can be "used up" either by the vocal folds coming together like a valve, or by the pressure needing to push more mass out of the way. This means that more pressure - provided there is otherwise normal closure - will encourage more VFVM or vocal weight.tt{{This is known mostly due to informal testing by Sumi, along with various papers that mention related facts, such as <i>Herbst et al.: Membranous and cartilaginous adduction</i>}}

--> more air pressure --> more vfvm / vocal weight (if enough closure)
--> more "pushing" --> more vfvm / vocal weight`,
    color:"#556",
    tooltip:` `,
})
register_instance("pushing", "vfvmpressure")





//////////////////////
// CLOSURE
//////////////////////
register_node("closure", "glottal", {
    title:"Closure", desc:
`Closure covers the closing of the vocal folds, and this allows for the air pressure to push them open, \
resulting in phonation. High closure means the folds come together more completely, low closure means they come together incompletely or with not enough contact, allowing air to get through without being "used" for vibrating the folds.\n\
\n\
<b class="hlight">You cannot feel closure.</b> If you think you can, there\'s something <u>wrong</u>. You also cannot control it directly, and if it is attempted, there will likely be muscle tension or strain involved.`,
    color:"#546",
    tooltip:` `,
})
register_node("breathiness", "closure", {
    title:"Breathiness", desc:
`Breathy voices are low in closure, and this means air gets through without directly helping the vocal folds vibrate. This results in an airy and breathy voice. Breathy qualities are usually caused by low lateral cricoarytenoid muscle activity (LCA). It sounds slightly different to an air leak involving the interarytenoids (IA).`,
    color:"#456",
    tooltip:` `,
})
register_node("hyperadduction", "closure", {
    title:"Hyperadduction", desc:
`Hyperadductiontt{{first known use: Sumianvoice}} can <b class="hlight">irreparably damage</b> the vocal folds, cause nodules, pain and more awful things you don't want.
Do not do it under <b class="hlight">any circumstances</b> for any reason for any length of time.

Hyperadduction is when the vocal folds are pressed together very tightly, but unlike pressed phonation, this is taken to the extreme. It is often accidentally employed to reach higher notes at the very top of the range. Never force your voice to go "a little bit higher" when it's already requiring effort.

This usually shows up as around 8000 to 15,000hz harmonics, and this can be a somewhat reliable way to test for it. FVF causes a similar signal this high in frequency but less periodic and more noisy. FVF is the safer of the two of course.
`,
    color:"#222",
    tooltip:` `,
})
register_node("closureloss", "closure", {
    title:"Loss Of Closure", desc:
`A Loss of Closure is when the voice cuts out, and only air comes out. This happens if there is the right amount of tension in the folds and not the right closure. The folds are in position but do not close, and have too much tension lengthwise (i.e. pitch) to be vibrated and instead air just rushes past. This is natural, and isn't a problem, and <b>should not be forcibly avoided</b>. Tensing up will either trigger <b class="hlight">hyperadduction</b> (bad) or make the closure loss worse, so relax instead.`,
    color:"#556",
    tooltip:` `,
})
register_node("ia", "closure", {
    title:"Interarytenoids (IA)", desc:
`The IA muscles increase closure at the back of the folds and provide some stability.tt{{Mostly hypothetical, based on Sumi's testing and the behaviors of students' voices, but no hard empirical data for most of this.

<i>See Herbst et al.: Membranous and cartilaginous adduction</i>}} If your voice is unstable, hollow sounding, or has an air leak, it's possible that there is a lack of IA activity. You can't control this directly, but if we focus on a relaxed, steady tone with good support, it is possible to improve IA activity.`,
    color:"#356",
    tooltip:` `,
})
register_node("lowiaairleak", "ia", {
    title:"Low IA Air Leak", desc:
`A low IA voice will usually allow for an air leak to occur. Particularly this is noticeable when other adduction is normal, i.e. the LCA is functioning correctly or even compensatorily more adducted. This can also cause instability.`,
    color:"#445",
    tooltip:` `,
})
register_instance("lowiahollow", "ia")


//////////////////////
// VOCAL FUNCTION
//////////////////////
register_node("vocalfunction", "glottal", {
    title:"Vocal Health", desc:
`Things relating to vocal function and health.`,
    color:"#505450",
    tooltip:` `,
})

// SOVTE
register_node("sovte", "vocalfunction", {
    title:"SOVTEs", desc:
`Semi Occluded Vocal Tract Exercises. These are exercises that can be done in a relaxed way but give good opportunities to train the voice in various fundamental ways. Mostly they help with clarity, reducing strain and tension, stability, and closure. These all must be done in a relaxed way and not pushed, and it's best not to set arbitrary goals like "hit this specific note" since that will allow for more compensation and tension.`,
    color:"#346",
    tooltip:` `,
})
register_node("liptrills", "sovte", {
    title:"Lip Trills", desc:
``,
    color:"#455",
    tooltip:` `,
})
register_node("sovteshj", "sovte", {
    title:"SH and J", desc:
``,
    color:"#455",
    tooltip:` `,
})

//////////////////////
// VOCAL DAMAGE
//////////////////////
register_node("damage", "vocalfunction", {
    title:"Vocal Damage and Disorder", desc:
`This covers abnormal glottal function caused by damage to features of the glottis, notably the vocal folds, or from behavioral issues (e.g. MTD). Almost everything here is a "seek medical help" situation.`,
    color:"#222",
    tooltip:` `,
})
register_node("atrophy", "damage", {
    title:"Atrophy", desc:
`Atrophy is when muscles lose some of their ability to activate due to very long periods of disuse. This usually takes many years, and is often reversable but with effort proportional to how long whatever function has been neglected.

Common points of atrophy are:
--> Adductor (closure) muscles (IA and LCA)
Usually from neglecting the ability to become loud
--> TA muscles (the "vocal weight" muscle)
Sometimes intentionally, usually from neglecting lower pitches
--> M2 access
Usually just through disuse, sometimes due to avoiding it
`,
    color:"#233",
    tooltip:` `,
})
register_node("muscletension", "damage", {
    title:"Muscle Tension", desc:
`Muscle tension is what is happening in Muscle Tension Dysphonia (MTD). It appears in two modes; primary and secondary. Primary MTD is when muscles outside the larynx, such as in the neck, are being tensed when they shouldn't be. This is extraneous muscle tension. Secondary is when muscles in the larynx (usually the adductors and abductors) are tensing in direct opposition to eachother.tt{{source: Dysphonia.org, https://dysphonia.org/voice-conditions/muscle-tension-dysphonia/}} Both forms can disable a voice completely in the medium term, or cause significant enough fatigue that it becomes untenable to speak for longer than a few minutes. If you get fatigue within 30 minutes of sustained conversation, there is a significant issue and you should see a Speech Language Pathologist.


This is surprisingly common in transvoice students, though thankfully it is usually not the extent of a diagnosis. If you have any concerns, it may be advisable to contact an SLP or otherwise seek a second opinion.`,
    color:"#332",
    tooltip:` `,
})
register_node("nodules", "damage", {
    title:"Nodules", desc:
`Nodules are hardened scar-like or callous-like tissue which forms on the edge of the vocal folds after long term damage. The causes are primarily hyperadduction, constant overuse of function through screaming, and others. The damage from this is not usually permanent, but it is substantially long term, and professional help is often needed to reduce the damage.`,
    color:"#333",
    tooltip:` `,
})
register_node("vocalpolyp", "damage", {
    title:"Vocal Polyp", desc:
`A lesion on a vocal fold similar to a blister.`,
    color:"#333",
    tooltip:` `,
})
register_node("vocalcyst", "damage", {
    title:"Vocal Cyst", desc:
`A rounded mass on a vocal fold usually as a result of severe and rapid damage. Can be permanent.`,
    color:"#333",
    tooltip:` `,
})





//////////////////////
// tvfconstriction
//////////////////////
register_node("tvfconstriction", "closure", {
    title:"Vocal Fold Constriction", desc:
`The true vocal folds can be constricted or tensed, and this can cause some issues, including loss of clarity, instability, more creak, more subharmonics and more. This might be due to muscle tension between adductors and abductors, or just too much of one adductor muscle vs another such as high LCA vs low IA.
`,
    color:"#655",
    tooltip:` `,
})





//////////////////////
// PITCH
//////////////////////
register_node("pitch", "glottal", {
    title:"Pitch", desc:
`Pitch is the frequency of the vocal folds.`,
    color:"#595055",
    tooltip:` `,
})
register_node("mechanisms", "pitch", {
    title:"Vocal Mechanisms", desc:
`Laryngeal Vibratory Mechanisms tt{{See paper: DOI:10.1016/j.jvoice.2007.10.014 - 'Laryngeal Vibratory Mechanisms: The Notion of Vocal Register Revisited'}}
These are mostly arbitrary delineations between different configurations, and given enough training it is possible to smoothly blend most mechanisms. M3 might be the exception here.`,
    color:"#444",
    tooltip:` `,
})
register_node("m1", "mechanisms", {
    title:`M1 <i style="color:#999">(modal voice)</i>`, desc:
`Normal speaking register. The folds get more contact and the ligament vibrates as well as the mucosa and some of the muscle (the TA).`,
    color:"#455",
    tooltip:` `,
})
register_node("m2", "mechanisms", {
    title:`M2 <i style="color:#999">(falsetto)</i>`, desc:
`Falsetto / Head Voice register, often hollow-sounding or at least less full than M1.`,
    color:"#455",
    tooltip:` `,
})
register_node("m3", "mechanisms", {
    title:`M3 <i style="color:#999">(whistle)</i>`, desc:
`Whistle Register. This can be dangerous; do not attempt without appropriate supervision and instruction.`,
    color:"#545",
    tooltip:` `,
})
register_node("m0", "mechanisms", {
    title:"M0", desc:
`Vocal Fry register. This is usually at the very bottom of the range, but can happen anywhere due to airflow mechanics.`,
    color:"#545",
    tooltip:` `,
})
register_node("mechanismbreak", "mechanisms", {
    title:"Vocal Break", desc:
`Vocal Breaks, mechanism breaks, voice cracks. These happen due to an imbalance in fold vibratory mass / vocal weight. IA adduction probably also helps substantially to reduce instability here.`,
    color:"#445",
    tooltip:` `,
})
register_node("creak", "m0", {
    title:"Creak", desc:
`Vocal Fry specifically caused by airflow mechanics, at a pitch higher than the bottom of the range where M0 is forced to happen.`,
    color:"#644",
    tooltip:` `,
})
register_node("frymix", "m0", {
    title:"Fry Mix", desc:
`Since mechanisms are not necessarily distinct but rather separations on a spectrum, it is possible to blend most mechanisms. Just as we can adjust the needed components to blend between m1 and m2, we can blend between m1 and m0. This will sound high in closure and will reduce in fullness / weight in most instances.

It is usually to be avoided unless for stylistic reasons, or for singing. It is sometimes accidentally achieved during voice masculinisation training, since it allows for much lower pitches (e.g. a normal floor of 120hz down to a floor of 90hz with fry mix).
`,
    color:"#554",
    tooltip:` `,
})

register_node("belting", "pitch", {
    title:"Belting", desc:
`Belting is a singing concept, and the process allows a singer to hit higher notes without blending with m2. It works by increasing air pressure, fold mass / vocal weight and closure. As a result, we get a kind of controlled yelling. It is advised to not learn belting until m2 blending is fully mastered, since belting will drastically cut down the top of the pitch range for most people if it's the only way they ever reach high notes. The ability to do m2 at all can atrophy over long preiods.

As a method of singing however it is quite useful when learned properly; just getting louder and pushing the voice to go higher is <i>not how you do it</i> though, it requires a proper balance of all the elements mentioned above, or else we will only achieve a lot of compensation and strain.
`,
    color:"#556",
    tooltip:` `,
})
register_node("beltblend", "belting", {
    title:"Belt Blend", desc:
`It might seem impossible at first, but it is possible to belt up to some point and then, still in the belt, blend into m2. Not much is actually known about this and how to do it currently. This like most vocal features does not require strain or effort, but is a careful balance.

As far as can be deduced, this is likely through reducing TA while balancing CT, keeping or increasing closure and reducing the air pressure slighlty. All of these things are theoretically needed in order to go from a pushed, loud belt into a gradually lighter but still full sounding m2.
`,
    color:"#345",
    tooltip:` `,
})

register_node("pitchmatching", "pitch", {
    title:`Pitch Matching`, desc:
`Pitch Matching is the ability to replicate a note you hear. Some people naturally have this from experience, some need to learn it.
You can use <a href="https://szynalski.com/tone#G2,tri,v0.2">a tone generator</a> or any virtual keyboard or synth or DAW to do this.`,
    color:"#456",
    tooltip:` `,
})

register_node("cricothyroid", "pitch", {
    title:"Cricothyroid (CT)", desc:
`The muscle controlling raising the pitch by tilting the thyroid cartilage (the shield-like cartilage of the larynx) and thereby stretching the vocal folds.`,
    color:"#444",
    tooltip:` `,
})
register_node("thyroarytenoid", "pitch", {
    title:"Thyroarytenoid (TA)", desc:
`The muscle controlling lowering the pitch by contracting the vocal folds. This likely contributes substantially to fold vibratory mass, since the folds will bulk up slightly. It, along with the CT control pitch, usually with both contracting somewhat; the CT providing tension, and the TA providing slight amounts of closure, and allowing for a more full sound.`,
    color:"#444",
    tooltip:` `,
})


register_node("rangeexpansion", "pitch", {
    title:"Range Expansion", desc:
``,
    color:"#444",
    tooltip:` `,
})







//////////////////////
// OTHER PHONATION
//////////////////////
register_node("otherphonation", "glottal", {
    title:"Other Phonation Sources", desc:
`Alternate, and usually undesirable ways to make sounds.`,
    color:"#655",
    tooltip:` `,
})
register_node("fvf", "otherphonation", {
    title:"False Vocal Folds", desc:
`The false vocal folds or ventricular folds are just above the true vocal folds, and can sometimes interrupt normal phonation causing subharmonics or be used as compensation for inadequate closure or atrophied vocal folds. They are not particularly damaging for the voice, but more of an annoyance or a sign of another problem. The sound they usually cause can be described as a rough, buzzy overtone, or a "rattle" sound.

Typically they cause aperiodic (messy) sounds in the 8000 to 15,000hz range. It can sound similar to hyperadduction, but less harmonic / more rough, since hyperadduction causes clear harmonics instead of noise. How FVF effects look on a spectrogram can be described as similar to vocal fry, but in the 10khz range instead of the 30-200hz range.
It is unclear exactly why and how FVF causes this high frequency.`,
    color:"#444",
    tooltip:` `,
})
register_node("arytenoids", "otherphonation", {
    title:"Arytenoids", desc:
`The arytenoids can vibrate if we constrict the pharynx enough, and this allows for some metal singing distortion and for sounds like the crow caw sound.`,
    color:"#444",
    tooltip:` `,
})







//////////////////////
// SPEECH
//////////////////////
register_node("speech", "root", {
    title:"Speech", desc:
`Anything regarding speech, which is how voice is applied to speaking words in phrases. This includes speech patterns and other things that are not voice, but are how the voice is applied to communication.`,
    color:"#344",
    tooltip:` `,
})
//////////////////////
register_node("intonation", "speech", {
    title:"Intonation", desc:
`Intonation is how the voice goes up and down in pitch during speech, and the pattern with which it does so.\n\
--> monotone --> no intonation`,
    color:"#644",
    tooltip:` `,
})
register_node("tempo", "speech", {
    title:"Tempo", desc:
`This is how fast words are spoken, and how that speed of speech changes in order to be more expressive.`,
    color:"#256",
    tooltip:` `,
})
register_node("emphasis", "speech", {
    title:"Emphasis", desc:
`Emphasis is when we change something about the voice in order to draw more attention to or place more importance on some word or phrase. In masculine voices this is often done with pushing, or adding power and volume. Other ways include intonation, slowing tempo and changing articulation.`,
    color:"#556",
    tooltip:` `,
})



register_instance("basepitch", "speech")



register_node("microbehaviors", "speech", {
    title:"Microbehaviors", desc:
`Microbehaviorstt{{first known use: Sumianvoice}} are a completely "what if" concept. It's used to explain features of voice too small and too automatic and subconscious to be able to directly influence, unlike concepts like weight and resonance which have very clear definitions. Microbehaviors are glottal, resonance or speech behaviors (or even maybe something else, who knows) which give a voice its distinct and unique "fingerprint". We don't really know much about it aside from "things happen and they make a voice sound different".

When we keep vocal weight, resonance, pitch, and all the main concepts the same, yet we sound like one person rather than a seperate person, the difference is what is covered by this concept. It is the unexplained tiny changes that make up the difference between two unique voices. One notable example of a voice with a high level of this behavior which makes it unique is Druew. The basic characteristics such as weight, resonance, articulation, closure etc do not fully explain how it sounds so unique, and so the vague concept "microbehaviors" is invoked to explain this.

As a subconscious and more or less inexplicable concept, it is mostly controlled through mimicry. Higher skill in mimicry allows for more control over these microbehaviors.

Basically:
--> we have no idea how it works
--> but it happens and we can use it`,
    color:"#466",
    tooltip:` `,
})




register_node("onsets", "speech", {
    title:"Onsets", desc:
`Onsets are the very beginning of the voiced sound. It is the configuration the vocal folds are in when the sound starts.

<h2>Soft Onsets</h2> Soft onsets are when the folds are open, then come together just as the air starts flowing through, leading to a smooth transition into phonation without any change in volume throughout.

<h2>Hard Onsets</h2> Hard onsets start with the folds closed and with pressure already pushing against them. This means the beginning of the sound can be creaky or louder than the rest. This encourages more weight to a very small degree and also general roughness, TVF tension and more.

<h2>Aspirate Onsets</h2> These start with the folds open like soft onsets, but the folds come together after the airflow has already begun, meaning we get a slightly breathy or aspirate start to the sound. This can encourage breathiness, but can be useful for some character voices.
`,
    color:"#456",
    tooltip:` `,
})
register_node("offsets", "speech", {
    title:"Offsets", desc:
`Offsets are the very end of the voiced sound. It is the configuration the vocal folds are in when they stop vibrating.

<h2>Soft Offsets</h2> The folds close just in time for the pressure to stop, meaning the voice comes to a smooth and immediate stop.

<h2>Hard Offsets</h2> The folds close but the pressure keeps going for longer, meaning the folds have to press harder to stop the sound or creak / fry happens.

<h2>Aspirate Offsets</h2> The folds just open, and the pressure stops after, meaning we have a small aspirate / breathy trailing end to the sound, or it will just fade out smoothly rather than abruptly ending.
`,
    color:"#456",
    tooltip:` `,
})




//////////////////////
// RESONANCE
//////////////////////
register_node("resonance", "root", {
    title:"Resonance", desc:
`Resonance is how the vocal tract affects the sound that is passed through it. It is a filter, so it will highlight or reduce the signal sent from the glottis, based on the shape of the vocal tract.`,
    color:"#473747",
    tooltip:` `,
})
register_node("larynxheight", "resonance", {
    title:"Larynx Height", desc:
`The larynx is what houses the vocal folds. By shifting this up and down we can change the resonance of the voice.`,
    color:"#446",
    tooltip:` `,
})
register_node("thyrohyoid-stylohyoid", "larynxheight", {
    title:"Thyrohyoid and Stylohyoid", desc:
`Both muscles raise the larynx, but usually only the thyrohyoid (TH) is involved in the natural conflation with pitch. When the thyroid tilts to stretch the vocal folds, the thyrohyoid will typically also activate and raise the larynx slightly. This is a natural process.

When "manually" raising the larynx such as through whisper exercises or in an attempt to do a brighter voice, we usually use both the TH and stylohyoid (SH) muscles. It is possible in some cases that the SH does not trigger for this, and this can result in a loss of resonance range in some students.tt{{This is from 3 students and Sumi's testing on this, achieved through doing pitch slides to gauge natural conflation's effect, and then whisper and voiced resonance exercises to test manual control's effect. The results were conclusive, but this is a sample size of 4.

source: Sumianvoice}}
`,
    color:"#456",
    tooltip:` `,
})
register_node("brightness", "resonance", {
    title:"Brightness", desc:
`Brightness is a combination of the tone of the voice (from glottal behavior) and resonance. A bright voice has more high frequencies / more substantial high frequency harmonics. Importantly, it isn't just another name for resonance; a voice can be high resonance yet sound dark due to low clarity, breathiness, nasality, m2 or low IA, and more.`,
    color:"#455",
    tooltip:` `,
})

register_node("articulation", "resonance", {
    title:"Articulation", desc:
`Articulation is how and how much we move the mouth when speaking. Mumbling is low articulation, while some accents such as "valley girl" have a lot of articulation. Articulation is specifically about "how much" we do a vowel. If we do the "a" vowel in "bat" and we mumble it, it is underdone or underarticulated. If we say it as if mockingly, this will be overdone or overarticulated. Changing the amount that we articulate vowels during speech can allow a lot of expressive freedom.

An example of this is "oh my god". Said underarticulated, it may sound like "uh muh guhd". Said in an overarticulated way, it may sound more like "ouw maiy gaud".
`,
    color:"#445",
    tooltip:` `,
})
register_node("mouthspace", "articulation", {
    title:"Mouth Space", desc:
`Mouth space is a way to change resonance. We can shift things around in the mouth to raise resonance without necessarily changing vowel. This act of raising resonance using the mouth while maintaining the same vowel is mouth space. It's extremely important as a gendered aspect, and particularly useful at low pitches where vocal weight is typically heavier and resonance is typically darker.`,
    color:"#645",
    tooltip:` `,
})

register_node("vowel", "articulation", {
    title:"Vowel", desc:
`Vowels are made by changing the first two resonance formants, F1 and F2. Their relative position to eachother determines the vowel. Far apart, they create the "eee" as in "happ <b>y</b>" vowel. Close together and high they create the "a" as in "b <b>a</b> t" vowel.`,
    color:"#455",
    tooltip:` `,
})
register_node("macrovowel", "vowel", {
    title:"Macrovowel", desc:
`A Macrovowel is achieved by shifting the shape of the mouth slightly toward some vowel, usually to brighten ("a") or darken ("uh") the whole voice.`,
    color:"#657",
    tooltip:` `,
})

register_node("opc", "resonance", {
    title:"Oropharyngeal Constriction", desc:
`Oropharyngeal Constriction (OPC). It's not the bad kind of constriction however, and does not require effort to activate. This is associated with hyperfem voices, as it significantly boosts resonance / brightness. At the back of the mouth, above the root of the tongue, is an arch which can be constricted inward to reduce the size of the opening at the back of the mouth. This smaller opening causes the resonance frequency to raise, giving a resonance boost.`,
    color:"#747",
    tooltip:` `,
})
register_node("pharyngealconstriction", "resonance", {
    title:"Pharyngeal Constriction", desc:
`Unlike OPC this is usually not ideal. Pharyngeal constriction is when the throat between the larynx and the mouth (the pharynx) is constricted. This is esentially squeezing the throat. It raises the resonant frequencies slightly and trying to max out resonance range is usually how people accidentally do it.

Pharyngeal constriction usually comes from compensation, when trying to raise the larynx or when doing other resonance raising modifications. It is not particularly damaging but can lead to tension habits if done regularly.`,
    color:"#645",
    tooltip:` `,
})
register_node("formants", "resonance", {
    title:"Formants", desc:
`A formant is an area of the voice that is highlighted due to resonance effects. The voice is made up of a fundamental (pitch) and many harmonics and some turbulent noise. These harmonics that are higher (in multiples of the fundamental) in frequency can be highlighted by the filter effect of resonance, and these areas that highlight the harmonics are formants.
A more technical description is that formants are the peak of resonance frequencies locally in the frequencies of the voice. Since the vocal tract is not a perfect smooth straight tube, it doesn't just highlight exactly one frequency, but instead a range, concentrated in a peak which we define as a formant frequency.

Usually these formants are referred to with F and a number to denote which formant, starting from the lowest frequency:
F0 --> fundamental (pitch)
F1 --> 1st formant from lowest freq to highest
F(n) --> (n)th formant

Note that it is possible to make other formants happen that are in between the formants we usually see, but these do not replace the existing F1 F2 etc. So if nasal resonance joins the F1 and F2, the "old" F3 is still called F3. We don't downrank it to F2 because there now appears to be less formants below it.
`,
    color:"#547",
    tooltip:` `,
})

register_node("vocalsize", "resonance", {
    title:"Vocal Size", desc:
`Vocal Sizett{{first known use: OVC, TransVoiceLessons}} is a way of intuitively explaining resonance by using descriptions of the physical stature of the speaker within the framework of character voices. A cartoon character who is a giant will have a booming, deep voice, where a small pixie will have a bright voice. These voices can then be described as a "small voice" or a "large voice", and the sound that is described is immediately understood. This is not about the size of the vocal tract but instead about the size or stature of the hypothetical speaker.`,
    color:"#454050",
    tooltip:` `,
})







//////////////////////
// VOCAL COVERS
//////////////////////
register_node("covers", "root", {
    title:"Vocal Covers", desc:
`A vocal cover is a feature of voice that is unintended and usually mutes or otherwise impedes the intended function or sound.`,
    color:"#43403f",
    tooltip:` `,
})
register_node("tongueroot", "covers", {
    title:"Tongue Root Retraction", desc:
`Associated with Stitch, Kermit, Meatwad. This is a slightly dark quality which can sound like something is stuck in the throat. It is achieved by moving the base of the tongue backward.`,
    color:"#544",
    tooltip:` `,
})
register_node("nasality", "covers", {
    title:"Nasality", desc:
`Nasality is when air is let through the nasal passage on sounds that don\'t need this. Nasal sounds like N, M and NG are meant to be nasal, but most other sounds should not have air coming through the nose. We can test this by saying a phrase which doesn\'t have any nasal sounds in it, and pinching the nose; if it sounds honky, it is nasal.`,
    color:"#544",
    tooltip:` `,
})
register_node("lowiahollow", "covers", {
    title:"Low IA Hollowness", desc:
`Low IA closure voices can become hollow, losing their harmonic power and brightness. This can sound similar to m2 / falsetto.`,
    color:"#544",
    tooltip:` `,
})

register_instance("breathiness", "covers")

register_node("subharmonics", "covers", {
    title:"Subharmonics", desc:
`Subharmonics sound similar to creak or m0, but are more harmonic and less like random noise. They form for various reasons, but often due to true vocal fold tension / constriction and too much closure for the level of pressure / airflow.

This presents itself as "extra harmonics". The folds get interrupted every second or third or etc cycle, and so it sounds like there are two voices at once. It isn't damaging but it can be very hard to build a habit that leaves it behind. It can be used in singing to do lower notes, or as a stylistic choice such as in certain types of overtone singing.`,
    color:"#545",
    tooltip:` `,
})



//////////////////////
// TRAINING RELATED
//////////////////////
register_node("training", "root", {
    title:"Training Related", desc:
`Covers anything about voice training as an act, rather than specifically about the actual voice.`,
    color:"#373747",
    tooltip:` `,
})






register_node("Credit", "root", {
    title:"Credit", desc:
`There are tooltips on <b>some</b> notes that tell you where the concept was first seen or where <b>the writer (Sumi) got it from</b> or a source of the information or statement, but these are just the earliest known use / source, and are <b>not included if not known</b>.

If you know of an earlier use / origin of a term, concept, fact or exercise, please make an issue on the repository or contact info[at]sumianvoice.com.

If a dispute about the origin of a thing is unresolved, the tooltip will be completely removed until it is resolved.
`,
    color:"#333",
    tooltip:` `,
})

register_node("Data and Research", "root", {
    title:"Data and Research", desc:
`The following is a list of things we would very much like to have <b>data and research</b> for. If you find some, please notify us! It's likely that this research exists obscurely, or not at all.
It can also be inspiration for research topics <i>hint hint</i>.

--> is IA activity specifically responsible for mechanism blending along with TA vs CT
--> is it possible that low IA can allow for partial vocal fold vibration
--> is only TA responsible for vocal fold vibratory mass and as such vocal weight
--> is vocal fold vibratory mass actually the cause of the sound, and how specifically (probably need high speed camera footage and skilled vocalist)
--> can the TA be hypertrophied physically
--> can the TA be atrophied physically
`,
    color:"#333",
    tooltip:` `,
})


register_node("Disclaimer", "root", {
    title:`<aaaa style="opacity:0.4;">Disclaimer</aaaa>`, desc:
`<aaaa style="opacity:0.4;">THE CONTENT IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE CONTENT OR THE USE OR OTHER DEALINGS IN THE CONTENT.

The author does not endorse, guarantee nor otherwise deal in the validity nor safety of any of the content nor the pages to which it links. Nothing in the content is medical advice nor advice of any kind, even where implied or explicitly stated otherwise.</aaaa>
`,
    color:"#333",
    tooltip:` `,
})




