---
name: "git commit -m"
description: "`git commit -m` crea un commit con un mensaje inline sin abrir editor."
---

## Descripción

`git commit -m` crea un commit con un mensaje inline sin abrir editor. Es la forma más rápida de confirmar cambios.


## Ejemplos de uso

Crear commit con mensaje simple:

```bash
git commit -m "Agregar botón de login"
```

Crear commit con mensaje descriptivo:

```bash
git commit -m "feat: implementar autenticación de usuarios"
```

Crear commit multilinea:

```bash
git commit -m "Fix: corregir validación de formulario

- Se agregó validación de email
- Se mejoró UX del campo contraseña
- Se cerró issue #42"
```