---
name: "uniq"
description: "Elimina líneas duplicadas de un archivo."
---


## Descripción

`uniq` elimina o reporta líneas duplicadas de un archivo ordenado.

## Sintaxis

```bash
uniq [opciones] archivo
```

## Ejemplos de uso

Eliminar duplicados:

```bash
uniq archivo.txt
```

Contar ocurrencias:

```bash
uniq -c archivo.txt
```

Mostrar solo duplicados:

```bash
uniq -d archivo.txt
```

Ignorar mayúsculas:

```bash
uniq -i archivo.txt
```
