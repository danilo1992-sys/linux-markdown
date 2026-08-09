---
name: "top"
description: "`top` muestra información en tiempo real sobre los procesos activos del sistema, incluyendo uso de CPU y memoria."
---

## Descripción

`top` muestra información en tiempo real sobre los procesos activos del sistema, incluyendo uso de CPU y memoria.


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
