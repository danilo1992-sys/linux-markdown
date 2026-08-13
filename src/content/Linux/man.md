---
name: "man"
description: "`man` (manual) muestra la documentación de un comando o página del manual."
---

## Descripción

`man` (manual) muestra la documentación de un comando o página del manual. Es la forma estándar de consultar la ayuda en Linux.


## Ejemplos de uso

Mostrar el manual de un comando:

```bash
man ls
```

Buscar en el manual por palabra clave:

```bash
man -k "network"
```

Mostrar una sección específica del manual (ej: 1 = comandos, 5 = archivos, 8 = administración):

```bash
man 5 passwd
```

Mostrar el manual en formato terminal sin paginación:

```bash
man -P cat ls
```

Mostrar todas las secciones disponibles de un comando:

```bash
man -a passwd
```
