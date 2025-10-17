# 🎨 Portfolio de Agustí Trullén

Portfolio profesional de **Agustí Trullén**, Ingeniero en Telecomunicaciones especializado en desarrollo de software, redes y telecomunicaciones.

## 🚀 Características

- ✅ **Diseño Moderno y Responsive** - Se adapta a todos los dispositivos
- ✅ **Dark Mode Automático** - Modo oscuro según preferencias del sistema
- ✅ **Navegación Suave** - Transiciones fluidas entre secciones
- ✅ **Formulario de Contacto Funcional** - Envío de emails con Resend
- ✅ **Optimizado para SEO** - Metadatos y estructura semántica
- ✅ **Performance Optimizada** - Imágenes optimizadas con Next.js

## 📂 Estructura del Proyecto

```
agustrus-web/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── send-email/      # API para envío de emails
│   │   │   └── test-email/      # API de prueba de emails
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx             # Página principal
│   │   └── globals.css          # Estilos globales
│   └── components/
│       ├── Header.tsx           # Navegación
│       ├── Hero.tsx             # Sección principal
│       ├── About.tsx            # Sobre mí
│       ├── Services.tsx         # Servicios
│       ├── Projects.tsx         # Proyectos destacados
│       ├── Experience.tsx       # Experiencia laboral
│       ├── Contact.tsx          # Formulario de contacto
│       └── Footer.tsx           # Pie de página
├── public/
│   ├── AgustiTrullenProfile.png # Foto de perfil
│   └── CV_AgustíTrullénMulet.pdf # Currículum
└── .env.local                   # Variables de entorno

```

## 🛠️ Tecnologías

- **Framework**: [Next.js 15.5.6](https://nextjs.org)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com)
- **Emails**: [Resend](https://resend.com)
- **Gestor de paquetes**: pnpm

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/agustrus-web.git

# Entrar al directorio
cd agustrus-web

# Instalar dependencias
pnpm install

# Copiar el archivo de variables de entorno
cp .env.example .env.local

# Configurar tu API Key de Resend en .env.local
# RESEND_API_KEY=tu_api_key_aqui
```

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📧 Configuración de Emails

Para que el formulario de contacto funcione:

1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API Key
3. Añádela en `.env.local`:
   ```
   RESEND_API_KEY=re_tu_api_key
   ```
4. Reinicia el servidor

Ver [SETUP_EMAIL.md](./SETUP_EMAIL.md) para más detalles.

## 🏗️ Build para Producción

```bash
# Crear build optimizado
pnpm build

# Iniciar servidor de producción
pnpm start
```

## 📝 Scripts Disponibles

```bash
pnpm dev       # Desarrollo con Turbopack
pnpm build     # Build de producción
pnpm start     # Servidor de producción
pnpm lint      # Linter
```

## 🌐 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Conecta tu repositorio
2. Añade `RESEND_API_KEY` en variables de entorno
3. Deploy automático

### Otras plataformas

- **Netlify**: Compatible
- **Railway**: Compatible
- **AWS Amplify**: Compatible

## 📄 Licencia

© 2025 Agustí Trullén. Todos los derechos reservados.

## 📞 Contacto

- **LinkedIn**: [Agustí Trullén](https://www.linkedin.com/in/agust%C3%AD-trull%C3%A9n-b6839a22b/)
- **Email**: atrullen1998@gmail.com
- **Portfolio**: [agustrus.com](https://agustrus.com)
