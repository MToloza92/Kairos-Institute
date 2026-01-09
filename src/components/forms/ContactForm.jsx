/**
 * ContactForm
 * --------------------------------------------------
 * Componente de formulario reutilizable.
 *
 * Responsabilidad:
 * - Renderizar campos de contacto
 * - Gestionar estructura del formulario
 *
 * No maneja:
 * - Envío real de datos
 * - Integración con backend
 *
 * Escalabilidad:
 * - Puede integrarse con EmailJS o API REST
 * - Puede incorporar validación (React Hook Form)
 */

export default function ContactForm() {
  /**
   * IMPORTANTE:
   * Este formulario es solo estructural.
   * El botón no ejecuta envío real.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: implementar envío cuando exista backend o servicio de email
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campo nombre */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo
        </label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Campo email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Campo mensaje */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          rows={4}
          placeholder="Escribe tu mensaje"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
        />
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
