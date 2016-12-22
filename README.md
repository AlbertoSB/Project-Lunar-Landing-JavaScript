# Lenguaje de Marcas y Sistemas de Gestión de la Información
## Tarea 02.4: Project-Lunar-Landing

Para esta tarea se han realizado 3 documentos HTML, 2 CSS y 1 JS. 

Los documentos HTML constan de:
* Una página de inicio.
* Una página con información acerca del creador.
* Una página con instrucciones para manejar la nave.

En cuanto a los CSS tenemos dos versiones:
* Una para escritorios, con una resolución mayor a 961px.
* Una para dispoditivos móviles, con una resolución máxima de 960px.

El JS es el encargado de hacer que la nave se mueva y aterrice o se estrelle, que la nave pueda encender y apagar el motor, que el contador de gasolina se vaya gastando, de medir la altura y la velocidad y finalmente, de mostrar el resultado de nuestro "pilotaje" y pedirnos si queremos volver a jugar de nuevo. 

Para llevar a cabo la tarea he seguido los siguientes pasos:  
1. Búsqueda, edición y optimización de las imágenes a utilizar.  
2. Modificación de la página web proporcionada para la tarea y creación de las 2 restantes.  
3. Modificación de los documentos CSS para escritorio y para dispositivos móviles proporcionados para la tarea.  
4. Validación de los textos.  
5. Minificación de los CSS.  
6. Modificación del documento JavaScript.  

#### 1. Imágenes
Se ha aprovechado la imagen de la nave y el fondo de la tarea anterior y se ha buscado un nuevo suelo lunar y se ha recortado el fondo de la imagen del suelo lunar y colocado uno trasparente en su lugar, eliminando la moyor parte de este fondo para que quedara bien. Todas estas modificaciones se han realizado con GIMP.  
Las 5 imágenes han sido procesadas con PNGGauntlet para que ocupen un menor espacio y así aligerar la carga de la web.  
>En la tarea anterior utilicé el mismo proceso y una de las observaciones era que no las había optimizado, pero PNGGauntlet ya no las reducía más, no sé qué más había que hacer.

#### 2. HTML
Se ha utilizado el documento proporcionado en la tarea y se ha modificado un poco, haciéndolo más parecido al de la tarea anterior.  
A continuación se ha realizado la página _About_, copiando el _head_ de la página principal y el _body_ de la tarea anterior, añadiendo la web de consulta de JavaScript.
Por último, se ha realizado la página _How to Play_ con las instrucciones de uso, copiando el _head_ de la página principal y el _body_ de la tarea anterior, modificando las instrucciones.  
En todas ellas se ha añadido una descripción del contenido en _meta_, cosa de la que carecían en la tarea anterior.

#### 3. CSS
Una vez realizados los documentos HTML, se han modificado las hojas de estilos proporcionadas para que incluyan el fondo, el suelo y la disposición de los menús.

### 4. Validación

Una vez realizado todo, se ha comprobado la validez de los 5 documentos en sus respectivas webs para [HTML](https://validator.w3.org/) y [CSS](https://jigsaw.w3.org/css-validator/), comprobándose que no había errores antes de dar el trabajo como finalizado. 

### 5. Minify

Se ha usado [Minify](https://cssminifier.com/) para reducir el código utilizado en los CSS, y este código, que aparece en una sola línea, se ha separado en varias líneas para facilitar su lectura.  
>En la anterior tarea usé Minify y después indeté el resultado, pero no sé si lo hice bien o si en realidad solo se tenía que dejar la línea obtenida, pues una de las observaciones fue que no usé Minify cuando sí que lo hice.

### 6. JavaScript

Con JavaScript se han conseguido realizar varias cosas (y muchas otras tantas no, las cuales las comentaré posteriormente).  
En primer lugar, se ha logrado que al pulsar la pantalla se cambiara la imagen de la nave, de forma que aparecía con el motor encendido, y al pulsar otra vez la imagen volvía a cambiar y se apagaba.
Después de esto se ha modificado el contador de gasolina para que cuando se agote el motor se apague y no se pueda volver a encender, pues antes el motor podía tener gasolina infinita.
Otro cambio realizado con éxto ha sido la adición de un mensaje al finalizar la partida. Si he ha alunizado a una velocidad deinferior a 5 m/s, se le da la enhorabuena al jjugador, y si la velocidad era superior, se muestra un mensaje de GAME OVER. En cuanquier caso se pide al jugador si quiere volver a jugar otra vez.

### Observaciones del alumno

Quería añadir un botón de Pausa y otro de Reanudar, pero cada vez que lo intentaba la nave dejaba de funcionar, así que eliminé esas opciones del menú. También me hubiera gustado añadir otra dificultad, pero no sabía ni por donde empezar.  


>La verdad es que esperaba que la tarea con JavaScript fuera algo más parecido a lo que fueron los ejercicios propuestos, una cosa más simple que lo que ha sido esta tarea. Para alguien que no había tocado nunca JavaSript, como es mi caso, me ha resultado algo complicado y aun sigo sin comprender algunas partes del código suministrado. He podido hacer algunas de las cosas que se pedían, sin ningún alarde, pero ha sido más por la ayuda vista en el foro que por la información que he podido encontrar por internet. Me da la impresión de que volvería a tener problemas a la hora de realizar otra tarea parecida. Simplemente quería comentarlo y no sé si hubiera sido mejor por otra vía, ya que al ser a distancia puede resultar más difícil dar cierto feedback.


