# Checklist pendientes — Incredible Pizza

Estado revisado · 18 ago 2026

---

## ✅ Hecho (front / copy / links)

| ID | Estado |
|---|---|
| **QUI-01** | Hero ¿Quiénes somos? con texto Monterrey |
| **QUI-03** | Bloque institucional Incredible Food & Fun |
| **MEN-03** | Uber / Rappi / DiDi con URLs de tienda + logos |
| **GEN-03** | Redes sociales reales en footer |
| **HOM-01 / QUI-02** | “Compra aquí” → `storeUrl` (confirmar si es la URL final de prod) |
| **MEN-01 / MEN-06** | Pepperoni, queso, Boneless, Alitas sin fondo. **Falta** foto real Hawaiana y Espagueti |
| **EVE-09** | Formulario → `POST /api/cotizacion` + bandeja admin + Resend opcional |
| Resto front checklist Natalia | Precios menú out, fiestas/eventos/home/contacto/footer/promos/juegos Tiny Town, etc. |

---

## 🟡 Pendiente de cliente / marketing (no backend)

| ID | Qué falta |
|---|---|
| **HOM-01** | Confirmar URL final tienda en línea |
| **MEN-01** | Foto Hawaiana + foto Espagueti |
| **JUE-03** | Foto cranes (máquinas de garra) |
| **EVE-07 / PRO** | Artes nuevas de promociones del mes |
| **QUI-07** | Fotos 4 comedores (Dinner, Starlite, Gymnasium, The Family Room) |
| **FIE-12** | Fotos extras/charolas de fiesta |
| **FIE-05 / FIE-11** | ¿Sustituir Express por otro paquete o quedan 3? |
| **Legal** | Texto oficial `/terminos` y `/aviso-de-privacidad` |
| **Facturación** | Correo oficial, plazos y copy definitivo de `/facturacion` |

---

## 🔴 Backend restante

| ID | Estado |
|---|---|
| **EVE-09** | ✅ Admin `/backend`. Conectar `RESEND_API_KEY` en Vercel para envío real. |
| **EVE-08** | ✅ Admin `/backend/admin/promociones`: subir, publicar, archivar. En Vercel las fotos van a Blob. |
| **DB prod** | ✅ Prisma usa PostgreSQL (Neon en Vercel; Docker en local). |

### Cómo usar el backend local

1. Copiar `.env.example` → `.env` (ya incluye `DATABASE_URL`, `DIRECT_URL`, `AUTH_SECRET`, admin).
2. `npm run db:up` (Postgres local) → `npx prisma migrate deploy` / `npm run db:seed`
3. Abrir `/backend` → Ir al admin → login con `ADMIN_EMAIL` / `ADMIN_PASSWORD`
4. Opcional: `RESEND_API_KEY` + remitente verificado en Resend

---

## Orden sugerido

1. Poner `RESEND_API_KEY` en staging cuando tengan dominio verificado.
2. CMS promos (**EVE-08**).
3. Fotos faltantes + textos legales.
