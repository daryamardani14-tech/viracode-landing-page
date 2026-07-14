"use strict";
const themeBtns = document.querySelectorAll(".theme-btn");
const themeIcons = document.querySelectorAll(".theme-btn i");
const body = document.body;
const savedTheme = localStorage.getItem("theme");
const toast = document.querySelector(".theme-toast");
const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-nav-links a");
const header = document.querySelector("header");
const projectName = document.querySelector("#projectName");
const projectContact = document.querySelector("#projectContact");
const sendProjectBtn = document.querySelector("#sendProjectBtn");
const projectModal = document.querySelector("#projectModal");

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

swiper.changeLanguageDirection("rtl");

function updateThemeIcons() {
  themeIcons.forEach(function (icon) {
    if (body.classList.contains("light-mode")) {
      icon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
    } else {
      icon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
    }
  });
}

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("active");
});

closeMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});

mobileLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
});

document.addEventListener("click", function (event) {
  if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    mobileMenu.classList.remove("active");
  }
});

themeBtns.forEach(function (themeBtn) {
  themeBtn.addEventListener("click", function () {
    body.classList.toggle("light-mode");

    localStorage.setItem(
      "theme",
      body.classList.contains("light-mode") ? "light" : "dark",
    );

    updateThemeIcons();

    toast.textContent = body.classList.contains("light-mode")
      ? "☀️ حالت روشن فعال شد"
      : "🌙 حالت تیره فعال شد";

    toast.classList.add("show");

    setTimeout(function () {
      toast.classList.remove("show");
    }, 2000);
  });
});

if (savedTheme === "light") {
  body.classList.add("light-mode");
}
updateThemeIcons();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^09\d{9}$/;

sendProjectBtn.addEventListener("click", function () {
  if (projectName.value.trim() === "" || projectContact.value.trim() === "") {
    alert("لطفاً تمام فیلدها را تکمیل کنید.");
    return;
  }

  const contact = projectContact.value.trim();

  const isEmail = emailPattern.test(contact);
  const isPhone = phonePattern.test(contact);

  if (!isEmail && !isPhone) {
    alert("لطفاً یک ایمیل یا شماره تماس معتبر وارد کنید.");
    return;
  }

  alert("✅ درخواست شما با موفقیت ثبت شد.");
  projectName.value = "";
  projectContact.value = "";

  const modal = bootstrap.Modal.getInstance(projectModal);

  modal.hide();
});

AOS.init({
  duration: 800,
  once: false,
  easing: "ease-out-cubic",
});
AOS.refresh();
