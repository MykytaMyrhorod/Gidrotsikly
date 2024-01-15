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
const searchInput = document.querySelector('.search-site');

const buttons = document.querySelectorAll('.btn-1, .btn-2, .btn-3');

const placeholders = [
  'Поиск по номеру',
  'Поиск по марке', 
  'Поиск по названию'
];

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    searchInput.placeholder = placeholders[index];
  });  
});

  const borderActive = '2px solid #007bff';

buttons.forEach(btn => {

  btn.addEventListener('click', () => {

    if (matchMedia('(hover: none)').matches) { 
       // условие выполняется на сенсорных устройствах  
       
      buttons.forEach(b => b.style.borderBottom = ''); 

      btn.style.borderBottom = borderActive;

    } else {
        buttons.forEach((btn, index) => {

            btn.addEventListener('click', () => {
          
              // снимаем активный фон со всех кнопок
              buttons.forEach(b => {
                b.style.background = ''
                b.style.borderRadius = ''
            });
              
              // добавляем фон текущей нажатой кнопке
              btn.style.background = '#F0F0F4';
              btn.style.borderRadius = '5px'
          
              searchInput.placeholder = placeholders[index];
            });
          
          });
      
    }

    // остальная логика

  });

})