function Mostrar()
{

var sexo = prompt("Ingrese f ó m, para informar sexo.");

while(sexo!="f" && sexo!="m")
{
	sexo = prompt("Código erroneo, ingrese f ó m");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN