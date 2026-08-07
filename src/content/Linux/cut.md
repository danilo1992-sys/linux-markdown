---
name: "cut"
description: "Extrae secciones de cada línea de un archivo."
---


## Descripción

`cut` extrae campos o caracteres específicos de cada línea de un archivo.

## Sintaxis

```bash
cut [opciones] archivo
```

## Ejemplos de uso

Extraer por caracteres:

```bash
cut -c1-5 archivo.txt
```

Extraer por delimitador (columnas):

```bash
cut -d: -f1 /etc/passwd
```

Extraer múltiples campos:

```bash
cut -d, -f1,3 datos.csv
```

Excluir campos:

```bash
cut -d: --complement -f2 /etc/passwd
```
