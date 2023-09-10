
if (true) {
const color = "#a36"

register_node("whisperintro", "larynxheight", {
    title:"Whisper Introduction\nTo Resonance", desc:
``,
    color:color,
    type:"exf",
    tooltip:` `,
})

register_node("resonancestepping", "larynxheight", {
    title:"Resonance Stepping", desc:
``,
    color:color,
    type:"exf",
    tooltip:` `,
})

register_node("darktobright", "brightness", {
    title:"Dark to Bright", desc:
`--> do a dark, Patrick Star like voice\n\
--> go to whatever pitch you want to speak at\n\
--> start reading a passage, preferably long\n\
--> let the voice go back to normal brightness\n\
--> let the voice get a little brighter\n\
`,
    color:color,
    type:"exf",
    tooltip:` `,
})

register_node("uhh-iii", "mouthspace", {
    title:"UHH and III", desc:
`If we say "uhhh", we will achieve most likely large mouth space and a darker voice. Then we can compare this to the "iii" sound as in "happ<b>y</b>", which will cause a smaller mouth space. It's important to note that we might get a smile expression through this; that's not necessary for small mouth space, so bear that in mind.\n\
\n\
This can then tell us vaguely how to affect mouth space.\n\
\n\
--> say "uhh" and note the larger mouth space\n\
--> say "happiiiiiy" and note the smaller mouth space\
`,
    color:color,
    type:"exf",
    tooltip:` `,
})

register_node("feminineaccent", "mouthspace", {
    title:`The "Feminine Accent"`, desc:
`Our assumptions about what a "feminine way of speaking" would be is not completely accurate but it is a good starting point. If we do whatever way of speaking we think is feminine, we will likely achieve smaller mouth space, brigher sibilants and different articulation. This can get perhaps 80% of the features we need.\n\
\n\
--> speak with whatever you think is an exaggerated feminine voice\n\
--> note the changes in how you articulate the mouth and the brighter S sounds\
`,
    color:color,
    type:"exf",
    tooltip:` `,
})

register_node("pitchnatfloat", "naturalisation", {
    title:`Pitch Naturalization Floating`, desc:
`Pitch naturalization using pitch "floating"
--> speak at your relaxed, not-doing-anything pitch
--> make sure to start strong, possibly a little bit louder and heavier than normal
--> make **the last word of each phrase held longer** and monotone as it rests on the **base pitch** which helps keep the base pitch consistent
--> base pitch is the pitch your voice returns to after intonation, and it's what is raising the entire voice up to that "anchor"
--> once you feel comfortable here, let that last word and note float up a tiny bit, raising the whole voice
--> repeat, but don't push the pitch too high, the goal is to naturalize all of your range, not raise pitch
--> be extremely patient; if you rush or try too hard to control things, it won't work
--> lean toward less airflow but moderately loud
--> going up in pitch should be extremely easy, suspiciously so; if not, spend more time letting it naturalise here or start again
--> pitch naturalisation is called that because at each pitch, the voice sounds natural as if it's always been at this pitch and this is your "natural voice"
<a href="https://youtu.be/FrQQQLOmfrc">Video - explanation</a>
<a href="https://youtu.be/x4O7hkC2zN8">Video - example</a>
`,
    color:color,
    type:"exf",
    tooltip:` `,
})

register_node("pitchnatloud", "naturalisation", {
    title:`Loud Pitch Naturalisation`, desc:
`--> do the normal pitch naturalisation exercises but loud
--> "trying to speak over the noise at a party" level of volume is ideal, don't shout but don't let it go quiet
--> don't sacrifice the volume as you raise pitch
--> the loudness is there to stop you compensating
--> when you go quiet it will be easier to add strain, breathiness etc to hide weight
--> take it much slower and be more conservative with the pitch raises than usual; you'll need more time because it's louder
--> loudness-weight conflation is common and this is why it will take longer to naturalise without going quiet, and also *why* it's important to keep it from going quiet
--> don't push the pitch up to the top of your range, be careful not to overstep your boundaries
--> occasional exploration of your range is ok though
--> slow down as you get higher; F3 might take a minute or several to naturalise
--> so spend more time on higher pitches
--> if you notice a "pushing" to reach the higher intonation, don't raise base pitch
--> you can blend with m2, and this is mostly good, but you should wait until you need to
`,
    color:color,
    type:"exf",
    tooltip:` `,
})

register_node("setpitchnat", "naturalisation", {
    title:`Set Pitch Naturalisation`, desc:
`--> pick a pitch to use as a base pitch; make sure it's not too high, it should be easy to do in your heavier, more masculine voice
--> slide up to this pitch and speak one phrase monotone, keeping it loud and strong
--> start the second phrase a little higher, but have it come down to the base pitch again by the end, making it easier to add intonation
--> at no point in this exercise should you 'try' to do anything, and it's best to avoid focusing on any individual aspects. Instead, is the overall voice getting more natural and easy to use?
--> at each pitch step your goal is to become more lazy and relaxed over time and to get used to speaking at this level; your body wants to do certain things to the voice at each pitch and so you should let it.
--> when you're very very comfortable and it feels natural and not 'pushed' to speak here, go to the next pitch or start again
--> if you can let the intonation naturally go quite high, then you'll get a little more results faster but again don't 'try' to do so
--> the "voice feels like it opens up" and a sense that high pitches are more approachable <b>is weight</b> so notice this shift
`,
    color:color,
    type:"exf",
    tooltip:` `,
})

register_node("phraserepetition", "naturalisation", {
    title:`Phrase Repetition`, desc:
`--> find a balanced configuration to speak at a moderate pitch (e.g. 165hz / E3)
--> say a phrase with high intonation (e.g. "when you draw fewer lines" from Pikat)
--> do this at randomly chosen pitches
--> the intonation is there to challenge you to control your vocal weight; avoid making it more effortful or letting it yodel
--> never add effort
--> the goal is to find the elusive configuration where the voice is effortless to change the pitch but is still a normal sounding voice
--> this can give you more practice for using high closure instead of vocal weight for volume`,
    color:color,
    type:"exf",
    tooltip:` `,
})



register_node("weightnotpitch", "vocalweight", {
    title:`Think Weight, not Pitch`, desc:
`Think about pitch as being weight, not notes.
--> weight affects base pitch directly, so if you change weight, you will get a different base pitch
--> think about sweet voices, falsetto etc. They are light, and you can just scale up toward them
--> when you think about pitch in this way, it is likely that you will balance the weight correctly for the pitch you end up on
--> if it's balanced it won't drop as much, and won't be strained or tense
--> to test this and gain more skill:
--> start at a low pitch relaxed
--> go lighter, letting the voice raise in pitch if it wants to
--> if it sounds like it's "the same but higher" then you probably raised pitch instead of going lighter so start again
--> eventually you'll reach m2, in which case do one more lighter voice and stop
`,
    color:color,
    type:"exf",
    tooltip:` `,
})


register_node("m2highresonance", "larynxheight", {
    title:`M2 for Resonance Range`, desc:
`Using M2 to get very high resonance or OPC
--> stay relaxed, never force this, take it slow, don't push it to the max
--> say a dark, low resonance "uhh" at F4 / 330hz or wherever feels easy to do
--> let it go back to normal, or let it go slightly brighter but don't push it to the limit as it can end up becoming constricted
--> keep doing this and experimenting to find and expand the edge of your range
--> since it's obvious if it becomes tense, it can naturally reduce the constrictions that could happen in other resonance exercises so it's good for range expansion for this reason
`,
    color:color,
    type:"exf",
    tooltip:` `,
})
register_node("vampireslides", "larynxheight", {
    title:`Vampire Slides`, desc:
`Vampire slides from a low to high resonance whisper
--> make sure it's not constricted; more air but less sound is good. It should feel like normal breathing
--> if you're just starting out, just stop here and try voiced exercises
--> once you're at the top, pause and then say voiced "wa" or "la"
--> this might be at a high pitch, but it's good to do it at a pitch you can normally speak at (doing both very high and speech pitches is good)
--> the "la" and "wa" sounds reduce the roughness that could come in otherwise
--> avoid using this for going into general speech, only use for gaining the skill and then do voiced exercises (like stepping) instead
`,
    color:color,
    type:"exf",
    tooltip:` `,
})
register_node("opcinm2", "opc", {
    title:`OPC in M2`, desc:
`OPC in M2
--> do a hollow, dark / low resonance m2 note with "aaah"
--> do a brighter "aaah", adding some OPC
--> use "uwawawa" repeated to add more OPC while keeping the whole configuration very relaxed
--> focus on how effortless this is and the high resonance sound you get
--> notice the feeling of closing in at the back of the mouth / top of the throat
--> remember this and use as a guide to do OPC elsewhere
--> this is also good for resonance range and relaxing it
--> you can also do typical OPC sounds here, like "uwa", "poyo", "hai"
`,
    color:color,
    type:"exf",
    tooltip:` `,
})
register_node("sweetsounds", "vocalweight", {
    title:`Sweet Sounds`, desc:
`Sweet Sounds
--> try to just do a "sweet" voice
--> this description is intentionally vague, so as to let your subconscious do the work
--> think of a sweet, soft voice you've heard before
--> this might mean going into or almost going into falsetto / m2
--> to achieve the sweet quality, it's necessary to raise the pitch slightly, so start in a neutral or medium high pitch
--> you can also let it raise gradually from a low pitch as you speak a passage, and as it raises make it sweeter and sweeter
--> the resulting sound will be breathy most likely, so remove this after
--> don't use this to get you into a speaking configuration, but instead to gain the skill and a sense of direction; use pitch naturalisation or another method to apply it after
`,
    color:color,
    type:"exf",
    tooltip:` `,
})










}  ////////////////////////////////////////////