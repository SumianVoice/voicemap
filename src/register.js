/*
Licensed under MIT License, Copyright 2023 Sumi, sumianvoice.com
*/

const root = document.getElementById("root");
root._list = root
root._tree_step = 1

function html_fragment_from_string(html_string) {
    let frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = html_string;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

///////////////////////////////////////
//        REGISTER
///////////////////////////////////////

const active_nodes = {
    "root" : root
}

const registered_nodes = {
    "root" : {}
}

let instances_to_add = {}
function register_instance(id, in_node_name) {
    if (instances_to_add[id] == null) {
        instances_to_add[id] = []
    }
    instances_to_add[id].push(in_node_name)
}

function do_all_registered_instances() {
    console.log("doing instances");
    for (var id in instances_to_add) {
        const v = instances_to_add[id]
        for (let i = 0; i < v.length; i++) {
            const def = registered_nodes[id]
            in_node_name = v[i]
            construct_node(id + String(i), in_node_name, def, {['skip_register']:true, ['is_copy']:true, ['old_id']:id})
        }
    }
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: ((rect.left + rect.right)/2 + parent.scrollLeft - window.innerWidth * 0.5) / drag.zoom_now,
        top: (rect.top + parent.scrollTop - window.innerHeight * 0.3) / drag.zoom_now
    };
}

function get_node_position(name) {
    let element = active_nodes[name]
    if (element == null) {
        alert("no node " + name);
        element = active_nodes["About"];
    }
    var rect = getOffset(element);
    return rect;
}
function scroll_to_node(name) {
    var rect = get_node_position(name);
    scroll_to_position(rect.left, rect.top);
}

function get_url_vars() {
    const vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function go_to_url_tag() {
    const vars = get_url_vars()
    if (vars.goto) {
        scroll_to_node(vars.goto);
    }
}

const scale_factor_per_tree_step = 0.8

function tooltipify(text) {
    // parse tt{{blah}} as a notation / reference popup
    const ttsplit = text.split(`tt{{`);
    if (ttsplit.length > 0) {
        text = ``;
        for (let i = 0; i < ttsplit.length; i++) {
            if (i > 0) {
                const ttsplittmp = ttsplit[i].split(`}}`);
                text += `<sup class="tt" onmousedown="stopDragging()">[?]<span class="tooltiptext">` +  ttsplittmp[0]
                text += `</span></sup>` + (ttsplittmp[1] || "")
            } else {
                text += ttsplit[i]
            }
        }
    }
    return text
}

function linkify(text) {
    // parse tt{{blah}} as a notation / reference popup
    const ttsplit = text.split(`t[[`);
    if (ttsplit.length > 0) {
        text = ``;
        for (let i = 0; i < ttsplit.length; i++) {
            if (i > 0) {
                const ttsplittmp = ttsplit[i].split(`]]`);
                const elems = ttsplittmp[0].split(`|`);
                text += `<span class="tag_link" onmousedown="stopDragging()" onclick="show_tagged(\'` +  elems[0] + `\')">` + elems[1]
                text += `</span>` + (ttsplittmp[1] || "")
            } else {
                text += ttsplit[i]
            }
        }
    }
    return text
}

function listify(text) {
    const ttsplit = text.split(`<br>- `);
    if (ttsplit.length > 0) {
        text = ttsplit[0] + `<ul>`;
        for (let i = 1; i < ttsplit.length; i++) {
            text += `<li>${ttsplit[i]}</li>`

            if (i == ttsplit.length - 1) {
                text += `</ul>`
            }
        }
    }
    return text
}

function parse_def(id, in_node_name, def) {
    // keep track so can add later
    // var def = {}
    // for (k in from_def) {
    //     def[k] = from_def[k];
    //     if (k == "title") { console.log(def.title);}
    // }

    def.place_in = in_node_name;

    def.desc = def.desc.replaceAll("\n", "<br>");
    def.title = def.title.replaceAll("\n", "<br>");
    def.title = def.title.replaceAll(/\<.*(small_subtitle).*\<\/\i\>/gi, "");
    def.title += `<br>` + `<i class="small_subtitle" onmousedown="stopDragging()">` + id + `</i>`;
    def.tooltip = def.tooltip.replaceAll("\n", "<br>");
    def.desc = def.desc.replaceAll("-->", '<b class="hlight">--></b>');

    def.desc = listify(def.desc);

    if (def.desc == "") {
        def.desc = `<b class="hlight">[under construction]</b>`;
    }
    def.desc = def.desc.replaceAll("[wip]", '<br><br><b class="hlight">[under construction]</b>');

    def.desc = tooltipify(def.desc);
    def.tooltip = tooltipify(def.tooltip);
    def.title = tooltipify(def.title);

    def.desc = linkify(def.desc);
    // if (def.id == "naturalisation") { console.log(def.desc); }

    return def;
}

function play_audio(clip_path) {
    var audio = new Audio(`audio/${clip_path}`);
    audio.play();
}

function get_fragment_from_def(id, in_node_name, def) {
    const new_tree_step = active_nodes[in_node_name]._tree_step + 1;
    let new_scale_factor = Math.round(1 / (new_tree_step**1.1) * 10 * 1000) / 1000;
    new_scale_factor = Math.min(Math.max(2, new_scale_factor), 9);

    // div
    let code = '<div class="node" id="' + id + '"';
    code += ' style="background-color:' + def.color + ";" +
    "padding:" + String(new_scale_factor * 10) + "px;" +
    "margin:" + String(new_scale_factor * 6) + "px;" +
    '\"' +
    '>';
    // title
    code += '<h2 class="title"';
    code += ` style="`;
    code += `font-size:` + String(new_scale_factor) + "rem;";
    code += 'height:max(fit-content, ' + String(new_scale_factor*1.2) + "rem);";
    code += "\"" + ">";
    code += (def.title || "") + '</h2>';
    // desc
    code += '<div class="desc"';
    // code += ' style=\"font-size:' + String(new_scale_factor * 0.5) + "rem;" +
    // "width:" + String(new_scale_factor * 250) + "px;" +
    // "\""
    code += ">";
    code += (def.desc || "");
    code += "</div>";

    if (def.audio) {
        code += `<div class="desc">`
        code += `<h3 class="audio_header">Audio Examples</h3>`;
        code += `<div class="audio_list">`;
        for (clipname in def.audio) {
            code += `<button class="audio_button" onmousedown="stopDragging()" onclick="play_audio('${def.audio[clipname]}')">${clipname}</button>`
        }
        code += `</div>`;
        code += `</div>`;
    }

    if (def.tooltip != " " && def.tooltip != null) {
        code += `<p class="tooltip">`;
        code += def.tooltip;
        code += `</p>`;
    }

    code += '<div class="node_list" id="' + id + "_list" + '"></div></div>';

    if (def.type == "spacer") {
        code = `<div id="` + id + `"></div>`;
    }

    return html_fragment_from_string(code);
}

const exercise_tags = {"exf":1, "exm":1, "exg":1};
const active_nodes_index = []
function register_node(id, in_node_name, fromdef, flags={}) {
    let def = {}; for (k in fromdef) {def[k] = fromdef[k];}
    def.id = id
    def.in_node_name = in_node_name
    def.added = false
    def.flags = flags
    registered_nodes[id] = def
}

function construct_node(id, in_node_name, fromdef, flags={}) {
    if (active_nodes[in_node_name] == null) {
        console.log(`CANNOT add node "` + id + `" in node "` + in_node_name + `"`);
        console.log(fromdef);
        return false;
    }
    // copy table
    let def = {}; for (k in fromdef) {def[k] = fromdef[k];}

    if (flags.is_copy) {
        def.desc = `t[[` + String(def.id) + `|--> Highlight Original]]\n` + String(def.desc)
        // console.log(flags)
    }
    // if this ID already exists, show an error
    if (!flags.skip_register && active_nodes[id] != null) {
        def.title += "ERROR! THIS WILL OVERWRITE " + id
    }

    def = parse_def(id, in_node_name, def);

    if (!flags.skip_register) {
        // registered_nodes[id] = def;
        active_nodes_index.push(def);
    };

    const new_tree_step = active_nodes[in_node_name]._tree_step + 1;

    const fragment = get_fragment_from_def(id, in_node_name, def);

    active_nodes[in_node_name]._list.appendChild(fragment);
    active_nodes[id] = document.getElementById(id);
    active_nodes[id]._list = document.getElementById(id + "_list");
    active_nodes[id]._tree_step = new_tree_step;

    if (flags.is_copy) {
        active_nodes[id].style["border"] = "#ffffff20 4px dashed";
    }
    if (exercise_tags[def.type || "none"] != null) {
        active_nodes[id].style.display = "none";
    }
}

function construct_all_nodes() {
    for (var id in registered_nodes) {
        if (id == "root") {continue;}
        const def = registered_nodes[id];
        construct_node(def.id, def.in_node_name, def, {});
    }
}

window.onload = function() {
    construct_all_nodes()
    do_all_registered_instances()
    go_to_url_tag()
}


const exercise_visibility = {
    fem : false,
    masc : false,
    gen : false,
};

function show_nodes(type, bool) {
    for (var k in active_nodes) {
        const n = active_nodes[k];
        const def = registered_nodes[k];
        if (def && def.type == type) {
            n.style.display = (!bool && "none") || "flex";
        }
    }
}

function show_exercise_fem() {
    exercise_visibility.fem = !exercise_visibility.fem;
    show_nodes("exf", exercise_visibility.fem);
    button_show_exercise_fem.style["background-color"] = ((exercise_visibility.fem && "#c37") || "");
}
function show_exercise_masc() {
    exercise_visibility.masc = !exercise_visibility.masc;
    show_nodes("exm", exercise_visibility.masc);
    button_show_exercise_masc.style["background-color"] = ((exercise_visibility.masc && "#37c") || "");
}
function show_exercise_gen() {
    exercise_visibility.gen = !exercise_visibility.gen;
    show_nodes("exg", exercise_visibility.gen);
    button_show_exercise_gen.style["background-color"] = ((exercise_visibility.gen && "#0a3") || "");
}


let tag_highlight_list = {}

function show_tagged(tag) {
    console.log("looking for " + String(tag));
    for (var k in active_nodes) {
        const n = active_nodes[k];
        if (k == tag) {
            n.style.transition = `1s all ease-in-out`;
            n.style.outline = `16px solid red`;
            n.style.display = `flex`;
            tag_highlight_list[k] = 10;
        } else {
            n.style.transition = `1s all ease-in-out`;
            n.style.outline = `0px solid red`;
        }
    }
}

function update(dt) {
    for (k in tag_highlight_list) {
        if (tag_highlight_list[k] > 0) {
            tag_highlight_list[k] -= dt;
        } else if (tag_highlight_list[k] != -100) {
            tag_highlight_list[k] = -100;
            const n = active_nodes[k];
            n.style.transition = `1s all ease-in-out`;
            n.style.outline = `0px solid red`;
            // to make invisible again
            // let def = registered_nodes[k]
            // if (exercise_tags[def.type] != null && !exercise_visibility[def.type]) {
            //     n.style.display = `none`;
            // }
        }
    }
}

register_globalstep(update)


/** @type {HTMLButtonElement} **/
const button_show_exercise_masc = document.querySelector("#button_show_exercise_masc");
button_show_exercise_masc.addEventListener("click", show_exercise_masc);
/** @type {HTMLButtonElement} **/
const button_show_exercise_fem = document.querySelector("#button_show_exercise_fem");
button_show_exercise_fem.addEventListener("click", show_exercise_fem);
/** @type {HTMLButtonElement} **/
const button_show_exercise_gen = document.querySelector("#button_show_exercise_gen");
button_show_exercise_gen.addEventListener("click", show_exercise_gen);


