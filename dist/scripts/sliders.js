import Swiper from "../libs/swiper-bundle.esm.browser.min.js";
new Swiper(".slider__swiper", {
  spaceBetween: 0,
  effect: "fade",
  navigation: {
    nextEl: ".slider__next-btn",
    prevEl: ".slider__prev-btn",
    disabledClass: "unactive"
  },
  pagination: {
    el: "#hero-slider-pag",
    clickable: true
  },
  autoplay: {
    delay: 3e3,
    stopOnLastSlide: false
  },
  loop: false
});
let pickUpSliderClass = "pick-up";
new Swiper(`.${pickUpSliderClass}__slider`, {
  navigation: {
    nextEl: `.${pickUpSliderClass}__button-next`,
    disabledClass: "unactive"
  },
  pagination: {
    el: `.${pickUpSliderClass}__pagination`,
    clickable: true
  },
  breakpoints: {
    1024: {
      spaceBetween: 35,
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: "row"
      }
    },
    500: {
      spaceBetween: 15,
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: "row"
      }
    },
    300: {
      spaceBetween: 25,
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row"
      }
    }
  }
});
new Swiper(".our-partners__slider", {
  navigation: {
    nextEl: ".our-partners__next-btn",
    disabledClass: "unactive"
  },
  breakpoints: {
    1300: {
      slidesPerView: 5,
      spaceBetween: 100
    },
    1e3: {
      slidesPerView: 4,
      spaceBetween: 80
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },
    320: {
      slidesPerView: 2.5,
      spaceBetween: 20
    }
  }
});
