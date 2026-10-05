import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages em https://usuario.github.io/NOME-DO-REPO/, descomente:
  // base: "/NOME-DO-REPO/",
});
