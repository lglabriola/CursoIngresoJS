/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	//id="numeroUno"
	//id="numeroDos"
	var numeroUno;
	var numeroDos;
	var total;

	//realizo el join del cuadro de de tipeo del html

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	//realizo la operacion de resta con la variable total
	//con la funsion "parseInt(variable)"
	//declarando a cada variable con parseInt()

	total=parseInt(numeroUno)-parseInt(numeroDos);

	alert("La resta es "+total);
	
}

function multiplicar()
{ 
	//id="numeroUno"
	//id="numeroDos"
	var numeroUno;
	var numeroDos;
	var total;

	//realizo el join del cuadro de de tipeo del html

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	//realizo la operacion de resta con la variable total
	//con la funsion "parseInt(variable)"
	//declarando a cada variable con parseInt()

	total=parseInt(numeroUno)*parseInt(numeroDos);

	alert("La multiplicación es "+total);
}

function dividir()
{
	//id="numeroUno"
	//id="numeroDos"
	var numeroUno;
	var numeroDos;
	var total;

	//realizo el join del cuadro de de tipeo del html

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	//realizo la operacion de resta con la variable total
	//con la funsion "parseInt(variable)"
	//declarando a cada variable con parseInt()

	total=parseInt(numeroUno)/parseInt(numeroDos);

	alert("La división es "+total);
	
}

