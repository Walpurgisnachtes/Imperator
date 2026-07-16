import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { dynamicActivate } from "./i18n";
import './index.css'
import App from './App.tsx'

function Root(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dynamicActivate("en")
      .then(() => setLoading(false))
      .catch((err) => console.error("Failed to load translation:", err));
  }, []);

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
