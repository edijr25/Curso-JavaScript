/*Edicilio Lopez DIV I
I/I 05
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	var edad
	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if (edad < 12 || edad > 17) {

		alert("No es un adolescente");

	}
	


}//FIN DE LA FUNCIÓN