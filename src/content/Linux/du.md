---
name: "du"
description: "`du` (disk usage) estima y muestra el espacio en disco usado por archivos y directorios."
---

## Descripción

`du` (disk usage) estima y muestra el espacio en disco usado por archivos y directorios.


## Ejemplos de uso

Tamaño del directorio actual:

```bash
du -sh .
```

Tamaño de cada subdirectorio:

```bash
du -h --max-depth=1
```

Tamaño total de un directorio:

```bash
du -sh /var/log
```

Ordenar por tamaño:

```bash
du -h | sort -rh | head -10
```
