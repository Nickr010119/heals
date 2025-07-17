# Guía para Conectar Reseñas de Google con tu Página Web

## 📋 Pasos para Configurar las Reseñas de Google

### 1. Obtener Google Places API Key

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la **Places API**:
   - Ve a "APIs y servicios" → "Biblioteca"
   - Busca "Places API" y habilítala
4. Crear credenciales:
   - Ve a "APIs y servicios" → "Credenciales"
   - Haz clic en "Crear credenciales" → "Clave de API"
   - Copia tu API key

### 2. Encontrar tu Google Place ID

**Opción A: Usando Google Place ID Finder**
1. Ve a [https://developers.google.com/maps/documentation/places/web-service/place-id](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Busca tu negocio
3. Copia el Place ID

**Opción B: Usando PlaceDetails.com**
1. Ve a [https://placedetails.com/](https://placedetails.com/)
2. Busca tu negocio
3. Copia el Place ID

**Opción C: Desde Google Maps**
1. Busca tu negocio en Google Maps
2. En la URL verás algo como: `data=!4m5!3m4!1s0x...!8m2!3d...!4d...`
3. El Place ID está en esa información

### 3. Configurar Variables de Entorno

1. Crea un archivo `.env.local` en la raíz de tu proyecto:

```env
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=tu_api_key_aqui
NEXT_PUBLIC_GOOGLE_PLACE_ID=tu_place_id_aqui
NEXT_PUBLIC_GOOGLE_BUSINESS_URL=https://www.google.com/maps/place/heals+fisioterapia
NEXT_PUBLIC_GOOGLE_REVIEW_URL=https://g.page/r/tu_place_id_aqui/review
```

### 4. Usar el Componente en tu Página

Reemplaza la sección de reseñas estáticas con el componente dinámico:

```tsx
import GoogleReviewsSection from '../components/GoogleReviewsSection';

// En tu página, reemplaza las reseñas estáticas con:
<GoogleReviewsSection maxReviews={3} showLoadingState={true} />
```

### 5. Actualizar tu página principal

Modifica tu `page.tsx` para usar el nuevo componente:

```tsx
// Agrega esta importación al inicio del archivo
import GoogleReviewsSection from '../components/GoogleReviewsSection';

// Luego en la sección de reseñas, reemplaza el contenido estático con:
<div className="mt-6 sm:mt-8">
  <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">
    Reseñas de Nuestros Pacientes
  </h4>
  <GoogleReviewsSection maxReviews={3} />
</div>
```

## 🔒 Seguridad y Limitaciones

### Restricciones de API Key
1. En Google Cloud Console, ve a tu API Key
2. Haz clic en "Restringir clave"
3. Selecciona "Restricciones de HTTP (sitios web)"
4. Agrega tu dominio: `tudominio.com/*`

### Cuotas y Límites
- Google Places API tiene límites de uso gratuitos
- Después de cierto límite, se cobra por cada solicitud
- Considera cachear las reseñas para reducir llamadas a la API

## 🚀 Implementación Avanzada

### Cache de Reseñas
Para optimizar y reducir costos, puedes implementar cache:

```tsx
// En tu hook useGoogleReviews, agrega cache localStorage
const cachedReviews = localStorage.getItem('google-reviews');
const cacheTimestamp = localStorage.getItem('google-reviews-timestamp');
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

if (cachedReviews && cacheTimestamp) {
  const isExpired = Date.now() - parseInt(cacheTimestamp) > CACHE_DURATION;
  if (!isExpired) {
    setReviews(JSON.parse(cachedReviews));
    return;
  }
}
```

### Actualización Automática
Considera actualizar las reseñas automáticamente:

```tsx
// Actualizar cada hora
useEffect(() => {
  const interval = setInterval(loadReviews, 60 * 60 * 1000);
  return () => clearInterval(interval);
}, []);
```

## 🛠️ Troubleshooting

### Errores Comunes

1. **"API key not valid"**
   - Verifica que la Places API esté habilitada
   - Revisa las restricciones de la API key

2. **"INVALID_REQUEST"**
   - Verifica que el Place ID sea correcto
   - Asegúrate de que el formato de la URL sea correcto

3. **"No reviews found"**
   - Tu negocio podría no tener reseñas públicas en Google
   - Verifica que el Place ID corresponda a tu negocio

### Verificar Configuración

```bash
# Instala las dependencias necesarias
npm install

# Verifica que las variables de entorno estén configuradas
echo $NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
echo $NEXT_PUBLIC_GOOGLE_PLACE_ID
```

## 📊 Métricas y Análisis

Para trackear el rendimiento de las reseñas:

```tsx
// Agregar Google Analytics events
const trackReviewClick = (action: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'Reviews',
      event_label: 'Google Reviews Section'
    });
  }
};
```

¡Con esta configuración tendrás reseñas reales de Google actualizándose automáticamente en tu página web!
