const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    context: __dirname + '/../src',
    devServer: {
        port: 9000,
     },
    entry: __dirname + '/../src/app.module.ts',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    { loader: 'ngtemplate-loader?relativeTo=src' },
                    { loader: 'html-loader' }
                ],
                exclude: /index\.html/
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
            }
        ],
    },
    mode: 'development',
    output: {
        path: __dirname + '/../dist/',
        filename: 'app.js',
    },
    plugins: [
        new ExtractTextPlugin({
          filename: 'css/style.css',
          allChunks: true,
        }),
        new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery'
        }),
        new HtmlWebpackPlugin({template: '../index.html'}),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            modules: __dirname + '/../app/modules',
        }
    },
    stats: {
        children: true,
        // logging: 'verbose',
        colors: true,
        reasons: true
    }
}