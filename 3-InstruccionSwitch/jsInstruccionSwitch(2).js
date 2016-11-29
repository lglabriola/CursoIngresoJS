function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
	{	//se declara la variable sobre la cual se va a trabajar
		default://si agregamos el default al princio vá break
        	alert("Ya pasamos el frio, ahora calor!!");
         break;
   	 	case "Enero":
       	case "Febrero"://se utiliza este agrupamiento para un solo msj, sin break, solo al final cuando termino el msj..
       	case "Marzo":
       	case "Abril":
       	case "Mayo":
       	case "junio":
       		alert("Falta para el invierno...");
       	 break;
       	case "Julio":
       	case "Agosto":
       		alert("Abrigate que hace frio!!");//no se utiliza brak porque es la ultima sentencia

     }




}//FIN DE LA FUNCIÓN