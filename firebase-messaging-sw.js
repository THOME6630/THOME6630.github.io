// web/firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

// REPLACE THIS with your actual Firebase Config from Phase 1
const firebaseConfig = {
  apiKey: "AIzaSyCLibgUN9ekLBegubc0LFOI05quMCu3HVQ",
  authDomain: "oti-management-app.firebaseapp.com",
  projectId: "oti-management-app",
  storageBucket: "oti-management-app.firebasestorage.app",
  messagingSenderId: "756210239018",
  appId: "1:756210239018:web:99c8559034d028bb1ae553",
  measurementId: "G-NBR42L5SJ7"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional: Handle background messages explicitly
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/logo-01.jpg' // Make sure this path matches your manifest icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});