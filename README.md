# webpack配置多页面应用
## webpack配置的多页面应用，多个入口文件,html文件自动绑定对应js
### 安装说明
***
**步骤**
1. 下载文件
2. npm install 安装依赖
3. npm run dev 
4. npm run build 
### 使用说明
***
- **新增页面pageAdd**
1. 首先在html文件夹里添加需要新增的html文件<font color='red'>pageAdd</font>.html
2. 在js文件夹里添加html文件对应的js入口文件<font color='red'>pageAdd</font>.js (*名称需和html文件名对应*)
- **添加js公共库**
1. 将公共js库如jquery等则放入js>lib文件夹中
2. 在webpack配置项中加入公共库到入口文件中
`entry: Object.assign(config.entries(), {
    // 用到什么公共lib（例如jquery.js），就把它加进vendor去，目的是将公用库单独提取打包
    'vendor': ['jquery', 'avalon']
   }),`