//1. Create a new React app.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//2. Create a App.jsx component.

import App from "./components/App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);