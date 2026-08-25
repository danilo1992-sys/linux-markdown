---
name: "git gc"
description: "`git gc` ejecuta garbage collection para optimizar el repositorio."
---

## Descripción

`git gc` ejecuta garbage collection para optimizar el repositorio. Compacta objetos, elimina sueltos y optimiza el almacenamiento.


## Ejemplos de uso

Ejecutar gc estándar:

```bash
git gc
```

Ejecutar gc agresivo:

```bash
git gc --aggressive
```

Ejecutar gc rápido:

```bash
git gc --quick
```

Verificar y reparar antes de gc:

```bash
git fsck && git gc
```

Forzar gc completo:

```bash
git gc --prune=now
```