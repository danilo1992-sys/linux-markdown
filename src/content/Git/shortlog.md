---
name: "git shortlog"
description: "`git shortlog` muestra un resumen de commits agrupados por autor."
---

## Descripción

`git shortlog` muestra un resumen de commits agrupados por autor. Útil para ver quién ha contribuido y cuánto.


## Ejemplos de uso

Resumen de todos los autores:

```bash
git shortlog
```

Resumen con número de commits:

```bash
git shortlog -sn
```

Resumen de commits en una rama:

```bash
git shortlog main..develop
```

Resumen de un autor específico:

```bash
git shortlog -s --author="Juan"
```

Resumen de los últimos 30 días:

```bash
git shortlog --since="30 days ago"
```