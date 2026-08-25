---
name: "git remote add"
description: "`git remote add` agrega un nuevo repositorio remoto al repositorio local."
---

## Descripción

`git remote add` agrega un nuevo repositorio remoto al repositorio local. Permite conectar con múltiples servidores.


## Ejemplos de uso

Agregar un remoto con nombre "origin":

```bash
git remote add origin https://github.com/usuario/repo.git
```

Agregar un segundo remoto:

```bash
git remote add upstream https://github.com/otro-usuario/repo.git
```

Agregar remoto con URL SSH:

```bash
git remote add origin git@github.com:usuario/repo.git
```

Verificar que se agregó:

```bash
git remote -v
```