"use client";

import React from 'react';
import { Lato, Fredoka } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2b2c2b' }} className="text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className={`${fredoka.className} text-2xl font-bold text-blue-400`}>Heals</span>
            </div>
            <p className={`${lato.className} max-w-xs text-gray-400`}>Expertos en fisioterapia.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">Inicio</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">Sobre Nosotros</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition">Team Heals</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Servicios</a></li>
                <li><a href="#consultation" className="text-gray-400 hover:text-white transition">Consulta</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition">Galería</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Rehabilitación de Lesiones Deportivas</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Rehabilitación Postquirúrgica</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Manejo del Dolor Crónico</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Fisioterapia Pediátrica</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Fisioterapia Geriátrica</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Ergonomía en el Lugar de Trabajo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/heals_fisio.col/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition text-xl"
                  aria-label="Síguenos en Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Heals. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;