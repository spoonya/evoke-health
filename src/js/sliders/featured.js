export const swiperFeatured = new Swiper('#swiper-featured', {
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
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1366: {
      slidesPerView: 4
    }
  }
});
