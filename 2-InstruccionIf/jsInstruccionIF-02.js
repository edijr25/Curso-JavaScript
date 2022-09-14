/*Al ingresar una edad debemos informar solo si la persona es mayor de edad.
Edicilio Lopez DIV I
I/I 02 */

function mostrar()
{
	var edad;
         
         edad = txtIdEdad.value;
         edad = parseInt (edad);

         if (edad>= 18) {

         	alert ("La persona es mayor de edad");

}
}//FIN DE LA FUNCIÓN