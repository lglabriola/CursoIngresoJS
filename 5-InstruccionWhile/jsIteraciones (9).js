function Mostrar()
{
	//Enunciado:
	//Al presionar el botón pedir números hasta que el usuario quiera, 
	//mostrar el número máximo y el número mínimo.

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numeroIngresado;
	
	var respuesta='si';

	while(respuesta!='no')
	{	
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(contador == 0)
		{
			maximo = numeroIngresado; 
			minimo = numeroIngresado;
		}
		else
		{
			if (numeroIngresado>maximo) 
			{
				maximo = numeroIngresado;
			}
				if (numeroIngresado<minimo)
				{
					minimo = numeroIngresado;
				}


		}
		contador++;
		respuesta = prompt("Ingrese no para salir");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN