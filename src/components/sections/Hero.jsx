import ImageCarousel from "../ui/ImageCarousel";

/**
 * Hero
 * --------------------------------------------------
 * Sección principal de apertura del sitio.
 *
 * Responsabilidad:
 * - Definir el layout visual del Hero
 * - Proveer imágenes al carrusel
 * - Renderizar overlay y contenido editorial
 *
 * No maneja:
 * - Estado
 * - Timers
 * - Lógica de rotación de imágenes
 */

/**
 * IMÁGENES DEL HERO
 * --------------------------------------------------
 * IMPORTANTE:
 * - Aquí se agregan o reemplazan las imágenes del Hero
 * - Las rutas deben apuntar a /public/images/
 * - El orden del arreglo define el orden del carrusel
 */
const HERO_IMAGES = [
  {
    src: "images/hero/hero (1).jpeg",
    alt: "trekking en entorno natural con niños",
  },
  {
    src: "images/hero/hero (2).jpeg",
    alt: "teatro en espacio educativo Kairos Institute",
  },
  {
    src: "images/hero/hero (3).jpeg",
    alt: "fiesta disfraces en espacio educativo Kairos Institute",
  },
  {
    src: "images/hero/hero (4).jpeg",
    alt: "actividades 18 de septiembre",
  },
  {
    src: "images/hero/hero (5).jpeg",
    alt: "salida al aire libre con niños y jóvenes",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Carrusel de fondo */}
      <ImageCarousel
        images={HERO_IMAGES}
        autoPlay={true}
        interval={6000}
        showControls={false}
      />

      {/* Overlay oscuro para legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido editorial */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Educación consciente para un mundo en cambio
          </h1>

          <p className="text-lg md:text-xl">
            Kairos Institute acompaña el desarrollo integral de niños y jóvenes,
            respetando sus procesos y potenciando su vínculo con el entorno.
          </p>
        </div>
      </div>
    </section>
  );
}
