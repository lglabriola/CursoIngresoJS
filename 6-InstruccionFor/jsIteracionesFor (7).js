function Mostrar()
{
	//Enunciado:
	//al presionar el botón pedir un número. 
	//Mostar los numeros divisores desde el 1 al número ingresado, 
	//y mostar la cantidad de numeros divisores encontrados.

		var numero;
		var contadorDivisores=0;
		
		numero = prompt("ingrese el limite");
		numero = parseInt(numero);
		
		
		for(var indice=2;indice<numero;indice++)
		{
			
			if(numero%indice==0)
			{
				contadorDivisores++;
			}

		}

		document.write(contadorDivisores);



}//FIN DE LA FUNCIÓN