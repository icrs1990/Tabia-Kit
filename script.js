// Control del carrusel
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  if (!slides) return; // Evita errores si el carrusel no está en la página

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Animación de las secciones de productos
document.addEventListener("scroll", () => {
  const productItems = document.querySelectorAll(".product-item");
  productItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
      item.style.transition = "transform 0.5s, opacity 0.5s";
    } else {
      item.style.transform = "translateY(20px)";
      item.style.opacity = "0";
    }
  });
});


