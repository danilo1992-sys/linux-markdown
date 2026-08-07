---
name: "less"
description: "Muestra el contenido de un archivo paginado."
---


## Descripción

`less` es un visor de archivos que permite navegar por el contenido de forma paginada, sin cargar todo el archivo en memoria.

## Sintaxis

```bash
less [opciones] archivo
```

## Ejemplos de uso

Abrir un archivo:

```bash
less archivo.txt
```

Buscar una palabra:

```bash
less archivo.txt
```

Después escribir `/palabra` para buscar.

Ir al final del archivo:

```bash
less +G archivo.txt
```

Salir:

```bash
q
```
