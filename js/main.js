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

$(document).ready(function(){
$(".owl-carousel").owlCarousel();
});


var owl = $('.owl-carousel');
owl.owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    loop:true,
    margin:0,
    // autoplay:true,
    // autoplayTimeout:3000,
    autoplayHoverPause:true,
    // smartSpeed:250,
    autoWidth:true,
    autoHeight:true,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

//boostrap輪播
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)