const path = require('path');
const { merge } = require('webpack-merge');
// const ESLintPlugin = require('eslint-webpack-plugin');
const BaseConfig = require('./webpack.base');

module.exports = merge(BaseConfig, {
  // 设置构建模式
  mode: "development",

  devtool: "eval-cheap-module-source-map",

  // 开发服务器
  devServer: {
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000"
    },
  },

  plugins: [
    // new ESLintPlugin({
    //   context: path.resolve(__dirname, '../src'),
    //   fix: true,
    //   extensions: ['ts', 'js', 'json']
    // })
  ]
})