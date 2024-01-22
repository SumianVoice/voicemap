
# Voice Map
An interactive map of voice pedagogy.

　

## Goals
- provide a list of all of the characteristics and important concepts and facts in gendered voice pedagogy
- provide this in the most accessible way to users while maintaining the ease of modification to update the information over time

　

## Who is it for?
For people interested in vocal pedagogy, or who want to get the 'big picture' of voice pedagogy as it currently stands.

　

## Will it help me change my voice?
Probably not, since it's only stating what these concepts are. There are exercises that can be optionally enabled, but it's recommended you use guides, videos, ask for help in discords and do your own research instead of getting stuck into the underlying mechanics and theory of it. The intuitive practice notice inside the map is worth looking at and explains this situation in more detail.

　

## How do I help?
Here are some things that would be very useful:
- corrections to info that is wrong or outdated or just notifying of this
- research that contains relevant data on the topics mentioned
- older evidence of the use of a term or concept i.e. 'actually, it turns out X used the term Y in 2019, here's a link'
- new nodes that can be added if there are any missing

If you want to contribute to any of those things, make an issue or send a message! As this is my personal pedagogy, I'd advise to open an issue to fix some wording or add anything, rather than going back and forth to get PRs merged due to wording or research being needed.

　

## Contributing code
I'd advise against it, but making the code more elegant and simple is a viable thing. Look at the issues that are open for things that should be fixed. Look for the "planned" or "need help" tags.

Here is an inexhaustive list of things you *shouldn't* just make PRs for since they have a high chance of being rejected:
- rewrites of sections of the map or changing wording of things without prior discussion
- adding linting or workflows (just no.)
- making any part of the code more difficult to understand or add to
- making any 'build process' - currently, the map can be run locally without building it or using any tools other than basic JS in any browser, and it must stay that way; no jekyll or npm or any other build steps or outside dependencies whatsoever

However, when adding or changing any code through a PR, you **must** do the following:
- either offer changes under a public domain equivalent license and explicitly state this, or:
 - for each file changed, add your copyright notice and choice of license in the block comment at the top of the file
- read the rest of the readme above
- do a sanity check; are you sure this actually makes things better and not just more like the thing you usually do (see every open source project ever)
