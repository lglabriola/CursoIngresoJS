/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*
	concepto de variable
	concatenacion
	prompt
	*/

	var producto;
	//valor de la variable por defecto
	producto="samsung";
	//solicitud de carga de la variable, valor por defecto
	producto=prompt("ingrese marca","sin marca");

	var precio=prompt("ingrese precio","999")

	//concatenacion de variables y textos
	alert("su producto es: "+producto+" y su precio es: "+precio);	
}

