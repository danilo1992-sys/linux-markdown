---
name: "git rm"
description: "`git rm` elimina archivos del repositorio y del directorio de trabajo."
---

## Descripción

`git rm` elimina archivos del repositorio y del directorio de trabajo. Marca los archivos para eliminación en el próximo commit.


## Ejemplos de uso

Eliminar un archivo:

```bash
git rm archivo.txt
```

Eliminar un directorio recursivamente:

```bash
git rm -r directorio/
```

Eliminar solo del staging (mantener en disco):

```bash
git rm --cached archivo.txt
```

Eliminar archivos con patrón:

```bash
git rm *.log
```

Forzar eliminación de archivos modificados:

```bash
git rm -f archivo.txt
```