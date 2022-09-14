/*EDICILIO LOPEZ DIV I
SWITCH 04 */
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
    
    switch (mesDelAño){
    	case "Febrero":
    	mensaje = "Este mes tiene 28";
    	break;

    	case "abril":
    	case "Junio":
    	case "Septiembre":
    	case "noviembre":
    	mensaje = "Este mes tiene 30 dias";
    	break;

    	default:
    	mensaje = "Este mes tiene 31 dias";
    	break;
    }	




	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN