
if (true) {
const color = "#386";

register_node("m2blend", "m2", {
    title:`Blend M2 with slides`, desc:
`Blending M2 is where we match up the configuration of M1 and M2 so that there is no imbalance and no break.

--> use a high, relaxed, quiet and hollow note like F4 and do a slide from that note down to near the bottom of your range
--> keep the volume consistent throughout
--> once you can go down, try going down and then coming back up immediately
--> when you can go down and up, do it continuously
--> do the same slide, but this time with a slightly more full, strong but effortless sound
--> the goal is to relaxedly smooth out the break
--> this can be thought of as "strong but not pushed or effortful" or just "confident"
`,
    color:color,
    type:"exg",
    tooltip:` `,
})

register_node("findingm2humming", "m2", {
    title:`Finding m2 with Humming`, desc:
`This can help if you can't access M2 at all, or just to relax the higher range in general. Being able to access M2 is very important.

--> do a hum at a low pitch
--> relax it almost to the point where it starts cutting out
--> raise the pitch a tiny bit
--> hold each pitch for 3 to 5 seconds
--> keep raising, but if there's any amount of added effort, don't go higher
--> you can also follow: <a href="https://www.youtube.com/watch?v=ySgg2YUDGH4">video</a>
`,
    color:color,
    type:"exg",
    tooltip:` `,
})

register_node("findingm2hoots", "m2", {
    title:`Finding m2 with Hoots`, desc:
`Once you already have access to M2 but it's not reliable to get into it, this can sometimes be all we need to get out voice into M2.

--> for this, you will need a puff of air in the "hoo", it should be fairly breathy
--> push that puff of air a fair bit, and try to make a hollow "hoo" sound at a high pitch like E4 or above
--> let go immediately after starting the sound. You don't want to run out of air or strain
--> relax as much as possible and let it rest slightly lower if you like
--> focus on making it as relaxed and hollow as possible
--> now try doing it on command without the "hoo", and also try sliding up to it from a low pitch (let the break happen)

tt{{first known use: Sumianvoice}}
`,
    color:color,
    type:"exg",
    tooltip:` `,
})


register_node("pitchmatchingsequence", "pitchmatching", {
    title:`Pitch Matching Sequence`, desc:
`Good as an introductory exercise for pitch matching.

--> use a virtual piano
--> start at C3 and use the major (white keys) scale
--> match the pitch by sliding up
--> match the next pitch too
--> then, predict the next pitch
--> continue up the scale
`,
    color:color,
    type:"exg",
    tooltip:` `,
})
register_node("pitchmatchingrandom", "pitchmatching", {
    title:`Pitch Matching Random`, desc:
`Choosing notes to match at random is a good way to gain better skill since we can't "just raise" or "just lower", we have to actually match it with no context except the note itself.

--> use a tone generator or virtual piano
--> start at C3 or so, and pick notes between that and C4 or your "easy to do" range
--> try to match the pitch
--> if you can't, slide up
`,
    color:color,
    type:"exg",
    tooltip:` `,
})
register_node("pitchmatchingpreempting", "pitchmatching", {
    title:`Pitch Matching Preempting`, desc:
`For much more control over pitch matching.

--> play and then match each note in the Cmaj scale (white keys) e.g. C3 to C4
--> play each note again to remind yourself, but don't match them
--> play the first one (e.g. C3)
--> match this pitch
--> then try to guess the pitch of the next note; sing this next note
--> then, play that note to see if you got it right
--> if you get it right, continue
--> otherwise match it a few times and start from the beginning, playing the whole scale first
`,
    color:color,
    type:"exg",
    tooltip:` `,
})
register_node("beatingexercise", "pitchmatching", {
    title:`Beating Exercise`, desc:
`Beating is when two notes don't quite match, so every so many vibrations one will cancel the other out. This more or less creates another freqency which is the difference between the two notes.

--> play a note
--> match it
--> detune your voice the smallest amount you can
--> this will result in a "wub wub" sound
--> how slow this is, is how close you are to the pitch
--> one "wub" sound per second = 1hz difference
--> try making it faster and slower, and feel how the pitch is changing in a minute way
`,
    color:color,
    type:"exg",
    tooltip:` `,
})

register_node("rangeexpandsovte", "rangeexpansion", {
    title:`Range expansion with SOVTEs`, desc:
`Range expansion with SOVTEs.

--> NEVER strain or add effort or "squeeze" when doing this
--> do a lip trill or other SOVTE
--> slide up to ~95% of the highest note you can do, but don't try hard to reach 100%
--> if there's a relatively sudden increase in effort or power needed, don't do it
--> hold for ~1 second
--> slide down
--> do for max 5min in a session, don't continue if any fatigue present
--> don't worry about loss of closure or the voice cutting out / "only air comes out"; don't try to "fix" it in the moment, relaxedly lean toward more consistency over time instead
--> once you finish doing these, do the same slide but in a light, relaxed normal voice (not the SOVTE but just a normal slide)
`,
    color:color,
    type:"exg",
    tooltip:` `,
})



register_node("reducetvfconstriction", "tvfconstriction", {
    title:"Reducing TVF Constriction", desc:
`To adjust airflow without constriction / squeezing.

--> problem: it's possible to constrict the folds to reduce the flow of air, instead of just not pushing from the lungs as much
--> solution:
--> imagine a birthday cake. On the cake are candles that are close together
--> breathe out so that you would blow out all of them as quickly as possible (high airflow)
--> breathe out so that you would blow out only one at a time (medium airflow)
--> breathe out so that you would only make them flicker but not go out (low airflow)
--> this is how you reduce the flow without constricting
--> it also allows you more time for breathing out so that you can do other exercises and tests with this
--> to apply to voiced sounds, simply breathe out in this low or medium airflow, then let any sound happen at all, like a sigh
--> repeat, and make the onset of the sound "slower", draw out the addition of the sound
--> this should mean you use only the bare minimum of everything, and eliminate constriction and tension

tt{{first known use: Sumianvoice}}
`,
    color:color,
    type:"exg",
    tooltip:` `,
})


register_node("breathinessstepping", "breathiness", {
    title:"Breathiness Stepping", desc:
`Can reduce breathiness or even train higher closure for volume and clarity.

--> say a word or phrase normally without trying to be non-breathy or breathy
--> say the same thing as airy, light and breathy as you can
--> we don't want constriction, make sure it's open and relaxed like a sigh
--> try to go back and be non-breathy and say the same thing again
--> there should be no extra effort here, it should feel natural and relaxed
--> apply to a sentence to get more control
--> saying one word in a sentence in a breathy way and the rest non-breathy can be a good way to train it more generally
`,
    color:color,
    type:"exg",
    tooltip:` `,
})
register_node("m2ohah_ia", "ia", {
    title:"M2 oh ah for IA", desc:
`Good for reducing the "not enough IA" hollowness.

--> go to an m2 note
--> say in a lazy and passive way "ohh"
--> note the low tone purity
--> say "ah" or "hah" in a stronger posture
--> this will not be more effortful, but a good way to remember how to do it is to yell "hey!" at this pitch; it will more or less force the closure you need
--> note that doing this clear and pure tone is effortless and is more a sense of balance than effort or control
--> promote this effortless but clear configuration elsewhere in the voice

tt{{first known use: Sumianvoice}}
`,
    color:color,
    type:"exg",
    tooltip:` `,
})
register_node("sternvoice", "ia", {
    title:"Stern Voice", desc:
`This can help gain better closure and stability.
--> talk as if slightly angry, or talking to a dog that did something wrong
--> in other words speak forcefully and strongly, but keep the volume down
--> 1 2 3 is a good phrase to start with, then move to ?crate or ?northwind
--> make smooth and very barely breathy to get the "DJ announcer voice"
--> use as a way to gain stability and basic closure

tt{{first known use: Sumianvoice}}
`,
    color:color,
    type:"exg",
    tooltip:` `,
})





} //