---
name: "rm"
description: "Elimina archivos o directorios."
---


## Descripción

`rm` (remove) elimina archivos o directorios de forma permanente.

## Sintaxis

```bash
rm [opciones] archivo
```

## Ejemplos de uso

Eliminar un archivo:

```bash
rm archivo.txt
```

Eliminar con confirmación:

```bash
rm -i archivo.txt
```

Eliminar directorio recursivamente:

```bash
rm -r directorio/
```

Forzar eliminación:

```bash
rm -rf directorio/
```

Eliminar archivos que coincidan con un patrón:

```bash
rm *.log
```
