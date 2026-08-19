import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function pagesBase(): string {
  if (process.env.GITHUB_PAGES_BASE) return process.env.GITHUB_PAGES_BASE;
  if (process.env.VITE_BASE_PATH) return process.env.VITE_BASE_PATH;
  return "/digital-landing-lab/";
}

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : pagesBase(),
}));
