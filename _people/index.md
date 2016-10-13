---
layout: default
title: People
abstract: Esta es toda la gente que ha pasado por Pymiento, y de algún modo, ha dejado su granito de arena.
intro: Estamos inmersos en un proceso no guiado de aprendizaje basado en proyectos, orientado a la consecución de resultados creativos de carácter interdisciplinar, donde importa más el desarrollo y crecimiento de las personas que los objetos, imágenes o programas que resulten.
# ya lo se: poner las coordenadas de cada elemento como variables es muy lamentable, pero no he encontrado forma
# de que el liquid scripting permita hacer contadores...
gente:
  - nombre: "Adolfo"
    alias: "Agente provocador"
    url: "adolfo-rosillo-herrera"
    imagen: "adolfo-rosillo.png"
    x: 0
    y: 0
  - nombre: "Cristo"
    alias: "Flamer ecléctico"
    url: "cristo-contreras-rubio"
    imagen: "cristo.jpg"
    x: 370
    y: 0
  - nombre: "Gonzalo"
    alias: "Multipotencialista maker"
    url: "gonzalo-moyano"
    imagen: "gonzalo.jpg"
    x: 740
    y: 0
  - nombre: "Fran"
    alias: "Amante de las tecnologías libres"
    url: "francisco-acien"
    imagen: "fran.jpg"
    x: 1110
    y: 0
  - nombre: "Delia"
    alias: "Maker interiorista"
    url: "delia-galvez-moreno"
    imagen: "delia.jpg"
    x: 0
    y: 446
  - nombre: "Almudena"
    alias: "Creatividad por bandera"
    url: "almudena-fernandez"
    imagen: "almudena.jpg"
    x: 370
    y: 446
  - nombre: "Aitor"
    alias: "El ingeniero filósofo"
    url: "aitor-alvarez"
    imagen: "aitor.jpg"
    x: 740
    y: 446
  - nombre: "Olga"
    alias: "Design thinking y organizacion"
    url: "olga-fernandez"
    imagen: "olga.jpg"
    x: 1110
    y: 446
  - nombre: "Guille"
    alias: "El físico periodista"
    url: "guille-fuertes"
    imagen: "guille.jpg"
    x: 0
    y: 893
  - nombre: "Remedios"
    alias: "Robótica infantil"
    url: "remedios-fernandez"
    imagen: "reme.jpg"
    x: 370
    y: 893
  - nombre: "Hugo"
    alias: "Amante de la casquería mecánica"
    url: "hugo-rosillo"
    imagen: "hugo.jpg"
    x: 740
    y: 893
  - nombre: "Cris"
    alias: "Psicopedagogía y manualidades"
    url: "cris-gongora"
    imagen: "cris.jpg"
    x: 1110 
    y: 893
  - nombre: "Bill"
    alias: "Un punky del estenopo"
    url: "bill-muslos"
    imagen: "bill.jpg"
    x: 0
    y: 1340
  - nombre: "Ana"
    alias: "Inquieta por definicion"
    url: "ana-mora"
    imagen: "ana.jpg"
    x: 370
    y: 1340
  - nombre: "Favio"
    alias: "Diseño y Comunicación Visual"
    url: "favio-gutierrez"
    imagen: "favio.jpg"
    x: 740
    y: 1340
  - nombre: "Pedro"
    alias: "Hacking mode"
    url: "pedro-silva"
    imagen: "pedro.jpg"
    x: 1110
    y: 1340
  - nombre: "Maribel"
    alias: "Mecenas en stand-by"
    url: "maribel-ubeda"
    imagen: "maribel.jpg"
    x: 0
    y: 1787
---

<div style="position: relative; width: 1480px; height: 1787.47px;" id="container">
{% for cada in page.gente %}
<a href="/people/{{ cada.url }}"></a><div style="position:absolute; left: {{ cada.x }}px; top: {{ cada.y }}px;"
 class="brick"><a href="/people/{{ cada.url }}"><span>{{ cada.nombre }}</span><img src="/people/{{ cada.imagen }}"></a>{{ cada.alias }}</div>
{% endfor %}

</div>
<div style="float:left;clear:both;"></div>

