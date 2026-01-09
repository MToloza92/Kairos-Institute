import EditorialDivider from "../ui/EditorialDivider";

/**
 * HomeDivider1
 * --------------------------------------------------
 * Sección editorial utilizada en la Home para
 * introducir bloques conceptuales de alto nivel.
 *
 * - Construida sobre EditorialDivider (UI)
 * - Contiene texto institucional extensivo
 * - No maneja lógica ni estado
 * - Su responsabilidad es estructural y semántica
 *
 * Puede replicarse en otras páginas bajo
 * nuevos componentes específicos (ej: AboutDivider).
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
