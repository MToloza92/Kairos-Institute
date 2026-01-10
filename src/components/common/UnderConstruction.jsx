/**
 * UnderConstruction
 * --------------------------------------------------
 * Componente reutilizable para páginas en desarrollo.
 *
 * Uso:
 * - Mostrar estado "en construcción"
 * - Mantener coherencia visual entre páginas incompletas
 * - Evitar páginas vacías o errores 404
 *
 * Props:
 * - title: título de la página
 * - description: texto explicativo opcional
 */

export default function UnderConstruction({ title, description }) {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-xl text-center px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

        <p className="text-gray-600 mb-6">
          {description ||
            "Esta sección se encuentra actualmente en desarrollo. Pronto estará disponible con información detallada."}
        </p>

        <p className="text-sm text-gray-500">
          Kairos Institute · Sitio institucional
        </p>
      </div>
    </section>
  );
}
