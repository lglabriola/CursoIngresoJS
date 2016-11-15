/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	//id="sueldo"
	//id="resultado"
	var sueldo;
	var resultado;
	

	//declaro variable con Id
	sueldo=document.getElementById('sueldo').value;

	//Solucion 1 -
	resultado=parseInt(sueldo)*0.1+parseInt(sueldo);
	//Solucion 2 -
	resultado=parseInt(sueldo)*1.1;
	document.getElementById('resultado').value=resultado;
	
	
}
