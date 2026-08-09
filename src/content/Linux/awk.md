---
name: "awk"
description: "`awk` es un lenguaje de procesamiento de texto que permite buscar, manipular y extraer información de archivos. Es ideal para trabajar con datos estructurados en columnas."
---

# Descripción

`awk` es un lenguaje de procesamiento de texto que permite buscar, manipular y extraer información de archivos. Es ideal para trabajar con datos estructurados en columnas.

## Ejemplos de uso

Mostrar la primera columna de un archivo:

```bash
awk '{print $1}' archivo.txt
```

Mostrar la segunda y tercera columna:

```bash
awk '{print $2, $3}' archivo.txt
```

Filtrar líneas que contienen una palabra:

```bash
awk '/error/ {print}' log.txt
```

Usar un delimitador personalizado:

```bash
awk -F: '{print $1}' /etc/passwd
```
