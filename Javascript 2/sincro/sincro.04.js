/**
 * [04] Implementacion parcial de la clase Op
 *      Propiedades DOM
 * 
<!--
  -- @alias op.html
  -->
<table cellpadding="0" cellspacing="0" border="0">
	<thead><tr><th colspan="2">#Op BanksBoicot</th></tr></thead>
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
layout.tBody.rows[2].cells[1].innerHTML = value;
/* [b]-------------------------------- */
layout.tBodies[0].rows[2].cells[1].innerHTML = value;
/* [c]-------------------------------- */
layout.tBodies[0].rows[3].cells[1].innerHTML = value;
/* [d]-------------------------------- */
layout.tBody.rows[3].cells[1].innerHTML = value;
