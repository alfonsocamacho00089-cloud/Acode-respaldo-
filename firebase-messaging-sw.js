// 1. Importar las librerías de compatibilidad (necesario en Service Workers)
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');

// 2. Configuración (Usa tus mismos IDs de la consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyCaUyhX2iBMl4A5xeKeu_4SeE6HClp4V1s",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO_ID",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "226489002778",
  appId: "1:226489002778:web:6722d21a9e78b33b5b1aa3"
};

// 3. Inicializar
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 4. Manejar mensajes cuando la pestaña está cerrada o en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Recibido:', payload);

  const notificationTitle = payload.notification.title || "Nueva notificación";
  const notificationOptions = {
    body: payload.notification.body || "Tienes un nuevo mensaje.",
    icon: '/logo.png' // Asegúrate de que esta ruta sea válida o quítala
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
