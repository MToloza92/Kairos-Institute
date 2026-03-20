import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";

/**
 * Talleres
 * --------------------------------------------------
 * Página institucional dedicada a los talleres Kairos.
 *
 * Objetivo:
 * - Explicar el rol pedagógico de los talleres
 * - Mostrar cada taller como experiencia formativa
 * - Reforzar el enfoque cuerpo – mente – propósito
 */

export default function Talleres() {
  return (
    <>
      <Header />

      {/* HERO / ENCABEZADO */}
      <section className="w-full bg-gray-800 text-white py-28 text-center">
        <h1 className="text-4xl font-bold mb-6">Talleres</h1>
        <p className="max-w-4xl mx-auto text-lg text-gray-200">
          Formamos desde la experiencia: cuerpo, mente y propósito.
        </p>
      </section>

      <Navigation />

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* INTRODUCCIÓN */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            NUESTRA EDUCACIÓN
          </h2>

          <div className="bg-[#4f8d3a] rounded-xl p-8 space-y-4 leading-relaxed text-gray-900">
            <h3 className="font-semibold text-lg">Talleres Kairos</h3>

            <p>
              En Kairos, los talleres no son actividades extras: son parte
              fundamental de nuestro proyecto educativo. Cada uno fue diseñado
              para estimular distintas áreas del cerebro, fortalecer habilidades
              clave para el aprendizaje escolar, el desarrollo emocional y la
              vida futura.
            </p>

            <p>
              Aquí se aprende haciendo, sintiendo, equivocándose, descubriendo.
              Porque cuando los niños se mueven, crean, exploran y se expresan,
              también desarrollan pensamiento crítico, funciones ejecutivas,
              resiliencia y conexión social.
            </p>
          </div>
        </section>

        {/* IMPORTANCIA */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-400"></span>
            ¿Por qué los talleres son tan importantes?
          </h2>

          <div className="bg-[#4f8d3a] rounded-xl p-8 space-y-4 text-gray-900">
            <p>
              👉 Porque el cerebro aprende mejor en movimiento, con emoción y en
              contextos reales.
            </p>
            <p>
              👉 Porque la experiencia fortalece las funciones cognitivas,
              sociales y afectivas necesarias para rendir en el aula… y en la
              vida.
            </p>
            <p>
              👉 Porque no estamos formando sólo estudiantes, sino personas
              completas.
            </p>
          </div>
        </section>

        {/* TALLERES */}
        <section className="space-y-12">
          {/* Taller */}
          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">Taller de Kayak</h3>
              <p className="italic text-sm">
                Autonomía – Coordinación – Regulación emocional
              </p>
              <p>
                El contacto con el agua potencia la concentración, la conexión
                cuerpo-mente y la regulación emocional. Este taller fortalece el
                sistema vestibular (clave para el equilibrio, la atención y la
                lectura), desarrolla confianza en sí mismos y habilidades
                sociales esenciales como la colaboración y el liderazgo.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">
                Taller de Primeros Auxilios
              </h3>
              <p className="italic text-sm">
                Toma de decisiones – Pensamiento lógico – Empatía
              </p>
              <p>
                Aprender a reaccionar ante emergencias estimula el pensamiento
                rápido y estructurado, activa la corteza prefrontal (responsable
                del juicio y la autorregulación) y fomenta la empatía activa.
              </p>
              <p>
                A nivel académico, promueve el pensamiento causa-efecto y la
                aplicación práctica del conocimiento.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">Taller de Montaña</h3>
              <p className="italic text-sm">
                Resiliencia – Perseverancia – Orientación espacial
              </p>
              <p>
                El desafío físico y natural fortalece la corteza motora y activa
                el hipocampo, relacionado con la memoria y el aprendizaje.
              </p>
              <p>
                Subir una montaña enseña a no rendirse, a planificar, a tolerar
                la frustración y a valorar el esfuerzo como camino.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">Taller de Arte</h3>
              <p className="italic text-sm">
                Creatividad – Conexión emocional – Integración sensorial
              </p>
              <p>
                Pintar, modelar y crear estimula los hemisferios cerebrales,
                conecta con el sistema límbico (emociones) y mejora la expresión
                verbal y no verbal.
              </p>
              <p>
                Favorece la atención, la autorregulación y la flexibilidad
                cognitiva, habilidades esenciales para aprender y convivir.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">Taller de Música</h3>
              <p className="italic text-sm">
                Lenguaje – Memoria auditiva – Coordinación interhemisférica
              </p>
              <p>
                La música activa simultáneamente ambos hemisferios cerebrales.
                Mejora la memoria, la comprensión lectora, la coordinación fina
                y la concentración.
              </p>
              <p>
                Además, eleva la autoestima y estimula las conexiones neuronales
                en áreas asociadas al lenguaje y las matemáticas.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">Taller de Folclor</h3>
              <p className="italic text-sm">
                Identidad – Ritmo – Cohesión social
              </p>
              <p>
                Bailar activa zonas del cerebro ligadas al lenguaje, la memoria
                y el control motor. Aprender folclor promueve la conciencia
                cultural, la expresión corporal, el trabajo en grupo y la
                identidad.
              </p>
              <p>
                Aporta al desarrollo del respeto por la diversidad y la
                pertenencia.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">Taller de Apicultura</h3>
              <p className="italic text-sm">
                Cuidado – Ciencia en acción – Atención sostenida
              </p>
              <p>
                Observar y cuidar abejas activa la atención focalizada, el
                pensamiento ecológico y la curiosidad científica.
              </p>
              <p>
                Estimula el desarrollo de la paciencia, la observación profunda
                y la conciencia de procesos.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">Taller Audiovisual</h3>
              <p className="italic text-sm">
                Comunicación – Pensamiento crítico – Tecnología
              </p>
              <p>
                Este taller mejora la planificación, la narrativa, la atención
                al detalle y la capacidad de comunicar ideas.
              </p>
              <p>
                Fortalece la lectura de imágenes, el criterio y la
                alfabetización digital.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">
                Taller de Educación Física
              </h3>
              <p className="italic text-sm">
                Conexión cuerpo-mente – Autorregulación – Concentración
              </p>
              <p>
                El movimiento físico activa neurotransmisores como dopamina y
                serotonina, mejorando el ánimo y la atención.
              </p>
              <p>
                Además, fortalece las funciones ejecutivas, mejora la autoestima
                corporal y enseña disciplina y autocuidado.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">
                Taller de Huerta Escolar
              </h3>
              <p className="italic text-sm">
                Responsabilidad – Regulación – Ciencias naturales vivas
              </p>
              <p>
                Cultivar una huerta no solo enseña a sembrar: enseña a esperar,
                a cuidar y a valorar los procesos.
              </p>
              <p>
                El contacto con la naturaleza reduce el estrés tóxico, mejora la
                concentración, activa la memoria sensorial y fortalece la
                tolerancia a la frustración.
              </p>
              <p>
                Aprender con la tierra en las manos permite entender ciencias,
                matemáticas y biología desde la experiencia, generando
                aprendizajes reales y duraderos.
              </p>
              <p>
                También despierta el sentido de propósito y pertenencia,
                formando futuros ciudadanos comprometidos con su entorno.
              </p>
            </div>
          </div>

          <div className="bg-[#4f8d3a] rounded-xl p-8 flex gap-6">
            <div className="w-1 bg-gray-300 rounded-full"></div>
            <div className="space-y-3 text-gray-900">
              <h3 className="font-semibold text-lg">
                Taller de Educación Financiera
              </h3>
              <p className="italic text-sm">
                Conciencia – Autonomía – Futuro con propósito
              </p>
              <p>
                Entendemos que la educación financiera no es solo sobre dinero,
                sino sobre decisiones, valores y libertad.
              </p>
              <p>
                Trabajamos con herramientas concretas como presupuestos,
                simulaciones, metas de ahorro, emprendimiento escolar y uso
                responsable del consumo.
              </p>
              <p>
                A nivel cerebral, este taller estimula la función ejecutiva,
                especialmente la toma de decisiones, el pensamiento lógico, la
                planificación y la capacidad de postergar la gratificación.
              </p>
              <p>
                No formamos consumidores, formamos administradores sabios de su
                vida, su futuro y sus talentos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
