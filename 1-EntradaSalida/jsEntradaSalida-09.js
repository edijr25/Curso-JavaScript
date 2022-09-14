/*
Edicilio Lopez DIV I
E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var totalConAumento;

	importe = txtIdSueldo.value;
	importe = parseInt(importe);
	porcentaje = importe * 0.10;

    totalConAumento = importe + porcentaje;

   resultado = document.getElementById ("txtIdResultado").value;

   document.getElementById ("txtIdResultado"). value = totalConAumento;
}
