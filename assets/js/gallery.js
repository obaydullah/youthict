$(document).ready(function () {
  // gallery popup start
  $(".gallery__image--popup").venobox({
    titleattr: "data-title",
    numeratio: true,
    infinigall: true,
    spinner: "wandering-cubes",
    arrowsColor: "#fff",
    closeColor: "#fff",
    bgcolor: "#fff",
    overlayColor: "rgba(6, 6, 6, 0.85)",
    closeBackground: "rgba(0, 0, 0, 0.5)",
    overlayClose: true,
    share: [],
  });
  // gallery popup end

  // video popup start
  $(".gallery__video--popup").venobox({
    bgcolor: "#000",
    border: "0",
    autoplay: true,
    showCloseButton: true,
    overlayClose: true,
    spinner: "wave",
  });
  // video popup end

  // init Isotope
  var $gallery = $(".gallery__item").isotope({
    // options
  });
  $(".button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $gallery.isotope({ filter: filterValue, itemSelector: ".grid-item" });
  });
});

// add active class on button click
const buttonLinks = document.querySelectorAll(".gallery__button--link");

buttonLinks.forEach((buttonLink) => {
  buttonLink.addEventListener("click", () => {
    buttonLinks.forEach((buttonLink) => {
      buttonLink.classList.remove("active");
    });
    buttonLink.classList.add("active");
  });
});
