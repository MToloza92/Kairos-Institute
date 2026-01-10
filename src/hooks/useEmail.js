import { useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * useEmail
 * --------------------------------------------------
 * Hook personalizado para enviar correos usando EmailJS.
 *
 * Responsabilidad:
 * - Encapsular la lógica de envío
 * - Exponer estados de carga, éxito y error
 * - Evitar lógica de envío dentro del componente UI
 */
export default function useEmail() {
  /**
   * Estado que indica si el envío está en proceso
   * Se usa para deshabilitar botones y mostrar feedback visual
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Estado que indica si el correo se envió correctamente
   */
  const [success, setSuccess] = useState(false);

  /**
   * Estado que almacena errores del envío
   */
  const [error, setError] = useState(null);

  /**
   * sendEmail
   * --------------------------------------------------
   * Función asíncrona que envía los datos del formulario
   *
   * @param {Object} formData
   * @param {string} formData.name
   * @param {string} formData.email
   * @param {string} formData.message
   */
  const sendEmail = async (formData) => {
    setIsLoading(true);
    setSuccess(false);
    setError(null);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Servicio configurado en EmailJS
        "YOUR_TEMPLATE_ID", // Plantilla de correo
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Public Key de EmailJS
      );

      setSuccess(true);
    } catch (err) {
      setError("No fue posible enviar el mensaje. Intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * El hook expone solo lo necesario al componente
   */
  return {
    sendEmail,
    isLoading,
    success,
    error,
  };
}
