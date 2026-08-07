---
name: "netstat"
description: "Muestra conexiones de red y estadísticas."
---


## Descripción

`netstat` (network statistics) muestra conexiones de red activas, tablas de enrutamiento y estadísticas de interfaz.

## Sintaxis

```bash
netstat [opciones]
```

## Ejemplos de uso

Mostrar conexiones activas:

```bash
netstat -tuln
```

Mostrar procesos con conexiones:

```bash
netstat -tulnp
```

Mostrar tabla de enrutamiento:

```bash
netstat -r
```

Mostrar estadísticas de interfaz:

```bash
netstat -i
```
