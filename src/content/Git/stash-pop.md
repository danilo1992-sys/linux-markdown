---
name: "git stash pop"
description: "`git stash pop` recupera los cambios guardados y los elimina de la lista de stash."
---

## Descripción

`git stash pop` recupera los cambios guardados y los elimina de la lista de stash. Es la forma más común de reutilizar cambios guardados.


## Ejemplos de uso

Recuperar el último stash:

```bash
git stash pop
```

Recuperar un stash específico:

```bash
git stash pop stash@{2}
```

Aplicar sin eliminar de la lista:

```bash
git stash apply
```

Eliminar un stash específico:

```bash
git stash drop stash@{0}
```

Eliminar todos los stash:

```bash
git stash clear
```