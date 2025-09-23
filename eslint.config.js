// eslint.config.js (ESM)
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import globals from "globals";

export default [
  // Ignore generated stuff
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },

  // Base JS
  js.configs.recommended,

  // Node-style config files (silence module/require globals)
  {
    files: ["**/*.config.js", "**/*.cjs"],
    languageOptions: { globals: { module: "writable", require: "readonly" } },
  },

  // TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: false },
    },
    plugins: { "@typescript-eslint": ts },
    rules: {
      ...ts.configs.recommended.rules,
    },
  },

  // Astro
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,                // <-- this was missing
      parserOptions: {
        parser: tsParser,                 // allow TS inside <script> in .astro
        extraFileExtensions: [".astro"],
      },
      globals: {
        Response: "readonly",
        Request: "readonly",
        fetch: "readonly",
      },
    },
    plugins: { astro },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },

  // React
  {
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: { react, "react-hooks": reactHooks },
    settings: { react: { version: "detect" } },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },

  {
    files: ["**/*.{js,jsx,ts,tsx,astro}"],
    languageOptions: {
      globals: {
        ...globals.browser, // <- adds window, document, etc.
        ...globals.node,
      },
    },
  },
];
