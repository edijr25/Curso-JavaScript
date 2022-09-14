/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.X
2-Suma de los positivos.X
3-Cantidad de positivos.X
4-Cantidad de negativos.X
5-Cantidad de ceros.X
6-Cantidad de números pares.X
7-Promedio de positivos.X
8-Promedio de negativos.X

9-Diferencia entre positivos y negativos, (positivos-negativos).

10-De los positivos el mas grande
11-De los negativos el mas chico */
function mostrar()
{
	
	var numeroIngresado;
	var respuesta;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var maximoPositivo;
	var minimoNegativo;

	respuesta = true;
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0; 
	contadorCeros = 0;
	contadorPares = 0;

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un numero: ");52
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaPositivos += numeroIngresado;
			contadorPositivos++;
			if(numeroIngresado>maximoPositivo || contadorPositivos==1)
			{
				maximoPositivo = numeroIngresado;
			}
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos += numeroIngresado;
				contadorNegativos++;
				if(numeroIngresado<minimoNegativo || contadorNegativos==1)
				{
					minimoNegativo = numeroIngresado;
				}

			}
			else
			{
				contadorCeros++;
			}
		}

		if(numeroIngresado%2 == 0)
		{
			contadorPares++;
		}


		respuesta = confirm("Desea ingresar otro numero?");	
	}


	diferencia = contadorPositivos - contadorNegativos;

	document.write("La suma de los negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de los positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de los positivos es: " + contadorPositivos + "<br>");
	document.write("La cantidad de los negativos es: " + contadorNegativos + "<br>");
	document.write("La cantidad de ceros es: " + contadorCeros + "<br>");
	document.write("La cantidad de pares es: " + contadorPares + "<br>");
	
	if(contadorPositivos>0)
	{
		promedioPositivos = sumaPositivos/contadorPositivos;
		document.write("El promedio de los positivos es: " + promedioPositivos + "<br>");
	}
	else
	{
		document.write("No pudo calcularse el promedio de positivos <br>");
	}
	
	if(contadorNegativos>0)
	{
		promedioNegativos = sumaNegativos/contadorNegativos;
		document.write("El promedio de los negativos es: " + promedioNegativos + "<br>");
	}
	else
	{
		document.write("No pudo calcularse el promedio de negativos <br>");
	}

	document.write("La diferencia entre cantidad de positivos y negativos es: " + diferencia + "<br>");

}
