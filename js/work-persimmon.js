document.addEventListener('DOMContentLoaded', function () {
    const scrollElements = document.querySelectorAll('.scroll');

    function handleScroll() {
        const windowHeight = window.innerHeight;

        scrollElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight) {  
                el.classList.add('visible');
            } else {
                el.classList.remove('visible'); 
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始检查
});