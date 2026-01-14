# Guía de Deployment en GitHub Pages

## Pasos para desplegar UNO Tarot en GitHub Pages

### 1. Preparar el proyecto localmente

Primero, asegúrate de que el proyecto funcione correctamente en local:

```bash
npm install
npm run build
```

### 2. Crear el repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. **Importante:** Usa cualquier nombre que quieras (ej: `uno-tarot`, `tarot-app`, etc.)
3. Inicializa tu repositorio local (si aún no lo has hecho):

```bash
git init
git add .
git commit -m "Initial commit - UNO Tarot App"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/NOMBRE-DE-TU-REPO.git
git push -u origin main
```

### 3. Configuración automática

✅ **Ya está todo configurado!** El archivo `vite.config.ts` usa rutas relativas (`./`) que funcionan automáticamente con cualquier nombre de repositorio.

No necesitas cambiar ningún archivo de configuración.

### 4. Configurar GitHub Actions (RECOMENDADO)

Ya he creado el archivo de workflow en `.github/workflows/deploy.yml`. Este archivo:

- Se ejecuta automáticamente cada vez que haces push a `main`
- Construye tu aplicación
- La despliega automáticamente a GitHub Pages

### 5. Habilitar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona: **GitHub Actions**
5. ¡Listo! GitHub Actions se encargará del resto

### 6. Hacer push y ver tu sitio

Cada vez que hagas push a `main`, tu sitio se actualizará automáticamente:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

**Tu sitio estará disponible en:**
```
https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPO/
```

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub y `NOMBRE-DE-TU-REPO` con el nombre del repositorio que creaste.

---

## Método Alternativo: Deployment Manual (sin GitHub Actions)

Si prefieres hacer deployment manual:

### 1. Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Actualizar package.json

Agrega estos scripts:

```json
{
  "scripts": {
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Actualizar vite.config.ts

```typescript
export default defineConfig({
  base: '/NOMBRE-DE-TU-REPO/', // Reemplaza con el nombre de tu repo
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 4. Desplegar

```bash
npm run deploy
```

### 5. Configurar GitHub Pages

1. Ve a **Settings** > **Pages**
2. En **Source**, selecciona la rama `gh-pages`
3. Click en **Save**

---

## Verificación del Deployment

Después de hacer push, puedes verificar el progreso:

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" corriendo
3. Cuando termine (circulo verde ✓), tu sitio estará live
4. Visita `https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPO/`

---

## Troubleshooting

### Problema: La página muestra en blanco

**Solución:** Verifica que el `base` en `vite.config.ts` coincida con el nombre de tu repositorio:

```typescript
base: '/nombre-exacto-del-repo/',
```

### Problema: Los assets no cargan (imágenes, CSS)

**Solución:** Asegúrate de que estás usando rutas relativas en tu código y que el `base` esté configurado correctamente.

### Problema: El workflow falla en GitHub Actions

**Solución:** Revisa los logs en la pestaña Actions para ver el error específico. Comúnmente es por:
- Node version incorrecta (debe ser 20.x)
- Dependencias faltantes
- Build errors en el código

### Problema: 404 al acceder al sitio

**Solución:**
1. Espera 2-3 minutos después del deployment
2. Verifica que GitHub Pages esté habilitado en Settings
3. Asegúrate de estar usando la URL correcta con el nombre del repo

---

## URLs Importantes

- **Sitio en vivo:** `https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPO/`
- **Repositorio:** `https://github.com/TU-USUARIO/NOMBRE-DE-TU-REPO`
- **Actions (build logs):** `https://github.com/TU-USUARIO/NOMBRE-DE-TU-REPO/actions`

---

## Próximos Pasos

✅ Push tu código a GitHub  
✅ Habilita GitHub Pages  
✅ Espera a que el workflow termine  
✅ Visita tu sitio y comparte el link  
✅ Actualiza el README.md con el link al sitio live  

---

## Notas de Actualización

Para actualizar el sitio después del deployment inicial:

```bash
# 1. Haz tus cambios en el código
# 2. Commit los cambios
git add .
git commit -m "Descripción de los cambios"

# 3. Push a main (deployment automático)
git push

# 4. Espera ~2 minutos y tu sitio se actualizará
```

---

# copy and paste on terminnal

npm run build
git add docs
git commit -m "test cache"
git push

**¡Tu app UNO Tarot estará live en minutos!** 🎴✨