// Swipper Start
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  grabCursor: true,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    578: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// Swipper End

// Go up Start
let up = document.querySelector(".go-up");

window.onscroll = () => {
  if (scrollY >= 500) {
    up.classList.add("go-up-active");
    document.querySelector("header").style.cssText =
      "border-bottom: 1px solid #223044";
  } else {
    up.classList.remove("go-up-active");
    document.querySelector("header").style.cssText = "border-bottom: none";
  }
};

up.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
// Go up End
