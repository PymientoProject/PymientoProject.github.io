# PymientoProject.github.io
Página web oficial #ThePymientoProject

## Instrucciones para el editor de contenidos de works/ o people/ 
Tanto en _works/index.html como en _people/index.html hay una lista de valores con los elementos de cada apartado. Además, tanto _works como _people tienen un fichero .md para algunos elementos, que forma la pagina individual.

En index.html tienes la lista de elementos de cada caso. Si queremos añadir un elemento nuevo, solo tenemos que copiar uno existente, y cambiar los datos. Lo mismo vale para modificaciones. El html que hay al final del fichero es el que genera el contenido visible de la pagina. En principio no habrá necesidad de tocarlo.

Para cada elemento del listado, el campo "bio" indica si tiene pagina propia. En caso de ser "si", el campo "url" indica como se llama el fichero .md donde esta escrito el contenido de la pagina de cada elemento. Cada uno de estos ficheros tiene una cabecera con tres variables: el layout por defecto, el titulo y el texto resaltado que aparece tras el titulo ("abstract"). El resto del contenido de la pagina de cada elemento es simple texto en Markdown, mas algunos extras en HTML cuando es necesario. Puedes guiarte por el modelo de los existentes para añadir otros.

Los campos "nombre" y "alias" son respectivamente los textos que aparecen encima y debajo de la imagen de cada elemento.

```
  - nombre: "iJacquard"
    alias: "Programa tu cuadro"
    url: "Jacquard-Mondrian"
    imagen: "cpc.jpg"
    bio: si
```

Las imagenes y otros ficheros referenciados estan en el mismo directorio (quizás sería buena idea ponerlos en el subdirectorio de contenidos estaticos de Jekyll...)

## Instrucciones para el editor del blog:

Podemos escribir entradas del blog creando ficheros en _posts, con el formato 
```
AAAA-MM-DD-titulo.md
```
El [indice de entradas del blog](/blog) se genera automaticamente


## Directorios y cosas de Jekyll

El contenido del site se puede editar gracias a las facilidades de [Jekyll](https://jekyllrb.com/), un generador de blogs estáticos soportado por github pages. En nuestro caso, los directorios que tenemos son:

```
├── _about
├── _blog
├── css
├── img
├── js
├── _layouts
├── _people
├── _posts
├── _prensa
├── _site
└── _works
```
### Directorios donde hay que editar:
- _posts, donde ESCRIBIMOS los posts del blog
- _people, la lista de participantes 
- _works, la lista de proyectos
- _prensa, un apartado aun por definir, para recortes de prensa? deberia ser semejante a _people y _works

### Directorios donde no es necesario tocar:
- _blog es el indice de posts del blog
- _layouts, donde esta la cabecera repetida
- _site, el subdirectorio donde Jekyll monta las páginas estáticas, no hace falta tocar nada
- css, estilos de la pagina
- img, imagenes usadas por el layout de la pagina
- js, elementos JavaScript de la pagina

### _config.yml
En _config.yml tenemos los valores para la lista de enlaces sociales, y para el menu:

```
socials:
  - url: https://twitter.com/PymientoProject
    img: tw.png
  - url: https://github.com/PymientoProject
    img: git.png
  - url: https://www.facebook.com/pymiento
    img: fb.png
menu:
  - text: About
    url: /about
  - text: Works
    url: /works
  - text: People
    url: /people
  - text: Blog
    url: /blog
  - text: Prensa
    url: /prensa
```
### CNAME
Este fichero tiene el nombre del dominio con el que se accede al blog, aparte del existente por defecto, PymientoProject.github.io

## Recortes de HTML para referencia futura
- reference, por div(s): Gonzalo
```
<div class="reference"><a href="../../people/gonzalo-moyano.html"><img src="../../people/gonzalo.jpg"></a>Aportación de:<br><a href="../../people/gonzalo-moyano">Gonzalo</a></div>
<br>
```

reference: Adolfo
```
<div class="reference"><a href="../../people/adolfo-rosillo-herrera.html"><img src="../../people/adolfo-rosillo.png"></a>Aportación de:<br><a href="../../people/adolfo-rosillo-herrera-html">Adolfo</a></div>
<br>
```
reference: Cris
```
<div class="reference"><a href="../../people/cris-gongora.html"><img src="../../people/cris.jpg"></a>Aportación de:<br><a href="../../people/cris-gongora-html">Cris</a></div>
<br>
```

- full, por div(s)
```
<div style="position:absolute;left:0px;width:100%;height:800px;"><img style="width:100%;height:100%;" alt="cover" src="cover.jpg"></div>
<div style="position:relative;height:820px"></div>
```

