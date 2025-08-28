// configuracion generica del los enpoints

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://django:8000/api/";

// Endpoints agrupados por entidad/tabla
export const ENDPOINTS = {
  person: {
    registerAprendiz: `${API_BASE_URL}security/persons/register-aprendiz/`,
    // Otros endpoints de persona
  },
  user: {
    validateLogin: `${API_BASE_URL}security/users/validate-institutional-login/`,
    requestPasswordReset: `${API_BASE_URL}security/users/request-password-reset/`, // Envia el código y lo compara
    resetPassword: `${API_BASE_URL}security/users/reset-password/`, // Actualiza la contraseña
    // Otros endpoints de usuario
  },
  // Más entidades...
};

export default API_BASE_URL;