const el = document.querySelectorAll(".blaze-slider").forEach((el) => {
  new BlazeSlider(el);
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

const heart = document.querySelector(".heart");
heart.addEventListener("click", () => {
  if (heart.hasClass("fa-regular")) {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid fa-heart");
  }
});
