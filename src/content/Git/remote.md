---
name: "git remote"
description: "`git remote` gestiona los repositorios remotos conectados al repositorio local."
---

## Descripción

`git remote` gestiona los repositorios remotos conectados al repositorio local. Permite agregar, listar y eliminar conexiones con repositorios en servidores.


## Ejemplos de uso

Listar remotos:

```bash
git remote
```

Listar remotos con URLs:

```bash
git remote -v
```

Agregar un remoto:

```bash
git remote add origin https://github.com/usuario/repo.git
```

Cambiar URL de un remoto:

```bash
git remote set-url origin https://github.com/usuario/nuevo-repo.git
```

Eliminar un remoto:

```bash
git remote remove origin
```