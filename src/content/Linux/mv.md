---
name: "mv"
description: "Mueve o renombra archivos o directorios."
---


## Descripción

`mv` (move) mueve archivos o directorios de una ubicación a otra, o los renombra.

## Sintaxis

```bash
mv [opciones] origen destino
```

## Ejemplos de uso

Mover un archivo:

```bash
mv archivo.txt /home/juan/
```

Renombrar un archivo:

```bash
mv viejo.txt nuevo.txt
```

Mover con verbose:

```bash
mv -v archivo.txt /backup/
```

Sobrescribir sin preguntar:

```bash
mv -f archivo.txt /backup/
```
