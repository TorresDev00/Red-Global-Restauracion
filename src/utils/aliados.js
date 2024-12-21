import "@justinribeiro/lite-youtube";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper } from "swiper";
import {
  Pagination,
  Mousewheel,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import AOS from "aos"; // Importa AOS
import { Modal, Ripple, initTWE } from "tw-elements";

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth < 768;
  AOS.init({
    duration: 1000,
    offset: isMobile ? 0 : 1000, // Ajusta según lo necesites
    easing: "ease-in-out", // Suavizado
    once: true, // Anima solo una vez
    mirror: true,
    anchorPlacement: "bottom-bottom",
  });

  initTWE({ Modal, Ripple });

  gsap.registerPlugin(ScrollTrigger);

  if (window.innerWidth > 1024) {
    gsap.set(".animated-image", { scale: 1.45 });

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

  let swiper = new Swiper(".default-carousel", {
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

  const images = document.querySelectorAll(".img");
  const sections = document.querySelectorAll("[data-index]");

  // Comprobar si el ancho de pantalla es mayor a 'md' (768px)
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  // Array de URLs para precargar
  const imageUrls = [
    "/Aliados/Semwesven-01.webp",
    "/Aliados/Semwesven-02.webp",
    "/Aliados/Semwesven-03.webp",
  ];

  // Función para precargar imágenes
  const preloadImages = (urls) => {
    urls.forEach((url) => {
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
              const index = entry.target.getAttribute("data-index");
  
              // Mostrar la imagen correspondiente
              images.forEach((img, i) => {
                if (i == index) {
                  // Asegurarse de eliminar "hidden" antes de añadir "visible"
                  img.style.transition = "opacity 1s ease-in-out";
                  img.style.opacity = 1;
                  img.style.zIndex = 1;
                  img.style.pointerEvents = "auto"
                } else {
                  // Ocultar imagen y permitir transición
                  img.style.transition = "opacity 1s ease-in-out";
                  img.style.opacity = 0;
                  img.style.zIndex = 0;
                  img.style.pointerEvents = "none";
                }
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
  
  mediaQuery.addEventListener("change", handleMediaQuery);
  
  // Llamar a la función inicialmente
  handleMediaQuery(mediaQuery);
  

   let swiperCrecer = new Swiper(".mySwiper", {
    modules: [Pagination, EffectCoverflow, Mousewheel],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
  });
 
  new Swiper(".swiper-aliados", {
    modules: [Pagination, Mousewheel, Autoplay],
    loop: true,
    slidesPerView: 3, // Muestra 3 diapositivas al mismo tiempo
    spaceBetween: 20, // Espacio entre diapositivas (opcional)
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    grabCursor: true,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 0.5,
      thresholdDelta: 20,
    },
    touchRatio: 0.5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
