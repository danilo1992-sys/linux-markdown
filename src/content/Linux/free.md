---
name: "free"
description: "Muestra la memoria RAM disponible."
---


## Descripción

`free` muestra la cantidad de memoria RAM libre y usada en el sistema.

## Sintaxis

```bash
free [opciones]
```

## Ejemplos de uso

Mostrar en formato legible:

```bash
free -h
```

Mostrar en megabytes:

```bash
free -m
```

Mostrar solo la memoria total:

```bash
free -h | grep Mem
```

Mostrar con buffers:

```bash
free -h -t
```
