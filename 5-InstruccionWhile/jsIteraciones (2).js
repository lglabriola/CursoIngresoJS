function Mostrar()
{	//mismo ejercicio, pero descendentes
	var contador;

	contador=10;//inicializa el contador.
	document.write("<h1>Bienvenidos</h1>");//título.
	while(contador>0)
	{
		contador--;//arranca el contador
		document.write("<br>El contador es: "+contador)
	}
	
	document.write("<p>Terminó</p>");//aviso de terminación.
}//FIN DE LA FUNCIÓN