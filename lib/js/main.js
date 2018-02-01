(function (){

	var contact = document.getElementById("contact"),
		form = document.getElementById("form"),
		close = document.getElementById("close");


	var open_form = function () {
		form.classList.add("openForm");
	}
	var close_form = function () {
		form.classList.remove("openForm");
	}


	contact.addEventListener("click", open_form);
	close.addEventListener("click", close_form);


	

}());