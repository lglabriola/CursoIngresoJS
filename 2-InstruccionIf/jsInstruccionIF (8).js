function Mostrar()
{
//tomo la edad  
var laEdad;
var estadoCivil;


estadoCivil= document.getElementById('estadoCivil').value;
laEdad= document.getElementById('edad').value;
	

	//console.info("valor de la variable estadoCivil ",estadoCivil);
	if(laEdad>18 && estadoCivil!='Soltero')
	{
		alert("Es soltero y no es menor.");
	}
	


}//FIN DE LA FUNCIÓN