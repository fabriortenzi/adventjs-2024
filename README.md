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
