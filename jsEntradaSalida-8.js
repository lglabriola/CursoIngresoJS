/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//id="numeroDividendo"
	//id="numeroDivisor"
	var numeroDividendo;
	var numeroDivisor;
	var resto;

	//realizo el join del cuadro de tipeo del html

	numeroDividendo=document.getElementById('numeroDividendo').value;
	numeroDivisor=document.getElementById('numeroDivisor').value;

	//realizo la operacion para sacar el %(resto) con la variable resto
	//con la funsion "parseInt(variable)"
	//declarando a cada variable con parseInt()

	resto=parseInt(numeroDividendo)%parseInt(numeroDivisor);

	alert("El resto es "+resto);
	
}
