---
name: "git show"
description: "`git show` muestra la información detallada de un commit específico."
---

## Descripción

`git show` muestra la información detallada de un commit, incluyendo autor, fecha, mensaje y cambios realizados.


## Ejemplos de uso

Mostrar el último commit:

```bash
git show HEAD
```

Mostrar un commit específico:

```bash
git show abc123
```

Mostrar solo los cambios (sin metadatos):

```bash
git show --stat abc123
```

Mostrar un archivo en un commit específico:

```bash
git show abc123:archivo.txt
```

Mostrar sin colores:

```bash
git show --no-color abc123
```