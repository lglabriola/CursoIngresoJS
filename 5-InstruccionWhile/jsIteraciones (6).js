function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

while(contador<5)
{
	contador++;
	numeroIngresado = prompt("Ingrese número " + contador);
	//numeroIngresado = numeroIngresado; Otra opción para validar como entero a la variable
	acumulador = parseInt(acumulador)+parseInt(numeroIngresado);

}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN