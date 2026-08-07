---
name: "unzip"
description: "Extrae archivos de un archivo ZIP."
---


## Descripción

`unzip` extrae archivos de un archivo comprimido en formato ZIP.

## Sintaxis

```bash
unzip [opciones] archivo.zip
```

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
