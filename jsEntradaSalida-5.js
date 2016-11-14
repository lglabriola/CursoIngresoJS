/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	//declaro las variables
	var nombre;
	var edad;
	//var nombre=prompt("ingrese nombre"); no va
	//document.getElementById('elNombre').value=nombre; no va
	nombre=document.getElementById('elNombre').value;
	//var edad=prompt("ingrese edad"); no va
	//document.getElementById('laEdad').value=edad; no va
	edad=document.getElementById('laEdad').value;

	alert("Usted se llama "+nombre+" y su edad es "+edad);	
}

//Primero declaro las variables
//Luego llamo a los id del html (elNombre y laEdad)
//Luego en el alerta se define el texto concatenado con las variables