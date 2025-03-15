/**
 * Prueba de seleccion unica, marque la opcion que implemente correctamente el comentario.
 * 
 * @alias Ampliacion para el curso de JavaScript Avanzado: #Sincro
 * 
 * @author ________________________________________________________________
 * @since 2013
 */

/**
 * [01] Signatura de clase dinamica que al ser instanciada representa una operacion.
 *      Su constructor requiere dos parametros, un identificador y un nombre.
 *      Nativa en Javascript.
 * 
 * @alias Op.class.js
 */
/* [a]-------------------------------- */
var Op = {
	
	init: function (id, name) {
		
	}
	
};
/* [b]-------------------------------- */
function Op(id, name) {
	
	(function () {
		
	})();
	
};
/* [c]-------------------------------- */
class Op {
	
	function Op(id, name) {
		
	}
	
}
/* [d]-------------------------------- */
var Op = new Class({
	
	initialize: function (id, name) {
		
	}
	
});

/**
 * [02] Implementacion de la clase OpCollection
 *      (JSON)
 * 
 * @alias OpCollection.class.js
 */
var OpCollection = {
	
	datasource: {
		1: {
			name: "#BanksBoicot",
			desc: "Revolution! on 12/07 let's go everybody to withdraw our money! I call for a Boycott of all BIG Banks Wells Fargo."
		},
		2: {
			name: "#Glasnost",
			desc: "TO EXPOSE the official lies and cover-up surrounding the events of September 11th, 2001 in a way that inspires the people to overcome denial and understand the truth."
		},
	},
	
	/**
	 * Devuelve una instancia de la clase Op
	 * que representa una operacion de la lista de operaciones,
	 * la que este identificada con el parametro.
	 * 
	 * @param id Identificador de la operacion
	 */
	getOpById: function (id) {
		/* [?] */
	}
	
};
/* [a]-------------------------------- */
return new Op(id, OpCollection.datasource[id].name);
/* [b]-------------------------------- */
return OpCollection.datasource[id];
/* [c]-------------------------------- */
return document.getElementById(id);
/* [d]-------------------------------- */
return OpCollection.getOpById(id);

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
canvas.parentNode.removeChild(canvas);
/* [b]-------------------------------- */
canvas.remove();
/* [c]-------------------------------- */
this.removeChild(canvas);
/* [d]-------------------------------- */
document.removeElementById(canvas.id);

/**
 * [04] Implementacion parcial de la clase Op
 *      Propiedades DOM
 * 
<!--
  -- @alias op.html
  -->
<table cellpadding="0" cellspacing="0" border="0">
	<thead>
		<tr>
			<th colspan="2">#Op BanksBoicot</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="2">
				Revolution! on 12/07 let's go everybody to withdraw our money! I call for a Boycott of all BIG Banks Wells Fargo.
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<div><input type="text" id="txAlias" /></div>
				<div><textarea id="txChat"></textarea></div>
				<div>
					<input type="text" id="txMessage" />
					<input type="button" id="btSend" value="Send" />
				</div>
			</td>
		</tr>
		<tr>
			<td width="60" valign="top">Address:</td>
			<td>The idea starts in France, but it's taking place all over the world!</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td colspan="2" align="center">
				<input type="button" id="btEdit" value="Edit" />
				<input type="button" id="btClose" value="Close" />
				<input type="button" id="btResources" value="Resources.." />
			</td>
		</tr>
	</tfoot>
</table>
 * 
 * @alias Op.class.js
 */

	/**
	 * Almacena la tabla ilustrada en el comentario anterior.
	 */
	var layout;
	
	/**
	 * Asigna una direccion a la operacion.
	 * 
	 * @param value Direccion fisica
	 */
	this.setAddress = function (value) {
		/* [?] */
	};

/* [a]-------------------------------- */
layout.tBodies[0].rows[2].cells[1].innerHTML = value;
/* [b]-------------------------------- */
layout.tBody.rows[2].cells[1].innerHTML = value;
/* [c]-------------------------------- */
layout.tBodies[0].rows[3].cells[1].innerHTML = value;
/* [d]-------------------------------- */
layout.tBody.rows[3].cells[1].innerHTML = value;

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
 *    se retorna una instancia de la clase "ActiveXObject".
 * [b]--------------------------------
 *    Si Internet Explorer es el navegador utilizado,
 *    en lugar de retornar una instancia de la clase "XMLHttpRequest"
 *    se retorna un elemento DOM de tipo "iframe".
 * [c]--------------------------------
 *    Si Internet Explorer es el navegador utilizado,
 *    en lugar de retornar una instancia de la clase "XMLHttpRequest"
 *    se retorna un "pop-up", el objeto creado con el metodo "window.open".
 * [d]--------------------------------
 *    Si Internet Explorer es el navegador utilizado,
 *    en lugar de retornar una instancia de la clase "XMLHttpRequest"
 *    se crea un elemento DOM de tipo "script" con la direccion a un archivo JSON
 *    que contiene los datos requeridos como valor del atributo "src",
 *    y finalmente se retorna el objeto obtenido.
 */

 /**
 * Implementacion parcial de la clase ToolBarItem
 * para el manejo de items cuadrados
 * Tecnicas de movimiento
 * 
 * @alias ToolBarItem.class.js
 */

	/**
	 * Almacena la posicion del item en el eje X
	 */
	var x;
	
	/**
	 * Almacena la posicion del item en el eje Y
	 */
	var y;
	
		/**
	 * Almacena el ancho original del item en pixeles
	 */
	var width;
	
	/**
	 * Almacena el alto original del item en pixeles
	 */
	var height;
	
	/**
	 * Retorna el nuevo valor para las propiedades CSS "width" y "height" en pixeles
	 * segun la aproximacion del mouse, toma la coordenada (x o y) en la que hay mas cercania
	 * entre el mouse y el item, tambien en pixeles.
	 * Para la distancia mas lejana, no hay variacion en las dimensiones,
	 * mientras que para la mas cercana hay un aumento de 10px.
	 * Para las distancias intermedias, el aumento es en funcion lineal a esta distancia.
	 * Hay variacion cuando entre el item y el mouse hay una distancia de -100px a 100px.
	 * Se asume un plano cartesiano como sigue:
	 * 
	 * -|--------
	 *  |0,0     
	 *  |        
	 *  |     8,4
	 * 
	 * @param xmouse Coordenada del mouse en el eje X
	 * @param ymouse Coordenada del mouse en el eje Y
	 */
	function getSize(xmouse, ymouse) {
		/* [07] [v][f] */ var mouse = (Math.abs(xmouse - x) <= Math.abs(ymouse - y) ? xmouse : ymouse);
		/* [08] [v][f] */ var litem = (Math.abs(xmouse - x) <= Math.abs(ymouse - y) ? x : y);
		/* [09] [v][f] */ var distc = Math.abs(mouse - litem);
		/* [10] [v][f] */ return (distc <= 100 ? -distc/10 + 10 : 0);
	}
