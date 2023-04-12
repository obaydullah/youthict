$(document).ready(function () {
  $(".course__header--popup").venobox({
    bgcolor: "#000",
    border: "0",
    autoplay: true,
    showCloseButton: true,
    overlayClose: true,
    spinner: "wave",
  });
});

// modal area
let discountBtn = document.querySelector(".discount__btn");
let modalArea = document.querySelector(".discount__modal");
let modalClose = document.querySelector(".modal__area--overlay");
let modalCloseBtn = document.querySelector(".modal__close--btn");

discountBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modalArea.style.opacity = "1";
  modalArea.style.visibility = "visible";
});

modalClose.addEventListener("click", function () {
  modalArea.style.opacity = "0";
  modalArea.style.visibility = "hidden";
});

modalCloseBtn.addEventListener("click", function () {
  modalArea.style.opacity = "0";
  modalArea.style.visibility = "hidden";
});
//modal area

// modal input style with js
const inputs = document.querySelectorAll(".modal-input");
const labels = document.querySelectorAll(".input-label");

inputs.forEach((input, index) => {
  input.addEventListener("focus", () => {
    labels[index].classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      labels[index].classList.remove("active");
    }
  });
});
