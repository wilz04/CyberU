Descripción del problema

Nuestro patrocinador está interesado en implementar un formulario dinámico para el cálculo nutricional de la dieta de sus clientes.

Su deseo es poder actualizar una base de datos desde un sistema existente con los principales suplementos/alimentos recomendados por él, y que un formulario inteligente sea capaz de leerlos de la base de datos junto con sus propiedades y presentarlos en una hoja de cálculo listos para aplicar metodologías de investigación de operaciones para determinar cuántas ingestas de cada uno de los alimentos conviene al cliente tomando en cuenta sus objetivos nutricionistas y el costo de cada producto.

Descripción de la solución

Nuestro Proyecto consiste en una página dinámica que, a partir de una base de datos JSON genera un archivo para Microsoft-Office-Excel/OpenOffice-Calc en formato XML-Spreadsheet 2003 (xml).

Al abrir este archivo generado por medio de uno de los programas para hojas de cálculo mencionados anteriormente (recomendado Calc), debe visualizarse una pantalla similar a la adjuntada (diet.xml) con los datos de la base. Notese que en la adjunta solamente se visualizan cuatro platillos, mientras que la solución programada deberá mostrar todos los que estén en la base de datos. El propósito de esta hoja será que el usuario pueda hacer uso fácilmente de la utilidad Solver incluida en los programas, y que esta se encargue de realizar el cálculo operacional.

Es importante recalcar que la fila que representa la sumatoria de cada nutriente en la ingesta es calculada por medio de una formula, al igual que el costo total.

La página dinámica debe armar la hoja de cálculo independientemente de la cantidad de productos que hayan en la base de datos, el usuario debería solo variar la fila de los niveles mínimos permitidos de cada nutriente para un determinado sujeto, abrir la ventana emergente de Solver para especificar las celdas-parámetro y presionar el botón de resolver para obtener el equilibrio nutricional/económico de la dieta.

Solver se encargará de calcular el número de ingestas de cada alimento y asignará este valor numérico a la celda correspondiente dentro de la fila para el número de comidas, en el momento el resto de la hoja de cálculo se actualizará debido a las formulas en las celdas.

Prueba de la solución

Para probar la solución con los datos de prueba en la base de datos (cyberu.json), se debe ejecutar el procedimiento que le corresponde al usuario, desde Calc, con la hoja abierta desplegar la ventana emergente de Solver haciendo clic en el menú herramientas y clic en la opción Solver. Un ejemplo detallado de la forma de rellenar la pantalla está en la imagen adjunta (solver.png y solver.options.png), notese que la imagen trabaja solamente con los datos de ejemplo, no con todos los presentes en la base de datos como debe hacerlo la solución programada.

El costo total más conveniente resultante debería ser 8700 colones, para los cuatro platillos de ejemplo.

Recomendaciones

Se recomienda utilizar "nodejs" como servidor Web.
