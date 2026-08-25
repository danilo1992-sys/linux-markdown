---
name: "git fetch"
description: "`git fetch` descarga cambios del repositorio remoto sin fusionarlos automáticamente."
---

## Descripción

`git fetch` descarga cambios del repositorio remoto sin fusionarlos automáticamente. Permite revisar los cambios antes de integrarlos.


## Ejemplos de uso

Fetch de todos los remotos:

```bash
git fetch --all
```

Fetch de un remoto específico:

```bash
git fetch origin
```

Fetch y limpiar referencias obsoletas:

```bash
git fetch --prune origin
```

Fetch de una rama específica:

```bash
git fetch origin develop
```