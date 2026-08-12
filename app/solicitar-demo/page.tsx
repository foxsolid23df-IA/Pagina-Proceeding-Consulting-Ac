import type { Metadata } from "next";
import DemoContent from "./components/DemoContent";

export const metadata: Metadata = {
  title: "Solicitar Demo Gratis | Proceeding Consulting AC",
  description:
    "Solicite una demostración gratuita de nuestros servicios de consultoría en sistemas y seguridad empresarial. Le contactamos en menos de 24 horas.",
  openGraph: {
    title: "Solicitar Demo Gratis | Proceeding Consulting AC",
    description: "Demostración gratuita de consultoría en sistemas y seguridad empresarial.",
  },
};

export default function SolicitarDemoPage() {
  return <DemoContent />;
}
