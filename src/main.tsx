import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import BusesInfoProvider from "./context/bus-details/BusesInfoProvider.tsx";
import "./assets/css/index.css";
import "flatpickr/dist/flatpickr.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BusesInfoProvider>
      <App />
    </BusesInfoProvider>
  </StrictMode>
);
