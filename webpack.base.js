const path = require('path');
//
module.exports = {
    entry: {
        'bundle': './src/index.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'assets/js/[name].js',
        // publishPath: '/dist/'
    },
    //
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            // // background image in style,
            // {
            //     test: /\.(jpg|jpeg|gif|png)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {}
            //     }]
            // },
            // //
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: 'style-loader'
            //     }, {
            //         loader: 'css-loader'
            //     }, {
            //         loader: 'sass-loader'
            //     }]
            // },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use:  ['babel-loader','eslint-loader'],
            //     // options: {
            //     //     emitError: true
            //     // }
            // }
        ]
    }
}
