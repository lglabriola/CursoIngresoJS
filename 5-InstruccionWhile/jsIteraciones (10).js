function Mostrar()
{	
	//Enunciado:
	//Al presionar el botón pedir números hasta que el usuario quiera, mostar:
	//1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
	//4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 
	//7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre 
	//positivos y negativos, (positvos-negativos).

	var contador=0;
	//declarar contadores y variables 
	var numeroIngresado;
	var negativo;
	var positivo;
	var resultado;

	
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroIngresado = prompt("Ingrese número");
				
		if (numeroIngresado<0) 
		{
			resultado = parseInt(numeroIngresado)+parseInt(numeroIngresado);
		}
		else
		{
			if (numeroIngresado>0)
			{
				resultado = parseInt(numeroIngresado)+parseInt(numeroIngresado);
			}
			if 

		}


		respuesta=prompt("Ingrese si para continuar");
	
	}

	document.write("<br>El resultado es: "+resultado);


}//FIN DE LA FUNCIÓN