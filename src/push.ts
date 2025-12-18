// const PUBLIC_VAPID_KEY =
//   "BBkOIkCvZZ54uU6H-iybShFownU9y16F8cbe2seciYvpPntoUWv1mdhBOVwTxMww-mY1z926042p7aTadrRvhe4";

// const API_BASE = "https://nodenotificationtest.onrender.com";

// export async function registerPush() {
//   if (!("serviceWorker" in navigator)) {
//     alert("Service Worker not supported");
//     return;
//   }

//   const registration = await navigator.serviceWorker.register("/sw.js");

//   const permission = await Notification.requestPermission();
//   if (permission !== "granted") {
//     alert("Permission denied");
//     return;
//   }

//   const subscription = await registration.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
//   });

//   await fetch(`${API_BASE}/subscribe`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(subscription)
//   });

//   alert("✅ Push enabled");
// }

// function urlBase64ToUint8Array(base64String: string) {
//   const padding = "=".repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/-/g, "+")
//     .replace(/_/g, "/");

//   const rawData = window.atob(base64);
//   return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)));
// }










import { isIOS, isSafari, isPWA } from './env'

const PUBLIC_VAPID_KEY =
  "BBkOIkCvZZ54uU6H-iybShFownU9y16F8cbe2seciYvpPntoUWv1mdhBOVwTxMww-mY1z926042p7aTadrRvhe4";

const API_BASE = "https://nodenotificationtest.onrender.com";

export async function registerPush() {
  // 🚫 iOS Chrome or non-Safari
  if (isIOS() && !isSafari()) {
    alert(
      "⚠️ iOS Notice\n\n" +
      "Push notifications work ONLY when installed from Safari.\n\n" +
      "Please:\n" +
      "1. Open this site in Safari\n" +
      "2. Tap Share → Add to Home Screen"
    );
    return;
  }

  // 📲 iOS but not installed
  if (isIOS() && !isPWA()) {
    alert(
      "📲 Installation Required\n\n" +
      "Steps:\n" +
      "1. Open in Safari\n" +
      "2. Share → Add to Home Screen\n" +
      "3. Open app from Home Screen\n" +
      "4. Then enable notifications"
    );
    return;
  }

  if (!("serviceWorker" in navigator)) {
    alert("❌ Service Worker not supported");
    return;
  }

  const registration = await navigator.serviceWorker.register("/sw.js");

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    alert("❌ Notification permission denied");
    return;
  }

  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
  });

  await fetch(`${API_BASE}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subscription),
  });

  alert("✅ Push Notifications Enabled");
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}
