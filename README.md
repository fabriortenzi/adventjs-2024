# Challenges

## Reto #1: 🎁 ¡Primer regalo repetido!

Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

## Reto #2: 🖼️ Enmarcando nombres

Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

## Reto #3: 🏗️ Organizando el inventario

Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

## Reto #4: 🎄 Decorando el árbol de Navidad

¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

## Reto #5: 👞 Emparejando botas

Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

- `type` indica si es una bota izquierda (I) o derecha (R).
- `size` indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

## Reto #6: 📦 ¿Regalo dentro de la caja?

Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco `*`, está dentro de la caja.

La caja tiene un regalo (`*`) y cuenta como dentro de la caja si:

- Está rodeada por `#` en los bordes de la caja.
- El `*` no está en los bordes de la caja.

Ten en cuenta entonces que el `*` puede estar dentro, fuera o incluso no estar. Y debemos devolver `true` si el `*` está dentro de la caja y `false` en caso contrario.

## Reto #7: 👹 El ataque del Grinch

¡El **grinch** 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo _Pheralb_ ha detectado el patrón que ha seguido el grinch para desordenarlos. **Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:**

Recibirás un string que contiene letras y paréntesis.<br>
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.<br>
Si hay paréntesis anidados, resuelve primero los más internos.<br>
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.

## Reto #8: 🦌 La carrera de renos

**¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa!** 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en **formato isométrico.**

La información que recibes:

- `indices`: Un array de enteros que representan el progreso de cada reno en la pista:
- `0`: El carril está vacío.
- **Número positivo**: La posición actual del reno desde el inicio de la pista.
- **Número negativo**: La posición actual del reno desde el final de la pista.
- `length`: La longitud de cada carril.

Devuelve un string que represente la pista de la carrera:

- Cada carril tiene exactamente `length` posiciones llenas de nieve (`~`).
- Cada reno se representa con la letra `r`.
- Los carriles están numerados al final con `/1`, `/2`, etc.
- La vista es **isométrica**, por lo que los carriles inferiores están desplazados hacia la derecha.

## Reto #9: 🚂 El tren mágico

Los elfos están jugando con un **tren 🚂 mágico que transporta regalos.** Este tren se mueve en un tablero representado por un **array de strings.**

El tren está compuesto por una locomotora (`@`), seguida de sus vagones (`o`), y debe recoger frutas mágicas (`*`) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros `board` y `mov`.

`board` es un array de strings que representa el tablero:

- `@` es la locomotora del tren.
- `o` son los vagones del tren.
- `*` es una fruta mágica.
- `·` son espacios vacíos.

`mov` es un string que indica el próximo movimiento del tren desde la cabeza del tren `@`:

- `'L'`: izquierda
- `'R'`: derecha
- `'U'`: arriba
- `'D'`: abajo.

Con esta información, debes devolver una cadena de texto:

- `'crash'`: Si el tren choca contra los bordes del tablero o contra sí mismo.
- `'eat'`: Si el tren recoge una fruta mágica (`*`).
- `'none'`: Si avanza sin chocar ni recoger ninguna fruta mágica.

## Reto #10: 👩‍💻 El ensamblador élfico

Los elfos programadores están creando **un pequeño ensamblador mágico** para controlar las máquinas del taller de Santa Claus.

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

- `MOV x y`: Copia el valor `x` (puede ser un número o el contenido de un registro) en el registro `y`
- `INC x`: Incrementa en 1 el contenido del registro `x`
- `DEC x`: Decrementa en 1 el contenido del registro `x`
- `JMP x y`: Si el valor del registro `x` es `0` entonces salta a la instrucción en el índice `y` y sigue ejecutándose el programa desde ahí.

Comportamiento esperado:

- Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor `0` por defecto.
- El salto con `JMP` es absoluto y lleva al índice exacto indicado por `y`.
- Al finalizar, el programa debe devolver el contenido del registro `A`. Si `A` no tenía un valor definido, retorna `undefined`.

**Nota: Los registros que no han sido inicializados previamente se inicializan a `0`.**

## Reto #11: 🏴‍☠️ Nombres de archivos codificados

**El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus** y ha codificado los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y necesitan tu ayuda para descifrar los nombres.

Cada archivo sigue este formato:

- Comienza con un número (puede contener cualquier cantidad de dígitos).
- Luego tiene un guion bajo `_`.
- Continúa con un **nombre de archivo y su extensión.**
- Finaliza con una extensión extra al final (que no necesitamos).

Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números (0-9), **otros guiones bajos** (\_) y guiones (-).

Tu tarea es implementar una función que reciba un string con el nombre de un archivo codificado y devuelva solo la parte importante: **el nombre del archivo y su extensión.**

## Reto #12: 💵 ¿Cuánto cuesta el árbol?

Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.

- `*`: Copo de nieve - Valor: 1
- `o`: Bola de Navidad - Valor: 5
- `^`: Arbolito decorativo - Valor: 10
- `#`: Guirnalda brillante - Valor: 50
- `@`: Estrella polar - Valor: 100

Normalmente se sumarían todos los valores de los adornos y ya está…

Pero, ¡ojo! **Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.**

## Reto #13: 🤖 ¿El robot está de vuelta?

## Reto #14: 🦌 Acomodando los renos

## Reto #15: ✏️ Dibujando tablas

## Reto #16: ❄️ Limpiando la nieve del camino

## Reto #17: 💣 Busca las bombas del Grinch

## Reto #18: 📇 La agenda mágica de Santa

## Reto #20: 🎁 Encuentra los regalos faltantes y duplicados

## Reto #21: 🎄 Calcula la altura del árbol de Navidad

## Reto #22: 🎁 Genera combinaciones de regalos

## Reto #23: 🔢 Encuentra los números perdidos

## Reto #24: 🪞 Verifica si los árboles son espejos mágicos
