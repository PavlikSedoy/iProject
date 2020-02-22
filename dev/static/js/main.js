// Lazy load
var images = document.querySelectorAll('.lazy');

var interactSettings = {
  root: document.querySelector('.center'),
  rootMargin: '0px 0px 200px 0px'
}

function onIntersection(imageEntites) {
  imageEntites.forEach(function(image) {
    if (image.isIntersecting) {
      observer.unobserve(image.target);
      image.target.src = image.target.dataset.src;
      image.target.onload = image.target.classList.add('loaded');
    }
  });
}

var observer = new IntersectionObserver(onIntersection, interactSettings);

images.forEach(function(image) {
  observer.observe(image)
});

var ll = $('div');
var lh = [];
var wscroll = 0;
var wh = $(window).height();

function update_offsets(){
  $('div').each(function(){
    var x = $(this).offset().top;
    lh.push(x);
  });
};

function lazy() {
  wscroll = $(window).scrollTop();
  for(i = 0; i < lh.length; i++){
    if(lh[i] <= wscroll + (wh - 200)){
      $('div').eq(i).addClass('loaded');
    };
  };
};

// Page Load
update_offsets();
lazy();

$(window).on('scroll',function(){
  lazy();
});


$(document).ready(function () {
  // AOS
  AOS.init({disable: 'mobile'});
  
    // Content slider
    var howContentSlider = new Swiper ('.how-desc-slider__container', {
        loop: true,
        loopedSlides: 6,
        slidesPerView: 1,
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
        // navigation: {
        //   nextEl: '.how-desc-slider__next-slide',
        //   prevEl: '.how-desc-slider__prev-slide',
        // },
    });
    // End content slider

    $('.how-desc-slider__next-slide').click( function() {
      var currentSlide = howContentSlider.activeIndex - 5;
      if ( currentSlide < 6 ) {
        howContentSlider.slideToLoop(currentSlide);
      } else {
        howContentSlider.slideToLoop(0);
      }
    });

    $('.how-desc-slider__prev-slide').click( function() {
      var currentSlide = howContentSlider.activeIndex - 5;
      if ( currentSlide > 1 ) {
        howContentSlider.slideToLoop(currentSlide - 2);
      } else {
        howContentSlider.slideToLoop(5);
      }
    });

    // Screens slider
    var howScreenSlider = new Swiper ('.how-img-slider__container', {
        loop: true,
        loopedSlides: 6,
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: false,
        breakpoints: {
            1200: {
              spaceBetween: 40
            }
          }
    });
    // End screen slider

    // Change screen on changing content slide
    howContentSlider.on('slideChange', function() {
        var toSlide = howContentSlider.activeIndex;
        howScreenSlider.slideToLoop(toSlide - 6);
    });
    // End change screen on changing content slide

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          500,
          'linear'
        )
      })
});