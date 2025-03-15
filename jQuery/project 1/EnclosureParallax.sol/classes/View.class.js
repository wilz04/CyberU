function LinealFunction(args1, args2) {
	
	var m;
	var b;
	
	(function () {
		m = (args2[1] - args1[1])/(args2[0] - args1[0]);
		b = args1[1] - m*args1[0];
	})();
	
	this.getY = function (x) {
		return m*x + b;
	};
	
}

var View = {
	
	init: function () {
		$(document).ready(View.ready);
	},
	
	ready: function () {
		jQuery.fn.parallax = View.parallax;
		
		var layer1_x = new LinealFunction(
			[231, -10],
			[1031, -20]
		);
		
		var layer1_y = new LinealFunction(
			[8, -20],
			[406, -26]
		);
		
		var layer2_x = new LinealFunction(
			[231, -40],
			[1031, -60]
		);
		
		var layer2_y = new LinealFunction(
			[8, -15],
			[406, -26]
		);
		
		var layer3_x = new LinealFunction(
			[231, 0],
			[1031, -80]
		);
		
		var layer3_y = new LinealFunction(
			[8, 0],
			[406, -40]
		);
		
		// call the plugin
		$("body>.layer").parallax({
			xpos: layer1_x.getY,
			ypos: layer1_y.getY
		});
		
		$("body>.layer>.layer").parallax({
			xpos: layer2_x.getY,
			ypos: layer2_y.getY
		});
		
		$("body>.layer>.layer>.layer").parallax({
			xpos: layer3_x.getY,
			ypos: layer3_y.getY
		});
	},
	
	parallax: function (options) {
		return this.each(function () {
			$(this).mousemove(function (e) {
				var newX = options.xpos(e.pageX);
				var newY = options.ypos(e.pageY);
				$(this).css({
					"background-position": newX + "px " + newY + "px"
				});
			});
		});
	}
	
};
