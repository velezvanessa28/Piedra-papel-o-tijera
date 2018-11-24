let usuarioPunt = 0;
let compuPunt = 0;
const usuarioPunt_span = document.getElementById('usuario-punt');
const compuPunt_span = document.getElementById('compu-punt');
const marcador_div = document.querySelector(".marcador");
const resultado_p = document.querySelector(".resultado > p");
const roca_div = document.getElementById('roca');
const papel_div = document.getElementById('papel');
const tijeras_div = document.getElementById('tijeras');


function getCompuOpcion() {
	const opciones = ['roca', 'papel', 'tijeras'];
	const numeroRandom = (Math.floor(Math.random() * 3));
	return opciones[numeroRandom];
}

function convertToWord(letras) {
	if(letras === "roca") return "Piedra";
	if(letras === "papel") return "Papel";
	return "Tijera";
}
function ganas(opcionusuario, compuOpcion) {
	const opcionusuario_div = document.getElementById(opcionusuario);
	usuarioPunt++;
	usuarioPunt_span.innerHTML = usuarioPunt;
	compuPunt_span.innerHTML = compuPunt;
	resultado_p.innerHTML = convertToWord(opcionusuario) + " le gana a " + convertToWord(compuOpcion) + "<p>" +  " Ganaste!";
	opcionusuario_div.classList.add("verde");
	setTimeout(function() { opcionusuario_div.classList.remove("verde")}, 300);
}

function pierdes(opcionusuario, compuOpcion) {
	const opcionusuario_div = document.getElementById(opcionusuario);
	compuPunt++;
 	usuarioPunt_span.innerHTML = usuarioPunt;
	compuPunt_span.innerHTML = compuPunt;
	resultado_p.innerHTML = convertToWord(opcionusuario) + " pierde a  " + convertToWord(compuOpcion) + "<p>" +  " Pierdes";
	opcionusuario_div.classList.add("rojo");
	setTimeout(function() { opcionusuario_div.classList.remove("rojo")}, 300);
}

function empate(opcionusuario, compuOpcion) {
	const opcionusuario_div = document.getElementById(opcionusuario);
	resultado_p.innerHTML = convertToWord(opcionusuario) + " es igual a " + convertToWord(compuOpcion) + "<p>" +  " Empate";7
	opcionusuario_div.classList.add("gris");
	setTimeout(function() { opcionusuario_div.classList.remove("gris")}, 300); 

}

function juego(opcionusuario) {
	const compuOpcion = getCompuOpcion();
	switch(opcionusuario + compuOpcion) {
		case "rocatijeras":
		case "papelroca":
		case "tijeraspapel":
		ganas(opcionusuario, compuOpcion);
			break;
		case "rocapapel":
		case "papeltijeras":
		case "tijerasroca":
		pierdes(opcionusuario, compuOpcion);
			break;
		case "rocaroca":
		case "papelpapel":
		case "tijerastijeras":
		empate(opcionusuario, compuOpcion);
			break;	

	}
}

function main() {
roca_div.addEventListener('click', function(){
	juego("roca");
	})	
papel_div.addEventListener('click', function(){
	juego("papel");
	})
tijeras_div.addEventListener('click', function(){
	juego("tijeras");
	})
}

main();	
