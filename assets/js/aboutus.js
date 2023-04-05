$(document).ready(function () {
  //watch video popup
  $(".about__us--watchvideo").venobox({
    bgcolor: "#000",
    border: "0",
    autoplay: true,
    showCloseButton: true,
    overlayClose: true,
    spinner: "wave",
  });

  //about us counter
  $(".aboutuscounter").counterUp({
    delay: 10,
    time: 1000,
  });

  $(".testemonial__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: !0,
    arrows: !0,
    infinite: !0,
    autoplaySpeed: 2e3,
    prevArrow: '<i class="fa fa-angle-left testemonial__arrow--left"></i>',
    nextArrow: '<i class="fa fa-angle-right testemonial__arrow--right"></i>',
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
  $(".instructor__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: !0,
    arrows: !0,
    infinite: !0,
    autoplaySpeed: 2e3,
    prevArrow: '<i class="fa fa-angle-left instructor__arrow--left"></i>',
    nextArrow: '<i class="fa fa-angle-right instructor__arrow--right"></i>',

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

  //testemonial popup
  $(".testemonial__videopopup").venobox({
    bgcolor: "#000",
    border: "0",
    autoplay: true,
    showCloseButton: true,
    overlayClose: true,
    spinner: "wave",
  });
});
