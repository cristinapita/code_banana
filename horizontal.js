$(function() {
    // Inicializar ScrollMagic
    var controller = new ScrollMagic.Controller();
  
    // Crear la animación horizontal con GSAP
    var horizontalSlide = new TimelineMax()
      .to("#js-slideContainer", 1, { x: "-100%" });
  
    // Crear escena ScrollMagic para pin y enlace de la animación
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper", // Elemento de activación de la escena
      triggerHook: "onLeave", // Activar escena cuando se desplaza fuera del contenedor
      duration: "200%" // Duración de la escena (ajustar según sea necesario)
    })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    .addTo(controller);
  });
  