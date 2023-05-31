//HOME
const home = document.querySelector(".home-slider .blaze-slider");
new BlazeSlider(home, {
  all: {
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
    enableAutoplay: true,
    transitionDuration: 400,
    slideGap: "0px",
    stopAutoplayOnInteraction: false,
  },
});
//navbar close when clicked outside
$(document).ready(function () {
  document.addEventListener("click", function (event) {
    // if the clicked element isn't child of the navbar, you must close it if it is open
    if (
      !event.target.closest(".navbar") &&
      document.getElementById("navbarContent").classList.contains("show")
    ) {
      $(".navbar-toggler").click();
    }
  });
});
//navbar on scroll change color
const homeNav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 850) {
    homeNav.classList.add("navbar-scrolled");
  } else if (window.scrollY < 850) {
    homeNav.classList.remove("navbar-scrolled");
  }
});

//navbar on hover change color
function mouseOver() {
  homeNav.classList.add("mouseover");
}
function mouseOut() {
  homeNav.classList.remove("mouseover");
}
homeNav.addEventListener("mouseenter", mouseOver);
homeNav.addEventListener("mouseleave", mouseOut);
