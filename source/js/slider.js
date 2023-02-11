import './swiper.js';

const sliderlList = document.getElementById('slider');

const sliderItems = () => {
  if (sliderlList) {
    // eslint-disable-next-line no-unused-vars, no-undef
    const swiper = new Swiper(sliderlList, {
      navigation: {
        nextEl: '.slider__button--right',
        prevEl: '.slider__button--left',
      },
      speed: 600,
      breakpoints: {
        320: {
          slidesPerView: 1.142,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1560: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      loop: true,
    });
  }
};

export {sliderItems};
