(function (){

	var formulario = document.formulario_registro,
		elementos = formulario.elements;

	// Functions 
	var enviar = function(e) {

		if (!validarInputs()) {

			console.log('Falto validar los inputs');
			e.preventDefault();

		}	
		else if (!validarRadios()) {

			console.log('Falto validar los Radios');
			e.preventDefault();

		}	
		else if (!validarCheckbox()) {

			console.log('Falto validar los Checkbox');
			e.preventDefault();

		}
		else {

			console.log('Envia correctamente');
			// Comentar linea cuando este el formulario listo
			e.preventDefault();

		}

	};

	// Function blur and focus 
	var focusInputs = function () {

		this.parentElement.children[1].className = "label active";
		this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
		// this.parentElement.children[0].className = this.parentElement.children[0]

	}

	var blurInputs = function () {

		if (this.value == "") {

			this.parentElement.children[1].className = "label";
			this.parentElement.children[0].className = this.parentElement.children[0].className + " error";

		}

	} 

	// Events
	formulario.addEventListener("submit", enviar);

	for (var i = 0; i < elementos.length; i++) {

		if (elementos[i].type == "text" || elementos[i].type == "password" || elementos[i].type == "email" ) {

			elementos[i].addEventListener("focus", focusInputs);
			elementos[i].addEventListener("blur", blurInputs);

		}

	} 


}())