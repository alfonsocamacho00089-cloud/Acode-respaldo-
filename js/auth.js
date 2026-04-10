// Función para pedir la huella en el navegador/móvil
async function validarHuella() {
    if (!window.PublicKeyCredential) {
        alert("Tu dispositivo no soporta biometría.");
        return false;
    }

    // Aquí la app le pide al teléfono que use el sensor
    // Para la prueba inicial, usaremos una validación simple de sesión
    console.log("Pidiendo huella...");
    // Nota: La implementación completa de WebAuthn requiere SSL (HTTPS)
    return true; 
}
