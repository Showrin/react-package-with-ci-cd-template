module.exports = {
  printWidth: 100,
  singleQuote: false,
  trailingComma: "es5",
  semi: true,
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  overrides: [
    {
      files: "*.scss",
      options: {
        singleQuote: false,
      },
    },
  ],
};
