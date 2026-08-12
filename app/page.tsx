import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Proceeding Consulting AC | Consultoría en Sistemas y Seguridad Empresarial",
  description:
    "Expertos en consultoría de sistemas, implementación de software empresarial (CONTPAQi) y seguridad informática. Soluciones tecnológicas integrales para su negocio en Guadalajara, México.",
  openGraph: {
    title: "Proceeding Consulting AC | Consultoría en Sistemas y Seguridad",
    description: "Expertos en consultoría de sistemas, software empresarial y seguridad informática.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
    </>
  );
}
