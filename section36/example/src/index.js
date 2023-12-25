import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App, { Heading } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
