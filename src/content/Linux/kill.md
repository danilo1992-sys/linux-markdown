---
name: "kill"
description: "Termina procesos por su PID."
---


## Descripción

`kill` envía una señal a un proceso para terminarlo o controlarlo.

## Sintaxis

```bash
kill [señal] PID
```

## Ejemplos de uso

Terminar un proceso:

```bash
kill 1234
```

Forzar terminación:

```bash
kill -9 1234
```

Enviar señal SIGTERM:

```bash
kill -15 1234
```

Suspender un proceso:

```bash
kill -STOP 1234
```
