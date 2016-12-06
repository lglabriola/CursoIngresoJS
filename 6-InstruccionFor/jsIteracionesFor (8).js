function Mostrar()
{
	//Enunciado:
	//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.


		var numero;
		var contadorDivisores=0;
		
		numero = prompt("ingrese un numero para saber si es PRIMO");
		numero = parseInt(numero);
		
		
		for(var indice=2;indice<numero;indice++)
		{
			
			if(numero%indice==0)
			{
				contadorDivisores++;
			}

		}

		if(contadorDivisores==0)
		{
			alert("El número es PRIMO")

		}
		else
		{
			alert("Seguí buscando...")
		}

		//document.write(contadorDivisores);



}//FIN DE LA FUNCIÓN