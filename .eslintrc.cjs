module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // TODO: Find a way to add these
    // "airbnb",
    // "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Not needed anymore since React 17
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    // Copied from somewhere else
    // TODO: try these out and see if they are suiting!
    "@typescript-eslint/no-use-before-define": ["error"],
    quotes: ["error", "double"],
    "arrow-body-style": ["warn", "as-needed"],
    "implicit-arrow-linebreak": "off", // Since arrow-body-style is on
    "import/extensions": "warn",
    "import/prefer-default-export": "warn",
    "import/no-unresolved": "warn",
    "no-confusing-arrow": ["error", { onlyOneSimpleParam: true }],
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["draftState"] },
    ],
    "no-use-before-define": "warn",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: [
          "function-declaration",
          "function-expression",
          "arrow-function",
        ],
        unnamedComponents: ["function-expression", "arrow-function"],
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    // "react/jsx-one-expression-per-line": "warn",
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
