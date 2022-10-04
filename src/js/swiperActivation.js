const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSliderOn() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
        
        mySwiper = new Swiper(slider, {
            slidesPerView: 1, 
            loop: false,

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets', //fraction уберает точки и показивает цифры 1/6 и тд// преключение нажатием по точкам
            },

            //lazy: true включает  lazy
            //lazy: {
                //loadPrevNext: true,
              //},  //загружает на одну картинку больше что бі не видиле преолоада

            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                // when window width is >= 768px
                768:{
                    slidesPerView: 3,
                    spaceBetween: 0,
                }
            }
        });
        
        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSliderOn();

window.addEventListener('resize', () => {
    mobileSliderOn();
})

