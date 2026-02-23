module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  proseWrap: 'always',
  overrides: [
    {
      files: ['*.js', '*.flow'],
      options: { parser: 'flow' },
    },
  ],
};
