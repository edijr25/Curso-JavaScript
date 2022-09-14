/*Edicilio Lopez Div I

Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
	var mes;
	var mensaje;

	mes = document.getElementById ("txtIdMes").value;

	mensaje = "";

	switch (mes){
		case "Julio":
		case "agosto":
		mensaje = "Abrigate que hace frio.";
		break;

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "abril":
		case "Mayo":
		case "Junio":
		mensaje = "falta para el invierno."
        break;
        default:
        mensaje = "Ya pasamos el frio, ahora calor"
        break;
        
	}
   alert (mensaje);

}//FIN DE LA FUNCIÓN