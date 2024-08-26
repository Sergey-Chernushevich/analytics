const preloader = document.querySelector(".preloader");
const header = document.querySelector(".header");
const headerLogo = header.querySelector(".logo");
const headerNavigation = header.querySelector(".navigation");
const headerSignInButton = header.querySelector(".header__signInButton");
const headerBurgerButton = header.querySelector(".burgerButton");
const blockInfo = document.querySelector(".blockInfo");
const blockInfo__butoon = document.querySelector(".blockInfo__butoon");

const offset = window.innerHeight;
document.body.style.overflow = "hidden";

function showElement(element) {
  element.classList.add("show");
}

window.onload = function () {
  preloader.style.display = "none";
  document.body.style.overflow = "scroll";

  showElement(headerLogo);
  showElement(headerNavigation);
  showElement(headerSignInButton);
  showElement(headerBurgerButton);
  showElement(diagramWrapper);
  showElement(blockInfo);
  setTimeout(() => {
    showElement(blockInfo__butoon);
  }, 2000);
};

function handleScroll() {
  let elements = document.querySelectorAll(".anim");

  for (let i = 0; i < elements.length; i++) {
    let position = elements[i].getBoundingClientRect().top;
    if (position - offset < 0) {
      elements[i].classList.add("show");
    } else {
      elements[i].classList.remove("show");
    }
  }
}
window.addEventListener("scroll", handleScroll);
addEventListener("resize", handleScroll);
