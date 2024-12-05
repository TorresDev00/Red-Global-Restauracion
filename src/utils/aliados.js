import "@justinribeiro/lite-youtube";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper } from "swiper";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 1024) {
    gsap.set(".animated-image", { scale: 1.5 });

    // Animación de escala
    gsap.to(".animated-image", {
        scale: 0.6, // Tamaño original
        scrollTrigger: {
            trigger: ".h-screen", // Elemento que activa el scroll
            start: "top top", // Inicia cuando la parte superior del elemento coincide con la parte superior de la ventana
            end: "bottom top", // Termina cuando la parte inferior del elemento alcanza la parte superior de la ventana
            scrub: true, // Permite un desplazamiento suave
            pin: true, // Fija el elemento durante el scroll
        },
        ease: "power1.out", // Efecto de suavizado
    });
}

var swiper = new Swiper(".default-carousel", {
    modules: [Pagination, Mousewheel, Autoplay], // Incluye Mousewheel
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    grabCursor: true,
    mousewheel: {
        forceToAxis: true, // Restringe al eje principal
        sensitivity: 0.5, // Reduce la sensibilidad del desplazamiento
        thresholdDelta: 20, // Ignora pequeños desplazamientos
    },
    touchRatio: 0.5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 7000, // Retraso entre transiciones (en ms)
        disableOnInteraction: false, // Continúa el autoplay después de la interacción del usuario
    },
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.img');
  const sections = document.querySelectorAll('[data-index]');

  // Comprobar si el ancho de pantalla es mayor a 'md' (768px)
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  // Array de URLs para precargar
  const imageUrls = [
    '/Aliados/Semwesven-01.webp',
    '/Aliados/Semwesven-02.webp',
    '/Aliados/Semwesven-03.webp'
  ];

  // Función para precargar imágenes
  const preloadImages = (urls) => {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  };

  const handleMediaQuery = (e) => {
    if (e.matches) {
      // Precargar imágenes solo si el ancho cumple la condición
      preloadImages(imageUrls);

      // Iniciar IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = entry.target.getAttribute('data-index');

              // Mostrar la imagen correspondiente
              images.forEach((img, i) => {
                img.classList.toggle('visible', i == index);
                img.classList.toggle('hidden', i != index);
              });
            }
          });
        },
        { threshold: 0.5 } // Cambiar cuando el 50% del elemento esté visible
      );

      // Observar cada sección
      sections.forEach((section) => observer.observe(section));
    }
  };

  mediaQuery.addEventListener('change', handleMediaQuery);

  // Llamar a la función inicialmente
  handleMediaQuery(mediaQuery);
});

