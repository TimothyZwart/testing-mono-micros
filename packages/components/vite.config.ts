import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "node:path";

// https://vitejs.dev/config/

export default defineConfig({
 plugins: [
  react(),
  dts({
   insertTypesEntry: true,
  }),
 ],
 build: {
  sourcemap: true,
  lib: {
   name: "Components",
   entry: path.resolve(__dirname, "src/main.ts"),
   formats: ["es", "umd"],
   fileName: (format) => `components.${format}.js`,
  },
  rollupOptions: {
   external: ["react", "react-dom"],
   output: {
    globals: {
     react: "React",
     "react-dom": "ReactDOM",
    },
   },
  },
 },
});
