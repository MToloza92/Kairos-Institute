// ======================================================
// PÁGINA: PROYECTO EDUCATIVO
// ------------------------------------------------------
// Rol de esta página:
// - Explicar los pilares formales y complementarios
//   del proyecto educativo Kairos Institute
// - Informar convenios, certificaciones y apoyos
// - Detallar acompañamientos especiales (deportivos,
//   preuniversitario, etc.)
//
// Arquitectura:
// - Hero va ANTES de Navigation
// - El <main> solo contiene contenido editorial
// ======================================================

// Componentes comunes del layout
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import EditorialDivider from "../components/ui/EditorialDivider";

export default function ProyectoEducativo() {
  return (
    <>
      <Header />

      {/* ==================================================
          HERO DE PÁGINA
          --------------------------------------------------
          Espacio visual equivalente al carrusel del Home.
          Más adelante puede llevar imagen de fondo.
          Queda fuera del <main> para no heredar estilos.
         ================================================== */}
      <section className="w-full h-64 bg-gray-200 flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Proyecto Educativo
        </h1>
      </section>

      <Navigation />

      {/* ==================================================
    CONTENIDO PRINCIPAL – centro educacional
   ================================================== */}
      <main className="relative max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* CONTENIDO REAL */}
        <div className="relative z-10 space-y-20">
          {/* ==================================================
        centro educacional – TÍTULO
       ================================================== */}
          <section className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Centro Educacional
            </h2>
          </section>

          {/* 1. INSCRIPCIÓN MINEDUC – EXÁMENES LIBRES */}
          <section className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
              <span className="w-6 h-px bg-gray-300"></span>
              Inscripción Mineduc – Exámenes libres
            </h3>

            <div className="bg-[#4f8d3a] rounded-xl p-8 space-y-4 text-gray-900">
              <p>
                <a
                  href="https://www.ayudamineduc.cl/ficha/examenes-libres-menores-de-18-anos-11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 hover:text-blue-900 underline"
                >
                  Exámenes libres - menores de 18 años | Ayuda Mineduc
                </a>
              </p>
            </div>
          </section>

          {/* 2. CERTIFICADO DE ESTUDIO MINEDUC */}
          <section className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
              <span className="w-6 h-px bg-gray-300"></span>
              Certificado de Estudio Mineduc
            </h3>

            <div className="bg-[#4f8d3a] rounded-xl p-8 space-y-4 text-gray-900">
              <p>
                <a
                  href="https://certificados.mineduc.cl/mvc/home/index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 hover:text-blue-900 underline"
                >
                  Portal de Certificados en Línea
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* ==================================================
            ESTUDIANTES DEPORTIVOS
           ================================================== */}
      <section className="space-y-6">
        <div className="">
          <EditorialDivider variant="dark">
            <h2 className="text-2xl md:text-3xl font-light leading-relaxed">
              En Kairos Institute entendemos que cada historia es unica, y por
              eso creamos espacios de aprendizaje que se adaptan a los ritmos y
              desafios de nuestros estudiantes, especialmente aquellos que han
              elegido el camino de la disciplina, el esfuerzo y la excelencia
              deportiva
            </h2>
          </EditorialDivider>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="max-w-5xl mx-auto px-6 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Estudiantes Deportivos
              </h2>
              <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
                {/* Línea decorativa */}
                <div className="w-1 bg-gray-300 rounded-full"></div>

                {/* Contenido */}
                <div className="space-y-4 text-gray-900 leading-relaxed">
                  <p className="font-semibold">¿A quiénes acompañamos?</p>

                  <p>A estudiantes que:</p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Pertenecen a clubes deportivos o federaciones nacionales o
                      regionales
                    </li>
                    <li>
                      Participan activamente en torneos, competencias y
                      entrenamientos exigentes
                    </li>
                    <li>
                      Requieren flexibilidad educativa para compatibilizar
                      estudio y deporte de alto nivel
                    </li>
                  </ul>

                  <p className="font-semibold">¿Cómo lo hacemos?</p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Horarios adaptables: Pueden asistir a clases en sus
                      tiempos disponibles y retirarse antes del término de la
                      jornada si sus entrenamientos lo requieren.
                    </li>
                    <li>
                      Evaluaciones flexibles: Les ofrecemos la posibilidad de
                      rendir pruebas en momentos acordados, según su
                      disponibilidad.
                    </li>
                    <li>
                      Acompañamiento pedagógico a distancia: Cuando no pueden
                      asistir durante varios días, les enviamos el material de
                      estudio por plataforma digital, asegurando continuidad en
                      su aprendizaje.
                    </li>
                    <li>
                      Comunicación constante con familia y entrenadores, para
                      alinear objetivos y garantizar un desarrollo integral.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
            PREUNIVERSITARIO
           ================================================== */}
      <section className="space-y-6">
        <EditorialDivider variant="dark">
          <h2 className="text-2xl md:text-3xl font-light leading-relaxed">
            Nuestro preuniversitario nace para acompañrte en uno de los momentos
            mas decisivos de tu vida: el ingreso a la educación superior.
          </h2>
        </EditorialDivider>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Preuniversitario
            </h2>

            <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
              <div className="w-1 bg-gray-300 rounded-full"></div>

              <div className="space-y-4 text-gray-900 leading-relaxed">
                <p>
                  Nuestro enfoce humano flexible altamente personalizado,
                  preparamos a jovenes que desean rendir la prueba PAES,
                  permitiendoles alcanzar su metas academicas, sin descuidar su
                  bienestar emocional y talentos individuales.
                </p>

                <p className="font-semibold">¿Que nos diferencia?</p>

                <ul className="list-disc list-inside space-y-2">
                  <li>Acompañamiento personalizado</li>
                  <li>Ambiente respetuoso</li>
                  <li>Flexibilidad horaria</li>
                  <li>Material actualizado</li>
                  <li>Evaluaciones clase a clase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
    INGLÉS – TALLERES KAIROS
   ================================================== */}
      <section className="space-y-6">
        <div>
          <EditorialDivider variant="dark">
            <h2 className="text-2xl md:text-3xl font-light leading-relaxed">
              Aprender inglés no solo es memorizar palabras, es vivir el idioma
              en acción.
            </h2>
          </EditorialDivider>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="max-w-5xl mx-auto px-6 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Inglés – English
              </h2>

              <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
                {/* Línea decorativa */}
                <div className="w-1 bg-gray-300 rounded-full"></div>

                {/* Contenido */}
                <div className="space-y-4 text-gray-900 leading-relaxed">
                  <p>
                    Creemos que el aprendizaje de una lengua debe estar
                    conectado a la emoción, el cuerpo y la experiencia. Por eso,
                    integramos el inglés a talleres al aire libre que estimulan
                    el desarrollo cognitivo, físico y emocional, mientras
                    incorporamos vocabulario y estructuras del idioma de forma
                    natural y significativa.
                  </p>

                  <p className="font-semibold">
                    ✨ ¿Por qué fomentar el inglés así?
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Porque aprender haciendo es más efectivo que memorizar.
                    </li>
                    <li>
                      Porque cuando el idioma se vincula a la emoción y al
                      cuerpo, el cerebro lo retiene mejor.
                    </li>
                    <li>
                      Porque el inglés deja de ser una asignatura… y se
                      transforma en una herramienta para vivir.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
