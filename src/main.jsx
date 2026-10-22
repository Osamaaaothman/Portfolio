import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");

// The prerendered HTML is English; hydrate only when the visitor will see English.
if (root.hasChildNodes() && document.documentElement.lang === "en") {
  hydrateRoot(root, <App />);
} else {
  root.textContent = "";
  createRoot(root).render(<App />);
}
