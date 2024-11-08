/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['src/**/*.g.ts', 'src/**/*.d.ts'],
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort', 'import'],
  extends: [
    'plugin:prettier/recommended',
    'vuetify',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json',
  ],
  rules: {
    'vue/script-indent': 'off',
    semi: 'off',
    'sort-imports': 'off',
    'arrow-parens': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
