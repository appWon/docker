module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    semi: 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'react/prop-types': 'off',
  },
};
