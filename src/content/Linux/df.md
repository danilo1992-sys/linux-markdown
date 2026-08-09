---
name: "df"
description: "`df` (disk free) muestra el espacio en disco disponible en los sistemas de archivos montados."
---

## Descripción

`df` (disk free) muestra el espacio en disco disponible en los sistemas de archivos montados.


## Ejemplos de uso

Mostrar espacio en formato legible:

```bash
df -h
```

Mostrar solo sistemas de archivos ext4:

```bash
df -hT ext4
```

Mostrar espacio de un punto de montaje:

```bash
df -h /home
```

Mostrar en porcentaje:

```bash
df -h --output=pcent /
```
