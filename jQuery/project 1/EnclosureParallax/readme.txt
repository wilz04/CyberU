Proyecto �Enclosure Parallax�

La meta es atraer y mantener activos al mayor n�mero posible de activistas del Movimiento Venus, para esto se necesita renovar la interface gr�fica del sitio Web.

La idea es utilizar la novedosa herramienta jQuery, para la implementaci�n de los efectos gr�ficos relacionados con el movimiento, especialmente en las maquetas que se publiquen en el sitio.

La primera fase del proyecto ser� de prueba, consistir� en desarrollar una sola vista implementando el efecto �parallax�, o de paralaje, sobre una imagen de la maqueta �Total Enclosure System�.

Especificaciones t�cnicas sobre el proyecto

El proyecto debe implementarse sobre la base de c�digo adjunta, solo hace falta editar el archivo �classes/View.class.js�. Dentro de este hay comentarios que indican los lugares espec�ficos donde se debe escribir c�digo.

El acabado final del trabajo, debe mostrar un efecto similar al que se visualiza en la siguiente p�gina de ejemplo:

http://stephband.info/jparallax/

Obs�rvese que en la base adjunta, la vista est� compuesta por tres capas, estas deben moverse en diferentes velocidades, simulando perspectiva seg�n el usuario desplace el mouse sobre la misma vista.

La capa m�s cercana (las plantas), es la que debe moverse m�s r�pido, mientras que la capa m�s lejana (el cielo) es la que debe moverse m�s lento.

Mientras m�s se acerque el puntero del mouse a uno de los bordes de la imagen, m�s deben desplazarse estas capas hacia la direcci�n contraria para mostrar el detalle cerca del margen. Obviamente no deben visualizarse cortes durante el movimiento, o sea, la vista debe dar la impresi�n de que consiste en un bloque con contenido 3d.

Todas estas reglas deben aplicar para los dos ejes de cada capa.

Para lograr el efecto, se debe dise�ar una serie de funciones lineales, correspondientes a las f�rmulas que se�alan los comentarios mencionados anteriormente. En caso de requerir repasar el tema de funciones lineales, es recomendable ir a la siguiente direcci�n:

http://www.zweigmedia.com/MundoReal/tutorialsf0/framesLA.html

Algunas herramientas recomendadas

.mousemove
.pageX
.pageY

Nota: no es requerido que el movimiento sea acelerado, puede ser linealmente relativo al desplazamiento del mouse.
