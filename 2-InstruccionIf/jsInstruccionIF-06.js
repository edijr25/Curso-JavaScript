/*Edicilio Lopez DIV I
I/I 06
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o a
dolescente (entre 13 y 17 años) o niño (menor a 13 años). 
 */
	function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if (edad <13) {

		alert("Es un niño");
    }
	else
	{	
	if (edad>=13 && edad<18)
	{ 
		alert ("La persona es adolescente.");
	}
  else
  {
  	alert ("Es mayor");
  }
 

  }
}


//FIN DE LA FUNCIÓN


