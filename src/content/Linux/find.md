---
name: "find"
description: "Busca archivos en un directorio."
---


## Descripción

`find` busca archivos y directorios en una jerarquía según criterios especificados.

## Sintaxis

```bash
find [directorio] [criterios]
```

## Ejemplos de uso

Buscar por nombre:

```bash
find /home -name "*.txt"
```

Buscar archivos modificados hace 7 días:

```bash
find / -mtime -7
```

Buscar archivos vacíos:

```bash
find / -empty
```

Eliminar archivos .log antiguos:

```bash
find /var/log -name "*.log" -mtime +30 -delete
```
