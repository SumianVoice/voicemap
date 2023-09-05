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
            register_node(id + String(i), in_node_name, def)
        }
    }
}

const scale_factor_per_tree_step = 0.8
function register_node(id, in_node_name, def) {
    if (registered_nodes[in_node_name] == null) {
        console.log("CANNOT add node");
        console.log(in_node_name);
        console.log(def);
        return;
    }

    def.desc = def.desc.replaceAll("\n", "<br>")
    def.title = def.title.replaceAll("\n", "<br>")
    def.tooltip = def.tooltip.replaceAll("\n", "<br>")
    def.desc = def.desc.replaceAll("-->", '<b class="hlight">--></b>')

    // if this ID already exists, show an error
    if (registered_nodes[id] != null) {
        def.title += "ERROR! THIS WILL OVERWRITE " + id
    }

    if (def.desc == "") {
        def.desc = `<b class="hlight">[under construction]</b>`
    }
    def.desc = def.desc.replaceAll("[wip]", '<br><br><b class="hlight">[under construction]</b>')

    registered_node_definitions[id] = def

    const new_tree_step = registered_nodes[in_node_name]._tree_step + 1
    const new_scale_factor = Math.round(1 / (new_tree_step**1.2) * 20 * 1000) / 1000

    // div
    let code = '<div class="node" id="' + id + '"';
    code += ' style="background-color:' + def.color + ";" +
    "padding:" + String(new_scale_factor * 10) + "px;" +
    "margin:" + String(new_scale_factor * 6) + "px;" +
    '\">'
    // title
    code += '<h2 class="title"';
    code += ' style="font-size:' + String(new_scale_factor) + "rem;"
    code += 'height:' + String(new_scale_factor*1.2) + "rem;"
    code += "\"" + ">"
    code += (def.title || "") + '</h2>';
    // desc
    code += '<p class="desc"';
    code += ' style=\"font-size:' + String(new_scale_factor * 0.5) + "rem;" +
    "width:" + String(new_scale_factor * 250) + "px;" +
    "\""
    code += ">"
    code += (def.desc || "");
    // tooltip
    // code += '<p class="tooltip">';
    // code += (def.tooltip || "unknown tooltip");

    code = code + '<div class="node_list" id="' + id + "_list" + '"></div></p></div>';

    // const count = registered_nodes[in_node_name]._list.childElementCount
    // if (count % 2 == 0 && count >= 2) {
    //     code += "<br>"
    //     console.log("blah")
    // }

    const fragment = html_fragment_from_string(code);
    registered_nodes[in_node_name]._list.appendChild(fragment)
    // registered_nodes[in_node_name].style.margin = String(new_scale_factor * 20) + "px"
    registered_nodes[id] = document.getElementById(id)
    registered_nodes[id]._list = document.getElementById(id + "_list")
    registered_nodes[id]._tree_step = new_tree_step
    // console.log()
    // console.log(registered_nodes[id])
}
window.onload = function() {
    do_all_registered_instances()
}
