// src/components/ui/Card.jsx

/**
 * Card
 * ----
 * Componente de tarjeta reutilizable.
 *
 * Puede mostrar:
 * - Imagen superior
 * - Título
 * - Descripción
 * - Contenido adicional (children)
 *
 * Props:
 * - image: string (URL de la imagen)
 * - title: string
 * - description: string
 * - hover: boolean (activa efecto hover)
 * - className: clases adicionales opcionales
 * - children: contenido extra opcional (botones, links, etc.)
 */

export default function Card({
  image,
  title,
  description,
  hover = false,
  className = "",
  children,
}) {
  /**
   * Estilos base de la tarjeta
   */
  const baseStyles =
    "bg-white rounded-lg overflow-hidden border border-gray-200";

  /**
   * Estilos opcionales al pasar el mouse
   */
  const hoverStyles = hover
    ? "transition transform hover:-translate-y-1 hover:shadow-lg"
    : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {/* Imagen superior (opcional) */}
      {image && (
        <img
          src={image}
          alt={title}
          // TODO: Ajustar alt si la imagen no representa el título
          className="w-full h-48 object-cover"
        />
      )}

      {/* Contenido principal */}
      <div className="p-5">
        {/* Título (opcional) */}
        {title && (
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        )}

        {/* Descripción (opcional) */}
        {description && (
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        )}

        {/* Contenido adicional */}
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
}
