/**
 * Navigation
 * ----------
 * Componente de navegación principal del sitio.
 *
 * Responsabilidad:
 * - Mostrar enlaces principales del sitio
 * - Manejar submenú "Centro educacional"
 * - Adaptarse a móvil (menú hamburguesa)
 *
 * Este componente:
 * - NO renderiza páginas
 * - NO contiene textos largos
 * - NO maneja datos externos
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
  /**
   * Estado para menú móvil
   * true  -> menú abierto
   * false -> menú cerrado
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Estado para submenú "Nuestro Centro Educacional"
   * Se usa tanto en desktop como en móvil
   */
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  /**
   * Cierra el submenú cuando el mouse sale del área (solo desktop)
   */
  const handleSubmenuMouseLeave = () => {
    setIsSubmenuOpen(false);
  };

  /**
   * Abre el submenú cuando el mouse entra (solo desktop)
   */
  const handleSubmenuMouseEnter = () => {
    setIsSubmenuOpen(true);
  };

  /**
   * Cierra el menú móvil cuando se hace clic en un enlace
   */
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsSubmenuOpen(false);
  };

  /**
   * Cierra ambos menús cuando se hace clic fuera
   */
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsSubmenuOpen(false);
  };

  return (
    <nav className="w-full bg-gray-900 border-b border-gray-200 flex justify-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Barra superior del menú */}
        <div className="flex items-center  h-14 w-full">
          {/* Logo / Home */}
          <div className="flex items-center gap-4IL">
            {/* Botón Home */}
            <Link
              to="/"
              className="flex items-center  justify-center w-10 h-10 rounded-md text-white hover:bg-gray-800 transition"
              aria-label="Ir al inicio"
              title="Inicio"
              onClick={closeMenus}
            >
              <HomeIcon className="w-5 h-5" />
            </Link>

            {/* Opcional: logo pequeño o nombre del colegio */}
            {/* <span className="font-semibold text-white">Kairos</span> */}
          </div>

          {/* Botón hamburguesa (solo visible en móvil) */}
          <button
            className="md:hidden text-white hover:text-gray-400 transition ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          {/* Menú Desktop */}
          <ul className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium text-white">
            {/* Ítem con submenú - CORREGIDO */}
            <li
              className="relative"
              onMouseEnter={handleSubmenuMouseEnter}
              onMouseLeave={handleSubmenuMouseLeave}
            >
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="hover:text-gray-400 transition py-2"
              >
                CENTRO EDUCACIONAL
              </button>

              {/* Submenú - CORREGIDO */}
              {isSubmenuOpen && (
                <ul className="absolute top-full left-0 mt-0 bg-gray-800 border border-gray-700 shadow-lg min-w-56 z-50">
                  <li>
                    <Link
                      to="/Sobre-Nosotros"
                      className="block px-4 py-3 hover:bg-gray-700 transition text-gray-100"
                      onClick={closeMenus}
                    >
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Proyecto-Educativo"
                      className="block px-4 py-3 hover:bg-gray-700 transition text-gray-100"
                      onClick={closeMenus}
                    >
                      Proyecto Educativo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Talleres"
                      className="block px-4 py-3 hover:bg-gray-700 transition text-gray-100"
                      onClick={closeMenus}
                    >
                      Talleres
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Ítems simples */}
            <li>
              <Link
                to="/Galeria"
                className="hover:text-gray-400 transition py-2"
                onClick={closeMenus}
              >
                Galería
              </Link>
            </li>

            <li>
              <Link
                to="/Admision"
                className="hover:text-gray-400 transition py-2"
                onClick={closeMenus}
              >
                Admisión
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="hover:text-gray-400 transition py-2"
                onClick={closeMenus}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú Móvil - CORREGIDO */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-2 py-4 text-sm text-gray-200">
            {/* Submenú móvil */}
            <li>
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="w-full text-left font-medium hover:text-gray-100 transition py-2"
              >
                NUESTRO CENTRO EDUCACIONAL
              </button>

              {isSubmenuOpen && (
                <ul className="pl-4 mt-2 flex flex-col gap-1">
                  <li>
                    <Link
                      to="/Sobre-Nosotros"
                      className="hover:text-gray-100 transition"
                      onClick={handleLinkClick}
                    >
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Proyecto-Educativo"
                      className="hover:text-gray-100 transition"
                      onClick={handleLinkClick}
                    >
                      Proyecto Educativo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Talleres"
                      className="hover:text-gray-100 transition"
                      onClick={handleLinkClick}
                    >
                      Talleres
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/Galeria"
                className="hover:text-gray-100 transition"
                onClick={handleLinkClick}
              >
                Galería
              </Link>
            </li>

            <li>
              <Link
                to="/Admision"
                className="hover:text-gray-100 transition"
                onClick={handleLinkClick}
              >
                Admisión
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="hover:text-gray-100 transition"
                onClick={handleLinkClick}
              >
                Contacto
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
