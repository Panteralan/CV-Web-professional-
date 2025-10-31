// En carrusel.js o al final de tu HTML
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar todos los carruseles
const carruseles = document.querySelectorAll('.carrusel-container');
  
  carruseles.forEach(container => {
    const carrusel = container.querySelector('.carrusel');
    const slides = container.querySelectorAll('.carrusel-slide');
    const indicadores = container.querySelectorAll('.indicador');
    const btnAnterior = container.querySelector('.anterior');
    const btnSiguiente = container.querySelector('.siguiente');
    let currentIndex = 0;
    let autoPlayInterval;

    function updateCarrusel() {
      carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Actualizar indicadores
      indicadores.forEach((ind, index) => {
        ind.classList.toggle('active', index === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarrusel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarrusel();
    }

    // Event listeners para botones
    btnSiguiente.addEventListener('click', nextSlide);
    btnAnterior.addEventListener('click', prevSlide);

    // Click en indicadores
    indicadores.forEach((indicador, index) => {
      indicador.addEventListener('click', () => {
        currentIndex = index;
        updateCarrusel();
        resetAutoPlay();
      });
    });

    // Auto-play
    function startAutoPlay() {
      autoPlayInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    }

    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      startAutoPlay();
    }

    // Pausar auto-play al hover
    container.addEventListener('mouseenter', () => {
      clearInterval(autoPlayInterval);
    });

    container.addEventListener('mouseleave', () => {
      startAutoPlay();
    });

    // Iniciar auto-play
    startAutoPlay();
    updateCarrusel(); // Estado inicial
  });
});