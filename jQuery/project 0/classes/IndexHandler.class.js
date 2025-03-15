var IndexHandler = {
	
	init: function () {
		$(document).ready(IndexHandler.onReady);
	},
	
	onReady: function () {
		$("tbody th, td").mouseover(IndexHandler.onCellMouseOver);
	},
	
	onCellMouseOver: function () {
		$("th, td").css("background-color", "");
		$(this).css("background-color", "#ff4040");
		$("th[for*=" + this.id + "], td[for*=" + this.id + "]").css("background-color", "#ff7373");
	}
	
};