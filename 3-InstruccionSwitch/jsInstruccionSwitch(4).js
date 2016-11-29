function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
	{	//se declara la variable sobre la cual se va a trabajar
		default://si agregamos el default al princio vá break
        	alert("Tiene 30 días");
         break;
   	 	case "Enero":
       	case "Marzo"://se utiliza este agrupamiento para un solo msj, sin break, solo al final cuando termino el msj..
       	case "Mayo":
       	case "Julio":
       	case "Agosto":
       	case "Octubre":
        case "Diciembre":
       		alert("Tiene 31 días...");
       	 break;
       	case "Febrero":
       		alert("Tiene 28 días...");
       	 break;
 
     }	
	



}//FIN DE LA FUNCIÓN