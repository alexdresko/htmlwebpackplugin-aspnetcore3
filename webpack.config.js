const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: { index: './src/index.js' },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};