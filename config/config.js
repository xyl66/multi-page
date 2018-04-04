const path = require("path");
const srcDir = path.resolve(process.cwd(), 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入glob
const glob = require('glob')
const entries= function () {
    var htmlDir = path.resolve(srcDir, 'html')
    var htmlFiles = glob.sync(htmlDir + '/*.html')
    var jsDir = path.resolve(srcDir, 'js') //js文件夹
    var map = {};
    for (var i = 0; i < htmlFiles.length; i++) {
     var filePath = htmlFiles[i];
     var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
     var jsPath=jsDir+'/'+filename+'.js';
     map[filename] = jsPath;
    }
    return map;
   }
const HTMLPlugins= function () {
    var htmlDir = path.resolve(srcDir, 'html')
    var htmlFiles = glob.sync(htmlDir + '/*.html')
    var map = [];
    for (var i = 0; i < htmlFiles.length; i++) {
        var filePath = htmlFiles[i];
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        const htmlPlugin = new HtmlWebpackPlugin({
            filename: `${filename}.html`,
            template: `html-withimg-loader!${filePath}`,
            chunks: [filename,'vendor'],
        });
     map.push(htmlPlugin);
    }
    return map;
   }
   module.exports= {entries,HTMLPlugins,srcDir}