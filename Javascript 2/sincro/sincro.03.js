/**
 * [03] Implementacion parcial de la clase dinamica Op
 *      Propiedades DOM
 * 
 * @alias Op.class.js
 */

	/**
	 * Almacena el div que contiene el gadget.
	 */
	var canvas;
	
	/**
	 * Cierra el gadget
	 */
	this.close = function () {
		/* [?] */
	};

/* [a]-------------------------------- */
canvas.remove();
/* [b]-------------------------------- */
canvas.parentNode.removeChild(canvas);
/* [c]-------------------------------- */
this.removeChild(canvas);
/* [d]-------------------------------- */
document.removeElementById(canvas.id);
