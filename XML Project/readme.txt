Descripci�n del problema

Nuestro patrocinador est� interesado en implementar un formulario din�mico para el c�lculo nutricional de la dieta de sus clientes.

Su deseo es poder actualizar una base de datos desde un sistema existente con los principales suplementos/alimentos recomendados por �l, y que un formulario inteligente sea capaz de leerlos de la base de datos junto con sus propiedades y presentarlos en una hoja de c�lculo listos para aplicar metodolog�as de investigaci�n de operaciones para determinar cu�ntas ingestas de cada uno de los alimentos conviene al cliente tomando en cuenta sus objetivos nutricionistas y el costo de cada producto.

Descripci�n de la soluci�n

Nuestro Proyecto consiste en una p�gina din�mica que, a partir de una base de datos JSON genera un archivo para Microsoft-Office-Excel/OpenOffice-Calc en formato XML-Spreadsheet 2003 (xml).

Al abrir este archivo generado por medio de uno de los programas para hojas de c�lculo mencionados anteriormente (recomendado Calc), debe visualizarse una pantalla similar a la adjuntada (diet.xml) con los datos de la base. Notese que en la adjunta solamente se visualizan cuatro platillos, mientras que la soluci�n programada deber� mostrar todos los que est�n en la base de datos. El prop�sito de esta hoja ser� que el usuario pueda hacer uso f�cilmente de la utilidad Solver incluida en los programas, y que esta se encargue de realizar el c�lculo operacional.

Es importante recalcar que la fila que representa la sumatoria de cada nutriente en la ingesta es calculada por medio de una formula, al igual que el costo total.

La p�gina din�mica debe armar la hoja de c�lculo independientemente de la cantidad de productos que hayan en la base de datos, el usuario deber�a solo variar la fila de los niveles m�nimos permitidos de cada nutriente para un determinado sujeto, abrir la ventana emergente de Solver para especificar las celdas-par�metro y presionar el bot�n de resolver para obtener el equilibrio nutricional/econ�mico de la dieta.

Solver se encargar� de calcular el n�mero de ingestas de cada alimento y asignar� este valor num�rico a la celda correspondiente dentro de la fila para el n�mero de comidas, en el momento el resto de la hoja de c�lculo se actualizar� debido a las formulas en las celdas.

Prueba de la soluci�n

Para probar la soluci�n con los datos de prueba en la base de datos (cyberu.json), se debe ejecutar el procedimiento que le corresponde al usuario, desde Calc, con la hoja abierta desplegar la ventana emergente de Solver haciendo clic en el men� herramientas y clic en la opci�n Solver. Un ejemplo detallado de la forma de rellenar la pantalla est� en la imagen adjunta (solver.png y solver.options.png), notese que la imagen trabaja solamente con los datos de ejemplo, no con todos los presentes en la base de datos como debe hacerlo la soluci�n programada.

El costo total m�s conveniente resultante deber�a ser 8700 colones, para los cuatro platillos de ejemplo.

Recomendaciones

Se recomienda utilizar "nodejs" como servidor Web.
