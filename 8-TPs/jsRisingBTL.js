/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldo;
	var legajo;
	var nacionalidad;

	edad=prompt("Ingrese Edad entre 18 y 90");

	parseInt('edad');

	while(edad>90 || edad<18)
	{
		edad=prompt("Re-ingrese Edad entre 18 y 90");

	}//la edad esta correcta si no no sale

	document.getElementById('Edad').value=edad;//fin del punto A.

	sexo=prompt("Ingrese M para masculino y F para femenino");

	while(sexo != 'F' && sexo != 'M')
	{
		sexo=prompt("Re-ingrese el sexo por favor");

	}

	document.getElementById('Sexo').value=sexo;//fin del punto B.

	estadoCivil=prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");

	while(estadoCivil > 4 || estadoCivil < 1)
	{
		estadoCivil=prompt("Re-ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");

	}

	switch(estadoCivil)
	{
		case "1":
			estadoCivil="Soltero";
		break;
		case "2":
			estadoCivil="Casado";
		break;
		case "3":
			estadoCivil="Divorciado";
		break;
		case "4":
			estadoCivil="Viudo";
		break;
	}

	document.getElementById('EstadoCivil').value=estadoCivil;//fin del punto C.



	sueldo=prompt("Ingrese Sueldo Bruto no menor a 8000");
	parseInt(sueldo);

	while(sueldo < 8000)
	{
		sueldo=prompt("Re-ingrese Sueldo por favor");

	}

	document.getElementById('Sueldo').value=sueldo;//fin del punto D.

	legajo=prompt("Ingrese Número de legajo: numérico de 4 cifras, sin ceros a la izquierda.");
	parseInt(legajo);

	while(legajo > 9999 || legajo < 1000)
	{
		legajo=prompt("Re-ingrese Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");

	}

	document.getElementById('Legajo').value=legajo;//fin del punto E.

	
	nacionalidad=prompt("Ingrese Nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	while(nacionalidad != 'A' && nacionalidad != 'E' && nacionalidad != 'N')
	{
		nacionalidad=prompt("Re-ingrese la Nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	}

	switch(nacionalidad)
	{
		case "A":
			nacionalidad="Argentino";
		break;
		case "E":
			nacionalidad="Extranjero";
		break;
		case "N":
			nacionalidad="Nacionalizado";
		break;
	}

	document.getElementById('Nacionalidad').value=nacionalidad;//fin del punto F.



 
}
