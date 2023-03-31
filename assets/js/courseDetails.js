let courseImage = document.querySelector(".course__modal");
let modalArea = document.querySelector(".modal__area");
let modalClose = document.querySelector(".modal__area--overlay");

courseImage.addEventListener("click", function () {
  modalArea.style.opacity = "1";
  modalArea.style.visibility = "visible";
});

modalClose.addEventListener("click", function () {
  modalArea.style.opacity = "0";
  modalArea.style.visibility = "hidden";
});

$(document).ready(function () {
  $(".student__testemonial--slider").slick({
    centerMode: !1,
    autoplay: !1,
    focusOnSelect: !0,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: !1,
    arrows: !0,
    prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
    nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',
    responsive: [
      { breakpoint: 992, settings: { arrows: !0, slidesToShow: 2 } },
      { breakpoint: 767, settings: { arrows: !0, slidesToShow: 1 } },
      { breakpoint: 576, settings: { arrows: !0, slidesToShow: 1 } },
    ],
  });
});
