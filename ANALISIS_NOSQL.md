
## NoSQL vs. SQL: 
**¿Por qué un modelo de documentos como MongoDB es más adecuado para el "Bestiario Digital" que un modelo relacional estricto como el que usaste en la tarea anterior? Enfócate en la flexibilidad del esquema.**

El uso de modelo de documentos de tipo MongoDB resulta mucho más util que el modelo relacional ya que como estamos trabajando con objetivos (Bestias) que cuentan con caracteristicas unicas entre ellos y estructuras de datos de pueden variar en tipo (array, objetos anidados, strings, etc).
Si se usara una base de datos relacional sería necesario crear distintas tablas y varias relaciones, haciendolo más extenso y complicado, mientras que en MongoDB los documentos tienen libertad en sus datos, haciendolo más flexible y facil de mejorar. 

## Tipos de NoSQL: 
**MongoDB es una base de datos orientada a documentos. Investiga y describe brevemente otro tipo de base de datos NoSQL (ej: Clave-Valor, Columnar, Grafo) y propón un escenario donde ese tipo sería más útil que MongoDB.**

Otro ejemplo de bases de datos NoSQL es Amazon DynamoDB, que es una base dea tos clave-valor y de documentos, que se gestiona por el servicio de Amazon Web (AWS). Esta, al igua que MongoBD cuenta con una clave principal para identificar cada uno de sus datos. Sin embargo, cuenta con una estructura más simple que la de MongoBD, lo que la hace ideal para aplicaciones que necesiten consultas rápidas.
DynamoDB puede ser más adecuado en un sistema de comercio en linea global, como Temu, ya que en este se necesita que las consultas como obtener el precio de un artefacto o de verifcar el stock sean muy rápidas y siempre funcionales, incluso si un servidor llegase a fallar.

## Casos de Estudio: 
**Basándote en el material de referencia y tu propia investigación, menciona una aplicación del mundo real (ej: una red social, una plataforma de e-commerce) que utilice MongoDB y explica por qué su elección fue acertada.**

Una de las aplicaciones que utiliza MongoDB es Uber ya que maneja garndes cantidades de datos y transacciones de manera eficiente, además de su alta felxibildiad para manejar distintos tipos de datos como ubicación o requisitos especificos del cliente. Otra de las ventajas que le ofrece es que permite tener multiples copias de los datos en distintos servidores, asi que en caso de que un servidor llegase a fallar, la aplicación sigue funcionando de manera correcta.  
