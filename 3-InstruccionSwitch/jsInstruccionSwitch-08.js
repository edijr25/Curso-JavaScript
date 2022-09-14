/*Edicilio Div I
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
	{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch (destinoIngresado) {
		case "Bariloche":
		mensaje = "Hace frío";
		break;

		case "Cataratas":
		mensaje = "Hace calor";
		break;

		case "Mar del plata":
		mensaje = "Hace calor";
		break;

		case "Ushuaia":
		mensaje = "Hace frío";
		break;
	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN

