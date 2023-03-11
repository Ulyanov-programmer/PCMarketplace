import Swiper from '../libs/swiper-bundle.esm.browser.min.js'

new Swiper('.slider__swiper', {
  spaceBetween: 0,
  effect: 'fade',

  navigation: {
    nextEl: ".slider__next-btn", prevEl: ".slider__prev-btn",
    disabledClass: 'unactive',
  },
  pagination: {
    el: '#hero-slider-pag',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
  },
  loop: false,
})

let pickUpSliderClass = 'pick-up'
new Swiper(`.${pickUpSliderClass}__slider`, {


  navigation: {
    nextEl: `.${pickUpSliderClass}__button-next`,
    disabledClass: 'unactive',
  },
  pagination: {
    el: `.${pickUpSliderClass}__pagination`,
    clickable: true,
  },

  breakpoints: {
    1024: {
      spaceBetween: 35,
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    500: {
      spaceBetween: 15,
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    300: {
      spaceBetween: 25,
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
})

new Swiper('.our-partners__slider', {

  navigation: {
    nextEl: ".our-partners__next-btn",
    disabledClass: 'unactive',
  },

  breakpoints: {
    1300: {
      slidesPerView: 5,
      spaceBetween: 100,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
})


/* HINTS 
  grabCursor: true,

  navigation: {
    nextEl: ".nextNavButton", prevEl: ".prevNavButton",
    disabledClass: 'unactive',
  },
  pagination: { 
    el: '.swiperPagination', 
    clickable: true, 
  },

  preloadImages: true,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevnext: true,
  },

  autoplay:{
    delay: 3000,
    stopOnLastSlide: false,
  },
  ? Infinite scrolling.
  loop: false,

  ? Changes the slider settings based on the width of the screen.
  breakpoints: {
    // ? when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  ? Changes the height of the slider in runtime depending on the height of the slides.
  autoHeight: true,

  ? If there are no more than one slides, the slider stops working.
  watchOverflow: true,

  direction: 'horizontal' or 'vertical',

  ? Indent between slides.
  spaceBetween: 150,

  ? Enable parallax effect.
  parallax: true,
  ?? For working add and set attributes on elements in slide:
  data-swiper-parallax="toRight_InPixels"
  data-swiper-parallax-duration="1000"

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  }

  ? Thumbs construction:
  new Swiper('.thumbs', {
    spaceBetween: 15,
    slidesPerView: 6,
    watchOverflow: true,
  })

  new Swiper('.main', {
    watchOverflow: true,

    thumbs: {
      swiper: demosSwiper,
      slideThumbActiveClass: 'active',
    },
  })
  ? Multiple rows
  grid: {
    rows: 2,
    fill: 'row',
  },
*/