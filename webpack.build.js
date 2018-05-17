//
const baseConfig = require('./webpack.base.js');
//
const merge = require('webpack-merge');

const extractTextPlugin = require('extract-text-webpack-plugin');
//
const copyWebpackPlugin = require('copy-webpack-plugin');
//
const htmlWebpackPlugin = require('html-webpack-plugin');
//
const optimizeCss = require('optimize-css-assets-webpack-plugin');
//
const uglify = require('uglifyjs-webpack-plugin');
//
const proConfig = {
    //
    mode: 'production',
    //
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                })
            },
            // background image in style,
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        // 打包到哪个路径
                        outputPath: './assets/images/',
                        // 引用背景图的相对路径地址
                        publicPath: '../images/'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:  ['babel-loader','eslint-loader'],
            }
        ]
    },
    //
    plugins: [

        new extractTextPlugin('./assets/css/style.css'),
        //
        new copyWebpackPlugin([
            {
                from: './dist/',
                ignore: ['.*'],
                toType: 'dir'
            }
        ]),
        //
        new htmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),
        // webpack4 压缩css必须要用到的
        new optimizeCss({
            assetNameRegExp: /\.style\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        // webpack4 压缩css必须要用到的，压缩Js用的
        new uglify()

    ],
    // webpack4 压缩css必须要用到的
    optimization: {
        // minimize: true,
        minimizer: [new optimizeCss({})],

    }
}

module.exports = merge(baseConfig, proConfig);
