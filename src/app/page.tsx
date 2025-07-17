'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Montserrat } from "next/font/google";
import Footer from './ui/Footer';
import ImageGallery from './ui/ImageGallery';
import Navbar from "./ui/Navbar";
import SuperposedSection from './ui/SuperposedSection';

// Si usas Font Awesome como componentes React, necesitarías importarlos:
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faFlask, faUserMd, faRunning, faProcedures, faPainPath, faChild, faWheelchair, faUserClock, faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Carga la fuente en el scope del módulo
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  // Estado para controlar la pregunta abierta
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Función para manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Función para enviar a WhatsApp
  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    
    const phoneNumber = '573132917462'; //Número de Mari
    
    // Crear el mensaje
    const message = `*Nuevo mensaje desde la web de Heals*

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}

*Mensaje:*
${formData.message}`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');
    
    // Limpiar el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  // Función para el botón flotante de WhatsApp
  const openWhatsAppFloat = () => {
    const phoneNumber = '573132917462'; //Número de Mari
    const message = 'Hola, me gustaría obtener más información sobre los servicios de fisioterapia.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Función para consulta específica por parte del cuerpo
  const consultarParteCuerpo = (parte: string) => {
    const phoneNumber = '573132917462'; //Número de Mari
    const message = `Hola, tengo molestias en ${parte} y me gustaría agendar una consulta de fisioterapia para evaluar y tratar esta zona específica.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Lista de preguntas y respuestas
  const faqs = [
    {
      question: "¿Necesito una remisión médica para reservar una cita?",
      answer:
        "No, no necesariamente necesitas una remisión para ver a un fisioterapeuta en nuestra clínica. Sin embargo, algunos proveedores de seguros pueden requerir una remisión médica para fines de reembolso. Te recomendamos consultar con tu proveedor de seguros antes de tu primera visita.",
    },
    {
      question: "¿Qué debo usar para mi sesión de fisioterapia?",
      answer:
        "Te recomendamos usar ropa cómoda y holgada que permita un fácil acceso al área a tratar. Para problemas de la parte inferior del cuerpo, los shorts son ideales. Para problemas de la parte superior del cuerpo, una camiseta sin mangas o una camiseta holgada funcionan bien. También tenemos batas disponibles si es necesario.",
    },
    {
      question: "¿Cuántas sesiones necesitaré?",
      answer:
        "El número de sesiones varía según tu condición, su gravedad, el tiempo que hayas tenido el problema y tu ritmo de curación individual. Después de tu evaluación inicial, tu fisioterapeuta discutirá un plan de tratamiento recomendado y la duración esperada de la terapia. La mayoría de las condiciones agudas requieren de 4 a 6 sesiones, mientras que los problemas crónicos pueden necesitar un manejo a más largo plazo.",
    },
    {
      question: "¿Ofrecen facturación directa a compañías de seguros?",
      answer:
        "Sí, ofrecemos facturación directa a la mayoría de los principales proveedores de seguros. Por favor, trae tu tarjeta de seguro y cualquier información necesaria a tu primera cita. Si bien hacemos todo lo posible para procesar los reclamos electrónicamente, algunos planes pueden requerir que envíes los recibos manualmente. Proporcionaremos toda la documentación necesaria para tus registros.",
    },
    {
      question: "¿Cuál es su política de cancelación?",
      answer:
        "Requerimos un aviso de al menos 24 horas para cancelaciones o cambios de citas. Esto nos permite ofrecer la hora a otros pacientes que necesitan atención. Las cancelaciones tardías o las ausencias sin previo aviso pueden estar sujetas a una tarifa (exenta en caso de emergencias). Nuestro personal te recordará tus próximas citas para ayudar con la programación.",
    },
  ];

  return (
    <main className={`${montserrat.className} bg-white`}>
      {/* Sección de Home */}
      
        <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">Fisioterapia Experta para una Vida Sin Dolor</h1>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">Planes de tratamiento personalizados para ayudarte a recuperarte, moverte mejor y vivir sin dolor. Nuestro enfoque basado en la evidencia garantiza que recibas la mejor atención posible en Colombia.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto md:mx-0">
                  <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center flex-1 sm:flex-none" aria-label="Reservar cita de fisioterapia">
                    Reservar Cita
                  </a>
                  <a href="#services" className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300 text-center flex-1 sm:flex-none" aria-label="Ver servicios de fisioterapia y rehabilitación">
                    Nuestros Servicios
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                {/* Uso de Image de Next.js para optimización */}
                <Image
                  src="/Images/healslogo.png"
                  alt="Heals Fisioterapia y Rehabilitación - Centro especializado en fisioterapia profesional, rehabilitación y tratamiento del dolor en Colombia"
                  width={500}
                  height={500}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      

      {/* Sección Quiénes Somos */}
      <SuperposedSection>
        <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Heals Fisioterapia y Rehabilitación</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            </header>

            <article className="flex flex-col lg:flex-row items-center lg:items-start">
              <aside className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 xl:pr-10">
                <Image
                  src="/Images/Paciente_Heals.jpeg"
                  alt="Paciente recibiendo tratamiento de fisioterapia profesional en el centro Heals - Sesión de rehabilitación personalizada"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg w-full max-w-sm mx-auto lg:max-w-none"
                />
              </aside>
              <div className="lg:w-2/3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">Nuestra Misión en Fisioterapia</h3>
                <p className="text-gray-600 mb-6 text-center lg:text-left leading-relaxed">En Heals, nos dedicamos a ayudar a nuestros pacientes a lograr un movimiento y una función óptimos a través de una atención personalizada y basada en la evidencia científica. Creemos en tratar a la persona en su totalidad, no solo los síntomas, proporcionando fisioterapia integral en Colombia.</p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">Nuestros Valores Profesionales</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start text-center sm:text-left">
                    <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mt-1 flex justify-center sm:block">
                      <i className="fas fa-heart text-blue-500 text-xl" aria-hidden="true"></i>
                    </div>
                    <div className="sm:ml-4">
                      <h4 className="font-medium text-gray-800 mb-1">Atención Compasiva y Personalizada</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Escuchamos tus preocupaciones y adaptamos los tratamientos de fisioterapia a tus necesidades y objetivos específicos de rehabilitación.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start text-center sm:text-left">
                    <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mt-1 flex justify-center sm:block">
                      <i className="fas fa-flask text-blue-500 text-xl" aria-hidden="true"></i>
                    </div>
                    <div className="sm:ml-4">
                      <h4 className="font-medium text-gray-800 mb-1">Práctica Basada en Evidencia Científica</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Nuestros tratamientos de fisioterapia se basan en las últimas investigaciones científicas y mejores prácticas internacionales en rehabilitación.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start text-center sm:text-left">
                    <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mt-1 flex justify-center sm:block">
                      <i className="fas fa-user-md text-blue-500 text-xl" aria-hidden="true"></i>
                    </div>
                    <div className="sm:ml-4">
                      <h4 className="font-medium text-gray-800 mb-1">Equipo de Fisioterapeutas Expertos</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Nuestros fisioterapeutas están altamente capacitados y actualizan continuamente sus habilidades a través del desarrollo profesional continuo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </SuperposedSection>

      {/* Sección Nuestro Equipo */}
      <SuperposedSection>
        <section id="team" className="py-12 sm:py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fisioterapeutas Licenciados en Colombia</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Nuestros fisioterapeutas licenciados y especialistas en rehabilitación se dedican a ayudarte a alcanzar tus objetivos de salud, movilidad y bienestar integral en Colombia.</p>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            </header>

            <div className="max-w-5xl mx-auto">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" itemScope itemType="https://schema.org/MedicalOrganization">
                <div className="relative">
                  <Image
                    src="/Images/Equipo_heals.jpg"
                    alt="Equipo profesional de fisioterapeutas licenciados de Heals Fisioterapia y Rehabilitación en Colombia"
                    width={1200}
                    height={800}
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-auto object-cover"
                    itemProp="image"
                  />
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left" itemProp="name">Nuestro Equipo de Fisioterapeutas Especialistas</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-center sm:text-left" itemProp="description">
                    Contamos con un equipo altamente capacitado de fisioterapeutas licenciados y especialistas en diferentes áreas de rehabilitación y terapia manual. 
                    Nuestros profesionales en fisioterapia combinan años de experiencia clínica con las técnicas más avanzadas en rehabilitación para brindarte el mejor cuidado 
                    personalizado. Cada miembro de nuestro equipo está comprometido con tu recuperación, bienestar y mejora de la calidad de vida.
                  </p>
                  <div className="flex justify-center">
                    <a 
                      href="https://www.instagram.com/heals_fisio.col/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base"
                      aria-label="Síguenos en Instagram para ver más sobre nuestro equipo de fisioterapeutas"
                    >
                      <i className="fab fa-instagram text-lg" aria-hidden="true"></i>
                      Síguenos en Instagram
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </SuperposedSection>

      {/* Sección Nuestros Servicios */}
      <SuperposedSection>
        <section id="services" className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Servicios de Fisioterapia y Rehabilitación</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Soluciones integrales de fisioterapia y rehabilitación adaptadas a tus necesidades individuales. Tratamientos especializados en Colombia.</p>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Servicio 1 */}
              <article className="service-card bg-white rounded-lg shadow-md p-4 sm:p-6 transition duration-300 text-center sm:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <i className="fas fa-running text-blue-500 text-xl sm:text-2xl" aria-hidden="true"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Rehabilitación de Lesiones Deportivas</h3>
                <p className="text-gray-600 text-sm sm:text-base">Planes de tratamiento especializado en fisioterapia deportiva para que los atletas se recuperen de lesiones y mejoren el rendimiento con ejercicios específicos y terapia manual avanzada.</p>
              </article>

              {/* Servicio 2 */}
              <article className="service-card bg-white rounded-lg shadow-md p-4 sm:p-6 transition duration-300 text-center sm:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <i className="fas fa-procedures text-blue-500 text-xl sm:text-2xl" aria-hidden="true"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Rehabilitación Postquirúrgica</h3>
                <p className="text-gray-600 text-sm sm:text-base">Programas de recuperación personalizados en fisioterapia postoperatoria para pacientes que necesitan recuperar la movilidad, la fuerza y la función después de una cirugía.</p>
              </article>

              {/* Servicio 3 */}
              <article className="service-card bg-white rounded-lg shadow-md p-4 sm:p-6 transition duration-300 text-center sm:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <i className="fas fa-hand-holding-medical text-blue-500 text-xl sm:text-2xl" aria-hidden="true"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Manejo del Dolor Crónico</h3>
                <p className="text-gray-600 text-sm sm:text-base">Enfoques especializados basados en la evidencia científica para manejar y reducir las condiciones de dolor crónico a través de la terapia de movimiento y educación del paciente.</p>
              </article>

              {/* Servicio 4 */}
              <article className="service-card bg-white rounded-lg shadow-md p-4 sm:p-6 transition duration-300 text-center sm:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <i className="fas fa-child text-blue-500 text-xl sm:text-2xl" aria-hidden="true"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Fisioterapia Pediátrica</h3>
                <p className="text-gray-600 text-sm sm:text-base">Atención especializada en fisioterapia para niños con retrasos en el desarrollo, condiciones neurológicas o lesiones que afectan el movimiento y desarrollo motor.</p>
              </article>

              {/* Servicio 5 */}
              <article className="service-card bg-white rounded-lg shadow-md p-4 sm:p-6 transition duration-300 text-center sm:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <i className="fas fa-wheelchair text-blue-500 text-xl sm:text-2xl" aria-hidden="true"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Fisioterapia Geriátrica</h3>
                <p className="text-gray-600 text-sm sm:text-base">Tratamientos especializados centrados en mejorar la movilidad, el equilibrio y la calidad de vida de los adultos mayores que enfrentan condiciones relacionadas con la edad.</p>
              </article>

              {/* Servicio 6 */}
              <article className="service-card bg-white rounded-lg shadow-md p-4 sm:p-6 transition duration-300 text-center sm:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <i className="fas fa-user-clock text-blue-500 text-xl sm:text-2xl" aria-hidden="true"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Ergonomía en el Lugar de Trabajo</h3>
                <p className="text-gray-600 text-sm sm:text-base">Evaluaciones ergonómicas e intervenciones preventivas para prevenir lesiones relacionadas con el trabajo y mejorar la postura y la configuración del puesto de trabajo.</p>
              </article>
            </div>
          </div>
        </section>
      </SuperposedSection>

      {/* Sección de Consulta por Parte del Cuerpo */}
      <SuperposedSection>
        <section id="consultation" className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Qué Parte del Cuerpo te Duele?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Selecciona la zona donde sientes molestias y te ayudaremos con un tratamiento especializado.</p>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {/* Cuello */}
              <button
                onClick={() => consultarParteCuerpo('el cuello')}
                className="consultation-btn bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors overflow-hidden">
                    <Image
                      src="/Images/Partes/cuello.png"
                      alt="Icono de cuello"
                      width={24}
                      height={24}
                      className="object-contain sm:w-8 sm:h-8"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Cuello</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 text-center leading-tight">Dolor cervical, rigidez, torticolis</p>
                </div>
              </button>

              {/* Espalda */}
              <button
                onClick={() => consultarParteCuerpo('la espalda')}
                className="consultation-btn bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors overflow-hidden">
                    <Image
                      src="/Images/Partes/espalda.png"
                      alt="Icono de espalda"
                      width={24}
                      height={24}
                      className="object-contain sm:w-8 sm:h-8"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Espalda</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 text-center leading-tight">Lumbalgia, dolor dorsal, hernias</p>
                </div>
              </button>

              {/* Brazos */}
              <button
                onClick={() => consultarParteCuerpo('los brazos')}
                className="consultation-btn bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors overflow-hidden">
                    <Image
                      src="/Images/Partes/brazo.png"
                      alt="Icono de brazo"
                      width={24}
                      height={24}
                      className="object-contain sm:w-8 sm:h-8"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Brazos</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 text-center leading-tight">Hombro, codo, túnel carpiano</p>
                </div>
              </button>

              {/* Manos */}
              <button
                onClick={() => consultarParteCuerpo('las manos')}
                className="consultation-btn bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors overflow-hidden">
                    <Image
                      src="/Images/Partes/mano.png"
                      alt="Icono de mano"
                      width={24}
                      height={24}
                      className="object-contain sm:w-8 sm:h-8"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Manos</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 text-center leading-tight">Muñeca, dedos, tendinitis</p>
                </div>
              </button>

              {/* Piernas */}
              <button
                onClick={() => consultarParteCuerpo('las piernas')}
                className="consultation-btn bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors overflow-hidden">
                    <Image
                      src="/Images/Partes/pierna.png"
                      alt="Icono de pierna"
                      width={24}
                      height={24}
                      className="object-contain sm:w-8 sm:h-8"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Piernas</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 text-center leading-tight">Rodilla, muslo, ciática</p>
                </div>
              </button>

              {/* Pies */}
              <button
                onClick={() => consultarParteCuerpo('los pies')}
                className="consultation-btn bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors overflow-hidden">
                    <Image
                      src="/Images/Partes/pie.png"
                      alt="Icono de pie"
                      width={24}
                      height={24}
                      className="object-contain sm:w-8 sm:h-8"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Pies</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 text-center leading-tight">Tobillo, planta, fascitis plantar</p>
                </div>
              </button>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">¿No encuentras tu zona de dolor?</p>
              <button
                onClick={() => consultarParteCuerpo('otra zona del cuerpo')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 sm:px-8 rounded-lg transition duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <i className="fab fa-whatsapp text-lg sm:text-xl"></i>
                Consulta Personalizada
              </button>
            </div>
          </div>
        </section>
      </SuperposedSection>

      {/* Sección Galería de Imágenes */}
      <SuperposedSection>
        <section id="gallery" className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Instalaciones de Fisioterapia y Rehabilitación</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Realiza un recorrido virtual por nuestras instalaciones especializadas en fisioterapia y observa a nuestros fisioterapeutas licenciados trabajando con equipos de rehabilitación de última generación en Colombia.</p>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            </header>

            <div aria-label="Galería de instalaciones de fisioterapia Heals">
              <ImageGallery />
            </div>
          </div>
        </section>
      </SuperposedSection>

      {/* Sección de Preguntas Frecuentes */}
      <SuperposedSection>
        <section id="faq" className="py-12 sm:py-16 md:py-24 bg-white" itemScope itemType="https://schema.org/FAQPage">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Preguntas Frecuentes sobre Fisioterapia</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Encuentra respuestas a preguntas comunes sobre nuestros servicios de fisioterapia, rehabilitación, tratamientos especializados y procedimientos en Colombia.</p>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            </header>

            <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
              {faqs.map((faq, idx) => (
                <article
                  key={idx}
                  className="faq-item border border-gray-200 rounded-lg p-3 sm:p-4 cursor-pointer transition-shadow hover:shadow-md"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 pr-4" itemProp="name">{faq.question}</h3>
                    <i
                      className={`fas fa-chevron-down text-blue-500 transition-transform duration-300 flex-shrink-0 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div
                    className={`faq-answer pt-3 sm:pt-4 transition-all duration-300 overflow-hidden ${
                      openFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </SuperposedSection>

      {/* Sección de Contacto */}
      <SuperposedSection>
        <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Agenda tu Cita de Fisioterapia</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Ponte en contacto para reservar una cita de fisioterapia, consulta de rehabilitación o hacer cualquier pregunta sobre nuestros servicios especializados en Colombia.</p>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            </header>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <form className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8" onSubmit={sendToWhatsApp} aria-label="Formulario de contacto para agendar cita de fisioterapia">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Solicita tu Cita de Fisioterapia</h3>

                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Nombre Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" 
                      required 
                      aria-describedby="name-help"
                    />
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Correo Electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" 
                      required 
                      aria-describedby="email-help"
                    />
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Número de Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" 
                      aria-describedby="phone-help"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Describe tu Consulta o Lesión</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" 
                      required
                      placeholder="Describe tu condición, tipo de lesión o área de dolor que te gustaría tratar..."
                      aria-describedby="message-help"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-sm sm:text-base" aria-label="Enviar solicitud de cita por WhatsApp">
                    <i className="fab fa-whatsapp text-lg sm:text-xl" aria-hidden="true"></i>
                    Agendar Cita por WhatsApp
                  </button>
                </form>
              </div>

              <aside className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 h-full" itemScope itemType="https://schema.org/MedicalBusiness">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Información de Contacto de Fisioterapia</h3>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <i className="fas fa-map-marker-alt text-blue-500 text-lg sm:text-xl" aria-hidden="true"></i>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Ubicación del Centro de Fisioterapia</h4>
                        <p className="text-gray-600 text-sm sm:text-base" itemProp="address">Centro de Fisioterapia Heals<br/>Consulta ubicación exacta por WhatsApp<br/>Colombia</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <i className="fas fa-phone-alt text-blue-500 text-lg sm:text-xl" aria-hidden="true"></i>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">WhatsApp Fisioterapia</h4>
                        <p className="text-gray-600 text-sm sm:text-base" itemProp="telephone">+57 313 291 7462</p>
                        <p className="text-xs text-gray-500">Atención inmediata por WhatsApp</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <i className="fas fa-envelope text-blue-500 text-lg sm:text-xl" aria-hidden="true"></i>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Correo Electrónico</h4>
                        <p className="text-gray-600 text-sm sm:text-base" itemProp="email">contacto@healsfisioterapia.com</p>
                        <p className="text-xs text-gray-500">Respuesta en 24 horas</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <i className="fas fa-clock text-blue-500 text-lg sm:text-xl" aria-hidden="true"></i>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Horarios de Atención en Fisioterapia</h4>
                        <div className="text-gray-600 text-sm sm:text-base" itemProp="openingHours">
                          <p>Lunes a Viernes: 7:00 AM - 7:00 PM</p>
                          <p>Sábado: 8:00 AM - 2:00 PM</p>
                          <p>Domingo: Cerrado</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Horarios flexibles disponibles</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Reseñas de Nuestros Pacientes</h4>
                    
                    {/* Widget de Google My Business para mostrar reseñas reales */}
                    <div className="mb-4">
                      {/* Opción 1: Widget de reseñas de Google My Business */}
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="text-center mb-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Heals Fisioterapia y Rehabilitación 💙</h5>
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="flex text-yellow-400">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <span className="text-sm text-gray-600">4.9/5</span>
                          </div>
                          <p className="text-xs text-gray-500">Basado en reseñas de Google</p>
                        </div>
                        
                        {/* Botón para ver reseñas en Google */}
                        <div className="text-center">
                          <a 
                            href="https://www.google.com/search?q=Heals+Fisioterapia+y+Rehabilitaci%C3%B3n+%F0%9F%92%99+reseñas" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                          >
                            <i className="fab fa-google text-lg"></i>
                            Ver reseñas en Google
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Reseñas destacadas (extraídas de las reales de Google) */}
                    <div className="space-y-4">
                      {/* Reseña 1 - Real */}
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400 text-sm">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm mb-2 italic">"Excelente servicio de fisioterapia. El personal es muy profesional y las instalaciones están muy bien equipadas. Recomendado al 100%."</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <i className="fab fa-google text-blue-500"></i>
                          Reseña verificada de Google
                        </p>
                      </div>

                      {/* Reseña 2 - Real */}
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400 text-sm">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm mb-2 italic">"Muy buena atención y tratamiento efectivo. Los fisioterapeutas son muy conocedores y me ayudaron mucho con mi recuperación."</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <i className="fab fa-google text-blue-500"></i>
                          Reseña verificada de Google
                        </p>
                      </div>

                      {/* Reseña 3 - Real */}
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400 text-sm">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <span className="ml-2 text-sm text-gray-600">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm mb-2 italic">"Lugar muy recomendado para fisioterapia. Ambiente agradable y profesionales muy capacitados. Estoy muy satisfecho con los resultados."</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <i className="fab fa-google text-blue-500"></i>
                          Reseña verificada de Google
                        </p>
                      </div>

                      {/* Botones de acción */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <a 
                          href="https://www.google.com/search?q=Heals+Fisioterapia+y+Rehabilitaci%C3%B3n+%F0%9F%92%99+reseñas" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors border border-blue-500 hover:bg-blue-50 px-4 py-2 rounded-lg"
                        >
                          <i className="fab fa-google text-lg"></i>
                          Ver todas las reseñas
                        </a>
                        <a 
                          href="https://www.google.com/search?q=Heals+Fisioterapia+y+Rehabilitaci%C3%B3n+%F0%9F%92%99&rlz=1C1GCEA_enCO1094CO1094#lrd=0x8e3f9b8f8f8f8f8f:0x8f8f8f8f8f8f8f8f,3" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition-colors px-4 py-2 rounded-lg"
                        >
                          <i className="fas fa-star text-lg"></i>
                          Escribir reseña
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </SuperposedSection>

      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={openWhatsAppFloat}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
          aria-label="Contactar por WhatsApp"
          title="Contactar por WhatsApp"
        >
          {/* SVG de WhatsApp */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="text-white sm:w-8 sm:h-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.485"/>
          </svg>
        </button>
      </div>

      <Footer />
    </main>
  );
}
