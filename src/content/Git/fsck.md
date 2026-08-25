---
name: "git fsck"
description: "`git fsck` verifica la integridad de los objetos del repositorio."
---

## Descripción

`git fsck` verifica la integridad de los objetos del repositorio. Detecta objetos corruptos, enlaces rotos y problemas de consistencia.


## Ejemplos de uso

Verificación completa:

```bash
git fsck
```

Verbose (mostrar todo):

```bash
git fsck --verbose
```

Verificar solo objetos sueltos:

```bash
git fsck --unreachable
```

Verificar y mostrar referees:

```bash
git fsck --no-reflogs
```