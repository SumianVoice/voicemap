/*
Portions Copyright (c) 2023 "aeggy" nelinearni under the MIT license
Portions Copyright (c) 2023 Sumi, SumianVoice <sumianvoice.com> <https://github.com/SumianVoice/voicemap>
    offered under MIT License <https://opensource.org/license/MIT/>
*/


var Zoom = {
    mouseDown : false,
    start : { x: 0, y: 0 },
    zoom_target : 1,
    zoom_now : 1,
    scrollTargetLeft : 0,
    scrollTargetTop : 0,
};

Zoom.Rootnode = document.getElementById("parent1");

Zoom.window_offset = { x: 20000 + 0, y: 20000 + 0 };
Zoom.scroll = { x: Zoom.window_offset.x, y: Zoom.window_offset.y };

Zoom.startDragging = function (e) {
    Zoom.mouseDown = true;
    Zoom.start.x = e.pageX - Zoom.Rootnode.offsetLeft;
    Zoom.start.y = e.pageY - Zoom.Rootnode.offsetTop;
    Zoom.scroll.x = Zoom.Rootnode.scrollLeft;
    Zoom.scroll.y = Zoom.Rootnode.scrollTop;
};

Zoom.stopDragging = function (event) {
  Zoom.mouseDown = false;
};

Zoom.get_position_of_element = function(obj) {
    if (!obj) {return [0,0];}
	var curleft = curtop = 0;
	if (obj.offsetParent) {
        do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
        return [curleft,curtop];
    }
};

Zoom.go_to_element_id = function(id, smooth=false) {
    const el = document.getElementById(id)
    if (el.style.display == "none") {
        el.style.display = "flex";
    }
    let pos = Zoom.get_position_of_element(el);
    pos[0] += (-window.innerWidth/2) - Zoom.window_offset.x;
    pos[1] += (-window.innerHeight/2) - Zoom.window_offset.y;

    // literally just magic numbers, no touch
    const s = el.getBoundingClientRect();
    pos[0] += (s.right - s.left) * 0.5 / Zoom.zoom_now
    pos[0] += -1000
    pos[1] += -1000 + 200

    if (smooth) {
        Zoom.smooth_scroll_to_position(pos[0], pos[1]);
    } else {
        Zoom.scroll_to_position(pos[0], pos[1]);
    }
};

document.addEventListener("pointermove", (e) => {
    e.preventDefault();
    if (!Zoom.mouseDown || e.buttons == 0) {
        return;
    }

    const x = e.pageX - Zoom.Rootnode.offsetLeft;
    const scrollX = (x - Zoom.start.x) / Zoom.zoom();

    const y = e.pageY - Zoom.Rootnode.offsetTop;
    const scrollY = (y - Zoom.start.y) / Zoom.zoom();

    Zoom.scroll_to_position(Zoom.scroll.x - scrollX, Zoom.scroll.y - scrollY);
});

Zoom.scroll_to_position = function(x, y, override=true) {
    if (override) {
        Zoom.Rootnode.scrollTargetLeft = x;
        Zoom.Rootnode.scrollTargetTop = y;
    }
    Zoom.Rootnode.scrollLeft = x;
    Zoom.Rootnode.scrollTop = y;
};

Zoom.smooth_scroll_to_position = function(x, y) {
    Zoom.Rootnode.scrollTargetLeft = x;
    Zoom.Rootnode.scrollTargetTop = y;
};

Zoom.lerp = function(start, end, ratio) {
    return ((end - start) * ratio + start);
};

Globalstep.register_globalstep(function(dt) {
    Zoom.Rootnode.scrollLeft = Zoom.lerp(Zoom.Rootnode.scrollLeft, Zoom.Rootnode.scrollTargetLeft, 0.1);
    Zoom.Rootnode.scrollTop = Zoom.lerp(Zoom.Rootnode.scrollTop, Zoom.Rootnode.scrollTargetTop, 0.1);
    Zoom.scroll_to_position(
        Zoom.Rootnode.scrollLeft,
        Zoom.Rootnode.scrollTop, false
        );
});


Zoom.scroll_to_position(Zoom.scroll.x + 400, Zoom.scroll.y + 400);

// Add the event listeners
document.addEventListener("pointerdown", Zoom.startDragging, false);
document.addEventListener("pointerup", Zoom.stopDragging, false);
document.addEventListener("pointerleave", Zoom.stopDragging, false);

// Pinch zoom using the 'pinch' event
Zoom.initial_zoom = 1.0;
Zoom.initial_distance = 0;

document.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
        Zoom.mouseDown = false;
        e.preventDefault();
        e.stopPropagation();

        Zoom.initial_distance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY,
        );
        Zoom.initial_zoom = Zoom.zoom();
    }
});

document.addEventListener("touchmove", (e) => {
  if (e.touches.length === 2) {
    e.preventDefault();
    e.stopPropagation();

    const currentDistance = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY,
    );
    const zoomFactor = currentDistance / Zoom.initial_distance;
    Zoom.zoom(Zoom.initial_zoom * zoomFactor);
  }
});

Zoom.Rootnode.addEventListener("wheel", (e) => {
    e.preventDefault();
    e.stopPropagation();

    Zoom.zoom_relative(-e.deltaY / 1000);
});

document.addEventListener("dblclick", (e) => {
    // disabled for sanity reasons
    // Zoom.zoom_relative(0.3);
});

// zoom
/** @type {HTMLButtonElement} **/
Zoom.zoom_in = document.querySelector("#zoom_in");
/** @type {HTMLButtonElement} **/
Zoom.zoom_out = document.querySelector("#zoom_out");
/** @type {HTMLButtonElement} **/
Zoom.zoom_equal = document.querySelector("#zoom_equal");

Zoom.zoom_minimum = 0.07;
Zoom.zoom_default = 0.5;
Zoom.zoom = function(x = null) {
    const rootStyle = getComputedStyle(document.documentElement);

    if (x != null) {
        const canZoom = x >= Zoom.zoom_minimum && x <= 4;
        if (canZoom) {
            document.documentElement.style.setProperty("--zoomx", x);
            document.documentElement.style.setProperty("--zoomy", x);
            Zoom.zoom_now = x
        }
    }

    const currentZoom = rootStyle.getPropertyValue("--zoomx");
    Zoom.disable_buttons(currentZoom);

    return parseFloat(currentZoom);
}

Zoom.disable_buttons = function(zoomLevel = Zoom.zoom()) {
    Zoom.zoom_in.disabled = false; // TODO
    Zoom.zoom_out.disabled = !(zoomLevel / 2 >= Zoom.zoom_minimum);
    Zoom.zoom_equal.disabled = zoomLevel == Zoom.zoom_default;
}
Zoom.disable_buttons();

Zoom.zoom_relative = function(x = 0) {
    if (x == 0) return;
    const z = Zoom.zoom();
    Zoom.zoom(z + (x * Math.abs(z)) * 2);
}
Zoom.zoom_in.addEventListener("click", () => Zoom.zoom(Zoom.zoom() * 2));
Zoom.zoom_out.addEventListener("click", () => Zoom.zoom(Zoom.zoom() / 2));
Zoom.zoom_equal.addEventListener("click", () => Zoom.zoom(Zoom.zoom_default));

Zoom.zoom(1)

Zoom.Rootnode.style.transition = "transform 0.2s, filter 0.8s";
Zoom.Rootnode.style.filter = "opacity(1)";
