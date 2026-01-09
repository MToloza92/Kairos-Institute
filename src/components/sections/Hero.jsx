import { useState, useEffect } from "react";
import Button from "../ui/Button";

/**
 * HERO – Sección principal del sitio
 * --------------------------------------------------
 * - Incluye un carrusel de imágenes (aún sin imágenes reales)
 * - Preparado para autoplay
 * - Totalmente responsive
 * - Pensado para contenido institucional
 */

export default function Hero() {
  /**
   *   IMÁGENES DEL CARRUSEL
   * --------------------------------------------------
   *   IMPORTANTE:
   * Cuando tengas las imágenes reales:
   *
   * 1. Guárdalas en:
   *    public/images/hero/
   *
   * 2. Nómbralas, por ejemplo:
   *    - hero-1.jpg
   *    - hero-2.jpg
   *    - hero-3.jpg
   *
   * 3. Reemplaza este arreglo con las rutas reales
   */
  const images = [
    // "/images/hero/hero-1.jpg",
    // "/images/hero/hero-2.jpg",
    // "/images/hero/hero-3.jpg",
  ];

  /**
   * Estado que controla qué imagen se muestra
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   *    AUTOPLAY DEL CARRUSEL
   * --------------------------------------------------
   * - Cambia de imagen cada 5 segundos
   * - Cuando no hay imágenes, NO hace nada
   */
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* --------------------------------------------------
          FONDO / CARRUSEL
          -------------------------------------------------- */}
      {images.length > 0 ? (
        images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Imagen institucional ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))
      ) : (
        /**
         *   PLACEHOLDER TEMPORAL
         * --------------------------------------------------
         * Se muestra mientras no existan imágenes.
         * Luego puedes eliminar este bloque si lo deseas.
         */
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            Aquí irá el carrusel de imágenes institucionales
          </p>
        </div>
      )}

      {/* --------------------------------------------------
          OVERLAY OSCURO (mejora contraste del texto)
          -------------------------------------------------- */}
      <div className="absolute inset-0 bg-black/40" />

      {/* --------------------------------------------------
          CONTENIDO DEL HERO
          -------------------------------------------------- */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kairos Institute
          </h1>

          <p className="max-w-xl text-lg mb-6">
            Educación consciente, aprendizaje significativo y formación integral
            para el mundo actual.
          </p>

          {/* Botón principal */}
          <Button variant="primary" size="lg">
            Conoce nuestro proyecto educativo
          </Button>
        </div>
      </div>
    </section>
  );
}
