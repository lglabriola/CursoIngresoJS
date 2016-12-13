function Mostrar()
{
		//Enunciado:
		//al presionar el botón pedir un número. Mostar los numeros pares desde el 1 al 
		//número ingresado, y mostar la cantidad de numeros pares encontrados.


		/*var limite;
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

		*/ //corregido



		//alert("Funciona...");

		var contador=0;
		var numeroRandom;
		var num1=0;
		var num2=0;
		var num3=0;
		var num4=0;
		var num5=0;
		var num6=0;
		var num7=0;
		var num8=0;
		var num9=0;
		var num10=0;
		var total=0;
		var numPar=0;
		var numImpar=0;
		var sumaPar=0;
		var sumaImpar=0;
		var numVuelta=0;
		



		for (contador=0; contador<10000;contador++) 
		{
			total = num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;

			numeroRandom = Math.floor((Math.random() * 10) + 1);
			//console.log(numeroRandom);
			switch(numeroRandom)
				{
					case 1:
						num1++;
						break;
					case 2:
						num2++;
						break;
					case 3:
						num3++;
						break;
					case 4:
						num4++;
						break;
					case 5:
						if (parseInt((num5/total)*100)>=7)
							{
								contador--;
								continue;//llama al for nuevamente
							}
							else
							{
								num5++;
							}
						break;			
					case 6:
						num6++;
						break;
					case 7:
						num7++;
						break;
					case 8:
						num8++;
						break;
					case 9:
						num9++;
						break;
					case 10:
						num10++;
					break;
				}

			if(numeroRandom%2==0)
				{
					numPar++;
					sumaPar=sumaPar+numeroRandom;
				}
				else
				{
					numImpar++;
					sumaImpar=sumaImpar+numeroRandom;
				}

			if(numVuelta==0)
				{

					if(num1>0&&num2>0&&num3>0&&num4>0&&num5>0&&num6>0&&num7>0&&num8>0&&num9>0&&num10>0)
						{
							numVuelta=1;
							numVuelta=contador;
						}
				}

		}





		total = num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;
		console.log("El Total es: "+total);
		console.log("La cantidad de Pares es: "+numPar);
		console.log("El porcentaje de Pares es: "+parseInt((numPar/total)*100)+"%");
		console.log("La cantidad de Impares es: "+numImpar);
		console.log("El porcentaje de Impares es: "+parseInt((numImpar/total)*100)+"%");

		console.log("La suma de los Pares es: "+sumaPar);
		console.log("La suma de los Impares es: "+sumaImpar);
		console.log("En la tirada número: "+numVuelta);

		console.log("Numero 1 salió: "+num1+" veces."+"El porcentaje es: "+parseInt((num1/total)*100)+"%");
		console.log("Numero 2 salió: "+num2+" veces"+"El porcentaje es: "+parseInt((num2/total)*100)+"%");
		console.log("Numero 3 salió: "+num3+" veces"+"El porcentaje es: "+parseInt((num3/total)*100)+"%");
		console.log("Numero 4 salió: "+num4+" veces"+"El porcentaje es: "+parseInt((num4/total)*100)+"%");
		console.log("Numero 5 salió: "+num5+" veces"+"El porcentaje es: "+parseInt((num5/total)*100)+"%");
		console.log("Numero 6 salió: "+num6+" veces"+"El porcentaje es: "+parseInt((num6/total)*100)+"%");
		console.log("Numero 7 salió: "+num7+" veces"+"El porcentaje es: "+parseInt((num7/total)*100)+"%");
		console.log("Numero 8 salió: "+num8+" veces"+"El porcentaje es: "+parseInt((num8/total)*100)+"%");
		console.log("Numero 9 salió: "+num9+" veces"+"El porcentaje es: "+parseInt((num9/total)*100)+"%");
		console.log("Numero 10 salió: "+num10+" veces"+"El porcentaje es: "+parseInt((num10/total)*100)+"%");




	


}//FIN DE LA FUNCIÓN