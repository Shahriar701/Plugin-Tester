module.exports = {
  root: true,
  env: {
  node: true
  },
  extends: [
  'plugin:vue/essential',
  'plugin:prettier/recommended',
  'eslint:recommended',
  'prettier/vue'
  ],
  rules: {
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-unused-expressions': 'off',
  'vue/no-unused-components': 'off'
  
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    'use': false
  }
 }