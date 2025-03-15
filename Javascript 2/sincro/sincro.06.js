/**
 * [06] Implementacion de la clase Ajax
 *      Propiedades Ajax
 * 
 * @alias Ajax.class.js
 */
var Ajax = {
	
	/**
	 * Devuelve el una instancia del objeto Ajax del navegador,
	 * independientemente del navegador.
	 * Se debe sistituir "new XMLHttpRequest()" por "Ajax.getInstance()"
	 */
	getInstance: function () {
		/* [?] */
	}
	
};

/* [a]--------------------------------
 *    Si Internet Explorer es el navegador utilizado,
 *    en lugar de retornar una instancia de la clase "XMLHttpRequest"
 *    se retorna un "pop-up", el objeto creado con el metodo "window.open".
 * [b]--------------------------------
 *    Si Internet Explorer es el navegador utilizado,
 *    en lugar de retornar una instancia de la clase "XMLHttpRequest"
 *    se retorna un elemento DOM de tipo "iframe".
 * [c]--------------------------------
 *    Si Internet Explorer es el navegador utilizado,
 *    en lugar de retornar una instancia de la clase "XMLHttpRequest"
 *    se retorna una instancia de la clase "ActiveXObject".
 * [d]--------------------------------
 *    Si Internet Explorer es el navegador utilizado,
 *    en lugar de retornar una instancia de la clase "XMLHttpRequest"
 *    se crea un elemento DOM de tipo "script" con la direccion a un archivo JSON
 *    que contiene los datos requeridos como valor del atributo "src",
 *    y finalmente se retorna el objeto obtenido.
 */
