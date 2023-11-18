
var Globalstep = {
    lastDateNow : Date.now(),
}

Globalstep.myInterval = setInterval(Globalstep.do_all_globalsteps, 0);
Globalstep.registered_globalsteps = [];

Globalstep.register_globalstep = function() {
    var now = Date.now();
    var dt = (now - Globalstep.lastDateNow) / 1000;
    Globalstep.lastDateNow = now;
    for (i=0; i<Globalstep.registered_globalsteps.length; i++) {
        Globalstep.registered_globalsteps[i](dt);
    }
}

Globalstep.register_globalstep = function(func) {
    Globalstep.registered_globalsteps.push(func);
}


