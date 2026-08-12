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

export const metadata: Metadata = {
  title: "Proceeding Consulting AC | Consultoría en Sistemas y Seguridad Empresarial",
  description:
    "Expertos en consultoría de sistemas, implementación de software empresarial y seguridad informática. Soluciones tecnológicas integrales para su negocio.",
  keywords: [
    "consultoría sistemas",
    "seguridad empresarial",
    "software empresarial",
    "CONTPAQi",
    "soporte técnico",
    "ciberseguridad",
    "auditoría seguridad",
  ],
  openGraph: {
    title: "Proceeding Consulting AC",
    description: "Consultoría en Sistemas y Seguridad Empresarial",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
