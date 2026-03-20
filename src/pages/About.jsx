import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import Pillars from "../components/sections/Pillars";

/**
 * About
 * --------------------------------------------------
 * Página institucional "Sobre Nosotros".
 *
 * Estructura:
 * - Header: identidad global
 * - Page Hero: título de la página (H1)
 * - Navigation: navegación principal
 * - Main: contenido editorial
 */
export default function About() {
  return (
    <>
      <Header />

      {/* --------------------------------------------------
          PAGE HERO
          --------------------------------------------------
          Este bloque reemplaza al carrusel del home.
          En el futuro puede llevar imagen de fondo.
      */}
      <section className="w-full bg-gray-100 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Sobre Nosotros</h1>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Conoce la identidad, misión y visión que dan sentido al proyecto
          educativo de Kairos Institute.
        </p>
      </section>

      <Navigation />

      {/* --------------------------------------------------
          CONTENIDO PRINCIPAL
          -------------------------------------------------- */}
      <main className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* QUIÉNES SOMOS */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-400"></span>
            ¿Quiénes somos?
          </h2>

          <div className="bg-[#4f8d3a] rounded-xl p-8 space-y-4 leading-relaxed text-gray-900">
            <p>
              Para el Centro Educacional Kairos Institute la educación no solo
              consiste en la entrega de conocimientos desde un emisor (docente)
              hacia un receptor (estudiante), sino que concibe la educación como
              un proceso de acompañamiento mutuo donde el docente es un
              facilitador del aprendizaje.
            </p>

            <p>
              Atendemos las necesidades y capacidades de cada estudiante,
              despertando en ellos el interés por descubrir y las ganas de ser
              agentes de cambio en su entorno.
            </p>

            <p>
              Nuestro centro educacional es de estilo homeschooling. No estamos
              reconocidos por el Estado, pero nuestro currículum se rige por los
              objetivos del Ministerio de Educación de Chile y por los derechos
              garantizados en la Constitución.
            </p>
          </div>
        </section>

        {/* MISIÓN */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-400"></span>
            Misión
          </h2>

          <div className="border-l-4 border-gray-300 pl-6 italic text-gray-900">
            Educar con propósito eterno, acompañar con amor verdadero.
          </div>

          <p className="bg-[#4f8d3a] rounded-xl p-8 space-y-4 leading-relaxed text-gray-900">
            En Kairos creemos que educar no es solo enseñar, es sembrar en
            tierra fértil. Caminamos junto a cada estudiante y su familia,
            respetando procesos, talentos y ritmos.
          </p>
        </section>

        {/* VISIÓN */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-400"></span>
            Visión
          </h2>

          <div className="bg-[#4f8d3a] rounded-xl p-8 space-y-4 leading-relaxed text-gray-900">
            <p>Crear un lugar donde educar sea sanar, fortalecer y liberar.</p>

            <p>
              Nos proyectamos como un referente nacional en educación
              alternativa cristiana, formando personas que no solo sepan, sino
              que sepan quiénes son.
            </p>
          </div>
        </section>

        {/* PILARES */}
        <Pillars />

        {/* CIERRE */}
        <section className="max-w-3xl mx-auto text-center text-gray-900">
          <p className="text-lg">
            Nuestro proyecto educativo integra comunidad, naturaleza y
            pensamiento crítico para formar personas conscientes y
            comprometidas.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
