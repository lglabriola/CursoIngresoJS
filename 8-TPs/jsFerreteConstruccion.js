/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//2.A.
	//id="Largo"
	//id="Ancho"
	//id="Radio"

	//declaro variables para la suma
	var Largo;
	var Ancho;
	var Sumar;
	var Rectangulo;
	

	//realizo el join del cuadro de de tipeo del html

	Largo=document.getElementById('Largo').value;
	Ancho=document.getElementById('Ancho').value;
	


	Sumar=parseInt(Largo*2)+parseInt(Ancho*2);

	Rectangulo=Sumar*3;//tres vueltas de alambre
	

	alert("La cantidad de alambre es "+Rectangulo);
}
function Circulo () 
{
	//2.B.
	//id="Ancho"
	//id="Radio"

	//declaro variables para la suma
	var Circulo;
	var Radio;
	var Total;
	

	//realizo el join del cuadro de de tipeo del html


	Radio=document.getElementById('Radio').value;
	


	Circulo=parseInt(3.14*Radio*2);

	Total=Circulo*3;
	

	alert("La cantidad de alambre es "+Total);
}
function Materiales () 
{
	
}