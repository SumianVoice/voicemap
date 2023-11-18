/*
Portions Copyright (c) 2023 "aeggy" nelinearni under the MIT license
Portions Copyright (c) 2023 Sumi, SumianVoice <sumianvoice.com> under the MIT license
*/

// const parent = document.getElementById("parent1");
const parent = document.getElementById("parent1");
const about = document.querySelector("#About");

// x = slider.scrollLeft
// y = slider.scrollTop

window_offset = { x: 20000 + 400, y: 20000 + 400 }

const drag = {
    mouseDown: false,
    start: { x: 0, y: 0 },
    scroll: { x: window_offset.x, y: window_offset.y }, /* half of .parent, plus the 40,000 above */
    zoomedPercentage: 0,
    last_tick : Date.now(),
    zoom_target : 1,
    zoom_now : 1,
};

let startDragging = function (e) {
    drag.mouseDown = true;
    drag.start.x = e.pageX - parent.offsetLeft;
    drag.start.y = e.pageY - parent.offsetTop;
    drag.scroll.x = parent.scrollLeft;
    drag.scroll.y = parent.scrollTop;
};

let stopDragging = function (event) {
  drag.mouseDown = false;
};
document.addEventListener("pointermove", (e) => {
    e.preventDefault();
    if (!drag.mouseDown || e.buttons == 0) {
        return;
    }

    const x = e.pageX - parent.offsetLeft;
    const scrollX = (x - drag.start.x) / zoom();

    const y = e.pageY - parent.offsetTop;
    const scrollY = (y - drag.start.y) / zoom();

    scroll_to_position(drag.scroll.x - scrollX, drag.scroll.y - scrollY);
});

function scroll_to_position(x, y) {
    parent.scrollLeft = x;
    parent.scrollTop = y;
}


scroll_to_position(drag.scroll.x, drag.scroll.y);

// Add the event listeners
document.addEventListener("pointerdown", startDragging, false);
document.addEventListener("pointerup", stopDragging, false);
document.addEventListener("pointerleave", stopDragging, false);

// Pinch zoom using the 'pinch' event
let initialZoom = 1.0;
let initialDistance = 0;

document.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
        drag.mouseDown = false;
        e.preventDefault();
        e.stopPropagation();

        initialDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
        );
        initialZoom = zoom();
    }
});

document.addEventListener("touchmove", (e) => {
  if (e.touches.length === 2) {
    e.preventDefault();
    e.stopPropagation();

    const currentDistance = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
    );
    const zoomFactor = currentDistance / initialDistance;
    zoom(initialZoom * zoomFactor);
  }
});

document.addEventListener("wheel", (e) => {
    e.preventDefault();
    e.stopPropagation();

    zoomRelative(-e.deltaY / 1000);
});

document.addEventListener("dblclick", (e) => {
    // disabled for sanity reasons
    // zoomRelative(0.3);
});

// zoom
/** @type {HTMLButtonElement} **/
const zoom_in = document.querySelector("#zoom_in");
/** @type {HTMLButtonElement} **/
const zoom_out = document.querySelector("#zoom_out");
/** @type {HTMLButtonElement} **/
const zoom_equal = document.querySelector("#zoom_equal");

const zoomMinimum = 0.09;
const zoomDefault = 0.5;
function zoom(x = null) {
    const rootStyle = getComputedStyle(document.documentElement);

    if (x != null) {
        const canZoom = x >= zoomMinimum && x <= 4;
        // console.log(canZoom, x)
        if (canZoom) {
            document.documentElement.style.setProperty("--zoomx", x);
            document.documentElement.style.setProperty("--zoomy", x);
            // drag.zoom_target = x
        }
    }

    const currentZoom = rootStyle.getPropertyValue("--zoomx");
    disableButtons(currentZoom);

    return parseFloat(currentZoom);
}

function disableButtons(zoomLevel = zoom()) {
    zoom_in.disabled = false; // TODO
    zoom_out.disabled = !(zoomLevel / 2 >= zoomMinimum);
    zoom_equal.disabled = zoomLevel == zoomDefault;
}
disableButtons();

function zoomRelative(x = 0) {
    // console.log(x, zoom())
    if (x == 0) return;
    const z = zoom()
    zoom(z + (x * Math.abs(z)) * 2);
}
zoom_in.addEventListener("click", () => zoom(zoom() * 2));
zoom_out.addEventListener("click", () => zoom(zoom() / 2));
zoom_equal.addEventListener("click", () => zoom(zoomDefault));

zoom(1)

parent.style.transition = "transform 0.2s, filter 0.8s";
parent.style.filter = "opacity(1)";
