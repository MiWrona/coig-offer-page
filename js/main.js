const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

const boxes = document.querySelectorAll(".product");

for (const box of boxes) {
  box.addEventListener("click", function handleClick() {
    boxes.forEach((element) => {
      element.classList.remove("product-active");
    });
    if (box.classList.contains("product-active")) {
      box.classList.remove("product-active");
    } else {
      box.classList.add("product-active");
    }
  });
}