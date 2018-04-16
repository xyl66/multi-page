import "../css/style.css";
import "bootcss";
import "./lib/datapicker/dcalendar.picker.css"
import "jquery";
import "./lib/datapicker/dcalendar.picker.js"
import 'bootjs';
const avalon = require('avalon');
const vm=avalon.define({
    $id: "avalonCtrl",
    name: "Hello Avalon!",
    datas: [{
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    },
    {
        checked:false,
        id: "0CEN-I30012",
        person: "鴻富錦深圳",
        depart: "財會資訊",
        uname: "測試",
        date: "2018/3/27",
        moneytype: "RMB",
        money: "3000.00",
        status: "1-開立",
        islock: "N",
        cname: "測試",
        cstatus: "全轉採購",
    }],
    allchecked: false,
    checkAll: function (e) {
        var checked = e.target.checked
        vm.datas.forEach(function (el) {
            el.checked = checked
        })
    },
    checkOne: function (e) {
        var checked = e.target.checked
        if (checked === false) {
            vm.allchecked = false
        } else {//avalon已经为数组添加了ecma262v5的一些新方法
            vm.allchecked = vm.datas.every(function (el) {
                return el.checked
            })
        }
    }
});
//jquery 测试
$('#mydatepicker').dcalendarpicker({format: 'yyyy-mm-dd'}); //初始化日期选择器
$('.fixed-icon').click(function(){
    $('.fixed-section').toggle('slow');
})