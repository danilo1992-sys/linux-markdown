---
name: "su"
description: "`su` (substitute user) permite cambiar al usuario root o a otro usuario."
---

## Descripción

`su` (substitute user) permite cambiar al usuario root o a otro usuario.


## Ejemplos de uso

Cambiar a root:

```bash
su -
```

Cambiar a otro usuario:

```bash
su - juan
```

Ejecutar comando como root:

```bash
su -c "comando" root
```

Cambiar sin entorno:

```bash
su usuario
```
