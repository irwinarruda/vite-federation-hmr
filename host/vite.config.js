import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import packageJson from "./package.json";

const dependencies = packageJson.dependencies;

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        counter: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: {
        ...dependencies,
        react: { requiredVersion: dependencies["react"] },
        "react-dom": { requiredVersion: dependencies["react-dom"] },
      },
    }),
  ],
});
