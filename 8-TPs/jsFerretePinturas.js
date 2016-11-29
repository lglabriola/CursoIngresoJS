/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//id="Temperatura"
	var temperatura;
	var fahrenheitcentigrados;

	temperatura           = document.getElementById("Temperatura").value;
	fahrenheitcentigrados = (temperatura -32) / 9 * 5;

	alert("La cantida de grados Centígrados"+fahrenheitcentigrados);


	
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var fahrenheitcentigrados;

	temperatura           = document.getElementById("Temperatura").value;
	fahrenheitcentigrados = temperatura * 9 / 5 + 32;

	alert("La cantida de grados Centígrados "+fahrenheitcentigrados);


}
