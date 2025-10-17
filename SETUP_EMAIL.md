# ⚡ Configuración Rápida del Email

## ✅ Ya está implementado:
- ✅ Formulario de contacto funcional
- ✅ API para envío de emails
- ✅ Envío a: atrullen1998@gmail.com
- ✅ Validaciones y mensajes de estado
- ✅ Diseño profesional del email

## 🚀 Pasos para activarlo:

### 1️⃣ Crear cuenta en Resend (GRATIS)
- Ve a: https://resend.com
- Crea una cuenta (gratis, 100 emails/día)
- Verifica tu email

### 2️⃣ Obtener API Key
- Ve a: https://resend.com/api-keys
- Click en "Create API Key"
- Copia la clave (empieza con `re_`)

### 3️⃣ Configurar en tu proyecto
1. Abre el archivo `.env.local`
2. Pega tu API Key:
   ```
   RESEND_API_KEY=re_tu_clave_aqui
   ```
3. Guarda el archivo

### 4️⃣ Reiniciar servidor
```bash
# Detén el servidor actual (Ctrl+C en la terminal)
# Luego ejecuta:
pnpm dev
```

### 5️⃣ ¡Probar!
1. Ve a http://localhost:3001
2. Scroll a "Contacto"
3. Rellena el formulario
4. ¡Envía y revisa tu email!

## 📧 Ejemplo de email que recibirás:

```
De: Portfolio <onboarding@resend.dev>
Para: atrullen1998@gmail.com
Asunto: Nuevo mensaje de [Nombre] desde tu portfolio

[Email bonito en HTML con toda la info del formulario]
```

## 💡 Ventajas:
- ✨ Gratis para portfolio personal
- 🎨 Email profesional con HTML
- 📱 Funciona en todos los dispositivos
- 🔒 Seguro (API key en servidor)
- ⚡ Respuestas instantáneas

## ❓ Si tienes problemas:
1. Verifica que la API Key esté en `.env.local`
2. Asegúrate de reiniciar el servidor
3. Revisa la consola del navegador (F12)
4. Revisa la terminal del servidor

---

📄 Para más detalles, lee: `CONFIGURACION_EMAIL.md`
