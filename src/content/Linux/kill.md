---
name: "kill"
description: "`kill` envía una señal a un proceso para terminarlo o controlarlo."
---

## Descripción

`kill` envía una señal a un proceso para terminarlo o controlarlo.


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
