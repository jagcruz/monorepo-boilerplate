module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint', 'import'],
  settings: { 'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] } },
  rules: {
    'import/no-named-as-default-member': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-anonymous-default-export': 'off',
    'import/no-unresolved': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'builtin', // Node builtins are first
          'external', // then external modules
          'parent', // then parent types
          'sibling', // then siblings
          'index', // Then the index file
          'object' // Then the rest: internal and external type
        ],
        pathGroups: [
          {
            pattern: 'src/**', // make imports from `src` their own group
            group: 'external',
            position: 'after'
          }
        ]
      }
    ]
  }
};
