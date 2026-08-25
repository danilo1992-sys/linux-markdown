---
name: "git reset"
description: "`git reset` deshace cambios moviendo la HEAD a un estado anterior."
---

## Descripción

`git reset` deshace cambios moviendo la HEAD a un estado anterior. Puede afectar el área de preparación y el directorio de trabajo según el modo elegido.


## Ejemplos de uso

Deshacer último commit (mantener cambios):

```bash
git reset --soft HEAD~1
```

Deshacer commit y quitar del staging:

```bash
git reset HEAD~1
```

Deshacer commit y perder cambios:

```bash
git reset --hard HEAD~1
```

Reset a un commit específico:

```bash
git reset --hard abc123
```

Reset solo un archivo:

```bash
git reset HEAD archivo.txt
```