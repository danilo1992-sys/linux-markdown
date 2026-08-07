---
name: "top"
description: "Monitorea procesos en tiempo real."
---


## Descripción

`top` muestra información en tiempo real sobre los procesos activos del sistema, incluyendo uso de CPU y memoria.

## Sintaxis

```bash
top [opciones]
```

## Ejemplos de uso

Iniciar monitoreo:

```bash
top
```

Monitorear procesos de un usuario:

```bash
 top -u juan
```

Actualizar cada 2 segundos:

```bash
 top -d 2
```

Mostrar proceso específico:

```bash
 top -p 1234
```
