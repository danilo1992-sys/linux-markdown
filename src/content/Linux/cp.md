---
name: "cp"
description: "`cp` (copy) crea una copia de archivos o directorios en otra ubicación."
---

## Descripción

`cp` (copy) crea una copia de archivos o directorios en otra ubicación.


## Ejemplos de uso

Copiar un archivo:

```bash
cp archivo.txt copia.txt
```

Copiar un directorio recursivamente:

```bash
cp -r directorio/ destino/
```

Copiar con verbose (mostrar progreso):

```bash
cp -v archivo.txt /backup/
```

Copiar preservando permisos:

```bash
cp -p archivo.txt /backup/
```
