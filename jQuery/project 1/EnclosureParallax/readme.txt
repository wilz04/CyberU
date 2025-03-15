Proyecto “Enclosure Parallax”

La meta es atraer y mantener activos al mayor número posible de activistas del Movimiento Venus, para esto se necesita renovar la interface gráfica del sitio Web.

La idea es utilizar la novedosa herramienta jQuery, para la implementación de los efectos gráficos relacionados con el movimiento, especialmente en las maquetas que se publiquen en el sitio.

La primera fase del proyecto será de prueba, consistirá en desarrollar una sola vista implementando el efecto “parallax”, o de paralaje, sobre una imagen de la maqueta “Total Enclosure System”.

Especificaciones técnicas sobre el proyecto

El proyecto debe implementarse sobre la base de código adjunta, solo hace falta editar el archivo “classes/View.class.js”. Dentro de este hay comentarios que indican los lugares específicos donde se debe escribir código.

El acabado final del trabajo, debe mostrar un efecto similar al que se visualiza en la siguiente página de ejemplo:

http://stephband.info/jparallax/

Obsérvese que en la base adjunta, la vista está compuesta por tres capas, estas deben moverse en diferentes velocidades, simulando perspectiva según el usuario desplace el mouse sobre la misma vista.

La capa más cercana (las plantas), es la que debe moverse más rápido, mientras que la capa más lejana (el cielo) es la que debe moverse más lento.

Mientras más se acerque el puntero del mouse a uno de los bordes de la imagen, más deben desplazarse estas capas hacia la dirección contraria para mostrar el detalle cerca del margen. Obviamente no deben visualizarse cortes durante el movimiento, o sea, la vista debe dar la impresión de que consiste en un bloque con contenido 3d.

Todas estas reglas deben aplicar para los dos ejes de cada capa.

Para lograr el efecto, se debe diseñar una serie de funciones lineales, correspondientes a las fórmulas que señalan los comentarios mencionados anteriormente. En caso de requerir repasar el tema de funciones lineales, es recomendable ir a la siguiente dirección:

http://www.zweigmedia.com/MundoReal/tutorialsf0/framesLA.html

Algunas herramientas recomendadas

.mousemove
.pageX
.pageY

Nota: no es requerido que el movimiento sea acelerado, puede ser linealmente relativo al desplazamiento del mouse.
