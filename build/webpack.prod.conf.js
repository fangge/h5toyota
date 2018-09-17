'use strict'
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const prodWebpackConfig = merge(baseWebpackConfig, {
  devtool: 'cheap-module-source-map',
  plugins: [
    new OptimizeCSSPlugin(),
    new cleanWebpackPlugin('dist',{
      root:path.join(__dirname,'..')
    })
  ],
})

module.exports = prodWebpackConfig