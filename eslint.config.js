import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.strict,
  ...tseslint.configs.strict,
  pluginReactConfig,
  {
    parser: '@typescript-eslint/parser',
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-console': 'warn',
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      singleQuote: true,
      semi: ['error', 'always'],
    },
  },
];
