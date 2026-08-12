import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://pagina-proceeding-consulting-ac.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Proceeding Consulting AC | Consultoría en Sistemas y Seguridad Empresarial",
    template: "%s | Proceeding Consulting AC",
  },
  description:
    "Expertos en consultoría de sistemas, implementación de software empresarial y seguridad informática. Soluciones tecnológicas integrales para su negocio en Guadalajara, México.",
  keywords: [
    "consultoría sistemas",
    "seguridad empresarial",
    "software empresarial",
    "CONTPAQi",
    "soporte técnico",
    "ciberseguridad",
    "auditoría seguridad",
    "consultoría tecnología Guadalajara",
    "seguridad informática Jalisco",
    "implementación software empresa",
  ],
  authors: [{ name: "Proceeding Consulting AC" }],
  creator: "Proceeding Consulting AC",
  publisher: "Proceeding Consulting AC",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Proceeding Consulting AC | Consultoría en Sistemas y Seguridad",
    description: "Expertos en consultoría de sistemas, software empresarial y seguridad informática. Soluciones tecnológicas integrales para su negocio.",
    url: BASE_URL,
    siteName: "Proceeding Consulting AC",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Proceeding Consulting AC - Consultoría en Sistemas y Seguridad Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proceeding Consulting AC | Consultoría en Sistemas y Seguridad",
    description: "Expertos en consultoría de sistemas, software empresarial y seguridad informática.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Proceeding Consulting AC",
    description: "Expertos en consultoría de sistemas, implementación de software empresarial y seguridad informática.",
    url: BASE_URL,
    telephone: "+52-33-1234-5678",
    email: "info@proceedingconsulting.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guadalajara",
      addressRegion: "Jalisco",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.6597,
      longitude: -103.3496,
    },
    areaServed: {
      "@type": "State",
      name: "Jalisco",
    },
    serviceType: [
      "Consultoría en Sistemas",
      "Seguridad Informática",
      "Implementación de Software",
      "Soporte Técnico",
      "Auditoría de Seguridad",
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [],
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
