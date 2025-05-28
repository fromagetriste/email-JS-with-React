import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContactUs } from "./ContactUs/ConstactUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="h-screen bg-slate-800">
      <App />
      <ContactUs />
    </div>
  </StrictMode>
);
