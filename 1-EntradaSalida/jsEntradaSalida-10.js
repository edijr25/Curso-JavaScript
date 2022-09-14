/*
Edicilio lopez DIV I
E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var totalConDescuento;

	importe = txtIdImporte.value;
	importe = parseInt(importe);
	porcentaje = importe * 0.25;

    totalConDescuento = importe - porcentaje

   resultado = document.getElementById ("txtIdResultado").value;

   document.getElementById ("txtIdResultado"). value = totalConDescuento;
}
