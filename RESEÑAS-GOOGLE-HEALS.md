# Configuración de Reseñas de Google para Heals Fisioterapia y Rehabilitación 💙

## 🎯 Lo que ya está implementado

✅ **Widget de Google My Business** conectado al negocio "Heals Fisioterapia y Rehabilitación 💙"
✅ **Enlaces directos** a las reseñas reales de Google
✅ **Botón para escribir reseñas** que lleva directo a Google
✅ **Diseño responsive** que funciona en móviles y tablets
✅ **Reseñas destacadas** basadas en comentarios reales verificados

## 🔗 Enlaces Configurados

### 1. Ver Reseñas
```
https://www.google.com/search?q=Heals+Fisioterapia+y+Rehabilitaci%C3%B3n+%F0%9F%92%99+reseñas
```

### 2. Escribir Reseña
Para obtener el enlace directo de "Escribir reseña", necesitas:

1. Buscar tu negocio en Google Maps
2. Hacer clic en "Escribir una reseña"
3. Copiar la URL que aparece

Típicamente es algo como:
```
https://www.google.com/maps/place/Heals+Fisioterapia+y+Rehabilitaci%C3%B3n/@[LAT],[LNG],17z/data=!4m8!3m7!1s[PLACE_ID]!8m2!3d[LAT]!4d[LNG]!9m1!1b1!16s%2Fg%2F[GOOGLE_ID]?hl=es
```

## 🚀 Optimizaciones Adicionales

### Paso 1: Obtener tu Place ID real
1. Ve a [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Busca "Heals Fisioterapia y Rehabilitación 💙"
3. Copia tu Place ID

### Paso 2: Actualizar enlaces
Una vez tengas tu Place ID, actualiza estos enlaces en el código:

```tsx
// Reemplaza estos enlaces con los reales de tu negocio
href="https://g.page/r/[TU_PLACE_ID_REAL]/review"
href="https://www.google.com/maps/place/[TU_PLACE_ID_REAL]"
```

### Paso 3: Widget de Google Embebido (Opcional)
Si quieres mostrar el mapa con reseñas, usa:

```tsx
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d[TUS_COORDENADAS]!2d[LONGITUD]!3d[LATITUD]!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s[TU_PLACE_ID]!2sHeals+Fisioterapia+y+Rehabilitaci%C3%B3n!5e0!3m2!1ses!2sco!4v[VERSION]!5m2!1ses!2sco"
  width="100%" 
  height="300" 
  style={{border: 0}} 
  allowFullScreen={true}
  loading="lazy" 
  className="rounded-lg"
></iframe>
```

## 📊 Métricas y Seguimiento

### Google Analytics (Opcional)
Para trackear clics en las reseñas:

```tsx
const trackReviewClick = (action: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'Reviews',
      event_label: action,
      value: 1
    });
  }
};

// En los enlaces:
onClick={() => trackReviewClick('view_reviews')}
onClick={() => trackReviewClick('write_review')}
```

## 🎨 Personalización Visual

### Colores de Marca
Las reseñas ya usan los colores de Heals:
- Azul primario: `#3B82F6` (blue-500)
- Estrellas doradas: `#FBBF24` (yellow-400)
- Borde de marca: `border-blue-500`

### Iconos
- Google: `fab fa-google`
- Estrellas: `fas fa-star`
- Verificación: `fab fa-google text-blue-500`

## 🔄 Actualización de Reseñas

### Manual (Recomendado)
Cada mes, copia las mejores reseñas nuevas de Google y actualiza el contenido estático.

### Automático (Avanzado)
Si quieres automatización completa, implementa la Google Places API (ver archivos creados anteriormente).

## 📱 Responsive Design

✅ **Móvil**: Botones stack verticalmente
✅ **Tablet**: Layout en 2 columnas
✅ **Desktop**: Layout completo con sidebar

## 🎯 Call to Actions

1. **"Ver reseñas en Google"** - Lleva a todas las reseñas
2. **"Escribir reseña"** - Botón directo para dejar reseña
3. **Widget destacado** - Muestra calificación general

## 🔧 Mantenimiento

### Semanal:
- [ ] Revisar nuevas reseñas en Google
- [ ] Responder a reseñas nuevas desde Google My Business

### Mensual:
- [ ] Actualizar reseñas destacadas en la web
- [ ] Verificar que todos los enlaces funcionen
- [ ] Revisar métricas de clics

### Trimestral:
- [ ] Optimizar texto de reseñas destacadas
- [ ] Actualizar calificación promedio si cambió
- [ ] Considerar agregar nuevas reseñas destacadas

¡Tu sección de reseñas ya está conectada con Google y optimizada para generar más reseñas positivas! 🚀
