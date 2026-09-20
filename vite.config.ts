import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VERCEL ? "/" : "/03-react-movies/",
  plugins: [react()],
});
