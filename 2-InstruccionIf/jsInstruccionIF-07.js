/*Edicilio López DIV I
I/I 07
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje:
 'Es muy pequeño para NO ser soltero.' */

function mostrar()
{
	var estadoCivil;
	var edad;

    edad = document.getElementById ('txtIdEdad').value;
    edad = parseInt (edad);
	estadoCivil = document.getElementById ('estadoCivil').value;

	if (edad <18 && estadoCivil != "Soltero") {
		alert ("Es muy pequeño para No ser soltero");
	}

	


}//FIN DE LA FUNCIÓN