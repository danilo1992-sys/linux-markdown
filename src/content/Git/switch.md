---
name: "git switch"
description: "`git switch` cambia de rama de forma moderna y segura."
---

## Descripción

`git switch` cambia de rama de forma moderna y segura. Introducido en Git 2.23 como alternativa más clara a `checkout` para cambio de ramas.


## Ejemplos de uso

Cambiar a otra rama:

```bash
git switch develop
```

Crear y cambiar a una nueva rama:

```bash
git switch -c nueva-feature
```

Crear una rama desde un commit específico:

```bash
git switch -c hotfix abc123
```

Volver a la rama anterior:

```bash
git switch -
```

Cambiar sin confirmar cambios pendientes:

```bash
git switch --force develop
```