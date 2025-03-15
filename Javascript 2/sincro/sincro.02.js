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
