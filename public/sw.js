// self.addEventListener("install", event => {
//   self.skipWaiting();
// });

// self.addEventListener("activate", event => {
//   event.waitUntil(self.clients.claim());
// });

// self.addEventListener("push", event => {
//   let data = {
//     title: "Default Title",
//     body: "Default Body",
//     url: "/"
//   };

//   if (event.data) {
//     const text = event.data.text();
//     if (text && text.trim().startsWith("{")) {
//       try {
//         data = JSON.parse(text);
//       } catch {}
//     } else {
//       data.body = text;
//     }
//   }

//   event.waitUntil(
//     self.registration.showNotification(data.title, {
//       body: data.body,
//       icon: "/logo192.png",
//       data: data.url
//     })
//   );
// });

// self.addEventListener("notificationclick", event => {
//   event.notification.close();
//   event.waitUntil(
//     self.clients.openWindow(event.notification.data || "/")
//   );
// });







self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  let data = {
    title: "Notification",
    body: "You have a new message",
    url: "/",
  };

  if (event.data) {
    try {
      data = JSON.parse(event.data.text());
    } catch {
      data.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/logo192.png",
      data: data.url,
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.openWindow(event.notification.data || "/")
  );
});
