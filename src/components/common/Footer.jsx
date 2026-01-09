/**
 * Footer
 * ------
 * Pie de página institucional de Kairos Institute.
 *
 * Muestra:
 * - Logo
 * - Descripción breve
 * - Contacto y dirección
 * - Enlaces a redes sociales actuales
 * - Enlaces a documentos futuros (opcionales)
 */

import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Identidad institucional */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-3">About Us</h3>
          <div className="flex gap-8">
            <img
              src="/public/images/kairos logo fondo.png"
              alt="Logo Kairos Institute"
              className="h-30 w-auto mb-4"
            />

            <p className="text-sm text-gray-600">
              Institución educativa con enfoque de aprendizaje activo que
              promueve el desarrollo integral y la relación significativa entre
              estudiantes y docentes.
            </p>
          </div>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Contacto</h3>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              📍 Camino a Caburgua Km. 8 - Sector El Turbio - Parcela 22, Pucón
              {/* Dirección extraída del sitio oficial de Kairos Institute */}
            </li>
            <li>📍 Camino a Pto. Varas Km. 2, Frutillar</li>
            <li>
              ☎️ +56 9 9166 0923
              {/* Número de contacto según sitio oficial */}
            </li>
            <li>
              ✉️ contacto@kairosinstitute.cl
              {/* TODO: Cambiar si Kairos Institute tiene correo oficial distinto */}
            </li>
          </ul>
        </div>

        {/* Columna 3: Enlaces a documentos y redes */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Recursos</h3>

          <ul className="text-sm text-gray-600 space-y-2 mb-4">
            {/* Opcionales: enlaces a PDFs del proyecto educativo, admisión, etc. */}
            <li>
              <a
                href="/docs/proyecto-educativo.pdf"
                className="hover:underline"
              >
                Proyecto Educativo (PDF)
              </a>
            </li>
            <li>
              <a href="/docs/admision.pdf" className="hover:underline">
                Información de Admisión
              </a>
            </li>
          </ul>

          {/* Redes sociales oficiales */}
          <SocialLinks direction="horizontal" size="medium" />
          {/* SocialLinks debe actualizarlos internamente si es necesario */}
        </div>
      </div>

      {/* Línea inferior legal */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Kairos Institute - Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
