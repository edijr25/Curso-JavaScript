/*
Edicilio Lopez DIV I
E/S 07 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUno;
	var numeroDos;
	var resultado; 

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno + numeroDos;


	alert("La suma es "+ resultado );
	
}

function restar()
{var numeroUno;
	var numeroDos;
	var resultado; 

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno - numeroDos;


	alert("La resta es "+ resultado );
	
}

function multiplicar()
{ var numeroUno;
	var numeroDos;
	var resultado; 

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno * numeroDos;


	alert("La multiplicación es "+ resultado );
	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado; 

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno / numeroDos;


	alert("La division es "+ resultado );
}

