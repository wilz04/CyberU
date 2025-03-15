jQuery

// URL de descarga: http://docs.jquery.com/Downloading_jQuery#Download_jQuery

// Inclusion de la libreria
<script type="text/javascript" src="jquery.js"></script>

// Sintaxis
$(selector).action()

// El evento "ready"
$(document).ready(function(){
  // Criterio...
});

// Selectores
// ej.:
this
"*"
"p"
"p.intro"
".intro"
"p#intro"
"#intro"
":animated" // Selecciona todos los elementos que tienen animacion
":button" // Selecciona todos los elements <button> e <input type="button" />
"ul li:first" // Selecciona el primer elemento <li> dentro del primer <ul>
"ul li:first-child" // Selecciona el primer elemento <li> dentro de algun <ul>
"[href]" // Selecciona todos los elementos con atributo "href"
"[href$='.jpg']"
"[href='#']"
"[href!='#']"
"div#intro .head"
// Mas info: http://www.w3schools.com/jquery/jquery_ref_selectors.asp

// Eventos
// ej.:
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
// Algunos eventos:
$(document).ready(function)
$(selector).click(function)
$(selector).dblclick(function)
$(selector).focus(function)
$(selector).mouseover(function)

// Y se pueden sincronizar, ejecutar al mismo tiempo (util para las animaciones):
$(selector).add(selector).click();

// Mas info: http://www.w3schools.com/jquery/jquery_ref_events.asp

// Efectos
show(speed, callback), hide(speed, callback), toggle(speed, callback), slideDown(speed, callback), slideUp(speed, callback), slideToggle(speed, callback), fadeIn(speed, callback), fadeOut(speed, callback), fadeTo(speed, alpha, callback), animate(properties, speed, easy, callback)
http://www.w3schools.com/jquery/jquery_ref_effects.asp

// Posibles valores para "speed": "slow", "fast", "normal", o milisegundos

// Posibles valores para "alpha": 0 a 1

// Posibles valores para "properties": "width", "opacity", "marginLeft", "fontSize", "borderWidth", "left": "+=50px" entre otros

// Posibles valores para "easy": "easein", "easeout", "linear"

// Animacion
$(selector).animate({params}, [duration], [easing], [callback])
// ej.:
$(selector).animate({left:"100px"}, "slow");

// Accesando el contenido HTML de los elementos
$(selector).html(content)

// Agregando contenido
$(selector).append(content) // Al lado al final
$(selector).prepend(content) // Al lado al principio
$(selector).after(content) // Siguiente linea
//ej.:
$("p").append("CyberU");
// Mas info: http://www.w3schools.com/jquery/jquery_ref_html.asp

// Metodo css()
css(name) // Obtiene el valor de la propiedad CSS
css(name, value) // Asigna el valor a la propiedad CSS
css({properties}) // Asigna multiples valores
// ej.:
$("p").css({"background-color": "yellow", "font-size": "200%"});

// Metodos height() y width()
// ej.: $("#div1").height("200px");
http://www.w3schools.com/jquery/jquery_ref_css.asp

// AJAX
$(selector).load(url, data, callback)
$.ajax(options)
// ej.:
$("div").load('test1.txt');
$.ajax({url:"test1.txt", success:function(result){
	$("div").html(result);
}});
// Mas info: http://www.w3schools.com/jquery/jquery_ref_ajax.asp

// Funciones miscelaneas

// Propiedad parents()
// ej.:
$(this).parents(".ex").hide("slow");

// Metodo data()
$(selector).data(name)
// ej.:
$("div").data("greeting", "Hello World");
window.alert($("div").data("greeting"));

// Metodo removeData() 
$(selector).removeData(name)

// Metodo each() 
$(selector).each(function(index, element))

// Method get() 
var childNode = $(selector).get(index)

// Metodo index() 
$(selector).index() // Obtiene el indice del primer elemento encontrado, relativo a los elementos en el mismo nivel.

// Metodo param() 
var serialized = $.param(object)

// Metodo size() 
$(selector).size() // Len

// Metodo toArray() 
$(selector).toArray()

// Mas info: http://www.w3schools.com/jquery/jquery_ref_misc.asp
