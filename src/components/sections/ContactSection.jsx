/**
 * Contact
 * --------------------------------------------------
 * Sección institucional de contacto.
 *
 * Función:
 * - Presentar información de contacto oficial
 * - Entregar un punto de acción claro al usuario
 * - Servir como antesala a la sección de ubicación (mapa)
 *
 * Características técnicas:
 * - No maneja estado
 * - No depende de backend
 * - Todo el contenido editable está centralizado
 * - Preparada para escalar a formulario real en el futuro
 */
import ContactForm from "../forms/ContactForm";

const CONTACT_DATA = {
  phone: "+56 9 9166 0923", // Cambiar por teléfono oficial
  email: "contacto@kairosinstitute.cl", // Cambiar por correo institucional
  address: "Camino a Caburgua Km. 8 - Sector El Turbio - Parcela 22, Pucón", // Cambiar por dirección real
};

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado de la sección */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos disponibles para resolver tus dudas y acompañarte en el
            proceso de conocer nuestra comunidad educativa.
          </p>
        </header>

        {/* Contenido en dos columnas: izquierda (info) y derecha (formulario) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda: Información de contacto */}
          <div className="space-y-8  ">
            <div className="space-y-8 text-center">
              {/* Teléfono */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Teléfono
                </h3>
                <a
                  href={`tel:${CONTACT_DATA.phone}`}
                  className="text-gray-700 hover:text-black"
                >
                  {CONTACT_DATA.phone}
                </a>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Correo Electrónico
                </h3>
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="text-gray-700 hover:text-black"
                >
                  {CONTACT_DATA.email}
                </a>
              </div>

              {/* Dirección */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Dirección
                </h3>
                <p className="text-gray-700">{CONTACT_DATA.address}</p>
              </div>
            </div>
          </div>
          <div>
            {/* TODO: Columna derecha formulario no funcional , cambiar cuando se agregue backend */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Envíanos un mensaje
              </h3>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
