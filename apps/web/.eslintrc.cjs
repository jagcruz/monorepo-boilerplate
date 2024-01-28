module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'react-refresh'],
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: { alwaysTryTypes: true, project: 'apps/web/tsconfig.json' } }
  },
  parserOptions: { ecmaFeatures: { jsx: true } },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
