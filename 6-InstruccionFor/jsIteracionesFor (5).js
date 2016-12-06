function Mostrar()
{
	//Enunciado:
	//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.

		var numero = prompt("ingrese el número");
		
		parseInt(numero);
		
		for(; ;)
		{
			if(numero==9)
			{
				break;
			}
			else
			{
				numero =prompt("Vuelva a ingresar el número");
			}
			

		}

		alert("Acertaste!!");//Esto se lo agregué yo...;)

	



}//FIN DE LA FUNCIÓN