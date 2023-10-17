/*
Portions Copyright (c) 2023 "aeggy" nelinearni under the MIT license
Portions Copyright (c) 2023 Sumi, SumianVoice <sumianvoice.com> under the MIT license
*/

const parent = document.getElementById("parent1");
const about = document.querySelector("#About");

// x = slider.scrollLeft
// y = slider.scrollTop

const drag = {
  mouseDown: false,
  start: { x: 0, y: 0 },
  scroll: { x: 40000 * 0.55, y: 40000 * 0.8 },
  zoomedPercentage: 0
};

let startDragging = function (e) {
  // console.log(slider.offsetTop, slider.offsetTop)

  drag.mouseDown = true;
  drag.start.x = e.pageX - parent.offsetLeft;
  drag.start.y = e.pageY - parent.offsetTop;
  drag.scroll.x = parent.scrollLeft;
  drag.scroll.y = parent.scrollTop;
};

let stopDragging = function (event) {
  drag.mouseDown = false;
};
parent.addEventListener("pointermove", (e) => {
  e.preventDefault();
  if (!drag.mouseDown) {
    return;
  }

  // console.log(slider.scrollLeft, slider.scrollTop)

  const x = e.pageX - parent.offsetLeft;
  const scrollX = (x - drag.start.x) / zoom();
  parent.scrollLeft = drag.scroll.x - scrollX;

  const y = e.pageY - parent.offsetTop;
  const scrollY = (y - drag.start.y) / zoom();
  parent.scrollTop = drag.scroll.y - scrollY;

  // console.log(slider.scrollLeft, slider.scrollTop)
});

parent.scrollLeft = drag.scroll.x;
parent.scrollTop = drag.scroll.y;
// Add the event listeners
parent.addEventListener("pointerdown", startDragging, false);
parent.addEventListener("pointerup", stopDragging, false);
parent.addEventListener("pointerleave", stopDragging, false);

// Pinch zoom using the 'pinch' event
let initialZoom = 1.0;
let initialDistance = 0;

parent.addEventListener("touchstart", (e) => {
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

parent.addEventListener("touchmove", (e) => {
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

parent.addEventListener("wheel", (e) => {
  e.preventDefault();
  e.stopPropagation();

  zoomRelative(-e.deltaY / 1000);
});

parent.addEventListener("dblclick", (e) => {
  zoomRelative(0.3);
});

// zoom
/** @type {HTMLButtonElement} **/
const zoom_in = document.querySelector("#zoom_in");
/** @type {HTMLButtonElement} **/
const zoom_out = document.querySelector("#zoom_out");
/** @type {HTMLButtonElement} **/
const zoom_equal = document.querySelector("#zoom_equal");

const zoomMinimum = 0.03;
const zoomDefault = 0.5;
function zoom(x = null) {
  const rootStyle = getComputedStyle(document.documentElement);

  if (x != null) {
    const canZoom = x >= zoomMinimum;
    // console.log(canZoom, x)
    if (canZoom) document.documentElement.style.setProperty("--zoom", x);
  }

  const currentZoom = rootStyle.getPropertyValue("--zoom");
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
