/**
 * Header
 * ------
 * Componente de encabezado superior del sitio.
 *
 * Responsabilidad:
 * - Mostrar el logo institucional
 * - Mostrar un teléfono de contacto rápido
 * - Mostrar accesos a redes sociales
 *
 * Este componente:
 * - NO maneja navegación (eso va en Navigation.jsx)
 * - NO maneja rutas
 * - NO contiene lógica de negocio
 */

import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    /**
     * Etiqueta <header>
     * Representa la franja superior del sitio.
     * Ocupa el ancho completo de la pantalla.
     */
    <header className="w-full bg-white border-b border-gray-200">
      {/* Contenedor central para limitar ancho del contenido */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* 
          Logo institucional
          ------------------
          - Imagen del colegio
          - Generalmente debería ser clickeable hacia "/"
          - Por ahora solo se muestra como imagen
        */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/public/images/kairos-nombre-logo.PNG"
            // TODO: Verificar ruta y nombre final del logo
            alt="Kairos Institute"
            // TODO: Ajustar alt según nombre oficial del colegio
            className="h-10 w-auto"
          />
        </Link>

        {/* 
          Bloque de contacto y redes sociales
          ----------------------------------
          - Teléfono con enlace "tel:"
          - Íconos sociales mediante componente SocialLinks
        */}
        <div className="flex items-center gap-4">
          {/* Teléfono de contacto */}
          <a
            href="tel:+56 9 9166 0923"
            // TODO: Cambiar por teléfono oficial de Kairos Institute
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            +56 9 9166 0923
            {/* TODO: Cambiar texto visible si el teléfono es distinto */}
          </a>

          {/* Redes sociales */}
          <SocialLinks
            direction="horizontal"
            // Íconos alineados en fila
            size="small"
            // Tamaño pequeño para header
          />
        </div>
      </div>
    </header>
  );
}
