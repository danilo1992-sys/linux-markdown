---
name: "gzip"
description: "`gzip comprime archivos usando el algoritmo de compresión Lempel-Ziv. El archivo original se reemplaza por una versión comprimida `.gz`."
---

## Descripción

`gzip comprime archivos usando el algoritmo de compresión Lempel-Ziv. El archivo original se reemplaza por una versión comprimida `.gz`.


## Ejemplos de uso

Comprimir un archivo:

```bash
gzip archivo.txt
```

Descomprimir un archivo:

```bash
gzip -d archivo.txt.gz
```

Comprimir manteniendo el original:

```bash
gzip -k archivo.txt
```

Nivel de compresión máximo:

```bash
gzip -9 archivo.txt
```
