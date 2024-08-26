const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin(), 
            new CssMinimizerPlugin()
        ],
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',               
                    'sass-loader'               
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ]
});
