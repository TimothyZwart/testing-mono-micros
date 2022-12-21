import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [
  react(),
  federation({
   name: "remote",
   filename: "remoteEntry.js",
   exposes: {
    "./dashBoardWrapper": "./src/dashBoardWrapper.tsx",
   },
   //  shared: require("./package.json").dependencies,
  }),
 ],
 build: {
  target: "esnext",
  minify: false,
  cssCodeSplit: true,
  rollupOptions: {
   output: {
    format: "esm",
    entryFileNames: "assets/[name].js",
    minifyInternalExports: false,
   },
  },
 },
});
