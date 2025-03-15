var View = {
	
	init: function () {
		$(document).ready(View.ready);
	},
	
	ready: function () {
		jQuery.fn.parallax = View.parallax;
		
		$("body>.layer").parallax({
			xpos: function (xmouse) { return /* formula que calcula la nueva posicion de la capa 1 en el eje x */; },
			ypos: function (ymouse) { return /* formula que calcula la nueva posicion de la capa 1 en el eje y */; }
		});
		
		$("body>.layer>.layer").parallax({
			xpos: function (xmouse) { return /* formula que calcula la nueva posicion de la capa 2 en el eje x */; },
			ypos: function (ymouse) { return /* formula que calcula la nueva posicion de la capa 2 en el eje y */; }
		});
		
		$("body>.layer>.layer>.layer").parallax({
			xpos: function (xmouse) { return /* formula que calcula la nueva posicion de la capa 3 en el eje x */; },
			ypos: function (ymouse) { return /* formula que calcula la nueva posicion de la capa 3 en el eje y */; }
		});
	},
	
	parallax: function (options) {
		/* implementacion del patron parallax */
	}
	
};
