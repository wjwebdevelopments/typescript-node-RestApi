const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {

    entry: [ './source/public/js/app.js', './source/public/scss/styles.scss' ],
    output: {
        filename: '[name].bundle.js', 
        path: path.join(__dirname, './source/public/dist/'),
        clean: true
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                // indentWidth: 4,
                                outputStyle: 'compressed'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin({
            parallel: true,
          }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.bundle.css'
        })
    ]
}