/**
 * [05] Implementacion parcial de la clase Op
 *      Propiedades Ajax
 * 
 * @alias Op.class.js
 * @see SincroException.class.js
 */

	/**
	 * Abre una ventana emergente con los recursos de la operacion.
	 * Hay un error en el algoritmo que debe ser identificado.
	 * 
	 * @param sender Componente disparador del evento
	 * @param e Argumentos adicionales del evento
	 */
	function onResourcesClick(sender, e) {
		var req = new XMLHttpRequest();
		req.open("get", "resources.php?id=" + id, true);
		req.send();
		
		if (req.readyState == 4) if (req.status == 0 || req.status == 200) {
			var res = new Popup();
			res.append(req.responseText);
			res.show();
		} else {
			window.alert(SincroException.getMessage(req.status));
		}
	};

/* [a]--------------------------------
 *    Se intenta construir el pop-up cuando la respuesta desde el servidor aun no ha sido recibida
 *    o almenos no hay certeza de esto.
 * [b]--------------------------------
 *    El metodo utilizado es "get" cuando siempre debe utilizarse "post".
 * [c]--------------------------------
 *    El formato con el que los parametros son enviados no es correcto
 *    se debe utilizar "&" en lugar de "?"
 * [d]--------------------------------
 *    El orden de las sentencias es incorrecto,
 *    primero se debe enviar la peticion
 *    para luego abrir el canal de comunicacion.
 */
