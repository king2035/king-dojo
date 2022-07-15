const path = require('path');
// const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  devServer: {
    port: 8080,
    static: '../dist'
  },

  module: {
    rules: [
      {
        test: /.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      },
      {
        test: /\.(ts)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // 设置预定义的环境
              presets: [
                [
                    // 指定环境的插件
                    "@babel/preset-env",
                    // 配置信息
                    {
                        // 要兼容的目标浏览器
                        targets: {
                            "chrome": "58",
                            "ie": "11"
                        },
                        // 指定corejs的版本
                        "corejs": "3",
                        // 使用corejs的方式 "usage" 表示按需加载
                        "useBuiltIns": "usage"
                    }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'TS版-贪吃蛇demo',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      hash: true
    }),
    // "hot: true" automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.
    // new webpack.HotModuleReplacementPlugin(),
    
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ]
}  