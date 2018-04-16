import "../css/style.css";
import "../css/add.css";
import "bootcss";
import "./lib/step/iF.step.css"
import "jquery";
import 'bootjs';
import config from "./config"
var avalon = require('avalon');
var vm=avalon.define({
    $id: "avalonCtrl",
    array: config.legalPerson,
    citys: config.citys,
    paytype: config.paytype,
    idtype:[{value:"0CEN-",text:"财会资讯"},{value:"0CEE-",text:"财会资讯一"}],
    object: {a: 'aaaa', b: 'aab', c: 'acb', d: 'ccc', e: 'dddd'},
    searchs: "a",
    search:'',
    fn: function(el, index, xxx){
        return RegExp(vm.search).test(el.value)
    },
    loopClick: function(a, e) {
        this.search=a;
    },
})
//jquery 测试
$(function(){
    $("#step-1").on("click","button",function(){
        $("#step-1").hide();
        $("#step-2").show();
    })
    $("#back").click(function(){
        $("#step-2").hide();
        $("#step-1").show();
        
    })
    //右侧悬浮菜单按钮事件
    $('.fixed-icon').click(function(){
        $('.fixed-section').toggle('slow');
    })
    $("form").submit(function(e){
        e.preventDefault();
        window.location.href="./addSucess.html"
      });
})