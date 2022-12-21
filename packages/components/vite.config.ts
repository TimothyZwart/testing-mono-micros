import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "node:path";

// https://vitejs.dev/config/

export default defineConfig({
 plugins: [
  react({
   jsxRuntime: "classic",
  }),
  dts({
   insertTypesEntry: true,
  }),
 ],
 build: {
  lib: {
   name: "components",
   entry: path.resolve(__dirname, "src/main.ts"),
   formats: ["es", "umd", "cjs", "iife"],
   fileName: (format) => `index.${format}.js`,
  },
  rollupOptions: {
   inlineDynamicImports: true,
   external: ["react", "react-dom"],
  },
 },
});
