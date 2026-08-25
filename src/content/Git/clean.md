---
name: "git clean"
description: "`git clean` elimina archivos y directorios sin trackear del directorio de trabajo."
---

## Descripción

`git clean` elimina archivos y directorios sin trackear del directorio de trabajo. Útil para limpiar archivos temporales, compilaciones o archivos generados.


## Ejemplos de uso

Ver qué se eliminaría (dry run):

```bash
git clean -n
```

Eliminar archivos sin trackear:

```bash
git clean -f
```

Eliminar archivos y directorios:

```bash
git clean -fd
```

Eliminar archivos ignorados también:

```bash
git clean -fx
```

Eliminar todo lo que no esté en el HEAD:

```bash
git clean -fdx
```