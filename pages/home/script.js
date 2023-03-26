var texto = "Hello, welcome to my website! sdsdsdsdsdsdsdsdsds";

function digitar(i, texto, elementoTexto, elementoCursor) {
	if (i < texto.length) {
		elementoTexto.innerHTML += texto.charAt(i);
		elementoCursor.style.left = elementoTexto.offsetWidth + "px";
		i++;
		setTimeout(function() { digitar(i, texto, elementoTexto, elementoCursor); }, 50);
	}
}

var elementoTexto = document.getElementById("texto");
var elementoCursor = document.getElementById("cursor");
digitar(0, texto, elementoTexto, elementoCursor);
