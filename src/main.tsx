import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./hook/useLanguageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <LanguageProvider>
        <main className="color-full text-foreground bg-background w-full">
          <App />
        </main>
      </LanguageProvider>
    </NextUIProvider>
  </React.StrictMode>
);
