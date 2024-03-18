let menuIcon = document.querySelector("#menu");
let menuOpen = document.querySelector(".navPop");
let menuClose = document.querySelector("#close");
menuIcon.addEventListener("click", function () {
  menuOpen.style.display = "block";
});

menuClose.addEventListener("click", function () {
  menuOpen.style.display = "none";
});

let t1 = document.querySelector(".t1");
let t2 = document.querySelector(".t2");
let t3 = document.querySelector(".t3");
let tImg = document.querySelector(".sect3 .img img");

t1.addEventListener("mouseover", function () {
  tImg.src = "/img/vizzart_woody.png";

  const item = document.querySelector(".sect3 ul li.active");
  if (item) item.classList.remove("active");
  document.querySelector(".sect3 ul li.t1").classList.add("active");
});
t2.addEventListener("mouseover", function () {
  const item = document.querySelector(".sect3 ul li.active");
  if (item) item.classList.remove("active");
  tImg.src = "/img/vizzart_cote.png";
  document.querySelector(".sect3 ul li.t2").classList.add("active");
});
t3.addEventListener("mouseover", function () {
  const item = document.querySelector(".sect3 ul li.active");
  if (item) item.classList.remove("active");
  tImg.src = "/img/vizzart_triple.png";
  document.querySelector(".sect3 ul li.t3").classList.add("active");
});
