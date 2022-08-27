export const swiperAdvisors = new Swiper('#swiper-advisors', {
  loop: false,

  spaceBetween: 24,

  grabCursor: true,

  watchSlidesProgress: true,
  resizeObserver: true,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '[data-slider-next]',
    prevEl: '[data-slider-prev]'
  },

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1366: {
      slidesPerView: 4
    }
  }
});
