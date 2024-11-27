import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import packageJson from "./package.json";

const dependencies = packageJson.dependencies;

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "counter",
      filename: "remoteEntry.js",
      exposes: {
        "./Counter": "./src/Counter.jsx",
      },
      shared: {
        ...dependencies,
      },
    }),
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
    minify: false,
    modulePreload: false,
  },
});
