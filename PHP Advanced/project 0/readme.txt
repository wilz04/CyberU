El anteproyecto consiste en, desarrollar un módulo en SQL que calcule probabilidades sobre una red bayesiana, la red bayesiana que hay que implementar va adjunta, en formato PNG, los datos relacionados con ella son los siguientes:

p(a) = 0.01

p(t|a) = 0.05
p(t|!a) = 0.01

p(s) = 0.5

p(l|s) = 0.1
p(l|!s) = 0.01

p(b|s) = 0.6
p(b|!s) = 0.3

p(e|l, t) = 1
p(e|l, !t) = 1
p(e|!l, t) = 1
p(e|!l, !t) = 0

p(x|e) = 0.98
p(x|!e) = 0.05

p(d|e, b) = 0.9
p(d|e, !b) = 0.7
p(d|!e, b) = 0.8
p(d|!e, !b) = 0.1

Fuente: Revista de la Real Estadística

Se trata de una red de diagnóstico donde cada variable representa una características del paciente, por ejemplo si este fuma o no, si ha visitado Asia o no, si ha tenido disnea o no, o si el examen de rayos X es positivo (muestra oclusión en la zona del pulmón) o no, y hay tres condiciones posibles que pueden diagnosticarse: tuberculosis, cáncer de pulmón, o bronquitis.

*El objetivo es escribir un programa que evaluará a posteriori la probabilidad de cada una de las tres posibles enfermedades dada alguna combinación de evidencia.

Por ejemplo, "a" representa la probabilidad de que un paciente haya visitado Asia (0.01). Como consecuencia de ello, la probabilidad de no haber visitado Asia, que es la probabilidad de no "a" es 0.99. Por lo tanto, los valores dados pueden no ser suficientes a la hora de codificar, pero los demás pueden inferirse.

Es importante tomar en cuenta que del mismo modo, la probabilidad de que un paciente tenga tuberculosis, dado que ha visitado Asia, es de 5%, y si no ha visitado Asia, es de 1%. Como consecuencia de esto, la probabilidad de no tener tuberculosis habiendo visitado Asia es del 95%, y la probabilidad de no tener tuberculosis sin haber visitado Asia es de 99%.

*Para probar la solución, se operará sobre datos de pacientes específicos, y el resultado de la operación deberá diagnósticar la probabilidad de que el paciente padezca de cada una de las enfermedades posibles dada la evidencia, ordenado descendentemente.

Por ejemplo, un paciente podría haber visitado Asia y tener un examen de rayos X positivo, este es un posible caso a evaluar con el programa.

El programa puede incluir en tablas estas probabilidades y los algoritmos SQL deben operar con ellas.

Recomiendo probar intensamente el programa, con diferentes condiciones posibles.

Buena suerte.