---
name: "git branch -r"
description: "`git branch -r` lista solo las ramas del repositorio remoto."
---

## Descripción

`git branch -r` lista solo las ramas del repositorio remoto. Permite ver qué ramas existen en el servidor sin mostrar las locales.


## Ejemplos de uso

Listar ramas remotas:

```bash
git branch -r
```

Listar ramas remotas con último commit:

```bash
git branch -r --no-merged
```

Filtrar por nombre:

```bash
git branch -r | grep "feature"
```