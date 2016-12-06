function Mostrar()
{
		//Enunciado:
		//al presionar el botón pedir la cantidad de veces que quiero repetir 
		//el mensaje "Hola UTN FRA"

		var repeticiones = prompt("ingrese el número de repeticiones");

		repeticiones=parseInt(repeticiones);
		var contador;
		

		for(contador=0;contador<repeticiones;contador++)
		{

			document.write("<br>Hola UTN FRA");
		}



}//FIN DE LA FUNCIÓN