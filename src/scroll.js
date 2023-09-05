/*
Copyright (c) 2023 Sumi, SumianVoice <sumianvoice.com> under the MIT license
*/

const slider = document.getElementById("parent1");
const rootnode = document.getElementById("root");

let mouseDown = false;

const drag = {
    start  : { x:0, y:0 },
    scroll : { x:2000+500, y:2000-100 },
};

let startDragging = function (e) {
    mouseDown = true;
    drag.start.x = e.pageX - slider.offsetLeft;
    drag.start.y = e.pageY - slider.offsetTop;
    drag.scroll.x = slider.scrollLeft;
    drag.scroll.y = slider.scrollTop;
};

let stopDragging = function (event) {
    mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }

    const x = e.pageX - slider.offsetLeft;
    const scrollx = x - drag.start.x;
    slider.scrollLeft = drag.scroll.x - scrollx;

    const y = e.pageY - slider.offsetTop;
    const scrolly = y - drag.start.y;
    slider.scrollTop = drag.scroll.y - scrolly;
});

slider.scrollLeft = drag.scroll.x;
slider.scrollTop = drag.scroll.y;
// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


let zoom = 1
function do_zoom(e) {
    if ((e.wheelDeltaY > 0) && zoom < 10) {
        zoom *= 1.1;
    } else if ((e.wheelDeltaY < 0) && zoom > 0) {
        zoom *= 0.9;
    }
    // slider.style.transform = "scale(" + String(zoom) + "), translate()";
    // slider.style.width = String((1/zoom)*100) + "vw"
}

slider.addEventListener('wheel', do_zoom, false);

