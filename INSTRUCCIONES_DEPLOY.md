# 🎯 Pasos para Subir a Producción - GUÍA COMPLETA

## ✅ Lo que ya está listo:

1. ✅ Código completado
2. ✅ Commit realizado
3. ✅ Proyecto limpio
4. ✅ Documentación completa

---

## 📤 PASO 1: Subir a GitHub

### 1.1 Crear repositorio en GitHub

1. Ve a: https://github.com/new
2. Configura:
   - **Repository name**: `agustru-portfolio` (o el nombre que prefieras)
   - **Description**: `Portfolio profesional de Agustí Trullén`
   - **Public** o **Private** (tu elección)
   - ❌ NO marques "Add a README file"
   - ❌ NO añadas .gitignore
   - ❌ NO añadas licencia
3. Click en **"Create repository"**

### 1.2 Conectar tu proyecto local con GitHub

Copia y ejecuta estos comandos en tu terminal (PowerShell):

```powershell
cd "c:\Agustru's Company\agustrus-web"

# Añadir el repositorio remoto (CAMBIA tu-usuario por tu usuario de GitHub)
git remote add origin https://github.com/tu-usuario/agustru-portfolio.git

# Cambiar nombre de rama a main (si es necesario)
git branch -M main

# Subir tu código
git push -u origin main
```

**IMPORTANTE**: Reemplaza `tu-usuario` con tu nombre de usuario de GitHub.

Si te pide credenciales:
- Usuario: tu usuario de GitHub
- Contraseña: usa un **Personal Access Token** (no tu contraseña normal)

### 1.3 Crear Personal Access Token (si es necesario)

1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token" → "Generate new token (classic)"
3. Configura:
   - Note: `Vercel Deploy`
   - Expiration: `90 days`
   - Marca: `repo` (todos los permisos de repo)
4. Click "Generate token"
5. **COPIA EL TOKEN** (solo lo verás una vez)
6. Úsalo como contraseña cuando Git te lo pida

---

## 🚀 PASO 2: Deploy en Vercel

### 2.1 Crear cuenta en Vercel

1. Ve a: https://vercel.com/signup
2. Click en **"Continue with GitHub"**
3. Autoriza Vercel
4. ¡Ya tienes cuenta!

### 2.2 Importar tu proyecto

1. En Vercel, click en **"Add New..."** → **"Project"**
2. Busca tu repositorio `agustru-portfolio`
3. Click en **"Import"**

### 2.3 Configurar el proyecto

Vercel detectará automáticamente Next.js, pero verifica:

- **Framework Preset**: Next.js ✅
- **Root Directory**: `./` ✅
- **Build Command**: `pnpm build` ✅
- **Output Directory**: `.next` ✅
- **Install Command**: `pnpm install` ✅

### 2.4 ⚠️ IMPORTANTE: Variables de Entorno

Antes de hacer deploy, añade tu API Key:

1. Expande **"Environment Variables"**
2. Añade:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_NvEVHwo3_EesJdKuyxeSRwYXjpiBXkok5` (tu API key)
3. Click en **"Add"**

### 2.5 Deploy!

1. Click en **"Deploy"**
2. Espera 2-3 minutos ⏳
3. ¡Verás confeti cuando termine! 🎉

### 2.6 Tu URL

Recibirás una URL como:
```
https://agustru-portfolio.vercel.app
```

O la que hayas elegido.

---

## ✅ PASO 3: Verificar que todo funciona

1. **Abre tu portfolio** en la URL de Vercel
2. **Navega por todas las secciones**:
   - ✅ Hero (foto y botones)
   - ✅ Sobre mí
   - ✅ Servicios
   - ✅ Proyectos
   - ✅ Experiencia
   - ✅ Contacto
3. **Prueba el formulario de contacto**:
   - Rellena tus datos
   - Envía
   - **Revisa tu email** `atrullen1998@gmail.com`
4. **Prueba en móvil**:
   - Abre la URL en tu teléfono
   - Verifica que se vea bien

---

## 🎨 PASO 4 (Opcional): Dominio Personalizado

Si tienes un dominio (ej: agustrutullen.com):

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Add → Escribe tu dominio
4. Sigue las instrucciones DNS

Dominios baratos:
- **Namecheap**: ~$10/año
- **Google Domains**: ~$12/año
- **Cloudflare**: ~$10/año

---

## 🔄 Actualizaciones Futuras

Cuando hagas cambios:

```powershell
# Hacer cambios en tu código...

# Ver cambios
git status

# Añadir cambios
git add .

# Commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push

# ¡Vercel hace deploy automático! 🚀
```

---

## 📋 Checklist Final

### Antes del Deploy:
- [x] Código completado
- [x] Commit realizado
- [ ] Subido a GitHub
- [ ] Cuenta en Vercel creada

### Durante el Deploy:
- [ ] Proyecto importado en Vercel
- [ ] Variable RESEND_API_KEY añadida
- [ ] Deploy iniciado

### Después del Deploy:
- [ ] Portfolio funcionando
- [ ] Formulario probado
- [ ] Email recibido
- [ ] Responsive verificado
- [ ] URL compartida

---

## 🆘 Problemas Comunes

### "Git push failed"
```powershell
# Verifica que el remote esté bien configurado
git remote -v

# Si está mal, elimínalo y añádelo de nuevo
git remote remove origin
git remote add origin https://github.com/tu-usuario/tu-repo.git
```

### "Vercel build failed"
1. Ve a Vercel → Tu proyecto → Deployments
2. Click en el deployment fallido
3. Revisa los logs
4. Problema común: Variable de entorno no configurada

### "Formulario no funciona en producción"
1. Vercel → Settings → Environment Variables
2. Verifica que `RESEND_API_KEY` esté ahí
3. Si no está, añádela
4. Redeploy: Deployments → ⋯ → Redeploy

---

## 🎉 ¡Listo!

Tu portfolio estará en:
```
https://tu-proyecto.vercel.app
```

**Comparte tu portfolio:**
- 📧 Email
- 💼 LinkedIn
- 📱 Redes sociales
- 📄 CV

¡Felicidades por tu nuevo portfolio en línea! 🚀
