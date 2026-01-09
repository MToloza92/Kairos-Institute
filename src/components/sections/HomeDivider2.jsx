import EditorialDivider from "../ui/EditorialDivider";

/**
 * HomeDivider2
 * --------------------------------------------------
 * Sección editorial de transición utilizada
 * como separador visual y semántico entre
 * bloques funcionales de la Home.
 *
 * - Usa EditorialDivider como base visual
 * - Contenido breve (frase o cita)
 * - No introduce secciones, prepara el ritmo
 *   para la siguiente
 */

export default function HomeDivider2({
  text = "Educar es crear espacios donde cada niño pueda desarrollarse con sentido.",
}) {
  return (
    <EditorialDivider variant="dark">
      <p className="text-2xl md:text-3xl font-light leading-relaxed">{text}</p>
    </EditorialDivider>
  );
}
