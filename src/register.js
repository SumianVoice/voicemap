/*
Copyright (c) 2023 Sumi, SumianVoice <sumianvoice.com> <https://github.com/SumianVoice/voicemap>
    offered under MIT License <https://opensource.org/license/MIT/>
*/

const root = document.getElementById("root");
root._list = root;
root._tree_step = 1;

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

var Register = {
    active_nodes : {
        "root" : root,
    },
    registered_nodes : {
        "root" : {},
    }
};


Register.instances_to_add = {};

Register.register_instance = function(id, in_node_name) {
    if (Register.instances_to_add[id] == null) {
        Register.instances_to_add[id] = [];
    }
    Register.instances_to_add[id].push(in_node_name);
};


Register.do_all_registered_instances = function() {
    console.log("doing instances");
    for (var id in Register.instances_to_add) {
        const v = Register.instances_to_add[id];
        for (let i = 0; i < v.length; i++) {
            const def = Register.registered_nodes[id];
            in_node_name = v[i];
            Register.construct_node(id + String(i), in_node_name, def, {['skip_register']:true, ['is_copy']:true, ['old_id']:id});
        }
    }
};


Register.scroll_to_node = function(name) {
    Zoom.go_to_element_id(name)
};


Register.get_url_vars = function() {
    const vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
};


Register.go_to_url_tag = function() {
    const vars = Register.get_url_vars();
    if (vars.goto) {
        Register.scroll_to_node(vars.goto);
    }
};


Register.tooltipify = function(text) {
    // parse tt{{blah}} as a notation / reference popup
    const ttsplit = text.split(`tt{{`);
    if (ttsplit.length > 0) {
        text = ``;
        for (let i = 0; i < ttsplit.length; i++) {
            if (i > 0) {
                const ttsplittmp = ttsplit[i].split(`}}`);
                text += `<sup class="tt" onmousedown="Zoom.stopDragging()">[?]<span class="tooltiptext">` +  ttsplittmp[0];
                text += `</span></sup>` + (ttsplittmp[1] || "");
            } else {
                text += ttsplit[i];
            }
        }
    }
    return text;
};


Register.linkify = function(text) {
    // parse tt{{blah}} as a notation / reference popup
    const ttsplit = text.split(`t[[`);
    if (ttsplit.length > 0) {
        text = ``;
        for (let i = 0; i < ttsplit.length; i++) {
            if (i > 0) {
                const ttsplittmp = ttsplit[i].split(`]]`);
                const elems = ttsplittmp[0].split(`|`);
                text += `<span class="tag_link" data-tag="${elems[0]}" onmousedown="Zoom.stopDragging()" onclick="show_tagged('${elems[0]}')">` + elems[1];
                text += `</span>` + (ttsplittmp[1] || "");
            } else {
                text += ttsplit[i];
            }
        }
    }
    return text;
};


Register.listify = function(text) {
    const ttsplit = text.split(`<br>`);
    if (ttsplit.length == 0) { return; }

    var was_inside_list = false;
    text = "";
    for (let i = 0; i < ttsplit.length; i++) {
        // is a bullet point
        if (ttsplit[i].startsWith("- ")) {
            // is the first bullet point in the block
            if (!was_inside_list) {
                text += `<ul>`;
                was_inside_list = true;
            }
            // slice after 2 so it takes away the "- "
            text += `<li>${ttsplit[i].slice(2)}</li>`;
        // is the line after the last bullet point
        } else if (was_inside_list) {
            text += `</ul>`;
            was_inside_list = false;
            text += ttsplit[i];
        // is a normal line
        } else {
            text += `<br>` + ttsplit[i];
        }
    }
    return text;
};


Register.parse_def = function(id, in_node_name, def) {
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
    def.title += `<br>` + `<i class="small_subtitle" onmousedown="Zoom.stopDragging()">` + id + `</i>`;
    def.tooltip = def.tooltip.replaceAll("\n", "<br>");
    def.desc = def.desc.replaceAll("-->", '<b class="hlight">--></b>');

    def.desc = Register.listify(def.desc);

    if (def.desc == "") {
        def.desc = `<b class="hlight">[under construction]</b>`;
    }
    def.desc = def.desc.replaceAll("[wip]", '<br><br><b class="hlight">[under construction]</b>');

    def.desc = Register.tooltipify(def.desc);
    def.tooltip = Register.tooltipify(def.tooltip);
    def.title = Register.tooltipify(def.title);

    def.desc = Register.linkify(def.desc);
    // if (def.id == "naturalisation") { console.log(def.desc); }

    return def;
};


function play_audio(clip_path) {
    var audio = new Audio(`audio/${clip_path}`);
    audio.play();
}


Register.get_fragment_from_def = function(id, in_node_name, def) {
    const new_tree_step = Register.active_nodes[in_node_name]._tree_step + 1;
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
            code += `<button class="audio_button" onmousedown="Zoom.stopDragging()" onclick="play_audio('${def.audio[clipname]}')">${clipname}</button>`
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
};


Register.exercise_tags = {"exf":1, "exm":1, "exg":1};
Register.active_nodes_index = []
Register.register_node = function(id, in_node_name, fromdef, flags={}) {
    let def = {}; for (k in fromdef) {def[k] = fromdef[k];}
    def.id = id
    def.in_node_name = in_node_name
    def.added = false
    def.flags = flags
    Register.registered_nodes[id] = def
};


Register.construct_node = function(id, in_node_name, fromdef, flags={}) {
    if (Register.active_nodes[in_node_name] == null) {
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
    if (!flags.skip_register && Register.active_nodes[id] != null) {
        def.title += "ERROR! THIS WILL OVERWRITE " + id
    }

    def = Register.parse_def(id, in_node_name, def);

    if (!flags.skip_register) {
        // Register.registered_nodes[id] = def;
        Register.active_nodes_index.push(def);
    };

    const new_tree_step = Register.active_nodes[in_node_name]._tree_step + 1;

    const fragment = Register.get_fragment_from_def(id, in_node_name, def);

    Register.active_nodes[in_node_name]._list.appendChild(fragment);
    Register.active_nodes[id] = document.getElementById(id);
    Register.active_nodes[id]._list = document.getElementById(id + "_list");
    Register.active_nodes[id]._tree_step = new_tree_step;

    if (flags.is_copy) {
        Register.active_nodes[id].style["border"] = "#ffffff20 4px dashed";
    }
    if (Register.exercise_tags[def.type || "none"] != null) {
        Register.active_nodes[id].style.display = "none";
    }
};


Register.construct_all_nodes = function() {
    for (var id in Register.registered_nodes) {
        if (id == "root") {continue;}
        const def = Register.registered_nodes[id];
        Register.construct_node(def.id, def.in_node_name, def, {});
    }
};


Register.find_tag_errors = function() {
    var elems = document.getElementsByClassName(`tag_link`);
    for (var i=0; i<elems.length; i++) {
        var id = elems[i].getAttribute(`data-tag`)
        if (Register.active_nodes[id] == null) {
            console.log(`[ERROR] no node with name ${id}`)
        }
    }
};


window.onload = function() {
    Register.construct_all_nodes()
    Register.do_all_registered_instances()
    Register.go_to_url_tag()
    Register.find_tag_errors()
};


Register.exercise_visibility = {
    fem : false,
    masc : false,
    gen : false,
};


Register.show_nodes = function(type, bool) {
    for (var k in Register.active_nodes) {
        const n = Register.active_nodes[k];
        const def = Register.registered_nodes[k];
        if (def && def.type == type) {
            n.style.display = (!bool && "none") || "flex";
        }
    }
};


Register.show_exercise_fem = function() {
    Register.exercise_visibility.fem = !Register.exercise_visibility.fem;
    Register.show_nodes("exf", Register.exercise_visibility.fem);
    Register.button_show_exercise_fem.style["background-color"] = ((Register.exercise_visibility.fem && "#c37") || "");
};
Register.show_exercise_masc = function() {
    Register.exercise_visibility.masc = !Register.exercise_visibility.masc;
    Register.show_nodes("exm", Register.exercise_visibility.masc);
    Register.button_show_exercise_masc.style["background-color"] = ((Register.exercise_visibility.masc && "#37c") || "");
};
Register.show_exercise_gen = function() {
    Register.exercise_visibility.gen = !Register.exercise_visibility.gen;
    Register.show_nodes("exg", Register.exercise_visibility.gen);
    Register.button_show_exercise_gen.style["background-color"] = ((Register.exercise_visibility.gen && "#0a3") || "");
};


Register.tag_highlight_list = {};

function show_tagged(tag) {
    console.log("looking for " + String(tag));
    for (var k in Register.active_nodes) {
        const n = Register.active_nodes[k];
        if (k == tag) {
            n.style.transition = `1s all ease-in-out`;
            n.style.outline = `16px solid red`;
            n.style.display = `flex`;
            Register.tag_highlight_list[k] = 10;
            Zoom.go_to_element_id(tag, true)
        } else {
            n.style.transition = `1s all ease-in-out`;
            n.style.outline = `0px solid red`;
        }
    }
};


Globalstep.register_globalstep(function(dt) {
    for (k in Register.tag_highlight_list) {
        if (Register.tag_highlight_list[k] > 0) {
            Register.tag_highlight_list[k] -= dt;
        } else if (Register.tag_highlight_list[k] != -100) {
            Register.tag_highlight_list[k] = -100;
            const n = Register.active_nodes[k];
            n.style.transition = `1s all ease-in-out`;
            n.style.outline = `0px solid red`;
            // to make invisible again
            // let def = Register.registered_nodes[k]
            // if (Register.exercise_tags[def.type] != null && !Register.exercise_visibility[def.type]) {
            //     n.style.display = `none`;
            // }
        }
    }
});


/** @type {HTMLButtonElement} **/
Register.button_show_exercise_masc = document.querySelector("#button_show_exercise_masc");
Register.button_show_exercise_masc.addEventListener("click", Register.show_exercise_masc);
/** @type {HTMLButtonElement} **/
Register.button_show_exercise_fem = document.querySelector("#button_show_exercise_fem");
Register.button_show_exercise_fem.addEventListener("click", Register.show_exercise_fem);
/** @type {HTMLButtonElement} **/
Register.button_show_exercise_gen = document.querySelector("#button_show_exercise_gen");
Register.button_show_exercise_gen.addEventListener("click", Register.show_exercise_gen);


