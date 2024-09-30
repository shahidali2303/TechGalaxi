const swiper = new Swiper(".swiper-new", {
  slidesPerView: 3,
  spaceBetween: 30,

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
