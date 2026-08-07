---
name: "sed"
description: "Edita texto de forma automatizada."
---


## Descripción

`sed` (stream editor) es un editor de texto que procesa flujos de texto de forma no interactiva. Es muy potente para buscar, reemplazar y transformar texto.

## Sintaxis

```bash
sed [opciones] 'comando' archivo
```

## Ejemplos de uso

Reemplazar texto:

```bash
sed 's/antiguo/nuevo/g' archivo.txt
```

Eliminar líneas vacías:

```bash
sed '/^$/d' archivo.txt
```

Imprimir solo la línea 5:

```bash
sed -n '5p' archivo.txt
```

Agregar texto después de una línea:

```bash
sed '3a\Nueva línea' archivo.txt
```

Editar archivo in-place:

```bash
sed -i 's/antiguo/nuevo/g' archivo.txt
```
