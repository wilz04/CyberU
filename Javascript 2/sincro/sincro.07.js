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
