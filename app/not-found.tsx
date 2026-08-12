import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-primary-800 mb-4">404</div>
        <h1 className="text-3xl font-bold text-dark-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Lo sentimos, la página que busca no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary-800 hover:bg-primary-900 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            Volver al Inicio
          </Link>
          <Link
            href="/contacto"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
