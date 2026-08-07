---
name: "ip"
description: "Muestra o configura interfaces de red."
---


## Descripción

`ip` es la herramienta moderna para administrar interfaces de red, direcciones IP, rutas y más.

## Sintaxis

```bash
ip [opciones] objeto
```

## Ejemplos de uso

Mostrar interfaces de red:

```bash
ip addr
```

Mostrar solo interfaces activas:

```bash
ip -br addr
```

Mostrar tabla de enrutamiento:

```bash
ip route
```

Mostrar conexiones de red:

```bash
ip link show
```
