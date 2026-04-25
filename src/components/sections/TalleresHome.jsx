import ImageCarousel from "../ui/ImageCarousel";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

/**
 * TalleresHome
 * --------------------------------------------------
 * Sección de resumen de Talleres impartidos por el colegio.
 *
 * Función:
 * - Mostrar actividades extracurriculares y formativas
 * - Presentar visualmente los talleres mediante un carrusel
 * - Dirigir al usuario a la página completa de Talleres
 *
 * Uso:
 * - Se utiliza únicamente en el Home
 * - Versión resumida (preview)
 *
 * Arquitectura:
 * - No maneja estado
 * - No controla lógica de datos
 * - Consume ImageCarousel como componente reutilizable
 */

/**
 * IMÁGENES DEL CARRUSEL
 * --------------------------------------------------
 * CUANDO ESTÉN DISPONIBLES:
 *
 * 1. Guardar imágenes en:
 *    public/images/talleres/
 *
 * 2. Reemplazar este arreglo con rutas reales.
 *    El orden del arreglo define el orden del carrusel.
 */
const TALLERES_IMAGES = [
  {
    src: "/images/talleres/talleres (1).jpeg",
    alt: "Taller artístico escolar",
  },
  {
    src: "/images/talleres/talleres (2).jpeg",
    alt: "Taller deportivo",
  },
  {
    src: "/images/talleres/talleres (3).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (4).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (5).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (6).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (7).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (8).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (9).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (10).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (11).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (12).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (13).jpeg",
    alt: "Taller científico y experimental",
  },
  {
    src: "/images/talleres/talleres (14).jpeg",
    alt: "Taller científico y experimental",
  },
];

export default function TalleresHome() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* --------------------------------------------------
            CONTENIDO INSTITUCIONAL
            -------------------------------------------------- */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Talleres Educativos
          </h2>

          <p className="text-gray-700 mb-6">
            En Kairos Institute entendemos los talleres como espacios de
            exploración, desarrollo personal y aprendizaje activo, donde los
            estudiantes fortalecen habilidades artísticas, deportivas,
            científicas y sociales.
          </p>

          <Link to="/talleres">
            <Button variant="primary" size="md">
              Conoce nuestros talleres
            </Button>
          </Link>
        </div>

        {/* --------------------------------------------------
            CARRUSEL DE ACTIVIDADES
            --------------------------------------------------
            - Altura controlada por la sección
            - El carrusel solo maneja comportamiento
        */}
        <div className="relative w-full h-80 overflow-hidden rounded-lg bg-gray-200">
          {TALLERES_IMAGES.length > 0 ? (
            <ImageCarousel
              images={TALLERES_IMAGES}
              autoPlay={true}
              interval={5300}
              showControls={true}
            />
          ) : (
            /**
             * PLACEHOLDER TEMPORAL
             * Visible mientras no existan imágenes reales
             */
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 text-sm text-center px-4">
                Aquí se mostrará el carrusel de talleres del colegio
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
