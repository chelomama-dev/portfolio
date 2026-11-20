---
title: Finances Hub
summary: Monitor financiero personal de solo lectura. Une mis dos bancos vía PSD2 para ver el saldo total y los movimientos de cada cuenta en una app Android.
year: 2026
status: En desarrollo
featured: true
order: 2
repo: https://github.com/chelomama-dev/finances-hub
stack: ['.NET 10', 'Minimal APIs', 'Container Apps Jobs', 'Azure SQL Serverless', 'Key Vault', '.NET Aspire', 'Bicep', 'PSD2', 'Flutter']
highlights:
  - API contract-first (OpenAPI + ProblemDetails) con paginación por cursor
  - JWT RS256 con la clave de firma en Key Vault
  - Sincronización programada con Container Apps Jobs; NuGet Audit y locked mode en CI
---

## El problema

Tengo dinero en dos bancos (Caja Rural de Navarra y Trade Republic) y quería ver en un solo sitio cuánto tengo y qué se
mueve en cada cuenta, sin dar acceso a mis datos a apps de terceros.

## Qué hace

- **Saldo total** de todas las cuentas en una cifra, y **saldo por banco**.
- **Movimientos por cuenta**, del más reciente al más antiguo, con filtros por fecha y por ingreso/gasto.
- **Solo lectura**: la app solo pide acceso de lectura a la información de cuentas (PSD2 AIS). Nunca mueve dinero.
- **Modo demo**: un proveedor de banco falso para ejecutarla y enseñarla sin cuentas reales.

## Cómo funciona

Los dos bancos se leen mediante la API de **Enable Banking**, un agregador de las APIs PSD2. Un job programado en
**Azure Container Apps Jobs** sincroniza cuentas, saldos y movimientos en **Azure SQL Serverless**, y una API en .NET
los sirve a la app Android hecha en Flutter.

```
Bancos ──PSD2──▶ Enable Banking ──▶ Container Apps Job ──▶ Azure SQL ──▶ API .NET ──▶ App Flutter
```

## Decisiones técnicas

- **Contract-first**: el contrato OpenAPI manda; los errores siguen `ProblemDetails`.
- **Paginación por cursor** en los movimientos, estable aunque entren datos nuevos.
- **JWT RS256** con la clave privada en **Key Vault**, nunca en configuración.
- **.NET Aspire 13 + Docker** para el entorno local; **Bicep** para la infraestructura.
- **Cadena de suministro**: NuGet Audit y *locked mode* en CI para que el build falle ante dependencias vulnerables
  o no fijadas.

> Proyecto en desarrollo: la solución está montada y las funcionalidades se están construyendo.
