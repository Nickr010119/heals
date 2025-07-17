'use client'; // <-- ¡Esta línea es CRUCIAL para el App Router!

// components/ImageGallery.js
import Image from 'next/image'; // ✅ Importación por defecto para Image (Next.js 13+)
import { motion } from 'framer-motion'; // ✅ Importación nombrada para motion

import { useState } from 'react';
import React from 'react'; // Opcional, dependiendo de la versión de React

// components/ImageGallery.js
// Este componente muestra una galería de imágenes con animaciones al cargar
// Lista de imágenes con sus rutas y descripciones
// Asegúrate de que las rutas sean correctas y que las imágenes existan en tu proyecto
// Puedes agregar más imágenes a esta lista si lo deseas
const allImages = [
  { id: 1, src: '/Images/Heals patient/heals_patient (1).jpeg', alt: '' },
  { id: 2, src: '/Images/Heals patient/heals_patient (2).jpeg', alt: '' },
  { id: 3, src: '/Images/Heals patient/heals_patient (3).jpeg', alt: '' },
  { id: 4, src: '/Images/Heals patient/heals_patient (4).jpeg', alt: '' },
  { id: 5, src: '/Images/Heals patient/heals_patient (5).jpeg', alt: '' },
  { id: 6, src: '/Images/Heals patient/heals_patient (6).jpeg', alt: '' },
  { id: 7, src: '/Images/Heals patient/heals_patient (7).jpeg', alt: '' },
  { id: 8, src: '/Images/Heals patient/heals_patient (8).jpeg', alt: '' },
  { id: 9, src: '/Images/Heals patient/heals_patient (9).jpeg', alt: '' },
  { id: 10, src: '/Images/Heals patient/heals_patient (10).jpeg', alt: '' },
  { id: 11, src: '/Images/Heals patient/heals_patient (11).jpeg', alt: '' },
  { id: 12, src: '/Images/Heals patient/heals_patient (12).jpeg', alt: '' },
  // ...agrega más si tienes más imágenes
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ImageGallery() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const image = allImages[current];

  return (
    <motion.div
      className="flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div key={image.id} variants={itemVariants}>
        <Image
          src={image.src}
          alt={image.alt}
          width={500}
          height={350}
          priority // Esto asegura que la imagen se cargue de inmediato
          loading="eager" // Carga la imagen de inmediato
          className="rounded-lg shadow-md"
        />
        <div className="text-center mt-2 text-gray-700">{image.alt}</div>
      </motion.div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Siguiente
        </button>
      </div>
    </motion.div>
  );
}