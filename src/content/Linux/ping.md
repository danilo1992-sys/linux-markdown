---
name: "ping"
description: "Envía paquetes ICMP a un host."
---


## Descripción

`ping` envía paquetes ICMP echo a una dirección de red para verificar la conectividad.

## Sintaxis

```bash
ping [opciones] host
```

## Ejemplos de uso

Hacer ping a un host:

```bash
ping google.com
```

Limitar a 5 paquetes:

```bash
ping -c 5 google.com
```

Ping con intervalo específico:

```bash
ping -i 2 google.com
```

Ping continuo:

```bash
ping google.com
```

Detener con Ctrl+C.
