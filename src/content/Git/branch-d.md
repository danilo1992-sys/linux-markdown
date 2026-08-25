---
name: "git branch -d"
description: "`git branch -d` elimina una rama que ya fue fusionada."
---

## Descripción

`git branch -d` elimina una rama que ya fue fusionada. Es seguro porque verifica que los cambios estén en otra rama antes de eliminar.


## Ejemplos de uso

Eliminar una rama fusionada:

```bash
git branch -d feature-terminada
```

Forzar eliminación (sin verificar):

```bash
git branch -D feature- Abortada
```

Eliminar una rama remota:

```bash
git push origin --delete feature-terminada
```

Eliminar múltiples ramas:

```bash
git branch -d feature1 feature2 feature3
```