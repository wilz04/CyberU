// IndexHandler.class.js
// wilz04@gmail.com
var IndexHandler = {
	
	users: null,
	
	init: function () {
		$(document).ready(IndexHandler.onReady);
	},
	
	onReady: function () {
		IndexHandler.users = [
			"Alexander",
			"Christopher",
			"Miguel",
			"Christian",
			"Giovanni",
			"Andr\xE9s",
			"Juan Pablo",
			"Gustavo",
			"Esteban"
		];
		
		$("#btEnter").click(IndexHandler.onEnterClick);
	},
	
	onEnterClick: function () {
		var ready = true;
		var checker = /^\s*$/;
		$("#fEnter input[type='text']").each(function (index) {
			ready = ready && !checker.test($(this).val());
		});
		return ready;
	},
	
	enter: function () {
		// window.alert("Hola a " + IndexHandler.users.join(", ") + "!");
		// window.alert("Hola a " + IndexHandler.users[0] + "!");
		
		var list = document.getElementById("list");
		
		var tr;
		var td;
		
		for (var i in IndexHandler.users) {
			tr = document.createElement("tr"); // $.create("tr");
			td = document.createElement("td");
			
			td.innerHTML = IndexHandler.users[i];
			tr.appendChild(td); // append(td);
			
			list.appendChild(tr);
		}
		
		list.style.border = "1px solid #f00";
	}
	
};