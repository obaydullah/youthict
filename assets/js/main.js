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

  $(".venobox").venobox();

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  $(".advertisement__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !0,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    cssEase: "linear",

    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });

  $(".banner__animation--slide").slick({
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 3000,
    infinite: true,
    loop: true,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  });

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
