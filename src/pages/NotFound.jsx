import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";

/**
 * NotFound
 * --------------------------------------------------
 * Página 404 – Ruta no encontrada.
 *
 * Función:
 * - Informar error de navegación
 * - Mantener coherencia visual con el sitio
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>

        <p className="text-gray-600 max-w-md">
          La página que buscas no existe o fue movida.
        </p>
      </main>

      <Footer />
    </>
  );
}
