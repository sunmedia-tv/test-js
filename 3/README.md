# Prueba 3

Esta prueba consiste en escribir un código de control de flujo asíncrono.

Tenemos cinco anuncios que queremos obtener de un servidor y mostrarlos lo antes posible, manteniendo su orden.

**Comportamiento esperado:**
  - Hacer la petición de los 5 anuncios sin esperar a que acabe el anterior (en paralelo).
  - Mostrar los anuncios en orden: 1, 2, 3, 4, 5.
  - Mostrar cada anuncio según se van obteniendo, pero respetando el orden (No esperar a que finalicen todos para mostrarlos).
  - Cuando ya estén los 5 anuncios, mostrar "Done!".
  - Si alguna de las peticiones falla el programa deberá mostrar "Failed to load the xxx ad" y finalizar sin mostrar los siguientes anuncios.

**Ejemplos de lo que el programa deberá de mostrar por consola:**

*Sin fallos:*
```
The first ad
The second ad
The third ad
The forth ad
The last ad
Done!
```

*Falla una petición (por ejemplo el tercer anuncio):*
```
The first ad
The second ad
Failed to load the third ad
```

No es necesario ningún tipo de implementación web o html, con que muestre el resultado por consola es suficiente.

En el fragmento de código de nuestro fichero `test.js` se proporciona la función *`fakeFetch()`* que simula la obtención de los anuncios en un tiempo aleatorio. También algunas peticiones fallarán de manera aleatoria.

Además de la resolución del ejercicio se valorará la claridad y facilidad de comprensión del código así como la fiabilidad del mismo.

**BONUS:** Si alguna de las peticiones falla, intentarla hasta 3 veces antes de finalizar el programa.
