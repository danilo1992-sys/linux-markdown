---
name: "git submodule"
description: "`git submodule` gestiona repositorios anidados dentro de otro repositorio."
---

## Descripción

`git submodule` gestiona repositorios anidados dentro de otro repositorio. Permite incluir otros proyectos como dependencias.


## Ejemplos de uso

Agregar un submódulo:

```bash
git submodule add https://github.com/usuario/libreria.git libs/libreria
```

Clonar con submódulos:

```bash
git clone --recurse-submodules https://github.com/usuario/repo.git
```

Actualizar submódulos:

```bash
git submodule update --remote
```

Inicializar submódulos:

```bash
git submodule init
```

Eliminar un submódulo:

```bash
git submodule deinit libs/libreria
git rm libs/libreria
```