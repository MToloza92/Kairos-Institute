import ImageCarousel from "../ui/ImageCarousel";
import Button from "../ui/Button";

/**
 * AllTeaches
 * --------------------------------------------------
 * Sección institucional "Todo Enseña".
 *
 * Función:
 * - Comunicar la filosofía educativa de Kairos Institute
 * - Mostrar experiencias educativas mediante un carrusel
 * - Dirigir al usuario al Proyecto Educativo
 *
 * Arquitectura:
 * - No maneja estado
 * - No controla temporizadores
 * - Consume ImageCarousel como componente reutilizable
 */

/**
 * IMÁGENES DEL CARRUSEL
 * --------------------------------------------------
 * CUANDO ESTÉN DISPONIBLES:
 *
 * 1. Guardar imágenes en:
 *    public/images/all-teaches/
 *
 * 2. Reemplazar este arreglo con rutas reales.
 *    El orden del arreglo define el orden del carrusel.
 */
const ALL_TEACHES_IMAGES = [
  {
    src: "/public/images/all-teaches/all-teaches (1).jpg",
    alt: "Aprendizaje en entorno natural",
  },
  {
    src: "/public/images/all-teaches/all-teaches (2).jpg",
    alt: "Trabajo colaborativo",
  },
  {
    src: "/public/images/all-teaches/all-teaches (3).jpg",
    alt: "Exploración guiada",
  },
];

export default function AllTeaches() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* --------------------------------------------------
            CONTENIDO INSTITUCIONAL
            -------------------------------------------------- */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Todo enseña</h2>

          <p className="text-gray-700 mb-6">
            En Kairos Institute entendemos que el aprendizaje ocurre en cada
            experiencia, en cada espacio y en cada interacción. Todo es una
            oportunidad para aprender y crecer.
          </p>

          <Button variant="primary" size="md">
            Conoce nuestro proyecto educativo
          </Button>
        </div>

        {/* --------------------------------------------------
            CARRUSEL DE EXPERIENCIAS
            --------------------------------------------------
            - Altura controlada por la sección
            - El carrusel solo maneja comportamiento
        */}
        <div className="relative w-full h-80 overflow-hidden rounded-lg bg-gray-200">
          {ALL_TEACHES_IMAGES.length > 0 ? (
            <ImageCarousel
              images={ALL_TEACHES_IMAGES}
              autoPlay={true}
              interval={4000}
              showControls={true}
            />
          ) : (
            /**
             * PLACEHOLDER TEMPORAL
             * Visible mientras no existan imágenes reales
             */
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 text-sm text-center px-4">
                Aquí se mostrará el carrusel de experiencias educativas
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
