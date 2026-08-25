---
name: "git log"
description: "`git log` muestra el historial de commits del repositorio."
---

## Descripción

`git log` muestra el historial de commits del repositorio. Permite ver quién hizo qué cambio y cuándo.


## Ejemplos de uso

Ver historial básico:

```bash
git log
```

Ver en formato compacto:

```bash
git log --oneline
```

Ver con gráfico de ramas:

```bash
git log --oneline --graph --all
```

Ver últimos 5 commits:

```bash
git log -5
```

Ver commits de un autor específico:

```bash
git log --author="Juan"
```

Buscar commits que modificaron un archivo:

```bash
git log -- archivo.txt
```