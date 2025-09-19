import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import App from "./App.tsx";
import BusesInfoProvider from "./context/bus-details/BusesInfoProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BusesInfoProvider>
      <App />
    </BusesInfoProvider>
  </StrictMode>
);
