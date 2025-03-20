import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/index.tsx";
import { HelmetProvider } from "react-helmet-async";
import { DarkModeProvider } from "./context/dark-mode-context.tsx";
import { ConfigProvider } from "antd";
import { theme } from "./theme/index.ts";

import "./index.css";
import "./global.css";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <DarkModeProvider>
        <ConfigProvider theme={theme}>
          <RouterProvider router={routes} />
        </ConfigProvider>
      </DarkModeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
