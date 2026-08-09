---
name: "chmod"
description: "`chmod` (change mode) modifica los permisos de lectura, escritura y ejecución de archivos y directorios."
---

## Descripción

`chmod` (change mode) modifica los permisos de lectura, escritura y ejecución de archivos y directorios.


## Ejemplos de uso

Dar permisos de ejecución:

```bash
chmod +x script.sh
```

Permisos completos al propietario:

```bash
chmod 755 archivo.sh
```

Permisos de solo lectura:

```bash
chmod 444 archivo.txt
```

Permisos recursivos:

```bash
chmod -R 755 directorio/
```
