---
name: "git merge"
description: "`git merge` fusiona una rama en la rama actual."
---

## Descripción

`git merge` fusiona una rama en la rama actual. Integra los cambios de una rama en otra, creando un commit de fusión.


## Ejemplos de uso

Fusionar una rama en la actual:

```bash
git merge develop
```

Fusionar sin crear commit de merge:

```bash
git merge --no-ff develop
```

Fusionar con estrategia rebase:

```bash
git merge --rebase develop
```

Abortar una fusión con conflictos:

```bash
git merge --abort
```

Fusionar y agregar un mensaje personalizado:

```bash
git merge -m "Fusionar feature en main" develop
```