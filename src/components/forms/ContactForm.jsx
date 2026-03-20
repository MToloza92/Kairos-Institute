import { useState, useEffect } from "react";
import useEmail from "../../hooks/useEmail";

/**
 * ContactForm
 * --------------------------------------------------
 * Formulario de contacto institucional.
 *
 * Se conecta al hook useEmail para manejar
 * el envío de correos sin lógica de backend.
 */
export default function ContactForm() {
  /**
   * Estado local del formulario
   */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /**
   * Hook de envío de correo
   */
  const { sendEmail, isLoading, success, error } = useEmail();

  /**
   * NUEVO: Efecto para limpiar formulario después de envío exitoso
   * También limpia el mensaje de éxito después de 3 segundos
   */
  useEffect(() => {
    if (success) {
      // Limpiar el formulario
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Mostrar mensaje de éxito durante 3 segundos
      const timer = setTimeout(() => {
        // El mensaje desaparecerá automáticamente
        // (el estado success se reseteará cuando envíes nuevamente)
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  /**
   * Maneja cambios en los inputs
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campo Nombre */}
      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f8d3a] transition"
        disabled={isLoading}
      />

      {/* Campo Email */}
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f8d3a] transition"
        disabled={isLoading}
      />

      {/* Campo Mensaje */}
      <textarea
        name="message"
        placeholder="Tu mensaje"
        rows={3}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#4f8d3a] transition"
        disabled={isLoading}
      />

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#4f8d3a] text-white py-2 rounded-lg hover:bg-[#3d6b2a] disabled:opacity-50 disabled:cursor-not-allowed transition font-medium"
      >
        {isLoading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {/* Feedback al usuario - Mensaje de éxito */}
      {success && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-start gap-3 animate-pulse">
          <span className="text-xl">✓</span>
          <div>
            <p className="font-semibold">¡Mensaje enviado!</p>
            <p className="text-sm">Nos pondremos en contacto pronto.</p>
          </div>
        </div>
      )}

      {/* Feedback al usuario - Mensaje de error */}
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-start gap-3">
          <span className="text-xl">✕</span>
          <div>
            <p className="font-semibold">Error al enviar</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}
    </form>
  );
}
