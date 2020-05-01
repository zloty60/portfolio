import ScrollTop from "./modules/ScrollTop";
import Navbar from "./modules/Navbar";
import MobileMenu from "./modules/MobileMenu";

function startJs() {
  window.addEventListener("DOMContentLoaded", () => {
    new ScrollTop();
    new Navbar();
    new MobileMenu();
  });
}

startJs();
