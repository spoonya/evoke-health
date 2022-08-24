export const swiperTestimonials = new Swiper('#swiper-testimonials', {
  loop: true,

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
    320: {},
    576: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1350: {
      slidesPerView: 4
    }
  }
});
