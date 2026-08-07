---
name: "su"
description: "Cambia de usuario."
---


## Descripción

`su` (substitute user) permite cambiar al usuario root o a otro usuario.

## Sintaxis

```bash
su [opciones] [usuario]
```

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
