
var GlobalStep = {
    lastDateNow : Date.now(),
    myInterval : setInterval(tick, 0),
}

function tick() {
    var now = Date.now();
    var dt = (now - GlobalStep.lastDateNow) / 1000;
    GlobalStep.lastDateNow = now;
    for (i=0; i<registered_globalsteps.length; i++) {
        registered_globalsteps[i](dt)
    }
}

let registered_globalsteps = []
function register_globalstep(func) {
    registered_globalsteps.push(func)
}


