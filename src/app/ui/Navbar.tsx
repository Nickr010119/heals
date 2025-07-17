"use client";

import { useState } from 'react';
import { Montserrat } from "next/font/google";
import { motion } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sections = [
  { label: "Inicio", id: "home" },
  { label: "Sobre Nosotros", id: "about" },
  { label: "Team Heals", id: "team" },
  { label: "Servicios", id: "services" },
  { label: "Consulta", id: "consultation" },
  { label: "Galería", id: "gallery" },
  { label: "FAQ", id: "faq" },
  { label: "Contacto", id: "contact" },
];

// Scroll animado personalizado
function animatedScrollTo(targetY: number, duration = 1200) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startY + diff * easeInOutQuad(percent));

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  }

  // Easing function for smoothness
  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  window.requestAnimationFrame(step);
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para scroll animado
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Ajusta si tienes navbar fijo
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      animatedScrollTo(y, 1200); // 1200ms = 1.2s, puedes ajustar

      // Efecto flash/resalte al llegar
      setTimeout(() => {
        el.classList.add('ring-4', 'ring-blue-300');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-blue-300');
        }, 600);
      }, 1300);

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="heals-logo heals-logo-navbar antialiased">
              heals
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={`${montserrat.className} hidden md:flex space-x-8`}>
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => handleScroll(section.id)}
                className="nav-link bg-transparent border-none cursor-pointer hover:text-blue-500 transition"
                style={{ outline: 'none' }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-500 focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`${montserrat.className} md:hidden bg-white border-t`}>
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll(section.id)}
                className="py-2 px-2 text-left bg-transparent border-none cursor-pointer hover:text-blue-500 transition"
                style={{ outline: 'none' }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}