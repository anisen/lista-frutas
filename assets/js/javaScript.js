function frutas(){

	var valor= document.getElementById("lista").value;
	var listas=document.getElementById("contenedor");
	listas.innerHTML+=('<ul><li>'+valor+'</li></ul>');

};