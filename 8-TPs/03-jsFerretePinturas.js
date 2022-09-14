/*Edicilio Lopez DIV I
Tp 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
	var Centrigrados;
    
    Fahrenheit = txtIdTemperatura.value;
    Fahrenheit = parseInt (Fahrenheit);

    Centrigrados = parseInt (Centrigrados);

    Centrigrados = (Fahrenheit - 32) * 5 / 9;

    alert (Fahrenheit + " Fahrenheit son " + Centrigrados + " Centrigrados");

}

function CentigradosFahrenheit () 
{
	var Fahrenheit;
	var Centigrados;

	Centrigrados = txtIdTemperatura.value;
	Centrigrados = parseInt (Centrigrados);

	Fahrenheit = parseInt (Fahrenheit);

	Fahrenheit = (Centrigrados * 9/5) + 32;

	alert (Centrigrados + " Centigrados son "+ Fahrenheit + " Fahrenheit");
	
}
