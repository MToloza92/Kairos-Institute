/**
 * MapSection
 * --------------------------------------------------
 * Sección de ubicación institucional.
 *
 * Función:
 * - Mostrar la ubicación física del colegio
 * - Facilitar orientación geográfica al usuario
 *
 * Características técnicas:
 * - Implementada mediante iframe (Google Maps)
 * - No maneja estado ni eventos
 * - No depende de backend
 * - Puede ser reemplazada por otro proveedor de mapas
 *   sin afectar la estructura del sitio
 *
 * Importante:
 * - El src del iframe es el único dato que debe
 *   modificarse si cambia la ubicación
 */

const MAP_DATA = {
  iframeSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.4487520560715!2d-71.89877982407249!3d-39.30075032047741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9613877aec3ecfad%3A0x2ac711480266de47!2sCentro%20Educacional%20Kairos%20Institute!5e0!3m2!1ses!2scl!4v1767933985661!5m2!1ses!2scl",
  // Si la dirección cambia, reemplazar solo esta URL
};

export default function MapSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado de la sección */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cómo llegar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra fácilmente nuestra ubicación y visítanos en nuestras
            instalaciones.
          </p>
        </header>

        {/* Contenedor del mapa */}
        <div className="w-full h-100 rounded-xl overflow-hidden shadow-sm border">
          <iframe
            src={MAP_DATA.iframeSrc}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Kairos Institute"
          />
        </div>
      </div>
    </section>
  );
}
