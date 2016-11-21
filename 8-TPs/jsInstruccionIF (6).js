function Mostrar()
{
//tomo la edad  
var laEdad;

laEdad= document.getElementById('edad').value;

		/*if(laEdad>12 && laEdad<18)//está entre "&&"
		{
			alert("Es Adolescente");//verdadero
		}
			

			else
				{
					if(laEdad>=18)
					{
					alert("Es Mayor de Edad");//verdadero
				}
				else
				{
				alert("Es Menor");//falso
				}
		}*/ //tarda mas de resolver...
		if(laEdad>17)
			{
				alert("Es Mayor de Edad");
			}//if(laEdad>17)
			else 
			{
				if(laEdad<13)
				{
				alert("Es Menor");
				}//if(laEdad<13)
				else
				{
					alert("Es Adolescente")
				}

			}//misma solucion mas simple



}//FIN DE LA FUNCIÓN