---
name: "git cherry-pick"
description: "`git cherry-pick` aplica un commit específico de otra rama a la rama actual."
---

## Descripción

`git cherry-pick` aplica un commit específico de otra rama a la rama actual. Útil para portar un fix rápido sin fusionar toda una rama.


## Ejemplos de uso

Aplicar un commit específico:

```bash
git cherry-pick abc123
```

Aplicar múltiples commits:

```bash
git cherry-pick abc123 def456
```

Aplicar sin crear commit automáticamente:

```bash
git cherry-pick --no-commit abc123
```

Aplicar un rango de commits:

```bash
git cherry-pick abc123..def456
```

Abortar cherry-pick en curso:

```bash
git cherry-pick --abort
```