const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: [
        './entry/index.js'
    ],

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js', // 推荐使用
        chunkFilename: '[name]-[id].bundle.js', // 代码分割
        publicPath: '/',        /*没有配置这个的话，子路由访问会出错*/
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-router',
            template: './entry/index.ejs'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    resolve:{
        extensions:['.css','.js','.jsx']
    },

    /*solve refresh, btn do note that the Webpack team recommends against using the dev server in production.*/
    /*devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },*/
}