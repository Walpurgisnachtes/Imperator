import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { dynamicActivate } from "./i18n";
import "./index.css";
import App from "./App.tsx";
import { createNewGame } from "./scripts/game-loader.ts";
import { loadBuildings } from "./data/static-data/buildings.ts";

// Load game materials
import "./data/static-data/buildings/_index.ts";

function Root(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      await dynamicActivate("en");
      loadBuildings();
      await createNewGame();
    })()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
