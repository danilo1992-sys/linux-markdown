---
name: "date"
description: "Muestra o establece la fecha y hora del sistema."
---


## Descripción

`date` muestra la fecha y hora actual del sistema, o permite establecer una nueva fecha.

## Sintaxis

```bash
date [opciones] [+formato]
```

## Ejemplos de uso

Mostrar fecha y hora actual:

```bash
date
```

Formato personalizado:

```bash
date "+%Y-%m-%d %H:%M:%S"
```

Mostrar solo la fecha:

```bash
date "+%d/%m/%Y"
```

Calcular tiempo de ejecución:

```bash
date +%s
```
