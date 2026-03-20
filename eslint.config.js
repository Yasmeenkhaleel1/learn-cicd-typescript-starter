import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // ❌ تجاهل ملفات البناء
  {
    ignores: ["dist/**"],
  },

  // ✅ إعدادات TypeScript + JS
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    languageOptions: {
      globals: globals.node,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
  },
]);
