---
name: "git checkout"
description: "`git checkout` cambia de rama o restaura archivos a una versión específica."
---

## Descripción

`git checkout` cambia de rama o restaura archivos a una versión específica. Es uno de los comandos más versátiles de Git.


## Ejemplos de uso

Cambiar a otra rama:

```bash
git checkout develop
```

Crear y cambiar a una nueva rama:

```bash
git checkout -b nueva-feature
```

Restaurar un archivo específico:

```bash
git checkout -- archivo.txt
```

Restaurar un archivo de un commit anterior:

```bash
git checkout abc123 -- archivo.txt
```

Crear una rama a partir de un tag:

```bash
git checkout -b hotfix v1.0
```