$(document).ready(function () {
  $(".job__role").select2();
  // $(".job__role").select2();
});

//dropdown button start
var dropdownBtn = document.querySelector(".dropdown__others--filter");
let dropContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", function () {
  var dropdownContent = this.nextElementSibling;

  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

document.addEventListener("click", function (event) {
  if (
    !dropdownBtn.contains(event.target) &&
    !dropContent.contains(event.target)
  ) {
    dropContent.style.display = "none";
  }
});
// dropdown button end

// modal area
let courseImage = document.querySelector(".open__modal");
let modalArea = document.querySelector(".listing__modal");
let modalCloseBtn = document.querySelector(".modal__close--btn");

courseImage.addEventListener("click", function () {
  modalArea.style.opacity = "1";
  modalArea.style.visibility = "visible";
});

modalCloseBtn.addEventListener("click", function () {
  modalArea.style.opacity = "0";
  modalArea.style.visibility = "hidden";
});
//modal area

//warning Modal start
let warningModal = document.querySelector(".warning__modal");
let warningModalOpen = document.getElementById("warning__open");
let warningCloseBtn = document.querySelector(".warning__close--btn");

warningModalOpen.addEventListener("click", function () {
  warningModal.style.opacity = "1";
  warningModal.style.visibility = "visible";
});

warningCloseBtn.addEventListener("click", function () {
  warningModal.style.opacity = "0";
  warningModal.style.visibility = "hidden";
});

//warning Modal end

//Success Modal start
let successModal = document.querySelector(".success__modal");
let successModalOpen = document.getElementById("success__open");
let successCloseBtn = document.querySelector(".success__close--btn");

successModalOpen.addEventListener("click", function () {
  successModal.style.opacity = "1";
  successModal.style.visibility = "visible";
});

successCloseBtn.addEventListener("click", function () {
  successModal.style.opacity = "0";
  successModal.style.visibility = "hidden";
});
//warning Modal end

//alert Modal start
let alertModal = document.querySelector(".alert__modal");
let alertModalOpen = document.getElementById("alert__open");
let alertCloseBtn = document.querySelector(".alert__close--btn");

alertModalOpen.addEventListener("click", function () {
  alertModal.style.opacity = "1";
  alertModal.style.visibility = "visible";
});

alertCloseBtn.addEventListener("click", function () {
  alertModal.style.opacity = "0";
  alertModal.style.visibility = "hidden";
});
//warning Modal end

// toastify area

function toast(
  gravity = "bottom",
  position = "left",
  text = "This is a default toast",
  duration = 3000
) {
  var toastOptions = {
    text: text,
    duration: duration,
    newWindow: true,
    close: true,
    gravity: gravity, // `top` or `bottom`
    position: position, // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(98deg, #11586d 2%, #003e59 0.38%)",
    },
  };

  var dynamicToast = Toastify(toastOptions);
  dynamicToast.showToast();
}
