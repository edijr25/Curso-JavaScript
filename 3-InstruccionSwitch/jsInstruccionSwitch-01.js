/*Edicilio Lopez DIV I
I/S 01 

Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/

function mostrar()
{
	var mes;
	var mensaje;

	mes = document.getElementById ("txtIdMes").value;

	mensaje = "";

	switch (mes){
		case "Enero":
		mensaje = "Que comiences bien el año !!";
		break;
		case "Marzo":
		mensaje = "A clases!!";
		break;
		case "Julio":
		mensaje = "Se vienen las vacaciones !!!.";
		break;
		case "Diciembre":
		mensaje = "Felices fiestas!!!";
		break;

	}
   alert (mensaje);


}//FIN DE LA FUNCIÓN