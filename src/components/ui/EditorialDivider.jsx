/**
 * COMPONENT: EditorialDivider
 * --------------------------------------------------
 * Rol:
 * Componente base para secciones editoriales
 * utilizadas como separadores semánticos
 * entre bloques de contenido funcional.
 *
 * Uso:
 * - No se renderiza directamente en páginas
 * - Es consumido por Inspiration e InspirationSecondary
 *
 * Responsabilidad:
 * - Proveer estructura visual consistente
 * - Controlar tipografía, espaciado y alineación
 *
 * Características técnicas:
 * - Presentacional
 * - Controlado por props
 * - Sin estado ni efectos
 */

export default function EditorialDivider({
  children,
  variant = "light", // 'light' | 'dark'
}) {
  const backgroundClass =
    variant === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";

  return (
    <section className={`w-full py-24 ${backgroundClass}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">{children}</div>
    </section>
  );
}
