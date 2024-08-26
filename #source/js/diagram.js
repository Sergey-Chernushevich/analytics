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
