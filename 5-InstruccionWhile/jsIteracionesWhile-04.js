/*Edicilio Lopez DIV I
While 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt (numeroIngresado);

	while (numeroIngresado < 0 || numeroIngresado >9)
	{
		numeroIngresado = prompt("El numero ingresado no está entre 0 y 9");
	}
	txtIdNumero.value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN