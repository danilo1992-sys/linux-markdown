---
name: "git count-objects"
description: "`git count-objects` cuenta y muestra el tamaño de los objetos del repositorio."
---

## Descripción

`git count-objects` cuenta y muestra el tamaño de los objetos del repositorio. Útil para monitorear el tamaño del repositorio.


## Ejemplos de uso

Contar objetos:

```bash
git count-objects
```

Contar con tamaño en human-readable:

```bash
git count-objects -v -H
```

Contar objetos sueltos:

```bash
git count-objects -v
```