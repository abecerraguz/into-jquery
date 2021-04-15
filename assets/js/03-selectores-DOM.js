$(function(){

/*
	3 Metodos de selección denttos del DOM
		- parent()
		- children()
		- eq()
		- find()
*/

//USO DE EL METODO PARENT()
var padre = $('.card-body').parent().find('a');
console.log('Muetra al padre---->', padre);

var btnUno = padre.eq(0);
var btnDos = padre.eq(1);
var btnTres = padre.eq(2);

console.log('Muetra el btnUno---->', btnUno);
console.log('Muetra el btnDos---->', btnDos);
console.log('Muetra el btnTres---->',btnTres);

// USO DE EL METODO CHILDREN
var hijos = $('.card').children();
console.log('Muetra los hijos---->', hijos);
console.log('Muetra el primer hijo ---->', hijos.eq(1).find('.card-text'));
console.log('Muetra el segundo hijo ---->', hijos.eq(3).find('.card-text'));
console.log('Muetra el segundo hijo ---->', hijos.eq(5).find('.card-text'));

var textoUno  =  hijos.eq(1).find('.card-text').hide();
var textoDos  =  hijos.eq(3).find('.card-text').hide();
var textoTres =  hijos.eq(5).find('.card-text').hide();

	//EVENTOS
	btnUno.click(function(event) {
		console.log('Evento click del btnUno');
		textoUno.fadeToggle('fast')
	});


	btnDos.click(function(event) {
		console.log('Evento click del btnDos');
		textoDos.fadeToggle('fast')
	});

	btnTres.click(function(event) {
		console.log('Evento click del btnTres');
		textoTres.fadeToggle('fast')
	});

});



//JAVASCRIPT PURO
// var hijosJava = document.getElementsByClassName('btn-primary');
// var textos = document.getElementsByClassName('card-text');

// console.log('hijosJava--->',hijosJava);
// console.log('textos--->',textos);
// var btnUno = hijosJava[0]
// var textUno = textos[0]
// textUno.style.display = "none";
// textUno.style.opacity = "0";
// textUno.style.transition = "all ease-in 0.3s";


// console.log('btnUno--->',btnUno);
// console.log('btnUno--->',textUno);

// btnUno.addEventListener('click',function(e){

// 	this.classList.add("show");
// 	console.log('CLICK--->')
// 	textUno.style.display = "block";
// 	textUno.style.opacity = "1";
// 	textUno.style.transition = "all ease-in 0.3s";
// 	event.preventdefault();
// })



