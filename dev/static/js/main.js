$(document).ready(function () {
    // Content slider
    var howContentSlider = new Swiper ('.how-desc-slider__container', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.how-desc-slider__next-slide',
          prevEl: '.how-desc-slider__prev-slide',
        },
    });
    // End content slider

    // Screens slider
    var howScreenSlider = new Swiper ('.how-img-slider__container', {
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: false
    });
    // End screen slider

    // Change screen on changing content slide
    howContentSlider.on('slideChange', function() {
        var toSlide = howContentSlider.activeIndex;
        howScreenSlider.slideTo(toSlide);
    });
    // End change screen on changing content slide
});