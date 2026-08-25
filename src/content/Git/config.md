---
name: "git config"
description: "`git config` configura opciones globales, locales o del repositorio de Git."
---

## Descripción

`git config` configura opciones globales, locales o del repositorio de Git. Permite personalizar nombre, email, editor y otras preferencias.


## Ejemplos de uso

Configurar nombre de usuario:

```bash
git config --global user.name "Tu Nombre"
```

Configurar email:

```bash
--global user.email "tu@email.com"
```

Configurar editor predeterminado:

```bash
git config --global core.editor "code --wait"
```

Ver toda la configuración:

```bash
git config --list
```

Configurar un alias:

```bash
git config --global alias.st status
```

Configurar para una rama específica:

```bash
git config user.email "proyecto@email.com"
```