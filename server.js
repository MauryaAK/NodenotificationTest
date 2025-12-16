
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const webpush = require("web-push");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const VAPID_PUBLIC_KEY = "BBkOIkCvZZ54uU6H-iybShFownU9y16F8cbe2seciYvpPntoUWv1mdhBOVwTxMww-mY1z926042p7aTadrRvhe4";
const VAPID_PRIVATE_KEY = "Sl3QYhwLnJtOAimQMopa0BfT45y6labZA2Mt2ttHYYE";

webpush.setVapidDetails(
  "mailto:test@example.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

// TEMP storage (use DB in prod)
let subscriptions = [];

// Save subscription
app.post("/subscribe", (req, res) => {
  subscriptions.push(req.body);
  console.log("✅ Subscription saved");
  res.json({ success: true });
});

// Send push (JSON ONLY)
app.post("/send", async (req, res) => {
  const payload = JSON.stringify({
    title: "🔥 Web Push Working",
    body: "This notification works even in kill mode",
    url: "/"
  });

  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(sub, payload, { TTL: 60 });
    } catch (err) {
      console.error("❌ Push error:", err.statusCode, err.body);
    }
  }

  res.json({ success: true });
});

app.listen(4000, () => {
  console.log("🚀 Server running at http://localhost:4000");
});
