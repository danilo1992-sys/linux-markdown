---
name: "tail"
description: "`tail` muestra las últimas líneas de un archivo. Por defecto muestra 10 líneas."
---

## Descripción

`tail` muestra las últimas líneas de un archivo. Por defecto muestra 10 líneas.


## Ejemplos de uso

Mostrar últimas 10 líneas:

```bash
tail archivo.txt
```

Mostrar últimas 20 líneas:

```bash
tail -n 20 archivo.txt
```

Seguir cambios en el archivo:

```bash
tail -f archivo.log
```

Mostrar desde la línea 5:

```bash
tail -n +5 archivo.txt
```
