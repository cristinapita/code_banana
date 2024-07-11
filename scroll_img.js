document.addEventListener("DOMContentLoaded", function() {
    var madridContenedor = d3.select("#ai2html-container");

    // Inicialización de imágenes
    d3.select("#img1").classed('hidden', false); 
    d3.select("#img1m").classed('hidden',false)
    d3.select("#img2").classed('hidden', true);  
    d3.select("#img2m").classed('hidden',true)


    // Manejar el evento de 'stepin'
    d3.select("#step-one").on('stepin', function(e){
        console.log('Entering step one');

        d3.select("#img1").classed('hidden', false);  
        d3.select("#img1m").classed('hidden', false);  

        d3.select("#img2").classed('hidden', true); 
        d3.select("#img2m").classed('hidden', true); 

    });

    d3.select("#step-two").on('stepin', function(e){
        console.log('Entering step two');

        d3.select("#img1").classed('hidden', true);  
        d3.select("#img1m").classed('hidden', true);  
        d3.select("#img2").classed('hidden', false);  
        d3.select("#img2m").classed('hidden', false);  

    });

    const scroller2 = scrollama();

    scroller2
        .setup({
            step: "#scrolly_img #article .step",
            offset: 0.55,
            debug: false
        })
        .onStepEnter(function({ element, index, direction }) {
            console.log(`Entering step ${index} from direction ${direction}`);
            if (index === 1) {
                d3.select("#step-one").node().dispatchEvent(new Event('stepin')); // Disparar evento stepin para step-one
            } else if (index === 2) {
                d3.select("#step-two").node().dispatchEvent(new Event('stepin')); // Disparar evento stepin para step-two
            }
        })
        .onStepExit(function({ element, index, direction }) {
            console.log(`Exiting step ${index} to direction ${direction}`);
            // Puedes manejar el evento 'stepout' si es necesario
        });

    function handleResize() {
        var figureHeight = window.innerHeight / 1.1;
        var figureMarginTop = (window.innerHeight - figureHeight) / 2;
        madridContenedor
            .style('height', figureHeight + 'px')
            .style('top', figureMarginTop + 'px');
        scroller2.resize();
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar una vez al cargar

});
