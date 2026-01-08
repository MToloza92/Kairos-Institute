// src/components/common/SocialLinks.jsx

/**
 * SocialLinks
 * ------------
 * Componente reutilizable para mostrar enlaces a redes sociales.
 * Puede usarse en Header, Footer u otras secciones.
 *
 * Props:
 * - direction: 'horizontal' | 'vertical'
 *   Define la orientación de los íconos.
 *
 * - size: 'small' | 'medium' | 'large'
 *   Define el tamaño visual de los íconos.
 *
 * - className: string (opcional)
 *   Permite agregar clases extra desde el componente padre.
 */

import { FaInstagram, FaEnvelope, FaFacebookSquare } from "react-icons/fa";

export default function SocialLinks({
  direction = "horizontal",
  size = "small",
  className = "",
}) {
  /**
   * Clases de dirección:
   * - horizontal → íconos en fila
   * - vertical → íconos en columna
   */
  const directionClass = direction === "vertical" ? "flex-col" : "flex-row";

  /**
   * Tamaños de íconos según prop "size"
   */
  const sizeClass = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  }[size];

  return (
    <div className={`flex ${directionClass} gap-3 ${className}`}>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/kairos_institute/"
        // TODO: Reemplazar con el Instagram oficial de Kairos Institute
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`text-gray-700 hover:text-black transition ${sizeClass}`}
      >
        <FaInstagram />
      </a>

      {/* facebook */}
      <a
        href="https://www.facebook.com/ExperienciaEducativa1/"
        // TODO: Reemplazar con el Facebook oficial de Kairos Institute
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={`text-gray-700 hover:text-black transition ${sizeClass}`}
      >
        <FaFacebookSquare />
      </a>

      {/* Email */}
      <a
        href="mailto:contacto@kairos.cl"
        // TODO: Cambiar por el correo oficial del colegio
        aria-label="Email"
        className={`text-gray-700 hover:text-black transition ${sizeClass}`}
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
