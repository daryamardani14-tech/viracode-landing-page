"use strict";

const swiper = new Swiper(".portfolio-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1.5,
    slideShadows: false,
    scale: 0.85,
  },
});
