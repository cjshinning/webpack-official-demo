const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    },
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.txt/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};