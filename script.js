// Control del carrusel
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}


