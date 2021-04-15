$(function(){
	// Aqui detecto que el DOM se cargo
	console.log('El DOM se Cargo');
	// Esto es un string 
	var textUno = 'este es un texto';
	// Esto es un numero
	var numeroUno = 25;
	// Los boleano
	var hoyEsLunes = false;
	// Los Array o objetos
	var frutas = ['Pera','Melón', 'Manzana', 'Frutilla']
	// En este array podemos obtener los datos 

	console.log('ARRAY FRUTAS Pera-->', frutas[0] )
	console.log('ARRAY FRUTAS Melón-->', frutas[1] )
	console.log('ARRAY FRUTAS Manzana-->', frutas[2] )
	console.log('ARRAY FRUTAS Frutas-->', frutas[3] )
	console.log('LARGO DEL ARRAY FRUTAS -->', frutas.length)

	// METOS DE SELECCION EN EL DOM
	// parent()

	var padre = $('.card-body').parent().find('a');
	console.log('Muestra el padre-->', padre);

	var btnUno  = padre.eq(0);
	var btnDos  = padre.eq(1);
	var btnTres = padre.eq(3);

	console.log('btnUno--->',btnUno);


	// METODO CHILDREN
	var hijos = $('.card-body').children();
	console.log('Muestra los hijos-->',hijos);
	var btnUnoHijo  = hijos.eq(2);
	var btnDosHijo  = hijos.eq(5);
	var btnTresHijo = hijos.eq(8);

	var textoUno  = hijos.eq(1)
	var textoDos  = hijos.eq(4)
	var textoTres = hijos.eq(7)

	console.log('btnUnoHijo--->',btnUnoHijo);
	console.log('btnDosHijo--->',btnDosHijo);
	console.log('btnTresHijo--->',btnTresHijo);

	// EVENTOS 
	btnUnoHijo.click(function(event) {
		console.log('ESTE ES EL EVENTO CLICK');
		textoUno.fadeToggle('fast');
		alert('Correo enviado')
	});




	$('[data-toggle="tooltip"]').tooltip()
























})