import EditorialDivider from "../ui/EditorialDivider";

/**
 * COMPONENT: HomeDivider1
 * --------------------------------------------------
 * Sección editorial secundaria utilizada como
 * transición hacia secciones funcionales.
 */
export default function HomeDivider1() {
  return (
    <EditorialDivider variant="dark">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        Educar es acompañar cada momento con sentido
      </h2>
      <p className="text-lg leading-relaxed">
        Creemos en una educación que respeta los tiempos, valora la experiencia
        y forma personas conscientes, comprometidas y capaces de transformar su
        entorno.
      </p>
    </EditorialDivider>
  );
}
