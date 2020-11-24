window.onload = function() {
    
    var array1 = ["aguacate", "ajo", "cebolla", "pepino", "puerro", "tomate", "zanahoria"];
    var array2 = ["aguacate", "ajo", "cebolla", "pepino", "puerro", "tomate", "zanahoria"];
    var array3 = ["aguacate", "ajo", "cebolla", "pepino", "puerro", "tomate", "zanahoria"];

    var botonTirar = document.getElementById("botonTirar");
    var botonSalir = document.getElementById("botonSalir");

    var ranuraMonedas = document.getElementById("ranuraMonedas");

    var slot1 = document.getElementById("slot1");
    var slot2 = document.getElementById("slot2");
    var slot3 = document.getElementById("slot3");

    var bocadillo = document.getElementById("bocadillo");

    var monedas = 0;

    let num1 = random();
    let num2 = random();
    let num3 = random();

    cargarSlots(num1, num2, num3);
    animarTirar();

    function animarTirar(){
        botonTirar.animate([
            // keyframes
            { backgroundColor: "red"}
        ], { 
            duration: 50,
            iterations: Infinity,
            direction: "alternate-reverse"
        });

        botonSalir.animate([
            // keyframes
            { backgroundColor: "purple"}
        ], { 
            duration: 300,
            iterations: Infinity,
            direction: "alternate-reverse"
        });
    }


    //Accion al pulsar el boton de tirar
    botonTirar.addEventListener("click", jugar, false);


    //Accion al pulsar el boton salir
    botonSalir.addEventListener("click", function(){
        alert(monedas);
    }, false);


    //Accion al pulsar la ranura para monedas
    ranuraMonedas.addEventListener("click", function(){

        aux = window.prompt("¿Con cuántas monedas quieres empezar?");
        monedas = parseInt(aux, 10);

        while (Number.isInteger(monedas) == false){
            alert("El valor introducido debe ser un entero positivo");

            aux = window.prompt("¿Con cuántas monedas quieres empezar?");
            monedas = parseInt(aux, 10);
        }

        this.setAttribute("disabled", "");
        botonTirar.removeAttribute("disabled");
        botonSalir.removeAttribute("disabled");
        bocadillo.style.backgroundImage = "none";


    }, false);


    function jugar() {

        let numero1 = random();
        let numero2 = random();
        let numero3 = random();

        cargarSlots(numero1, numero2, numero3);
        comprobar(numero1, numero2, numero3);
    }


    function cargarSlots(numero1, numero2, numero3) {

        slot1.style.backgroundImage = "url('imagenes/" + array1[numero1] + ".png')";
        slot2.style.backgroundImage = "url('imagenes/" + array2[numero2] + ".png')";
        slot3.style.backgroundImage = "url('imagenes/" + array3[numero3] + ".png')";
    }



    function comprobar(numero1, numero2, numero3) {

        if (numero1 == 6 && numero2 == 6 && numero3 == 6) {
            monedas += 10; //tres zanahorias
            mensaje3zanahorias();
        }

        else if (numero1 == numero2 && numero2 == numero3) {
            monedas += 5; //tres hortalizas iguales
            mensaje3horta();
        }

        else if ((numero1 == 6 && numero2 == 6) || (numero1 == 6 && numero3 == 6) || (numero2 == 6 && numero3 == 6)) {
            monedas += 4; //dos zanahorias
            mensaje2zanahorias();
        }

        else if ((numero1 == 6 || numero2 == 6 || numero3 == 6) && (numero1 == numero2 || numero1 == numero3 || numero2 == numero3)) {
            monedas += 3; //una zanahoria y dos hortalizas iguales
            mensajeZana2horta();
        }

        else if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3) {
            monedas += 2; //dos hortalizas iguales
            mensaje2horta();
        }

        else if (numero1 == 6 || numero2 == 6 || numero3 == 6) {
            monedas += 1; //una zanahoria
            mensajeZana();
        }
    }



    //Función para calcular número aleatorio entre 0 y 7
    function random() {
        return Math.round(Math.random() * (6 - 0) + 0);
    }





    //------------------------------------------------------------------------------------------------------------------------------





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