const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';
const htmlTemplatePath = './src/Template.html';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: [
        './src/index.js', 
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: '/node_modules/',
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: 'svg-url-loader'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: htmlTemplatePath,
            favicon: "./src/images/favicon.png"
        })
    ]
}