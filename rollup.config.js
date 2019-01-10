const nodeResolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const { terser, } = require('rollup-plugin-terser')
const { sizeSnapshot, } = require('rollup-plugin-size-snapshot')

const input = './src/index.js'

const name = 'ccqp'
const babelOpts = {
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
}

module.exports = [
  {
    input,
    output: {
      file: 'dist/ccqp.umd.js',
      format: 'umd',
      name,
    },
    plugins: [
      nodeResolve(),
      babel(babelOpts),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development'), }),
      sizeSnapshot(),
    ],
  },

  {
    input,
    output: {
      file: 'dist/ccqp.min.js',
      format: 'umd',
      name,
    },
    plugins: [
      nodeResolve(),
      babel(babelOpts),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production'), }),
      terser(),
    ],
  },
  require('./rollup.config.cjs'),
  require('./rollup.config.esm'),
]
