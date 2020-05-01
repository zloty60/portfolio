class MobileMenu {
  constructor() {
    this.openMenuBtn = document.querySelector("#open-menu-btn-js");
    this.closeMenuBtn = document.querySelector("#close-menu-btn-js");
    this.menuContent = document.querySelector("#mobile-menu-js");

    this.menuMobileLinks = document.querySelectorAll(".mobile-menu__item");
    this.events();
  }

  events() {
    this.openMenuBtn.addEventListener("click", () => this.menuOpen());
    this.closeMenuBtn.addEventListener("click", () => this.menuClose());
    this.menuMobileLinks.forEach((el) =>
      el.addEventListener("click", () => this.menuClose())
    );
  }

  menuOpen() {
    this.menuContent.classList.add("mobile-menu--on");
  }

  menuClose() {
    this.menuContent.classList.remove("mobile-menu--on");
  }
}

export default MobileMenu;
