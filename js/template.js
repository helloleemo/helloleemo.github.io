let lastScrollTop = 0;
const navbar = document.querySelector('.wrapper-sidebar');

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