module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "space-before-blocks": "off",
    quotes: "off",
    semi: "off",
    "comma-dangle": "off",
    "no-console": "off",
    "linebreak-style": "off",
    "no-trailing-spaces": "off",
    "arrow-parens": "off",
    eqeqeq: "off",
    "space-before-function-paren": "off",
  }
}
