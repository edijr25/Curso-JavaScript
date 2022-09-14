/*Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u
 Oeste
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch (destinoIngresado) {
		case "Bariloche":
		mensaje = "Bariloche se encuentra en el norte";
		break;

		case "Cataratas":
		mensaje = "Las cataratas se encuentra en el sur";
		break;

		case "Mar del plata":
		mensaje = "Mar del plata se encuentra en el este";
		break;

		case "Ushuaia":
		mensaje = "Ushuaia se encuentra al oeste";
		break;
	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN