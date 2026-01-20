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
import { HomeIcon } from "@heroicons/react/24/outline";

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
    <nav className="w-full bg-gray-900 border-b border-gray-200 flex justify-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Barra superior del menú */}
        <div className="flex items-center justify-between h-14">
          {/* Logo / Home */}
          <div className="flex items-center gap-4">
            {/* Botón Home */}
            {/* Home */}
            <Link
              to="/"
              className="flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-gray-800 transition"
              aria-label="Ir al inicio"
              title="Inicio"
            >
              <HomeIcon className="w-5 h-5" />
            </Link>

            {/* Opcional: logo pequeño o nombre del colegio */}
            {/* <span className="font-semibold text-white">Kairos</span> */}
          </div>

          {/* Botón hamburguesa (solo visible en móvil) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          {/* Menú Desktop */}
          <ul className="hidden md:flex  items-center gap-6 text-sm font-medium text-white">
            {/* Ítem con submenú */}
            <li className="relative">
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="hover:text-gray-400"
              >
                NUESTRO COLEGIO
              </button>

              {/* Submenú */}
              {isSubmenuOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-gray-900 border border-gray-900 shadow-md min-w-50">
                  <li>
                    <Link
                      to="/Sobre-Nosotros"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Proyecto-Educativo"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      Proyecto Educativo
                    </Link>
                    <Link
                      to="/Talleres"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      Talleres
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Ítems simples */}

            <li>
              <Link to="/Galeria" className="hover:text-gray-400">
                Galería
              </Link>
            </li>

            <li>
              <Link to="/Admision" className="hover:text-gray-400">
                Admisión
              </Link>
            </li>

            <li>
              <Link to="/Contact" className="hover:text-gray-400">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-2 py-4 text-sm text-gray-200">
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
                    <Link to="/Sobre-Nosotros">Sobre Nosotros</Link>
                  </li>
                  <li>
                    <Link to="/Proyecto-Educativo">Proyecto Educativo</Link>
                  </li>
                  <li>
                    <Link to="/Talleres">Talleres</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/Galeria">Galería</Link>
            </li>

            <li>
              <Link to="/Admision">Admisión</Link>
            </li>

            <li>
              <Link to="/Contact">Contacto</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
