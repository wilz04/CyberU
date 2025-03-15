<html>
	<head>
		<?php
			/*
			 * Implementar el algoritmo PHP que interprete la informacion en la unica tabla del esquema "pro1" desarrollado en clase y en base a esto
			 * imprima en pantalla un menu como el de ejemplo que esta abajo, en caso de editar la lista de items (los datos en la base de datos), el
			 * algoritmo debera continuar interpretando correctamente el resultado de la consulta, por ejemplo, si agregaramos una fila en la tabla,
			 * el algoritmo deberia pintar el menu como corresponda, incluyendo en su lugar al nuevo item.
			 *
			 * Notese que en la columna '_parent' es donde se relaciona a los items estableciendo la jerarquia.
			 *
			 * Restricciones:
			 * - No se permite el uso de JavaScript, solamente HTML, CSS, PHP, y SQL.
			 * - EL desarrollo debe orientarse a objetos al maximo posible, por lo que por lo menos las clases Config, MenuBar, Menu, y MenuItem deben ser
			 *   implementadas.
			 *
			 * Recomendaciones:
			 * - Se adjunta el siguiente arreglo de datos de prueba, en caso de utilizarlos, estos datos deben ser insertados en la tabla que corresponde.
			 */
			 
			$items = array(
				array('id'=>1, 'text'=>"Home", 'url'=>"home.htm", 'parent'=>-1),
				array('id'=>2, 'text'=>"About Us", 'url'=>"about.htm", 'parent'=>-1),
				array('id'=>3, 'text'=>"Products", 'url'=>"products.htm", 'parent'=>-1),
				array('id'=>4, 'text'=>"Services", 'url'=>"services.htm", 'parent'=>-1),
				array('id'=>5, 'text'=>"Contact", 'url'=>"contact.htm", 'parent'=>-1),
				array('id'=>6, 'text'=>"Sun Glasses", 'url'=>"sunglasses.htm", 'parent'=>3),
				array('id'=>7, 'text'=>"Ophthalmic Glasses", 'url'=>"ophglasses.htm", 'parent'=>3),
				array('id'=>8, 'text'=>"Eye Exam", 'url'=>"exam.htm", 'parent'=>4),
				array('id'=>9, 'text'=>"Models", 'url'=>"ophmodels.htm", 'parent'=>7),
				array('id'=>10, 'text'=>"Add Ons", 'url'=>"addons.htm", 'parent'=>7)
			);
		?>
	</head>
	<body>
		<ul>
			<li>
				<a href="home.htm">Home</a>
				<ul>
				
				</ul>
			</li>
			<li>
				<a href="about.htm">About Us</a>
				<ul>
				
				</ul>
			</li>
			<li>
				<a href="products.htm">Products</a>
				<ul>
					
					<li>
						<a href="sunglasses.htm">Sun Glasses</a>
						<ul>
						
						</ul>
					</li>
					
					<li>
						<a href="ophglasses.htm">Ophthalmic Glasses</a>
						<ul>
							
							<li>
								<a href="ophmodels.htm">Models</a>
								<ul>
								
								</ul>
							</li>
							
							<li>
								<a href="addons.htm">Add Ons</a>
								<ul>
								
								</ul>
							</li>
							
						</ul>
					</li>
					
				</ul>
			</li>
			<li>
				<a href="services.htm">Services</a>
				<ul>
					
					<li>
						<a href="exam.htm">Eye Exam</a>
						<ul>
						
						</ul>
					</li>
					
				</ul>
			</li>
			<li>
				<a href="contact.htm">Contact</a>
				<ul>
				
				</ul>
			</li>
			
		</ul>
	</body>
</html>
