function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var miRandom=Math.floor((Math.random() * 10) + 1);

	if(miRandom<=10 && miRandom>=9)
	{
		alert('EXCELENTE')
	}
	else{
		if(miRandom>=4 && miRandom<9)
		{
			alert('APROBÓ')
			else
			{
				alert('Vamos, la proxima se puede')
			}
		}
	}

}//FIN DE LA FUNCIÓN

//  REHACER