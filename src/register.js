/*
Licensed under MIT License, Copyright 2023 Sumi, sumianvoice.com
*/

const parent = document.getElementById("root");
parent._list = parent
parent._tree_step = 1

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

const registered_nodes = {
    "root" : parent
}

const registered_node_definitions = {
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
    for (var id of Object.keys(instances_to_add)) {
        const v = instances_to_add[id]
        for (let i = 0; i < v.length; i++) {
            const def = registered_node_definitions[id]
            in_node_name = v[i]
            register_node(id + String(i), in_node_name, def, {['skip_register']:true, ['is_copy']:true, ['old_id']:id})
        }
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
                text += `<sup class="tt">[?]<span class="tooltiptext">` +  ttsplittmp[0]
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
                text += `<span class="tag_link" onclick="show_tagged(\'` +  elems[0] + `\')">` + elems[1]
                text += `</span>` + (ttsplittmp[1] || "")
            } else {
                text += ttsplit[i]
            }
        }
    }
    return text
}

function parse_def(id, in_node_name, from_def) {
    // keep track so can add later
    var def = {}
    for (k in from_def) {
        def[k] = from_def[k];
    }

    def.place_in = in_node_name;
    def.id = id;

    def.desc = def.desc.replaceAll("\n", "<br>");
    def.title = def.title.replaceAll("\n", "<br>");
    def.title = def.title.replaceAll(/\<.*(small_subtitle).*\<\/\i\>/gi, "");
    def.title += `<br>` + `<i class="small_subtitle">` + id + `</i>`;
    def.tooltip = def.tooltip.replaceAll("\n", "<br>");
    def.desc = def.desc.replaceAll("-->", '<b class="hlight">--></b>');

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

function get_fragment_from_def(id, in_node_name, def) {
    const new_tree_step = registered_nodes[in_node_name]._tree_step + 1;
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
const registered_nodes_index = []
function register_node(id, in_node_name, fromdef, flags={}) {
    if (registered_nodes[in_node_name] == null) {
        console.log("CANNOT add node");
        console.log(in_node_name);
        console.log(fromdef);
        return;
    }
    // copy table
    let def = {}; for (k in fromdef) {def[k] = fromdef[k];}

    if (flags.is_copy) {
        def.desc = `t[[` + String(flags.old_id) + `|--> Highlight Original]]\n` + String(def.desc)
        console.log(flags)
    }
    // if this ID already exists, show an error
    if (!flags.skip_register && registered_nodes[id] != null) {
        def.title += "ERROR! THIS WILL OVERWRITE " + id
    }

    def = parse_def(id, in_node_name, def);

    if (!flags.skip_register) {
        registered_node_definitions[id] = def;
        registered_nodes_index.push(def);
    };

    const new_tree_step = registered_nodes[in_node_name]._tree_step + 1;

    const fragment = get_fragment_from_def(id, in_node_name, def);

    registered_nodes[in_node_name]._list.appendChild(fragment);
    registered_nodes[id] = document.getElementById(id);
    registered_nodes[id]._list = document.getElementById(id + "_list");
    registered_nodes[id]._tree_step = new_tree_step;

    if (flags.is_copy) {
        registered_nodes[id].style["border"] = "#ffffff20 4px dashed";
    }
    if (exercise_tags[def.type || "none"] != null) {
        registered_nodes[id].style.display = "none";
    }
}

window.onload = function() {
    do_all_registered_instances()
}


const exercise_visibility = {
    fem : false,
    masc : false,
    gen : false,
};

function show_nodes(type, bool) {
    for (var k in registered_nodes) {
        const n = registered_nodes[k];
        const def = registered_node_definitions[k];
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
    for (var k in registered_nodes) {
        const n = registered_nodes[k];
        if (k == tag) {
            n.style.transition = `1s all ease-in-out`;
            n.style.outline = `16px solid red`;
            n.style.display = `flex`;
            tag_highlight_list[k] = 10
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
            const n = registered_nodes[k];
            n.style.transition = `1s all ease-in-out`;
            n.style.outline = `0px solid red`;
            // to make invisible again
            // let def = registered_node_definitions[k]
            // if (exercise_tags[def.type] != null && !exercise_visibility[def.type]) {
            //     n.style.display = `none`;
            // }
        }
    }
}

var lastUpdate = Date.now();
var myInterval = setInterval(tick, 0);
var total = 0
function tick() {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;
    update(dt / 1000);
}


/** @type {HTMLButtonElement} **/
const button_show_exercise_masc = document.querySelector("#button_show_exercise_masc");
button_show_exercise_masc.addEventListener("click", show_exercise_masc);
/** @type {HTMLButtonElement} **/
const button_show_exercise_fem = document.querySelector("#button_show_exercise_fem");
button_show_exercise_fem.addEventListener("click", show_exercise_fem);
/** @type {HTMLButtonElement} **/
const button_show_exercise_gen = document.querySelector("#button_show_exercise_gen");
button_show_exercise_gen.addEventListener("click", show_exercise_gen);


