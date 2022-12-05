$(function () {

  const recentSwiper = new Swiper('.partner-slider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    a11y: true,
    
    autoplay: {
      delay: 5000,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 5
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      561: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
      },
      993: {
        slidesPerView: 4,
      }
      
    }
  
  });

  var header = $(".header");
  var scrollChange = 10;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.addClass('sticky');
    } else {
      header.removeClass("sticky");
    }
  });

  var goUp = $(".go-up");
  var scrollChange = 50;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      goUp.addClass('go-up--active');
    } else {
      goUp.removeClass("go-up--active");
    }
  });

  $('.menu__btn, .menu a:not(.logo)').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });
});