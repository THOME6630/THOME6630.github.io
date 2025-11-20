/**
 * PWA Service Worker for handling Web Push Notifications.
 * This file is mandatory for receiving notifications sent via VAPID.
 */

// Define the name of the notification shown when a push event is received.
const NOTIFICATION_TAG = 'request-notification';
const NOTIFICATION_TITLE_FALLBACK = 'มีคำขอใหม่เข้ามา';
const NOTIFICATION_BODY_FALLBACK = 'กรุณาเปิดเว็บแอปพลิเคชันเพื่อตรวจสอบ';
const HOME_PAGE_URL = '/'; // Your Flutter Web PWA's entry point

self.addEventListener('push', function(event) {
  let pushData = {};

  try {
    // The Apps Script is configured to send a stringified JSON payload.
    pushData = event.data.json();
    console.log('Push received with JSON data:', pushData);
  } catch (e) {
    // Fallback for unencrypted/simple text payloads.
    console.error('Push data is not JSON:', event.data.text(), e);
    pushData = { notification: { title: NOTIFICATION_TITLE_FALLBACK, body: NOTIFICATION_BODY_FALLBACK } };
  }
  
  // Use the payload data for the notification options
  const notificationOptions = {
    // Title is mandatory, fallback is defined above
    body: pushData.notification?.body || NOTIFICATION_BODY_FALLBACK,
    icon: pushData.notification?.icon || '/icons/Icon-192.png', // Default Flutter PWA icon path
    badge: pushData.notification?.badge || '/icons/Icon-192.png',
    tag: pushData.notification?.tag || NOTIFICATION_TAG,
    data: pushData.notification?.data || { page: 'requests' },
    renotify: pushData.notification?.renotify || true,
  };

  // Wait for the notification to be displayed
  const showNotificationPromise = self.registration.showNotification(
    pushData.notification?.title || NOTIFICATION_TITLE_FALLBACK,
    notificationOptions
  );

  event.waitUntil(showNotificationPromise);
});

// Event listener for when the user clicks the notification
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  const data = event.notification.data;
  let clickUrl = HOME_PAGE_URL;
  
  // Example logic to direct the user based on the payload data
  if (data && data.page === 'requests') {
    // If the data payload says 'requests', navigate to the requests section.
    // In a Flutter Web PWA, navigating to the root URL and letting the Flutter
    // router handle the deep link logic is often easiest.
    // If you use hash routing, you might navigate to '/#/requests'.
    clickUrl = HOME_PAGE_URL; 
  }
  
  // Open the main PWA window, or focus it if it's already open
  event.waitUntil(
    clients.matchAll({
      type: 'window'
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url.includes(HOME_PAGE_URL) && 'focus' in client) {
          // If the app is already open, focus the tab and navigate
          return client.focus().then(() => client.navigate(clickUrl));
        }
      }
      // If the app is not open, open a new window
      if (clients.openWindow) {
        return clients.openWindow(clickUrl);
      }
    })
  );
});

// *IMPORTANT:* You must also ensure this service worker is registered in your Flutter's `index.html`.
// Flutter's boilerplate usually registers `flutter_service_worker.js`. 
// You must modify `index.html` to register this `pwa_service_worker.js` as well, or modify your build process.