/*
Edicilio Lopez DIV I
E/S 06

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado; 

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno + numeroDos;


	alert("La suma es "+ resultado );
	

}

