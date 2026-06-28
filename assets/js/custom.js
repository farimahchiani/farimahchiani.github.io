document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });


    document.getElementById('currentYear').textContent = new Date().getFullYear();


    const blogSwiper = new Swiper(".projects-swiper", {
        loop: false,

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },

        pagination: {
            el: ".projects-swiper .swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".projects-swiper .swiper-button-next",
            prevEl: ".projects-swiper .swiper-button-prev",
        },
    });
});