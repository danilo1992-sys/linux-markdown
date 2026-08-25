---
name: "git init"
description: "`git init` inicializa un nuevo repositorio Git en el directorio actual."
---

## Descripción

`git init` inicializa un nuevo repositorio Git en el directorio actual. Crea una carpeta oculta `.git` que contiene todos los archivos necesarios para el control de versiones.


## Ejemplos de uso

Inicializar un repositorio en el directorio actual:

```bash
git init
```

Inicializar en un directorio específico:

```bash
git init mi-proyecto
```

Inicializar un repositorio con una rama por defecto diferente:

```bash
git init -b main
```