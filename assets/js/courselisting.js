$(document).ready(function () {
  $(".fav__courese").select2();
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
let modalClose = document.querySelector(".modal__area--overlay");
let modalCloseBtn = document.querySelector(".modal__close--btn");

courseImage.addEventListener("click", function () {
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
