# Frontend Next.js Portal de Ofertas

🚀 **Proyecto:** Portal de ofertas para estudiantes
**Tecnologías:** Next.js, TypeScript, Tailwind CSS, PWA (offline básico)
**Estado:** Mock de datos inicial, listo para integrar backend.

---

## Descripción

Este proyecto es un **frontend en Next.js** que muestra un listado de ofertas para estudiantes.
Incluye:

* Página principal con listado de ofertas.
* Páginas de login y registro (UI, sin backend aún).
* Diseño responsive con Tailwind CSS.
* Preparado para PWA (funcionamiento offline básico).

---

## Instalación

1. Clona el repositorio:

```
git clone https://github.com/Carmencalvocano/frontend-nextjs-portal.git
cd frontend-nextjs-portal
```

2. Instala dependencias:

```
npm install
```

3. Ejecuta la app en modo desarrollo:

```
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Estructura del proyecto

```
frontend-nextjs-portal/
 ┣ app/
 ┃ ┣ page.tsx         # Página principal con listado de ofertas
 ┃ ┣ layout.tsx       # Layout general
 ┣ public/            # Archivos estáticos (logo, imágenes)
 ┣ screenshots/       # Capturas del seguimiento
 ┣ styles/            # Estilos globales
 ┣ data/offers.ts     # Mock de ofertas
 ┣ package.json
 ┣ tsconfig.json
```

---

## Cómo usar

* Las ofertas se cargan desde `data/offers.ts` (mock JSON).
* Se muestran en la página principal.
* Más adelante se integrará con backend FastAPI y base de datos PostgreSQL.

---

## Capturas

![Listado de ofertas](/frontend-nextjs-portal/Screenshots/Version1_Show_offers_basic_2025-09-30%20.png)

---

## Próximos pasos

* Integración con backend FastAPI + PostgreSQL.
* Autenticación real de usuarios.
* Funcionalidad de matching y QR.
* Despliegue en Vercel (frontend) y Render/Railway (backend).

---

## Autor

Carmen Calvo Cano – [Carmencalvocano](https://github.com/Carmencalvocano)
