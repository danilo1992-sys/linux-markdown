---
name: "git branch -a"
description: "`git branch -a` lista todas las ramas: locales y remotas."
---

## Descripción

`git branch -a` lista todas las ramas: locales y remotas. Vista completa de todas las ramas disponibles en el proyecto.


## Ejemplos de uso

Listar todas las ramas:

```bash
git branch -a
```

Listar con formato compacto:

```bash
git branch -a --list
```

Filtrar ramas que contienen "bugfix":

```bash
git branch -a | grep bugfix
```

Listar ramas fusionadas:

```bash
git branch -a --merged
```

Listar ramas no fusionadas:

```bash
git branch -a --no-merged
```