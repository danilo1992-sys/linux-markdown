---
name: "git worktree"
description: "`git worktree` permite tener múltiples ramas check out en directorios separados."
---

## Descripción

`git worktree` permite tener múltiples ramas check out en directorios separados. Útil para trabajar en hotfixes sin cambiar de rama.


## Ejemplos de uso

Crear un worktree para una rama existente:

```bash
git worktree add ../hotfix-branch hotfix
```

Crear un worktree con nueva rama:

```bash
git worktree add -b feature-nueva ../feature-nueva
```

Listar worktrees:

```bash
git worktree list
```

Mover un worktree:

```bash
git worktree move ../viejo ../nuevo
```

Eliminar un worktree:

```bash
git worktree remove ../hotfix-branch
```

Limpiar worktrees obsoletos:

```bash
git worktree prune
```