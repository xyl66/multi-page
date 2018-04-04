const webpack = require("webpack");
const path = require("path");
//css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 清理 dist 文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin");
const pathMap = require('../src/pathmap.json');
const nodeModPath = path.resolve(__dirname, './node_modules');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const config = require('./config.js')
//css
let extractCSS = new ExtractTextPlugin('css/[name].css?[hash]')
let cssLoader = extractCSS.extract({
    fallback: "style-loader",
    use: "css-loader"
})
module.exports = {
    entry: Object.assign(config.entries(), {
        // 用到什么公共lib（例如jquery.js），就把它加进vendor去，目的是将公用库单独提取打包
        'vendor': ['jquery', 'avalon']
    }),
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                exclude: /node_modules/,
                loader: cssLoader
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                        loader: 'file-loader',
                    
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: [/node_modules/, /lib/],
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', ".css"],
        modules: [config.srcDir, nodeModPath],
        alias: pathMap
    },
    plugins: [
        ...(config.HTMLPlugins()),
        new CommonsChunkPlugin({ //打包共用库
            name: 'vendor',
            minChunks: Infinity
        }),
        // 自动清理 dist 文件夹
        new CleanWebpackPlugin(["dist"]),
        //添加jquery
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        extractCSS
    ]
}