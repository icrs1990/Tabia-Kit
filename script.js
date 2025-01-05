// Control del carrusel
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  if (!slides) return; // Evita errores si el carrusel no está en la página

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Reinicia el temporizador cuando el cliente interactúa manualmente
  resetAutoSlide();
}

// Función para el cambio automático de diapositivas
function autoSlide() {
  moveSlide(1); // Avanza automáticamente una diapositiva
}

// Configuración del temporizador
let autoSlideInterval = setInterval(autoSlide, 5000); // Cambia cada 5 segundos

// Función para reiniciar el temporizador al interactuar manualmente
function resetAutoSlide() {
  clearInterval(autoSlideInterval); // Detiene el temporizador actual
  autoSlideInterval = setInterval(autoSlide, 5000); // Reinicia el temporizador
}

// Agregar eventos a las flechas de navegación
document.querySelector('.carousel-control.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.carousel-control.next').addEventListener('click', () => moveSlide(1));


