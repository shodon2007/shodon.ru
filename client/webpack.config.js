const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { CleanPlugin } = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
}