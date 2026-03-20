// ======================================================
// PÁGINA: ADMISIÓN
// ------------------------------------------------------
// Rol de esta página:
// - Informar el proceso oficial de admisión 2026
// - Entregar fechas, requisitos y documentos necesarios
// - Servir como referencia institucional clara y formal
//
// Esta página:
// - NO es promocional
// - NO contiene formularios
// - Es informativa y documental
// ======================================================

// Componentes estructurales comunes
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";

export default function Admision() {
  return (
    <>
      <Header />

      {/* ==================================================
          HERO DE PÁGINA
          --------------------------------------------------
          Función:
          - Portada visual de la sección Admisión
          - Espacio equivalente al carrusel del Home
          - Aquí irá una imagen estática de fondo más adelante
          - NO debe heredar estilos del <main>
         ================================================== */}
      <section className="w-full h-64 bg-gray-200 flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-800">Admisión</h1>
      </section>

      <Navigation />

      {/* ==================================================
          CONTENIDO PRINCIPAL
         ================================================== */}
      <main className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* TÍTULO INSTITUCIONAL */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-400"></span>
            Matricula 2026
          </h2>
        </section>

        {/* MATRÍCULA 2026 */}
        <section className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#4f8d3a] rounded-xl p-8 space-y-4 leading-relaxed text-gray-900">
            <p>PROCESO DE ADMISIÓN</p>

            <p>
              El proceso de Admisión Kairos Institute considera las vacantes
              disponibles a la fecha para el año escolar 2026.
            </p>
          </div>
        </section>

        {/* FECHAS */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
            <span className="w-6 h-px bg-gray-300"></span>
            Fechas
          </h3>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            {/* Línea vertical */}
            <div className="w-1 bg-gray-300 rounded-full"></div>

            <div className="space-y-3 text-gray-900">
              <p>
                <strong>Inscripción:</strong> desde el 7 de julio al 31 de
                agosto.
              </p>
              <p>
                <strong>Resultados:</strong> vía mail a cada apoderado.
              </p>
              <p>
                <strong>Matrícula:</strong> se informará a cada apoderado.
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENTOS */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
            <span className="w-6 h-px bg-gray-300"></span>
            Documentos para postulación
          </h3>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>

            <div className="space-y-4 text-gray-900">
              <p>
                Entregar en secretaría o enviar al correo electrónico:
                <strong> finanzas@kairosinstitute.cl</strong>
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Certificado de notas del último año aprobado.</li>
                <li>
                  Informe de notas parciales del año que está cursando el
                  postulante.
                </li>
                <li>Informe de personalidad y/o conducta.</li>
                <li>
                  Otros antecedentes escolares que considere importante de
                  entregar (certificados de necesidades educativas).
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
