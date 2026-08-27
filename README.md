# Incredible Pizza — Food and Fun

Sitio web de Incredible Pizza Monterrey (Next.js App Router).

## Requisitos

- Node.js 20+
- npm 10+
- Docker (solo para Postgres local) **o** una URL de Neon

## Desarrollo local

```bash
npm install
cp .env.example .env
npm run db:up
npx prisma migrate deploy
npm run db:seed
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Admin: `/backend`.

Sin Docker, pega en `DATABASE_URL` y `DIRECT_URL` la cadena de Neon (gratis) y salta `db:up`.

## Build de producción

```bash
npm run build
npm start
```

`npm run build` genera el cliente Prisma, aplica migraciones y luego compila Next.

## Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canónica. Staging: `https://incrediblepizza.init.com.mx` · Prod: `https://incrediblepizza.mx` |
| `DATABASE_URL` | Postgres. Local: Docker. Vercel: URL **pooled** de Neon (`?pgbouncer=true`) |
| `DIRECT_URL` | Misma base, conexión **directa** (sin pool). Local = `DATABASE_URL`. Vercel: URL non-pooling de Neon |
| `AUTH_SECRET` | Secreto de Auth.js (largo, aleatorio) |
| `AUTH_URL` | Local: `http://localhost:3000`. Vercel: la URL pública del sitio |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Primer admin (`npm run db:seed`) |
| `RESEND_API_KEY` | Opcional. Sin ella las cotizaciones se guardan igual |
| `BLOB_READ_WRITE_TOKEN` | Lo pone Vercel al crear Blob. En local las promos van a `public/uploads/` |

## Deploy en Vercel

No hace falta pagar por el tamaño de este sitio (fotos estáticas + cotizaciones + unas promos).

1. En [vercel.com/new](https://vercel.com/new) conecta `init-pezruido-bruma/pizza-repo`.
2. Framework: **Next.js**. Build: `npm run build`.
3. **Storage → Create Database → Neon** (Postgres). Copia:
   - pooled / Prisma → `DATABASE_URL`
   - direct / non-pooling → `DIRECT_URL`
4. **Storage → Create Store → Blob**. Vercel inyecta `BLOB_READ_WRITE_TOKEN`.
5. Añade el resto: `NEXT_PUBLIC_SITE_URL`, `AUTH_SECRET`, `AUTH_URL` (URL del deploy), `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `MAIL_FROM`. `RESEND_API_KEY` cuando tengan dominio verificado.
6. Deploy.
7. Una vez, contra la base de producción: `npx prisma db seed` (con `DATABASE_URL` / `DIRECT_URL` de Vercel, p. ej. `npx vercel env pull`).
8. En **Domains**, `incrediblepizza.init.com.mx` y más adelante `incrediblepizza.mx`.

Hobby ($0) cubre hosting, Blob (~1 GB) y Neon free. Pro (~$20/mes) es el plan que Vercel pide para sitios de negocio; no es un extra de base de datos ni de fotos.

## Rutas

- `/` Home  
- `/fiestas` `/juegos` `/eventos` `/menu` `/promociones`  
- `/quienes-somos` `/contacto` `/aviso-de-privacidad`  
- `/tienda` redirige a la tienda en línea externa  
- `/backend` admin  
