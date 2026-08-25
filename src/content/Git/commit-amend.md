---
name: "git commit --amend"
description: "`git commit --amend` modifica el último commit sin crear uno nuevo."
---

## Descripción

`git commit --amend` modifica el último commit sin crear uno nuevo. Permite corregir mensajes o agregar archivos olvidados.


## Ejemplos de uso

Corregir el mensaje del último commit:

```bash
git commit --amend -m "Mensaje corregido"
```

Agregar archivos olvidados al último commit:

```bash
git add archivo-olvidado.txt
git commit --amend --no-edit
```

Cambiar solo el autor:

```bash
git commit --amend --author="Nuevo Autor <email@ejemplo.com>"
```

Abrir editor para modificar mensaje:

```bash
git commit --amend
```