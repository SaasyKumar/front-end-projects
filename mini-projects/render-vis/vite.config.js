import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path, { dirname, format, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SourceMap } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url)); // If multiple pages used
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // lib:{
    //     entry: 'src/exports.js',
    //     name: '$VC',
    //     formats: ['iife'],
    //     fileName: (format) => `componentbundle.${format}.js`,
    // }
  },
});
