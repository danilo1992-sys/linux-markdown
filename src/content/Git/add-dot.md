---
name: "git add ."
description: "`git add .` agrega todos los archivos modificados y nuevos del directorio actual."
---

## Descripción

`git add .` agrega todos los archivos modificados y nuevos del directorio actual al staging area. Es una forma rápida de preparar todos los cambios.


## Ejemplos de uso

Agregar todos los archivos del directorio actual:

```bash
git add .
```

Agregar todos los archivos de un directorio específico:

```bash
git add src/
```

Agregar todos los archivos .js:

```bash
git add *.js
```

Verificar qué se agregaría antes:

```bash
git status
git add .
```