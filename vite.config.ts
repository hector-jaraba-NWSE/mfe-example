import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: 4102,
      spaEntryPoints: ["src/spa.tsx"],
    }),
  ],
  base: "http://localhost:4102/",
  server: {
    hmr: false,
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
