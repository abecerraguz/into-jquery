$(function(){
	console.log('Se ha cargado el DOM');
	// Tipo de datos numericos
	var  numberOne = 3;
	// Tipo de datos string
	var  textOne  = 'Hola soy texto uno';
	// tipo de Datos boleanos
	var diadeHoy = true;

/* 
 	Seleccion de Hijos Metodo children()

 	El metodo children nos devuelve un array, un
 	array lo podemos entender como una variable 
 	que contiene mas de un dato o sea puede guardar N
 	datos. Ejemplo :

 	var frutas = ['pera', 'manzana', 'frutilla', 'melon']
	Cada dato que contiene la variable frutas se puede identificar 
	por su Indice ejemplo:
	
	frutas[0] // Nos devuelve pera
	frutas[1] // Nos devuelve manzana
	frutas[2] // Nos devuelve frutilla
	frutas[3] // Nos devuelve melon

	Pudo guardar infinitos elementos dentro de un array
	También puedo determinar el largo de un array ( Numero de elementos de
	Nuestro Array) 

	En este caso el largo de la varible frutas que es un array sería 4 dado que contiene
	4 datos.
	
 */

 var frutas = ['pera', 'manzana', 'frutilla', 'melon'];
 console.log('numberOne---->', typeof(numberOne));
 console.log('textOne---->', typeof(textOne));
 console.log('diadeHoy---->', typeof(diadeHoy));
 console.log('frutas Array---->', typeof(frutas));
 console.log('frutas Array---->', frutas);
 console.log('fruta manzana---->', frutas[1]);

 	console.log(frutas[0]) // Nos devuelve pera
	console.log(frutas[1]) // Nos devuelve manzana
	console.log(frutas[2]) // Nos devuelve frutilla
	console.log(frutas[3]) // Nos devuelve melon
console.log('Largo del array', frutas.length);

})
 