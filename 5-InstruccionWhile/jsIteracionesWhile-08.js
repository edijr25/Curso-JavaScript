/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado; 
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
    contador = 0;

	while (respuesta =="si"){

     contador ++;
      numeroIngresado = parseFloat(prompt("Ingrese un numero positivo o negativo"));
		respuesta = prompt("Desea continuar? Escriba 'si' para continuar, 'no' para salir");
		

		if(numeroIngresado>=0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}

	
//FIN DE LA FUNCIÓN