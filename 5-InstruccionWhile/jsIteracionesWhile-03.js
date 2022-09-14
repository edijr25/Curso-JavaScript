/*Edicilio Lopez DIV I
While 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	var mensaje = "";
	while (claveIngresada != "utn750")
    {
     claveIngresada = prompt ("La clave es incorrecta, ingrese la clave nuevamente");
	}

	alert ("La clave es correcta");
	
}//FIN DE LA FUNCIÓN
