//manuipulate stick header logo when user scroll
let stickyHeader = document.querySelector(".header-sticky");
let logoImg = document.querySelector(".logo__img");

window.onscroll = function () {
  if (stickyHeader.classList.contains("rbt-sticky")) {
    logoImg.style.height = "80px";
  } else {
    logoImg.setAttribute("src", "assets/images/logo.webp");
  }
};

// mobile menu dropdown
function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("hide");
}
// mobile menu dropdown

//header sticky
window.onscroll = function () {
  let header = document.querySelector(".rbt-header-wrapper");
  if (window.pageYOffset >= 200) {
    header.classList.add("rbt-sticky");
  } else {
    header.classList.remove("rbt-sticky");
  }
};

// popup menu show
let mobileMenuBtn = document.querySelector(".hamberger-button");
let popupMobileMenuItem = document.querySelector(".popup-mobile-menu");
mobileMenuBtn.addEventListener("click", function () {
  if (popupMobileMenuItem.classList.contains("active")) {
    popupMobileMenuItem.classList.remove("active");
  } else {
    popupMobileMenuItem.classList.add("active");
  }
});

//popup menu hide
let closeBtn = document.querySelector(".close-button");
closeBtn.addEventListener("click", function () {
  if (popupMobileMenuItem.classList.contains("active")) {
    popupMobileMenuItem.classList.remove("active");
  } else {
    popupMobileMenuItem.classList.add("active");
  }
});
