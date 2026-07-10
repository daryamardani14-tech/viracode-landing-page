"use strict";

const themeBtn = document.querySelector(".theme-btn");
const body = document.body;
const themeIcon = themeBtn.querySelector("i");
const savedTheme = localStorage.getItem("theme");
const toast = document.querySelector(".theme-toast");

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

themeBtn.addEventListener("click", function () {
  body.classList.toggle("light-mode");

  localStorage.setItem(
    "theme",
    body.classList.contains("light-mode") ? "light" : "dark",
  );

  if (body.classList.contains("light-mode")) {
    themeIcon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
  } else {
    themeIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
  }

  toast.textContent = body.classList.contains("light-mode")
    ? "☀️ حالت روشن فعال شد"
    : "🌙 حالت تیره فعال شد";

  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 2000);
});

if (savedTheme === "light") {
  body.classList.add("light-mode");
  themeIcon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
}
