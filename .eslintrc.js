module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off',
    'no-unused-vars': [2, {
      //
      vars: 'local',
      //
      args: 'none'
    }],
    // 关闭语句强制分号结尾
    semi: [0],
    'space-before-function-paren': [0, 'always'],
    // 空行最多不超过100行
    'no-multiple-empty-lines': [0, { max: 100 }],
    // 关闭禁止混用tab和空格
    'no-mixed-space-and-tabs': [0],
    // 数组第一个制定是否启用这个规则，第二个指定几个空格
    indent: [1, 2]
  }
}
