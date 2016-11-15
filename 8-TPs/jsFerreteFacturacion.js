/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//1.A.
	//id="PrecioUno"
	//id="PrecioDos"
	//id="PrecioTres"

	//declaro variables para la suma
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var Sumar;

	//realizo el join del cuadro de de tipeo del html

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	//realizo la operacion de suma con la variable total
	//con la funsion "parseInt(variable)"
	//declarando a cada variable con parseInt()

	Sumar=parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);

	alert("La suma es "+Sumar);

}
function Promedio () 
{
	//1.B.
	//id="PrecioUno"
	//id="PrecioDos"
	//id="PrecioTres"

	//declaro variables para la suma
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var Sumar
	var Promedio;

	//realizo el join del cuadro de de tipeo del html

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	//realizo la operacion de Promedio con la variable promedio
	//con la funsion "parseInt(variable)"
	//declarando a cada variable con parseInt()

	Sumar=parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);

	Promedio=Sumar/3;

	alert("El Promedio es "+Promedio);
}
function PrecioFinal () 
{
	//1.C.
	//id="PrecioUno"
	//id="PrecioDos"
	//id="PrecioTres"

	//declaro variables para la suma
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var Sumar;
	var PrecioFinal

	//console.log("Hola");
	//console.log(PrecioFinal);
	//console.log("El Precio Final es "+PrecioFinal);

	//realizo el join del cuadro de de tipeo del html

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	//realizo la operacion de suma con la variable total
	//con la funsion "parseInt(variable)"
	//declarando a cada variable con parseInt()

	Sumar=parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);

	PrecioFinal=Sumar*1.21;

	alert("El Precio Final es "+PrecioFinal);
}