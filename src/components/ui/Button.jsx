/**
 * Button
 * ------
 * Componente de botón reutilizable para todo el sitio.
 *
 * Props:
 * - children: contenido del botón (texto o ícono)
 * - variant: 'primary' | 'secondary' | 'outline'
 * - size: 'sm' | 'md' | 'lg'
 * - disabled: boolean
 * - onClick: función a ejecutar al hacer click
 * - type: 'button' | 'submit' | 'reset'
 * - className: clases adicionales opcionales
 *
 * Este botón está pensado para ser usado en:
 * - Formularios
 * - Secciones informativas
 * - Cards
 */

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) {
  /**
   * Estilos base comunes a todos los botones
   */
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  /**
   * Estilos según variante visual
   * TODO: Ajustar colores según identidad visual de Kairos Institute
   */
  const variantStyles = {
    primary: "bg-green-700 text-white hover:bg-green-800 focus:ring-green-700",
    secondary: "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-700",
    outline:
      "border border-gray-700 text-gray-700 hover:bg-gray-100 focus:ring-gray-700",
  };

  /**
   * Estilos según tamaño
   */
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
