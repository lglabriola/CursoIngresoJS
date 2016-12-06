function Mostrar()
{
		//Enunciado:
		//al presionar el botón pedir un número. Mostar los numeros pares desde el 1 al 
		//número ingresado, y mostar la cantidad de numeros pares encontrados.


		var limite;
		var contadorPares=0;
		
		limite = prompt("ingrese el limite");
		limite = parseInt(limite);
		
		
		for(var indice=1;indice<limite ;indice++)
		{
			
			if(indice%2==0)
			{
				contadorPares++;
			}

		}

		document.write(contadorPares);



}//FIN DE LA FUNCIÓN