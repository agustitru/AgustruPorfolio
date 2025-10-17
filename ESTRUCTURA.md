# 📋 Estructura del Proyecto

## 📁 Archivos Principales

### Configuración
- `package.json` - Dependencias y scripts del proyecto
- `pnpm-lock.yaml` - Lockfile de pnpm
- `tsconfig.json` - Configuración de TypeScript
- `next.config.ts` - Configuración de Next.js
- `tailwind.config.ts` - Configuración de Tailwind CSS (en next.config.ts)
- `postcss.config.mjs` - Configuración de PostCSS
- `eslint.config.mjs` - Configuración de ESLint
- `.gitignore` - Archivos ignorados por Git
- `.env.local` - Variables de entorno (NO subir a Git)
- `.env.example` - Ejemplo de variables de entorno

### Documentación
- `README.md` - Documentación principal del proyecto
- `SETUP_EMAIL.md` - Guía rápida de configuración de emails
- `CONFIGURACION_EMAIL.md` - Guía detallada de configuración de emails

## 📂 Carpeta /src

### /src/app
- `layout.tsx` - Layout raíz de la aplicación
- `page.tsx` - Página principal (Home)
- `globals.css` - Estilos globales CSS
- `favicon.ico` - Icono del sitio

### /src/app/api
- `/send-email/route.ts` - API para enviar emails del formulario
- `/test-email/route.ts` - API para probar envío de emails

### /src/components
Todos los componentes React del portfolio:

- `Header.tsx` - Barra de navegación fija
- `Hero.tsx` - Sección principal con foto y presentación
- `About.tsx` - Sección "Sobre mí" con información personal
- `Services.tsx` - Lista de servicios ofrecidos
- `Projects.tsx` - Proyectos destacados
- `Experience.tsx` - Timeline de experiencia laboral
- `Contact.tsx` - Formulario de contacto
- `Footer.tsx` - Pie de página

## 📂 Carpeta /public

Archivos estáticos accesibles públicamente:

- `AgustiTrullenProfile.png` - Foto de perfil
- `CV_AgustíTrullénMulet.pdf` - Currículum en PDF

## 🗑️ Archivos Eliminados

Los siguientes archivos se eliminaron por ser innecesarios:

### SVGs de Next.js (no utilizados)
- ❌ `file.svg`
- ❌ `globe.svg`
- ❌ `next.svg`
- ❌ `vercel.svg`
- ❌ `window.svg`

### Archivos de gestores de paquetes no utilizados
- ❌ `package-lock.json` (usamos pnpm)

## 📊 Tamaño del Proyecto

### Dependencias Principales
```json
{
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "next": "15.5.6",
  "resend": "^4.x",
  "@react-email/components": "^0.5.7",
  "@react-email/render": "^1.4.0"
}
```

### Dev Dependencies
```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4",
  "eslint": "^9",
  "eslint-config-next": "15.5.6",
  "prettier": "^3.6.2"
}
```

## 🎯 Archivos Importantes

### NO modificar sin cuidado:
- `pnpm-lock.yaml` - Mantiene versiones exactas
- `tsconfig.json` - Configuración de TypeScript
- `next.config.ts` - Configuración crítica de Next.js

### Modificar según necesidad:
- `.env.local` - Variables de entorno (API keys)
- `src/app/page.tsx` - Orden de las secciones
- `src/components/*` - Contenido y estilos de cada sección

### Documentación:
- `README.md` - Mantener actualizado
- `SETUP_EMAIL.md` - Instrucciones para nuevos usuarios

## 🔒 Seguridad

### Archivos sensibles (NO compartir):
- `.env.local` - Contiene API Keys
- `node_modules/` - Carpeta de dependencias

### Archivos seguros para compartir:
- `.env.example` - Plantilla sin datos sensibles
- Todo en `/src` - Código fuente
- `/public` - Archivos públicos (excepto info sensible)

## 🚀 Flujo de Desarrollo

1. **Desarrollo Local**: `pnpm dev`
2. **Hacer cambios** en `/src/components`
3. **Verificar** en navegador
4. **Commit** de cambios
5. **Push** a repositorio
6. **Deploy** automático en Vercel

## 📝 Notas

- El proyecto usa **pnpm** como gestor de paquetes
- Todas las rutas de API están en `/src/app/api`
- Los componentes son **Client Components** (`'use client'`) cuando necesitan interactividad
- Las imágenes están optimizadas con `next/image`
- El proyecto usa **Tailwind CSS v4** con PostCSS
- TypeScript está configurado en modo estricto
