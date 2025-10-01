# Frontend Next.js Portal de Ofertas

🚀 Proyecto: Portal de ofertas para estudiantes
Tecnologías: Next.js, TypeScript, Tailwind CSS, PWA (offline básico)
Estado: Integrado con backend FastAPI + PostgreSQL, mostrando ofertas reales.

---

## Descripción

Este proyecto es un frontend en Next.js que muestra un listado de ofertas para estudiantes desde un backend FastAPI conectado a PostgreSQL.
Incluye:

* Página principal con listado de ofertas reales desde la base de datos.
* Muestra el nombre de la empresa asociada a cada oferta.
* Páginas de login y registro (UI, sin backend de autenticación aún).
* Diseño responsive con Tailwind CSS.
* Preparado para PWA (funcionamiento offline básico).

---

## Instalación

1. Clona el repositorio:

git clone https://github.com/Carmencalvocano/frontend-nextjs-portal.git
cd frontend-nextjs-portal

2. Instala dependencias:

npm install

3. Ejecuta la app en modo desarrollo:

npm run dev

4. Abre http://localhost:3000 en tu navegador.

---

## Estructura del proyecto

frontend-nextjs-portal/
 ┣ app/
 ┃ ┣ page.tsx         # Página principal con listado de ofertas reales
 ┃ ┣ layout.tsx       # Layout general
 ┣ public/            # Archivos estáticos (logo, imágenes)
 ┣ screenshots/       # Capturas del seguimiento
 ┣ styles/            # Estilos globales
 ┣ package.json
 ┣ tsconfig.json

---

## Cómo usar

* Las ofertas se cargan desde el backend FastAPI a través de fetch.
* Se muestran en la página principal con título, descripción y nombre de la empresa.
* Backend FastAPI está conectado a PostgreSQL.
* Próximamente se añadirá: autenticación real, matching y recomendación IA.

---

## Capturas

<<<<<<< HEAD
![Listado de ofertas](Screenshots/Version1_Show_offers_basic_2025-09-30.png)
=======
![Listado de ofertas](/frontend-nextjs-portal/screenshots/Version1_Show_offers_basic_2025-09-30.png)
![Listado de ofertas CONEXIÓN CON API](/frontend-nextjs-portal/screenshots/Version2_Show_offers_basic_2025-09-30.png)
>>>>>>> 21d7815 (✨ Frontend Next.js integrado con backend FastAPI y PostgreSQL, mostrando ofertas reales)

---

## Próximos pasos

* Autenticación real de usuarios.
* Funcionalidad de matching de ofertas según skills de estudiantes.
* Agregar endpoint de recomendación con IA (LangChain / HuggingFace).
* Generar QR para eventos.
* Despliegue en Vercel (frontend) y Render/Railway (backend).

---

## Autor

Carmen Calvo Cano – https://github.com/Carmencalvocano
