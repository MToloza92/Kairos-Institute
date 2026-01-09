/**
 * COMPONENT: Pillars
 * --------------------------------------------------
 * Rol:
 * Sección de presentación de los pilares educativos
 * de Kairos Institute.
 *
 * Uso:
 * - Página Home.jsx
 * - Sección informativa clave (no interactiva)
 * - Complementa Hero y AllTeaches aportando claridad conceptual
 *
 * Características técnicas:
 * - Renderizado mediante mapeo de datos (PILLARS_DATA)
 * - No maneja estado ni efectos
 * - Componente presentacional reutilizable
 *
 * Escalabilidad:
 * - Se pueden agregar/quitar pilares sin modificar JSX
 * - Cada pilar puede incorporar imagen, link o icono
 *   en futuras iteraciones del proyecto
 */

import Card from "../ui/Card";

/**
 * DATA SOURCE: PILLARS_DATA
 * --------------------------------------------------
 * Fuente de datos estática para los pilares educativos.
 *
 * Buenas prácticas:
 * - Editar textos y títulos SOLO aquí
 * - No modificar la estructura del componente
 * - Mantener IDs únicos y estables
 *
 * Extensión futura:
 * - image: URL de imagen representativa
 * - link: ruta a página de detalle
 * - icon: nombre de icono (si se usa librería)
 */
const PILLARS_DATA = [
  {
    id: 1,
    title: "Educación Consciente",
    description:
      "Promovemos una educación consciente que considera el desarrollo emocional, social y académico de cada estudiante, respetando sus tiempos y procesos.",
    image: "/public/images/pillars/Educación Consciente.png", // Reemplazar por string con ruta cuando exista imagen
  },
  {
    id: 2,
    title: "Aprendizaje Experiencial",
    description:
      "El aprendizaje se construye a partir de la experiencia directa, el pensamiento crítico y la participación activa del estudiante en su entorno.",
    image: "/public/images/pillars/Aprendizaje Experiencial.png", // Reemplazar por string con ruta cuando exista imagen
  },
  {
    id: 3,
    title: "Formación Integral",
    description:
      "Acompañamos el desarrollo integral de niños y jóvenes, fortaleciendo habilidades académicas, emocionales y sociales para la vida.",
    image: "/public/images/pillars/Formacion-integral.png", // Reemplazar por string con ruta cuando exista imagen
  },
  {
    id: 4,
    title: "Comunidad Educativa",
    description:
      "Fomentamos una comunidad educativa colaborativa, donde estudiantes, familias y docentes participan activamente del proceso formativo.",
    image: "/public/images/pillars/comunidad-educativa.png", // Reemplazar por string con ruta cuando exista imagen
  },
];

export default function Pillars() {
  return (
    /**
     * <section>
     * --------------------------------------------------
     * Contenedor principal de la sección.
     *
     * - w-full: ocupa el ancho completo del viewport
     * - py-20: define separación visual entre secciones
     *
     * Esta sección no debe contener lógica adicional.
     */
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/**
         * Encabezado de la sección.
         *
         * - Define jerarquía semántica (h2)
         * - Texto editable sin impacto estructural
         */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestros Pilares Educativos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los principios que guían nuestra propuesta educativa y dan sentido a
            la experiencia formativa en Kairos Institute.
          </p>
        </header>

        {/**
         * Grid de pilares.
         *
         * - Responsive por breakpoints:
         *   - 1 columna en mobile
         *   - 2 columnas en tablet
         *   - 4 columnas en desktop
         *
         * - Cada ítem se renderiza a través del componente Card
         * - La prop `hover` activa efectos visuales controlados
         */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS_DATA.map((pillar) => (
            <Card
              key={pillar.id}
              title={pillar.title}
              description={pillar.description}
              image={pillar.image}
              hover
            />
          ))}
        </div>
      </div>
    </section>
  );
}
