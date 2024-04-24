//動態按鈕
const btn = document.querySelector("#btn");

// btn.addEventListener("mouseenter", () => {
//   anime({
//     targets: ".function-based-params-demo .bounce",
//     translateY: 30,
//     direction: "alternate",
//     loop: true,
//     delay: function (el, i, l) {
//       return i * 100;
//     },
//     endDelay: function (el, i, l) {
//       return (l - i) * 10;
//     },
//   });
// });

// btn.addEventListener("click", () => {
//   anime({
//     targets: ".click",
//     translateY: -500,
//     rotate: "2turn",
//     complete: function () {
//       setTimeout(() => {
//         anime({
//           targets: ".click",
//           translateY: 0,
//           rotate: "0turn",
//         });
//       });
//     },
//   });
// });

//選擇tag

const allTags = document.querySelectorAll(".text");
const allCards = document.querySelectorAll(".cover");


//輪播
//boostrap輪播
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

//粒子特效
document.addEventListener('DOMContentLoaded', function () {
    VANTA.DOTS({
        el: "#bgMotion",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        color2: 0xffffff,
        backgroundColor: 0x0057a0,
        spacing: 10.00,
        showLines: false
    });
});
// VANTA.DOTS({
//   el: "#bgMotion",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   color: 0xffffff,
//   color2: 0xffffff,
//   backgroundColor: 0x57a0,
//   spacing: 10.00,
//   showLines: false
// })