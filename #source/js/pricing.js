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
