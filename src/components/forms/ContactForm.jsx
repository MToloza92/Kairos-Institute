import { useState } from "react";
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
      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />

      <textarea
        name="message"
        placeholder="Tu mensaje"
        rows={3}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 disabled:opacity-50"
      >
        {isLoading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {/* Feedback al usuario */}
      {success && (
        <p className="text-green-600 text-sm">Mensaje enviado correctamente.</p>
      )}

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}
