const draggable = document.querySelectorAll(".draggable");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

let currentDraggable = null;

draggable.forEach((item) => {
  item.addEventListener("mousedown", mouseDown);
});
window.addEventListener("mouseup", mouseUp, false);

function mouseDown(e) {
  e.preventDefault();

  currentDraggable = e.target;

  posX = e.clientX - currentDraggable.offsetLeft;
  posY = e.clientY - currentDraggable.offsetTop;

  window.addEventListener("mousemove", moveElement, false);
}

function mouseUp() {
  window.removeEventListener("mousemove", moveElement, false);
}

function moveElement(e) {
  mouseX = e.clientX - posX;
  mouseY = e.clientY - posY;
  draggable.style.left = mouseX + "px";
  draggable.style.top = mouseY + "px";
  draggable.style.position = "absolute";
}

function moveElement(e) {
  if (currentDraggable) {
    mouseX = e.clientX - posX;
    mouseY = e.clientY - posY;
    currentDraggable.style.left = mouseX + "px";
    currentDraggable.style.top = mouseY + "px";
    currentDraggable.style.position = "absolute";
  }
}
