/**
 * Contact Page
 * --------------------------------------------------
 * Página dedicada de contacto institucional.
 *
 * Rol dentro del proyecto:
 * - Punto de contacto principal accesible desde el Navigation
 * - Versión extendida del contacto (a diferencia del ContactSection del Home)
 * - Espacio preparado para crecer (admisión, formularios largos, documentos)
 *
 * Diferencia con ContactSection (Home):
 * - Esta página es un destino explícito
 * - El usuario llega con mayor intención
 * - Puede contener más información y elementos
 */

import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import ContactForm from "../components/forms/ContactForm";
import Map from "../components/sections/Map";

export default function Contact() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="w-full bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Encabezado de la página */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Si deseas comunicarte con Kairos Institute, resolver dudas o
              iniciar un proceso de admisión, completa el siguiente formulario y
              nos pondremos en contacto contigo.
            </p>
          </header>

          {/* --------------------------------------------------
              FORMULARIO DE CONTACTO
              --------------------------------------------------
              Componente reutilizable.
              - Actualmente no conectado a backend
              - Preparado para integrar EmailJS o API REST
              - Centraliza la lógica de envío
          */}
          <section className="bg-white p-8 rounded-xl shadow-sm">
            <ContactForm />
          </section>
        </div>
      </main>
      <Map />
      <Footer />
    </>
  );
}
