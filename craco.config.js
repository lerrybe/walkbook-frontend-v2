const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');
const resolve = (arg) => path.resolve(__dirname, arg);

module.exports = {
  webpack: {
    alias: {
      '~': resolve('src'),
    },
    node: {
      global: true,
    },
    plugins: [new NodePolyfillPlugin({ excludeAliases: ['console'] })],
  },
  babel: {
    plugins: ['@emotion'],
  },
};
