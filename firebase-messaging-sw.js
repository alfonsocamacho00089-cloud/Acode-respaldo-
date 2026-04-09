importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');



firebase.initializeApp({

  apiKey: "AIzaSyCaUyhX2iBMl4A5xeKeu_4SeE6HClp4V1s",

  authDomain: "real-market-elite-2025.firebaseapp.com",

  projectId: "real-market-elite-2025",

  storageBucket: "real-market-elite-2025.appspot.com",

  messagingSenderId: "226489002778",

  appId: "1:226489002778:web:6722d21a9e78b33b5b1aa3"

});



const messaging = firebase.messaging();



// firebase-messaging-sw.js
messaging.onBackgroundMessage((payload) => {
  console.log('[sw.js] Mensaje recibido:', payload);

  const notificationTitle = "DropisChat";
  
  // Usamos el operador ?. para evitar errores si no hay notificación
  const notificationOptions = {
    body: payload.notification?.body || "Tienes un nuevo mensaje", 
    icon: '/logo.png',
    badge: '/badge.png',
    // Recomendado: Agrega una etiqueta para que los mensajes del mismo chat se agrupen
    tag: 'new-message',
    renotify: true
  };

  // IMPORTANTE: Retornar la promesa para que el navegador mantenga vivo el SW
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
