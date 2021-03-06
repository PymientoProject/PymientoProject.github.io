---
layout: default
title: Async Generative Art Protocol
abstract: Protocolo de Arte Generativo Asíncrona AGAP
hack: "<div class='content'>"
---

Al igual que un "cadáver exquisito", la idea de ​*The Async Generative Art Network*​ es crear una obra de arte generativa a nivel mundial de forma asíncrona.

![The Async Generative Art Network](tagan.png)

Para lograr esto debemos crear un protocolo de conexión entre las obras, un sistema que logre desarrollar una continidad y perpetuidad entre todas las obras que conforman esta red.


El protocolo ​*AGAP*​ (​*Asynchronous Generative Art Protocol*​) se basa en dos premisas fundamentale:

1 cada obra de arte debe generar un paquete AGAP como salida.
2 cada obra de arte debe utilizar al menos un paquete AGAP como entrada (exeptuando una obra inicial creada por Pymiento Project)

<div style="position:absolute;left:0px;width:100%;height:800px;"><img style="width:100%;height:100%;" alt="Asynchronous Generative Art Protocol" src="AGAP.jpg"></div>
<div style="position:relative;height:820px"></div>


### ¿En qué consiste un paquete AGAP?

* Un paquete AGAP es un conjunto de datos arbitrario diseñado por el artista, y que se desprende como resultado (directo o colateral) de su obra de arte generativa.

* El formato del paquete podría ser de texto, JSON o similar, y deberá ser depositado en el GitHub del proyecto The Async Generative Art Network.

* La actualización del paquete en el repositorio puede ser asíncrona y posteríor a la creación. Esto es así para permitir el desarrollo de proyectos artísticos sin conexión a Internet, o de conexión pobre o nula. La falta de conectividad no debe ser un limite excluyecte. Esto permitirá el desarrollo de proyectos de bajo presupuesto, o que se implementen en locaciones subdesarrolladas. En resumen: si no dispone de conectividad, el artista deberá almacenar los datos en memoria y subirlos posteriormente al repositorio del proyecto.

<div style="position:absolute;left:0px;width:100%;height:800px;"><img style="width:100%;height:100%;" alt="Esquema de arte generativo con AGAP" src="flow.png"></div>
<div style="position:relative;height:820px"></div>

### Uso del paquete AGAP 

Si bien, no es obligatorio usar el 100% del contenido del paquete AGAP, es necesario que la cantidad de esos datos sea representativo, y en cierta forma, perpetúe la obra anterior.

### Ejemplos (basados en proyectos mensionados)

Por un lado, en el juego Agario, la célula más grande se come a la más pequeña, adquiriendo su volumen, y luego, las células "splitters" dividen a las anteriores. Aquí se genera un patrón aleatorio al reventar cada célula a lo largo del tiempo. Si en cada unidad de tiempo no revienta ninguna, esto iría dando [0, 0, 0, 0 ... etc], pero al reventar guarda el valór del volúmen de la célula, en plan [... 0, 142, 0, 0, 0, 538, 0, ... etc] // Un proyecto posteríor podría utilizar este paquete, generando un arte gráfico basado en el patron de aparición, el volúmen y su paridad, etc. 


En la mesa de DJ de cuatro platos proyectados, el movimiento del cabezal de cada plato puede generar un patron aleatorio inducido por la ejecución del DJ. Con 3 posiciones del cabezal en cada uno de los 4 platos, podríamos tener un resultante similar a esto: [[0,1],[1,2],[2,0],[3,0], [[0,2],[1,2],[2,1],[3,1]], ... etc] El resultado directo de salida de esta obra es la música, pero el resultado colateral es el movimiento de cabezal ejecutado por el DJ.

