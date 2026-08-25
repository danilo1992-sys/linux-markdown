---
name: "git clone"
description: "`git clone` clona un repositorio existente en una nueva carpeta local."
---

## Descripción

`git clone` clona un repositorio existente en una nueva carpeta local. Descarga todo el historial, ramas y archivos del repositorio remoto.


## Ejemplos de uso

Clonar un repositorio:

```bash
git clone https://github.com/usuario/repo.git
```

Clonar en un directorio específico:

```bash
git clone https://github.com/usuario/repo.git mi-carpeta
```

Clonar una rama específica:

```bash
git clone -b develop https://github.com/usuario/repo.git
```

Clonar solo el último commit (shallow clone):

```bash
git clone --depth 1 https://github.com/usuario/repo.git
```