// $(document).ready(function () {
//   $(".fav__courese").select2();
// });

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
let modalArea = document.querySelector(".branch__modal");
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
