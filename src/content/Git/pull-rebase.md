---
name: "git pull --rebase"
description: "`git pull --rebase` descarga cambios y reaplica tus commits encima."
---

## Descripción

`git pull --rebase` descarga cambios y reaplica tus commits encima en lugar de crear un merge. Mantiene un historial lineal.


## Ejemplos de uso

Pull con rebase:

```bash
git pull --rebase origin main
```

Configurar rebase como predeterminado:

```bash
git config --global pull.rebase true
```

Rebase después de conflictos:

```bash
git rebase --continue
```

Abortar rebase:

```bash
git rebase --abort
```