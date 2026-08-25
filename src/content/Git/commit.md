---
name: "git commit"
description: "`git commit` confirma los cambios del área de preparación con un mensaje descriptivo."
---

## Descripción

`git commit` confirma los cambios del área de preparación con un mensaje descriptivo. Cada commit representa un punto en el historial del proyecto.


## Ejemplos de uso

Crear un commit con mensaje:

```bash
git commit -m "Agregar funcionalidad de login"
```

Agregar todos los cambios modificados y commitear:

```bash
git commit -am "Corregir bug en formulario"
```

Modificar el último commit:

```bash
git commit --amend -m "Mensaje corregido"
```

Commit sin agregar archivos previamente:

```bash
git commit -m "Inicializar proyecto" -- .
```