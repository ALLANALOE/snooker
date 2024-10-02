document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".portfolio-container");
  const sliderImages = document.querySelectorAll(".portfolio-image");
  let currentIndex = 0;

  function slideTo(index) {
    const offset = -index * 400; // Assuming each image is 400px wide
    sliderContainer.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    slideTo(currentIndex);
  }

  setInterval(nextSlide, 3000);
  
  // Show the first image initially
  slideTo(currentIndex);
});
