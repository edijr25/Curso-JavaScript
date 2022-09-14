/*Edicilio Lopez DIV I

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	

	while (sexoIngresado == 'f')
	{
     sexoIngresado = "El sexo ingresado es femenino.";
	}
	while (sexoIngresado == 'm')
	{
     sexoIngresado = "El sexo ingresado es masculino.";
	}
  

 txtIdSexo.value = sexoIngresado;
}//FIN DE LA FUNCIÓN