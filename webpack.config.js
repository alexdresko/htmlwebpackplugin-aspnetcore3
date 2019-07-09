const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { index: './src/index.js' },
    mode: 'development',
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: '/dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './Views/Home/Index.ejs',
            filename: '../../Views/Home/Index.cshtml',
            inject: false
        })
    ]
};