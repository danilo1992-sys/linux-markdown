---
name: "git diff"
description: "`git diff` muestra las diferencias entre archivos, commits o ramas."
---

## Descripción

`git diff` muestra las diferencias entre archivos, commits o ramas. Es esencial para revisar cambios antes de commitear.


## Ejemplos de uso

Ver cambios sin stage:

```bash
git diff
```

Ver cambios en el staging area:

```bash
git diff --staged
```

Comparar con un commit específico:

```bash
git diff abc123
```

Comparar dos ramas:

```bash
git diff main..develop
```

Comparar solo nombres de archivos cambiados:

```bash
git diff --name-only main..develop
```