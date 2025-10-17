# Script para configurar GitHub remoto
# Ejecuta este script después de crear tu repositorio en GitHub

# IMPORTANTE: Reemplaza "tu-usuario" con tu nombre de usuario de GitHub
# y "agustru-portfolio" con el nombre de tu repositorio si es diferente

$usuario = "tu-usuario"  # CAMBIA ESTO
$repo = "agustru-portfolio"  # CAMBIA ESTO si usaste otro nombre

Write-Host "🚀 Configurando repositorio remoto..." -ForegroundColor Cyan

# Añadir remote
git remote add origin "https://github.com/$usuario/$repo.git"

# Verificar
Write-Host "`n✅ Remote configurado:" -ForegroundColor Green
git remote -v

# Cambiar a main
Write-Host "`n🔄 Cambiando a rama 'main'..." -ForegroundColor Cyan
git branch -M main

Write-Host "`n✅ Listo! Ahora ejecuta:" -ForegroundColor Green
Write-Host "git push -u origin main" -ForegroundColor Yellow

Write-Host "`n📝 Nota: Si te pide credenciales, usa tu usuario de GitHub" -ForegroundColor Blue
Write-Host "y un Personal Access Token como contraseña." -ForegroundColor Blue
