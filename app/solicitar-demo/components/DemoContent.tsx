"use client";

import { useState } from "react";
import Link from "next/link";

export default function DemoContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      employees: "",
      message: "",
    });
  };

  return (
    <div>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Demostración</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Solicite una{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-300">
              Demo sin Costo
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Descubra cómo nuestras soluciones pueden transformar su empresa. Complete el formulario y le contactaremos para agendar su demostración personalizada.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-dark-900 mb-2">Formulario de Solicitud de Demo</h2>
              <p className="text-gray-500">Complete sus datos y le contactaremos en menos de 24 horas.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Nombre completo *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Correo electrónico *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all" placeholder="correo@empresa.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Teléfono / WhatsApp *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all" placeholder="33 1234 5678" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-900 mb-2">Empresa *</label>
                  <input type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all" placeholder="Nombre de su empresa" />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-semibold text-dark-900 mb-2">Número de empleados</label>
                <select value={formData.employees} onChange={(e) => setFormData({ ...formData, employees: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white">
                  <option value="">Seleccione una opción</option>
                  <option value="1-10">1 – 10 empleados</option>
                  <option value="11-50">11 – 50 empleados</option>
                  <option value="51-200">51 – 200 empleados</option>
                  <option value="201-500">201 – 500 empleados</option>
                  <option value="500+">Más de 500 empleados</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-semibold text-dark-900 mb-2">¿Qué servicio le interesa?</label>
                <select value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white">
                  <option value="">Seleccione un servicio</option>
                  <option value="sistemas">Consultoría en Sistemas</option>
                  <option value="seguridad">Seguridad Empresarial</option>
                  <option value="ambos">Ambos servicios</option>
                </select>
              </div>

              <button type="submit" className="mt-6 w-full bg-accent-500 hover:bg-accent-600 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-accent-500/25">
                Solicitar Demo Gratis
              </button>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center font-medium">
                  ¡Gracias! Su solicitud ha sido enviada. Nos pondremos en contacto pronto para agendar su demostración.
                </div>
              )}

              <p className="mt-4 text-xs text-gray-400 text-center">
                Al enviar, acepta que Proceeding Consulting AC se pondrá en contacto con usted conforme a su política de privacidad.
              </p>
            </form>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Rápido", description: "Le contactamos en menos de 24 horas" },
              { icon: "🎯", title: "Personalizado", description: "Demo adaptada a las necesidades de su empresa" },
              { icon: "💰", title: "Sin Compromiso", description: "Demostración completamente gratuita" },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500">
              ¿Prefiere contactarnos directamente?{" "}
              <Link href="/contacto" className="text-primary-800 font-semibold hover:text-accent-500 transition-colors">
                Ir a Contacto
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
