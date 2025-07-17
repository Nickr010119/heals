'use client';

import React from 'react';

const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://heals-fisioterapia.com/#organization",
        "name": "Heals Fisioterapia y Rehabilitación",
        "alternateName": "Heals Fisio",
        "url": "https://heals-fisioterapia.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://heals-fisioterapia.com/Images/healslogo.png",
          "width": 500,
          "height": 500
        },
        "image": [
          "https://heals-fisioterapia.com/Images/healslogo.png",
          "https://heals-fisioterapia.com/Images/Equipo_heals.jpg",
          "https://heals-fisioterapia.com/Images/Paciente_Heals.jpeg"
        ],
        "description": "Centro especializado en fisioterapia y rehabilitación. Ofrecemos tratamientos personalizados para lesiones deportivas, rehabilitación postquirúrgica, dolor crónico y más.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Wellness Way, Suite 200",
          "addressLocality": "Healthville",
          "postalCode": "98765",
          "addressCountry": "Colombia"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+57-313-291-7462",
          "contactType": "customer service",
          "availableLanguage": "Spanish"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "14:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "25",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "María G."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Excelente servicio de fisioterapia. El personal es muy profesional y las instalaciones están muy bien equipadas. Recomendado al 100%."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Carlos R."
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Muy buena atención y tratamiento efectivo. Los fisioterapeutas son muy conocedores y me ayudaron mucho con mi recuperación."
          }
        ],
        "medicalSpecialty": [
          "Physical Therapy",
          "Rehabilitation Medicine",
          "Sports Medicine",
          "Pain Management"
        ],
        "serviceArea": {
          "@type": "Country",
          "name": "Colombia"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://heals-fisioterapia.com/#website",
        "url": "https://heals-fisioterapia.com",
        "name": "Heals Fisioterapia y Rehabilitación",
        "description": "Centro especializado en fisioterapia y rehabilitación en Colombia",
        "publisher": {
          "@id": "https://heals-fisioterapia.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://heals-fisioterapia.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "es-CO"
      },
      {
        "@type": "WebPage",
        "@id": "https://heals-fisioterapia.com/#webpage",
        "url": "https://heals-fisioterapia.com",
        "name": "Heals Fisioterapia y Rehabilitación - Centro de Fisioterapia Profesional",
        "isPartOf": {
          "@id": "https://heals-fisioterapia.com/#website"
        },
        "about": {
          "@id": "https://heals-fisioterapia.com/#organization"
        },
        "description": "Fisioterapia experta para una vida sin dolor. Planes de tratamiento personalizados, rehabilitación postquirúrgica, lesiones deportivas y terapia física profesional.",
        "breadcrumb": {
          "@id": "https://heals-fisioterapia.com/#breadcrumb"
        },
        "inLanguage": "es-CO",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://heals-fisioterapia.com"]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://heals-fisioterapia.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://heals-fisioterapia.com"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Fisioterapia y Rehabilitación",
        "provider": {
          "@id": "https://heals-fisioterapia.com/#organization"
        },
        "description": "Servicios especializados de fisioterapia incluyendo rehabilitación de lesiones deportivas, tratamiento postquirúrgico, manejo del dolor crónico, fisioterapia pediátrica y geriátrica.",
        "serviceType": [
          "Rehabilitación de Lesiones Deportivas",
          "Rehabilitación Postquirúrgica", 
          "Manejo del Dolor Crónico",
          "Fisioterapia Pediátrica",
          "Fisioterapia Geriátrica",
          "Ergonomía en el Lugar de Trabajo"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Colombia"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};

export default StructuredData;
