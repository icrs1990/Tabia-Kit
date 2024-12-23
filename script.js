let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener("scroll", () => {
  const items = document.querySelectorAll(".product-item");
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    } else {
      item.style.transform = "translateY(20px)";
      item.style.opacity = "0";
    }
  });
});

