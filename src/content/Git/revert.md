---
name: "git revert"
description: "`git revert` crea un nuevo commit que deshace los cambios de un commit anterior."
---

## Descripción

`git revert` crea un nuevo commit que deshace los cambios de un commit anterior. A diferencia de `reset`, no modifica el historial existente.


## Ejemplos de uso

Revertir el último commit:

```bash
git revert HEAD
```

Revertir un commit específico:

```bash
git revert abc123
```

Revertir sin crear commit automáticamente:

```bash
git revert --no-commit abc123
```

Revertir y agregar mensaje personalizado:

```bash
git revert -m 1 abc123
```

Revertir un rango de commits:

```bash
git revert abc123..def456
```