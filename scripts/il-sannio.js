// =====================
// SLIDER PC (esistente)
// =====================
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider';

let mainSliderOptions = {
  effect: 'slide',
  loop: true,
  speed: 1000,
  parallax: true,
  autoplay: {
    delay: 3000
  },
  loopAdditionalSlides: 10,
  grabCursor: true,
  navigation: {
    nextEl: '.main-slider .swiper-button-next',  // ⚠️ reso specifico
    prevEl: '.main-slider .swiper-button-prev',  // ⚠️ reso specifico
  },
  mousewheel: {
    enabled: true,
    invert: false,
  },
  on: {
    init: function () {
      this.autoplay.stop();
    },
    imagesReady: function () {
      this.el.classList.remove('loading');
      this.autoplay.start();
    }
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

let navSliderOptions = {
  loop: true,
  loopAdditionalSlides: 10,
  speed: 1000,
  spaceBetween: 5,
  slidesPerView: 5,
  centeredSlides: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  direction: 'vertical',
  mousewheel: {
    enabled: true,
    invert: false,
  },
  on: {
    imagesReady: function () {
      this.el.classList.remove('loading');
    },
    click: function () {
      mainSlider.autoplay.stop();
    }
  }
};
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;


// =====================
// SLIDER MOBILE (nuovo)
// =====================
let mobileSlider = new Swiper('.mobile-slider', {
  loop: true,
  speed: 1000,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.mobile-slider .swiper-pagination',  // ⚠️ specifico per mobile
    clickable: true,
  },
  parallax: true,
  on: {
    init: function () {
      this.autoplay.stop();
    },
    imagesReady: function () {
      this.el.classList.remove('loading');
      this.autoplay.start();
    }
  }
});
