function ejerciciouno()
{
//realizar el algoritmo que lea la base por ID de un cuadrado e informar 
//el perímetro del mismo por alert.
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
//si son iguales que los multiplique, si el
//primero es mayor al segundo que los reste y si no que los sume, 
//mostrar el resultado por document.write
var numeroUno;
var numeroDos;
var total;

numeroUno=prompt("ingrese primer numero");
numeroDos=prompt("ingrese segundo numero");


if (numeroUno == numeroDos)
  {
    total = parseInt(numeroUno)*parseInt(numeroDos);
  }
else 
  {
    if (numeroUno > numeroDos)
    {
      total = parseInt(numeroUno) - parseInt(numeroDos);
    }
    else
    {
      total = parseInt(numeroUno) + parseInt(numeroDos);
    }
  }

document.write("El resultado es "+total);


}//FIN DE LA FUNCIÓN Ejer 4



function ejerciciocinco()
{
//(SWITCH)realizar el algoritmo que pida un día de la semana por prompt, 
//si es un “Sábado” o “Domingo”
//informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” 
var dia;

dia=prompt("ingrese dia");

  switch(dia)
  { 
    default:
          alert("A trabajar");
         break;
        case 'Sábado':
        case 'Domingo':
        alert("Es Fin de Semana");
         break;
  }



}//FIN DE LA FUNCIÓN Ejer 5