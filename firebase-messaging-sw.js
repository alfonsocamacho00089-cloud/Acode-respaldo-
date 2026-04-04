importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// PEGA AQUÍ TUS MISMOS DATOS DE CONFIGURACIÓN
firebase.initializeApp({
  apiKey: "TU_API_KEY_AQUÍ",
  authDomain: "real-market-elite-2025.firebaseapp.com",
  projectId: "real-market-elite-2025",
  storageBucket: "real-market-elite-2025.appspot.com",
  messagingSenderId: "TU_SENDER_ID_AQUÍ",
  appId: "TU_APP_ID_AQUÍ"
});

const messaging = firebase.messaging();

// Este código muestra la notificación cuando llega
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png' // Si tienes un logo en tu carpeta, pon el nombre aquí
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
