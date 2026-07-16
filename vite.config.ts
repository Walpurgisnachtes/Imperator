import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import babel from "@rolldown/plugin-babel";
import { lingui } from "@lingui/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    babel({
      presets: [reactCompilerPreset()],
      plugins: ["@lingui/babel-plugin-lingui-macro"],
    }),
    lingui(),
  ],
});
