# 📧 Configuración del Formulario de Contacto

## Cómo configurar el envío de correos

Tu portfolio incluye un formulario de contacto que envía emails a `atrullen1998@gmail.com` usando Resend.

### Paso 1: Crear cuenta en Resend

1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita (incluye 100 emails/día gratis)
3. Verifica tu email

### Paso 2: Obtener tu API Key

1. Ve a [https://resend.com/api-keys](https://resend.com/api-keys)
2. Haz clic en "Create API Key"
3. Dale un nombre (ej: "Portfolio")
4. Copia la API Key (solo la verás una vez)

### Paso 3: Configurar la API Key

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza el contenido con:
   ```
   RESEND_API_KEY=re_tu_api_key_aqui
   ```
3. Guarda el archivo

### Paso 4: Reiniciar el servidor

```bash
# Detén el servidor (Ctrl+C)
# Vuelve a iniciar
pnpm dev
```

### Paso 5: Probar el formulario

1. Ve a tu portfolio en `http://localhost:3001`
2. Navega a la sección de Contacto
3. Rellena el formulario y envía
4. Deberías recibir un email en `atrullen1998@gmail.com`

## 🎨 Características del formulario

- ✅ Validación de campos
- ✅ Indicador de carga mientras se envía
- ✅ Mensajes de éxito/error
- ✅ Email formateado con HTML profesional
- ✅ Responder directamente desde tu email al remitente
- ✅ Información completa del mensaje

## 📝 Notas importantes

- **Dominio personalizado**: Por defecto, los emails se envían desde `onboarding@resend.dev`. Para usar tu propio dominio (ej: `contacto@tusitio.com`), necesitas:
  1. Tener un dominio registrado
  2. Añadirlo en Resend
  3. Configurar los registros DNS
  4. Actualizar el campo `from` en `src/app/api/send-email/route.ts`

- **Límites gratuitos**: 
  - 100 emails/día
  - 3,000 emails/mes
  - Perfecto para un portfolio personal

## 🔒 Seguridad

- La API Key nunca se expone al cliente
- El archivo `.env.local` está en `.gitignore`
- Todas las peticiones son validadas en el servidor

## 🚀 Para producción

Cuando despliegues tu portfolio (Vercel, Netlify, etc.):

1. Ve a la configuración de variables de entorno de tu plataforma
2. Añade `RESEND_API_KEY` con tu clave
3. Redespliega la aplicación

¡Listo! Tu formulario de contacto está funcionando. 🎉
