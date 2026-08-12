import type { Metadata } from "next";
import ContactoContent from "./components/ContactoContent";

export const metadata: Metadata = {
  title: "Contacto | Proceeding Consulting AC",
  description:
    "Póngase en contacto con Proceeding Consulting AC. Consultoría en sistemas, seguridad empresarial e implementación de software en Guadalajara, Jalisco. Teléfono, email y WhatsApp.",
  openGraph: {
    title: "Contacto | Proceeding Consulting AC",
    description: "Contáctenos para consultoría en sistemas y seguridad empresarial. Guadalajara, Jalisco.",
  },
};

export default function ContactoPage() {
  return <ContactoContent />;
}
