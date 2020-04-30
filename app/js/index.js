import ScrollTop from "./modules/ScrollTop";

const openMenuBtn = document.querySelector("#open-menu-btn-js");
const closeMenuBtn = document.querySelector("#close-menu-btn-js");
const menuContent = document.querySelector("#mobile-menu-js");
const menuMobileLinks = document.querySelectorAll(".mobile-menu__item");

function menuOpen() {
  menuContent.classList.add("mobile-menu--on");
}

function menuClose() {
  menuContent.classList.remove("mobile-menu--on");
}

openMenuBtn.addEventListener("click", menuOpen);
closeMenuBtn.addEventListener("click", menuClose);

menuMobileLinks.forEach((el) => el.addEventListener("click", menuClose));

new ScrollTop();
