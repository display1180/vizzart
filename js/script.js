const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const intro = document.querySelector(".intro");
const introSpan = document.querySelector(".intro .inner span");
console.log(intro);

setTimeout(() => {
  intro.classList.add("on");
}, 200);
setTimeout(() => {
  intro.classList.add("end");
}, 800);
