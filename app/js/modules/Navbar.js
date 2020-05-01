import throttle from "lodash/throttle";

class Navbar {
  constructor() {
    this.scrollBtn = document.querySelector("#navbar-js");
    this.events();
    this.prevScrollpos = window.pageYOffset;
  }

  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.showBtn(), 200)
    );
  }

  showBtn() {
    let currentScrollPos = window.pageYOffset;
    if (window.scrollY > 70) {
      this.scrollBtn.style.top = "-55px";
      if (this.prevScrollpos > currentScrollPos) {
        this.scrollBtn.style.top = "0px";
        this.scrollBtn.classList.add("navbar--fixed");
      } else {
        this.scrollBtn.style.top = "-55px";
      }
    } else {
      this.scrollBtn.style.top = "15px";
      this.scrollBtn.classList.remove("navbar--fixed");
    }
    this.prevScrollpos = currentScrollPos;
  }
}

export default Navbar;
