window.onload = function() {
    
    //Declaración de variables necesarias
    var array1 = ["aguacate", "ajo", "cebolla", "pepino", "puerro", "tomate", "zanahoria"];
    var array2 = ["aguacate", "ajo", "cebolla", "pepino", "puerro", "tomate", "zanahoria"];
    var array3 = ["aguacate", "ajo", "cebolla", "pepino", "puerro", "tomate", "zanahoria"];

    var botonTirar = document.getElementById("botonTirar");
    var botonSalir = document.getElementById("botonSalir");
    var botonReiniciar = document.getElementById("botonReiniciar");

    var contenedorMensajes = document.getElementById("mensajeVictoria");
    var iconoMensajeVictoria = document.getElementById("iconoMensajeVictoria");

    var instrucciones = document.getElementById("instrucciones");

    var listaTiradas = document.getElementById("listaTiradas");
    var lista = "";

    var ranuraMonedas = document.getElementById("ranuraMonedas");

    var slot1 = document.getElementById("slot1");
    var slot2 = document.getElementById("slot2");
    var slot3 = document.getElementById("slot3");

    var bocadillo = document.getElementById("bocadillo");


    //Empieza el juego ----------------------------------------------------
    iconoMensajeVictoria.style.display = "none";

    var monedas = 0;

    cargarSlots(random(), random(), random());
    animarBotones();

    function animarBotones(){
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


    //Accion al pulsar el boton de reiniciar
    botonReiniciar.addEventListener("click", reiniciar, false);


    //Accion al pulsar la ranura para monedas
    ranuraMonedas.addEventListener("click", function(){

        aux = window.prompt("¿Con cuántas monedas quieres empezar?");
        monedas = parseInt(aux, 10);

        while (Number.isInteger(monedas) == false || monedas < 0){
            alert("El valor introducido debe ser un entero positivo");

            aux = window.prompt("¿Con cuántas monedas quieres empezar?");
            monedas = parseInt(aux, 10);
        }

        this.setAttribute("disabled", "");
        botonTirar.removeAttribute("disabled");
        botonSalir.removeAttribute("disabled");
        bocadillo.style.backgroundImage = "none";
        listaTiradas.style.display = "block";
        instrucciones.style.display = "none";
    }, false);


    function jugar() {

        monedas -= 1;

        let numero1 = random();
        let numero2 = random();
        let numero3 = random();

        cargarSlots(numero1, numero2, numero3);
        comprobar(numero1, numero2, numero3);

        setTimeout(function() {
            if(monedas <= 0){
                alert("Te has quedado sin monedas");
                reiniciar();
            }
        }, 200);

        
    }



    function reiniciar(){
        monedas = 0;

        lista = "";
        listaTiradas.innerHTML = lista;
        ranuraMonedas.removeAttribute("disabled");
        botonTirar.setAttribute("disabled", "");
        botonSalir.setAttribute("disabled", "");
        bocadillo.style.backgroundImage = "url('imagenes/bocadilloComic.png')";
        listaTiradas.style.display = "none";
        instrucciones.style.display = "block";
    }



    function cargarSlots(numero1, numero2, numero3) {
        slot1.style.backgroundImage = "url('imagenes/" + array1[numero1] + ".png')";
        slot2.style.backgroundImage = "url('imagenes/" + array2[numero2] + ".png')";
        slot3.style.backgroundImage = "url('imagenes/" + array3[numero3] + ".png')";
    }



    function comprobar(numero1, numero2, numero3) {

        if (numero1 == 6 && numero2 == 6 && numero3 == 6) {
            monedas += 10; //tres zanahorias
            mensajePremio(6);
            lista = "<p>-1; TRIPLE ZANAHORIA: Monedas +10</p>" + lista;
            listaTiradas.innerHTML = lista;
        }

        else if (numero1 == numero2 && numero2 == numero3) {
            monedas += 5; //tres hortalizas iguales
            mensajePremio(5);
            lista = "<p>-1; TRIPLE HORTALIZA: Monedas +5</p>" + lista;
            listaTiradas.innerHTML = lista;
        }

        else if ((numero1 == 6 && numero2 == 6) || (numero1 == 6 && numero3 == 6) || (numero2 == 6 && numero3 == 6)) {
            monedas += 4; //dos zanahorias
            mensajePremio(4);
            lista += "<p>-1; DOBLE ZANAHORIA: Monedas 4</p>" + lista;
            listaTiradas.innerHTML = lista;
        }

        else if ((numero1 == 6 || numero2 == 6 || numero3 == 6) && (numero1 == numero2 || numero1 == numero3 || numero2 == numero3)) {
            monedas += 3; //una zanahoria y dos hortalizas iguales
            mensajePremio(3);
            lista = "<p>-1; DOBLE HORTALIZA Y ZANAHORIA: Monedas +3</p>" + lista;
            listaTiradas.innerHTML = lista;
        }

        else if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3) {
            monedas += 2; //dos hortalizas iguales
            mensajePremio(2);
            lista = "<p>-1; DOBLE HORTALIZA: Monedas +2</p>" + lista;
            listaTiradas.innerHTML = lista;
        }

        else if (numero1 == 6 || numero2 == 6 || numero3 == 6) {
            monedas += 1; //una zanahoria
            mensajePremio(1);
            lista = "<p>-1; ZANAHORIA: Monedas +1</p>" + lista;
            listaTiradas.innerHTML = lista;
        }

        else{
            lista = "<p>-1</p>" + lista;
            listaTiradas.innerHTML = lista;
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
    function mensajePremio(opcion){

        let rutaImagenFondo = "";

        listaTiradas.style.display = "none";
        iconoMensajeVictoria.style.display = "flex";

        switch(opcion){

            case 1:
                contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/1zanahoria/fondozana.jpg')";
                iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/1zanahoria/iconozana.png')"
                botonTirar.setAttribute("disabled", "");
                iconoMensajeVictoria.style.color = "black";
                rutaImagenFondo = "1zanahoria/fondozana2.jpg";
                break;

            case 2:
                contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/2hortalizas/fondo2horta.jpg')";
                iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/2hortalizas/icono2hortalizas.png')"
                botonTirar.setAttribute("disabled", "");
                iconoMensajeVictoria.style.color = "white";
                rutaImagenFondo = "2hortalizas/fondo2horta2.jpg";
                break;

            case 3:
                contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/1zanahoriay2hortalizas/fondo1zana2horta.jpg')";
                iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/1zanahoriay2hortalizas/iconozana2horta.png')"
                botonTirar.setAttribute("disabled", "");
                iconoMensajeVictoria.style.color = "white";
                rutaImagenFondo = "1zanahoriay2hortalizas/fondo21zana2horta.jpg";
                break;

            case 4:
                contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/2zanahorias/fondo2zana.jpg')";
                iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/2zanahorias/icono2zana.png')"
                botonTirar.setAttribute("disabled", "");
                iconoMensajeVictoria.style.color = "black";
                rutaImagenFondo = "2zanahorias/fondo2zana2.jpg";
                break;

            case 5:
                contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/3hortalizas/fondo3horta.jpg')";
                iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/3hortalizas/icono3hortalizas.png')"
                botonTirar.setAttribute("disabled", "");
                iconoMensajeVictoria.style.color = "black";
                rutaImagenFondo = "3hortalizas/fondo3horta2.jpg";
                break;

            case 6:
                contenedorMensajes.style.backgroundImage = "url('imagenes/mensajesVictoria/3zanahorias/fondo3zanahorias.jpg')";
                iconoMensajeVictoria.style.backgroundImage = "url('imagenes/mensajesVictoria/3zanahorias/estrellatriplezanahoria.png')"
                botonTirar.setAttribute("disabled", "");
                iconoMensajeVictoria.style.color = "black";
                rutaImagenFondo = "3zanahorias/fondo2triplezanahoria.jpg";
                break;

        }


        var animacion1 = contenedorMensajes.animate([
            // keyframes
            { backgroundImage: "url('imagenes/mensajesVictoria/" + rutaImagenFondo + "')" }
        ], { 
            duration: 100,
            iterations: 50,
            direction: "alternate-reverse"
        });

        var animacion2 = iconoMensajeVictoria.animate([
            // keyframes
            { backgroundSize: "0px 0px"},
            { backgroundSize: "120px 120px" }
        ], { 
            duration: 1000,
            easing: "ease",
            fill: "forwards",
        });

        setTimeout(function() {
            iconoMensajeVictoria.innerHTML = "+" + opcion;
        }, 1700);

        setTimeout(function() {
            iconoMensajeVictoria.style.backgroundImage = "none";
            iconoMensajeVictoria.innerHTML = "";
            contenedorMensajes.style.backgroundImage = "none";
            botonTirar.removeAttribute("disabled");
            listaTiradas.style.display = "block";
            iconoMensajeVictoria.style.display = "none";
        }, 5000);

    }

}