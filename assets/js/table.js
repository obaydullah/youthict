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
console.log(filterModal);
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

// student add modal start
let studentModal = document.querySelector(".student__modal");
let studentModalOpen = document.querySelector(".create__student--btn");
let studentModalClose = document.querySelector(".student__close");

studentModalOpen.addEventListener("click", function () {
  studentModal.style.opacity = 1;
  studentModal.style.visibility = "visible";
  studentModal.style.overflowY = "scroll";
});

studentModalClose.addEventListener("click", function () {
  studentModal.style.opacity = 0;
  studentModal.style.visibility = "hidden";
});
// student add modal end

//datepicker

$(document).ready(function () {
  $(".datepicker").datepicker({
    format: "mm/dd/yyyy",
    startDate: "-3d",
  });

  $(".select__course").select2({
    dropdownParent: $(".table_filter--modal--form"),
  });

  $(".select__course--student").select2({
    dropdownParent: $(".select__element"),
  });
  $(".select__thana").select2({
    dropdownParent: $(".select__element"),
  });
});
