const burgerMenuBtn = document.querySelector(".burgerButton");
const burgerMenuWrapper = document.querySelector(".burgerMenuWrapper");
const burgerNavigationList = burgerMenuWrapper.querySelectorAll(
  ".navigationList__item"
);
const burgerMenu = document.querySelector(".burgerMenu");
const burgerMenuSignInButton = burgerMenuWrapper.querySelector(
  ".burgerMenu__signInButton"
);

document.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY;
  burgerMenuWrapper.style.top = `${currentScrollPosition}px`;
});

function toggleBurgerMenu() {
  burgerMenuBtn.classList.toggle("burgerButton_active");
  burgerMenuWrapper.classList.toggle("burgerMenuWrapper_active");
  burgerMenu.classList.toggle("burgerMenu_active");

  if (burgerMenuWrapper.classList.contains("burgerMenuWrapper_active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
}

burgerMenuBtn.addEventListener("click", (e) => {
  toggleBurgerMenu(e);
});

burgerMenuSignInButton.addEventListener("click", (e) => {
  toggleBurgerMenu(e);
});

burgerMenuWrapper.addEventListener("click", (e) => {
  if (e.target === burgerMenuWrapper) {
    toggleBurgerMenu(e);
  }
});

burgerNavigationList.forEach((item) => {
  item.addEventListener("click", () => {
    toggleBurgerMenu();
  });
});
