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

// update modal end

// filter modal start
let filterModal = document.querySelector(".filter__modal");
let filterModalForm = document.querySelector(".table_filter--modal--form");
let filterModalOpen = document.querySelector(".filter__btn");
let filterModalClose = document.querySelector(".filter__close");

filterModalOpen.addEventListener("click", function () {
  filterModal.style.opacity = 1;
  filterModal.style.visibility = "visible";
  filterModal.style.overflowY = "scroll";
});

filterModalClose.addEventListener("click", function () {
  filterModal.style.opacity = 0;
  filterModal.style.visibility = "hidden";
});

// update modal end

//datepicker

$(document).ready(function () {
  $(".datepicker").datepicker({
    format: "mm/dd/yyyy",
    startDate: "-3d",
  });

  $(".select__course").select2();
});
