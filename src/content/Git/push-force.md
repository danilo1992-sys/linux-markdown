---
name: "git push --force"
description: "`git push --force` fuerza el push sobrescribiendo el historial remoto."
---

## Descripción

`git push --force` fuerza el push sobrescribiendo el historial remoto. Peligroso si otros están trabajando en la misma rama.


## Ejemplos de uso

Forzar push:

```bash
git push --force origin main
```

Forzar push con protección (recomendado):

```bash
git push --force-with-lease origin main
```

Forzar push de una rama específica:

```bash
git push --force origin feature-rebasada
```