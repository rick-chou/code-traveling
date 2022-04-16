module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 为tsx文件开启jsx语法
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // 使用jsx语法的地方必须引入React 但是17后不必再引入 所以关闭这条规则
    'react/react-in-jsx-scope': 'off',
    // 解决 'React' was used before it was defined
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-use-before-define': 'off',
    // 解决 Missing file extension "tsx" for 'xxx'
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 关闭默认导出 .d.ts中会报错
    'import/prefer-default-export': 'off',
  },
  // 解决 Unable to resolve path to module 'xxx'
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
