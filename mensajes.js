window.onload = function() {

    //divs mensajes
    var contenedorMensajes = document.getElementById("mensajeVictoria");
    var iconoMensajeVictoria = document.getElementById("iconoMensajeVictoria");

    //funciones para los mensajes
    function mensaje3zanahorias(){
        contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/3zanahorias/fondo3zanahorias.jpg')";
        iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/3zanahorias/estrellatriplezanahoria.png')"
        botonTirar.setAttribute("disabled", "");
        iconoMensajeVictoria.style.color = "black";

        contenedorMensajes.animate([
            // keyframes
            { backgroundImage: "url('imagenes/mensajesVictoria/3zanahorias/fondo2triplezanahoria.jpg')" }
        ], { 
            duration: 100,
            iterations: 50,
            direction: "alternate-reverse"
        });

        iconoMensajeVictoria.animate([
            // keyframes
            { backgroundSize: "0px 0px"},
            { backgroundSize: "120px 120px" }
        ], { 
            duration: 1000,
            easing: "ease",
            fill: "forwards",
        });

        setTimeout(function() {
            iconoMensajeVictoria.innerHTML = "+10";
        }, 1700);

        setTimeout(function() {
            iconoMensajeVictoria.style.backgroundImage = "none";
            iconoMensajeVictoria.innerHTML = "";
            contenedorMensajes.style.backgroundImage = "none";
            botonTirar.removeAttribute("disabled");
        }, 5000);
    }



    function mensajeZana2horta(){
        contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/1zanahoriay2hortalizas/fondo1zana2horta.jpg')";
        iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/1zanahoriay2hortalizas/iconozana2horta.png')"
        botonTirar.setAttribute("disabled", "");
        iconoMensajeVictoria.style.color = "white";

        contenedorMensajes.animate([
            // keyframes
            { backgroundImage: "url('imagenes/mensajesVictoria/1zanahoriay2hortalizas/fondo21zana2horta.jpg')" }
        ], { 
            duration: 100,
            iterations: 50,
            direction: "alternate-reverse"
        });

        iconoMensajeVictoria.animate([
            // keyframes
            { backgroundSize: "0px 0px"},
            { backgroundSize: "120px 120px" }
        ], { 
            duration: 1000,
            easing: "ease",
            fill: "forwards",
        });

        setTimeout(function() {
            iconoMensajeVictoria.innerHTML = "+3";
        }, 1700);

        setTimeout(function() {
            iconoMensajeVictoria.style.backgroundImage = "none";
            iconoMensajeVictoria.innerHTML = "";
            contenedorMensajes.style.backgroundImage = "none";
            botonTirar.removeAttribute("disabled");
        }, 5000);
    }



    function mensajeZana(){
        contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/1zanahoria/fondozana.jpg')";
        iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/1zanahoria/iconozana.png')"
        botonTirar.setAttribute("disabled", "");
        iconoMensajeVictoria.style.color = "black";

        contenedorMensajes.animate([
            // keyframes
            { backgroundImage: "url('imagenes/mensajesVictoria/1zanahoria/fondo2zana.jpg')" }
        ], { 
            duration: 100,
            iterations: 50,
            direction: "alternate-reverse"
        });

        iconoMensajeVictoria.animate([
            // keyframes
            { backgroundSize: "0px 0px"},
            { backgroundSize: "120px 120px" }
        ], { 
            duration: 1000,
            easing: "ease",
            fill: "forwards",
        });

        setTimeout(function() {
            iconoMensajeVictoria.innerHTML = "+1";
        }, 1700);

        setTimeout(function() {
            iconoMensajeVictoria.style.backgroundImage = "none";
            iconoMensajeVictoria.innerHTML = "";
            contenedorMensajes.style.backgroundImage = "none";
            botonTirar.removeAttribute("disabled");
        }, 5000);
    }


    function mensaje2zanahorias(){
        contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/2zanahorias/fondo2zana.jpg')";
        iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/2zanahorias/icono2zana.png')"
        botonTirar.setAttribute("disabled", "");
        iconoMensajeVictoria.style.color = "black";

        contenedorMensajes.animate([
            // keyframes
            { backgroundImage: "url('imagenes/mensajesVictoria/2zanahorias/fondo2zana2.jpg')" }
        ], { 
            duration: 100,
            iterations: 50,
            direction: "alternate-reverse"
        });

        iconoMensajeVictoria.animate([
            // keyframes
            { backgroundSize: "0px 0px"},
            { backgroundSize: "120px 120px" }
        ], { 
            duration: 1000,
            easing: "ease",
            fill: "forwards",
        });

        setTimeout(function() {
            iconoMensajeVictoria.innerHTML = "+4";
        }, 1700);

        setTimeout(function() {
            iconoMensajeVictoria.style.backgroundImage = "none";
            iconoMensajeVictoria.innerHTML = "";
            contenedorMensajes.style.backgroundImage = "none";
            botonTirar.removeAttribute("disabled");
        }, 5000);
    }


    function mensaje3horta(){
        contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/3hortalizas/fondo3horta.jpg')";
        iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/3hortalizas/icono3hortalizas.png')"
        botonTirar.setAttribute("disabled", "");
        iconoMensajeVictoria.style.color = "black";

        contenedorMensajes.animate([
            // keyframes
            { backgroundImage: "url('imagenes/mensajesVictoria/3hortalizas/fondo3horta2.jpg')" }
        ], { 
            duration: 100,
            iterations: 50,
            direction: "alternate-reverse"
        });

        iconoMensajeVictoria.animate([
            // keyframes
            { backgroundSize: "0px 0px"},
            { backgroundSize: "120px 120px" }
        ], { 
            duration: 1000,
            easing: "ease",
            fill: "forwards",
        });

        setTimeout(function() {
            iconoMensajeVictoria.innerHTML = "+5";
        }, 1700);

        setTimeout(function() {
            iconoMensajeVictoria.style.backgroundImage = "none";
            iconoMensajeVictoria.innerHTML = "";
            contenedorMensajes.style.backgroundImage = "none";
            botonTirar.removeAttribute("disabled");
        }, 5000);
    }


    function mensaje2horta(){
        contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/2hortalizas/fondo2horta.jpg')";
        iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/2hortalizas/icono2hortalizas.png')"
        botonTirar.setAttribute("disabled", "");
        iconoMensajeVictoria.style.color = "white";

        contenedorMensajes.animate([
            // keyframes
            { backgroundImage: "url('imagenes/mensajesVictoria/2hortalizas/fondo2horta2.jpg')" }
        ], { 
            duration: 100,
            iterations: 50,
            direction: "alternate-reverse"
        });

        iconoMensajeVictoria.animate([
            // keyframes
            { backgroundSize: "0px 0px"},
            { backgroundSize: "120px 120px" }
        ], { 
            duration: 1000,
            easing: "ease",
            fill: "forwards",
        });

        setTimeout(function() {
            iconoMensajeVictoria.innerHTML = "+2";
        }, 1700);

        setTimeout(function() {
            iconoMensajeVictoria.style.backgroundImage = "none";
            iconoMensajeVictoria.innerHTML = "";
            contenedorMensajes.style.backgroundImage = "none";
            botonTirar.removeAttribute("disabled");
        }, 5000);
    }

}