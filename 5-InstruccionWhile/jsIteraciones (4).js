function Mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 9.");

	while(numero<0 || numero>9)
	{
		alert("El número es incorrecto");
		numero = prompt("RE-ingrese un número entre 0 y 9.");

	}

	alert("El número es correcto");

}//FIN DE LA FUNCIÓN