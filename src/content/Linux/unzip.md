---
name: "unzip"
description: "`unzip` extrae archivos de un archivo comprimido en formato ZIP."
---

## Descripción

`unzip` extrae archivos de un archivo comprimido en formato ZIP.


## Ejemplos de uso

Extraer archivo:

```bash
unzip archivo.zip
```

Extraer en directorio específico:

```bash
unzip archivo.zip -d /destino/
```

Ver contenido sin extraer:

```bash
unzip -l archivo.zip
```

Sobrescribir sin preguntar:

```bash
unzip -o archivo.zip
```
