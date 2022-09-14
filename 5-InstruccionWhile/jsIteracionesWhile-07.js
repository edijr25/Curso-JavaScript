/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var suma;
	var respuesta;
    var promedio;
    var numeroIngresado;


	contador=0;
	suma=0;
	respuesta='si';

	while (respuesta =="si"){

     numeroIngresado= prompt ("Ingrese un numero: ");
     numeroIngresado = parseInt (numeroIngresado);
     suma = suma + numeroIngresado;
     contador++;

		respuesta = prompt ("Desea ingresar otro numero?");
	}

   promedio = suma / contador;

	txtIdSuma.value=suma;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN