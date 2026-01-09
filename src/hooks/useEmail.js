import { useState } from "react";

/**
 * useEmail
 * --------------------------------------------------
 * Custom hook para gestionar el envío de emails.
 *
 * Estado actual:
 * - Simula el envío (mock)
 *
 * Escalable a:
 * - EmailJS
 * - API REST
 * - Backend propio
 */

export function useEmail() {
  /**
   * Estados del proceso de envío
   */
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Función principal de envío
   */
  const sendEmail = async (formData) => {
    setIsSending(true);
    setIsSuccess(false);
    setError(null);

    try {
      /**
       * SIMULACIÓN TEMPORAL
       * -------------------
       * Aquí irá la integración real más adelante
       */
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Datos enviados:", formData);

      setIsSuccess(true);
    } catch (err) {
      setError("No se pudo enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsSending(false);
    }
  };

  return {
    sendEmail,
    isSending,
    isSuccess,
    error,
  };
}
