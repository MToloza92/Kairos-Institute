import { useState, useEffect } from "react";
import Button from "../ui/Button";

/**
 * ALLTEACHES – Sección “Todo Enseña”
 * --------------------------------------------------
 * Carrusel institucional que muestra experiencias
 * educativas y refuerza la filosofía de Kairos Institute.
 *
 * Incluye botón hacia el Proyecto Educativo.
 */

export default function AllTeaches() {
  /**
   *   IMÁGENES DEL CARRUSEL
   * --------------------------------------------------
   * CUANDO ESTÉN DISPONIBLES:
   *
   * 1. Guardar imágenes en:
   *    public/images/all-teaches/
   *
   * 2. Reemplazar este arreglo con rutas reales:
   *
   * const images = [
   *   "/images/all-teaches/experiencia-1.jpg",
   *   "/images/all-teaches/experiencia-2.jpg",
   *   "/images/all-teaches/experiencia-3.jpg",
   * ];
   */
  const images = [];

  /**
   * Estado de imagen actual
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Autoplay del carrusel
   */
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* --------------------------------------------------
            TEXTO INSTITUCIONAL
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
            CARRUSEL DE IMÁGENES
            -------------------------------------------------- */}
        <div className="relative w-full h-80 overflow-hidden rounded-lg bg-gray-200">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Experiencia educativa ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            /**
             * PLACEHOLDER TEMPORAL
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
