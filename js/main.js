// 텍스트 색깔 blue
gsap.to("#textColored p", {
  backgroundPositionX: "0%",
  stagger: 1,

  scrollTrigger: {
    trigger: "#textColored",
    scrub: 1,
    start: "center bottom",
    end: "center center",
  },
});

// 텍스트 색깔 pink
const textColorAniPink = gsap.timeline();
textColorAniPink //
  .to("#textColored_pink p", { backgroundPositionX: "0%", stagger: 1 });

ScrollTrigger.create({
  animation: textColorAniPink,
  trigger: "#textColored_pink",
  start: "70% top",
  end: "center center",
  scrub: 1,
  anticipatePin: 1,
});

// 텍스트 애니메이션
const ani5 = gsap.timeline();
ani5
  .to("#textAni .t1", { xPercent: 200 }, "text") //
  .to("#textAni .t2", { xPercent: -200 }, "text")
  .to("#textAni .t3", { xPercent: 200 }, "text");

ScrollTrigger.create({
  animation: ani5,
  trigger: "#textAni",
  start: "top top",
  // end: '+=1000',
  end: "bottom top",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});

gsap.to("#horizonScrollContainer", {
  xPercent: -161,
  scrollTrigger: {
    trigger: ".sect5",
    start: "top top",
    end: "bottom top",
    markers: true,
    pin: true,
    scrub: true,
  },
});
// const toLeft = gsap.timeline();
// toLeft.to(".horizonScroll", { xPercent: 100 });

// ScrollTrigger.create({
//   trigger: ".sect5",
//   pin: true,
//   start: "top top",
//   end: "bottom top",
//   markers: true,

// });

// 좌우스크롤 처리
const carouselContainer = document.querySelector("#horizonScrollContainer"); // scroll 이벤트 붙이는 용도의 단순 Element
const imageCarousel = document.querySelector(".horizonScroll"); // scroll할 크기 계산하고 scroll될 Element

let scrollAmount = 0;

carouselContainer.addEventListener("wheel", (event) => {
  event.preventDefault();

  // console.log(event);

  const scrollDirection = -1;

  // sensitivity: 감도 조절
  const sensitivity = 1;

  scrollAmount += scrollDirection * event.deltaY * sensitivity;

  const maxScroll = imageCarousel.scrollWidth - imageCarousel.clientWidth;
  scrollAmount = Math.max(-maxScroll, Math.min(scrollAmount, 0));

  // 맨처음 or 맨끝까지 스크롤 했을 경우판단하여 스크롤 방향 변경 ( vertical, horizon )
  if (scrollAmount === 0 || scrollAmount === -maxScroll) {
    console.log("event.deltaY", event.deltaY);
    // 정상적인 스크롤
    window.scrollBy({
      top: event.deltaY,
      left: 0,
      // behavior:'auto'
      // behavior:'instant'
      // behavior:'smooth'
    });
  } else {
    // 좌우 스크롤
    console.log("scrollAmount", scrollAmount);
    imageCarousel.style.transform = `translateX(${scrollAmount}px)`;
  }
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
