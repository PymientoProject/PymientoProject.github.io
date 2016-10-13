# PymientoProject.github.io
Página web oficial #ThePymientoProject

## instrucciones para el editor
En _config.yml tenemos los valores para la lista de enlaces sociales, y para el menu

Podemos escribir entradas del blog creando ficheros en _posts, con el formato 
```
AAAA-MM-DD-titulo.md
```
El indice de entradas del blog se genera automaticamente

Tanto en _works/index.html como en _people/index.html hay un hash con los elementos en subpaginas. Además, tanto _works como _people tienen un fichero .md para cada elemento.


## recortes de HTML para referencia futura
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

