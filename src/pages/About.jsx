import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import Pillars from "../components/sections/Pillars";

/**
 * About
 * --------------------------------------------------
 * Página institucional "Sobre Nosotros".
 *
 * Función:
 * - Presentar identidad
 * - Explicar visión educativa
 */
export default function About() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h1>

          <p className="text-gray-700 max-w-3xl mx-auto">
            Kairos Institute nace con la convicción de que la educación debe
            respetar los ritmos, talentos y procesos de cada estudiante,
            promoviendo un aprendizaje significativo y humano.
          </p>
        </section>
      </main>
      <Navigation />
      <Pillars />

      <section className="text-gray-700 max-w-4xl mx-auto">
        <p>
          Nuestro proyecto educativo integra comunidad, naturaleza y pensamiento
          crítico, formando personas conscientes, autónomas y comprometidas con
          su entorno.
        </p>
      </section>

      <Footer />
    </>
  );
}
