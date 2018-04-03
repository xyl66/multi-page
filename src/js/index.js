var avalon = require('avalon');
avalon.define({
$id: "avalonCtrl",
name: "Hello Avalon!"
});
//jquery 测试
var $ = require("jquery")
$("<div>这是jquery生成的</div>").appendTo("body")