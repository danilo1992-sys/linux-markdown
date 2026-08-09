---
name: "ls"
description: "`ls` (list) muestra el contenido de un directorio: archivos y subdirectorios. Es uno de los comandos más usados en Linux."
---

## Descripción

`ls` (list) muestra el contenido de un directorio: archivos y subdirectorios. Es uno de los comandos más usados en Linux.


## Opciones comunes

| Opción | Descripción |
| ------ | ----------- |
| `-l` | Formato largo: permisos, propietario, tamaño y fecha. |
| `-a` | Incluye archivos ocultos (los que empiezan por `.`). |
| `-h` | Muestra tamaños en formato legible (KB, MB, GB). |
| `-R` | Lista recursivamente los subdirectorios. |
| `-t` | Ordena por fecha de modificación (más recientes primero). |
| `-S` | Ordena por tamaño de archivo. |

## Ejemplos de uso

Listar el directorio actual en formato largo y legible:

```bash
ls -lh
```

Listar archivos ocultos de un directorio concreto:

```bash
ls -la /etc
```

Listar recursivamente el árbol de `src`:

```bash
ls -R src
```
