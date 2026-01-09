import { useEffect, useState, useCallback } from "react";

/**
 * ImageCarousel
 * --------------------------------------------------
 * Componente dinámico reutilizable para mostrar
 * una secuencia de imágenes en formato carrusel.
 *
 * Responsabilidad:
 * - Renderizar imágenes
 * - Manejar imagen activa
 * - Controlar rotación automática (opcional)
 *
 * No define:
 * - Layout de sección
 * - Textos u overlays
 * - Colores institucionales
 *
 * Uso previsto:
 * - Hero
 * - Carruseles institucionales
 * - Galerías simples
 */

/**
 * PROPS
 * --------------------------------------------------
 * images: Array de objetos { src, alt }
 * autoPlay: boolean (default true)
 * interval: number en ms (default 5000)
 * showControls: boolean (default true)
 */

export default function ImageCarousel({
  images = [],
  autoPlay = true,
  interval = 5000,
  showControls = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Avanza a la siguiente imagen
   */
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  /**
   * Retrocede a la imagen anterior
   */
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  /**
   * Control de autoplay
   * Se ejecuta solo si autoPlay está activo
   */
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length, nextSlide]);

  /**
   * Seguridad: si no hay imágenes, no renderiza nada
   */
  if (!images.length) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Contenedor de imágenes */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full shrink-0">
            <img
              src={image.src}
              alt={image.alt || `slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controles */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
