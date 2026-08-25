---
name: "git rebase"
description: "`git rebase` reaplica los commits de una rama sobre otra base."
---

## Descripción

`git rebase` reaplica los commits de una rama sobre otra base. Útil para mantener un historial lineal y limpio.


## Ejemplos de uso

Rebase de la rama actual sobre main:

```bash
git rebase main
```

Rebase interactivo para reorganizar commits:

```bash
git rebase -i HEAD~5
```

Rebase abortado:

```bash
git rebase --abort
```

Continuar rebase después de resolver conflictos:

```bash
git rebase --continue
```

Rebase omitiendo un commit específico:

```bash
git rebase --skip
```