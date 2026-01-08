/**
 * Hero
 * ----
 * Sección principal de la página de inicio.
 *
 * Contiene:
 * - Título principal (mensaje clave)
 * - Descripción breve
 * - Botón de llamada a la acción (CTA)
 * - Imagen de apoyo
 *
 * Este componente es estático y reutilizable.
 */

import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="w-full bg-gray-50">
      {/* Contenedor central con ancho máximo */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Bloque de texto */}
        <div>
          {/* Título principal */}
          {/* TODO: Ajustar el mensaje según la propuesta institucional */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Educación con sentido, para un futuro consciente
          </h1>

          {/* Descripción */}
          {/* TODO: Cambiar este texto si se define un eslogan oficial */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            En Kairos Institute promovemos una educación integral que conecta el
            aprendizaje académico con la experiencia, la naturaleza y el
            desarrollo humano.
          </p>

          {/* Llamado a la acción */}
          {/* TODO: Definir enlace final cuando exista sección o página destino */}
          <Button variant="primary" size="md">
            Conoce nuestro proyecto educativo
          </Button>
        </div>

        {/* Imagen del Hero */}
        <div className="flex justify-center">
          <img
            src="/images/hero-kairos.jpg"
            alt="Estudiantes aprendiendo en Kairos Institute"
            className="w-full max-w-md rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
