// add new modal start
let modal = document.querySelector(".table__modal");
let modalForm = document.querySelector(".table__modal--form");
let modalOpen = document.querySelector(".create__table--btn");
let modalClose = document.querySelector(".modal__close");

modalOpen.addEventListener("click", function () {
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
  modal.style.overflowY = "scroll";
});

modalClose.addEventListener("click", function () {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
});

document.addEventListener("click", function (e) {
  if (e.target == modal) {
    if (!modalForm.contains(e.target)) {
      modal.style.opacity = 0;
      modal.style.visibility = "hidden";
    }
  }
});

// add new moal end

// update modal start
let updateModal = document.querySelector(".update__modal");
let updateModalForm = document.querySelector(".table_update--modal--form");
let updateModalOpen = document.querySelector(".update");
let updateModalClose = document.querySelector(".update__close");

updateModalOpen.addEventListener("click", function () {
  updateModal.style.opacity = 1;
  updateModal.style.visibility = "visible";
  updateModal.style.overflowY = "scroll";
});

updateModalClose.addEventListener("click", function () {
  updateModal.style.opacity = 0;
  updateModal.style.visibility = "hidden";
});

document.addEventListener("click", function (e) {
  if (e.target == updateModal) {
    if (!updateModalForm.contains(e.target)) {
      updateModal.style.opacity = 0;
      updateModal.style.visibility = "hidden";
    }
  }
});

// update modal end

//datepicker
$(".datepicker").datepicker({
  format: "mm/dd/yyyy",
  startDate: "-3d",
});
