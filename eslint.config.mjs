import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Code Quality Rules
      "no-console": "warn", // Warn about console.log statements
      "no-debugger": "error", // Prevent debugger statements in production
      "no-unused-vars": "error", // Error on unused variables
      "prefer-const": "error", // Prefer const over let when possible
      "no-var": "error", // Prefer const/let over var
      
      // React Best Practices
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in useEffect
      "react-hooks/rules-of-hooks": "error", // Enforce rules of hooks
      "react/jsx-key": "error", // Require key prop in lists
      "react/jsx-no-duplicate-props": "error", // Prevent duplicate props
      
      // TypeScript Rules
      "@typescript-eslint/no-explicit-any": "warn", // Warn about using 'any' type
      "@typescript-eslint/prefer-interface": "warn", // Prefer interface over type alias
      "@typescript-eslint/no-unused-vars": "error", // TypeScript-specific unused vars
      
      // Import/Export Rules
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always"
      }], // Organize imports
      "import/no-unresolved": "error", // Ensure imports resolve correctly
      
      // Code Style Rules
      "indent": ["error", 2], // 2-space indentation
      "quotes": ["error", "single"], // Single quotes
      "semi": ["error", "always"], // Always use semicolons
      "comma-dangle": ["error", "always-multiline"], // Trailing commas in multiline
      "max-len": ["warn", { "code": 100 }], // Warn about lines longer than 100 chars
    },

  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
