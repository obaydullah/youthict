//responsive menubar start
const closeBtn = document.querySelector(".responsive__menu--close");
const responsiveMenu = document.querySelector(".responsive__menu");
const menuBar = document.querySelector(".menu__area--responsive--icon");

closeBtn.addEventListener("click", () => {
  responsiveMenu.style.left = "-100%";
});

menuBar.addEventListener("click", () => {
  responsiveMenu.style.left = "0";
});
//responsive menubar end

//sticky header start

window.addEventListener("scroll", () => {
  const menu = document.querySelector(".menu__area");
  menu.classList.toggle("sticky", window.scrollY > 0);
});
//sticky header end

//jQuery
$(document).ready(function () {
  //counter
  $(".count").counterUp({
    delay: 10,
    time: 2000,
  });

  //slick slider
  $(".banner__slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">&#x2190</button>',
    nextArrow: '<button type="button" class="slick-next">&#8594</button>',
  });
  $(".job__getters--slider").slick({
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">&#x2190</button>',
    nextArrow: '<button type="button" class="slick-next">&#8594</button>',
  });
});
//jQuery
