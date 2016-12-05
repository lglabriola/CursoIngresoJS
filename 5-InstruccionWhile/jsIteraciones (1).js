function Mostrar()
{
	var contador;

	contador=0;//inicializa el contador.
	document.write("<h1>Bienvenidos</h1>");//título.
	while(contador<10)//cumple la función del MIENTRAS / WHILE.
	{
		contador++;//arranca el contador
		document.write("<br>El contador es: "+contador)//escribe los valores del contador en la página.
		//contador++;//Si coloco el contador despues de escribir(document.write) me cuenta a partir del 0.
	}
	
	document.write("<p>Terminó</p>");//aviso de terminación.


}//FIN DE LA FUNCIÓN