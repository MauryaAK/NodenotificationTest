// import React, { Suspense, lazy } from "react";
// import type { FC } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const Login = lazy(() => import("./pages/Login"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));

// const App: FC = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;



















// import type { FC } from "react";
// import { registerPush } from "./push";

// const API_BASE = "https://nodenotificationtest.onrender.com";

// const App: FC = () => {
//   const sendNotification = async () => {
//     await fetch(`${API_BASE}/send`, { method: "POST" });
//     alert("📨 Notification sent");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">
        
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">
//           🔔 Web Push Notification
//         </h2>

//         <p className="text-sm text-gray-500 mb-6">
//           Proof of Concept – works even when browser is closed
//         </p>

//         <button
//           onClick={registerPush}
//           className="w-full mb-4 px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold
//                      hover:bg-indigo-700 active:scale-[0.98] transition-all"
//         >
//           Enable Push Notifications
//         </button>

//         <button
//           onClick={sendNotification}
//           className="w-full px-4 py-3 rounded-xl border border-indigo-600 text-indigo-600
//                      font-semibold hover:bg-indigo-50 active:scale-[0.98] transition-all"
//         >
//           Send Test Notification
//         </button>

//         <p className="text-xs text-gray-400 mt-6">
//           👉 Please allow notifications when prompted by the browser
//         </p>
//       </div>
//     </div>
//   );
// };

// export default App;






import type { FC } from "react";
import { registerPush } from "./push";
import { isIOS, isSafari, isPWA } from "./env";

const API_BASE = "https://nodenotificationtest.onrender.com";

const App: FC = () => {
  const canEnablePush =
    !isIOS() || (isSafari() && isPWA());

  const sendNotification = async () => {
    await fetch(`${API_BASE}/send`, { method: "POST" });
    alert("📨 Notification sent");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🔔 Web Push Notification
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Proof of Concept – works even when browser is closed
        </p>

        <button
          disabled={!canEnablePush}
          onClick={registerPush}
          className={`w-full mb-4 px-4 py-3 rounded-xl font-semibold transition-all
            ${canEnablePush
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
        >
          Enable Push Notifications
        </button>

        <button
          onClick={sendNotification}
          className="w-full px-4 py-3 rounded-xl border border-indigo-600 text-indigo-600
                     font-semibold hover:bg-indigo-50 transition-all"
        >
          Send Test Notification
        </button>

        {isIOS() && !isPWA() && (
          <p className="text-xs text-red-500 mt-4">
            ⚠️ iOS requires installation from Safari<br />
            Safari → Share → Add to Home Screen
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
