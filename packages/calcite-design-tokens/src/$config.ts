import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import { CalciteTokenTransformConfig } from "../support/types/config.js";
import { Platform } from "../support/types/platform.js";
import { globalTokens, coreTokens } from "./index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const config: CalciteTokenTransformConfig = {
  files: [coreTokens, globalTokens],
  options: {
    prefix: "calcite",
  },
  output: {
    dir: resolve(__dirname, "../dist"),
    platforms: [Platform.SCSS, Platform.CSS, Platform.JS, Platform.ES6],
    expandFiles: {
      css: {
        typography: "classes.css",
        colorScheme: { light: "light.css", dark: "dark.css" },
        breakpoint: "breakpoint.css",
        index: {
          name: "index.css",
          import: [
            "./global.css",
            "./classes.css",
            ["./dark.css", "(prefers-color-scheme: dark)"],
            ["./light.css", "(prefers-color-scheme: light)"],
          ],
          class: [
            ["calcite-color-scheme-light", "light"],
            ["calcite-color-scheme-dark", "dark"],
          ],
        },
      },
      scss: {
        typography: "mixins.scss",
        colorScheme: { light: "light.scss", dark: "dark.scss" },
        breakpoint: "breakpoints.scss",
        index: {
          name: "index.scss",
          import: ["../css/index.css"],
          forward: ["./mixins.scss"],
          mixin: [
            ["calcite-color-scheme-light", "light"],
            ["calcite-color-scheme-dark", "dark"],
          ],
        },
      },
      js: {
        breakpoint: "breakpoints.js",
        index: {
          name: "index.js",
          export: ["./global.js", "./breakpoints.js"],
        },
      },
    },
  },
};

export default config;
