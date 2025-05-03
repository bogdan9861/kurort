const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const modalTrigger = document.querySelectorAll(".modal-trigger");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");

modalTrigger.forEach((el) => {
  console.log(el);

  el.addEventListener("click", () => {
    modal.classList.add("modal--active");
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("modal--active");
});

function countdown(targetDate, elementId) {
  const targetTime = new Date(targetDate).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      document.getElementById(elementId).innerHTML = "Countdown is over!";
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML =
      days + "д " + hours + "ч " + minutes + "м ";
  }

  updateCountdown(); // Вызываем сразу, чтобы не ждать секунду
  const intervalId = setInterval(updateCountdown, 1000);
}

// Замените на желаемую дату окончания обратного отсчета
const targetDate = "2025-05-31T23:59:59";
const countdownElementId = "countdown";

countdown(targetDate, countdownElementId);

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__bottom");
const menuClose = document.querySelector(".header__close");

console.log(burger);
console.log(menu);

burger.addEventListener("click", () => {
  console.log(123);

  menu.classList.add("header__bottom--active");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("header__bottom--active");
});
