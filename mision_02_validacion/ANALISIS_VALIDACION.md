**PREGUNTAS CLAVE**

**Validación**

**¿Por qué es preferible implementar la validación de datos a nivel de Base de Datos (con JSON Schema) en lugar de hacerlo únicamente en el código de la aplicación (backend)?**

Es mejor impleméntalo a nivel de la Base de Datos ya que el código backend puede llegar a tener mayor probabilidad de vulnerabilidades o ataques. Ademas, con esta implementación desde la base de datos, se asegura de que todos los datos cuplan con el esquema definido, sin tener importancia el lenguaje e programación o la fuente de donde vengan. 

**Relaciones 1-a-1**

**Explicaste la ficha\_veterinaria como una relación 1-a-1 embebida. ¿Por qué crees que este fue un buen enfoque? ¿Bajo qué circunstancias hubieras preferido modelarla como referenciada (en su propia colección)?**

La ficha\_veterinaria es un documento con el que toda criatura deberá de contar, por lo que es probable que sea necesitada constantemente, y al tenerla dentro del mismo documento es facilita su consulta y con ello la obtención de sus datos. Considero que sería necesario modelarla como referenciada en caso de que la ficha tuviese demasiados campos que se deban de llenar ocasionando que la consulta se vuelva lenta en caso de que nisiquiera se necesite la ficha.

**Relaciones 1-a-N:** 

**En tu modelo, usaste dos tipos de relaciones 1-a-N:**

- **Guardián -> Inventario (Embebida)**
- **Guardián -> Criaturas (Referenciada)** 

**Justifica por qué cada decisión de modelado (embebida vs. referenciada) fue la correcta para cada caso.**

En el primer caso se utiliza la relación embebida ya que los datos que se almacenan en el inventario son muy pequeñas y están relacionandos de manera directa con el guardian, por lo que se considera como un dato propio del mismo.

` `Mientras que en el segundo caso sucede todo lo contrario, un guardian podrían almacenar multiples datos y tener muchas criaturas asignadas, por lo que embeberlas podría generar documentos de guardian demasiado grandes y lentos de consultar.


