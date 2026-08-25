---
name: "git status"
description: "`git status` muestra el estado del repositorio: archivos modificados, staged y sin trackear."
---

## Descripción

`git status` muestra el estado del repositorio: archivos modificados, staged y sin trackear. Es el primer comando que se ejecuta para entender qué ha cambiado.


## Ejemplos de uso

Ver estado básico:

```bash
git status
```

Ver estado de forma compacta:

```bash
git status -s
```

Ver estado sin atajos de colores:

```bash
git status --no-short
```

Ver información detallada:

```bash
git status -v
```