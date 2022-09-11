# Ejercicio 1

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que
nos devuelve el código es el mismo valor en cada iteración.

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
   por consola el script? ¿Cuál es el motivo?

- Respuesta:
  Dado que var i es una variable global, al ser llamada en la función setTimeout, el valor de i es el mismo en cada iteración, por lo que el valor que se imprime es el último valor de i, que es 5.

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas…
   ¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```
    > 0
    > 1
    > 2
    > 3
    > 4
```

- Respuesta:
  Cambiando var i por let i, ya que let i es una variable local, por lo que cada vez que se llama a la función setTimeout, se crea una nueva variable i, por lo que el valor de i es el que se le asigna en cada iteración.
