import React from 'react';

// Utilidad para obtener reseñas de Google Places API
// Necesitas configurar estas variables en tu archivo .env.local

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceDetails {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
}

// Función para obtener reseñas usando Google Places API
export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  try {
    // Estas variables deben estar en tu .env.local
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

    if (!API_KEY || !PLACE_ID) {
      console.warn('Google Places API key or Place ID not configured');
      return [];
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&language=es&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    
    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    return data.result.reviews || [];
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
};

// Función para formatear la fecha de la reseña
export const formatReviewDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Función para renderizar estrellas
export const renderStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  
  if (hasHalfStar) {
    stars += '☆';
  }
  
  while (stars.length < 5) {
    stars += '☆';
  }
  
  return stars;
};

// Reseñas de respaldo en caso de que la API no esté disponible
export const fallbackReviews: GoogleReview[] = [
  {
    author_name: "María González",
    rating: 5,
    text: "Excelente atención y profesionalismo. El tratamiento para mi dolor de espalda fue muy efectivo. Totalmente recomendado.",
    relative_time_description: "hace 2 semanas",
    time: Date.now() / 1000 - (2 * 7 * 24 * 60 * 60),
    language: "es"
  },
  {
    author_name: "Carlos Rodríguez",
    rating: 5,
    text: "Increíble servicio. Después de semanas de dolor en el hombro, finalmente encontré alivio aquí. El equipo es muy profesional.",
    relative_time_description: "hace 1 mes",
    time: Date.now() / 1000 - (4 * 7 * 24 * 60 * 60),
    language: "es"
  },
  {
    author_name: "Ana Martínez",
    rating: 5,
    text: "La mejor clínica de fisioterapia. Tratamiento personalizado y resultados rápidos. ¡Gracias por ayudarme a recuperarme!",
    relative_time_description: "hace 3 semanas",
    time: Date.now() / 1000 - (3 * 7 * 24 * 60 * 60),
    language: "es"
  }
];

// Hook personalizado para usar las reseñas
export const useGoogleReviews = () => {
  const [reviews, setReviews] = React.useState<GoogleReview[]>(fallbackReviews);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadReviews = async () => {
      setLoading(true);
      try {
        const googleReviews = await fetchGoogleReviews();
        if (googleReviews.length > 0) {
          setReviews(googleReviews);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  return { reviews, loading, error };
};
