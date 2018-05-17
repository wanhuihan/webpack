
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

let devConfig = {

   mode: 'development',
   //
   output: {
       path: __dirname + '/dist',
   },
   //
   devServer: {
       historyApiFallback: true,
       inline:true,
       contentBase: path.join(__dirname, "./dist/"),
       compress: true,
       port: 3000
   },
   //
   module: {
       rules: [
           {
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
           },
           // background image in style,
           {
               test: /\.(jpg|jpeg|gif|png)$/,
               use: [{
                   loader: 'file-loader',
                   options: {}
               }]
           },
           //
           {
               test: /\.scss$/,
               use: [{
                   loader: 'style-loader'
               }, {
                   loader: 'css-loader'
               }, {
                   loader: 'sass-loader'
               }]
           },
           //
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use:  ['babel-loader','eslint-loader'],
           }
       ]
   },

   plugins: [
       new htmlWebpackPlugin({
           minify: {
               // 压缩html, 删除不必要的引号
               removeAttributeQuotes: true,
           },
           hash: true,
           // //
           template: './src/index.html',
           alwaysWriteToDisk: true,
       }),
       // new extractTextPlugin('style.css')
   ]
}

module.exports = merge(baseConfig, devConfig)
