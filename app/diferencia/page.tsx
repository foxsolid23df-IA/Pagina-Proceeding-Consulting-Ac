import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Por Qué Elegirnos? | Diferencia Proceeding",
  description:
    "Descubra por qué Proceeding Consulting es la mejor opción en consultoría de sistemas y seguridad empresarial. Equipo certificado, atención personalizada y más de 10 años de experiencia.",
  openGraph: {
    title: "La Diferencia Proceeding | Consultoría en Sistemas",
    description: "Equipo certificado, atención personalizada y más de 10 años de experiencia en tecnología y seguridad empresarial.",
  },
};

const stats = [
  { number: "10+", label: "Años de Experiencia" },
  { number: "200+", label: "Clientes Atendidos" },
  { number: "500+", label: "Proyectos Completados" },
  { number: "99.9%", label: "Uptime Garantizado" },
];

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Equipo Certificado",
    description:
      "Nuestros ingenieros cuentan con certificaciones en las principales plataformas y tecnologías del mercado.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Atención Personalizada",
    description:
      "Cada cliente es único. Desarrollamos soluciones a la medida con un contacto directo y dedicado.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Respuesta Inmediata",
    description:
      "Soporte técnico rápido y eficiente. Entendemos que cada minuto de inactividad es una pérdida para su negocio.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Experiencia Comprobada",
    description:
      "Más de una década brindando soluciones tecnológicas exitosas a empresas de todos los tamaños.",
  },
];

export default function DiferenciaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">¿Por Qué Elegirnos?</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            La{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-300">
              Diferencia
            </span>{" "}
            Proceeding
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            No somos solo proveedores, somos su socio estratégico en tecnología.
            Estas son las razones por las que nuestros clientes confían en nosotros.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Razones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 hover:shadow-xl hover:shadow-primary-100/30 transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 bg-primary-800 rounded-xl flex items-center justify-center text-white mb-5 group-hover:bg-accent-500 transition-colors">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Experimente la diferencia Proceeding
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Solicite una demostración sin costo y compruebe por qué somos la mejor opción.
          </p>
          <Link
            href="/solicitar-demo"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent-500/30"
          >
            Solicitar Demo Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
