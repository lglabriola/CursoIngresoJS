/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	//id="numeroUno"
	//id="numeroDos"

	//declaro variables para la suma
	var numeroUno;
	var numeroDos;
	var total;

	//realizo el join del cuadro de de tipeo del html

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	//realizo la operacion de suma con la variable total
	//con la funsion "parseInt(variable)"
	//declarando a cada variable con parseInt()

	total=parseInt(numeroUno)+parseInt(numeroDos);

	alert("La suma es "+total);


}

