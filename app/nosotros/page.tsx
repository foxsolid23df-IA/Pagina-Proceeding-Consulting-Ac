"use client";

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Misión",
    description:
      "Proteger y potenciar la infraestructura tecnológica de las empresas mexicanas mediante soluciones innovadoras de sistemas y seguridad informática.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Visión",
    description:
      "Ser la empresa líder en consultoría tecnológica en México, reconocida por la excelencia de nuestro servicio y la confianza de nuestros clientes.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Valores",
    description:
      "Integridad, innovación, compromiso y excelencia. Cada solución que implementamos refleja nuestro dedicación a la calidad y la confianza.",
  },
];

const team = [
  {
    name: "Ing. Roberto Méndez",
    role: "Director General",
    description: "Más de 15 años de experiencia en consultoría tecnológica y seguridad informática empresarial.",
  },
  {
    name: "Ing. Patricia Vargas",
    role: "Directora de Sistemas",
    description: "Especialista en implementación de software empresarial y arquitectura de TI.",
  },
  {
    name: "Ing. Carlos Toledo",
    role: "Director de Seguridad",
    description: "Experto en ciberseguridad, auditorías informáticas y cumplimiento normativo.",
  },
];

export default function NosotrosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Sobre Nosotros</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Expertos en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-300">
              Tecnología
            </span>{" "}
            y Seguridad
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Con más de una década de experiencia, somos su socio estratégico en
            soluciones de sistemas y protección informática empresarial.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-accent-500 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Nuestro Equipo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mt-3 mb-5">
              Profesionales Certificados
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Contamos con un equipo de ingenieros certificados en las principales
              plataformas tecnológicas del mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow animate-fadeIn"
                style={{ animationDelay: `${index * 150 + 200}ms` }}
              >
                <div className="w-20 h-20 bg-primary-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.name.split(" ").slice(-1)[0].charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-dark-900">{member.name}</h3>
                <p className="text-accent-500 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Contáctenos hoy y descubra cómo podemos ayudarle a impulsar su negocio.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent-500/30"
          >
            Contáctenos
          </a>
        </div>
      </section>
    </div>
  );
}
