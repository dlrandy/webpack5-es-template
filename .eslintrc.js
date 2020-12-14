module.exports = {
    env: {
        browser: true,
        // es2021: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['prettier', 'react'],
    rules: { 'prettier/prettier': ['error'] },
};
