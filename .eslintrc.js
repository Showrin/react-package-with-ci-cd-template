module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  extends: ["plugin:react/recommended", "plugin:jest/recommended", "airbnb", "prettier", "plugin:storybook/recommended"],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "jest"],
  rules: {
    "react/jsx-key": 2,
    "react/function-component-definition": [2, {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function"
    }],
    "import/extensions": [1, "always", {
      ignorePackages: true,
      pattern: {
        js: "never",
        jsx: "never"
      }
    }]
  }
};