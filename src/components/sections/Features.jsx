/**
 * COMPONENT: Features
 * --------------------------------------------------
 * Rol del componente:
 * Sección explicativa utilizada en la Home para detallar
 * cómo se materializa el proyecto educativo en la práctica.
 *
 * Ubicación:
 * - Home.jsx
 * - Debe renderizarse después de Pillars
 *
 * Responsabilidad:
 * - Mostrar bloques informativos secuenciales
 * - Cada bloque combina imagen + texto
 * - No es navegación ni CTA principal
 *
 * Características técnicas:
 * - Data-driven (FEATURES_DATA)
 * - Layout alternado (imagen/texto)
 * - Componente presentacional (sin estado)
 *
 * Escalabilidad:
 * - Se pueden agregar o quitar features sin modificar JSX
 * - Cada feature puede incorporar enlaces o animaciones futuras
 */

const FEATURES_DATA = [
  {
    id: 1,
    title: "Acompañamiento Personalizado",
    description:
      "Cada estudiante es acompañado considerando su proceso individual, promoviendo autonomía, confianza y desarrollo integral.",
    image: null, // Reemplazar por ruta cuando existan imágenes
  },
  {
    id: 2,
    title: "Aprendizaje Basado en la Experiencia",
    description:
      "El aprendizaje se construye desde la vivencia directa, integrando reflexión, acción y sentido en cada etapa del proceso educativo.",
    image: null,
  },
  {
    id: 3,
    title: "Entornos de Aprendizaje Conscientes",
    description:
      "Los espacios educativos están diseñados para favorecer el bienestar, la concentración y la conexión con el entorno natural.",
    image: null,
  },
  {
    id: 4,
    title: "Comunidad Activa y Participativa",
    description:
      "Familias, docentes y estudiantes forman parte activa de una comunidad educativa basada en el respeto y la colaboración.",
    image: null,
  },
];

export default function Features() {
  return (
    /**
     * <section>
     * --------------------------------------------------
     * Contenedor principal de la sección.
     *
     * - bg-gray-50 diferencia visualmente esta sección
     *   de Pillars e Inspiration.
     * - py-24 define separación vertical consistente.
     */
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/**
         * Encabezado de la sección.
         *
         * - Mantiene jerarquía semántica con h2
         * - Texto editable sin afectar la lógica
         */}
        <header className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestra Propuesta Educativa en Acción
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Así se viven día a día los principios que orientan el proyecto
            educativo de Kairos Institute.
          </p>
        </header>

        {/**
         * Bloques de features.
         *
         * - Se renderizan secuencialmente
         * - Layout alternado según índice (par/impar)
         * - Cada bloque ocupa el ancho completo
         */}
        <div className="flex flex-col gap-20">
          {FEATURES_DATA.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              /**
               * Bloque individual de feature.
               *
               * - Grid de 2 columnas en desktop
               * - Colapsa a una columna en mobile
               * - Orden alternado para ritmo visual
               */
              <div
                key={feature.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/**
                 * Contenedor de imagen.
                 *
                 * Actualmente placeholder visual.
                 * Cuando se agreguen imágenes:
                 * - Reemplazar el div por <img />
                 * - Usar feature.image como src
                 */}
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">
                    Imagen ilustrativa
                  </span>
                </div>

                {/**
                 * Contenedor de texto.
                 *
                 * - No debe contener lógica
                 * - Textos se editan en FEATURES_DATA
                 */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
