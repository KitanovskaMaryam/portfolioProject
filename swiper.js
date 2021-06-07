var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  init: true,
  centeredSlides: true,
  loopFillGroupWithBlank: true,
  slidesPerGroup: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    512: {
      slidesPerView: 1,
      spaceBetween: 60,
      centeredSlides: true,
      loopFillGroupWithBlank: true,
      slidesPerGroup: 1,
      grabCursor: true,
    },
    662: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
      loopFillGroupWithBlank: true,
      slidesPerGroup: 1,
      grabCursor: true,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
      loopFillGroupWithBlank: true,
      slidesPerGroup: 1,
      grabCursor: true,
    },
  }
});
