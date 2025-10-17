# 🚀 Guía de Deploy a Producción

## Opción 1: Vercel (RECOMENDADO) ⭐

### Paso 1: Preparar el Proyecto

Ya está listo! ✅

### Paso 2: Crear cuenta en Vercel

1. Ve a: https://vercel.com/signup
2. Regístrate con GitHub (recomendado) o email
3. Es completamente GRATIS para proyectos personales

### Paso 3: Subir proyecto a GitHub

```bash
# Añadir todos los cambios
git add .

# Hacer commit
git commit -m "Portfolio completo listo para deploy"

# Si no has creado el repo en GitHub aún:
# 1. Ve a https://github.com/new
# 2. Crea un repositorio (ej: "agustru-portfolio")
# 3. Sigue las instrucciones para subir tu código
```

### Paso 4: Deploy desde Vercel

1. **Conectar GitHub con Vercel**
   - Ve a: https://vercel.com/new
   - Click en "Import Git Repository"
   - Autoriza Vercel a acceder a GitHub
   - Selecciona tu repositorio

2. **Configurar el proyecto**
   - Framework Preset: `Next.js` (detectado automáticamente)
   - Root Directory: `./`
   - Build Command: `pnpm build` (detectado automáticamente)
   - Output Directory: `.next` (detectado automáticamente)

3. **Añadir Variables de Entorno**
   - Click en "Environment Variables"
   - Añade: `RESEND_API_KEY` = `tu_api_key`
   - IMPORTANTE: No olvides esto o el formulario no funcionará

4. **Deploy!**
   - Click en "Deploy"
   - Espera 2-3 minutos
   - ¡Tu portfolio estará en línea!

### Paso 5: Tu URL

Recibirás una URL como:
```
https://tu-proyecto.vercel.app
```

### Configurar Dominio Personalizado (Opcional)

Si tienes un dominio:
1. Ve a Settings → Domains en Vercel
2. Añade tu dominio
3. Sigue las instrucciones DNS

---

## Opción 2: Netlify

### Paso 1: Crear cuenta en Netlify

1. Ve a: https://app.netlify.com/signup
2. Regístrate con GitHub

### Paso 2: Deploy

1. Sube tu código a GitHub (igual que Vercel)
2. Ve a: https://app.netlify.com/start
3. "Import an existing project"
4. Conecta GitHub
5. Selecciona tu repo
6. Build command: `pnpm build`
7. Publish directory: `.next`
8. Añade variables de entorno
9. Deploy!

---

## ⚙️ Configuración Importante

### Variables de Entorno en Producción

SIEMPRE añade estas variables en tu plataforma de deploy:

```
RESEND_API_KEY=re_tu_api_key_aqui
```

### Después del Deploy

1. ✅ Verifica que el sitio carga
2. ✅ Prueba el formulario de contacto
3. ✅ Verifica que recibes los emails
4. ✅ Prueba en móvil
5. ✅ Comparte tu portfolio!

---

## 🔄 Actualizaciones Futuras

Con Vercel o Netlify:

1. Haces cambios localmente
2. Haces commit: `git commit -m "mensaje"`
3. Subes a GitHub: `git push`
4. **Deploy automático** - ¡Sin hacer nada más!

---

## 🌐 Tu Portfolio Estará en:

**Vercel**: `https://agustru-portfolio.vercel.app` (o el nombre que elijas)
**Netlify**: `https://agustru-portfolio.netlify.app`

---

## 💰 Costo

- **Vercel Free**: 
  - ✅ 100 GB bandwidth/mes
  - ✅ Deploys ilimitados
  - ✅ SSL gratuito
  - ✅ Perfecto para portfolios

- **Netlify Free**:
  - ✅ 100 GB bandwidth/mes
  - ✅ 300 minutos build/mes
  - ✅ SSL gratuito

---

## 🆘 Problemas Comunes

### "Build failed"
- Verifica que todas las dependencias estén en `package.json`
- Asegúrate de que `pnpm-lock.yaml` esté en el repo

### "Formulario no funciona"
- Verifica que `RESEND_API_KEY` esté configurada
- Ve a la consola de Vercel/Netlify para ver errores

### "Imágenes no cargan"
- Verifica que las imágenes estén en `/public`
- Verifica los nombres de archivo

---

## 📞 Siguientes Pasos

1. ✅ Sube el código a GitHub
2. ✅ Deploy en Vercel
3. ✅ Configura variables de entorno
4. ✅ Prueba tu portfolio
5. ✅ Comparte tu URL!

¡Tu portfolio estará en línea en menos de 5 minutos! 🚀
