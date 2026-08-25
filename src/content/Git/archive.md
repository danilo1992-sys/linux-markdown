---
name: "git archive"
description: "`git archive` crea un archivado (zip, tar) del contenido del repositorio."
---

## Descripción

`git archive` crea un archivado del contenido del repositorio sin la carpeta `.git`. Ideal para crear distribuciones limpias del código.


## Ejemplos de uso

Crear un archivo zip:

```bash
git archive -o proyecto.zip HEAD
```

Crear un archivo tar.gz:

```bash
git archive HEAD | tar -x -C /destino/
```

Archivar una rama específica:

```bash
git archive -o release.zip v1.0
```

Archivar un directorio específico:

```bash
git archive HEAD src/ | tar -x -C /destino/
```