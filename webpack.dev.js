const { merge } = require('webpack-merge');
const path = require("path");
const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 8080,
        historyApiFallback: true, 
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader', 
                    'css-loader',   
                    'sass-loader'   
                ]
            }
        ]
    }
});
