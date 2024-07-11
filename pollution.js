document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.getElementById('pollution1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                svgElement.style.opacity = 1;
            } else {
                svgElement.style.opacity = 0;
            }
        });
    }, {
        threshold: 0.2 
    });

    observer.observe(svgElement);
});