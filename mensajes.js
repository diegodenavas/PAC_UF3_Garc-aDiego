window.onload = function() {

    //divs mensajes
    var contenedorMensajes = document.getElementById("mensajeVictoria");
    var iconoMensajeVictoria = document.getElementById("iconoMensajeVictoria");

    function mensaje3zanahorias(){
        contenedorMensajes.animate([
            // keyframes
            { backgroundImage: "url('imagenes/mensajesVictoria/3zanahorias/fondo2triplezanahoria.jpg')" }
        ], { 
            
            duration: 100,
            iterations: Infinity,
            direction: "alternate-reverse"
        });

        iconoMensajeVictoria.animate([
            // keyframes
            { backgroundSize: "120px 120px" }
        ], { 
            duration: 1000,
            easing: "ease",
            fill: "forwards",
            delay: 500
        });

        setTimeout(function() {
            iconoMensajeVictoria.innerHTML = "+10";
        }, 1700);
    }



} 