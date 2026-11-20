---
title: Plumy
summary: SaaS B2B multi-tenant para gestorías. Lee las facturas de proveedor con IA, sugiere la cuenta contable, las valida y las exporta tras revisión humana.
year: 2026
status: Desplegado en Azure
featured: true
order: 1
repo: https://github.com/chelomama-dev/plumy
stack: ['.NET 10', 'EF Core', 'Container Apps', 'Service Bus + KEDA', 'Azure SQL', 'Key Vault', 'Bicep', 'GitHub Actions', 'OpenTelemetry', 'Document Intelligence', 'Microsoft Foundry', 'Angular']
highlights:
  - Clean Architecture en Azure Container Apps con Service Bus y KEDA (escala a cero)
  - Sin secretos — Key Vault y Managed Identities; despliegue con Bicep y GitHub Actions (OIDC)
  - Más de 600 tests de backend con xUnit y Testcontainers sobre SQL Server real
---

## El problema

Las gestorías reciben cada trimestre cientos de facturas de proveedor de sus clientes, en PDF o foto, y alguien tiene
que leerlas, decidir a qué cuenta contable va cada una y teclearlas en el programa de contabilidad. Es trabajo
repetitivo, lento y propenso a errores.

## Qué hace Plumy

1. **Subida**: los ficheros van a Blob Storage y se encolan en **Azure Service Bus**.
2. **Lectura**: un *worker* que escala con **KEDA** (hasta cero cuando no hay trabajo) las lee con el modelo de facturas
   de **Azure AI Document Intelligence**.
3. **Sugerencia de cuenta**: gana la última cuenta confirmada para ese proveedor; si no hay, `gpt-5.4-mini` en
   **Microsoft Foundry** elige una del Plan General Contable con *structured outputs*.
4. **Validación determinista**: NIF, base + IVA (− retención) = total, tipos de IVA y duplicados. Los problemas son avisos,
   no errores: la factura se marca para revisión, nunca se rechaza.
5. **Revisión y exportación**: una persona corrige y aprueba, y se exporta a Excel/CSV.

## Arquitectura

- **Clean Architecture**: Domain / Application / Infrastructure / Api / Worker, sobre .NET 10 y EF Core 10.
- **Azure Container Apps** para la API y el worker, **Service Bus + KEDA** para el procesamiento asíncrono,
  **Azure SQL**, **Blob Storage** y **Key Vault**.
- **Sin secretos en el código ni en el pipeline**: Managed Identities entre servicios y GitHub Actions autenticado en
  Azure con **OIDC**.
- **Infraestructura como código con Bicep**: todo el entorno se recrea desde el repositorio.
- **Observabilidad** con OpenTelemetry y Application Insights.

## Decisiones técnicas que destacaría

- **Medir la IA, no fiarse de ella.** Las sugerencias se guardan aparte de las confirmaciones, así que se puede calcular
  con qué frecuencia se mantuvo la cuenta sugerida (separando IA de historial) y qué campos lee peor el modelo.
- **Concurrencia optimista** con `rowversion` expuesto como ETag: una edición con `If-Match` desfasado devuelve `412`.
- **Tests contra SQL Server real**: más de 600 tests de backend con xUnit y Testcontainers, no contra una base en memoria.
- **Pagos con webhooks de Stripe.**
- **12 ADRs** (en inglés) documentan las decisiones de arquitectura dentro del repositorio.
