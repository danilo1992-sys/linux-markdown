---
name: "git stash"
description: "`git stash` guarda los cambios pendientes temporalmente para poder trabajar en otra cosa."
---

## Descripción

`git stash` guarda los cambios pendientes temporalmente para poder trabajar en otra cosa. Permite limpiar el directorio de trabajo sin perder los cambios.


## Ejemplos de uso

Guardar cambios actuales:

```bash
git stash
```

Guardar con un mensaje descriptivo:

```bash
git stash push -m "Cambios parciales del login"
```

Incluir archivos sin trackear:

```bash
git stash -u
```

Incluir archivos ignorados:

```bash
git stash -a
```

Listar todos los stash:

```bash
git stash list
```