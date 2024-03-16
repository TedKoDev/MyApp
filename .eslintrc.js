module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Prettier 플러그인 추가
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'semi': ['error', 'always'],
    'max-len': ['error', { 'code': 100 }],
    'no-lone-blocks': 'error',
    'arrow-parens': ['error', 'always'],
    'object-curly-spacing': ['error', 'always']
    // 여기에 필요한 추가 규칙을 계속 추가할 수 있습니다.
  },
  globals: {
    fetch: false,
  },
};
