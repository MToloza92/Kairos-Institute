/**
 * Navigation
 * ----------
 * Componente de navegación principal del sitio.
 *
 * Responsabilidad:
 * - Mostrar enlaces principales del sitio
 * - Manejar submenú "Nuestro Colegio"
 * - Adaptarse a móvil (menú hamburguesa)
 *
 * Este componente:
 * - NO renderiza páginas
 * - NO contiene textos largos
 * - NO maneja datos externos
 */

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  /**
   * Estado para menú móvil
   * true  -> menú abierto
   * false -> menú cerrado
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Estado para submenú "Nuestro Colegio"
   * Se usa tanto en desktop como en móvil
   */
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Barra superior del menú */}
        <div className="flex items-center justify-between h-14">
          {/* Logo o texto opcional (en desktop suele repetirse logo aquí) */}
          <div className="font-semibold text-gray-800">
            {/* TODO: Opcional: logo pequeño o nombre del colegio */}
          </div>

          {/* Botón hamburguesa (solo visible en móvil) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          {/* Menú Desktop */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* Ítem con submenú */}
            <li className="relative">
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="hover:text-black"
              >
                NUESTRO COLEGIO
              </button>

              {/* Submenú */}
              {isSubmenuOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-md min-w-50">
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Proyecto Educativo
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Ítems simples */}
            <li>
              <Link to="/gallery" className="hover:text-black">
                Galería
              </Link>
            </li>

            <li>
              <Link to="/admision" className="hover:text-black">
                Admisión
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-black">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-2 py-4 text-sm text-gray-700">
            {/* Submenú móvil */}
            <li>
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="w-full text-left font-medium"
              >
                NUESTRO COLEGIO
              </button>

              {isSubmenuOpen && (
                <ul className="pl-4 mt-2 flex flex-col gap-1">
                  <li>
                    <Link to="/about">Sobre Nosotros</Link>
                  </li>
                  <li>
                    <Link to="/projects">Proyecto Educativo</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/gallery">Galería</Link>
            </li>

            <li>
              <Link to="/admision">Admisión</Link>
            </li>

            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
