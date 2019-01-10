const babel = require('rollup-plugin-babel')
const { sizeSnapshot, } = require('rollup-plugin-size-snapshot')
const pkg = require('./package.json')

const input = './src/index.js'
const babelOpts = {
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
}

module.exports = {
  input,
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  treeshake: true,
  plugins: [ babel(babelOpts), sizeSnapshot(), ],
}
