import EditorialDivider from "../ui/EditorialDivider";

/**
 * COMPONENT: HomeDivider2
 * --------------------------------------------------
 * Sección editorial secundaria utilizada como
 * transición hacia secciones funcionales.
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
