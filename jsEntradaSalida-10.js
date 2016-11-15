/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	//id="importe"
	//id="resultado"
	var importe;
	var resultado;
	

	//declaro variable con Id
	importe=document.getElementById('importe').value;

	//Solucion 1 -
	resultado=parseInt(importe)*0.75;

	
	document.getElementById('resultado').value=resultado;
	
}
