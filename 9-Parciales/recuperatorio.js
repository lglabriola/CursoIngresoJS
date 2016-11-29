function ejerciciouno()
{
var ;

//alert ();


}//FIN DE LA FUNCIÓN Ejer 1

function ejerciciodos()
{
//tomo la edad  
var ;

//alert ();


}//FIN DE LA FUNCIÓN Ejer 2

function ejerciciocuatro()
{
//(IF) realizar el algoritmo que pida dos números por prompt, 
//lo sume e informe si el resultado de la suma
//“positivo”,” negativo” o “cero” por document.write.

var numeroUno;
var numeroDos;
var total;

numeroUno=prompt("ingrese primer numero");
numeroDos=prompt("ingrese segundo numero");

total = parseInt(numeroUno) + parseInt(numeroDos);

if (total == 0)
  {
    document.write("El numero es 0");
  }
else 
  {
    if (total > 0)
    {
      document.write("El numero es positivo");
    }
    else
    {
      document.write("El numero es negativo");
    }
  }



}//FIN DE LA FUNCIÓN Ejer 4

function ejerciciocinco()
{
//(SWITCH) realizar el algoritmo que pida un MES por prompt, 
//si es “Diciembre” informar por alert “Se vienen las fiestas” ,
//si es “Enero” informar por alert “comienza el año”, 
//de lo contrario informar por alert “no es enero, ni diciembre” .
var mes;

mes=prompt("ingrese mes (con la priemera letra mayúscula)");

  switch(mes)
  { 
    default:
           alert("No es Enero, ni Diciembre");
         break;
        case 'Enero':
            alert("Comienza el año");
         break;
        case 'Diciembre':
        	alert("Se vienen la fiestas");
         break;
  }

}//FIN DE LA FUNCIÓN Ejer 5