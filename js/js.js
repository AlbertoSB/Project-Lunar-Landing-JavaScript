var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;



//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("menu").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover nave
	start();
}

//Definición de funciones
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function pausa(){
	clearInterval(timer);
	clearInterval(v);
	clearInterval(y);
	document.getElementById("play").innerHTML="Reanudar";
	stop();	
	}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	y +=v*dt;
	document.getElementById("altura").innerHTML=y.toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop(); alunizaje();
	}
}
function motorOn(){
	a=-g;
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 100);
	document.getElementById("imgnave").src="img/nave-on.png";
}
function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById("imgnave").src="img/nave-off.png";
}
function actualizarFuel(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;	
	if (fuel<=0) {motorOff();
	document.getElementById("fuel").innerHTML=0;
	}
}

function alunizaje()
{
	if (v <= 5){
		alert("ENHORABUENA\nHas conseguido alunizar con éxito"); reStart();
	}else{
		document.getElementById("imgnave").src="img/explosion.png";
		setTimeout(function(){mostrarAviso()},500);
		function mostrarAviso(){
			alert("GAME OVER\nLamentablemente, la nave iba demasiado rápido y se estrelló contra el suelo"); reStart();
		}
	}	
}

function reStart(){
	var r = confirm("¿Volver a jugar?");
	if (r == true){
    	window.location="index.html";
	}else{
		stop();
	} 
}


