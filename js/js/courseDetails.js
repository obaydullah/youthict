//course trailer modal start

let videoPlayIcon = document.querySelector(".video-play--icon");
let modalMain = document.querySelector(".modal__area");
let videoArea = document.querySelector(".video--area");
let videoCloseBtn = document.querySelector(".modal__close--icon");
let modalBg = document.querySelector(".modal__area--overlay");

//Play the video when click on the icon
videoPlayIcon.addEventListener("click", function () {
  if (videoPlayIcon.classList.contains("video-play--icon")) {
    modalMain.style.opacity = 1;
    modalMain.style.visibility = "visible";
    videoArea.innerHTML = ` <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/EJi2vjDfCGQ"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>`;
  }
});

//Close the video when click on the dark shadow
videoCloseBtn.addEventListener("click", function () {
  modalMain.style.opacity = 0;
  modalMain.style.visibility = "hidden";
  videoArea.innerHTML = "";
});

modalBg.addEventListener("click", function () {
  modalMain.style.opacity = 0;
  modalMain.style.visibility = "hidden";
  videoArea.innerHTML = "";
});

//course trailer modal end

// course content modal one
let wordpressIntro = document.querySelector(".course__content--modal--one");

wordpressIntro.addEventListener("click", function () {
  if (wordpressIntro.classList.contains("course__content--modal--one")) {
    modalMain.style.opacity = 1;
    modalMain.style.visibility = "visible";
    videoArea.innerHTML = ` <iframe width="560" height="315" src="https://www.youtube.com/embed/xc3a_CJhjCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }
});
// course content modal one end

// course content modal two start
let wordpressDashboard = document.querySelector(".course__content--modal--two");

wordpressDashboard.addEventListener("click", function () {
  if (wordpressDashboard.classList.contains("course__content--modal--two")) {
    modalMain.style.opacity = 1;
    modalMain.style.visibility = "visible";
    videoArea.innerHTML = ` <iframe width="560" height="315" src="https://www.youtube.com/embed/quJzdnXuNDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }
});
// course content modal two end

//payment modal start
let paymentModal = document.querySelector(".payment__modal");

paymentModal.addEventListener("click", function (e) {
  e.preventDefault();
  if (videoPlayIcon.classList.contains("video-play--icon")) {
    modalMain.style.opacity = 1;
    modalMain.style.visibility = "visible";
    videoArea.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/wHx0lieUWsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }
});
//payment modal end

$(document).ready(function () {
  $(".student__testemonial--slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: !0,
    arrows: !0,
    infinite: !0,
    autoplaySpeed: 2e3,
    prevArrow:
      '<i class="fa fa-angle-left student__testemonial__arrow--left"></i>',
    nextArrow:
      '<i class="fa fa-angle-right student__testemonial__arrow--right"></i>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
});
//student testemonial slider
