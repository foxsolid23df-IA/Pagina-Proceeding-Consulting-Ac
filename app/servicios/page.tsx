import type { Metadata } from "next";
import ServiciosContent from "./components/ServiciosContent";

export const metadata: Metadata = {
  title: "Nuestros Servicios | Consultoría en Sistemas y Seguridad",
  description:
    "Consultoría especializada en implementación de software empresarial (CONTPAQi), soporte técnico, ciberseguridad, auditorías de seguridad y cumplimiento normativo en Guadalajara, México.",
  openGraph: {
    title: "Servicios | Proceeding Consulting AC",
    description: "Consultoría en sistemas, software empresarial y seguridad informática. Soluciones integrales para su negocio.",
  },
};

export default function ServiciosPage() {
  return <ServiciosContent />;
}
