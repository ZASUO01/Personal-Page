const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template.html',
            favicon: './src/assets/logo.png'
        })
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts'
                }
            },
            {
                test: /\.pdf$/,
                loader: 'file-loader'
            }
        ]
    }
}