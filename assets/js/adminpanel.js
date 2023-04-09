//dropdown button start
var dropAdminBtn = document.querySelectorAll(".dropdown__admin");
let dropAdminContent = document.querySelector(".adminpanel__dropdown");

dropAdminBtn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    // Select the clicked button's dropdown content
    let dropdownContent = event.currentTarget.nextElementSibling;
    // Check if the dropdown content is already visible or not
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
});

document.addEventListener("click", function (event) {
  dropAdminBtn.forEach(function (btn) {
    let dropdownContent = btn.nextElementSibling;
    if (
      !btn.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.style.display = "none";
    }
  });
});
//dropdown end

// modal start
let modal = document.querySelector(".create__modal");
let modalForm = document.querySelector(".modal__form");
let modalOpen = document.querySelector(".create__new--report");
let html = document.querySelector("html");
let modalClose = document.querySelector(".modal__close");
modalOpen.addEventListener("click", function () {
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
  modal.style.overflowY = "scroll";
  html.style.overflow = "hidden";
});

modalClose.addEventListener("click", function () {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
  html.style.overflow = "scroll";
});

document.addEventListener("click", function (e) {
  if (e.target == modal) {
    if (!modalForm.contains(e.target)) {
      modal.style.opacity = 0;
      modal.style.visibility = "hidden";
      html.style.overflow = "scroll";
    }
  }
});

// modal end
