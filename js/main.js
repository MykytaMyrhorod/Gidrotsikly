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
document.getElementById("myButton").focus();