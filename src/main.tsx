import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import TicketsInfoProvider from "@/context/bus-details/TicketsInfoProvider.tsx";
import "@/assets/css/index.css";
import "flatpickr/dist/flatpickr.css";
import LoginInfoProvider from "@/context/login-details/LoginInfoProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoginInfoProvider>
      <TicketsInfoProvider>
        <App />
      </TicketsInfoProvider>
    </LoginInfoProvider>
  </StrictMode>,
);
