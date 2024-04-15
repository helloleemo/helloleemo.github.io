// ---------------
// owl.carousel
// ---------------


// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

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
// loading動畫
// ---------------

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var loader = document.querySelector('.loading');
        if (loader) {
            loader.style.animation = 'slideOutUp .5s forwards';
        }
    }, 3000); 
});



// ---------------
// fetch資料
// ---------------

const ul = document.querySelector("#fetch");

// picsum的圖片
fetch("https://picsum.photos/v2/list?page=2&limit=26")
    .then(res => res.json())
    .then(images => {
        // 使用者
        fetch("https://randomuser.me/api/?results=26")
            .then(res => res.json())
            .then(users => {
                users.results.forEach((author, index) => {
                    const picsum = images[index]; // 对应每个用户的图片
                    
                    const li = document.createElement("li");
                    const divImgbox = document.createElement("div");
                    const img = document.createElement("img");
                    const divOverlay = document.createElement("div");
                    const pOverlay = document.createElement("p");
                    const h3Overlay = document.createElement("h3");
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
                    divOverlay.classList.add("overlay")
                    img.setAttribute("src", picsum.download_url); // 使用picsum图片的URL
                    
                    divInfo.classList.add("info");
                    divAvatar.classList.add("avatar");
                    imgAvatar.setAttribute("src", author.picture.thumbnail); // 用户头像
                    
                    divName.classList.add("name");
                    divName.textContent = `${author.name.first} ${author.name.last}`; // 用户名
                    
                    h3Overlay.textContent = `${author.name.last}`;

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
                    divImgbox.appendChild(divOverlay);
                    divOverlay.appendChild(h3Overlay);
                    divOverlay.appendChild(pOverlay);

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



                    // lorem
                    function generateLorem() {
                        const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                        const words = lorem.split(' ');
                        const randomLorem = [];
                        const wordCount = 20; // 生成20个单词的文本

                        for (let i = 0; i < wordCount; i++) {
                            randomLorem.push(words[Math.floor(Math.random() * words.length)]);
                        }
                        return randomLorem.join(' ');
                    }

                    // lorem介紹
                    document.querySelectorAll('.overlay p').forEach(p => {
                        p.textContent = generateLorem(); // 在鼠标悬停时生成并设置文本
                    });
                    

                    document.addEventListener('DOMContentLoaded', function () {
                        document.querySelectorAll('.overlay p').forEach(p => {
                            p.addEventListener('mouseover', () => {
                                p.textContent = generateLorem(); // 在鼠标悬停时生成并设置文本
                            });
                        });
                    });
                });
            })
            .catch(error => alert("Please refresh the broswer"));
    })
    .catch(error => alert("Please refresh your browser."));

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
            img.style.transform = 'translateY(100px)';
        }
    });
});

// // 函数生成随机 Lorem Ipsum 文本
// function generateLorem() {
//     const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//     const words = lorem.split(' ');
//     const randomLorem = [];
//     const wordCount = 20; // 生成20个单词的文本

//     for (let i = 0; i < wordCount; i++) {
//         randomLorem.push(words[Math.floor(Math.random() * words.length)]);
//     }
//     return randomLorem.join(' ');
// }

// // 设置事件监听器，当鼠标悬停在 p 标签上时触发
// document.querySelectorAll('.overlay p').forEach(p => {
//     p.addEventListener('mouseover', () => {
//         p.textContent = generateLorem(); // 在鼠标悬停时生成并设置文本
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.overlay p').forEach(p => {
//         p.addEventListener('mouseover', () => {
//             p.textContent = generateLorem(); // 在鼠标悬停时生成并设置文本
//         });
//     });
// });


