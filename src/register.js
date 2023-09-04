const parent = document.getElementById("root");
parent.list = parent

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

let instances_to_add = {}
function register_instance(id, in_node_name) {
    if (instances_to_add[id] == null) {
        instances_to_add[id] = []
    }

    instances_to_add[id].push(in_node_name)
}
function do_all_registered_instances() {
    for (var key of Object.keys(instances_to_add)) {
        const v = instances_to_add[key]
        for (let i = 0; i < v.length; i++) {
            const newelement = registered_nodes[key].cloneNode(true)
            registered_nodes[v[i]].list.appendChild(newelement)
        }
    }
}

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

    let code = '<div class="node" id="' + id + '"';
    code += ' style="background-color:' + def.color + '"'
    // title
    code += '><h2 class="title">';
    code += (def.title || "") + '</h2>';
    // desc
    code += '<p class="desc">';
    code += (def.desc || "");
    // tooltip
    // code += '<p class="tooltip">';
    // code += (def.tooltip || "unknown tooltip");

    code = code + '<div class="node_list" id="' + id + "_list" + '"></div></p></div>';

    // const count = registered_nodes[in_node_name].list.childElementCount
    // if (count % 2 == 0 && count >= 2) {
    //     code += "<br>"
    //     console.log("blah")
    // }

    const fragment = html_fragment_from_string(code);
    registered_nodes[in_node_name].list.appendChild(fragment)
    registered_nodes[id] = document.getElementById(id)
    registered_nodes[id].list = document.getElementById(id + "_list")
    // console.log()
    // console.log(registered_nodes[id])
}
window.onload = function() {
    do_all_registered_instances()
}