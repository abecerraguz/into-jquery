$(function() {


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


 $('#exampleModal').modal('show');


 var frutas =  ['pera', 'manzana', 'frutilla', 'melon']
 console.log('Array Frutas-->',frutas)
 console.log('Array Fruta indice 0-->',frutas[0]);
 console.log('Array Fruta indice 1-->',frutas[1]);
 console.log('Largo del Array Frutas-->', frutas.length)



 var hijos = $('.card-body').parent().eq(0).find('p');
 console.log( 'Hijos de Card 1--->', hijos);



 // CONTROL textUno y btnUno
 // var textUno = hijos.eq(1);
 // var textDos = hijos.eq(4);
 // var textTres = hijos.eq(7);

 // var btnUno = hijos.eq(2);
 // var btnDos = hijos.eq(5);
 // var btnTres = hijos.eq(8);

 // console.log( 'textUno--->',textUno);
 // console.log( 'btnUno--->',btnUno);
 
 // textUno.hide();
 // textDos.hide();
 // textTres.hide();

 // btnUno.click(function(event) {
 // 	console.log('CLick del boton uno');
 // 	textUno.fadeToggle('fast');
 // });

 // btnDos.click(function(event) {
 // 	console.log('CLick del boton dos');
 // 	textDos.fadeToggle('fast');
 // });

 // btnTres.click(function(event) {
 // 	console.log('CLick del boton dos');
 // 	textTres.fadeToggle('fast');
 // });











var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');

        console.log('Boton Siguiente-->')


        var curInputs = $('.form-group input');

        console.log('curInputs--->', 
        	curInputs.eq(0))
    });

    $('div.setup-panel div a.btn-primary').trigger('click');



 var numeros = ['0','1','2','3','4','5',25,'perro',true]
    console.log('Muestra el array numeros--->',numeros)
    var cuerpo = $('body');

    for(var k = 0; k <= numeros.length ; k++){
        console.log('Muesta a i--->',k);

        cuerpo.html(`     
            <!-- Este es un mensaje-->
            <div class="col-md-2">
          <article class="nota">
            <img src="assets/img/homero.jpg" class="img-fluid rounded" alt="">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia tempore ut obcaecati neque ullam aliquam blanditiis rerum omnis quasi, ab commodi placeat sunt debitis, repellat amet officia nisi. Facilis, ipsum?</p>
         </article>
        </div>`);

   
    }

 





 console.log('Se ha cargado el DOM');
});


    var numeros = ['0','1','2','3','4','5',25,'perro',true]
    console.log('Muestra el array numeros--->',numeros)

    document.write('<div class="container"><div class="row">')
    for(var k = 0; k <= numeros.length ; k++){
        console.log('Muesta a i--->',k);
        document.write(`
        <div class="col-md-2">
          <article class="nota">
            <img src="assets/img/homero.jpg" class="img-fluid rounded" alt="">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia tempore ut obcaecati neque ullam aliquam blanditiis rerum omnis quasi, ab commodi placeat sunt debitis, repellat amet officia nisi. Facilis, ipsum?</p>
         </article>
        </div>

        `)
    }
    document.write('</div></div>')





