const mouseTail = document.querySelector(".mouse-tail");
console.log(mouseTail);

document.addEventListener("mousemove", moveMouseTail);

function moveMouseTail(e) {
  console.log("mouse move", e);

  mouseTail.style.left = `${e.clientX}px`;
  mouseTail.style.top = `${e.clientY}px`;
}
