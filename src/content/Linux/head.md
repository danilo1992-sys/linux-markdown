---
name: "head"
description: "Muestra las primeras líneas de un archivo."
---


## Descripción

`head` muestra las primeras líneas de un archivo. Por defecto muestra 10 líneas.

## Sintaxis

```bash
head [opciones] archivo
```

## Ejemplos de uso

Mostrar primeras 10 líneas:

```bash
head archivo.txt
```

Mostrar primeras 20 líneas:

```bash
head -n 20 archivo.txt
```

Mostrar primeros 5 bytes:

```bash
head -c 5 archivo.txt
```

Mostrar primeras líneas de varios archivos:

```bash
head archivo1.txt archivo2.txt
```
