const mouseTail = document.querySelector(".mouse-tail");
console.log(mouseTail);

document.addEventListener("mousemove", moveMouseTail);

function moveMouseTail(e) {
  console.log("mouse move", e);

  mouseTail.style.left = `${e.clientX}px`;
  mouseTail.style.top = `${e.clientY}px`;
}

const menu = document.querySelector(".menu");

menu.addEventListener("mouseenter", menuMouseEnter);
menu.addEventListener("mouseleave", menuMouseLeave);

function menuMouseEnter(e) {
  console.log("entered");
  mouseTail.classList.add("menu");
}

function menuMouseLeave(e) {
  console.log("left");
  mouseTail.classList.remove("menu");
}
