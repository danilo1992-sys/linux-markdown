---
name: "zip"
description: "`zip` crea archivos comprimidos en formato ZIP, el formato más común para intercambiar archivos comprimidos."
---

## Descripción

`zip` crea archivos comprimidos en formato ZIP, el formato más común para intercambiar archivos comprimidos.


## Ejemplos de uso

Comprimir archivos:

```bash
zip archivo.zip archivo1.txt archivo2.txt
```

Comprimir directorio recursivamente:

```bash
zip -r directorio.zip directorio/
```

Excluir archivos:

```bash
zip -r archivo.zip directorio/ -x "*.log"
```

Comprimir con nivel máximo:

```bash
zip -9 archivo.zip archivos/
```
