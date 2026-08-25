---
name: "git sparse-checkout"
description: "`git sparse-checkout` permite checkout selectivo de archivos y directorios."
---

## Descripción

`git sparse-checkout` permite checkout selectivo de archivos y directorios. Ideal para repositorios grandes donde solo necesitas partes específicas.


## Ejemplos de uso

Habilitar sparse-checkout:

```bash
git sparse-checkout init
```

Definir directorios a incluir:

```bash
git sparse-checkout set src/ docs/
```

Agregar un directorio adicional:

```bash
git sparse-checkout add tests/
```

Ver configuración actual:

```bash
git sparse-checkout list
```

Desactivar sparse-checkout:

```bash
git sparse-checkout disable
```