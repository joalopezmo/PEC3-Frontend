1. (1 punto) Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.
    *** tipo de datos a: Se inferira el tipo de datos Numero, ya que la variable se presenta como numero entero.
    *** tipo de datos b: Se inferira el tipo de datos String, ya que la variable se presenta como una cadena de texto.
    *** tipo de datos c: Se inferira el tipo de datos String, ya que la variable se presenta como una cadena de texto.
    *** tipo de datos d: Se inferira el tipo de datos array, ya que aunque la variable se presenta como un array de datos booleanos.
    *** tipo de datos e: Se inferira el tipo de datos objeto, ya que aunque la variable se presenta como una propiedad de un objeto.
    *** tipo de datos e: Se inferira el tipo de datos funcion, ya que aunque la variable se presenta como un parametros, aun faltante de predicado.
    *** tipo de datos g: Se inferira el tipo de datos array, ya que aunque la variable se presenta como un array de un numero.
    *** tipo de datos h: Se inferira el tipo de datos any, que permite el uso de cualquier tipo interno, ya que aunque la variable se presenta como la palabra reservada null.
     
2. (1 punto) ¿Por qué se dispara cada uno de los errores del fichero code3.ts?
    *** La linea 2 dispara error, porque la constante i no se puede reasignar una vez definida.
    *** La linea 6 dispara error por que el dato '5' no se puede ingresar en la constante j puesto que esta se definio como un array de numeros.
    *** La linea 8 dispara error por que en la variable k no se le puede asignar al tipo 'never' un valor de numero.
    *** La linea 11 dispara error por que la variable m se puede asignar ya que la variable l se encuentra definida como 'unknow' y esta no permite operar ni realizar operaciones aritmeticas.


3. (0.5 puntos) ¿Cuál es la diferencia entre una clase y una interface en TypeScript?
    *** La diferencia fundamental entre una clase y una interface reside en un reusabilidad y su objetivo principal de implementacion. La clase se usa para la creacion de objetos y definicion de metodos, mientras que la interfaz se usa para crear una estructura para su aplicacion en entidades y clases. La clase puede ser instanciada mientras que la interfaz no. Durante la compilacion del codigo, el codigo de clase no desaparece mientras que el codigo de la interfaz si desaparece completamente.

**** Modifica el código para conseguir que aparezca una línea roja de error en el IDE avisándote de que se está disparando un TypeError . Toma una captura de pantalla de tu resultado y haz que se muestre dentro del fichero PEC3_Ej2_respuestas_teoria.md (0.5 puntos). Dentro de este mismo documento explica por qué se ha producido esto y qué ventajas tiene ****    

![Captura_de_pantalla](PEC3_Ej2\captura.png)

