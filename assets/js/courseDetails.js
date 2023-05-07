let modalArea = document.querySelector(".modal__area");
let videoArea = document.querySelector(".video__area");

function modalOpen(event, source) {
  event.preventDefault();
  modalArea.style.opacity = "1";
  modalArea.style.visibility = "visible";
  videoArea.innerHTML = `<iframe src="${source}" title="YouTube video player" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen></iframe>`;
}
function modalClose(event) {
  event.preventDefault();
  modalArea.style.opacity = "0";
  modalArea.style.visibility = "hidden";
  videoArea.innerHTML = ``;
}

// modal two javascript
let videoPreview = document.querySelector(".video__preview");
let modalTwo = document.querySelector(".modal__two");

function modalTwoOpen(event, source) {
  event.preventDefault();
  modalTwo.style.opacity = "1";
  modalTwo.style.visibility = "visible";
  videoPreview.innerHTML = `<iframe width="100%" height="350"
  src="${source}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

function modalTwoClose() {
  modalTwo.style.opacity = "0";
  modalTwo.style.visibility = "hidden";
  videoPreview.innerHTML = "";
}

function videoPlay(source) {
  videoPreview.innerHTML = `<iframe width="100%" height="350"
   src="${source}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

$(document).ready(function () {
  $(".student__testemonial--slider").slick({
    centerMode: !1,
    autoplay: !1,
    focusOnSelect: !0,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: !1,
    arrows: !0,
    prevArrow:
      '<i class="fa fa-angle-left student__testemonial__arrow--left"></i>',
    nextArrow:
      '<i class="fa fa-angle-right student__testemonial__arrow--right"></i>',
    responsive: [
      { breakpoint: 992, settings: { arrows: !0, slidesToShow: 2 } },
      { breakpoint: 767, settings: { arrows: !0, slidesToShow: 1 } },
      { breakpoint: 576, settings: { arrows: !0, slidesToShow: 1 } },
    ],
  });
});
