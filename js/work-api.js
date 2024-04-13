// ---------------
// owl.carousel
// ---------------


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:3,
//     loop:true,
//     margin:20,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })



// ---------------
// fetch資料
// ---------------

const ul = document.querySelector("#fetch");

// 获取图片数据
fetch("https://picsum.photos/v2/list?page=2&limit=26")
    .then(res => res.json())
    .then(images => {
        // 获取用户数据
        fetch("https://randomuser.me/api/?results=26")
            .then(res => res.json())
            .then(users => {
                users.results.forEach((author, index) => {
                    const picsum = images[index]; // 对应每个用户的图片
                    
                    const li = document.createElement("li");
                    const divImgbox = document.createElement("div");
                    const img = document.createElement("img");
                    const divInfo = document.createElement("div");
                    const divAvatar = document.createElement("div");
                    const imgAvatar = document.createElement("img");
                    const divName = document.createElement("div");
                    const divTag = document.createElement("div");
                    const divView = document.createElement("div");
                    const iHeart = document.createElement("i");
                    const p1 = document.createElement("p");
                    const iEye = document.createElement("i");
                    const p2 = document.createElement("p");

                    divImgbox.classList.add("imgbox");
                    img.setAttribute("src", picsum.download_url); // 使用picsum图片的URL
                    
                    divInfo.classList.add("info");
                    divAvatar.classList.add("avatar");
                    imgAvatar.setAttribute("src", author.picture.thumbnail); // 用户头像
                    
                    divName.classList.add("name");
                    divName.textContent = `${author.name.first} ${author.name.last}`; // 用户名
                    
                    divTag.classList.add("tag");
                    divTag.textContent = "pro"; // 标签

                    divView.classList.add("view");
                    iHeart.classList.add("fa-solid", "fa-heart");
                    iEye.classList.add("fa-solid", "fa-eye");
                    let randomHeart = getRandomInt(1, 999); // 心形图标随机数
                    let randomEye = getRandomInt(1, 999);  // 眼睛图标随机数
                    p1.textContent = randomHeart;
                    p2.textContent = randomEye;

                    divImgbox.appendChild(img);
                    li.appendChild(divImgbox);

                    divAvatar.appendChild(imgAvatar);
                    divInfo.appendChild(divAvatar);
                    divInfo.appendChild(divName);
                    divInfo.appendChild(divTag);

                    divView.appendChild(iHeart);
                    divView.appendChild(p1);
                    divView.appendChild(iEye);
                    divView.appendChild(p2);
                    
                    divInfo.appendChild(divView);
                    li.appendChild(divInfo);

                    ul.appendChild(li);
                });
            })
            .catch(error => alert("Error loading user data: " + error));
    })
    .catch(error => alert("Error loading image data: " + error));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//滾輪滑下去才顯示

document.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const images = document.querySelectorAll('.imgbox img');

    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;

        if (imgTop < windowHeight) {
            img.style.opacity = 1;
            img.style.transform = 'translateY(0)';
        } else {
            img.style.opacity = 0;
            img.style.transform = 'translateY(200px)';
        }
    });
});