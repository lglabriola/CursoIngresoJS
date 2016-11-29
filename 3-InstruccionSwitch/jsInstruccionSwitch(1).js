function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

console.log("mes seleccionado: "+mesDelAño);
//alert("mes seleccionado: "+mesDelAño);

switch(mesDelAño) 
	{
   	 	case "Enero":
    	    alert("Que comiences bien el Año!!");
       	 break;
       	case "Marzo":
    	    alert("A Clases!!");
       	 break;
       	case "Julio":
    	    alert("Se vienen las Vacaciones!!!");
       	 break;
       	case "Diciembre":
    	    alert("Felices Fiestas!!!");
       	 break;
       	default:
        	alert("Seguí soñando.....");
     }

}//FIN DE LA FUNCIÓN