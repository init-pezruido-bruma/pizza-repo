# Backend admin + cotizaciones + correo

Fecha: 2026-08-18

## Objetivo

Área `/backend` aislada del marketing, auth multi-usuario (Auth.js + Prisma/SQLite), bandeja de cotizaciones y correo Resend opcional sin perder submissions.

## Rutas

- `/backend` — hub (sitio | admin)
- `/backend/login` — credentials
- `/backend/admin/*` — protegido (middleware JWT)
- `POST /api/cotizacion` — público, persiste siempre

## Datos

SQLite (`prisma/dev.db`): User, Quote, MailSettings.

## Correo

Sin `RESEND_API_KEY` o con envío deshabilitado: Quote se guarda; `emailError` registra el motivo. Con API key: Resend a destinatarios de MailSettings.

## Seed

`ADMIN_EMAIL` + `ADMIN_PASSWORD` → `npm run db:seed`
