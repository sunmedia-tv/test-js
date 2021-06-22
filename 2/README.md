# Prueba 2

SunMedia es una empresa de publicidad en vídeo y branding que aporta soluciones 
tecnológicas tanto a medios (*publishers*) como anunciantes (*advertisers*). Por lo 
tanto, el modelo de negocio de la empresa se apoya en la gestión de *publishers* 
y *advertisers*, así como los anuncios (*creatives*) que los advertisers crean y 
los *publishers* muestran en sus páginas web.

Para ello, contamos con varias plataformas activas así como un SDK que se 
encarga de mostrar los anuncios. Estos anuncios están llenos de lo que 
nosotros denominamos eventos. Entendemos evento como cualquier cosa que 
nuestro SDK tiene que realizar en un segundo dado.

Hemos elegido ver cómo te desenvuelves realizando un pequeño desarrollo que 
permita gestionar estos eventos. Para ello te facilitamos parte del código que 
tendrás que completar con las clases que creas conveniente, además del output 
esperado.



**A tener en cuenta**:

- Tenemos un fichero JSON desde el que leemos tanto los tipos de eventos posibles, 
como los eventos que deberíamos gestionar.
- Al ejecutar la función `run()` de nuestro *Gestor de Eventos* empezaremos a contar 
el tiempo y a ejecutar cada evento en el segundo marcado por nuestro fichero 
JSON. 
- Un evento con un tipo no contemplado debería ser ignorado.
- La ejecución de cada evento la simularemos con un `console.log`.
- El output esperado es el siguiente:

```
    > At second 0: {type: "InitVideo", message: "init video 1"}
    > At second 1: {type: "ShowLayer", message: "show layer 1"}
    > At second 6: {type: "StopVideo", message: "stop video 1"}
    > At second 6: {type: "ShowLayer", message: "show layer 2"}
    > At second 8: {type: "ShowLayer", message: "show layer 3”}
``` 


**Usage**:

En SunMedia necesitamos que todo nuestro código sea cross-browser por lo que debemos usar herramientas como webpack que nos facilitan esta tarea. El código que proporcionamos ya consta de un archivo de configuración de webpack con una build de desarrollo que te ayudará en la realización de esta prueba. 

Para empezar a desarrollar tendremos que instalar algunas librerías que están listadas en el archivo `packages.json`:
- `npm install`

Posteriormente, con el objetivo de compilar el código y que esta tarea se ejecute con cada cambio sobre los archivos, tendremos que ejecutar el siguiente comando: 
- `webpack --watch`
