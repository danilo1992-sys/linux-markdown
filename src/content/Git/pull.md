---
name: "git pull"
description: "`git pull` descarga y fusiona cambios del repositorio remoto."
---

## Descripción

`git pull` descarga y fusiona cambios del repositorio remoto. Equivale a `git fetch` seguido de `git merge`.


## Ejemplos de uso

Pull de la rama principal:

```bash
git pull origin main
```

Pull con rebase en lugar de merge:

```bash
git pull --rebase origin main
```

Pull sin fusionar automáticamente:

```bash
git pull --no-commit origin main
```

Pull de una rama específica:

```bash
git pull origin develop
```