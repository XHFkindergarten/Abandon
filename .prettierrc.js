module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  overrides: [
    {
      files: '.prettierrc',
      options: {parser: 'json', trailingComma: 'none'},
    },
    {
      files: '.babelrc',
      options: {parser: 'json', trailingComma: 'none'},
    },
    {
      files: '*.json',
      options: {trailingComma: 'none'},
    },
  ],
};
