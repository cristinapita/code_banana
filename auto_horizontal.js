document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('myImage');
    const trigger = document.querySelector('.trigger');
    let isScrolling = false;

    if (image && trigger) {
        window.addEventListener('scroll', function() {
            const triggerTop = trigger.getBoundingClientRect().top;
            const triggerBottom = trigger.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            // Verificar si el trigger está completamente visible en la ventana
            if (triggerTop >= 0 && triggerBottom <= windowHeight && !isScrolling) {
                isScrolling = true;

                // Calcular el desplazamiento máximo necesario
                const maxScroll = image.offsetWidth - window.innerWidth;

                // Animar el desplazamiento horizontal
                let startTime;
                function scrollAnimation(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    const duration = 2000; // Duración de la animación en milisegundos
                    const scrollAmount = maxScroll * (elapsed / duration);

                    // Aplicar el desplazamiento horizontal
                    image.style.left = -scrollAmount + 'px';

                    // Continuar la animación hasta que alcance la duración
                    if (elapsed < duration) {
                        requestAnimationFrame(scrollAnimation);
                    } else {
                        isScrolling = false;
                        startTime = null;
                    }
                }

                // Iniciar la animación
                requestAnimationFrame(scrollAnimation);
            }
        });
    } else {
        console.error('La imagen o el trigger no se encontraron en el DOM.');
    }
});
