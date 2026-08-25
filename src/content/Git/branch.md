---
name: "git branch"
description: "`git branch` lista, crea o elimina ramas en el repositorio."
---

## Descripción

`git branch` lista, crea o elimina ramas en el repositorio. Las ramas permiten trabajar en diferentes features o fixes de forma paralela.


## Ejemplos de uso

Listar ramas locales:

```bash
git branch
```

Listar todas las ramas (locales y remotas):

```bash
git branch -a
```

Crear una nueva rama:

```bash
git branch nueva-feature
```

Eliminar una rama:

```bash
git branch -d feature-terminada
```

Renombrar la rama actual:

```bash
git branch -m nuevo-nombre
```