import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Heals Fisioterapia y Rehabilitación - Centro de Fisioterapia Profesional",
    template: "%s | Heals Fisioterapia"
  },
  description: "Fisioterapia experta para una vida sin dolor. Planes de tratamiento personalizados, rehabilitación postquirúrgica, lesiones deportivas y más. Centro profesional de fisioterapia en Colombia con 4.9★ en Google.",
  keywords: [
    "fisioterapia", 
    "rehabilitación", 
    "fisioterapeuta", 
    "tratamiento dolor", 
    "lesiones deportivas",
    "rehabilitación postquirúrgica",
    "dolor de espalda",
    "dolor cervical", 
    "fisioterapia Colombia",
    "centro rehabilitación",
    "terapia física",
    "dolor crónico",
    "fisioterapia pediátrica",
    "fisioterapia geriátrica",
    "ergonomía laboral"
  ],
  authors: [{ name: "Heals Fisioterapia y Rehabilitación" }],
  creator: "Heals Fisioterapia y Rehabilitación",
  publisher: "Heals Fisioterapia y Rehabilitación",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://heals-fisioterapia.com',
    siteName: 'Heals Fisioterapia y Rehabilitación',
    title: 'Heals Fisioterapia y Rehabilitación - Centro de Fisioterapia Profesional',
    description: 'Fisioterapia experta para una vida sin dolor. Planes de tratamiento personalizados, rehabilitación y terapia física profesional en Colombia.',
    images: [
      {
        url: '/Images/healslogo.png',
        width: 1200,
        height: 630,
        alt: 'Heals Fisioterapia y Rehabilitación - Logo',
      },
      {
        url: '/Images/Equipo_heals.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipo profesional de fisioterapeutas Heals',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heals Fisioterapia y Rehabilitación - Centro de Fisioterapia Profesional',
    description: 'Fisioterapia experta para una vida sin dolor. Planes de tratamiento personalizados y rehabilitación profesional.',
    images: ['/Images/healslogo.png'],
  },
  alternates: {
    canonical: 'https://heals-fisioterapia.com',
  },
  other: {
    'google-site-verification': 'TU_CODIGO_GOOGLE_SEARCH_CONSOLE',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/Images/healsfavicon.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <StructuredData />
      </head>
      <body>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
