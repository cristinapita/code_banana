document.addEventListener('DOMContentLoaded', function() {
    const svg = document.getElementById('mySvg');
    const content = document.querySelector('.content');
    const paths = svg.querySelectorAll('path');
    
    // Posición inicial deseada del SVG
    const initialSvgPosition = svg.getBoundingClientRect().top + window.scrollY;

    // Almacena el color original de cada path del SVG
    const originalColors = [];
    paths.forEach(path => {
        const fill = path.getAttribute('fill');
        originalColors.push(fill);
    });

    function updateScrollSettings() {
        let offset = 200;
        let stopOffset = 20;
        
        // Detecta el tamaño de la pantalla y ajusta los valores
        if (window.matchMedia("(max-width: 768px)").matches) {
            // Configuración para pantallas pequeñas (móviles)
            offset = 100;
            stopOffset = 100;
        } else {
            // Configuración para pantallas grandes (escritorio)
            offset = 200;
            stopOffset = 20;
        }

          // Detecta el tamaño de la pantalla y ajusta los valores
          if (window.matchMedia("(max-width: 400px)").matches) {
            // Configuración para pantallas pequeñas (móviles)
            offset = 50;
            stopOffset = 500;
        } else {
            // Configuración para pantallas grandes (escritorio)
            offset = 200;
            stopOffset = 20;
        }
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const contentHeight = content.clientHeight - window.innerHeight;
            const svgHeight = svg.clientHeight;
            const maxScroll = contentHeight - svgHeight - stopOffset;
            const svgNewPosition = Math.max(0, scrollPosition - initialSvgPosition) + offset;
            
            if (scrollPosition <= initialSvgPosition) {
                svg.style.top = `${initialSvgPosition}px`;
            } else if (svgNewPosition >= maxScroll) {
                svg.style.top = `${maxScroll}px`;
            } else {
                svg.style.top = `${svgNewPosition}px`;
            }

            if (svgNewPosition >= maxScroll) {
                paths.forEach((path, index) => {
                    path.setAttribute('fill', '#000000');
                });
            } else {
                paths.forEach((path, index) => {
                    path.setAttribute('fill', originalColors[index]);
                });
            }
        });
    }

    // Ejecuta la función al cargar la página y al cambiar el tamaño de la ventana
    updateScrollSettings();
    window.addEventListener('resize', updateScrollSettings);
});
