new Swiper ('.swiper-container',{
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-1'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})
document.querySelector('.search-button-item button').addEventListener('touchstart', function() {
    this.classList.add('touch');
});

document.querySelector('.search-button-item button').addEventListener('touchend', function() {
    this.classList.remove('touch');
});
