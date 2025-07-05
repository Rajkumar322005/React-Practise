import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// imwport './index.css';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
