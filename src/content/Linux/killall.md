---
name: "killall"
description: "`killall` termina todos los procesos que coinciden con un nombre dado."
---

## Descripción

`killall` termina todos los procesos que coinciden con un nombre dado.


## Ejemplos de uso

Terminar todos los procesos firefox:

```bash
killall firefox
```

Forzar terminación:

```bash
killall -9 firefox
```

Terminar con信号 específica:

```bash
killall -HUP nginx
```

Terminar procesos de otro usuario:

```bash
killall -u juan proceso
```
