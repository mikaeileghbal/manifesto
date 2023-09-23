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

const menuTimeline = gsap.timeline({});
const menuAnimation = menuTimeline.to(".nav-menu", { opacity: 1, duration: 2 });
const menuItemTimeline = gsap.timeline({});
const menuItemAnimation = menuItemTimeline.to(".nav-item .menu-first", {
  y: 0,
  duration: 1,
  stagger: 0.2,
});
menuAnimation.pause();
menuItemAnimation.pause();

menu.addEventListener("click", animateMenuOverlay);
let showMenu = false;
function animateMenuOverlay() {
  console.log("menu clicked");
  if (!showMenu) {
    menuAnimation.play();
    menuItemAnimation.play();
    showMenu = true;
  } else {
    menuAnimation.reverse();
    menuItemAnimation.reverse();
    showMenu = false;
  }
}
