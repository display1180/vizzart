let menuIcon = document.querySelector("#menu");
let menuOpen = document.querySelector(".navPop");
let menuClose = document.querySelector("#close");
menuIcon.addEventListener("click", function () {
  menuOpen.style.display = "block";
});

menuClose.addEventListener("click", function () {
  menuOpen.style.display = "none";
});
