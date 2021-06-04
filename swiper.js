var swiper = new Swiper('.swiper-container', {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 60,
          grabCursor: true,
          speed: 200,

          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          // od tuka e problemot, mi go aplicira nad 662 px a ne pod

          breakpoints:{
            662: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
              loop: true,
              loopFillGroupWithBlank: true,
          }},

        });
