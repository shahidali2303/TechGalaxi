const swiper = new Swiper(".swiper-new", {
  slidesPerView: 3,
  spaceBetween: 30,
  // mousewheel: true,

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-new-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-new-button-next",
    prevEl: ".swiper-new-button-prev",
  },

  scrollbar: {
    el: ".swiper-new-scrollbar",
  },
  breakpoints: {
    319: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,

  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  scrollbar: {
    el: ".mySwiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // mousewheel: true,
  keyboard: true,

  pagination: {
    el: ".mySwiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  scrollbar: {
    el: ".swiper-new-scrollbar",
  },
});
