var bandera = false;
var turno = 0;
var tab = new Array();
window.onload = function (){
    var iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click", comenzar);
}
function comenzar() 
{
    bandera = true;
    var Retador1 = document.getElementById("Retador 1");
    var Retador2 = document.getElementById("Retador 2");
    if(Retador1.value == ""){
        alert("FALTA EL NOMBRE DEL RETADOR 1");
        Retador1.focus();
    }else {
        if (Retador2.value == ""){
            alert("FALTA EL NOMBRE DEL JUGADOR 2");
            Retador2.focus();
        } else {
            tab [1] = document.getElementById("cuadro1");
            tab [2] = document.getElementById("cuadro2");
            tab [3] = document.getElementById("cuadro3");
            tab [4] = document.getElementById("cuadro4");
            tab [5] = document.getElementById("cuadro5");
            tab [6] = document.getElementById("cuadro6");
            tab [7] = document.getElementById("cuadro7");
            tab [8] = document.getElementById("cuadro8");
            tab [9] = document.getElementById("cuadro9");
            for(var i = 1; i <= 9; i++){
                tab[i].className = "botonInicial"
                tab[i].value = "I"
            }
            turno = 1;
            document.getElementById("TurnoJugador").innerHTML = "ADELANTE RETADOR " + Retador1.value;
        }
    }

}
function colocar(boton){
    if(bandera==true){
        if(turno==1 && boton.value =="I"){
            turno =2;
            document.getElementById("TurnoJugador").innerHTML = "ADELANTE RETADOR " +Retador2.value;
            boton.value = "X";
            boton.className = "botonRetador1";
        }else {
            if (turno == 2 && boton.value=="I"){
                turno =1;
                document.getElementById("TurnoJugador").innerHTML = "ADELANTE RETADOR " +Retador1.value;
                boton.value = "O";
                boton.className = "botonRetador2";  
            }
        }
    }
}
