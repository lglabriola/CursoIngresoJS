/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 	
	numeroSecreto=Math.floor((Math.random() * 10) + 1);//random

		alert(numeroSecreto);//alert para verificar
	
	contadorIntentos = 0;//ya le asigno el valor 0 al contador de intentos


}

function verificar()//entra en acción luego de presionar el botón verificar
{
	var numero;
	numero=document.getElementById('numero').value;

	contadorIntentos++;//incremento el numero de intentos
	document.getElementById('intentos').value = contadorIntentos;//se graba el valor en intentos

	if(numeroSecreto>numero)
	{
		alert('El número está mas arriba...');
		

	}
	else
	{
		if(numeroSecreto<numero)
		{
			alert('El número está mas abajo...');
		}
		else
		{
			alert('GANASTE!');
			if(contadorIntentos==1)
			{
				alert('Usted es un Psíquico');
			}
			if(contadorIntentos==2)
			{
				alert('Excelente percepción');
			}
			if(contadorIntentos==3)
			{
				alert('Esto es suerte');
			}
			if(contadorIntentos==4)
			{
				alert('Excelente técnica');
			}
			if(contadorIntentos==5)
			{
				alert('Usted está en la media');
			}
			if(contadorIntentos>5 && contadorIntentos<11)
			{
				alert('Falta técnica');
			}
			else
			{
				alert('Afortunado en el amor!!');
			}

		}	
		
	}
	

	
}
//revisar otra vez..................