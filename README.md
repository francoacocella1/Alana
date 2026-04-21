# Alana Landing

Pagina de confirmacion en Next.js (flujo en 2 pasos, estilo pagina de gracias):

- Paso 1: progreso, avisos y video de YouTube embebido.
- Paso 2: checklist para finalizar la reserva.
- (Opcional) API de contacto, Prisma y Resend siguen en el repo si los queres usar despues.

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
3. Configurar al menos `NEXT_PUBLIC_YOUTUBE_EMBED_URL` para tu video. El resto solo si usas el endpoint de contacto.
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
- `NEXT_PUBLIC_YOUTUBE_EMBED_URL`

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
