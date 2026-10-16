// Used only at build time by scripts/prerender.mjs to turn each page into static HTML.
import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <MemoryRouter initialEntries={[url]}>
        <AppRoutes />
      </MemoryRouter>
    </React.StrictMode>
  );
}
