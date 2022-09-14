/*Edicilio DIV I
I/I 09
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	var random = Math.random;

	var random = Math.floor((Math.random() * 10) + 1); 

	alert (random);

}//FIN DE LA FUNCIÓN