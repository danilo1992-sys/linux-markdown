---
name: "git add"
description: "`git add` agrega archivos al área de preparación (staging area) para el próximo commit."
---

## Descripción

`git add` agrega archivos al área de preparación (staging area) para el próximo commit. Permite controlar qué cambios se incluirán en el siguiente commit.


## Ejemplos de uso

Agregar un archivo específico:

```bash
git add archivo.txt
```

Agregar todos los archivos modificados:

```bash
git add .
```

Agregar todos los archivos .js:

```bash
git add *.js
```

Agregar cambios interactivamente:

```bash
git add -p
```

Agregar solo archivos eliminados:

```bash
git add -u
```