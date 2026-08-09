---
name: "grep"
description: "`grep` (global regular expression print) busca líneas que coinciden con un patrón en archivos de texto."
---

## Descripción

`grep` (global regular expression print) busca líneas que coinciden con un patrón en archivos de texto.


## Ejemplos de uso

Buscar una palabra:

```bash
grep "error" log.txt
```

Búsqueda insensible a mayúsculas:

```bash
grep -i "error" log.txt
```

Mostrar número de línea:

```bash
grep -n "error" log.txt
```

Buscar recursivamente:

```bash
grep -r "función" /src/
```

Invertir coincidencia:

```bash
grep -v "comentario" archivo.txt
```
