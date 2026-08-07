---
name: "ps"
description: "Muestra procesos en ejecución."
---


## Descripción

`ps` (process status) muestra información sobre los procesos activos en el sistema.

## Sintaxis

```bash
ps [opciones]
```

## Ejemplos de uso

Mostrar todos los procesos:

```bash
ps aux
```

Mostrar procesos del usuario actual:

```bash
ps
```

Buscar un proceso específico:

```bash
ps aux | grep firefox
```

Mostrar árbol de procesos:

```bash
ps ef
```
