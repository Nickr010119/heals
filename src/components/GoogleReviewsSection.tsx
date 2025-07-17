'use client';

import React from 'react';
import Image from 'next/image';
import { useGoogleReviews, GoogleReview } from '../utils/googleReviews';

interface ReviewCardProps {
  review: GoogleReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      ></i>
    ));
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="flex text-sm">
            {renderStars(review.rating)}
          </div>
          <span className="ml-2 text-sm text-gray-600">{review.rating}/5</span>
        </div>
        <span className="text-xs text-gray-500">{review.relative_time_description}</span>
      </div>
      <p className="text-gray-700 text-sm mb-2 italic">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">- {review.author_name}</p>
        {review.profile_photo_url && (
          <Image
            src={review.profile_photo_url}
            alt={review.author_name}
            width={24}
            height={24}
            className="w-6 h-6 rounded-full"
          />
        )}
      </div>
    </div>
  );
};

interface GoogleReviewsSectionProps {
  maxReviews?: number;
  showLoadingState?: boolean;
}

const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({ 
  maxReviews = 3,
  showLoadingState = true 
}) => {
  const { reviews, loading, error } = useGoogleReviews();

  if (loading && showLoadingState) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300 animate-pulse">
            <div className="flex items-center mb-2">
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <div key={starIndex} className="w-4 h-4 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="mt-2 h-3 bg-gray-300 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    console.warn('Error loading Google reviews:', error);
    // Continúa mostrando las reseñas de respaldo
  }

  const displayReviews = reviews.slice(0, maxReviews);

  return (
    <div className="space-y-4">
      {displayReviews.map((review, index) => (
        <ReviewCard key={`${review.author_name}-${index}`} review={review} />
      ))}
      
      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <a 
          href={process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || "https://www.google.com/search?q=heals+fisioterapia+reseñas"}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors border border-blue-500 hover:bg-blue-50 px-4 py-2 rounded-lg"
        >
          <i className="fab fa-google text-lg"></i>
          Ver todas las reseñas
        </a>
        <a 
          href={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "https://g.page/r/tu_place_id_aqui/review"}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition-colors px-4 py-2 rounded-lg"
        >
          <i className="fas fa-star text-lg"></i>
          Escribir reseña
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsSection;
