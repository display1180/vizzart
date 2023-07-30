//

// // 첫 메인 비쥬얼 보여주기
// const mainVisual = gsap.timeline()
// mainVisual //
//     .to('.mainVisual', { autoAlpha: 0 })
//     .to('.mainVisual', { autoAlpha: 1 })

// ScrollTrigger.create({
//     animation: mainVisual,
//     trigger: '.mainVisual',
//     start: 'top bottom',
//     end: 'bottom center',
//     // end: '+=600',
//     scrub: true,
//     // pin: true,
//     anticipatePin: 1,
//     markers: true,
// })

// 텍스트 확대하고 회전하기
const mainTextToBigAni = gsap.timeline()
mainTextToBigAni //
    .to('#main_visual_main_txt .item', { scale: 10, duration: 4, autoAlpha: 1, rotation: 180 })
    .to('#main_visual_main_txt .item', { autoAlpha: 0 })

ScrollTrigger.create({
    animation: mainTextToBigAni,
    trigger: '#main_visual_main_txt',
    start: 'top top',
    // end: '+=500',
    end: 'bottom',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false,
})

// 이미지 움직이는 효과 주기
const mainImageSkewAni = gsap.timeline()
mainImageSkewAni //
    .to('#main_visual_img .imgItem', {
        keyframes: {
            x: [-400, -200, 0, 200, 400],
            y: [0, 0, 0, 0, 0],
        },
        duration: 2,
    })
    .to('#main_visual_img .imgItem', { autoAlpha: 0 })

ScrollTrigger.create({
    animation: mainImageSkewAni,
    trigger: '#main_visual_img',
    start: 'top top',
    // end: '+=1000',
    end: 'bottom',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false,
})

// 텍스트 확대하기
const subTextToBigAni = gsap.timeline()
subTextToBigAni //
    .to('#main_visual_sub_txt .item', { scale: 10, duration: 4, autoAlpha: 1 })
    .to('#main_visual_sub_txt .item', { autoAlpha: 0 })

ScrollTrigger.create({
    animation: subTextToBigAni,
    trigger: '#main_visual_sub_txt',
    start: 'top 40%',
    end: '+=600',
    // end: '+=200',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false,
})

// // 좌우스크롤
// const horizontal = document.querySelector('.horizonScroll')
// const sections = gsap.utils.toArray('.horizonScroll > div')

// gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: 'none',
//     scrollTrigger: {
//         trigger: horizontal,
//         start: 'top top',
//         end: () => '+=' + (horizontal.offsetWidth - innerWidth),
//         pin: true,
//         scrub: 1,
//         snap: {
//             snapTo: 1 / (sections.length - 1),
//             inertia: false,
//             duration: { min: 0.1, max: 0.3 },
//         },
//         invalidateOnRefresh: true,
//         anticipatePin: 1,
//     },
// })

// gsap.registerPlugin(ScrollTrigger)
// const scrollItems = document.querySelectorAll('.scrollItem')
// gsap.to(scrollItems, {
//     xPercent: -100 * (scrollItems.length - 1), // Scrolls to the left by multiplying the total number of items
//     ease: 'none',
//     scrollTrigger: {
//         trigger: '.horizonScroll',
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: true,
//     },
// })

// 글씨 색깔
gsap.to('#textColored p', {
    backgroundPositionX: '0%',
    stagger: 1,

    scrollTrigger: {
        trigger: '#textColored',
        scrub: 1,
        start: 'center bottom',
        end: 'center center',
    },
})

// 텍스트 색깔..
const textColorAniPink = gsap.timeline()
textColorAniPink //
    .to('#textColored_pink p', { backgroundPositionX: '0%', stagger: 1 })

ScrollTrigger.create({
    animation: textColorAniPink,
    trigger: '#textColored_pink',
    // start: 'center bottom',
    start: '10% bottom',
    end: 'center center',
    scrub: 1,
    // pin: true,
    // markers: true,
    anticipatePin: 1,
})

// 텍스트 애니메이션
const ani5 = gsap.timeline()
ani5.to('#textAni .t1', { xPercent: 300 }, 'text') //
    .to('#textAni .t2', { xPercent: -300 }, 'text')
    .to('#textAni .t3', { xPercent: 300 }, 'text')

ScrollTrigger.create({
    animation: ani5,
    trigger: '#textAni',
    start: 'top top',
    // end: '+=1000',
    end: 'bottom top',
    scrub: true,
    pin: true,
    // markers: false,
    anticipatePin: 1,
})
