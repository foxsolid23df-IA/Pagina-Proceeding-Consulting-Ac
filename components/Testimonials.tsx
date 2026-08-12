"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "María García",
    role: "Directora Financiera",
    company: "Grupo Industrias del Bajío",
    text: "Proceeding transformó completamente nuestra infraestructura tecnológica. Su equipo de soporte es excepcional, siempre disponibles cuando los necesitamos.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Gerente de TI",
    company: "Comercializadora Nacional",
    text: "La implementación del sistema CONTPAQi fue impecable. Profesionales, puntuales y con un conocimiento profundo del producto. Totalmente recomendados.",
    rating: 5,
  },
  {
    name: "Laura Hernández",
    role: "CEO",
    company: "TechStart Solutions",
    text: "Gracias a Proceeding, nuestra seguridad informática está al 100%. Detectaron vulnerabilidades que otros no vieron y las corrigieron rápidamente.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    role: "Contador Principal",
    company: "Despacho Sánchez & Asociados",
    text: "Llevamos 5 años con Proceeding como nuestro socio tecnológico. Su capacitación al equipo fue clave para la adopción exitosa de nuevas herramientas.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mt-3 mb-5">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
            <svg
              className="absolute top-6 left-8 w-10 h-10 text-primary-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>

            <div className="relative z-10">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
              </div>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-dark-900">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[current].role} –{" "}
                    {testimonials[current].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary-800 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
