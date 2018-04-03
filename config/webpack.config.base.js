const webpack = require("webpack");
const path = require("path");
// 清理 dist 文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin")
const pathMap = require('../src/pathmap.json');
const nodeModPath = path.resolve(__dirname, './node_modules');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const config =require('./config.js') 
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
 loaders: [
 {test: /\.css$/, loader: 'style-loader!css-loader'}
 ]
},
resolve: {
 extensions: ['.js',"",".css"],
 root: [config.srcDir,nodeModPath],
 alias: pathMap,
 publicPath: '/'
},
plugins: [
    ...(config.HTMLPlugins()),
    new CommonsChunkPlugin({ //打包共用库
        name: 'vendor',
        minChunks: Infinity
    }),
    // 自动清理 dist 文件夹
    new CleanWebpackPlugin(["dist"]),
]
}