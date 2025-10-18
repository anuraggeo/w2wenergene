import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Cloudflare Pages-compatible Vite config
export default defineConfig({
  plugins: [react()],

  base: "/",               // Ensures correct asset paths
  build: {
    outDir: "dist",        // Cloudflare Pages expects this folder
    emptyOutDir: true,     // Clears old builds before deploying
  },
  server: {
    port: 5173,
    open: true,
  },
});
