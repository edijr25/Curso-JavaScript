/*Edicilio Lopez DIV I
I/I 10
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{
	var random = Math.random;

	var random = Math.floor((Math.random() * 10) + 1); 

	if (random >=9) {
		alert (random +" EXCELENTE");
	}
	else
    {if (random >4 && random <9) {
    	alert (random +" APROBÓ");
    }
    else{
	alert (random + " Vamos, la proxima se puede");
}
 }

}//FIN DE LA FUNCIÓN