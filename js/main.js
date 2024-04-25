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


//導航列隱藏
let lastScrollTop = 0;
const navbar = document.querySelector('.mainNavbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // 向下滾動
    navbar.style.opacity = "0"; 
  } else {
    // 向上滾動
    navbar.style.opacity = "1";
  }
  lastScrollTop = scrollTop;
});

navbar.addEventListener("mouseover", function() {
  navbar.style.opacity = "1";
});

navbar.addEventListener("mouseout", function() {
  if (lastScrollTop = scrollTop){
    navbar.style.opacity = "1";
  }else{
    navbar.style.opacity = "0";
  }
  
});