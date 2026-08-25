---
name: "git add -p"
description: "`git add -p` permite agregar cambios de forma interactiva por porción."
---

## Descripción

`git add -p` permite agregar cambios de forma interactiva por porción (hunk). Permite seleccionar exactamente qué partes de un archivo quieres commitear.


## Ejemplos de uso

Agregar cambios interactivamente:

```bash
git add -p
```

Opciones disponibles durante la interacción:

```
y - agregar esta porción
n - saltar esta porción
s - dividir en porciones más pequeñas
e - editar manualmente la porción
q - salir
```

Agregar solo porciones específicas de un archivo:

```bash
git add -p archivo.txt
```