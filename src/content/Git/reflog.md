---
name: "git reflog"
description: "`git reflog` muestra el historial de todas las referencias (HEAD, ramas, tags)."
---

## Descripción

`git reflog` muestra el historial de todas las referencias del repositorio. Es una herramienta de recuperación poderosa para encontrar commits "perdidos".


## Ejemplos de uso

Ver reflog completo:

```bash
git reflog
```

Ver reflog de una rama específica:

```bash
git reflog show develop
```

Restaurar un commit perdido:

```bash
git checkout abc123
```

Restaurar rama a un commit anterior:

```bash
git reset --hard abc123
```

Ver reflog con formato personalizado:

```bash
git reflog --format='%h %gs'
```