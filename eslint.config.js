/* eslint-disable import/no-anonymous-default-export */
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import { globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextCompat = new FlatCompat({ baseDirectory: __dirname });

export default [
  globalIgnores(['dist']),
  ...nextCompat.config({
    extends: [
      'next',
      'next/core-web-vitals',
    ]
  }),

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  react.configs.flat.recommended,

  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',

      'import/order': 'warn',

      ...reactHooks.configs['recommended-latest'].rules,

      ...jsxA11y.flatConfigs.recommended.rules,

      ...importPlugin.flatConfigs.recommended.rules,
    },
  },
  eslintConfigPrettier,
];
