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
