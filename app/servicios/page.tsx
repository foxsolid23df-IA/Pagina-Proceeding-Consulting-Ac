"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  {
    id: "sistemas",
    title: "Consultoría en Sistemas",
    subtitle: "Soluciones tecnológicas para optimizar su negocio",
    services: [
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 7.41A2.25 2.25 0 012.25 5.498V5.25" />
          </svg>
        ),
        title: "Implementación de Software",
        description:
          "Instalación, configuración y puesta en marcha de sistemas empresariales como CONTPAQi y otras soluciones contables y administrativas.",
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
          </svg>
        ),
        title: "Soporte Técnico Especializado",
        description:
          "Atención inmediata para resolver incidencias, mantener sus sistemas operativos y garantizar la continuidad de su negocio.",
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        ),
        title: "Capacitación y Migración",
        description:
          "Formamos a su personal en el uso de nuevas herramientas y realizamos migraciones seguras de datos entre sistemas.",
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.25 8.5" />
          </svg>
        ),
        title: "Integración de Sistemas",
        description:
          "Conectamos sus herramientas existentes para crear un ecosistema tecnológico unificado y eficiente.",
      },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad Empresarial",
    subtitle: "Protección integral para su infraestructura",
    services: [
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        ),
        title: "Auditorías de Seguridad",
        description:
          "Evaluamos vulnerabilidades, analizamos riesgos y diseñamos planes de protección personalizados para su empresa.",
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        ),
        title: "Ciberseguridad",
        description:
          "Implementamos firewalls, antivirus avanzados, detección de intrusos y políticas de seguridad para proteger sus datos.",
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: "Monitoreo 24/7",
        description:
          "Vigilancia continua de su infraestructura tecnológica para detectar y prevenir amenazas en tiempo real.",
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        ),
        title: "Cumplimiento Normativo",
        description:
          "Le ayudamos a cumplir con las normativas de protección de datos y regulaciones del sector (NOM-151, GDPR, etc.).",
      },
    ],
  },
];

export default function ServiciosPage() {
  const [activeTab, setActiveTab] = useState("sistemas");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Nuestros Servicios</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Soluciones Integrales para su{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-300">
              Empresa
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ofrecemos consultoría especializada en dos áreas fundamentales para
            el crecimiento y la protección de su negocio.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl p-1.5 shadow-lg border border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === cat.id
                      ? "bg-primary-800 text-white shadow-md"
                      : "text-gray-600 hover:text-dark-900 hover:bg-gray-50"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div key={activeTab}>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-dark-900">
                {activeCategory.title}
              </h2>
              <p className="text-gray-500 mt-2">{activeCategory.subtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeCategory.services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/30 transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-800 mb-5 group-hover:bg-primary-800 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-800 to-accent-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                ¿No sabe qué servicio necesita?
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestro equipo de expertos le ayudará a encontrar la solución perfecta para su empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="bg-primary-800 hover:bg-primary-900 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  Contáctenos
                </Link>
                <Link
                  href="/solicitar-demo"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  Solicitar Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
