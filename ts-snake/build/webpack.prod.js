const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.base');

module.exports = merge(BaseConfig, {
  mode: 'production'
});
