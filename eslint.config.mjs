import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    prettierConfig,
    jsdoc.configs['flat/recommended-typescript'],
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module',
                project: './tsconfig.json',
            },
        },
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-namespace': 'off', // Allow namespaces
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'none', // Allow unused function parameters (required by API callbacks)
                    varsIgnorePattern:
                        '^JSDocableNode$|^FunctionDeclaration$|^MethodDeclaration$|^ConstructorDeclaration$|^MethodSignature$|^CallSignatureDeclaration$',
                },
            ],
            'prefer-const': 'warn', // Using let instead of const for variables never reassigned
            'no-prototype-builtins': 'warn', // Access Object.prototype method 'hasOwnProperty'
            'no-empty': 'warn', // Empty block statement
            'no-debugger': 'warn', // Unexpected 'debugger' statement
            'jsdoc/require-jsdoc': ['warn', { publicOnly: true }],
        },
    },
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                console: 'readonly',
                process: 'readonly',
                require: 'readonly',
                module: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
            },
        },
        rules: {
            'prefer-const': 'warn',
            'no-prototype-builtins': 'warn',
            'no-empty': 'warn',
            'no-debugger': 'warn',
            'no-unused-vars': ['warn', { args: 'none' }],
        },
    },
    {
        ignores: ['node_modules/**'],
    },
];
