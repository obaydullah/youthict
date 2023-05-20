$(document).ready(function () {
  $(".course_slider_top").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: !0,
    autoplay: true,
    loop: true,
    dots: false,
    prevArrow: '<i class="fa fa-angle-left topPrevarrow"></i>',
    nextArrow: '<i class="fa fa-angle-right topNextarrow"></i>',
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 414, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });

  $(".course_mix_btn").slick({
    autoplay: !1,
    focusOnSelect: !0,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: !1,
    arrows: !1,
    prevArrow: '<i class="fa fa-angle-left prevarrow mix_btn"></i>',
    nextArrow: '<i class="fa fa-angle-right nextarrow mix_btn"></i>',
    asNavFor: ".course_body_slider",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: !1,
          centerMode: !0,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: !1,
          centerMode: !0,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !0,
          centerMode: !0,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !0,
          centerMode: !0,
        },
      },
    ],
  });

  $(".course_body_slider").slick({
    centerMode: !1,
    centerPadding: "0",
    draggable: !1,
    fade: !0,
    cssEase: "linear",
    autoplay: !1,
    focusOnSelect: !1,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !1,
    arrows: !1,
    asNavFor: ".course_mix_btn",
  });

  $(".course_category_slider").slick({
    centerMode: !1,
    autoplay: !1,
    focusOnSelect: !0,
    slidesToShow: 3,
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
  $(".instructor_teacher_page_course_slide").slick({
    autoplay: !1,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: !1,
    arrows: !1,
    responsive: [
      {
        breakpoint: 768,
        settings: { vertical: !0, draggable: !1, slidesToShow: "all" },
      },
    ],
  });

  $(".story_text_slider").slick({
    centerMode: !0,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: !1,
    prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
    nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: { arrows: !0, slidesToShow: 2, centerPadding: "0px" },
      },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  });
  $(".feedback_1_slider").slick({
    autoplay: !1,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: !0,
    dots: !1,
    prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
    nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
  $(".feedback_2_slider").slick({
    autoplay: !1,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: !0,
    dots: !1,
    prevArrow: '<i class="fa fa-angle-left studentPrevArrow"></i>',
    nextArrow: '<i class="fa fa-angle-right studentNextArrow"></i>',
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });

  // $(".venobox").venobox();

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // $(".advertisement__slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: !0,
  //   dots: true,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false,
  //   fade: true,
  //   cssEase: "linear",

  //   responsive: [
  //     { breakpoint: 768, settings: { slidesToShow: 1 } },
  //     { breakpoint: 480, settings: { slidesToShow: 1 } },
  //   ],
  // });

  // $(".banner__animation--slide").slick({
  //   autoplay: true,
  //   slidesToShow: 1,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  //   dots: false,
  //   fade: true,
  //   speed: 3000,
  //   infinite: true,
  //   loop: true,
  //   pauseOnHover: false,
  //   cssEase: "ease-in-out",
  // });

  $(".add__popup--venubox").venobox();
});

$(".job__getters--card--slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: false,
  autoplaySpeed: 4000,
  prevArrow: '<i class="fa fa-angle-left jobGettersPrevArrow"></i>',
  nextArrow: '<i class="fa fa-angle-right jobGettersNextArrow"></i>',

  responsive: [
    { breakpoint: 1200, settings: { arrows: !0, slidesToShow: 2 } },
    { breakpoint: 770, settings: { arrows: !0, slidesToShow: 1 } },
    { breakpoint: 576, settings: { arrows: !0, slidesToShow: 1 } },
  ],
});

$(".aboutus__testemonial--slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: !0,
  arrows: !0,
  autoplay: true,
  autoplaySpeed: 4000,
  loop: true,
  dots: true,
  arrows: false,
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

$(".testemonial__videopopup").venobox({
  bgcolor: "#000",
  border: "0",
  autoplay: true,
  showCloseButton: true,
  overlayClose: true,
  spinner: "wave",
});

// working with ad slider
const sliderImages = document.querySelectorAll(".advertisement__slider img");
let currentIndex = 0;

function addActiveClass() {
  sliderImages[currentIndex].classList.add("active");
  currentIndex = (currentIndex + 1) % sliderImages.length;

  setTimeout(function () {
    for (let i = 0; i < sliderImages.length; i++) {
      if (i !== currentIndex) {
        sliderImages[i].classList.remove("active");
      }
    }
    updateActiveDot(currentIndex);
    addActiveClass();
  }, 2000);
}

// working with dots bottom of the slider
let adSlideDots = document.querySelector(".ad__slide--dots");

//creating dynamic button botom of slider
for (let i = 0; i < sliderImages.length; i++) {
  let dot = document.createElement("div");
  dot.className = "ad__dots--btn" + (i === currentIndex ? " active" : "");
  dot.addEventListener("click", function () {
    slideActive(i);
    updateActiveDot(i);
  });
  adSlideDots.appendChild(dot);
}

//when we click the dots the corresponding image change
function slideActive(num) {
  currentIndex = num;

  for (let i = 0; i < sliderImages.length; i++) {
    if (i === currentIndex) {
      sliderImages[i].classList.add("active");
    } else {
      sliderImages[i].classList.remove("active");
    }
  }
}

//when we click the dots the active class only appear this particular div
function updateActiveDot(dotIndex) {
  let dots = document.querySelectorAll(".ad__dots--btn");
  for (let i = 0; i < dots.length; i++) {
    if (i === dotIndex) {
      dots[i].classList.add("active");
    } else {
      dots[i].classList.remove("active");
    }
  }
}

// Call addActiveClass once to start the animation
addActiveClass();

// Working with banner animation
const bannerSlides = document.querySelectorAll(
  ".banner__animation .slide__single"
);
bannerCurrIndex = 0;

function addBannerActiveClass() {
  bannerSlides[bannerCurrIndex].classList.add("active");
  bannerCurrIndex = (bannerCurrIndex + 1) % bannerSlides.length;

  setTimeout(function () {
    for (let i = 0; i < bannerSlides.length; i++) {
      if (i !== bannerCurrIndex) {
        bannerSlides[i].classList.remove("active");
      }
    }
    addBannerActiveClass();
  }, 4000);
}

addBannerActiveClass();

//Working with Modal
function createModal() {
  // Create the modal container
  let videoModal = document.createElement("div");
  videoModal.classList.add("video__modal");

  // Create the modal inner container
  let videoModalInner = document.createElement("div");
  videoModalInner.classList.add("video__modal--inner");

  // Create the close button
  let closeButton = document.createElement("iconify-icon");
  closeButton.setAttribute("icon", "ic:round-close");
  closeButton.classList.add("video__close--icon");
  closeButton.addEventListener("click", function () {
    videoPopup("", "close");
  });

  // Create the video area
  let videoArea = document.createElement("div");
  videoArea.classList.add("video__area");

  // Append elements to their respective containers
  videoModalInner.appendChild(videoArea);
  videoModal.appendChild(videoModalInner);
  videoArea.appendChild(closeButton);

  // Append the modal to the document body
  document.body.appendChild(videoModal);
}

function videoPopup(src = "", status) {
  let videoModal = document.querySelector(".video__modal");
  let videoArea = document.querySelector(".video__area");
  let videoModalInner = document.querySelector(".video__modal--inner");

  let iframe = videoArea.querySelector("iframe");

  if (status === "open") {
    // Create a new iframe element
    let newIframe = document.createElement("iframe");
    newIframe.src = `https://www.youtube.com/embed/${src}`;
    newIframe.title = "YouTube video player";
    newIframe.frameborder = "0";
    newIframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    newIframe.allowfullscreen = true;

    // Replace the existing iframe with the new one
    if (iframe) {
      videoArea.replaceChild(newIframe, iframe);
    } else {
      videoArea.appendChild(newIframe);
    }

    videoModal.style.opacity = "1";
    videoModal.style.visibility = "visible";
  }

  if (status === "close") {
    // Remove the existing iframe
    if (iframe) {
      videoArea.removeChild(iframe);
    }

    videoModal.style.opacity = "0";
    videoModal.style.visibility = "hidden";
  }

  // Add event listener to close modal on click outside of iframe
  videoModal.addEventListener("click", closeModal);
  videoModalInner.addEventListener("click", closeModal);

  function closeModal(event) {
    // Check if the clicked element is the video modal's background or inner container
    if (event.target === videoModal || event.target === videoModalInner) {
      // Remove the iframe from videoArea
      let iframe = videoArea.querySelector("iframe");
      if (iframe) {
        videoArea.removeChild(iframe);
      }

      videoModal.style.opacity = "0";
      videoModal.style.visibility = "hidden";
    }
  }
}

createModal();
