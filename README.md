# Alana Landing

Landing page en Next.js para capturar leads y agendar reuniones:

- Hero con titulo y bajada principal.
- Video de YouTube embebido.
- Formulario de contacto con validacion.
- Calendly embebido para agendado.
- Persistencia de leads en PostgreSQL (via Prisma).
- Notificacion de nuevos contactos por email (Resend).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Prisma + PostgreSQL (Neon recomendado)
- Resend
- Deploy en Vercel

## Setup local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Copiar variables de entorno:
   ```bash
   cp .env.example .env
   ```
3. Configurar `DATABASE_URL`, `RESEND_API_KEY`, `CONTACT_NOTIFICATION_EMAIL` y `NEXT_PUBLIC_CALENDLY_URL`.
4. Ejecutar migracion inicial de base de datos:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Levantar el proyecto:
   ```bash
   npm run dev
   ```

## Variables de entorno

Ver `.env.example`:

- `DATABASE_URL`
- `RESEND_API_KEY`
- `CONTACT_NOTIFICATION_EMAIL`
- `NEXT_PUBLIC_CALENDLY_URL`

## Deploy en Vercel + GitHub

1. Subir repositorio a GitHub.
2. En Vercel, importar el repo.
3. Cargar las variables de entorno en Project Settings.
4. Confirmar que cada PR tenga Preview Deployment.
5. Hacer merge a `main` para publicar en produccion.

## Dominio propio (futuro)

1. Comprar/configurar dominio con tu proveedor.
2. Agregar el dominio en Vercel (Project > Settings > Domains).
3. Configurar registros DNS (A/CNAME) segun indique Vercel.
4. Verificar HTTPS activo automaticamente.
