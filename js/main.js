

const diagramBlockList = document.querySelectorAll(".diagramBlock");
const diagramWrapper = document.querySelector(".diagramWrapper");

function addActiveClass() {
  diagramBlockList.forEach((item) => {
    item.classList.remove("diagramBlock_active");
  });
  if (window.innerWidth > 992) {
    diagramBlockList[3].classList.add("diagramBlock_active");
  } else {
    diagramBlockList[4].classList.add("diagramBlock_active");
  }
}

addActiveClass();

diagramBlockList.forEach((diagram) => {
  diagram.addEventListener("mouseover", function () {
    diagramBlockList.forEach((item) => {
      item.classList.remove("diagramBlock_active");
    });
    diagram.classList.add("diagramBlock_active");
  });
});

diagramWrapper.addEventListener("mouseout", function () {
  addActiveClass();
});

window.addEventListener("resize", () => {
  addActiveClass();
});

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

let select = function () {
  const selectHeader = document.querySelector(".select__header");
  const selectItem = document.querySelectorAll(".select__item");

  selectHeader.addEventListener("click", selectToggle);

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    selectItem.forEach((item) => {
      item.classList.remove("select__item_selected");
    });

    this.classList.add("select__item_selected");
    let text = this.innerText;
    select = this.closest(".select");
    currentText = select.querySelector(".select__current");
    currentText.value = text;
    select.classList.add("select_selected");
  }
};

select();

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePhoneNumber = (phoneNumber) => {
  return String(phoneNumber)
    .toLowerCase()
    .match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
};

const registrationForm = document.querySelector(".registrationForm");
const formInputs = registrationForm.querySelectorAll("input");

formInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    const attributeValue = input.getAttribute("name");
    switch (attributeValue) {
      case "name":
        if (this.value.length < 1) {
          this.classList.add("invalid");
        } else {
          this.classList.add("filled");
        }
        break;
      case "email":
        if (!validateEmail(this.value)) {
          this.classList.add("invalid");
        } else {
          this.classList.add("filled");
        }
        break;
      case "phoneNumber":
        if (!validatePhoneNumber(this.value)) {
          this.classList.add("invalid");
        } else {
          this.classList.add("filled");
        }
        break;
      // default:
      //   break;
    }
  });
});

formInputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.classList.remove("invalid");
    this.classList.remove("filled");
  });
});

const pricingSlider = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  centeredSlides: true,
  initialSlide: 1,

  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1.45,
      allowTouchMove: true,
    },
    576: {
      slidesPerView: 2,
      loop: false,
      allowTouchMove: true,
    },
    767: { slidesPerView: 2.3, spaceBetween: 30, allowTouchMove: true },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
    1430: {
      spaceBetween: 80,
      slidesPerView: 3,
      allowTouchMove: false,
    },
  },
});

const pricingSlideList = document.querySelectorAll(".pricing__slide");
pricingSlideList.forEach((slide) => {
  const button = slide.querySelector(".button");
  slide.addEventListener("mouseover", function () {
    if (button.classList.contains("transparentButton")) {
      button.classList.remove("transparentButton");
      button.classList.add("redButton");
    }
  });
  slide.addEventListener("mouseout", function () {
    if (button.classList.contains("redButton")) {
      button.classList.remove("redButton");
      button.classList.add("transparentButton");
    }
  });
});
