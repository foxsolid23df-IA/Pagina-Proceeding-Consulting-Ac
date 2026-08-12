"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.4"
        )
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px), radial-gradient(circle at 75% 75%, #06b6d4 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={badgeRef} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/90 font-medium">
            Soluciones Tecnológicas Integrales
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Consultoría en{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-300">
            Sistemas
          </span>{" "}
          y{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-300">
            Seguridad
          </span>{" "}
          Empresarial
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Protectemos y optimizamos la infraestructura tecnológica de su
          empresa. Implementamos soluciones de software y seguridad informática
          que impulsan el crecimiento de su negocio.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#servicios"
            className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:-translate-y-0.5"
          >
            Contactar Ahora
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { number: "+10", label: "Años de Experiencia" },
            { number: "+200", label: "Clientes Satisfechos" },
            { number: "24/7", label: "Soporte Técnico" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent-400">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
