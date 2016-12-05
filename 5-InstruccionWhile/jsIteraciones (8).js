function Mostrar()
{
	//Enunciado:
	//Al presionar el botón pedir números hasta que el usuario quiera, 
	//sumar los que son positivos y multiplicar los negativos.

	var contador=0;//no lo pide no se usa
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';

	while(respuesta == 'si')
	{
		numeroIngresado = prompt("Ingrese número");
				
		if (numeroIngresado>0) 
		{
			positivo = parseInt(positivo)+parseInt(numeroIngresado);
		}
		else
		{
			negativo = parseInt(negativo)*parseInt(numeroIngresado);
		}


		respuesta=prompt("Ingrese si para continuar");

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN